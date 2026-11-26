(()=>{var Uo="170";var yh=0,dl=1,_h=2;var mc=1,Ih=2,fn=3,Vn=0,Me=1,gn=2,en=0,Zn=1,Rn=2,fl=3,pl=4,Mh=5,Yn=100,bh=101,Sh=102,Eh=103,wh=104,Th=200,Vh=201,Rh=202,Ph=203,Aa=204,xa=205,Lh=206,Uh=207,Dh=208,Nh=209,Fh=210,zh=211,Bh=212,Oh=213,kh=214,va=0,Ca=1,ya=2,Ti=3,_a=4,Ia=5,Ma=6,ba=7,Do=0,qh=1,Hh=2,Tn=0,No=1,Fo=2,zo=3,ls=4,Gh=5,Bo=6,Oo=7;var Ac=300,Vi=301,Ri=302,Sa=303,Ea=304,xr=306,wa=1e3,Kn=1001,Ta=1002,Xe=1003,Wh=1004;var xs=1005;var tn=1006,Or=1007;var Qn=1008;var vn=1009,xc=1010,vc=1011,rs=1012,ko=1013,$n=1014,mn=1015,je=1016,qo=1017,Ho=1018,Pi=1020,Cc=35902,yc=1021,_c=1022,We=1023,Ic=1024,Mc=1025,Si=1026,Li=1027,bc=1028,Go=1029,Sc=1030,Wo=1031;var Xo=1033,qs=33776,Hs=33777,Gs=33778,Ws=33779,Va=35840,Ra=35841,Pa=35842,La=35843,Ua=36196,Da=37492,Na=37496,Fa=37808,za=37809,Ba=37810,Oa=37811,ka=37812,qa=37813,Ha=37814,Ga=37815,Wa=37816,Xa=37817,Ya=37818,ja=37819,Ja=37820,Ka=37821,Xs=36492,Qa=36494,Za=36495,Ec=36283,$a=36284,to=36285,eo=36286;var Ys=2300,no=2301,kr=2302,gl=2400,ml=2401,Al=2402;var Xh=3200,Yh=3201;var wc=0,jh=1,wn="",xe="srgb",ki="srgb-linear",vr="linear",Qt="srgb";var ui=7680;var xl=519,Jh=512,Kh=513,Qh=514,Tc=515,Zh=516,$h=517,tu=518,eu=519,vl=35044;var Cl="300 es",An=2e3,js=2001,Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},_e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qr=Math.PI/180,io=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function nu(i,t){return(i%t+t)%t}function Hr(i,t,e){return(1-e)*i+e*t}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],g=n[5],m=n[8],A=s[0],p=s[3],d=s[6],b=s[1],M=s[4],C=s[7],V=s[2],S=s[5],E=s[8];return r[0]=a*A+o*b+l*V,r[3]=a*p+o*M+l*S,r[6]=a*d+o*C+l*E,r[1]=c*A+h*b+u*V,r[4]=c*p+h*M+u*S,r[7]=c*d+h*C+u*E,r[2]=f*A+g*b+m*V,r[5]=f*p+g*M+m*S,r[8]=f*d+g*C+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,g=c*r-a*l,m=e*u+n*f+s*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=f*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gr=new Lt;function Vc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){let i=Js("canvas");return i.style.display="block",i}var yl={};function ns(i){i in yl||(yl[i]=!0,console.warn(i))}function su(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ru(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function au(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ot={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wn?vr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _l=[.64,.33,.3,.6,.15,.06],Il=[.2126,.7152,.0722],Ml=[.3127,.329],bl=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ot.define({[ki]:{primaries:_l,whitePoint:Ml,transfer:vr,toXYZ:bl,fromXYZ:Sl,luminanceCoefficients:Il,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:_l,whitePoint:Ml,transfer:Qt,toXYZ:bl,fromXYZ:Sl,luminanceCoefficients:Il,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});var di,so=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{di===void 0&&(di=Js("canvas")),di.width=t.width,di.height=t.height;let n=di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ou=0,Ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lu=0,De=class i extends Pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=tn,a=Qn,o=We,l=vn,c=i.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=cs(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Ac;De.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],m=l[9],A=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,C=(g+1)/2,V=(d+1)/2,S=(h+f)/4,E=(u+A)/4,U=(m+p)/4;return M>C&&M>V?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=E/n):C>V?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=S/s,r=U/s):V<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),n=E/r,s=U/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-m)*(p-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-A)/b,this.z=(f-h)/b,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ro=class extends Pn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},we=class extends ro{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],g=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=g,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==f||c!==g||h!==m){let p=1-o,d=l*f+c*g+h*m+u*A,b=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let V=Math.sqrt(M),S=Math.atan2(V,d*b);p=Math.sin(p*S)/V,o=Math.sin(o*S)/V}let C=o*b;if(l=l*p+f*C,c=c*p+g*C,h=h*p+m*C,u=u*p+A*C,p===1-o){let V=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=V,c*=V,h*=V,u*=V}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],g=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*g-c*f,t[e+1]=l*m+h*f+c*u-o*g,t[e+2]=c*m+h*g+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),g=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*g*m,this._y=c*g*u-f*h*m,this._z=c*h*m+f*g*u,this._w=c*h*u-f*g*m;break;case"YXZ":this._x=f*h*u+c*g*m,this._y=c*g*u-f*h*m,this._z=c*h*m-f*g*u,this._w=c*h*u+f*g*m;break;case"ZXY":this._x=f*h*u-c*g*m,this._y=c*g*u+f*h*m,this._z=c*h*m+f*g*u,this._w=c*h*u-f*g*m;break;case"ZYX":this._x=f*h*u-c*g*m,this._y=c*g*u+f*h*m,this._z=c*h*m-f*g*u,this._w=c*h*u+f*g*m;break;case"YZX":this._x=f*h*u+c*g*m,this._y=c*g*u+f*h*m,this._z=c*h*m-f*g*u,this._w=c*h*u-f*g*m;break;case"XZY":this._x=f*h*u-c*g*m,this._y=c*g*u-f*h*m,this._z=c*h*m+f*g*u,this._w=c*h*u+f*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>u){let g=2*Math.sqrt(1+n-o-u);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>u){let g=2*Math.sqrt(1+o-n-u);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+u-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xr=new D,El=new Ln,ti=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Cs.subVectors(this.max,Zi),fi.subVectors(t.a,Zi),pi.subVectors(t.b,Zi),gi.subVectors(t.c,Zi),_n.subVectors(pi,fi),In.subVectors(gi,pi),On.subVectors(fi,gi);let e=[0,-_n.z,_n.y,0,-In.z,In.y,0,-On.z,On.y,_n.z,0,-_n.x,In.z,0,-In.x,On.z,0,-On.x,-_n.y,_n.x,0,-In.y,In.x,0,-On.y,On.x,0];return!Yr(e,fi,pi,gi,Cs)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,fi,pi,gi,Cs))?!1:(ys.crossVectors(_n,In),e=[ys.x,ys.y,ys.z],Yr(e,fi,pi,gi,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ln=[new D,new D,new D,new D,new D,new D,new D,new D],qe=new D,vs=new ti,fi=new D,pi=new D,gi=new D,_n=new D,In=new D,On=new D,Zi=new D,Cs=new D,ys=new D,kn=new D;function Yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){kn.fromArray(i,r);let o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cu=new ti,$i=new D,jr=new D,Ui=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);let e=$i.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(jr)),this.expandByPoint($i.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},cn=new D,Jr=new D,_s=new D,Mn=new D,Kr=new D,Is=new D,Qr=new D,Zs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(Jr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_s),o=Mn.dot(this.direction),l=-Mn.dot(_s),c=Mn.lengthSq(),h=Math.abs(1-a*a),u,f,g,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,g=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jr).addScaledVector(_s,f),g}intersectSphere(t,e){cn.subVectors(t.center,this.origin);let n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),Is.subVectors(n,t),Qr.crossVectors(Kr,Is);let a=this.direction.dot(Qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,t);let l=o*this.direction.dot(Is.crossVectors(Mn,Is));if(l<0)return null;let c=o*this.direction.dot(Kr.cross(Mn));if(c<0||l+c>a)return null;let h=-o*Mn.dot(Qr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,g,m,A,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,g,m,A,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,g,m,A,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=m,d[11]=A,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+m*c,e[5]=f-A*c,e[9]=-o*l,e[2]=A-f*c,e[6]=m+g*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,g=l*u,m=c*h,A=c*u;e[0]=f+A*o,e[4]=m*o-g,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=g*o-m,e[6]=A+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,g=l*u,m=c*h,A=c*u;e[0]=f-A*o,e[4]=-a*u,e[8]=m+g*o,e[1]=g+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-g,e[8]=f*c+A,e[1]=l*u,e[5]=A*c+f,e[9]=g*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-f*u,e[8]=m*u+g,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+A,e[5]=a*h,e[9]=g*u-m,e[2]=m*u-g,e[6]=o*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hu,t,uu)}lookAt(t,e,n){let s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),bn.crossVectors(n,Le),bn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),bn.crossVectors(n,Le)),bn.normalize(),Ms.crossVectors(Le,bn),s[0]=bn.x,s[4]=Ms.x,s[8]=Le.x,s[1]=bn.y,s[5]=Ms.y,s[9]=Le.y,s[2]=bn.z,s[6]=Ms.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],g=n[13],m=n[2],A=n[6],p=n[10],d=n[14],b=n[3],M=n[7],C=n[11],V=n[15],S=s[0],E=s[4],U=s[8],_=s[12],y=s[1],w=s[5],O=s[9],B=s[13],H=s[2],J=s[6],G=s[10],$=s[14],q=s[3],it=s[7],ct=s[11],yt=s[15];return r[0]=a*S+o*y+l*H+c*q,r[4]=a*E+o*w+l*J+c*it,r[8]=a*U+o*O+l*G+c*ct,r[12]=a*_+o*B+l*$+c*yt,r[1]=h*S+u*y+f*H+g*q,r[5]=h*E+u*w+f*J+g*it,r[9]=h*U+u*O+f*G+g*ct,r[13]=h*_+u*B+f*$+g*yt,r[2]=m*S+A*y+p*H+d*q,r[6]=m*E+A*w+p*J+d*it,r[10]=m*U+A*O+p*G+d*ct,r[14]=m*_+A*B+p*$+d*yt,r[3]=b*S+M*y+C*H+V*q,r[7]=b*E+M*w+C*J+V*it,r[11]=b*U+M*O+C*G+V*ct,r[15]=b*_+M*B+C*$+V*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],g=t[14],m=t[3],A=t[7],p=t[11],d=t[15];return m*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*g-n*l*g)+A*(+e*l*g-e*c*f+r*a*f-s*a*g+s*c*h-r*l*h)+p*(+e*c*u-e*o*g-r*a*u+n*a*g+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],g=t[11],m=t[12],A=t[13],p=t[14],d=t[15],b=u*p*c-A*f*c+A*l*g-o*p*g-u*l*d+o*f*d,M=m*f*c-h*p*c-m*l*g+a*p*g+h*l*d-a*f*d,C=h*A*c-m*u*c+m*o*g-a*A*g-h*o*d+a*u*d,V=m*u*l-h*A*l-m*o*f+a*A*f+h*o*p-a*u*p,S=e*b+n*M+s*C+r*V;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=b*E,t[1]=(A*f*r-u*p*r-A*s*g+n*p*g+u*s*d-n*f*d)*E,t[2]=(o*p*r-A*l*r+A*s*c-n*p*c-o*s*d+n*l*d)*E,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*g-n*l*g)*E,t[4]=M*E,t[5]=(h*p*r-m*f*r+m*s*g-e*p*g-h*s*d+e*f*d)*E,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*d-e*l*d)*E,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*g+e*l*g)*E,t[8]=C*E,t[9]=(m*u*r-h*A*r-m*n*g+e*A*g+h*n*d-e*u*d)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*g-e*o*g)*E,t[12]=V*E,t[13]=(h*A*s-m*u*s+m*n*f-e*A*f-h*n*p+e*u*p)*E,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*p-e*o*p)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,g=r*h,m=r*u,A=a*h,p=a*u,d=o*u,b=l*c,M=l*h,C=l*u,V=n.x,S=n.y,E=n.z;return s[0]=(1-(A+d))*V,s[1]=(g+C)*V,s[2]=(m-M)*V,s[3]=0,s[4]=(g-C)*S,s[5]=(1-(f+d))*S,s[6]=(p+b)*S,s[7]=0,s[8]=(m+M)*E,s[9]=(p-b)*E,s[10]=(1-(f+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=mi.set(s[0],s[1],s[2]).length(),a=mi.set(s[4],s[5],s[6]).length(),o=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);let c=1/r,h=1/a,u=1/o;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=An){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,m;if(o===An)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===js)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,g=(n+s)*h,m,A;if(o===An)m=(a+r)*u,A=-2*u;else if(o===js)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},mi=new D,He=new he,hu=new D(0,0,0),uu=new D(1,1,1),bn=new D,Ms=new D,Le=new D,wl=new he,Tl=new Ln,nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},du=0,Vl=new D,Ai=new Ln,hn=new he,bs=new D,ts=new D,fu=new D,pu=new Ln,Rl=new D(1,0,0),Pl=new D(0,1,0),Ll=new D(0,0,1),Ul={type:"added"},gu={type:"removed"},xi={type:"childadded",child:null},Zr={type:"childremoved",child:null},be=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new nn,n=new Ln,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Lt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Rl,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rl,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(ts,bs,this.up):hn.lookAt(bs,ts,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(hn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gu),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),g=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new D(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=new D,un=new D,$r=new D,dn=new D,vi=new D,Ci=new D,Dl=new D,ta=new D,ea=new D,na=new D,ia=new ce,sa=new ce,ra=new ce,jn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ge.subVectors(t,e),s.cross(Ge);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ge.subVectors(s,e),un.subVectors(n,e),$r.subVectors(t,e);let a=Ge.dot(Ge),o=Ge.dot(un),l=Ge.dot($r),c=un.dot(un),h=un.dot($r),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,g=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-g-m,m,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return Ge.subVectors(n,e),un.subVectors(t,e),Ge.cross(un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Ge.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;vi.subVectors(s,n),Ci.subVectors(r,n),ta.subVectors(t,n);let l=vi.dot(ta),c=Ci.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);let h=vi.dot(ea),u=Ci.dot(ea);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(vi,a);na.subVectors(t,r);let g=vi.dot(na),m=Ci.dot(na);if(m>=0&&g<=m)return e.copy(r);let A=g*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ci,o);let p=h*m-g*u;if(p<=0&&u-h>=0&&g-m>=0)return Dl.subVectors(r,s),o=(u-h)/(u-h+(g-m)),e.copy(s).addScaledVector(Dl,o);let d=1/(p+A+f);return a=A*d,o=f*d,e.copy(n).addScaledVector(vi,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ot.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ot.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ot.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ot.workingColorSpace){if(t=nu(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return Ot.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=Rc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Ot.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=xe){Ot.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(Ss);let n=Hr(Sn.h,Ss.h,e),s=Hr(Sn.s,Ss.s,e),r=Hr(Sn.l,Ss.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Et;Et.NAMES=Rc;var mu=0,Un=class extends Pn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=cs(),this.name="",this.blending=Zn,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=xa,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},sn=class extends Un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new D,Es=new Mt,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}};var tr=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var er=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},Au=0,Be=new he,oa=new be,yi=new D,Ue=new ti,es=new ti,Ae=new D,fe=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vc(t)?er:tr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ue.min,es.min),Ue.expandByPoint(Ae),Ae.addVectors(Ue.max,es.max),Ue.expandByPoint(Ae)):(Ue.expandByPoint(es.min),Ue.expandByPoint(es.max))}Ue.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(t,c),Ae.add(yi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;let c=new D,h=new D,u=new D,f=new Mt,g=new Mt,m=new Mt,A=new D,p=new D;function d(U,_,y){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,_),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),g.sub(f),m.sub(f);let w=1/(g.x*m.y-m.x*g.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-g.y).multiplyScalar(w),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(w),o[U].add(A),o[_].add(A),o[y].add(A),l[U].add(p),l[_].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,_=b.length;U<_;++U){let y=b[U],w=y.start,O=y.count;for(let B=w,H=w+O;B<H;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new D,C=new D,V=new D,S=new D;function E(U){V.fromBufferAttribute(s,U),S.copy(V);let _=o[U];M.copy(_),M.sub(V.multiplyScalar(V.dot(_))).normalize(),C.crossVectors(S,_);let w=C.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,w)}for(let U=0,_=b.length;U<_;++U){let y=b[U],w=y.start,O=y.count;for(let B=w,H=w+O;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,g=t.count;f<g;f+=3){let m=t.getX(f+0),A=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),g=0,m=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*h;for(let d=0;d<h;d++)f[m++]=c[g++]}return new ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],g=t(f,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nl=new he,qn=new Zs,ws=new Ui,Fl=new D,Ts=new D,Vs=new D,Rs=new D,la=new D,Ps=new D,zl=new D,Ls=new D,Yt=class extends be{constructor(t=new fe,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(la.fromBufferAttribute(u,t),a?Ps.addScaledVector(la,h):Ps.addScaledVector(la.sub(e),h))}e.add(Ps)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(ws.containsPoint(qn.origin)===!1&&(qn.intersectSphere(ws,Fl)===null||qn.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),qn.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let p=f[m],d=a[p.materialIndex],b=Math.max(p.start,g.start),M=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let C=b,V=M;C<V;C+=3){let S=o.getX(C),E=o.getX(C+1),U=o.getX(C+2);s=Us(this,d,t,n,c,h,u,S,E,U),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let p=m,d=A;p<d;p+=3){let b=o.getX(p),M=o.getX(p+1),C=o.getX(p+2);s=Us(this,a,t,n,c,h,u,b,M,C),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let p=f[m],d=a[p.materialIndex],b=Math.max(p.start,g.start),M=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let C=b,V=M;C<V;C+=3){let S=C,E=C+1,U=C+2;s=Us(this,d,t,n,c,h,u,S,E,U),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let p=m,d=A;p<d;p+=3){let b=p,M=p+1,C=p+2;s=Us(this,a,t,n,c,h,u,b,M,C),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function xu(i,t,e,n,s,r,a,o){let l;if(t.side===Me?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Vn,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ls);return c<e.near||c>e.far?null:{distance:c,point:Ls.clone(),object:i}}function Us(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ts),i.getVertexPosition(l,Vs),i.getVertexPosition(c,Rs);let h=xu(i,t,e,n,Ts,Vs,Rs,zl);if(h){let u=new D;jn.getBarycoord(zl,Ts,Vs,Rs,u),s&&(h.uv=jn.getInterpolatedAttribute(s,o,l,c,u,new Mt)),r&&(h.uv1=jn.getInterpolatedAttribute(r,o,l,c,u,new Mt)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};jn.getNormal(Ts,Vs,Rs,f.normal),h.face=f,h.barycoord=u}return h}var ei=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,g=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(A,p,d,b,M,C,V,S,E,U,_){let y=C/E,w=V/U,O=C/2,B=V/2,H=S/2,J=E+1,G=U+1,$=0,q=0,it=new D;for(let ct=0;ct<G;ct++){let yt=ct*w-B;for(let Ft=0;Ft<J;Ft++){let $t=Ft*y-O;it[A]=$t*b,it[p]=yt*M,it[d]=H,c.push(it.x,it.y,it.z),it[A]=0,it[p]=0,it[d]=S>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ft/E),u.push(1-ct/U),$+=1}}for(let ct=0;ct<U;ct++)for(let yt=0;yt<E;yt++){let Ft=f+yt+J*ct,$t=f+yt+J*(ct+1),X=f+(yt+1)+J*(ct+1),tt=f+(yt+1)+J*ct;l.push(Ft,$t,tt),l.push($t,X,tt),q+=6}o.addGroup(g,q,_),g+=q,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Di(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){let t={};for(let e=0;e<i.length;e++){let n=Di(i[e]);for(let s in n)t[s]=n[s]}return t}function vu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ot.workingColorSpace}var Dn={clone:Di,merge:Se},Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pe=class extends Un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},nr=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},En=new D,Bl=new Mt,Ol=new Mt,Ee=class extends nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,Bl,Ol),e.subVectors(Ol,Bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_i=-90,Ii=1,oo=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(_i,Ii,t,e);s.layers=this.layers,this.add(s);let r=new Ee(_i,Ii,t,e);r.layers=this.layers,this.add(r);let a=new Ee(_i,Ii,t,e);a.layers=this.layers,this.add(a);let o=new Ee(_i,Ii,t,e);o.layers=this.layers,this.add(o);let l=new Ee(_i,Ii,t,e);l.layers=this.layers,this.add(l);let c=new Ee(_i,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,g),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ir=class extends De{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},lo=class extends we{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ir(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:en});r.uniforms.tEquirect.value=e;let a=new Yt(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=tn),new oo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ca=new D,_u=new D,Iu=new Lt,pn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ca.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Iu.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hn=new Ui,Ds=new D,as=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],g=s[8],m=s[9],A=s[10],p=s[11],d=s[12],b=s[13],M=s[14],C=s[15];if(n[0].setComponents(l-r,f-c,p-g,C-d).normalize(),n[1].setComponents(l+r,f+c,p+g,C+d).normalize(),n[2].setComponents(l+a,f+h,p+m,C+b).normalize(),n[3].setComponents(l-a,f-h,p-m,C-b).normalize(),n[4].setComponents(l-o,f-u,p-A,C-M).normalize(),e===An)n[5].setComponents(l+o,f+u,p+A,C+M).normalize();else if(e===js)n[5].setComponents(o,u,A,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ds.x=s.normal.x>0?t.max.x:t.min.x,Ds.y=s.normal.y>0?t.max.y:t.min.y,Ds.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,m)=>g.start-m.start);let f=0;for(let g=1;g<u.length;g++){let m=u[f],A=u[g];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let g=0,m=u.length;g<m;g++){let A=u[g];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sr=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,g=[],m=[],A=[],p=[];for(let d=0;d<h;d++){let b=d*f-a;for(let M=0;M<c;M++){let C=M*u-r;m.push(C,-b,0),A.push(0,0,1),p.push(M/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let M=b+c*d,C=b+c*(d+1),V=b+1+c*(d+1),S=b+1+c*d;g.push(M,C,S),g.push(C,V,S)}this.setIndex(g),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Su=`#ifdef USE_ALPHAHASH
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
#endif`,Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
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
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,Bu=`#ifdef USE_BUMPMAP
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
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ku=`vec3 transformedNormal = objectNormal;
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
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
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
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
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
#endif`,Id=`struct PhysicalMaterial {
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
}`,Md=`
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
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
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hf=`float getShadowMask() {
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
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sf=`uniform sampler2D t2D;
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`#include <common>
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
}`,Pf=`#if DEPTH_PACKING == 3200
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
}`,Lf=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
}`,zf=`uniform vec3 diffuse;
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
}`,Bf=`#include <common>
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
}`,Of=`uniform vec3 diffuse;
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
}`,kf=`#define LAMBERT
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
}`,qf=`#define LAMBERT
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
}`,Hf=`#define MATCAP
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
}`,Gf=`#define MATCAP
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
}`,Wf=`#define NORMAL
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
}`,Xf=`#define NORMAL
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
}`,Yf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,Jf=`#define STANDARD
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
}`,Kf=`#define STANDARD
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
}`,Qf=`#define TOON
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
}`,Zf=`#define TOON
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
}`,$f=`uniform float size;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,np=`uniform vec3 color;
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
}`,ip=`uniform float rotation;
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
}`,sp=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:bu,alphahash_pars_fragment:Su,alphamap_fragment:Eu,alphamap_pars_fragment:wu,alphatest_fragment:Tu,alphatest_pars_fragment:Vu,aomap_fragment:Ru,aomap_pars_fragment:Pu,batching_pars_vertex:Lu,batching_vertex:Uu,begin_vertex:Du,beginnormal_vertex:Nu,bsdfs:Fu,iridescence_fragment:zu,bumpmap_pars_fragment:Bu,clipping_planes_fragment:Ou,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Hu,color_fragment:Gu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:Yu,common:ju,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Ku,displacementmap_pars_vertex:Qu,displacementmap_vertex:Zu,emissivemap_fragment:$u,emissivemap_pars_fragment:td,colorspace_fragment:ed,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:ad,envmap_physical_pars_fragment:Ad,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:gd,lights_pars_begin:md,lights_toon_fragment:xd,lights_toon_pars_fragment:vd,lights_phong_fragment:Cd,lights_phong_pars_fragment:yd,lights_physical_fragment:_d,lights_physical_pars_fragment:Id,lights_fragment_begin:Md,lights_fragment_maps:bd,lights_fragment_end:Sd,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Vd,map_fragment:Rd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Ud,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Nd,morphinstance_vertex:Fd,morphcolor_vertex:zd,morphnormal_vertex:Bd,morphtarget_pars_vertex:Od,morphtarget_vertex:kd,normal_fragment_begin:qd,normal_fragment_maps:Hd,normal_pars_fragment:Gd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:Qd,opaque_fragment:Zd,packing:$d,premultiplied_alpha_fragment:tf,project_vertex:ef,dithering_fragment:nf,dithering_pars_fragment:sf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:of,shadowmap_pars_vertex:lf,shadowmap_vertex:cf,shadowmask_pars_fragment:hf,skinbase_vertex:uf,skinning_pars_vertex:df,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:gf,specularmap_pars_fragment:mf,tonemapping_fragment:Af,tonemapping_pars_fragment:xf,transmission_fragment:vf,transmission_pars_fragment:Cf,uv_pars_fragment:yf,uv_pars_vertex:_f,uv_vertex:If,worldpos_vertex:Mf,background_vert:bf,background_frag:Sf,backgroundCube_vert:Ef,backgroundCube_frag:wf,cube_vert:Tf,cube_frag:Vf,depth_vert:Rf,depth_frag:Pf,distanceRGBA_vert:Lf,distanceRGBA_frag:Uf,equirect_vert:Df,equirect_frag:Nf,linedashed_vert:Ff,linedashed_frag:zf,meshbasic_vert:Bf,meshbasic_frag:Of,meshlambert_vert:kf,meshlambert_frag:qf,meshmatcap_vert:Hf,meshmatcap_frag:Gf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:Yf,meshphong_frag:jf,meshphysical_vert:Jf,meshphysical_frag:Kf,meshtoon_vert:Qf,meshtoon_frag:Zf,points_vert:$f,points_frag:tp,shadow_vert:ep,shadow_frag:np,sprite_vert:ip,sprite_frag:sp},et={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},$e={basic:{uniforms:Se([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Se([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Se([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Se([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Se([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Se([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Se([et.points,et.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Se([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Se([et.common,et.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Se([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Se([et.sprite,et.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Se([et.common,et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Se([et.lights,et.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};$e.physical={uniforms:Se([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var Ns={r:0,b:0,g:0},Gn=new nn,rp=new he;function ap(i,t,e,n,s,r,a){let o=new Et(0),l=r===!0?0:1,c,h,u=null,f=0,g=null;function m(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function A(b){let M=!1,C=m(b);C===null?d(o,l):C&&C.isColor&&(d(C,1),M=!0);let V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,M){let C=m(M);C&&(C.isCubeTexture||C.mapping===xr)?(h===void 0&&(h=new Yt(new ei(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:Di($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(M.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Gn)),h.material.toneMapped=Ot.getTransfer(C.colorSpace)!==Qt,(u!==C||f!==C.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,g=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Yt(new sr(2,2),new pe({name:"BackgroundMaterial",uniforms:Di($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ot.getTransfer(C.colorSpace)!==Qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,g=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(Ns,Pc(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:A,addToRenderList:p}}function op(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,w,O,B,H){let J=!1,G=u(B,O,w);r!==G&&(r=G,c(r.object)),J=g(y,B,O,H),J&&m(y,B,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,C(y,w,O,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,w,O){let B=O.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let J=H[w.id];J===void 0&&(J={},H[w.id]=J);let G=J[B];return G===void 0&&(G=f(l()),J[B]=G),G}function f(y){let w=[],O=[],B=[];for(let H=0;H<e;H++)w[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function g(y,w,O,B){let H=r.attributes,J=w.attributes,G=0,$=O.getAttributes();for(let q in $)if($[q].location>=0){let ct=H[q],yt=J[q];if(yt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),ct===void 0||ct.attribute!==yt||yt&&ct.data!==yt.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(y,w,O,B){let H={},J=w.attributes,G=0,$=O.getAttributes();for(let q in $)if($[q].location>=0){let ct=J[q];ct===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor));let yt={};yt.attribute=ct,ct&&ct.data&&(yt.data=ct.data),H[q]=yt,G++}r.attributes=H,r.attributesNum=G,r.index=B}function A(){let y=r.newAttributes;for(let w=0,O=y.length;w<O;w++)y[w]=0}function p(y){d(y,0)}function d(y,w){let O=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;O[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),H[y]!==w&&(i.vertexAttribDivisor(y,w),H[y]=w)}function b(){let y=r.newAttributes,w=r.enabledAttributes;for(let O=0,B=w.length;O<B;O++)w[O]!==y[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function M(y,w,O,B,H,J,G){G===!0?i.vertexAttribIPointer(y,w,O,H,J):i.vertexAttribPointer(y,w,O,B,H,J)}function C(y,w,O,B){A();let H=B.attributes,J=O.getAttributes(),G=w.defaultAttributeValues;for(let $ in J){let q=J[$];if(q.location>=0){let it=H[$];if(it===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){let ct=it.normalized,yt=it.itemSize,Ft=t.get(it);if(Ft===void 0)continue;let $t=Ft.buffer,X=Ft.type,tt=Ft.bytesPerElement,At=X===i.INT||X===i.UNSIGNED_INT||it.gpuType===ko;if(it.isInterleavedBufferAttribute){let st=it.data,St=st.stride,Vt=it.offset;if(st.isInstancedInterleavedBuffer){for(let zt=0;zt<q.locationSize;zt++)d(q.location+zt,st.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let zt=0;zt<q.locationSize;zt++)p(q.location+zt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let zt=0;zt<q.locationSize;zt++)M(q.location+zt,yt/q.locationSize,X,ct,St*tt,(Vt+yt/q.locationSize*zt)*tt,At)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<q.locationSize;st++)d(q.location+st,it.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<q.locationSize;st++)p(q.location+st);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let st=0;st<q.locationSize;st++)M(q.location+st,yt/q.locationSize,X,ct,yt*tt,yt/q.locationSize*st*tt,At)}}else if(G!==void 0){let ct=G[$];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(q.location,ct);break;case 3:i.vertexAttrib3fv(q.location,ct);break;case 4:i.vertexAttrib4fv(q.location,ct);break;default:i.vertexAttrib1fv(q.location,ct)}}}}b()}function V(){U();for(let y in n){let w=n[y];for(let O in w){let B=w[O];for(let H in B)h(B[H].object),delete B[H];delete w[O]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let w=n[y.id];for(let O in w){let B=w[O];for(let H in B)h(B[H].object),delete B[H];delete w[O]}delete n[y.id]}function E(y){for(let w in n){let O=n[w];if(O[y.id]===void 0)continue;let B=O[y.id];for(let H in B)h(B[H].object),delete B[H];delete O[y.id]}}function U(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:_,dispose:V,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:p,disableUnusedAttributes:b}}function lp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m];e.update(g,n,1)}function l(c,h,u,f){if(u===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==We&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let U=E===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==vn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==mn&&!U)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:C,vertexTextures:V,maxSamples:S}}function hp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new pn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let g=u.length!==0||f||n!==0||s;return s=f,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,g){let m=u.clippingPlanes,A=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,M=b*4,C=d.clippingState||null;l.value=C,C=h(m,f,M,g);for(let V=0;V!==M;++V)C[V]=e[V];d.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,g,m){let A=u!==null?u.length:0,p=null;if(A!==0){if(p=l.value,m!==!0||p===null){let d=g+A*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,C=g;M!==A;++M,C+=4)a.copy(u[M]).applyMatrix4(b,o),a.normal.toArray(p,C),p[C+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}function up(i){let t=new WeakMap;function e(a,o){return o===Sa?a.mapping=Vi:o===Ea&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Sa||o===Ea)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new lo(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ni=class extends nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bi=4,kl=[.125,.215,.35,.446,.526,.582],Jn=20,ha=new Ni,ql=new Et,ua=null,da=0,fa=0,pa=!1,Xn=(1+Math.sqrt(5))/2,Mi=1/Xn,Hl=[new D(-Xn,Mi,0),new D(Xn,Mi,0),new D(-Mi,0,Xn),new D(Mi,0,Xn),new D(0,Xn,-Mi),new D(0,Xn,Mi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:je,format:We,colorSpace:ki,depthBuffer:!1},s=Gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(r)),this._blurMaterial=fp(r,t,e)}return s}_compileMaterial(t){let e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){let o=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ql),h.toneMapping=Tn,h.autoClear=!1;let g=new sn({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),m=new Yt(new ei,g),A=!1,p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,A=!0):(g.color.copy(ql),A=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let M=this._cubeSize;Fs(s,b*M,d>2?M:0,M,M),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vi||t.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hl[(s-r-1)%Hl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Yt(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Jn-1),A=r/m,p=isFinite(r)?1+Math.floor(h*A):Jn;p>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);let d=[],b=0;for(let E=0;E<Jn;++E){let U=E/A,_=Math.exp(-U*U/2);d.push(_),E===0?b+=_:E<p&&(b+=2*_)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let C=this._sizeLods[s],V=3*C*(s>M-bi?s-M+bi:0),S=4*(this._cubeSize-C);Fs(e,V,S,3*C,2*C),l.setRenderTarget(e),l.render(u,ha)}};function dp(i){let t=[],e=[],n=[],s=i,r=i-bi+1+kl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bi?l=kl[a-i+bi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,m=6,A=3,p=2,d=1,b=new Float32Array(A*m*g),M=new Float32Array(p*m*g),C=new Float32Array(d*m*g);for(let S=0;S<g;S++){let E=S%3*2/3-1,U=S>2?0:-1,_=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];b.set(_,A*m*S),M.set(f,p*m*S);let y=[S,S,S,S,S,S];C.set(y,d*m*S)}let V=new fe;V.setAttribute("position",new ve(b,A)),V.setAttribute("uv",new ve(M,p)),V.setAttribute("faceIndex",new ve(C,d)),t.push(V),s>bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gl(i,t,e){let n=new we(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fp(i,t,e){let n=new Float32Array(Jn),s=new D(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Wl(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Xl(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function pp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Sa||l===Ea,h=l===Vi||l===Ri;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new rr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let g=o.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new rr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mp(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let p=0,d=A.length;p<d;p++)t.remove(A[p])}f.removeEventListener("dispose",a),delete s[f.id];let g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let g=u.morphAttributes;for(let m in g){let A=g[m];for(let p=0,d=A.length;p<d;p++)t.update(A[p],i.ARRAY_BUFFER)}}function c(u){let f=[],g=u.index,m=u.attributes.position,A=0;if(g!==null){let b=g.array;A=g.version;for(let M=0,C=b.length;M<C;M+=3){let V=b[M+0],S=b[M+1],E=b[M+2];f.push(V,S,S,E,E,V)}}else if(m!==void 0){let b=m.array;A=m.version;for(let M=0,C=b.length/3-1;M<C;M+=3){let V=M+0,S=M+1,E=M+2;f.push(V,S,S,E,E,V)}}else return;let p=new(Vc(f)?er:tr)(f,1);p.version=A;let d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ap(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*a),e.update(g,n,1)}function c(f,g,m){m!==0&&(i.drawElementsInstanced(n,g,r,f*a,m),e.update(g,n,m))}function h(f,g,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,m);let p=0;for(let d=0;d<m;d++)p+=g[d];e.update(p,n,1)}function u(f,g,m,A){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,g[d],A[d]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,A,0,m);let d=0;for(let b=0;b<m;b++)d+=g[b]*A[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,t,e){let n=new WeakMap,s=new ce;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let g=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;g===!0&&(M=1),m===!0&&(M=2),A===!0&&(M=3);let C=o.attributes.position.count*M,V=1;C>t.maxTextureSize&&(V=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let S=new Float32Array(C*V*4*u),E=new Qs(S,C,V,u);E.type=mn,E.needsUpdate=!0;let U=M*4;for(let y=0;y<u;y++){let w=p[y],O=d[y],B=b[y],H=C*V*4*y;for(let J=0;J<w.count;J++){let G=J*U;g===!0&&(s.fromBufferAttribute(w,J),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(O,J),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),A===!0&&(s.fromBufferAttribute(B,J),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new Mt(C,V)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<c.length;A++)g+=c[A];let m=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ar=class extends De{constructor(t,e,n,s,r,a,o,l,c,h=Si){if(h!==Si&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=$n),n===void 0&&h===Li&&(n=Pi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uc=new De,Yl=new ar(1,1),Dc=new Qs,Nc=new ao,Fc=new ir,jl=[],Jl=[],Kl=new Float32Array(16),Ql=new Float32Array(9),Zl=new Float32Array(4);function qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jl[s];if(r===void 0&&(r=new Float32Array(s),jl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=Jl[t];e===void 0&&(e=new Int32Array(t),Jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function bp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),me(e,n)}}function Sp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Ql.set(n),i.uniformMatrix3fv(this.addr,!1,Ql),me(e,n)}}function Ep(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),me(e,n)}}function wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Pp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Np(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=Tc,r=Yl):r=Uc,e.setTexture2D(t||r,s)}function Fp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nc,s)}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fc,s)}function Bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dc,s)}function Op(i){switch(i){case 5126:return yp;case 35664:return _p;case 35665:return Ip;case 35666:return Mp;case 35674:return bp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return wp;case 35667:case 35671:return Tp;case 35668:case 35672:return Vp;case 35669:case 35673:return Rp;case 5125:return Pp;case 36294:return Lp;case 36295:return Up;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Bp}}function kp(i,t){i.uniform1fv(this.addr,t)}function qp(i,t){let e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Hp(i,t){let e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Gp(i,t){let e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Wp(i,t){let e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xp(i,t){let e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yp(i,t){let e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jp(i,t){i.uniform1iv(this.addr,t)}function Jp(i,t){i.uniform2iv(this.addr,t)}function Kp(i,t){i.uniform3iv(this.addr,t)}function Qp(i,t){i.uniform4iv(this.addr,t)}function Zp(i,t){i.uniform1uiv(this.addr,t)}function $p(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){let n=this.cache,s=t.length,r=Cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uc,r[a])}function ig(i,t,e){let n=this.cache,s=t.length,r=Cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nc,r[a])}function sg(i,t,e){let n=this.cache,s=t.length,r=Cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fc,r[a])}function rg(i,t,e){let n=this.cache,s=t.length,r=Cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dc,r[a])}function ag(i){switch(i){case 5126:return kp;case 35664:return qp;case 35665:return Hp;case 35666:return Gp;case 35674:return Wp;case 35675:return Xp;case 35676:return Yp;case 5124:case 35670:return jp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return Qp;case 5125:return Zp;case 36294:return $p;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}var co=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Op(e.type)}},ho=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}},uo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ga=/(\w+)(\])?(\[|\.)?/g;function $l(i,t){i.seq.push(t),i.map[t.id]=t}function og(i,t,e){let n=i.name,s=n.length;for(ga.lastIndex=0;;){let r=ga.exec(n),a=ga.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$l(e,c===void 0?new co(o,i,t):new ho(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new uo(o),$l(e,u)),e=u}}}var wi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);og(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function tc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lg=37297,cg=0;function hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ec=new Lt;function ug(i){Ot._getMatrix(ec,Ot.workingColorSpace,i);let t=`mat3( ${ec.elements.map(e=>e.toFixed(4))} )`;switch(Ot.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hg(i.getShaderSource(t),a)}else return s}function dg(i,t){let e=ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fg(i,t){let e;switch(t){case No:e="Linear";break;case Fo:e="Reinhard";break;case zo:e="Cineon";break;case ls:e="ACESFilmic";break;case Bo:e="AgX";break;case Oo:e="Neutral";break;case Gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zs=new D;function pg(){Ot.getLuminanceCoefficients(zs);let i=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function mg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function is(i){return i!==""}function ic(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(i){return i.replace(xg,Cg)}var vg=new Map;function Cg(i,t){let e=Dt[t];if(e===void 0){let n=vg.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fo(e)}var yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(i){return i.replace(yg,_g)}function _g(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ig(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Ri:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ri:t="ENVMAP_MODE_REFRACTION";break}return t}function Sg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Do:t="ENVMAP_BLENDING_MULTIPLY";break;case qh:t="ENVMAP_BLENDING_MIX";break;case Hh:t="ENVMAP_BLENDING_ADD";break}return t}function Eg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ig(e),c=Mg(e),h=bg(e),u=Sg(e),f=Eg(e),g=gg(e),m=mg(r),A=s.createProgram(),p,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(is).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(is).join(`
`),d.length>0&&(d+=`
`)):(p=[ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),d=[ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,dg("linearToOutputTexel",e.outputColorSpace),pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),a=fo(a),a=ic(a,e),a=sc(a,e),o=fo(o),o=ic(o,e),o=sc(o,e),a=rc(a),o=rc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=b+p+a,C=b+d+o,V=tc(s,s.VERTEX_SHADER,M),S=tc(s,s.FRAGMENT_SHADER,C);s.attachShader(A,V),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(A).trim(),B=s.getShaderInfoLog(V).trim(),H=s.getShaderInfoLog(S).trim(),J=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,V,S);else{let $=nc(s,V,"vertex"),q=nc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+$+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||H==="")&&(G=!1);G&&(w.diagnostics={runnable:J,programLog:O,vertexShader:{log:B,prefix:p},fragmentShader:{log:H,prefix:d}})}s.deleteShader(V),s.deleteShader(S),U=new wi(s,A),_=Ag(s,A)}let U;this.getUniforms=function(){return U===void 0&&E(this),U};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(A,lg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=S,this}var Tg=0,po=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new go(t),e.set(t,n)),n}},go=class{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}};function Vg(i,t,e,n,s,r,a){let o=new $s,l=new po,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,y,w,O,B){let H=O.fog,J=B.geometry,G=_.isMeshStandardMaterial?O.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),q=$&&$.mapping===xr?$.image.height:null,it=m[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=ct!==void 0?ct.length:0,Ft=0;J.morphAttributes.position!==void 0&&(Ft=1),J.morphAttributes.normal!==void 0&&(Ft=2),J.morphAttributes.color!==void 0&&(Ft=3);let $t,X,tt,At;if(it){let Zt=$e[it];$t=Zt.vertexShader,X=Zt.fragmentShader}else $t=_.vertexShader,X=_.fragmentShader,l.update(_),tt=l.getVertexShaderID(_),At=l.getFragmentShaderID(_);let st=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,oe=!!_.map,Gt=!!_.matcap,ue=!!$,L=!!_.aoMap,Fe=!!_.lightMap,kt=!!_.bumpMap,qt=!!_.normalMap,It=!!_.displacementMap,ie=!!_.emissiveMap,_t=!!_.metalnessMap,I=!!_.roughnessMap,x=_.anisotropy>0,N=_.clearcoat>0,Y=_.dispersion>0,K=_.iridescence>0,W=_.sheen>0,vt=_.transmission>0,rt=x&&!!_.anisotropyMap,ht=N&&!!_.clearcoatMap,Wt=N&&!!_.clearcoatNormalMap,Q=N&&!!_.clearcoatRoughnessMap,ut=K&&!!_.iridescenceMap,bt=K&&!!_.iridescenceThicknessMap,wt=W&&!!_.sheenColorMap,dt=W&&!!_.sheenRoughnessMap,Ht=!!_.specularMap,Ut=!!_.specularColorMap,ee=!!_.specularIntensityMap,T=vt&&!!_.transmissionMap,nt=vt&&!!_.thicknessMap,k=!!_.gradientMap,j=!!_.alphaMap,lt=_.alphaTest>0,at=!!_.alphaHash,Rt=!!_.extensions,le=Tn;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(le=i.toneMapping);let ye={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:$t,fragmentShader:X,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:At,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ki,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:Gt,envMap:ue,envMapMode:ue&&$.mapping,envMapCubeUVHeight:q,aoMap:L,lightMap:Fe,bumpMap:kt,normalMap:qt,displacementMap:f&&It,emissiveMap:ie,normalMapObjectSpace:qt&&_.normalMapType===jh,normalMapTangentSpace:qt&&_.normalMapType===wc,metalnessMap:_t,roughnessMap:I,anisotropy:x,anisotropyMap:rt,clearcoat:N,clearcoatMap:ht,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:K,iridescenceMap:ut,iridescenceThicknessMap:bt,sheen:W,sheenColorMap:wt,sheenRoughnessMap:dt,specularMap:Ht,specularColorMap:Ut,specularIntensityMap:ee,transmission:vt,transmissionMap:T,thicknessMap:nt,gradientMap:k,opaque:_.transparent===!1&&_.blending===Zn&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:at,combine:_.combine,mapUv:oe&&A(_.map.channel),aoMapUv:L&&A(_.aoMap.channel),lightMapUv:Fe&&A(_.lightMap.channel),bumpMapUv:kt&&A(_.bumpMap.channel),normalMapUv:qt&&A(_.normalMap.channel),displacementMapUv:It&&A(_.displacementMap.channel),emissiveMapUv:ie&&A(_.emissiveMap.channel),metalnessMapUv:_t&&A(_.metalnessMap.channel),roughnessMapUv:I&&A(_.roughnessMap.channel),anisotropyMapUv:rt&&A(_.anisotropyMap.channel),clearcoatMapUv:ht&&A(_.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&A(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&A(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&A(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(_.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&A(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&A(_.sheenRoughnessMap.channel),specularMapUv:Ht&&A(_.specularMap.channel),specularColorMapUv:Ut&&A(_.specularColorMap.channel),specularIntensityMapUv:ee&&A(_.specularIntensityMap.channel),transmissionMapUv:T&&A(_.transmissionMap.channel),thicknessMapUv:nt&&A(_.thicknessMap.channel),alphaMapUv:j&&A(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(qt||x),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(oe||j),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&Ot.getTransfer(_.map.colorSpace)===Qt,decodeVideoTextureEmissive:ie&&_.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(_.emissiveMap.colorSpace)===Qt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Me,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Rt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&_.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function d(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)y.push(w),y.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(b(y,_),M(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function b(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function C(_){let y=m[_.type],w;if(y){let O=$e[y];w=Dn.clone(O.uniforms)}else w=_.uniforms;return w}function V(_,y){let w;for(let O=0,B=h.length;O<B;O++){let H=h[O];if(H.cacheKey===y){w=H,++w.usedTimes;break}}return w===void 0&&(w=new wg(i,y,_,r),h.push(w)),w}function S(_){if(--_.usedTimes===0){let y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function E(_){l.remove(_)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:C,acquireProgram:V,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:U}}function Rg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,g,m,A,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:g,groupOrder:m,renderOrder:u.renderOrder,z:A,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=g,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=A,d.group=p),t++,d}function o(u,f,g,m,A,p){let d=a(u,f,g,m,A,p);g.transmission>0?n.push(d):g.transparent===!0?s.push(d):e.push(d)}function l(u,f,g,m,A,p){let d=a(u,f,g,m,A,p);g.transmission>0?n.unshift(d):g.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Pg),n.length>1&&n.sort(f||oc),s.length>1&&s.sort(f||oc)}function h(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Lg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new lc,i.set(n,[a])):s>=r.length?(a=new lc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Et};break;case"SpotLight":e={position:new D,direction:new D,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Dg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ng=0;function Fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zg(i){let t=new Ug,e=Dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new he,a=new he;function o(c){let h=0,u=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let g=0,m=0,A=0,p=0,d=0,b=0,M=0,C=0,V=0,S=0,E=0;c.sort(Fg);for(let _=0,y=c.length;_<y;_++){let w=c[_],O=w.color,B=w.intensity,H=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],B);E++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $=w.shadow,q=e.get(w);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=w.shadow.matrix,b++}n.directional[g]=G,g++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[A]=G;let $=w.shadow;if(w.map&&(n.spotLightMap[V]=w.map,V++,$.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[A]=$.matrix,w.castShadow){let q=e.get(w);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,n.spotShadow[A]=q,n.spotShadowMap[A]=J,C++}A++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=G,p++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let $=w.shadow,q=e.get(w);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=w.shadow.matrix,M++}n.point[m]=G,m++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(B),G.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[d]=G,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==A||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==b||U.numPointShadows!==M||U.numSpotShadows!==C||U.numSpotMaps!==V||U.numLightProbes!==E)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=p,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=C+V-S,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,U.directionalLength=g,U.pointLength=m,U.spotLength=A,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=b,U.numPointShadows=M,U.numSpotShadows=C,U.numSpotMaps=V,U.numLightProbes=E,n.version=Ng++)}function l(c,h){let u=0,f=0,g=0,m=0,A=0,p=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){let M=c[d];if(M.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),u++}else if(M.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let C=n.rectArea[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let C=n.hemi[A];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),A++}}}return{setup:o,setupView:l,state:n}}function cc(i){let t=new zg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Bg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new cc(i),t.set(s,[o])):r>=a.length?(o=new cc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var mo=class extends Un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ao=class extends Un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`;function qg(i,t,e){let n=new as,s=new Mt,r=new Mt,a=new ce,o=new mo({depthPacking:Yh}),l=new Ao,c={},h=e.maxTextureSize,u={[Vn]:Me,[Me]:Vn,[gn]:gn},f=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Og,fragmentShader:kg}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let m=new fe;m.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Yt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let d=this.type;this.render=function(S,E,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(en),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=d!==fn&&this.type===fn,H=d===fn&&this.type!==fn;for(let J=0,G=S.length;J<G;J++){let $=S[J],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let it=q.getFrameExtents();if(s.multiply(it),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,q.mapSize.y=r.y)),q.map===null||B===!0||H===!0){let yt=this.type!==fn?{minFilter:Xe,magFilter:Xe}:{};q.map!==null&&q.map.dispose(),q.map=new we(s.x,s.y,yt),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let ct=q.getViewportCount();for(let yt=0;yt<ct;yt++){let Ft=q.getViewport(yt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(a),q.updateMatrices($,yt),n=q.getFrustum(),C(E,U,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===fn&&b(q,U),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(_,y,w)};function b(S,E){let U=t.update(A);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new we(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,U,f,A,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,U,g,A,null)}function M(S,E,U,_){let y=null,w=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)y=w;else if(y=U.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=y.uuid,B=E.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let J=H[B];J===void 0&&(J=y.clone(),H[B]=J,E.addEventListener("dispose",V)),y=J}if(y.visible=E.visible,y.wireframe=E.wireframe,_===fn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=i.properties.get(y);O.light=U}return y}function C(S,E,U,_,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===fn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);let B=t.update(S),H=S.material;if(Array.isArray(H)){let J=B.groups;for(let G=0,$=J.length;G<$;G++){let q=J[G],it=H[q.materialIndex];if(it&&it.visible){let ct=M(S,it,_,y);S.onBeforeShadow(i,S,E,U,B,ct,q),i.renderBufferDirect(U,null,B,ct,S,q),S.onAfterShadow(i,S,E,U,B,ct,q)}}}else if(H.visible){let J=M(S,H,_,y);S.onBeforeShadow(i,S,E,U,B,J,null),i.renderBufferDirect(U,null,B,J,S,null),S.onAfterShadow(i,S,E,U,B,J,null)}}let O=S.children;for(let B=0,H=O.length;B<H;B++)C(O[B],E,U,_,y)}function V(S){S.target.removeEventListener("dispose",V);for(let U in c){let _=c[U],y=S.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var Hg={[va]:Ca,[ya]:Ma,[_a]:ba,[Ti]:Ia,[Ca]:va,[Ma]:ya,[ba]:_a,[Ia]:Ti};function Gg(i,t){function e(){let T=!1,nt=new ce,k=null,j=new ce(0,0,0,0);return{setMask:function(lt){k!==lt&&!T&&(i.colorMask(lt,lt,lt,lt),k=lt)},setLocked:function(lt){T=lt},setClear:function(lt,at,Rt,le,ye){ye===!0&&(lt*=le,at*=le,Rt*=le),nt.set(lt,at,Rt,le),j.equals(nt)===!1&&(i.clearColor(lt,at,Rt,le),j.copy(nt))},reset:function(){T=!1,k=null,j.set(-1,0,0,0)}}}function n(){let T=!1,nt=!1,k=null,j=null,lt=null;return{setReversed:function(at){if(nt!==at){let Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);let le=lt;lt=null,this.setClear(le)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(at){k!==at&&!T&&(i.depthMask(at),k=at)},setFunc:function(at){if(nt&&(at=Hg[at]),j!==at){switch(at){case va:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=at}},setLocked:function(at){T=at},setClear:function(at){lt!==at&&(nt&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){T=!1,k=null,j=null,lt=null,nt=!1}}}function s(){let T=!1,nt=null,k=null,j=null,lt=null,at=null,Rt=null,le=null,ye=null;return{setTest:function(Zt){T||(Zt?st(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Zt){nt!==Zt&&!T&&(i.stencilMask(Zt),nt=Zt)},setFunc:function(Zt,Oe,an){(k!==Zt||j!==Oe||lt!==an)&&(i.stencilFunc(Zt,Oe,an),k=Zt,j=Oe,lt=an)},setOp:function(Zt,Oe,an){(at!==Zt||Rt!==Oe||le!==an)&&(i.stencilOp(Zt,Oe,an),at=Zt,Rt=Oe,le=an)},setLocked:function(Zt){T=Zt},setClear:function(Zt){ye!==Zt&&(i.clearStencil(Zt),ye=Zt)},reset:function(){T=!1,nt=null,k=null,j=null,lt=null,at=null,Rt=null,le=null,ye=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,g=[],m=null,A=!1,p=null,d=null,b=null,M=null,C=null,V=null,S=null,E=new Et(0,0,0),U=0,_=!1,y=null,w=null,O=null,B=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=$>=2);let it=null,ct={},yt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),$t=new ce().fromArray(yt),X=new ce().fromArray(Ft);function tt(T,nt,k,j){let lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(T,at),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<k;Rt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(nt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}let At={};At[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Ti),kt(!1),qt(dl),st(i.CULL_FACE),L(en);function st(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function St(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function Vt(T,nt){return u[T]!==nt?(i.bindFramebuffer(T,nt),u[T]=nt,T===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=nt),T===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function zt(T,nt){let k=g,j=!1;if(T){k=f.get(nt),k===void 0&&(k=[],f.set(nt,k));let lt=T.textures;if(k.length!==lt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Rt=lt.length;at<Rt;at++)k[at]=i.COLOR_ATTACHMENT0+at;k.length=lt.length,j=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,j=!0);j&&i.drawBuffers(k)}function oe(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let Gt={[Yn]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};Gt[Eh]=i.MIN,Gt[wh]=i.MAX;let ue={[Th]:i.ZERO,[Vh]:i.ONE,[Rh]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[Nh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function L(T,nt,k,j,lt,at,Rt,le,ye,Zt){if(T===en){A===!0&&(St(i.BLEND),A=!1);return}if(A===!1&&(st(i.BLEND),A=!0),T!==Mh){if(T!==p||Zt!==_){if((d!==Yn||C!==Yn)&&(i.blendEquation(i.FUNC_ADD),d=Yn,C=Yn),Zt)switch(T){case Zn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}b=null,M=null,V=null,S=null,E.set(0,0,0),U=0,p=T,_=Zt}return}lt=lt||nt,at=at||k,Rt=Rt||j,(nt!==d||lt!==C)&&(i.blendEquationSeparate(Gt[nt],Gt[lt]),d=nt,C=lt),(k!==b||j!==M||at!==V||Rt!==S)&&(i.blendFuncSeparate(ue[k],ue[j],ue[at],ue[Rt]),b=k,M=j,V=at,S=Rt),(le.equals(E)===!1||ye!==U)&&(i.blendColor(le.r,le.g,le.b,ye),E.copy(le),U=ye),p=T,_=!1}function Fe(T,nt){T.side===gn?St(i.CULL_FACE):st(i.CULL_FACE);let k=T.side===Me;nt&&(k=!k),kt(k),T.blending===Zn&&T.transparent===!1?L(en):L(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let j=T.stencilWrite;o.setTest(j),j&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ie(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(T){y!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),y=T)}function qt(T){T!==yh?(st(i.CULL_FACE),T!==w&&(T===dl?i.cullFace(i.BACK):T===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),w=T}function It(T){T!==O&&(G&&i.lineWidth(T),O=T)}function ie(T,nt,k){T?(st(i.POLYGON_OFFSET_FILL),(B!==nt||H!==k)&&(i.polygonOffset(nt,k),B=nt,H=k)):St(i.POLYGON_OFFSET_FILL)}function _t(T){T?st(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function I(T){T===void 0&&(T=i.TEXTURE0+J-1),it!==T&&(i.activeTexture(T),it=T)}function x(T,nt,k){k===void 0&&(it===null?k=i.TEXTURE0+J-1:k=it);let j=ct[k];j===void 0&&(j={type:void 0,texture:void 0},ct[k]=j),(j.type!==T||j.texture!==nt)&&(it!==k&&(i.activeTexture(k),it=k),i.bindTexture(T,nt||At[T]),j.type=T,j.texture=nt)}function N(){let T=ct[it];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function wt(T){$t.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),$t.copy(T))}function dt(T){X.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),X.copy(T))}function Ht(T,nt){let k=c.get(nt);k===void 0&&(k=new WeakMap,c.set(nt,k));let j=k.get(T);j===void 0&&(j=i.getUniformBlockIndex(nt,T.name),k.set(T,j))}function Ut(T,nt){let j=c.get(nt).get(T);l.get(nt)!==j&&(i.uniformBlockBinding(nt,j,T.__bindingPointIndex),l.set(nt,j))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ct={},u={},f=new WeakMap,g=[],m=null,A=!1,p=null,d=null,b=null,M=null,C=null,V=null,S=null,E=new Et(0,0,0),U=0,_=!1,y=null,w=null,O=null,B=null,H=null,$t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:St,bindFramebuffer:Vt,drawBuffers:zt,useProgram:oe,setBlending:L,setMaterial:Fe,setFlipSided:kt,setCullFace:qt,setLineWidth:It,setPolygonOffset:ie,setScissorTest:_t,activeTexture:I,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ut,texImage3D:bt,updateUBOMapping:Ht,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:wt,viewport:dt,reset:ee}}function hc(i,t,e,n){let s=Wg(n);switch(e){case yc:return i*t;case Ic:return i*t;case Mc:return i*t*2;case bc:return i*t/s.components*s.byteLength;case Go:return i*t/s.components*s.byteLength;case Sc:return i*t*2/s.components*s.byteLength;case Wo:return i*t*2/s.components*s.byteLength;case _c:return i*t*3/s.components*s.byteLength;case We:return i*t*4/s.components*s.byteLength;case Xo:return i*t*4/s.components*s.byteLength;case qs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case La:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xs:case Qa:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ec:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wg(i){switch(i){case vn:case xc:return{byteLength:1,components:1};case rs:case vc:case je:return{byteLength:2,components:1};case qo:case Ho:return{byteLength:2,components:4};case $n:case ko:case mn:return{byteLength:4,components:1};case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,x){return g?new OffscreenCanvas(I,x):Js("canvas")}function A(I,x,N){let Y=1,K=_t(I);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let W=Math.floor(Y*K.width),vt=Math.floor(Y*K.height);u===void 0&&(u=m(W,vt));let rt=x?m(W,vt):u;return rt.width=W,rt.height=vt,rt.getContext("2d").drawImage(I,0,0,W,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+vt+")."),rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function p(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,x,N,Y,K=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=x;if(x===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),x===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let vt=K?vr:Ot.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=vt===Qt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function C(I,x){let N;return I?x===null||x===$n||x===Pi?N=i.DEPTH24_STENCIL8:x===mn?N=i.DEPTH32F_STENCIL8:x===rs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$n||x===Pi?N=i.DEPTH_COMPONENT24:x===mn?N=i.DEPTH_COMPONENT32F:x===rs&&(N=i.DEPTH_COMPONENT16),N}function V(I,x){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xe&&I.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function S(I){let x=I.target;x.removeEventListener("dispose",S),U(x),x.isVideoTexture&&h.delete(x)}function E(I){let x=I.target;x.removeEventListener("dispose",E),y(x)}function U(I){let x=n.get(I);if(x.__webglInit===void 0)return;let N=I.source,Y=f.get(N);if(Y){let K=Y[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(I),Object.keys(Y).length===0&&f.delete(N)}n.remove(I)}function _(I){let x=n.get(I);i.deleteTexture(x.__webglTexture);let N=I.source,Y=f.get(N);delete Y[x.__cacheKey],a.memory.textures--}function y(I){let x=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let K=0;K<x.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=I.textures;for(let Y=0,K=N.length;Y<K;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(I)}let w=0;function O(){w=0}function B(){let I=w;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),w+=1,I}function H(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function J(I,x){let N=n.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&N.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,I,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function G(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){X(N,I,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function $(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){X(N,I,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function q(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){tt(N,I,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let it={[wa]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},ct={[Xe]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},yt={[Jh]:i.NEVER,[eu]:i.ALWAYS,[Kh]:i.LESS,[Tc]:i.LEQUAL,[Qh]:i.EQUAL,[tu]:i.GEQUAL,[Zh]:i.GREATER,[$h]:i.NOTEQUAL};function Ft(I,x){if(x.type===mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===Or||x.magFilter===xs||x.magFilter===Qn||x.minFilter===tn||x.minFilter===Or||x.minFilter===xs||x.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,it[x.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,it[x.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,it[x.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xe||x.minFilter!==xs&&x.minFilter!==Qn||x.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(I,x){let N=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",S));let Y=x.source,K=f.get(Y);K===void 0&&(K={},f.set(Y,K));let W=H(x);if(W!==I.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[W].usedTimes++;let vt=K[I.__cacheKey];vt!==void 0&&(K[I.__cacheKey].usedTimes--,vt.usedTimes===0&&_(x)),I.__cacheKey=W,I.__webglTexture=K[W].texture}return N}function X(I,x,N){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let K=$t(I,x),W=x.source;e.bindTexture(Y,I.__webglTexture,i.TEXTURE0+N);let vt=n.get(W);if(W.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+N);let rt=Ot.getPrimaries(Ot.workingColorSpace),ht=x.colorSpace===wn?null:Ot.getPrimaries(x.colorSpace),Wt=x.colorSpace===wn||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Q=A(x.image,!1,s.maxTextureSize);Q=ie(x,Q);let ut=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),wt=M(x.internalFormat,ut,bt,x.colorSpace,x.isVideoTexture);Ft(Y,x);let dt,Ht=x.mipmaps,Ut=x.isVideoTexture!==!0,ee=vt.__version===void 0||K===!0,T=W.dataReady,nt=V(x,Q);if(x.isDepthTexture)wt=C(x.format===Li,x.type),ee&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,wt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,ut,bt,null));else if(x.isDataTexture)if(Ht.length>0){Ut&&ee&&e.texStorage2D(i.TEXTURE_2D,nt,wt,Ht[0].width,Ht[0].height);for(let k=0,j=Ht.length;k<j;k++)dt=Ht[k],Ut?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,bt,dt.data):e.texImage2D(i.TEXTURE_2D,k,wt,dt.width,dt.height,0,ut,bt,dt.data);x.generateMipmaps=!1}else Ut?(ee&&e.texStorage2D(i.TEXTURE_2D,nt,wt,Q.width,Q.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ut,bt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,ut,bt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,wt,Ht[0].width,Ht[0].height,Q.depth);for(let k=0,j=Ht.length;k<j;k++)if(dt=Ht[k],x.format!==We)if(ut!==null)if(Ut){if(T)if(x.layerUpdates.size>0){let lt=hc(dt.width,dt.height,x.format,x.type);for(let at of x.layerUpdates){let Rt=dt.data.subarray(at*lt/dt.data.BYTES_PER_ELEMENT,(at+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,at,dt.width,dt.height,1,ut,Rt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,dt.width,dt.height,Q.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,wt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,dt.width,dt.height,Q.depth,ut,bt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,wt,dt.width,dt.height,Q.depth,0,ut,bt,dt.data)}else{Ut&&ee&&e.texStorage2D(i.TEXTURE_2D,nt,wt,Ht[0].width,Ht[0].height);for(let k=0,j=Ht.length;k<j;k++)dt=Ht[k],x.format!==We?ut!==null?Ut?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,bt,dt.data):e.texImage2D(i.TEXTURE_2D,k,wt,dt.width,dt.height,0,ut,bt,dt.data)}else if(x.isDataArrayTexture)if(Ut){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,wt,Q.width,Q.height,Q.depth),T)if(x.layerUpdates.size>0){let k=hc(Q.width,Q.height,x.format,x.type);for(let j of x.layerUpdates){let lt=Q.data.subarray(j*k/Q.data.BYTES_PER_ELEMENT,(j+1)*k/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,ut,bt,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,bt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,Q.width,Q.height,Q.depth,0,ut,bt,Q.data);else if(x.isData3DTexture)Ut?(ee&&e.texStorage3D(i.TEXTURE_3D,nt,wt,Q.width,Q.height,Q.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,bt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,wt,Q.width,Q.height,Q.depth,0,ut,bt,Q.data);else if(x.isFramebufferTexture){if(ee)if(Ut)e.texStorage2D(i.TEXTURE_2D,nt,wt,Q.width,Q.height);else{let k=Q.width,j=Q.height;for(let lt=0;lt<nt;lt++)e.texImage2D(i.TEXTURE_2D,lt,wt,k,j,0,ut,bt,null),k>>=1,j>>=1}}else if(Ht.length>0){if(Ut&&ee){let k=_t(Ht[0]);e.texStorage2D(i.TEXTURE_2D,nt,wt,k.width,k.height)}for(let k=0,j=Ht.length;k<j;k++)dt=Ht[k],Ut?T&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ut,bt,dt):e.texImage2D(i.TEXTURE_2D,k,wt,ut,bt,dt);x.generateMipmaps=!1}else if(Ut){if(ee){let k=_t(Q);e.texStorage2D(i.TEXTURE_2D,nt,wt,k.width,k.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,bt,Q)}else e.texImage2D(i.TEXTURE_2D,0,wt,ut,bt,Q);p(x)&&d(Y),vt.__version=W.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function tt(I,x,N){if(x.image.length!==6)return;let Y=$t(I,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+N);let W=n.get(K);if(K.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let vt=Ot.getPrimaries(Ot.workingColorSpace),rt=x.colorSpace===wn?null:Ot.getPrimaries(x.colorSpace),ht=x.colorSpace===wn||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!Wt&&!Q?ut[j]=A(x.image[j],!0,s.maxCubemapSize):ut[j]=Q?x.image[j].image:x.image[j],ut[j]=ie(x,ut[j]);let bt=ut[0],wt=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),Ht=M(x.internalFormat,wt,dt,x.colorSpace),Ut=x.isVideoTexture!==!0,ee=W.__version===void 0||Y===!0,T=K.dataReady,nt=V(x,bt);Ft(i.TEXTURE_CUBE_MAP,x);let k;if(Wt){Ut&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ht,bt.width,bt.height);for(let j=0;j<6;j++){k=ut[j].mipmaps;for(let lt=0;lt<k.length;lt++){let at=k[lt];x.format!==We?wt!==null?Ut?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,at.width,at.height,wt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,Ht,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,at.width,at.height,wt,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,Ht,at.width,at.height,0,wt,dt,at.data)}}}else{if(k=x.mipmaps,Ut&&ee){k.length>0&&nt++;let j=_t(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,wt,dt,ut[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,ut[j].width,ut[j].height,0,wt,dt,ut[j].data);for(let lt=0;lt<k.length;lt++){let Rt=k[lt].image[j].image;Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Rt.width,Rt.height,wt,dt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,Ht,Rt.width,Rt.height,0,wt,dt,Rt.data)}}else{Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt,dt,ut[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,wt,dt,ut[j]);for(let lt=0;lt<k.length;lt++){let at=k[lt];Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,wt,dt,at.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,Ht,wt,dt,at.image[j])}}}p(x)&&d(i.TEXTURE_CUBE_MAP),W.__version=K.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function At(I,x,N,Y,K,W){let vt=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ht=M(N.internalFormat,vt,rt,N.colorSpace),Wt=n.get(x),Q=n.get(N);if(Q.__renderTarget=x,!Wt.__hasExternalTextures){let ut=Math.max(1,x.width>>W),bt=Math.max(1,x.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,W,ht,ut,bt,x.depth,0,vt,rt,null):e.texImage2D(K,W,ht,ut,bt,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),qt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,Q.__webglTexture,0,kt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,Q.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(I,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,I),x.depthBuffer){let Y=x.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=C(x.stencilBuffer,K),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=kt(x);qt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,W,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{let Y=x.textures;for(let K=0;K<Y.length;K++){let W=Y[K],vt=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),ht=M(W.internalFormat,vt,rt,W.colorSpace),Wt=kt(x);N&&qt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ht,x.width,x.height):qt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(I,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);let K=Y.__webglTexture,W=kt(x);if(x.depthTexture.format===Si)qt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Li)qt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Vt(I){let x=n.get(I),N=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=Y}if(I.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");St(x.__webglFramebuffer,I)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(x.__webglDepthbuffer[Y],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(I,x,N){let Y=n.get(I);x!==void 0&&At(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Vt(I)}function oe(I){let x=I.texture,N=n.get(I),Y=n.get(x);I.addEventListener("dispose",E);let K=I.textures,W=I.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)N.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,ht=K.length;rt<ht;rt++){let Wt=n.get(K[rt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&qt(I)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){let ht=K[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let Wt=r.convert(ht.format,ht.colorSpace),Q=r.convert(ht.type),ut=M(ht.internalFormat,Wt,Q,ht.colorSpace,I.isXRRenderTarget===!0),bt=kt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ut,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)At(N.__webglFramebuffer[rt][ht],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else At(N.__webglFramebuffer[rt],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,ht=K.length;rt<ht;rt++){let Wt=K[rt],Q=n.get(Wt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ft(i.TEXTURE_2D,Wt),At(N.__webglFramebuffer,I,Wt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),p(Wt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Ft(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)At(N.__webglFramebuffer[ht],I,x,i.COLOR_ATTACHMENT0,rt,ht);else At(N.__webglFramebuffer,I,x,i.COLOR_ATTACHMENT0,rt,0);p(x)&&d(rt),e.unbindTexture()}I.depthBuffer&&Vt(I)}function Gt(I){let x=I.textures;for(let N=0,Y=x.length;N<Y;N++){let K=x[N];if(p(K)){let W=b(I),vt=n.get(K).__webglTexture;e.bindTexture(W,vt),d(W),e.unbindTexture()}}}let ue=[],L=[];function Fe(I){if(I.samples>0){if(qt(I)===!1){let x=I.textures,N=I.width,Y=I.height,K=i.COLOR_BUFFER_BIT,W=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),rt=x.length>1;if(rt)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);let Wt=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,i.NEAREST),l===!0&&(ue.length=0,L.length=0,ue.push(i.COLOR_ATTACHMENT0+ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ue.push(W),L.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);let Wt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let x=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function kt(I){return Math.min(s.maxSamples,I.samples)}function qt(I){let x=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(I){let x=a.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())}function ie(I,x){let N=I.colorSpace,Y=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||N!==ki&&N!==wn&&(Ot.getTransfer(N)===Qt?(Y!==We||K!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function _t(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=zt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=qt}function Yg(i,t){function e(n,s=wn){let r,a=Ot.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.BYTE;if(n===vc)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===yc)return i.ALPHA;if(n===_c)return i.RGB;if(n===We)return i.RGBA;if(n===Ic)return i.LUMINANCE;if(n===Mc)return i.LUMINANCE_ALPHA;if(n===Si)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Sc)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===qs||n===Hs||n===Gs||n===Ws)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ra||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Da||n===Na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Da)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===za||n===Ba||n===Oa||n===ka||n===qa||n===Ha||n===Ga||n===Wa||n===Xa||n===Ya||n===ja||n===Ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xs||n===Qa||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xs)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===$a||n===to||n===eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xo=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},jg={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),d=this._getHandJoint(c,A);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,m=.005;c.inputState.pinching&&f>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
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

}`,vo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pe({vertexShader:Jg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Co=class extends Pn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,m=null,A=new vo,p=e.getContextAttributes(),d=null,b=null,M=[],C=[],V=new Mt,S=null,E=new Ee;E.viewport=new ce;let U=new Ee;U.viewport=new ce;let _=[E,U],y=new xo,w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=M[X];return tt===void 0&&(tt=new ss,M[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=M[X];return tt===void 0&&(tt=new ss,M[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=M[X];return tt===void 0&&(tt=new ss,M[X]=tt),tt.getHandSpace()};function B(X){let tt=C.indexOf(X.inputSource);if(tt===-1)return;let At=M[tt];At!==void 0&&(At.update(X.inputSource,X.frame,c||a),At.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let X=0;X<M.length;X++){let tt=C[X];tt!==null&&(C[X]=null,M[X].disconnect(tt))}w=null,O=null,A.reset(),t.setRenderTarget(d),g=null,f=null,u=null,s=null,b=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new we(g.framebufferWidth,g.framebufferHeight,{format:We,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,At=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Li:Si,At=p.stencil?Pi:$n);let St={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new we(f.textureWidth,f.textureHeight,{format:We,type:vn,depthTexture:new ar(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function J(X){for(let tt=0;tt<X.removed.length;tt++){let At=X.removed[tt],st=C.indexOf(At);st>=0&&(C[st]=null,M[st].disconnect(At))}for(let tt=0;tt<X.added.length;tt++){let At=X.added[tt],st=C.indexOf(At);if(st===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=C.length){C.push(At),st=Vt;break}else if(C[Vt]===null){C[Vt]=At,st=Vt;break}if(st===-1)break}let St=M[st];St&&St.connect(At)}}let G=new D,$=new D;function q(X,tt,At){G.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(At.matrixWorld);let st=G.distanceTo($),St=tt.projectionMatrix.elements,Vt=At.projectionMatrix.elements,zt=St[14]/(St[10]-1),oe=St[14]/(St[10]+1),Gt=(St[9]+1)/St[5],ue=(St[9]-1)/St[5],L=(St[8]-1)/St[0],Fe=(Vt[8]+1)/Vt[0],kt=zt*L,qt=zt*Fe,It=st/(-L+Fe),ie=It*-L;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),St[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let _t=zt+It,I=oe+It,x=kt-ie,N=qt+(st-ie),Y=Gt*oe/I*_t,K=ue*oe/I*_t;X.projectionMatrix.makePerspective(x,N,Y,K,_t,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,At=X.far;A.texture!==null&&(A.depthNear>0&&(tt=A.depthNear),A.depthFar>0&&(At=A.depthFar)),y.near=U.near=E.near=tt,y.far=U.far=E.far=At,(w!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,O=y.far),E.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,y.layers.mask=E.layers.mask|U.layers.mask;let st=X.parent,St=y.cameras;it(y,st);for(let Vt=0;Vt<St.length;Vt++)it(St[Vt],st);St.length===2?q(y,E,U):y.projectionMatrix.copy(E.projectionMatrix),ct(X,y,st)};function ct(X,tt,At){At===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(At.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=io*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let yt=null;function Ft(X,tt){if(h=tt.getViewerPose(c||a),m=tt,h!==null){let At=h.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let st=!1;At.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let Vt=0;Vt<At.length;Vt++){let zt=At[Vt],oe=null;if(g!==null)oe=g.getViewport(zt);else{let ue=u.getViewSubImage(f,zt);oe=ue.viewport,Vt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(b))}let Gt=_[Vt];Gt===void 0&&(Gt=new Ee,Gt.layers.enable(Vt),Gt.viewport=new ce,_[Vt]=Gt),Gt.matrix.fromArray(zt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(zt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(oe.x,oe.y,oe.width,oe.height),Vt===0&&(y.matrix.copy(Gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(Gt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){let Vt=u.getDepthInformation(At[0]);Vt&&Vt.isValid&&Vt.texture&&A.init(t,Vt,s.renderState)}}for(let At=0;At<M.length;At++){let st=C[At],St=M[At];st!==null&&St!==void 0&&St.update(st,tt,c||a)}yt&&yt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let $t=new Lc;$t.setAnimationLoop(Ft),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}},Wn=new nn,Qg=new he;function Zg(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Pc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,b,M,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,C)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),A(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,b,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Me&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Me&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b=t.get(d),M=b.envMap,C=b.envMapRotation;M&&(p.envMap.value=M,Wn.copy(C),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(Wn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Me&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function A(p,d){let b=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $g(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let C=M.program;n.uniformBlockBinding(b,C)}function c(b,M){let C=s[b.id];C===void 0&&(m(b),C=h(b),s[b.id]=C,b.addEventListener("dispose",p));let V=M.program;n.updateUBOMapping(b,V);let S=t.render.frame;r[b.id]!==S&&(f(b),r[b.id]=S)}function h(b){let M=u();b.__bindingPointIndex=M;let C=i.createBuffer(),V=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,V,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,C),C}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=s[b.id],C=b.uniforms,V=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,E=C.length;S<E;S++){let U=Array.isArray(C[S])?C[S]:[C[S]];for(let _=0,y=U.length;_<y;_++){let w=U[_];if(g(w,S,_,V)===!0){let O=w.__offset,B=Array.isArray(w.value)?w.value:[w.value],H=0;for(let J=0;J<B.length;J++){let G=B[J],$=A(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,M,C,V){let S=b.value,E=M+"_"+C;if(V[E]===void 0)return typeof S=="number"||typeof S=="boolean"?V[E]=S:V[E]=S.clone(),!0;{let U=V[E];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return V[E]=S,!0}else if(U.equals(S)===!1)return U.copy(S),!0}return!1}function m(b){let M=b.uniforms,C=0,V=16;for(let E=0,U=M.length;E<U;E++){let _=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,w=_.length;y<w;y++){let O=_[y],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,J=B.length;H<J;H++){let G=B[H],$=A(G),q=C%V,it=q%$.boundary,ct=q+it;C+=it,ct!==0&&V-ct<$.storage&&(C+=V-ct),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=C,C+=$.storage}}}let S=C%V;return S>0&&(C+=V-S),b.__size=C,b.__cache={},this}function A(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){let M=b.target;M.removeEventListener("dispose",p);let C=a.indexOf(M.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var or=class{constructor(t={}){let{canvas:e=iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let m=new Uint32Array(4),A=new Int32Array(4),p=null,d=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=Tn,this.toneMappingExposure=1;let C=this,V=!1,S=0,E=0,U=null,_=-1,y=null,w=new ce,O=new ce,B=null,H=new Et(0),J=0,G=e.width,$=e.height,q=1,it=null,ct=null,yt=new ce(0,0,G,$),Ft=new ce(0,0,G,$),$t=!1,X=new as,tt=!1,At=!1,st=new he,St=new he,Vt=new D,zt=new ce,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function ue(){return U===null?q:1}let L=n;function Fe(v,R){return e.getContext(v,R)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),L===null){let R="webgl2";if(L=Fe(R,v),L===null)throw Fe(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let kt,qt,It,ie,_t,I,x,N,Y,K,W,vt,rt,ht,Wt,Q,ut,bt,wt,dt,Ht,Ut,ee,T;function nt(){kt=new gp(L),kt.init(),Ut=new Yg(L,kt),qt=new cp(L,kt,t,Ut),It=new Gg(L,kt),qt.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ie=new xp(L),_t=new Rg,I=new Xg(L,kt,It,_t,qt,Ut,ie),x=new up(C),N=new pp(C),Y=new Mu(L),ee=new op(L,Y),K=new mp(L,Y,ie,ee),W=new Cp(L,K,Y,ie),wt=new vp(L,qt,I),Q=new hp(_t),vt=new Vg(C,x,N,kt,qt,ee,Q),rt=new Zg(C,_t),ht=new Lg,Wt=new Bg(kt),bt=new ap(C,x,N,It,W,g,l),ut=new qg(C,W,qt),T=new $g(L,ie,qt,It),dt=new lp(L,kt,ie),Ht=new Ap(L,kt,ie),ie.programs=vt.programs,C.capabilities=qt,C.extensions=kt,C.properties=_t,C.renderLists=ht,C.shadowMap=ut,C.state=It,C.info=ie}nt();let k=new Co(C,L);this.xr=k,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=kt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=kt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(v){v!==void 0&&(q=v,this.setSize(G,$,!1))},this.getSize=function(v){return v.set(G,$)},this.setSize=function(v,R,F=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,$=R,e.width=Math.floor(v*q),e.height=Math.floor(R*q),F===!0&&(e.style.width=v+"px",e.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(G*q,$*q).floor()},this.setDrawingBufferSize=function(v,R,F){G=v,$=R,q=F,e.width=Math.floor(v*F),e.height=Math.floor(R*F),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(yt)},this.setViewport=function(v,R,F,z){v.isVector4?yt.set(v.x,v.y,v.z,v.w):yt.set(v,R,F,z),It.viewport(w.copy(yt).multiplyScalar(q).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,R,F,z){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,R,F,z),It.scissor(O.copy(Ft).multiplyScalar(q).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(v){It.setScissorTest($t=v)},this.setOpaqueSort=function(v){it=v},this.setTransparentSort=function(v){ct=v},this.getClearColor=function(v){return v.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(v=!0,R=!0,F=!0){let z=0;if(v){let P=!1;if(U!==null){let Z=U.texture.format;P=Z===Xo||Z===Wo||Z===Go}if(P){let Z=U.texture.type,ot=Z===vn||Z===$n||Z===rs||Z===Pi||Z===qo||Z===Ho,pt=bt.getClearColor(),gt=bt.getClearAlpha(),Tt=pt.r,Pt=pt.g,mt=pt.b;ot?(m[0]=Tt,m[1]=Pt,m[2]=mt,m[3]=gt,L.clearBufferuiv(L.COLOR,0,m)):(A[0]=Tt,A[1]=Pt,A[2]=mt,A[3]=gt,L.clearBufferiv(L.COLOR,0,A))}else z|=L.COLOR_BUFFER_BIT}R&&(z|=L.DEPTH_BUFFER_BIT),F&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),Wt.dispose(),_t.dispose(),x.dispose(),N.dispose(),W.dispose(),ee.dispose(),T.dispose(),vt.dispose(),k.dispose(),k.removeEventListener("sessionstart",sl),k.removeEventListener("sessionend",rl),Bn.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let v=ie.autoReset,R=ut.enabled,F=ut.autoUpdate,z=ut.needsUpdate,P=ut.type;nt(),ie.autoReset=v,ut.enabled=R,ut.autoUpdate=F,ut.needsUpdate=z,ut.type=P}function at(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Rt(v){let R=v.target;R.removeEventListener("dispose",Rt),le(R)}function le(v){ye(v),_t.remove(v)}function ye(v){let R=_t.get(v).programs;R!==void 0&&(R.forEach(function(F){vt.releaseProgram(F)}),v.isShaderMaterial&&vt.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,F,z,P,Z){R===null&&(R=oe);let ot=P.isMesh&&P.matrixWorld.determinant()<0,pt=xh(v,R,F,z,P);It.setMaterial(z,ot);let gt=F.index,Tt=1;if(z.wireframe===!0){if(gt=K.getWireframeAttribute(F),gt===void 0)return;Tt=2}let Pt=F.drawRange,mt=F.attributes.position,Xt=Pt.start*Tt,ne=(Pt.start+Pt.count)*Tt;Z!==null&&(Xt=Math.max(Xt,Z.start*Tt),ne=Math.min(ne,(Z.start+Z.count)*Tt)),gt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,gt.count)):mt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,mt.count));let se=ne-Xt;if(se<0||se===1/0)return;ee.setup(P,z,pt,F,gt);let Te,Jt=dt;if(gt!==null&&(Te=Y.get(gt),Jt=Ht,Jt.setIndex(Te)),P.isMesh)z.wireframe===!0?(It.setLineWidth(z.wireframeLinewidth*ue()),Jt.setMode(L.LINES)):Jt.setMode(L.TRIANGLES);else if(P.isLine){let Ct=z.linewidth;Ct===void 0&&(Ct=1),It.setLineWidth(Ct*ue()),P.isLineSegments?Jt.setMode(L.LINES):P.isLineLoop?Jt.setMode(L.LINE_LOOP):Jt.setMode(L.LINE_STRIP)}else P.isPoints?Jt.setMode(L.POINTS):P.isSprite&&Jt.setMode(L.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Jt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Ct=P._multiDrawStarts,on=P._multiDrawCounts,Kt=P._multiDrawCount,ke=gt?Y.get(gt).bytesPerElement:1,hi=_t.get(z).currentProgram.getUniforms();for(let Pe=0;Pe<Kt;Pe++)hi.setValue(L,"_gl_DrawID",Pe),Jt.render(Ct[Pe]/ke,on[Pe])}else if(P.isInstancedMesh)Jt.renderInstances(Xt,se,P.count);else if(F.isInstancedBufferGeometry){let Ct=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,on=Math.min(F.instanceCount,Ct);Jt.renderInstances(Xt,se,on)}else Jt.render(Xt,se)};function Zt(v,R,F){v.transparent===!0&&v.side===gn&&v.forceSinglePass===!1?(v.side=Me,v.needsUpdate=!0,As(v,R,F),v.side=Vn,v.needsUpdate=!0,As(v,R,F),v.side=gn):As(v,R,F)}this.compile=function(v,R,F=null){F===null&&(F=v),d=Wt.get(F),d.init(R),M.push(d),F.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),v!==F&&v.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights();let z=new Set;return v.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let Z=P.material;if(Z)if(Array.isArray(Z))for(let ot=0;ot<Z.length;ot++){let pt=Z[ot];Zt(pt,F,P),z.add(pt)}else Zt(Z,F,P),z.add(Z)}),M.pop(),d=null,z},this.compileAsync=function(v,R,F=null){let z=this.compile(v,R,F);return new Promise(P=>{function Z(){if(z.forEach(function(ot){_t.get(ot).currentProgram.isReady()&&z.delete(ot)}),z.size===0){P(v);return}setTimeout(Z,10)}kt.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let Oe=null;function an(v){Oe&&Oe(v)}function sl(){Bn.stop()}function rl(){Bn.start()}let Bn=new Lc;Bn.setAnimationLoop(an),typeof self!="undefined"&&Bn.setContext(self),this.setAnimationLoop=function(v){Oe=v,k.setAnimationLoop(v),v===null?Bn.stop():Bn.start()},k.addEventListener("sessionstart",sl),k.addEventListener("sessionend",rl),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(R),R=k.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,R,U),d=Wt.get(v,M.length),d.init(R),M.push(d),St.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),X.setFromProjectionMatrix(St),At=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,At),p=ht.get(v,b.length),p.init(),b.push(p),k.enabled===!0&&k.isPresenting===!0){let Z=C.xr.getDepthSensingMesh();Z!==null&&Br(Z,R,-1/0,C.sortObjects)}Br(v,R,0,C.sortObjects),p.finish(),C.sortObjects===!0&&p.sort(it,ct),Gt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Gt&&bt.addToRenderList(p,v),this.info.render.frame++,tt===!0&&Q.beginShadows();let F=d.state.shadowsArray;ut.render(F,v,R),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=p.opaque,P=p.transmissive;if(d.setupLights(),R.isArrayCamera){let Z=R.cameras;if(P.length>0)for(let ot=0,pt=Z.length;ot<pt;ot++){let gt=Z[ot];ol(z,P,v,gt)}Gt&&bt.render(v);for(let ot=0,pt=Z.length;ot<pt;ot++){let gt=Z[ot];al(p,v,gt,gt.viewport)}}else P.length>0&&ol(z,P,v,R),Gt&&bt.render(v),al(p,v,R);U!==null&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(C,v,R),ee.resetDefaultState(),_=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],tt===!0&&Q.setGlobalState(C.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Br(v,R,F,z){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){z&&zt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(St);let ot=W.update(v),pt=v.material;pt.visible&&p.push(v,ot,pt,F,zt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let ot=W.update(v),pt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),zt.copy(v.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),zt.copy(ot.boundingSphere.center)),zt.applyMatrix4(v.matrixWorld).applyMatrix4(St)),Array.isArray(pt)){let gt=ot.groups;for(let Tt=0,Pt=gt.length;Tt<Pt;Tt++){let mt=gt[Tt],Xt=pt[mt.materialIndex];Xt&&Xt.visible&&p.push(v,ot,Xt,F,zt.z,mt)}}else pt.visible&&p.push(v,ot,pt,F,zt.z,null)}}let Z=v.children;for(let ot=0,pt=Z.length;ot<pt;ot++)Br(Z[ot],R,F,z)}function al(v,R,F,z){let P=v.opaque,Z=v.transmissive,ot=v.transparent;d.setupLightsView(F),tt===!0&&Q.setGlobalState(C.clippingPlanes,F),z&&It.viewport(w.copy(z)),P.length>0&&ms(P,R,F),Z.length>0&&ms(Z,R,F),ot.length>0&&ms(ot,R,F),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ol(v,R,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new we(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?je:vn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));let Z=d.state.transmissionRenderTarget[z.id],ot=z.viewport||w;Z.setSize(ot.z,ot.w);let pt=C.getRenderTarget();C.setRenderTarget(Z),C.getClearColor(H),J=C.getClearAlpha(),J<1&&C.setClearColor(16777215,.5),C.clear(),Gt&&bt.render(F);let gt=C.toneMapping;C.toneMapping=Tn;let Tt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),tt===!0&&Q.setGlobalState(C.clippingPlanes,z),ms(v,F,z),I.updateMultisampleRenderTarget(Z),I.updateRenderTargetMipmap(Z),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let mt=0,Xt=R.length;mt<Xt;mt++){let ne=R[mt],se=ne.object,Te=ne.geometry,Jt=ne.material,Ct=ne.group;if(Jt.side===gn&&se.layers.test(z.layers)){let on=Jt.side;Jt.side=Me,Jt.needsUpdate=!0,ll(se,F,z,Te,Jt,Ct),Jt.side=on,Jt.needsUpdate=!0,Pt=!0}}Pt===!0&&(I.updateMultisampleRenderTarget(Z),I.updateRenderTargetMipmap(Z))}C.setRenderTarget(pt),C.setClearColor(H,J),Tt!==void 0&&(z.viewport=Tt),C.toneMapping=gt}function ms(v,R,F){let z=R.isScene===!0?R.overrideMaterial:null;for(let P=0,Z=v.length;P<Z;P++){let ot=v[P],pt=ot.object,gt=ot.geometry,Tt=z===null?ot.material:z,Pt=ot.group;pt.layers.test(F.layers)&&ll(pt,R,F,gt,Tt,Pt)}}function ll(v,R,F,z,P,Z){v.onBeforeRender(C,R,F,z,P,Z),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),P.onBeforeRender(C,R,F,z,v,Z),P.transparent===!0&&P.side===gn&&P.forceSinglePass===!1?(P.side=Me,P.needsUpdate=!0,C.renderBufferDirect(F,R,z,P,v,Z),P.side=Vn,P.needsUpdate=!0,C.renderBufferDirect(F,R,z,P,v,Z),P.side=gn):C.renderBufferDirect(F,R,z,P,v,Z),v.onAfterRender(C,R,F,z,P,Z)}function As(v,R,F){R.isScene!==!0&&(R=oe);let z=_t.get(v),P=d.state.lights,Z=d.state.shadowsArray,ot=P.state.version,pt=vt.getParameters(v,P.state,Z,R,F),gt=vt.getProgramCacheKey(pt),Tt=z.programs;z.environment=v.isMeshStandardMaterial?R.environment:null,z.fog=R.fog,z.envMap=(v.isMeshStandardMaterial?N:x).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,Tt===void 0&&(v.addEventListener("dispose",Rt),Tt=new Map,z.programs=Tt);let Pt=Tt.get(gt);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===ot)return hl(v,pt),Pt}else pt.uniforms=vt.getUniforms(v),v.onBeforeCompile(pt,C),Pt=vt.acquireProgram(pt,gt),Tt.set(gt,Pt),z.uniforms=pt.uniforms;let mt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(mt.clippingPlanes=Q.uniform),hl(v,pt),z.needsLights=Ch(v),z.lightsStateVersion=ot,z.needsLights&&(mt.ambientLightColor.value=P.state.ambient,mt.lightProbe.value=P.state.probe,mt.directionalLights.value=P.state.directional,mt.directionalLightShadows.value=P.state.directionalShadow,mt.spotLights.value=P.state.spot,mt.spotLightShadows.value=P.state.spotShadow,mt.rectAreaLights.value=P.state.rectArea,mt.ltc_1.value=P.state.rectAreaLTC1,mt.ltc_2.value=P.state.rectAreaLTC2,mt.pointLights.value=P.state.point,mt.pointLightShadows.value=P.state.pointShadow,mt.hemisphereLights.value=P.state.hemi,mt.directionalShadowMap.value=P.state.directionalShadowMap,mt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,mt.spotShadowMap.value=P.state.spotShadowMap,mt.spotLightMatrix.value=P.state.spotLightMatrix,mt.spotLightMap.value=P.state.spotLightMap,mt.pointShadowMap.value=P.state.pointShadowMap,mt.pointShadowMatrix.value=P.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function cl(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=wi.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function hl(v,R){let F=_t.get(v);F.outputColorSpace=R.outputColorSpace,F.batching=R.batching,F.batchingColor=R.batchingColor,F.instancing=R.instancing,F.instancingColor=R.instancingColor,F.instancingMorph=R.instancingMorph,F.skinning=R.skinning,F.morphTargets=R.morphTargets,F.morphNormals=R.morphNormals,F.morphColors=R.morphColors,F.morphTargetsCount=R.morphTargetsCount,F.numClippingPlanes=R.numClippingPlanes,F.numIntersection=R.numClipIntersection,F.vertexAlphas=R.vertexAlphas,F.vertexTangents=R.vertexTangents,F.toneMapping=R.toneMapping}function xh(v,R,F,z,P){R.isScene!==!0&&(R=oe),I.resetTextureUnits();let Z=R.fog,ot=z.isMeshStandardMaterial?R.environment:null,pt=U===null?C.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ki,gt=(z.isMeshStandardMaterial?N:x).get(z.envMap||ot),Tt=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pt=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),mt=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,ne=!!F.morphAttributes.color,se=Tn;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(se=C.toneMapping);let Te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Jt=Te!==void 0?Te.length:0,Ct=_t.get(z),on=d.state.lights;if(tt===!0&&(At===!0||v!==y)){let ze=v===y&&z.id===_;Q.setState(z,v,ze)}let Kt=!1;z.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==on.state.version||Ct.outputColorSpace!==pt||P.isBatchedMesh&&Ct.batching===!1||!P.isBatchedMesh&&Ct.batching===!0||P.isBatchedMesh&&Ct.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ct.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ct.instancing===!1||!P.isInstancedMesh&&Ct.instancing===!0||P.isSkinnedMesh&&Ct.skinning===!1||!P.isSkinnedMesh&&Ct.skinning===!0||P.isInstancedMesh&&Ct.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ct.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ct.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ct.instancingMorph===!1&&P.morphTexture!==null||Ct.envMap!==gt||z.fog===!0&&Ct.fog!==Z||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Q.numPlanes||Ct.numIntersection!==Q.numIntersection)||Ct.vertexAlphas!==Tt||Ct.vertexTangents!==Pt||Ct.morphTargets!==mt||Ct.morphNormals!==Xt||Ct.morphColors!==ne||Ct.toneMapping!==se||Ct.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,Ct.__version=z.version);let ke=Ct.currentProgram;Kt===!0&&(ke=As(z,R,P));let hi=!1,Pe=!1,Ji=!1,re=ke.getUniforms(),Ze=Ct.uniforms;if(It.useProgram(ke.program)&&(hi=!0,Pe=!0,Ji=!0),z.id!==_&&(_=z.id,Pe=!0),hi||y!==v){It.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),ru(st),au(st),re.setValue(L,"projectionMatrix",st)):re.setValue(L,"projectionMatrix",v.projectionMatrix),re.setValue(L,"viewMatrix",v.matrixWorldInverse);let Cn=re.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,Vt.setFromMatrixPosition(v.matrixWorld)),qt.logarithmicDepthBuffer&&re.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Pe=!0,Ji=!0)}if(P.isSkinnedMesh){re.setOptional(L,P,"bindMatrix"),re.setOptional(L,P,"bindMatrixInverse");let ze=P.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),re.setValue(L,"boneTexture",ze.boneTexture,I))}P.isBatchedMesh&&(re.setOptional(L,P,"batchingTexture"),re.setValue(L,"batchingTexture",P._matricesTexture,I),re.setOptional(L,P,"batchingIdTexture"),re.setValue(L,"batchingIdTexture",P._indirectTexture,I),re.setOptional(L,P,"batchingColorTexture"),P._colorsTexture!==null&&re.setValue(L,"batchingColorTexture",P._colorsTexture,I));let Ki=F.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&wt.update(P,F,ke),(Pe||Ct.receiveShadow!==P.receiveShadow)&&(Ct.receiveShadow=P.receiveShadow,re.setValue(L,"receiveShadow",P.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ze.envMap.value=gt,Ze.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&R.environment!==null&&(Ze.envMapIntensity.value=R.environmentIntensity),Pe&&(re.setValue(L,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&vh(Ze,Ji),Z&&z.fog===!0&&rt.refreshFogUniforms(Ze,Z),rt.refreshMaterialUniforms(Ze,z,q,$,d.state.transmissionRenderTarget[v.id]),wi.upload(L,cl(Ct),Ze,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(wi.upload(L,cl(Ct),Ze,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(L,"center",P.center),re.setValue(L,"modelViewMatrix",P.modelViewMatrix),re.setValue(L,"normalMatrix",P.normalMatrix),re.setValue(L,"modelMatrix",P.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let ze=z.uniformsGroups;for(let Cn=0,yn=ze.length;Cn<yn;Cn++){let ul=ze[Cn];T.update(ul,ke),T.bind(ul,ke)}}return ke}function vh(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function Ch(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,R,F){_t.get(v.texture).__webglTexture=R,_t.get(v.depthTexture).__webglTexture=F;let z=_t.get(v);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,R){let F=_t.get(v);F.__webglFramebuffer=R,F.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,F=0){U=v,S=R,E=F;let z=!0,P=null,Z=!1,ot=!1;if(v){let gt=_t.get(v);if(gt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)I.setupRenderTarget(v);else if(gt.__hasExternalTextures)I.rebindTextures(v,_t.get(v.texture).__webglTexture,_t.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let mt=v.depthTexture;if(gt.__boundDepthTexture!==mt){if(mt!==null&&_t.has(mt)&&(v.width!==mt.image.width||v.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(v)}}let Tt=v.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ot=!0);let Pt=_t.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[R])?P=Pt[R][F]:P=Pt[R],Z=!0):v.samples>0&&I.useMultisampledRTT(v)===!1?P=_t.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?P=Pt[F]:P=Pt,w.copy(v.viewport),O.copy(v.scissor),B=v.scissorTest}else w.copy(yt).multiplyScalar(q).floor(),O.copy(Ft).multiplyScalar(q).floor(),B=$t;if(It.bindFramebuffer(L.FRAMEBUFFER,P)&&z&&It.drawBuffers(v,P),It.viewport(w),It.scissor(O),It.setScissorTest(B),Z){let gt=_t.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+R,gt.__webglTexture,F)}else if(ot){let gt=_t.get(v.texture),Tt=R||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,Tt)}_=-1},this.readRenderTargetPixels=function(v,R,F,z,P,Z,ot){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){It.bindFramebuffer(L.FRAMEBUFFER,pt);try{let gt=v.texture,Tt=gt.format,Pt=gt.type;if(!qt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-z&&F>=0&&F<=v.height-P&&L.readPixels(R,F,z,P,Ut.convert(Tt),Ut.convert(Pt),Z)}finally{let gt=U!==null?_t.get(U).__webglFramebuffer:null;It.bindFramebuffer(L.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,R,F,z,P,Z,ot){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){let gt=v.texture,Tt=gt.format,Pt=gt.type;if(!qt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=v.width-z&&F>=0&&F<=v.height-P){It.bindFramebuffer(L.FRAMEBUFFER,pt);let mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,mt),L.bufferData(L.PIXEL_PACK_BUFFER,Z.byteLength,L.STREAM_READ),L.readPixels(R,F,z,P,Ut.convert(Tt),Ut.convert(Pt),0);let Xt=U!==null?_t.get(U).__webglFramebuffer:null;It.bindFramebuffer(L.FRAMEBUFFER,Xt);let ne=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await su(L,ne,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Z),L.deleteBuffer(mt),L.deleteSync(ne),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,R=null,F=0){v.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,v=arguments[1]);let z=Math.pow(2,-F),P=Math.floor(v.image.width*z),Z=Math.floor(v.image.height*z),ot=R!==null?R.x:0,pt=R!==null?R.y:0;I.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,ot,pt,P,Z),It.unbindTexture()},this.copyTextureToTexture=function(v,R,F=null,z=null,P=0){v.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,v=arguments[1],R=arguments[2],P=arguments[3]||0,F=null);let Z,ot,pt,gt,Tt,Pt,mt,Xt,ne,se=v.isCompressedTexture?v.mipmaps[P]:v.image;F!==null?(Z=F.max.x-F.min.x,ot=F.max.y-F.min.y,pt=F.isBox3?F.max.z-F.min.z:1,gt=F.min.x,Tt=F.min.y,Pt=F.isBox3?F.min.z:0):(Z=se.width,ot=se.height,pt=se.depth||1,gt=0,Tt=0,Pt=0),z!==null?(mt=z.x,Xt=z.y,ne=z.z):(mt=0,Xt=0,ne=0);let Te=Ut.convert(R.format),Jt=Ut.convert(R.type),Ct;R.isData3DTexture?(I.setTexture3D(R,0),Ct=L.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(I.setTexture2DArray(R,0),Ct=L.TEXTURE_2D_ARRAY):(I.setTexture2D(R,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,R.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,R.unpackAlignment);let on=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ke=L.getParameter(L.UNPACK_SKIP_PIXELS),hi=L.getParameter(L.UNPACK_SKIP_ROWS),Pe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt);let Ji=v.isDataArrayTexture||v.isData3DTexture,re=R.isDataArrayTexture||R.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let Ze=_t.get(v),Ki=_t.get(R),ze=_t.get(Ze.__renderTarget),Cn=_t.get(Ki.__renderTarget);It.bindFramebuffer(L.READ_FRAMEBUFFER,ze.__webglFramebuffer),It.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let yn=0;yn<pt;yn++)Ji&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(v).__webglTexture,P,Pt+yn),v.isDepthTexture?(re&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(R).__webglTexture,P,ne+yn),L.blitFramebuffer(gt,Tt,Z,ot,mt,Xt,Z,ot,L.DEPTH_BUFFER_BIT,L.NEAREST)):re?L.copyTexSubImage3D(Ct,P,mt,Xt,ne+yn,gt,Tt,Z,ot):L.copyTexSubImage2D(Ct,P,mt,Xt,ne+yn,gt,Tt,Z,ot);It.bindFramebuffer(L.READ_FRAMEBUFFER,null),It.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Ct,P,mt,Xt,ne,Z,ot,pt,Te,Jt,se.data):R.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,P,mt,Xt,ne,Z,ot,pt,Te,se.data):L.texSubImage3D(Ct,P,mt,Xt,ne,Z,ot,pt,Te,Jt,se):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,P,mt,Xt,Z,ot,Te,Jt,se.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,P,mt,Xt,se.width,se.height,Te,se.data):L.texSubImage2D(L.TEXTURE_2D,P,mt,Xt,Z,ot,Te,Jt,se);L.pixelStorei(L.UNPACK_ROW_LENGTH,on),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,hi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),P===0&&R.generateMipmaps&&L.generateMipmap(Ct),It.unbindTexture()},this.copyTextureToTexture3D=function(v,R,F=null,z=null,P=0){return v.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,z=arguments[1]||null,v=arguments[2],R=arguments[3],P=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,R,F,z,P)},this.initRenderTarget=function(v){_t.get(v).__webglFramebuffer===void 0&&I.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?I.setTextureCube(v,0):v.isData3DTexture?I.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?I.setTexture2DArray(v,0):I.setTexture2D(v,0),It.unbindTexture()},this.resetState=function(){S=0,E=0,U=null,It.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ot._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ot._getUnpackColorSpace()}};var lr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ni=class extends Un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uc=new he,yo=new Zs,Bs=new Ui,Os=new D,ii=class extends be{constructor(t=new fe,e=new ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=r,t.ray.intersectsSphere(Bs)===!1)return;uc.copy(s).invert(),yo.copy(t.ray).applyMatrix4(uc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let m=f,A=g;m<A;m++){let p=c.getX(m);Os.fromBufferAttribute(u,p),dc(Os,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let m=f,A=g;m<A;m++)Os.fromBufferAttribute(u,m),dc(Os,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dc(i,t,e,n,s,r,a){let o=yo.distanceSqToPoint(i);if(o<e){let l=new D;yo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var si=class extends De{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var os=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let g=n+u/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fi=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],g=[],m=0,A=[],p=n/2,d=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(g,2));function b(){let C=new D,V=new D,S=0,E=(e-t)/n;for(let U=0;U<=r;U++){let _=[],y=U/r,w=y*(e-t)+t;for(let O=0;O<=s;O++){let B=O/s,H=B*l+o,J=Math.sin(H),G=Math.cos(H);V.x=w*J,V.y=-y*n+p,V.z=w*G,u.push(V.x,V.y,V.z),C.set(J,E,G).normalize(),f.push(C.x,C.y,C.z),g.push(B,1-y),_.push(m++)}A.push(_)}for(let U=0;U<s;U++)for(let _=0;_<r;_++){let y=A[_][U],w=A[_+1][U],O=A[_+1][U+1],B=A[_][U+1];(t>0||_!==0)&&(h.push(y,w,B),S+=3),(e>0||_!==r-1)&&(h.push(w,O,B),S+=3)}c.addGroup(d,S,0),d+=S}function M(C){let V=m,S=new Mt,E=new D,U=0,_=C===!0?t:e,y=C===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*y,0),f.push(0,y,0),g.push(.5,.5),m++;let w=m;for(let O=0;O<=s;O++){let H=O/s*l+o,J=Math.cos(H),G=Math.sin(H);E.x=_*G,E.y=p*y,E.z=_*J,u.push(E.x,E.y,E.z),f.push(0,y,0),S.x=J*.5+.5,S.y=G*.5*y+.5,g.push(S.x,S.y),m++}for(let O=0;O<s;O++){let B=V+O,H=w+O;C===!0?h.push(H,H+1,B):h.push(H+1,H,B),U+=3}c.addGroup(d,U,C===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hr=class i extends Fi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ur=class i extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,g=new D,m=new Mt;for(let A=0;A<=s;A++){for(let p=0;p<=n;p++){let d=r+p/n*a;g.x=u*Math.cos(d),g.y=u*Math.sin(d),l.push(g.x,g.y,g.z),c.push(0,0,1),m.x=(g.x/e+1)/2,m.y=(g.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let A=0;A<s;A++){let p=A*(n+1);for(let d=0;d<n;d++){let b=d+p,M=b,C=b+n+1,V=b+n+2,S=b+1;o.push(M,C,S),o.push(C,V,S)}}this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ri=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,f=new D,g=[],m=[],A=[],p=[];for(let d=0;d<=n;d++){let b=[],M=d/n,C=0;d===0&&a===0?C=.5/e:d===n&&l===Math.PI&&(C=-.5/e);for(let V=0;V<=e;V++){let S=V/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+M*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),p.push(S+C,1-M),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){let M=h[d][b+1],C=h[d][b],V=h[d+1][b],S=h[d+1][b+1];(d!==0||a>0)&&g.push(M,C,S),(d!==n-1||l<Math.PI)&&g.push(C,V,S)}this.setIndex(g),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(A,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zi=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let g=0;g<=n;g++)for(let m=0;m<=s;m++){let A=m/s*r,p=g/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(A),u.y=(t+e*Math.cos(p))*Math.sin(A),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let A=(s+1)*g+m-1,p=(s+1)*(g-1)+m-1,d=(s+1)*(g-1)+m,b=(s+1)*g+m;a.push(A,p,b),a.push(p,d,b)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var dr=class extends pe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var fr=class extends Un{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ks(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_o=class extends Bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gl,endingEnd:gl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ml:r=t,o=2*e-n;break;case Al:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ml:a=t,l=2*n-e;break;case Al:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,g=this._weightNext,m=(n-e)/(s-e),A=m*m,p=A*m,d=-f*p+2*f*A-f*m,b=(1+f)*p+(-1.5-2*f)*A+(-.5+f)*m+1,M=(-1-g)*p+(1.5+g)*A+.5*m,C=g*p-g*A;for(let V=0;V!==o;++V)r[V]=d*a[h+V]+b*a[c+V]+M*a[l+V]+C*a[u+V];return r}},Io=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Mo=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ye=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _o(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ys:e=this.InterpolantFactoryMethodDiscrete;break;case no:e=this.InterpolantFactoryMethodLinear;break;case kr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return kr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&tm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,g=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[g+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let g=0;g!==n;++g)e[f+g]=e[u+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=no;var ai=class extends Ye{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ys;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Ye{};bo.prototype.ValueTypeName="color";var So=class extends Ye{};So.prototype.ValueTypeName="number";var Eo=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},pr=class extends Ye{InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends Ye{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Ys;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Ye{};wo.prototype.ValueTypeName="vector";var To=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let g=c[u],m=c[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return m}return null}}},em=new To,Vo=class{constructor(t){this.manager=t!==void 0?t:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},mr=class extends gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ma=new he,fc=new D,pc=new D,Ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(fc),pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pc),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Po=class extends Ro{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Po}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Oi=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=gc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function gc(){return performance.now()}var jo="\\[\\]\\.:\\/",nm=new RegExp("["+jo+"]","g"),Jo="[^"+jo+"]",im="[^"+jo.replace("\\.","")+"]",sm=/((?:WC+[\/:])*)/.source.replace("WC",Jo),rm=/(WCOD+)?/.source.replace("WCOD",im),am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),lm=new RegExp("^"+sm+rm+am+om+"$"),cm=["material","materials","bones","map"],Lo=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nm,"")}static parseTrackName(t){let e=lm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Lo;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);var Je=[{id:"p0",x:0,z:0,r:3.4,y:3},{id:"p1",x:-10,z:-6,r:2.6,y:4.5},{id:"p2",x:10,z:-6,r:2.6,y:4},{id:"p3",x:-10,z:7,r:2.6,y:2.4},{id:"p4",x:10,z:8,r:2.6,y:5},{id:"p5",x:0,z:-13,r:2.8,y:6},{id:"p6",x:0,z:12.5,r:2.3,y:1.2}],hs=Object.fromEntries(Je.map(i=>[i.id,i]));function _r(i,t,e,n,s={}){return{kind:i,ax:t.x,ay:t.y,az:t.z,bx:e.x,by:e.y,bz:e.z,w:n,rails:i!=="ramp",...s}}function us(i,t,e,n=.3){let s=Math.hypot(t,e);return{x:i.x+t/s*(i.r-n),y:i.y,z:i.z+e/s*(i.r-n)}}function Hi(i,t,e){let n=hs[i],s=hs[t];return _r("bridge",us(n,s.x-n.x,s.z-n.z),us(s,n.x-s.x,n.z-s.z),1.5,{from:i,to:t,...e})}function Gi(i,t,e,n,s){let r=us(hs[t],e,n),a=Math.hypot(e,n);return _r(i,r,{x:r.x+e/a*s,y:0,z:r.z+n/a*s},i==="slide"?1.3:1.8,{from:t})}var li=[Hi("p0","p1"),Hi("p0","p3"),Hi("p1","p5"),Hi("p2","p5"),Hi("p0","p6"),Hi("p2","p4"),Gi("ramp","p3",-1,0,4.6),Gi("ramp","p6",0,1,3.4),Gi("ramp","p2",1,0,6),Gi("slide","p5",.8,-.6,8.4),Gi("slide","p4",.6,.8,7),Gi("slide","p1",-.8,-.6,6.3)];{let i=us(hs.p0,1,-.6),t=us(hs.p2,-1,.6),e=(i.x+t.x)/2,n=(i.z+t.z)/2,s=(i.y+t.y)/2,r=t.x-i.x,a=t.z-i.z,o=Math.hypot(r,a),l=.9;li.push(_r("bridge",i,{x:e-r/o*l,y:s,z:n-a/o*l},1.5,{broken:!0})),li.push(_r("bridge",{x:e+r/o*l,y:s,z:n+a/o*l},t,1.5,{broken:!0}))}var Wi=[{x:-4.5,z:-4.5,to:"p1"},{x:-4,z:-17.5,to:"p5"},{x:14.5,z:2.5,to:"p4"},{x:-5.2,z:8.6,to:"p0"}].map(i=>({...i,r:.8})),zc=Je.map(i=>({x:i.x,z:i.z,r:.75,top:i.y-.3})),Ke=[{id:1,ar:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0634\u062C\u0631",en:"Canopy Commons",time:40,rivals:2,speed:3.7},{id:2,ar:"\u062C\u0633\u0631 \u0627\u0644\u062D\u0628\u0627\u0644",en:"Rope Bridges",time:45,rivals:3,speed:3.9},{id:3,ar:"\u0627\u0644\u0645\u0634\u0631\u0648\u0645 \u0627\u0644\u0646\u0637\u0651\u0627\u0637",en:"Bouncy Mushrooms",time:50,rivals:3,speed:4.1},{id:4,ar:"\u0627\u0644\u0632\u062D\u0627\u0644\u064A\u0642",en:"Slide Hill",time:55,rivals:4,speed:4.2},{id:5,ar:"\u0628\u0631\u062C \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629",en:"Lookout Tower",time:60,rivals:4,speed:4.25},{id:6,ar:"\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u063A\u0627\u0628\u0629",en:"Forest Cup",time:60,rivals:4,speed:4.3}],Ir=[{kind:"raccoon",ar:"\u0631\u0627\u0643\u0648\u0646",en:"Rocky"},{kind:"bear",ar:"\u062F\u0628\u062F\u0648\u0628",en:"Bruno"},{kind:"fox",ar:"\u062B\u0639\u0644\u0648\u0628",en:"Foxy"},{kind:"bunny",ar:"\u0623\u0631\u0646\u0648\u0628\u0629",en:"Bunny"},{kind:"cat",ar:"\u0642\u0637\u0642\u0648\u0637\u0629",en:"Kitty"}];function hm(i,t,e){let n=i.bx-i.ax,s=i.bz-i.az,r=n*n+s*s,a=((t-i.ax)*n+(e-i.az)*s)/r,o=Math.sqrt(r),l=((t-i.ax)*s-(e-i.az)*n)/o;return{t:a,side:l,y:i.ay+(i.by-i.ay)*Math.max(0,Math.min(1,a))}}function Ko(i,t,e,n=.45){let s=0,r=null;for(let a of Je)a.y<=e+n&&a.y>s&&Math.hypot(i-a.x,t-a.z)<=a.r&&(s=a.y,r=a);for(let a of li){let o=hm(a,i,t);o.t<-.02||o.t>1.02||Math.abs(o.side)>a.w/2||o.y<=e+n&&o.y>s-.001&&(s=o.y,r=a)}return{y:s,surf:r}}function Bc(){let i=[],t=(a,o,l,c)=>(i.push({i:i.length,x:a,y:o,z:l,tag:c,out:[]}),i.length-1),e=(a,o,l=!0,c=0)=>{let h=Math.hypot(i[a].x-i[o].x,i[a].y-i[o].y,i[a].z-i[o].z)+c;i[a].out.push({to:o,d:h}),l&&i[o].out.push({to:a,d:h})},n={};for(let a of Je)n[a.id]=t(a.x,a.y,a.z,a.id);let s={};for(let a of Je)s[a.id]=[n[a.id]];let r=[];for(let a of li){if(a.broken)continue;let o=t(a.ax,a.ay,a.az,a.kind),l=t(a.bx,a.by,a.bz,a.kind);e(o,l,a.kind!=="slide"),s[a.from].push(o),a.kind==="bridge"?s[a.to].push(l):r.push(l)}for(let a of Je)for(let o=0;o<3;o++){let l=o/3*Math.PI*2+.5,c=Math.cos(l),h=Math.sin(l);if(li.some(m=>{if(m.from!==a.id&&m.to!==a.id)return!1;let A=m.from===a.id?m.ax:m.bx,p=m.from===a.id?m.az:m.bz,b=Math.atan2(p-a.z,A-a.x)-l;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;return Math.abs(b)<.8}))continue;let f=t(a.x+c*(a.r-.4),a.y,a.z+h*(a.r-.4),"edge");s[a.id].push(f);let g=t(a.x+c*(a.r+1.2),0,a.z+h*(a.r+1.2),"drop");e(f,g,!1,1),r.push(g)}for(let a of Object.keys(s)){let o=s[a];for(let l=0;l<o.length;l++)for(let c=l+1;c<o.length;c++)e(o[l],o[c])}for(let a of Wi){let o=t(a.x,0,a.z,"mushroom");e(o,n[a.to],!1,-2),r.push(o)}for(let a=0;a<10;a++){let o=a/10*Math.PI*2;r.push(t(Math.cos(o)*18,0,Math.sin(o)*18,"ground"))}for(let a=0;a<6;a++){let o=a/6*Math.PI*2+.3;r.push(t(Math.cos(o)*6.5,0,Math.sin(o)*6.5,"ground"))}for(let a=0;a<r.length;a++)for(let o=a+1;o<r.length;o++){let l=i[r[a]],c=i[r[o]];Math.hypot(l.x-c.x,l.z-c.z)<13&&e(r[a],r[o])}return i}function Oc(i,t){let e=i.length,n=new Float64Array(e).fill(1/0),s=Array.from({length:e},()=>[]);for(let a of i)for(let o of a.out)s[o.to].push({from:a.i,d:o.d});n[t]=0;let r=new Uint8Array(e);for(let a=0;a<e;a++){let o=-1;for(let l=0;l<e;l++)!r[l]&&(o<0||n[l]<n[o])&&(o=l);if(o<0||n[o]===1/0)break;r[o]=1;for(let l of s[o])n[o]+l.d<n[l.from]&&(n[l.from]=n[o]+l.d)}return n}function kc(i){let t=i&&typeof i=="object"?i:{},e={};if(t.stars&&typeof t.stars=="object")for(let s of Ke){let r=Math.floor(Number(t.stars[s.id]));r>=1&&r<=3&&(e[s.id]=r)}let n=Math.floor(Number(t.unlocked));return{unlocked:Number.isFinite(n)?Math.max(1,Math.min(Ke.length,n)):1,stars:e,muted:t.muted===!0}}var um=5.2,dm=8.8,qc=10,Hc=1.6,ci=Object.fromEntries(Je.map(i=>[i.id,i]));function fm(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var ds=null,Gc=null;function pm(){return ds||(ds=Bc(),Gc=ds.map(i=>Oc(ds,i.i))),{nodes:ds,dist:Gc}}var br=class{constructor(t={}){var r,a;this.level=Ke[(r=t.level)!=null?r:0],this.easy=!!t.easy,this.rand=fm((a=t.seed)!=null?a:9);let{nodes:e,dist:n}=pm();this.nodes=e,this.dist=n,this.timeLeft=this.level.time,this.time=0,this.state="ready",this.readyT=3,this.events=[],this.player=this._ent(0,"dino",0,ci.p0.y,1.5,um),this.player.isPlayer=!0,this.rivals=[];let s=["p1","p2","p4","p3","p5"];for(let o=0;o<this.level.rivals;o++){let l=Ir[o],c=ci[s[o]],h=this.level.speed*(this.easy?.8:1)*(.96+this.rand()*.08),u=this._ent(o+1,l.kind,c.x,c.y,c.z,h);u.name=l,u.think=this.rand(),this.rivals.push(u)}this.all=[this.player,...this.rivals],this.holder=this.rivals[Math.floor(this.rand()*this.rivals.length)],this.holder.immune=1,this.held=0,this.lost=0,this.grabs=0}_ent(t,e,n,s,r,a){return{id:t,kind:e,x:n,y:s,z:r,vy:0,grounded:!0,face:0,moving:0,stun:0,immune:0,grabCd:0,reach:0,speed:a,launch:null,next:-1,goal:-1,repick:0,surf:null,sliding:!1}}get youWin(){return this.holder===this.player}_respawn(t){let e=t.x,n=t.z;if(this.holder===t){let s=this.rivals[0];for(let r of this.rivals)Math.hypot(r.x-e,r.z-n)<Math.hypot(s.x-e,s.z-n)&&(s=r);this.holder=s,s.immune=1.2,this.lost++}Object.assign(t,{x:ci.p0.x,y:ci.p0.y,z:ci.p0.z+1.5,vy:0,grounded:!0,surf:ci.p0,launch:null,stun:.6,immune:1.2,fallFrom:0}),this.events.push({type:"fell",x:e,z:n})}jump(){let t=this.player;return this.state!=="play"||!t.grounded||t.stun>0?!1:(t.vy=dm,t.grounded=!1,this.events.push({type:"jump",who:0}),!0)}grab(){let t=this.player;return this.state!=="play"||t.grabCd>0||t.stun>0||this.holder===t?!1:(t.grabCd=.35,this._canGrab(t,this.holder,Hc)?(this._steal(t),!0):(this.events.push({type:"whiff"}),!1))}_canGrab(t,e,n){return e.immune<=0&&Math.hypot(t.x-e.x,t.z-e.z)<n&&Math.abs(t.y-e.y)<1.4}_steal(t){let e=this.holder;e.stun=.9,e.immune=0,t.immune=t.isPlayer?2.2:1.6,t.grabCd=.5,this.holder=t,e===this.player&&this.lost++,t===this.player&&this.grabs++;for(let n of this.rivals)n!==t&&(n.grabCd=Math.max(n.grabCd,.5));this.events.push({type:"steal",by:t.id,from:e.id,x:t.x,y:t.y,z:t.z})}step(t,e={x:0,z:0}){if(this.events=[],this.state==="over")return this.events;if(this.time+=t,this.state==="ready"){let o=Math.ceil(this.readyT);return this.readyT-=t,Math.ceil(this.readyT)!==o&&this.readyT>0&&this.events.push({type:"count",n:Math.ceil(this.readyT)}),this.readyT<=0&&(this.state="play",this.events.push({type:"go"})),this.events}let n=Math.ceil(this.timeLeft);this.timeLeft-=t,Math.ceil(this.timeLeft)!==n&&this.timeLeft<=10&&this.timeLeft>0&&this.events.push({type:"tick",n:Math.ceil(this.timeLeft)}),this.holder===this.player&&(this.held+=t);for(let o of this.all)o.stun=Math.max(0,o.stun-t),o.immune=Math.max(0,o.immune-t),o.grabCd=Math.max(0,o.grabCd-t);let{x:s,z:r}=e,a=Math.hypot(s,r);a>1&&(s/=a,r/=a),this._move(this.player,s,r,this.player.speed,t),this.easy&&this.holder!==this.player&&this._canGrab(this.player,this.holder,Hc*.8)&&this._steal(this.player);for(let o of this.rivals)this._brain(o,t);for(let o of this.rivals){if(this.holder===o||o.stun>0||o.grabCd>0){o.reach=0;continue}this._canGrab(o,this.holder,1.15)?(o.reach+=t,o.reach>(this.easy?.45:.25)&&(o.reach=0,this._steal(o))):o.reach=0}return this._separate(),this.timeLeft<=0&&(this.timeLeft=0,this.state="over",this.events.push({type:"over",win:this.youWin})),this.events}get result(){let t=this.youWin;return{win:t,stars:t?1+(this.held>=this.level.time*.4?1:0)+(this.lost<=2?1:0):0,held:this.held,lost:this.lost,grabs:this.grabs}}_move(t,e,n,s,r){var m;t.stun>0&&(e=0,n=0);let a=Math.hypot(e,n);t.moving=Math.min(1,a);let o=e*s,l=n*s,c=t.grounded?t.surf:null;if(t.sliding=!!(c&&c.kind==="slide"),t.sliding){let A=c.bx-c.ax,p=c.bz-c.az,d=Math.hypot(A,p);o=A/d*qc+o*.2,l=p/d*qc+l*.2,t.moving=1}t.launch&&(o=t.launch.vx,l=t.launch.vz),Math.hypot(o,l)>.3&&(t.face=Math.atan2(o,l));let h=t.x,u=t.z;if(t.x+=o*r,t.z+=l*r,c&&c.rails){let A=c.bx-c.ax,p=c.bz-c.az,d=Math.hypot(A,p),b=((t.x-c.ax)*A+(t.z-c.az)*p)/(d*d),M=((t.x-c.ax)*p-(t.z-c.az)*A)/d,C=c.w/2-.25;if(b>.04&&b<.96&&Math.abs(M)>C){let V=(Math.abs(M)-C)*Math.sign(M);t.x-=p/d*V,t.z+=A/d*V}}for(let A of zc){if(t.y>A.top)continue;let p=Math.hypot(t.x-A.x,t.z-A.z),d=A.r+.35;p<d&&(t.x=A.x+(t.x-A.x)/(p||1)*d,t.z=A.z+(t.z-A.z)/(p||1)*d)}let f=Math.hypot(t.x,t.z);f>25-.6&&(t.x*=(25-.6)/f,t.z*=(25-.6)/f);let g=Ko(t.x,t.z,t.y);if(t.grounded&&t.y-g.y<=.55&&t.vy<=0)t.y=g.y,t.surf=g.surf;else{t.grounded&&(t.grounded=!1,t.vy=Math.min(t.vy,0),t.fallFrom=t.y),t.vy-=24*r,t.y+=t.vy*r;let A=Ko(t.x,t.z,Math.max(t.y,g.y));if(t.vy<=0&&t.y<=A.y){let p=-t.vy;t.y=A.y,t.vy=0,t.grounded=!0,t.surf=A.surf,t.launch=null,t.next=-1,this.events.push({type:"land",who:t.id,hard:p>9}),t.isPlayer&&t.y<.05&&((m=t.fallFrom)!=null?m:0)>1&&this.state==="play"&&this._respawn(t)}}if(t.grounded&&t.y<.05){for(let A of Wi)if(Math.hypot(t.x-A.x,t.z-A.z)<A.r){let p=ci[A.to],d=Math.sqrt(2*24*(p.y+2.2)),b=d/24+Math.sqrt(2*2.2/24);t.vy=d,t.grounded=!1,t.launch={vx:(p.x-t.x)/b,vz:(p.z-t.z)/b},t.next=-1,this.events.push({type:"bounce",who:t.id,x:A.x,z:A.z});break}}}_separate(){let t=this.all;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let s=t[e],r=t[n];if(Math.abs(s.y-r.y)>1)continue;let a=r.x-s.x,o=r.z-s.z,l=Math.hypot(a,o)||.01;if(l<.8){let c=(.8-l)/2;s.x-=a/l*c,s.z-=o/l*c,r.x+=a/l*c,r.z+=o/l*c}}}nodeNear(t){let e=0,n=1/0;for(let s of this.nodes){let r=Math.hypot(s.x-t.x,s.z-t.z)+Math.abs(s.y-t.y)*4;r<n&&(n=r,e=s.i)}return e}_brain(t,e){if(t.stun>0||!t.grounded){this._move(t,0,0,t.speed,e);return}let n=this.holder,s,r,a=n===t,o=t.speed*(a?.9:1);if(!a&&Math.hypot(n.x-t.x,n.z-t.z)<3.5&&Math.abs(n.y-t.y)<.6)s=n.x,r=n.z,t.next=-1;else{if(t.repick-=e,a){if(Math.hypot(this.player.x-t.x,this.player.z-t.z)<7&&t.repick>.8&&(t.repick=.8),t.goal<0||t.repick<=0){let g=this.nodeNear(this.player),m=0,A=-1/0;for(let p of this.nodes){let d=this.dist[g][p.i]-.35*this.dist[p.i][this.nodeNear(t)]+this.rand()*4;Number.isFinite(d)&&d>A&&(A=d,m=p.i)}t.goal=m,t.repick=2+this.rand(),t.next=-1}}else(t.goal<0||t.repick<=0)&&(t.goal=this.nodeNear(n),t.repick=.6);t.next<0&&(t.next=this.nodeNear(t));let u=this.nodes[t.next];if(Math.hypot(u.x-t.x,u.z-t.z)<.5&&Math.abs(u.y-t.y)<.7){let f=this.dist[t.goal],g=-1,m=1/0;for(let A of u.out){let p=A.d+f[A.to];p<m&&(m=p,g=A.to)}(u.i===t.goal||m>f[u.i]+.01)&&(g=-1),g<0?(a&&(t.repick=0),s=a?t.x+(t.x-this.player.x):n.x,r=a?t.z+(t.z-this.player.z):n.z):(t.next=g,s=this.nodes[g].x,r=this.nodes[g].z)}else s=u.x,r=u.z}let l=s-t.x,c=r-t.z,h=Math.hypot(l,c);h<.05?this._move(t,0,0,o,e):this._move(t,l/h,c/h,o,e)}};var Qo=new Map;function xt(i,t=0,e=1){let n=`${i}|${t}|${e}`;return Qo.has(n)||Qo.set(n,new fr({color:i,emissive:t,emissiveIntensity:e})),Qo.get(n)}function Sr(i,t,e,n,s=0,r=0,a=0){let o=new Yt(new ei(i,t,e),n);return o.position.set(s,r,a),o}function Qe(i,t,e,n,s=0,r=0,a=0,o=14){let l=new Yt(new Fi(i,t,e,o),n);return l.position.set(s,r,a),l}function Nt(i,t,e=0,n=0,s=0,r=1,a=1,o=1,l=14){let c=new Yt(new ri(i,l,Math.max(8,l-4)),t);return c.position.set(e,n,s),c.scale.set(r,a,o),c}function Fn(i,t,e,n=0,s=0,r=0,a=10){let o=new Yt(new hr(i,t,a),e);return o.position.set(n,s,r),o}function Xc(i,t,e,n,s=.11){for(let r of[-1,1])i.add(Nt(s,xt(16777215),r*n,t,e,1,1.15,.6,12)),i.add(Nt(s*.62,xt(2759184),r*n,t-s*.05,e+s*.35,1,1.15,.5,10)),i.add(Nt(s*.22,xt(16777215,16777215,.6),r*n+s*.2,t+s*.3,e+s*.62,1,1,.5,6))}function Yc(){let i=new jt,t=new jt;i.add(t);let e=xt(6080586),n=xt(3842106),s=xt(15921336),r=[];for(let p of[-.2,.2]){let d=new jt;d.position.set(p,.36,0),d.add(Qe(.13,.15,.3,e,0,-.16,0,10)),d.add(Nt(.16,e,0,-.33,.06,1,.55,1.3,10));for(let b of[-.07,0,.07])d.add(Nt(.035,s,b,-.34,.24,1,.8,1,6));t.add(d),r.push(d)}t.add(Nt(.42,e,0,.72,0,1,1.05,.95,18)),t.add(Nt(.3,s,0,.66,.2,1,1.15,.6,14));let a=[];for(let p of[-1,1]){let d=new jt;d.position.set(p*.38,.85,.08),d.add(Nt(.1,e,0,-.1,.05,1,1.4,1,8)),t.add(d),a.push(d)}let o=new jt;o.position.set(0,.6,-.36),o.add(Fn(.22,.75,e,0,0,-.3,12).rotateX(-Math.PI/2-.35)),t.add(o);let l=new jt;l.position.set(0,1.32,.05),l.add(Nt(.4,e,0,0,0,1.05,.95,1,18)),l.add(Nt(.3,e,0,-.1,.26,1.15,.75,.9,14)),Xc(l,.1,.33,.17,.12);for(let p of[-1,1])l.add(Nt(.03,n,p*.08,-.04,.53,1,1,.5,6));let c=new Yt(new zi(.17,.03,6,16,Math.PI),xt(9054762));c.position.set(0,-.16,.44),c.rotation.z=Math.PI,l.add(c),l.add(Nt(.08,xt(16747162),0,-.22,.44,1.2,.5,.6,8));for(let p of[-1,1])l.add(Nt(.07,xt(16751272),p*.3,-.06,.32,1,.6,.4,8));t.add(l);let h=xt(3842106);for(let p=0;p<7;p++){let d=-.2+p*.32,b=Fn(.09-p*.004,.2,h,0,0,0,6);b.position.set(0,1.32+Math.cos(d)*.42-(p>2?(p-2)*.22:0),Math.sin(-d)*.42-(p>2?.1:0)),b.rotation.x=-d,t.add(b)}let u=xt(15217706),f=Qe(.36,.4,.12,u,0,1,.02,16);t.add(f);let g=Fn(.24,.32,u,0,.86,.33,3);g.rotation.x=Math.PI,g.rotation.y=Math.PI,g.scale.z=.35,t.add(g);let m=new jt;m.add(Nt(.045,xt(16777215),0,0,0,1,.8,.3,8));for(let[p,d]of[[-.05,.05],[0,.07],[.05,.05]])m.add(Nt(.018,xt(16777215),p,d,0,1,1,.3,6));m.position.set(0,.87,.42),t.add(m);let A=new jt;return A.position.set(0,.6,-.4),t.add(A),{root:i,body:t,legs:r,arms:a,head:l,back:A,tail:o}}var Wc={raccoon:{fur:9409692,belly:15263976,ear:5922406},bear:{fur:11037242,belly:15253642,ear:8014374},fox:{fur:15759914,belly:16774374,ear:3811872},bunny:{fur:16184048,belly:16767974,ear:16758472},cat:{fur:14211304,belly:16777215,ear:16758472}};function jc(i){var u;let t=(u=Wc[i])!=null?u:Wc.bear,e=new jt,n=new jt;e.add(n);let s=xt(t.fur),r=xt(t.belly),a=[];for(let f of[-.17,.17]){let g=new jt;g.position.set(f,.34,0),g.add(Qe(.11,.13,.3,s,0,-.15,0,10)),g.add(Nt(.14,i==="raccoon"?xt(3816e3):s,0,-.32,.05,1,.55,1.3,10)),n.add(g),a.push(g)}n.add(Nt(.36,s,0,.68,0,1,1.05,.95,16)),n.add(Nt(.25,r,0,.64,.18,1,1.15,.6,12));let o=[];for(let f of[-1,1]){let g=new jt;g.position.set(f*.34,.84,.05),g.add(Nt(.09,i==="raccoon"?xt(3816e3):s,0,-.12,.04,1,1.5,1,8)),n.add(g),o.push(g)}let l=new jt;l.position.set(0,1.25,.03),l.add(Nt(.38,s,0,0,0,1.08,.95,1,16)),l.add(Nt(.17,r,0,-.1,.29,1.25,.85,.75,12)),l.add(Nt(.06,xt(2759194),0,-.03,.44,1.2,.85,.8,8)),i==="raccoon"&&l.add(Nt(.24,xt(3816e3),0,.07,.22,1.45,.48,.6,12)),Xc(l,.08,.31,.15,.1);let c=new Yt(new zi(.07,.018,5,12,Math.PI),xt(6957610));c.position.set(0,-.17,.42),c.rotation.z=Math.PI,l.add(c);for(let f of[-1,1]){if(i==="bunny"){let g=Nt(.09,s,f*.13,.5,-.02,1,3,.6,10);g.rotation.z=-f*.15,l.add(g),l.add(Nt(.05,xt(t.ear),f*.13,.5,.03,1,2.6,.4,8))}else if(i==="fox"||i==="cat"){let g=Fn(.13,.3,s,f*.22,.34,0,4);if(g.rotation.z=-f*.3,l.add(g),i==="fox"){let m=Fn(.06,.12,xt(t.ear),f*.27,.46,0,4);m.rotation.z=-f*.3,l.add(m)}}else l.add(Nt(.12,s,f*.26,.29,0,1,1,.6,10)),l.add(Nt(.07,xt(t.ear),f*.26,.29,.04,1,1,.4,8));l.add(Nt(.06,xt(16751272),f*.26,-.08,.3,1,.6,.4,8))}if(i==="cat")for(let f of[-1,1])for(let g of[-1,1])l.add(Sr(.2,.012,.012,xt(6974074),f*.25,-.06+g*.03,.4).rotateZ(f*g*.15));if(n.add(l),i==="raccoon"){let f=new jt;for(let g=0;g<4;g++)f.add(Nt(.13-g*.012,xt(g%2?3816e3:10133158),0,0,-g*.16,1,1,1,10));f.position.set(0,.55,-.35),f.rotation.x=.4,n.add(f)}else if(i==="fox"){let f=Nt(.15,s,0,.5,-.45,1,1,2.2,10);f.rotation.x=.5,n.add(f)}else n.add(Nt(.1,i==="bunny"?xt(16777215):s,0,.5,-.36,1,1,1,8));let h=new jt;return h.position.set(0,.6,-.38),n.add(h),{root:e,body:n,legs:a,arms:o,head:l,back:h}}function Jc(){let i=new jt,t=xt(16761370,16751104,.55),e=xt(16770688,16761370,.6),n=[];for(let r=0;r<6;r++){let a=Nt(.15-r*.012,r%2?e:t,0,-r*.04,-.12-r*.17,1,1,1.25,12);i.add(a),n.push(a)}let s=Nt(.1,xt(16774856,16770688,.8),0,-.26,-1.15,1,1,1.3,10);return i.add(s),n.push(s),{root:i,parts:n}}var Kc=12618322,Er=10119738;function Qc(i,t){let e=new jt;e.position.set(i.x,0,i.z);let n=Qe(.55,.95,i.y+1.3,xt(8015402),0,(i.y+1.3)/2,0,12);e.add(n);let s=18;for(let a=0;a<s;a++){let o=new Yt(new Fi(i.r,i.r,.18,4,1,!1,a/s*Math.PI*2,Math.PI*2/s*.96),xt(a%2?Kc:11697222));o.position.y=i.y-.09,e.add(o)}e.add(Qe(i.r*.32,i.r*.32,.2,xt(9067056),0,i.y-.08,0,16));let r=new Yt(new zi(i.r,.08,6,36),xt(Er));r.rotation.x=Math.PI/2,r.position.y=i.y-.05,e.add(r);for(let a=0;a<4;a++){let o=a/4*Math.PI*2+.4,l=Qe(.08,.08,i.y*.75,xt(Er),Math.cos(o)*i.r*.45,i.y*.62,Math.sin(o)*i.r*.45,6);l.rotation.z=Math.cos(o)*.5,l.rotation.x=-Math.sin(o)*.5,e.add(l)}return t||(e.add(new Yt(new ri(.75,10,8),xt(5221962)).translateY(i.y+1.5)),e.add(new Yt(new ri(.5,9,7),xt(7128143)).translateY(i.y+1.2).translateX(.55)),e.add(new Yt(new ri(.5,9,7),xt(7128143)).translateY(i.y+1.25).translateX(-.5).translateZ(.2))),e}function Zc(i){let t=new jt,e=i.bx-i.ax,n=i.by-i.ay,s=i.bz-i.az,r=Math.hypot(e,n,s),a=Math.hypot(e,s),o=new D((i.ax+i.bx)/2,(i.ay+i.by)/2,(i.az+i.bz)/2),l=new jt;if(l.position.copy(o),l.rotation.order="YXZ",l.rotation.y=Math.atan2(e,s),l.rotation.x=-Math.atan2(n,a),t.add(l),i.kind==="slide"){l.add(Sr(i.w,.1,r,xt(16738890),0,-.05,0));for(let h of[-1,1])l.add(Sr(.12,.35,r,xt(16761402),h*i.w/2,.1,0))}else{let c=Math.max(3,Math.round(r/.32));for(let h=0;h<c;h++)l.add(Sr(i.w,.08,r/c*.82,xt(h%2?Kc:11697222),0,-.04,-r/2+(h+.5)*(r/c)));if(i.rails)for(let h of[-1,1]){let u=Qe(.035,.035,r,xt(15258784),h*i.w/2,.75,0,6);u.rotation.x=Math.PI/2,l.add(u);let f=Math.max(2,Math.round(r/1.4));for(let g=0;g<=f;g++)l.add(Qe(.05,.05,.8,xt(Er),h*i.w/2,.38,-r/2+g*r/f,6))}}if(i.kind!=="bridge")for(let c of[.35,.7]){let h=i.ay+(i.by-i.ay)*c;h<.4||t.add(Qe(.07,.07,h,xt(Er),i.ax+e*c,h/2,i.az+s*c,6))}return t}function $c(){let i=new jt;i.add(Qe(.28,.36,.5,xt(16774364),0,.25,0,12));let t=Nt(.8,xt(15217706),0,.5,0,1,.5,1,18);i.add(t);for(let e=0;e<7;e++){let n=e/7*Math.PI*2,s=e===0?0:.48;i.add(Nt(.11,xt(16777215),Math.cos(n)*s,.86-(s?.12:0),Math.sin(n)*s,1,.4,1,8))}return{root:i,cap:t}}function th(i=1){let t=new jt;t.add(Qe(.3*i,.45*i,4*i,xt(6964262),0,2*i,0,8));let e=xt(4168262),n=xt(6076492);return t.add(Nt(1.8*i,e,0,4.6*i,0,1,.85,1,10)),t.add(Nt(1.2*i,n,1*i,4*i,.5*i,1,.85,1,9)),t.add(Nt(1.3*i,n,-1*i,4.3*i,-.4*i,1,.85,1,9)),t}function eh(i=1){let t=new jt,e=xt(5681226);return t.add(Nt(.7*i,e,0,.4*i,0,1,.7,1,10)),t.add(Nt(.5*i,xt(7128150),.5*i,.35*i,.2*i,1,.7,1,9)),t}function nh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let f=0;f<c.length;f++)h[f]=c.charCodeAt(f);let u=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function ih(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var sh={jump:"data:audio/mpeg;base64,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",bounce:"data:audio/mpeg;base64,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",grab:"data:audio/mpeg;base64,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",slide:"data:audio/mpeg;base64,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",lose:"data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVUapsFJoki4WRDBB1IhICkgZI+oCtHpCVr/wojQ0fqQwYj+r//2f+VJD09gzWkkFDTK1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE+AINSSsYR5hxSjYco1j0jxFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEtwPGKBkkQwhmIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",win:"data:audio/mpeg;base64,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"};var gm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ce=null,wr=!1;function rh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Zo(){rh(),wr=!0;try{if(Ce||(Ce=document.createElement("audio"),Ce.src=gm,Ce.loop=!0,Ce.preload="auto",Ce.setAttribute("playsinline",""),Ce.setAttribute("webkit-playsinline",""),Ce.setAttribute("x-webkit-airplay","deny"),Ce.volume=.01,Ce.addEventListener("pause",()=>{wr&&!document.hidden&&setTimeout(()=>wr&&Ce.paused&&Ce.play().catch(()=>{}),300)})),Ce.paused){let i=Ce.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function ah(){wr=!1;try{Ce&&!Ce.paused&&Ce.pause()}catch{}}function oh(i,t){rh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Tr=i=>440*Math.pow(2,(i-69)/12),mm=[[36,[60,64,67]],[45,[60,64,69]],[41,[60,65,69]],[43,[59,62,67]],[36,[60,64,67]],[45,[60,64,69]],[38,[62,65,69]],[43,[59,62,67]]],Am=[[0,0,79],[0,3,76],[0,6,79],[0,10,81],[1,0,79],[1,6,76],[1,10,72],[2,0,77],[2,3,76],[2,6,74],[2,10,72],[3,0,74],[3,6,79],[4,0,84],[4,3,83],[4,6,81],[4,10,79],[5,0,76],[5,6,79],[6,0,77],[6,6,74],[6,10,77],[7,0,79],[7,8,83]],Xi=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(Zo(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;oh(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){ah(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Zo(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="play"?118:100,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_pluckBuffer(t){if(this.plucks.has(t))return this.plucks.get(t);let e=this.ctx,n=e.sampleRate,s=Math.floor(n*1.2),r=e.createBuffer(1,s,n),a=r.getChannelData(0),o=Math.max(2,Math.round(n/Tr(t))),l=new Float32Array(o);for(let h=0;h<o;h++)l[h]=(Math.random()*2-1)*.6;let c=0;for(let h=0;h<s;h++){let u=(c+1)%o,f=(l[c]+l[u])*.5*.993;a[h]=l[c],l[c]=f,c=u}return this.plucks.set(t,r),r}pluck(t,e,n=.25,s=this.music){let r=this.ctx.createBufferSource();r.buffer=this._pluckBuffer(t);let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=1400;let o=this.ctx.createGain();o.gain.value=n,r.connect(a).connect(o).connect(s),r.start(e),r.stop(e+1.2)}marimba(t,e,n=.12,s=this.music){this._tone("sine",Tr(t),e,.45,n,s,.002),this._tone("sine",Tr(t)*3.93,e,.08,n*.35,s,.001)}bongo(t,e=300,n=.12,s=this.music){this._slide("sine",e*1.5,e,t,.14,n,s)}_tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}_noise(t,e,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let f=c.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.015),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}setTension(t){this.tension=t}_schedule(){var a,o;let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=this.mode==="play",r=60/(this.tempo+(n?((a=this.tension)!=null?a:0)*26:0))/4;for(;this.nextTime<e;){let l=this.nextTime,c=this.step%128,h=Math.floor(c/16),u=c%16,[f,g]=mm[h];if((u===0||u===10)&&this.pluck(f,l,.32),(u===6||u===14)&&this.pluck(f+7,l,.22),u%4===2)for(let m of g)this.marimba(m,l,.035);for(let[m,A,p]of Am)m===h&&A===u&&this.marimba(p,l,n?.12:.1);if(n)u%4===0&&this.bongo(l,220,.1),u%8===6&&this.bongo(l,330,.08),u%2===1&&this._noise(l,.035,.025,"highpass",7e3,.8,this.music),((o=this.tension)!=null?o:0)>.5&&u%2===0&&this._noise(l,.03,.03,"highpass",9e3,.8,this.music);else if(u===8&&Math.random()<.25){let m=2400+Math.random()*900;this._slide("sine",m,m*1.3,l,.1,.025,this.music),this._slide("sine",m*1.2,m*.9,l+.13,.09,.02,this.music)}this.step++,this.nextTime+=r}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"step":this._noise(n,.04,.05,"bandpass",e?900:1600,2.5);break;case"jump":this._slide("sine",300,760,n,.18,.12);break;case"land":this._tone("sine",120,n,.12,e?.22:.12),this._noise(n,.06,.06,"lowpass",600);break;case"bounce":{let r=this.ctx,a=r.createOscillator();a.type="sine",a.frequency.setValueAtTime(140,n),a.frequency.exponentialRampToValueAtTime(620,n+.35);let o=r.createOscillator();o.frequency.value=22;let l=r.createGain();l.gain.value=40,o.connect(l).connect(a.frequency);let c=r.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(.18,n+.02),c.gain.exponentialRampToValueAtTime(1e-4,n+.55),a.connect(c).connect(s),a.start(n),o.start(n),a.stop(n+.6),o.stop(n+.6);break}case"slide":this._slide("sine",1400,420,n,.7,.06);break;case"grab":this._noise(n,.15,.1,"bandpass",900,1,s,4e3),[84,88,91,96,100].forEach((r,a)=>this._tone("sine",Tr(r),n+.05+a*.05,.25,.07));break;case"stolen":this._slide("triangle",660,330,n,.35,.09),this._slide("triangle",520,260,n+.3,.45,.08);break;case"rivalGrab":this._noise(n,.12,.06,"bandpass",1200,1,s,3e3),this._tone("sine",520,n+.05,.12,.05);break;case"whiff":this._noise(n,.12,.05,"bandpass",1500,1.2,s,600);break;case"count":this._tone("square",660,n,.14,.05);break;case"go":this._tone("square",990,n,.35,.06),this._tone("square",1320,n,.35,.03);break;case"tick":this._tone("square",e<=3?1200:900,n,.05,.05);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[88,.6],[91,.72],[96,.9]].forEach(([r,a])=>this.marimba(r,n+a,.2,s)),[0,.12,.24,.36].forEach(r=>this.bongo(n+.9+r,260,.14,s));break;case"lose":[79,76,72,67].forEach((r,a)=>this.marimba(r,n+a*.18,.16,s));break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.04);break;default:}}};nh(Xi,sh);ih(Xi);var $o={title:["\u0645\u063A\u0627\u0645\u0631\u0629 \u0627\u0644\u0630\u064A\u0644 \u0627\u0644\u0630\u0647\u0628\u064A","Golden Tail Chase"],level:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","Level"],locked:["\u0627\u0643\u0633\u0628 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Win the level before"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628!","Let's play!"],exit:["\u062E\u0631\u0648\u062C","Exit"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],ready:["\u0627\u0633\u062A\u0639\u062F!","Get ready!"],goal:["\u{1F996} \u062E\u0644\u0651\u064A \u0627\u0644\u0630\u064A\u0644 \u0627\u0644\u0630\u0647\u0628\u064A \u0645\u0639\u0627\u0643 \u0644\u0645\u0627 \u0627\u0644\u0648\u0642\u062A \u064A\u062E\u0644\u0635!","\u{1F996} Wear the golden tail when the clock hits 0:00!"],go:["\u064A\u0644\u0627!","Go!"],you:["\u0623\u0646\u0627","YOU"],me:["\u0645\u0639\u0627\u0643 \u0627\u0644\u0630\u064A\u0644!","You have it!"],grab:["\u0627\u0645\u0633\u0643","GRAB"],jump:["\u0646\u0637","JUMP"],got:["\u0645\u0633\u0643\u062A \u0627\u0644\u0630\u064A\u0644! \u0627\u062C\u0631\u064A! \u{1F3C3}","Got it! Run! \u{1F3C3}"],lost:["\u062E\u062F\u0648\u0647 \u0645\u0646\u0643! \u0627\u0645\u0633\u0643\u0647 \u062A\u0627\u0646\u064A!","They took it! Grab it back!"],fell:["\u0648\u0642\u0639\u062A! \u0627\u0631\u062C\u0639 \u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u{1F996}","You fell! Back to the start \u{1F996}"],hint:["\u0627\u062C\u0631\u064A \u0648\u0631\u0627 \u0627\u0644\u0644\u064A \u0645\u0639\u0627\u0647 \u0627\u0644\u0630\u064A\u0644 \u0648\u0627\u062F\u0648\u0633 \xAB\u0627\u0645\u0633\u0643\xBB","Chase whoever has the tail and press GRAB"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0627\u0644\u0630\u064A\u0644 \u0645\u0639\u0627\u0643! \u{1F389}","Well done! The tail is yours! \u{1F389}"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0627\u0644\u0630\u064A\u0644 \u0645\u0639\u0627\u0643\u064A! \u{1F389}","Well done! The tail is yours! \u{1F389}"],lose_m:["\u0642\u0631\u0651\u0628\u062A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u{1F4AA}","So close! Try again \u{1F4AA}"],lose_f:["\u0642\u0631\u0651\u0628\u062A\u064A! \u062C\u0631\u0651\u0628\u064A \u062A\u0627\u0646\u064A \u{1F4AA}","So close! Try again \u{1F4AA}"],held:["\u0645\u0639\u0627\u0643 \u0627\u0644\u0630\u064A\u0644","Tail time"],grabs:["\u0645\u0633\u0643\u0627\u062A","Grabs"],sec:["\u062B","s"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next level"],again:["\u062A\u0627\u0646\u064A","Again"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u063A\u0627\u0628\u0629...","Getting the forest ready..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},fs="ar",lh=!1,ch=i=>{fs=i==="en"?"en":"ar"},hh=i=>{lh=!!i},Vr=()=>fs,Bt=i=>{let t=`${i}_${lh?"f":"m"}`,e=$o[t]?t:i;return $o[e]?$o[e][fs==="en"?1:0]:i},rn=i=>fs==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),ps=i=>fs==="en"?i.en:i.ar;var uh=`
.gt-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.gt-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.gt-layer{position:absolute;inset:0;pointer-events:none}
.gt-layer button,.gt-layer .gt-card{pointer-events:auto}
.gt-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.gt-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.gt-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.gt-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.gt-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.gt-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.gt-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.gt-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.gt-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.gt-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.gt-label.full{background:#ffd75e;animation:gtPulse .5s infinite alternate}
@keyframes gtPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.gt-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.gt-toast.show{opacity:1}
.gt-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.gt-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.gt-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:gtUp 1s ease-out forwards}
@keyframes gtUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.gt-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.gt-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.gt-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.gt-btn2{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.gt-btn2.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.gt-btn2[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.gt-btn2:active{transform:translateY(calc(var(--u)*.5))}
.gt-btn2:focus-visible,.gt-node:focus-visible,.gt-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.gt-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.gt-land .gt-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.gt-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.gt-card .ic{font-size:calc(var(--u)*8)}
.gt-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.gt-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.gt-card .pips{display:flex;gap:calc(var(--u)*.6)}
.gt-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.gt-card .pip.on{background:#f2a51e}
.gt-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.gt-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.gt-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.gt-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.gt-node.next{animation:gtPulse2 .8s infinite alternate}
@keyframes gtPulse2{to{transform:scale(1.08)}}
.gt-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.gt-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.gt-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.gt-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.gt-stars .off{filter:grayscale(1);opacity:.4}
.gt-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.gt-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.gt-made b{display:block;font-size:calc(var(--u)*5.4)}
.gt-made span{font-size:calc(var(--u)*2.8)}
.gt-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;function ft(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var dh=`
.gt-root{background:#7cc8f0;color:#2a3a1a}
.gt-padlbl{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;font-weight:900;pointer-events:none;text-shadow:0 2px 0 #fff,0 0 6px #fff}
.gt-padlbl .ic{font-size:calc(var(--u)*6)}
.gt-padlbl .c{display:inline-flex;align-items:center;gap:calc(var(--u)*.8);font-size:calc(var(--u)*3.8);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:999px;padding:0 calc(var(--u)*1.6)}
.gt-padlbl .n{font-size:calc(var(--u)*2.8);white-space:nowrap}
.gt-bubble{position:absolute;transform:translate(-50%,-100%);background:#fff;border:calc(var(--u)*.4) solid #e0a35c;border-radius:calc(var(--u)*2);padding:calc(var(--u)*.3) calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none}
.gt-bubble:after{content:'';position:absolute;left:50%;bottom:calc(var(--u)*-1.6);margin-left:calc(var(--u)*-1);border:calc(var(--u)*1) solid transparent;border-top-color:#e0a35c}
.gt-hint{position:absolute;left:50%;bottom:max(calc(var(--u)*4),env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;transition:opacity .3s}
.gt-chefs{display:flex;gap:calc(var(--u)*3)}
.gt-chef{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.6);background:#fff;border:calc(var(--u)*.6) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4) calc(var(--u)*4);cursor:pointer;color:#5a3a1a}
.gt-chef .f{font-size:calc(var(--u)*9)}
.gt-chef.on{border-color:#f2a51e;background:#fff3d0;box-shadow:0 0 0 calc(var(--u)*.6) #ffd75e}
.gt-big{font-size:calc(var(--u)*6);padding:calc(var(--u)*2.4) calc(var(--u)*8)}
.gt-stat{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
`,fh=`
.gt-root .gt-panel{background:rgba(250,255,240,.95);border-color:#2f8a3a;box-shadow:0 calc(var(--u)*1.2) 0 #1f6a2a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.35);color:#1f3a1a}
.gt-root .gt-title{color:#1f7a2a}
.gt-root .gt-logo{-webkit-text-stroke-color:#1f6a2a;text-shadow:0 calc(var(--u)*.8) 0 #1f6a2a;color:#ffd23a}
.gt-root .gt-node{background:radial-gradient(circle at 40% 35%,#3fae4a,#1f6a2a);box-shadow:0 calc(var(--u)*.8) 0 #0f4a1a;border-color:#ffd23a}
.gt-root .gt-node.lock{background:radial-gradient(circle at 40% 35%,#9ab89a,#5a7a5a);border-color:#fff}
.gt-root .gt-map{grid-template-columns:repeat(3,calc(var(--u)*17))}
.gt-timer{position:absolute;left:50%;top:max(calc(var(--u)*2),env(safe-area-inset-top));transform:translateX(-50%);width:calc(var(--u)*19);height:calc(var(--u)*19);border-radius:50%;background:radial-gradient(circle at 40% 35%,#2f9a3a,#14561e);border:calc(var(--u)*.9) solid #ffd23a;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*6.2);color:#fff;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.35);pointer-events:none}
.gt-timer.hot{background:radial-gradient(circle at 40% 35%,#ff5a4a,#a01a14);animation:gtBeat .5s infinite alternate}
@keyframes gtBeat{to{transform:translateX(-50%) scale(1.08)}}
.gt-holder{position:absolute;left:50%;top:calc(max(calc(var(--u)*2),env(safe-area-inset-top)) + var(--u)*21);transform:translateX(-50%);display:flex;align-items:center;gap:calc(var(--u)*1.4);background:linear-gradient(90deg,#1f6a2a,#2f9a3a);border:calc(var(--u)*.45) solid #ffd23a;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*3) calc(var(--u)*.4) calc(var(--u)*.6);color:#fff;font-weight:900;font-size:calc(var(--u)*4.2);white-space:nowrap;pointer-events:none}
.gt-holder .f{width:calc(var(--u)*7.4);height:calc(var(--u)*7.4);border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5)}
.gt-holder.me{background:linear-gradient(90deg,#e0a010,#ffc21a);color:#3a2a00}
.gt-you{position:absolute;transform:translate(-50%,-100%);font-weight:900;font-size:calc(var(--u)*3.6);color:#fff;-webkit-text-stroke:calc(var(--u)*.35) #1f6a2a;paint-order:stroke fill;pointer-events:none;text-align:center;line-height:1}
.gt-pointer{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);margin:calc(var(--u)*-5.5) 0 0 calc(var(--u)*-5.5);border-radius:50%;background:rgba(31,106,42,.85);border:calc(var(--u)*.5) solid #ffd23a;display:none;align-items:center;justify-content:center;flex-direction:column;font-size:calc(var(--u)*4.6);color:#fff;font-weight:900;pointer-events:none}
.gt-pointer small{font-size:calc(var(--u)*2.6)}
.gt-btn{position:absolute;border-radius:50%;border:calc(var(--u)*.7) solid rgba(255,255,255,.95);color:#fff;font-family:inherit;font-weight:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;padding:0;cursor:pointer;pointer-events:auto;box-shadow:0 calc(var(--u)*.9) 0 rgba(0,0,0,.3)}
.gt-btn b{font-size:calc(var(--u)*7);line-height:1}
.gt-btn span{font-size:calc(var(--u)*3)}
.gt-grab{width:calc(var(--u)*21);height:calc(var(--u)*21);background:radial-gradient(circle at 40% 35%,#ffcf3a,#e08a10)}
.gt-grab.near{animation:gtBeat2 .4s infinite alternate}
@keyframes gtBeat2{to{transform:scale(1.12)}}
.gt-jump{width:calc(var(--u)*16);height:calc(var(--u)*16);background:radial-gradient(circle at 40% 35%,#5ac8ff,#1f7ac8)}
.gt-btn:active{transform:scale(.92)}
.gt-count{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*3);pointer-events:none}
.gt-count .n{width:calc(var(--u)*30);height:calc(var(--u)*30);border-radius:50%;background:radial-gradient(circle at 40% 35%,#2f9a3a,#14561e);border:calc(var(--u)*1.2) solid #ffd23a;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*16);font-weight:900;color:#fff;animation:gtPop .9s ease-out infinite}
@keyframes gtPop{from{transform:scale(1.3)}to{transform:scale(1)}}
.gt-count .r{background:#1f6a2a;color:#fff;font-weight:900;font-size:calc(var(--u)*7);padding:calc(var(--u)*1) calc(var(--u)*8);transform:rotate(-4deg);border-top:calc(var(--u)*.6) solid #ffd23a;border-bottom:calc(var(--u)*.6) solid #ffd23a}
.gt-count .s{font-weight:900;font-size:calc(var(--u)*4.2);color:#fff;-webkit-text-stroke:calc(var(--u)*.35) #1f3a1a;paint-order:stroke fill;text-align:center;max-width:90%}
.gt-banner{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*8);color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.6) #6a3a00;paint-order:stroke fill;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .25s}
.gt-banner.show{opacity:1}
`;var Rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ne=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},xm=new Ni(-1,1,1,-1,0,1),tl=class extends fe{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},vm=new tl,zn=class{constructor(t){this._mesh=new Yt(vm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Yi=class extends Ne{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Dn.clone(t.uniforms),this.material=new pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new zn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var gs=class extends Ne{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pr=class extends Ne{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Lr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Mt);this._width=n.width,this._height=n.height,e=new we(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yi(Rr),this.copyPass.material.blending=en,this.clock=new Oi}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gs!==void 0&&(a instanceof gs?n=!0:a instanceof Pr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ur=class extends Ne{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ph={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ji=class i extends Ne{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new Et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new we(r,a,{type:je}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new we(r,a,{type:je});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let g=new we(r,a,{type:je});g.texture.name="UnrealBloomPass.v"+u,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),a=Math.round(a/2)}let o=ph;this.highPassUniforms=Dn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Mt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Rr;this.copyUniforms=Dn.clone(h.uniforms),this.blendMaterial=new pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Et,this.oldClearAlpha=1,this.basic=new sn,this.fsQuad=new zn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ji.BlurDirectionX=new Mt(1,0);ji.BlurDirectionY=new Mt(0,1);var gh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Dr=class extends Ne{constructor(){super();let t=gh;this.uniforms=Dn.clone(t.uniforms),this.material=new dr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new zn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ot.getTransfer(this._outputColorSpace)===Qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===No?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var mh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},Cm={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},ym={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function _m(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new fe;l.setAttribute("position",new ve(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let f=new si(c);f.colorSpace=xe;let g=new ni({map:f,color:ym[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Rn,fog:!1,sizeAttenuation:!0}),m=new ii(l,g);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function Im(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var Mm={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2},bm=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,Sm=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;function Em(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=p=>{if(!n[p]){let d=new Audio(`${e}${p}_${t}.mp3`);d.preload="auto",d.volume=.95,n[p]=d}return n[p]},u=(p,d)=>{let b=performance.now();if(!d&&b-r<6e3||c)return;let M=p+(1+Math.floor(Math.random()*Mm[p])),C=h(M);c=!0,r=b,C.currentTime=0;let V=()=>{c=!1};C.onended=V,C.onerror=V;let S=C.play();S&&S.catch&&S.catch(V),setTimeout(V,4e3)},f=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let p=s.createOscillator(),d=s.createGain();p.type="sine",p.frequency.setValueAtTime(520,s.currentTime),p.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),d.gain.setValueAtTime(.08,s.currentTime),d.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),p.connect(d),d.connect(s.destination),p.start(),p.stop(s.currentTime+.13)}catch{}},g=()=>{a=performance.now(),f(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",g,{passive:!0}),window.addEventListener("keydown",g,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let p=(i.innerText||"").slice(0,600);p!==m&&(m=p,bm.test(p)?u("win",!1):Sm.test(p)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let p=performance.now();!o||document.hidden||(p-a>14e3?(u("idle",!1),a=p-4e3):p-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function Ah(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},mh[e.get("look")||t.preset||"warm"]||mh.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,f=null,g=0,m=0,A=0,p=!1,d=performance.now();function b(M,C){let V=i.getSize(new Mt);g=V.x,m=V.y,A=i.getPixelRatio(),c=new Lr(i),c.setPixelRatio(A),c.setSize(g,m),h=new Ur(M,C),c.addPass(h),s||(u=new ji(new Mt(Math.max(2,g>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Dr),f=new Yi(Cm),f.uniforms.contrast.value=n.contrast,f.uniforms.sat.value=n.sat,f.uniforms.tint.value=n.tint,f.uniforms.vig.value=n.vig,c.addPass(f)}return i.render=function(M,C){if(p||i.getRenderTarget()!==null||i.autoClear===!1||!M||!C||!M.isScene)return a(M,C);try{c||b(M,C);let V=i.getSize(new Mt),S=i.getPixelRatio();(V.x!==g||V.y!==m||S!==A)&&(g=V.x,m=V.y,A=S,c.setPixelRatio(S),c.setSize(g,m),u&&u.resolution.set(Math.max(2,g>>1),Math.max(2,m>>1))),h.scene=M,h.camera=C,f.uniforms.time.value=(performance.now()-d)/1e3;let E=performance.now(),U=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let _=o.get(M);_||(_=_m(M,C,e.get("look")||t.preset||"warm",r),o.set(M,_)),Im(_,C,U)}p=!0,c.render(),p=!1}catch(V){p=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",V&&V.message),i.render=a,a(M,C)}},!e.has("nocheer")&&!r&&setTimeout(()=>Em(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}function Nr(i,t=2759226,e=.06){let n=Nr._m||(Nr._m=new Map),s=n.get(t);s||(s=new sn({color:t,side:Me,fog:!1}),n.set(t,s));let r=[];i.traverse(a=>{a.isMesh&&!a.userData.__ol&&a.geometry&&a.material&&!a.material.transparent&&a.material.opacity!==0&&r.push(a)});for(let a of r){let o=new Yt(a.geometry,s);o.userData.__ol=!0,o.scale.setScalar(1+e),o.renderOrder=-1,a.add(o)}return i}var zr=(i,t,e=.04)=>(Nr(i.root||i,t,e),i),wm=(...i)=>zr(Qc(...i),3808262),Tm=(...i)=>zr($c(...i),4852250),Vm=(...i)=>zr(th(...i),928264),Rm=(...i)=>zr(eh(...i),928264),Pm=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},Lm=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},Um={dino:"\u{1F996}",raccoon:"\u{1F99D}",bear:"\u{1F43B}",fox:"\u{1F98A}",bunny:"\u{1F430}",cat:"\u{1F431}"},Fr;function Dm(){if(Fr)return Fr;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Fr=new si(i),Fr}var el=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new fe,this.g.setAttribute("position",new ve(this.pos,3)),this.pts=new ii(this.g,new ni({color:16769126,size:.28,map:Dm(),transparent:!0,depthWrite:!1,blending:Rn})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let n=0;n<e;n++)this.pos[n*3+1]=-50}emit(t,e,n,s,r,a,o=.8){let l=this.i++%this.n;this.pos.set([t,e,n],l*3),this.vel.set([s,r,a],l*3),this.life[l]=o}burst(t,e,n,s=30,r=5){for(let a=0;a<s;a++){let o=Math.random()*Math.PI*2,l=r*(.4+Math.random()*.6);this.emit(t,e,n,Math.cos(o)*l,2+Math.random()*r,Math.sin(o)*l,.9)}}update(t){for(let e=0;e<this.n;e++)if(!(this.life[e]<=0)){this.life[e]-=t,this.vel[e*3+1]-=7*t;for(let n=0;n<3;n++)this.pos[e*3+n]+=this.vel[e*3+n]*t;this.life[e]<=0&&(this.pos[e*3+1]=-50)}this.g.attributes.position.needsUpdate=!0}},nl=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),ch(e.lang),hh(e.gender==="girl"),this.age=Number(e.age)||5,this.save=kc(e.save),this.base=e.base||"./",this.sound=new Xi,this.sound.muted=!!this.save.muted,this.quality={low:Pm()},document.getElementById("gt-style")||document.head.append(ft("style",{id:"gt-style",text:uh+dh+fh})),this.root=ft("div",{class:"gt-root",dir:Vr()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!Lm()){this.root.append(ft("div",{class:"gt-loading"},ft("div",{},Bt("noWebgl")," ",ft("button",{class:"gt-btn2",onclick:()=>this.post({type:"exit"})},Bt("exit")))));return}this.loading=ft("div",{class:"gt-loading"},Bt("loading")),this.root.append(this.loading),this.renderer=Ah(new or({antialias:!this.quality.low,powerPreference:"high-performance"}),{preset:"warm"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=xe,this.renderer.toneMapping=ls,this.root.prepend(this.renderer.domElement),this.layer=ft("div",{class:"gt-layer"}),this.root.append(this.layer),this.camera=new Ee(50,1,.3,160),this.input={x:0,z:0,pointer:null,ox:0,oy:0,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new Oi,this._buildWorld(),this._fonts().then(()=>{this.loading.remove(),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.root.classList.toggle("gt-land",this.cw>this.ch*1.15)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?62:50,this.camera.updateProjectionMatrix())}_buildWorld(){let t=this.scene=new cr;t.background=new Et(10475775),t.fog=new lr(12576511,30,70),t.add(new mr(16776168,4880954,1.9));let e=new Ar(16773840,1.5);e.position.set(-10,25,12),t.add(e);let n=new Yt(new os(55,48),xt(8176726));n.rotation.x=-Math.PI/2,t.add(n);for(let[s,r,a]of[[0,6,3.6],[-6,-9,3],[8,1,3.2],[-12,1,2.6],[12,-14,2.4],[-14,-14,2.6]]){let o=new Yt(new os(a,24),xt(13152376));o.rotation.x=-Math.PI/2,o.position.set(s,.01,r),t.add(o)}for(let s of Je)t.add(wm(s,!1));for(let s of li)t.add(Zc(s));this.mushrooms=Wi.map(s=>{let r=Tm();return r.root.position.set(s.x,0,s.z),t.add(r.root),r});for(let s=0;s<28;s++){let r=s/28*Math.PI*2,a=25+1.5+s%3*2.2,o=Vm(1+s%4*.18);o.position.set(Math.cos(r)*a,0,Math.sin(r)*a),t.add(o)}for(let s=0;s<16;s++){let r=s/16*Math.PI*2+.2,a=Rm(.8+s%3*.3);a.position.set(Math.cos(r)*(25-1.5),0,Math.sin(r)*(25-1.5)),t.add(a)}this.dino=Yc(),t.add(this.dino.root),this.dino.root.scale.setScalar(1.3),this.tail=Jc(),t.add(this.tail.root),this.marker=Fn(.28,.55,xt(16765498,16752640,.7),0,0,0,4),this.marker.rotation.x=Math.PI,t.add(this.marker),this.ring=new Yt(new ur(.55,.7,32),new sn({color:16777215,transparent:!0,opacity:.85,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,t.add(this.ring),this.dizzy=new jt;for(let s=0;s<3;s++){let r=Fn(.09,.18,xt(16769126,16760832,.7),Math.cos(s/3*Math.PI*2)*.35,0,Math.sin(s/3*Math.PI*2)*.35,5);this.dizzy.add(r)}this.dizzy.visible=!1,t.add(this.dizzy),this.sparkles=new el(t,260),this.animals=[]}_setRivals(t){for(let e of this.animals)this.scene.remove(e.root);this.animals=[];for(let e=0;e<t;e++){let n=jc(Ir[e].kind);this.scene.add(n.root),this.animals.push(n)}}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=ft("div",{class:"gt-joy"},ft("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let s=this.u*12,r=n.clientX-this.input.ox,a=n.clientY-this.input.oy,o=Math.hypot(r,a);o>s&&(r=r/o*s,a=a/o*s),this.input.x=r/s,this.input.z=a/s,this.joy.firstChild.style.transform=`translate(${r}px,${a}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this.input.z=0,this._joyHome())};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&!n.target.closest(".gt-btn")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause(),this.mode==="play"&&s===" "&&!n.repeat&&(this.chase&&this.chase.jump(),n.preventDefault()),this.mode==="play"&&(s==="e"||s==="enter"||s==="shift")&&!n.repeat&&(this.chase&&this.chase.grab(),n.preventDefault())):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=ft("button",{class:"gt-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},Bt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_joyHome(){if(!this.joy)return;let t=this.mode==="play";this.joy.style.display=t?"block":"none",this.joy.style.left=`${Vr()==="en"?this.u*18:this.cw-this.u*18}px`,this.joy.style.top=`${this.ch-this.u*18}px`,this.joy.firstChild.style.transform="translate(0,0)"}_readInput(){let t=this.input.keys,e=this.input.x,n=this.input.z;return(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1),(t.has("arrowup")||t.has("w"))&&(n=-1),(t.has("arrowdown")||t.has("s"))&&(n=1),{x:e,z:n}}_clear(){this.layer.replaceChildren()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_mute(t){let e=ft("button",{class:"gt-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=ft("div",{class:"gt-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_topLeft(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)"}_topEnd(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-end:calc(var(--u)*3)"}showMenu(){this.mode="menu",this.paused=!1,this.chase=null,this.joy&&(this.joy.style.display="none"),this.sound.setMode("menu"),this._setRivals(5),this._clear();let t=Ke.map((e,n)=>{var a;let s=n+1>this.save.unlocked,r=(a=this.save.stars[e.id])!=null?a:0;return ft("button",{class:`gt-node${s?" lock":""}${n+1===this.save.unlocked?" next":""}`,"aria-label":`${Bt("level")} ${e.id} ${ps(e)}`,title:ps(e),onclick:()=>{if(s){this.sound.play("no"),this.toast(Bt("locked"));return}this.startLevel(n)}},s?"\u{1F512}":rn(e.id),ft("span",{class:"stars"},s?"":"\u2B50".repeat(r)+"\u2606".repeat(3-r)))});this.layer.append(ft("button",{class:"gt-round",style:this._topLeft(),"aria-label":Bt("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},Vr()==="en"?"\u2190":"\u2192"),ft("div",{class:"gt-dim",style:"background:none"},ft("div",{class:"gt-panel"},ft("div",{class:"gt-logo"},"\u{1F996} ",Bt("title")," \u2728"),ft("div",{class:"gt-map",style:"margin-bottom:calc(var(--u)*4)"},t),ft("button",{class:"gt-btn2 gt-big",onclick:()=>this.startLevel(Math.min(this.save.unlocked,Ke.length)-1)},"\u25B6 ",Bt("play")))),this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl())}startLevel(t){this.levelIndex=t,this.chase=new br({level:t,easy:this.age<=4,seed:(Date.now()&65535)+1}),this._setRivals(this.chase.rivals.length),this.mode="play",this.paused=!1,this.sound.setMode("play"),this.sound.setTension(0),this.cam=null,this._hud(),this._lastHolder=this.chase.holder,this._joyHome()}_hud(){this._clear();let t=Ke[this.levelIndex];this.hud={timer:ft("div",{class:"gt-timer"},""),holder:ft("div",{class:"gt-holder"},ft("span",{class:"f"},""),ft("span",{},"")),you:ft("div",{class:"gt-you"},Bt("you"),ft("br"),"\u25BC"),pointer:ft("div",{class:"gt-pointer"},"\u2728",ft("small",{},"")),count:ft("div",{class:"gt-count"},ft("div",{class:"n"},rn(3)),ft("div",{class:"r"},Bt("ready")),ft("div",{class:"s"},`${Bt("level")} ${rn(t.id)} \xB7 ${ps(t)}`),ft("div",{class:"s"},Bt("goal"))),banner:ft("div",{class:"gt-banner"}),grab:ft("button",{class:"gt-btn gt-grab","aria-label":Bt("grab"),style:"bottom:max(calc(var(--u)*20),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*4)"},ft("b",{},"\u270B"),ft("span",{},Bt("grab"))),jump:ft("button",{class:"gt-btn gt-jump","aria-label":Bt("jump"),style:"bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*6)"},ft("b",{},"\u2B06"),ft("span",{},Bt("jump")))};for(let[e,n]of[[this.hud.grab,()=>this.chase&&this.chase.grab()],[this.hud.jump,()=>this.chase&&this.chase.jump()]])e.addEventListener("pointerdown",s=>{s.stopPropagation(),s.preventDefault(),n()});this.layer.append(ft("button",{class:"gt-round",style:this._topLeft(),"aria-label":Bt("paused"),onclick:e=>{e.stopPropagation(),this.pause()}},"\u23F8"),this._mute(this._topEnd()),this.hud.timer,this.hud.holder,this.hud.you,this.hud.pointer,this.hud.banner,this.hud.grab,this.hud.jump,this.hud.count,this._toastEl()),this._hc={}}_banner(t,e=1.4){this.hud.banner.textContent=t,this.hud.banner.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.hud&&this.hud.banner.classList.remove("show"),e*1e3)}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.x=this.input.z=0,this.joy.style.display="none",this.sound.suspend();let t=ft("div",{class:"gt-dim"},ft("div",{class:"gt-panel"},ft("div",{class:"gt-title"},Bt("paused")),ft("button",{class:"gt-btn2",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume()}},"\u25B6 ",Bt("resume")),ft("button",{class:"gt-btn2 wood",onclick:()=>{this.sound.resume(),this.startLevel(this.levelIndex)}},"\u21BB ",Bt("restart")),ft("button",{class:"gt-btn2 wood",onclick:()=>{this.sound.resume(),this.showMenu()}},Bt("menu"))));this.layer.append(t)}_results(){var a;let t=this.chase,e=t.result,n=this.levelIndex;if(this.mode="results",this.sound.setMode("menu"),this.sound.setTension(0),e.win){let o=Ke[n].id;this.save.stars[o]=Math.max((a=this.save.stars[o])!=null?a:0,e.stars),n+2>this.save.unlocked&&n+1<Ke.length&&(this.save.unlocked=n+2),this._saveNow(),this.sound.play("win"),this.sparkles.burst(t.player.x,t.player.y+1.5,t.player.z,80,7)}else this.sound.play("lose");let s=e.win&&n+1<Ke.length,r=ft("div",{class:"gt-dim"},ft("div",{class:"gt-panel"},ft("div",{class:"gt-title"},e.win?Bt("win"):Bt("lose")),e.win?ft("div",{class:"gt-stars"},[1,2,3].map(o=>ft("span",{class:o<=e.stars?"":"off"},"\u2B50"))):null,ft("div",{class:"gt-stat"},ft("span",{},"\u2728 ",Bt("held")," ",rn(Math.round(e.held)),Bt("sec")),ft("span",{},"\u270B ",Bt("grabs")," ",rn(e.grabs))),ft("div",{style:"display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center"},s?ft("button",{class:"gt-btn2",onclick:()=>this.startLevel(n+1)},Bt("next")," \u25B6"):null,ft("button",{class:e.win?"gt-btn2 wood":"gt-btn2",onclick:()=>this.startLevel(n)},"\u21BB ",Bt("again")),ft("button",{class:"gt-btn2 wood",onclick:()=>this.showMenu()},Bt("menu")))));this.hud.grab.remove(),this.hud.jump.remove(),this.joy.style.display="none",this.layer.append(r)}_playFrame(t,e){var a;let n=this.chase,s=n.step(t,this._readInput());for(let o of s)switch(o.type){case"count":this.sound.play("count"),this.hud.count.querySelector(".n").textContent=rn(o.n);break;case"go":this.sound.play("go"),this.hud.count.remove(),this._banner(Bt("go"),.8),setTimeout(()=>this.mode==="play"&&this.toast(Bt("hint"),2.6),900);break;case"tick":this.sound.play("tick",o.n);break;case"jump":this.sound.play("jump");break;case"land":o.who===0&&this.sound.play("land",o.hard);break;case"bounce":{(o.who===0||Math.hypot(o.x-n.player.x,o.z-n.player.z)<10)&&this.sound.play("bounce");let l=this.mushrooms[Wi.findIndex(c=>c.x===o.x&&c.z===o.z)];l&&(l.squash=1);break}case"whiff":this.sound.play("whiff");break;case"fell":this.sound.play("stolen"),this.toast(Bt("fell"),1.8),this.sparkles.burst(n.player.x,n.player.y+1,n.player.z,30,4),this.cam=null;break;case"steal":this.sparkles.burst(o.x,o.y+1,o.z,o.by===0?40:18,o.by===0?6:4),o.by===0?(this.sound.play("grab"),this._banner(Bt("got"))):o.from===0?(this.sound.play("stolen"),this.toast(Bt("lost"),1.6)):this.sound.play("rivalGrab");break;case"over":this.sound.play(o.win?"win":"lose"),setTimeout(()=>this.mode==="play"&&this._results(),900);break;default:}let r=n.player;r.sliding&&!this._wasSliding&&this.sound.play("slide"),this._wasSliding=r.sliding,r.grounded&&r.moving>.3&&n.state==="play"&&(this._stepT=((a=this._stepT)!=null?a:0)-t,this._stepT<=0&&(this._stepT=.26,this.sound.play("step",r.y<.1))),this.sound.setTension(n.timeLeft<=10&&n.state==="play"?1:0),this._sync(t,e)}_pose(t,e,n,s,r){t.root.position.set(e.x,e.y,e.z);let a=e.face-t.root.rotation.y;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;t.root.rotation.y+=a*Math.min(1,n*12);let o=e.grounded?e.moving:0,l=Math.sin(s*15+e.id)*.8*o;t.legs[0].rotation.x=e.grounded?l:-.6,t.legs[1].rotation.x=e.grounded?-l:.4,t.arms[0]&&(t.arms[0].rotation.x=e.grounded?-l*.8:-2.2,t.arms[1].rotation.x=e.grounded?l*.8:-2.2),t.body.position.y=e.grounded?Math.abs(Math.sin(s*15+e.id))*.08*o:0;let c=e.grounded?0:Math.max(-1,Math.min(1,e.vy/10));t.body.scale.set(1-c*.08,1+c*.12,1-c*.08),t.body.rotation.x=e.sliding?-.5:0,t.body.rotation.z=e.stun>0?Math.sin(s*18)*.2:0,r&&t.tail&&(t.tail.rotation.y=Math.sin(s*8)*.3*(.4+o))}_sync(t,e){var d,b,M;let n=this.chase,s=n.player;this._pose(this.dino,s,t,e,!0),n.rivals.forEach((C,V)=>this._pose(this.animals[V],C,t,e,!1));let r=n.holder===s?this.dino:this.animals[n.rivals.indexOf(n.holder)],a=n.holder;this._lastHolder!==a&&(this._lastHolder=a,this.tailPop=0),r.back.updateWorldMatrix(!0,!1);let o=new D;r.back.getWorldPosition(o),this.tail.root.position.copy(o),this.tail.root.rotation.y=r.root.rotation.y,this.tailPop=Math.min(1,((d=this.tailPop)!=null?d:1)+t*4),this.tail.root.scale.setScalar(1.45*(.4+.6*this.tailPop)),this.tail.parts.forEach((C,V)=>{C.position.x=Math.sin(e*9-V*.6)*.06*V}),Math.random()<t*14&&this.sparkles.emit(o.x+(Math.random()-.5)*.5,o.y,o.z+(Math.random()-.5)*.5,0,.6,0,.6),this.marker.position.set(a.x,a.y+2.35+Math.abs(Math.sin(e*5))*.25,a.z),this.marker.rotation.y=e*3,this.marker.visible=a!==s,this.ring.position.set(s.x,s.y+.04,s.z),this.ring.material.color.set(a===s?16765498:16777215);let l=n.all.find(C=>C.stun>0);this.dizzy.visible=!!l,l&&(this.dizzy.position.set(l.x,l.y+1.9,l.z),this.dizzy.rotation.y=e*8);for(let C of this.mushrooms)C.squash=Math.max(0,((b=C.squash)!=null?b:0)-t*3),C.cap.scale.set(1+C.squash*.25,.5-C.squash*.2+Math.sin(e*3)*.02,1+C.squash*.25);this.sparkles.update(t);let c=this.cw<this.ch,h=new D(s.x,s.y+(c?6.2:4.5),s.z+(c?6.6:5.3));this.cam||(this.cam=h.clone()),this.cam.lerp(h,Math.min(1,t*4)),this.camera.position.copy(this.cam),this.camera.lookAt(this.cam.x,this.cam.y-(c?7.5:5.6)+1,this.cam.z-(c?8:6.6)-1.5);let u=this._hc,f=Math.ceil(n.timeLeft);if(u.secs!==f&&(u.secs=f,this.hud.timer.textContent=`${rn(Math.floor(f/60))}:${rn(String(f%60).padStart(2,"0"))}`,this.hud.timer.classList.toggle("hot",f<=10&&n.state==="play")),u.holder!==a){u.holder=a;let C=a===s;this.hud.holder.classList.toggle("me",C),this.hud.holder.firstChild.textContent=(M=Um[a.kind])!=null?M:"\u{1F996}",this.hud.holder.lastChild.textContent=C?Bt("me"):ps(a.name)}let g=this._screen(s.x,s.y+2.1,s.z);this.hud.you.style.left=`${g[0]}px`,this.hud.you.style.top=`${g[1]}px`;let m=this._screen(a.x,a.y+1,a.z),A=a!==s&&(m[0]<0||m[0]>this.cw||m[1]<0||m[1]>this.ch||!m[2]);if(this.hud.pointer.style.display=A?"flex":"none",A){let C=this.cw/2,V=this.ch/2,S=a.x-s.x,E=a.z-s.z,U=Math.hypot(S,E)||1;S/=U,E/=U;let _=this.u*10,y=Math.min((C-_)/Math.abs(S||1e-6),(V-_)/Math.abs(E||1e-6));this.hud.pointer.style.left=`${C+S*y}px`,this.hud.pointer.style.top=`${V+E*y}px`,this.hud.pointer.lastChild.textContent=`${rn(Math.round(U))}\u0645`}let p=a!==s&&a.immune<=0&&Math.hypot(a.x-s.x,a.z-s.z)<2.2&&Math.abs(a.y-s.y)<1.4;this.hud.grab.classList.toggle("near",p)}_screen(t,e,n){let s=new D(t,e,n).project(this.camera);return[(s.x*.5+.5)*this.cw,(-s.y*.5+.5)*this.ch,s.z<1]}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),this.mode==="play"&&!this.paused)this._playFrame(t,e);else if(this.mode==="results")this.sparkles.update(t),this._sync(1e-4,e);else if(this.mode==="menu"){let n=Je[0],s=[this.dino,...this.animals];s.forEach((c,h)=>{let u=h/s.length*Math.PI*2+e*.4,f={id:h,x:n.x+Math.cos(u)*1.9,y:n.y,z:n.z+Math.sin(u)*1.9,face:u+Math.PI,moving:.7,grounded:!0,vy:0,stun:0,sliding:!1};this._pose(c,f,t,e,h===0)}),this.dino.back.updateWorldMatrix(!0,!1);let r=new D;this.dino.back.getWorldPosition(r),this.tail.root.position.copy(r),this.tail.root.rotation.y=this.dino.root.rotation.y,this.tail.root.scale.setScalar(1.45),this.marker.visible=!1,this.dizzy.visible=!1,this.ring.position.set(0,-5,0);let a=this.cw<this.ch,o=e*.1,l=a?14:10;this.camera.position.set(Math.sin(o)*l,n.y+(a?9:5),Math.cos(o)*l),this.camera.lookAt(0,n.y+.8,0),this.sparkles.update(t)}this.renderer.render(this.scene,this.camera)}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},il={start(i,t,e){let n=new nl(i,t||{},e);return il.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.GoldenTail=il;var OA=il;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
