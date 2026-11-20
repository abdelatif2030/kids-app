(()=>{var go="170";var Nl=0,Vo=1,Fl=2;var $c=1,Ol=2,An=3,Nn=0,Ue=1,He=2,Dn=0,Ci=1,Go=2,Wo=3,Xo=4,kl=5,$n=100,zl=101,Bl=102,Hl=103,Vl=104,Gl=200,Wl=201,Xl=202,ql=203,Qr=204,jr=205,Yl=206,$l=207,Zl=208,Jl=209,Kl=210,Ql=211,jl=212,th=213,eh=214,ta=0,ea=1,na=2,bi=3,ia=4,sa=5,ra=6,aa=7,mo=0,nh=1,ih=2,Un=0,sh=1,rh=2,ah=3,oh=4,ch=5,lh=6,hh=7;var Zc=300,Si=301,wi=302,oa=303,ca=304,dr=306,Yi=1e3,Kn=1001,la=1002,Ve=1003,uh=1004;var rs=1005;var nn=1006,Cr=1007;var Qn=1008;var Cn=1009,Jc=1010,Kc=1011,$i=1012,Ao=1013,jn=1014,sn=1015,ji=1016,xo=1017,_o=1018,Ei=1020,Qc=35902,jc=1021,tl=1022,Ke=1023,el=1024,nl=1025,yi=1026,Ti=1027,vo=1028,Co=1029,il=1030,yo=1031;var Io=1033,Rs=33776,Ps=33777,Ls=33778,Ds=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ga=37492,ma=37496,Aa=37808,xa=37809,_a=37810,va=37811,Ca=37812,ya=37813,Ia=37814,Ma=37815,ba=37816,Sa=37817,wa=37818,Ea=37819,Ta=37820,Ra=37821,Us=36492,Pa=36494,La=36495,sl=36283,Da=36284,Ua=36285,Na=36286;var Ns=2300,Fa=2301,yr=2302,qo=2400,Yo=2401,$o=2402;var dh=3200,fh=3201;var rl=0,ph=1,Ln="",Ee="srgb",Di="srgb-linear",fr="linear",te="srgb";var ri=7680;var Zo=519,gh=512,mh=513,Ah=514,al=515,xh=516,_h=517,vh=518,Ch=519,Jo=35044;var Ko="300 es",_n=2e3,Fs=2001,Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ir=Math.PI/180,Oa=180/Math.PI;function ts(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function yh(s,t){return(s%t+t)%t}function Mr(s,t,e){return(1-e)*s+e*t}function Oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Lt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class s{constructor(t,e,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],m=n[8],A=i[0],g=i[3],u=i[6],x=i[1],y=i[4],_=i[7],E=i[2],S=i[5],w=i[8];return r[0]=a*A+o*x+c*E,r[3]=a*g+o*y+c*S,r[6]=a*u+o*_+c*w,r[1]=l*A+h*x+d*E,r[4]=l*g+h*y+d*S,r[7]=l*u+h*_+d*w,r[2]=f*A+p*x+m*E,r[5]=f*g+p*y+m*S,r[8]=f*u+p*_+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,p=l*r-a*c,m=e*d+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=d*A,t[1]=(i*l-h*n)*A,t[2]=(o*n-i*a)*A,t[3]=f*A,t[4]=(h*e-i*c)*A,t[5]=(i*r-o*e)*A,t[6]=p*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},br=new Nt;function ol(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Os(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ih(){let s=Os("canvas");return s.style.display="block",s}var Qo={};function Wi(s){s in Qo||(Qo[s]=!0,console.warn(s))}function Mh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bh(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sh(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yt={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(s.r=vn(s.r),s.g=vn(s.g),s.b=vn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?fr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ii(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var jo=[.64,.33,.3,.6,.15,.06],tc=[.2126,.7152,.0722],ec=[.3127,.329],nc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Di]:{primaries:jo,whitePoint:ec,transfer:fr,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:tc,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:jo,whitePoint:ec,transfer:te,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:tc,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});var ai,ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=Os("canvas")),ai.width=t.width,ai.height=t.height;let n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wh=0,ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Sr(i[a].image)):r.push(Sr(i[a]))}else r=Sr(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Sr(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Eh=0,Ne=class s extends Fn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Kn,i=Kn,r=nn,a=Qn,o=Ke,c=Cn,l=s.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ts(),this.name="",this.source=new ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Zc;Ne.DEFAULT_ANISOTROPY=1;var de=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],m=c[9],A=c[2],g=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(p+1)/2,E=(u+1)/2,S=(h+f)/4,w=(d+A)/4,T=(m+g)/4;return y>_&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=S/n,r=w/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=S/i,r=T/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=T/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(d-A)*(d-A)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-A)/x,this.z=(f-h)/x,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends Fn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zs=class extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],p=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(d!==A||c!==f||l!==p||h!==m){let g=1-o,u=c*f+l*p+h*m+d*A,x=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let E=Math.sqrt(y),S=Math.atan2(E,u*x);g=Math.sin(g*S)/E,o=Math.sin(o*S)/E}let _=o*x;if(c=c*g+f*_,l=l*g+p*_,h=h*g+m*_,d=d*g+A*_,g===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*d+c*p-l*f,t[e+1]=c*m+h*f+l*d-o*p,t[e+2]=l*m+h*p+o*f-c*d,t[e+3]=h*m-o*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),p=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"YZX":this._x=f*h*d+l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d-f*p*m;break;case"XZY":this._x=f*h*d-l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wr=new N,sc=new rn,In=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ki),os.subVectors(this.max,ki),oi.subVectors(t.a,ki),ci.subVectors(t.b,ki),li.subVectors(t.c,ki),Sn.subVectors(ci,oi),wn.subVectors(li,ci),Hn.subVectors(oi,li);let e=[0,-Sn.z,Sn.y,0,-wn.z,wn.y,0,-Hn.z,Hn.y,Sn.z,0,-Sn.x,wn.z,0,-wn.x,Hn.z,0,-Hn.x,-Sn.y,Sn.x,0,-wn.y,wn.x,0,-Hn.y,Hn.x,0];return!Er(e,oi,ci,li,os)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,oi,ci,li,os))?!1:(cs.crossVectors(Sn,wn),e=[cs.x,cs.y,cs.z],Er(e,oi,ci,li,os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new N,new N,new N,new N,new N,new N,new N,new N],$e=new N,as=new In,oi=new N,ci=new N,li=new N,Sn=new N,wn=new N,Hn=new N,ki=new N,os=new N,cs=new N,Vn=new N;function Er(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Vn.fromArray(s,r);let o=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),c=t.dot(Vn),l=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Th=new In,zi=new N,Tr=new N,On=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Th.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);let e=zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(Tr)),this.expandByPoint(zi.copy(t.center).sub(Tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new N,Rr=new N,ls=new N,En=new N,Pr=new N,hs=new N,Lr=new N,Bs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Rr.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Rr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ls),o=En.dot(this.direction),c=-En.dot(ls),l=En.lengthSq(),h=Math.abs(1-a*a),d,f,p,m;if(h>0)if(d=a*c-o,f=a*o-c,m=r*h,d>=0)if(f>=-m)if(f<=m){let A=1/h;d*=A,f*=A,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Rr).addScaledVector(ls,f),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,r){Pr.subVectors(e,t),hs.subVectors(n,t),Lr.crossVectors(Pr,hs);let a=this.direction.dot(Lr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);let c=o*this.direction.dot(hs.crossVectors(En,hs));if(c<0)return null;let l=o*this.direction.dot(Pr.cross(En));if(l<0||c+l>a)return null;let h=-o*En.dot(Lr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class s{constructor(t,e,n,i,r,a,o,c,l,h,d,f,p,m,A,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,f,p,m,A,g)}set(t,e,n,i,r,a,o,c,l,h,d,f,p,m,A,g){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=m,u[11]=A,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),a=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*d,m=o*h,A=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+m*l,e[5]=f-A*l,e[9]=-o*c,e[2]=A-f*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,p=c*d,m=l*h,A=l*d;e[0]=f+A*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=A+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,p=c*d,m=l*h,A=l*d;e[0]=f-A*o,e[4]=-a*d,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,p=a*d,m=o*h,A=o*d;e[0]=c*h,e[4]=m*l-p,e[8]=f*l+A,e[1]=c*d,e[5]=A*l+f,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-f*d,e[8]=m*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+m,e[10]=f-A*d}else if(t.order==="XZY"){let f=a*c,p=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+A,e[5]=a*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=o*h,e[10]=A*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ph)}lookAt(t,e,n){let i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Tn.crossVectors(n,ze),Tn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Tn.crossVectors(n,ze)),Tn.normalize(),us.crossVectors(ze,Tn),i[0]=Tn.x,i[4]=us.x,i[8]=ze.x,i[1]=Tn.y,i[5]=us.y,i[9]=ze.y,i[2]=Tn.z,i[6]=us.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],m=n[2],A=n[6],g=n[10],u=n[14],x=n[3],y=n[7],_=n[11],E=n[15],S=i[0],w=i[4],T=i[8],M=i[12],C=i[1],R=i[5],B=i[9],O=i[13],G=i[2],Z=i[6],W=i[10],j=i[14],H=i[3],rt=i[7],ft=i[11],It=i[15];return r[0]=a*S+o*C+c*G+l*H,r[4]=a*w+o*R+c*Z+l*rt,r[8]=a*T+o*B+c*W+l*ft,r[12]=a*M+o*O+c*j+l*It,r[1]=h*S+d*C+f*G+p*H,r[5]=h*w+d*R+f*Z+p*rt,r[9]=h*T+d*B+f*W+p*ft,r[13]=h*M+d*O+f*j+p*It,r[2]=m*S+A*C+g*G+u*H,r[6]=m*w+A*R+g*Z+u*rt,r[10]=m*T+A*B+g*W+u*ft,r[14]=m*M+A*O+g*j+u*It,r[3]=x*S+y*C+_*G+E*H,r[7]=x*w+y*R+_*Z+E*rt,r[11]=x*T+y*B+_*W+E*ft,r[15]=x*M+y*O+_*j+E*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],m=t[3],A=t[7],g=t[11],u=t[15];return m*(+r*c*d-i*l*d-r*o*f+n*l*f+i*o*p-n*c*p)+A*(+e*c*p-e*l*f+r*a*f-i*a*p+i*l*h-r*c*h)+g*(+e*l*d-e*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+u*(-i*o*h-e*c*d+e*o*f+i*a*d-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],m=t[12],A=t[13],g=t[14],u=t[15],x=d*g*l-A*f*l+A*c*p-o*g*p-d*c*u+o*f*u,y=m*f*l-h*g*l-m*c*p+a*g*p+h*c*u-a*f*u,_=h*A*l-m*d*l+m*o*p-a*A*p-h*o*u+a*d*u,E=m*d*c-h*A*c-m*o*f+a*A*f+h*o*g-a*d*g,S=e*x+n*y+i*_+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=x*w,t[1]=(A*f*r-d*g*r-A*i*p+n*g*p+d*i*u-n*f*u)*w,t[2]=(o*g*r-A*c*r+A*i*l-n*g*l-o*i*u+n*c*u)*w,t[3]=(d*c*r-o*f*r-d*i*l+n*f*l+o*i*p-n*c*p)*w,t[4]=y*w,t[5]=(h*g*r-m*f*r+m*i*p-e*g*p-h*i*u+e*f*u)*w,t[6]=(m*c*r-a*g*r-m*i*l+e*g*l+a*i*u-e*c*u)*w,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*p+e*c*p)*w,t[8]=_*w,t[9]=(m*d*r-h*A*r-m*n*p+e*A*p+h*n*u-e*d*u)*w,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*u+e*o*u)*w,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*p-e*o*p)*w,t[12]=E*w,t[13]=(h*A*i-m*d*i+m*n*f-e*A*f-h*n*g+e*d*g)*w,t[14]=(m*o*i-a*A*i-m*n*c+e*A*c+a*n*g-e*o*g)*w,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*f+e*o*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,p=r*h,m=r*d,A=a*h,g=a*d,u=o*d,x=c*l,y=c*h,_=c*d,E=n.x,S=n.y,w=n.z;return i[0]=(1-(A+u))*E,i[1]=(p+_)*E,i[2]=(m-y)*E,i[3]=0,i[4]=(p-_)*S,i[5]=(1-(f+u))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(m+y)*w,i[9]=(g-x)*w,i[10]=(1-(f+A))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=hi.set(i[0],i[1],i[2]).length(),a=hi.set(i[4],i[5],i[6]).length(),o=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);let l=1/r,h=1/a,d=1/o;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=_n){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,m;if(o===_n)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Fs)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=_n){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),f=(e+t)*l,p=(n+i)*h,m,A;if(o===_n)m=(a+r)*d,A=-2*d;else if(o===Fs)m=r*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hi=new N,Ze=new ne,Rh=new N(0,0,0),Ph=new N(1,1,1),Tn=new N,us=new N,ze=new N,rc=new ne,ac=new rn,an=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ac.setFromEuler(this),this.setFromQuaternion(ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lh=0,oc=new N,ui=new rn,pn=new ne,ds=new N,Bi=new N,Dh=new N,Uh=new rn,cc=new N(1,0,0),lc=new N(0,1,0),hc=new N(0,0,1),uc={type:"added"},Nh={type:"removed"},di={type:"childadded",child:null},Dr={type:"childremoved",child:null},Se=class s extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new N,e=new an,n=new rn,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Nt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(cc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return oc.copy(t).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Bi,ds,this.up):pn.lookAt(ds,Bi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(pn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uc),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nh),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uc),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,Dh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Uh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Se.DEFAULT_UP=new N(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new N,gn=new N,Ur=new N,mn=new N,fi=new N,pi=new N,dc=new N,Nr=new N,Fr=new N,Or=new N,kr=new de,zr=new de,Br=new de,Zn=class s{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Je.subVectors(t,e),i.cross(Je);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Je.subVectors(i,e),gn.subVectors(n,e),Ur.subVectors(t,e);let a=Je.dot(Je),o=Je.dot(gn),c=Je.dot(Ur),l=gn.dot(gn),h=gn.dot(Ur),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return kr.setScalar(0),zr.setScalar(0),Br.setScalar(0),kr.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(kr,r.x),a.addScaledVector(zr,r.y),a.addScaledVector(Br,r.z),a}static isFrontFacing(t,e,n,i){return Je.subVectors(n,e),gn.subVectors(t,e),Je.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;fi.subVectors(i,n),pi.subVectors(r,n),Nr.subVectors(t,n);let c=fi.dot(Nr),l=pi.dot(Nr);if(c<=0&&l<=0)return e.copy(n);Fr.subVectors(t,i);let h=fi.dot(Fr),d=pi.dot(Fr);if(h>=0&&d<=h)return e.copy(i);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(fi,a);Or.subVectors(t,r);let p=fi.dot(Or),m=pi.dot(Or);if(m>=0&&p<=m)return e.copy(r);let A=p*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(pi,o);let g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return dc.subVectors(r,i),o=(d-h)/(d-h+(p-m)),e.copy(i).addScaledVector(dc,o);let u=1/(g+A+f);return a=A*u,o=f*u,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Hr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=yh(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hr(a,r,t+1/3),this.g=Hr(a,r,t),this.b=Hr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Yt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Te(Me.r*255,0,255))*65536+Math.round(Te(Me.g*255,0,255))*256+Math.round(Te(Me.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,i=Me.g,r=Me.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ee){Yt.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,i=Me.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(fs);let n=Mr(Rn.h,fs.h,e),i=Mr(Rn.s,fs.s,e),r=Mr(Rn.l,fs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new kt;kt.NAMES=cl;var Fh=0,kn=class extends Fn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ts(),this.name="",this.blending=Ci,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=jr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==jr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_e=class extends kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new N,ps=new Lt,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jo,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jo&&(t.usage=this.usage),t}};var Vs=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gs=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Oh=0,Xe=new ne,Vr=new Se,gi=new N,Be=new In,Hi=new In,Ae=new N,ve=class s extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ol(t)?Gs:Vs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Be.min,Hi.min),Be.expandByPoint(Ae),Ae.addVectors(Be.max,Hi.max),Be.expandByPoint(Ae)):(Be.expandByPoint(Hi.min),Be.expandByPoint(Hi.max))}Be.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(t,l),Ae.add(gi)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let T=0;T<n.count;T++)o[T]=new N,c[T]=new N;let l=new N,h=new N,d=new N,f=new Lt,p=new Lt,m=new Lt,A=new N,g=new N;function u(T,M,C){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,C),h.sub(l),d.sub(l),p.sub(f),m.sub(f);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(R),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),o[T].add(A),o[M].add(A),o[C].add(A),c[T].add(g),c[M].add(g),c[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let T=0,M=x.length;T<M;++T){let C=x[T],R=C.start,B=C.count;for(let O=R,G=R+B;O<G;O+=3)u(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new N,_=new N,E=new N,S=new N;function w(T){E.fromBufferAttribute(i,T),S.copy(E);let M=o[T];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(S,M);let R=_.dot(c[T])<0?-1:1;a.setXYZW(T,y.x,y.y,y.z,R)}for(let T=0,M=x.length;T<M;++T){let C=x[T],R=C.start,B=C.count;for(let O=R,G=R+B;O<G;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?p=c[A]*o.data.stride+o.offset:p=c[A]*h;for(let u=0;u<h;u++)f[m++]=l[p++]}return new be(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fc=new ne,Gn=new Bs,gs=new On,pc=new N,ms=new N,As=new N,xs=new N,Gr=new N,_s=new N,gc=new N,vs=new N,xe=class extends Se{constructor(t=new ve,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){_s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Gr.fromBufferAttribute(d,t),a?_s.addScaledVector(Gr,h):_s.addScaledVector(Gr.sub(e),h))}e.add(_s)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(gs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(gs,pc)===null||Gn.origin.distanceToSquared(pc)>(t.far-t.near)**2))&&(fc.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(fc),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],u=a[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,E=y;_<E;_+=3){let S=o.getX(_),w=o.getX(_+1),T=o.getX(_+2);i=Cs(this,u,t,n,l,h,d,S,w,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let g=m,u=A;g<u;g+=3){let x=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);i=Cs(this,a,t,n,l,h,d,x,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],u=a[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,E=y;_<E;_+=3){let S=_,w=_+1,T=_+2;i=Cs(this,u,t,n,l,h,d,S,w,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),A=Math.min(c.count,p.start+p.count);for(let g=m,u=A;g<u;g+=3){let x=g,y=g+1,_=g+2;i=Cs(this,a,t,n,l,h,d,x,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function kh(s,t,e,n,i,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Nn,o),c===null)return null;vs.copy(o),vs.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(vs);return l<e.near||l>e.far?null:{distance:l,point:vs.clone(),object:s}}function Cs(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,ms),s.getVertexPosition(c,As),s.getVertexPosition(l,xs);let h=kh(s,t,e,n,ms,As,xs,gc);if(h){let d=new N;Zn.getBarycoord(gc,ms,As,xs,d),i&&(h.uv=Zn.getInterpolatedAttribute(i,o,c,l,d,new Lt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,c,l,d,new Lt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,c,l,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new N,materialIndex:0};Zn.getNormal(ms,As,xs,f.normal),h.face=f,h.barycoord=d}return h}var ti=class s extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function m(A,g,u,x,y,_,E,S,w,T,M){let C=_/w,R=E/T,B=_/2,O=E/2,G=S/2,Z=w+1,W=T+1,j=0,H=0,rt=new N;for(let ft=0;ft<W;ft++){let It=ft*R-O;for(let zt=0;zt<Z;zt++){let ee=zt*C-B;rt[A]=ee*x,rt[g]=It*y,rt[u]=G,l.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[u]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(zt/w),d.push(1-ft/T),j+=1}}for(let ft=0;ft<T;ft++)for(let It=0;It<w;It++){let zt=f+It+Z*ft,ee=f+It+Z*(ft+1),q=f+(It+1)+Z*(ft+1),nt=f+(It+1)+Z*ft;c.push(zt,ee,nt),c.push(ee,q,nt),H+=6}o.addGroup(p,H,M),p+=H,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ri(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(s){let t={};for(let e=0;e<s.length;e++){let n=Ri(s[e]);for(let i in n)t[i]=n[i]}return t}function zh(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ll(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Bh={clone:Ri,merge:we},Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=zh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ws=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new N,mc=new Lt,Ac=new Lt,Re=class extends Ws{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,mc,Ac),e.subVectors(Ac,mc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mi=-90,Ai=1,Ha=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Re(mi,Ai,t,e);i.layers=this.layers,this.add(i);let r=new Re(mi,Ai,t,e);r.layers=this.layers,this.add(r);let a=new Re(mi,Ai,t,e);a.layers=this.layers,this.add(a);let o=new Re(mi,Ai,t,e);o.layers=this.layers,this.add(o);let c=new Re(mi,Ai,t,e);c.layers=this.layers,this.add(c);let l=new Re(mi,Ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Xs=class extends Ne{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Va=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ti(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Dn});r.uniforms.tEquirect.value=e;let a=new xe(i,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=nn),new Ha(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Wr=new N,Gh=new N,Wh=new Nt,xn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wr.subVectors(n,e).cross(Gh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wh.getNormalMatrix(t),i=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new On,ys=new N,Zi=class{constructor(t=new xn,e=new xn,n=new xn,i=new xn,r=new xn,a=new xn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],p=i[8],m=i[9],A=i[10],g=i[11],u=i[12],x=i[13],y=i[14],_=i[15];if(n[0].setComponents(c-r,f-l,g-p,_-u).normalize(),n[1].setComponents(c+r,f+l,g+p,_+u).normalize(),n[2].setComponents(c+a,f+h,g+m,_+x).normalize(),n[3].setComponents(c-a,f-h,g-m,_-x).normalize(),n[4].setComponents(c-o,f-d,g-A,_-y).normalize(),e===_n)n[5].setComponents(c+o,f+d,g+A,_+y).normalize();else if(e===Fs)n[5].setComponents(o,d,A,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ys.x=i.normal.x>0?t.max.x:t.min.x,ys.y=i.normal.y>0?t.max.y:t.min.y,ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xh(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],A=d[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,d[f]=A)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let A=d[p];s.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var cn=class s extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,f=e/c,p=[],m=[],A=[],g=[];for(let u=0;u<h;u++){let x=u*f-a;for(let y=0;y<l;y++){let _=y*d-r;m.push(_,-x,0),A.push(0,0,1),g.push(y/o),g.push(1-u/c)}}for(let u=0;u<c;u++)for(let x=0;x<o;x++){let y=x+l*u,_=x+l*(u+1),E=x+1+l*(u+1),S=x+1+l*u;p.push(y,_,S),p.push(_,E,S)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
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
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
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
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu=`#ifdef USE_BATCHING
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
#endif`,eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,su=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ru=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gu=`#define PI 3.141592653589793
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
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Au=`vec3 transformedNormal = objectNormal;
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
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mu=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
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
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
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
#endif`,ku=`#ifdef USE_ENVMAP
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
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
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
#endif`,Wu=`struct PhysicalMaterial {
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
}`,Xu=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ed=`#if defined( USE_POINTS_UV )
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
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
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
#endif`,cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
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
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rd=`float getShadowMask() {
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
}`,Pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Yd=`varying vec3 vWorldDirection;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
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
}`,Qd=`#if DEPTH_PACKING == 3200
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
}`,jd=`#define DISTANCE
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
}`,tf=`#define DISTANCE
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`uniform float scale;
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
}`,rf=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,of=`uniform vec3 diffuse;
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
}`,cf=`#define LAMBERT
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
}`,lf=`#define LAMBERT
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
}`,hf=`#define MATCAP
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
}`,uf=`#define MATCAP
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
}`,df=`#define NORMAL
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
}`,ff=`#define NORMAL
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
}`,pf=`#define PHONG
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
}`,gf=`#define PHONG
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
}`,mf=`#define STANDARD
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
}`,Af=`#define STANDARD
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
}`,xf=`#define TOON
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
}`,_f=`#define TOON
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
}`,vf=`uniform float size;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,yf=`#include <common>
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
}`,If=`uniform vec3 color;
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
}`,Mf=`uniform float rotation;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:qh,alphahash_pars_fragment:Yh,alphamap_fragment:$h,alphamap_pars_fragment:Zh,alphatest_fragment:Jh,alphatest_pars_fragment:Kh,aomap_fragment:Qh,aomap_pars_fragment:jh,batching_pars_vertex:tu,batching_vertex:eu,begin_vertex:nu,beginnormal_vertex:iu,bsdfs:su,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:ou,clipping_planes_pars_fragment:cu,clipping_planes_pars_vertex:lu,clipping_planes_vertex:hu,color_fragment:uu,color_pars_fragment:du,color_pars_vertex:fu,color_vertex:pu,common:gu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:Au,displacementmap_pars_vertex:xu,displacementmap_vertex:_u,emissivemap_fragment:vu,emissivemap_pars_fragment:Cu,colorspace_fragment:yu,colorspace_pars_fragment:Iu,envmap_fragment:Mu,envmap_common_pars_fragment:bu,envmap_pars_fragment:Su,envmap_pars_vertex:wu,envmap_physical_pars_fragment:ku,envmap_vertex:Eu,fog_vertex:Tu,fog_pars_vertex:Ru,fog_fragment:Pu,fog_pars_fragment:Lu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Uu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:zu,lights_toon_pars_fragment:Bu,lights_phong_fragment:Hu,lights_phong_pars_fragment:Vu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Zu,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:Ku,map_fragment:Qu,map_pars_fragment:ju,map_particle_fragment:td,map_particle_pars_fragment:ed,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphinstance_vertex:sd,morphcolor_vertex:rd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:cd,normal_fragment_begin:ld,normal_fragment_maps:hd,normal_pars_fragment:ud,normal_pars_vertex:dd,normal_vertex:fd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:Ad,iridescence_pars_fragment:xd,opaque_fragment:_d,packing:vd,premultiplied_alpha_fragment:Cd,project_vertex:yd,dithering_fragment:Id,dithering_pars_fragment:Md,roughnessmap_fragment:bd,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:wd,shadowmap_pars_vertex:Ed,shadowmap_vertex:Td,shadowmask_pars_fragment:Rd,skinbase_vertex:Pd,skinning_pars_vertex:Ld,skinning_vertex:Dd,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:Fd,tonemapping_fragment:Od,tonemapping_pars_fragment:kd,transmission_fragment:zd,transmission_pars_fragment:Bd,uv_pars_fragment:Hd,uv_pars_vertex:Vd,uv_vertex:Gd,worldpos_vertex:Wd,background_vert:Xd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:$d,cube_vert:Zd,cube_frag:Jd,depth_vert:Kd,depth_frag:Qd,distanceRGBA_vert:jd,distanceRGBA_frag:tf,equirect_vert:ef,equirect_frag:nf,linedashed_vert:sf,linedashed_frag:rf,meshbasic_vert:af,meshbasic_frag:of,meshlambert_vert:cf,meshlambert_frag:lf,meshmatcap_vert:hf,meshmatcap_frag:uf,meshnormal_vert:df,meshnormal_frag:ff,meshphong_vert:pf,meshphong_frag:gf,meshphysical_vert:mf,meshphysical_frag:Af,meshtoon_vert:xf,meshtoon_frag:_f,points_vert:vf,points_frag:Cf,shadow_vert:yf,shadow_frag:If,sprite_vert:Mf,sprite_frag:bf},it={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},en={basic:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:we([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:we([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:we([it.points,it.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:we([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:we([it.common,it.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:we([it.sprite,it.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:we([it.common,it.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:we([it.lights,it.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};en.physical={uniforms:we([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Is={r:0,b:0,g:0},Xn=new an,Sf=new ne;function wf(s,t,e,n,i,r,a){let o=new kt(0),c=r===!0?0:1,l,h,d=null,f=0,p=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function A(x){let y=!1,_=m(x);_===null?u(o,c):_&&_.isColor&&(u(_,1),y=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===dr)?(h===void 0&&(h=new xe(new ti(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ri(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xn.copy(y.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sf.makeRotationFromEuler(Xn)),h.material.toneMapped=Yt.getTransfer(_.colorSpace)!==te,(d!==_||f!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,p=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new xe(new cn(2,2),new on({name:"BackgroundMaterial",uniforms:Ri(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function u(x,y){x.getRGB(Is,ll(s)),n.buffers.color.setClear(Is.r,Is.g,Is.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,u(o,c)},render:A,addToRenderList:g}}function Ef(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(C,R,B,O,G){let Z=!1,W=d(O,B,R);r!==W&&(r=W,l(r.object)),Z=p(C,O,B,G),Z&&m(C,O,B,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,_(C,R,B,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function d(C,R,B){let O=B.wireframe===!0,G=n[C.id];G===void 0&&(G={},n[C.id]=G);let Z=G[R.id];Z===void 0&&(Z={},G[R.id]=Z);let W=Z[O];return W===void 0&&(W=f(c()),Z[O]=W),W}function f(C){let R=[],B=[],O=[];for(let G=0;G<e;G++)R[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:O,object:C,attributes:{},index:null}}function p(C,R,B,O){let G=r.attributes,Z=R.attributes,W=0,j=B.getAttributes();for(let H in j)if(j[H].location>=0){let ft=G[H],It=Z[H];if(It===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(It=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(It=C.instanceColor)),ft===void 0||ft.attribute!==It||It&&ft.data!==It.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function m(C,R,B,O){let G={},Z=R.attributes,W=0,j=B.getAttributes();for(let H in j)if(j[H].location>=0){let ft=Z[H];ft===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor));let It={};It.attribute=ft,ft&&ft.data&&(It.data=ft.data),G[H]=It,W++}r.attributes=G,r.attributesNum=W,r.index=O}function A(){let C=r.newAttributes;for(let R=0,B=C.length;R<B;R++)C[R]=0}function g(C){u(C,0)}function u(C,R){let B=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;B[C]=1,O[C]===0&&(s.enableVertexAttribArray(C),O[C]=1),G[C]!==R&&(s.vertexAttribDivisor(C,R),G[C]=R)}function x(){let C=r.newAttributes,R=r.enabledAttributes;for(let B=0,O=R.length;B<O;B++)R[B]!==C[B]&&(s.disableVertexAttribArray(B),R[B]=0)}function y(C,R,B,O,G,Z,W){W===!0?s.vertexAttribIPointer(C,R,B,G,Z):s.vertexAttribPointer(C,R,B,O,G,Z)}function _(C,R,B,O){A();let G=O.attributes,Z=B.getAttributes(),W=R.defaultAttributeValues;for(let j in Z){let H=Z[j];if(H.location>=0){let rt=G[j];if(rt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(rt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(rt=C.instanceColor)),rt!==void 0){let ft=rt.normalized,It=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;let ee=zt.buffer,q=zt.type,nt=zt.bytesPerElement,vt=q===s.INT||q===s.UNSIGNED_INT||rt.gpuType===Ao;if(rt.isInterleavedBufferAttribute){let ot=rt.data,Et=ot.stride,Pt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)u(H.location+Bt,ot.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)g(H.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Bt=0;Bt<H.locationSize;Bt++)y(H.location+Bt,It/H.locationSize,q,ft,Et*nt,(Pt+It/H.locationSize*Bt)*nt,vt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)u(H.location+ot,rt.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<H.locationSize;ot++)g(H.location+ot);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ot=0;ot<H.locationSize;ot++)y(H.location+ot,It/H.locationSize,q,ft,It*nt,It/H.locationSize*ot*nt,vt)}}else if(W!==void 0){let ft=W[j];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(H.location,ft);break;case 3:s.vertexAttrib3fv(H.location,ft);break;case 4:s.vertexAttrib4fv(H.location,ft);break;default:s.vertexAttrib1fv(H.location,ft)}}}}x()}function E(){T();for(let C in n){let R=n[C];for(let B in R){let O=R[B];for(let G in O)h(O[G].object),delete O[G];delete R[B]}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let R=n[C.id];for(let B in R){let O=R[B];for(let G in O)h(O[G].object),delete O[G];delete R[B]}delete n[C.id]}function w(C){for(let R in n){let B=n[R];if(B[C.id]===void 0)continue;let O=B[C.id];for(let G in O)h(O[G].object),delete O[G];delete B[C.id]}}function T(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:g,disableUnusedAttributes:x}}function Tf(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];e.update(p,n,1)}function c(l,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let m=0;for(let A=0;A<d;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Ke&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let T=w===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Cn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==sn&&!T)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:E,maxSamples:S}}function Pf(s){let t=this,e=null,n=0,i=!1,r=!1,a=new xn,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,A=d.clipIntersection,g=d.clipShadows,u=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,y=x*4,_=u.clippingState||null;c.value=_,_=h(m,f,y,p);for(let E=0;E!==y;++E)_[E]=e[E];u.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,m){let A=d!==null?d.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let u=p+A*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let y=0,_=p;y!==A;++y,_+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Lf(s){let t=new WeakMap;function e(a,o){return o===oa?a.mapping=Si:o===ca&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===oa||o===ca)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Va(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var qs=class extends Ws{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vi=4,xc=[.125,.215,.35,.446,.526,.582],Jn=20,Xr=new qs,_c=new kt,qr=null,Yr=0,$r=0,Zr=!1,Yn=(1+Math.sqrt(5))/2,xi=1/Yn,vc=[new N(-Yn,xi,0),new N(Yn,xi,0),new N(-xi,0,Yn),new N(xi,0,Yn),new N(0,Yn,-xi),new N(0,Yn,xi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Ys=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qr,Yr,$r),this._renderer.xr.enabled=Zr,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ji,format:Ke,colorSpace:Di,depthBuffer:!1},i=Cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Df(r)),this._blurMaterial=Uf(r,t,e)}return i}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,i){let o=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(_c),h.toneMapping=Un,h.autoClear=!1;let p=new _e({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new xe(new ti,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(_c),A=!0);for(let u=0;u<6;u++){let x=u%3;x===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):x===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));let y=this._cubeSize;Ms(i,x*y,u>2?y:0,y,y),h.setRenderTarget(i),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Si||t.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ms(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vc[(i-r-1)%vc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new xe(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):Jn;g>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Jn}`);let u=[],x=0;for(let w=0;w<Jn;++w){let T=w/A,M=Math.exp(-T*T/2);u.push(M),w===0?x+=M:w<g&&(x+=2*M)}for(let w=0;w<u.length;w++)u[w]=u[w]/x;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;let _=this._sizeLods[i],E=3*_*(i>y-vi?i-y+vi:0),S=4*(this._cubeSize-_);Ms(e,E,S,3*_,2*_),c.setRenderTarget(e),c.render(d,Xr)}};function Df(s){let t=[],e=[],n=[],i=s,r=s-vi+1+xc.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>s-vi?c=xc[a-s+vi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,A=3,g=2,u=1,x=new Float32Array(A*m*p),y=new Float32Array(g*m*p),_=new Float32Array(u*m*p);for(let S=0;S<p;S++){let w=S%3*2/3-1,T=S>2?0:-1,M=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];x.set(M,A*m*S),y.set(f,g*m*S);let C=[S,S,S,S,S,S];_.set(C,u*m*S)}let E=new ve;E.setAttribute("position",new be(x,A)),E.setAttribute("uv",new be(y,g)),E.setAttribute("faceIndex",new be(_,u)),t.push(E),i>vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cc(s,t,e){let n=new yn(s,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Uf(s,t,e){let n=new Float32Array(Jn),i=new N(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function yc(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ic(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function Nf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===oa||c===ca,h=c===Si||c===wi;if(l||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ys(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ys(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ff(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Of(s,t,e,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,u=A.length;g<u;g++)t.remove(A[g])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let A=p[m];for(let g=0,u=A.length;g<u;g++)t.update(A[g],s.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,m=d.attributes.position,A=0;if(p!==null){let x=p.array;A=p.version;for(let y=0,_=x.length;y<_;y+=3){let E=x[y+0],S=x[y+1],w=x[y+2];f.push(E,S,S,w,w,E)}}else if(m!==void 0){let x=m.array;A=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){let E=y+0,S=y+1,w=y+2;f.push(E,S,S,w,w,E)}}else return;let g=new(ol(f)?Gs:Vs)(f,1);g.version=A;let u=r.get(d);u&&t.remove(u),r.set(d,g)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function kf(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,f*a,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let u=0;u<m;u++)g+=p[u];e.update(g,n,1)}function d(f,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)l(f[u]/a,p[u],A[u]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,A,0,m);let u=0;for(let x=0;x<m;x++)u+=p[x]*A[x];e.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function zf(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Bf(s,t,e){let n=new WeakMap,i=new de;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;p===!0&&(y=1),m===!0&&(y=2),A===!0&&(y=3);let _=o.attributes.position.count*y,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*E*4*d),w=new zs(S,_,E,d);w.type=sn,w.needsUpdate=!0;let T=y*4;for(let C=0;C<d;C++){let R=g[C],B=u[C],O=x[C],G=_*E*4*C;for(let Z=0;Z<R.count;Z++){let W=Z*T;p===!0&&(i.fromBufferAttribute(R,Z),S[G+W+0]=i.x,S[G+W+1]=i.y,S[G+W+2]=i.z,S[G+W+3]=0),m===!0&&(i.fromBufferAttribute(B,Z),S[G+W+4]=i.x,S[G+W+5]=i.y,S[G+W+6]=i.z,S[G+W+7]=0),A===!0&&(i.fromBufferAttribute(O,Z),S[G+W+8]=i.x,S[G+W+9]=i.y,S[G+W+10]=i.z,S[G+W+11]=O.itemSize===4?i.w:1)}}f={count:d,texture:w,size:new Lt(_,E)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let A=0;A<l.length;A++)p+=l[A];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Hf(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var $s=class extends Ne{constructor(t,e,n,i,r,a,o,c,l,h=yi){if(h!==yi&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yi&&(n=jn),n===void 0&&h===Ti&&(n=Ei),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ul=new Ne,Mc=new $s(1,1),dl=new zs,fl=new Ba,pl=new Xs,bc=[],Sc=[],wc=new Float32Array(16),Ec=new Float32Array(9),Tc=new Float32Array(4);function Ui(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=bc[i];if(r===void 0&&(r=new Float32Array(i),bc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function pr(s,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Vf(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Gf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function Wf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function Xf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function qf(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Tc.set(n),s.uniformMatrix2fv(this.addr,!1,Tc),me(e,n)}}function Yf(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Ec.set(n),s.uniformMatrix3fv(this.addr,!1,Ec),me(e,n)}}function $f(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;wc.set(n),s.uniformMatrix4fv(this.addr,!1,wc),me(e,n)}}function Zf(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Jf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Kf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Qf(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function jf(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function tp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function ep(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function np(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function ip(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Mc.compareFunction=al,r=Mc):r=ul,e.setTexture2D(t||r,i)}function sp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fl,i)}function rp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pl,i)}function ap(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dl,i)}function op(s){switch(s){case 5126:return Vf;case 35664:return Gf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return $f;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return Kf;case 35669:case 35673:return Qf;case 5125:return jf;case 36294:return tp;case 36295:return ep;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return ap}}function cp(s,t){s.uniform1fv(this.addr,t)}function lp(s,t){let e=Ui(t,this.size,2);s.uniform2fv(this.addr,e)}function hp(s,t){let e=Ui(t,this.size,3);s.uniform3fv(this.addr,e)}function up(s,t){let e=Ui(t,this.size,4);s.uniform4fv(this.addr,e)}function dp(s,t){let e=Ui(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fp(s,t){let e=Ui(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function pp(s,t){let e=Ui(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gp(s,t){s.uniform1iv(this.addr,t)}function mp(s,t){s.uniform2iv(this.addr,t)}function Ap(s,t){s.uniform3iv(this.addr,t)}function xp(s,t){s.uniform4iv(this.addr,t)}function _p(s,t){s.uniform1uiv(this.addr,t)}function vp(s,t){s.uniform2uiv(this.addr,t)}function Cp(s,t){s.uniform3uiv(this.addr,t)}function yp(s,t){s.uniform4uiv(this.addr,t)}function Ip(s,t,e){let n=this.cache,i=t.length,r=pr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ul,r[a])}function Mp(s,t,e){let n=this.cache,i=t.length,r=pr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||fl,r[a])}function bp(s,t,e){let n=this.cache,i=t.length,r=pr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||pl,r[a])}function Sp(s,t,e){let n=this.cache,i=t.length,r=pr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||dl,r[a])}function wp(s){switch(s){case 5126:return cp;case 35664:return lp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return gp;case 35667:case 35671:return mp;case 35668:case 35672:return Ap;case 35669:case 35673:return xp;case 5125:return _p;case 36294:return vp;case 36295:return Cp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Sp}}var Ga=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=op(e.type)}},Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wp(e.type)}},Xa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Jr=/(\w+)(\])?(\[|\.)?/g;function Rc(s,t){s.seq.push(t),s.map[t.id]=t}function Ep(s,t,e){let n=s.name,i=n.length;for(Jr.lastIndex=0;;){let r=Jr.exec(n),a=Jr.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Rc(e,l===void 0?new Ga(o,s,t):new Wa(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Xa(o),Rc(e,d)),e=d}}}var Mi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Ep(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Pc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Tp=37297,Rp=0;function Pp(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Lc=new Nt;function Lp(s){Yt._getMatrix(Lc,Yt.workingColorSpace,s);let t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case fr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Pp(s.getShaderSource(t),a)}else return i}function Dp(s,t){let e=Lp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Up(s,t){let e;switch(t){case sh:e="Linear";break;case rh:e="Reinhard";break;case ah:e="Cineon";break;case oh:e="ACESFilmic";break;case lh:e="AgX";break;case hh:e="Neutral";break;case ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bs=new N;function Np(){Yt.getLuminanceCoefficients(bs);let s=bs.x.toFixed(4),t=bs.y.toFixed(4),e=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Op(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kp(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Xi(s){return s!==""}function Uc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(s){return s.replace(zp,Hp)}var Bp=new Map;function Hp(s,t){let e=Ot[t];if(e===void 0){let n=Bp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qa(e)}var Vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(s){return s.replace(Vp,Gp)}function Gp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Oc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Wp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$c?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Xp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Si:case wi:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function Yp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mo:t="ENVMAP_BLENDING_MULTIPLY";break;case nh:t="ENVMAP_BLENDING_MIX";break;case ih:t="ENVMAP_BLENDING_ADD";break}return t}function $p(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zp(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Wp(e),l=Xp(e),h=qp(e),d=Yp(e),f=$p(e),p=Fp(e),m=Op(r),A=i.createProgram(),g,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xi).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xi).join(`
`),u.length>0&&(u+=`
`)):(g=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),u=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Un?Up("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Dp("linearToOutputTexel",e.outputColorSpace),Np(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),a=qa(a),a=Uc(a,e),a=Nc(a,e),o=qa(o),o=Uc(o,e),o=Nc(o,e),a=Fc(a),o=Fc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",e.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=x+g+a,_=x+u+o,E=Pc(i,i.VERTEX_SHADER,y),S=Pc(i,i.FRAGMENT_SHADER,_);i.attachShader(A,E),i.attachShader(A,S),e.index0AttributeName!==void 0?i.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function w(R){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(A).trim(),O=i.getShaderInfoLog(E).trim(),G=i.getShaderInfoLog(S).trim(),Z=!0,W=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,E,S);else{let j=Dc(i,E,"vertex"),H=Dc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+j+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||G==="")&&(W=!1);W&&(R.diagnostics={runnable:Z,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:G,prefix:u}})}i.deleteShader(E),i.deleteShader(S),T=new Mi(i,A),M=kp(i,A)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(A,Tp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rp++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=E,this.fragmentShader=S,this}var Jp=0,Ya=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $a(t),e.set(t,n)),n}},$a=class{constructor(t){this.id=Jp++,this.code=t,this.usedTimes=0}};function Kp(s,t,e,n,i,r,a){let o=new Hs,c=new Ya,l=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,C,R,B,O){let G=B.fog,Z=O.geometry,W=M.isMeshStandardMaterial?B.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),H=j&&j.mapping===dr?j.image.height:null,rt=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,It=ft!==void 0?ft.length:0,zt=0;Z.morphAttributes.position!==void 0&&(zt=1),Z.morphAttributes.normal!==void 0&&(zt=2),Z.morphAttributes.color!==void 0&&(zt=3);let ee,q,nt,vt;if(rt){let jt=en[rt];ee=jt.vertexShader,q=jt.fragmentShader}else ee=M.vertexShader,q=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),vt=c.getFragmentShaderID(M);let ot=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,Bt=O.isBatchedMesh===!0,he=!!M.map,Xt=!!M.matcap,fe=!!j,U=!!M.aoMap,Ge=!!M.lightMap,Ht=!!M.bumpMap,Vt=!!M.normalMap,bt=!!M.displacementMap,re=!!M.emissiveMap,Mt=!!M.metalnessMap,b=!!M.roughnessMap,v=M.anisotropy>0,F=M.clearcoat>0,Y=M.dispersion>0,J=M.iridescence>0,X=M.sheen>0,Ct=M.transmission>0,ct=v&&!!M.anisotropyMap,pt=F&&!!M.clearcoatMap,qt=F&&!!M.clearcoatNormalMap,Q=F&&!!M.clearcoatRoughnessMap,gt=J&&!!M.iridescenceMap,wt=J&&!!M.iridescenceThicknessMap,Tt=X&&!!M.sheenColorMap,mt=X&&!!M.sheenRoughnessMap,Gt=!!M.specularMap,Ft=!!M.specularColorMap,ie=!!M.specularIntensityMap,P=Ct&&!!M.transmissionMap,at=Ct&&!!M.thicknessMap,V=!!M.gradientMap,$=!!M.alphaMap,ut=M.alphaTest>0,lt=!!M.alphaHash,Dt=!!M.extensions,ue=Un;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=s.toneMapping);let ye={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:q,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Di,alphaToCoverage:!!M.alphaToCoverage,map:he,matcap:Xt,envMap:fe,envMapMode:fe&&j.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Ge,bumpMap:Ht,normalMap:Vt,displacementMap:f&&bt,emissiveMap:re,normalMapObjectSpace:Vt&&M.normalMapType===ph,normalMapTangentSpace:Vt&&M.normalMapType===rl,metalnessMap:Mt,roughnessMap:b,anisotropy:v,anisotropyMap:ct,clearcoat:F,clearcoatMap:pt,clearcoatNormalMap:qt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:J,iridescenceMap:gt,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Tt,sheenRoughnessMap:mt,specularMap:Gt,specularColorMap:Ft,specularIntensityMap:ie,transmission:Ct,transmissionMap:P,thicknessMap:at,gradientMap:V,opaque:M.transparent===!1&&M.blending===Ci&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:ut,alphaHash:lt,combine:M.combine,mapUv:he&&A(M.map.channel),aoMapUv:U&&A(M.aoMap.channel),lightMapUv:Ge&&A(M.lightMap.channel),bumpMapUv:Ht&&A(M.bumpMap.channel),normalMapUv:Vt&&A(M.normalMap.channel),displacementMapUv:bt&&A(M.displacementMap.channel),emissiveMapUv:re&&A(M.emissiveMap.channel),metalnessMapUv:Mt&&A(M.metalnessMap.channel),roughnessMapUv:b&&A(M.roughnessMap.channel),anisotropyMapUv:ct&&A(M.anisotropyMap.channel),clearcoatMapUv:pt&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:qt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&A(M.sheenRoughnessMap.channel),specularMapUv:Gt&&A(M.specularMap.channel),specularColorMapUv:Ft&&A(M.specularColorMap.channel),specularIntensityMapUv:ie&&A(M.specularIntensityMap.channel),transmissionMapUv:P&&A(M.transmissionMap.channel),thicknessMapUv:at&&A(M.thicknessMap.channel),alphaMapUv:$&&A(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Vt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(he||$),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Et,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:zt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===te,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Dt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&M.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function u(M){let C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)C.push(R),C.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(x(C,M),y(C,M),C.push(s.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function x(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reverseDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){let C=m[M.type],R;if(C){let B=en[C];R=Bh.clone(B.uniforms)}else R=M.uniforms;return R}function E(M,C){let R;for(let B=0,O=h.length;B<O;B++){let G=h[B];if(G.cacheKey===C){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Zp(s,C,M,r),h.push(R)),R}function S(M){if(--M.usedTimes===0){let C=h.indexOf(M);h[C]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:_,acquireProgram:E,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:T}}function Qp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function jp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function kc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function zc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,p,m,A,g){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:A,group:g},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=m,u.renderOrder=d.renderOrder,u.z=A,u.group=g),t++,u}function o(d,f,p,m,A,g){let u=a(d,f,p,m,A,g);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):e.push(u)}function c(d,f,p,m,A,g){let u=a(d,f,p,m,A,g);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||jp),n.length>1&&n.sort(f||kc),i.length>1&&i.sort(f||kc)}function h(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function tg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new zc,s.set(n,[a])):i>=r.length?(a=new zc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function eg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new kt};break;case"SpotLight":e={position:new N,direction:new N,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function ng(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ig=0;function sg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function rg(s){let t=new eg,e=ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let i=new N,r=new ne,a=new ne;function o(l){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,A=0,g=0,u=0,x=0,y=0,_=0,E=0,S=0,w=0;l.sort(sg);for(let M=0,C=l.length;M<C;M++){let R=l[M],B=R.color,O=R.intensity,G=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*O,d+=B.g*O,f+=B.b*O;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],O);w++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=R.shadow.matrix,x++}n.directional[p]=W,p++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(B).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[A]=W;let j=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,j.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[A]=j.matrix,R.castShadow){let H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[A]=H,n.spotShadowMap[A]=Z,_++}A++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(B).multiplyScalar(O),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=W,g++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=R.shadow.matrix,y++}n.point[m]=W,m++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(O),W.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[u]=W,u++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==p||T.pointLength!==m||T.spotLength!==A||T.rectAreaLength!==g||T.hemiLength!==u||T.numDirectionalShadows!==x||T.numPointShadows!==y||T.numSpotShadows!==_||T.numSpotMaps!==E||T.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=u,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,T.directionalLength=p,T.pointLength=m,T.spotLength=A,T.rectAreaLength=g,T.hemiLength=u,T.numDirectionalShadows=x,T.numPointShadows=y,T.numSpotShadows=_,T.numSpotMaps=E,T.numLightProbes=w,n.version=ig++)}function c(l,h){let d=0,f=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let u=0,x=l.length;u<x;u++){let y=l[u];if(y.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(y.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let _=n.hemi[A];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function Bc(s){let t=new rg(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ag(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Bc(s),t.set(i,[o])):r>=a.length?(o=new Bc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Za=class extends kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ja=class extends kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
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
}`;function lg(s,t,e){let n=new Zi,i=new Lt,r=new Lt,a=new de,o=new Za({depthPacking:fh}),c=new Ja,l={},h=e.maxTextureSize,d={[Nn]:Ue,[Ue]:Nn,[He]:He},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:og,fragmentShader:cg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ve;m.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new xe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let u=this.type;this.render=function(S,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let M=s.getRenderTarget(),C=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Dn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=u!==An&&this.type===An,G=u===An&&this.type!==An;for(let Z=0,W=S.length;Z<W;Z++){let j=S[Z],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let rt=H.getFrameExtents();if(i.multiply(rt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||O===!0||G===!0){let It=this.type!==An?{minFilter:Ve,magFilter:Ve}:{};H.map!==null&&H.map.dispose(),H.map=new yn(i.x,i.y,It),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ft=H.getViewportCount();for(let It=0;It<ft;It++){let zt=H.getViewport(It);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),B.viewport(a),H.updateMatrices(j,It),n=H.getFrustum(),_(w,T,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===An&&x(H,T),H.needsUpdate=!1}u=this.type,g.needsUpdate=!1,s.setRenderTarget(M,C,R)};function x(S,w){let T=t.update(A);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new yn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,T,f,A,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,T,p,A,null)}function y(S,w,T,M){let C=null,R=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)C=R;else if(C=T.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let B=C.uuid,O=w.uuid,G=l[B];G===void 0&&(G={},l[B]=G);let Z=G[O];Z===void 0&&(Z=C.clone(),G[O]=Z,w.addEventListener("dispose",E)),C=Z}if(C.visible=w.visible,C.wireframe=w.wireframe,M===An?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=s.properties.get(C);B.light=T}return C}function _(S,w,T,M,C){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===An)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let O=t.update(S),G=S.material;if(Array.isArray(G)){let Z=O.groups;for(let W=0,j=Z.length;W<j;W++){let H=Z[W],rt=G[H.materialIndex];if(rt&&rt.visible){let ft=y(S,rt,M,C);S.onBeforeShadow(s,S,w,T,O,ft,H),s.renderBufferDirect(T,null,O,ft,S,H),S.onAfterShadow(s,S,w,T,O,ft,H)}}}else if(G.visible){let Z=y(S,G,M,C);S.onBeforeShadow(s,S,w,T,O,Z,null),s.renderBufferDirect(T,null,O,Z,S,null),S.onAfterShadow(s,S,w,T,O,Z,null)}}let B=S.children;for(let O=0,G=B.length;O<G;O++)_(B[O],w,T,M,C)}function E(S){S.target.removeEventListener("dispose",E);for(let T in l){let M=l[T],C=S.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}var hg={[ta]:ea,[na]:ra,[ia]:aa,[bi]:sa,[ea]:ta,[ra]:na,[aa]:ia,[sa]:bi};function ug(s,t){function e(){let P=!1,at=new de,V=null,$=new de(0,0,0,0);return{setMask:function(ut){V!==ut&&!P&&(s.colorMask(ut,ut,ut,ut),V=ut)},setLocked:function(ut){P=ut},setClear:function(ut,lt,Dt,ue,ye){ye===!0&&(ut*=ue,lt*=ue,Dt*=ue),at.set(ut,lt,Dt,ue),$.equals(at)===!1&&(s.clearColor(ut,lt,Dt,ue),$.copy(at))},reset:function(){P=!1,V=null,$.set(-1,0,0,0)}}}function n(){let P=!1,at=!1,V=null,$=null,ut=null;return{setReversed:function(lt){if(at!==lt){let Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let ue=ut;ut=null,this.setClear(ue)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?ot(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(lt){V!==lt&&!P&&(s.depthMask(lt),V=lt)},setFunc:function(lt){if(at&&(lt=hg[lt]),$!==lt){switch(lt){case ta:s.depthFunc(s.NEVER);break;case ea:s.depthFunc(s.ALWAYS);break;case na:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case ia:s.depthFunc(s.EQUAL);break;case sa:s.depthFunc(s.GEQUAL);break;case ra:s.depthFunc(s.GREATER);break;case aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=lt}},setLocked:function(lt){P=lt},setClear:function(lt){ut!==lt&&(at&&(lt=1-lt),s.clearDepth(lt),ut=lt)},reset:function(){P=!1,V=null,$=null,ut=null,at=!1}}}function i(){let P=!1,at=null,V=null,$=null,ut=null,lt=null,Dt=null,ue=null,ye=null;return{setTest:function(jt){P||(jt?ot(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(jt){at!==jt&&!P&&(s.stencilMask(jt),at=jt)},setFunc:function(jt,qe,hn){(V!==jt||$!==qe||ut!==hn)&&(s.stencilFunc(jt,qe,hn),V=jt,$=qe,ut=hn)},setOp:function(jt,qe,hn){(lt!==jt||Dt!==qe||ue!==hn)&&(s.stencilOp(jt,qe,hn),lt=jt,Dt=qe,ue=hn)},setLocked:function(jt){P=jt},setClear:function(jt){ye!==jt&&(s.clearStencil(jt),ye=jt)},reset:function(){P=!1,at=null,V=null,$=null,ut=null,lt=null,Dt=null,ue=null,ye=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,p=[],m=null,A=!1,g=null,u=null,x=null,y=null,_=null,E=null,S=null,w=new kt(0,0,0),T=0,M=!1,C=null,R=null,B=null,O=null,G=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=j>=2);let rt=null,ft={},It=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),ee=new de().fromArray(It),q=new de().fromArray(zt);function nt(P,at,V,$){let ut=new Uint8Array(4),lt=s.createTexture();s.bindTexture(P,lt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<V;Dt++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(at+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return lt}let vt={};vt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(s.DEPTH_TEST),a.setFunc(bi),Ht(!1),Vt(Vo),ot(s.CULL_FACE),U(Dn);function ot(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function Et(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function Pt(P,at){return d[P]!==at?(s.bindFramebuffer(P,at),d[P]=at,P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Bt(P,at){let V=p,$=!1;if(P){V=f.get(at),V===void 0&&(V=[],f.set(at,V));let ut=P.textures;if(V.length!==ut.length||V[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Dt=ut.length;lt<Dt;lt++)V[lt]=s.COLOR_ATTACHMENT0+lt;V.length=ut.length,$=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,$=!0);$&&s.drawBuffers(V)}function he(P){return m!==P?(s.useProgram(P),m=P,!0):!1}let Xt={[$n]:s.FUNC_ADD,[zl]:s.FUNC_SUBTRACT,[Bl]:s.FUNC_REVERSE_SUBTRACT};Xt[Hl]=s.MIN,Xt[Vl]=s.MAX;let fe={[Gl]:s.ZERO,[Wl]:s.ONE,[Xl]:s.SRC_COLOR,[Qr]:s.SRC_ALPHA,[Kl]:s.SRC_ALPHA_SATURATE,[Zl]:s.DST_COLOR,[Yl]:s.DST_ALPHA,[ql]:s.ONE_MINUS_SRC_COLOR,[jr]:s.ONE_MINUS_SRC_ALPHA,[Jl]:s.ONE_MINUS_DST_COLOR,[$l]:s.ONE_MINUS_DST_ALPHA,[Ql]:s.CONSTANT_COLOR,[jl]:s.ONE_MINUS_CONSTANT_COLOR,[th]:s.CONSTANT_ALPHA,[eh]:s.ONE_MINUS_CONSTANT_ALPHA};function U(P,at,V,$,ut,lt,Dt,ue,ye,jt){if(P===Dn){A===!0&&(Et(s.BLEND),A=!1);return}if(A===!1&&(ot(s.BLEND),A=!0),P!==kl){if(P!==g||jt!==M){if((u!==$n||_!==$n)&&(s.blendEquation(s.FUNC_ADD),u=$n,_=$n),jt)switch(P){case Ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.ONE,s.ONE);break;case Wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,y=null,E=null,S=null,w.set(0,0,0),T=0,g=P,M=jt}return}ut=ut||at,lt=lt||V,Dt=Dt||$,(at!==u||ut!==_)&&(s.blendEquationSeparate(Xt[at],Xt[ut]),u=at,_=ut),(V!==x||$!==y||lt!==E||Dt!==S)&&(s.blendFuncSeparate(fe[V],fe[$],fe[lt],fe[Dt]),x=V,y=$,E=lt,S=Dt),(ue.equals(w)===!1||ye!==T)&&(s.blendColor(ue.r,ue.g,ue.b,ye),w.copy(ue),T=ye),g=P,M=!1}function Ge(P,at){P.side===He?Et(s.CULL_FACE):ot(s.CULL_FACE);let V=P.side===Ue;at&&(V=!V),Ht(V),P.blending===Ci&&P.transparent===!1?U(Dn):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(P){C!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),C=P)}function Vt(P){P!==Nl?(ot(s.CULL_FACE),P!==R&&(P===Vo?s.cullFace(s.BACK):P===Fl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),R=P}function bt(P){P!==B&&(W&&s.lineWidth(P),B=P)}function re(P,at,V){P?(ot(s.POLYGON_OFFSET_FILL),(O!==at||G!==V)&&(s.polygonOffset(at,V),O=at,G=V)):Et(s.POLYGON_OFFSET_FILL)}function Mt(P){P?ot(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function b(P){P===void 0&&(P=s.TEXTURE0+Z-1),rt!==P&&(s.activeTexture(P),rt=P)}function v(P,at,V){V===void 0&&(rt===null?V=s.TEXTURE0+Z-1:V=rt);let $=ft[V];$===void 0&&($={type:void 0,texture:void 0},ft[V]=$),($.type!==P||$.texture!==at)&&(rt!==V&&(s.activeTexture(V),rt=V),s.bindTexture(P,at||vt[P]),$.type=P,$.texture=at)}function F(){let P=ft[rt];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(P){ee.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function mt(P){q.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Gt(P,at){let V=l.get(at);V===void 0&&(V=new WeakMap,l.set(at,V));let $=V.get(P);$===void 0&&($=s.getUniformBlockIndex(at,P.name),V.set(P,$))}function Ft(P,at){let $=l.get(at).get(P);c.get(at)!==$&&(s.uniformBlockBinding(at,$,P.__bindingPointIndex),c.set(at,$))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ft={},d={},f=new WeakMap,p=[],m=null,A=!1,g=null,u=null,x=null,y=null,_=null,E=null,S=null,w=new kt(0,0,0),T=0,M=!1,C=null,R=null,B=null,O=null,G=null,ee.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Et,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:he,setBlending:U,setMaterial:Ge,setFlipSided:Ht,setCullFace:Vt,setLineWidth:bt,setPolygonOffset:re,setScissorTest:Mt,activeTexture:b,bindTexture:v,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:gt,texImage3D:wt,updateUBOMapping:Gt,uniformBlockBinding:Ft,texStorage2D:qt,texStorage3D:Q,texSubImage2D:X,texSubImage3D:Ct,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Tt,viewport:mt,reset:ie}}function Hc(s,t,e,n){let i=dg(n);switch(e){case jc:return s*t;case el:return s*t;case nl:return s*t*2;case vo:return s*t/i.components*i.byteLength;case Co:return s*t/i.components*i.byteLength;case il:return s*t*2/i.components*i.byteLength;case yo:return s*t*2/i.components*i.byteLength;case tl:return s*t*3/i.components*i.byteLength;case Ke:return s*t*4/i.components*i.byteLength;case Io:return s*t*4/i.components*i.byteLength;case Rs:case Ps:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Ds:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(s,16)*Math.max(t,8)/4;case ha:case da:return Math.max(s,8)*Math.max(t,8)/2;case pa:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Us:case Pa:case La:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sl:case Da:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ua:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(s){switch(s){case Cn:case Jc:return{byteLength:1,components:1};case $i:case Kc:case ji:return{byteLength:2,components:1};case xo:case _o:return{byteLength:2,components:4};case jn:case Ao:case sn:return{byteLength:4,components:1};case Qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function fg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,v){return p?new OffscreenCanvas(b,v):Os("canvas")}function A(b,v,F){let Y=1,J=Mt(b);if((J.width>F||J.height>F)&&(Y=F/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let X=Math.floor(Y*J.width),Ct=Math.floor(Y*J.height);d===void 0&&(d=m(X,Ct));let ct=v?m(X,Ct):d;return ct.width=X,ct.height=Ct,ct.getContext("2d").drawImage(b,0,0,X,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Ct+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function g(b){return b.generateMipmaps}function u(b){s.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(b,v,F,Y,J=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===s.RED&&(F===s.FLOAT&&(X=s.R32F),F===s.HALF_FLOAT&&(X=s.R16F),F===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.R8UI),F===s.UNSIGNED_SHORT&&(X=s.R16UI),F===s.UNSIGNED_INT&&(X=s.R32UI),F===s.BYTE&&(X=s.R8I),F===s.SHORT&&(X=s.R16I),F===s.INT&&(X=s.R32I)),v===s.RG&&(F===s.FLOAT&&(X=s.RG32F),F===s.HALF_FLOAT&&(X=s.RG16F),F===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RG8UI),F===s.UNSIGNED_SHORT&&(X=s.RG16UI),F===s.UNSIGNED_INT&&(X=s.RG32UI),F===s.BYTE&&(X=s.RG8I),F===s.SHORT&&(X=s.RG16I),F===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RGB8UI),F===s.UNSIGNED_SHORT&&(X=s.RGB16UI),F===s.UNSIGNED_INT&&(X=s.RGB32UI),F===s.BYTE&&(X=s.RGB8I),F===s.SHORT&&(X=s.RGB16I),F===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),F===s.UNSIGNED_INT&&(X=s.RGBA32UI),F===s.BYTE&&(X=s.RGBA8I),F===s.SHORT&&(X=s.RGBA16I),F===s.INT&&(X=s.RGBA32I)),v===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),v===s.RGBA){let Ct=J?fr:Yt.getTransfer(Y);F===s.FLOAT&&(X=s.RGBA32F),F===s.HALF_FLOAT&&(X=s.RGBA16F),F===s.UNSIGNED_BYTE&&(X=Ct===te?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(b,v){let F;return b?v===null||v===jn||v===Ei?F=s.DEPTH24_STENCIL8:v===sn?F=s.DEPTH32F_STENCIL8:v===$i&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===jn||v===Ei?F=s.DEPTH_COMPONENT24:v===sn?F=s.DEPTH_COMPONENT32F:v===$i&&(F=s.DEPTH_COMPONENT16),F}function E(b,v){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ve&&b.minFilter!==nn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function S(b){let v=b.target;v.removeEventListener("dispose",S),T(v),v.isVideoTexture&&h.delete(v)}function w(b){let v=b.target;v.removeEventListener("dispose",w),C(v)}function T(b){let v=n.get(b);if(v.__webglInit===void 0)return;let F=b.source,Y=f.get(F);if(Y){let J=Y[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(b),Object.keys(Y).length===0&&f.delete(F)}n.remove(b)}function M(b){let v=n.get(b);s.deleteTexture(v.__webglTexture);let F=b.source,Y=f.get(F);delete Y[v.__cacheKey],a.memory.textures--}function C(b){let v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let J=0;J<v.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=b.textures;for(let Y=0,J=F.length;Y<J;Y++){let X=n.get(F[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(b)}let R=0;function B(){R=0}function O(){let b=R;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),R+=1,b}function G(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){let F=n.get(b);if(b.isVideoTexture&&bt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,v);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function W(b,v){let F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function j(b,v){let F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,v);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function H(b,v){let F=n.get(b);if(b.version>0&&F.__version!==b.version){nt(F,b,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}let rt={[Yi]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[la]:s.MIRRORED_REPEAT},ft={[Ve]:s.NEAREST,[uh]:s.NEAREST_MIPMAP_NEAREST,[rs]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[Cr]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},It={[gh]:s.NEVER,[Ch]:s.ALWAYS,[mh]:s.LESS,[al]:s.LEQUAL,[Ah]:s.EQUAL,[vh]:s.GEQUAL,[xh]:s.GREATER,[_h]:s.NOTEQUAL};function zt(b,v){if(v.type===sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===nn||v.magFilter===Cr||v.magFilter===rs||v.magFilter===Qn||v.minFilter===nn||v.minFilter===Cr||v.minFilter===rs||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,rt[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,rt[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,rt[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ft[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ft[v.minFilter]),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,It[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ve||v.minFilter!==rs&&v.minFilter!==Qn||v.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",S));let Y=v.source,J=f.get(Y);J===void 0&&(J={},f.set(Y,J));let X=G(v);if(X!==b.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[X].usedTimes++;let Ct=J[b.__cacheKey];Ct!==void 0&&(J[b.__cacheKey].usedTimes--,Ct.usedTimes===0&&M(v)),b.__cacheKey=X,b.__webglTexture=J[X].texture}return F}function q(b,v,F){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);let J=ee(b,v),X=v.source;e.bindTexture(Y,b.__webglTexture,s.TEXTURE0+F);let Ct=n.get(X);if(X.version!==Ct.__version||J===!0){e.activeTexture(s.TEXTURE0+F);let ct=Yt.getPrimaries(Yt.workingColorSpace),pt=v.colorSpace===Ln?null:Yt.getPrimaries(v.colorSpace),qt=v.colorSpace===Ln||ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Q=A(v.image,!1,i.maxTextureSize);Q=re(v,Q);let gt=r.convert(v.format,v.colorSpace),wt=r.convert(v.type),Tt=y(v.internalFormat,gt,wt,v.colorSpace,v.isVideoTexture);zt(Y,v);let mt,Gt=v.mipmaps,Ft=v.isVideoTexture!==!0,ie=Ct.__version===void 0||J===!0,P=X.dataReady,at=E(v,Q);if(v.isDepthTexture)Tt=_(v.format===Ti,v.type),ie&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Tt,Q.width,Q.height,0,gt,wt,null));else if(v.isDataTexture)if(Gt.length>0){Ft&&ie&&e.texStorage2D(s.TEXTURE_2D,at,Tt,Gt[0].width,Gt[0].height);for(let V=0,$=Gt.length;V<$;V++)mt=Gt[V],Ft?P&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,mt.width,mt.height,gt,wt,mt.data):e.texImage2D(s.TEXTURE_2D,V,Tt,mt.width,mt.height,0,gt,wt,mt.data);v.generateMipmaps=!1}else Ft?(ie&&e.texStorage2D(s.TEXTURE_2D,at,Tt,Q.width,Q.height),P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,gt,wt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,Q.width,Q.height,0,gt,wt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ft&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Tt,Gt[0].width,Gt[0].height,Q.depth);for(let V=0,$=Gt.length;V<$;V++)if(mt=Gt[V],v.format!==Ke)if(gt!==null)if(Ft){if(P)if(v.layerUpdates.size>0){let ut=Hc(mt.width,mt.height,v.format,v.type);for(let lt of v.layerUpdates){let Dt=mt.data.subarray(lt*ut/mt.data.BYTES_PER_ELEMENT,(lt+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,lt,mt.width,mt.height,1,gt,Dt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,Q.depth,gt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Tt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?P&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,Q.depth,gt,wt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,Tt,mt.width,mt.height,Q.depth,0,gt,wt,mt.data)}else{Ft&&ie&&e.texStorage2D(s.TEXTURE_2D,at,Tt,Gt[0].width,Gt[0].height);for(let V=0,$=Gt.length;V<$;V++)mt=Gt[V],v.format!==Ke?gt!==null?Ft?P&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,mt.width,mt.height,gt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,Tt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?P&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,mt.width,mt.height,gt,wt,mt.data):e.texImage2D(s.TEXTURE_2D,V,Tt,mt.width,mt.height,0,gt,wt,mt.data)}else if(v.isDataArrayTexture)if(Ft){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Tt,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){let V=Hc(Q.width,Q.height,v.format,v.type);for(let $ of v.layerUpdates){let ut=Q.data.subarray($*V/Q.data.BYTES_PER_ELEMENT,($+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,gt,wt,ut)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,gt,wt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,gt,wt,Q.data);else if(v.isData3DTexture)Ft?(ie&&e.texStorage3D(s.TEXTURE_3D,at,Tt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,gt,wt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,gt,wt,Q.data);else if(v.isFramebufferTexture){if(ie)if(Ft)e.texStorage2D(s.TEXTURE_2D,at,Tt,Q.width,Q.height);else{let V=Q.width,$=Q.height;for(let ut=0;ut<at;ut++)e.texImage2D(s.TEXTURE_2D,ut,Tt,V,$,0,gt,wt,null),V>>=1,$>>=1}}else if(Gt.length>0){if(Ft&&ie){let V=Mt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,at,Tt,V.width,V.height)}for(let V=0,$=Gt.length;V<$;V++)mt=Gt[V],Ft?P&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,gt,wt,mt):e.texImage2D(s.TEXTURE_2D,V,Tt,gt,wt,mt);v.generateMipmaps=!1}else if(Ft){if(ie){let V=Mt(Q);e.texStorage2D(s.TEXTURE_2D,at,Tt,V.width,V.height)}P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,wt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Tt,gt,wt,Q);g(v)&&u(Y),Ct.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function nt(b,v,F){if(v.image.length!==6)return;let Y=ee(b,v),J=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+F);let X=n.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(s.TEXTURE0+F);let Ct=Yt.getPrimaries(Yt.workingColorSpace),ct=v.colorSpace===Ln?null:Yt.getPrimaries(v.colorSpace),pt=v.colorSpace===Ln||Ct===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let qt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let $=0;$<6;$++)!qt&&!Q?gt[$]=A(v.image[$],!0,i.maxCubemapSize):gt[$]=Q?v.image[$].image:v.image[$],gt[$]=re(v,gt[$]);let wt=gt[0],Tt=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),Gt=y(v.internalFormat,Tt,mt,v.colorSpace),Ft=v.isVideoTexture!==!0,ie=X.__version===void 0||Y===!0,P=J.dataReady,at=E(v,wt);zt(s.TEXTURE_CUBE_MAP,v);let V;if(qt){Ft&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Gt,wt.width,wt.height);for(let $=0;$<6;$++){V=gt[$].mipmaps;for(let ut=0;ut<V.length;ut++){let lt=V[ut];v.format!==Ke?Tt!==null?Ft?P&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,lt.width,lt.height,Tt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,Gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,lt.width,lt.height,Tt,mt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,Gt,lt.width,lt.height,0,Tt,mt,lt.data)}}}else{if(V=v.mipmaps,Ft&&ie){V.length>0&&at++;let $=Mt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Gt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){Ft?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,gt[$].width,gt[$].height,Tt,mt,gt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,gt[$].width,gt[$].height,0,Tt,mt,gt[$].data);for(let ut=0;ut<V.length;ut++){let Dt=V[ut].image[$].image;Ft?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,Dt.width,Dt.height,Tt,mt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,Gt,Dt.width,Dt.height,0,Tt,mt,Dt.data)}}else{Ft?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Tt,mt,gt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,Tt,mt,gt[$]);for(let ut=0;ut<V.length;ut++){let lt=V[ut];Ft?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,Tt,mt,lt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,Gt,Tt,mt,lt.image[$])}}}g(v)&&u(s.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function vt(b,v,F,Y,J,X){let Ct=r.convert(F.format,F.colorSpace),ct=r.convert(F.type),pt=y(F.internalFormat,Ct,ct,F.colorSpace),qt=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!qt.__hasExternalTextures){let gt=Math.max(1,v.width>>X),wt=Math.max(1,v.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,X,pt,gt,wt,v.depth,0,Ct,ct,null):e.texImage2D(J,X,pt,gt,wt,0,Ct,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Vt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,Q.__webglTexture,0,Ht(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,Q.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(b,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer){let Y=v.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=_(v.stencilBuffer,J),Ct=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=Ht(v);Vt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,X,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,b)}else{let Y=v.textures;for(let J=0;J<Y.length;J++){let X=Y[J],Ct=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),pt=y(X.internalFormat,Ct,ct,X.colorSpace),qt=Ht(v);F&&Vt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,pt,v.width,v.height):Vt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,pt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,pt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let J=Y.__webglTexture,X=Ht(v);if(v.depthTexture.format===yi)Vt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===Ti)Vt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pt(b){let v=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Y}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Et(v.__webglFramebuffer,b)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),ot(v.__webglDepthbuffer[Y],b,!1);else{let J=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ot(v.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(b,v,F){let Y=n.get(b);v!==void 0&&vt(Y.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Pt(b)}function he(b){let v=b.texture,F=n.get(b),Y=n.get(v);b.addEventListener("dispose",w);let J=b.textures,X=b.isWebGLCubeRenderTarget===!0,Ct=J.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let pt=0;pt<v.mipmaps.length;pt++)F.__webglFramebuffer[ct][pt]=s.createFramebuffer()}else F.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)F.__webglFramebuffer[ct]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let ct=0,pt=J.length;ct<pt;ct++){let qt=n.get(J[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Vt(b)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){let pt=J[ct];F.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);let qt=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),gt=y(pt.internalFormat,qt,Q,pt.colorSpace,b.isXRRenderTarget===!0),wt=Ht(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,gt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(s.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)vt(F.__webglFramebuffer[ct][pt],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else vt(F.__webglFramebuffer[ct],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(v)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ct=0,pt=J.length;ct<pt;ct++){let qt=J[ct],Q=n.get(qt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),zt(s.TEXTURE_2D,qt),vt(F.__webglFramebuffer,b,qt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),g(qt)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Y.__webglTexture),zt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)vt(F.__webglFramebuffer[pt],b,v,s.COLOR_ATTACHMENT0,ct,pt);else vt(F.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,ct,0);g(v)&&u(ct),e.unbindTexture()}b.depthBuffer&&Pt(b)}function Xt(b){let v=b.textures;for(let F=0,Y=v.length;F<Y;F++){let J=v[F];if(g(J)){let X=x(b),Ct=n.get(J).__webglTexture;e.bindTexture(X,Ct),u(X),e.unbindTexture()}}}let fe=[],U=[];function Ge(b){if(b.samples>0){if(Vt(b)===!1){let v=b.textures,F=b.width,Y=b.height,J=s.COLOR_BUFFER_BIT,X=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(b),ct=v.length>1;if(ct)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[pt]);let qt=n.get(v[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,F,Y,0,0,F,Y,J,s.NEAREST),c===!0&&(fe.length=0,U.length=0,fe.push(s.COLOR_ATTACHMENT0+pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(fe.push(X),U.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[pt]);let qt=n.get(v[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let v=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ht(b){return Math.min(i.maxSamples,b.samples)}function Vt(b){let v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(b){let v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function re(b,v){let F=b.colorSpace,Y=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Di&&F!==Ln&&(Yt.getTransfer(F)===te?(Y!==Ke||J!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Mt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Vt}function pg(s,t){function e(n,i=Ln){let r,a=Yt.getTransfer(i);if(n===Cn)return s.UNSIGNED_BYTE;if(n===xo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return s.BYTE;if(n===Kc)return s.SHORT;if(n===$i)return s.UNSIGNED_SHORT;if(n===Ao)return s.INT;if(n===jn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===ji)return s.HALF_FLOAT;if(n===jc)return s.ALPHA;if(n===tl)return s.RGB;if(n===Ke)return s.RGBA;if(n===el)return s.LUMINANCE;if(n===nl)return s.LUMINANCE_ALPHA;if(n===yi)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===vo)return s.RED;if(n===Co)return s.RED_INTEGER;if(n===il)return s.RG;if(n===yo)return s.RG_INTEGER;if(n===Io)return s.RGBA_INTEGER;if(n===Rs||n===Ps||n===Ls||n===Ds)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ga||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ga)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===xa||n===_a||n===va||n===Ca||n===ya||n===Ia||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===Pa||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Us)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===Da||n===Ua||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ka=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),u=this._getHandJoint(l,A);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`,Qa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ne,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:mg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ja=class extends Fn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,m=null,A=new Qa,g=e.getContextAttributes(),u=null,x=null,y=[],_=[],E=new Lt,S=null,w=new Re;w.viewport=new de;let T=new Re;T.viewport=new de;let M=[w,T],C=new Ka,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=y[q];return nt===void 0&&(nt=new qi,y[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=y[q];return nt===void 0&&(nt=new qi,y[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=y[q];return nt===void 0&&(nt=new qi,y[q]=nt),nt.getHandSpace()};function O(q){let nt=_.indexOf(q.inputSource);if(nt===-1)return;let vt=y[nt];vt!==void 0&&(vt.update(q.inputSource,q.frame,l||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Z);for(let q=0;q<y.length;q++){let nt=_[q];nt!==null&&(_[q]=null,y[q].disconnect(nt))}R=null,B=null,A.reset(),t.setRenderTarget(u),p=null,f=null,d=null,i=null,x=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new yn(p.framebufferWidth,p.framebufferHeight,{format:Ke,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,vt=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Ti:yi,vt=g.stencil?Ei:jn);let Et={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(Et),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new yn(f.textureWidth,f.textureHeight,{format:Ke,type:Cn,depthTexture:new $s(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Z(q){for(let nt=0;nt<q.removed.length;nt++){let vt=q.removed[nt],ot=_.indexOf(vt);ot>=0&&(_[ot]=null,y[ot].disconnect(vt))}for(let nt=0;nt<q.added.length;nt++){let vt=q.added[nt],ot=_.indexOf(vt);if(ot===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=_.length){_.push(vt),ot=Pt;break}else if(_[Pt]===null){_[Pt]=vt,ot=Pt;break}if(ot===-1)break}let Et=y[ot];Et&&Et.connect(vt)}}let W=new N,j=new N;function H(q,nt,vt){W.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let ot=W.distanceTo(j),Et=nt.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,Bt=Et[14]/(Et[10]-1),he=Et[14]/(Et[10]+1),Xt=(Et[9]+1)/Et[5],fe=(Et[9]-1)/Et[5],U=(Et[8]-1)/Et[0],Ge=(Pt[8]+1)/Pt[0],Ht=Bt*U,Vt=Bt*Ge,bt=ot/(-U+Ge),re=bt*-U;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Et[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Mt=Bt+bt,b=he+bt,v=Ht-re,F=Vt+(ot-re),Y=Xt*he/b*Mt,J=fe*he/b*Mt;q.projectionMatrix.makePerspective(v,F,Y,J,Mt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let nt=q.near,vt=q.far;A.texture!==null&&(A.depthNear>0&&(nt=A.depthNear),A.depthFar>0&&(vt=A.depthFar)),C.near=T.near=w.near=nt,C.far=T.far=w.far=vt,(R!==C.near||B!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,B=C.far),w.layers.mask=q.layers.mask|2,T.layers.mask=q.layers.mask|4,C.layers.mask=w.layers.mask|T.layers.mask;let ot=q.parent,Et=C.cameras;rt(C,ot);for(let Pt=0;Pt<Et.length;Pt++)rt(Et[Pt],ot);Et.length===2?H(C,w,T):C.projectionMatrix.copy(w.projectionMatrix),ft(q,C,ot)};function ft(q,nt,vt){vt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let It=null;function zt(q,nt){if(h=nt.getViewerPose(l||a),m=nt,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let ot=!1;vt.length!==C.cameras.length&&(C.cameras.length=0,ot=!0);for(let Pt=0;Pt<vt.length;Pt++){let Bt=vt[Pt],he=null;if(p!==null)he=p.getViewport(Bt);else{let fe=d.getViewSubImage(f,Bt);he=fe.viewport,Pt===0&&(t.setRenderTargetTextures(x,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(x))}let Xt=M[Pt];Xt===void 0&&(Xt=new Re,Xt.layers.enable(Pt),Xt.viewport=new de,M[Pt]=Xt),Xt.matrix.fromArray(Bt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Bt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(C.matrix.copy(Xt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ot===!0&&C.cameras.push(Xt)}let Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Pt=d.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&A.init(t,Pt,i.renderState)}}for(let vt=0;vt<y.length;vt++){let ot=_[vt],Et=y[vt];ot!==null&&Et!==void 0&&Et.update(ot,nt,l||a)}It&&It(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let ee=new hl;ee.setAnimationLoop(zt),this.setAnimationLoop=function(q){It=q},this.dispose=function(){}}},qn=new an,xg=new ne;function _g(s,t){function e(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,ll(s)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function i(g,u,x,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,_)):u.isMeshMatcapMaterial?(r(g,u),m(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),A(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?c(g,u,x,y):u.isSpriteMaterial?l(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,e(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Ue&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,e(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Ue&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,e(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,e(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let x=t.get(u),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,qn.copy(_),qn.x*=-1,qn.y*=-1,qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),g.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(qn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function c(g,u,x,y){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=y*.5,u.map&&(g.map.value=u.map,e(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function l(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ue&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function A(g,u){let x=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){let _=y.program;n.uniformBlockBinding(x,_)}function l(x,y){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",g));let E=y.program;n.updateUBOMapping(x,E);let S=t.render.frame;r[x.id]!==S&&(f(x),r[x.id]=S)}function h(x){let y=d();x.__bindingPointIndex=y;let _=s.createBuffer(),E=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=i[x.id],_=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let S=0,w=_.length;S<w;S++){let T=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,C=T.length;M<C;M++){let R=T[M];if(p(R,S,M,E)===!0){let B=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],G=0;for(let Z=0;Z<O.length;Z++){let W=O[Z],j=A(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,B+G,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,y,_,E){let S=x.value,w=y+"_"+_;if(E[w]===void 0)return typeof S=="number"||typeof S=="boolean"?E[w]=S:E[w]=S.clone(),!0;{let T=E[w];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return E[w]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function m(x){let y=x.uniforms,_=0,E=16;for(let w=0,T=y.length;w<T;w++){let M=Array.isArray(y[w])?y[w]:[y[w]];for(let C=0,R=M.length;C<R;C++){let B=M[C],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,Z=O.length;G<Z;G++){let W=O[G],j=A(W),H=_%E,rt=H%j.boundary,ft=H+rt;_+=rt,ft!==0&&E-ft<j.storage&&(_+=E-ft),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=j.storage}}}let S=_%E;return S>0&&(_+=E-S),x.__size=_,x.__cache={},this}function A(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){let y=x.target;y.removeEventListener("dispose",g);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function u(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:u}}var Zs=class{constructor(t={}){let{canvas:e=Ih(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,u=null,x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=Un,this.toneMappingExposure=1;let _=this,E=!1,S=0,w=0,T=null,M=-1,C=null,R=new de,B=new de,O=null,G=new kt(0),Z=0,W=e.width,j=e.height,H=1,rt=null,ft=null,It=new de(0,0,W,j),zt=new de(0,0,W,j),ee=!1,q=new Zi,nt=!1,vt=!1,ot=new ne,Et=new ne,Pt=new N,Bt=new de,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function fe(){return T===null?H:1}let U=n;function Ge(I,L){return e.getContext(I,L)}try{let I={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${go}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){let L="webgl2";if(U=Ge(L,I),U===null)throw Ge(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ht,Vt,bt,re,Mt,b,v,F,Y,J,X,Ct,ct,pt,qt,Q,gt,wt,Tt,mt,Gt,Ft,ie,P;function at(){Ht=new Ff(U),Ht.init(),Ft=new pg(U,Ht),Vt=new Rf(U,Ht,t,Ft),bt=new ug(U,Ht),Vt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),re=new zf(U),Mt=new Qp,b=new fg(U,Ht,bt,Mt,Vt,Ft,re),v=new Lf(_),F=new Nf(_),Y=new Xh(U),ie=new Ef(U,Y),J=new Of(U,Y,re,ie),X=new Hf(U,J,Y,re),Tt=new Bf(U,Vt,b),Q=new Pf(Mt),Ct=new Kp(_,v,F,Ht,Vt,ie,Q),ct=new _g(_,Mt),pt=new tg,qt=new ag(Ht),wt=new wf(_,v,F,bt,X,p,c),gt=new lg(_,X,Vt),P=new vg(U,re,Vt,bt),mt=new Tf(U,Ht,re),Gt=new kf(U,Ht,re),re.programs=Ct.programs,_.capabilities=Vt,_.extensions=Ht,_.properties=Mt,_.renderLists=pt,_.shadowMap=gt,_.state=bt,_.info=re}at();let V=new ja(_,U);this.xr=V,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let I=Ht.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ht.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(W,j,!1))},this.getSize=function(I){return I.set(W,j)},this.setSize=function(I,L,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=I,j=L,e.width=Math.floor(I*H),e.height=Math.floor(L*H),k===!0&&(e.style.width=I+"px",e.style.height=L+"px"),this.setViewport(0,0,I,L)},this.getDrawingBufferSize=function(I){return I.set(W*H,j*H).floor()},this.setDrawingBufferSize=function(I,L,k){W=I,j=L,H=k,e.width=Math.floor(I*k),e.height=Math.floor(L*k),this.setViewport(0,0,I,L)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(It)},this.setViewport=function(I,L,k,z){I.isVector4?It.set(I.x,I.y,I.z,I.w):It.set(I,L,k,z),bt.viewport(R.copy(It).multiplyScalar(H).round())},this.getScissor=function(I){return I.copy(zt)},this.setScissor=function(I,L,k,z){I.isVector4?zt.set(I.x,I.y,I.z,I.w):zt.set(I,L,k,z),bt.scissor(B.copy(zt).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(I){bt.setScissorTest(ee=I)},this.setOpaqueSort=function(I){rt=I},this.setTransparentSort=function(I){ft=I},this.getClearColor=function(I){return I.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(I=!0,L=!0,k=!0){let z=0;if(I){let D=!1;if(T!==null){let tt=T.texture.format;D=tt===Io||tt===yo||tt===Co}if(D){let tt=T.texture.type,ht=tt===Cn||tt===jn||tt===$i||tt===Ei||tt===xo||tt===_o,At=wt.getClearColor(),xt=wt.getClearAlpha(),Rt=At.r,Ut=At.g,_t=At.b;ht?(m[0]=Rt,m[1]=Ut,m[2]=_t,m[3]=xt,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=Rt,A[1]=Ut,A[2]=_t,A[3]=xt,U.clearBufferiv(U.COLOR,0,A))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT),k&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),pt.dispose(),qt.dispose(),Mt.dispose(),v.dispose(),F.dispose(),X.dispose(),ie.dispose(),P.dispose(),Ct.dispose(),V.dispose(),V.removeEventListener("sessionstart",Uo),V.removeEventListener("sessionend",No),Bn.stop()};function $(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let I=re.autoReset,L=gt.enabled,k=gt.autoUpdate,z=gt.needsUpdate,D=gt.type;at(),re.autoReset=I,gt.enabled=L,gt.autoUpdate=k,gt.needsUpdate=z,gt.type=D}function lt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Dt(I){let L=I.target;L.removeEventListener("dispose",Dt),ue(L)}function ue(I){ye(I),Mt.remove(I)}function ye(I){let L=Mt.get(I).programs;L!==void 0&&(L.forEach(function(k){Ct.releaseProgram(k)}),I.isShaderMaterial&&Ct.releaseShaderCache(I))}this.renderBufferDirect=function(I,L,k,z,D,tt){L===null&&(L=he);let ht=D.isMesh&&D.matrixWorld.determinant()<0,At=Ll(I,L,k,z,D);bt.setMaterial(z,ht);let xt=k.index,Rt=1;if(z.wireframe===!0){if(xt=J.getWireframeAttribute(k),xt===void 0)return;Rt=2}let Ut=k.drawRange,_t=k.attributes.position,Zt=Ut.start*Rt,se=(Ut.start+Ut.count)*Rt;tt!==null&&(Zt=Math.max(Zt,tt.start*Rt),se=Math.min(se,(tt.start+tt.count)*Rt)),xt!==null?(Zt=Math.max(Zt,0),se=Math.min(se,xt.count)):_t!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,_t.count));let ae=se-Zt;if(ae<0||ae===1/0)return;ie.setup(D,z,At,k,xt);let Le,Jt=mt;if(xt!==null&&(Le=Y.get(xt),Jt=Gt,Jt.setIndex(Le)),D.isMesh)z.wireframe===!0?(bt.setLineWidth(z.wireframeLinewidth*fe()),Jt.setMode(U.LINES)):Jt.setMode(U.TRIANGLES);else if(D.isLine){let yt=z.linewidth;yt===void 0&&(yt=1),bt.setLineWidth(yt*fe()),D.isLineSegments?Jt.setMode(U.LINES):D.isLineLoop?Jt.setMode(U.LINE_LOOP):Jt.setMode(U.LINE_STRIP)}else D.isPoints?Jt.setMode(U.POINTS):D.isSprite&&Jt.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Jt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Jt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let yt=D._multiDrawStarts,un=D._multiDrawCounts,Kt=D._multiDrawCount,Ye=xt?Y.get(xt).bytesPerElement:1,si=Mt.get(z).currentProgram.getUniforms();for(let ke=0;ke<Kt;ke++)si.setValue(U,"_gl_DrawID",ke),Jt.render(yt[ke]/Ye,un[ke])}else if(D.isInstancedMesh)Jt.renderInstances(Zt,ae,D.count);else if(k.isInstancedBufferGeometry){let yt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,un=Math.min(k.instanceCount,yt);Jt.renderInstances(Zt,ae,un)}else Jt.render(Zt,ae)};function jt(I,L,k){I.transparent===!0&&I.side===He&&I.forceSinglePass===!1?(I.side=Ue,I.needsUpdate=!0,ss(I,L,k),I.side=Nn,I.needsUpdate=!0,ss(I,L,k),I.side=He):ss(I,L,k)}this.compile=function(I,L,k=null){k===null&&(k=I),u=qt.get(k),u.init(L),y.push(u),k.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),I!==k&&I.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();let z=new Set;return I.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let tt=D.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){let At=tt[ht];jt(At,k,D),z.add(At)}else jt(tt,k,D),z.add(tt)}),y.pop(),u=null,z},this.compileAsync=function(I,L,k=null){let z=this.compile(I,L,k);return new Promise(D=>{function tt(){if(z.forEach(function(ht){Mt.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){D(I);return}setTimeout(tt,10)}Ht.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let qe=null;function hn(I){qe&&qe(I)}function Uo(){Bn.stop()}function No(){Bn.start()}let Bn=new hl;Bn.setAnimationLoop(hn),typeof self!="undefined"&&Bn.setContext(self),this.setAnimationLoop=function(I){qe=I,V.setAnimationLoop(I),I===null?Bn.stop():Bn.start()},V.addEventListener("sessionstart",Uo),V.addEventListener("sessionend",No),this.render=function(I,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,L,T),u=qt.get(I,y.length),u.init(L),y.push(u),Et.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(Et),vt=this.localClippingEnabled,nt=Q.init(this.clippingPlanes,vt),g=pt.get(I,x.length),g.init(),x.push(g),V.enabled===!0&&V.isPresenting===!0){let tt=_.xr.getDepthSensingMesh();tt!==null&&vr(tt,L,-1/0,_.sortObjects)}vr(I,L,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(rt,ft),Xt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Xt&&wt.addToRenderList(g,I),this.info.render.frame++,nt===!0&&Q.beginShadows();let k=u.state.shadowsArray;gt.render(k,I,L),nt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=g.opaque,D=g.transmissive;if(u.setupLights(),L.isArrayCamera){let tt=L.cameras;if(D.length>0)for(let ht=0,At=tt.length;ht<At;ht++){let xt=tt[ht];Oo(z,D,I,xt)}Xt&&wt.render(I);for(let ht=0,At=tt.length;ht<At;ht++){let xt=tt[ht];Fo(g,I,xt,xt.viewport)}}else D.length>0&&Oo(z,D,I,L),Xt&&wt.render(I),Fo(g,I,L);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(_,I,L),ie.resetDefaultState(),M=-1,C=null,y.pop(),y.length>0?(u=y[y.length-1],nt===!0&&Q.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function vr(I,L,k,z){if(I.visible===!1)return;if(I.layers.test(L.layers)){if(I.isGroup)k=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(L);else if(I.isLight)u.pushLight(I),I.castShadow&&u.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||q.intersectsSprite(I)){z&&Bt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Et);let ht=X.update(I),At=I.material;At.visible&&g.push(I,ht,At,k,Bt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||q.intersectsObject(I))){let ht=X.update(I),At=I.material;if(z&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Bt.copy(I.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Bt.copy(ht.boundingSphere.center)),Bt.applyMatrix4(I.matrixWorld).applyMatrix4(Et)),Array.isArray(At)){let xt=ht.groups;for(let Rt=0,Ut=xt.length;Rt<Ut;Rt++){let _t=xt[Rt],Zt=At[_t.materialIndex];Zt&&Zt.visible&&g.push(I,ht,Zt,k,Bt.z,_t)}}else At.visible&&g.push(I,ht,At,k,Bt.z,null)}}let tt=I.children;for(let ht=0,At=tt.length;ht<At;ht++)vr(tt[ht],L,k,z)}function Fo(I,L,k,z){let D=I.opaque,tt=I.transmissive,ht=I.transparent;u.setupLightsView(k),nt===!0&&Q.setGlobalState(_.clippingPlanes,k),z&&bt.viewport(R.copy(z)),D.length>0&&is(D,L,k),tt.length>0&&is(tt,L,k),ht.length>0&&is(ht,L,k),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Oo(I,L,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new yn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?ji:Cn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let tt=u.state.transmissionRenderTarget[z.id],ht=z.viewport||R;tt.setSize(ht.z,ht.w);let At=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor(G),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),Xt&&wt.render(k);let xt=_.toneMapping;_.toneMapping=Un;let Rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),nt===!0&&Q.setGlobalState(_.clippingPlanes,z),is(I,k,z),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let _t=0,Zt=L.length;_t<Zt;_t++){let se=L[_t],ae=se.object,Le=se.geometry,Jt=se.material,yt=se.group;if(Jt.side===He&&ae.layers.test(z.layers)){let un=Jt.side;Jt.side=Ue,Jt.needsUpdate=!0,ko(ae,k,z,Le,Jt,yt),Jt.side=un,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}_.setRenderTarget(At),_.setClearColor(G,Z),Rt!==void 0&&(z.viewport=Rt),_.toneMapping=xt}function is(I,L,k){let z=L.isScene===!0?L.overrideMaterial:null;for(let D=0,tt=I.length;D<tt;D++){let ht=I[D],At=ht.object,xt=ht.geometry,Rt=z===null?ht.material:z,Ut=ht.group;At.layers.test(k.layers)&&ko(At,L,k,xt,Rt,Ut)}}function ko(I,L,k,z,D,tt){I.onBeforeRender(_,L,k,z,D,tt),I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),D.onBeforeRender(_,L,k,z,I,tt),D.transparent===!0&&D.side===He&&D.forceSinglePass===!1?(D.side=Ue,D.needsUpdate=!0,_.renderBufferDirect(k,L,z,D,I,tt),D.side=Nn,D.needsUpdate=!0,_.renderBufferDirect(k,L,z,D,I,tt),D.side=He):_.renderBufferDirect(k,L,z,D,I,tt),I.onAfterRender(_,L,k,z,D,tt)}function ss(I,L,k){L.isScene!==!0&&(L=he);let z=Mt.get(I),D=u.state.lights,tt=u.state.shadowsArray,ht=D.state.version,At=Ct.getParameters(I,D.state,tt,L,k),xt=Ct.getProgramCacheKey(At),Rt=z.programs;z.environment=I.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(I.isMeshStandardMaterial?F:v).get(I.envMap||z.environment),z.envMapRotation=z.environment!==null&&I.envMap===null?L.environmentRotation:I.envMapRotation,Rt===void 0&&(I.addEventListener("dispose",Dt),Rt=new Map,z.programs=Rt);let Ut=Rt.get(xt);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===ht)return Bo(I,At),Ut}else At.uniforms=Ct.getUniforms(I),I.onBeforeCompile(At,_),Ut=Ct.acquireProgram(At,xt),Rt.set(xt,Ut),z.uniforms=At.uniforms;let _t=z.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(_t.clippingPlanes=Q.uniform),Bo(I,At),z.needsLights=Ul(I),z.lightsStateVersion=ht,z.needsLights&&(_t.ambientLightColor.value=D.state.ambient,_t.lightProbe.value=D.state.probe,_t.directionalLights.value=D.state.directional,_t.directionalLightShadows.value=D.state.directionalShadow,_t.spotLights.value=D.state.spot,_t.spotLightShadows.value=D.state.spotShadow,_t.rectAreaLights.value=D.state.rectArea,_t.ltc_1.value=D.state.rectAreaLTC1,_t.ltc_2.value=D.state.rectAreaLTC2,_t.pointLights.value=D.state.point,_t.pointLightShadows.value=D.state.pointShadow,_t.hemisphereLights.value=D.state.hemi,_t.directionalShadowMap.value=D.state.directionalShadowMap,_t.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_t.spotShadowMap.value=D.state.spotShadowMap,_t.spotLightMatrix.value=D.state.spotLightMatrix,_t.spotLightMap.value=D.state.spotLightMap,_t.pointShadowMap.value=D.state.pointShadowMap,_t.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function zo(I){if(I.uniformsList===null){let L=I.currentProgram.getUniforms();I.uniformsList=Mi.seqWithValue(L.seq,I.uniforms)}return I.uniformsList}function Bo(I,L){let k=Mt.get(I);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Ll(I,L,k,z,D){L.isScene!==!0&&(L=he),b.resetTextureUnits();let tt=L.fog,ht=z.isMeshStandardMaterial?L.environment:null,At=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Di,xt=(z.isMeshStandardMaterial?F:v).get(z.envMap||ht),Rt=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ut=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_t=!!k.morphAttributes.position,Zt=!!k.morphAttributes.normal,se=!!k.morphAttributes.color,ae=Un;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ae=_.toneMapping);let Le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=Le!==void 0?Le.length:0,yt=Mt.get(z),un=u.state.lights;if(nt===!0&&(vt===!0||I!==C)){let We=I===C&&z.id===M;Q.setState(z,I,We)}let Kt=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==un.state.version||yt.outputColorSpace!==At||D.isBatchedMesh&&yt.batching===!1||!D.isBatchedMesh&&yt.batching===!0||D.isBatchedMesh&&yt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&yt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&yt.instancing===!1||!D.isInstancedMesh&&yt.instancing===!0||D.isSkinnedMesh&&yt.skinning===!1||!D.isSkinnedMesh&&yt.skinning===!0||D.isInstancedMesh&&yt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&yt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&yt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&yt.instancingMorph===!1&&D.morphTexture!==null||yt.envMap!==xt||z.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==Rt||yt.vertexTangents!==Ut||yt.morphTargets!==_t||yt.morphNormals!==Zt||yt.morphColors!==se||yt.toneMapping!==ae||yt.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,yt.__version=z.version);let Ye=yt.currentProgram;Kt===!0&&(Ye=ss(z,L,D));let si=!1,ke=!1,Ni=!1,oe=Ye.getUniforms(),tn=yt.uniforms;if(bt.useProgram(Ye.program)&&(si=!0,ke=!0,Ni=!0),z.id!==M&&(M=z.id,ke=!0),si||C!==I){bt.buffers.depth.getReversed()?(ot.copy(I.projectionMatrix),bh(ot),Sh(ot),oe.setValue(U,"projectionMatrix",ot)):oe.setValue(U,"projectionMatrix",I.projectionMatrix),oe.setValue(U,"viewMatrix",I.matrixWorldInverse);let Mn=oe.map.cameraPosition;Mn!==void 0&&Mn.setValue(U,Pt.setFromMatrixPosition(I.matrixWorld)),Vt.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&oe.setValue(U,"isOrthographic",I.isOrthographicCamera===!0),C!==I&&(C=I,ke=!0,Ni=!0)}if(D.isSkinnedMesh){oe.setOptional(U,D,"bindMatrix"),oe.setOptional(U,D,"bindMatrixInverse");let We=D.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),oe.setValue(U,"boneTexture",We.boneTexture,b))}D.isBatchedMesh&&(oe.setOptional(U,D,"batchingTexture"),oe.setValue(U,"batchingTexture",D._matricesTexture,b),oe.setOptional(U,D,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",D._indirectTexture,b),oe.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",D._colorsTexture,b));let Fi=k.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Tt.update(D,k,Ye),(ke||yt.receiveShadow!==D.receiveShadow)&&(yt.receiveShadow=D.receiveShadow,oe.setValue(U,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(tn.envMap.value=xt,tn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(tn.envMapIntensity.value=L.environmentIntensity),ke&&(oe.setValue(U,"toneMappingExposure",_.toneMappingExposure),yt.needsLights&&Dl(tn,Ni),tt&&z.fog===!0&&ct.refreshFogUniforms(tn,tt),ct.refreshMaterialUniforms(tn,z,H,j,u.state.transmissionRenderTarget[I.id]),Mi.upload(U,zo(yt),tn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Mi.upload(U,zo(yt),tn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&oe.setValue(U,"center",D.center),oe.setValue(U,"modelViewMatrix",D.modelViewMatrix),oe.setValue(U,"normalMatrix",D.normalMatrix),oe.setValue(U,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let We=z.uniformsGroups;for(let Mn=0,bn=We.length;Mn<bn;Mn++){let Ho=We[Mn];P.update(Ho,Ye),P.bind(Ho,Ye)}}return Ye}function Dl(I,L){I.ambientLightColor.needsUpdate=L,I.lightProbe.needsUpdate=L,I.directionalLights.needsUpdate=L,I.directionalLightShadows.needsUpdate=L,I.pointLights.needsUpdate=L,I.pointLightShadows.needsUpdate=L,I.spotLights.needsUpdate=L,I.spotLightShadows.needsUpdate=L,I.rectAreaLights.needsUpdate=L,I.hemisphereLights.needsUpdate=L}function Ul(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,L,k){Mt.get(I.texture).__webglTexture=L,Mt.get(I.depthTexture).__webglTexture=k;let z=Mt.get(I);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,L){let k=Mt.get(I);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(I,L=0,k=0){T=I,S=L,w=k;let z=!0,D=null,tt=!1,ht=!1;if(I){let xt=Mt.get(I);if(xt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(xt.__webglFramebuffer===void 0)b.setupRenderTarget(I);else if(xt.__hasExternalTextures)b.rebindTextures(I,Mt.get(I.texture).__webglTexture,Mt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let _t=I.depthTexture;if(xt.__boundDepthTexture!==_t){if(_t!==null&&Mt.has(_t)&&(I.width!==_t.image.width||I.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(I)}}let Rt=I.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ht=!0);let Ut=Mt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?D=Ut[L][k]:D=Ut[L],tt=!0):I.samples>0&&b.useMultisampledRTT(I)===!1?D=Mt.get(I).__webglMultisampledFramebuffer:Array.isArray(Ut)?D=Ut[k]:D=Ut,R.copy(I.viewport),B.copy(I.scissor),O=I.scissorTest}else R.copy(It).multiplyScalar(H).floor(),B.copy(zt).multiplyScalar(H).floor(),O=ee;if(bt.bindFramebuffer(U.FRAMEBUFFER,D)&&z&&bt.drawBuffers(I,D),bt.viewport(R),bt.scissor(B),bt.setScissorTest(O),tt){let xt=Mt.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,k)}else if(ht){let xt=Mt.get(I.texture),Rt=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,k||0,Rt)}M=-1},this.readRenderTargetPixels=function(I,L,k,z,D,tt,ht){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){bt.bindFramebuffer(U.FRAMEBUFFER,At);try{let xt=I.texture,Rt=xt.format,Ut=xt.type;if(!Vt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=I.width-z&&k>=0&&k<=I.height-D&&U.readPixels(L,k,z,D,Ft.convert(Rt),Ft.convert(Ut),tt)}finally{let xt=T!==null?Mt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(I,L,k,z,D,tt,ht){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){let xt=I.texture,Rt=xt.format,Ut=xt.type;if(!Vt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=I.width-z&&k>=0&&k<=I.height-D){bt.bindFramebuffer(U.FRAMEBUFFER,At);let _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,tt.byteLength,U.STREAM_READ),U.readPixels(L,k,z,D,Ft.convert(Rt),Ft.convert(Ut),0);let Zt=T!==null?Mt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,Zt);let se=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Mh(U,se,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,tt),U.deleteBuffer(_t),U.deleteSync(se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,L=null,k=0){I.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,I=arguments[1]);let z=Math.pow(2,-k),D=Math.floor(I.image.width*z),tt=Math.floor(I.image.height*z),ht=L!==null?L.x:0,At=L!==null?L.y:0;b.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,ht,At,D,tt),bt.unbindTexture()},this.copyTextureToTexture=function(I,L,k=null,z=null,D=0){I.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,I=arguments[1],L=arguments[2],D=arguments[3]||0,k=null);let tt,ht,At,xt,Rt,Ut,_t,Zt,se,ae=I.isCompressedTexture?I.mipmaps[D]:I.image;k!==null?(tt=k.max.x-k.min.x,ht=k.max.y-k.min.y,At=k.isBox3?k.max.z-k.min.z:1,xt=k.min.x,Rt=k.min.y,Ut=k.isBox3?k.min.z:0):(tt=ae.width,ht=ae.height,At=ae.depth||1,xt=0,Rt=0,Ut=0),z!==null?(_t=z.x,Zt=z.y,se=z.z):(_t=0,Zt=0,se=0);let Le=Ft.convert(L.format),Jt=Ft.convert(L.type),yt;L.isData3DTexture?(b.setTexture3D(L,0),yt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(b.setTexture2DArray(L,0),yt=U.TEXTURE_2D_ARRAY):(b.setTexture2D(L,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let un=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ye=U.getParameter(U.UNPACK_SKIP_PIXELS),si=U.getParameter(U.UNPACK_SKIP_ROWS),ke=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);let Ni=I.isDataArrayTexture||I.isData3DTexture,oe=L.isDataArrayTexture||L.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let tn=Mt.get(I),Fi=Mt.get(L),We=Mt.get(tn.__renderTarget),Mn=Mt.get(Fi.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,We.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let bn=0;bn<At;bn++)Ni&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,D,Ut+bn),I.isDepthTexture?(oe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(L).__webglTexture,D,se+bn),U.blitFramebuffer(xt,Rt,tt,ht,_t,Zt,tt,ht,U.DEPTH_BUFFER_BIT,U.NEAREST)):oe?U.copyTexSubImage3D(yt,D,_t,Zt,se+bn,xt,Rt,tt,ht):U.copyTexSubImage2D(yt,D,_t,Zt,se+bn,xt,Rt,tt,ht);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?I.isDataTexture||I.isData3DTexture?U.texSubImage3D(yt,D,_t,Zt,se,tt,ht,At,Le,Jt,ae.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,D,_t,Zt,se,tt,ht,At,Le,ae.data):U.texSubImage3D(yt,D,_t,Zt,se,tt,ht,At,Le,Jt,ae):I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,_t,Zt,tt,ht,Le,Jt,ae.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,_t,Zt,ae.width,ae.height,Le,ae.data):U.texSubImage2D(U.TEXTURE_2D,D,_t,Zt,tt,ht,Le,Jt,ae);U.pixelStorei(U.UNPACK_ROW_LENGTH,un),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,si),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke),D===0&&L.generateMipmaps&&U.generateMipmap(yt),bt.unbindTexture()},this.copyTextureToTexture3D=function(I,L,k=null,z=null,D=0){return I.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,I=arguments[2],L=arguments[3],D=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,L,k,z,D)},this.initRenderTarget=function(I){Mt.get(I).__webglFramebuffer===void 0&&b.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?b.setTextureCube(I,0):I.isData3DTexture?b.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?b.setTexture2DArray(I,0):b.setTexture2D(I,0),bt.unbindTexture()},this.resetState=function(){S=0,w=0,T=null,bt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Js=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ks=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var to=class extends Ne{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Ve,h=Ve,d,f){super(null,a,o,c,l,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_i=new ne,Vc=new ne,Ss=[],Gc=new In,Cg=new ne,Vi=new xe,Gi=new On,Ji=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Gc.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(Gc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Gi.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Gi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),t.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_i),Vc.multiplyMatrices(n,_i),Vi.matrixWorld=Vc,Vi.raycast(t,Ss);for(let a=0,o=Ss.length;a<o;a++){let c=Ss[a];c.instanceId=r,c.object=this,e.push(c)}Ss.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new to(new Float32Array(i*this.count),i,this.count,vo,sn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ki=class extends kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wc=new ne,eo=new Bs,ws=new On,Es=new N,js=class extends Se{constructor(t=new ve,e=new Ki){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=r,t.ray.intersectsSphere(ws)===!1)return;Wc.copy(i).invert(),eo.copy(t.ray).applyMatrix4(Wc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=f,A=p;m<A;m++){let g=l.getX(m);Es.fromBufferAttribute(d,g),Xc(Es,g,c,i,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=f,A=p;m<A;m++)Es.fromBufferAttribute(d,m),Xc(Es,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xc(s,t,e,n,i,r,a){let o=eo.distanceSqToPoint(s);if(o<e){let c=new N;eo.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var tr=class extends Ne{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var er=class s extends ve{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Te(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,d=new N,f=new Lt,p=new N,m=new N,A=new N,g=0,u=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,p.x=u*1,p.y=-g,p.z=u*0,A.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(A.x,A.y,A.z);break;default:g=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,p.x=u*1,p.y=-g,p.z=u*0,m.copy(p),p.x+=A.x,p.y+=A.y,p.z+=A.z,p.normalize(),c.push(p.x,p.y,p.z),A.copy(m)}for(let x=0;x<=e;x++){let y=n+x*h*i,_=Math.sin(y),E=Math.cos(y);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*E,a.push(d.x,d.y,d.z),f.x=x/e,f.y=S/(t.length-1),o.push(f.x,f.y);let w=c[3*S+0]*_,T=c[3*S+1],M=c[3*S+0]*E;l.push(w,T,M)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let _=y+x*t.length,E=_,S=_+t.length,w=_+t.length+1,T=_+1;r.push(E,S,T),r.push(w,T,S)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var ei=class s extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new N,h=new Lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=n+d/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qi=class s extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],p=[],m=0,A=[],g=n/2,u=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function x(){let _=new N,E=new N,S=0,w=(e-t)/n;for(let T=0;T<=r;T++){let M=[],C=T/r,R=C*(e-t)+t;for(let B=0;B<=i;B++){let O=B/i,G=O*c+o,Z=Math.sin(G),W=Math.cos(G);E.x=R*Z,E.y=-C*n+g,E.z=R*W,d.push(E.x,E.y,E.z),_.set(Z,w,W).normalize(),f.push(_.x,_.y,_.z),p.push(O,1-C),M.push(m++)}A.push(M)}for(let T=0;T<i;T++)for(let M=0;M<r;M++){let C=A[M][T],R=A[M+1][T],B=A[M+1][T+1],O=A[M][T+1];(t>0||M!==0)&&(h.push(C,R,O),S+=3),(e>0||M!==r-1)&&(h.push(R,B,O),S+=3)}l.addGroup(u,S,0),u+=S}function y(_){let E=m,S=new Lt,w=new N,T=0,M=_===!0?t:e,C=_===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,g*C,0),f.push(0,C,0),p.push(.5,.5),m++;let R=m;for(let B=0;B<=i;B++){let G=B/i*c+o,Z=Math.cos(G),W=Math.sin(G);w.x=M*W,w.y=g*C,w.z=M*Z,d.push(w.x,w.y,w.z),f.push(0,C,0),S.x=Z*.5+.5,S.y=W*.5*C+.5,p.push(S.x,S.y),m++}for(let B=0;B<i;B++){let O=E+B,G=R+B;_===!0?h.push(G,G+1,O):h.push(G+1,G,O),T+=3}l.addGroup(u,T,_===!0?1:2),u+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nr=class s extends Qi{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ir=class s extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new N,_=new N,E=new N;for(let S=0;S<e.length;S+=3)p(e[S+0],y),p(e[S+1],_),p(e[S+2],E),c(y,_,E,x)}function c(x,y,_,E){let S=E+1,w=[];for(let T=0;T<=S;T++){w[T]=[];let M=x.clone().lerp(_,T/S),C=y.clone().lerp(_,T/S),R=S-T;for(let B=0;B<=R;B++)B===0&&T===S?w[T][B]=M:w[T][B]=M.clone().lerp(C,B/R)}for(let T=0;T<S;T++)for(let M=0;M<2*(S-T)-1;M++){let C=Math.floor(M/2);M%2===0?(f(w[T][C+1]),f(w[T+1][C]),f(w[T][C])):(f(w[T][C+1]),f(w[T+1][C+1]),f(w[T+1][C]))}}function l(x){let y=new N;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let x=new N;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let _=g(x)/2/Math.PI+.5,E=u(x)/Math.PI+.5;a.push(_,1-E)}m(),d()}function d(){for(let x=0;x<a.length;x+=6){let y=a[x+0],_=a[x+2],E=a[x+4],S=Math.max(y,_,E),w=Math.min(y,_,E);S>.9&&w<.1&&(y<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,y){let _=x*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){let x=new N,y=new N,_=new N,E=new N,S=new Lt,w=new Lt,T=new Lt;for(let M=0,C=0;M<r.length;M+=9,C+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),S.set(a[C+0],a[C+1]),w.set(a[C+2],a[C+3]),T.set(a[C+4],a[C+5]),E.copy(x).add(y).add(_).divideScalar(3);let R=g(E);A(S,C+0,x,R),A(w,C+2,y,R),A(T,C+4,_,R)}}function A(x,y,_,E){E<0&&x.x===1&&(a[y]=x.x-1),_.x===0&&_.z===0&&(a[y]=E/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var sr=class s extends ir{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},rr=class s extends ir{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Pi=class s extends ve{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],d=t,f=(e-t)/i,p=new N,m=new Lt;for(let A=0;A<=i;A++){for(let g=0;g<=n;g++){let u=r+g/n*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}d+=f}for(let A=0;A<i;A++){let g=A*(n+1);for(let u=0;u<n;u++){let x=u+g,y=x,_=x+n+1,E=x+n+2,S=x+1;o.push(y,_,S),o.push(_,E,S)}}this.setIndex(o),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ar=class s extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new N,f=new N,p=[],m=[],A=[],g=[];for(let u=0;u<=n;u++){let x=[],y=u/n,_=0;u===0&&a===0?_=.5/e:u===n&&c===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){let S=E/e;d.x=-t*Math.cos(i+S*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(i+S*r)*Math.sin(a+y*o),m.push(d.x,d.y,d.z),f.copy(d).normalize(),A.push(f.x,f.y,f.z),g.push(S+_,1-y),x.push(l++)}h.push(x)}for(let u=0;u<n;u++)for(let x=0;x<e;x++){let y=h[u][x+1],_=h[u][x],E=h[u+1][x],S=h[u+1][x+1];(u!==0||a>0)&&p.push(y,_,S),(u!==n-1||c<Math.PI)&&p.push(_,E,S)}this.setIndex(p),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var or=class s extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new N,d=new N,f=new N;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let A=m/i*r,g=p/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(A),d.y=(t+e*Math.cos(g))*Math.sin(A),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let A=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,u=(i+1)*(p-1)+m,x=(i+1)*p+m;a.push(A,g,x),a.push(g,u,x)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fe=class extends kn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ts(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function yg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Li=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},no=class extends Li{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qo,endingEnd:qo}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yo:r=t,o=2*e-n;break;case $o:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yo:a=t,c=2*n-e;break;case $o:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),A=m*m,g=A*m,u=-f*g+2*f*A-f*m,x=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,y=(-1-p)*g+(1.5+p)*A+.5*m,_=p*g-p*A;for(let E=0;E!==o;++E)r[E]=u*a[h+E]+x*a[l+E]+y*a[c+E]+_*a[d+E];return r}},io=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},so=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ns:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case yr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return yr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&yg(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let d=o*n,f=d-n,p=d+n;for(let m=0;m!==n;++m){let A=e[d+m];if(A!==e[f+m]||A!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Fa;var ni=class extends Qe{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ns;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends Qe{};ro.prototype.ValueTypeName="color";var ao=class extends Qe{};ao.prototype.ValueTypeName="number";var oo=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},cr=class extends Qe{InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Qe{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ns;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends Qe{};co.prototype.ValueTypeName="vector";var lo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Ig=new lo,ho=class{constructor(t){this.manager=t!==void 0?t:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},hr=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Kr=new ne,qc=new N,Yc=new N,uo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(qc),Yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yc),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var fo=class extends uo{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ur=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new fo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bo="\\[\\]\\.:\\/",Mg=new RegExp("["+bo+"]","g"),So="[^"+bo+"]",bg="[^"+bo.replace("\\.","")+"]",Sg=/((?:WC+[\/:])*)/.source.replace("WC",So),wg=/(WCOD+)?/.source.replace("WCOD",bg),Eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",So),Tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",So),Rg=new RegExp("^"+Sg+wg+Eg+Tg+"$"),Pg=["material","materials","bones","map"],po=class{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mg,"")}static parseTrackName(t){let e=Rg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=po;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var im=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);var $t={hw:15,hl:20,gate:5,pocket:3.5},le=1.6,Ce=.7,vl=60,Dg=2,gl=30,Cl=["easy","normal","hard"],ml=7.2,Al=17.5,Ug=.28,Ng=40,Fg=1.9,Og=5,kg=1.4,zg=2.4,wo=1.1,Bg=1.6,xl=11,Hg=3.2,ln=[{id:"squire",ar:"\u0643\u0623\u0633 \u0627\u0644\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0635\u063A\u0627\u0631",en:"Squire Cup",skill:0,mud:0,doors:0,boulderEvery:0,look:"day"},{id:"meadow",ar:"\u0643\u0623\u0633 \u0627\u0644\u0645\u0631\u062C",en:"Meadow Cup",skill:.04,mud:2,doors:0,boulderEvery:0,look:"day"},{id:"trap",ar:"\u0643\u0623\u0633 \u0627\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u0633\u0631\u064A\u0629",en:"Trapdoor Cup",skill:.08,mud:0,doors:2,boulderEvery:0,look:"day"},{id:"rock",ar:"\u0643\u0623\u0633 \u0627\u0644\u0635\u062E\u0648\u0631",en:"Boulder Cup",skill:.12,mud:0,doors:0,boulderEvery:9,look:"dusk"},{id:"swamp",ar:"\u0643\u0623\u0633 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Swamp Cup",skill:.16,mud:4,doors:2,boulderEvery:0,look:"dusk"},{id:"castle",ar:"\u0643\u0623\u0633 \u0627\u0644\u0642\u0644\u0639\u0629",en:"Castle Cup",skill:.2,mud:2,doors:4,boulderEvery:9,look:"dusk"},{id:"storm",ar:"\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0635\u0641\u0629",en:"Storm Cup",skill:.24,mud:3,doors:4,boulderEvery:7,look:"night"},{id:"dragon",ar:"\u0643\u0623\u0633 \u0627\u0644\u062A\u0646\u064A\u0646",en:"Dragon Cup",skill:.28,mud:4,doors:6,boulderEvery:6,look:"night"},{id:"royal",ar:"\u0627\u0644\u0643\u0623\u0633 \u0627\u0644\u0645\u0644\u0643\u064A",en:"Royal Final",skill:.32,mud:4,doors:6,boulderEvery:5.5,look:"royal",final:!0}],Vg=[[-8,-6],[8,6],[8,-6],[-8,6],[0,-12],[0,12],[-9,-15],[9,15]],Gg=[[-7,0],[7,0],[0,-9],[0,9],[-9,-12],[9,12]],_l=[-15,-10,-5,5,10,15],zn=[{id:"blue",hex:2779880,price:0,ar:"\u0623\u0632\u0631\u0642",en:"Blue"},{id:"green",hex:2799706,price:30,ar:"\u0623\u062E\u0636\u0631",en:"Green"},{id:"teal",hex:2017480,price:30,ar:"\u062A\u0631\u0643\u0648\u0627\u0632\u064A",en:"Teal"},{id:"purple",hex:9063144,price:40,ar:"\u0628\u0646\u0641\u0633\u062C\u064A",en:"Purple"},{id:"orange",hex:16742938,price:40,ar:"\u0628\u0631\u062A\u0642\u0627\u0644\u064A",en:"Orange"},{id:"pink",hex:16734888,price:40,ar:"\u0648\u0631\u062F\u064A",en:"Pink"},{id:"gold",hex:15773728,price:50,ar:"\u0630\u0647\u0628\u064A",en:"Gold"},{id:"white",hex:15921906,price:60,ar:"\u0623\u0628\u064A\u0636",en:"White"}],gr=[{id:"bucket",price:0,ar:"\u062E\u0648\u0630\u0629 \u0639\u0627\u062F\u064A\u0629",en:"Plain"},{id:"plume",price:40,ar:"\u0631\u064A\u0634\u0629",en:"Plume"},{id:"crest",price:50,ar:"\u062A\u0627\u062C \u0645\u0634\u0637",en:"Crest"},{id:"horns",price:70,ar:"\u0642\u0631\u0648\u0646",en:"Horns"},{id:"jester",price:90,ar:"\u0645\u0647\u0631\u062C",en:"Jester"},{id:"crown",price:120,ar:"\u062A\u0627\u062C",en:"Crown"}],mr=14170682,Pe=(s,t,e)=>s<t?t:s>e?e:s;function Wg(s){let t=s>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function yl(s){let t=s&&typeof s=="object"?s:{},e=(c,l,h,d)=>Number.isFinite(c)?Pe(Math.floor(c),h,d):l,n=Array.from({length:ln.length},(c,l)=>e(Array.isArray(t.stars)?t.stars[l]:0,0,0,3)),i=new Set(["blue"]),r=new Set(["bucket"]);if(t.owned&&Array.isArray(t.owned.colors))for(let c of t.owned.colors)zn.some(l=>l.id===c)&&i.add(c);if(t.owned&&Array.isArray(t.owned.helmets))for(let c of t.owned.helmets)gr.some(l=>l.id===c)&&r.add(c);let a=i.has(t.color)?t.color:"blue",o=r.has(t.helmet)?t.helmet:"bucket";return{v:1,coins:e(t.coins,0,0,1e7),unlocked:e(t.unlocked,1,1,ln.length),stars:n,owned:{colors:[...i],helmets:[...r]},color:a,helmet:o,diff:Cl.includes(t.diff)?t.diff:"normal",muted:!!t.muted,wins:e(t.wins,0,0,1e6),goals:e(t.goals,0,0,1e6),played:e(t.played,0,0,1e6)}}function Il(s,t,e){return s.coins+=e.coins,s.played++,s.goals+=e.goals[0],e.win&&(s.wins++,s.stars[t]=Math.max(s.stars[t]||0,e.stars),s.unlocked=Math.max(s.unlocked,Math.min(ln.length,t+2))),s}function Ml(s,t,e){let i=(t==="color"?zn:gr).find(a=>a.id===e);if(!i)return{ok:!1,reason:"unknown"};let r=t==="color"?s.owned.colors:s.owned.helmets;return r.includes(e)?{ok:!0,reason:"owned"}:s.coins<i.price?{ok:!1,reason:"coins"}:(s.coins-=i.price,r.push(e),{ok:!0,reason:"bought"})}function Eo(s,t,e){return(t==="color"?s.owned.colors:s.owned.helmets).includes(e)?(t==="color"?s.color=e:s.helmet=e,!0):!1}var es=class{constructor(t={}){var n;this.round=Pe(t.round|0,0,ln.length-1),this.cfg=ln[this.round],this.diff=Cl.includes(t.diff)?t.diff:"normal",this.young=(t.age||5)<=4,this.rand=Wg((n=t.seed)!=null?n:1),this.autoPlayer=!!t.autoPlayer,this.input={x:0,z:0},this.dashBuf=0;let e={easy:.04,normal:.42,hard:.68}[this.diff];this.skill=[{easy:.75,normal:.55,hard:.5}[this.diff],Pe(e+this.cfg.skill-(this.young?.15:0),0,1)],this.score=[0,0],this.timeLeft=vl,this.overtime=!1,this.t=0,this.playTime=0,this.goalLimit=Dg,this.ev=[],this.knights=[];for(let i=0;i<2;i++)for(let r=0;r<4;r++)this.knights.push({id:i*4+r,team:i,slot:r,human:i===0&&r===0,x:0,z:0,vx:0,vz:0,fx:0,fz:i===0?-1:1,stun:0,stunDur:0,immune:0,dash:0,dx:0,dz:0,cd:0,role:"attacker",cmd:{x:0,z:0,dash:!1},aiT:0,err:0,errT:0,fall:null,mud:!1,speed:0});this.barrel={x:0,z:0,vx:0,vz:0,hitCd:0,idle:0,onDoor:!1},this.doors=Vg.slice(0,this.cfg.doors).map((i,r)=>({id:r,x:i[0],z:i[1],half:Fg,state:"closed",t:0})),this.muds=Gg.slice(0,this.cfg.mud).map((i,r)=>({id:r,x:i[0],z:i[1],r:Hg})),this.boulders=[],this.boulderId=0,this.lastLane=-1,this.phase="kickoff",this.phaseT=0,this.lastCount=99,this._roleT=0,this.acc=0,this.kickoffs=0,this._kickoff(3.2)}attackDir(t){return t===0?-1:1}ownGoalZ(t){return-this.attackDir(t)*$t.hl}pressDash(){this.dashBuf=.3}_emit(t){t.t=this.t,this.ev.push(t)}_kickoff(t){this.phase="kickoff",this.phaseT=t,this.lastCount=99,this.kickoffs++;for(let n of this.knights){let i=n.team===0?1:-1,r=[[0,5],[-6,7],[6,7],[0,13]][n.slot];n.x=r[0],n.z=i*r[1],n.vx=n.vz=0,n.fx=0,n.fz=-i,n.stun=0,n.immune=0,n.dash=0,n.cd=.5,n.fall=null,n.cmd={x:0,z:0,dash:!1}}let e=this.barrel;e.x=0,e.z=0,e.vx=e.vz=0,e.idle=0;for(let n of this.doors)n.state="closed",n.t=4+n.id*1.3;this.boulders=[],this.bTimer=6+this.rand()*2,this._assignRoles()}_assignRoles(){for(let t=0;t<2;t++){let e=this.knights.filter(a=>a.team===t&&(!a.human||this.autoPlayer));if(!e.length)continue;let n=this.barrel;e.sort((a,o)=>Math.hypot(a.x-n.x,a.z-n.z)-Math.hypot(o.x-n.x,o.z-n.z)),e[0].role="attacker";let i=e.slice(1),r=this.ownGoalZ(t);i.sort((a,o)=>Math.abs(a.z-r)-Math.abs(o.z-r)),i.forEach((a,o)=>{a.role=o===0?"defender":"support"})}}step(t){this.ev=[],this.acc+=Math.min(t,.1);let e=1/120;for(;this.acc>=e;)this.acc-=e,this.t+=e,this._sub(e);return this.dashBuf>0&&(this.dashBuf=Math.max(0,this.dashBuf-t)),this.ev}_sub(t){let e=this.phase;if(e==="over")return;if(e==="kickoff"){this.phaseT-=t;let i=Math.ceil(this.phaseT-.2);i<this.lastCount&&i>=1&&(this.lastCount=i,this._emit({type:"count",n:i})),this.phaseT<=0&&(this.phase="play",this._emit({type:"go"}));return}if(e==="goal"){this.phaseT-=t;for(let i of this.knights)i.vx*=Math.exp(-4*t),i.vz*=Math.exp(-4*t);this._physics(t,!1),this.phaseT<=0&&this._afterGoal();return}this.playTime+=t,this.timeLeft-=t,this._control(t),this._hazards(t),this._physics(t,!0);let n=this.barrel;if(Math.abs(n.x)<$t.gate&&Math.abs(n.z)>$t.hl+.3){let i=n.z<0?0:1;this.score[i]++,this.phase="goal",this.phaseT=2.6,this.lastScorer=i,this._emit({type:"goal",team:i,score:this.score.slice()});return}this.timeLeft<=0&&(this.timeLeft=0,this.score[0]!==this.score[1]?this._end():this.overtime?this._end():(this.overtime=!0,this.timeLeft=gl,this._emit({type:"overtime"})))}_afterGoal(){if(Math.max(this.score[0],this.score[1])>=this.goalLimit||this.overtime)return this._end();if(this.timeLeft<=0){if(this.score[0]!==this.score[1])return this._end();this.overtime=!0,this.timeLeft=gl,this._emit({type:"overtime"})}this._kickoff(2.2)}_end(){this.phase="over",this._emit({type:"over",result:this.result()})}result(){let[t,e]=this.score,n=t>e,i=t===e,r=t-e,a=n?e===0||r>=2?3:e===1?2:1:0,o=t*3+(n?12+a*4:i?5:3);return{win:n,draw:i,goals:[t,e],stars:a,coins:o}}_control(t){this._roleT-=t,this._roleT<=0&&(this._assignRoles(),this._roleT=.4);let e=this.barrel;for(let n of this.knights){let i=n.human&&!this.autoPlayer;if(n.stun>0){n.stun-=t;let r=Math.exp(-3*t);n.vx*=r,n.vz*=r,n.stun<=0&&(n.stun=0,n.immune=1.4,n.fall&&this._relocate(n))}else{if(n.immune>0&&(n.immune-=t),n.cd-=t,i){let c=Math.hypot(this.input.x,this.input.z);n.cmd={x:c>1?this.input.x/c:this.input.x,z:c>1?this.input.z/c:this.input.z,dash:this.dashBuf>0}}else n.aiT-=t,n.aiT<=0?(n.aiT=.05,this._ai(n)):n.cmd.dash=!1;n.cmd.dash&&n.cd<=0&&n.dash<=0&&this._startDash(n,i);let r=1;n.mud=!1;for(let c of this.muds)Math.hypot(n.x-c.x,n.z-c.z)<c.r&&(r=.55,n.mud=!0);let a=(i?ml*1.05:ml*(.72+.28*this.skill[n.team]))*r;if(n.speed=a,n.dash>0)n.dash-=t,n.vx=n.dx*Al,n.vz=n.dz*Al;else{let c=n.cmd.x*a,l=n.cmd.z*a,h=c-n.vx,d=l-n.vz,f=Math.hypot(h,d),p=Ng*t;f>p&&(h=h/f*p,d=d/f*p),n.vx+=h,n.vz+=d}let o=Math.hypot(n.cmd.x,n.cmd.z);if(n.dash<=0&&o>.15){let c=Math.hypot(n.cmd.x,n.cmd.z);n.fx=n.cmd.x/c,n.fz=n.cmd.z/c}}n.x+=n.vx*t,n.z+=n.vz*t}}_startDash(t,e){let n=t.cmd.x,i=t.cmd.z,r=Math.hypot(n,i);r<.2&&(n=t.fx,i=t.fz,r=Math.hypot(n,i)||1),n/=r,i/=r;let a=this.barrel;if(e){let o=a.x-t.x,c=a.z-t.z,l=Math.hypot(o,c);if(l<6.5&&l>.1&&(n*o+i*c)/l>(this.young?.5:.72)){n=n*.4+o/l*.6,i=i*.4+c/l*.6;let d=Math.hypot(n,i);n/=d,i/=d}}t.dash=Ug,t.dx=n,t.dz=i,t.fx=n,t.fz=i,t.cd=e?this.young?1.1:1.5:2.8-1.4*this.skill[t.team],this.dashBuf=0,this._emit({type:"dash",id:t.id})}_stun(t,e,n,i,r){t.stun=e,t.stunDur=e,t.dash=0,t.vx=n,t.vz=i,t.immune=0,this._emit({type:"stun",id:t.id,kind:r})}_relocate(t){let e=t.fall;t.fall=null;let n=t.x-e.x,i=t.z-e.z,r=e.half-Math.abs(n),a=e.half-Math.abs(i),o=Ce+.4;r<a?t.x=e.x+(n>=0?1:-1)*(e.half+o):t.z=e.z+(i>=0?1:-1)*(e.half+o),t.x=Pe(t.x,-$t.hw+Ce,$t.hw-Ce),t.z=Pe(t.z,-$t.hl+Ce,$t.hl-Ce)}_ai(t){let e=this.barrel,n=this.skill[t.team],i=this.attackDir(t.team),r=this.ownGoalZ(t.team);t.errT-=.05,t.errT<=0&&(t.errT=.8,t.err=(this.rand()-.5)*2*(1-n)*.4);let a=0,o=0,c=!1,l=Math.hypot(e.x-t.x,e.z-t.z),h=(e.z-r)*i,d=()=>{let x=this._chase(t,n,i);a=x.tx,o=x.tz,c=x.dash};if(t.role==="attacker")d();else if(t.role==="defender")l<8||h<14&&e.vz*i<-1?d():(a=Pe(e.x*.45,-5.5,5.5),o=r+i*Pe(h*.35,5,11));else if(h>$t.hl){a=(e.x>1?-1:e.x<-1||t.slot%2?1:-1)*8,o=Pe(e.z+i*7,-$t.hl+3,$t.hl-3);let y=null,_=99;for(let E of this.knights)if(E.team!==t.team&&E.stun<=0&&E.immune<=0){let S=Math.hypot(E.x-t.x,E.z-t.z),w=Math.hypot(E.x-e.x,E.z-e.z);S<6&&w<7&&S<_&&(_=S,y=E)}y&&(a=y.x,o=y.z,_<3.4&&t.cd<=0&&this.rand()<.1+.5*n&&(c=!0))}else l<7?d():(a=Pe(-e.x*.7,-8,8),o=r+i*14);let f=0,p=0;for(let x of this.doors)if(x.state!=="closed"){let y=t.x-x.x,_=t.z-x.z;if(Math.max(Math.abs(y),Math.abs(_))<x.half+1.6){let E=Math.hypot(y,_)||1;f+=y/E*2.5,p+=_/E*2.5}}for(let x of this.boulders){let y=t.z-x.z;Math.abs(y)<2.6&&(x.state==="warn"||Math.abs(t.x-x.x)<9)&&(p+=(y>=0?1:-1)*2)}let m=a-t.x,A=o-t.z,g=Math.hypot(m,A);if(g>.01){let x=Math.min(1,g/.6);m=m/g*x,A=A/g*x}else m=0,A=0;m+=f,A+=p;let u=Math.hypot(m,A);u>1&&(m/=u,A/=u),t.cmd={x:m,z:A,dash:c&&t.cd<=0}}_chase(t,e,n){let i=this.barrel,r=le+Ce,a=i.x+i.vx*.2,o=i.z+i.vz*.2,c=0-a,l=n*$t.hl-o,h=Math.hypot(c,l)||1;c/=h,l/=h;let d=Math.cos(t.err),f=Math.sin(t.err),p=c*d-l*f,m=c*f+l*d;c=p,l=m;let A=-n*$t.hl;(Math.abs(a)>$t.hw-3||Math.abs(o-A)<3)&&(c+=-Math.sign(a||1)*(Math.abs(a)>$t.hw-3?.9:.5),l+=n*(Math.abs(o-A)<3?.3:.6),h=Math.hypot(c,l),c/=h,l/=h);let g=t.x-a,u=t.z-o,x=g*c+u*l,y=-g*l+u*c,_=y>=0?1:-1,E=-l*_,S=c*_,w=a-c*(r+.9),T=o-l*(r+.9),M,C,R=!1;if(x<-r*.6&&Math.abs(y)<r*1.15)M=a+c*1.5,C=o+l*1.5,Math.hypot(g,u)<r+2.6&&t.cd<=0&&this.rand()<.1+.6*e&&(R=!0);else{let G=Pe(x+.5*r,0,r+2.2);M=w+E*G,C=T+S*G;let Z=M-t.x,W=C-t.z,j=Z*Z+W*W||1,H=Pe(((a-t.x)*Z+(o-t.z)*W)/j,0,1);Math.hypot(t.x+Z*H-a,t.z+W*H-o)<r+.5&&x>-r&&(M=a+E*(r+1.5)-c*.6,C=o+S*(r+1.5)-l*.6)}let B=$t.hw-Ce,O=$t.hl-Ce;return{tx:Pe(M,-B,B),tz:Pe(C,-O,O),dash:R}}_hazards(t){for(let n of this.doors)if(n.t-=t,n.state==="closed"&&n.t<=0)n.state="warn",n.t=kg,n.warnAt=this.t,this._emit({type:"doorWarn",id:n.id});else if(n.state==="warn"&&n.t<=0)n.state="open",n.t=zg,this._emit({type:"doorOpen",id:n.id});else if(n.state==="open")if(n.t<=0)n.state="closed",n.t=Og,this._emit({type:"doorClose",id:n.id});else for(let i of this.knights)!i.fall&&Math.abs(i.x-n.x)<n.half-.15&&Math.abs(i.z-n.z)<n.half-.15&&(i.fall=n,this._stun(i,1.5,0,0,"fall"),this._emit({type:"fall",id:i.id,door:n.id}));if(this.cfg.boulderEvery>0&&(this.bTimer-=t,this.bTimer<=0&&this.boulders.length<2)){let n;do n=Math.floor(this.rand()*_l.length);while(n===this.lastLane);this.lastLane=n;let i=this.rand()<.5?1:-1,r={id:this.boulderId++,state:"warn",t:Bg,z:_l[n],dir:i,x:-i*($t.hw+3),hitB:0,rot:0};this.boulders.push(r),this.bTimer=this.cfg.boulderEvery*(.8+.4*this.rand()),this._emit({type:"boulderWarn",id:r.id,z:r.z,dir:i})}let e=this.barrel;for(let n of this.boulders){if(n.state==="warn"){n.t-=t,n.t<=0&&(n.state="go",this._emit({type:"boulderGo",id:n.id}));continue}n.x+=n.dir*xl*t,n.rot+=xl*t/wo,n.hitB-=t;for(let i of this.knights)i.stun<=0&&i.immune<=0&&Math.hypot(i.x-n.x,i.z-n.z)<wo+Ce&&this._stun(i,i.human?1:1.2,n.dir*7,0,"boulder");n.hitB<=0&&Math.hypot(e.x-n.x,e.z-n.z)<wo+le&&(e.vx+=n.dir*10,n.hitB=.8,this._emit({type:"boulderBarrel",id:n.id}))}this.boulders=this.boulders.filter(n=>Math.abs(n.x)<$t.hw+4||n.state==="warn")}_physics(t,e){let n=this.barrel,i=this.knights;n.hitCd-=t;for(let c of i){let l=n.x-c.x,h=n.z-c.z,d=Math.hypot(l,h),f=le+Ce;if(d<f&&d>1e-6){let p=l/d,m=h/d,A=(c.vx-n.vx)*p+(c.vz-n.vz)*m,g=c.dash>0?4.2:1.3,u=4;if(A>0){let y=1.35*A/(1/g+1/u);n.vx+=p*y/u,n.vz+=m*y/u,c.vx-=p*y/g*.2,c.vz-=m*y/g*.2,A>3&&n.hitCd<=0&&(n.hitCd=.12,this._emit({type:"barrelHit",id:c.id,power:Math.min(1,y/40),dash:c.dash>0})),n.last=c.team}let x=f-d;n.x+=p*x*.85,n.z+=m*x*.85,c.x-=p*x*.15,c.z-=m*x*.15}}for(let c=0;c<i.length;c++)for(let l=c+1;l<i.length;l++){let h=i[c],d=i[l],f=d.x-h.x,p=d.z-h.z,m=Math.hypot(f,p),A=Ce*2;if(m<A&&m>1e-6){let g=f/m,u=p/m,x=(A-m)/2;if(h.x-=g*x,h.z-=u*x,d.x+=g*x,d.z+=u*x,e&&h.team!==d.team){let y=(_,E,S,w)=>{_.dash>0&&E.dash<=0&&E.stun<=0&&E.immune<=0&&(this._stun(E,E.human?this.young?.7:1:1.2,S*9,w*9,"dash"),_.dash=Math.min(_.dash,.05),this._emit({type:"clash",id:_.id,victim:E.id}))};h.dash>0&&d.dash>0?(!h._clash||this.t-h._clash>.3)&&(h._clash=this.t,this._emit({type:"clang"})):(y(h,d,g,u),y(d,h,-g,-u))}}}let r=.55;for(let c of this.muds)Math.hypot(n.x-c.x,n.z-c.z)<c.r&&(r+=3.2);n.onDoor=!1;for(let c of this.doors)c.state==="open"&&Math.abs(n.x-c.x)<c.half&&Math.abs(n.z-c.z)<c.half&&(r+=6,n.onDoor||(n.onDoor=!0));let a=Math.exp(-r*t);n.vx*=a,n.vz*=a;let o=Math.hypot(n.vx,n.vz);o>22&&(n.vx*=22/o,n.vz*=22/o),n.x+=n.vx*t,n.z+=n.vz*t,this._barrelWalls(),e&&(o<.5?(n.idle+=t,n.idle>7&&(n.idle=0,n.vx+=-Math.sign(n.x||1)*2+(this.rand()-.5),n.vz+=-Math.sign(n.z||1)*2,this._emit({type:"nudge"}))):n.idle=0);for(let c of i){let l=c.x-n.x,h=c.z-n.z,d=Math.hypot(l,h),f=le+Ce;d<f&&d>1e-6&&(c.x=n.x+l/d*f,c.z=n.z+h/d*f),c.x=Pe(c.x,-$t.hw+Ce,$t.hw-Ce),c.z=Pe(c.z,-$t.hl+Ce,$t.hl-Ce)}}_barrelWalls(){let t=this.barrel,{hw:e,hl:n,gate:i,pocket:r}=$t,a=o=>{let c=-t["v"+o]*.6;Math.abs(t["v"+o])>2.5&&this._emit({type:"fence",power:Math.min(1,Math.abs(t["v"+o])/14)}),t["v"+o]=c};t.x>e-le?(t.x=e-le,t.vx>0&&a("x")):t.x<-e+le&&(t.x=-e+le,t.vx<0&&a("x"));for(let o of[-1,1]){let c=o*t.z;for(let l of[-i,i]){let h=t.x-l,d=t.z-o*n,f=Math.hypot(h,d),p=le+.3;if(f<p&&f>1e-6){let m=h/f,A=d/f;t.x=l+m*p,t.z=o*n+A*p;let g=t.vx*m+t.vz*A;g<0&&(t.vx-=1.6*g*m,t.vz-=1.6*g*A)}}Math.abs(t.x)>=i&&c>n-le?(t.z=o*(n-le),o*t.vz>0&&a("z")):Math.abs(t.x)<i&&c>n-0&&(Math.abs(t.x)>i-.2&&(t.x=Math.sign(t.x)*(i-.2),t.x*t.vx>0&&a("x")),c>n+r-le&&(t.z=o*(n+r-le),o*t.vz>0&&a("z")))}}};var Xg="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Oe=null,To=!1;function bl(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Sl(){bl(),To=!0;try{if(Oe||(Oe=document.createElement("audio"),Oe.src=Xg,Oe.loop=!0,Oe.preload="auto",Oe.setAttribute("playsinline",""),Oe.setAttribute("webkit-playsinline",""),Oe.setAttribute("x-webkit-airplay","deny"),Oe.volume=.01,Oe.addEventListener("pause",()=>{To&&!document.hidden&&setTimeout(()=>To&&Oe.paused&&Oe.play().catch(()=>{}),300)})),Oe.paused){let s=Oe.play();s&&s.catch&&s.catch(()=>{})}}catch{}}function wl(s,t){bl();try{s.addEventListener("statechange",()=>{s.state==="interrupted"&&!t()&&!document.hidden&&s.resume().catch(()=>{})})}catch{}}var je=s=>440*Math.pow(2,(s-69)/12),Ar=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Sl(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;wl(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let i=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=i.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=i,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,i,r,a=this.sfx,o=.005){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.value=e;let h=c.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+i),l.connect(h).connect(a),l.start(n),l.stop(n+i+.05)}noise(t,e,n,i="lowpass",r=1e3,a=1,o=this.sfx,c){let l=this.ctx;if(!l)return;let h=l.createBufferSource();h.buffer=this.noiseBuf;let d=l.createBiquadFilter();d.type=i,d.frequency.setValueAtTime(r,t),c&&d.frequency.exponentialRampToValueAtTime(c,t+e),d.Q.value=a;let f=l.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(f).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,i,r,a,o=this.sfx){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,i),l.frequency.exponentialRampToValueAtTime(n,i+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,i),h.gain.exponentialRampToValueAtTime(a,i+.02),h.gain.exponentialRampToValueAtTime(1e-4,i+r),l.connect(h).connect(o),l.start(i),l.stop(i+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let c=this.bed;c.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{c.s.stop(),c.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let i=e.createBiquadFilter();i.type=t==="wind"?"bandpass":"lowpass",i.frequency.value=t==="wind"?420:520,i.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(i).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:i}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let i=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<i;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,c,l]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",je(c),a,l*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var qg={tempo:132,beats:16,wave:"square",vol:.045,notes:[[0,62,1],[1.5,62,.5],[2,65,1],[3,69,1],[4,67,1.5],[5.5,65,.5],[6,62,1],[7,60,1],[8,62,1],[9.5,62,.5],[10,65,1],[11,69,1],[12,72,1.5],[13.5,70,.5],[14,69,1],[15,65,1],[0,38,1],[2,38,1],[4,43,1],[6,38,1],[8,38,1],[10,38,1],[12,41,1],[14,43,1]]},Yg={tempo:90,beats:16,wave:"triangle",vol:.07,notes:[[0,62,2],[2,65,2],[4,69,2],[6,67,2],[8,65,2],[10,62,2],[12,60,2],[14,62,2],[0,43,4],[4,41,4],[8,38,4],[12,43,4]]},xr=class extends Ar{unlock(){super.unlock(),this.ctx&&!this.crowdNode&&this.wantCrowd&&this._startCrowd()}_startCrowd(){let t=this.ctx;if(!t)return;let e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=650,n.Q.value=.5;let i=t.createGain();i.gain.value=.02;let r=t.createOscillator();r.frequency.value=.3;let a=t.createGain();a.gain.value=.008,r.connect(a).connect(i.gain),e.connect(n).connect(i).connect(this.sfx),e.start(),r.start(),this.crowdNode={s:e,g:i,lfo:r}}crowd(t){this.wantCrowd=t,this.ctx&&(t&&!this.crowdNode&&this._startCrowd(),this.crowdNode&&this.crowdNode.g.gain.setTargetAtTime(t?.02:1e-4,this.ctx.currentTime,.3))}swell(t=.09,e=2.2){let n=this.ctx;if(!n||!this.crowdNode||this.muted)return;let i=this.crowdNode.g.gain,r=n.currentTime;i.cancelScheduledValues(r),i.setTargetAtTime(t,r,.15),i.setTargetAtTime(.02,r+e,.6)}setMode(t){if(!t){this.setTune(null),this.crowd(!1);return}this.setTune(t==="play"?qg:Yg),this.crowd(t==="play")}play(t,e=1){let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let i=n.currentTime;switch(t){case"tap":this.tone("triangle",640,i,.07,.09);break;case"count":this.tone("square",440,i,.18,.07),this.tone("triangle",220,i,.18,.1);break;case"go":[0,4,7,12].forEach((r,a)=>this.tone("square",je(72+r),i+a*.07,.35,.06)),this.noise(i,.25,.08,"highpass",3e3);break;case"dash":this.noise(i,.28,.12,"bandpass",1200,1.2,this.sfx,380),this.tone("triangle",180,i,.2,.06);break;case"clang":this.tone("square",1320,i,.25,.07),this.tone("square",1760,i,.18,.05),this.tone("triangle",660,i,.35,.08),this.noise(i,.06,.1,"highpass",4e3);break;case"thud":this.slide("sine",140,48,i,.22,.28*e+.1),this.noise(i,.12,.12*e+.04,"lowpass",500),this.tone("triangle",520,i,.06,.04*e);break;case"fence":this.noise(i,.12,.12*e+.03,"bandpass",700,1.5),this.tone("triangle",200,i,.1,.07);break;case"stun":this.slide("triangle",700,200,i,.25,.1),[0,3,7].forEach((r,a)=>this.tone("sine",je(84+r),i+.25+a*.08,.15,.05)),this.noise(i,.08,.1,"highpass",3e3);break;case"goal":[0,4,7,12,7,12,16,19].forEach((r,a)=>this.tone("sawtooth",je(60+r),i+a*.12,.5,.07)),[0,7,12].forEach(r=>this.tone("square",je(48+r),i,1.1,.05)),this.swell(.1,2.4),this.noise(i,1.6,.1,"bandpass",900,.5);break;case"conceded":[0,-3,-5].forEach((r,a)=>this.tone("triangle",je(60+r),i+a*.2,.5,.1));break;case"creak":this.slide("sawtooth",120,85,i,.5,.05),this.slide("sawtooth",250,160,i+.1,.4,.03),this.noise(i,.5,.04,"bandpass",500,4);break;case"dooropen":this.noise(i,.35,.16,"lowpass",400),this.slide("sawtooth",160,60,i,.35,.07);break;case"doorfall":this.slide("sine",600,90,i,.6,.1);break;case"rumble":this.noise(i,.5,.1,"lowpass",160,1),this.slide("sine",70,45,i,.5,.16);break;case"warn":this.tone("square",520,i,.12,.05),this.tone("square",390,i+.14,.12,.05);break;case"mud":this.noise(i,.16,.06,"lowpass",300,2);break;case"win":[0,4,7,12,16,19,24].forEach((r,a)=>this.tone("triangle",je(67+r),i+a*.11,.6,.12)),this.swell(.1,3);break;case"lose":[0,-3,-7,-12].forEach((r,a)=>this.tone("triangle",je(64+r),i+a*.22,.55,.1));break;case"coin":this.tone("square",je(88),i,.05,.04),this.tone("square",je(95),i+.05,.1,.04);break;case"whistle":this.slide("sine",2400,2900,i,.35,.06);break;default:break}}};function K(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t))r==null||r===!1||(i==="class"?n.className=r:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),r):i==="style"?n.style.cssText=r:n.setAttribute(i,r===!0?"":r));for(let i of e.flat())i!=null&&i!==!1&&n.append(i.nodeType?i:document.createTextNode(String(i)));return n}function El(s){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let i=`${n}_${e?"f":"m"}`,r=s[i]?i:n;return s[r]?s[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,i=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[i])}}function Tl(s,t,e,n="#ffd23a"){return`
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
`}var $g={title:["\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0628\u0631\u0645\u064A\u0644","BARREL KNIGHTS"],play:["\u0627\u0644\u0639\u0628","PLAY"],rounds:["\u0627\u0644\u062C\u0648\u0644\u0627\u062A","ROUNDS"],knights:["\u0627\u0644\u0641\u0631\u0633\u0627\u0646","KNIGHTS"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0625\u0639\u0627\u062F\u0629","RESTART"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],next:["\u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","NEXT ROUND"],dash:["\u0627\u0646\u062F\u0641\u0627\u0639","DASH"],goal:["\u0647\u062F\u0641!","GOAL!"],go:["\u064A\u0644\u0627!","GO!"],round:["\u0627\u0644\u062C\u0648\u0644\u0629","Round"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],diff:["\u0627\u0644\u0635\u0639\u0648\u0628\u0629","Difficulty"],easy:["\u0633\u0647\u0644","Easy"],normal:["\u0639\u0627\u062F\u064A","Normal"],hard:["\u0635\u0639\u0628","Hard"],victory:["\u0641\u0632\u062A\u0645! \u{1F3C6}","YOU WIN! \u{1F3C6}"],lose:["\u062D\u0638 \u0623\u0648\u0641\u0631 \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Good try!"],draw:["\u062A\u0639\u0627\u062F\u0644","DRAW"],coins:["\u0639\u0645\u0644\u0627\u062A","Coins"],earned:["\u0643\u0633\u0628\u062A","Earned"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u062C\u0648\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the round before"],overtime:["\u0648\u0642\u062A \u0625\u0636\u0627\u0641\u064A!","OVERTIME!"],how:["\u0627\u0633\u062D\u0628 \u0628\u0625\u0635\u0628\u0639\u0643 \u0644\u0644\u062D\u0631\u0643\u0629\u060C \u0648\u0627\u0636\u063A\u0637 \u0627\u0646\u062F\u0641\u0627\u0639 \u0644\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u0648\u0625\u0628\u0639\u0627\u062F \u0627\u0644\u062E\u0635\u0648\u0645","Drag to move, press DASH to shove the barrel and bump rivals"],how2:["\u0627\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0642 \u062F\u0627\u062E\u0644 \u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u062E\u0635\u0645! \u0627\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u0645\u062E\u0641\u064A\u0629 \u0648\u0627\u0644\u0635\u062E\u0648\u0631 \u0648\u0627\u0644\u0637\u064A\u0646 \u0628\u062A\u062A\u0646\u0628\u0651\u0647 \u0642\u0628\u0644 \u0645\u0627 \u062A\u0634\u062A\u063A\u0644.","Push the giant barrel through the rival gate! Trapdoors, boulders and mud always warn you first."],colors:["\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u062F\u0631\u0639","Armour"],helmets:["\u0627\u0644\u062E\u0648\u0630\u0627\u062A","Helmets"],equipped:["\u0644\u0627\u0628\u0633\u0647","On"],notEnough:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0645\u0634 \u0643\u0641\u0627\u064A\u0629","Not enough coins"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],final:["\u0627\u0644\u0646\u0647\u0627\u0626\u064A","FINAL"],match:["\u0645\u0628\u0627\u0631\u0627\u0629","MATCH"],first:["\u0627\u0644\u0623\u0648\u0644 \u0644\u0647\u062F\u0641\u064A\u0646","FIRST TO 2"],ready:["\u0627\u0633\u062A\u0639\u062F\u061F","READY?"],tip:["\u0627\u062F\u0641\u0639 \u0627\u0644\u0628\u0631\u0645\u064A\u0644 \u062F\u0627\u062E\u0644 \u0628\u0648\u0627\u0628\u062A\u0647\u0645!","SHOVE IT THROUGH THEIR GATE!"],yourTeam:["\u0641\u0631\u064A\u0642\u0643","You"],rivals:["\u0627\u0644\u062E\u0635\u0648\u0645","Rivals"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"]},dt=El($g),Rl={day:{sky:9097471,fog:13495039,sand:[15323290,14664840],hemi:1.5,sun:1.3,sunC:16774360,torch:!1},dusk:{sky:16752752,fog:16763040,sand:[14858362,14067818],hemi:1.25,sun:1.1,sunC:16760960,torch:!0},night:{sky:1845336,fog:2766960,sand:[12098164,11308648],hemi:.95,sun:.55,sunC:10137855,torch:!0},royal:{sky:8046847,fog:13166847,sand:[15784080,15125632],hemi:1.6,sun:1.35,sunC:16773312,torch:!1}},st={sphere:new ar(.5,16,12),cyl:new Qi(.5,.5,1,16),box:new ti(1,1,1),cone:new nr(.5,1,12),torus:new or(.5,.08,8,24),star:new rr(.5,0)},Ro=new Map,St=(s,t=0,e)=>{let n=`${s}|${t}|${e?JSON.stringify(e):""}`;return Ro.has(n)||Ro.set(n,new Fe({color:s,emissive:t,...e||{}})),Ro.get(n)};function et(s,t,e=0,n=0,i=0,r=1,a=1,o=1){let c=new xe(s,t);return c.position.set(e,n,i),c.scale.set(r,a,o),c}var _r=(s,t,e)=>s+(t-s)*e,Po=(s,t,e)=>s<t?t:s>e?e:s;function ns(s,t,e,n){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new tr(i);return r.colorSpace=Ee,r.anisotropy=4,n&&(r.wrapS=r.wrapT=Yi,r.repeat.set(n[0],n[1])),r}function Zg(){return ns(256,256,(s,t,e)=>{let n=["#b87a3c","#a86c34","#c48646","#9c6230"];for(let r=0;r<12;r++){s.fillStyle=n[r%4],s.fillRect(r*t/12,0,t/12+1,e),s.fillStyle="rgba(60,30,10,.85)",s.fillRect(r*t/12,0,3,e),s.strokeStyle="rgba(70,35,10,.25)";for(let a=0;a<6;a++){s.beginPath();let o=r*t/12+6+a*3;s.moveTo(o,0),s.lineTo(o+2,e),s.stroke()}}})}function Jg(s,t){let e=n=>`#${n.toString(16).padStart(6,"0")}`;return ns(256,256,(n,i,r)=>{n.fillStyle=e(s),n.fillRect(0,0,i,r/2),n.fillStyle=e(t),n.fillRect(0,r/2,i,r/2);let a=7,o=()=>(a=a*16807%2147483647,a/2147483647);for(let c=0;c<700;c++)n.fillStyle=`rgba(${o()>.5?"255,245,210":"120,90,50"},${.08+o()*.12})`,n.fillRect(o()*i,o()*r,1+o()*3,1+o()*2)},[1,1])}function Kg(){return ns(32,32,s=>{let t=s.createRadialGradient(16,16,1,16,16,15);t.addColorStop(0,"#fff"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.fillRect(0,0,32,32)})}function Qg(s){return ns(128,64,(t,e,n)=>{t.clearRect(0,0,e,n),t.fillStyle=s;for(let i=0;i<2;i++){let r=i*64;t.beginPath(),t.moveTo(r+8,8),t.lineTo(r+36,n/2),t.lineTo(r+8,n-8),t.lineTo(r+24,n-8),t.lineTo(r+52,n/2),t.lineTo(r+24,8),t.fill()}},[8,1])}function jg(){return ns(128,128,(s,t,e)=>{s.clearRect(0,0,t,e),s.strokeStyle="rgba(255,255,255,.8)",s.lineWidth=3;for(let n=0;n<=8;n++)s.beginPath(),s.moveTo(n*t/8,0),s.lineTo(n*t/8,e),s.stroke(),s.beginPath(),s.moveTo(0,n*e/8),s.lineTo(t,n*e/8),s.stroke()},[3,1])}function tm(){let s=new Wt,t=new Wt,e=new Wt;s.add(t),t.add(e);let n=Zg(),i=new Wt;i.rotation.z=Math.PI/2,e.add(i);let r=[],a=.95*le/1.15;for(let d=0;d<=10;d++){let f=-a+2*a*d/10,p=f/a;r.push(new Lt(le*(1-.16*p*p),f))}let o=new Fe({map:n});i.add(new xe(new er(r,28),o));let c=new Fe({color:10906162});for(let d of[-1,1]){let f=new xe(new ei(le*.84,24),c);f.position.y=d*a,f.rotation.x=d*-Math.PI/2,i.add(f);let p=et(st.torus,St(5593700),0,d*(a-.02),0,le*1.72,le*1.72,1.4);p.rotation.x=Math.PI/2,i.add(p)}for(let d of[-.5,.5]){let f=le*(1-.16*(d/a)**2)*2.02,p=et(st.torus,St(4869720),0,d,0,f,f,1.8);p.rotation.x=Math.PI/2,i.add(p)}let l=et(st.star,St(16765498,8939008),le*.98,0,0,.5,.5,.2);l.rotation.z=.7,i.add(l);let h=et(st.star,St(16765498,8939008),-le*.98,0,0,.5,.5,.2);return i.add(h),s.userData={yaw:t,roll:e,y:le},s}function em(s,t,e){let n=St(16764730,6702080),i=St(16184040);if(t==="plume"){let r=et(st.sphere,St(e,2236962),0,.5,-.18,.2,.55,.5);r.rotation.x=-.5,s.add(r)}else if(t==="crest")for(let r=0;r<5;r++)s.add(et(st.box,St(e,2236962),0,.44+Math.sin(r/4*Math.PI)*.1,-.3+r*.15,.1,.22+Math.sin(r/4*Math.PI)*.15,.14));else if(t==="horns")for(let r of[-1,1]){let a=et(st.cone,i,r*.5,.4,0,.2,.6,.2);a.rotation.z=-r*.7,s.add(a)}else if(t==="jester")for(let r of[-1,1]){let a=et(st.cone,St(r>0?15219338:6961896),r*.34,.5,0,.3,.75,.3);a.rotation.z=-r*.9,s.add(a),s.add(et(st.sphere,n,r*.72,.62,0,.14,.14,.14))}else if(t==="crown"){s.add(et(st.cyl,n,0,.47,0,.62,.16,.62));for(let r=0;r<5;r++){let a=r/5*Math.PI*2;s.add(et(st.cone,n,Math.cos(a)*.28,.65,Math.sin(a)*.28,.14,.28,.14))}s.add(et(st.sphere,St(15219258,4456448),0,.5,.31,.1,.1,.1))}}function Pl(s,t,e){let n=new Wt,i=new Wt;i.scale.setScalar(1.25),n.add(i);let r=St(s,0),a=St(12897496,1711656),o=St(2764346);i.add(et(st.sphere,r,0,1,0,.95,1.05,.75)),i.add(et(st.cyl,St(6964256),0,.82,0,.98,.13,.8)),i.add(et(st.box,St(16764730,6702080),0,.82,.4,.2,.18,.06));let c=new Wt,l=new Wt;for(let[u,x]of[[c,-.26],[l,.26]])u.position.set(x,.55,0),u.add(et(st.cyl,a,0,-.2,0,.3,.45,.3),et(st.box,o,0,-.45,.1,.34,.18,.5)),i.add(u);let h=new Wt,d=new Wt;for(let[u,x]of[[h,-.58],[d,.58]])u.position.set(x,1.35,0),u.add(et(st.cyl,a,0,-.3,0,.26,.6,.26),et(st.sphere,a,0,-.62,0,.3,.3,.3)),i.add(u);let f=new Wt;f.position.set(-.24,-.32,.12),f.add(et(st.cyl,r,0,0,0,.62,.08,.62),et(st.torus,St(16053492),0,0,0,.94,.94,1.4),et(st.cyl,St(16777215),0,.05,0,.22,.04,.22)),f.children[0].rotation.z=Math.PI/2,f.children[1].rotation.y=Math.PI/2,f.children[2].rotation.z=Math.PI/2,f.children[2].position.set(-.05,0,0),h.add(f);let p=new Wt;p.position.set(0,1.95,0),i.add(p),p.add(et(st.sphere,a,0,0,0,.82,.78,.8)),p.add(et(st.box,St(1316895),0,.02,.36,.5,.12,.1)),p.add(et(st.box,St(1316895),0,-.1,.38,.06,.22,.08)),em(p,t,s);let m=et(new ei(.85,18),new _e({color:0,transparent:!0,opacity:.28,depthWrite:!1}),0,.03,0);m.rotation.x=-Math.PI/2,n.add(m);let A=new Wt;A.position.y=2.75;for(let u=0;u<3;u++)A.add(et(st.star,St(16769098,11175936),0,0,0,.36,.36,.16));A.visible=!1,n.add(A);let g=null;if(e){g=new Wt;let u=et(new Pi(1,1.25,28),new _e({color:16769098,transparent:!0,opacity:.9,side:He,depthWrite:!1}),0,.05,0);u.rotation.x=-Math.PI/2,g.add(u);let x=et(st.cone,St(16769098,11175936),0,3.5,0,.7,.8,.7);x.rotation.x=Math.PI,g.add(x),g.userData.arrow=x,n.add(g)}return n.userData={inner:i,legL:c,legR:l,armL:h,armR:d,head:p,stars:A,shadow:m,marker:g,phase:Math.random()*6,sink:0},n}var Lo=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),dt.setLang(e.lang),dt.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.save=yl(e.save),this.base=e.base||"./",this.sound=new xr,this.sound.muted=!!this.save.muted,document.getElementById("bk-style")||document.head.append(K("style",{id:"bk-style"},Tl("bk","#8a5a2a","#4a2a10","#ffd23a")+nm)),this.root=K("div",{class:"bk-root",dir:dt.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=K("div",{class:"bk-layer"}),this.mode="menu",this.clock=0,this.paused=!1,this.keys=new Set,this.shakeT=0,this.cheer=0,this.puffs=[],this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,2500))])}catch{}}_three(){this.renderer=new Zs({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),this.renderer.outputColorSpace=Ee,this.root.prepend(this.renderer.domElement),this.scene=new Ks,this.camera=new Re(48,1,.5,400),this.hemi=new hr(16777215,10127992,1.5),this.scene.add(this.hemi),this.sun=new ur(16774360,1.3),this.sun.position.set(-14,30,18),this.scene.add(this.sun),this.arena=new Wt,this.scene.add(this.arena),this.dyn=new Wt,this.scene.add(this.dyn),this.dotTex=Kg(),this._buildArena(),this._buildParticles(),this.camPos=new N(0,30,30),this.camT=new N(0,0,0),this._look("day"),this.preview=null}_look(t){let e=Rl[t]||Rl.day;this.lookId=t,this.scene.background=new kt(e.sky),this.scene.fog=new Js(e.fog,70,190),this.hemi.intensity=e.hemi,this.sun.intensity=e.sun,this.sun.color.set(e.sunC);let n=Jg(e.sand[0],e.sand[1]);n.repeat.set(1,1),this.pitchMat.map=n,this.pitchMat.needsUpdate=!0;for(let i of this.torches)i.visible=e.torch;this.groundMat.color.set(t==="night"?3489834:6989898)}_buildArena(){let t=this.arena,{hw:e,hl:n,gate:i,pocket:r}=$t;this.groundMat=new Fe({color:6989898});let a=et(new cn(300,300),this.groundMat);a.rotation.x=-Math.PI/2,a.position.y=-.05,t.add(a),this.pitchMat=new Fe({color:16777215});let o=et(new cn(e*2+.6,n*2+.6),this.pitchMat);o.rotation.x=-Math.PI/2,t.add(o);let c=new _e({color:16774876,transparent:!0,opacity:.55}),l=new _e({color:16777215,transparent:!0,opacity:.07,depthWrite:!1});for(let A=-4;A<4;A+=2){let g=et(st.box,l,0,.012,(A+.5)*6.5,e*2,.01,6.5);t.add(g)}t.add(et(st.box,c,0,.02,0,e*2,.01,.22));let h=et(new Pi(4.6,4.85,40),c,0,.02,0);h.rotation.x=-Math.PI/2,t.add(h);for(let A of[-1,1]){t.add(et(st.box,c,0,.02,A*(n-6),i*2+6,.01,.2));for(let g of[-1,1])t.add(et(st.box,c,g*(i+3),.02,A*(n-3),.2,.01,6))}let d=St(9067054),f=St(5913114),p=(A,g,u,x)=>{let y=Math.hypot(u-A,x-g),_=Math.max(1,Math.round(y/3)),E=Math.atan2(u-A,x-g),S=new Wt;S.position.set(A,0,g),S.rotation.y=E;for(let w=0;w<=_;w++)S.add(et(st.cyl,f,0,.8,w/_*y,.34,1.7,.34),et(st.sphere,d,0,1.7,w/_*y,.42,.42,.42));S.add(et(st.box,d,0,1.3,y/2,.16,.22,y),et(st.box,d,0,.7,y/2,.16,.22,y)),t.add(S)};p(-e-.4,-n-.4,-e-.4,n+.4),p(e+.4,-n-.4,e+.4,n+.4);for(let A of[-1,1])p(-e-.4,A*(n+.4),-i,A*(n+.4)),p(i,A*(n+.4),e+.4,A*(n+.4));let m=jg();for(let A of[-1,1]){let g=A>0?2779880:mr,u=new Wt;u.position.z=A*n,t.add(u);let x=St(11696722),y=St(9067066),_=new _e({color:1182730});for(let T of[-i,i])u.add(et(st.box,x,T,2.6,0,1.5,5.2,1.5),et(st.box,y,T,5.35,0,1.9,.35,1.9));u.add(et(st.box,x,0,5.4,0,i*2+1.5,1.3,1.5));for(let T=-3;T<=3;T++)u.add(et(st.box,y,T*(i*2/6),6.2,0,1.1,.5,1.7));let E=et(st.box,St(g,1118481),0,4.55,A*.9,i*2-.4,.7,.12);u.add(E),u.add(et(st.box,x,0,4,A*(r+.9),e*2+8,8,1.6),et(st.box,_,0,2.2,A*(r+.05),i*2-.5,4.4,.1));for(let T of[-e-3,e+3])u.add(et(st.cyl,y,T,5,A*(r+.9),3.2,10,3.2));let S=et(new cn(i*2,3.4),new _e({map:m,transparent:!0,side:He,depthWrite:!1}),0,1.7,A*r);u.add(S);for(let T of[-i,i]){let M=et(new cn(r,3.4),new _e({map:m,transparent:!0,side:He,depthWrite:!1}),T,1.7,A*r/2);M.rotation.y=Math.PI/2,u.add(M)}let w=et(st.box,St(g,0),0,.02,A*r/2,i*2,.02,r);w.material=new Fe({color:g,transparent:!0,opacity:.4}),u.add(w)}this._buildStands(),this._buildCastle(),this.torches=[];for(let A of[-e-3,e+3])for(let g of[-n+4,0,n-4]){let u=new Wt;u.position.set(A,0,g),u.add(et(st.cyl,St(4861976),0,1.6,0,.22,3.2,.22));let x=et(st.cone,new _e({color:16754746}),0,3.5,0,.55,1.1,.55);u.add(x),u.userData.fl=x,u.visible=!1,t.add(u),this.torches.push(u)}}_buildStands(){let t=this.arena,{hw:e,hl:n}=$t,i=St(8015400),r=[],a=(p,m,A,g,u,x)=>r.push({x:p,z:m,rowsAlong:A,rows:g,along:u,face:x});a(-e-3.5,0,"z",4,n*2,1),a(e+3.5,0,"z",4,n*2,-1);let o=[],c=[15223370,4885224,15777840,4900976,15231672,15921906,10115816,16747050];for(let p of r)for(let m=0;m<p.rows;m++){let A=1.4+m*1.7,g=.9+m*1.1,u=p.rowsAlong==="z",x=p.along,y=u?et(st.box,i,p.x+p.face*-(-A+1.4)*0+p.x*0+(p.x<0?-1:1)*(A-1.4),g/2,0,1.7,g,x+3):et(st.box,i,0,g/2,p.z+(p.z<0?-1:1)*(A-1.4),x+3,g,1.7);t.add(y);let _=Math.floor(x/1.6);for(let E=0;E<_;E++){let S=-x/2+(E+m%2*.5)*(x/_),w=u?p.x+(p.x<0?-1:1)*(A-1.4):S,T=u?S:p.z+(p.z<0?-1:1)*(A-1.4);o.push({x:w,y:g+.95,z:T,c:c[(E*5+m*3+(w>0?1:0))%c.length],ph:E*1.7+m})}}let l=st.cone,h=st.sphere;this.crowd=o,this.crowdBody=new Ji(l,new Fe({color:16777215}),o.length),this.crowdHead=new Ji(h,new Fe({color:1578e4}),o.length);let d=new kt;o.forEach((p,m)=>{d.set(p.c),this.crowdBody.setColorAt(m,d)}),t.add(this.crowdBody,this.crowdHead),this._crowdTick=0,this._updateCrowd(0,0);let f=[2779880,14170682,15777840];for(let p of[-e-1,e+1])for(let m=-2;m<=2;m++){let A=m*10;t.add(et(st.cyl,St(4861976),p,3.2,A,.18,6.4,.18)),t.add(et(st.box,St(f[(m+2)%3]),p+(p<0?.7:-.7),5.4,A,1.3,1.9,.08))}}_updateCrowd(t,e){let n=new ne,i=new N,r=new rn,a=new N,o=new N;this.crowd.forEach((c,l)=>{let h=Math.max(0,Math.sin(t*(e>0?9:2.2)+c.ph))*(e>0?.55:.08);i.set(c.x,c.y-.45+h,c.z),a.set(.7,1,.7),n.compose(i,r,a),this.crowdBody.setMatrixAt(l,n),i.set(c.x,c.y+.28+h,c.z),o.set(.5,.5,.5),n.compose(i,r,o),this.crowdHead.setMatrixAt(l,n)}),this.crowdBody.instanceMatrix.needsUpdate=!0,this.crowdHead.instanceMatrix.needsUpdate=!0,this.crowdBody.instanceColor&&(this.crowdBody.instanceColor.needsUpdate=!0)}_buildCastle(){let t=this.arena,e=St(12103840),n=St(10130050),i=St(13126202);for(let r of[-1,1]){let a=r*62,o=new Wt;o.position.z=a,t.add(o),o.add(et(st.box,e,0,6,0,70,12,4));for(let c=-17;c<=17;c++)o.add(et(st.box,n,c*2,12.7,r*0,1.2,1.4,4.2));for(let c of[-34,-14,14,34])o.add(et(st.cyl,e,c,10,0,6,20,6),et(st.cone,i,c,22.5,0,7.4,6,7.4),et(st.cyl,St(4861976),c,28,0,.14,4,.14),et(st.box,St(c<0?2779880:14170682),c+1.1,28.6,0,2,1.1,.06));o.add(et(st.box,St(3811866),0,3.5,r*-2.05,7,7,.3),et(st.cyl,St(3811866),0,7,r*-2.05,7,.3,.3)),o.add(et(st.cyl,e,0,14,0,9,28,9),et(st.cone,i,0,31,0,11,8,11))}for(let r=0;r<14;r++){let a=r/14*Math.PI*2;t.add(et(st.sphere,St(4885066),Math.cos(a)*110,0,Math.sin(a)*110,60,22,60))}}_buildParticles(){this.pN=220;let e=new Float32Array(220*3),n=new Float32Array(220*3);this.pGeo=new ve,this.pGeo.setAttribute("position",new be(e,3)),this.pGeo.setAttribute("color",new be(n,3)),this.pMat=new Ki({size:.9,map:this.dotTex,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}),this.points=new js(this.pGeo,this.pMat),this.points.frustumCulled=!1,this.scene.add(this.points),this.parts=Array.from({length:220},()=>({life:0,x:0,y:-50,z:0,vx:0,vy:0,vz:0,r:1,g:1,b:1,grav:0})),this.pI=0}puff(t,e,n,i,r,a=3,o=-2,c=1.5){let l=new kt(r);for(let h=0;h<i;h++){let d=this.parts[this.pI];this.pI=(this.pI+1)%this.pN;let f=Math.random()*Math.PI*2,p=(.3+Math.random())*a;Object.assign(d,{life:.5+Math.random()*.7,x:t,y:e,z:n,vx:Math.cos(f)*p,vz:Math.sin(f)*p,vy:Math.random()*c*2,r:l.r,g:l.g,b:l.b,grav:o})}}_tickParticles(t){let e=this.pGeo.attributes.position.array,n=this.pGeo.attributes.color.array;this.parts.forEach((i,r)=>{i.life>0&&(i.life-=t,i.vy+=i.grav*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.y<.05&&i.grav&&(i.y=.05,i.vy*=-.3,i.vx*=.8,i.vz*=.8));let a=i.life>0?Math.min(1,i.life*2):0;e[r*3]=i.x,e[r*3+1]=i.life>0?i.y:-50,e[r*3+2]=i.z,n[r*3]=i.r*a,n[r*3+1]=i.g*a,n[r*3+2]=i.b*a}),this.pGeo.attributes.position.needsUpdate=!0,this.pGeo.attributes.color.needsUpdate=!0}_clearDyn(){for(let t of[...this.dyn.children])this.dyn.remove(t);this.kMesh=[],this.barrelMesh=null,this.doorMesh=[],this.mudMesh=[],this.bouldMesh=new Map,this.lastEvt=null}_setupEntities(){this._clearDyn();let t=this.m,e=(zn.find(a=>a.id===this.save.color)||zn[0]).hex;this.playerColor=e;for(let a of t.knights){let o=Pl(a.team===0?e:mr,a.human?this.save.helmet:a.team===0?"bucket":a.slot===0?"horns":a.slot===1?"crest":"bucket",a.human&&this.real);o.userData.inner.scale.setScalar(1.1),this.dyn.add(o),this.kMesh.push(o)}this.barrelMesh=tm(),this.dyn.add(this.barrelMesh);let n=et(new ei(1.5,20),new _e({color:0,transparent:!0,opacity:.3,depthWrite:!1}),0,.03,0);n.rotation.x=-Math.PI/2,this.dyn.add(n),this.barrelShadow=n;let i=St(6964258),r=St(9067054);for(let a of t.doors){let o=new Wt;o.position.set(a.x,0,a.z);let c=a.half;o.add(et(st.box,St(1314828),0,.03,0,c*2,.04,c*2)),o.add(et(st.box,St(4861976),0,.06,-c-.12,c*2+.5,.14,.26),et(st.box,St(4861976),0,.06,c+.12,c*2+.5,.14,.26),et(st.box,St(4861976),-c-.12,.06,0,.26,.14,c*2),et(st.box,St(4861976),c+.12,.06,0,.26,.14,c*2));let l=[];for(let d of[-1,1]){let f=new Wt;f.position.set(d*c,.1,0);let p=new Wt;p.position.x=-d*c/2,f.add(p),p.add(et(st.box,i,0,0,0,c,.12,c*2));for(let m=0;m<4;m++)p.add(et(st.box,r,0,.07,(m-1.5)*c*.5,c-.1,.02,.06));p.add(et(st.cyl,St(5593700),0,.09,0,.14,.04,.14)),o.add(f),l.push(f)}let h=et(st.box,new _e({color:16726570,transparent:!0,opacity:0}),0,.2,0,c*2+.7,.05,c*2+.7);o.add(h),this.dyn.add(o),this.doorMesh.push({g:o,panels:l,tape:h,d:a})}for(let a of t.muds){let o=new Wt;o.position.set(a.x,0,a.z),o.add(et(new ei(a.r,28),new Fe({color:5913120}),0,.03,0)),o.children[0].rotation.x=-Math.PI/2;let c=et(new Pi(a.r-.4,a.r,28),new Fe({color:4073490}),0,.035,0);c.rotation.x=-Math.PI/2,o.add(c);for(let l=0;l<7;l++){let h=l*2.4;o.add(et(st.sphere,St(8016432),Math.cos(h)*a.r*.6*(l%3/3+.4),.05,Math.sin(h)*a.r*.6*(l%3/3+.4),.7,.18,.7))}this.dyn.add(o)}this.chev=Qg("#ffffff")}_boulderMesh(t){let e=this.bouldMesh.get(t.id);if(!e){let n=new Wt,i=new xe(new sr(1.1,1),new Fe({color:9077880,flatShading:!0}));n.add(i);let r=et(st.box,new _e({map:null,color:16726570,transparent:!0,opacity:.3,depthWrite:!1}),0,.05,0,$t.hw*2+2,.02,2.6),a=this.chev.clone();a.needsUpdate=!0,a.repeat.set(10,1);let o=et(new cn($t.hw*2+2,2.2),new _e({map:a,transparent:!0,opacity:.8,color:16769098,depthWrite:!1}),0,.08,0);o.rotation.x=-Math.PI/2,t.dir<0&&(o.rotation.z=Math.PI);let c=new Wt;c.add(r,o,n),this.dyn.add(c),e={wrap:c,rock:n,lane:r,arrows:o,ch:a},this.bouldMesh.set(t.id,e)}return e}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?50:42,this.camera.updateProjectionMatrix()}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.root.addEventListener("pointerdown",n=>{if(!(n.target.closest("button")||this.mode!=="play"||this.paused||this.stick)){if(this.stick={id:n.pointerId,ox:n.clientX,oy:n.clientY,x:0,z:0,fixed:!1},this.baseEl){let i=this.baseEl.getBoundingClientRect(),r=i.left+i.width/2,a=i.top+i.height/2;Math.hypot(n.clientX-r,n.clientY-a)<i.width*.75&&(this.stick.ox=r,this.stick.oy=a,this.stick.fixed=!0)}this._stickUi(!0,n)}}),this.root.addEventListener("pointermove",n=>{let i=this.stick;if(!i||i.id!==n.pointerId)return;let r=this.u*9,a=n.clientX-i.ox,o=n.clientY-i.oy,c=Math.hypot(a,o);c>r*1.6&&(i.ox+=a/c*(c-r*1.6),i.oy+=o/c*(c-r*1.6),a=n.clientX-i.ox,o=n.clientY-i.oy);let l=Math.min(1,Math.hypot(a,o)/r),h=Math.hypot(a,o)<this.u*1.2,d=Math.hypot(a,o)||1;i.x=h?0:a/d*l,i.z=h?0:o/d*l,this._stickUi(!0,n)});let e=n=>{this.stick&&this.stick.id===n.pointerId&&(this.stick=null,this._stickUi(!1))};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e),this._onKey=n=>{let i=n.key.toLowerCase();if(this.mode==="play"){if(["arrowleft","arrowright","arrowup","arrowdown"," ","w","a","s","d"].includes(i)&&n.preventDefault(),i===" "||i==="shift"){!this.paused&&this.m&&this.m.pressDash();return}if(i==="p"||i==="escape"){this.togglePause();return}this.keys.add(i)}},this._onKeyUp=n=>this.keys.delete(n.key.toLowerCase()),window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKeyUp),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_stickUi(t,e){if(!this.stickEl)return;if(!t){this.stickEl.style.display="none",this.baseKnob&&(this.baseKnob.style.transform="");return}let n=this.root.getBoundingClientRect(),i=this.stick;if(i.fixed&&this.baseKnob){this.stickEl.style.display="none";let a=this.u*9;this.baseKnob.style.transform=`translate(${i.x*a}px,${i.z*a}px)`;return}this.stickEl.style.display="block",this.stickEl.style.left=`${i.ox-n.left}px`,this.stickEl.style.top=`${i.oy-n.top}px`;let r=this.u*9;this.knobEl.style.transform=`translate(${i.x*r}px,${i.z*r}px)`}_readInput(){let t=this.m,e=0,n=0,i=this.keys;if((i.has("arrowleft")||i.has("a"))&&(e-=1),(i.has("arrowright")||i.has("d"))&&(e+=1),(i.has("arrowup")||i.has("w"))&&(n-=1),(i.has("arrowdown")||i.has("s"))&&(n+=1),e||n){let r=Math.hypot(e,n);e/=r,n/=r}else this.stick&&(e=this.stick.x,n=this.stick.z);t.input.x=e,t.input.z=n}_clear(){this.layer.replaceChildren(),this.hudEls=null,this.stickEl=null}_soundPill(){let t=K("button",{class:"bk-soundpill",onclick:()=>this.sound.unlock()},dt.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=2200){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}_persist(){this.post({type:"save",save:this.save})}_tap(t){return()=>{this.sound.play("tap"),t()}}_demo(){this.real=!1,this.m=new es({round:Math.floor(Math.random()*ln.length),diff:"normal",seed:(Date.now()&65535)+1,autoPlayer:!0,age:this.age}),this.m.knights.forEach(t=>{t.human=!1}),this._look(this.m.cfg.look),this._setupEntities()}showMenu(){this.mode="menu",this.paused=!1,this._clear(),this.sound.setMode("menu"),this.dyn.visible=!0,this.preview&&(this.preview.visible=!1),this._demo();let t=Math.min(this.save.unlocked-1,ln.length-1);this.layer.append(K("div",{class:"bk-dim bk-clear"},K("div",{class:"bk-card"},K("div",{class:"bk-logo"},"\u{1F6E2}\uFE0F ",dt.t("title")," \u2694\uFE0F"),K("div",{class:"bk-coins"},`\u{1FA99} ${dt.num(this.save.coins)}`),K("div",{class:"bk-menu"},K("button",{class:"bk-btn",onclick:this._tap(()=>this.start(t))},"\u25B6 ",dt.t("play")),K("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showRounds())},"\u{1F3C6} ",dt.t("rounds")),K("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showShop())},"\u{1F6E1}\uFE0F ",dt.t("knights")),K("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showSettings())},"\u2699\uFE0F ",dt.t("settings")),K("button",{class:"bk-btn alt",onclick:()=>this.post({type:"exit"})},dt.t("quit")))))),this._soundPill()}showRounds(){this._clear();let t=dt.getLang()!=="en",e=ln.map((n,i)=>{let r=i+1>this.save.unlocked,a=this.save.stars[i]||0;return K("button",{class:`bk-lv${r?" lock":""}${n.final?" fin":""}`,onclick:()=>{if(r){this.hint(dt.t("locked"));return}this.sound.play("tap"),this.start(i)}},K("i",{},r?"\u{1F512}":n.final?"\u{1F451}":dt.num(i+1)),K("span",{class:"bk-lvn"},t?n.ar:n.en),K("span",{},"\u2605".repeat(a)+"\u2606".repeat(3-a)))});this.layer.append(K("div",{class:"bk-dim"},K("div",{class:"bk-card"},K("div",{class:"bk-title"},"\u{1F3C6} ",dt.t("rounds")),K("div",{class:"bk-lvs"},e),K("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back"))))),this.hintEl=K("div",{class:"bk-hint"}),this.layer.append(this.hintEl),this._soundPill()}showSettings(){this._clear();let t=K("button",{class:"bk-btn",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this._persist(),t.textContent=`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${dt.t("sound")}`,this.sound.play("tap")}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${dt.t("sound")}`),e=n=>K("button",{class:`bk-seg${this.save.diff===n?" on":""}`,onclick:()=>{this.save.diff=n,this._persist(),this.showSettings()}},dt.t(n));this.layer.append(K("div",{class:"bk-dim"},K("div",{class:"bk-card"},K("div",{class:"bk-title"},"\u2699\uFE0F ",dt.t("settings")),t,K("div",{class:"bk-small"},dt.t("diff")),K("div",{class:"bk-segs"},e("easy"),e("normal"),e("hard")),K("div",{class:"bk-small"},dt.t("how")),K("div",{class:"bk-small"},dt.t("how2")),K("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back")))))}showShop(t="color"){this.mode="shop",this._clear(),this.dyn.visible=!1,this._ensurePreview();let e=dt.getLang()!=="en",n=K("div",{class:"bk-coins"},`\u{1FA99} ${dt.num(this.save.coins)}`),i=t==="color"?zn:gr,r=t==="color"?this.save.owned.colors:this.save.owned.helmets,a=t==="color"?this.save.color:this.save.helmet,o=i.map(c=>{let l=r.includes(c.id),h=a===c.id,d=t==="color"?K("span",{class:"bk-sw",style:`background:#${c.hex.toString(16).padStart(6,"0")}`}):K("span",{class:"bk-sw hm"},{bucket:"\u{1FA96}",plume:"\u{1FAB6}",crest:"\u{1F3DB}\uFE0F",horns:"\u{1F402}",jester:"\u{1F921}",crown:"\u{1F451}"}[c.id]);return K("button",{class:`bk-item${h?" on":""}${l?"":" buy"}`,onclick:()=>{if(l)Eo(this.save,t,c.id),this.sound.play("tap");else{if(!Ml(this.save,t,c.id).ok){this.hint(dt.t("notEnough")),this.sound.play("warn");return}Eo(this.save,t,c.id),this.sound.play("coin")}this._persist(),this._previewRebuild(),this.showShop(t)}},d,K("span",{},e?c.ar:c.en),K("small",{},h?`\u2713 ${dt.t("equipped")}`:l?"":`\u{1FA99} ${dt.num(c.price)}`))});this.layer.append(K("div",{class:"bk-dim bk-bottom"},K("div",{class:"bk-card wide"},n,K("div",{class:"bk-segs"},K("button",{class:`bk-seg${t==="color"?" on":""}`,onclick:()=>this.showShop("color")},dt.t("colors")),K("button",{class:`bk-seg${t==="helmet"?" on":""}`,onclick:()=>this.showShop("helmet")},dt.t("helmets"))),K("div",{class:"bk-items"},o),K("button",{class:"bk-btn dark",onclick:this._tap(()=>this.showMenu())},dt.t("back"))))),this.hintEl=K("div",{class:"bk-hint",style:"top:calc(var(--u)*12)"}),this.layer.append(this.hintEl),this._soundPill()}_ensurePreview(){this.preview||(this.preview=new Wt,this.scene.add(this.preview)),this._previewRebuild(),this.preview.visible=!0}_previewRebuild(){for(let i of[...this.preview.children])this.preview.remove(i);let t=(zn.find(i=>i.id===this.save.color)||zn[0]).hex,e=Pl(t,this.save.helmet,!1);e.scale.setScalar(1.1),this.preview.add(e),this.previewKnight=e;let n=et(st.cyl,St(9067054),0,-.1,0,5,.3,5);this.preview.add(n)}start(t){this.round=t,this.real=!0,this.m=new es({round:t,diff:this.save.diff,seed:(Date.now()&65535)+1,age:this.age}),this._look(this.m.cfg.look),this.dyn.visible=!0,this.preview&&(this.preview.visible=!1),this._setupEntities(),this.mode="play",this.paused=!1,this.over=!1,this.overT=0,this.stick=null,this.keys.clear(),this.cheer=0,this.lastScore=[0,0],this._clear(),this.sound.setMode("play"),this._hud(),this.camSnap=!0;let e=dt.getLang()!=="en",n=this.m.cfg;this.introT=1.9,this.introEl=K("div",{class:"bk-intro"},K("div",{class:"bk-plaque"},K("div",{class:"bk-ribbon"},`${dt.t("match")} ${dt.num(t+1)}`),K("div",{class:"bk-mname"},e?n.ar:n.en),K("div",{class:"bk-first"},dt.t("first")))),this.layer.append(this.introEl)}_hud(){let t=K("button",{class:"bk-round","aria-label":dt.t("paused"),onclick:()=>this.togglePause()},"\u23F8");this.scoreA=K("b",{},"0"),this.scoreB=K("b",{},"0"),this.timeEl=K("span",{class:"bk-time"},"2:00");let e=(i,r)=>K("i",{class:"bk-shield",style:`--c:#${i.toString(16).padStart(6,"0")}`},r),n=K("div",{class:"bk-board"},K("div",{class:"bk-score"},e(this.playerColor,"\u{1F3F0}"),this.scoreA,K("em",{},"-"),this.scoreB,e(mr,"\u2600")),this.timeEl);this.matchBadge=K("div",{class:"bk-mbadge"},K("small",{},dt.t("match")),K("b",{},dt.num(this.round+1))),this.baseKnob=K("div",{class:"bk-bknob"}),this.baseEl=K("div",{class:"bk-base"},this.baseKnob),this.dashFill=K("div",{class:"bk-dashfill"}),this.dashBtn=K("button",{class:"bk-dash","aria-label":dt.t("dash"),onpointerdown:i=>{i.preventDefault(),this.m&&!this.paused&&this.m.pressDash()}},this.dashFill,K("span",{},"\u{1F6E1}\uFE0F"),K("small",{},dt.t("dash"))),this.knobEl=K("div",{class:"bk-knob"}),this.stickEl=K("div",{class:"bk-stick"},this.knobEl),this.bannerEl=K("div",{class:"bk-banner"}),this.hintEl=K("div",{class:"bk-hint",style:"top:calc(var(--u)*22)"}),this.layer.append(K("div",{class:"bk-top",style:"direction:ltr"},this.matchBadge,n,t),this.baseEl,this.stickEl,this.dashBtn,this.bannerEl,this.hintEl),this._soundPill()}_banner(t,e,n=1800,i="#ffd23a",r=!1){let a=this.bannerEl;a&&(a.replaceChildren(...[K("div",{class:r?"bk-goalrib":"bk-bigtxt",style:r?"":`color:${i}`},t),e?K("div",{class:"bk-subtxt"},e):null].filter(Boolean)),a.classList.remove("show"),a.offsetWidth,a.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>a.classList.remove("show"),n))}togglePause(){this.mode!=="play"||this.over||(this.paused=!this.paused,this.paused?(this.pauseEl=K("div",{class:"bk-dim"},K("div",{class:"bk-card"},K("div",{class:"bk-title"},dt.t("paused")),K("button",{class:"bk-btn",onclick:()=>this.togglePause()},"\u25B6 ",dt.t("resume")),K("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.start(this.round)}},"\u{1F504} ",dt.t("restart")),K("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showMenu()}},"\u{1F3E0} ",dt.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&(this.pauseEl.remove(),this.pauseEl=null))}_results(t){let e=dt.getLang()!=="en";this.over=!0;let n=this.save.stars[this.round]||0;Il(this.save,this.round,t),this._persist(),this.sound.play(t.win?"win":"lose"),this.sound.setMode(null);let i=K("div",{class:"bk-stars"},[1,2,3].map(a=>K("span",{class:a<=t.stars?"":"off",style:`animation-delay:${a*.25}s`},"\u2B50"))),r=this.round===ln.length-1;if(this.layer.append(K("div",{class:"bk-dim"},K("div",{class:"bk-card res"},K("div",{class:"bk-logo",style:`color:${t.win?"#ffd23a":t.draw?"#bcd":"#ff8a6a"}`},t.win?dt.t("victory"):t.draw?dt.t("draw"):dt.t("lose")),K("div",{class:"bk-bigscore"},`${dt.num(t.goals[0])} - ${dt.num(t.goals[1])}`),i,K("div",{class:"bk-small"},`${dt.t("earned")} \u{1FA99} ${dt.num(t.coins)}`,t.win?` \xB7 ${dt.t(this.age&&this.gender==="girl"?"win_f":"win_m")}`:""),t.win&&!r?K("button",{class:"bk-btn",onclick:()=>{this.sound.play("tap"),this.start(this.round+1)}},"\u25B6 ",dt.t("next")):null,K("button",{class:t.win?"bk-btn alt":"bk-btn",onclick:()=>{this.sound.play("tap"),this.start(this.round)}},"\u{1F504} ",dt.t("restart")),K("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showRounds()}},"\u{1F3C6} ",dt.t("rounds")),K("button",{class:"bk-btn dark",onclick:()=>{this.sound.play("tap"),this.showMenu()}},"\u{1F3E0} ",dt.t("home"))))),t.win)for(let a=0;a<40;a++)this.puff(this.camT.x+(Math.random()-.5)*14,8+Math.random()*5,this.camT.z-6+Math.random()*6,1,[16765498,16734858,5957887,8056954][a%4],2,-3,.5)}_events(t){let e=this.m,n=this.real;for(let i of t){let r=i.id!==void 0&&e.knights[i.id];switch(i.type){case"count":n&&(this.sound.play("count"),this._banner(dt.num(i.n),dt.t("ready"),900,"#fff"));break;case"go":n&&(this.sound.play("go"),this.sound.play("whistle"),this._banner(dt.t("go"),"",900,"#7af07a"),e.kickoffs===1&&this.hint(dt.t("tip"),3600));break;case"dash":r&&(this.puff(r.x,.3,r.z,8,15259824,2.5),n&&this.sound.play("dash"));break;case"barrelHit":{let a=e.barrel;this.puff(a.x,.8,a.z,5+Math.round(i.power*10),i.dash?16771488:15259824,3+i.power*4),n&&(this.sound.play("thud",i.power),i.dash&&this.sound.play("clang")),i.power>.5&&(this.shakeT=Math.max(this.shakeT,.25+i.power*.2));break}case"fence":n&&this.sound.play("fence",i.power);break;case"stun":r&&(this.puff(r.x,1.8,r.z,14,16769098,4,-4,2),n&&this.sound.play("stun"));break;case"clash":n&&this.sound.play("clang");break;case"clang":n&&this.sound.play("clang");break;case"doorWarn":n&&this.sound.play("creak");break;case"doorOpen":n&&this.sound.play("dooropen");break;case"fall":r&&(this.puff(r.x,.4,r.z,12,6965802,3),n&&this.sound.play("doorfall"));break;case"boulderWarn":n&&this.sound.play("warn");break;case"boulderGo":n&&this.sound.play("rumble");break;case"goal":{this.cheer=3,this.goalTeam=i.team,this.shakeT=.5,n&&(this.sound.play(i.team===0?"goal":"conceded"),i.team!==0&&this.sound.swell(.07,1.6),this._banner(dt.t("goal"),"",2300,i.team===0?"#ffd23a":"#ff8a8a",!0));let a=i.team===0?-$t.hl:$t.hl;for(let o=0;o<70;o++)this.puff((Math.random()-.5)*10,1+Math.random()*3,a+(i.team===0?1:-1)*Math.random()*3,1,[16765498,16734858,5957887,8056954,16777215][o%5],5,-4,3);break}case"overtime":n&&(this._banner(dt.t("overtime"),"",2e3,"#ff8a3a"),this.sound.play("whistle"));break;case"over":n&&(this.over=!0,this.overT=1.2,this.resEv=i.result,this.sound.play("whistle"));break;default:break}}}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e;let n=this.m;n&&this.dyn.visible&&(this.mode==="play"&&!this.paused&&this.introT>0?(this.introT-=e,this.introT<=0&&this.introEl&&(this.introEl.remove(),this.introEl=null)):this.mode==="play"&&!this.paused?(!this.over||this.overT>0)&&(this._readInput(),this._events(n.step(e))):this.mode==="menu"&&(this._events(n.step(e)),n.phase==="over"&&this._demo()),this.mode==="play"&&this.over&&this.resEv&&!this.resShown&&(this.overT-=e,this.overT<=0&&(this.resShown=!0,this._results(this.resEv))),this.mode==="play"&&!this.over&&(this.resShown=!1),this.mode==="play"&&this._hudUpdate()),this.cheer=Math.max(0,this.cheer-e),this.shakeT=Math.max(0,this.shakeT-e),this._crowdTick-=e,this._crowdTick<=0&&(this._crowdTick=1/20,this._updateCrowd(this.clock,this.cheer));for(let i of this.torches)i.visible&&i.userData.fl.scale.set(.55+Math.sin(this.clock*12+i.position.z)*.08,1.1+Math.sin(this.clock*9+i.position.x)*.2,.55);this._render(e)}_hudUpdate(){let t=this.m;this.scoreA.textContent!==String(t.score[0])&&(this.scoreA.textContent=dt.num(t.score[0])),this.scoreB.textContent!==String(t.score[1])&&(this.scoreB.textContent=dt.num(t.score[1]));let e=Math.ceil(Math.max(0,t.timeLeft)),n=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,i=t.overtime?`\u23F1 ${n}`:n;this.timeEl.textContent!==(dt.getLang()==="en"?i:i.replace(/[0-9]/g,o=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[o]))&&(this.timeEl.textContent=dt.getLang()==="en"?i:i.replace(/[0-9]/g,o=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[o])),this.timeEl.classList.toggle("low",e<=15&&!t.overtime);let r=t.knights[0],a=Po(1-r.cd/(this.age<=4?1.1:1.5),0,1);this.dashFill.style.setProperty("--f",`${Math.round(a*100)}%`),this.dashBtn.classList.toggle("ready",a>=1)}_syncKnight(t,e,n){let i=e.userData,r=Math.hypot(t.vx,t.vz);e.position.set(t.x,0,t.z);let o=Math.atan2(t.fx,t.fz)-e.rotation.y;o=Math.atan2(Math.sin(o),Math.cos(o)),e.rotation.y+=o*Math.min(1,n*14),i.phase+=r*n*1.7;let c=Math.sin(i.phase)*Math.min(1,r/6),l=t.stun>0,h=!!t.fall&&l,d=this.cheer>0&&this.m.phase==="goal",f=d&&t.team===this.goalTeam,p=t.dash>0?.55:Math.min(.25,r*.03);i.legL.rotation.x=c*.9,i.legR.rotation.x=-c*.9,i.armL.rotation.x=t.dash>0?.9:-c*.8,i.armR.rotation.x=t.dash>0?.9:c*.8,i.armL.rotation.z=0,i.armR.rotation.z=0;let m=Math.abs(c)*.1*Math.min(1,r/6),A=p,g=0,u=1;if(f?(m=Math.abs(Math.sin(this.clock*8+t.id))*.9,i.armL.rotation.x=i.armR.rotation.x=-2.8,i.armL.rotation.z=-.3,i.armR.rotation.z=.3,A=0):d&&(A=.35,i.armL.rotation.x=i.armR.rotation.x=.2,m=0),l&&!h){let x=1-t.stun/(t.stunDur||1),y=Math.min(1,x*5);A=-y*1.45+Math.sin(this.clock*20)*.04*(1-y),g=Math.sin(this.clock*7)*.12*y,m=-.15*y,i.legL.rotation.x=i.legR.rotation.x=.3,i.armL.rotation.x=i.armR.rotation.x=-1.6,x<.2&&(g=x*18)}if(h){let x=1-t.stun/(t.stunDur||1);u=x<.2?1-x*5:x>.85?(x-.85)/.15:.001,t.fall&&e.position.set(t.fall.x+(t.x-t.fall.x),0,t.z)}i.inner.rotation.x=A,i.inner.rotation.z=g,i.inner.position.y=m,e.scale.set(1,Math.max(.001,u),1),i.shadow.scale.setScalar(Math.max(.5,1-m*.4)),i.stars.visible=l&&!h,i.stars.visible&&i.stars.children.forEach((x,y)=>{let _=this.clock*5+y*2.1;x.position.set(Math.cos(_)*.7,Math.sin(this.clock*8+y)*.1,Math.sin(_)*.7),x.rotation.y=_*2}),i.inner.visible=!(h&&u<.01),i.marker&&(i.marker.userData.arrow.position.y=3.5+Math.sin(this.clock*6)*.2,i.marker.visible=!l),t.mud&&r>1&&Math.random()<n*8&&this.puff(t.x,.2,t.z,1,6965802,1.2,-3)}_render(t){let e=this.m,n=this.mode==="play"||this.mode==="menu";if(e&&this.dyn.visible){e.knights.forEach((l,h)=>this._syncKnight(l,this.kMesh[h],t));let i=e.barrel,r=this.barrelMesh,a=r.userData;r.position.set(i.x,a.y,i.z);let o=Math.hypot(i.vx,i.vz);if(o>.8){let h=Math.atan2(i.vx,i.vz)-a.yaw.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h)),a.yaw.rotation.y+=h*Math.min(1,t*10)}a.roll.rotation.x+=o*t/le,this.barrelShadow.position.set(i.x,.03,i.z),o>7&&Math.random()<t*14&&this.puff(i.x,.2,i.z,1,15259824,1.2,-1);for(let l of this.doorMesh){let h=l.d,d=h.state==="open"?1:0,f=0;h.state==="open"&&(d=Math.min(1,(2.4-h.t)*5)*Math.min(1,h.t*3)),h.state==="warn"&&(f=Math.sin(this.clock*40)*.04,d=0),l.panels[0].rotation.z=d*1.45+f,l.panels[1].rotation.z=-d*1.45-f,l.tape.material.opacity=h.state==="warn"?.35+Math.sin(this.clock*16)*.3:0,l.tape.scale.y=1}let c=new Set;for(let l of e.boulders){let h=this._boulderMesh(l);c.add(l.id),h.wrap.position.set(0,0,l.z),l.state==="warn"?(h.lane.material.opacity=.18+(Math.sin(this.clock*14)*.5+.5)*.3,h.arrows.visible=!0,h.ch.offset.x=-this.clock*.8*l.dir,h.rock.position.set(-l.dir*($t.hw+1.4),1.1,0),h.rock.rotation.z+=t):(h.lane.material.opacity=.1,h.arrows.visible=!1,h.rock.position.set(l.x,1.1,0),h.rock.rotation.z-=l.dir*t*10,h.rock.rotation.x+=t*2,Math.random()<t*20&&this.puff(l.x,.3,l.z,1,12101768,1.5,-2))}for(let[l,h]of this.bouldMesh)c.has(l)||(this.dyn.remove(h.wrap),this.bouldMesh.delete(l))}this._tickParticles(t),this._camera(t,n),this.renderer.render(this.scene,this.camera)}_camera(t,e){let n=this.camera,i=this.cw/this.ch,r=i<1;if(this.mode==="shop"&&this.preview){this.preview.rotation.y+=t*.8,n.position.set(0,3,13),n.lookAt(0,r?-1.2:-1.8,0);return}let a=this.m;if(!a)return;let o=n.fov*Math.PI/180,c=2*Math.atan(Math.tan(o/2)*i),l=r?17:30,h=r?21:28,d=Math.max(l/2/Math.tan(c/2),h/2/Math.tan(o/2)*.95),f=.95,p=a.barrel,m=a.knights[0],A=_r(p.x,m.x,this.real?.35:0),g=_r(p.z,m.z,this.real?.35:0),u=Math.max(0,$t.hl-8);g=Po(g,-u,u);let x=Math.max(0,$t.hw-(r?3:5));A=Po(A*(r?1:.4),-x,x),this.mode==="menu"&&(A=Math.sin(this.clock*.1)*3,g=Math.sin(this.clock*.15)*8);let _=this.camSnap?1:Math.min(1,t*3.5);this.camSnap=!1,this.camT.x=_r(this.camT.x,A,_),this.camT.z=_r(this.camT.z,g,_);let E=this.shakeT>0?this.shakeT*.35:0;n.position.set(this.camT.x+(Math.random()-.5)*E,Math.sin(f)*d,this.camT.z+Math.cos(f)*d+(Math.random()-.5)*E),n.lookAt(this.camT.x,0,this.camT.z-1)}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKeyUp),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},nm=`
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
`,Do={start(s,t,e){let n=new Lo(s,t||{},e);return Do.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.BarrelKnights=Do;var pm=Do;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
