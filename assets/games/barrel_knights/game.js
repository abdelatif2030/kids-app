(()=>{var mo="170";var kl=0,Go=1,Ol=2;var Zc=1,Bl=2,An=3,Dn=0,Ue=1,Oe=2,Ln=0,yi=1,Wo=2,Xo=3,Yo=4,Hl=5,Kn=100,Gl=101,Wl=102,Xl=103,Yl=104,Kl=200,Jl=201,Zl=202,jl=203,$r=204,ta=205,Ql=206,$l=207,th=208,eh=209,nh=210,ih=211,sh=212,rh=213,ah=214,ea=0,na=1,ia=2,bi=3,sa=4,ra=5,aa=6,oa=7,Ao=0,oh=1,ch=2,Un=0,lh=1,hh=2,uh=3,dh=4,fh=5,ph=6,gh=7;var jc=300,Si=301,Ei=302,ca=303,la=304,fr=306,Ki=1e3,jn=1001,ha=1002,Be=1003,mh=1004;var as=1005;var nn=1006,_r=1007;var Qn=1008;var yn=1009,Qc=1010,$c=1011,Ji=1012,xo=1013,$n=1014,sn=1015,ts=1016,vo=1017,Co=1018,wi=1020,tl=35902,el=1021,nl=1022,je=1023,il=1024,sl=1025,_i=1026,Ti=1027,yo=1028,_o=1029,rl=1030,Io=1031;var Mo=1033,Vs=33776,Ps=33777,Ls=33778,Us=33779,ua=35840,da=35841,fa=35842,pa=35843,ga=36196,ma=37492,Aa=37496,xa=37808,va=37809,Ca=37810,ya=37811,_a=37812,Ia=37813,Ma=37814,ba=37815,Sa=37816,Ea=37817,wa=37818,Ta=37819,Ra=37820,Va=37821,Ds=36492,Pa=36494,La=36495,al=36283,Ua=36284,Da=36285,qa=36286;var qs=2300,Na=2301,Ir=2302,Ko=2400,Jo=2401,Zo=2402;var Ah=3200,xh=3201;var ol=0,vh=1,Pn="",we="srgb",Li="srgb-linear",pr="linear",te="srgb";var ri=7680;var jo=519,Ch=512,yh=513,_h=514,cl=515,Ih=516,Mh=517,bh=518,Sh=519,Qo=35044;var $o="300 es",vn=2e3,Ns=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mr=Math.PI/180,za=180/Math.PI;function es(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function Eh(s,t){return(s%t+t)%t}function br(s,t,e){return(1-e)*s+e*t}function zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Pt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class s{constructor(t,e,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],A=i[0],g=i[3],d=i[6],x=i[1],_=i[4],v=i[7],w=i[2],S=i[5],E=i[8];return r[0]=a*A+o*x+c*w,r[3]=a*g+o*_+c*S,r[6]=a*d+o*v+c*E,r[1]=l*A+h*x+u*w,r[4]=l*g+h*_+u*S,r[7]=l*d+h*v+u*E,r[2]=f*A+p*x+m*w,r[5]=f*g+p*_+m*S,r[8]=f*d+p*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,m=e*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(i*l-h*n)*A,t[2]=(o*n-i*a)*A,t[3]=f*A,t[4]=(h*e-i*c)*A,t[5]=(i*r-o*e)*A,t[6]=p*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sr=new Dt;function ll(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wh(){let s=zs("canvas");return s.style.display="block",s}var tc={};function Wi(s){s in tc||(tc[s]=!0,console.warn(s))}function Th(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rh(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vh(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yt={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?pr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ii(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ec=[.64,.33,.3,.6,.15,.06],nc=[.2126,.7152,.0722],ic=[.3127,.329],sc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Li]:{primaries:ec,whitePoint:ic,transfer:pr,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:ec,whitePoint:ic,transfer:te,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,outputColorSpaceConfig:{drawingBufferColorSpace:we}}});var ai,Fa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=zs("canvas")),ai.width=t.width,ai.height=t.height;let n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ph=0,Fs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Er(i[a].image)):r.push(Er(i[a]))}else r=Er(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Er(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Fa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lh=0,De=class s extends qn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=jn,i=jn,r=nn,a=Qn,o=je,c=yn,l=s.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=es(),this.name="",this.source=new Fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ki:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ki:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=jc;De.DEFAULT_ANISOTROPY=1;var de=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],m=c[9],A=c[2],g=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(p+1)/2,w=(d+1)/2,S=(h+f)/4,E=(u+A)/4,T=(m+g)/4;return _>v&&_>w?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=E/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=T/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=T/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-A)/x,this.z=(f-h)/x,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ks=class extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(u!==A||c!==f||l!==p||h!==m){let g=1-o,d=c*f+l*p+h*m+u*A,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let w=Math.sqrt(_),S=Math.atan2(w,d*x);g=Math.sin(g*S)/w,o=Math.sin(o*S)/w}let v=o*x;if(c=c*g+f*v,l=l*g+p*v,h=h*g+m*v,u=u*g+A*v,g===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*p-l*f,t[e+1]=c*m+h*f+l*u-o*p,t[e+2]=l*m+h*p+o*f-c*u,t[e+3]=h*m-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),p=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"YZX":this._x=f*h*u+l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u-f*p*m;break;case"XZY":this._x=f*h*u-l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wr=new D,ac=new rn,In=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),cs.subVectors(this.max,Fi),oi.subVectors(t.a,Fi),ci.subVectors(t.b,Fi),li.subVectors(t.c,Fi),Sn.subVectors(ci,oi),En.subVectors(li,ci),On.subVectors(oi,li);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-On.z,On.y,Sn.z,0,-Sn.x,En.z,0,-En.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-On.y,On.x,0];return!Tr(e,oi,ci,li,cs)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,oi,ci,li,cs))?!1:(ls.crossVectors(Sn,En),e=[ls.x,ls.y,ls.z],Tr(e,oi,ci,li,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new D,new D,new D,new D,new D,new D,new D,new D],Ke=new D,os=new In,oi=new D,ci=new D,li=new D,Sn=new D,En=new D,On=new D,Fi=new D,cs=new D,ls=new D,Bn=new D;function Tr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);let o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=t.dot(Bn),l=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Uh=new In,ki=new D,Rr=new D,Nn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Uh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);let e=ki.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Rr)),this.expandByPoint(ki.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new D,Vr=new D,hs=new D,wn=new D,Pr=new D,us=new D,Lr=new D,Os=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vr.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Vr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=wn.dot(this.direction),c=-wn.dot(hs),l=wn.lengthSq(),h=Math.abs(1-a*a),u,f,p,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Vr).addScaledVector(hs,f),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,r){Pr.subVectors(e,t),us.subVectors(n,t),Lr.crossVectors(Pr,us);let a=this.direction.dot(Lr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);let c=o*this.direction.dot(us.crossVectors(wn,us));if(c<0)return null;let l=o*this.direction.dot(Pr.cross(wn));if(l<0||c+l>a)return null;let h=-o*wn.dot(Lr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class s{constructor(t,e,n,i,r,a,o,c,l,h,u,f,p,m,A,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,p,m,A,g)}set(t,e,n,i,r,a,o,c,l,h,u,f,p,m,A,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=A,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),a=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=f-A*l,e[9]=-o*c,e[2]=A-f*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,m=l*h,A=l*u;e[0]=f+A*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=A+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,m=l*h,A=l*u;e[0]=f-A*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,p=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=m*l-p,e[8]=f*l+A,e[1]=c*u,e[5]=A*l+f,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-f*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=a*c,p=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+A,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dh,t,qh)}lookAt(t,e,n){let i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Tn.crossVectors(n,Fe),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Tn.crossVectors(n,Fe)),Tn.normalize(),ds.crossVectors(Fe,Tn),i[0]=Tn.x,i[4]=ds.x,i[8]=Fe.x,i[1]=Tn.y,i[5]=ds.y,i[9]=Fe.y,i[2]=Tn.z,i[6]=ds.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],A=n[6],g=n[10],d=n[14],x=n[3],_=n[7],v=n[11],w=n[15],S=i[0],E=i[4],T=i[8],M=i[12],y=i[1],R=i[5],k=i[9],N=i[13],H=i[2],J=i[6],G=i[10],$=i[14],O=i[3],rt=i[7],ft=i[11],It=i[15];return r[0]=a*S+o*y+c*H+l*O,r[4]=a*E+o*R+c*J+l*rt,r[8]=a*T+o*k+c*G+l*ft,r[12]=a*M+o*N+c*$+l*It,r[1]=h*S+u*y+f*H+p*O,r[5]=h*E+u*R+f*J+p*rt,r[9]=h*T+u*k+f*G+p*ft,r[13]=h*M+u*N+f*$+p*It,r[2]=m*S+A*y+g*H+d*O,r[6]=m*E+A*R+g*J+d*rt,r[10]=m*T+A*k+g*G+d*ft,r[14]=m*M+A*N+g*$+d*It,r[3]=x*S+_*y+v*H+w*O,r[7]=x*E+_*R+v*J+w*rt,r[11]=x*T+_*k+v*G+w*ft,r[15]=x*M+_*N+v*$+w*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],m=t[3],A=t[7],g=t[11],d=t[15];return m*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*p-n*c*p)+A*(+e*c*p-e*l*f+r*a*f-i*a*p+i*l*h-r*c*h)+g*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],m=t[12],A=t[13],g=t[14],d=t[15],x=u*g*l-A*f*l+A*c*p-o*g*p-u*c*d+o*f*d,_=m*f*l-h*g*l-m*c*p+a*g*p+h*c*d-a*f*d,v=h*A*l-m*u*l+m*o*p-a*A*p-h*o*d+a*u*d,w=m*u*c-h*A*c-m*o*f+a*A*f+h*o*g-a*u*g,S=e*x+n*_+i*v+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=x*E,t[1]=(A*f*r-u*g*r-A*i*p+n*g*p+u*i*d-n*f*d)*E,t[2]=(o*g*r-A*c*r+A*i*l-n*g*l-o*i*d+n*c*d)*E,t[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*p-n*c*p)*E,t[4]=_*E,t[5]=(h*g*r-m*f*r+m*i*p-e*g*p-h*i*d+e*f*d)*E,t[6]=(m*c*r-a*g*r-m*i*l+e*g*l+a*i*d-e*c*d)*E,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*p+e*c*p)*E,t[8]=v*E,t[9]=(m*u*r-h*A*r-m*n*p+e*A*p+h*n*d-e*u*d)*E,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*E,t[12]=w*E,t[13]=(h*A*i-m*u*i+m*n*f-e*A*f-h*n*g+e*u*g)*E,t[14]=(m*o*i-a*A*i-m*n*c+e*A*c+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,m=r*u,A=a*h,g=a*u,d=o*u,x=c*l,_=c*h,v=c*u,w=n.x,S=n.y,E=n.z;return i[0]=(1-(A+d))*w,i[1]=(p+v)*w,i[2]=(m-_)*w,i[3]=0,i[4]=(p-v)*S,i[5]=(1-(f+d))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(m+_)*E,i[9]=(g-x)*E,i[10]=(1-(f+A))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=hi.set(i[0],i[1],i[2]).length(),a=hi.set(i[4],i[5],i[6]).length(),o=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);let l=1/r,h=1/a,u=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=vn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,m;if(o===vn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ns)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=vn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*l,p=(n+i)*h,m,A;if(o===vn)m=(a+r)*u,A=-2*u;else if(o===Ns)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hi=new D,Je=new ne,Dh=new D(0,0,0),qh=new D(1,1,1),Tn=new D,ds=new D,Fe=new D,oc=new ne,cc=new rn,an=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nh=0,lc=new D,ui=new rn,pn=new ne,fs=new D,Oi=new D,zh=new D,Fh=new rn,hc=new D(1,0,0),uc=new D(0,1,0),dc=new D(0,0,1),fc={type:"added"},kh={type:"removed"},di={type:"childadded",child:null},Ur={type:"childremoved",child:null},Se=class s extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new an,n=new rn,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Dt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Oi,fs,this.up):pn.lookAt(fs,Oi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(pn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kh),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=new D,gn=new D,Dr=new D,mn=new D,fi=new D,pi=new D,pc=new D,qr=new D,Nr=new D,zr=new D,Fr=new de,kr=new de,Or=new de,Jn=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ze.subVectors(i,e),gn.subVectors(n,e),Dr.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(gn),c=Ze.dot(Dr),l=gn.dot(gn),h=gn.dot(Dr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Fr.setScalar(0),kr.setScalar(0),Or.setScalar(0),Fr.fromBufferAttribute(t,e),kr.fromBufferAttribute(t,n),Or.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Fr,r.x),a.addScaledVector(kr,r.y),a.addScaledVector(Or,r.z),a}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),gn.subVectors(t,e),Ze.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ze.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;fi.subVectors(i,n),pi.subVectors(r,n),qr.subVectors(t,n);let c=fi.dot(qr),l=pi.dot(qr);if(c<=0&&l<=0)return e.copy(n);Nr.subVectors(t,i);let h=fi.dot(Nr),u=pi.dot(Nr);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(fi,a);zr.subVectors(t,r);let p=fi.dot(zr),m=pi.dot(zr);if(m>=0&&p<=m)return e.copy(r);let A=p*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(pi,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return pc.subVectors(r,i),o=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(pc,o);let d=1/(g+A+f);return a=A*d,o=f*d,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Br(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Eh(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Br(a,r,t+1/3),this.g=Br(a,r,t),this.b=Br(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=hl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Yt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Te(Me.r*255,0,255))*65536+Math.round(Te(Me.g*255,0,255))*256+Math.round(Te(Me.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,i=Me.g,r=Me.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=we){Yt.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,i=Me.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(ps);let n=br(Rn.h,ps.h,e),i=br(Rn.s,ps.s,e),r=br(Rn.l,ps.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new zt;zt.NAMES=hl;var Oh=0,zn=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=es(),this.name="",this.blending=yi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$r,this.blendDst=ta,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$r&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ve=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new D,gs=new Pt,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qo&&(t.usage=this.usage),t}};var Hs=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gs=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bh=0,We=new ne,Hr=new Se,gi=new D,ke=new In,Bi=new In,Ae=new D,Ce=class s extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ll(t)?Gs:Hs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(ke.min,Bi.min),ke.expandByPoint(Ae),Ae.addVectors(ke.max,Bi.max),ke.expandByPoint(Ae)):(ke.expandByPoint(Bi.min),ke.expandByPoint(Bi.max))}ke.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(t,l),Ae.add(gi)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let T=0;T<n.count;T++)o[T]=new D,c[T]=new D;let l=new D,h=new D,u=new D,f=new Pt,p=new Pt,m=new Pt,A=new D,g=new D;function d(T,M,y){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),m.sub(f);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(R),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),o[T].add(A),o[M].add(A),o[y].add(A),c[T].add(g),c[M].add(g),c[y].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let T=0,M=x.length;T<M;++T){let y=x[T],R=y.start,k=y.count;for(let N=R,H=R+k;N<H;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new D,v=new D,w=new D,S=new D;function E(T){w.fromBufferAttribute(i,T),S.copy(w);let M=o[T];_.copy(M),_.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(S,M);let R=v.dot(c[T])<0?-1:1;a.setXYZW(T,_.x,_.y,_.z,R)}for(let T=0,M=x.length;T<M;++T){let y=x[T],R=y.start,k=y.count;for(let N=R,H=R+k;N<H;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?p=c[A]*o.data.stride+o.offset:p=c[A]*h;for(let d=0;d<h;d++)f[m++]=l[p++]}return new be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gc=new ne,Hn=new Os,ms=new Nn,mc=new D,As=new D,xs=new D,vs=new D,Gr=new D,Cs=new D,Ac=new D,ys=new D,xe=class extends Se{constructor(t=new Ce,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Cs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Gr.fromBufferAttribute(u,t),a?Cs.addScaledVector(Gr,h):Cs.addScaledVector(Gr.sub(e),h))}e.add(Cs)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(ms.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(ms,mc)===null||Hn.origin.distanceToSquared(mc)>(t.far-t.near)**2))&&(gc.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],d=a[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,w=_;v<w;v+=3){let S=o.getX(v),E=o.getX(v+1),T=o.getX(v+2);i=_s(this,d,t,n,l,h,u,S,E,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let g=m,d=A;g<d;g+=3){let x=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);i=_s(this,a,t,n,l,h,u,x,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],d=a[g.materialIndex],x=Math.max(g.start,p.start),_=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,w=_;v<w;v+=3){let S=v,E=v+1,T=v+2;i=_s(this,d,t,n,l,h,u,S,E,T),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(c.count,p.start+p.count);for(let g=m,d=A;g<d;g+=3){let x=g,_=g+1,v=g+2;i=_s(this,a,t,n,l,h,u,x,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Hh(s,t,e,n,i,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Dn,o),c===null)return null;ys.copy(o),ys.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ys);return l<e.near||l>e.far?null:{distance:l,point:ys.clone(),object:s}}function _s(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,As),s.getVertexPosition(c,xs),s.getVertexPosition(l,vs);let h=Hh(s,t,e,n,As,xs,vs,Ac);if(h){let u=new D;Jn.getBarycoord(Ac,As,xs,vs,u),i&&(h.uv=Jn.getInterpolatedAttribute(i,o,c,l,u,new Pt)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,c,l,u,new Pt)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new D,materialIndex:0};Jn.getNormal(As,xs,vs,f.normal),h.face=f,h.barycoord=u}return h}var ti=class s extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function m(A,g,d,x,_,v,w,S,E,T,M){let y=v/E,R=w/T,k=v/2,N=w/2,H=S/2,J=E+1,G=T+1,$=0,O=0,rt=new D;for(let ft=0;ft<G;ft++){let It=ft*R-N;for(let Ft=0;Ft<J;Ft++){let ee=Ft*y-k;rt[A]=ee*x,rt[g]=It*_,rt[d]=H,l.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[d]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ft/E),u.push(1-ft/T),$+=1}}for(let ft=0;ft<T;ft++)for(let It=0;It<E;It++){let Ft=f+It+J*ft,ee=f+It+J*(ft+1),X=f+(It+1)+J*(ft+1),nt=f+(It+1)+J*ft;c.push(Ft,ee,nt),c.push(ee,X,nt),O+=6}o.addGroup(p,O,M),p+=O,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ri(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(s){let t={};for(let e=0;e<s.length;e++){let n=Ri(s[e]);for(let i in n)t[i]=n[i]}return t}function Gh(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ul(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Wh={clone:Ri,merge:Ee},Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=Gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ws=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new D,xc=new Pt,vc=new Pt,Re=class extends Ws{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,xc,vc),e.subVectors(vc,xc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mi=-90,Ai=1,Ba=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Re(mi,Ai,t,e);i.layers=this.layers,this.add(i);let r=new Re(mi,Ai,t,e);r.layers=this.layers,this.add(r);let a=new Re(mi,Ai,t,e);a.layers=this.layers,this.add(a);let o=new Re(mi,Ai,t,e);o.layers=this.layers,this.add(o);let c=new Re(mi,Ai,t,e);c.layers=this.layers,this.add(c);let l=new Re(mi,Ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Xs=class extends De{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ha=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ti(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Ln});r.uniforms.tEquirect.value=e;let a=new xe(i,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=nn),new Ba(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Wr=new D,Kh=new D,Jh=new Dt,xn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wr.subVectors(n,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jh.getNormalMatrix(t),i=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new Nn,Is=new D,Zi=class{constructor(t=new xn,e=new xn,n=new xn,i=new xn,r=new xn,a=new xn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],m=i[9],A=i[10],g=i[11],d=i[12],x=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-r,f-l,g-p,v-d).normalize(),n[1].setComponents(c+r,f+l,g+p,v+d).normalize(),n[2].setComponents(c+a,f+h,g+m,v+x).normalize(),n[3].setComponents(c-a,f-h,g-m,v-x).normalize(),n[4].setComponents(c-o,f-u,g-A,v-_).normalize(),e===vn)n[5].setComponents(c+o,f+u,g+A,v+_).normalize();else if(e===Ns)n[5].setComponents(o,u,A,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Is.x=i.normal.x>0?t.max.x:t.min.x,Is.y=i.normal.y>0?t.max.y:t.min.y,Is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function dl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zh(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],A=u[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let A=u[p];s.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var cn=class s extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,p=[],m=[],A=[],g=[];for(let d=0;d<h;d++){let x=d*f-a;for(let _=0;_<l;_++){let v=_*u-r;m.push(v,-x,0),A.push(0,0,1),g.push(_/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){let _=x+l*d,v=x+l*(d+1),w=x+1+l*(d+1),S=x+1+l*d;p.push(_,v,S),p.push(v,w,S)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
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
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
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
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru=`#ifdef USE_BATCHING
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
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hu=`#ifdef USE_IRIDESCENCE
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
#endif`,uu=`#ifdef USE_BUMPMAP
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cu=`#define PI 3.141592653589793
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
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_u=`vec3 transformedNormal = objectNormal;
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
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
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
}`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
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
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ku=`PhysicalMaterial material;
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
#endif`,Ju=`struct PhysicalMaterial {
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
}`,Zu=`
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
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
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dd=`float getShadowMask() {
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
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jd=`uniform sampler2D t2D;
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
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
}`,sf=`#if DEPTH_PACKING == 3200
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
}`,rf=`#define DISTANCE
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
}`,af=`#define DISTANCE
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`uniform float scale;
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#define LAMBERT
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
}`,pf=`#define LAMBERT
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
}`,gf=`#define MATCAP
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
}`,mf=`#define MATCAP
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
}`,Af=`#define NORMAL
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
}`,xf=`#define NORMAL
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
}`,vf=`#define PHONG
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
}`,Cf=`#define PHONG
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
}`,yf=`#define STANDARD
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
}`,_f=`#define STANDARD
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
}`,If=`#define TOON
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
}`,Mf=`#define TOON
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
}`,bf=`uniform float size;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,wf=`uniform vec3 color;
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
}`,Tf=`uniform float rotation;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:jh,alphahash_pars_fragment:Qh,alphamap_fragment:$h,alphamap_pars_fragment:tu,alphatest_fragment:eu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:su,batching_pars_vertex:ru,batching_vertex:au,begin_vertex:ou,beginnormal_vertex:cu,bsdfs:lu,iridescence_fragment:hu,bumpmap_pars_fragment:uu,clipping_planes_fragment:du,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:gu,color_fragment:mu,color_pars_fragment:Au,color_pars_vertex:xu,color_vertex:vu,common:Cu,cube_uv_reflection_fragment:yu,defaultnormal_vertex:_u,displacementmap_pars_vertex:Iu,displacementmap_vertex:Mu,emissivemap_fragment:bu,emissivemap_pars_fragment:Su,colorspace_fragment:Eu,colorspace_pars_fragment:wu,envmap_fragment:Tu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Vu,envmap_pars_vertex:Pu,envmap_physical_pars_fragment:Hu,envmap_vertex:Lu,fog_vertex:Uu,fog_pars_vertex:Du,fog_fragment:qu,fog_pars_fragment:Nu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Fu,lights_lambert_fragment:ku,lights_lambert_pars_fragment:Ou,lights_pars_begin:Bu,lights_toon_fragment:Gu,lights_toon_pars_fragment:Wu,lights_phong_fragment:Xu,lights_phong_pars_fragment:Yu,lights_physical_fragment:Ku,lights_physical_pars_fragment:Ju,lights_fragment_begin:Zu,lights_fragment_maps:ju,lights_fragment_end:Qu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:sd,map_particle_fragment:rd,map_particle_pars_fragment:ad,metalnessmap_fragment:od,metalnessmap_pars_fragment:cd,morphinstance_vertex:ld,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:gd,normal_pars_fragment:md,normal_pars_vertex:Ad,normal_vertex:xd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:Id,opaque_fragment:Md,packing:bd,premultiplied_alpha_fragment:Sd,project_vertex:Ed,dithering_fragment:wd,dithering_pars_fragment:Td,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Ld,shadowmap_vertex:Ud,shadowmask_pars_fragment:Dd,skinbase_vertex:qd,skinning_pars_vertex:Nd,skinning_vertex:zd,skinnormal_vertex:Fd,specularmap_fragment:kd,specularmap_pars_fragment:Od,tonemapping_fragment:Bd,tonemapping_pars_fragment:Hd,transmission_fragment:Gd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:Yd,uv_vertex:Kd,worldpos_vertex:Jd,background_vert:Zd,background_frag:jd,backgroundCube_vert:Qd,backgroundCube_frag:$d,cube_vert:tf,cube_frag:ef,depth_vert:nf,depth_frag:sf,distanceRGBA_vert:rf,distanceRGBA_frag:af,equirect_vert:of,equirect_frag:cf,linedashed_vert:lf,linedashed_frag:hf,meshbasic_vert:uf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:gf,meshmatcap_frag:mf,meshnormal_vert:Af,meshnormal_frag:xf,meshphong_vert:vf,meshphong_frag:Cf,meshphysical_vert:yf,meshphysical_frag:_f,meshtoon_vert:If,meshtoon_frag:Mf,points_vert:bf,points_frag:Sf,shadow_vert:Ef,shadow_frag:wf,sprite_vert:Tf,sprite_frag:Rf},it={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},en={basic:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ee([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ee([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ee([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ee([it.points,it.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ee([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ee([it.common,it.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ee([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ee([it.sprite,it.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ee([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ee([it.lights,it.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};en.physical={uniforms:Ee([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Ms={r:0,b:0,g:0},Wn=new an,Vf=new ne;function Pf(s,t,e,n,i,r,a){let o=new zt(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function A(x){let _=!1,v=m(x);v===null?d(o,c):v&&v.isColor&&(d(v,1),_=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,_){let v=m(_);v&&(v.isCubeTexture||v.mapping===fr)?(h===void 0&&(h=new xe(new ti(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ri(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wn.copy(_.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vf.makeRotationFromEuler(Wn)),h.material.toneMapped=Yt.getTransfer(v.colorSpace)!==te,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new xe(new cn(2,2),new on({name:"BackgroundMaterial",uniforms:Ri(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function d(x,_){x.getRGB(Ms,ul(s)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(o,c)},render:A,addToRenderList:g}}function Lf(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,R,k,N,H){let J=!1,G=u(N,k,R);r!==G&&(r=G,l(r.object)),J=p(y,N,k,H),J&&m(y,N,k,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(y,R,k,N),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,R,k){let N=k.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let J=H[R.id];J===void 0&&(J={},H[R.id]=J);let G=J[N];return G===void 0&&(G=f(c()),J[N]=G),G}function f(y){let R=[],k=[],N=[];for(let H=0;H<e;H++)R[H]=0,k[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,R,k,N){let H=r.attributes,J=R.attributes,G=0,$=k.getAttributes();for(let O in $)if($[O].location>=0){let ft=H[O],It=J[O];if(It===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(It=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(It=y.instanceColor)),ft===void 0||ft.attribute!==It||It&&ft.data!==It.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function m(y,R,k,N){let H={},J=R.attributes,G=0,$=k.getAttributes();for(let O in $)if($[O].location>=0){let ft=J[O];ft===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));let It={};It.attribute=ft,ft&&ft.data&&(It.data=ft.data),H[O]=It,G++}r.attributes=H,r.attributesNum=G,r.index=N}function A(){let y=r.newAttributes;for(let R=0,k=y.length;R<k;R++)y[R]=0}function g(y){d(y,0)}function d(y,R){let k=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;k[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),H[y]!==R&&(s.vertexAttribDivisor(y,R),H[y]=R)}function x(){let y=r.newAttributes,R=r.enabledAttributes;for(let k=0,N=R.length;k<N;k++)R[k]!==y[k]&&(s.disableVertexAttribArray(k),R[k]=0)}function _(y,R,k,N,H,J,G){G===!0?s.vertexAttribIPointer(y,R,k,H,J):s.vertexAttribPointer(y,R,k,N,H,J)}function v(y,R,k,N){A();let H=N.attributes,J=k.getAttributes(),G=R.defaultAttributeValues;for(let $ in J){let O=J[$];if(O.location>=0){let rt=H[$];if(rt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){let ft=rt.normalized,It=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;let ee=Ft.buffer,X=Ft.type,nt=Ft.bytesPerElement,Ct=X===s.INT||X===s.UNSIGNED_INT||rt.gpuType===xo;if(rt.isInterleavedBufferAttribute){let ot=rt.data,wt=ot.stride,Vt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<O.locationSize;kt++)d(O.location+kt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<O.locationSize;kt++)g(O.location+kt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let kt=0;kt<O.locationSize;kt++)_(O.location+kt,It/O.locationSize,X,ft,wt*nt,(Vt+It/O.locationSize*kt)*nt,Ct)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<O.locationSize;ot++)d(O.location+ot,rt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<O.locationSize;ot++)g(O.location+ot);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ot=0;ot<O.locationSize;ot++)_(O.location+ot,It/O.locationSize,X,ft,It*nt,It/O.locationSize*ot*nt,Ct)}}else if(G!==void 0){let ft=G[$];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(O.location,ft);break;case 3:s.vertexAttrib3fv(O.location,ft);break;case 4:s.vertexAttrib4fv(O.location,ft);break;default:s.vertexAttrib1fv(O.location,ft)}}}}x()}function w(){T();for(let y in n){let R=n[y];for(let k in R){let N=R[k];for(let H in N)h(N[H].object),delete N[H];delete R[k]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let k in R){let N=R[k];for(let H in N)h(N[H].object),delete N[H];delete R[k]}delete n[y.id]}function E(y){for(let R in n){let k=n[R];if(k[y.id]===void 0)continue;let N=k[y.id];for(let H in N)h(N[H].object),delete N[H];delete k[y.id]}}function T(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:x}}function Uf(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Df(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==je&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let T=E===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==yn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==sn&&!T)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,maxSamples:S}}function qf(s){let t=this,e=null,n=0,i=!1,r=!1,a=new xn,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,_=x*4,v=d.clippingState||null;c.value=v,v=h(m,f,_,p);for(let w=0;w!==_;++w)v[w]=e[w];d.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let d=p+A*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,v=p;_!==A;++_,v+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Nf(s){let t=new WeakMap;function e(a,o){return o===ca?a.mapping=Si:o===la&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ca||o===la)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ha(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ys=class extends Ws{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ci=4,Cc=[.125,.215,.35,.446,.526,.582],Zn=20,Xr=new Ys,yc=new zt,Yr=null,Kr=0,Jr=0,Zr=!1,Yn=(1+Math.sqrt(5))/2,xi=1/Yn,_c=[new D(-Yn,xi,0),new D(Yn,xi,0),new D(-xi,0,Yn),new D(xi,0,Yn),new D(0,Yn,-xi),new D(0,Yn,xi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Yr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yr,Kr,Jr),this._renderer.xr.enabled=Zr,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ts,format:je,colorSpace:Li,depthBuffer:!1},i=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zf(r)),this._blurMaterial=Ff(r,t,e)}return i}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,i){let o=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yc),h.toneMapping=Un,h.autoClear=!1;let p=new ve({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new xe(new ti,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(yc),A=!0);for(let d=0;d<6;d++){let x=d%3;x===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):x===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let _=this._cubeSize;bs(i,x*_,d>2?_:0,_,_),h.setRenderTarget(i),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Si||t.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;bs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_c[(i-r-1)%_c.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xe(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zn-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):Zn;g>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zn}`);let d=[],x=0;for(let E=0;E<Zn;++E){let T=E/A,M=Math.exp(-T*T/2);d.push(M),E===0?x+=M:E<g&&(x+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/x;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let v=this._sizeLods[i],w=3*v*(i>_-Ci?i-_+Ci:0),S=4*(this._cubeSize-v);bs(e,w,S,3*v,2*v),c.setRenderTarget(e),c.render(u,Xr)}};function zf(s){let t=[],e=[],n=[],i=s,r=s-Ci+1+Cc.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Ci?c=Cc[a-s+Ci-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,A=3,g=2,d=1,x=new Float32Array(A*m*p),_=new Float32Array(g*m*p),v=new Float32Array(d*m*p);for(let S=0;S<p;S++){let E=S%3*2/3-1,T=S>2?0:-1,M=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];x.set(M,A*m*S),_.set(f,g*m*S);let y=[S,S,S,S,S,S];v.set(y,d*m*S)}let w=new Ce;w.setAttribute("position",new be(x,A)),w.setAttribute("uv",new be(_,g)),w.setAttribute("faceIndex",new be(v,d)),t.push(w),i>Ci&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(s,t,e){let n=new _n(s,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ff(s,t,e){let n=new Float32Array(Zn),i=new D(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Mc(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function bc(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}function kf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ca||c===la,h=c===Si||c===Ei;if(l||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ks(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ks(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Of(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bf(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,d=A.length;g<d;g++)t.remove(A[g])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let A=p[m];for(let g=0,d=A.length;g<d;g++)t.update(A[g],s.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,m=u.attributes.position,A=0;if(p!==null){let x=p.array;A=p.version;for(let _=0,v=x.length;_<v;_+=3){let w=x[_+0],S=x[_+1],E=x[_+2];f.push(w,S,S,E,E,w)}}else if(m!==void 0){let x=m.array;A=m.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let w=_+0,S=_+1,E=_+2;f.push(w,S,S,E,E,w)}}else return;let g=new(ll(f)?Gs:Hs)(f,1);g.version=A;let d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Hf(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,f*a,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function u(f,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],A[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,A,0,m);let d=0;for(let x=0;x<m;x++)d+=p[x]*A[x];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gf(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wf(s,t,e){let n=new WeakMap,i=new de;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),A===!0&&(_=3);let v=o.attributes.position.count*_,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*w*4*u),E=new ks(S,v,w,u);E.type=sn,E.needsUpdate=!0;let T=_*4;for(let y=0;y<u;y++){let R=g[y],k=d[y],N=x[y],H=v*w*4*y;for(let J=0;J<R.count;J++){let G=J*T;p===!0&&(i.fromBufferAttribute(R,J),S[H+G+0]=i.x,S[H+G+1]=i.y,S[H+G+2]=i.z,S[H+G+3]=0),m===!0&&(i.fromBufferAttribute(k,J),S[H+G+4]=i.x,S[H+G+5]=i.y,S[H+G+6]=i.z,S[H+G+7]=0),A===!0&&(i.fromBufferAttribute(N,J),S[H+G+8]=i.x,S[H+G+9]=i.y,S[H+G+10]=i.z,S[H+G+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new Pt(v,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let A=0;A<l.length;A++)p+=l[A];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Xf(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Js=class extends De{constructor(t,e,n,i,r,a,o,c,l,h=_i){if(h!==_i&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_i&&(n=$n),n===void 0&&h===Ti&&(n=wi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fl=new De,Sc=new Js(1,1),pl=new ks,gl=new Oa,ml=new Xs,Ec=[],wc=[],Tc=new Float32Array(16),Rc=new Float32Array(9),Vc=new Float32Array(4);function Ui(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Ec[i];if(r===void 0&&(r=new Float32Array(i),Ec[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function gr(s,t){let e=wc[t];e===void 0&&(e=new Int32Array(t),wc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Yf(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Kf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function Jf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function Zf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function jf(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Vc.set(n),s.uniformMatrix2fv(this.addr,!1,Vc),me(e,n)}}function Qf(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Rc.set(n),s.uniformMatrix3fv(this.addr,!1,Rc),me(e,n)}}function $f(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Tc.set(n),s.uniformMatrix4fv(this.addr,!1,Tc),me(e,n)}}function tp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ep(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function np(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function ip(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function sp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function ap(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function op(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function cp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Sc.compareFunction=cl,r=Sc):r=fl,e.setTexture2D(t||r,i)}function lp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gl,i)}function hp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ml,i)}function up(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pl,i)}function dp(s){switch(s){case 5126:return Yf;case 35664:return Kf;case 35665:return Jf;case 35666:return Zf;case 35674:return jf;case 35675:return Qf;case 35676:return $f;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}function fp(s,t){s.uniform1fv(this.addr,t)}function pp(s,t){let e=Ui(t,this.size,2);s.uniform2fv(this.addr,e)}function gp(s,t){let e=Ui(t,this.size,3);s.uniform3fv(this.addr,e)}function mp(s,t){let e=Ui(t,this.size,4);s.uniform4fv(this.addr,e)}function Ap(s,t){let e=Ui(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xp(s,t){let e=Ui(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vp(s,t){let e=Ui(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Cp(s,t){s.uniform1iv(this.addr,t)}function yp(s,t){s.uniform2iv(this.addr,t)}function _p(s,t){s.uniform3iv(this.addr,t)}function Ip(s,t){s.uniform4iv(this.addr,t)}function Mp(s,t){s.uniform1uiv(this.addr,t)}function bp(s,t){s.uniform2uiv(this.addr,t)}function Sp(s,t){s.uniform3uiv(this.addr,t)}function Ep(s,t){s.uniform4uiv(this.addr,t)}function wp(s,t,e){let n=this.cache,i=t.length,r=gr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||fl,r[a])}function Tp(s,t,e){let n=this.cache,i=t.length,r=gr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gl,r[a])}function Rp(s,t,e){let n=this.cache,i=t.length,r=gr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ml,r[a])}function Vp(s,t,e){let n=this.cache,i=t.length,r=gr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pl,r[a])}function Pp(s){switch(s){case 5126:return fp;case 35664:return pp;case 35665:return gp;case 35666:return mp;case 35674:return Ap;case 35675:return xp;case 35676:return vp;case 5124:case 35670:return Cp;case 35667:case 35671:return yp;case 35668:case 35672:return _p;case 35669:case 35673:return Ip;case 5125:return Mp;case 36294:return bp;case 36295:return Sp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Vp}}var Ga=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dp(e.type)}},Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pp(e.type)}},Xa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},jr=/(\w+)(\])?(\[|\.)?/g;function Pc(s,t){s.seq.push(t),s.map[t.id]=t}function Lp(s,t,e){let n=s.name,i=n.length;for(jr.lastIndex=0;;){let r=jr.exec(n),a=jr.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Pc(e,l===void 0?new Ga(o,s,t):new Wa(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Xa(o),Pc(e,u)),e=u}}}var Mi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Lp(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Lc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Up=37297,Dp=0;function qp(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Uc=new Dt;function Np(s){Yt._getMatrix(Uc,Yt.workingColorSpace,s);let t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case pr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+qp(s.getShaderSource(t),a)}else return i}function zp(s,t){let e=Np(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fp(s,t){let e;switch(t){case lh:e="Linear";break;case hh:e="Reinhard";break;case uh:e="Cineon";break;case dh:e="ACESFilmic";break;case ph:e="AgX";break;case gh:e="Neutral";break;case fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ss=new D;function kp(){Yt.getLuminanceCoefficients(Ss);let s=Ss.x.toFixed(4),t=Ss.y.toFixed(4),e=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Op(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Bp(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hp(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Xi(s){return s!==""}function qc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(Gp,Xp)}var Wp=new Map;function Xp(s,t){let e=Nt[t];if(e===void 0){let n=Wp.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}var Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(s){return s.replace(Yp,Kp)}function Kp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Jp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Zp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Si:case Ei:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function Qp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ao:t="ENVMAP_BLENDING_MULTIPLY";break;case oh:t="ENVMAP_BLENDING_MIX";break;case ch:t="ENVMAP_BLENDING_ADD";break}return t}function $p(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Jp(e),l=Zp(e),h=jp(e),u=Qp(e),f=$p(e),p=Op(e),m=Bp(r),A=i.createProgram(),g,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xi).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xi).join(`
`),d.length>0&&(d+=`
`)):(g=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),d=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Un?Fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,zp("linearToOutputTexel",e.outputColorSpace),kp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),a=Ya(a),a=qc(a,e),a=Nc(a,e),o=Ya(o),o=qc(o,e),o=Nc(o,e),a=zc(a),o=zc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=x+g+a,v=x+d+o,w=Lc(i,i.VERTEX_SHADER,_),S=Lc(i,i.FRAGMENT_SHADER,v);i.attachShader(A,w),i.attachShader(A,S),e.index0AttributeName!==void 0?i.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function E(R){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(A).trim(),N=i.getShaderInfoLog(w).trim(),H=i.getShaderInfoLog(S).trim(),J=!0,G=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,w,S);else{let $=Dc(i,w,"vertex"),O=Dc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+$+`
`+O)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||H==="")&&(G=!1);G&&(R.diagnostics={runnable:J,programLog:k,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:d}})}i.deleteShader(w),i.deleteShader(S),T=new Mi(i,A),M=Hp(i,A)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(A,Up)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dp++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=w,this.fragmentShader=S,this}var eg=0,Ka=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ja(t),e.set(t,n)),n}},Ja=class{constructor(t){this.id=eg++,this.code=t,this.usedTimes=0}};function ng(s,t,e,n,i,r,a){let o=new Bs,c=new Ka,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,R,k,N){let H=k.fog,J=N.geometry,G=M.isMeshStandardMaterial?k.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),O=$&&$.mapping===fr?$.image.height:null,rt=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,It=ft!==void 0?ft.length:0,Ft=0;J.morphAttributes.position!==void 0&&(Ft=1),J.morphAttributes.normal!==void 0&&(Ft=2),J.morphAttributes.color!==void 0&&(Ft=3);let ee,X,nt,Ct;if(rt){let $t=en[rt];ee=$t.vertexShader,X=$t.fragmentShader}else ee=M.vertexShader,X=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),Ct=c.getFragmentShaderID(M);let ot=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Vt=N.isInstancedMesh===!0,kt=N.isBatchedMesh===!0,he=!!M.map,Wt=!!M.matcap,fe=!!$,U=!!M.aoMap,He=!!M.lightMap,Ot=!!M.bumpMap,Bt=!!M.normalMap,bt=!!M.displacementMap,re=!!M.emissiveMap,Mt=!!M.metalnessMap,b=!!M.roughnessMap,C=M.anisotropy>0,q=M.clearcoat>0,Y=M.dispersion>0,Z=M.iridescence>0,W=M.sheen>0,yt=M.transmission>0,ct=C&&!!M.anisotropyMap,pt=q&&!!M.clearcoatMap,Xt=q&&!!M.clearcoatNormalMap,Q=q&&!!M.clearcoatRoughnessMap,gt=Z&&!!M.iridescenceMap,Et=Z&&!!M.iridescenceThicknessMap,Tt=W&&!!M.sheenColorMap,mt=W&&!!M.sheenRoughnessMap,Ht=!!M.specularMap,qt=!!M.specularColorMap,ie=!!M.specularIntensityMap,V=yt&&!!M.transmissionMap,at=yt&&!!M.thicknessMap,B=!!M.gradientMap,K=!!M.alphaMap,ut=M.alphaTest>0,lt=!!M.alphaHash,Lt=!!M.extensions,ue=Un;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=s.toneMapping);let _e={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:X,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:Ct,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:kt,batchingColor:kt&&N._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&N.instanceColor!==null,instancingMorph:Vt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Li,alphaToCoverage:!!M.alphaToCoverage,map:he,matcap:Wt,envMap:fe,envMapMode:fe&&$.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:He,bumpMap:Ot,normalMap:Bt,displacementMap:f&&bt,emissiveMap:re,normalMapObjectSpace:Bt&&M.normalMapType===vh,normalMapTangentSpace:Bt&&M.normalMapType===ol,metalnessMap:Mt,roughnessMap:b,anisotropy:C,anisotropyMap:ct,clearcoat:q,clearcoatMap:pt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:Z,iridescenceMap:gt,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:Tt,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:qt,specularIntensityMap:ie,transmission:yt,transmissionMap:V,thicknessMap:at,gradientMap:B,opaque:M.transparent===!1&&M.blending===yi&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:lt,combine:M.combine,mapUv:he&&A(M.map.channel),aoMapUv:U&&A(M.aoMap.channel),lightMapUv:He&&A(M.lightMap.channel),bumpMapUv:Ot&&A(M.bumpMap.channel),normalMapUv:Bt&&A(M.normalMap.channel),displacementMapUv:bt&&A(M.displacementMap.channel),emissiveMapUv:re&&A(M.emissiveMap.channel),metalnessMapUv:Mt&&A(M.metalnessMap.channel),roughnessMapUv:b&&A(M.roughnessMap.channel),anisotropyMapUv:ct&&A(M.anisotropyMap.channel),clearcoatMapUv:pt&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&A(M.sheenRoughnessMap.channel),specularMapUv:Ht&&A(M.specularMap.channel),specularColorMapUv:qt&&A(M.specularColorMap.channel),specularIntensityMapUv:ie&&A(M.specularIntensityMap.channel),transmissionMapUv:V&&A(M.transmissionMap.channel),thicknessMapUv:at&&A(M.thicknessMap.channel),alphaMapUv:K&&A(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Bt||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(he||K),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===te,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oe,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Lt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&M.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(x(y,M),_(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let y=m[M.type],R;if(y){let k=en[y];R=Wh.clone(k.uniforms)}else R=M.uniforms;return R}function w(M,y){let R;for(let k=0,N=h.length;k<N;k++){let H=h[k];if(H.cacheKey===y){R=H,++R.usedTimes;break}}return R===void 0&&(R=new tg(s,y,M,r),h.push(R)),R}function S(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:T}}function ig(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function sg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function kc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Oc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,m,A,g){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=A,d.group=g),t++,d}function o(u,f,p,m,A,g){let d=a(u,f,p,m,A,g);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,m,A,g){let d=a(u,f,p,m,A,g);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||sg),n.length>1&&n.sort(f||kc),i.length>1&&i.sort(f||kc)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function rg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Oc,s.set(n,[a])):i>=r.length?(a=new Oc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ag(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function og(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var cg=0;function lg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hg(s){let t=new ag,e=og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,r=new ne,a=new ne;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,A=0,g=0,d=0,x=0,_=0,v=0,w=0,S=0,E=0;l.sort(lg);for(let M=0,y=l.length;M<y;M++){let R=l[M],k=R.color,N=R.intensity,H=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*N,u+=k.g*N,f+=k.b*N;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],N);E++}else if(R.isDirectionalLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,O=e.get(R);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=R.shadow.matrix,x++}n.directional[p]=G,p++}else if(R.isSpotLight){let G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(k).multiplyScalar(N),G.distance=H,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[A]=G;let $=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,$.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[A]=$.matrix,R.castShadow){let O=e.get(R);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,n.spotShadow[A]=O,n.spotShadowMap[A]=J,v++}A++}else if(R.isRectAreaLight){let G=t.get(R);G.color.copy(k).multiplyScalar(N),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=G,g++}else if(R.isPointLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let $=R.shadow,O=e.get(R);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,_++}n.point[m]=G,m++}else if(R.isHemisphereLight){let G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(N),G.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[d]=G,d++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==p||T.pointLength!==m||T.spotLength!==A||T.rectAreaLength!==g||T.hemiLength!==d||T.numDirectionalShadows!==x||T.numPointShadows!==_||T.numSpotShadows!==v||T.numSpotMaps!==w||T.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,T.directionalLength=p,T.pointLength=m,T.spotLength=A,T.rectAreaLength=g,T.hemiLength=d,T.numDirectionalShadows=x,T.numPointShadows=_,T.numSpotShadows=v,T.numSpotMaps=w,T.numLightProbes=E,n.version=cg++)}function c(l,h){let u=0,f=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let d=0,x=l.length;d<x;d++){let _=l[d];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[A];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function Bc(s){let t=new hg(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ug(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Bc(s),t.set(i,[o])):r>=a.length?(o=new Bc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Za=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`;function pg(s,t,e){let n=new Zi,i=new Pt,r=new Pt,a=new de,o=new Za({depthPacking:xh}),c=new ja,l={},h=e.maxTextureSize,u={[Dn]:Ue,[Ue]:Dn,[Oe]:Oe},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:dg,fragmentShader:fg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ce;m.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new xe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let d=this.type;this.render=function(S,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Ln),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=d!==An&&this.type===An,H=d===An&&this.type!==An;for(let J=0,G=S.length;J<G;J++){let $=S[J],O=$.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let rt=O.getFrameExtents();if(i.multiply(rt),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,O.mapSize.y=r.y)),O.map===null||N===!0||H===!0){let It=this.type!==An?{minFilter:Be,magFilter:Be}:{};O.map!==null&&O.map.dispose(),O.map=new _n(i.x,i.y,It),O.map.texture.name=$.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();let ft=O.getViewportCount();for(let It=0;It<ft;It++){let Ft=O.getViewport(It);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),k.viewport(a),O.updateMatrices($,It),n=O.getFrustum(),v(E,T,O.camera,$,this.type)}O.isPointLightShadow!==!0&&this.type===An&&x(O,T),O.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,R)};function x(S,E){let T=t.update(A);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _n(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,T,f,A,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,T,p,A,null)}function _(S,E,T,M){let y=null,R=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)y=R;else if(y=T.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=y.uuid,N=E.uuid,H=l[k];H===void 0&&(H={},l[k]=H);let J=H[N];J===void 0&&(J=y.clone(),H[N]=J,E.addEventListener("dispose",w)),y=J}if(y.visible=E.visible,y.wireframe=E.wireframe,M===An?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=s.properties.get(y);k.light=T}return y}function v(S,E,T,M,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===An)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let N=t.update(S),H=S.material;if(Array.isArray(H)){let J=N.groups;for(let G=0,$=J.length;G<$;G++){let O=J[G],rt=H[O.materialIndex];if(rt&&rt.visible){let ft=_(S,rt,M,y);S.onBeforeShadow(s,S,E,T,N,ft,O),s.renderBufferDirect(T,null,N,ft,S,O),S.onAfterShadow(s,S,E,T,N,ft,O)}}}else if(H.visible){let J=_(S,H,M,y);S.onBeforeShadow(s,S,E,T,N,J,null),s.renderBufferDirect(T,null,N,J,S,null),S.onAfterShadow(s,S,E,T,N,J,null)}}let k=S.children;for(let N=0,H=k.length;N<H;N++)v(k[N],E,T,M,y)}function w(S){S.target.removeEventListener("dispose",w);for(let T in l){let M=l[T],y=S.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var gg={[ea]:na,[ia]:aa,[sa]:oa,[bi]:ra,[na]:ea,[aa]:ia,[oa]:sa,[ra]:bi};function mg(s,t){function e(){let V=!1,at=new de,B=null,K=new de(0,0,0,0);return{setMask:function(ut){B!==ut&&!V&&(s.colorMask(ut,ut,ut,ut),B=ut)},setLocked:function(ut){V=ut},setClear:function(ut,lt,Lt,ue,_e){_e===!0&&(ut*=ue,lt*=ue,Lt*=ue),at.set(ut,lt,Lt,ue),K.equals(at)===!1&&(s.clearColor(ut,lt,Lt,ue),K.copy(at))},reset:function(){V=!1,B=null,K.set(-1,0,0,0)}}}function n(){let V=!1,at=!1,B=null,K=null,ut=null;return{setReversed:function(lt){if(at!==lt){let Lt=t.get("EXT_clip_control");at?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let ue=ut;ut=null,this.setClear(ue)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?ot(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(lt){B!==lt&&!V&&(s.depthMask(lt),B=lt)},setFunc:function(lt){if(at&&(lt=gg[lt]),K!==lt){switch(lt){case ea:s.depthFunc(s.NEVER);break;case na:s.depthFunc(s.ALWAYS);break;case ia:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case sa:s.depthFunc(s.EQUAL);break;case ra:s.depthFunc(s.GEQUAL);break;case aa:s.depthFunc(s.GREATER);break;case oa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=lt}},setLocked:function(lt){V=lt},setClear:function(lt){ut!==lt&&(at&&(lt=1-lt),s.clearDepth(lt),ut=lt)},reset:function(){V=!1,B=null,K=null,ut=null,at=!1}}}function i(){let V=!1,at=null,B=null,K=null,ut=null,lt=null,Lt=null,ue=null,_e=null;return{setTest:function($t){V||($t?ot(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function($t){at!==$t&&!V&&(s.stencilMask($t),at=$t)},setFunc:function($t,Xe,hn){(B!==$t||K!==Xe||ut!==hn)&&(s.stencilFunc($t,Xe,hn),B=$t,K=Xe,ut=hn)},setOp:function($t,Xe,hn){(lt!==$t||Lt!==Xe||ue!==hn)&&(s.stencilOp($t,Xe,hn),lt=$t,Lt=Xe,ue=hn)},setLocked:function($t){V=$t},setClear:function($t){_e!==$t&&(s.clearStencil($t),_e=$t)},reset:function(){V=!1,at=null,B=null,K=null,ut=null,lt=null,Lt=null,ue=null,_e=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],m=null,A=!1,g=null,d=null,x=null,_=null,v=null,w=null,S=null,E=new zt(0,0,0),T=0,M=!1,y=null,R=null,k=null,N=null,H=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=$>=1):O.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=$>=2);let rt=null,ft={},It=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),ee=new de().fromArray(It),X=new de().fromArray(Ft);function nt(V,at,B,K){let ut=new Uint8Array(4),lt=s.createTexture();s.bindTexture(V,lt),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<B;Lt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(at+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return lt}let Ct={};Ct[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(s.DEPTH_TEST),a.setFunc(bi),Ot(!1),Bt(Go),ot(s.CULL_FACE),U(Ln);function ot(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function wt(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Vt(V,at){return u[V]!==at?(s.bindFramebuffer(V,at),u[V]=at,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function kt(V,at){let B=p,K=!1;if(V){B=f.get(at),B===void 0&&(B=[],f.set(at,B));let ut=V.textures;if(B.length!==ut.length||B[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Lt=ut.length;lt<Lt;lt++)B[lt]=s.COLOR_ATTACHMENT0+lt;B.length=ut.length,K=!0}}else B[0]!==s.BACK&&(B[0]=s.BACK,K=!0);K&&s.drawBuffers(B)}function he(V){return m!==V?(s.useProgram(V),m=V,!0):!1}let Wt={[Kn]:s.FUNC_ADD,[Gl]:s.FUNC_SUBTRACT,[Wl]:s.FUNC_REVERSE_SUBTRACT};Wt[Xl]=s.MIN,Wt[Yl]=s.MAX;let fe={[Kl]:s.ZERO,[Jl]:s.ONE,[Zl]:s.SRC_COLOR,[$r]:s.SRC_ALPHA,[nh]:s.SRC_ALPHA_SATURATE,[th]:s.DST_COLOR,[Ql]:s.DST_ALPHA,[jl]:s.ONE_MINUS_SRC_COLOR,[ta]:s.ONE_MINUS_SRC_ALPHA,[eh]:s.ONE_MINUS_DST_COLOR,[$l]:s.ONE_MINUS_DST_ALPHA,[ih]:s.CONSTANT_COLOR,[sh]:s.ONE_MINUS_CONSTANT_COLOR,[rh]:s.CONSTANT_ALPHA,[ah]:s.ONE_MINUS_CONSTANT_ALPHA};function U(V,at,B,K,ut,lt,Lt,ue,_e,$t){if(V===Ln){A===!0&&(wt(s.BLEND),A=!1);return}if(A===!1&&(ot(s.BLEND),A=!0),V!==Hl){if(V!==g||$t!==M){if((d!==Kn||v!==Kn)&&(s.blendEquation(s.FUNC_ADD),d=Kn,v=Kn),$t)switch(V){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wo:s.blendFunc(s.ONE,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}x=null,_=null,w=null,S=null,E.set(0,0,0),T=0,g=V,M=$t}return}ut=ut||at,lt=lt||B,Lt=Lt||K,(at!==d||ut!==v)&&(s.blendEquationSeparate(Wt[at],Wt[ut]),d=at,v=ut),(B!==x||K!==_||lt!==w||Lt!==S)&&(s.blendFuncSeparate(fe[B],fe[K],fe[lt],fe[Lt]),x=B,_=K,w=lt,S=Lt),(ue.equals(E)===!1||_e!==T)&&(s.blendColor(ue.r,ue.g,ue.b,_e),E.copy(ue),T=_e),g=V,M=!1}function He(V,at){V.side===Oe?wt(s.CULL_FACE):ot(s.CULL_FACE);let B=V.side===Ue;at&&(B=!B),Ot(B),V.blending===yi&&V.transparent===!1?U(Ln):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let K=V.stencilWrite;o.setTest(K),K&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(V){y!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),y=V)}function Bt(V){V!==kl?(ot(s.CULL_FACE),V!==R&&(V===Go?s.cullFace(s.BACK):V===Ol?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),R=V}function bt(V){V!==k&&(G&&s.lineWidth(V),k=V)}function re(V,at,B){V?(ot(s.POLYGON_OFFSET_FILL),(N!==at||H!==B)&&(s.polygonOffset(at,B),N=at,H=B)):wt(s.POLYGON_OFFSET_FILL)}function Mt(V){V?ot(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function b(V){V===void 0&&(V=s.TEXTURE0+J-1),rt!==V&&(s.activeTexture(V),rt=V)}function C(V,at,B){B===void 0&&(rt===null?B=s.TEXTURE0+J-1:B=rt);let K=ft[B];K===void 0&&(K={type:void 0,texture:void 0},ft[B]=K),(K.type!==V||K.texture!==at)&&(rt!==B&&(s.activeTexture(B),rt=B),s.bindTexture(V,at||Ct[V]),K.type=V,K.texture=at)}function q(){let V=ft[rt];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(V){ee.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function mt(V){X.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),X.copy(V))}function Ht(V,at){let B=l.get(at);B===void 0&&(B=new WeakMap,l.set(at,B));let K=B.get(V);K===void 0&&(K=s.getUniformBlockIndex(at,V.name),B.set(V,K))}function qt(V,at){let K=l.get(at).get(V);c.get(at)!==K&&(s.uniformBlockBinding(at,K,V.__bindingPointIndex),c.set(at,K))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ft={},u={},f=new WeakMap,p=[],m=null,A=!1,g=null,d=null,x=null,_=null,v=null,w=null,S=null,E=new zt(0,0,0),T=0,M=!1,y=null,R=null,k=null,N=null,H=null,ee.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:wt,bindFramebuffer:Vt,drawBuffers:kt,useProgram:he,setBlending:U,setMaterial:He,setFlipSided:Ot,setCullFace:Bt,setLineWidth:bt,setPolygonOffset:re,setScissorTest:Mt,activeTexture:b,bindTexture:C,unbindTexture:q,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:gt,texImage3D:Et,updateUBOMapping:Ht,uniformBlockBinding:qt,texStorage2D:Xt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:yt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Tt,viewport:mt,reset:ie}}function Hc(s,t,e,n){let i=Ag(n);switch(e){case el:return s*t;case il:return s*t;case sl:return s*t*2;case yo:return s*t/i.components*i.byteLength;case _o:return s*t/i.components*i.byteLength;case rl:return s*t*2/i.components*i.byteLength;case Io:return s*t*2/i.components*i.byteLength;case nl:return s*t*3/i.components*i.byteLength;case je:return s*t*4/i.components*i.byteLength;case Mo:return s*t*4/i.components*i.byteLength;case Vs:case Ps:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Us:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(s,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(s,8)*Math.max(t,8)/2;case ga:case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _a:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ba:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ds:case Pa:case La:return Math.ceil(s/4)*Math.ceil(t/4)*16;case al:case Ua:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Da:case qa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(s){switch(s){case yn:case Qc:return{byteLength:1,components:1};case Ji:case $c:case ts:return{byteLength:2,components:1};case vo:case Co:return{byteLength:2,components:4};case $n:case xo:case sn:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function xg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,C){return p?new OffscreenCanvas(b,C):zs("canvas")}function A(b,C,q){let Y=1,Z=Mt(b);if((Z.width>q||Z.height>q)&&(Y=q/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let W=Math.floor(Y*Z.width),yt=Math.floor(Y*Z.height);u===void 0&&(u=m(W,yt));let ct=C?m(W,yt):u;return ct.width=W,ct.height=yt,ct.getContext("2d").drawImage(b,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+yt+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function g(b){return b.generateMipmaps}function d(b){s.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(b,C,q,Y,Z=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=C;if(C===s.RED&&(q===s.FLOAT&&(W=s.R32F),q===s.HALF_FLOAT&&(W=s.R16F),q===s.UNSIGNED_BYTE&&(W=s.R8)),C===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(W=s.R8UI),q===s.UNSIGNED_SHORT&&(W=s.R16UI),q===s.UNSIGNED_INT&&(W=s.R32UI),q===s.BYTE&&(W=s.R8I),q===s.SHORT&&(W=s.R16I),q===s.INT&&(W=s.R32I)),C===s.RG&&(q===s.FLOAT&&(W=s.RG32F),q===s.HALF_FLOAT&&(W=s.RG16F),q===s.UNSIGNED_BYTE&&(W=s.RG8)),C===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(W=s.RG8UI),q===s.UNSIGNED_SHORT&&(W=s.RG16UI),q===s.UNSIGNED_INT&&(W=s.RG32UI),q===s.BYTE&&(W=s.RG8I),q===s.SHORT&&(W=s.RG16I),q===s.INT&&(W=s.RG32I)),C===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(W=s.RGB8UI),q===s.UNSIGNED_SHORT&&(W=s.RGB16UI),q===s.UNSIGNED_INT&&(W=s.RGB32UI),q===s.BYTE&&(W=s.RGB8I),q===s.SHORT&&(W=s.RGB16I),q===s.INT&&(W=s.RGB32I)),C===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),q===s.UNSIGNED_INT&&(W=s.RGBA32UI),q===s.BYTE&&(W=s.RGBA8I),q===s.SHORT&&(W=s.RGBA16I),q===s.INT&&(W=s.RGBA32I)),C===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),C===s.RGBA){let yt=Z?pr:Yt.getTransfer(Y);q===s.FLOAT&&(W=s.RGBA32F),q===s.HALF_FLOAT&&(W=s.RGBA16F),q===s.UNSIGNED_BYTE&&(W=yt===te?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(b,C){let q;return b?C===null||C===$n||C===wi?q=s.DEPTH24_STENCIL8:C===sn?q=s.DEPTH32F_STENCIL8:C===Ji&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===$n||C===wi?q=s.DEPTH_COMPONENT24:C===sn?q=s.DEPTH_COMPONENT32F:C===Ji&&(q=s.DEPTH_COMPONENT16),q}function w(b,C){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Be&&b.minFilter!==nn?Math.log2(Math.max(C.width,C.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?C.mipmaps.length:1}function S(b){let C=b.target;C.removeEventListener("dispose",S),T(C),C.isVideoTexture&&h.delete(C)}function E(b){let C=b.target;C.removeEventListener("dispose",E),y(C)}function T(b){let C=n.get(b);if(C.__webglInit===void 0)return;let q=b.source,Y=f.get(q);if(Y){let Z=Y[C.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(b),Object.keys(Y).length===0&&f.delete(q)}n.remove(b)}function M(b){let C=n.get(b);s.deleteTexture(C.__webglTexture);let q=b.source,Y=f.get(q);delete Y[C.__cacheKey],a.memory.textures--}function y(b){let C=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let Z=0;Z<C.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(C.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)s.deleteFramebuffer(C.__webglFramebuffer[Y]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let q=b.textures;for(let Y=0,Z=q.length;Y<Z;Y++){let W=n.get(q[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(q[Y])}n.remove(b)}let R=0;function k(){R=0}function N(){let b=R;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),R+=1,b}function H(b){let C=[];return C.push(b.wrapS),C.push(b.wrapT),C.push(b.wrapR||0),C.push(b.magFilter),C.push(b.minFilter),C.push(b.anisotropy),C.push(b.internalFormat),C.push(b.format),C.push(b.type),C.push(b.generateMipmaps),C.push(b.premultiplyAlpha),C.push(b.flipY),C.push(b.unpackAlignment),C.push(b.colorSpace),C.join()}function J(b,C){let q=n.get(b);if(b.isVideoTexture&&bt(b),b.isRenderTargetTexture===!1&&b.version>0&&q.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(q,b,C);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+C)}function G(b,C){let q=n.get(b);if(b.version>0&&q.__version!==b.version){X(q,b,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+C)}function $(b,C){let q=n.get(b);if(b.version>0&&q.__version!==b.version){X(q,b,C);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+C)}function O(b,C){let q=n.get(b);if(b.version>0&&q.__version!==b.version){nt(q,b,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+C)}let rt={[Ki]:s.REPEAT,[jn]:s.CLAMP_TO_EDGE,[ha]:s.MIRRORED_REPEAT},ft={[Be]:s.NEAREST,[mh]:s.NEAREST_MIPMAP_NEAREST,[as]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[_r]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},It={[Ch]:s.NEVER,[Sh]:s.ALWAYS,[yh]:s.LESS,[cl]:s.LEQUAL,[_h]:s.EQUAL,[bh]:s.GEQUAL,[Ih]:s.GREATER,[Mh]:s.NOTEQUAL};function Ft(b,C){if(C.type===sn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===nn||C.magFilter===_r||C.magFilter===as||C.magFilter===Qn||C.minFilter===nn||C.minFilter===_r||C.minFilter===as||C.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,rt[C.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,rt[C.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,rt[C.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ft[C.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,It[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Be||C.minFilter!==as&&C.minFilter!==Qn||C.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function ee(b,C){let q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,C.addEventListener("dispose",S));let Y=C.source,Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));let W=H(C);if(W!==b.__cacheKey){Z[W]===void 0&&(Z[W]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),Z[W].usedTimes++;let yt=Z[b.__cacheKey];yt!==void 0&&(Z[b.__cacheKey].usedTimes--,yt.usedTimes===0&&M(C)),b.__cacheKey=W,b.__webglTexture=Z[W].texture}return q}function X(b,C,q){let Y=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=s.TEXTURE_3D);let Z=ee(b,C),W=C.source;e.bindTexture(Y,b.__webglTexture,s.TEXTURE0+q);let yt=n.get(W);if(W.version!==yt.__version||Z===!0){e.activeTexture(s.TEXTURE0+q);let ct=Yt.getPrimaries(Yt.workingColorSpace),pt=C.colorSpace===Pn?null:Yt.getPrimaries(C.colorSpace),Xt=C.colorSpace===Pn||ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Q=A(C.image,!1,i.maxTextureSize);Q=re(C,Q);let gt=r.convert(C.format,C.colorSpace),Et=r.convert(C.type),Tt=_(C.internalFormat,gt,Et,C.colorSpace,C.isVideoTexture);Ft(Y,C);let mt,Ht=C.mipmaps,qt=C.isVideoTexture!==!0,ie=yt.__version===void 0||Z===!0,V=W.dataReady,at=w(C,Q);if(C.isDepthTexture)Tt=v(C.format===Ti,C.type),ie&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Tt,Q.width,Q.height,0,gt,Et,null));else if(C.isDataTexture)if(Ht.length>0){qt&&ie&&e.texStorage2D(s.TEXTURE_2D,at,Tt,Ht[0].width,Ht[0].height);for(let B=0,K=Ht.length;B<K;B++)mt=Ht[B],qt?V&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,mt.width,mt.height,gt,Et,mt.data):e.texImage2D(s.TEXTURE_2D,B,Tt,mt.width,mt.height,0,gt,Et,mt.data);C.generateMipmaps=!1}else qt?(ie&&e.texStorage2D(s.TEXTURE_2D,at,Tt,Q.width,Q.height),V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,gt,Et,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,Q.width,Q.height,0,gt,Et,Q.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){qt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Tt,Ht[0].width,Ht[0].height,Q.depth);for(let B=0,K=Ht.length;B<K;B++)if(mt=Ht[B],C.format!==je)if(gt!==null)if(qt){if(V)if(C.layerUpdates.size>0){let ut=Hc(mt.width,mt.height,C.format,C.type);for(let lt of C.layerUpdates){let Lt=mt.data.subarray(lt*ut/mt.data.BYTES_PER_ELEMENT,(lt+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,lt,mt.width,mt.height,1,gt,Lt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,mt.width,mt.height,Q.depth,gt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,B,Tt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,mt.width,mt.height,Q.depth,gt,Et,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,B,Tt,mt.width,mt.height,Q.depth,0,gt,Et,mt.data)}else{qt&&ie&&e.texStorage2D(s.TEXTURE_2D,at,Tt,Ht[0].width,Ht[0].height);for(let B=0,K=Ht.length;B<K;B++)mt=Ht[B],C.format!==je?gt!==null?qt?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,B,0,0,mt.width,mt.height,gt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,B,Tt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?V&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,mt.width,mt.height,gt,Et,mt.data):e.texImage2D(s.TEXTURE_2D,B,Tt,mt.width,mt.height,0,gt,Et,mt.data)}else if(C.isDataArrayTexture)if(qt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Tt,Q.width,Q.height,Q.depth),V)if(C.layerUpdates.size>0){let B=Hc(Q.width,Q.height,C.format,C.type);for(let K of C.layerUpdates){let ut=Q.data.subarray(K*B/Q.data.BYTES_PER_ELEMENT,(K+1)*B/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,gt,Et,ut)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,gt,Et,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,gt,Et,Q.data);else if(C.isData3DTexture)qt?(ie&&e.texStorage3D(s.TEXTURE_3D,at,Tt,Q.width,Q.height,Q.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,gt,Et,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,gt,Et,Q.data);else if(C.isFramebufferTexture){if(ie)if(qt)e.texStorage2D(s.TEXTURE_2D,at,Tt,Q.width,Q.height);else{let B=Q.width,K=Q.height;for(let ut=0;ut<at;ut++)e.texImage2D(s.TEXTURE_2D,ut,Tt,B,K,0,gt,Et,null),B>>=1,K>>=1}}else if(Ht.length>0){if(qt&&ie){let B=Mt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,at,Tt,B.width,B.height)}for(let B=0,K=Ht.length;B<K;B++)mt=Ht[B],qt?V&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,gt,Et,mt):e.texImage2D(s.TEXTURE_2D,B,Tt,gt,Et,mt);C.generateMipmaps=!1}else if(qt){if(ie){let B=Mt(Q);e.texStorage2D(s.TEXTURE_2D,at,Tt,B.width,B.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Et,Q)}else e.texImage2D(s.TEXTURE_2D,0,Tt,gt,Et,Q);g(C)&&d(Y),yt.__version=W.version,C.onUpdate&&C.onUpdate(C)}b.__version=C.version}function nt(b,C,q){if(C.image.length!==6)return;let Y=ee(b,C),Z=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+q);let W=n.get(Z);if(Z.version!==W.__version||Y===!0){e.activeTexture(s.TEXTURE0+q);let yt=Yt.getPrimaries(Yt.workingColorSpace),ct=C.colorSpace===Pn?null:Yt.getPrimaries(C.colorSpace),pt=C.colorSpace===Pn||yt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Xt=C.isCompressedTexture||C.image[0].isCompressedTexture,Q=C.image[0]&&C.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!Xt&&!Q?gt[K]=A(C.image[K],!0,i.maxCubemapSize):gt[K]=Q?C.image[K].image:C.image[K],gt[K]=re(C,gt[K]);let Et=gt[0],Tt=r.convert(C.format,C.colorSpace),mt=r.convert(C.type),Ht=_(C.internalFormat,Tt,mt,C.colorSpace),qt=C.isVideoTexture!==!0,ie=W.__version===void 0||Y===!0,V=Z.dataReady,at=w(C,Et);Ft(s.TEXTURE_CUBE_MAP,C);let B;if(Xt){qt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Ht,Et.width,Et.height);for(let K=0;K<6;K++){B=gt[K].mipmaps;for(let ut=0;ut<B.length;ut++){let lt=B[ut];C.format!==je?Tt!==null?qt?V&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,lt.width,lt.height,Tt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,lt.width,lt.height,Tt,mt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Ht,lt.width,lt.height,0,Tt,mt,lt.data)}}}else{if(B=C.mipmaps,qt&&ie){B.length>0&&at++;let K=Mt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(Q){qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Tt,mt,gt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,gt[K].width,gt[K].height,0,Tt,mt,gt[K].data);for(let ut=0;ut<B.length;ut++){let Lt=B[ut].image[K].image;qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Lt.width,Lt.height,Tt,mt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Ht,Lt.width,Lt.height,0,Tt,mt,Lt.data)}}else{qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,mt,gt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Tt,mt,gt[K]);for(let ut=0;ut<B.length;ut++){let lt=B[ut];qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Tt,mt,lt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Ht,Tt,mt,lt.image[K])}}}g(C)&&d(s.TEXTURE_CUBE_MAP),W.__version=Z.version,C.onUpdate&&C.onUpdate(C)}b.__version=C.version}function Ct(b,C,q,Y,Z,W){let yt=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),pt=_(q.internalFormat,yt,ct,q.colorSpace),Xt=n.get(C),Q=n.get(q);if(Q.__renderTarget=C,!Xt.__hasExternalTextures){let gt=Math.max(1,C.width>>W),Et=Math.max(1,C.height>>W);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,pt,gt,Et,C.depth,0,yt,ct,null):e.texImage2D(Z,W,pt,gt,Et,0,yt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Bt(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,Ot(C)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,Q.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(b,C,q){if(s.bindRenderbuffer(s.RENDERBUFFER,b),C.depthBuffer){let Y=C.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,W=v(C.stencilBuffer,Z),yt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=Ot(C);Bt(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,W,C.width,C.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,W,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,W,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,b)}else{let Y=C.textures;for(let Z=0;Z<Y.length;Z++){let W=Y[Z],yt=r.convert(W.format,W.colorSpace),ct=r.convert(W.type),pt=_(W.internalFormat,yt,ct,W.colorSpace),Xt=Ot(C);q&&Bt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,pt,C.width,C.height):Bt(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,pt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,pt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(b,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(C.depthTexture);Y.__renderTarget=C,(!Y.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),J(C.depthTexture,0);let Z=Y.__webglTexture,W=Ot(C);if(C.depthTexture.format===_i)Bt(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(C.depthTexture.format===Ti)Bt(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Vt(b){let C=n.get(b),q=b.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){let Z=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),C.__depthDisposeCallback=Z}C.__boundDepthTexture=Y}if(b.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");wt(C.__webglFramebuffer,b)}else if(q){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=s.createRenderbuffer(),ot(C.__webglDepthbuffer[Y],b,!1);else{let Z=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=C.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,W)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ot(C.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(b,C,q){let Y=n.get(b);C!==void 0&&Ct(Y.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Vt(b)}function he(b){let C=b.texture,q=n.get(b),Y=n.get(C);b.addEventListener("dispose",E);let Z=b.textures,W=b.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=C.version,a.memory.textures++),W){q.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[ct]=[];for(let pt=0;pt<C.mipmaps.length;pt++)q.__webglFramebuffer[ct][pt]=s.createFramebuffer()}else q.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let ct=0;ct<C.mipmaps.length;ct++)q.__webglFramebuffer[ct]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(yt)for(let ct=0,pt=Z.length;ct<pt;ct++){let Xt=n.get(Z[ct]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Bt(b)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){let pt=Z[ct];q.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ct]);let Xt=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),gt=_(pt.internalFormat,Xt,Q,pt.colorSpace,b.isXRRenderTarget===!0),Et=Ot(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,gt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,q.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(q.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,C);for(let ct=0;ct<6;ct++)if(C.mipmaps&&C.mipmaps.length>0)for(let pt=0;pt<C.mipmaps.length;pt++)Ct(q.__webglFramebuffer[ct][pt],b,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else Ct(q.__webglFramebuffer[ct],b,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(C)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ct=0,pt=Z.length;ct<pt;ct++){let Xt=Z[ct],Q=n.get(Xt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ft(s.TEXTURE_2D,Xt),Ct(q.__webglFramebuffer,b,Xt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),g(Xt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Y.__webglTexture),Ft(ct,C),C.mipmaps&&C.mipmaps.length>0)for(let pt=0;pt<C.mipmaps.length;pt++)Ct(q.__webglFramebuffer[pt],b,C,s.COLOR_ATTACHMENT0,ct,pt);else Ct(q.__webglFramebuffer,b,C,s.COLOR_ATTACHMENT0,ct,0);g(C)&&d(ct),e.unbindTexture()}b.depthBuffer&&Vt(b)}function Wt(b){let C=b.textures;for(let q=0,Y=C.length;q<Y;q++){let Z=C[q];if(g(Z)){let W=x(b),yt=n.get(Z).__webglTexture;e.bindTexture(W,yt),d(W),e.unbindTexture()}}}let fe=[],U=[];function He(b){if(b.samples>0){if(Bt(b)===!1){let C=b.textures,q=b.width,Y=b.height,Z=s.COLOR_BUFFER_BIT,W=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(b),ct=C.length>1;if(ct)for(let pt=0;pt<C.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<C.length;pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);let Xt=n.get(C[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,q,Y,0,0,q,Y,Z,s.NEAREST),c===!0&&(fe.length=0,U.length=0,fe.push(s.COLOR_ATTACHMENT0+pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(fe.push(W),U.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<C.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);let Xt=n.get(C[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let C=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Ot(b){return Math.min(i.maxSamples,b.samples)}function Bt(b){let C=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function bt(b){let C=a.render.frame;h.get(b)!==C&&(h.set(b,C),b.update())}function re(b,C){let q=b.colorSpace,Y=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||q!==Li&&q!==Pn&&(Yt.getTransfer(q)===te?(Y!==je||Z!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function Mt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=O,this.rebindTextures=kt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Bt}function vg(s,t){function e(n,i=Pn){let r,a=Yt.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===vo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return s.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qc)return s.BYTE;if(n===$c)return s.SHORT;if(n===Ji)return s.UNSIGNED_SHORT;if(n===xo)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===ts)return s.HALF_FLOAT;if(n===el)return s.ALPHA;if(n===nl)return s.RGB;if(n===je)return s.RGBA;if(n===il)return s.LUMINANCE;if(n===sl)return s.LUMINANCE_ALPHA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===yo)return s.RED;if(n===_o)return s.RED_INTEGER;if(n===rl)return s.RG;if(n===Io)return s.RG_INTEGER;if(n===Mo)return s.RGBA_INTEGER;if(n===Vs||n===Ps||n===Ls||n===Us)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===ma||n===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===ma)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===va||n===Ca||n===ya||n===_a||n===Ia||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Ra||n===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ds||n===Pa||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ds)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===Ua||n===Da||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ds)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Qa=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Gt=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cg={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),d=this._getHandJoint(l,A);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
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

}`,$a=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new De,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:yg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},to=class extends qn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,m=null,A=new $a,g=e.getContextAttributes(),d=null,x=null,_=[],v=[],w=new Pt,S=null,E=new Re;E.viewport=new de;let T=new Re;T.viewport=new de;let M=[E,T],y=new Qa,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=_[X];return nt===void 0&&(nt=new Yi,_[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=_[X];return nt===void 0&&(nt=new Yi,_[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=_[X];return nt===void 0&&(nt=new Yi,_[X]=nt),nt.getHandSpace()};function N(X){let nt=v.indexOf(X.inputSource);if(nt===-1)return;let Ct=_[nt];Ct!==void 0&&(Ct.update(X.inputSource,X.frame,l||a),Ct.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let X=0;X<_.length;X++){let nt=v[X];nt!==null&&(v[X]=null,_[X].disconnect(nt))}R=null,k=null,A.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,x=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new _n(p.framebufferWidth,p.framebufferHeight,{format:je,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,Ct=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Ti:_i,Ct=g.stencil?wi:$n);let wt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new _n(f.textureWidth,f.textureHeight,{format:je,type:yn,depthTexture:new Js(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function J(X){for(let nt=0;nt<X.removed.length;nt++){let Ct=X.removed[nt],ot=v.indexOf(Ct);ot>=0&&(v[ot]=null,_[ot].disconnect(Ct))}for(let nt=0;nt<X.added.length;nt++){let Ct=X.added[nt],ot=v.indexOf(Ct);if(ot===-1){for(let Vt=0;Vt<_.length;Vt++)if(Vt>=v.length){v.push(Ct),ot=Vt;break}else if(v[Vt]===null){v[Vt]=Ct,ot=Vt;break}if(ot===-1)break}let wt=_[ot];wt&&wt.connect(Ct)}}let G=new D,$=new D;function O(X,nt,Ct){G.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(Ct.matrixWorld);let ot=G.distanceTo($),wt=nt.projectionMatrix.elements,Vt=Ct.projectionMatrix.elements,kt=wt[14]/(wt[10]-1),he=wt[14]/(wt[10]+1),Wt=(wt[9]+1)/wt[5],fe=(wt[9]-1)/wt[5],U=(wt[8]-1)/wt[0],He=(Vt[8]+1)/Vt[0],Ot=kt*U,Bt=kt*He,bt=ot/(-U+He),re=bt*-U;if(nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(re),X.translateZ(bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Mt=kt+bt,b=he+bt,C=Ot-re,q=Bt+(ot-re),Y=Wt*he/b*Mt,Z=fe*he/b*Mt;X.projectionMatrix.makePerspective(C,q,Y,Z,Mt,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let nt=X.near,Ct=X.far;A.texture!==null&&(A.depthNear>0&&(nt=A.depthNear),A.depthFar>0&&(Ct=A.depthFar)),y.near=T.near=E.near=nt,y.far=T.far=E.far=Ct,(R!==y.near||k!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far),E.layers.mask=X.layers.mask|2,T.layers.mask=X.layers.mask|4,y.layers.mask=E.layers.mask|T.layers.mask;let ot=X.parent,wt=y.cameras;rt(y,ot);for(let Vt=0;Vt<wt.length;Vt++)rt(wt[Vt],ot);wt.length===2?O(y,E,T):y.projectionMatrix.copy(E.projectionMatrix),ft(X,y,ot)};function ft(X,nt,Ct){Ct===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(Ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=za*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let It=null;function Ft(X,nt){if(h=nt.getViewerPose(l||a),m=nt,h!==null){let Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let ot=!1;Ct.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Vt=0;Vt<Ct.length;Vt++){let kt=Ct[Vt],he=null;if(p!==null)he=p.getViewport(kt);else{let fe=u.getViewSubImage(f,kt);he=fe.viewport,Vt===0&&(t.setRenderTargetTextures(x,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(x))}let Wt=M[Vt];Wt===void 0&&(Wt=new Re,Wt.layers.enable(Vt),Wt.viewport=new de,M[Vt]=Wt),Wt.matrix.fromArray(kt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(kt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(he.x,he.y,he.width,he.height),Vt===0&&(y.matrix.copy(Wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(Wt)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){let Vt=u.getDepthInformation(Ct[0]);Vt&&Vt.isValid&&Vt.texture&&A.init(t,Vt,i.renderState)}}for(let Ct=0;Ct<_.length;Ct++){let ot=v[Ct],wt=_[Ct];ot!==null&&wt!==void 0&&wt.update(ot,nt,l||a)}It&&It(X,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let ee=new dl;ee.setAnimationLoop(Ft),this.setAnimationLoop=function(X){It=X},this.dispose=function(){}}},Xn=new an,Ig=new ne;function Mg(s,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ul(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,x,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,v)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),A(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,x,_):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ue&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ue&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let x=t.get(d),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,Xn.copy(v),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),g.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Xn)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,x,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=_*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function A(g,d){let x=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function l(x,_){let v=i[x.id];v===void 0&&(m(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",g));let w=_.program;n.updateUBOMapping(x,w);let S=t.render.frame;r[x.id]!==S&&(f(x),r[x.id]=S)}function h(x){let _=u();x.__bindingPointIndex=_;let v=s.createBuffer(),w=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let _=i[x.id],v=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,E=v.length;S<E;S++){let T=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,y=T.length;M<y;M++){let R=T[M];if(p(R,S,M,w)===!0){let k=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],H=0;for(let J=0;J<N.length;J++){let G=N[J],$=A(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,k+H,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,_,v,w){let S=x.value,E=_+"_"+v;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:w[E]=S.clone(),!0;{let T=w[E];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return w[E]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function m(x){let _=x.uniforms,v=0,w=16;for(let E=0,T=_.length;E<T;E++){let M=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,R=M.length;y<R;y++){let k=M[y],N=Array.isArray(k.value)?k.value:[k.value];for(let H=0,J=N.length;H<J;H++){let G=N[H],$=A(G),O=v%w,rt=O%$.boundary,ft=O+rt;v+=rt,ft!==0&&w-ft<$.storage&&(v+=w-ft),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=$.storage}}}let S=v%w;return S>0&&(v+=w-S),x.__size=v,x.__cache={},this}function A(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){let _=x.target;_.removeEventListener("dispose",g);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function d(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:d}}var Zs=class{constructor(t={}){let{canvas:e=wh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,d=null,x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this.toneMapping=Un,this.toneMappingExposure=1;let v=this,w=!1,S=0,E=0,T=null,M=-1,y=null,R=new de,k=new de,N=null,H=new zt(0),J=0,G=e.width,$=e.height,O=1,rt=null,ft=null,It=new de(0,0,G,$),Ft=new de(0,0,G,$),ee=!1,X=new Zi,nt=!1,Ct=!1,ot=new ne,wt=new ne,Vt=new D,kt=new de,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function fe(){return T===null?O:1}let U=n;function He(I,P){return e.getContext(I,P)}try{let I={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){let P="webgl2";if(U=He(P,I),U===null)throw He(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ot,Bt,bt,re,Mt,b,C,q,Y,Z,W,yt,ct,pt,Xt,Q,gt,Et,Tt,mt,Ht,qt,ie,V;function at(){Ot=new Of(U),Ot.init(),qt=new vg(U,Ot),Bt=new Df(U,Ot,t,qt),bt=new mg(U,Ot),Bt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),re=new Gf(U),Mt=new ig,b=new xg(U,Ot,bt,Mt,Bt,qt,re),C=new Nf(v),q=new kf(v),Y=new Zh(U),ie=new Lf(U,Y),Z=new Bf(U,Y,re,ie),W=new Xf(U,Z,Y,re),Tt=new Wf(U,Bt,b),Q=new qf(Mt),yt=new ng(v,C,q,Ot,Bt,ie,Q),ct=new Mg(v,Mt),pt=new rg,Xt=new ug(Ot),Et=new Pf(v,C,q,bt,W,p,c),gt=new pg(v,W,Bt),V=new bg(U,re,Bt,bt),mt=new Uf(U,Ot,re),Ht=new Hf(U,Ot,re),re.programs=yt.programs,v.capabilities=Bt,v.extensions=Ot,v.properties=Mt,v.renderLists=pt,v.shadowMap=gt,v.state=bt,v.info=re}at();let B=new to(v,U);this.xr=B,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let I=Ot.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ot.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(I){I!==void 0&&(O=I,this.setSize(G,$,!1))},this.getSize=function(I){return I.set(G,$)},this.setSize=function(I,P,z=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=I,$=P,e.width=Math.floor(I*O),e.height=Math.floor(P*O),z===!0&&(e.style.width=I+"px",e.style.height=P+"px"),this.setViewport(0,0,I,P)},this.getDrawingBufferSize=function(I){return I.set(G*O,$*O).floor()},this.setDrawingBufferSize=function(I,P,z){G=I,$=P,O=z,e.width=Math.floor(I*z),e.height=Math.floor(P*z),this.setViewport(0,0,I,P)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(It)},this.setViewport=function(I,P,z,F){I.isVector4?It.set(I.x,I.y,I.z,I.w):It.set(I,P,z,F),bt.viewport(R.copy(It).multiplyScalar(O).round())},this.getScissor=function(I){return I.copy(Ft)},this.setScissor=function(I,P,z,F){I.isVector4?Ft.set(I.x,I.y,I.z,I.w):Ft.set(I,P,z,F),bt.scissor(k.copy(Ft).multiplyScalar(O).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(I){bt.setScissorTest(ee=I)},this.setOpaqueSort=function(I){rt=I},this.setTransparentSort=function(I){ft=I},this.getClearColor=function(I){return I.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(I=!0,P=!0,z=!0){let F=0;if(I){let L=!1;if(T!==null){let tt=T.texture.format;L=tt===Mo||tt===Io||tt===_o}if(L){let tt=T.texture.type,ht=tt===yn||tt===$n||tt===Ji||tt===wi||tt===vo||tt===Co,At=Et.getClearColor(),xt=Et.getClearAlpha(),Rt=At.r,Ut=At.g,vt=At.b;ht?(m[0]=Rt,m[1]=Ut,m[2]=vt,m[3]=xt,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=Rt,A[1]=Ut,A[2]=vt,A[3]=xt,U.clearBufferiv(U.COLOR,0,A))}else F|=U.COLOR_BUFFER_BIT}P&&(F|=U.DEPTH_BUFFER_BIT),z&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),pt.dispose(),Xt.dispose(),Mt.dispose(),C.dispose(),q.dispose(),W.dispose(),ie.dispose(),V.dispose(),yt.dispose(),B.dispose(),B.removeEventListener("sessionstart",qo),B.removeEventListener("sessionend",No),kn.stop()};function K(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let I=re.autoReset,P=gt.enabled,z=gt.autoUpdate,F=gt.needsUpdate,L=gt.type;at(),re.autoReset=I,gt.enabled=P,gt.autoUpdate=z,gt.needsUpdate=F,gt.type=L}function lt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Lt(I){let P=I.target;P.removeEventListener("dispose",Lt),ue(P)}function ue(I){_e(I),Mt.remove(I)}function _e(I){let P=Mt.get(I).programs;P!==void 0&&(P.forEach(function(z){yt.releaseProgram(z)}),I.isShaderMaterial&&yt.releaseShaderCache(I))}this.renderBufferDirect=function(I,P,z,F,L,tt){P===null&&(P=he);let ht=L.isMesh&&L.matrixWorld.determinant()<0,At=Nl(I,P,z,F,L);bt.setMaterial(F,ht);let xt=z.index,Rt=1;if(F.wireframe===!0){if(xt=Z.getWireframeAttribute(z),xt===void 0)return;Rt=2}let Ut=z.drawRange,vt=z.attributes.position,Jt=Ut.start*Rt,se=(Ut.start+Ut.count)*Rt;tt!==null&&(Jt=Math.max(Jt,tt.start*Rt),se=Math.min(se,(tt.start+tt.count)*Rt)),xt!==null?(Jt=Math.max(Jt,0),se=Math.min(se,xt.count)):vt!=null&&(Jt=Math.max(Jt,0),se=Math.min(se,vt.count));let ae=se-Jt;if(ae<0||ae===1/0)return;ie.setup(L,F,At,z,xt);let Pe,Zt=mt;if(xt!==null&&(Pe=Y.get(xt),Zt=Ht,Zt.setIndex(Pe)),L.isMesh)F.wireframe===!0?(bt.setLineWidth(F.wireframeLinewidth*fe()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(L.isLine){let _t=F.linewidth;_t===void 0&&(_t=1),bt.setLineWidth(_t*fe()),L.isLineSegments?Zt.setMode(U.LINES):L.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else L.isPoints?Zt.setMode(U.POINTS):L.isSprite&&Zt.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Zt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Zt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let _t=L._multiDrawStarts,un=L._multiDrawCounts,jt=L._multiDrawCount,Ye=xt?Y.get(xt).bytesPerElement:1,si=Mt.get(F).currentProgram.getUniforms();for(let ze=0;ze<jt;ze++)si.setValue(U,"_gl_DrawID",ze),Zt.render(_t[ze]/Ye,un[ze])}else if(L.isInstancedMesh)Zt.renderInstances(Jt,ae,L.count);else if(z.isInstancedBufferGeometry){let _t=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,un=Math.min(z.instanceCount,_t);Zt.renderInstances(Jt,ae,un)}else Zt.render(Jt,ae)};function $t(I,P,z){I.transparent===!0&&I.side===Oe&&I.forceSinglePass===!1?(I.side=Ue,I.needsUpdate=!0,rs(I,P,z),I.side=Dn,I.needsUpdate=!0,rs(I,P,z),I.side=Oe):rs(I,P,z)}this.compile=function(I,P,z=null){z===null&&(z=I),d=Xt.get(z),d.init(P),_.push(d),z.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),I!==z&&I.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();let F=new Set;return I.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let tt=L.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){let At=tt[ht];$t(At,z,L),F.add(At)}else $t(tt,z,L),F.add(tt)}),_.pop(),d=null,F},this.compileAsync=function(I,P,z=null){let F=this.compile(I,P,z);return new Promise(L=>{function tt(){if(F.forEach(function(ht){Mt.get(ht).currentProgram.isReady()&&F.delete(ht)}),F.size===0){L(I);return}setTimeout(tt,10)}Ot.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Xe=null;function hn(I){Xe&&Xe(I)}function qo(){kn.stop()}function No(){kn.start()}let kn=new dl;kn.setAnimationLoop(hn),typeof self!="undefined"&&kn.setContext(self),this.setAnimationLoop=function(I){Xe=I,B.setAnimationLoop(I),I===null?kn.stop():kn.start()},B.addEventListener("sessionstart",qo),B.addEventListener("sessionend",No),this.render=function(I,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(P),P=B.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,P,T),d=Xt.get(I,_.length),d.init(P),_.push(d),wt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(wt),Ct=this.localClippingEnabled,nt=Q.init(this.clippingPlanes,Ct),g=pt.get(I,x.length),g.init(),x.push(g),B.enabled===!0&&B.isPresenting===!0){let tt=v.xr.getDepthSensingMesh();tt!==null&&yr(tt,P,-1/0,v.sortObjects)}yr(I,P,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(rt,ft),Wt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Wt&&Et.addToRenderList(g,I),this.info.render.frame++,nt===!0&&Q.beginShadows();let z=d.state.shadowsArray;gt.render(z,I,P),nt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,L=g.transmissive;if(d.setupLights(),P.isArrayCamera){let tt=P.cameras;if(L.length>0)for(let ht=0,At=tt.length;ht<At;ht++){let xt=tt[ht];Fo(F,L,I,xt)}Wt&&Et.render(I);for(let ht=0,At=tt.length;ht<At;ht++){let xt=tt[ht];zo(g,I,xt,xt.viewport)}}else L.length>0&&Fo(F,L,I,P),Wt&&Et.render(I),zo(g,I,P);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(v,I,P),ie.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(d=_[_.length-1],nt===!0&&Q.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function yr(I,P,z,F){if(I.visible===!1)return;if(I.layers.test(P.layers)){if(I.isGroup)z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(P);else if(I.isLight)d.pushLight(I),I.castShadow&&d.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||X.intersectsSprite(I)){F&&kt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(wt);let ht=W.update(I),At=I.material;At.visible&&g.push(I,ht,At,z,kt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||X.intersectsObject(I))){let ht=W.update(I),At=I.material;if(F&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),kt.copy(I.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),kt.copy(ht.boundingSphere.center)),kt.applyMatrix4(I.matrixWorld).applyMatrix4(wt)),Array.isArray(At)){let xt=ht.groups;for(let Rt=0,Ut=xt.length;Rt<Ut;Rt++){let vt=xt[Rt],Jt=At[vt.materialIndex];Jt&&Jt.visible&&g.push(I,ht,Jt,z,kt.z,vt)}}else At.visible&&g.push(I,ht,At,z,kt.z,null)}}let tt=I.children;for(let ht=0,At=tt.length;ht<At;ht++)yr(tt[ht],P,z,F)}function zo(I,P,z,F){let L=I.opaque,tt=I.transmissive,ht=I.transparent;d.setupLightsView(z),nt===!0&&Q.setGlobalState(v.clippingPlanes,z),F&&bt.viewport(R.copy(F)),L.length>0&&ss(L,P,z),tt.length>0&&ss(tt,P,z),ht.length>0&&ss(ht,P,z),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Fo(I,P,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new _n(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?ts:yn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let tt=d.state.transmissionRenderTarget[F.id],ht=F.viewport||R;tt.setSize(ht.z,ht.w);let At=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(H),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Wt&&Et.render(z);let xt=v.toneMapping;v.toneMapping=Un;let Rt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),nt===!0&&Q.setGlobalState(v.clippingPlanes,F),ss(I,z,F),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let vt=0,Jt=P.length;vt<Jt;vt++){let se=P[vt],ae=se.object,Pe=se.geometry,Zt=se.material,_t=se.group;if(Zt.side===Oe&&ae.layers.test(F.layers)){let un=Zt.side;Zt.side=Ue,Zt.needsUpdate=!0,ko(ae,z,F,Pe,Zt,_t),Zt.side=un,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}v.setRenderTarget(At),v.setClearColor(H,J),Rt!==void 0&&(F.viewport=Rt),v.toneMapping=xt}function ss(I,P,z){let F=P.isScene===!0?P.overrideMaterial:null;for(let L=0,tt=I.length;L<tt;L++){let ht=I[L],At=ht.object,xt=ht.geometry,Rt=F===null?ht.material:F,Ut=ht.group;At.layers.test(z.layers)&&ko(At,P,z,xt,Rt,Ut)}}function ko(I,P,z,F,L,tt){I.onBeforeRender(v,P,z,F,L,tt),I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),L.onBeforeRender(v,P,z,F,I,tt),L.transparent===!0&&L.side===Oe&&L.forceSinglePass===!1?(L.side=Ue,L.needsUpdate=!0,v.renderBufferDirect(z,P,F,L,I,tt),L.side=Dn,L.needsUpdate=!0,v.renderBufferDirect(z,P,F,L,I,tt),L.side=Oe):v.renderBufferDirect(z,P,F,L,I,tt),I.onAfterRender(v,P,z,F,L,tt)}function rs(I,P,z){P.isScene!==!0&&(P=he);let F=Mt.get(I),L=d.state.lights,tt=d.state.shadowsArray,ht=L.state.version,At=yt.getParameters(I,L.state,tt,P,z),xt=yt.getProgramCacheKey(At),Rt=F.programs;F.environment=I.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(I.isMeshStandardMaterial?q:C).get(I.envMap||F.environment),F.envMapRotation=F.environment!==null&&I.envMap===null?P.environmentRotation:I.envMapRotation,Rt===void 0&&(I.addEventListener("dispose",Lt),Rt=new Map,F.programs=Rt);let Ut=Rt.get(xt);if(Ut!==void 0){if(F.currentProgram===Ut&&F.lightsStateVersion===ht)return Bo(I,At),Ut}else At.uniforms=yt.getUniforms(I),I.onBeforeCompile(At,v),Ut=yt.acquireProgram(At,xt),Rt.set(xt,Ut),F.uniforms=At.uniforms;let vt=F.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(vt.clippingPlanes=Q.uniform),Bo(I,At),F.needsLights=Fl(I),F.lightsStateVersion=ht,F.needsLights&&(vt.ambientLightColor.value=L.state.ambient,vt.lightProbe.value=L.state.probe,vt.directionalLights.value=L.state.directional,vt.directionalLightShadows.value=L.state.directionalShadow,vt.spotLights.value=L.state.spot,vt.spotLightShadows.value=L.state.spotShadow,vt.rectAreaLights.value=L.state.rectArea,vt.ltc_1.value=L.state.rectAreaLTC1,vt.ltc_2.value=L.state.rectAreaLTC2,vt.pointLights.value=L.state.point,vt.pointLightShadows.value=L.state.pointShadow,vt.hemisphereLights.value=L.state.hemi,vt.directionalShadowMap.value=L.state.directionalShadowMap,vt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,vt.spotShadowMap.value=L.state.spotShadowMap,vt.spotLightMatrix.value=L.state.spotLightMatrix,vt.spotLightMap.value=L.state.spotLightMap,vt.pointShadowMap.value=L.state.pointShadowMap,vt.pointShadowMatrix.value=L.state.pointShadowMatrix),F.currentProgram=Ut,F.uniformsList=null,Ut}function Oo(I){if(I.uniformsList===null){let P=I.currentProgram.getUniforms();I.uniformsList=Mi.seqWithValue(P.seq,I.uniforms)}return I.uniformsList}function Bo(I,P){let z=Mt.get(I);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function Nl(I,P,z,F,L){P.isScene!==!0&&(P=he),b.resetTextureUnits();let tt=P.fog,ht=F.isMeshStandardMaterial?P.environment:null,At=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Li,xt=(F.isMeshStandardMaterial?q:C).get(F.envMap||ht),Rt=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),vt=!!z.morphAttributes.position,Jt=!!z.morphAttributes.normal,se=!!z.morphAttributes.color,ae=Un;F.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ae=v.toneMapping);let Pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=Pe!==void 0?Pe.length:0,_t=Mt.get(F),un=d.state.lights;if(nt===!0&&(Ct===!0||I!==y)){let Ge=I===y&&F.id===M;Q.setState(F,I,Ge)}let jt=!1;F.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==un.state.version||_t.outputColorSpace!==At||L.isBatchedMesh&&_t.batching===!1||!L.isBatchedMesh&&_t.batching===!0||L.isBatchedMesh&&_t.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&_t.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&_t.instancing===!1||!L.isInstancedMesh&&_t.instancing===!0||L.isSkinnedMesh&&_t.skinning===!1||!L.isSkinnedMesh&&_t.skinning===!0||L.isInstancedMesh&&_t.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&_t.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&_t.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&_t.instancingMorph===!1&&L.morphTexture!==null||_t.envMap!==xt||F.fog===!0&&_t.fog!==tt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Q.numPlanes||_t.numIntersection!==Q.numIntersection)||_t.vertexAlphas!==Rt||_t.vertexTangents!==Ut||_t.morphTargets!==vt||_t.morphNormals!==Jt||_t.morphColors!==se||_t.toneMapping!==ae||_t.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,_t.__version=F.version);let Ye=_t.currentProgram;jt===!0&&(Ye=rs(F,P,L));let si=!1,ze=!1,qi=!1,oe=Ye.getUniforms(),tn=_t.uniforms;if(bt.useProgram(Ye.program)&&(si=!0,ze=!0,qi=!0),F.id!==M&&(M=F.id,ze=!0),si||y!==I){bt.buffers.depth.getReversed()?(ot.copy(I.projectionMatrix),Rh(ot),Vh(ot),oe.setValue(U,"projectionMatrix",ot)):oe.setValue(U,"projectionMatrix",I.projectionMatrix),oe.setValue(U,"viewMatrix",I.matrixWorldInverse);let Mn=oe.map.cameraPosition;Mn!==void 0&&Mn.setValue(U,Vt.setFromMatrixPosition(I.matrixWorld)),Bt.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&oe.setValue(U,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,ze=!0,qi=!0)}if(L.isSkinnedMesh){oe.setOptional(U,L,"bindMatrix"),oe.setOptional(U,L,"bindMatrixInverse");let Ge=L.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),oe.setValue(U,"boneTexture",Ge.boneTexture,b))}L.isBatchedMesh&&(oe.setOptional(U,L,"batchingTexture"),oe.setValue(U,"batchingTexture",L._matricesTexture,b),oe.setOptional(U,L,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",L._indirectTexture,b),oe.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",L._colorsTexture,b));let Ni=z.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Tt.update(L,z,Ye),(ze||_t.receiveShadow!==L.receiveShadow)&&(_t.receiveShadow=L.receiveShadow,oe.setValue(U,"receiveShadow",L.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(tn.envMap.value=xt,tn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&P.environment!==null&&(tn.envMapIntensity.value=P.environmentIntensity),ze&&(oe.setValue(U,"toneMappingExposure",v.toneMappingExposure),_t.needsLights&&zl(tn,qi),tt&&F.fog===!0&&ct.refreshFogUniforms(tn,tt),ct.refreshMaterialUniforms(tn,F,O,$,d.state.transmissionRenderTarget[I.id]),Mi.upload(U,Oo(_t),tn,b)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Mi.upload(U,Oo(_t),tn,b),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&oe.setValue(U,"center",L.center),oe.setValue(U,"modelViewMatrix",L.modelViewMatrix),oe.setValue(U,"normalMatrix",L.normalMatrix),oe.setValue(U,"modelMatrix",L.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Ge=F.uniformsGroups;for(let Mn=0,bn=Ge.length;Mn<bn;Mn++){let Ho=Ge[Mn];V.update(Ho,Ye),V.bind(Ho,Ye)}}return Ye}function zl(I,P){I.ambientLightColor.needsUpdate=P,I.lightProbe.needsUpdate=P,I.directionalLights.needsUpdate=P,I.directionalLightShadows.needsUpdate=P,I.pointLights.needsUpdate=P,I.pointLightShadows.needsUpdate=P,I.spotLights.needsUpdate=P,I.spotLightShadows.needsUpdate=P,I.rectAreaLights.needsUpdate=P,I.hemisphereLights.needsUpdate=P}function Fl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,P,z){Mt.get(I.texture).__webglTexture=P,Mt.get(I.depthTexture).__webglTexture=z;let F=Mt.get(I);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,P){let z=Mt.get(I);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(I,P=0,z=0){T=I,S=P,E=z;let F=!0,L=null,tt=!1,ht=!1;if(I){let xt=Mt.get(I);if(xt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),F=!1;else if(xt.__webglFramebuffer===void 0)b.setupRenderTarget(I);else if(xt.__hasExternalTextures)b.rebindTextures(I,Mt.get(I.texture).__webglTexture,Mt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let vt=I.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&Mt.has(vt)&&(I.width!==vt.image.width||I.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(I)}}let Rt=I.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ht=!0);let Ut=Mt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ut[P])?L=Ut[P][z]:L=Ut[P],tt=!0):I.samples>0&&b.useMultisampledRTT(I)===!1?L=Mt.get(I).__webglMultisampledFramebuffer:Array.isArray(Ut)?L=Ut[z]:L=Ut,R.copy(I.viewport),k.copy(I.scissor),N=I.scissorTest}else R.copy(It).multiplyScalar(O).floor(),k.copy(Ft).multiplyScalar(O).floor(),N=ee;if(bt.bindFramebuffer(U.FRAMEBUFFER,L)&&F&&bt.drawBuffers(I,L),bt.viewport(R),bt.scissor(k),bt.setScissorTest(N),tt){let xt=Mt.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,xt.__webglTexture,z)}else if(ht){let xt=Mt.get(I.texture),Rt=P||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,Rt)}M=-1},this.readRenderTargetPixels=function(I,P,z,F,L,tt,ht){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){bt.bindFramebuffer(U.FRAMEBUFFER,At);try{let xt=I.texture,Rt=xt.format,Ut=xt.type;if(!Bt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=I.width-F&&z>=0&&z<=I.height-L&&U.readPixels(P,z,F,L,qt.convert(Rt),qt.convert(Ut),tt)}finally{let xt=T!==null?Mt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(I,P,z,F,L,tt,ht){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){let xt=I.texture,Rt=xt.format,Ut=xt.type;if(!Bt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=I.width-F&&z>=0&&z<=I.height-L){bt.bindFramebuffer(U.FRAMEBUFFER,At);let vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,tt.byteLength,U.STREAM_READ),U.readPixels(P,z,F,L,qt.convert(Rt),qt.convert(Ut),0);let Jt=T!==null?Mt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,Jt);let se=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Th(U,se,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,tt),U.deleteBuffer(vt),U.deleteSync(se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,P=null,z=0){I.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,I=arguments[1]);let F=Math.pow(2,-z),L=Math.floor(I.image.width*F),tt=Math.floor(I.image.height*F),ht=P!==null?P.x:0,At=P!==null?P.y:0;b.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,ht,At,L,tt),bt.unbindTexture()},this.copyTextureToTexture=function(I,P,z=null,F=null,L=0){I.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,I=arguments[1],P=arguments[2],L=arguments[3]||0,z=null);let tt,ht,At,xt,Rt,Ut,vt,Jt,se,ae=I.isCompressedTexture?I.mipmaps[L]:I.image;z!==null?(tt=z.max.x-z.min.x,ht=z.max.y-z.min.y,At=z.isBox3?z.max.z-z.min.z:1,xt=z.min.x,Rt=z.min.y,Ut=z.isBox3?z.min.z:0):(tt=ae.width,ht=ae.height,At=ae.depth||1,xt=0,Rt=0,Ut=0),F!==null?(vt=F.x,Jt=F.y,se=F.z):(vt=0,Jt=0,se=0);let Pe=qt.convert(P.format),Zt=qt.convert(P.type),_t;P.isData3DTexture?(b.setTexture3D(P,0),_t=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(b.setTexture2DArray(P,0),_t=U.TEXTURE_2D_ARRAY):(b.setTexture2D(P,0),_t=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);let un=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ye=U.getParameter(U.UNPACK_SKIP_PIXELS),si=U.getParameter(U.UNPACK_SKIP_ROWS),ze=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);let qi=I.isDataArrayTexture||I.isData3DTexture,oe=P.isDataArrayTexture||P.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let tn=Mt.get(I),Ni=Mt.get(P),Ge=Mt.get(tn.__renderTarget),Mn=Mt.get(Ni.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,Ge.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let bn=0;bn<At;bn++)qi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,L,Ut+bn),I.isDepthTexture?(oe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(P).__webglTexture,L,se+bn),U.blitFramebuffer(xt,Rt,tt,ht,vt,Jt,tt,ht,U.DEPTH_BUFFER_BIT,U.NEAREST)):oe?U.copyTexSubImage3D(_t,L,vt,Jt,se+bn,xt,Rt,tt,ht):U.copyTexSubImage2D(_t,L,vt,Jt,se+bn,xt,Rt,tt,ht);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?I.isDataTexture||I.isData3DTexture?U.texSubImage3D(_t,L,vt,Jt,se,tt,ht,At,Pe,Zt,ae.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(_t,L,vt,Jt,se,tt,ht,At,Pe,ae.data):U.texSubImage3D(_t,L,vt,Jt,se,tt,ht,At,Pe,Zt,ae):I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,vt,Jt,tt,ht,Pe,Zt,ae.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,vt,Jt,ae.width,ae.height,Pe,ae.data):U.texSubImage2D(U.TEXTURE_2D,L,vt,Jt,tt,ht,Pe,Zt,ae);U.pixelStorei(U.UNPACK_ROW_LENGTH,un),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,si),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze),L===0&&P.generateMipmaps&&U.generateMipmap(_t),bt.unbindTexture()},this.copyTextureToTexture3D=function(I,P,z=null,F=null,L=0){return I.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,F=arguments[1]||null,I=arguments[2],P=arguments[3],L=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,P,z,F,L)},this.initRenderTarget=function(I){Mt.get(I).__webglFramebuffer===void 0&&b.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?b.setTextureCube(I,0):I.isData3DTexture?b.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?b.setTexture2DArray(I,0):b.setTexture2D(I,0),bt.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,bt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var js=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qs=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var eo=class extends De{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Be,h=Be,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=class extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vi=new ne,Gc=new ne,Es=[],Wc=new In,Sg=new ne,Hi=new xe,Gi=new Nn,ji=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),Wc.copy(t.boundingBox).applyMatrix4(vi),this.boundingBox.union(Wc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),Gi.copy(t.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Gi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Hi.geometry=this.geometry,Hi.material=this.material,Hi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),t.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vi),Gc.multiplyMatrices(n,vi),Hi.matrixWorld=Gc,Hi.raycast(t,Es);for(let a=0,o=Es.length;a<o;a++){let c=Es[a];c.instanceId=r,c.object=this,e.push(c)}Es.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(i*this.count),i,this.count,yo,sn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Qi=class extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xc=new ne,no=new Os,ws=new Nn,Ts=new D,tr=class extends Se{constructor(t=new Ce,e=new Qi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=r,t.ray.intersectsSphere(ws)===!1)return;Xc.copy(i).invert(),no.copy(t.ray).applyMatrix4(Xc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=f,A=p;m<A;m++){let g=l.getX(m);Ts.fromBufferAttribute(u,g),Yc(Ts,g,c,i,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,A=p;m<A;m++)Ts.fromBufferAttribute(u,m),Yc(Ts,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yc(s,t,e,n,i,r,a){let o=no.distanceSqToPoint(s);if(o<e){let c=new D;no.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var er=class extends De{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var nr=class s extends Ce{constructor(t=[new Pt(0,-.5),new Pt(.5,0),new Pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Te(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new D,f=new Pt,p=new D,m=new D,A=new D,g=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-g,p.z=d*0,A.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(A.x,A.y,A.z);break;default:g=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-g,p.z=d*0,m.copy(p),p.x+=A.x,p.y+=A.y,p.z+=A.z,p.normalize(),c.push(p.x,p.y,p.z),A.copy(m)}for(let x=0;x<=e;x++){let _=n+x*h*i,v=Math.sin(_),w=Math.cos(_);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*w,a.push(u.x,u.y,u.z),f.x=x/e,f.y=S/(t.length-1),o.push(f.x,f.y);let E=c[3*S+0]*v,T=c[3*S+1],M=c[3*S+0]*w;l.push(E,T,M)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let v=_+x*t.length,w=v,S=v+t.length,E=v+t.length+1,T=v+1;r.push(w,S,T),r.push(E,T,S)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var ei=class s extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new D,h=new Pt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class s extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],m=0,A=[],g=n/2,d=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function x(){let v=new D,w=new D,S=0,E=(e-t)/n;for(let T=0;T<=r;T++){let M=[],y=T/r,R=y*(e-t)+t;for(let k=0;k<=i;k++){let N=k/i,H=N*c+o,J=Math.sin(H),G=Math.cos(H);w.x=R*J,w.y=-y*n+g,w.z=R*G,u.push(w.x,w.y,w.z),v.set(J,E,G).normalize(),f.push(v.x,v.y,v.z),p.push(N,1-y),M.push(m++)}A.push(M)}for(let T=0;T<i;T++)for(let M=0;M<r;M++){let y=A[M][T],R=A[M+1][T],k=A[M+1][T+1],N=A[M][T+1];(t>0||M!==0)&&(h.push(y,R,N),S+=3),(e>0||M!==r-1)&&(h.push(R,k,N),S+=3)}l.addGroup(d,S,0),d+=S}function _(v){let w=m,S=new Pt,E=new D,T=0,M=v===!0?t:e,y=v===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),m++;let R=m;for(let k=0;k<=i;k++){let H=k/i*c+o,J=Math.cos(H),G=Math.sin(H);E.x=M*G,E.y=g*y,E.z=M*J,u.push(E.x,E.y,E.z),f.push(0,y,0),S.x=J*.5+.5,S.y=G*.5*y+.5,p.push(S.x,S.y),m++}for(let k=0;k<i;k++){let N=w+k,H=R+k;v===!0?h.push(H,H+1,N):h.push(H+1,H,N),T+=3}l.addGroup(d,T,v===!0?1:2),d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ir=class s extends $i{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sr=class s extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let _=new D,v=new D,w=new D;for(let S=0;S<e.length;S+=3)p(e[S+0],_),p(e[S+1],v),p(e[S+2],w),c(_,v,w,x)}function c(x,_,v,w){let S=w+1,E=[];for(let T=0;T<=S;T++){E[T]=[];let M=x.clone().lerp(v,T/S),y=_.clone().lerp(v,T/S),R=S-T;for(let k=0;k<=R;k++)k===0&&T===S?E[T][k]=M:E[T][k]=M.clone().lerp(y,k/R)}for(let T=0;T<S;T++)for(let M=0;M<2*(S-T)-1;M++){let y=Math.floor(M/2);M%2===0?(f(E[T][y+1]),f(E[T+1][y]),f(E[T][y])):(f(E[T][y+1]),f(E[T+1][y+1]),f(E[T+1][y]))}}function l(x){let _=new D;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let x=new D;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let v=g(x)/2/Math.PI+.5,w=d(x)/Math.PI+.5;a.push(v,1-w)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let _=a[x+0],v=a[x+2],w=a[x+4],S=Math.max(_,v,w),E=Math.min(_,v,w);S>.9&&E<.1&&(_<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,_){let v=x*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){let x=new D,_=new D,v=new D,w=new D,S=new Pt,E=new Pt,T=new Pt;for(let M=0,y=0;M<r.length;M+=9,y+=6){x.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),S.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),T.set(a[y+4],a[y+5]),w.copy(x).add(_).add(v).divideScalar(3);let R=g(w);A(S,y+0,x,R),A(E,y+2,_,R),A(T,y+4,v,R)}}function A(x,_,v,w){w<0&&x.x===1&&(a[_]=x.x-1),v.x===0&&v.z===0&&(a[_]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var rr=class s extends sr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ar=class s extends sr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Vi=class s extends Ce{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/i,p=new D,m=new Pt;for(let A=0;A<=i;A++){for(let g=0;g<=n;g++){let d=r+g/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let A=0;A<i;A++){let g=A*(n+1);for(let d=0;d<n;d++){let x=d+g,_=x,v=x+n+1,w=x+n+2,S=x+1;o.push(_,v,S),o.push(v,w,S)}}this.setIndex(o),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var or=class s extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,f=new D,p=[],m=[],A=[],g=[];for(let d=0;d<=n;d++){let x=[],_=d/n,v=0;d===0&&a===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){let S=w/e;u.x=-t*Math.cos(i+S*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+S*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),g.push(S+v,1-_),x.push(l++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){let _=h[d][x+1],v=h[d][x],w=h[d+1][x],S=h[d+1][x+1];(d!==0||a>0)&&p.push(_,v,S),(d!==n-1||c<Math.PI)&&p.push(v,w,S)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cr=class s extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new D,u=new D,f=new D;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let A=m/i*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let A=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,d=(i+1)*(p-1)+m,x=(i+1)*p+m;a.push(A,g,x),a.push(g,d,x)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var qe=class extends zn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Rs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Eg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Pi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},io=class extends Pi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jo:r=t,o=2*e-n;break;case Zo:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jo:a=t,c=2*n-e;break;case Zo:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),A=m*m,g=A*m,d=-f*g+2*f*A-f*m,x=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,_=(-1-p)*g+(1.5+p)*A+.5*m,v=p*g-p*A;for(let w=0;w!==o;++w)r[w]=d*a[h+w]+x*a[l+w]+_*a[c+w]+v*a[u+w];return r}},so=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},ro=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new io(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case Na:e=this.InterpolantFactoryMethodLinear;break;case Ir:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Eg(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ir,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Na;var ni=class extends Qe{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=qs;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends Qe{};ao.prototype.ValueTypeName="color";var oo=class extends Qe{};oo.prototype.ValueTypeName="number";var co=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},lr=class extends Qe{InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Qe{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=qs;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends Qe{};lo.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},wg=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ur=class extends hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Qr=new ne,Kc=new D,Jc=new D,fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),Qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var po=class extends fo{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new po}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var So="\\[\\]\\.:\\/",Tg=new RegExp("["+So+"]","g"),Eo="[^"+So+"]",Rg="[^"+So.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",Eo),Pg=/(WCOD+)?/.source.replace("WCOD",Rg),Lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo),Dg=new RegExp("^"+Vg+Pg+Lg+Ug+"$"),qg=["material","materials","bones","map"],go=class{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(t){let e=Dg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=go;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);var Kt={hw:15,hl:20,gate:5,pocket:3.5},le=1.6,ye=.7,_l=60,zg=2,Al=30,Il=["easy","normal","hard"],xl=7.2,vl=17.5,Fg=.28,kg=40,Og=1.9,Bg=5,Hg=1.4,Gg=2.4,wo=1.1,Wg=1.6,Cl=11,Xg=3.2,ln=[{id:"squire",ar:"\u0643\u0623\u0633 \u0627\u0644\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0635\u063A\u0627\u0631",en:"Squire Cup",skill:0,mud:0,doors:0,boulderEvery:0,look:"day"},{id:"meadow",ar:"\u0643\u0623\u0633 \u0627\u0644\u0645\u0631\u062C",en:"Meadow Cup",skill:.04,mud:2,doors:0,boulderEvery:0,look:"day"},{id:"trap",ar:"\u0643\u0623\u0633 \u0627\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u0633\u0631\u064A\u0629",en:"Trapdoor Cup",skill:.08,mud:0,doors:2,boulderEvery:0,look:"day"},{id:"rock",ar:"\u0643\u0623\u0633 \u0627\u0644\u0635\u062E\u0648\u0631",en:"Boulder Cup",skill:.12,mud:0,doors:0,boulderEvery:9,look:"dusk"},{id:"swamp",ar:"\u0643\u0623\u0633 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Swamp Cup",skill:.16,mud:4,doors:2,boulderEvery:0,look:"dusk"},{id:"castle",ar:"\u0643\u0623\u0633 \u0627\u0644\u0642\u0644\u0639\u0629",en:"Castle Cup",skill:.2,mud:2,doors:4,boulderEvery:9,look:"dusk"},{id:"storm",ar:"\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0635\u0641\u0629",en:"Storm Cup",skill:.24,mud:3,doors:4,boulderEvery:7,look:"night"},{id:"dragon",ar:"\u0643\u0623\u0633 \u0627\u0644\u062A\u0646\u064A\u0646",en:"Dragon Cup",skill:.28,mud:4,doors:6,boulderEvery:6,look:"night"},{id:"royal",ar:"\u0627\u0644\u0643\u0623\u0633 \u0627\u0644\u0645\u0644\u0643\u064A",en:"Royal Final",skill:.32,mud:4,doors:6,boulderEvery:5.5,look:"royal",final:!0}],Yg=[[-8,-6],[8,6],[8,-6],[-8,6],[0,-12],[0,12],[-9,-15],[9,15]],Kg=[[-7,0],[7,0],[0,-9],[0,9],[-9,-12],[9,12]],yl=[-15,-10,-5,5,10,15],Fn=[{id:"blue",hex:2779880,price:0,ar:"\u0623\u0632\u0631\u0642",en:"Blue"},{id:"green",hex:2799706,price:30,ar:"\u0623\u062E\u0636\u0631",en:"Green"},{id:"teal",hex:2017480,price:30,ar:"\u062A\u0631\u0643\u0648\u0627\u0632\u064A",en:"Teal"},{id:"purple",hex:9063144,price:40,ar:"\u0628\u0646\u0641\u0633\u062C\u064A",en:"Purple"},{id:"orange",hex:16742938,price:40,ar:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A",en:"Orange"},{id:"pink",hex:16734888,price:40,ar:"\u0648\u0631\u062F\u064A",en:"Pink"},{id:"gold",hex:15773728,price:50,ar:"\u0630\u0647\u0628\u064A",en:"Gold"},{id:"white",hex:15921906,price:60,ar:"\u0623\u0628\u064A\u0636",en:"White"}],mr=[{id:"bucket",price:0,ar:"\u062E\u0648\u0630\u0629 \u0639\u0627\u062F\u064A\u0629",en:"Plain"},{id:"plume",price:40,ar:"\u0631\u064A\u0634\u0629",en:"Plume"},{id:"crest",price:50,ar:"\u062A\u0627\u062C \u0645\u0634\u0637",en:"Crest"},{id:"horns",price:70,ar:"\u0642\u0631\u0648\u0646",en:"Horns"},{id:"jester",price:90,ar:"\u0645\u0647\u0631\u062C",en:"Jester"},{id:"crown",price:120,ar:"\u062A\u0627\u062C",en:"Crown"}],Ar=14170682,Ve=(s,t,e)=>s<t?t:s>e?e:s;function Jg(s){let t=s>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ml(s){let t=s&&typeof s=="object"?s:{},e=(c,l,h,u)=>Number.isFinite(c)?Ve(Math.floor(c),h,u):l,n=Array.from({length:ln.length},(c,l)=>e(Array.isArray(t.stars)?t.stars[l]:0,0,0,3)),i=new Set(["blue"]),r=new Set(["bucket"]);if(t.owned&&Array.isArray(t.owned.colors))for(let c of t.owned.colors)Fn.some(l=>l.id===c)&&i.add(c);if(t.owned&&Array.isArray(t.owned.helmets))for(let c of t.owned.helmets)mr.some(l=>l.id===c)&&r.add(c);let a=i.has(t.color)?t.color:"blue",o=r.has(t.helmet)?t.helmet:"bucket";return{v:1,coins:e(t.coins,0,0,1e7),unlocked:e(t.unlocked,1,1,ln.length),stars:n,owned:{colors:[...i],helmets:[...r]},color:a,helmet:o,diff:Il.includes(t.diff)?t.diff:"normal",muted:!!t.muted,wins:e(t.wins,0,0,1e6),goals:e(t.goals,0,0,1e6),played:e(t.played,0,0,1e6)}}function bl(s,t,e){return s.coins+=e.coins,s.played++,s.goals+=e.goals[0],e.win&&(s.wins++,s.stars[t]=Math.max(s.stars[t]||0,e.stars),s.unlocked=Math.max(s.unlocked,Math.min(ln.length,t+2))),s}function Sl(s,t,e){let i=(t==="color"?Fn:mr).find(a=>a.id===e);if(!i)return{ok:!1,reason:"unknown"};let r=t==="color"?s.owned.colors:s.owned.helmets;return r.includes(e)?{ok:!0,reason:"owned"}:s.coins<i.price?{ok:!1,reason:"coins"}:(s.coins-=i.price,r.push(e),{ok:!0,reason:"bought"})}function To(s,t,e){return(t==="color"?s.owned.colors:s.owned.helmets).includes(e)?(t==="color"?s.color=e:s.helmet=e,!0):!1}var ns=class{constructor(t={}){var n;this.round=Ve(t.round|0,0,ln.length-1),this.cfg=ln[this.round],this.diff=Il.includes(t.diff)?t.diff:"normal",this.young=(t.age||5)<=4,this.rand=Jg((n=t.seed)!=null?n:1),this.autoPlayer=!!t.autoPlayer,this.input={x:0,z:0},this.dashBuf=0;let e={easy:.04,normal:.42,hard:.68}[this.diff];this.skill=[{easy:.75,normal:.55,hard:.5}[this.diff],Ve(e+this.cfg.skill-(this.young?.15:0),0,1)],this.score=[0,0],this.timeLeft=_l,this.overtime=!1,this.t=0,this.playTime=0,this.goalLimit=zg,this.ev=[],this.knights=[];for(let i=0;i<2;i++)for(let r=0;r<4;r++)this.knights.push({id:i*4+r,team:i,slot:r,human:i===0&&r===0,x:0,z:0,vx:0,vz:0,fx:0,fz:i===0?-1:1,stun:0,stunDur:0,immune:0,dash:0,dx:0,dz:0,cd:0,role:"attacker",cmd:{x:0,z:0,dash:!1},aiT:0,err:0,errT:0,fall:null,mud:!1,speed:0});this.barrel={x:0,z:0,vx:0,vz:0,hitCd:0,idle:0,onDoor:!1},this.doors=Yg.slice(0,this.cfg.doors).map((i,r)=>({id:r,x:i[0],z:i[1],half:Og,state:"closed",t:0})),this.muds=Kg.slice(0,this.cfg.mud).map((i,r)=>({id:r,x:i[0],z:i[1],r:Xg})),this.boulders=[],this.boulderId=0,this.lastLane=-1,this.phase="kickoff",this.phaseT=0,this.lastCount=99,this._roleT=0,this.acc=0,this.kickoffs=0,this._kickoff(3.2)}attackDir(t){return t===0?-1:1}ownGoalZ(t){return-this.attackDir(t)*Kt.hl}pressDash(){this.dashBuf=.3}_emit(t){t.t=this.t,this.ev.push(t)}_kickoff(t){this.phase="kickoff",this.phaseT=t,this.lastCount=99,this.kickoffs++;for(let n of this.knights){let i=n.team===0?1:-1,r=[[0,5],[-6,7],[6,7],[0,13]][n.slot];n.x=r[0],n.z=i*r[1],n.vx=n.vz=0,n.fx=0,n.fz=-i,n.stun=0,n.immune=0,n.dash=0,n.cd=.5,n.fall=null,n.cmd={x:0,z:0,dash:!1}}let e=this.barrel;e.x=0,e.z=0,e.vx=e.vz=0,e.idle=0;for(let n of this.doors)n.state="closed",n.t=4+n.id*1.3;this.boulders=[],this.bTimer=6+this.rand()*2,this._assignRoles()}_assignRoles(){for(let t=0;t<2;t++){let e=this.knights.filter(a=>a.team===t&&(!a.human||this.autoPlayer));if(!e.length)continue;let n=this.barrel;e.sort((a,o)=>Math.hypot(a.x-n.x,a.z-n.z)-Math.hypot(o.x-n.x,o.z-n.z)),e[0].role="attacker";let i=e.slice(1),r=this.ownGoalZ(t);i.sort((a,o)=>Math.abs(a.z-r)-Math.abs(o.z-r)),i.forEach((a,o)=>{a.role=o===0?"defender":"support"})}}step(t){this.ev=[],this.acc+=Math.min(t,.1);let e=1/120;for(;this.acc>=e;)this.acc-=e,this.t+=e,this._sub(e);return this.dashBuf>0&&(this.dashBuf=Math.max(0,this.dashBuf-t)),this.ev}_sub(t){let e=this.phase;if(e==="over")return;if(e==="kickoff"){this.phaseT-=t;let i=Math.ceil(this.phaseT-.2);i<this.lastCount&&i>=1&&(this.lastCount=i,this._emit({type:"count",n:i})),this.phaseT<=0&&(this.phase="play",this._emit({type:"go"}));return}if(e==="goal"){this.phaseT-=t;for(let i of this.knights)i.vx*=Math.exp(-4*t),i.vz*=Math.exp(-4*t);this._physics(t,!1),this.phaseT<=0&&this._afterGoal();return}this.playTime+=t,this.timeLeft-=t,this._control(t),this._hazards(t),this._physics(t,!0);let n=this.barrel;if(Math.abs(n.x)<Kt.gate&&Math.abs(n.z)>Kt.hl+.3){let i=n.z<0?0:1;this.score[i]++,this.phase="goal",this.phaseT=2.6,this.lastScorer=i,this._emit({type:"goal",team:i,score:this.score.slice()});return}this.timeLeft<=0&&(this.timeLeft=0,this.score[0]!==this.score[1]?this._end():this.overtime?this._end():(this.overtime=!0,this.timeLeft=Al,this._emit({type:"overtime"})))}_afterGoal(){if(Math.max(this.score[0],this.score[1])>=this.goalLimit||this.overtime)return this._end();if(this.timeLeft<=0){if(this.score[0]!==this.score[1])return this._end();this.overtime=!0,this.timeLeft=Al,this._emit({type:"overtime"})}this._kickoff(2.2)}_end(){this.phase="over",this._emit({type:"over",result:this.result()})}result(){let[t,e]=this.score,n=t>e,i=t===e,r=t-e,a=n?e===0||r>=2?3:e===1?2:1:0,o=t*3+(n?12+a*4:i?5:3);return{win:n,draw:i,goals:[t,e],stars:a,coins:o}}_control(t){this._roleT-=t,this._roleT<=0&&(this._assignRoles(),this._roleT=.4);let e=this.barrel;for(let n of this.knights){let i=n.human&&!this.autoPlayer;if(n.stun>0){n.stun-=t;let r=Math.exp(-3*t);n.vx*=r,n.vz*=r,n.stun<=0&&(n.stun=0,n.immune=1.4,n.fall&&this._relocate(n))}else{if(n.immune>0&&(n.immune-=t),n.cd-=t,i){let c=Math.hypot(this.input.x,this.input.z);n.cmd={x:c>1?this.input.x/c:this.input.x,z:c>1?this.input.z/c:this.input.z,dash:this.dashBuf>0}}else n.aiT-=t,n.aiT<=0?(n.aiT=.05,this._ai(n)):n.cmd.dash=!1;n.cmd.dash&&n.cd<=0&&n.dash<=0&&this._startDash(n,i);let r=1;n.mud=!1;for(let c of this.muds)Math.hypot(n.x-c.x,n.z-c.z)<c.r&&(r=.55,n.mud=!0);let a=(i?xl*1.05:xl*(.72+.28*this.skill[n.team]))*r;if(n.speed=a,n.dash>0)n.dash-=t,n.vx=n.dx*vl,n.vz=n.dz*vl;else{let c=n.cmd.x*a,l=n.cmd.z*a,h=c-n.vx,u=l-n.vz,f=Math.hypot(h,u),p=kg*t;f>p&&(h=h/f*p,u=u/f*p),n.vx+=h,n.vz+=u}let o=Math.hypot(n.cmd.x,n.cmd.z);if(n.dash<=0&&o>.15){let c=Math.hypot(n.cmd.x,n.cmd.z);n.fx=n.cmd.x/c,n.fz=n.cmd.z/c}}n.x+=n.vx*t,n.z+=n.vz*t}}_startDash(t,e){let n=t.cmd.x,i=t.cmd.z,r=Math.hypot(n,i);r<.2&&(n=t.fx,i=t.fz,r=Math.hypot(n,i)||1),n/=r,i/=r;let a=this.barrel;if(e){let o=a.x-t.x,c=a.z-t.z,l=Math.hypot(o,c);if(l<6.5&&l>.1&&(n*o+i*c)/l>(this.young?.5:.72)){n=n*.4+o/l*.6,i=i*.4+c/l*.6;let u=Math.hypot(n,i);n/=u,i/=u}}t.dash=Fg,t.dx=n,t.dz=i,t.fx=n,t.fz=i,t.cd=e?this.young?1.1:1.5:2.8-1.4*this.skill[t.team],this.dashBuf=0,this._emit({type:"dash",id:t.id})}_stun(t,e,n,i,r){t.stun=e,t.stunDur=e,t.dash=0,t.vx=n,t.vz=i,t.immune=0,this._emit({type:"stun",id:t.id,kind:r})}_relocate(t){let e=t.fall;t.fall=null;let n=t.x-e.x,i=t.z-e.z,r=e.half-Math.abs(n),a=e.half-Math.abs(i),o=ye+.4;r<a?t.x=e.x+(n>=0?1:-1)*(e.half+o):t.z=e.z+(i>=0?1:-1)*(e.half+o),t.x=Ve(t.x,-Kt.hw+ye,Kt.hw-ye),t.z=Ve(t.z,-Kt.hl+ye,Kt.hl-ye)}_ai(t){let e=this.barrel,n=this.skill[t.team],i=this.attackDir(t.team),r=this.ownGoalZ(t.team);t.errT-=.05,t.errT<=0&&(t.errT=.8,t.err=(this.rand()-.5)*2*(1-n)*.4);let a=0,o=0,c=!1,l=Math.hypot(e.x-t.x,e.z-t.z),h=(e.z-r)*i,u=()=>{let x=this._chase(t,n,i);a=x.tx,o=x.tz,c=x.dash};if(t.role==="attacker")u();else if(t.role==="defender")l<8||h<14&&e.vz*i<-1?u():(a=Ve(e.x*.45,-5.5,5.5),o=r+i*Ve(h*.35,5,11));else if(h>Kt.hl){a=(e.x>1?-1:e.x<-1||t.slot%2?1:-1)*8,o=Ve(e.z+i*7,-Kt.hl+3,Kt.hl-3);let _=null,v=99;for(let w of this.knights)if(w.team!==t.team&&w.stun<=0&&w.immune<=0){let S=Math.hypot(w.x-t.x,w.z-t.z),E=Math.hypot(w.x-e.x,w.z-e.z);S<6&&E<7&&S<v&&(v=S,_=w)}_&&(a=_.x,o=_.z,v<3.4&&t.cd<=0&&this.rand()<.1+.5*n&&(c=!0))}else l<7?u():(a=Ve(-e.x*.7,-8,8),o=r+i*14);let f=0,p=0;for(let x of this.doors)if(x.state!=="closed"){let _=t.x-x.x,v=t.z-x.z;if(Math.max(Math.abs(_),Math.abs(v))<x.half+1.6){let w=Math.hypot(_,v)||1;f+=_/w*2.5,p+=v/w*2.5}}for(let x of this.boulders){let _=t.z-x.z;Math.abs(_)<2.6&&(x.state==="warn"||Math.abs(t.x-x.x)<9)&&(p+=(_>=0?1:-1)*2)}let m=a-t.x,A=o-t.z,g=Math.hypot(m,A);if(g>.01){let x=Math.min(1,g/.6);m=m/g*x,A=A/g*x}else m=0,A=0;m+=f,A+=p;let d=Math.hypot(m,A);d>1&&(m/=d,A/=d),t.cmd={x:m,z:A,dash:c&&t.cd<=0}}_chase(t,e,n){let i=this.barrel,r=le+ye,a=i.x+i.vx*.2,o=i.z+i.vz*.2,c=0-a,l=n*Kt.hl-o,h=Math.hypot(c,l)||1;c/=h,l/=h;let u=Math.cos(t.err),f=Math.sin(t.err),p=c*u-l*f,m=c*f+l*u;c=p,l=m;let A=-n*Kt.hl;(Math.abs(a)>Kt.hw-3||Math.abs(o-A)<3)&&(c+=-Math.sign(a||1)*(Math.abs(a)>Kt.hw-3?.9:.5),l+=n*(Math.abs(o-A)<3?.3:.6),h=Math.hypot(c,l),c/=h,l/=h);let g=t.x-a,d=t.z-o,x=g*c+d*l,_=-g*l+d*c,v=_>=0?1:-1,w=-l*v,S=c*v,E=a-c*(r+.9),T=o-l*(r+.9),M,y,R=!1;if(x<-r*.6&&Math.abs(_)<r*1.15)M=a+c*1.5,y=o+l*1.5,Math.hypot(g,d)<r+2.6&&t.cd<=0&&this.rand()<.1+.6*e&&(R=!0);else{let H=Ve(x+.5*r,0,r+2.2);M=E+w*H,y=T+S*H;let J=M-t.x,G=y-t.z,$=J*J+G*G||1,O=Ve(((a-t.x)*J+(o-t.z)*G)/$,0,1);Math.hypot(t.x+J*O-a,t.z+G*O-o)<r+.5&&x>-r&&(M=a+w*(r+1.5)-c*.6,y=o+S*(r+1.5)-l*.6)}let k=Kt.hw-ye,N=Kt.hl-ye;return{tx:Ve(M,-k,k),tz:Ve(y,-N,N),dash:R}}_hazards(t){for(let n of this.doors)if(n.t-=t,n.state==="closed"&&n.t<=0)n.state="warn",n.t=Hg,n.warnAt=this.t,this._emit({type:"doorWarn",id:n.id});else if(n.state==="warn"&&n.t<=0)n.state="open",n.t=Gg,this._emit({type:"doorOpen",id:n.id});else if(n.state==="open")if(n.t<=0)n.state="closed",n.t=Bg,this._emit({type:"doorClose",id:n.id});else for(let i of this.knights)!i.fall&&Math.abs(i.x-n.x)<n.half-.15&&Math.abs(i.z-n.z)<n.half-.15&&(i.fall=n,this._stun(i,1.5,0,0,"fall"),this._emit({type:"fall",id:i.id,door:n.id}));if(this.cfg.boulderEvery>0&&(this.bTimer-=t,this.bTimer<=0&&this.boulders.length<2)){let n;do n=Math.floor(this.rand()*yl.length);while(n===this.lastLane);this.lastLane=n;let i=this.rand()<.5?1:-1,r={id:this.boulderId++,state:"warn",t:Wg,z:yl[n],dir:i,x:-i*(Kt.hw+3),hitB:0,rot:0};this.boulders.push(r),this.bTimer=this.cfg.boulderEvery*(.8+.4*this.rand()),this._emit({type:"boulderWarn",id:r.id,z:r.z,dir:i})}let e=this.barrel;for(let n of this.boulders){if(n.state==="warn"){n.t-=t,n.t<=0&&(n.state="go",this._emit({type:"boulderGo",id:n.id}));continue}n.x+=n.dir*Cl*t,n.rot+=Cl*t/wo,n.hitB-=t;for(let i of this.knights)i.stun<=0&&i.immune<=0&&Math.hypot(i.x-n.x,i.z-n.z)<wo+ye&&this._stun(i,i.human?1:1.2,n.dir*7,0,"boulder");n.hitB<=0&&Math.hypot(e.x-n.x,e.z-n.z)<wo+le&&(e.vx+=n.dir*10,n.hitB=.8,this._emit({type:"boulderBarrel",id:n.id}))}this.boulders=this.boulders.filter(n=>Math.abs(n.x)<Kt.hw+4||n.state==="warn")}_physics(t,e){let n=this.barrel,i=this.knights;n.hitCd-=t;for(let c of i){let l=n.x-c.x,h=n.z-c.z,u=Math.hypot(l,h),f=le+ye;if(u<f&&u>1e-6){let p=l/u,m=h/u,A=(c.vx-n.vx)*p+(c.vz-n.vz)*m,g=c.dash>0?4.2:1.3,d=4;if(A>0){let _=1.35*A/(1/g+1/d);n.vx+=p*_/d,n.vz+=m*_/d,c.vx-=p*_/g*.2,c.vz-=m*_/g*.2,A>3&&n.hitCd<=0&&(n.hitCd=.12,this._emit({type:"barrelHit",id:c.id,power:Math.min(1,_/40),dash:c.dash>0})),n.last=c.team}let x=f-u;n.x+=p*x*.85,n.z+=m*x*.85,c.x-=p*x*.15,c.z-=m*x*.15}}for(let c=0;c<i.length;c++)for(let l=c+1;l<i.length;l++){let h=i[c],u=i[l],f=u.x-h.x,p=u.z-h.z,m=Math.hypot(f,p),A=ye*2;if(m<A&&m>1e-6){let g=f/m,d=p/m,x=(A-m)/2;if(h.x-=g*x,h.z-=d*x,u.x+=g*x,u.z+=d*x,e&&h.team!==u.team){let _=(v,w,S,E)=>{v.dash>0&&w.dash<=0&&w.stun<=0&&w.immune<=0&&(this._stun(w,w.human?this.young?.7:1:1.2,S*9,E*9,"dash"),v.dash=Math.min(v.dash,.05),this._emit({type:"clash",id:v.id,victim:w.id}))};h.dash>0&&u.dash>0?(!h._clash||this.t-h._clash>.3)&&(h._clash=this.t,this._emit({type:"clang"})):(_(h,u,g,d),_(u,h,-g,-d))}}}let r=.55;for(let c of this.muds)Math.hypot(n.x-c.x,n.z-c.z)<c.r&&(r+=3.2);n.onDoor=!1;for(let c of this.doors)c.state==="open"&&Math.abs(n.x-c.x)<c.half&&Math.abs(n.z-c.z)<c.half&&(r+=6,n.onDoor||(n.onDoor=!0));let a=Math.exp(-r*t);n.vx*=a,n.vz*=a;let o=Math.hypot(n.vx,n.vz);o>22&&(n.vx*=22/o,n.vz*=22/o),n.x+=n.vx*t,n.z+=n.vz*t,this._barrelWalls(),e&&(o<.5?(n.idle+=t,n.idle>7&&(n.idle=0,n.vx+=-Math.sign(n.x||1)*2+(this.rand()-.5),n.vz+=-Math.sign(n.z||1)*2,this._emit({type:"nudge"}))):n.idle=0);for(let c of i){let l=c.x-n.x,h=c.z-n.z,u=Math.hypot(l,h),f=le+ye;u<f&&u>1e-6&&(c.x=n.x+l/u*f,c.z=n.z+h/u*f),c.x=Ve(c.x,-Kt.hw+ye,Kt.hw-ye),c.z=Ve(c.z,-Kt.hl+ye,Kt.hl-ye)}}_barrelWalls(){let t=this.barrel,{hw:e,hl:n,gate:i,pocket:r}=Kt,a=o=>{let c=-t["v"+o]*.6;Math.abs(t["v"+o])>2.5&&this._emit({type:"fence",power:Math.min(1,Math.abs(t["v"+o])/14)}),t["v"+o]=c};t.x>e-le?(t.x=e-le,t.vx>0&&a("x")):t.x<-e+le&&(t.x=-e+le,t.vx<0&&a("x"));for(let o of[-1,1]){let c=o*t.z;for(let l of[-i,i]){let h=t.x-l,u=t.z-o*n,f=Math.hypot(h,u),p=le+.3;if(f<p&&f>1e-6){let m=h/f,A=u/f;t.x=l+m*p,t.z=o*n+A*p;let g=t.vx*m+t.vz*A;g<0&&(t.vx-=1.6*g*m,t.vz-=1.6*g*A)}}Math.abs(t.x)>=i&&c>n-le?(t.z=o*(n-le),o*t.vz>0&&a("z")):Math.abs(t.x)<i&&c>n-0&&(Math.abs(t.x)>i-.2&&(t.x=Math.sign(t.x)*(i-.2),t.x*t.vx>0&&a("x")),c>n+r-le&&(t.z=o*(n+r-le),o*t.vz>0&&a("z")))}}};function El(s,t,e={}){let n=s.prototype.play,i=s.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let f=0;f<l.length;f++)h[f]=l.charCodeAt(f);let u=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}i&&(s.prototype.unlock=function(...a){let o=i.apply(this,a);return r(this),o}),s.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function wl(s,{gain:t=.5,file:e="music.mp3"}={}){let n=s.prototype.unlock,i=s.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),i&&i.call(a,null)}).catch(()=>{a._song=null})}s.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},i&&(s.prototype.setTune=function(a){if(!this._song)return i.call(this,a)})}var Tl={clang:"data:audio/mpeg;base64,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",thud:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABQAABG4ABgYGBgkJCQkJDAwMDAwPDw8PDxJSUlJSVVVVVVVYWFhYWFtbW1tbXl5eXl5hoaGhoaSkpKSkp6enp6eqqqqqqq2tra2tsPDw8PDz8/Pz8/b29vb2+fn5+fn8/Pz8/P//////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkArgAAAAAAAARuEMQhuEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAKxBlidGGACYuMquc2wAAAktygABEkwGAyZMmQIQAAAAHh4eHhgAAAAAHh4eHpAAAQAAeHh4ekAHf7//9f////mkAAAAEB4eHh6QAM////wAAAz/8PD0gAACPDw8P////////ABAAoIILTVRSAAB8QMAgk7oRKBA0oTWkzmcfhqREKuGwZrUVvxbEeQ5Z0x0iCoUQPlqFEtHctLXdXvxliKs0VXuygFQECTWOEQlBEUa960vaNLHlw4jehXKgriUiFf/5UsFStiwAFlKhWDkyYz0T/+zjEBQIL/F1XPbSAMYCTqV2zDXACgAvdR+cf2bb2KQZLpd89TUtcymhFv7aVRXNDlqvlCE/5we9xK8Mg8HTQosAmAm8cbPMdSpD55ZhQumZvraaETw7UAKXvSb1dWEzCqOGhKYGB0HHvLOFtVvwPgiDYAowwCCGtYJOZby/XUo29oJGhIIkLAmUfMscvsXilTumy2dyzSCdaZ3uH1wYTjM3GnbKbtA0dDtYieo2DJ00hAxMT3H2nznKFCb15l48gost6ki7FSKDb7QHv/clbbYMG2vw4uKH/+zjEBoAMbPtjTCRp8YScKd22DKn5m3ZlVMkuZJzaFmK2jmS1VWFXiVJoGF8alOOKIjb2q3qEYLuswY0clYMwVAITTamv+cy/LP8uHv/PHjlzmVZaVHQPefaFBIoyXU+MoqNHNlooqBphneEoN3b/g/FSLVl8S7zuIlCKCwVlt9XDAXlXG7Fm36Yc5noMTvmLfIgYcWJrzju9PpFfvULZu2SpE+w0gxP55xik/PtCzxKPP0+eZtqOqjmO2cd/7xM9xPrSjtd+05p4jr11BMckljkskkARTUn/+zjEBYAMMRdrrBhp8YKeKOnDDXDvT9V6aW/ZEDVBJtE+kckOlzVkastag4wBjDFw+DhW2KfTc3q/aTXt1L/iU85KdPReSGWDz+J7l9i8uWXfDiDItKKEpWWGQYgdKlMrSa3PQqRrZQpSuVAgAAOSW0A0NAQqCBEAZWtNHJh78Xa0nzKEaCIkxpR6jsLGw5QSXToHGx6vVqWk6MbeK4J8XR5nfgg4VIiPT8zWR+kjJr1Wn/DPVDnCadHYG1phNAGJKRvWkGvL3UuTSbUqHqYDgEoDIMCwqB7/+zjEBYILrLNCTqRn4ZCcqCnDDXWYDD2cNJiIpDAVApIMxNEx0oXpSHKPbjRYjZamQtvXr2Yoe//Jk2JtpvC/OqXz4hi2E/VSiZwWhbEbyrjw4BmoBS4su0iScb6nLmnpUUWp5M25pIFyOJgHClYZEQZgsEBwJV0l7Lp2axgKVpLHBBSlCEpO9m+YukTUE6IRqLbZR5iMb8Zwu/HjHvIXTcyvI5nChHlr6QH3Tlt7wlbWCqihW9sf072mczUP8ws9TKw9ba6TIghucSoAYUiSYB3ZpiEKIJj/+zjEBgAMbTE+7hhraXmc6CnDDXQ4MAYCpaQNHpi1AMygPCQgwdKKcAeaaWUWnPhAV8lWcCRtnJbUG0WyKirTODks41vMi/+HJ+ucfL/PYr541GZkT3LJcr8vwE5Vcr9sMYyb7exqKKS+FGLgIFcpY42AehBph0jo/pPMGa7FqTGOyXsEiZCRhIo2DQi2JNZUsaUJV9fPYVMu0/wcMzUIexKXTrmPZSzy7D9VJ+lb8Ui51vzlKC1PlDDYiiwoRYgCSMULCmvVWmElIipUA1y1IzAMQMdsyCH/+zjEBoILCIssTrBtAYEf5hnjDagNCIeBBuripLsum4i5M2zdKRBeUARNUzlFyyXtPFh6sRFS9/valikTKQgECS/AyF0sVVogSKkTaxTreWUFbd9xg+s+cHCSxYT/rbpWX9QGjkI6YSYD5gQAuiAFoDApLCtQhyq+kQsWqaIAqiSIMkV+FECRLnNgh5I12agqqPczb+3URFbOpkuS1HmVp5Nf85SljFJlwr8yY//xy625l0a5YhacNuQ+K1UUd96KAEAOymAPk2xM2AWOhHJAoMWopNZXFDP/+zjEC4AKAFEtLujBSW0YpaXdDD1abnJE/shJWosiXFc14Gzp9oQ5X2jK1ZguF+V7uvdeVFSToZFX91iS/71+/+f9vxZykN5ff1o3f3IAACu6QA+DiwWLI7DAy5sMBLrXa9L3wLLYEiMCUV7Dczc/ZCw6JItIH6AYC4r0HJATVQxicUfeAceCIQUSGDjPyrM3tI/7ta2qjfn87/tBlZzzt522AaLpU78sagA/ga2QOBiAB+mKQCFwc8aGFVts/Y3NbvSTUHCSJI89H+nP+FIaUG18Tp4yKeX/+zjEFwIKhI8kr2jBQUGeJV3MjBiuu7Nrq9lt89tsevRgTQ4YskFpk4SMgF65SIizkua5Ul2pcmiz9EXI40WDb97MqMY/l1rD1bZ5dal0VEBBA6bqTbt/7ldmsOxkMKqw3ZQZsVlCujM9CqqFVgn55D3QzlM0H7lmf/y+X49SH4OJO3ZYW3K5v7v+qsgMK9dww6hwwIPggGHytlKOzS4pKHQvgpxIGChleITfPMzfM6Po/XlDllQVc94kNCQWgqdCrnjjpcXLCpRRFjSjEqLSIRrj7BxLn73/+zjEJgMKXFcgL2zBATSTZIncjCAgb36L/XoQ9yCH8w9GChrG+SDZzFSWK40C3pBMZv1UY4sPyLU/L4KOyKY6YZEkpAxrA9uVsDVWcdhAqhM6CJkYPMMEBA+7KxHYthSiSZ/2L+j/+ukAQxAAZ+86YpjkdR4a9Sb4u1qlhqEfQgUcUQioeWkPwxkwFlG4t1O1SPjUl7iiKg9vM12h0/JaVqp3j0g5Sf/5/D+9peCpcjtVXZap3o9X03evB7ijRlCLQEAMIAN5ffidltybsFHQ5+3n//mnGkT/+zjEN4IJ/O8gzuhgwRuTZMnRmXhmgp1CLovORd/K4dPkfK/GaZZkLjXioUSJzo7q+9X23avuO17W/bUmAAHlyWJSg4O4MKKxYCUdfyljXaSXKXSrPm5PF6dzhmKz5zT+oOkcRV0QwwZNixHUfT87f7e7X/a7s9NtdKaTiNLYH8xjAkD6ouw3d+Xvdyfvar5/LFhhzSvVjsFdGIeCcrM+uSr8GNcEqhSKwV0ZXkdlCnqi0r6OiFsrfm0/vdX31G1vXyV2qijvv9+mTbaAgN1bs3AN20a8DEz/+zjETYIH0JktTYRnwTkf48XsCCiZXCkJuLwPw2/X1P7owr50hRyWNSIlyqHVsJ6ftIRAvo2ecMDqko2hpUs9ySP/9X93/mts0DI0Hu3OJAsiI0NM1qT+zgTIO5rKqlFUouj4/R7++t7s2/bOQY7Qx3YqGF0iFu+9chZPqfQizuVrZ6/uXZK971+TAQGDrukDDwPT5pFhS5YWywWj5NyFyDCqNHnjCvFko1BjORTFZ2ys7s7OdbWvrGJQNVFW457xeQkWuU3KNI2au21a/znrtdb+gX82fYP/+zjEaIMIVKEmbjBiQQWTI8nMFBA+YMCOHEyFANZQwWfqxqxEpDT/A+otTxVJ26LW4HmEFmTHwsiFtuZ0vrynWUu1kLY3HVlul5H3o5q6wdkffR8HHw1YoeA6Oav8l3r/ogVBg8S/TK5UOQFRaLiw07L30tiO2YuY4ONru5JheWFhnfUtu594vT4x/LQd9zmTIF+yl9/5zClW2sep+q2eu0t3/suW5X/q8eCgsHj7064kFEc2wTYVBo8zxP16/K5uIihCfJj0Mo1qSct+FavNoZ+FUT+BZmX/+zjEiAMJXJsaTuChATud4wHRibCQRqCVjlPGJJbXDn/Ee4ro6hw6V3PW7R6Iv266AAGBOKGVAiCg8gJIBCYTMoJXLThdYdmRkMlo5lM6HH1NXe5qttaVaPlujLPoy/fTra2mg8j3CjiLiVhlyu1i7rvd/Vu0HQI+ZrEDV0J0OzEUrOgArO0juAZKXIbtD2Y6UsGxpiRTZsqaVSxkMt9s464aXJEFBsYPZNWEzimzJSzHVuHUIapcYLRDz666N7f91QUyEoDrz4MBhibnsZx9nZScOrV1N2X/+zjEnIMJDL0cTmhhASSTI0nEjKi60NpWXu6VHS2yas7M4BGThmJ58c/T2qf7eNRt5Yuyn7lqT7qmXoXEZKSKcASYwWtLa3crW93eNqzl58MpDACGP3c1dpwi7W5Sm8s64P7P/w1U9cndPK70+4tTbpr2Bldzle6Wdh/OVgQFgJYXZTQ9S73J6fUG2jVJLWJc6IqmG/Ik/SJgxSc0Q+dfxvG8sYZqWfEnGeW3bdCIwnaMXDhCcocwXaS2nMbZnqv4kOgo9c33vv920dLnP/d3Wb25ph36Scn/+zjEtQOIpNMaThhDQS0QYsHDDPi28HlnPYXUdUizOJcC4uKvQIxA8dVeDrS7MKQFI/loO58xhxtRpHFrajmuXjKBk5FfJ6eg64Y2xJm35cJN5tEsc33ovSGT9tH6x0YpSuyfOpd5UWPlNpfJtz/xThmq33fUW6j1Kd0C9jgSozw2yYxatDlG0ZsABYIwXqYyFfltZJdqSuyFNIHBfLy6HebfXU7hnSJ0ElZLVRwSLa6HsjvdUtlsh8/JoOtqo2bUAql+ff5qsculv5M3nFmebtCx9WwLfRz/+zjEzgMHzJkgbbBAgP4WJA2QjXB1962x2qW6wVry4g64r8BaLxHYg8uCILs0P6GpCfrnGSBE0HopzaNMPq3t4Bn0pd8qzNwmunaRliNKkc9KbaRh1d2F3sa0QL3kH7B9wMuoilgb0MvyB39b8J3e7npSH/t3deNEeWhTf+xtRsmueIiaYPNbOA/EjZxFp05DSGJBwE+FAEIFoObni7ciYhSu2WB7A2HBEfDstAQMhIYOy2sYPCuRBzPojhkzXLH8JhTLZwWDspDwTQbnQNDkS1xgbkAsEsv/+zjE8IML4NMSTJhrycQgIYGmJElnCht/OXvkzjtWVEEwoyZnR5r6wvm46HKtZdnpBD2spA9C70hhPYvlIHrMQPQe1kFA4cEqM7pmIHqu2jLtk2Qe9My8v9oe41offpmIPetBaYHAjpGRaWgYQ/kSdJwNHRKKVQ4qAgMFQkeDR0iSUOHuPHSoiJZ4JHg0JRESI50OkiQiEpZQ8Bfv/X7G/6Ef/s6KTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6gOLDNMSR5hLCaKcYUTzIdmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6wMUkXkSLLDPyPAC5Aj0mEiqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",dooropen:"data:audio/mpeg;base64,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",doorfall:"data:audio/mpeg;base64,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",stun:"data:audio/mpeg;base64,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KltxxYLAkysiauMcrP+1VVP///M+ZmcOBgEjRKnnKJZVV/6rGqt8kSI8FSz/+zjEioAKKL8cFJeAAkgzJOcfAAANHhEsNFoiDs7/LPwV4NLO/7+CvER4Rflj3VVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEegPJbJEXPJMAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",coin:"data:audio/mpeg;base64,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"};var Zg="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ne=null,Ro=!1;function Rl(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Vl(){Rl(),Ro=!0;try{if(Ne||(Ne=document.createElement("audio"),Ne.src=Zg,Ne.loop=!0,Ne.preload="auto",Ne.setAttribute("playsinline",""),Ne.setAttribute("webkit-playsinline",""),Ne.setAttribute("x-webkit-airplay","deny"),Ne.volume=.01,Ne.addEventListener("pause",()=>{Ro&&!document.hidden&&setTimeout(()=>Ro&&Ne.paused&&Ne.play().catch(()=>{}),300)})),Ne.paused){let s=Ne.play();s&&s.catch&&s.catch(()=>{})}}catch{}}function Pl(s,t){Rl();try{s.addEventListener("statechange",()=>{s.state==="interrupted"&&!t()&&!document.hidden&&s.resume().catch(()=>{})})}catch{}}var $e=s=>440*Math.pow(2,(s-69)/12),xr=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Vl(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Pl(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let i=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=i.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=i,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,i,r,a=this.sfx,o=.005){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.value=e;let h=c.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+i),l.connect(h).connect(a),l.start(n),l.stop(n+i+.05)}noise(t,e,n,i="lowpass",r=1e3,a=1,o=this.sfx,c){let l=this.ctx;if(!l)return;let h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=i,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let f=l.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,i,r,a,o=this.sfx){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,i),l.frequency.exponentialRampToValueAtTime(n,i+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,i),h.gain.exponentialRampToValueAtTime(a,i+.02),h.gain.exponentialRampToValueAtTime(1e-4,i+r),l.connect(h).connect(o),l.start(i),l.stop(i+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let c=this.bed;c.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{c.s.stop(),c.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let i=e.createBiquadFilter();i.type=t==="wind"?"bandpass":"lowpass",i.frequency.value=t==="wind"?420:520,i.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(i).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:i}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let i=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<i;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,c,l]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",$e(c),a,l*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var jg={tempo:132,beats:16,wave:"square",vol:.045,notes:[[0,62,1],[1.5,62,.5],[2,65,1],[3,69,1],[4,67,1.5],[5.5,65,.5],[6,62,1],[7,60,1],[8,62,1],[9.5,62,.5],[10,65,1],[11,69,1],[12,72,1.5],[13.5,70,.5],[14,69,1],[15,65,1],[0,38,1],[2,38,1],[4,43,1],[6,38,1],[8,38,1],[10,38,1],[12,41,1],[14,43,1]]},Qg={tempo:90,beats:16,wave:"triangle",vol:.07,notes:[[0,62,2],[2,65,2],[4,69,2],[6,67,2],[8,65,2],[10,62,2],[12,60,2],[14,62,2],[0,43,4],[4,41,4],[8,38,4],[12,43,4]]},Di=class extends xr{unlock(){super.unlock(),this.ctx&&!this.crowdNode&&this.wantCrowd&&this._startCrowd()}_startCrowd(){let t=this.ctx;if(!t)return;let e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=650,n.Q.value=.5;let i=t.createGain();i.gain.value=.02;let r=t.createOscillator();r.frequency.value=.3;let a=t.createGain();a.gain.value=.008,r.connect(a).connect(i.gain),e.connect(n).connect(i).connect(this.sfx),e.start(),r.start(),this.crowdNode={s:e,g:i,lfo:r}}crowd(t){this.wantCrowd=t,this.ctx&&(t&&!this.crowdNode&&this._startCrowd(),this.crowdNode&&this.crowdNode.g.gain.setTargetAtTime(t?.02:1e-4,this.ctx.currentTime,.3))}swell(t=.09,e=2.2){let n=this.ctx;if(!n||!this.crowdNode||this.muted)return;let i=this.crowdNode.g.gain,r=n.currentTime;i.cancelScheduledValues(r),i.setTargetAtTime(t,r,.15),i.setTargetAtTime(.02,r+e,.6)}setMode(t){if(!t){this.setTune(null),this.crowd(!1);return}this.setTune(t==="play"?jg:Qg),this.crowd(t==="play")}play(t,e=1){let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let i=n.currentTime;switch(t){case"tap":this.tone("triangle",640,i,.07,.09);break;case"count":this.tone("square",440,i,.18,.07),this.tone("triangle",220,i,.18,.1);break;case"go":[0,4,7,12].forEach((r,a)=>this.tone("square",$e(72+r),i+a*.07,.35,.06)),this.noise(i,.25,.08,"highpass",3e3);break;case"dash":this.noise(i,.28,.12,"bandpass",1200,1.2,this.sfx,380),this.tone("triangle",180,i,.2,.06);break;case"clang":this.tone("square",1320,i,.25,.07),this.tone("square",1760,i,.18,.05),this.tone("triangle",660,i,.35,.08),this.noise(i,.06,.1,"highpass",4e3);break;case"thud":this.slide("sine",140,48,i,.22,.28*e+.1),this.noise(i,.12,.12*e+.04,"lowpass",500),this.tone("triangle",520,i,.06,.04*e);break;case"fence":this.noise(i,.12,.12*e+.03,"bandpass",700,1.5),this.tone("triangle",200,i,.1,.07);break;case"stun":this.slide("triangle",700,200,i,.25,.1),[0,3,7].forEach((r,a)=>this.tone("sine",$e(84+r),i+.25+a*.08,.15,.05)),this.noise(i,.08,.1,"highpass",3e3);break;case"goal":[0,4,7,12,7,12,16,19].forEach((r,a)=>this.tone("sawtooth",$e(60+r),i+a*.12,.5,.07)),[0,7,12].forEach(r=>this.tone("square",$e(48+r),i,1.1,.05)),this.swell(.1,2.4),this.noise(i,1.6,.1,"bandpass",900,.5);break;case"conceded":[0,-3,-5].forEach((r,a)=>this.tone("triangle",$e(60+r),i+a*.2,.5,.1));break;case"creak":this.slide("sawtooth",120,85,i,.5,.05),this.slide("sawtooth",250,160,i+.1,.4,.03),this.noise(i,.5,.04,"bandpass",500,4);break;case"dooropen":this.noise(i,.35,.16,"lowpass",400),this.slide("sawtooth",160,60,i,.35,.07);break;case"doorfall":this.slide("sine",600,90,i,.6,.1);break;case"rumble":this.noise(i,.5,.1,"lowpass",160,1),this.slide("sine",70,45,i,.5,.16);break;case"warn":this.tone("square",520,i,.12,.05),this.tone("square",390,i+.14,.12,.05);break;case"mud":this.noise(i,.16,.06,"lowpass",300,2);break;case"win":[0,4,7,12,16,19,24].forEach((r,a)=>this.tone("triangle",$e(67+r),i+a*.11,.6,.12)),this.swell(.1,3);break;case"lose":[0,-3,-7,-12].forEach((r,a)=>this.tone("triangle",$e(64+r),i+a*.22,.55,.1));break;case"coin":this.tone("square",$e(88),i,.05,.04),this.tone("square",$e(95),i+.05,.1,.04);break;case"whistle":this.slide("sine",2400,2900,i,.35,.06);break;default:break}}};El(Di,Tl);wl(Di);function j(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t))r==null||r===!1||(i==="class"?n.className=r:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),r):i==="style"?n.style.cssText=r:n.setAttribute(i,r===!0?"":r));for(let i of e.flat())i!=null&&i!==!1&&n.append(i.nodeType?i:document.createTextNode(String(i)));return n}function Ll(s){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let i=`${n}_${e?"f":"m"}`,r=s[i]?i:n;return s[r]?s[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,i=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[i])}}function Ul(s,t,e,n="#ffd23a"){return`
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
`}var Vo={ar:{go:["\u064A\u0627\u0644\u0627 \u0627\u0646\u0637\u0644\u0642!","\u0627\u0646\u0637\u0644\u0642 \u064A\u0627 \u0628\u0637\u0644!"],nitro:["\u0646\u064A\u062A\u0631\u0648\u0648\u0648! \u0637\u064A\u0631 \u064A\u0627 \u0648\u062D\u0634!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0631\u0639\u0629!","\u0646\u064A\u062A\u0631\u0648! \u0627\u0645\u0633\u0643 \u0627\u0644\u0637\u0631\u064A\u0642!"],overtake:["\u0639\u062F\u0651\u064A\u062A\u0647! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643!","\u062A\u062C\u0627\u0648\u0632 \u0631\u0627\u0626\u0639 \u064A\u0627 \u0628\u0637\u0644!","\u0627\u064A\u0648\u0647 \u0643\u062F\u0647! \u0633\u0628\u0642\u062A\u0647!"],overtaken:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643\u060C \u0647\u062A\u0639\u062F\u064A\u0647!","\u062E\u0644\u064A\u0643 \u0648\u0631\u0627\u0647\u060C \u0641\u0631\u0635\u062A\u0643 \u062C\u0627\u064A\u0629!"],near:["\u064A\u0627\u0627\u0627\u0647! \u0643\u0627\u0646\u062A \u0642\u0631\u064A\u0628\u0629!","\u0639\u062F\u0651\u062A \u0639\u0644\u0649 \u062E\u064A\u0631! \u0642\u0644\u0628\u0643 \u062C\u0627\u0645\u062F!","\u0627\u0648\u0648\u0647! \u0642\u0631\u064A\u0628\u0629 \u0642\u0648\u064A!"],bump:["\u0627\u0648\u0628\u0633! \u062E\u0628\u0637\u0629 \u0635\u063A\u064A\u0631\u0629\u060C \u0643\u0645\u0651\u0644!","\u0648\u0644\u0627 \u064A\u0647\u0645\u0643 \u064A\u0627 \u0628\u0637\u0644\u060C \u0643\u0645\u0651\u0644!"],charge:["\u0646\u064A\u062A\u0631\u0648 \u062C\u062F\u064A\u062F \u062C\u0627\u0647\u0632!","\u0639\u0646\u062F\u0643 \u0646\u064A\u062A\u0631\u0648!"],pickup:["\u0623\u064A\u0648\u0647! \u0639\u0645\u0644\u0629!","\u062C\u0645\u0639\u062A \u0639\u0645\u0644\u0629! \u0628\u0631\u0627\u0641\u0648!"],trick:["\u062D\u0631\u0643\u0629 \u0628\u0647\u0644\u0648\u0627\u0646\u064A\u0629! \u0648\u0627\u0648!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u062D\u0631\u0643\u0629!"],draft:["\u0631\u0627\u0643\u0628 \u0648\u0631\u0627\u0647! \u0627\u0644\u0647\u0648\u0627 \u0628\u064A\u0632\u0642\u0651\u0643!","\u0633\u0644\u064A\u0628 \u0633\u062A\u0631\u064A\u0645! \u0633\u0631\u0639\u0629 \u0632\u064A\u0627\u062F\u0629!"],lap:["\u0644\u0641\u0651\u0629 \u062C\u062F\u064A\u062F\u0629! \u0643\u0645\u0651\u0644 \u064A\u0627 \u0628\u0637\u0644!","\u0622\u062E\u0631 \u0644\u0641\u0651\u0629! \u0627\u062F\u064A\u0647\u0627 \u0643\u0644 \u0627\u0644\u0644\u064A \u0639\u0646\u062F\u0643!"],win:["\u0643\u0633\u0628\u062A \u064A\u0627 \u0628\u0637\u0644! \u0627\u0646\u062A \u0627\u0644\u0623\u0648\u0644!","\u0645\u0628\u0631\u0648\u0648\u0648\u0643! \u0628\u0637\u0644 \u0627\u0644\u0633\u0628\u0627\u0642!"],lose:["\u0644\u0639\u0628\u062A \u062D\u0644\u0648 \u0642\u0648\u064A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u0648\u0647\u062A\u0643\u0633\u0628!","\u0643\u0646\u062A \u0642\u0631\u064A\u0628! \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u0643!"],count:["\u0627\u0633\u062A\u0639\u062F!"]},en:{go:["Let's go!","Go, champion, go!"],nitro:["Nitrooo! Fly, superstar!","Wow, so fast!","Nitro boost! Hold on tight!"],overtake:["You passed him! Bravo!","Great overtake, champion!","Yes! You are ahead!"],overtaken:["Don't worry, you'll pass him!","Stay close, your chance is coming!"],near:["Whoa! That was close!","Phew! Great driving!","Ooh! So close!"],bump:["Oops! Small bump, keep going!","No worries, champion, keep going!"],charge:["New nitro ready!","You have a nitro!"],pickup:["Yes! A coin!","You got a coin! Bravo!"],trick:["Amazing trick! Wow!","What a move!"],draft:["Right behind him! The wind pushes you!","Slipstream! Extra speed!"],lap:["New lap! Keep going, champion!","Last lap! Give it everything!"],win:["You won, champion! First place!","Hooray! Racing star!"],lose:["Great racing! Try again and win!","So close! Next one is yours!"],count:["Get ready!"]}},$g=[[/يا بطل/g,"\u064A\u0627 \u0628\u0637\u0644\u0629"]],vr=class{constructor(t={}){var e,n;this.base=t.base||"./",this.lang=t.lang==="en"?"en":"ar",this.girl=!!t.girl,this.clips=t.clips||{},this.cooldown=(e=t.cooldown)!=null?e:3,this.gap=(n=t.gap)!=null?n:1.4,this.muted=!1,this.unlocked=!1,this.lastSay=-1/0,this.lastEvent={},this.pick={},this.audio=null,this.failed=new Set}setMuted(t){let e=!!t;e!==this.muted&&(this.muted=e,this.muted&&this._stop())}unlock(){this.unlocked=!0;try{let t=window.speechSynthesis;t&&t.getVoices().length===0&&t.getVoices()}catch{}}_stop(){if(this.audio){try{this.audio.pause()}catch{}this.audio=null}try{window.speechSynthesis&&window.speechSynthesis.cancel()}catch{}}_phrase(t){let e=Vo[this.lang]&&Vo[this.lang][t]||Vo.ar[t]||[];if(!e.length)return null;let n=((this.pick[t]=(this.pick[t]||0)+1)-1)%e.length,i=e[n];if(this.girl&&this.lang==="ar")for(let[r,a]of $g)i=i.replace(r,a);return{text:i,n:n+1}}say(t,e=performance.now()/1e3){var a;if(this.muted||!this.unlocked||e-this.lastSay<this.gap||e-((a=this.lastEvent[t])!=null?a:-1/0)<this.cooldown)return!1;let n=this._phrase(t);if(!n)return!1;this.lastSay=e,this.lastEvent[t]=e;let i=this.clips[t]||0,r=`${t}_${n.n}`;if(i>=n.n&&!this.failed.has(r)){let o=new Audio(`${this.base}voice/${this.lang}/${r}.mp3`);o.volume=.95,o.onerror=()=>{this.failed.add(r),this._speak(n.text)};let c=o.play();return c&&c.catch&&c.catch(()=>{this.failed.add(r),this._speak(n.text)}),this.audio=o,!0}return this._speak(n.text)}_speak(t){try{let e=window.speechSynthesis;if(!e)return!1;let n=new SpeechSynthesisUtterance(t);n.lang=this.lang==="ar"?"ar-EG":"en-US",n.rate=1.05,n.pitch=1.15;let r=e.getVoices().find(a=>a.lang&&a.lang.toLowerCase().startsWith(this.lang));return r&&(n.voice=r),e.cancel(),e.speak(n),!0}catch{return!1}}dispose(){this._stop()}};var tm={go:2,trick:3,bump:2,near:1,win:2,lose:2,count:1},em={title:["\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0628\u0631\u0645\u064A\u0644","BARREL KNIGHTS"],play:["\u0627\u0644\u0639\u0628","PLAY"],rounds:["\u0627\u0644\u062C\u0648\u0644\u0627\u062A","ROUNDS"],knights:["\u0627\u0644\u0641\u0631\u0633\u0627\u0646","KNIGHTS"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0625\u0639\u0627\u062F\u0629","RESTART"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],next:["\u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","NEXT ROUND"],dash:["\u0627\u0646\u062F\u0641\u0627\u0639","DASH"],goal:["\u0647\u062F\u0641!","GOAL!"],go:["\u064A\u0644\u0627!","GO!"],round:["\u0627\u0644\u062C\u0648\u0644\u0629","Round"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],diff:["\u0627\u0644\u0635\u0639\u0648\u0628\u0629","Difficulty"],easy:["\u0633\u0647\u0644","Easy"],normal:["\u0639\u0627\u062F\u064A","Normal"],hard:["\u0635\u0639\u0628","Hard"],victory:["\u0641\u0632\u062A\u0645! \u{1F3C6}","YOU WIN! \u{1F3C6}"],lose:["\u062D\u0638 \u0623\u0648\u0641\u0631 \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Good try!"],draw:["\u062A\u0639\u0627\u062F\u0644","DRAW"],coins:["\u0639\u0645\u0644\u0627\u062A","Coins"],earned:["\u0643\u0633\u0628\u062A","Earned"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the round before"],overtime:["\u0648\u0642\u062A \u0625\u0636\u0627\u0641\u064A!","OVERTIME!"],how:["\u0627\u0633\u062D\u0628 \u0628\u0625\u0635\u0628\u0639\u0643 \u0644\u0644\u062D\u0631\u0643\u0629\u060C \u0648\u0627\u0636\u063A\u0637 \u0627\u0646\u062F\u0641\u0627\u0639 \u0644\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u0648\u0625\u0628\u0639\u0627\u062F \u0627\u0644\u062E\u0635\u0648\u0645","Drag to move, press DASH to shove the barrel and bump rivals"],how2:["\u0627\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0642 \u062F\u0627\u062E\u0644 \u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u062E\u0635\u0645! \u0627\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u0645\u062E\u0641\u064A\u0629 \u0648\u0627\u0644\u0635\u062E\u0648\u0631 \u0648\u0627\u0644\u0637\u064A\u0646 \u0628\u062A\u062A\u0646\u0628\u0651\u0647 \u0642\u0628\u0644 \u0645\u0627 \u062A\u0634\u062A\u063A\u0644.","Push the giant barrel through the rival gate! Trapdoors, boulders and mud always warn you first."],colors:["\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u062F\u0631\u0639","Armour"],helmets:["\u0627\u0644\u062E\u0648\u0630\u0627\u062A","Helmets"],equipped:["\u0644\u0627\u0628\u0633\u0647","On"],notEnough:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0645\u0634 \u0643\u0641\u0627\u064A\u0629","Not enough coins"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],final:["\u0627\u0644\u0646\u0647\u0627\u0626\u064A","FINAL"],match:["\u0645\u0628\u0627\u0631\u0627\u0629","MATCH"],first:["\u0627\u0644\u0623\u0648\u0644 \u0644\u0647\u062F\u0641\u064A\u0646","FIRST TO 2"],ready:["\u0627\u0633\u062A\u0639\u062F\u061F","READY?"],tip:["\u0627\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u062F\u0627\u062E\u0644 \u0628\u0648\u0627\u0628\u062A\u0647\u0645!","SHOVE IT THROUGH THEIR GATE!"],yourTeam:["\u0641\u0631\u064A\u0642\u0643","You"],rivals:["\u0627\u0644\u062E\u0635\u0648\u0645","Rivals"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"]},dt=Ll(em),Dl={day:{sky:9097471,fog:13495039,sand:[15323290,14664840],hemi:1.5,sun:1.3,sunC:16774360,torch:!1},dusk:{sky:16752752,fog:16763040,sand:[14858362,14067818],hemi:1.25,sun:1.1,sunC:16760960,torch:!0},night:{sky:1845336,fog:2766960,sand:[12098164,11308648],hemi:.95,sun:.55,sunC:10137855,torch:!0},royal:{sky:8046847,fog:13166847,sand:[15784080,15125632],hemi:1.6,sun:1.35,sunC:16773312,torch:!1}},st={sphere:new or(.5,16,12),cyl:new $i(.5,.5,1,16),box:new ti(1,1,1),cone:new ir(.5,1,12),torus:new cr(.5,.08,8,24),star:new ar(.5,0)},Po=new Map,St=(s,t=0,e)=>{let n=`${s}|${t}|${e?JSON.stringify(e):""}`;return Po.has(n)||Po.set(n,new qe({color:s,emissive:t,...e||{}})),Po.get(n)};function et(s,t,e=0,n=0,i=0,r=1,a=1,o=1){let c=new xe(s,t);return c.position.set(e,n,i),c.scale.set(r,a,o),c}var Cr=(s,t,e)=>s+(t-s)*e,Lo=(s,t,e)=>s<t?t:s>e?e:s;function is(s,t,e,n){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new er(i);return r.colorSpace=we,r.anisotropy=4,n&&(r.wrapS=r.wrapT=Ki,r.repeat.set(n[0],n[1])),r}function nm(){return is(256,256,(s,t,e)=>{let n=["#b87a3c","#a86c34","#c48646","#9c6230"];for(let r=0;r<12;r++){s.fillStyle=n[r%4],s.fillRect(r*t/12,0,t/12+1,e),s.fillStyle="rgba(60,30,10,.85)",s.fillRect(r*t/12,0,3,e),s.strokeStyle="rgba(70,35,10,.25)";for(let a=0;a<6;a++){s.beginPath();let o=r*t/12+6+a*3;s.moveTo(o,0),s.lineTo(o+2,e),s.stroke()}}})}function im(s,t){let e=n=>`#${n.toString(16).padStart(6,"0")}`;return is(256,256,(n,i,r)=>{n.fillStyle=e(s),n.fillRect(0,0,i,r/2),n.fillStyle=e(t),n.fillRect(0,r/2,i,r/2);let a=7,o=()=>(a=a*16807%2147483647,a/2147483647);for(let c=0;c<700;c++)n.fillStyle=`rgba(${o()>.5?"255,245,210":"120,90,50"},${.08+o()*.12})`,n.fillRect(o()*i,o()*r,1+o()*3,1+o()*2)},[1,1])}function sm(){return is(32,32,s=>{let t=s.createRadialGradient(16,16,1,16,16,15);t.addColorStop(0,"#fff"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.fillRect(0,0,32,32)})}function rm(s){return is(128,64,(t,e,n)=>{t.clearRect(0,0,e,n),t.fillStyle=s;for(let i=0;i<2;i++){let r=i*64;t.beginPath(),t.moveTo(r+8,8),t.lineTo(r+36,n/2),t.lineTo(r+8,n-8),t.lineTo(r+24,n-8),t.lineTo(r+52,n/2),t.lineTo(r+24,8),t.fill()}},[8,1])}function am(){return is(128,128,(s,t,e)=>{s.clearRect(0,0,t,e),s.strokeStyle="rgba(255,255,255,.8)",s.lineWidth=3;for(let n=0;n<=8;n++)s.beginPath(),s.moveTo(n*t/8,0),s.lineTo(n*t/8,e),s.stroke(),s.beginPath(),s.moveTo(0,n*e/8),s.lineTo(t,n*e/8),s.stroke()},[3,1])}function om(){let s=new Gt,t=new Gt,e=new Gt;s.add(t),t.add(e);let n=nm(),i=new Gt;i.rotation.z=Math.PI/2,e.add(i);let r=[],a=.95*le/1.15;for(let u=0;u<=10;u++){let f=-a+2*a*u/10,p=f/a;r.push(new Pt(le*(1-.16*p*p),f))}let o=new qe({map:n});i.add(new xe(new nr(r,28),o));let c=new qe({color:10906162});for(let u of[-1,1]){let f=new xe(new ei(le*.84,24),c);f.position.y=u*a,f.rotation.x=u*-Math.PI/2,i.add(f);let p=et(st.torus,St(5593700),0,u*(a-.02),0,le*1.72,le*1.72,1.4);p.rotation.x=Math.PI/2,i.add(p)}for(let u of[-.5,.5]){let f=le*(1-.16*(u/a)**2)*2.02,p=et(st.torus,St(4869720),0,u,0,f,f,1.8);p.rotation.x=Math.PI/2,i.add(p)}let l=et(st.star,St(16765498,8939008),le*.98,0,0,.5,.5,.2);l.rotation.z=.7,i.add(l);let h=et(st.star,St(16765498,8939008),-le*.98,0,0,.5,.5,.2);return i.add(h),s.userData={yaw:t,roll:e,y:le},s}function cm(s,t,e){let n=St(16764730,6702080),i=St(16184040);if(t==="plume"){let r=et(st.sphere,St(e,2236962),0,.5,-.18,.2,.55,.5);r.rotation.x=-.5,s.add(r)}else if(t==="crest")for(let r=0;r<5;r++)s.add(et(st.box,St(e,2236962),0,.44+Math.sin(r/4*Math.PI)*.1,-.3+r*.15,.1,.22+Math.sin(r/4*Math.PI)*.15,.14));else if(t==="horns")for(let r of[-1,1]){let a=et(st.cone,i,r*.5,.4,0,.2,.6,.2);a.rotation.z=-r*.7,s.add(a)}else if(t==="jester")for(let r of[-1,1]){let a=et(st.cone,St(r>0?15219338:6961896),r*.34,.5,0,.3,.75,.3);a.rotation.z=-r*.9,s.add(a),s.add(et(st.sphere,n,r*.72,.62,0,.14,.14,.14))}else if(t==="crown"){s.add(et(st.cyl,n,0,.47,0,.62,.16,.62));for(let r=0;r<5;r++){let a=r/5*Math.PI*2;s.add(et(st.cone,n,Math.cos(a)*.28,.65,Math.sin(a)*.28,.14,.28,.14))}s.add(et(st.sphere,St(15219258,4456448),0,.5,.31,.1,.1,.1))}}function ql(s,t,e){let n=new Gt,i=new Gt;i.scale.setScalar(1.25),n.add(i);let r=St(s,0),a=St(12897496,1711656),o=St(2764346);i.add(et(st.sphere,r,0,1,0,.95,1.05,.75)),i.add(et(st.cyl,St(6964256),0,.82,0,.98,.13,.8)),i.add(et(st.box,St(16764730,6702080),0,.82,.4,.2,.18,.06));let c=new Gt,l=new Gt;for(let[d,x]of[[c,-.26],[l,.26]])d.position.set(x,.55,0),d.add(et(st.cyl,a,0,-.2,0,.3,.45,.3),et(st.box,o,0,-.45,.1,.34,.18,.5)),i.add(d);let h=new Gt,u=new Gt;for(let[d,x]of[[h,-.58],[u,.58]])d.position.set(x,1.35,0),d.add(et(st.cyl,a,0,-.3,0,.26,.6,.26),et(st.sphere,a,0,-.62,0,.3,.3,.3)),i.add(d);let f=new Gt;f.position.set(-.24,-.32,.12),f.add(et(st.cyl,r,0,0,0,.62,.08,.62),et(st.torus,St(16053492),0,0,0,.94,.94,1.4),et(st.cyl,St(16777215),0,.05,0,.22,.04,.22)),f.children[0].rotation.z=Math.PI/2,f.children[1].rotation.y=Math.PI/2,f.children[2].rotation.z=Math.PI/2,f.children[2].position.set(-.05,0,0),h.add(f);let p=new Gt;p.position.set(0,1.95,0),i.add(p),p.add(et(st.sphere,a,0,0,0,.82,.78,.8)),p.add(et(st.box,St(1316895),0,.02,.36,.5,.12,.1)),p.add(et(st.box,St(1316895),0,-.1,.38,.06,.22,.08)),cm(p,t,s);let m=et(new ei(.85,18),new ve({color:0,transparent:!0,opacity:.28,depthWrite:!1}),0,.03,0);m.rotation.x=-Math.PI/2,n.add(m);let A=new Gt;A.position.y=2.75;for(let d=0;d<3;d++)A.add(et(st.star,St(16769098,11175936),0,0,0,.36,.36,.16));A.visible=!1,n.add(A);let g=null;if(e){g=new Gt;let d=et(new Vi(1,1.25,28),new ve({color:16769098,transparent:!0,opacity:.9,side:Oe,depthWrite:!1}),0,.05,0);d.rotation.x=-Math.PI/2,g.add(d);let x=et(st.cone,St(16769098,11175936),0,3.5,0,.7,.8,.7);x.rotation.x=Math.PI,g.add(x),g.userData.arrow=x,n.add(g)}return n.userData={inner:i,legL:c,legR:l,armL:h,armR:u,head:p,stars:A,shadow:m,marker:g,phase:Math.random()*6,sink:0},n}var Uo=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),dt.setLang(e.lang),dt.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.save=Ml(e.save),this.base=e.base||"./",this.sound=new Di,this.sound.muted=!!this.save.muted,this.voice=new vr({base:this.base,lang:dt.getLang(),girl:e.gender==="girl",clips:tm}),this.voice.setMuted(this.sound.muted),this._voiceArm=()=>this.voice.unlock(),document.addEventListener("pointerdown",this._voiceArm,!0),document.getElementById("bk-style")||document.head.append(j("style",{id:"bk-style"},Ul("bk","#8a5a2a","#4a2a10","#ffd23a")+lm)),this.root=j("div",{class:"bk-root",dir:dt.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=j("div",{class:"bk-layer"}),this.mode="menu",this.clock=0,this.paused=!1,this.keys=new Set,this.shakeT=0,this.cheer=0,this.puffs=[],this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){this.renderer=new Zs({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=we,this.root.prepend(this.renderer.domElement),this.scene=new Qs,this.camera=new Re(48,1,.5,400),this.hemi=new ur(16777215,10127992,1.5),this.scene.add(this.hemi),this.sun=new dr(16774360,1.3),this.sun.position.set(-14,30,18),this.scene.add(this.sun),this.arena=new Gt,this.scene.add(this.arena),this.dyn=new Gt,this.scene.add(this.dyn),this.dotTex=sm(),this._buildArena(),this._buildParticles(),this.camPos=new D(0,30,30),this.camT=new D(0,0,0),this._look("day"),this.preview=null}_look(t){let e=Dl[t]||Dl.day;this.lookId=t,this.scene.background=new zt(e.sky),this.scene.fog=new js(e.fog,70,190),this.hemi.intensity=e.hemi,this.sun.intensity=e.sun,this.sun.color.set(e.sunC);let n=im(e.sand[0],e.sand[1]);n.repeat.set(1,1),this.pitchMat.map=n,this.pitchMat.needsUpdate=!0;for(let i of this.torches)i.visible=e.torch;this.groundMat.color.set(t==="night"?3489834:6989898)}_buildArena(){let t=this.arena,{hw:e,hl:n,gate:i,pocket:r}=Kt;this.groundMat=new qe({color:6989898});let a=et(new cn(300,300),this.groundMat);a.rotation.x=-Math.PI/2,a.position.y=-.05,t.add(a),this.pitchMat=new qe({color:16777215});let o=et(new cn(e*2+.6,n*2+.6),this.pitchMat);o.rotation.x=-Math.PI/2,t.add(o);let c=new ve({color:16774876,transparent:!0,opacity:.55}),l=new ve({color:16777215,transparent:!0,opacity:.07,depthWrite:!1});for(let A=-4;A<4;A+=2){let g=et(st.box,l,0,.012,(A+.5)*6.5,e*2,.01,6.5);t.add(g)}t.add(et(st.box,c,0,.02,0,e*2,.01,.22));let h=et(new Vi(4.6,4.85,40),c,0,.02,0);h.rotation.x=-Math.PI/2,t.add(h);for(let A of[-1,1]){t.add(et(st.box,c,0,.02,A*(n-6),i*2+6,.01,.2));for(let g of[-1,1])t.add(et(st.box,c,g*(i+3),.02,A*(n-3),.2,.01,6))}let u=St(9067054),f=St(5913114),p=(A,g,d,x)=>{let _=Math.hypot(d-A,x-g),v=Math.max(1,Math.round(_/3)),w=Math.atan2(d-A,x-g),S=new Gt;S.position.set(A,0,g),S.rotation.y=w;for(let E=0;E<=v;E++)S.add(et(st.cyl,f,0,.8,E/v*_,.34,1.7,.34),et(st.sphere,u,0,1.7,E/v*_,.42,.42,.42));S.add(et(st.box,u,0,1.3,_/2,.16,.22,_),et(st.box,u,0,.7,_/2,.16,.22,_)),t.add(S)};p(-e-.4,-n-.4,-e-.4,n+.4),p(e+.4,-n-.4,e+.4,n+.4);for(let A of[-1,1])p(-e-.4,A*(n+.4),-i,A*(n+.4)),p(i,A*(n+.4),e+.4,A*(n+.4));let m=am();for(let A of[-1,1]){let g=A>0?2779880:Ar,d=new Gt;d.position.z=A*n,t.add(d);let x=St(11696722),_=St(9067066),v=new ve({color:1182730});for(let T of[-i,i])d.add(et(st.box,x,T,2.6,0,1.5,5.2,1.5),et(st.box,_,T,5.35,0,1.9,.35,1.9));d.add(et(st.box,x,0,5.4,0,i*2+1.5,1.3,1.5));for(let T=-3;T<=3;T++)d.add(et(st.box,_,T*(i*2/6),6.2,0,1.1,.5,1.7));let w=et(st.box,St(g,1118481),0,4.55,A*.9,i*2-.4,.7,.12);d.add(w),d.add(et(st.box,x,0,4,A*(r+.9),e*2+8,8,1.6),et(st.box,v,0,2.2,A*(r+.05),i*2-.5,4.4,.1));for(let T of[-e-3,e+3])d.add(et(st.cyl,_,T,5,A*(r+.9),3.2,10,3.2));let S=et(new cn(i*2,3.4),new ve({map:m,transparent:!0,side:Oe,depthWrite:!1}),0,1.7,A*r);d.add(S);for(let T of[-i,i]){let M=et(new cn(r,3.4),new ve({map:m,transparent:!0,side:Oe,depthWrite:!1}),T,1.7,A*r/2);M.rotation.y=Math.PI/2,d.add(M)}let E=et(st.box,St(g,0),0,.02,A*r/2,i*2,.02,r);E.material=new qe({color:g,transparent:!0,opacity:.4}),d.add(E)}this._buildStands(),this._buildCastle(),this.torches=[];for(let A of[-e-3,e+3])for(let g of[-n+4,0,n-4]){let d=new Gt;d.position.set(A,0,g),d.add(et(st.cyl,St(4861976),0,1.6,0,.22,3.2,.22));let x=et(st.cone,new ve({color:16754746}),0,3.5,0,.55,1.1,.55);d.add(x),d.userData.fl=x,d.visible=!1,t.add(d),this.torches.push(d)}}_buildStands(){let t=this.arena,{hw:e,hl:n}=Kt,i=St(8015400),r=[],a=(p,m,A,g,d,x)=>r.push({x:p,z:m,rowsAlong:A,rows:g,along:d,face:x});a(-e-3.5,0,"z",4,n*2,1),a(e+3.5,0,"z",4,n*2,-1);let o=[],c=[15223370,4885224,15777840,4900976,15231672,15921906,10115816,16747050];for(let p of r)for(let m=0;m<p.rows;m++){let A=1.4+m*1.7,g=.9+m*1.1,d=p.rowsAlong==="z",x=p.along,_=d?et(st.box,i,p.x+p.face*-(-A+1.4)*0+p.x*0+(p.x<0?-1:1)*(A-1.4),g/2,0,1.7,g,x+3):et(st.box,i,0,g/2,p.z+(p.z<0?-1:1)*(A-1.4),x+3,g,1.7);t.add(_);let v=Math.floor(x/1.6);for(let w=0;w<v;w++){let S=-x/2+(w+m%2*.5)*(x/v),E=d?p.x+(p.x<0?-1:1)*(A-1.4):S,T=d?S:p.z+(p.z<0?-1:1)*(A-1.4);o.push({x:E,y:g+.95,z:T,c:c[(w*5+m*3+(E>0?1:0))%c.length],ph:w*1.7+m})}}let l=st.cone,h=st.sphere;this.crowd=o,this.crowdBody=new ji(l,new qe({color:16777215}),o.length),this.crowdHead=new ji(h,new qe({color:1578e4}),o.length);let u=new zt;o.forEach((p,m)=>{u.set(p.c),this.crowdBody.setColorAt(m,u)}),t.add(this.crowdBody,this.crowdHead),this._crowdTick=0,this._updateCrowd(0,0);let f=[2779880,14170682,15777840];for(let p of[-e-1,e+1])for(let m=-2;m<=2;m++){let A=m*10;t.add(et(st.cyl,St(4861976),p,3.2,A,.18,6.4,.18)),t.add(et(st.box,St(f[(m+2)%3]),p+(p<0?.7:-.7),5.4,A,1.3,1.9,.08))}}_updateCrowd(t,e){let n=new ne,i=new D,r=new rn,a=new D,o=new D;this.crowd.forEach((c,l)=>{let h=Math.max(0,Math.sin(t*(e>0?9:2.2)+c.ph))*(e>0?.55:.08);i.set(c.x,c.y-.45+h,c.z),a.set(.7,1,.7),n.compose(i,r,a),this.crowdBody.setMatrixAt(l,n),i.set(c.x,c.y+.28+h,c.z),o.set(.5,.5,.5),n.compose(i,r,o),this.crowdHead.setMatrixAt(l,n)}),this.crowdBody.instanceMatrix.needsUpdate=!0,this.crowdHead.instanceMatrix.needsUpdate=!0,this.crowdBody.instanceColor&&(this.crowdBody.instanceColor.needsUpdate=!0)}_buildCastle(){let t=this.arena,e=St(12103840),n=St(10130050),i=St(13126202);for(let r of[-1,1]){let a=r*62,o=new Gt;o.position.z=a,t.add(o),o.add(et(st.box,e,0,6,0,70,12,4));for(let c=-17;c<=17;c++)o.add(et(st.box,n,c*2,12.7,r*0,1.2,1.4,4.2));for(let c of[-34,-14,14,34])o.add(et(st.cyl,e,c,10,0,6,20,6),et(st.cone,i,c,22.5,0,7.4,6,7.4),et(st.cyl,St(4861976),c,28,0,.14,4,.14),et(st.box,St(c<0?2779880:14170682),c+1.1,28.6,0,2,1.1,.06));o.add(et(st.box,St(3811866),0,3.5,r*-2.05,7,7,.3),et(st.cyl,St(3811866),0,7,r*-2.05,7,.3,.3)),o.add(et(st.cyl,e,0,14,0,9,28,9),et(st.cone,i,0,31,0,11,8,11))}for(let r=0;r<14;r++){let a=r/14*Math.PI*2;t.add(et(st.sphere,St(4885066),Math.cos(a)*110,0,Math.sin(a)*110,60,22,60))}}_buildParticles(){this.pN=220;let e=new Float32Array(220*3),n=new Float32Array(220*3);this.pGeo=new Ce,this.pGeo.setAttribute("position",new be(e,3)),this.pGeo.setAttribute("color",new be(n,3)),this.pMat=new Qi({size:.9,map:this.dotTex,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}),this.points=new tr(this.pGeo,this.pMat),this.points.frustumCulled=!1,this.scene.add(this.points),this.parts=Array.from({length:220},()=>({life:0,x:0,y:-50,z:0,vx:0,vy:0,vz:0,r:1,g:1,b:1,grav:0})),this.pI=0}puff(t,e,n,i,r,a=3,o=-2,c=1.5){let l=new zt(r);for(let h=0;h<i;h++){let u=this.parts[this.pI];this.pI=(this.pI+1)%this.pN;let f=Math.random()*Math.PI*2,p=(.3+Math.random())*a;Object.assign(u,{life:.5+Math.random()*.7,x:t,y:e,z:n,vx:Math.cos(f)*p,vz:Math.sin(f)*p,vy:Math.random()*c*2,r:l.r,g:l.g,b:l.b,grav:o})}}_tickParticles(t){let e=this.pGeo.attributes.position.array,n=this.pGeo.attributes.color.array;this.parts.forEach((i,r)=>{i.life>0&&(i.life-=t,i.vy+=i.grav*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.y<.05&&i.grav&&(i.y=.05,i.vy*=-.3,i.vx*=.8,i.vz*=.8));let a=i.life>0?Math.min(1,i.life*2):0;e[r*3]=i.x,e[r*3+1]=i.life>0?i.y:-50,e[r*3+2]=i.z,n[r*3]=i.r*a,n[r*3+1]=i.g*a,n[r*3+2]=i.b*a}),this.pGeo.attributes.position.needsUpdate=!0,this.pGeo.attributes.color.needsUpdate=!0}_clearDyn(){for(let t of[...this.dyn.children])this.dyn.remove(t);this.kMesh=[],this.barrelMesh=null,this.doorMesh=[],this.mudMesh=[],this.bouldMesh=new Map,this.lastEvt=null}_setupEntities(){this._clearDyn();let t=this.m,e=(Fn.find(a=>a.id===this.save.color)||Fn[0]).hex;this.playerColor=e;for(let a of t.knights){let o=ql(a.team===0?e:Ar,a.human?this.save.helmet:a.team===0?"bucket":a.slot===0?"horns":a.slot===1?"crest":"bucket",a.human&&this.real);o.userData.inner.scale.setScalar(1.1),this.dyn.add(o),this.kMesh.push(o)}this.barrelMesh=om(),this.dyn.add(this.barrelMesh);let n=et(new ei(1.5,20),new ve({color:0,transparent:!0,opacity:.3,depthWrite:!1}),0,.03,0);n.rotation.x=-Math.PI/2,this.dyn.add(n),this.barrelShadow=n;let i=St(6964258),r=St(9067054);for(let a of t.doors){let o=new Gt;o.position.set(a.x,0,a.z);let c=a.half;o.add(et(st.box,St(1314828),0,.03,0,c*2,.04,c*2)),o.add(et(st.box,St(4861976),0,.06,-c-.12,c*2+.5,.14,.26),et(st.box,St(4861976),0,.06,c+.12,c*2+.5,.14,.26),et(st.box,St(4861976),-c-.12,.06,0,.26,.14,c*2),et(st.box,St(4861976),c+.12,.06,0,.26,.14,c*2));let l=[];for(let u of[-1,1]){let f=new Gt;f.position.set(u*c,.1,0);let p=new Gt;p.position.x=-u*c/2,f.add(p),p.add(et(st.box,i,0,0,0,c,.12,c*2));for(let m=0;m<4;m++)p.add(et(st.box,r,0,.07,(m-1.5)*c*.5,c-.1,.02,.06));p.add(et(st.cyl,St(5593700),0,.09,0,.14,.04,.14)),o.add(f),l.push(f)}let h=et(st.box,new ve({color:16726570,transparent:!0,opacity:0}),0,.2,0,c*2+.7,.05,c*2+.7);o.add(h),this.dyn.add(o),this.doorMesh.push({g:o,panels:l,tape:h,d:a})}for(let a of t.muds){let o=new Gt;o.position.set(a.x,0,a.z),o.add(et(new ei(a.r,28),new qe({color:5913120}),0,.03,0)),o.children[0].rotation.x=-Math.PI/2;let c=et(new Vi(a.r-.4,a.r,28),new qe({color:4073490}),0,.035,0);c.rotation.x=-Math.PI/2,o.add(c);for(let l=0;l<7;l++){let h=l*2.4;o.add(et(st.sphere,St(8016432),Math.cos(h)*a.r*.6*(l%3/3+.4),.05,Math.sin(h)*a.r*.6*(l%3/3+.4),.7,.18,.7))}this.dyn.add(o)}this.chev=rm("#ffffff")}_boulderMesh(t){let e=this.bouldMesh.get(t.id);if(!e){let n=new Gt,i=new xe(new rr(1.1,1),new qe({color:9077880,flatShading:!0}));n.add(i);let r=et(st.box,new ve({map:null,color:16726570,transparent:!0,opacity:.3,depthWrite:!1}),0,.05,0,Kt.hw*2+2,.02,2.6),a=this.chev.clone();a.needsUpdate=!0,a.repeat.set(10,1);let o=et(new cn(Kt.hw*2+2,2.2),new ve({map:a,transparent:!0,opacity:.8,color:16769098,depthWrite:!1}),0,.08,0);o.rotation.x=-Math.PI/2,t.dir<0&&(o.rotation.z=Math.PI);let c=new Gt;c.add(r,o,n),this.dyn.add(c),e={wrap:c,rock:n,lane:r,arrows:o,ch:a},this.bouldMesh.set(t.id,e)}return e}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?50:42,this.camera.updateProjectionMatrix()}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.root.addEventListener("pointerdown",n=>{if(!(n.target.closest("button")||this.mode!=="play"||this.paused||this.stick)){if(this.stick={id:n.pointerId,ox:n.clientX,oy:n.clientY,x:0,z:0,fixed:!1},this.baseEl){let i=this.baseEl.getBoundingClientRect(),r=i.left+i.width/2,a=i.top+i.height/2;Math.hypot(n.clientX-r,n.clientY-a)<i.width*.75&&(this.stick.ox=r,this.stick.oy=a,this.stick.fixed=!0)}this._stickUi(!0,n)}}),this.root.addEventListener("pointermove",n=>{let i=this.stick;if(!i||i.id!==n.pointerId)return;let r=this.u*9,a=n.clientX-i.ox,o=n.clientY-i.oy,c=Math.hypot(a,o);c>r*1.6&&(i.ox+=a/c*(c-r*1.6),i.oy+=o/c*(c-r*1.6),a=n.clientX-i.ox,o=n.clientY-i.oy);let l=Math.min(1,Math.hypot(a,o)/r),h=Math.hypot(a,o)<this.u*1.2,u=Math.hypot(a,o)||1;i.x=h?0:a/u*l,i.z=h?0:o/u*l,this._stickUi(!0,n)});let e=n=>{this.stick&&this.stick.id===n.pointerId&&(this.stick=null,this._stickUi(!1))};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e),this._onKey=n=>{let i=n.key.toLowerCase();if(this.mode==="play"){if(["arrowleft","arrowright","arrowup","arrowdown"," ","w","a","s","d"].includes(i)&&n.preventDefault(),i===" "||i==="shift"){!this.paused&&this.m&&this.m.pressDash();return}if(i==="p"||i==="escape"){this.togglePause();return}this.keys.add(i)}},this._onKeyUp=n=>this.keys.delete(n.key.toLowerCase()),window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKeyUp),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_stickUi(t,e){if(!this.stickEl)return;if(!t){this.stickEl.style.display="none",this.baseKnob&&(this.baseKnob.style.transform="");return}let n=this.root.getBoundingClientRect(),i=this.stick;if(i.fixed&&this.baseKnob){this.stickEl.style.display="none";let a=this.u*9;this.baseKnob.style.transform=`translate(${i.x*a}px,${i.z*a}px)`;return}this.stickEl.style.display="block",this.stickEl.style.left=`${i.ox-n.left}px`,this.stickEl.style.top=`${i.oy-n.top}px`;let r=this.u*9;this.knobEl.style.transform=`translate(${i.x*r}px,${i.z*r}px)`}_readInput(){let t=this.m,e=0,n=0,i=this.keys;if((i.has("arrowleft")||i.has("a"))&&(e-=1),(i.has("arrowright")||i.has("d"))&&(e+=1),(i.has("arrowup")||i.has("w"))&&(n-=1),(i.has("arrowdown")||i.has("s"))&&(n+=1),e||n){let r=Math.hypot(e,n);e/=r,n/=r}else this.stick&&(e=this.stick.x,n=this.stick.z);t.input.x=e,t.input.z=n}_clear(){this.layer.replaceChildren(),this.hudEls=null,this.stickEl=null}_soundPill(){let t=j("button",{class:"bk-soundpill",onclick:()=>this.sound.unlock()},dt.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=2200){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}_persist(){this.post({type:"save",save:this.save})}_tap(t){return()=>{this.sound.play("tap"),t()}}_demo(){this.real=!1,this.m=new ns({round:Math.floor(Math.random()*ln.length),diff:"normal",seed:(Date.now()&65535)+1,autoPlayer:!0,age:this.age}),this.m.knights.forEach(t=>{t.human=!1}),this._look(this.m.cfg.look),this._setupEntities()}showMenu(){this.mode="menu",this.paused=!1,this._clear(),this.sound.setMode("menu"),this.dyn.visible=!0,this.preview&&(this.preview.visible=!1),this._demo();let t=Math.min(this.save.unlocked-1,ln.length-1);this.layer.append(j("div",{class:"bk-dim bk-clear"},j("div",{class:"bk-card"},j("div",{class:"bk-logo"},"\u{1F6E2}\uFE0F ",dt.t("title")," \u2694\uFE0F"),j("div",{class:"bk-coins"},`\u{1FA99} ${dt.num(this.save.coins)}`),j("div",{class:"bk-menu"},j("button",{class:"bk-btn",onclick:this._tap(()=>this.start(t))},"\u25B6 ",dt.t("play")),j("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showRounds())},"\u{1F3C6} ",dt.t("rounds")),j("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showShop())},"\u{1F6E1}\uFE0F ",dt.t("knights")),j("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showSettings())},"\u2699\uFE0F ",dt.t("settings")),j("button",{class:"bk-btn alt",onclick:()=>this.post({type:"exit"})},dt.t("quit")))))),this._soundPill()}showRounds(){this._clear();let t=dt.getLang()!=="en",e=ln.map((n,i)=>{let r=i+1>this.save.unlocked,a=this.save.stars[i]||0;return j("button",{class:`bk-lv${r?" lock":""}${n.final?" fin":""}`,onclick:()=>{if(r){this.hint(dt.t("locked"));return}this.sound.play("tap"),this.start(i)}},j("i",{},r?"\u{1F512}":n.final?"\u{1F451}":dt.num(i+1)),j("span",{class:"bk-lvn"},t?n.ar:n.en),j("span",{},"\u2605".repeat(a)+"\u2606".repeat(3-a)))});this.layer.append(j("div",{class:"bk-dim"},j("div",{class:"bk-card"},j("div",{class:"bk-title"},"\u{1F3C6} ",dt.t("rounds")),j("div",{class:"bk-lvs"},e),j("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back"))))),this.hintEl=j("div",{class:"bk-hint"}),this.layer.append(this.hintEl),this._soundPill()}showSettings(){this._clear();let t=j("button",{class:"bk-btn",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.voice.setMuted(this.save.muted),this._persist(),t.textContent=`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${dt.t("sound")}`,this.sound.play("tap")}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${dt.t("sound")}`),e=n=>j("button",{class:`bk-seg${this.save.diff===n?" on":""}`,onclick:()=>{this.save.diff=n,this._persist(),this.showSettings()}},dt.t(n));this.layer.append(j("div",{class:"bk-dim"},j("div",{class:"bk-card"},j("div",{class:"bk-title"},"\u2699\uFE0F ",dt.t("settings")),t,j("div",{class:"bk-small"},dt.t("diff")),j("div",{class:"bk-segs"},e("easy"),e("normal"),e("hard")),j("div",{class:"bk-small"},dt.t("how")),j("div",{class:"bk-small"},dt.t("how2")),j("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back")))))}showShop(t="color"){this.mode="shop",this._clear(),this.dyn.visible=!1,this._ensurePreview();let e=dt.getLang()!=="en",n=j("div",{class:"bk-coins"},`\u{1FA99} ${dt.num(this.save.coins)}`),i=t==="color"?Fn:mr,r=t==="color"?this.save.owned.colors:this.save.owned.helmets,a=t==="color"?this.save.color:this.save.helmet,o=i.map(c=>{let l=r.includes(c.id),h=a===c.id,u=t==="color"?j("span",{class:"bk-sw",style:`background:#${c.hex.toString(16).padStart(6,"0")}`}):j("span",{class:"bk-sw hm"},{bucket:"\u{1FA96}",plume:"\u{1FAB6}",crest:"\u{1F3DB}\uFE0F",horns:"\u{1F402}",jester:"\u{1F921}",crown:"\u{1F451}"}[c.id]);return j("button",{class:`bk-item${h?" on":""}${l?"":" buy"}`,onclick:()=>{if(l)To(this.save,t,c.id),this.sound.play("tap");else{if(!Sl(this.save,t,c.id).ok){this.hint(dt.t("notEnough")),this.sound.play("warn");return}To(this.save,t,c.id),this.sound.play("coin")}this._persist(),this._previewRebuild(),this.showShop(t)}},u,j("span",{},e?c.ar:c.en),j("small",{},h?`\u2713 ${dt.t("equipped")}`:l?"":`\u{1FA99} ${dt.num(c.price)}`))});this.layer.append(j("div",{class:"bk-dim bk-bottom"},j("div",{class:"bk-card wide"},n,j("div",{class:"bk-segs"},j("button",{class:`bk-seg${t==="color"?" on":""}`,onclick:()=>this.showShop("color")},dt.t("colors")),j("button",{class:`bk-seg${t==="helmet"?" on":""}`,onclick:()=>this.showShop("helmet")},dt.t("helmets"))),j("div",{class:"bk-items"},o),j("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back"))))),this.hintEl=j("div",{class:"bk-hint",style:"top:calc(var(--u)*12)"}),this.layer.append(this.hintEl),this._soundPill()}_ensurePreview(){this.preview||(this.preview=new Gt,this.scene.add(this.preview)),this._previewRebuild(),this.preview.visible=!0}_previewRebuild(){for(let i of[...this.preview.children])this.preview.remove(i);let t=(Fn.find(i=>i.id===this.save.color)||Fn[0]).hex,e=ql(t,this.save.helmet,!1);e.scale.setScalar(1.1),this.preview.add(e),this.previewKnight=e;let n=et(st.cyl,St(9067054),0,-.1,0,5,.3,5);this.preview.add(n)}start(t){this.round=t,this.real=!0,this.m=new ns({round:t,diff:this.save.diff,seed:(Date.now()&65535)+1,age:this.age}),this._look(this.m.cfg.look),this.dyn.visible=!0,this.preview&&(this.preview.visible=!1),this._setupEntities(),this.mode="play",this.paused=!1,this.over=!1,this.overT=0,this.stick=null,this.keys.clear(),this.cheer=0,this.lastScore=[0,0],this._clear(),this.sound.setMode("play"),this._hud(),this.camSnap=!0;let e=dt.getLang()!=="en",n=this.m.cfg;this.introT=1.9,this.introEl=j("div",{class:"bk-intro"},j("div",{class:"bk-plaque"},j("div",{class:"bk-ribbon"},`${dt.t("match")} ${dt.num(t+1)}`),j("div",{class:"bk-mname"},e?n.ar:n.en),j("div",{class:"bk-first"},dt.t("first")))),this.layer.append(this.introEl)}_hud(){let t=j("button",{class:"bk-round","aria-label":dt.t("paused"),onclick:()=>this.togglePause()},"\u23F8");this.scoreA=j("b",{},"0"),this.scoreB=j("b",{},"0"),this.timeEl=j("span",{class:"bk-time"},"2:00");let e=(i,r)=>j("i",{class:"bk-shield",style:`--c:#${i.toString(16).padStart(6,"0")}`},r),n=j("div",{class:"bk-board"},j("div",{class:"bk-score"},e(this.playerColor,"\u{1F3F0}"),this.scoreA,j("em",{},"-"),this.scoreB,e(Ar,"\u2600")),this.timeEl);this.matchBadge=j("div",{class:"bk-mbadge"},j("small",{},dt.t("match")),j("b",{},dt.num(this.round+1))),this.baseKnob=j("div",{class:"bk-bknob"}),this.baseEl=j("div",{class:"bk-base"},this.baseKnob),this.dashFill=j("div",{class:"bk-dashfill"}),this.dashBtn=j("button",{class:"bk-dash","aria-label":dt.t("dash"),onpointerdown:i=>{i.preventDefault(),this.m&&!this.paused&&this.m.pressDash()}},this.dashFill,j("span",{},"\u{1F6E1}\uFE0F"),j("small",{},dt.t("dash"))),this.knobEl=j("div",{class:"bk-knob"}),this.stickEl=j("div",{class:"bk-stick"},this.knobEl),this.bannerEl=j("div",{class:"bk-banner"}),this.hintEl=j("div",{class:"bk-hint",style:"top:calc(var(--u)*22)"}),this.layer.append(j("div",{class:"bk-top",style:"direction:ltr"},this.matchBadge,n,t),this.baseEl,this.stickEl,this.dashBtn,this.bannerEl,this.hintEl),this._soundPill()}_banner(t,e,n=1800,i="#ffd23a",r=!1){let a=this.bannerEl;a&&(a.replaceChildren(...[j("div",{class:r?"bk-goalrib":"bk-bigtxt",style:r?"":`color:${i}`},t),e?j("div",{class:"bk-subtxt"},e):null].filter(Boolean)),a.classList.remove("show"),a.offsetWidth,a.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>a.classList.remove("show"),n))}togglePause(){this.mode!=="play"||this.over||(this.paused=!this.paused,this.paused?(this.pauseEl=j("div",{class:"bk-dim"},j("div",{class:"bk-card"},j("div",{class:"bk-title"},dt.t("paused")),j("button",{class:"bk-btn",onclick:()=>this.togglePause()},"\u25B6 ",dt.t("resume")),j("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.start(this.round)}},"\u{1F504} ",dt.t("restart")),j("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showMenu()}},"\u{1F3E0} ",dt.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&(this.pauseEl.remove(),this.pauseEl=null))}_results(t){let e=dt.getLang()!=="en";this.over=!0;let n=this.save.stars[this.round]||0;bl(this.save,this.round,t),this._persist(),this.sound.play(t.win?"win":"lose"),t.draw||this.voice.say(t.win?"win":"lose"),this.sound.setMode(null);let i=j("div",{class:"bk-stars"},[1,2,3].map(a=>j("span",{class:a<=t.stars?"":"off",style:`animation-delay:${a*.25}s`},"\u2B50"))),r=this.round===ln.length-1;if(this.layer.append(j("div",{class:"bk-dim"},j("div",{class:"bk-card res"},j("div",{class:"bk-logo",style:`color:${t.win?"#ffd23a":t.draw?"#bcd":"#ff8a6a"}`},t.win?dt.t("victory"):t.draw?dt.t("draw"):dt.t("lose")),j("div",{class:"bk-bigscore"},`${dt.num(t.goals[0])} - ${dt.num(t.goals[1])}`),i,j("div",{class:"bk-small"},`${dt.t("earned")} \u{1FA99} ${dt.num(t.coins)}`,t.win?` \xB7 ${dt.t(this.age&&this.gender==="girl"?"win_f":"win_m")}`:""),t.win&&!r?j("button",{class:"bk-btn",onclick:()=>{this.sound.play("tap"),this.start(this.round+1)}},"\u25B6 ",dt.t("next")):null,j("button",{class:t.win?"bk-btn alt":"bk-btn",onclick:()=>{this.sound.play("tap"),this.start(this.round)}},"\u{1F504} ",dt.t("restart")),j("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showRounds()}},"\u{1F3C6} ",dt.t("rounds")),j("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showMenu()}},"\u{1F3E0} ",dt.t("home"))))),t.win)for(let a=0;a<40;a++)this.puff(this.camT.x+(Math.random()-.5)*14,8+Math.random()*5,this.camT.z-6+Math.random()*6,1,[16765498,16734858,5957887,8056954][a%4],2,-3,.5)}_events(t){let e=this.m,n=this.real;for(let i of t){let r=i.id!==void 0&&e.knights[i.id];switch(i.type){case"count":n&&(this.sound.play("count"),i.n>=3&&this.voice.say("count"),this._banner(dt.num(i.n),dt.t("ready"),900,"#fff"));break;case"go":n&&(this.sound.play("go"),this.voice.say("go"),this.sound.play("whistle"),this._banner(dt.t("go"),"",900,"#7af07a"),e.kickoffs===1&&this.hint(dt.t("tip"),3600));break;case"dash":r&&(this.puff(r.x,.3,r.z,8,15259824,2.5),n&&this.sound.play("dash"));break;case"barrelHit":{let a=e.barrel;this.puff(a.x,.8,a.z,5+Math.round(i.power*10),i.dash?16771488:15259824,3+i.power*4),n&&(this.sound.play("thud",i.power),i.dash&&this.sound.play("clang"),i.dash&&i.power>.5&&this.voice.say("trick")),i.power>.5&&(this.shakeT=Math.max(this.shakeT,.25+i.power*.2));break}case"fence":n&&this.sound.play("fence",i.power);break;case"stun":r&&(this.puff(r.x,1.8,r.z,14,16769098,4,-4,2),n&&this.sound.play("stun"));break;case"clash":n&&this.sound.play("clang");break;case"clang":n&&this.sound.play("clang");break;case"doorWarn":n&&this.sound.play("creak");break;case"doorOpen":n&&this.sound.play("dooropen");break;case"fall":r&&(this.puff(r.x,.4,r.z,12,6965802,3),n&&this.sound.play("doorfall"));break;case"boulderWarn":n&&(this.sound.play("warn"),this.voice.say("near"));break;case"boulderGo":n&&this.sound.play("rumble");break;case"goal":{this.cheer=3,this.goalTeam=i.team,this.shakeT=.5,n&&(this.sound.play(i.team===0?"goal":"conceded"),this.voice.say(i.team===0?"win":"bump"),i.team!==0&&this.sound.swell(.07,1.6),this._banner(dt.t("goal"),"",2300,i.team===0?"#ffd23a":"#ff8a8a",!0));let a=i.team===0?-Kt.hl:Kt.hl;for(let o=0;o<70;o++)this.puff((Math.random()-.5)*10,1+Math.random()*3,a+(i.team===0?1:-1)*Math.random()*3,1,[16765498,16734858,5957887,8056954,16777215][o%5],5,-4,3);break}case"overtime":n&&(this._banner(dt.t("overtime"),"",2e3,"#ff8a3a"),this.sound.play("whistle"));break;case"over":n&&(this.over=!0,this.overT=1.2,this.resEv=i.result,this.sound.play("whistle"));break;default:break}}}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e;let n=this.m;n&&this.dyn.visible&&(this.mode==="play"&&!this.paused&&this.introT>0?(this.introT-=e,this.introT<=0&&this.introEl&&(this.introEl.remove(),this.introEl=null)):this.mode==="play"&&!this.paused?(!this.over||this.overT>0)&&(this._readInput(),this._events(n.step(e))):this.mode==="menu"&&(this._events(n.step(e)),n.phase==="over"&&this._demo()),this.mode==="play"&&this.over&&this.resEv&&!this.resShown&&(this.overT-=e,this.overT<=0&&(this.resShown=!0,this._results(this.resEv))),this.mode==="play"&&!this.over&&(this.resShown=!1),this.mode==="play"&&this._hudUpdate()),this.cheer=Math.max(0,this.cheer-e),this.shakeT=Math.max(0,this.shakeT-e),this._crowdTick-=e,this._crowdTick<=0&&(this._crowdTick=1/20,this._updateCrowd(this.clock,this.cheer));for(let i of this.torches)i.visible&&i.userData.fl.scale.set(.55+Math.sin(this.clock*12+i.position.z)*.08,1.1+Math.sin(this.clock*9+i.position.x)*.2,.55);this._render(e)}_hudUpdate(){let t=this.m;this.scoreA.textContent!==String(t.score[0])&&(this.scoreA.textContent=dt.num(t.score[0])),this.scoreB.textContent!==String(t.score[1])&&(this.scoreB.textContent=dt.num(t.score[1]));let e=Math.ceil(Math.max(0,t.timeLeft)),n=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,i=t.overtime?`\u23F1 ${n}`:n;this.timeEl.textContent!==(dt.getLang()==="en"?i:i.replace(/[0-9]/g,o=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[o]))&&(this.timeEl.textContent=dt.getLang()==="en"?i:i.replace(/[0-9]/g,o=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[o])),this.timeEl.classList.toggle("low",e<=15&&!t.overtime);let r=t.knights[0],a=Lo(1-r.cd/(this.age<=4?1.1:1.5),0,1);this.dashFill.style.setProperty("--f",`${Math.round(a*100)}%`),this.dashBtn.classList.toggle("ready",a>=1)}_syncKnight(t,e,n){let i=e.userData,r=Math.hypot(t.vx,t.vz);e.position.set(t.x,0,t.z);let o=Math.atan2(t.fx,t.fz)-e.rotation.y;o=Math.atan2(Math.sin(o),Math.cos(o)),e.rotation.y+=o*Math.min(1,n*14),i.phase+=r*n*1.7;let c=Math.sin(i.phase)*Math.min(1,r/6),l=t.stun>0,h=!!t.fall&&l,u=this.cheer>0&&this.m.phase==="goal",f=u&&t.team===this.goalTeam,p=t.dash>0?.55:Math.min(.25,r*.03);i.legL.rotation.x=c*.9,i.legR.rotation.x=-c*.9,i.armL.rotation.x=t.dash>0?.9:-c*.8,i.armR.rotation.x=t.dash>0?.9:c*.8,i.armL.rotation.z=0,i.armR.rotation.z=0;let m=Math.abs(c)*.1*Math.min(1,r/6),A=p,g=0,d=1;if(f?(m=Math.abs(Math.sin(this.clock*8+t.id))*.9,i.armL.rotation.x=i.armR.rotation.x=-2.8,i.armL.rotation.z=-.3,i.armR.rotation.z=.3,A=0):u&&(A=.35,i.armL.rotation.x=i.armR.rotation.x=.2,m=0),l&&!h){let x=1-t.stun/(t.stunDur||1),_=Math.min(1,x*5);A=-_*1.45+Math.sin(this.clock*20)*.04*(1-_),g=Math.sin(this.clock*7)*.12*_,m=-.15*_,i.legL.rotation.x=i.legR.rotation.x=.3,i.armL.rotation.x=i.armR.rotation.x=-1.6,x<.2&&(g=x*18)}if(h){let x=1-t.stun/(t.stunDur||1);d=x<.2?1-x*5:x>.85?(x-.85)/.15:.001,t.fall&&e.position.set(t.fall.x+(t.x-t.fall.x),0,t.z)}i.inner.rotation.x=A,i.inner.rotation.z=g,i.inner.position.y=m,e.scale.set(1,Math.max(.001,d),1),i.shadow.scale.setScalar(Math.max(.5,1-m*.4)),i.stars.visible=l&&!h,i.stars.visible&&i.stars.children.forEach((x,_)=>{let v=this.clock*5+_*2.1;x.position.set(Math.cos(v)*.7,Math.sin(this.clock*8+_)*.1,Math.sin(v)*.7),x.rotation.y=v*2}),i.inner.visible=!(h&&d<.01),i.marker&&(i.marker.userData.arrow.position.y=3.5+Math.sin(this.clock*6)*.2,i.marker.visible=!l),t.mud&&r>1&&Math.random()<n*8&&this.puff(t.x,.2,t.z,1,6965802,1.2,-3)}_render(t){let e=this.m,n=this.mode==="play"||this.mode==="menu";if(e&&this.dyn.visible){e.knights.forEach((l,h)=>this._syncKnight(l,this.kMesh[h],t));let i=e.barrel,r=this.barrelMesh,a=r.userData;r.position.set(i.x,a.y,i.z);let o=Math.hypot(i.vx,i.vz);if(o>.8){let h=Math.atan2(i.vx,i.vz)-a.yaw.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h)),a.yaw.rotation.y+=h*Math.min(1,t*10)}a.roll.rotation.x+=o*t/le,this.barrelShadow.position.set(i.x,.03,i.z),o>7&&Math.random()<t*14&&this.puff(i.x,.2,i.z,1,15259824,1.2,-1);for(let l of this.doorMesh){let h=l.d,u=h.state==="open"?1:0,f=0;h.state==="open"&&(u=Math.min(1,(2.4-h.t)*5)*Math.min(1,h.t*3)),h.state==="warn"&&(f=Math.sin(this.clock*40)*.04,u=0),l.panels[0].rotation.z=u*1.45+f,l.panels[1].rotation.z=-u*1.45-f,l.tape.material.opacity=h.state==="warn"?.35+Math.sin(this.clock*16)*.3:0,l.tape.scale.y=1}let c=new Set;for(let l of e.boulders){let h=this._boulderMesh(l);c.add(l.id),h.wrap.position.set(0,0,l.z),l.state==="warn"?(h.lane.material.opacity=.18+(Math.sin(this.clock*14)*.5+.5)*.3,h.arrows.visible=!0,h.ch.offset.x=-this.clock*.8*l.dir,h.rock.position.set(-l.dir*(Kt.hw+1.4),1.1,0),h.rock.rotation.z+=t):(h.lane.material.opacity=.1,h.arrows.visible=!1,h.rock.position.set(l.x,1.1,0),h.rock.rotation.z-=l.dir*t*10,h.rock.rotation.x+=t*2,Math.random()<t*20&&this.puff(l.x,.3,l.z,1,12101768,1.5,-2))}for(let[l,h]of this.bouldMesh)c.has(l)||(this.dyn.remove(h.wrap),this.bouldMesh.delete(l))}this._tickParticles(t),this._camera(t,n),this.renderer.render(this.scene,this.camera)}_camera(t,e){let n=this.camera,i=this.cw/this.ch,r=i<1;if(this.mode==="shop"&&this.preview){this.preview.rotation.y+=t*.8,n.position.set(0,3,13),n.lookAt(0,r?-1.2:-1.8,0);return}let a=this.m;if(!a)return;let o=n.fov*Math.PI/180,c=2*Math.atan(Math.tan(o/2)*i),l=r?17:30,h=r?21:28,u=Math.max(l/2/Math.tan(c/2),h/2/Math.tan(o/2)*.95),f=.95,p=a.barrel,m=a.knights[0],A=Cr(p.x,m.x,this.real?.35:0),g=Cr(p.z,m.z,this.real?.35:0),d=Math.max(0,Kt.hl-8);g=Lo(g,-d,d);let x=Math.max(0,Kt.hw-(r?3:5));A=Lo(A*(r?1:.4),-x,x),this.mode==="menu"&&(A=Math.sin(this.clock*.1)*3,g=Math.sin(this.clock*.15)*8);let v=this.camSnap?1:Math.min(1,t*3.5);this.camSnap=!1,this.camT.x=Cr(this.camT.x,A,v),this.camT.z=Cr(this.camT.z,g,v);let w=this.shakeT>0?this.shakeT*.35:0;n.position.set(this.camT.x+(Math.random()-.5)*w,Math.sin(f)*u,this.camT.z+Math.cos(f)*u+(Math.random()-.5)*w),n.lookAt(this.camT.x,0,this.camT.z-1)}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.voice.dispose(),document.removeEventListener("pointerdown",this._voiceArm,!0),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKeyUp),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},lm=`
.bk-logo{font-size:calc(var(--u)*7.4)!important}
.bk-dim.bk-clear{background:rgba(30,15,5,.28)}
.bk-dim.bk-bottom{align-items:flex-end;background:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(20,10,0,.45))}
.bk-card.wide{width:calc(var(--u)*115);max-width:100%}
.bk-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
.bk-coins{font-weight:900;font-size:calc(var(--u)*4.4);background:rgba(0,0,0,.3);border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*3.5)}
.bk-lv{border:calc(var(--u)*.45) solid #fff;font-family:inherit;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.2) calc(var(--u)*.6);color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3);background:linear-gradient(180deg,#e8a84a,#b8742a);box-shadow:0 calc(var(--u)*.6) 0 #6a3a10;min-height:calc(var(--u)*19);justify-content:center}
.bk-lv i{font-style:normal;font-size:calc(var(--u)*6)}.bk-lv .bk-lvn{font-size:calc(var(--u)*2.5);line-height:1.1;text-align:center}.bk-lv span:last-child{color:#ffe04a;font-size:calc(var(--u)*3)}
.bk-lv.fin{background:linear-gradient(180deg,#ffe04a,#d89a1a);color:#4a2a00}.bk-lv.fin span:last-child{color:#8a3a00}
.bk-lv.lock{filter:grayscale(1) brightness(.75)}
.bk-lvs{grid-template-columns:repeat(3,1fr)}
@media (orientation:landscape){.bk-lvs{grid-template-columns:repeat(5,1fr)}}
.bk-board{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);direction:ltr}
.bk-score{display:flex;align-items:center;gap:calc(var(--u)*1.6);background:linear-gradient(180deg,#5a3a1a,#2a1608);border:calc(var(--u)*.55) solid #ffd23a;border-radius:calc(var(--u)*4);padding:calc(var(--u)*.7) calc(var(--u)*3);box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,0,0,.45)}
.bk-score b{font-size:calc(var(--u)*7.5);font-weight:900;color:#fff;min-width:calc(var(--u)*5);text-align:center;line-height:1}.bk-score em{font-style:normal;color:#ffd23a;font-size:calc(var(--u)*6);font-weight:900}
.bk-dot{display:block;width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);border-radius:50%;border:calc(var(--u)*.4) solid #fff}
.bk-time{background:rgba(20,10,0,.72);color:#fff;font-weight:900;font-size:calc(var(--u)*4.4);border-radius:999px;padding:calc(var(--u)*.2) calc(var(--u)*3);border:calc(var(--u)*.3) solid #ffd23a}.bk-time.low{color:#ff8a6a;animation:bkpulse .6s infinite}
.bk-dash{position:absolute;right:max(calc(var(--u)*4),env(safe-area-inset-right));bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*21);height:calc(var(--u)*21);border-radius:50%;border:calc(var(--u)*.9) solid #fff;font-family:inherit;color:#fff;font-weight:900;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#6a3a1a;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.5);overflow:hidden;padding:0;pointer-events:auto;touch-action:none}
.bk-dashfill{position:absolute;inset:0;--f:100%;background:conic-gradient(#ffb02a var(--f),rgba(40,20,5,.85) 0)}
.bk-dash span,.bk-dash small{position:relative}.bk-dash span{font-size:calc(var(--u)*8)}.bk-dash small{font-size:calc(var(--u)*3.2)}
.bk-dash.ready{animation:bkpulse 1s infinite;box-shadow:0 0 calc(var(--u)*3) #ffd23a}
.bk-stick{position:absolute;display:none;width:0;height:0;pointer-events:none}.bk-stick:before{content:'';position:absolute;left:calc(var(--u)*-14.4);top:calc(var(--u)*-14.4);width:calc(var(--u)*28.8);height:calc(var(--u)*28.8);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.55);background:rgba(255,255,255,.12)}
.bk-knob{position:absolute;left:calc(var(--u)*-5);top:calc(var(--u)*-5);width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:50%;background:rgba(255,255,255,.7);box-shadow:0 0 calc(var(--u)*1.5) rgba(0,0,0,.4)}
.bk-banner{position:absolute;left:0;right:0;top:34%;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1);opacity:0;pointer-events:none;transform:scale(.6)}
.bk-banner.show{animation:bkpop 2s ease-out forwards}
.bk-bigtxt{font-size:calc(var(--u)*17);font-weight:900;-webkit-text-stroke:calc(var(--u)*1) rgba(40,15,0,.95);paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) calc(var(--u)*2) rgba(0,0,0,.4);line-height:1}
.bk-subtxt{font-size:calc(var(--u)*6);font-weight:900;color:#fff;background:rgba(30,15,0,.6);border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*4)}
@keyframes bkpop{0%{opacity:0;transform:scale(.5)}12%{opacity:1;transform:scale(1.12)}22%{transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:scale(1)}}
@keyframes bkpulse{50%{transform:scale(1.07)}}
.bk-card.res{gap:calc(var(--u)*1.2)}.bk-stars{direction:ltr}
@media (orientation:landscape){.bk-card.res{display:grid;grid-template-columns:1fr 1fr;width:calc(var(--u)*130);align-items:center}.bk-card.res>.bk-logo,.bk-card.res>.bk-bigscore,.bk-card.res>.bk-stars,.bk-card.res>.bk-small{grid-column:1/3}.bk-card.res .bk-btn{min-height:calc(var(--u)*9);font-size:calc(var(--u)*4)}.bk-card.res .bk-bigscore{font-size:calc(var(--u)*8)}.bk-card.res .bk-stars{font-size:calc(var(--u)*7)}.bk-card.res .bk-logo{font-size:calc(var(--u)*6)!important}}
.bk-top{align-items:flex-start}
.bk-mbadge{width:calc(var(--u)*10);height:calc(var(--u)*11);background:linear-gradient(180deg,#6a6a70,#34343a);border:calc(var(--u)*.5) solid #d8b45a;border-radius:calc(var(--u)*1.6) calc(var(--u)*1.6) calc(var(--u)*5) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-weight:900;line-height:1}.bk-mbadge small{font-size:calc(var(--u)*2.1)}.bk-mbadge b{font-size:calc(var(--u)*5)}
.bk-shield{width:calc(var(--u)*7);height:calc(var(--u)*8);margin:calc(var(--u)*-1.6) 0;background:linear-gradient(180deg,var(--c),#0006);border:calc(var(--u)*.5) solid #e8c860;border-radius:calc(var(--u)*1.2) calc(var(--u)*1.2) calc(var(--u)*4) calc(var(--u)*4);display:flex;align-items:center;justify-content:center;font-style:normal;font-size:calc(var(--u)*4.2);color:#fff}
.bk-score{border-color:#2a8a6a;background:linear-gradient(180deg,#1f6a52,#0f3a2c);padding:calc(var(--u)*.5) calc(var(--u)*2)}
.bk-score b{font-size:calc(var(--u)*6.4)}
.bk-time{font-size:calc(var(--u)*3.4);padding:0 calc(var(--u)*2.6);background:linear-gradient(180deg,#5a5a60,#2e2e34);border-color:#d8b45a}
.bk-intro{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;background:rgba(10,6,4,.35);animation:bkfade 1.9s linear forwards}
@keyframes bkfade{0%{opacity:0}8%{opacity:1}86%{opacity:1}100%{opacity:0}}
.bk-plaque{background:linear-gradient(180deg,#3a3a40,#1c1c22);border:calc(var(--u)*.9) solid #d8a840;border-radius:calc(var(--u)*3);padding:calc(var(--u)*5) calc(var(--u)*8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.6);min-width:calc(var(--u)*60);box-shadow:0 0 calc(var(--u)*3) #000a}
.bk-ribbon{background:linear-gradient(180deg,#2aa86a,#127a48);color:#fff;font-weight:900;font-size:calc(var(--u)*5.6);padding:calc(var(--u)*.8) calc(var(--u)*6);border-radius:calc(var(--u)*1);border:calc(var(--u)*.4) solid #e8c860;margin-top:calc(var(--u)*-9)}
.bk-mname{color:#fff;font-weight:900;font-size:calc(var(--u)*7.4);text-align:center;line-height:1.15;text-shadow:0 calc(var(--u)*.6) 0 #000}
.bk-first{background:linear-gradient(180deg,#fff,#d9d3c4);color:#2a2a2a;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*.7) calc(var(--u)*6);border-radius:999px;border:calc(var(--u)*.4) solid #b89040}
.bk-goalrib{background:linear-gradient(180deg,#2aa86a,#127a48);color:#fff;font-weight:900;font-size:calc(var(--u)*13);padding:calc(var(--u)*1) calc(var(--u)*10);border:calc(var(--u)*.8) solid #e8c860;border-radius:calc(var(--u)*1.6);text-shadow:0 calc(var(--u)*.8) 0 #0a4a2a;box-shadow:0 calc(var(--u)*1) calc(var(--u)*2) #0008;line-height:1.1}
.bk-hint{background:linear-gradient(180deg,#f2eee0,#d8d2bc)!important;color:#2a2418!important;border:calc(var(--u)*.4) solid #7a6a40;font-weight:900;border-radius:calc(var(--u)*3)!important}
.bk-base{position:absolute;left:max(calc(var(--u)*4),env(safe-area-inset-left));bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*24);height:calc(var(--u)*24);border-radius:50%;border:calc(var(--u)*1.1) solid #d8b45a;background:radial-gradient(circle,#5a7a62,#2f4a3a);opacity:.9;pointer-events:none;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) #0007}
.bk-bknob{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:radial-gradient(circle at 35% 30%,#8af0b0,#1f9a64);border:calc(var(--u)*.6) solid #e8c860}
.bk-dash{background:radial-gradient(circle,#ff8a2a,#d03a08)!important;border-color:#e8c060!important}
.bk-dash:not(.ready){background:radial-gradient(circle,#6a7078,#383c42)!important}
.bk-dash .bk-dashfill{background:conic-gradient(#35e0b0 var(--f),rgba(0,0,0,.25) 0);-webkit-mask:radial-gradient(circle,transparent 66%,#000 68%);mask:radial-gradient(circle,transparent 66%,#000 68%)}
.bk-dash span{display:none}.bk-dash small{font-size:calc(var(--u)*5.4)!important;text-shadow:0 calc(var(--u)*.4) 0 #0007}
.bk-bigscore{font-size:calc(var(--u)*12);font-weight:900;color:#fff;direction:ltr}
.bk-stars{font-size:calc(var(--u)*11)}.bk-stars span{display:inline-block;animation:bkpop2 .5s both}.bk-stars .off{filter:grayscale(1);opacity:.3}
@keyframes bkpop2{from{transform:scale(0) rotate(-90deg)}to{transform:scale(1)}}
.bk-segs{display:flex;gap:calc(var(--u)*1.4);width:100%}.bk-seg{flex:1;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4);color:#fff;border:calc(var(--u)*.4) solid #fff;border-radius:999px;padding:calc(var(--u)*1.2);cursor:pointer;background:rgba(0,0,0,.3);min-height:calc(var(--u)*10)}.bk-seg.on{background:linear-gradient(180deg,#ffd23a,#e0951a);color:#4a2a00}
.bk-items{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.4);width:100%}
.bk-item{font-family:inherit;font-weight:900;color:#fff;border:calc(var(--u)*.4) solid rgba(255,255,255,.6);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1) calc(var(--u)*.4);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3);background:rgba(0,0,0,.28);font-size:calc(var(--u)*2.7);min-height:calc(var(--u)*17)}
.bk-item.on{border-color:#ffd23a;background:rgba(255,210,58,.25)}.bk-item small{font-size:calc(var(--u)*2.6);color:#ffe04a}
.bk-sw{width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);border-radius:50%;border:calc(var(--u)*.5) solid #fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5)}.bk-sw.hm{background:rgba(255,255,255,.15)}
@media (orientation:landscape){.bk-items{grid-template-columns:repeat(8,1fr)}.bk-card.wide{width:calc(var(--u)*150)}}
`,Do={start(s,t,e){let n=new Uo(s,t||{},e);return Do.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.BarrelKnights=Do;var Em=Do;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
