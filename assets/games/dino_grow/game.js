(()=>{var xo="170";var Gl=0,jo=1,Wl=2;var $c=1,Xl=2,un=3,Pn=0,qe=1,We=2,Tn=0,_i=1,Qo=2,Jo=3,$o=4,Yl=5,Wn=100,Kl=101,Zl=102,jl=103,Ql=104,Jl=200,$l=201,th=202,eh=203,ta=204,ea=205,nh=206,ih=207,sh=208,rh=209,ah=210,oh=211,ch=212,lh=213,hh=214,na=0,ia=1,sa=2,Ei=3,ra=4,aa=5,oa=6,ca=7,vo=0,uh=1,dh=2,qn=0,fh=1,ph=2,gh=3,mh=4,Ah=5,xh=6,vh=7;var tl=300,wi=301,Ti=302,la=303,ha=304,dr=306,ua=1e3,Yn=1001,da=1002,Ye=1003,yh=1004;var us=1005;var $e=1006,Ir=1007;var Kn=1008;var mn=1009,el=1010,nl=1011,$i=1012,yo=1013,Zn=1014,fn=1015,rs=1016,Co=1017,Io=1018,qi=1020,il=35902,sl=1021,rl=1022,Xe=1023,al=1024,ol=1025,Mi=1026,Ri=1027,cl=1028,_o=1029,ll=1030,Mo=1031;var bo=1033,Vs=33776,Ns=33777,zs=33778,Bs=33779,fa=35840,pa=35841,ga=35842,ma=35843,Aa=36196,xa=37492,va=37496,ya=37808,Ca=37809,Ia=37810,_a=37811,Ma=37812,ba=37813,Sa=37814,Ea=37815,wa=37816,Ta=37817,qa=37818,Ra=37819,Pa=37820,La=37821,Fs=36492,Ua=36494,Da=36495,hl=36283,Va=36284,Na=36285,za=36286;var Os=2300,Ba=2301,_r=2302,tc=2400,ec=2401,nc=2402;var Ch=3200,Ih=3201;var ul=0,_h=1,En="",Se="srgb",Di="srgb-linear",fr="linear",Jt="srgb";var si=7680;var ic=519,Mh=512,bh=513,Sh=514,dl=515,Eh=516,wh=517,Th=518,qh=519,Fa=35044;var sc="300 es",pn=2e3,ks=2001,Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mr=Math.PI/180,Oa=180/Math.PI;function Rn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Rh(i,t){return(i%t+t)%t}function br(i,t,e){return(1-e)*i+e*t}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],A=s[0],g=s[3],p=s[6],b=s[1],I=s[4],v=s[7],U=s[2],S=s[5],E=s[8];return r[0]=a*A+o*b+c*U,r[3]=a*g+o*I+c*S,r[6]=a*p+o*v+c*E,r[1]=l*A+h*b+d*U,r[4]=l*g+h*I+d*S,r[7]=l*p+h*v+d*E,r[2]=u*A+f*b+m*U,r[5]=u*g+f*I+m*S,r[8]=u*p+f*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=d*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=u*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=f*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sr=new Lt;function fl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){let i=Hs("canvas");return i.style.display="block",i}var rc={};function ji(i){i in rc||(rc[i]=!0,console.warn(i))}function Lh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Uh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xt={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===En?fr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ac=[.64,.33,.3,.6,.15,.06],oc=[.2126,.7152,.0722],cc=[.3127,.329],lc=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Di]:{primaries:ac,whitePoint:cc,transfer:fr,toXYZ:lc,fromXYZ:hc,luminanceCoefficients:oc,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:ac,whitePoint:cc,transfer:Jt,toXYZ:lc,fromXYZ:hc,luminanceCoefficients:oc,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});var ri,ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=Hs("canvas")),ri.width=t.width,ri.height=t.height;let n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Hs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vh=0,Gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Er(s[a].image)):r.push(Er(s[a]))}else r=Er(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Er(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nh=0,Ve=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=$e,a=Kn,o=Xe,c=mn,l=i.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Rn(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=tl;Ve.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],A=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(l+1)/2,v=(f+1)/2,U=(p+1)/2,S=(h+u)/4,E=(d+A)/4,L=(m+g)/4;return I>v&&I>U?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=S/n,r=E/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=L/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=E/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(d-A)*(d-A)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-A)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ha=class extends Ln{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Gs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ws=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=A;return}if(d!==A||c!==u||l!==f||h!==m){let g=1-o,p=c*u+l*f+h*m+d*A,b=p>=0?1:-1,I=1-p*p;if(I>Number.EPSILON){let U=Math.sqrt(I),S=Math.atan2(U,p*b);g=Math.sin(g*S)/U,o=Math.sin(o*S)/U}let v=o*b;if(c=c*g+u*v,l=l*g+f*v,h=h*g+m*v,d=d*g+A*v,g===1-o){let U=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=U,l*=U,h*=U,d*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-o*f,t[e+2]=l*m+h*f+o*u-c*d,t[e+3]=h*m-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wr=new D,uc=new Un,jn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(r,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),fs.subVectors(this.max,Hi),ai.subVectors(t.a,Hi),oi.subVectors(t.b,Hi),ci.subVectors(t.c,Hi),Cn.subVectors(oi,ai),In.subVectors(ci,oi),zn.subVectors(ai,ci);let e=[0,-Cn.z,Cn.y,0,-In.z,In.y,0,-zn.z,zn.y,Cn.z,0,-Cn.x,In.z,0,-In.x,zn.z,0,-zn.x,-Cn.y,Cn.x,0,-In.y,In.x,0,-zn.y,zn.x,0];return!Tr(e,ai,oi,ci,fs)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,ai,oi,ci,fs))?!1:(ps.crossVectors(Cn,In),e=[ps.x,ps.y,ps.z],Tr(e,ai,oi,ci,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},an=[new D,new D,new D,new D,new D,new D,new D,new D],ke=new D,ds=new jn,ai=new D,oi=new D,ci=new D,Cn=new D,In=new D,zn=new D,Hi=new D,fs=new D,ps=new D,Bn=new D;function Tr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bn.fromArray(i,r);let o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),c=t.dot(Bn),l=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zh=new jn,Gi=new D,qr=new D,ts=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gi.subVectors(t,this.center);let e=Gi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gi.copy(t.center).add(qr)),this.expandByPoint(Gi.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},on=new D,Rr=new D,gs=new D,_n=new D,Pr=new D,ms=new D,Lr=new D,Wa=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Rr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(gs),o=_n.dot(this.direction),c=-_n.dot(gs),l=_n.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*c-o,u=a*o-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let A=1/h;d*=A,u*=A,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rr).addScaledVector(gs,u),f}intersectSphere(t,e){on.subVectors(t.center,this.origin);let n=on.dot(this.direction),s=on.dot(on)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,s,r){Pr.subVectors(e,t),ms.subVectors(n,t),Lr.crossVectors(Pr,ms);let a=this.direction.dot(Lr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);let c=o*this.direction.dot(ms.crossVectors(_n,ms));if(c<0)return null;let l=o*this.direction.dot(Pr.cross(_n));if(l<0||c+l>a)return null;let h=-o*_n.dot(Lr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,m,A,g)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,A=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-A*l,e[9]=-o*c,e[2]=A-u*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,m=l*h,A=l*d;e[0]=u+A*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=A+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,m=l*h,A=l*d;e[0]=u-A*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=A-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,A=o*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+A,e[1]=c*d,e[5]=A*l+u,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-A*d}else if(t.order==="XZY"){let u=a*c,f=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+A,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=A*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bh,t,Fh)}lookAt(t,e,n){let s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Mn.crossVectors(n,Ue),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Mn.crossVectors(n,Ue)),Mn.normalize(),As.crossVectors(Ue,Mn),s[0]=Mn.x,s[4]=As.x,s[8]=Ue.x,s[1]=Mn.y,s[5]=As.y,s[9]=Ue.y,s[2]=Mn.z,s[6]=As.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],A=n[6],g=n[10],p=n[14],b=n[3],I=n[7],v=n[11],U=n[15],S=s[0],E=s[4],L=s[8],_=s[12],C=s[1],w=s[5],F=s[9],B=s[13],H=s[2],Z=s[6],G=s[10],tt=s[14],k=s[3],rt=s[7],ut=s[11],It=s[15];return r[0]=a*S+o*C+c*H+l*k,r[4]=a*E+o*w+c*Z+l*rt,r[8]=a*L+o*F+c*G+l*ut,r[12]=a*_+o*B+c*tt+l*It,r[1]=h*S+d*C+u*H+f*k,r[5]=h*E+d*w+u*Z+f*rt,r[9]=h*L+d*F+u*G+f*ut,r[13]=h*_+d*B+u*tt+f*It,r[2]=m*S+A*C+g*H+p*k,r[6]=m*E+A*w+g*Z+p*rt,r[10]=m*L+A*F+g*G+p*ut,r[14]=m*_+A*B+g*tt+p*It,r[3]=b*S+I*C+v*H+U*k,r[7]=b*E+I*w+v*Z+U*rt,r[11]=b*L+I*F+v*G+U*ut,r[15]=b*_+I*B+v*tt+U*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*c*d-s*l*d-r*o*u+n*l*u+s*o*f-n*c*f)+A*(+e*c*f-e*l*u+r*a*u-s*a*f+s*l*h-r*c*h)+g*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*d+e*o*u+s*a*d-n*a*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],A=t[13],g=t[14],p=t[15],b=d*g*l-A*u*l+A*c*f-o*g*f-d*c*p+o*u*p,I=m*u*l-h*g*l-m*c*f+a*g*f+h*c*p-a*u*p,v=h*A*l-m*d*l+m*o*f-a*A*f-h*o*p+a*d*p,U=m*d*c-h*A*c-m*o*u+a*A*u+h*o*g-a*d*g,S=e*b+n*I+s*v+r*U;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=b*E,t[1]=(A*u*r-d*g*r-A*s*f+n*g*f+d*s*p-n*u*p)*E,t[2]=(o*g*r-A*c*r+A*s*l-n*g*l-o*s*p+n*c*p)*E,t[3]=(d*c*r-o*u*r-d*s*l+n*u*l+o*s*f-n*c*f)*E,t[4]=I*E,t[5]=(h*g*r-m*u*r+m*s*f-e*g*f-h*s*p+e*u*p)*E,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*E,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*f+e*c*f)*E,t[8]=v*E,t[9]=(m*d*r-h*A*r-m*n*f+e*A*f+h*n*p-e*d*p)*E,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*f-e*o*f)*E,t[12]=U*E,t[13]=(h*A*s-m*d*s+m*n*u-e*A*u-h*n*g+e*d*g)*E,t[14]=(m*o*s-a*A*s-m*n*c+e*A*c+a*n*g-e*o*g)*E,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*u+e*o*u)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,m=r*d,A=a*h,g=a*d,p=o*d,b=c*l,I=c*h,v=c*d,U=n.x,S=n.y,E=n.z;return s[0]=(1-(A+p))*U,s[1]=(f+v)*U,s[2]=(m-I)*U,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(u+p))*S,s[6]=(g+b)*S,s[7]=0,s[8]=(m+I)*E,s[9]=(g-b)*E,s[10]=(1-(u+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=li.set(s[0],s[1],s[2]).length(),a=li.set(s[4],s[5],s[6]).length(),o=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);let l=1/r,h=1/a,d=1/o;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=d,He.elements[9]*=d,He.elements[10]*=d,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=pn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,m;if(o===pn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ks)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=pn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*l,f=(n+s)*h,m,A;if(o===pn)m=(a+r)*d,A=-2*d;else if(o===ks)m=r*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},li=new D,He=new he,Bh=new D(0,0,0),Fh=new D(1,1,1),Mn=new D,As=new D,Ue=new D,dc=new he,fc=new Un,tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Oh=0,pc=new D,hi=new Un,cn=new he,xs=new D,Wi=new D,kh=new D,Hh=new Un,gc=new D(1,0,0),mc=new D(0,1,0),Ac=new D(0,0,1),xc={type:"added"},Gh={type:"removed"},ui={type:"childadded",child:null},Ur={type:"childremoved",child:null},xe=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new tn,n=new Un,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Lt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(mc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return pc.copy(t).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(mc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Wi,xs,this.up):cn.lookAt(xs,Wi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(cn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xc),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gh),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xc),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Hh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xe.DEFAULT_UP=new D(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=new D,ln=new D,Dr=new D,hn=new D,di=new D,fi=new D,vc=new D,Vr=new D,Nr=new D,zr=new D,Br=new le,Fr=new le,Or=new le,wn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ge.subVectors(t,e),s.cross(Ge);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ge.subVectors(s,e),ln.subVectors(n,e),Dr.subVectors(t,e);let a=Ge.dot(Ge),o=Ge.dot(ln),c=Ge.dot(Dr),l=ln.dot(ln),h=ln.dot(Dr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,m=(a*h-o*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Br.setScalar(0),Fr.setScalar(0),Or.setScalar(0),Br.fromBufferAttribute(t,e),Fr.fromBufferAttribute(t,n),Or.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Br,r.x),a.addScaledVector(Fr,r.y),a.addScaledVector(Or,r.z),a}static isFrontFacing(t,e,n,s){return Ge.subVectors(n,e),ln.subVectors(t,e),Ge.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ge.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;di.subVectors(s,n),fi.subVectors(r,n),Vr.subVectors(t,n);let c=di.dot(Vr),l=fi.dot(Vr);if(c<=0&&l<=0)return e.copy(n);Nr.subVectors(t,s);let h=di.dot(Nr),d=fi.dot(Nr);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(di,a);zr.subVectors(t,r);let f=di.dot(zr),m=fi.dot(zr);if(m>=0&&f<=m)return e.copy(r);let A=f*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(fi,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return vc.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(vc,o);let p=1/(g+A+u);return a=A*p,o=u*p,e.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Rh(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=kr(a,r,t+1/3),this.g=kr(a,r,t),this.b=kr(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Xt.fromWorkingColorSpace(_e.copy(this),t),Math.round(Te(_e.r*255,0,255))*65536+Math.round(Te(_e.g*255,0,255))*256+Math.round(Te(_e.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(_e.copy(this),e);let n=_e.r,s=_e.g,r=_e.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=Se){Xt.fromWorkingColorSpace(_e.copy(this),t);let e=_e.r,n=_e.g,s=_e.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(vs);let n=br(bn.h,vs.h,e),s=br(bn.s,vs.s,e),r=br(bn.l,vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_e=new Vt;Vt.NAMES=pl;var Wh=0,Dn=class extends Ln{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Rn(),this.name="",this.blending=_i,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new D,ys=new Nt,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Je(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Je(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Je(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}};var Ys=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ks=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xh=0,Be=new he,Hr=new xe,pi=new D,De=new jn,Xi=new jn,Ae=new D,Re=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fl(t)?Ks:Ys)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(De.min,Xi.min),De.expandByPoint(Ae),Ae.addVectors(De.max,Xi.max),De.expandByPoint(Ae)):(De.expandByPoint(Xi.min),De.expandByPoint(Xi.max))}De.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(t,l),Ae.add(pi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new D,c[L]=new D;let l=new D,h=new D,d=new D,u=new Nt,f=new Nt,m=new Nt,A=new D,g=new D;function p(L,_,C){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,_),m.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),m.sub(u);let w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(w),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),o[L].add(A),o[_].add(A),o[C].add(A),c[L].add(g),c[_].add(g),c[C].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,_=b.length;L<_;++L){let C=b[L],w=C.start,F=C.count;for(let B=w,H=w+F;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let I=new D,v=new D,U=new D,S=new D;function E(L){U.fromBufferAttribute(s,L),S.copy(U);let _=o[L];I.copy(_),I.sub(U.multiplyScalar(U.dot(_))).normalize(),v.crossVectors(S,_);let w=v.dot(c[L])<0?-1:1;a.setXYZW(L,I.x,I.y,I.z,w)}for(let L=0,_=b.length;L<_;++L){let C=b[L],w=C.start,F=C.count;for(let B=w,H=w+F;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),A=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?f=c[A]*o.data.stride+o.offset:f=c[A]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new ve(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yc=new he,Fn=new Wa,Cs=new ts,Cc=new D,Is=new D,_s=new D,Ms=new D,Gr=new D,bs=new D,Ic=new D,Ss=new D,pe=class extends xe{constructor(t=new Re,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){bs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Gr.fromBufferAttribute(d,t),a?bs.addScaledVector(Gr,h):bs.addScaledVector(Gr.sub(e),h))}e.add(bs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(Cs.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(Cs,Cc)===null||Fn.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(yc.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(yc),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=u.length;m<A;m++){let g=u[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),I=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,U=I;v<U;v+=3){let S=o.getX(v),E=o.getX(v+1),L=o.getX(v+2);s=Es(this,p,t,n,l,h,d,S,E,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(o.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let b=o.getX(g),I=o.getX(g+1),v=o.getX(g+2);s=Es(this,a,t,n,l,h,d,b,I,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=u.length;m<A;m++){let g=u[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),I=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,U=I;v<U;v+=3){let S=v,E=v+1,L=v+2;s=Es(this,p,t,n,l,h,d,S,E,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(c.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let b=g,I=g+1,v=g+2;s=Es(this,a,t,n,l,h,d,b,I,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Yh(i,t,e,n,s,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Pn,o),c===null)return null;Ss.copy(o),Ss.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ss);return l<e.near||l>e.far?null:{distance:l,point:Ss.clone(),object:i}}function Es(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Is),i.getVertexPosition(c,_s),i.getVertexPosition(l,Ms);let h=Yh(i,t,e,n,Is,_s,Ms,Ic);if(h){let d=new D;wn.getBarycoord(Ic,Is,_s,Ms,d),s&&(h.uv=wn.getInterpolatedAttribute(s,o,c,l,d,new Nt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,o,c,l,d,new Nt)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new D,materialIndex:0};wn.getNormal(Is,_s,Ms,u.normal),h.face=u,h.barycoord=d}return h}var Qn=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function m(A,g,p,b,I,v,U,S,E,L,_){let C=v/E,w=U/L,F=v/2,B=U/2,H=S/2,Z=E+1,G=L+1,tt=0,k=0,rt=new D;for(let ut=0;ut<G;ut++){let It=ut*w-B;for(let zt=0;zt<Z;zt++){let te=zt*C-F;rt[A]=te*b,rt[g]=It*I,rt[p]=H,l.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[p]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(zt/E),d.push(1-ut/L),tt+=1}}for(let ut=0;ut<L;ut++)for(let It=0;It<E;It++){let zt=u+It+Z*ut,te=u+It+Z*(ut+1),X=u+(It+1)+Z*(ut+1),et=u+(It+1)+Z*ut;c.push(zt,te,et),c.push(te,X,et),k+=6}o.addGroup(f,k,_),f+=k,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Pi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){let t={};for(let e=0;e<i.length;e++){let n=Pi(i[e]);for(let s in n)t[s]=n[s]}return t}function Kh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var Zh={clone:Pi,merge:be},jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Zs=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Sn=new D,_c=new Nt,Mc=new Nt,Ee=class extends Zs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,_c,Mc),e.subVectors(Mc,_c)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gi=-90,mi=1,Xa=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(gi,mi,t,e);s.layers=this.layers,this.add(s);let r=new Ee(gi,mi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(gi,mi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(gi,mi,t,e);o.layers=this.layers,this.add(o);let c=new Ee(gi,mi,t,e);c.layers=this.layers,this.add(c);let l=new Ee(gi,mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},js=class extends Ve{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ya=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new js(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Tn});r.uniforms.tEquirect.value=e;let a=new pe(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=$e),new Xa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Wr=new D,Jh=new D,$h=new Lt,dn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wr.subVectors(n,e).cross(Jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$h.getNormalMatrix(t),s=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},On=new ts,ws=new D,es=class{constructor(t=new dn,e=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],A=s[10],g=s[11],p=s[12],b=s[13],I=s[14],v=s[15];if(n[0].setComponents(c-r,u-l,g-f,v-p).normalize(),n[1].setComponents(c+r,u+l,g+f,v+p).normalize(),n[2].setComponents(c+a,u+h,g+m,v+b).normalize(),n[3].setComponents(c-a,u-h,g-m,v-b).normalize(),n[4].setComponents(c-o,u-d,g-A,v-I).normalize(),e===pn)n[5].setComponents(c+o,u+d,g+A,v+I).normalize();else if(e===ks)n[5].setComponents(o,d,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ws.x=s.normal.x>0?t.max.x:t.min.x,ws.y=s.normal.y>0?t.max.y:t.min.y,ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ml(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],A=d[f];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++u,d[u]=A)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let A=d[f];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Jn=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let b=p*u-a;for(let I=0;I<l;I++){let v=I*d-r;m.push(v,-b,0),A.push(0,0,1),g.push(I/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let I=b+l*p,v=b+l*(p+1),U=b+1+l*(p+1),S=b+1+l*p;f.push(I,v,S),f.push(v,U,S)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(A,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
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
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
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
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lu=`#ifdef USE_BATCHING
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
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pu=`#ifdef USE_IRIDESCENCE
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
#endif`,gu=`#ifdef USE_BUMPMAP
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
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mu=`#define PI 3.141592653589793
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
} // validated`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Su=`vec3 transformedNormal = objectNormal;
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
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
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
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xu=`uniform bool receiveShadow;
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
#endif`,Yu=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
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
#endif`,$u=`struct PhysicalMaterial {
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
}`,td=`
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,id=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bd=`float getShadowMask() {
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
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
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
#endif`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
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
}`,cf=`#if DEPTH_PACKING == 3200
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
}`,lf=`#define DISTANCE
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
}`,hf=`#define DISTANCE
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
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
}`,pf=`uniform vec3 diffuse;
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
}`,gf=`#include <common>
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
}`,mf=`uniform vec3 diffuse;
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
}`,Af=`#define LAMBERT
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
}`,xf=`#define LAMBERT
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
}`,vf=`#define MATCAP
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
}`,yf=`#define MATCAP
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
}`,Cf=`#define NORMAL
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
}`,If=`#define NORMAL
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
}`,_f=`#define PHONG
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
}`,Mf=`#define PHONG
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
}`,bf=`#define STANDARD
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
}`,Sf=`#define STANDARD
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
}`,Ef=`#define TOON
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
}`,wf=`#define TOON
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
}`,Tf=`uniform float size;
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
}`,Rf=`#include <common>
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
}`,Pf=`uniform vec3 color;
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
}`,Lf=`uniform float rotation;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:eu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:cu,batching_pars_vertex:lu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:gu,clipping_planes_fragment:mu,clipping_planes_pars_fragment:Au,clipping_planes_pars_vertex:xu,clipping_planes_vertex:vu,color_fragment:yu,color_pars_fragment:Cu,color_pars_vertex:Iu,color_vertex:_u,common:Mu,cube_uv_reflection_fragment:bu,defaultnormal_vertex:Su,displacementmap_pars_vertex:Eu,displacementmap_vertex:wu,emissivemap_fragment:Tu,emissivemap_pars_fragment:qu,colorspace_fragment:Ru,colorspace_pars_fragment:Pu,envmap_fragment:Lu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Du,envmap_pars_vertex:Vu,envmap_physical_pars_fragment:Yu,envmap_vertex:Nu,fog_vertex:zu,fog_pars_vertex:Bu,fog_fragment:Fu,fog_pars_fragment:Ou,gradientmap_pars_fragment:ku,lightmap_pars_fragment:Hu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Wu,lights_pars_begin:Xu,lights_toon_fragment:Ku,lights_toon_pars_fragment:Zu,lights_phong_fragment:ju,lights_phong_pars_fragment:Qu,lights_physical_fragment:Ju,lights_physical_pars_fragment:$u,lights_fragment_begin:td,lights_fragment_maps:ed,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:cd,map_particle_fragment:ld,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:pd,morphnormal_vertex:gd,morphtarget_pars_vertex:md,morphtarget_vertex:Ad,normal_fragment_begin:xd,normal_fragment_maps:vd,normal_pars_fragment:yd,normal_pars_vertex:Cd,normal_vertex:Id,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:Ed,opaque_fragment:wd,packing:Td,premultiplied_alpha_fragment:qd,project_vertex:Rd,dithering_fragment:Pd,dithering_pars_fragment:Ld,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Nd,shadowmap_vertex:zd,shadowmask_pars_fragment:Bd,skinbase_vertex:Fd,skinning_pars_vertex:Od,skinning_vertex:kd,skinnormal_vertex:Hd,specularmap_fragment:Gd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:Yd,transmission_fragment:Kd,transmission_pars_fragment:Zd,uv_pars_fragment:jd,uv_pars_vertex:Qd,uv_vertex:Jd,worldpos_vertex:$d,background_vert:tf,background_frag:ef,backgroundCube_vert:nf,backgroundCube_frag:sf,cube_vert:rf,cube_frag:af,depth_vert:of,depth_frag:cf,distanceRGBA_vert:lf,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:gf,meshbasic_frag:mf,meshlambert_vert:Af,meshlambert_frag:xf,meshmatcap_vert:vf,meshmatcap_frag:yf,meshnormal_vert:Cf,meshnormal_frag:If,meshphong_vert:_f,meshphong_frag:Mf,meshphysical_vert:bf,meshphysical_frag:Sf,meshtoon_vert:Ef,meshtoon_frag:wf,points_vert:Tf,points_frag:qf,shadow_vert:Rf,shadow_frag:Pf,sprite_vert:Lf,sprite_frag:Uf},it={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Qe={basic:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:be([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:be([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:be([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:be([it.points,it.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:be([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:be([it.common,it.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:be([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:be([it.sprite,it.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:be([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:be([it.lights,it.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Qe.physical={uniforms:be([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var Ts={r:0,b:0,g:0},kn=new tn,Df=new he;function Vf(i,t,e,n,s,r,a){let o=new Vt(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function m(b){let I=b.isScene===!0?b.background:null;return I&&I.isTexture&&(I=(b.backgroundBlurriness>0?e:t).get(I)),I}function A(b){let I=!1,v=m(b);v===null?p(o,c):v&&v.isColor&&(p(v,1),I=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,I){let v=m(I);v&&(v.isCubeTexture||v.mapping===dr)?(h===void 0&&(h=new pe(new Qn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Pi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),kn.copy(I.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(kn)),h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Jt,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pe(new Jn(2,2),new en({name:"BackgroundMaterial",uniforms:Pi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,I){b.getRGB(Ts,gl(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,I,a)}return{getClearColor:function(){return o},setClearColor:function(b,I=1){o.set(b),c=I,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:A,addToRenderList:g}}function Nf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(C,w,F,B,H){let Z=!1,G=d(B,F,w);r!==G&&(r=G,l(r.object)),Z=f(C,B,F,H),Z&&m(C,B,F,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(C,w,F,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,w,F){let B=F.wireframe===!0,H=n[C.id];H===void 0&&(H={},n[C.id]=H);let Z=H[w.id];Z===void 0&&(Z={},H[w.id]=Z);let G=Z[B];return G===void 0&&(G=u(c()),Z[B]=G),G}function u(C){let w=[],F=[],B=[];for(let H=0;H<e;H++)w[H]=0,F[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:B,object:C,attributes:{},index:null}}function f(C,w,F,B){let H=r.attributes,Z=w.attributes,G=0,tt=F.getAttributes();for(let k in tt)if(tt[k].location>=0){let ut=H[k],It=Z[k];if(It===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(It=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(It=C.instanceColor)),ut===void 0||ut.attribute!==It||It&&ut.data!==It.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(C,w,F,B){let H={},Z=w.attributes,G=0,tt=F.getAttributes();for(let k in tt)if(tt[k].location>=0){let ut=Z[k];ut===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor));let It={};It.attribute=ut,ut&&ut.data&&(It.data=ut.data),H[k]=It,G++}r.attributes=H,r.attributesNum=G,r.index=B}function A(){let C=r.newAttributes;for(let w=0,F=C.length;w<F;w++)C[w]=0}function g(C){p(C,0)}function p(C,w){let F=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;F[C]=1,B[C]===0&&(i.enableVertexAttribArray(C),B[C]=1),H[C]!==w&&(i.vertexAttribDivisor(C,w),H[C]=w)}function b(){let C=r.newAttributes,w=r.enabledAttributes;for(let F=0,B=w.length;F<B;F++)w[F]!==C[F]&&(i.disableVertexAttribArray(F),w[F]=0)}function I(C,w,F,B,H,Z,G){G===!0?i.vertexAttribIPointer(C,w,F,H,Z):i.vertexAttribPointer(C,w,F,B,H,Z)}function v(C,w,F,B){A();let H=B.attributes,Z=F.getAttributes(),G=w.defaultAttributeValues;for(let tt in Z){let k=Z[tt];if(k.location>=0){let rt=H[tt];if(rt===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(rt=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(rt=C.instanceColor)),rt!==void 0){let ut=rt.normalized,It=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;let te=zt.buffer,X=zt.type,et=zt.bytesPerElement,vt=X===i.INT||X===i.UNSIGNED_INT||rt.gpuType===yo;if(rt.isInterleavedBufferAttribute){let at=rt.data,Et=at.stride,qt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Bt=0;Bt<k.locationSize;Bt++)p(k.location+Bt,at.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Bt=0;Bt<k.locationSize;Bt++)g(k.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Bt=0;Bt<k.locationSize;Bt++)I(k.location+Bt,It/k.locationSize,X,ut,Et*et,(qt+It/k.locationSize*Bt)*et,vt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<k.locationSize;at++)p(k.location+at,rt.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<k.locationSize;at++)g(k.location+at);i.bindBuffer(i.ARRAY_BUFFER,te);for(let at=0;at<k.locationSize;at++)I(k.location+at,It/k.locationSize,X,ut,It*et,It/k.locationSize*at*et,vt)}}else if(G!==void 0){let ut=G[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(k.location,ut);break;case 3:i.vertexAttrib3fv(k.location,ut);break;case 4:i.vertexAttrib4fv(k.location,ut);break;default:i.vertexAttrib1fv(k.location,ut)}}}}b()}function U(){L();for(let C in n){let w=n[C];for(let F in w){let B=w[F];for(let H in B)h(B[H].object),delete B[H];delete w[F]}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let w=n[C.id];for(let F in w){let B=w[F];for(let H in B)h(B[H].object),delete B[H];delete w[F]}delete n[C.id]}function E(C){for(let w in n){let F=n[w];if(F[C.id]===void 0)continue;let B=F[C.id];for(let H in B)h(B[H].object),delete B[H];delete F[C.id]}}function L(){_(),a=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:_,dispose:U,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:b}}function zf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let A=0;A<d;A++)m+=h[A]*u[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Bf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Xe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let L=E===rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==fn&&!L)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:v,vertexTextures:U,maxSamples:S}}function Ff(i){let t=this,e=null,n=0,s=!1,r=!1,a=new dn,o=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,A=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,I=b*4,v=p.clippingState||null;c.value=v,v=h(m,u,I,f);for(let U=0;U!==I;++U)v[U]=e[U];p.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let A=d!==null?d.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let p=f+A*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let I=0,v=f;I!==A;++I,v+=4)a.copy(d[I]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Of(i){let t=new WeakMap;function e(a,o){return o===la?a.mapping=wi:o===ha&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===la||o===ha)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ya(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qs=class extends Zs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ii=4,bc=[.125,.215,.35,.446,.526,.582],Xn=20,Xr=new Qs,Sc=new Vt,Yr=null,Kr=0,Zr=0,jr=!1,Gn=(1+Math.sqrt(5))/2,Ai=1/Gn,Ec=[new D(-Gn,Ai,0),new D(Gn,Ai,0),new D(-Ai,0,Gn),new D(Ai,0,Gn),new D(0,Gn,-Ai),new D(0,Gn,Ai),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Js=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Yr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yr,Kr,Zr),this._renderer.xr.enabled=jr,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:rs,format:Xe,colorSpace:Di,depthBuffer:!1},s=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kf(r)),this._blurMaterial=Hf(r,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s){let o=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Sc),h.toneMapping=qn,h.autoClear=!1;let f=new Ke({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new pe(new Qn,f),A=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,A=!0):(f.color.copy(Sc),A=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let I=this._cubeSize;qs(s,b*I,p>2?I:0,I,I),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===wi||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;qs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ec[(s-r-1)%Ec.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new pe(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):Xn;g>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xn}`);let p=[],b=0;for(let E=0;E<Xn;++E){let L=E/A,_=Math.exp(-L*L/2);p.push(_),E===0?b+=_:E<g&&(b+=2*_)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:I}=this;u.dTheta.value=m,u.mipInt.value=I-n;let v=this._sizeLods[s],U=3*v*(s>I-Ii?s-I+Ii:0),S=4*(this._cubeSize-v);qs(e,U,S,3*v,2*v),c.setRenderTarget(e),c.render(d,Xr)}};function kf(i){let t=[],e=[],n=[],s=i,r=i-Ii+1+bc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ii?c=bc[a-i+Ii-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,A=3,g=2,p=1,b=new Float32Array(A*m*f),I=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let S=0;S<f;S++){let E=S%3*2/3-1,L=S>2?0:-1,_=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];b.set(_,A*m*S),I.set(u,g*m*S);let C=[S,S,S,S,S,S];v.set(C,p*m*S)}let U=new Re;U.setAttribute("position",new ve(b,A)),U.setAttribute("uv",new ve(I,g)),U.setAttribute("faceIndex",new ve(v,p)),t.push(U),s>Ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(i,t,e){let n=new An(i,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hf(i,t,e){let n=new Float32Array(Xn),s=new D(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:So(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Tc(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function qc(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function So(){return`

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
	`}function Gf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===la||c===ha,h=c===wi||c===Ti;if(l||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Js(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Js(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xf(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let A=u.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let A=f[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,m=d.attributes.position,A=0;if(f!==null){let b=f.array;A=f.version;for(let I=0,v=b.length;I<v;I+=3){let U=b[I+0],S=b[I+1],E=b[I+2];u.push(U,S,S,E,E,U)}}else if(m!==void 0){let b=m.array;A=m.version;for(let I=0,v=b.length/3-1;I<v;I+=3){let U=I+0,S=I+1,E=I+2;u.push(U,S,S,E,E,U)}}else return;let g=new(fl(u)?Ks:Ys)(u,1);g.version=A;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Yf(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function l(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*a,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,A,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*A[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Kf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zf(i,t,e){let n=new WeakMap,s=new le;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],I=0;f===!0&&(I=1),m===!0&&(I=2),A===!0&&(I=3);let v=o.attributes.position.count*I,U=1;v>t.maxTextureSize&&(U=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*U*4*d),E=new Ws(S,v,U,d);E.type=fn,E.needsUpdate=!0;let L=I*4;for(let C=0;C<d;C++){let w=g[C],F=p[C],B=b[C],H=v*U*4*C;for(let Z=0;Z<w.count;Z++){let G=Z*L;f===!0&&(s.fromBufferAttribute(w,Z),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(F,Z),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),A===!0&&(s.fromBufferAttribute(B,Z),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new Nt(v,U)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let A=0;A<l.length;A++)f+=l[A];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function jf(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var $s=class extends Ve{constructor(t,e,n,s,r,a,o,c,l,h=Mi){if(h!==Mi&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=Zn),n===void 0&&h===Ri&&(n=qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Al=new Ve,Rc=new $s(1,1),xl=new Ws,vl=new Ga,yl=new js,Pc=[],Lc=[],Uc=new Float32Array(16),Dc=new Float32Array(9),Vc=new Float32Array(4);function Vi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Pc[s];if(r===void 0&&(r=new Float32Array(s),Pc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pr(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function $f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function ep(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),me(e,n)}}function np(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),me(e,n)}}function ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),me(e,n)}}function sp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function dp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rc.compareFunction=dl,r=Rc):r=Al,e.setTexture2D(t||r,s)}function fp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vl,s)}function pp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yl,s)}function gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xl,s)}function mp(i){switch(i){case 5126:return Qf;case 35664:return Jf;case 35665:return $f;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return cp;case 36294:return lp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return gp}}function Ap(i,t){i.uniform1fv(this.addr,t)}function xp(i,t){let e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function vp(i,t){let e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function yp(i,t){let e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function Cp(i,t){let e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ip(i,t){let e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _p(i,t){let e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mp(i,t){i.uniform1iv(this.addr,t)}function bp(i,t){i.uniform2iv(this.addr,t)}function Sp(i,t){i.uniform3iv(this.addr,t)}function Ep(i,t){i.uniform4iv(this.addr,t)}function wp(i,t){i.uniform1uiv(this.addr,t)}function Tp(i,t){i.uniform2uiv(this.addr,t)}function qp(i,t){i.uniform3uiv(this.addr,t)}function Rp(i,t){i.uniform4uiv(this.addr,t)}function Pp(i,t,e){let n=this.cache,s=t.length,r=pr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Al,r[a])}function Lp(i,t,e){let n=this.cache,s=t.length,r=pr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vl,r[a])}function Up(i,t,e){let n=this.cache,s=t.length,r=pr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yl,r[a])}function Dp(i,t,e){let n=this.cache,s=t.length,r=pr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xl,r[a])}function Vp(i){switch(i){case 5126:return Ap;case 35664:return xp;case 35665:return vp;case 35666:return yp;case 35674:return Cp;case 35675:return Ip;case 35676:return _p;case 5124:case 35670:return Mp;case 35667:case 35671:return bp;case 35668:case 35672:return Sp;case 35669:case 35673:return Ep;case 5125:return wp;case 36294:return Tp;case 36295:return qp;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Dp}}var Ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mp(e.type)}},Za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vp(e.type)}},ja=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Qr=/(\w+)(\])?(\[|\.)?/g;function Nc(i,t){i.seq.push(t),i.map[t.id]=t}function Np(i,t,e){let n=i.name,s=n.length;for(Qr.lastIndex=0;;){let r=Qr.exec(n),a=Qr.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Nc(e,l===void 0?new Ka(o,i,t):new Za(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ja(o),Nc(e,d)),e=d}}}var Si=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Np(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function zc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zp=37297,Bp=0;function Fp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Bc=new Lt;function Op(i){Xt._getMatrix(Bc,Xt.workingColorSpace,i);let t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fp(i.getShaderSource(t),a)}else return s}function kp(i,t){let e=Op(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hp(i,t){let e;switch(t){case fh:e="Linear";break;case ph:e="Reinhard";break;case gh:e="Cineon";break;case mh:e="ACESFilmic";break;case xh:e="AgX";break;case vh:e="Neutral";break;case Ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rs=new D;function Gp(){Xt.getLuminanceCoefficients(Rs);let i=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Xp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qi(i){return i!==""}function Oc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(Kp,jp)}var Zp=new Map;function jp(i,t){let e=Dt[t];if(e===void 0){let n=Zp.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}var Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(i){return i.replace(Qp,Jp)}function Jp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function $p(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$c?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function tg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Ti:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vo:t="ENVMAP_BLENDING_MULTIPLY";break;case uh:t="ENVMAP_BLENDING_MIX";break;case dh:t="ENVMAP_BLENDING_ADD";break}return t}function ig(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=$p(e),l=tg(e),h=eg(e),d=ng(e),u=ig(e),f=Wp(e),m=Xp(r),A=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qi).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qi).join(`
`),p.length>0&&(p+=`
`)):(g=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),p=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==qn?Hp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,kp("linearToOutputTexel",e.outputColorSpace),Gp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),a=Qa(a),a=Oc(a,e),a=kc(a,e),o=Qa(o),o=Oc(o,e),o=kc(o,e),a=Hc(a),o=Hc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=b+g+a,v=b+p+o,U=zc(s,s.VERTEX_SHADER,I),S=zc(s,s.FRAGMENT_SHADER,v);s.attachShader(A,U),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(A).trim(),B=s.getShaderInfoLog(U).trim(),H=s.getShaderInfoLog(S).trim(),Z=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,U,S);else{let tt=Fc(s,U,"vertex"),k=Fc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+tt+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||H==="")&&(G=!1);G&&(w.diagnostics={runnable:Z,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(U),s.deleteShader(S),L=new Si(s,A),_=Yp(s,A)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(A,zp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bp++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=S,this}var rg=0,Ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $a(t),e.set(t,n)),n}},$a=class{constructor(t){this.id=rg++,this.code=t,this.usedTimes=0}};function ag(i,t,e,n,s,r,a){let o=new Xs,c=new Ja,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,C,w,F,B){let H=F.fog,Z=B.geometry,G=_.isMeshStandardMaterial?F.environment:null,tt=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),k=tt&&tt.mapping===dr?tt.image.height:null,rt=m[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,It=ut!==void 0?ut.length:0,zt=0;Z.morphAttributes.position!==void 0&&(zt=1),Z.morphAttributes.normal!==void 0&&(zt=2),Z.morphAttributes.color!==void 0&&(zt=3);let te,X,et,vt;if(rt){let Qt=Qe[rt];te=Qt.vertexShader,X=Qt.fragmentShader}else te=_.vertexShader,X=_.fragmentShader,c.update(_),et=c.getVertexShaderID(_),vt=c.getFragmentShaderID(_);let at=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),qt=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,oe=!!_.map,Gt=!!_.matcap,de=!!tt,P=!!_.aoMap,Ne=!!_.lightMap,Ft=!!_.bumpMap,Ot=!!_.normalMap,Mt=!!_.displacementMap,ie=!!_.emissiveMap,_t=!!_.metalnessMap,M=!!_.roughnessMap,x=_.anisotropy>0,V=_.clearcoat>0,Y=_.dispersion>0,j=_.iridescence>0,W=_.sheen>0,yt=_.transmission>0,ot=x&&!!_.anisotropyMap,dt=V&&!!_.clearcoatMap,Wt=V&&!!_.clearcoatNormalMap,J=V&&!!_.clearcoatRoughnessMap,pt=j&&!!_.iridescenceMap,bt=j&&!!_.iridescenceThicknessMap,wt=W&&!!_.sheenColorMap,gt=W&&!!_.sheenRoughnessMap,kt=!!_.specularMap,Ut=!!_.specularColorMap,ee=!!_.specularIntensityMap,T=yt&&!!_.transmissionMap,st=yt&&!!_.thicknessMap,O=!!_.gradientMap,K=!!_.alphaMap,ht=_.alphaTest>0,ct=!!_.alphaHash,Rt=!!_.extensions,ce=qn;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ce={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:te,fragmentShader:X,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:qt,instancingColor:qt&&B.instanceColor!==null,instancingMorph:qt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Di,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:Gt,envMap:de,envMapMode:de&&tt.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:Ne,bumpMap:Ft,normalMap:Ot,displacementMap:u&&Mt,emissiveMap:ie,normalMapObjectSpace:Ot&&_.normalMapType===_h,normalMapTangentSpace:Ot&&_.normalMapType===ul,metalnessMap:_t,roughnessMap:M,anisotropy:x,anisotropyMap:ot,clearcoat:V,clearcoatMap:dt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:j,iridescenceMap:pt,iridescenceThicknessMap:bt,sheen:W,sheenColorMap:wt,sheenRoughnessMap:gt,specularMap:kt,specularColorMap:Ut,specularIntensityMap:ee,transmission:yt,transmissionMap:T,thicknessMap:st,gradientMap:O,opaque:_.transparent===!1&&_.blending===_i&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:ct,combine:_.combine,mapUv:oe&&A(_.map.channel),aoMapUv:P&&A(_.aoMap.channel),lightMapUv:Ne&&A(_.lightMap.channel),bumpMapUv:Ft&&A(_.bumpMap.channel),normalMapUv:Ot&&A(_.normalMap.channel),displacementMapUv:Mt&&A(_.displacementMap.channel),emissiveMapUv:ie&&A(_.emissiveMap.channel),metalnessMapUv:_t&&A(_.metalnessMap.channel),roughnessMapUv:M&&A(_.roughnessMap.channel),anisotropyMapUv:ot&&A(_.anisotropyMap.channel),clearcoatMapUv:dt&&A(_.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&A(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&A(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&A(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(_.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&A(_.sheenColorMap.channel),sheenRoughnessMapUv:gt&&A(_.sheenRoughnessMap.channel),specularMapUv:kt&&A(_.specularMap.channel),specularColorMapUv:Ut&&A(_.specularColorMap.channel),specularIntensityMapUv:ee&&A(_.specularIntensityMap.channel),transmissionMapUv:T&&A(_.transmissionMap.channel),thicknessMapUv:st&&A(_.thicknessMap.channel),alphaMapUv:K&&A(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ot||x),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(oe||K),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Et,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:zt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===Jt,decodeVideoTextureEmissive:ie&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===We,flipSided:_.side===qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Rt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&_.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function p(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)C.push(w),C.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(b(C,_),I(C,_),C.push(i.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function b(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function I(_,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reverseDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){let C=m[_.type],w;if(C){let F=Qe[C];w=Zh.clone(F.uniforms)}else w=_.uniforms;return w}function U(_,C){let w;for(let F=0,B=h.length;F<B;F++){let H=h[F];if(H.cacheKey===C){w=H,++w.usedTimes;break}}return w===void 0&&(w=new sg(i,C,_,r),h.push(w)),w}function S(_){if(--_.usedTimes===0){let C=h.indexOf(_);h[C]=h[h.length-1],h.pop(),_.destroy()}}function E(_){c.remove(_)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:U,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:L}}function og(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,m,A,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:A,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=A,p.group=g),t++,p}function o(d,u,f,m,A,g){let p=a(d,u,f,m,A,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,m,A,g){let p=a(d,u,f,m,A,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||cg),n.length>1&&n.sort(u||Wc),s.length>1&&s.sort(u||Wc)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function lg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xc,i.set(n,[a])):s>=r.length?(a=new Xc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function hg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Vt};break;case"SpotLight":e={position:new D,direction:new D,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var dg=0;function fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pg(i){let t=new hg,e=ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new he,a=new he;function o(l){let h=0,d=0,u=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,m=0,A=0,g=0,p=0,b=0,I=0,v=0,U=0,S=0,E=0;l.sort(fg);for(let _=0,C=l.length;_<C;_++){let w=l[_],F=w.color,B=w.intensity,H=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*B,d+=F.g*B,u+=F.b*B;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],B);E++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let tt=w.shadow,k=e.get(w);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=w.shadow.matrix,b++}n.directional[f]=G,f++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[A]=G;let tt=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,tt.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[A]=tt.matrix,w.castShadow){let k=e.get(w);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=Z,v++}A++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=G,g++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let tt=w.shadow,k=e.get(w);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,k.shadowCameraNear=tt.camera.near,k.shadowCameraFar=tt.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=w.shadow.matrix,I++}n.point[m]=G,m++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(B),G.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==A||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==I||L.numSpotShadows!==v||L.numSpotMaps!==U||L.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=v+U-S,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=f,L.pointLength=m,L.spotLength=A,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=I,L.numSpotShadows=v,L.numSpotMaps=U,L.numLightProbes=E,n.version=dg++)}function c(l,h){let d=0,u=0,f=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let I=l[p];if(I.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(I.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(I.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(I.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(I.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(I.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(I.width*.5,0,0),v.halfHeight.set(0,I.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(I.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(I.matrixWorld),v.position.applyMatrix4(g),u++}else if(I.isHemisphereLight){let v=n.hemi[A];v.direction.setFromMatrixPosition(I.matrixWorld),v.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function Yc(i){let t=new pg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function gg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yc(i),t.set(s,[o])):r>=a.length?(o=new Yc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var to=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`;function xg(i,t,e){let n=new es,s=new Nt,r=new Nt,a=new le,o=new to({depthPacking:Ih}),c=new eo,l={},h=e.maxTextureSize,d={[Pn]:qe,[qe]:Pn,[We]:We},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:mg,fragmentShader:Ag}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Re;m.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new pe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let p=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),C=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Tn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==un&&this.type===un,H=p===un&&this.type!==un;for(let Z=0,G=S.length;Z<G;Z++){let tt=S[Z],k=tt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let rt=k.getFrameExtents();if(s.multiply(rt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,k.mapSize.y=r.y)),k.map===null||B===!0||H===!0){let It=this.type!==un?{minFilter:Ye,magFilter:Ye}:{};k.map!==null&&k.map.dispose(),k.map=new An(s.x,s.y,It),k.map.texture.name=tt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ut=k.getViewportCount();for(let It=0;It<ut;It++){let zt=k.getViewport(It);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),F.viewport(a),k.updateMatrices(tt,It),n=k.getFrustum(),v(E,L,k.camera,tt,this.type)}k.isPointLightShadow!==!0&&this.type===un&&b(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(_,C,w)};function b(S,E){let L=t.update(A);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new An(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,L,u,A,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,L,f,A,null)}function I(S,E,L,_){let C=null,w=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)C=w;else if(C=L.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let F=C.uuid,B=E.uuid,H=l[F];H===void 0&&(H={},l[F]=H);let Z=H[B];Z===void 0&&(Z=C.clone(),H[B]=Z,E.addEventListener("dispose",U)),C=Z}if(C.visible=E.visible,C.wireframe=E.wireframe,_===un?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,L.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=L}return C}function v(S,E,L,_,C){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===un)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let B=t.update(S),H=S.material;if(Array.isArray(H)){let Z=B.groups;for(let G=0,tt=Z.length;G<tt;G++){let k=Z[G],rt=H[k.materialIndex];if(rt&&rt.visible){let ut=I(S,rt,_,C);S.onBeforeShadow(i,S,E,L,B,ut,k),i.renderBufferDirect(L,null,B,ut,S,k),S.onAfterShadow(i,S,E,L,B,ut,k)}}}else if(H.visible){let Z=I(S,H,_,C);S.onBeforeShadow(i,S,E,L,B,Z,null),i.renderBufferDirect(L,null,B,Z,S,null),S.onAfterShadow(i,S,E,L,B,Z,null)}}let F=S.children;for(let B=0,H=F.length;B<H;B++)v(F[B],E,L,_,C)}function U(S){S.target.removeEventListener("dispose",U);for(let L in l){let _=l[L],C=S.target.uuid;C in _&&(_[C].dispose(),delete _[C])}}}var vg={[na]:ia,[sa]:oa,[ra]:ca,[Ei]:aa,[ia]:na,[oa]:sa,[ca]:ra,[aa]:Ei};function yg(i,t){function e(){let T=!1,st=new le,O=null,K=new le(0,0,0,0);return{setMask:function(ht){O!==ht&&!T&&(i.colorMask(ht,ht,ht,ht),O=ht)},setLocked:function(ht){T=ht},setClear:function(ht,ct,Rt,ce,Ce){Ce===!0&&(ht*=ce,ct*=ce,Rt*=ce),st.set(ht,ct,Rt,ce),K.equals(st)===!1&&(i.clearColor(ht,ct,Rt,ce),K.copy(st))},reset:function(){T=!1,O=null,K.set(-1,0,0,0)}}}function n(){let T=!1,st=!1,O=null,K=null,ht=null;return{setReversed:function(ct){if(st!==ct){let Rt=t.get("EXT_clip_control");st?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ht;ht=null,this.setClear(ce)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?at(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ct){O!==ct&&!T&&(i.depthMask(ct),O=ct)},setFunc:function(ct){if(st&&(ct=vg[ct]),K!==ct){switch(ct){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ct}},setLocked:function(ct){T=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),i.clearDepth(ct),ht=ct)},reset:function(){T=!1,O=null,K=null,ht=null,st=!1}}}function s(){let T=!1,st=null,O=null,K=null,ht=null,ct=null,Rt=null,ce=null,Ce=null;return{setTest:function(Qt){T||(Qt?at(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!T&&(i.stencilMask(Qt),st=Qt)},setFunc:function(Qt,Fe,sn){(O!==Qt||K!==Fe||ht!==sn)&&(i.stencilFunc(Qt,Fe,sn),O=Qt,K=Fe,ht=sn)},setOp:function(Qt,Fe,sn){(ct!==Qt||Rt!==Fe||ce!==sn)&&(i.stencilOp(Qt,Fe,sn),ct=Qt,Rt=Fe,ce=sn)},setLocked:function(Qt){T=Qt},setClear:function(Qt){Ce!==Qt&&(i.clearStencil(Qt),Ce=Qt)},reset:function(){T=!1,st=null,O=null,K=null,ht=null,ct=null,Rt=null,ce=null,Ce=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],m=null,A=!1,g=null,p=null,b=null,I=null,v=null,U=null,S=null,E=new Vt(0,0,0),L=0,_=!1,C=null,w=null,F=null,B=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=tt>=2);let rt=null,ut={},It=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),te=new le().fromArray(It),X=new le().fromArray(zt);function et(T,st,O,K){let ht=new Uint8Array(4),ct=i.createTexture();i.bindTexture(T,ct),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<O;Rt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ct}let vt={};vt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Ei),Ft(!1),Ot(jo),at(i.CULL_FACE),P(Tn);function at(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function Et(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function qt(T,st){return d[T]!==st?(i.bindFramebuffer(T,st),d[T]=st,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(T,st){let O=f,K=!1;if(T){O=u.get(st),O===void 0&&(O=[],u.set(st,O));let ht=T.textures;if(O.length!==ht.length||O[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Rt=ht.length;ct<Rt;ct++)O[ct]=i.COLOR_ATTACHMENT0+ct;O.length=ht.length,K=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,K=!0);K&&i.drawBuffers(O)}function oe(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let Gt={[Wn]:i.FUNC_ADD,[Kl]:i.FUNC_SUBTRACT,[Zl]:i.FUNC_REVERSE_SUBTRACT};Gt[jl]=i.MIN,Gt[Ql]=i.MAX;let de={[Jl]:i.ZERO,[$l]:i.ONE,[th]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[ah]:i.SRC_ALPHA_SATURATE,[sh]:i.DST_COLOR,[nh]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[ih]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[hh]:i.ONE_MINUS_CONSTANT_ALPHA};function P(T,st,O,K,ht,ct,Rt,ce,Ce,Qt){if(T===Tn){A===!0&&(Et(i.BLEND),A=!1);return}if(A===!1&&(at(i.BLEND),A=!0),T!==Yl){if(T!==g||Qt!==_){if((p!==Wn||v!==Wn)&&(i.blendEquation(i.FUNC_ADD),p=Wn,v=Wn),Qt)switch(T){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.ONE,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}b=null,I=null,U=null,S=null,E.set(0,0,0),L=0,g=T,_=Qt}return}ht=ht||st,ct=ct||O,Rt=Rt||K,(st!==p||ht!==v)&&(i.blendEquationSeparate(Gt[st],Gt[ht]),p=st,v=ht),(O!==b||K!==I||ct!==U||Rt!==S)&&(i.blendFuncSeparate(de[O],de[K],de[ct],de[Rt]),b=O,I=K,U=ct,S=Rt),(ce.equals(E)===!1||Ce!==L)&&(i.blendColor(ce.r,ce.g,ce.b,Ce),E.copy(ce),L=Ce),g=T,_=!1}function Ne(T,st){T.side===We?Et(i.CULL_FACE):at(i.CULL_FACE);let O=T.side===qe;st&&(O=!O),Ft(O),T.blending===_i&&T.transparent===!1?P(Tn):P(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let K=T.stencilWrite;o.setTest(K),K&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ie(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(T){C!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),C=T)}function Ot(T){T!==Gl?(at(i.CULL_FACE),T!==w&&(T===jo?i.cullFace(i.BACK):T===Wl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),w=T}function Mt(T){T!==F&&(G&&i.lineWidth(T),F=T)}function ie(T,st,O){T?(at(i.POLYGON_OFFSET_FILL),(B!==st||H!==O)&&(i.polygonOffset(st,O),B=st,H=O)):Et(i.POLYGON_OFFSET_FILL)}function _t(T){T?at(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function M(T){T===void 0&&(T=i.TEXTURE0+Z-1),rt!==T&&(i.activeTexture(T),rt=T)}function x(T,st,O){O===void 0&&(rt===null?O=i.TEXTURE0+Z-1:O=rt);let K=ut[O];K===void 0&&(K={type:void 0,texture:void 0},ut[O]=K),(K.type!==T||K.texture!==st)&&(rt!==O&&(i.activeTexture(O),rt=O),i.bindTexture(T,st||vt[T]),K.type=T,K.texture=st)}function V(){let T=ut[rt];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function wt(T){te.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),te.copy(T))}function gt(T){X.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),X.copy(T))}function kt(T,st){let O=l.get(st);O===void 0&&(O=new WeakMap,l.set(st,O));let K=O.get(T);K===void 0&&(K=i.getUniformBlockIndex(st,T.name),O.set(T,K))}function Ut(T,st){let K=l.get(st).get(T);c.get(st)!==K&&(i.uniformBlockBinding(st,K,T.__bindingPointIndex),c.set(st,K))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ut={},d={},u=new WeakMap,f=[],m=null,A=!1,g=null,p=null,b=null,I=null,v=null,U=null,S=null,E=new Vt(0,0,0),L=0,_=!1,C=null,w=null,F=null,B=null,H=null,te.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Et,bindFramebuffer:qt,drawBuffers:Bt,useProgram:oe,setBlending:P,setMaterial:Ne,setFlipSided:Ft,setCullFace:Ot,setLineWidth:Mt,setPolygonOffset:ie,setScissorTest:_t,activeTexture:M,bindTexture:x,unbindTexture:V,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:pt,texImage3D:bt,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:J,texSubImage2D:W,texSubImage3D:yt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:wt,viewport:gt,reset:ee}}function Kc(i,t,e,n){let s=Cg(n);switch(e){case sl:return i*t;case al:return i*t;case ol:return i*t*2;case cl:return i*t/s.components*s.byteLength;case _o:return i*t/s.components*s.byteLength;case ll:return i*t*2/s.components*s.byteLength;case Mo:return i*t*2/s.components*s.byteLength;case rl:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case bo:return i*t*4/s.components*s.byteLength;case Vs:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zs:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:case ma:return Math.max(i,16)*Math.max(t,8)/4;case fa:case ga:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fs:case Ua:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hl:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cg(i){switch(i){case mn:case el:return{byteLength:1,components:1};case $i:case nl:case rs:return{byteLength:2,components:1};case Co:case Io:return{byteLength:2,components:4};case Zn:case yo:case fn:return{byteLength:4,components:1};case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ig(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,x){return f?new OffscreenCanvas(M,x):Hs("canvas")}function A(M,x,V){let Y=1,j=_t(M);if((j.width>V||j.height>V)&&(Y=V/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(Y*j.width),yt=Math.floor(Y*j.height);d===void 0&&(d=m(W,yt));let ot=x?m(W,yt):d;return ot.width=W,ot.height=yt,ot.getContext("2d").drawImage(M,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+yt+")."),ot}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function g(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(M,x,V,Y,j=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=x;if(x===i.RED&&(V===i.FLOAT&&(W=i.R32F),V===i.HALF_FLOAT&&(W=i.R16F),V===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.R8UI),V===i.UNSIGNED_SHORT&&(W=i.R16UI),V===i.UNSIGNED_INT&&(W=i.R32UI),V===i.BYTE&&(W=i.R8I),V===i.SHORT&&(W=i.R16I),V===i.INT&&(W=i.R32I)),x===i.RG&&(V===i.FLOAT&&(W=i.RG32F),V===i.HALF_FLOAT&&(W=i.RG16F),V===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RG8UI),V===i.UNSIGNED_SHORT&&(W=i.RG16UI),V===i.UNSIGNED_INT&&(W=i.RG32UI),V===i.BYTE&&(W=i.RG8I),V===i.SHORT&&(W=i.RG16I),V===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGB8UI),V===i.UNSIGNED_SHORT&&(W=i.RGB16UI),V===i.UNSIGNED_INT&&(W=i.RGB32UI),V===i.BYTE&&(W=i.RGB8I),V===i.SHORT&&(W=i.RGB16I),V===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),V===i.UNSIGNED_INT&&(W=i.RGBA32UI),V===i.BYTE&&(W=i.RGBA8I),V===i.SHORT&&(W=i.RGBA16I),V===i.INT&&(W=i.RGBA32I)),x===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let yt=j?fr:Xt.getTransfer(Y);V===i.FLOAT&&(W=i.RGBA32F),V===i.HALF_FLOAT&&(W=i.RGBA16F),V===i.UNSIGNED_BYTE&&(W=yt===Jt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(M,x){let V;return M?x===null||x===Zn||x===qi?V=i.DEPTH24_STENCIL8:x===fn?V=i.DEPTH32F_STENCIL8:x===$i&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zn||x===qi?V=i.DEPTH_COMPONENT24:x===fn?V=i.DEPTH_COMPONENT32F:x===$i&&(V=i.DEPTH_COMPONENT16),V}function U(M,x){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ye&&M.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function S(M){let x=M.target;x.removeEventListener("dispose",S),L(x),x.isVideoTexture&&h.delete(x)}function E(M){let x=M.target;x.removeEventListener("dispose",E),C(x)}function L(M){let x=n.get(M);if(x.__webglInit===void 0)return;let V=M.source,Y=u.get(V);if(Y){let j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&_(M),Object.keys(Y).length===0&&u.delete(V)}n.remove(M)}function _(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let V=M.source,Y=u.get(V);delete Y[x.__cacheKey],a.memory.textures--}function C(M){let x=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=M.textures;for(let Y=0,j=V.length;Y<j;Y++){let W=n.get(V[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(M)}let w=0;function F(){w=0}function B(){let M=w;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),w+=1,M}function H(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function Z(M,x){let V=n.get(M);if(M.isVideoTexture&&Mt(M),M.isRenderTargetTexture===!1&&M.version>0&&V.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(V,M,x);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function G(M,x){let V=n.get(M);if(M.version>0&&V.__version!==M.version){X(V,M,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function tt(M,x){let V=n.get(M);if(M.version>0&&V.__version!==M.version){X(V,M,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function k(M,x){let V=n.get(M);if(M.version>0&&V.__version!==M.version){et(V,M,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let rt={[ua]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},ut={[Ye]:i.NEAREST,[yh]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},It={[Mh]:i.NEVER,[qh]:i.ALWAYS,[bh]:i.LESS,[dl]:i.LEQUAL,[Sh]:i.EQUAL,[Th]:i.GEQUAL,[Eh]:i.GREATER,[wh]:i.NOTEQUAL};function zt(M,x){if(x.type===fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===$e||x.magFilter===Ir||x.magFilter===us||x.magFilter===Kn||x.minFilter===$e||x.minFilter===Ir||x.minFilter===us||x.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,rt[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ut[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,It[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==us&&x.minFilter!==Kn||x.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function te(M,x){let V=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",S));let Y=x.source,j=u.get(Y);j===void 0&&(j={},u.set(Y,j));let W=H(x);if(W!==M.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[W].usedTimes++;let yt=j[M.__cacheKey];yt!==void 0&&(j[M.__cacheKey].usedTimes--,yt.usedTimes===0&&_(x)),M.__cacheKey=W,M.__webglTexture=j[W].texture}return V}function X(M,x,V){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let j=te(M,x),W=x.source;e.bindTexture(Y,M.__webglTexture,i.TEXTURE0+V);let yt=n.get(W);if(W.version!==yt.__version||j===!0){e.activeTexture(i.TEXTURE0+V);let ot=Xt.getPrimaries(Xt.workingColorSpace),dt=x.colorSpace===En?null:Xt.getPrimaries(x.colorSpace),Wt=x.colorSpace===En||ot===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let J=A(x.image,!1,s.maxTextureSize);J=ie(x,J);let pt=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),wt=I(x.internalFormat,pt,bt,x.colorSpace,x.isVideoTexture);zt(Y,x);let gt,kt=x.mipmaps,Ut=x.isVideoTexture!==!0,ee=yt.__version===void 0||j===!0,T=W.dataReady,st=U(x,J);if(x.isDepthTexture)wt=v(x.format===Ri,x.type),ee&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,wt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,wt,J.width,J.height,0,pt,bt,null));else if(x.isDataTexture)if(kt.length>0){Ut&&ee&&e.texStorage2D(i.TEXTURE_2D,st,wt,kt[0].width,kt[0].height);for(let O=0,K=kt.length;O<K;O++)gt=kt[O],Ut?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,gt.width,gt.height,pt,bt,gt.data):e.texImage2D(i.TEXTURE_2D,O,wt,gt.width,gt.height,0,pt,bt,gt.data);x.generateMipmaps=!1}else Ut?(ee&&e.texStorage2D(i.TEXTURE_2D,st,wt,J.width,J.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,pt,bt,J.data)):e.texImage2D(i.TEXTURE_2D,0,wt,J.width,J.height,0,pt,bt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,wt,kt[0].width,kt[0].height,J.depth);for(let O=0,K=kt.length;O<K;O++)if(gt=kt[O],x.format!==Xe)if(pt!==null)if(Ut){if(T)if(x.layerUpdates.size>0){let ht=Kc(gt.width,gt.height,x.format,x.type);for(let ct of x.layerUpdates){let Rt=gt.data.subarray(ct*ht/gt.data.BYTES_PER_ELEMENT,(ct+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,ct,gt.width,gt.height,1,pt,Rt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,gt.width,gt.height,J.depth,pt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,wt,gt.width,gt.height,J.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,gt.width,gt.height,J.depth,pt,bt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,wt,gt.width,gt.height,J.depth,0,pt,bt,gt.data)}else{Ut&&ee&&e.texStorage2D(i.TEXTURE_2D,st,wt,kt[0].width,kt[0].height);for(let O=0,K=kt.length;O<K;O++)gt=kt[O],x.format!==Xe?pt!==null?Ut?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,O,wt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,gt.width,gt.height,pt,bt,gt.data):e.texImage2D(i.TEXTURE_2D,O,wt,gt.width,gt.height,0,pt,bt,gt.data)}else if(x.isDataArrayTexture)if(Ut){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,wt,J.width,J.height,J.depth),T)if(x.layerUpdates.size>0){let O=Kc(J.width,J.height,x.format,x.type);for(let K of x.layerUpdates){let ht=J.data.subarray(K*O/J.data.BYTES_PER_ELEMENT,(K+1)*O/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,pt,bt,ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pt,bt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,J.width,J.height,J.depth,0,pt,bt,J.data);else if(x.isData3DTexture)Ut?(ee&&e.texStorage3D(i.TEXTURE_3D,st,wt,J.width,J.height,J.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pt,bt,J.data)):e.texImage3D(i.TEXTURE_3D,0,wt,J.width,J.height,J.depth,0,pt,bt,J.data);else if(x.isFramebufferTexture){if(ee)if(Ut)e.texStorage2D(i.TEXTURE_2D,st,wt,J.width,J.height);else{let O=J.width,K=J.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,wt,O,K,0,pt,bt,null),O>>=1,K>>=1}}else if(kt.length>0){if(Ut&&ee){let O=_t(kt[0]);e.texStorage2D(i.TEXTURE_2D,st,wt,O.width,O.height)}for(let O=0,K=kt.length;O<K;O++)gt=kt[O],Ut?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,pt,bt,gt):e.texImage2D(i.TEXTURE_2D,O,wt,pt,bt,gt);x.generateMipmaps=!1}else if(Ut){if(ee){let O=_t(J);e.texStorage2D(i.TEXTURE_2D,st,wt,O.width,O.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,bt,J)}else e.texImage2D(i.TEXTURE_2D,0,wt,pt,bt,J);g(x)&&p(Y),yt.__version=W.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function et(M,x,V){if(x.image.length!==6)return;let Y=te(M,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+V);let W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+V);let yt=Xt.getPrimaries(Xt.workingColorSpace),ot=x.colorSpace===En?null:Xt.getPrimaries(x.colorSpace),dt=x.colorSpace===En||yt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Wt&&!J?pt[K]=A(x.image[K],!0,s.maxCubemapSize):pt[K]=J?x.image[K].image:x.image[K],pt[K]=ie(x,pt[K]);let bt=pt[0],wt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),kt=I(x.internalFormat,wt,gt,x.colorSpace),Ut=x.isVideoTexture!==!0,ee=W.__version===void 0||Y===!0,T=j.dataReady,st=U(x,bt);zt(i.TEXTURE_CUBE_MAP,x);let O;if(Wt){Ut&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,bt.width,bt.height);for(let K=0;K<6;K++){O=pt[K].mipmaps;for(let ht=0;ht<O.length;ht++){let ct=O[ht];x.format!==Xe?wt!==null?Ut?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ct.width,ct.height,wt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,kt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ct.width,ct.height,wt,gt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,kt,ct.width,ct.height,0,wt,gt,ct.data)}}}else{if(O=x.mipmaps,Ut&&ee){O.length>0&&st++;let K=_t(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,K.width,K.height)}for(let K=0;K<6;K++)if(J){Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,wt,gt,pt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,pt[K].width,pt[K].height,0,wt,gt,pt[K].data);for(let ht=0;ht<O.length;ht++){let Rt=O[ht].image[K].image;Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Rt.width,Rt.height,wt,gt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,kt,Rt.width,Rt.height,0,wt,gt,Rt.data)}}else{Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt,gt,pt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,wt,gt,pt[K]);for(let ht=0;ht<O.length;ht++){let ct=O[ht];Ut?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,wt,gt,ct.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,kt,wt,gt,ct.image[K])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),W.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function vt(M,x,V,Y,j,W){let yt=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),dt=I(V.internalFormat,yt,ot,V.colorSpace),Wt=n.get(x),J=n.get(V);if(J.__renderTarget=x,!Wt.__hasExternalTextures){let pt=Math.max(1,x.width>>W),bt=Math.max(1,x.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,dt,pt,bt,x.depth,0,yt,ot,null):e.texImage2D(j,W,dt,pt,bt,0,yt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,J.__webglTexture,0,Ft(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(M,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer){let Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=v(x.stencilBuffer,j),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Ft(x);Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,W,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,M)}else{let Y=x.textures;for(let j=0;j<Y.length;j++){let W=Y[j],yt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),dt=I(W.internalFormat,yt,ot,W.colorSpace),Wt=Ft(x);V&&Ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,dt,x.width,x.height):Ot(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);let j=Y.__webglTexture,W=Ft(x);if(x.depthTexture.format===Mi)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===Ri)Ot(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function qt(M){let x=n.get(M),V=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let Y=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Et(x.__webglFramebuffer,M)}else if(V){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),at(x.__webglDepthbuffer[Y],M,!1);else{let j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(M,x,V){let Y=n.get(M);x!==void 0&&vt(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&qt(M)}function oe(M){let x=M.texture,V=n.get(M),Y=n.get(x);M.addEventListener("dispose",E);let j=M.textures,W=M.isWebGLCubeRenderTarget===!0,yt=j.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),W){V.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ot]=[];for(let dt=0;dt<x.mipmaps.length;dt++)V.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else V.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)V.__webglFramebuffer[ot]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ot=0,dt=j.length;ot<dt;ot++){let Wt=n.get(j[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&Ot(M)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let dt=j[ot];V.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ot]);let Wt=r.convert(dt.format,dt.colorSpace),J=r.convert(dt.type),pt=I(dt.internalFormat,Wt,J,dt.colorSpace,M.isXRRenderTarget===!0),bt=Ft(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,pt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,V.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),at(V.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)vt(V.__webglFramebuffer[ot][dt],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else vt(V.__webglFramebuffer[ot],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ot=0,dt=j.length;ot<dt;ot++){let Wt=j[ot],J=n.get(Wt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),zt(i.TEXTURE_2D,Wt),vt(V.__webglFramebuffer,M,Wt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),g(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ot=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),zt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)vt(V.__webglFramebuffer[dt],M,x,i.COLOR_ATTACHMENT0,ot,dt);else vt(V.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,ot,0);g(x)&&p(ot),e.unbindTexture()}M.depthBuffer&&qt(M)}function Gt(M){let x=M.textures;for(let V=0,Y=x.length;V<Y;V++){let j=x[V];if(g(j)){let W=b(M),yt=n.get(j).__webglTexture;e.bindTexture(W,yt),p(W),e.unbindTexture()}}}let de=[],P=[];function Ne(M){if(M.samples>0){if(Ot(M)===!1){let x=M.textures,V=M.width,Y=M.height,j=i.COLOR_BUFFER_BIT,W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(M),ot=x.length>1;if(ot)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);let Wt=n.get(x[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,j,i.NEAREST),c===!0&&(de.length=0,P.length=0,de.push(i.COLOR_ATTACHMENT0+dt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(de.push(W),P.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);let Wt=n.get(x[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ft(M){return Math.min(s.maxSamples,M.samples)}function Ot(M){let x=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(M){let x=a.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function ie(M,x){let V=M.colorSpace,Y=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||V!==Di&&V!==En&&(Xt.getTransfer(V)===Jt?(Y!==Xe||j!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function _t(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=k,this.rebindTextures=Bt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ot}function _g(i,t){function e(n,s=En){let r,a=Xt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===el)return i.BYTE;if(n===nl)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===sl)return i.ALPHA;if(n===rl)return i.RGB;if(n===Xe)return i.RGBA;if(n===al)return i.LUMINANCE;if(n===ol)return i.LUMINANCE_ALPHA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===ll)return i.RG;if(n===Mo)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===Vs||n===Ns||n===zs||n===Bs)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ga||n===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===xa||n===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===xa)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ca||n===Ia||n===_a||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===qa||n===Ra||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ea)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===Ua||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fs)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hl||n===Va||n===Na||n===za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var no=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ht=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mg={type:"move"},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(l,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
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

}`,io=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:bg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},so=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,A=new io,g=e.getContextAttributes(),p=null,b=null,I=[],v=[],U=new Nt,S=null,E=new Ee;E.viewport=new le;let L=new Ee;L.viewport=new le;let _=[E,L],C=new no,w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=I[X];return et===void 0&&(et=new Ji,I[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=I[X];return et===void 0&&(et=new Ji,I[X]=et),et.getGripSpace()},this.getHand=function(X){let et=I[X];return et===void 0&&(et=new Ji,I[X]=et),et.getHandSpace()};function B(X){let et=v.indexOf(X.inputSource);if(et===-1)return;let vt=I[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,l||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<I.length;X++){let et=v[X];et!==null&&(v[X]=null,I[X].disconnect(et))}w=null,F=null,A.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,b=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new An(f.framebufferWidth,f.framebufferHeight,{format:Xe,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,vt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?Ri:Mi,vt=g.stencil?qi:Zn);let Et={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Et),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new An(u.textureWidth,u.textureHeight,{format:Xe,type:mn,depthTexture:new $s(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Z(X){for(let et=0;et<X.removed.length;et++){let vt=X.removed[et],at=v.indexOf(vt);at>=0&&(v[at]=null,I[at].disconnect(vt))}for(let et=0;et<X.added.length;et++){let vt=X.added[et],at=v.indexOf(vt);if(at===-1){for(let qt=0;qt<I.length;qt++)if(qt>=v.length){v.push(vt),at=qt;break}else if(v[qt]===null){v[qt]=vt,at=qt;break}if(at===-1)break}let Et=I[at];Et&&Et.connect(vt)}}let G=new D,tt=new D;function k(X,et,vt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);let at=G.distanceTo(tt),Et=et.projectionMatrix.elements,qt=vt.projectionMatrix.elements,Bt=Et[14]/(Et[10]-1),oe=Et[14]/(Et[10]+1),Gt=(Et[9]+1)/Et[5],de=(Et[9]-1)/Et[5],P=(Et[8]-1)/Et[0],Ne=(qt[8]+1)/qt[0],Ft=Bt*P,Ot=Bt*Ne,Mt=at/(-P+Ne),ie=Mt*-P;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Et[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let _t=Bt+Mt,M=oe+Mt,x=Ft-ie,V=Ot+(at-ie),Y=Gt*oe/M*_t,j=de*oe/M*_t;X.projectionMatrix.makePerspective(x,V,Y,j,_t,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,vt=X.far;A.texture!==null&&(A.depthNear>0&&(et=A.depthNear),A.depthFar>0&&(vt=A.depthFar)),C.near=L.near=E.near=et,C.far=L.far=E.far=vt,(w!==C.near||F!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),w=C.near,F=C.far),E.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,C.layers.mask=E.layers.mask|L.layers.mask;let at=X.parent,Et=C.cameras;rt(C,at);for(let qt=0;qt<Et.length;qt++)rt(Et[qt],at);Et.length===2?k(C,E,L):C.projectionMatrix.copy(E.projectionMatrix),ut(X,C,at)};function ut(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Oa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let It=null;function zt(X,et){if(h=et.getViewerPose(l||a),m=et,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let at=!1;vt.length!==C.cameras.length&&(C.cameras.length=0,at=!0);for(let qt=0;qt<vt.length;qt++){let Bt=vt[qt],oe=null;if(f!==null)oe=f.getViewport(Bt);else{let de=d.getViewSubImage(u,Bt);oe=de.viewport,qt===0&&(t.setRenderTargetTextures(b,de.colorTexture,u.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(b))}let Gt=_[qt];Gt===void 0&&(Gt=new Ee,Gt.layers.enable(qt),Gt.viewport=new le,_[qt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(oe.x,oe.y,oe.width,oe.height),qt===0&&(C.matrix.copy(Gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),at===!0&&C.cameras.push(Gt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let qt=d.getDepthInformation(vt[0]);qt&&qt.isValid&&qt.texture&&A.init(t,qt,s.renderState)}}for(let vt=0;vt<I.length;vt++){let at=v[vt],Et=I[vt];at!==null&&Et!==void 0&&Et.update(at,et,l||a)}It&&It(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let te=new ml;te.setAnimationLoop(zt),this.setAnimationLoop=function(X){It=X},this.dispose=function(){}}},Hn=new tn,Eg=new he;function wg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,gl(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,I,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,I):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),I=b.envMap,v=b.envMapRotation;I&&(g.envMap.value=I,Hn.copy(v),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),g.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Hn)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,I){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=I*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,I){let v=I.program;n.uniformBlockBinding(b,v)}function l(b,I){let v=s[b.id];v===void 0&&(m(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));let U=I.program;n.updateUBOMapping(b,U);let S=t.render.frame;r[b.id]!==S&&(u(b),r[b.id]=S)}function h(b){let I=d();b.__bindingPointIndex=I;let v=i.createBuffer(),U=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,v),v}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let I=s[b.id],v=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,E=v.length;S<E;S++){let L=Array.isArray(v[S])?v[S]:[v[S]];for(let _=0,C=L.length;_<C;_++){let w=L[_];if(f(w,S,_,U)===!0){let F=w.__offset,B=Array.isArray(w.value)?w.value:[w.value],H=0;for(let Z=0;Z<B.length;Z++){let G=B[Z],tt=A(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+H,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,I,v,U){let S=b.value,E=I+"_"+v;if(U[E]===void 0)return typeof S=="number"||typeof S=="boolean"?U[E]=S:U[E]=S.clone(),!0;{let L=U[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return U[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(b){let I=b.uniforms,v=0,U=16;for(let E=0,L=I.length;E<L;E++){let _=Array.isArray(I[E])?I[E]:[I[E]];for(let C=0,w=_.length;C<w;C++){let F=_[C],B=Array.isArray(F.value)?F.value:[F.value];for(let H=0,Z=B.length;H<Z;H++){let G=B[H],tt=A(G),k=v%U,rt=k%tt.boundary,ut=k+rt;v+=rt,ut!==0&&U-ut<tt.storage&&(v+=U-ut),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=tt.storage}}}let S=v%U;return S>0&&(v+=U-S),b.__size=v,b.__cache={},this}function A(b){let I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),I}function g(b){let I=b.target;I.removeEventListener("dispose",g);let v=a.indexOf(I.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var tr=class{constructor(t={}){let{canvas:e=Ph(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,b=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=qn,this.toneMappingExposure=1;let v=this,U=!1,S=0,E=0,L=null,_=-1,C=null,w=new le,F=new le,B=null,H=new Vt(0),Z=0,G=e.width,tt=e.height,k=1,rt=null,ut=null,It=new le(0,0,G,tt),zt=new le(0,0,G,tt),te=!1,X=new es,et=!1,vt=!1,at=new he,Et=new he,qt=new D,Bt=new le,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function de(){return L===null?k:1}let P=n;function Ne(y,q){return e.getContext(y,q)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){let q="webgl2";if(P=Ne(q,y),P===null)throw Ne(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ft,Ot,Mt,ie,_t,M,x,V,Y,j,W,yt,ot,dt,Wt,J,pt,bt,wt,gt,kt,Ut,ee,T;function st(){Ft=new Wf(P),Ft.init(),Ut=new _g(P,Ft),Ot=new Bf(P,Ft,t,Ut),Mt=new yg(P,Ft),Ot.reverseDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),ie=new Kf(P),_t=new og,M=new Ig(P,Ft,Mt,_t,Ot,Ut,ie),x=new Of(v),V=new Gf(v),Y=new tu(P),ee=new Nf(P,Y),j=new Xf(P,Y,ie,ee),W=new jf(P,j,Y,ie),wt=new Zf(P,Ot,M),J=new Ff(_t),yt=new ag(v,x,V,Ft,Ot,ee,J),ot=new wg(v,_t),dt=new lg,Wt=new gg(Ft),bt=new Vf(v,x,V,Mt,W,f,c),pt=new xg(v,W,Ot),T=new Tg(P,ie,Ot,Mt),gt=new zf(P,Ft,ie),kt=new Yf(P,Ft,ie),ie.programs=yt.programs,v.capabilities=Ot,v.extensions=Ft,v.properties=_t,v.renderLists=dt,v.shadowMap=pt,v.state=Mt,v.info=ie}st();let O=new so(v,P);this.xr=O,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=Ft.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ft.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(G,tt,!1))},this.getSize=function(y){return y.set(G,tt)},this.setSize=function(y,q,N=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,tt=q,e.width=Math.floor(y*k),e.height=Math.floor(q*k),N===!0&&(e.style.width=y+"px",e.style.height=q+"px"),this.setViewport(0,0,y,q)},this.getDrawingBufferSize=function(y){return y.set(G*k,tt*k).floor()},this.setDrawingBufferSize=function(y,q,N){G=y,tt=q,k=N,e.width=Math.floor(y*N),e.height=Math.floor(q*N),this.setViewport(0,0,y,q)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(It)},this.setViewport=function(y,q,N,z){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,q,N,z),Mt.viewport(w.copy(It).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(zt)},this.setScissor=function(y,q,N,z){y.isVector4?zt.set(y.x,y.y,y.z,y.w):zt.set(y,q,N,z),Mt.scissor(F.copy(zt).multiplyScalar(k).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(y){Mt.setScissorTest(te=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(y=!0,q=!0,N=!0){let z=0;if(y){let R=!1;if(L!==null){let $=L.texture.format;R=$===bo||$===Mo||$===_o}if(R){let $=L.texture.type,lt=$===mn||$===Zn||$===$i||$===qi||$===Co||$===Io,mt=bt.getClearColor(),At=bt.getClearAlpha(),Tt=mt.r,Pt=mt.g,xt=mt.b;lt?(m[0]=Tt,m[1]=Pt,m[2]=xt,m[3]=At,P.clearBufferuiv(P.COLOR,0,m)):(A[0]=Tt,A[1]=Pt,A[2]=xt,A[3]=At,P.clearBufferiv(P.COLOR,0,A))}else z|=P.COLOR_BUFFER_BIT}q&&(z|=P.DEPTH_BUFFER_BIT),N&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Wt.dispose(),_t.dispose(),x.dispose(),V.dispose(),W.dispose(),ee.dispose(),T.dispose(),yt.dispose(),O.dispose(),O.removeEventListener("sessionstart",ko),O.removeEventListener("sessionend",Ho),Nn.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let y=ie.autoReset,q=pt.enabled,N=pt.autoUpdate,z=pt.needsUpdate,R=pt.type;st(),ie.autoReset=y,pt.enabled=q,pt.autoUpdate=N,pt.needsUpdate=z,pt.type=R}function ct(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Rt(y){let q=y.target;q.removeEventListener("dispose",Rt),ce(q)}function ce(y){Ce(y),_t.remove(y)}function Ce(y){let q=_t.get(y).programs;q!==void 0&&(q.forEach(function(N){yt.releaseProgram(N)}),y.isShaderMaterial&&yt.releaseShaderCache(y))}this.renderBufferDirect=function(y,q,N,z,R,$){q===null&&(q=oe);let lt=R.isMesh&&R.matrixWorld.determinant()<0,mt=Ol(y,q,N,z,R);Mt.setMaterial(z,lt);let At=N.index,Tt=1;if(z.wireframe===!0){if(At=j.getWireframeAttribute(N),At===void 0)return;Tt=2}let Pt=N.drawRange,xt=N.attributes.position,Kt=Pt.start*Tt,ne=(Pt.start+Pt.count)*Tt;$!==null&&(Kt=Math.max(Kt,$.start*Tt),ne=Math.min(ne,($.start+$.count)*Tt)),At!==null?(Kt=Math.max(Kt,0),ne=Math.min(ne,At.count)):xt!=null&&(Kt=Math.max(Kt,0),ne=Math.min(ne,xt.count));let se=ne-Kt;if(se<0||se===1/0)return;ee.setup(R,z,mt,N,At);let we,Zt=gt;if(At!==null&&(we=Y.get(At),Zt=kt,Zt.setIndex(we)),R.isMesh)z.wireframe===!0?(Mt.setLineWidth(z.wireframeLinewidth*de()),Zt.setMode(P.LINES)):Zt.setMode(P.TRIANGLES);else if(R.isLine){let Ct=z.linewidth;Ct===void 0&&(Ct=1),Mt.setLineWidth(Ct*de()),R.isLineSegments?Zt.setMode(P.LINES):R.isLineLoop?Zt.setMode(P.LINE_LOOP):Zt.setMode(P.LINE_STRIP)}else R.isPoints?Zt.setMode(P.POINTS):R.isSprite&&Zt.setMode(P.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)Zt.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Zt.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let Ct=R._multiDrawStarts,rn=R._multiDrawCounts,jt=R._multiDrawCount,Oe=At?Y.get(At).bytesPerElement:1,ii=_t.get(z).currentProgram.getUniforms();for(let Le=0;Le<jt;Le++)ii.setValue(P,"_gl_DrawID",Le),Zt.render(Ct[Le]/Oe,rn[Le])}else if(R.isInstancedMesh)Zt.renderInstances(Kt,se,R.count);else if(N.isInstancedBufferGeometry){let Ct=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,rn=Math.min(N.instanceCount,Ct);Zt.renderInstances(Kt,se,rn)}else Zt.render(Kt,se)};function Qt(y,q,N){y.transparent===!0&&y.side===We&&y.forceSinglePass===!1?(y.side=qe,y.needsUpdate=!0,hs(y,q,N),y.side=Pn,y.needsUpdate=!0,hs(y,q,N),y.side=We):hs(y,q,N)}this.compile=function(y,q,N=null){N===null&&(N=y),p=Wt.get(N),p.init(q),I.push(p),N.traverseVisible(function(R){R.isLight&&R.layers.test(q.layers)&&(p.pushLight(R),R.castShadow&&p.pushShadow(R))}),y!==N&&y.traverseVisible(function(R){R.isLight&&R.layers.test(q.layers)&&(p.pushLight(R),R.castShadow&&p.pushShadow(R))}),p.setupLights();let z=new Set;return y.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let $=R.material;if($)if(Array.isArray($))for(let lt=0;lt<$.length;lt++){let mt=$[lt];Qt(mt,N,R),z.add(mt)}else Qt($,N,R),z.add($)}),I.pop(),p=null,z},this.compileAsync=function(y,q,N=null){let z=this.compile(y,q,N);return new Promise(R=>{function $(){if(z.forEach(function(lt){_t.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){R(y);return}setTimeout($,10)}Ft.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Fe=null;function sn(y){Fe&&Fe(y)}function ko(){Nn.stop()}function Ho(){Nn.start()}let Nn=new ml;Nn.setAnimationLoop(sn),typeof self!="undefined"&&Nn.setContext(self),this.setAnimationLoop=function(y){Fe=y,O.setAnimationLoop(y),y===null?Nn.stop():Nn.start()},O.addEventListener("sessionstart",ko),O.addEventListener("sessionend",Ho),this.render=function(y,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(q),q=O.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,q,L),p=Wt.get(y,I.length),p.init(q),I.push(p),Et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix(Et),vt=this.localClippingEnabled,et=J.init(this.clippingPlanes,vt),g=dt.get(y,b.length),g.init(),b.push(g),O.enabled===!0&&O.isPresenting===!0){let $=v.xr.getDepthSensingMesh();$!==null&&Cr($,q,-1/0,v.sortObjects)}Cr(y,q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(rt,ut),Gt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Gt&&bt.addToRenderList(g,y),this.info.render.frame++,et===!0&&J.beginShadows();let N=p.state.shadowsArray;pt.render(N,y,q),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=g.opaque,R=g.transmissive;if(p.setupLights(),q.isArrayCamera){let $=q.cameras;if(R.length>0)for(let lt=0,mt=$.length;lt<mt;lt++){let At=$[lt];Wo(z,R,y,At)}Gt&&bt.render(y);for(let lt=0,mt=$.length;lt<mt;lt++){let At=$[lt];Go(g,y,At,At.viewport)}}else R.length>0&&Wo(z,R,y,q),Gt&&bt.render(y),Go(g,y,q);L!==null&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(v,y,q),ee.resetDefaultState(),_=-1,C=null,I.pop(),I.length>0?(p=I[I.length-1],et===!0&&J.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Cr(y,q,N,z){if(y.visible===!1)return;if(y.layers.test(q.layers)){if(y.isGroup)N=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(q);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||X.intersectsSprite(y)){z&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Et);let lt=W.update(y),mt=y.material;mt.visible&&g.push(y,lt,mt,N,Bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||X.intersectsObject(y))){let lt=W.update(y),mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(Et)),Array.isArray(mt)){let At=lt.groups;for(let Tt=0,Pt=At.length;Tt<Pt;Tt++){let xt=At[Tt],Kt=mt[xt.materialIndex];Kt&&Kt.visible&&g.push(y,lt,Kt,N,Bt.z,xt)}}else mt.visible&&g.push(y,lt,mt,N,Bt.z,null)}}let $=y.children;for(let lt=0,mt=$.length;lt<mt;lt++)Cr($[lt],q,N,z)}function Go(y,q,N,z){let R=y.opaque,$=y.transmissive,lt=y.transparent;p.setupLightsView(N),et===!0&&J.setGlobalState(v.clippingPlanes,N),z&&Mt.viewport(w.copy(z)),R.length>0&&ls(R,q,N),$.length>0&&ls($,q,N),lt.length>0&&ls(lt,q,N),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Wo(y,q,N,z){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new An(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?rs:mn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let $=p.state.transmissionRenderTarget[z.id],lt=z.viewport||w;$.setSize(lt.z,lt.w);let mt=v.getRenderTarget();v.setRenderTarget($),v.getClearColor(H),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&bt.render(N);let At=v.toneMapping;v.toneMapping=qn;let Tt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),et===!0&&J.setGlobalState(v.clippingPlanes,z),ls(y,N,z),M.updateMultisampleRenderTarget($),M.updateRenderTargetMipmap($),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let xt=0,Kt=q.length;xt<Kt;xt++){let ne=q[xt],se=ne.object,we=ne.geometry,Zt=ne.material,Ct=ne.group;if(Zt.side===We&&se.layers.test(z.layers)){let rn=Zt.side;Zt.side=qe,Zt.needsUpdate=!0,Xo(se,N,z,we,Zt,Ct),Zt.side=rn,Zt.needsUpdate=!0,Pt=!0}}Pt===!0&&(M.updateMultisampleRenderTarget($),M.updateRenderTargetMipmap($))}v.setRenderTarget(mt),v.setClearColor(H,Z),Tt!==void 0&&(z.viewport=Tt),v.toneMapping=At}function ls(y,q,N){let z=q.isScene===!0?q.overrideMaterial:null;for(let R=0,$=y.length;R<$;R++){let lt=y[R],mt=lt.object,At=lt.geometry,Tt=z===null?lt.material:z,Pt=lt.group;mt.layers.test(N.layers)&&Xo(mt,q,N,At,Tt,Pt)}}function Xo(y,q,N,z,R,$){y.onBeforeRender(v,q,N,z,R,$),y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),R.onBeforeRender(v,q,N,z,y,$),R.transparent===!0&&R.side===We&&R.forceSinglePass===!1?(R.side=qe,R.needsUpdate=!0,v.renderBufferDirect(N,q,z,R,y,$),R.side=Pn,R.needsUpdate=!0,v.renderBufferDirect(N,q,z,R,y,$),R.side=We):v.renderBufferDirect(N,q,z,R,y,$),y.onAfterRender(v,q,N,z,R,$)}function hs(y,q,N){q.isScene!==!0&&(q=oe);let z=_t.get(y),R=p.state.lights,$=p.state.shadowsArray,lt=R.state.version,mt=yt.getParameters(y,R.state,$,q,N),At=yt.getProgramCacheKey(mt),Tt=z.programs;z.environment=y.isMeshStandardMaterial?q.environment:null,z.fog=q.fog,z.envMap=(y.isMeshStandardMaterial?V:x).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?q.environmentRotation:y.envMapRotation,Tt===void 0&&(y.addEventListener("dispose",Rt),Tt=new Map,z.programs=Tt);let Pt=Tt.get(At);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===lt)return Ko(y,mt),Pt}else mt.uniforms=yt.getUniforms(y),y.onBeforeCompile(mt,v),Pt=yt.acquireProgram(mt,At),Tt.set(At,Pt),z.uniforms=mt.uniforms;let xt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(xt.clippingPlanes=J.uniform),Ko(y,mt),z.needsLights=Hl(y),z.lightsStateVersion=lt,z.needsLights&&(xt.ambientLightColor.value=R.state.ambient,xt.lightProbe.value=R.state.probe,xt.directionalLights.value=R.state.directional,xt.directionalLightShadows.value=R.state.directionalShadow,xt.spotLights.value=R.state.spot,xt.spotLightShadows.value=R.state.spotShadow,xt.rectAreaLights.value=R.state.rectArea,xt.ltc_1.value=R.state.rectAreaLTC1,xt.ltc_2.value=R.state.rectAreaLTC2,xt.pointLights.value=R.state.point,xt.pointLightShadows.value=R.state.pointShadow,xt.hemisphereLights.value=R.state.hemi,xt.directionalShadowMap.value=R.state.directionalShadowMap,xt.directionalShadowMatrix.value=R.state.directionalShadowMatrix,xt.spotShadowMap.value=R.state.spotShadowMap,xt.spotLightMatrix.value=R.state.spotLightMatrix,xt.spotLightMap.value=R.state.spotLightMap,xt.pointShadowMap.value=R.state.pointShadowMap,xt.pointShadowMatrix.value=R.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function Yo(y){if(y.uniformsList===null){let q=y.currentProgram.getUniforms();y.uniformsList=Si.seqWithValue(q.seq,y.uniforms)}return y.uniformsList}function Ko(y,q){let N=_t.get(y);N.outputColorSpace=q.outputColorSpace,N.batching=q.batching,N.batchingColor=q.batchingColor,N.instancing=q.instancing,N.instancingColor=q.instancingColor,N.instancingMorph=q.instancingMorph,N.skinning=q.skinning,N.morphTargets=q.morphTargets,N.morphNormals=q.morphNormals,N.morphColors=q.morphColors,N.morphTargetsCount=q.morphTargetsCount,N.numClippingPlanes=q.numClippingPlanes,N.numIntersection=q.numClipIntersection,N.vertexAlphas=q.vertexAlphas,N.vertexTangents=q.vertexTangents,N.toneMapping=q.toneMapping}function Ol(y,q,N,z,R){q.isScene!==!0&&(q=oe),M.resetTextureUnits();let $=q.fog,lt=z.isMeshStandardMaterial?q.environment:null,mt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Di,At=(z.isMeshStandardMaterial?V:x).get(z.envMap||lt),Tt=z.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Pt=!!N.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xt=!!N.morphAttributes.position,Kt=!!N.morphAttributes.normal,ne=!!N.morphAttributes.color,se=qn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(se=v.toneMapping);let we=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Zt=we!==void 0?we.length:0,Ct=_t.get(z),rn=p.state.lights;if(et===!0&&(vt===!0||y!==C)){let ze=y===C&&z.id===_;J.setState(z,y,ze)}let jt=!1;z.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==rn.state.version||Ct.outputColorSpace!==mt||R.isBatchedMesh&&Ct.batching===!1||!R.isBatchedMesh&&Ct.batching===!0||R.isBatchedMesh&&Ct.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&Ct.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&Ct.instancing===!1||!R.isInstancedMesh&&Ct.instancing===!0||R.isSkinnedMesh&&Ct.skinning===!1||!R.isSkinnedMesh&&Ct.skinning===!0||R.isInstancedMesh&&Ct.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Ct.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Ct.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Ct.instancingMorph===!1&&R.morphTexture!==null||Ct.envMap!==At||z.fog===!0&&Ct.fog!==$||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==J.numPlanes||Ct.numIntersection!==J.numIntersection)||Ct.vertexAlphas!==Tt||Ct.vertexTangents!==Pt||Ct.morphTargets!==xt||Ct.morphNormals!==Kt||Ct.morphColors!==ne||Ct.toneMapping!==se||Ct.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,Ct.__version=z.version);let Oe=Ct.currentProgram;jt===!0&&(Oe=hs(z,q,R));let ii=!1,Le=!1,Oi=!1,re=Oe.getUniforms(),je=Ct.uniforms;if(Mt.useProgram(Oe.program)&&(ii=!0,Le=!0,Oi=!0),z.id!==_&&(_=z.id,Le=!0),ii||C!==y){Mt.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),Uh(at),Dh(at),re.setValue(P,"projectionMatrix",at)):re.setValue(P,"projectionMatrix",y.projectionMatrix),re.setValue(P,"viewMatrix",y.matrixWorldInverse);let vn=re.map.cameraPosition;vn!==void 0&&vn.setValue(P,qt.setFromMatrixPosition(y.matrixWorld)),Ot.logarithmicDepthBuffer&&re.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),C!==y&&(C=y,Le=!0,Oi=!0)}if(R.isSkinnedMesh){re.setOptional(P,R,"bindMatrix"),re.setOptional(P,R,"bindMatrixInverse");let ze=R.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),re.setValue(P,"boneTexture",ze.boneTexture,M))}R.isBatchedMesh&&(re.setOptional(P,R,"batchingTexture"),re.setValue(P,"batchingTexture",R._matricesTexture,M),re.setOptional(P,R,"batchingIdTexture"),re.setValue(P,"batchingIdTexture",R._indirectTexture,M),re.setOptional(P,R,"batchingColorTexture"),R._colorsTexture!==null&&re.setValue(P,"batchingColorTexture",R._colorsTexture,M));let ki=N.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&wt.update(R,N,Oe),(Le||Ct.receiveShadow!==R.receiveShadow)&&(Ct.receiveShadow=R.receiveShadow,re.setValue(P,"receiveShadow",R.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(je.envMap.value=At,je.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&q.environment!==null&&(je.envMapIntensity.value=q.environmentIntensity),Le&&(re.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&kl(je,Oi),$&&z.fog===!0&&ot.refreshFogUniforms(je,$),ot.refreshMaterialUniforms(je,z,k,tt,p.state.transmissionRenderTarget[y.id]),Si.upload(P,Yo(Ct),je,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Si.upload(P,Yo(Ct),je,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(P,"center",R.center),re.setValue(P,"modelViewMatrix",R.modelViewMatrix),re.setValue(P,"normalMatrix",R.normalMatrix),re.setValue(P,"modelMatrix",R.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let ze=z.uniformsGroups;for(let vn=0,yn=ze.length;vn<yn;vn++){let Zo=ze[vn];T.update(Zo,Oe),T.bind(Zo,Oe)}}return Oe}function kl(y,q){y.ambientLightColor.needsUpdate=q,y.lightProbe.needsUpdate=q,y.directionalLights.needsUpdate=q,y.directionalLightShadows.needsUpdate=q,y.pointLights.needsUpdate=q,y.pointLightShadows.needsUpdate=q,y.spotLights.needsUpdate=q,y.spotLightShadows.needsUpdate=q,y.rectAreaLights.needsUpdate=q,y.hemisphereLights.needsUpdate=q}function Hl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,q,N){_t.get(y.texture).__webglTexture=q,_t.get(y.depthTexture).__webglTexture=N;let z=_t.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=N===void 0,z.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,q){let N=_t.get(y);N.__webglFramebuffer=q,N.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(y,q=0,N=0){L=y,S=q,E=N;let z=!0,R=null,$=!1,lt=!1;if(y){let At=_t.get(y);if(At.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(At.__webglFramebuffer===void 0)M.setupRenderTarget(y);else if(At.__hasExternalTextures)M.rebindTextures(y,_t.get(y.texture).__webglTexture,_t.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let xt=y.depthTexture;if(At.__boundDepthTexture!==xt){if(xt!==null&&_t.has(xt)&&(y.width!==xt.image.width||y.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(y)}}let Tt=y.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(lt=!0);let Pt=_t.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[q])?R=Pt[q][N]:R=Pt[q],$=!0):y.samples>0&&M.useMultisampledRTT(y)===!1?R=_t.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?R=Pt[N]:R=Pt,w.copy(y.viewport),F.copy(y.scissor),B=y.scissorTest}else w.copy(It).multiplyScalar(k).floor(),F.copy(zt).multiplyScalar(k).floor(),B=te;if(Mt.bindFramebuffer(P.FRAMEBUFFER,R)&&z&&Mt.drawBuffers(y,R),Mt.viewport(w),Mt.scissor(F),Mt.setScissorTest(B),$){let At=_t.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,At.__webglTexture,N)}else if(lt){let At=_t.get(y.texture),Tt=q||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,N||0,Tt)}_=-1},this.readRenderTargetPixels=function(y,q,N,z,R,$,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=_t.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){Mt.bindFramebuffer(P.FRAMEBUFFER,mt);try{let At=y.texture,Tt=At.format,Pt=At.type;if(!Ot.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=y.width-z&&N>=0&&N<=y.height-R&&P.readPixels(q,N,z,R,Ut.convert(Tt),Ut.convert(Pt),$)}finally{let At=L!==null?_t.get(L).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,q,N,z,R,$,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=_t.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){let At=y.texture,Tt=At.format,Pt=At.type;if(!Ot.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=y.width-z&&N>=0&&N<=y.height-R){Mt.bindFramebuffer(P.FRAMEBUFFER,mt);let xt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,xt),P.bufferData(P.PIXEL_PACK_BUFFER,$.byteLength,P.STREAM_READ),P.readPixels(q,N,z,R,Ut.convert(Tt),Ut.convert(Pt),0);let Kt=L!==null?_t.get(L).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,Kt);let ne=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Lh(P,ne,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,xt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,$),P.deleteBuffer(xt),P.deleteSync(ne),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,q=null,N=0){y.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,y=arguments[1]);let z=Math.pow(2,-N),R=Math.floor(y.image.width*z),$=Math.floor(y.image.height*z),lt=q!==null?q.x:0,mt=q!==null?q.y:0;M.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,N,0,0,lt,mt,R,$),Mt.unbindTexture()},this.copyTextureToTexture=function(y,q,N=null,z=null,R=0){y.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],q=arguments[2],R=arguments[3]||0,N=null);let $,lt,mt,At,Tt,Pt,xt,Kt,ne,se=y.isCompressedTexture?y.mipmaps[R]:y.image;N!==null?($=N.max.x-N.min.x,lt=N.max.y-N.min.y,mt=N.isBox3?N.max.z-N.min.z:1,At=N.min.x,Tt=N.min.y,Pt=N.isBox3?N.min.z:0):($=se.width,lt=se.height,mt=se.depth||1,At=0,Tt=0,Pt=0),z!==null?(xt=z.x,Kt=z.y,ne=z.z):(xt=0,Kt=0,ne=0);let we=Ut.convert(q.format),Zt=Ut.convert(q.type),Ct;q.isData3DTexture?(M.setTexture3D(q,0),Ct=P.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(M.setTexture2DArray(q,0),Ct=P.TEXTURE_2D_ARRAY):(M.setTexture2D(q,0),Ct=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);let rn=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Oe=P.getParameter(P.UNPACK_SKIP_PIXELS),ii=P.getParameter(P.UNPACK_SKIP_ROWS),Le=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,se.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,At),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pt);let Oi=y.isDataArrayTexture||y.isData3DTexture,re=q.isDataArrayTexture||q.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let je=_t.get(y),ki=_t.get(q),ze=_t.get(je.__renderTarget),vn=_t.get(ki.__renderTarget);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,ze.__webglFramebuffer),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let yn=0;yn<mt;yn++)Oi&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(y).__webglTexture,R,Pt+yn),y.isDepthTexture?(re&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(q).__webglTexture,R,ne+yn),P.blitFramebuffer(At,Tt,$,lt,xt,Kt,$,lt,P.DEPTH_BUFFER_BIT,P.NEAREST)):re?P.copyTexSubImage3D(Ct,R,xt,Kt,ne+yn,At,Tt,$,lt):P.copyTexSubImage2D(Ct,R,xt,Kt,ne+yn,At,Tt,$,lt);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else re?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ct,R,xt,Kt,ne,$,lt,mt,we,Zt,se.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(Ct,R,xt,Kt,ne,$,lt,mt,we,se.data):P.texSubImage3D(Ct,R,xt,Kt,ne,$,lt,mt,we,Zt,se):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,R,xt,Kt,$,lt,we,Zt,se.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,R,xt,Kt,se.width,se.height,we,se.data):P.texSubImage2D(P.TEXTURE_2D,R,xt,Kt,$,lt,we,Zt,se);P.pixelStorei(P.UNPACK_ROW_LENGTH,rn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Oe),P.pixelStorei(P.UNPACK_SKIP_ROWS,ii),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le),R===0&&q.generateMipmaps&&P.generateMipmap(Ct),Mt.unbindTexture()},this.copyTextureToTexture3D=function(y,q,N=null,z=null,R=0){return y.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,z=arguments[1]||null,y=arguments[2],q=arguments[3],R=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,q,N,z,R)},this.initRenderTarget=function(y){_t.get(y).__webglFramebuffer===void 0&&M.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){S=0,E=0,L=null,Mt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var er=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ir=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Me=new D,ns=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Li=class extends Dn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xi,Yi=new D,vi=new D,yi=new D,Ci=new Nt,Ki=new Nt,Cl=new he,Ps=new D,Zi=new D,Ls=new D,Zc=new Nt,Jr=new Nt,jc=new Nt,$n=class extends xe{constructor(t=new Li){if(super(),this.isSprite=!0,this.type="Sprite",xi===void 0){xi=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ir(e,5);xi.setIndex([0,1,2,0,2,3]),xi.setAttribute("position",new ns(n,3,0,!1)),xi.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=xi,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vi.setFromMatrixScale(this.matrixWorld),Cl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-yi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Us(Ps.set(-.5,-.5,0),yi,a,vi,s,r),Us(Zi.set(.5,-.5,0),yi,a,vi,s,r),Us(Ls.set(.5,.5,0),yi,a,vi,s,r),Zc.set(0,0),Jr.set(1,0),jc.set(1,1);let o=t.ray.intersectTriangle(Ps,Zi,Ls,!1,Yi);if(o===null&&(Us(Zi.set(-.5,.5,0),yi,a,vi,s,r),Jr.set(0,1),o=t.ray.intersectTriangle(Ps,Ls,Zi,!1,Yi),o===null))return;let c=t.ray.origin.distanceTo(Yi);c<t.near||c>t.far||e.push({distance:c,point:Yi.clone(),uv:wn.getInterpolation(Yi,Ps,Zi,Ls,Zc,Jr,jc,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Us(i,t,e,n,s,r){Ci.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ki.x=r*Ci.x-s*Ci.y,Ki.y=s*Ci.x+r*Ci.y):Ki.copy(Ci),i.copy(t),i.x+=Ki.x,i.y+=Ki.y,i.applyMatrix4(Cl)}var sr=class extends Ve{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vn=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new D,h=new Nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},is=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,A=[],g=n/2,p=0;b(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function b(){let v=new D,U=new D,S=0,E=(e-t)/n;for(let L=0;L<=r;L++){let _=[],C=L/r,w=C*(e-t)+t;for(let F=0;F<=s;F++){let B=F/s,H=B*c+o,Z=Math.sin(H),G=Math.cos(H);U.x=w*Z,U.y=-C*n+g,U.z=w*G,d.push(U.x,U.y,U.z),v.set(Z,E,G).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-C),_.push(m++)}A.push(_)}for(let L=0;L<s;L++)for(let _=0;_<r;_++){let C=A[_][L],w=A[_+1][L],F=A[_+1][L+1],B=A[_][L+1];(t>0||_!==0)&&(h.push(C,w,B),S+=3),(e>0||_!==r-1)&&(h.push(w,F,B),S+=3)}l.addGroup(p,S,0),p+=S}function I(v){let U=m,S=new Nt,E=new D,L=0,_=v===!0?t:e,C=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),m++;let w=m;for(let F=0;F<=s;F++){let H=F/s*c+o,Z=Math.cos(H),G=Math.sin(H);E.x=_*G,E.y=g*C,E.z=_*Z,d.push(E.x,E.y,E.z),u.push(0,C,0),S.x=Z*.5+.5,S.y=G*.5*C+.5,f.push(S.x,S.y),m++}for(let F=0;F<s;F++){let B=U+F,H=w+F;v===!0?h.push(H,H+1,B):h.push(H+1,H,B),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rr=class i extends is{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ar=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=t,u=(e-t)/s,f=new D,m=new Nt;for(let A=0;A<=s;A++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let A=0;A<s;A++){let g=A*(n+1);for(let p=0;p<n;p++){let b=p+g,I=b,v=b+n+1,U=b+n+2,S=b+1;o.push(I,v,S),o.push(v,U,S)}}this.setIndex(o),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var or=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new D,u=new D,f=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let b=[],I=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){let S=U/e;d.x=-t*Math.cos(s+S*r)*Math.sin(a+I*o),d.y=t*Math.cos(a+I*o),d.z=t*Math.sin(s+S*r)*Math.sin(a+I*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),A.push(u.x,u.y,u.z),g.push(S+v,1-I),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let I=h[p][b+1],v=h[p][b],U=h[p+1][b],S=h[p+1][b+1];(p!==0||a>0)&&f.push(I,v,S),(p!==n-1||c<Math.PI)&&f.push(v,U,S)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(A,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ss=class extends Dn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ds(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ro=class extends Ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ec:r=t,o=2*e-n;break;case nc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ec:a=t,c=2*n-e;break;case nc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-u*g+2*u*A-u*m,b=(1+u)*g+(-1.5-2*u)*A+(-.5+u)*m+1,I=(-1-f)*g+(1.5+f)*A+.5*m,v=f*g-f*A;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+b*a[l+U]+I*a[c+U]+v*a[d+U];return r}},ao=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},oo=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ds(e,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ds(t.times,Array),values:Ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ro(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Ba:e=this.InterpolantFactoryMethodLinear;break;case _r:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return _r}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&qg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_r,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let A=e[d+m];if(A!==e[u+m]||A!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=Ba;var ti=class extends Ze{constructor(t,e,n){super(t,e,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Os;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends Ze{};co.prototype.ValueTypeName="color";var lo=class extends Ze{};lo.prototype.ValueTypeName="number";var ho=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Un.slerpFlat(r,0,a,l-o,a,l,c);return r}},cr=class extends Ze{InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends Ze{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Os;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends Ze{};uo.prototype.ValueTypeName="vector";var fo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Rg=new fo,po=class{constructor(t){this.manager=t!==void 0?t:Rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};po.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},hr=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},$r=new he,Qc=new D,Jc=new D,go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var mo=class extends go{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ur=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new mo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Eo="\\[\\]\\.:\\/",Pg=new RegExp("["+Eo+"]","g"),wo="[^"+Eo+"]",Lg="[^"+Eo.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",wo),Dg=/(WCOD+)?/.source.replace("WCOD",Lg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wo),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wo),zg=new RegExp("^"+Ug+Dg+Vg+Ng+"$"),Bg=["material","materials","bones","map"],Ao=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pg,"")}static parseTrackName(t){let e=zg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Ao;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var am=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);function _l(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Re,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Il(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let A=0;A<a[h].length;++A)f.push(a[h][A][u]);let m=Il(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Il(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ve(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let A=h.getComponent(u,m);o.setComponent(u+d,m,A)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var ni=(i,t,e)=>i<t?t:i>e?e:i;function To(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var nn=[{id:"baby",at:0,ar:"\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0635\u063A\u064A\u0631",en:"Baby Raptor"},{id:"raptor",at:10,ar:"\u0631\u0627\u0628\u062A\u0648\u0631",en:"Raptor"},{id:"hunter",at:32,ar:"\u0635\u064A\u0651\u0627\u062F \u0627\u0644\u062A\u0627\u062C",en:"Crest Hunter"},{id:"giant",at:70,ar:"\u0639\u0645\u0644\u0627\u0642",en:"Giant"}];function Og(i){let t=0;for(let e=1;e<nn.length;e++)i>=nn[e].at&&(t=e);return t}var gr=i=>.55+.2*Math.sqrt(Math.max(0,i)),Ml=i=>7.5+.02*Math.min(i,150),qo=i=>20+9*Math.log(1+Math.max(0,i)/10),bl=(i,t)=>i>=t?"red":i<=t*.6?"green":"white",kg=i=>Math.max(1,Math.ceil(i*.5));function Hg({time:i,par:t,hits:e,power:n,goal:s}){let r=1;return i<=t*1.7&&(r=2),r===2&&(i<=t||e<=2||n>=s*1.25)&&(r=3),r}var Ni={beetle:{power:1,f:.45,ai:"flee",fleeK:.62,ws:1.6,respawn:3,look:"beetle",ar:"\u062E\u0646\u0641\u0633\u0629",en:"Beetle"},egg:{power:1,f:.6,ai:"static",respawn:6,look:"egg",ar:"\u0628\u064A\u0636\u0629",en:"Egg"},compy:{power:3,f:.8,ai:"flee",fleeK:.78,ws:2.2,respawn:5,look:"compy",ar:"\u0643\u0648\u0645\u0628\u064A",en:"Compy"},dodo:{power:5,f:.85,ai:"flee",fleeK:.72,ws:2,respawn:6,look:"dodo",ar:"\u062F\u0648\u062F\u0648",en:"Dodo"},stegoBaby:{power:8,f:.9,ai:"wander",fleeK:.55,ws:1.7,respawn:8,look:"stego",ar:"\u0633\u062A\u064A\u062C\u0648 \u0635\u063A\u064A\u0631",en:"Baby Stego"},trike:{power:14,f:.95,ai:"wander",fleeK:.5,ws:1.8,respawn:10,look:"trike",ar:"\u062A\u0631\u0627\u064A\u0633\u064A\u0631\u0627",en:"Trike"},raptorRed:{power:22,f:.95,ai:"hunter",fleeK:.7,ws:2.2,respawn:14,look:"raptorRed",ar:"\u0631\u0627\u0628\u062A\u0648\u0631 \u0623\u062D\u0645\u0631",en:"Red Raptor"},rexJr:{power:40,f:.95,ai:"hunter",fleeK:.6,ws:2,respawn:20,look:"rexJr",ar:"\u0631\u064A\u0643\u0633 \u0635\u063A\u064A\u0631",en:"Junior Rex"},mudbug:{power:2,f:.45,ai:"flee",fleeK:.62,ws:1.6,respawn:3,look:"mudbug",ar:"\u062D\u0634\u0631\u0629 \u0627\u0644\u0637\u064A\u0646",en:"Mud Bug"},frog:{power:4,f:.7,ai:"flee",fleeK:.75,ws:2,respawn:5,look:"frog",ar:"\u0636\u0641\u062F\u0639\u0629",en:"Frog"},swampEgg:{power:6,f:.6,ai:"static",respawn:7,look:"swampEgg",ar:"\u0628\u064A\u0636\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Swamp Egg"},gator:{power:20,f:.95,ai:"hunter",fleeK:.6,ws:1.8,respawn:14,look:"gator",ar:"\u062A\u0645\u0633\u0627\u062D",en:"Gator"},ankylo:{power:30,f:.95,ai:"wander",fleeK:.45,ws:1.4,respawn:12,look:"ankylo",ar:"\u0623\u0646\u0643\u064A\u0644\u0648",en:"Ankylo"},calf:{power:42,f:.95,ai:"wander",fleeK:.45,ws:1.5,respawn:14,look:"calf",ar:"\u0628\u0631\u0627\u0643\u064A\u0648 \u0635\u063A\u064A\u0631",en:"Baby Brachio"},swampRex:{power:60,f:.95,ai:"hunter",fleeK:.55,ws:1.8,respawn:20,look:"swampRex",ar:"\u0631\u064A\u0643\u0633 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Swamp Rex"},emberbug:{power:2,f:.45,ai:"flee",fleeK:.62,ws:1.6,respawn:3,look:"emberbug",ar:"\u062D\u0634\u0631\u0629 \u0627\u0644\u062C\u0645\u0631",en:"Ember Bug"},lavaEgg:{power:8,f:.6,ai:"static",respawn:7,look:"lavaEgg",ar:"\u0628\u064A\u0636\u0629 \u0627\u0644\u0628\u0631\u0643\u0627\u0646",en:"Lava Egg"},lizard:{power:16,f:.85,ai:"flee",fleeK:.75,ws:2.2,respawn:8,look:"lizard",ar:"\u0633\u062D\u0644\u064A\u0629",en:"Lizard"},ankyloRed:{power:32,f:.95,ai:"wander",fleeK:.45,ws:1.4,respawn:12,look:"ankyloRed",ar:"\u0623\u0646\u0643\u064A\u0644\u0648 \u0627\u0644\u062D\u0645\u0645",en:"Lava Ankylo"},trikeRed:{power:48,f:.95,ai:"wander",fleeK:.45,ws:1.6,respawn:14,look:"trikeRed",ar:"\u062A\u0631\u0627\u064A\u0633\u064A\u0631\u0627 \u0627\u0644\u062D\u0645\u0645",en:"Lava Trike"},spino:{power:72,f:.95,ai:"hunter",fleeK:.55,ws:1.8,respawn:22,look:"spino",ar:"\u0633\u0628\u064A\u0646\u0648",en:"Spino"},alphaRaptor:{power:36,f:1.5,ai:"hunter",fleeK:.8,ws:2.2,respawn:0,look:"raptorRed",alpha:!0,ar:"\u0632\u0639\u064A\u0645 \u0627\u0644\u0623\u0646\u064A\u0627\u0628",en:"Snapjaw Alpha"},alphaGator:{power:80,f:1.35,ai:"hunter",fleeK:.75,ws:1.8,respawn:0,look:"swampRex",alpha:!0,ar:"\u0632\u0639\u064A\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Marsh Fang Alpha"},rex:{power:88,f:.95,ai:"hunter",fleeK:.5,ws:1.8,respawn:26,look:"rex",ar:"\u0631\u064A\u0643\u0633",en:"Rex"}},as=Ni;for(let[i,t]of Object.entries(Ni))t.key=i,t.r=(.55+.2*Math.sqrt(t.power))*t.f,t.gain=kg(t.power);var ye=[{id:"jungle",ar:"\u0627\u0644\u063A\u0627\u0628\u0629",en:"Fern Hollow",sub:["\u0643\u064F\u0644 \u0627\u0644\u0623\u062E\u0636\u0631\u060C \u0627\u062C\u0631\u064A \u0645\u0646 \u0627\u0644\u0623\u062D\u0645\u0631!","Eat green, run from red!"],half:28,start:3,goal:37,alpha:{kind:"alphaRaptor",summon:20},par:100,obst:{kinds:["tree","tree","rock"],n:14},species:[["beetle",10],["egg",6],["compy",6],["dodo",5],["stegoBaby",4],["trike",3],["raptorRed",3],["rexJr",2]]},{id:"swamp",ar:"\u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Mirefen Swamp",sub:["\u0627\u0633\u062D\u0628 \u0627\u0644\u0635\u064A\u0651\u0627\u062F\u064A\u0646 \u0625\u0644\u0649 \u0627\u0644\u0637\u064A\u0646!","Lure the divers into the mud!"],half:32,start:40,goal:81,alpha:{kind:"alphaGator",summon:55},par:140,obst:{kinds:["stump","rock","stump"],n:13},species:[["mudbug",10],["frog",8],["swampEgg",6],["gator",4],["ankylo",4],["calf",3],["swampRex",2]]},{id:"volcano",ar:"\u0648\u0627\u062F\u064A \u0627\u0644\u0628\u0631\u0643\u0627\u0646",en:"Volcano Valley",sub:["\u0627\u0647\u0631\u0628 \u0645\u0646 \u0627\u0644\u062F\u0648\u0633 \u0648\u0627\u0644\u0646\u0627\u0631!","Dodge the stomps and the fire!"],half:36,start:56,goal:100,par:220,obst:{kinds:["rock","pillar","rock"],n:14},boss:{power:100,hp:3,r:4},species:[["emberbug",8],["lavaEgg",6],["lizard",6],["ankyloRed",3],["trikeRed",4],["spino",3],["rex",2]]},{id:"jungle2",look:"jungle",ar:"\u0627\u0644\u063A\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0642\u0629",en:"Deep Fern Hollow",sub:["\u0627\u0644\u063A\u0627\u0628\u0629 \u0628\u0642\u062A \u0623\u062E\u0637\u0631!","The hollow got wilder!"],half:32,start:6,goal:55,alpha:{kind:"alphaRaptor",summon:30},par:130,obst:{kinds:["tree","tree","rock"],n:14},species:[["beetle",8],["egg",6],["compy",6],["dodo",5],["stegoBaby",5],["trike",4],["raptorRed",4],["rexJr",3]]},{id:"swamp2",look:"swamp",ar:"\u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639 \u0627\u0644\u0623\u0633\u0648\u062F",en:"Black Mire",sub:["\u0627\u0644\u0637\u064A\u0646 \u0623\u0639\u0645\u0642 \u0648\u0627\u0644\u0635\u064A\u0651\u0627\u062F\u064A\u0646 \u0623\u0643\u062A\u0631!","Deeper mud, more divers!"],half:36,start:50,goal:105,alpha:{kind:"alphaGator",summon:70},par:170,obst:{kinds:["stump","stump","rock"],n:14},species:[["mudbug",9],["frog",8],["swampEgg",6],["gator",5],["ankylo",5],["calf",4],["swampRex",3]]},{id:"volcano2",look:"volcano",ar:"\u0642\u0645\u0629 \u0627\u0644\u0628\u0631\u0643\u0627\u0646",en:"Volcano Peak",sub:["\u0627\u0644\u0628\u0631\u0643\u0627\u0646 \u0628\u064A\u0632\u0645\u062C\u0631!","The volcano roars!"],half:40,start:70,goal:130,par:260,obst:{kinds:["rock","pillar","rock"],n:16},boss:{power:140,hp:4,r:4.4},species:[["emberbug",8],["lavaEgg",6],["lizard",6],["ankyloRed",4],["trikeRed",5],["spino",4],["rex",3]]}];function Sl(i){let t={unlocked:1,stars:ye.map(()=>0),best:ye.map(()=>0),muted:!1,eaten:0};if(i&&typeof i=="object"){t.unlocked=ni(Math.floor(Number(i.unlocked))||1,1,ye.length);for(let e=0;e<ye.length;e++){let n=i.stars&&i.stars[e];t.stars[e]=ni(Math.floor(Number(n))||0,0,3);let s=i.best&&Number(i.best[e]);t.best[e]=s>0&&Number.isFinite(s)?Math.round(s):0}for(let e=0;e<ye.length-1;e++)t.stars[e]>0&&t.unlocked<e+2&&(t.unlocked=e+2);t.muted=!!i.muted,t.eaten=Math.max(0,Math.floor(Number(i.eaten))||0)}return t}var mr=class{constructor({level:t=0,seed:e=1,easy:n=!1}={}){let s=ye[ni(t,0,ye.length-1)];this.L=s,this.level=ye.indexOf(s),this.easy=!!n,this.rand=To(e*7919+this.level*131+17),this.time=0,this.done=!1,this.won=!1,this.result=null,this.winT=0,this.floor=s.start,this.player={x:0,z:0,vx:0,vz:0,P:s.start,stage:Og(s.start),r:gr(s.start),face:0,pdx:0,pdz:1,pounceT:0,pounceCd:0,inv:0,kx:0,kz:0,speedNow:0,px:0,pz:1,bite:0},this.stats={eaten:0,hits:0},this.nextId=1,this.creatures=[],this.pending=[],this.obstacles=[],this.projectiles=[],this.boss=null,this.alpha=null,this.alphaDown=!1,this._genObstacles();for(let[r,a]of s.species)for(let o=0;o<a;o++)this._spawn(r,!0);s.boss&&(this.boss={x:0,z:-s.half+8,power:s.boss.power,r:s.boss.r,hp:n?2:s.boss.hp,maxHp:n?2:s.boss.hp,face:0,tele:null,timer:4,stagger:0,hitCd:0,speedNow:0,down:!1})}get arena(){return this.L.half}get stage(){return this.player.stage}get phase(){return this.boss?this.boss.maxHp-this.boss.hp+1:0}target(t){return this.L.species.find(e=>e[0]===t)[1]}_genObstacles(){let{kinds:t,n:e}=this.L.obst,n=this.L.half-3;for(let s=0;this.obstacles.length<e&&s<400;s++){let r=(this.rand()*2-1)*n,a=(this.rand()*2-1)*n,o=t[Math.floor(this.rand()*t.length)],c=(o==="rock"?1:o==="pillar"?1.2:1.1)+this.rand()*.5;Math.hypot(r,a)<7||this.boss===null&&this.L.boss&&Math.hypot(r,a+this.L.half-8)<8||this.obstacles.some(l=>Math.hypot(l.x-r,l.z-a)<l.r+c+3)||this.obstacles.push({x:r,z:a,r:c,kind:o})}}_freeSpot(t,e){let n=this.L.half-2.5;for(let s=0;s<40;s++){let r=(this.rand()*2-1)*n,a=(this.rand()*2-1)*n;if(!(Math.hypot(r-this.player.x,a-this.player.z)<t)&&!this.obstacles.some(o=>Math.hypot(o.x-r,o.z-a)<o.r+e+.6)&&!(this.L.boss&&Math.hypot(r,a+this.L.half-8)<7))return{x:r,z:a}}return null}_spawn(t,e){let n=Ni[t],s=this._freeSpot(n.ai==="hunter"?e?16:18:e?6:10,n.r);if(!s)return null;let r={id:this.nextId++,kind:t,power:n.power,r:n.r,ai:n.ai,x:s.x,z:s.z,face:this.rand()*6.28,vx:0,vz:0,speed:0,wa:this.rand()*6.28,wt:this.rand()*2,walk:!1,stun:0,chase:!1,born:e?-1:this.time};return this.creatures.push(r),r}_loss(t){let e=this.player,n=this.easy?1:Math.max(1,Math.round(e.P*t)),s=e.P;return e.P=Math.max(this.floor,e.P-n),s-e.P}_hurt(t,e,n,s,r){let a=this.player;if(a.inv>0)return!1;let o=this._loss(n),c=a.x-t,l=a.z-e,h=Math.hypot(c,l)||1;return a.kx=c/h*15,a.kz=l/h*15,a.inv=1.4,a.pounceT=0,this.stats.hits++,a.r=gr(a.P),s.push({type:"bump",src:r,lost:o,x:a.x,z:a.z}),!0}_push(t,e,n,s){let r=Math.hypot(e-t.x,n-t.z),a=t.r+s;if(r<a&&r>1e-6){let o=(a-r)/r;return[(e-t.x)*o,(n-t.z)*o]}return[0,0]}_place(t,e){let n=this.L.half-e;t.x=ni(t.x,-n,n),t.z=ni(t.z,-n,n);for(let s=0;s<2;s++)for(let r of this.obstacles){let[a,o]=this._push(r,t.x,t.z,e);t.x+=a,t.z+=o}t.x=ni(t.x,-n,n),t.z=ni(t.z,-n,n)}step(t,e={}){let n=[];return this.done||(t=Math.min(t,.05),this.time+=t,this._player(t,e,n),this._creatures(t,n),this.boss&&this._boss(t,n),this._projectiles(t,n),this._respawn(t),this._alphaCheck(n),this._collide(n),this.winT>0?(this.winT-=t,this.winT<=0&&this._finish(n)):!this.boss&&!this.L.alpha&&this.player.P>=this.L.goal&&this._finish(n)),n}_player(t,e,n){let s=this.player,r=Number(e.x)||0,a=Number(e.z)||0,o=Math.hypot(r,a);o>1&&(r/=o,a/=o,o=1),s.inv=Math.max(0,s.inv-t),s.pounceCd=Math.max(0,s.pounceCd-t),s.bite=Math.max(0,s.bite-t),o>.1&&(s.pdx=r/o,s.pdz=a/o),e.pounce&&s.pounceCd<=0&&s.pounceT<=0&&(s.pounceT=.32,s.pounceCd=1.5,s.px=s.pdx,s.pz=s.pdz,n.push({type:"pounce",x:s.x,z:s.z}));let c=Ml(s.P),l,h;if(s.pounceT>0?(s.pounceT-=t,l=s.px*c*3.2,h=s.pz*c*3.2):(l=r*c,h=a*c),s.speedNow=Math.hypot(l,h),s.speedNow>.3){let u=Math.atan2(l,h)-s.face;u=Math.atan2(Math.sin(u),Math.cos(u)),s.face+=u*Math.min(1,t*12)}s.kx*=Math.exp(-t*5),s.kz*=Math.exp(-t*5),s.x+=(l+s.kx)*t,s.z+=(h+s.kz)*t,s.r=gr(s.P),this._place(s,s.r*.8)}_creatures(t,e){let n=this.player,s=Ml(n.P),r=this.L.half;for(let a of this.creatures){a.stun=Math.max(0,a.stun-t);let o=n.x-a.x,c=n.z-a.z,l=Math.hypot(o,c)||1e-6,h=Ni[a.kind],d=0,u=0;if(a.ai==="static"){a.speed=0;continue}if(a.power<n.P)if(a.chase=!1,l<9+n.r*2){let f=s*h.fleeK*(this.easy?.8:1),m=-o/l,A=-c/l;if(r-Math.max(Math.abs(a.x),Math.abs(a.z))<3){let p=Math.hypot(a.x,a.z)||1;m+=-a.x/p*.9,A+=-a.z/p*.9;let b=Math.hypot(m,A)||1;m/=b,A/=b}d=m*f,u=A*f}else this._wander(a,t,h,r);else if(a.ai==="hunter"&&a.stun<=0){let f=this.easy?9:13;if(!a.chase&&l<f&&(a.chase=!0,e.push({type:"alert",id:a.id,x:a.x,z:a.z})),a.chase&&l>f*1.5&&(a.chase=!1),a.chase){let m=s*(this.easy?.42:.6);d=o/l*m,u=c/l*m}else this._wander(a,t,h,r)}else a.stun>0?(d=-o/l*3.5,u=-c/l*3.5):this._wander(a,t,h,r);if(a.walkV&&(d=a.walkV[0],u=a.walkV[1],a.walkV=null),a.vx=d,a.vz=u,a.speed=Math.hypot(d,u),a.x+=d*t,a.z+=u*t,a.speed>.2){let m=Math.atan2(d,u)-a.face;m=Math.atan2(Math.sin(m),Math.cos(m)),a.face+=m*Math.min(1,t*8)}this._place(a,a.r*.7)}}_wander(t,e,n,s){t.wt-=e,t.wt<=0&&(t.wa=this.rand()*6.283,t.wt=1.5+this.rand()*2.5,t.walk=this.rand()<.65),Math.max(Math.abs(t.x),Math.abs(t.z))>s-3&&(t.wa=Math.atan2(-t.x,-t.z)),t.walk&&(t.walkV=[Math.sin(t.wa)*n.ws,Math.cos(t.wa)*n.ws])}_alphaCheck(t){let e=this.L.alpha;if(!e||this.alpha||this.alphaDown||this.player.P<e.summon)return;let n=Ni[e.kind],s=this.L.half-2.5,r=null;for(let[o,c]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let l=o*s*.8,h=c*s*.8;this.obstacles.some(d=>Math.hypot(d.x-l,d.z-h)<d.r+n.r+1)||(!r||Math.hypot(l-this.player.x,h-this.player.z)>Math.hypot(r.x-this.player.x,r.z-this.player.z))&&(r={x:l,z:h})}r||(r={x:s*.8,z:s*.8});let a={id:this.nextId++,kind:e.kind,power:n.power,r:n.r,ai:n.ai,x:r.x,z:r.z,face:0,vx:0,vz:0,speed:0,wa:0,wt:3,walk:!1,stun:0,chase:!1,born:this.time,alpha:!0};this.creatures.push(a),this.alpha=a,t.push({type:"alpha",id:a.id,kind:e.kind,power:a.power,x:a.x,z:a.z})}_respawn(t){for(let n of this.pending)n.t-=t;let e=this.pending.filter(n=>n.t<=0);this.pending=this.pending.filter(n=>n.t>0);for(let n of e)this.creatures.reduce((r,a)=>r+(a.kind===n.kind?1:0),0)<this.target(n.kind)&&(this._spawn(n.kind,!1)||this.pending.push({kind:n.kind,t:1}))}_collide(t){let e=this.player;for(let s=this.creatures.length-1;s>=0;s--){let r=this.creatures[s],a=Math.hypot(r.x-e.x,r.z-e.z),o=e.r*.85+r.r*.75+(e.pounceT>0?.5:0);a>=o||(r.power<e.P?this._eat(s,t):this._hurt(r.x,r.z,.04,t,r.kind)&&(r.stun=2.2,r.chase=!1))}let n=this.boss;if(n&&!n.down&&Math.hypot(n.x-e.x,n.z-e.z)<n.r*.9+e.r*.85)if(e.P>n.power&&n.hitCd<=0)this._bite(t);else if(e.P<=n.power)this._hurt(n.x,n.z,.06,t,"boss");else{let r=e.x-n.x,a=e.z-n.z,o=Math.hypot(r,a)||1;e.x+=r/o*.3,e.z+=a/o*.3}}_gain(t,e){let n=this.player;for(n.P=Math.min(999,n.P+t),n.r=gr(n.P);n.stage<nn.length-1&&n.P>=nn[n.stage+1].at;)n.stage++,e.push({type:"evolve",stage:n.stage,P:n.P})}_eat(t,e){let n=this.creatures[t],s=this.player,r=Ni[n.kind];this.creatures.splice(t,1);let a=r.gain,o=s.P;this.stats.eaten++,s.bite=.3,r.alpha||this.pending.push({kind:n.kind,t:r.respawn}),e.push({type:"eat",id:n.id,kind:n.kind,x:n.x,z:n.z,power:n.power,gain:a,P:o}),this._gain(a,e),r.alpha&&(this.alphaDown=!0,this.alpha=null,this.winT=1.8,e.push({type:"alphaDown",kind:n.kind,x:n.x,z:n.z}))}_bite(t){let e=this.boss,n=this.player;e.hp--,e.hitCd=2.6,e.stagger=2,e.tele=null,e.timer=3,n.bite=.4;let s=e.x-n.x,r=e.z-n.z,a=Math.hypot(s,r)||1;e.x+=s/a*5,e.z+=r/a*5,this._place(e,e.r*.5),t.push({type:"bossBite",hp:e.hp,x:e.x,z:e.z}),this._gain(4,t),e.hp<=0&&(e.down=!0,this.winT=2.4,t.push({type:"bossDown",x:e.x,z:e.z}))}_boss(t,e){let n=this.boss,s=this.player;if(n.hitCd=Math.max(0,n.hitCd-t),n.speedNow=0,n.down)return;if(n.stagger>0){n.stagger-=t;return}let r=s.x-n.x,a=s.z-n.z,o=Math.hypot(r,a)||1e-6,c=this.phase,l=this.easy?1.45:1;if(n.tele){let d=n.tele;if(d.t+=t,d.type==="fire"&&(d.ang=Math.atan2(r,a)),d.type==="fire"&&d.t>d.dur*.7&&(d.locked=!0),d.t>=d.dur){if(d.type==="stomp")e.push({type:"stomp",x:n.x,z:n.z,radius:d.radius}),o<d.radius+s.r*.5&&this._hurt(n.x,n.z,.07,e,"stomp");else{let u=c>=3?5:3;for(let f=0;f<u;f++){let m=d.ang+(f-(u-1)/2)*.3,A=10;this.projectiles.push({id:this.nextId++,x:n.x+Math.sin(m)*n.r,z:n.z+Math.cos(m)*n.r,vx:Math.sin(m)*A,vz:Math.cos(m)*A,life:3.2,r:.7})}e.push({type:"fire",x:n.x,z:n.z,ang:d.ang})}n.tele=null,n.timer=(c===1?3.4:c===2?2.8:2.3)*l}return}n.face=Math.atan2(r,a);let h=(1.7+c*.5)/(this.easy?1.3:1);o>n.r+s.r&&(n.x+=r/o*h*t,n.z+=a/o*h*t,n.speedNow=h,this._place(n,n.r*.5)),n.timer-=t,n.timer<=0&&(c>=2&&(o>9||this.rand()<.4)?(n.tele={type:"fire",t:0,dur:1.2*l,ang:Math.atan2(r,a),x:n.x,z:n.z,locked:!1},e.push({type:"telegraph",kind:"fire"})):(n.tele={type:"stomp",t:0,dur:1.4*l,radius:7+c*1.6,x:n.x,z:n.z},e.push({type:"telegraph",kind:"stomp"})))}_projectiles(t,e){let n=this.player,s=this.L.half+2;for(let r=this.projectiles.length-1;r>=0;r--){let a=this.projectiles[r];if(a.x+=a.vx*t,a.z+=a.vz*t,a.life-=t,a.life<=0||Math.abs(a.x)>s||Math.abs(a.z)>s){this.projectiles.splice(r,1);continue}Math.hypot(a.x-n.x,a.z-n.z)<n.r*.8+a.r&&(this._hurt(a.x-a.vx*.1,a.z-a.vz*.1,.06,e,"fire"),this.projectiles.splice(r,1))}}_finish(t){this.done=!0,this.won=!0;let e=this.player,n=this.L,s=Hg({time:this.time,par:n.par,hits:this.stats.hits,power:e.P,goal:n.goal});this.result={stars:s,time:this.time,power:e.P,eaten:this.stats.eaten,hits:this.stats.hits,level:this.level,stage:e.stage},t.push({type:"complete",...this.result})}};function El(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u);let d=a.ctx.decodeAudioData(h.buffer,u=>{a._smp[o]=u},()=>{});d&&d.catch&&d.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),d=c.createGain();h.buffer=l,d.gain.value=e[a]||.8,h.connect(d),d.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function wl(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),d=c.createGain();h.buffer=l,h.loop=!0,d.gain.value=t,h.connect(d),d.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Tl={chomp:"data:audio/mpeg;base64,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",roar:"data:audio/mpeg;base64,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J9GxvOXr3P/////94+JJmd7H9KamwqRiL/lD03DJfYsAAAQAAADBUAoAQRM0iRNeSJqXvKeZn/zNV/+1V6qq8ybWvMywMAsOJEq8kSOybOeqrtVVryiBQV1B3BosDXap4KjwV6j0r/iL/Ev+Cqw1TEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7IAVjXMKNYeAGkKj5acw8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEr4PJ3KLtnJMAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",stomp:"data:audio/mpeg;base64,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",evolve:"data:audio/mpeg;base64,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",fire:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAB0AABlQABERERkZGSIiIiIqKiozMzMzOzs7RERERExMTFVVVVVdXV1mZmZubm5ud3d3gICAgIiIiJGRkZGZmZmioqKiqqqqs7Ozu7u7u8TExMzMzMzV1dXd3d3d5ubm7u7u7vf39////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkA0AAAAAAAAAZUMhTHi4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAG7BtUdPGAAgcnbn8wYAAAApuAuamDgANADgG4ZEFXmgdCgiAMHwcBAEDmCHKAgCHygIHMP//WDgIfwICH/4Pg+D///8uD4ACkUocobIqIn/+11122AAKUrkv42Ws15N9S1nWEsoU0XUjE7FIFLPCSgoUGCAc8YeYinhIgqwzxZCVMMN7ID2lSFlQcIo066crTZhLN3sgk1nOj8939/n5tsy2ncZr+XnXmMz+//v/+t/v+S3zxj46T/u7GcQINP3ysdd6DZQyGCioBldVY2gqc/nT/+zjEBIAMCNFi3YGAAYAPLOmGGNzhBUmuDRV5trDMJppm9f58NgAoQFDGO4MYIMJimgkdQEQq1abJoYnpR203pGDiHZ5kdNosNNkFFlT/16qwMLQWNLQtzhTjTlCYHRWSdThAS0bJdkIPkEoAGNJVIkAhF4LdPgB6qMzXmT0Z4j6FG88E0Y+EkCMhiitZIv4QjDkD10rvlMslturP/98FMHpiMmceHSqhKVGEi6x4jFllDaSUybrhzVfGOLpMiAsXY5ztDZGy/cPesyfqAOVZ1wkEgm4B6EP/+zjEBYAL7JNrR5hroY8PrAmUmRlDFAwrRGEsOJDijQsDcCKWjZE2H20cTLutY3EMYzZLLbbZwSI4eWhBi6tQT1KgcpOnSgmZQcQhQpHNafHKUwk72jB7L6khJgeFGiYXas5Zax8Mbq0lwqgiHmTe3GlyKleSg6hbfKqEwNkIIUgKCJgFwXwaASCzjSrHFxp8QS2iyOXZcaysQw+kbyCij7egQwlMQBiJ71Pd44c0oX5iQ5lz9OgTa3r+5/zfSz8Ffv99/vT/Jf1ndWs+VQEDKekSJQL6Bjn/+zjEBQAL7G1xTCUEqYecLSWUjLDOBo2Vy9CdQvD2ikKAcYGtpUXOMTpY7uC7ty2QwaNLTgglHPwAHwRSkWOpQDmdj3a0cO0Yr3F/dLQeb5wd61/1f3Nvc4whr93vb/t3+S9+XZKIbu+iwAASXVVgjIMGsVFcIeDlYMqgQFWwWDI8nSESmTQlLtLkXkSCMoAB1ajUFQ4Aq6inACna7CUXpp0ktet/5ebvL6TjrmV1b0l0LEAgqXhE+SY4fYlrV0oP7XJc5V0QsnJOxoYVEV/9vRJJAmB9j6X/+zjEBYAMDON1R5hs4XkNbJmXpOBx1MpfXyMewFyqFewDbJxCAgyZNtN9m07YKipER5ltA4RzFNDTdSzJTRi09e35LCMj65WFllmZEfrmK3oe8MtiEmIxUo4lvLtc9YshSWETA2w4E/uDABBlABAWbUrQEJponI6spZ0JKStvU0FEOafKU/2JXPTSDLScTSJESarEmf7k3Z3NVysml8aeloMxVgdGVFhCG1IylQ0BjllnBE24Qi25cUH5IKbKkqXgc9UroR97b1oAAJJRuaRpIAuVwxTFQtz/+zjEB4AKlH15pjzAoViX7ZmGDLSTVMBhIoEEpqMvcPOUYTUxC7m3hJ/nYmp/pfusKQoZhSGynB58POsIPQoBhUiloyJnF6HpWKjSA1ZDrZIehakvTXd/fS5QAR9UBMEi+ydT6RygoIk14SDgrro96jTLjMTmXhdQ8cOjZQYjqol+2VOiaRpu3C/kqH1SZTqGdiqRG1B84kQLgFIXUcYUsCgwQCNe1YK2H2JoFt+xdaolRuWSSWyNAFpEZOGDY4DCsFGgLAU2THhEesj5Mn7Npt3At3Ja2NX/+zjEE4AKoL2NpJhu8VQTcCjzDP5hz5xzPbi4d1I2JCU3pRCLklI1IlcxCgYqLhAVWksVQVj4ROiovBCtylGld3/oBat9txIkhgMgozlip9XrUgQMaBhIEJLA8ZbhNIZesb9LOsv4gdWbU56Ej1cy4ZSixPZskfQWSezbAQWeWdPJNTxqpsLkHK070On0LxO7FkEXLpXZ6wACW5ZNbI3AinIkgmCINkyOJLRgebR8sPqKK0UDefhVZs9UqvaKxuXT9NzBVwlC7HgMBsUSGEi6XuOPBsugm6f/+zjEIAAK2Gd5p6TDIVuMLIWWGNAioeMtEXRahiIvO73IhRUn6C8uP9K3qYIwplCSiE4zUy32EQStQ6E8BCARRFFpA1YIhzROg91TH6fdJqPt3lWxtpQaFjhsDiULMEJ4YYNhsyAFKJi66yyVCdb1UxyVkFnFqWDAy307WO/MUq+TXQDIMEXMrPSQHTgqR11/O6kK5QSUE09UmsBpR5YkYdf/lLM0VDKlAhJztxJVz75Tcuj2IWXQt6VlVNCCyKyArLrfAYWZGUvlDFrq6Z9wG9Hle3rckAL/+zjEKoAKcIVkrLBpAVeMrrT2GCwhtWOJEhABwh0A2AmfEFoQmjjnB+EYxwGaE0cSEmMWRJEQyc6bYSkiZREU3UcBnFmGCKZSJTjGOKqetpN54jQLGBzOdCYfa5qe/r3MUYA4YUJaP2UKACaOjzlsrcHBqOpaiQQeSSa3J+1o4WRqDIfOhiJdMXI/eZWG7ZwH08u9yY7FJvypHDhyHuc0wdNk800T80g6rHAkQubNiKOvEbiLCjK3F7vF3WVd5ADgAEKKqwEFASEx0AKUxYKGhLrHFwiBqZn/+zjENwAKzOF9phhl4VeKrSWGGNiSsOx6PBVLK5dkD0CLcjOW7X4lEGRY6uei5Y40vSMEosfF1ODrWpQy1OLrABYUTulsiifCa7mu2P/uHDwz5ipvqYeZOlCMw4aTOO1HJaw59o0eOUDA4ME0gt8MVZtDdl9uimHABLByY5qR2igmKNbEQ8CnzIeFFlHhFCBwdNh+xrxC6YJpNuTbFrWmKe2TyPeqzTU5QA10l122bcYYz+JIlmFkT57IgpJiC5LlAmrORMIVSVomLGnzzJ5EHbUtI48fxyv/+zjEQgAKrHVoTBhqgVcTr3TzDOyaL00SCHIYhaIs3uS3uLuRbPISxYVeI7ksUHS0y4s9tKN6xevZhcdVASp0cuurbbA7T3Q40GiIvMWFNHhwaZZSVQ4hqARDQxnRk98MVcWeIjKw8LIBpAceOaDgGUaewkVoYL1A92lxi6BJQSKsPBUBAVhJqN2VQyS1PlvrFgcHgACN17OxtIg9wc48R0rbOSMArkkMwax8kSVIIvXNIIJa7QwA2gxUO7kzuO6nuaFubdLpdM/l8IZUNGCp4kYEhQUahgf/+zjETYAK5FF5p6RjYVsULnTzDLzeVNwRQ15BdMQdymJ27Dogkr/WAUkbk1msbaBdJRiFihOJNlp4p0KZgEjNGV1wcVDiITQxypkDIltSkUZhYYdyOtlwuF4o/J9MzJh4qXNgGHdu4VemiqxoTBS0oTeocy9ow7isw6dZ+lYAgEkREggLmC84BQXYC0RRRdQiYJTQbYZmqu2vsW4ug7QyWHT66w7sUhBtVECxJ0WOea0kJgEooFFJFQqYNJEqUVNeMkVUkfF++wrndyvo6dUAFik420kEnhT/+zjEWAAKvKl3p5hqIUQPLGmEjOhpgIRPEhELjsirgKwCEmFExdoo50UhVMyujqE61N9Bbbfby+RRp4Qhq2ICo9aCDwgONlnmQ7MMaAYlGuFCxMk5KEO4zaSikx+7T9fQAJrI7LdJW0BPFIvPhF5AryMiPgXhJiTHZzy1pIsnWThF0D2ZsquaX9iDAEAwwNBRg2lVwPhRSUtcTPtJHbkCFKwcCZCZGrdj0qFhddifFoo3E2m6+p4AKQKoiseoAF42YvOzh1IRQbRkOEPZ5EbUxpTbpL8ip/T/+zjEZgAKnG1hTDDCgVgM7bTGGCQlFQJFIyB6xScGZFXpFHaf5VV1IwyDrWJRSp8c4XeLOMJe6W07nTaiZSnsl3KuvT0WBGRADCUl1m0jTAOh8UABl54FQ+OmSQLPgJSDqQ2yC7KNPjCRi5QYkxf+SJCMoogUjlqx9uU4S5sCBWcvvZfCLUKKCK4JjWuUDcy0DVvcdW0szdV0P5Hm11ncKsoAAAm3rhsJUeDftxBAYrCUwRRGR2XI31BzV97nYFUbmJ8GAVcVXQyAtC1mtDXKlQXKZ/3q50n/+zjEcgAKiJtWzCRngWUWrPTDDPSPKMwMAgM4UUbeVFh8kBiRLUbXOB6egV21cAG6pF57KjkiY0k973AdKWIMjyIgv0gGQC5r1SjFKwd1iVVxuqROLWGliPX9BjO2FN2EVV51DZSmCM8FSYw2lGF3gYWgkOYHVKHIWanUySTAEc88LUlt6n2P/oxzShPiMHCbhzBUpQAQ41dnbLIwToSYW5xQlyfM0fK8r3FB8CSyVjgOCrXGowV3scKG5kVI5ZS5KOFQwdKHqytDUEDTWoX3bd2bl7ztPdP/+zjEfIMLuKdTLDBnQV+NacmWDOij2h6OxQD8iLlry09Mk6J549gMzsqHZYNlP01nP2BexswwXnnvraZ2Zr8zN8vS8S5l3nsOS4dmiuz5NJyl9rJ5U6cKz0ySsOWJTFmATV9VDioIjE9QVgpbZcUfF5iTlQRZLIDZdGzEipuRkJI3F0EZrEYGgycmMaFR4wyeBcSgkgEwSaJBQze1TA8FRILEkih9MKkwRedzm3DKRZq2VvXEpFGtetT/EqoAQBv6ZQwsgUReA0iKSxmZMuByKxo4OWsGMT3/+zjEgwAR0X9hp42N6W6OadmEjOBXUxgVqlLow0Ur7LSmXpnbYLN7x/uNRkyW4gsjLCYLFFhIqaFRiT4u2h6HOXIuWtkddIQwsxSduZl/i/fe2oBFq5SPSyNIKDgpq9mHiQVBUPGxG9kVisqJnEHRCFgggZ4CAc3nYg5iRSvgSK2V7YUM6qXEdjHDpelqb/N5KfCLc78t75mDqXjw+5IiXrXvFIWQKo3bIikGfU1ddQEC7tbJrI2wlCQExIA4fNPF2h1cSnk4inBNLLzLR5ihAspF7QtloQf/+zjEbwALKH9LLODAgXCcqvWEjGy0y6dD0/E7xpSewYT4i+LnuDevK2OEhV6i1u4WG5T7xvZ+DvdWyrpuoXb/d7sNLs/h5Yq7v/5vLXfKACE3bLNbY0FpgEpGZMwkSeiwKCkQ+sSgVVQxxhVZ3uYGMQmhmnRTEQWER04dJbIvnYGKColFwmdCIwkSEKxQPEX0HHKeg+XLD1S5Aq5xyKtdczapjeFLk+7FUAGWi7LrZI2wTEW0nkWZVOTesSdZE3iEqs2gqDH2EFScq/4xgcuMaklAgZg7sbr/+zjEdYAMPIFXphhwaWwRqvTDDLSZTHUqmZ2psmq7OpbMpLUcw7l2apLtRnm0zLvqTaa9aqt6LrVlZc1jUt1/jtX4ScysUCuqSTSONoHWFKGOnBZwcwAk4CdAMtaillqyGhKcRTVR51NVN7NSw12TIysawswVGjBCGREbLR5cuOUt15OwRrOZcZb60AMM9UJSwdc08wMu9oQ0ucgAwpG19QGINoxHAfgPmRNYS0oWiQanRdKZ455OMVV6auyFbhsScEjuy2YyDGrTBOYz1AZ4fh7aTf83Bt3/+zjEeIAL2WFTp6RH4VkMafT0mEwv36eV7C55PUna1y7bDhGpkvKX9/pHjoYyhgtpWtwVZnYQP6hi5g9PJABtnltzjjKCEizBrjeCQlYIWRJqFyYMEcXSn9oLTMmBN3oh3qGs5WdJEShR7kAd0ew4TGgQ25zyqAzCvPCYYmDxpr4DS5naOdeAHIZbZ83p/PT1AIgAALwKgBUmEgW8w8pHS5LrCIOk2SDVoR4vEuzYZqZS8v+Ha7avwp985S3JhE4ZaEmgE4pZmFLXLHi2xTVRdSKi163YHaf/+zjEf4AMmR07LDBnQUuLqTT0mGSegUc3JPe/1KDM8WX73oACEatZQf5lptMKlfdtA0Asfl6AwrCpYYQuWM76sJDOwDVpWIZqczfJvMLq3Q50w5MKng5Eoqgs8CqlnCk2OQwYeFgbkzPYdDh3QssiyecZKBKmSWR7fOoFOyWWyRtkgEgRi22G6pETU4NWC66XBLLRVMzdccAMJayFnZcm49ygSmLM2Bq2gxVXIeWOVv3vkWuyM2CNDassOizSFiYbHgxMkoBrMEseYS+d0uY/95RKKgCmqgD/+zjEhQAKsGU3jDzDAVyO5qWGDKhnuH0II4AqPATD4GZci6ZwEDBFLS74MxyzV8RQeVyYU8wyO3CIUg/cjjD7FkEPZkNFXBg6naJnBlwUOBFJwP0CrBg1bKUGpgA7YDv+5x7fJSxSB6Z2ugABaShSIAHbxpt4REOEAVn6eUFgM8WSlIjRZqKtn+M8VjRmOhSIa99UguFy9GhIYKi4aTBk48gKlQIWETDoWHhwqCqFlyhk1GLcutqMWMo0P/WyzyVIAAYGohXGwQh5hLDV6QMKNWNMk8Jcukr/+zjEkAALIMtRphhusWYTpZmUjOibqtykfUdldA3CEkhnrcyK3NDHriRxjodAI9oliwwnPJW4q8UrFSvyqFPabxgpTFRS9vbETV6G121QAGmYgBiOSH8n4RE07XJ0XU8GRHfNJ2w4MUr4NeUKSFnCkTjAjig7Vspd5Lx8GkgoUFAiEnG1lNMKo2uklJ077hdu///Rx7wGBkFxAKOIyGPK4UQgd1YZhmmCujYMjWdIbynlSYzqHwVSKMMVEaHK5kVWmbS7kXEL8YZLgiEF7Uaj2q+YYdEJvM3/+zjEmAIKnH0tTJhnAUAP5MmTDOBxRAzoR6PXdWsqlcDAsQM6yAqsMaDlW23jz8TB2ndS/5PM240zzVqq3M2UpVUi1vGmpM3qaZEDhrcccPQbZLU2Z1I66h7NjHV1xn93lshp0Ee6XphDEwFuKwRYUhsAMTeYL0uG30vXaK6kEyqMbKlj3Ii0OdzN2tIN3hlRUkRnnDAMLlSorIHgwo/S4jAZzdiyWaexq6qU8U9v1gkkW4AVyTJqwSj0ZiZXetd+r+urk5roR2ea8yZvdWdl7azbjrStKZ7/+zjEpwMJBKMkTDBjAS+XZAWRiXi/X+uNlGurXpHKx3krner6lgANBnuFmAb6CKDqeD7wcuggaOPuiJ5RycGkxjU7FSST6CRp4v4R6h6q1wVTbKxY8bOFlqDeBRVn3bkZMGfn95RWsP70+GvTP+VzTc7rCd/Nldcw//+uVGIt1Jxl2DmLzncexfcAjTA4ZC6jG1fk6qs27lPq3V76SW8jM4+J/MOygxBSONoVUTCha2HEXDDftO8wi4r2kx4GzzHcpOIDKOhy9JF5R0QRHdTGroMI5Q/HOar/+zjEvoMI3K8iTDBkwSwQowGTDPjpoR5ZR0KrQ+dYRZGaZJkc7yEFsa0jJiANgKK9zkw3qzJXep7UJh+rlLbE5HxpyuxRA7KRFUNHKzkMPojVqdmsFOtkZBU9nyu9lu0grnnj9DLF22oz4vpzNXu29o5Kcd5nmuY7uShr3Mus+H235tGZfEovn9Ymw75raeBLRcxqb9S8mopk4Uqlo19lEPu655AGg7GFsc1RodahU7u190tEQseYJgM9OqV4rlRqR5rY4S9mgpyWGnCli1xalqM9N/KhWm7/+zjE1wMHHKMibAxCwZApIkmDDPlRMSUKUueM1zpihXtmJnFMR9c/FUmtpU8z82wP4tcWtnXxa/+v6Y/+9QH9n64ippPyNKglWcbrnUKFuDWkK3+/9/H/v//1fAVTJHizx3Ng6y5meGkimIoKSgQtBoKASOUcSSYkSSeUQ0JQVEQdlj0FSoKqBqDTwVrdwafwVcp4i/xF//1PET9Z2WiJ+s7/neIqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6gMMnP8OLCDvgXghokqwUAGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6gAU3XUYGYeACN6EGouMMACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",win:"data:audio/mpeg;base64,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"};var Gg="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Pe=null,Ro=!1;function ql(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Rl(){ql(),Ro=!0;try{if(Pe||(Pe=document.createElement("audio"),Pe.src=Gg,Pe.loop=!0,Pe.preload="auto",Pe.setAttribute("playsinline",""),Pe.setAttribute("webkit-playsinline",""),Pe.setAttribute("x-webkit-airplay","deny"),Pe.volume=.01,Pe.addEventListener("pause",()=>{Ro&&!document.hidden&&setTimeout(()=>Ro&&Pe.paused&&Pe.play().catch(()=>{}),300)})),Pe.paused){let i=Pe.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Pl(i,t){ql();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var xn=i=>440*Math.pow(2,(i-69)/12),Ar=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Rl(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Pl(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=s,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.value=e;let h=c.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05)}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,c){let l=this.ctx;if(!l)return;let h=l.createBufferSource();h.buffer=this.noiseBuf;let d=l.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,t),c&&d.frequency.exponentialRampToValueAtTime(c,t+e),d.Q.value=a;let u=l.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),u.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(u).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx;if(!c)return;let l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let c=this.bed;c.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{c.s.stop(),c.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,c,l]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",xn(c),a,l*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var Wg={jungle:{tempo:112,beats:16,wave:"triangle",vol:.07,notes:[[0,62,1],[1,65,1],[2,69,1],[3,65,1],[4,60,1],[5,64,1],[6,67,1],[7,64,1],[8,62,1],[9,65,1],[10,69,1],[11,72,1],[12,71,2],[14,67,2],[0,38,2],[4,36,2],[8,38,2],[12,43,2]]},swamp:{tempo:84,beats:16,wave:"sine",vol:.11,notes:[[0,57,2],[2,60,1],[3,63,1],[4,57,2],[6,56,2],[8,55,2],[10,58,1],[11,62,1],[12,60,3],[0,33,4],[8,31,4]]},volcano:{tempo:128,beats:16,wave:"sawtooth",vol:.045,notes:[[0,45,1],[1,45,1],[2,48,1],[3,45,1],[4,51,1],[5,50,1],[6,48,1],[7,45,1],[8,45,1],[9,45,1],[10,52,1],[11,50,1],[12,48,1],[13,46,1],[14,45,2],[0,33,2],[4,33,2],[8,31,2],[12,28,2]]}},zi=class extends Ar{setMode(t){if(this.level=t,clearInterval(this._amb),t==null){this.setBed(null),this.setTune(null);return}let e=["jungle","swamp","volcano"][t];this.setBed(e==="volcano"?"wind":e==="swamp"?"waves":"wind"),this.setTune(Wg[e]),this._amb=setInterval(()=>this._ambience(e),650)}_ambience(t){let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime,s=Math.random();if(t==="jungle"){if(s<.45){let r=1800+Math.random()*1400;this.slide("sine",r,r*1.4,n,.09,.035),this.slide("sine",r*1.3,r,n+.12,.09,.03)}else if(s<.7)for(let r=0;r<6;r++)this.tone("square",3200,n+r*.035,.02,.012)}else if(t==="swamp")if(s<.55){let r=200+Math.random()*300;this.slide("sine",r,r*2.2,n,.12,.05)}else s<.75&&(this.slide("square",140,90,n,.18,.025),this.slide("square",150,80,n+.2,.15,.02));else s<.5&&(this.noise(n,.9,.12,"lowpass",160,1,this.sfx,60),s<.15&&this.noise(n+.3,.05,.05,"highpass",3e3))}play(t,e=1){let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let s=n.currentTime;switch(t){case"stomp":{let r=Math.min(1,e);this.slide("sine",120-r*60,40,s,.12+r*.12,.08+r*.2),this.noise(s,.08+r*.1,.03+r*.08,"lowpass",300-r*150);break}case"chomp":this.noise(s,.09,.14,"bandpass",1200,2),this.slide("square",400,120,s,.1,.07),this.tone("triangle",xn(84),s+.08,.1,.07);break;case"pounce":this.noise(s,.28,.12,"bandpass",700,1,this.sfx,2200),this.slide("triangle",200,520,s,.2,.08);break;case"bump":this.noise(s,.25,.2,"lowpass",900,1,this.sfx,200),this.slide("sawtooth",220,70,s,.25,.1);break;case"evolve":[0,4,7,12,16,19,24].forEach((r,a)=>this.tone("triangle",xn(60+r),s+a*.09,.5,.15)),this.slide("sawtooth",90,45,s,.5,.12),this.noise(s+.6,.4,.1,"highpass",4e3);break;case"roar":this.slide("sawtooth",140,55,s,.9,.2),this.slide("square",100,40,s,.9,.1),this.noise(s,.9,.16,"bandpass",500,1.5,this.sfx,150);break;case"growl":this.slide("sawtooth",110,70,s,.35,.09),this.noise(s,.3,.06,"bandpass",400,2);break;case"alert":this.tone("square",520,s,.08,.06),this.tone("square",410,s+.1,.1,.06);break;case"telegraph":this.slide("triangle",200,420,s,.5,.09);break;case"fire":this.noise(s,.5,.18,"bandpass",900,1,this.sfx,300),this.slide("sawtooth",300,100,s,.4,.08);break;case"bossHit":this.noise(s,.4,.2,"lowpass",1400),[0,5,9].forEach((r,a)=>this.tone("square",xn(72+r),s+a*.06,.2,.09));break;case"win":[0,4,7,12,16,19,24,28].forEach((r,a)=>this.tone("triangle",xn(66+r),s+a*.11,.6,.14));break;case"star":this.tone("triangle",xn(84),s,.3,.12),this.tone("sine",xn(96),s+.04,.3,.08);break;case"lose":[0,-3,-7].forEach((r,a)=>this.tone("triangle",xn(64+r),s+a*.18,.4,.1));break;case"tap":this.tone("sine",700,s,.06,.08);break;default:break}}};El(zi,Tl);wl(zi);function Q(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function Ll(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function Ul(i,t,e,n="#ffd23a"){return`
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
`}var Po={ar:{go:["\u064A\u0627\u0644\u0627 \u0627\u0646\u0637\u0644\u0642!","\u0627\u0646\u0637\u0644\u0642 \u064A\u0627 \u0628\u0637\u0644!"],nitro:["\u0646\u064A\u062A\u0631\u0648\u0648\u0648! \u0637\u064A\u0631 \u064A\u0627 \u0648\u062D\u0634!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0631\u0639\u0629!","\u0646\u064A\u062A\u0631\u0648! \u0627\u0645\u0633\u0643 \u0627\u0644\u0637\u0631\u064A\u0642!"],overtake:["\u0639\u062F\u0651\u064A\u062A\u0647! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643!","\u062A\u062C\u0627\u0648\u0632 \u0631\u0627\u0626\u0639 \u064A\u0627 \u0628\u0637\u0644!","\u0627\u064A\u0648\u0647 \u0643\u062F\u0647! \u0633\u0628\u0642\u062A\u0647!"],overtaken:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643\u060C \u0647\u062A\u0639\u062F\u064A\u0647!","\u062E\u0644\u064A\u0643 \u0648\u0631\u0627\u0647\u060C \u0641\u0631\u0635\u062A\u0643 \u062C\u0627\u064A\u0629!"],near:["\u064A\u0627\u0627\u0627\u0647! \u0643\u0627\u0646\u062A \u0642\u0631\u064A\u0628\u0629!","\u0639\u062F\u0651\u062A \u0639\u0644\u0649 \u062E\u064A\u0631! \u0642\u0644\u0628\u0643 \u062C\u0627\u0645\u062F!","\u0627\u0648\u0648\u0647! \u0642\u0631\u064A\u0628\u0629 \u0642\u0648\u064A!"],bump:["\u0627\u0648\u0628\u0633! \u062E\u0628\u0637\u0629 \u0635\u063A\u064A\u0631\u0629\u060C \u0643\u0645\u0651\u0644!","\u0648\u0644\u0627 \u064A\u0647\u0645\u0643 \u064A\u0627 \u0628\u0637\u0644\u060C \u0643\u0645\u0651\u0644!"],charge:["\u0646\u064A\u062A\u0631\u0648 \u062C\u062F\u064A\u062F \u062C\u0627\u0647\u0632!","\u0639\u0646\u062F\u0643 \u0646\u064A\u062A\u0631\u0648!"],pickup:["\u0623\u064A\u0648\u0647! \u0639\u0645\u0644\u0629!","\u062C\u0645\u0639\u062A \u0639\u0645\u0644\u0629! \u0628\u0631\u0627\u0641\u0648!"],trick:["\u062D\u0631\u0643\u0629 \u0628\u0647\u0644\u0648\u0627\u0646\u064A\u0629! \u0648\u0627\u0648!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u062D\u0631\u0643\u0629!"],draft:["\u0631\u0627\u0643\u0628 \u0648\u0631\u0627\u0647! \u0627\u0644\u0647\u0648\u0627 \u0628\u064A\u0632\u0642\u0651\u0643!","\u0633\u0644\u064A\u0628 \u0633\u062A\u0631\u064A\u0645! \u0633\u0631\u0639\u0629 \u0632\u064A\u0627\u062F\u0629!"],lap:["\u0644\u0641\u0651\u0629 \u062C\u062F\u064A\u062F\u0629! \u0643\u0645\u0651\u0644 \u064A\u0627 \u0628\u0637\u0644!","\u0622\u062E\u0631 \u0644\u0641\u0651\u0629! \u0627\u062F\u064A\u0647\u0627 \u0643\u0644 \u0627\u0644\u0644\u064A \u0639\u0646\u062F\u0643!"],win:["\u0643\u0633\u0628\u062A \u064A\u0627 \u0628\u0637\u0644! \u0627\u0646\u062A \u0627\u0644\u0623\u0648\u0644!","\u0645\u0628\u0631\u0648\u0648\u0648\u0643! \u0628\u0637\u0644 \u0627\u0644\u0633\u0628\u0627\u0642!"],lose:["\u0644\u0639\u0628\u062A \u062D\u0644\u0648 \u0642\u0648\u064A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u0648\u0647\u062A\u0643\u0633\u0628!","\u0643\u0646\u062A \u0642\u0631\u064A\u0628! \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u0643!"],count:["\u0627\u0633\u062A\u0639\u062F!"]},en:{go:["Let's go!","Go, champion, go!"],nitro:["Nitrooo! Fly, superstar!","Wow, so fast!","Nitro boost! Hold on tight!"],overtake:["You passed him! Bravo!","Great overtake, champion!","Yes! You are ahead!"],overtaken:["Don't worry, you'll pass him!","Stay close, your chance is coming!"],near:["Whoa! That was close!","Phew! Great driving!","Ooh! So close!"],bump:["Oops! Small bump, keep going!","No worries, champion, keep going!"],charge:["New nitro ready!","You have a nitro!"],pickup:["Yes! A coin!","You got a coin! Bravo!"],trick:["Amazing trick! Wow!","What a move!"],draft:["Right behind him! The wind pushes you!","Slipstream! Extra speed!"],lap:["New lap! Keep going, champion!","Last lap! Give it everything!"],win:["You won, champion! First place!","Hooray! Racing star!"],lose:["Great racing! Try again and win!","So close! Next one is yours!"],count:["Get ready!"]}},Xg=[[/يا بطل/g,"\u064A\u0627 \u0628\u0637\u0644\u0629"]],xr=class{constructor(t={}){var e,n;this.base=t.base||"./",this.lang=t.lang==="en"?"en":"ar",this.girl=!!t.girl,this.clips=t.clips||{},this.cooldown=(e=t.cooldown)!=null?e:3,this.gap=(n=t.gap)!=null?n:1.4,this.muted=!1,this.unlocked=!1,this.lastSay=-1/0,this.lastEvent={},this.pick={},this.audio=null,this.failed=new Set}setMuted(t){let e=!!t;e!==this.muted&&(this.muted=e,this.muted&&this._stop())}unlock(){this.unlocked=!0;try{let t=window.speechSynthesis;t&&t.getVoices().length===0&&t.getVoices()}catch{}}_stop(){if(this.audio){try{this.audio.pause()}catch{}this.audio=null}try{window.speechSynthesis&&window.speechSynthesis.cancel()}catch{}}_phrase(t){let e=Po[this.lang]&&Po[this.lang][t]||Po.ar[t]||[];if(!e.length)return null;let n=((this.pick[t]=(this.pick[t]||0)+1)-1)%e.length,s=e[n];if(this.girl&&this.lang==="ar")for(let[r,a]of Xg)s=s.replace(r,a);return{text:s,n:n+1}}say(t,e=performance.now()/1e3){var a;if(this.muted||!this.unlocked||e-this.lastSay<this.gap||e-((a=this.lastEvent[t])!=null?a:-1/0)<this.cooldown)return!1;let n=this._phrase(t);if(!n)return!1;this.lastSay=e,this.lastEvent[t]=e;let s=this.clips[t]||0,r=`${t}_${n.n}`;if(s>=n.n&&!this.failed.has(r)){let o=new Audio(`${this.base}voice/${this.lang}/${r}.mp3`);o.volume=.95,o.onerror=()=>{this.failed.add(r),this._speak(n.text)};let c=o.play();return c&&c.catch&&c.catch(()=>{this.failed.add(r),this._speak(n.text)}),this.audio=o,!0}return this._speak(n.text)}_speak(t){try{let e=window.speechSynthesis;if(!e)return!1;let n=new SpeechSynthesisUtterance(t);n.lang=this.lang==="ar"?"ar-EG":"en-US",n.rate=1.05,n.pitch=1.15;let r=e.getVoices().find(a=>a.lang&&a.lang.toLowerCase().startsWith(this.lang));return r&&(n.voice=r),e.cancel(),e.speak(n),!0}catch{return!1}}dispose(){this._stop()}};var Yg={pickup:3,charge:2,bump:2,near:1,trick:3,win:2,count:1},Kg={title:["\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0635\u063A\u064A\u0631 \u064A\u0643\u0628\u0631","DINO GROW"],play:["\u0627\u0644\u0639\u0628","PLAY"],levels:["\u0627\u0644\u0645\u0631\u0627\u062D\u0644","LEVELS"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0625\u0639\u0627\u062F\u0629","RESTART"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],select:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0631\u062D\u0644\u0629","SELECT LEVEL"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the level before"],how:["\u0627\u0633\u062D\u0628 \u0628\u0625\u0635\u0628\u0639\u0643 \u0639\u0634\u0627\u0646 \u062A\u062A\u062D\u0631\u0643\u060C \u0648\u0632\u0631\u0627\u0631 \u0627\u0644\u0627\u0646\u0642\u0636\u0627\u0636 \u0639\u0634\u0627\u0646 \u062A\u0645\u0633\u0643 \u0627\u0644\u0647\u0631\u0628\u0627\u0646","Drag to move, and tap POUNCE to catch fast prey"],complete:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u062E\u0644\u0635\u062A! \u{1F3C6}","LEVEL COMPLETE! \u{1F3C6}"],time:["\u0627\u0644\u0648\u0642\u062A","Time"],power:["\u0627\u0644\u0642\u0648\u0629","Power"],eaten:["\u0627\u0644\u0644\u064A \u0623\u0643\u0644\u062A\u0647","Eaten"],bumps:["\u062E\u0628\u0637\u0627\u062A","Bumps"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","NEXT LEVEL"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","PLAY AGAIN"],all:["\u062E\u0644\u0651\u0635\u062A \u0643\u0644 \u0627\u0644\u0645\u0631\u0627\u062D\u0644! \u0623\u0646\u062A \u0623\u0642\u0648\u0649 \u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u{1F996}","You beat every level! Strongest dino! \u{1F996}"],pounce:["\u0627\u0646\u0642\u0636\u0651","POUNCE"],boss:["\u0627\u0644\u0632\u0639\u064A\u0645","BOSS"],goal:["\u0627\u0644\u0647\u062F\u0641","Goal"],next_stage:["\u0627\u0644\u062A\u0637\u0648\u0631 \u0627\u0644\u062C\u0627\u064A","Next"],max:["\u0623\u0642\u0648\u0649 \u0634\u0643\u0644!","Max form!"],h_eat:["\u0643\u064F\u0644 \u0627\u0644\u0623\u062E\u0636\u0631 \u0648\u0627\u0644\u0623\u0628\u064A\u0636 \u0639\u0634\u0627\u0646 \u062A\u0643\u0628\u0631!","Eat GREEN and WHITE to grow!"],h_red:["\u0627\u0644\u0623\u062D\u0645\u0631 \u0623\u0643\u0628\u0631 \u0645\u0646\u0643 - \u0627\u062C\u0631\u064A!","RED IS BIGGER - RUN!"],h_pounce:["\u0627\u0636\u063A\u0637 \u0627\u0646\u0642\u0636\u0651 \u0639\u0634\u0627\u0646 \u062A\u0645\u0633\u0643 \u0627\u0644\u0647\u0631\u0628\u0627\u0646!","Tap POUNCE to catch fast prey!"],h_evolve:["\u062A\u0637\u0648\u0651\u0631\u062A! \u0628\u0642\u064A\u062A","You evolved! Now a"],h_bossNeed:["\u0627\u0644\u0632\u0639\u064A\u0645 \u0642\u0648\u062A\u0647 \u0661\u0660\u0660 - \u0643\u0628\u0651\u0631 \u0627\u0644\u0623\u0648\u0644!","The boss has 100 power - grow first!"],h_bossReady:["\u0628\u0642\u064A\u062A \u0623\u0642\u0648\u0649 \u0645\u0646\u0647 - \u0639\u0636\u0651\u0647!","Stronger now - BITE the boss!"],h_stomp:["\u0627\u0637\u0644\u0639 \u0628\u0631\u0647 \u0627\u0644\u062F\u0627\u064A\u0631\u0629 \u0627\u0644\u062D\u0645\u0631\u0627!","Get out of the red circle!"],h_fire:["\u0627\u062A\u0641\u0627\u062F\u0649 \u0643\u0648\u0631 \u0627\u0644\u0646\u0627\u0631!","Dodge the fireballs!"],h_bump:["\u0622\u0647! \u062F\u0647 \u0623\u0642\u0648\u0649 \u0645\u0646\u0643","Ouch! Too strong for you!"],h_goal:["\u0643\u0628\u0651\u0631 \u0644\u062D\u062F \u0645\u0627 \u062A\u0648\u0635\u0644 \u0644\u0644\u0647\u062F\u0641","Grow until you reach the goal"],h_bossHit:["\u0628\u0631\u0627\u0641\u0648! \u0643\u0645\u0627\u0646 \u0645\u0631\u0629!","Great! Again!"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],beat:["\u0627\u0647\u0632\u0645 \u0627\u0644\u0632\u0639\u064A\u0645","BEAT THE ALPHA"],beatBoss:["\u0627\u0647\u0632\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u0642","BEAT THE GIANT"],evolved:["\u062A\u0637\u0648\u0651\u0631\u062A!","EVOLVED!"],defeated:["\u0647\u0632\u0645\u062A\u0647!","DEFEATED!"],dragMove:["\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u062A\u062D\u0631\u0643","DRAG TO MOVE"],h_alpha:["\u0627\u0644\u0632\u0639\u064A\u0645 \u0638\u0647\u0631! \u0643\u0628\u0651\u0631 \u0639\u0634\u0627\u0646 \u062A\u0647\u0632\u0645\u0647","THE ALPHA IS HERE! Grow to beat it"],h_alphaWeak:["\u0628\u0642\u064A\u062A \u0623\u0642\u0648\u0649 \u0645\u0646\u0647 - \u0627\u0645\u0633\u0643\u0647!","You are stronger - catch it!"]},ft=Ll(Kg),Nl={jungle:{sky:10479871,fog:12579071,ground:5025340,patch:3971632,sun:16773832,hemi:[16777215,6986328]},swamp:{sky:11850912,fog:10271888,ground:3960392,patch:3037754,sun:15265984,hemi:[15794144,4876880]},volcano:{sky:6958634,fog:8010288,ground:4074542,patch:2891296,sun:16756848,hemi:[16765096,5910576]}},Lo={beetle:1.7,egg:1.5,frog:1.5,biped:.95,quad:.8},nt={sphere:new or(.5,12,9),cyl:new is(.5,.5,1,10),box:new Qn(1,1,1),cone:new rr(.5,1,8)},Bi=new Map,Yt=(i,t=0)=>{let e=`${i}|${t}`;return Bi.has(e)||Bi.set(e,new ss({color:i,emissive:t})),Bi.get(e)},os=(i,t=1)=>{let e=`b${i}|${t}`;return Bi.has(e)||Bi.set(e,new Ke({color:i,transparent:t<1,opacity:t,depthWrite:t>=1})),Bi.get(e)};function St(i,t,e,n,s,r=1,a=1,o=1){let c=new pe(i,t);return c.position.set(e,n,s),c.scale.set(r,a,o),c}var Fi=(i,t)=>{let e=new Vt(i);return e.multiplyScalar(t),e.getHex()};function Fo(i,t,e,n,s){let r=t.eyeS||1;for(let a of[-1,1])i.add(St(nt.sphere,Yt(16777215,3355443),a*s,e,n,.34*r,.4*r,.3*r)),i.add(St(nt.sphere,Yt(t.eye||1118481,t.eyeGlow||0),a*s,e-.01,n+.1*r,.17*r,.22*r,.14*r))}function zl(i,t,e,n,s,r){for(let a=0;a<s;a++){let o=St(nt.cone,Yt(16777215),-n/2+n/(s-1)*a,t,e,r,r*1.3,r);o.rotation.x=Math.PI,i.add(o)}}function Bl(i,t,e,n,s,r){let a=[],o=i,c=.8,l=n,h=e;for(let d=0;d<r;d++){let u=new Ht;u.position.set(0,d?0:h,d?-s:l),o.add(u),u.add(St(nt.sphere,Yt(d%2&&t.b2||t.c),0,0,-s*.45,c,c*.8,s*1.3)),a.push(u),o=u,c*=.68}if(t.club){let d=new Ht;d.position.set(0,0,-s),o.add(d),d.add(St(nt.sphere,Yt(t.s||9079434),0,0,-.3,.8,.7,.8));for(let u of[-1,1])d.add(St(nt.cone,Yt(14540253),u*.4,0,-.3,.2,.4,.2).rotateZ(-u*Math.PI/2))}return a}function Zg(i){let t=new Ht,e=new Ht;t.add(e);let n=Yt(i.c),s=Yt(i.b||i.c);e.add(St(nt.sphere,n,0,1.2,0,1.1,1,1.6)),e.add(St(nt.sphere,s,0,1.05,.18,.9,.7,1.3));let r=new Ht;r.position.set(0,1.78,.82),r.scale.setScalar(i.big||1),e.add(r),r.add(St(nt.sphere,n,0,0,0,.95,.85,1)),r.add(St(nt.sphere,n,0,-.1,.5,.65,.5,.75)),r.add(St(nt.sphere,Yt(Fi(i.c,.7)),0,.05,.85,.12,.08,.08));let a=new Ht;if(a.position.set(0,-.2,.2),r.add(a),a.add(St(nt.sphere,s,0,-.03,.32,.55,.2,.72)),i.teeth&&zl(a,.08,.5,.4,4,.1),Fo(r,i,.2,.3,.3),i.crest)for(let l=0;l<4;l++)r.add(St(nt.cone,Yt(i.s||16765498),0,.5-l*.08,-.15-l*.18,.18,.5-l*.07,.18));if(i.horns)for(let l of[-1,1]){let h=St(nt.cone,Yt(16051408),l*.35,.5,.05,.22,.7,.22);h.rotation.z=-l*.35,r.add(h)}if(i.sail)for(let l=0;l<6;l++)e.add(St(nt.box,Yt(i.s||16751162),0,1.75+Math.sin(l*.5)*.4,.5-l*.32,.12,.8+Math.sin(l*.5)*.5,.3));if(i.spikes)for(let l=0;l<5;l++)e.add(St(nt.cone,Yt(i.s||16765498,i.glow||0),0,1.75-l*.04,.5-l*.3,.28,.5,.28));let o=Bl(e,i,1.15,-.65,.65,3),c=[];for(let l of[-1,1]){let h=new Ht;h.position.set(l*.42,.95,-.05),e.parent===t&&t.add(h),h.add(St(nt.sphere,n,0,-.2,0,.55,.75,.65),St(nt.cyl,n,0,-.55,.05,.3,.5,.3),St(nt.box,Yt(Fi(i.c,.8)),0,-.82,.18,.4,.2,.6)),c.push(h);let d=St(nt.cyl,n,l*.55,1.2,.8,.14,.4,.14);d.rotation.x=.9,e.add(d)}return Object.assign(t,{userData:{m:"biped",body:e,head:r,jaw:a,tail:o,legs:c,ph:Math.random()*6,o:i,top:3*(i.big?.95+i.big*.1:1)}})}function jg(i){let t=new Ht,e=new Ht;t.add(e);let n=Yt(i.c),s=Yt(i.b||i.c),r=i.low?.55:1;e.add(St(nt.sphere,n,0,1*r+.2,0,1.2,1*r+.1,2)),e.add(St(nt.sphere,s,0,.85*r+.2,.1,1,.7*r+.1,1.7));let a=new Ht;if(a.position.set(0,i.neck?2.7:1.1*r+.3,i.neck?1.5:1.35),e.add(a),i.neck){let d=St(nt.cyl,n,0,1.75,1.25,.5,1.9,.5);d.rotation.x=.5,e.add(d)}a.add(St(nt.sphere,n,0,0,0,.8,.7,.85));let o=i.longSnout?1.5:.7;a.add(St(nt.sphere,n,0,-.1,.4+(o-.7)*.3,.55,.38,o));let c=new Ht;if(c.position.set(0,-.2,.1),a.add(c),c.add(St(nt.sphere,s,0,-.02,.3+(o-.7)*.3,.5,.16,o*.9)),i.teeth&&zl(c,.08,.4+(o-.7)*.3,.35,4,.08),Fo(a,i,.18,.28,.28),i.horns){for(let u of[-1,1]){let f=St(nt.cone,Yt(16051408),u*.3,.3,.45,.16,.9,.16);f.rotation.x=.9,a.add(f)}a.add(St(nt.cone,Yt(16051408),0,0,.85,.2,.4,.2).rotateX(1.2));let d=St(nt.cyl,Yt(i.s||16751162),0,.35,-.3,1.5,.12,1.3);d.rotation.x=-.9,a.add(d)}if(i.plates)for(let d=0;d<7;d++)e.add(St(nt.cone,Yt(i.s||16751162),d%2?.08:-.08,1.75-Math.abs(d-3)*.12,.8-d*.27,.34,.75-Math.abs(d-3)*.05,.1));if(i.armor)for(let d=0;d<5;d++)for(let u of[-1,1])e.add(St(nt.sphere,Yt(d%2?i.s:Fi(i.s,.8)),u*.42,1.4-Math.abs(d-2)*.05,.7-d*.4,.62,.4,.5));let l=Bl(e,i,1*r+.2,-.9,.7,3),h=[];for(let[d,u]of[[-1,1],[1,-1],[1,1],[-1,-1]]){let f=new Ht;f.position.set(d*.55,.7*r+.1,u*.7),t.add(f),f.add(St(nt.cyl,n,0,-.3*r,0,.42,.7*r+.1,.42),St(nt.box,Yt(Fi(i.c,.8)),0,-.62*r,.1,.46,.18,.56)),h.push(f)}return Object.assign(t,{userData:{m:"quad",body:e,head:a,jaw:c,tail:l,legs:h,ph:Math.random()*6,o:i,top:i.neck?4:2.3}})}function Qg(i){let t=new Ht,e=new Ht;t.add(e),e.add(St(nt.sphere,Yt(i.c,i.glow||0),0,.4,0,.9,.6,1.1),St(nt.sphere,Yt(Fi(i.c,.6)),0,.35,.55,.5,.4,.4));for(let s of[-1,1]){e.add(St(nt.sphere,Yt(16777215),s*.14,.5,.75,.16,.16,.16));for(let[r,a]of[[0,.25],[1,0],[2,-.25]])e.add(St(nt.sphere,Yt(i.s||2236962),s*.2,.62,a,.18,.1,.18))}let n=[];for(let s=0;s<6;s++){let r=new Ht,a=s%2?1:-1;r.position.set(a*.4,.25,-.3+Math.floor(s/2)*.3),r.add(St(nt.cyl,Yt(2236962),a*.2,0,0,.45,.06,.06).rotateZ(0)),t.add(r),n.push(r)}return Object.assign(t,{userData:{m:"beetle",body:e,legs:n,tail:[],ph:Math.random()*6,o:i,top:.9}})}function Jg(i){let t=new Ht,e=new Ht;t.add(e),e.add(St(nt.sphere,Yt(i.c,i.glow||0),0,.7,0,1,1.35,1));for(let n=0;n<7;n++){let s=n*2.4,r=.35+n%4*.28,a=.46*Math.sqrt(1-Math.pow((r-.7)/.68,2));{let o=St(nt.sphere,Yt(i.s,i.glow||0),Math.sin(s)*a,r,Math.cos(s)*a,.22,.22,.12);o.lookAt(Math.sin(s)*3,r,Math.cos(s)*3),e.add(o)}}return Object.assign(t,{userData:{m:"egg",body:e,legs:[],tail:[],ph:Math.random()*6,o:i,top:1.9}})}function $g(i){let t=new Ht,e=new Ht;t.add(e),e.add(St(nt.sphere,Yt(i.c),0,.55,0,1.2,.9,1.3),St(nt.sphere,Yt(i.b),0,.42,.12,.95,.6,1));let n=new Ht;n.position.set(0,.7,.55),e.add(n),Fo(n,{eyeS:1.5},.42,.1,.3);let s=[];for(let r of[-1,1]){let a=new Ht;a.position.set(r*.55,.4,-.3),a.add(St(nt.sphere,Yt(i.c),0,0,-.2,.5,.45,.9)),t.add(a),s.push(a)}return Object.assign(t,{userData:{m:"frog",body:e,head:n,legs:s,tail:[],ph:Math.random()*6,o:i,top:1.9}})}var Uo={beetle:{m:"beetle",c:3844154},mudbug:{m:"beetle",c:8018490,s:3811866},emberbug:{m:"beetle",c:15227418,glow:8396800,s:16765498},egg:{m:"egg",c:16051408,s:5814360},swampEgg:{m:"egg",c:13625552,s:3836522},lavaEgg:{m:"egg",c:3811882,s:16738842,glow:5249024},compy:{m:"biped",c:15913530,b:16774336,big:1.3,eyeS:1.3},dodo:{m:"biped",c:11569754,b:15257768,big:1.25,eyeS:1.3},stego:{m:"quad",c:10143818,b:14741672,plates:!0,s:16751162,eyeS:1.2},trike:{m:"quad",c:6990040,b:14216447,horns:!0,s:16751162},raptorRed:{m:"biped",c:14170682,b:16765088,teeth:!0,eye:1118481,big:1.1,crest:!0,s:8396832},rexJr:{m:"biped",c:13136938,b:16767136,teeth:!0,big:1.3},frog:{m:"frog",c:4900970,b:14745536},gator:{m:"quad",c:3832394,b:14215328,low:!0,longSnout:!0,teeth:!0},ankylo:{m:"quad",c:9075290,b:14207128,armor:!0,s:12099696,club:!0,low:!0},calf:{m:"quad",c:8040608,b:14742752,neck:!0,eyeS:1.2},swampRex:{m:"biped",c:3828314,b:12574912,teeth:!0,big:1.3},lizard:{m:"quad",c:15247418,b:16773296,low:!0,longSnout:!0},ankyloRed:{m:"quad",c:9058858,b:14196864,armor:!0,s:15227434,club:!0,low:!0},trikeRed:{m:"quad",c:13130298,b:16765104,horns:!0,s:16765498},spino:{m:"biped",c:2775744,b:12638463,teeth:!0,sail:!0,s:16751162,big:1.2},rex:{m:"biped",c:10103338,b:16758920,teeth:!0,big:1.35,spikes:!0,s:15255648},boss:{m:"biped",c:5904922,b:16747066,teeth:!0,big:1.25,horns:!0,spikes:!0,s:16752672,glow:8400896,eye:16769098,eyeGlow:16752640,eyeS:1.2}},tm=[{m:"biped",c:6477900,b:15400880,big:1.45,eyeS:1.45},{m:"biped",c:2406568,b:14221296,big:1.25,eyeS:1.25,crest:!0,teeth:!0,s:16765498},{m:"biped",c:16747050,b:16770728,big:1.2,eyeS:1.15,teeth:!0,spikes:!0,s:16769098},{m:"biped",c:8016096,b:16767216,big:1.15,eyeS:1.1,teeth:!0,spikes:!0,horns:!0,s:16769098,glow:8413184}],em={biped:Zg,quad:jg,beetle:Qg,egg:Jg,frog:$g},Do=i=>em[i.m](i);function Vo(i,t,e,n){let s=i.userData,r=Math.min(1,e/3),a=Math.sin(s.ph);s.ph+=t*(3+e*1.15);let o=Math.sin(s.ph),c=!1;r>.15&&a*o<0&&s.m!=="beetle"&&(c=!0);let l=s.legs;if(s.m==="biped")l[0].rotation.x=o*.85*r,l[1].rotation.x=-o*.85*r;else if(s.m==="quad")l[0].rotation.x=o*.7*r,l[1].rotation.x=o*.7*r,l[2].rotation.x=-o*.7*r,l[3].rotation.x=-o*.7*r;else if(s.m==="beetle")l.forEach((h,d)=>{h.rotation.y=Math.sin(s.ph*2+d*1.6)*.5*(.2+r)});else if(s.m==="frog"){let h=Math.abs(Math.sin(s.ph*.7))*r;s.body.position.y=h*.5,l.forEach(d=>{d.rotation.x=-h*.8})}if(s.m==="egg"?(s.body.rotation.z=Math.sin(n*2.2+s.ph)*.08,s.body.rotation.x=Math.cos(n*1.7+s.ph)*.05):s.m!=="frog"&&(s.body.position.y=Math.abs(o)*.09*r+Math.sin(n*2+s.ph)*.02),s.tail.forEach((h,d)=>{h.rotation.y=Math.sin(n*3-d*.9+s.ph)*(.2+.25*r)}),s.head&&(s.head.rotation.x=Math.sin(n*1.5+s.ph)*.04+(s.lift||0)*-.5+(s.bite>0?Math.sin(s.bite*9)*.25:0),s.head.position.z+=0),s.jaw){let h=s.bite>0?Math.sin(Math.min(1,s.bite/.35)*Math.PI)*.9:(s.open||0)*.7;s.jaw.rotation.x=h}return s.bite>0&&(s.bite-=t),c}var No=new Map;function Fl(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new sr(n);return s.colorSpace=Se,s}var nm={green:["#9dff7a","#0a3a10"],white:["#ffffff","#1a2a3a"],red:["#ff5a4a","#3a0606"],gold:["#ffe04a","#3a2a00"],boss:["#ffb08a","#3a0606"]};function cs(i,t){let e=`${i}|${t}`;if(No.has(e))return No.get(e);let n=Fl(160,80,(r,a,o)=>{let[c,l]=nm[t];r.font="900 60px Tajawal, Arial, sans-serif",r.textAlign="center",r.textBaseline="middle";let h=t==="red"?`${i}!`:i;r.lineJoin="round",r.lineWidth=12,r.strokeStyle=l,r.strokeText(h,a/2,o/2+2),r.fillStyle=c,r.fillText(h,a/2,o/2+2)}),s=new Li({map:n,depthTest:!1,transparent:!0});return No.set(e,s),s}var vr={};function Dl(i){return vr[i]||(vr[i]=Fl(64,64,t=>{if(t.fillStyle="#fff",i==="dot"){let e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"#fff"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64)}else if(i==="star"){t.beginPath();for(let e=0;e<10;e++){let n=e%2?11:29,s=e*Math.PI/5-Math.PI/2;t.lineTo(32+Math.cos(s)*n,32+Math.sin(s)*n)}t.closePath(),t.fill()}else i==="leaf"?(t.beginPath(),t.ellipse(32,32,26,13,.6,0,7),t.fill()):(t.beginPath(),t.arc(32,32,24,0,7),t.fill())})),vr[i]}var yr=class{constructor(){this.list=[],this.o=new xe}add(t,e,n,s,r,a=1,o=1,c=1,l=0,h=0,d=0){let u=this.o;u.position.set(n,s,r),u.scale.set(a,o,c),u.rotation.set(l,h,d),u.updateMatrix();let f=t.clone();f.applyMatrix4(u.matrix);let m=f.attributes.position.count,A=new Vt(e),g=new Float32Array(m*3);for(let p=0;p<m;p++)g[p*3]=A.r,g[p*3+1]=A.g,g[p*3+2]=A.b;f.setAttribute("color",new ve(g,3)),this.list.push(f)}build(t){if(!this.list.length)return null;let e=new pe(_l(this.list),t);return this.list.forEach(n=>n.dispose()),this.list=[],e}},im=new ss({vertexColors:!0}),sm=new Ke({vertexColors:!0});function zo(i,t,e,n,s){let r=s==="swamp",a=s==="jungle"?[3119674,3978314,5752922]:[4876858,5929540,3824180];if(i.add(nt.cyl,6965802,t,1.6*n,e,.7*n,3.2*n,.7*n),r){i.add(nt.cyl,5917240,t+.5*n,3.2*n,e,.25*n,2*n,.25*n,0,0,-.8),i.add(nt.sphere,6982218,t,3.4*n,e,2.4*n,1.2*n,2.4*n);return}for(let o=0;o<3;o++)i.add(nt.sphere,a[o],t+(o-1)*.5*n,(3.4+o*.9)*n,e+(o===1?.4:-.2)*n,(3.2-o*.6)*n,(2.2-o*.2)*n,(3.2-o*.6)*n)}function Vl(i,t,e,n,s){i.add(nt.sphere,s,t,n*.5,e,n*2.2,n*1.3,n*1.9,0,t),i.add(nt.sphere,Fi(s,1.15),t+n*.4,n*.8,e-n*.2,n*1.2,n*.9,n*1.1)}function rm(i,t){let e=ye[i].id,n=ye[i].half,s=To(i*977+5),r=Nl[ye[i].look||e],a=new Ht,o=new yr,c=new yr;for(let u=0;u<26;u++){let f=(s()*2-1)*n,m=(s()*2-1)*n,A=2+s()*3.5;o.add(nt.cyl,e==="swamp"&&u%2?3111544:r.patch,f,.02+u*6e-4,m,A*2,.04,A*2)}for(let u of t.obstacles)if(u.kind==="tree"||u.kind==="stump"&&e==="swamp")if(u.kind==="tree")zo(o,u.x,u.z,u.r*.9,e);else{o.add(nt.cyl,5916214,u.x,.9,u.z,u.r*2,1.8,u.r*2),o.add(nt.cyl,9071174,u.x,1.82,u.z,u.r*1.8,.1,u.r*1.8);for(let f=0;f<3;f++)o.add(nt.sphere,[15223370,16765498,16747192][f],u.x+Math.sin(f*2.1)*u.r*.6,1.95,u.z+Math.cos(f*2.1)*u.r*.6,.5,.35,.5)}else u.kind==="pillar"?(o.add(nt.cyl,3811884,u.x,2.2,u.z,u.r*1.8,4.4,u.r*1.8),o.add(nt.cone,2760224,u.x,5,u.z,u.r*1.8,1.8,u.r*1.8),c.add(nt.cyl,16742938,u.x,1.4,u.z,u.r*1.9,.25,u.r*1.9)):Vl(o,u.x,u.z,u.r,e==="volcano"?4864570:9079428);for(let u=0;u<110;u++){let f=(s()*2-1)*(n-1),m=(s()*2-1)*(n-1);Math.hypot(f,m)<2||t.obstacles.some(A=>Math.hypot(A.x-f,A.z-m)<A.r+.6)||(e==="jungle"?u%4===0?(o.add(nt.cone,3115568,f,.4,m,.5,.9,.5),o.add(nt.cone,3840568,f+.3,.3,m,.4,.7,.4)):u%4===1?(o.add(nt.cyl,3115568,f,.3,m,.06,.6,.06),o.add(nt.sphere,[16738970,16769098,16777215,11569919][u%4+u%3]||16769098,f,.65,m,.3,.3,.3)):o.add(nt.sphere,6986320,f,.12,m,.7,.3,.6):e==="swamp"?u%3===0?(o.add(nt.cyl,6982202,f,.9,m,.08,1.8,.08),o.add(nt.cyl,6965802,f,1.7,m,.2,.5,.2),o.add(nt.cyl,6982202,f+.3,.7,m,.07,1.4,.07)):u%3===1?o.add(nt.cyl,4892762,f,.07,m,1.2,.05,1.2):o.add(nt.sphere,6982234,f,.15,m,.8,.3,.7):u%3===0?c.add(nt.cyl,16738842,f,.04,m,2+s()*3,.05,1.6+s()*2.4,0,s()*3):u%3===1?Vl(o,f,m,.3+s()*.4,4864570):o.add(nt.cone,2760224,f,.35,m,.4,.7,.4))}if(e==="volcano")for(let u=0;u<5;u++){let f=u*1.4+.5;c.add(nt.cyl,16747050,Math.sin(f)*(n-6),.05,Math.cos(f)*(n-6),5+s()*2,.06,4+s()*2)}for(let u=0;u<4;u++)for(let f=-n-2;f<=n+2;f+=3.2){let m=(s()-.5)*1.6,A=n+2+s()*1.5,g=u<2?u?A:-A:f+m,p=u<2?f+m:u===2?A:-A;if(e==="jungle")zo(o,g,p,1.5+s()*.8,e);else if(e==="swamp")s()<.5?zo(o,g,p,1.4+s()*.6,e):(o.add(nt.cyl,6982202,g,1.6,p,.12,3.2,.12),o.add(nt.cyl,6965802,g,3.1,p,.3,.8,.3));else{let b=3+s()*5;o.add(nt.cone,3023396,g,b/2,p,3+s()*2,b,3+s()*2),s()<.5&&c.add(nt.cone,16747050,g,b*.9,p,.9,.7,.9)}}for(let u=0;u<14;u++){let f=u/14*6.283,m=n+24+s()*10,A=8+s()*14,g=e==="jungle"?5937786:e==="swamp"?5929570:3810344;o.add(nt.cone,g,Math.sin(f)*m,A/2-1,Math.cos(f)*m,14+s()*8,A,14+s()*8),e==="volcano"&&u%3===0&&c.add(nt.cone,16742954,Math.sin(f)*m,A-1.5,Math.cos(f)*m,5,3,5)}let l=o.build(im);l&&a.add(l);let h=c.build(sm);h&&a.add(h);let d=new pe(new Jn(400,400),Yt(r.ground));return d.rotation.x=-Math.PI/2,a.add(d),a}var Bo=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),ft.setLang(e.lang),ft.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.girl=e.gender==="girl",this.save=Sl(e.save),this.base=e.base||"./",this.sound=new zi,this.sound.muted=!!this.save.muted,this.voice=new xr({base:this.base,lang:ft.getLang(),girl:this.girl,clips:Yg}),this.voice.setMuted(this.sound.muted),this._voiceArm=()=>this.voice.unlock(),document.addEventListener("pointerdown",this._voiceArm,!0),document.getElementById("dg-style")||document.head.append(Q("style",{id:"dg-style"},Ul("dg","#3fae4a","#17692e","#ffe04a")+`
.dg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*1.6);width:100%}.dg-env{border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);font-family:inherit;color:#fff;font-weight:900;padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*3);min-height:calc(var(--u)*24);cursor:pointer;justify-content:flex-end;text-shadow:0 1px 3px #000}.dg-env i{font-style:normal;font-size:calc(var(--u)*9)}.dg-env.lock{filter:grayscale(1) brightness(.6)}
.dg-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}.dg-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:calc(var(--u)*3.6)}
.dg-stats{flex:1;display:flex;flex-direction:column;gap:calc(var(--u)*.7);align-items:stretch;margin:0 auto;min-width:0;max-width:calc(var(--u)*62)}.dg-stats .dg-pill{font-size:calc(var(--u)*3.4);padding:calc(var(--u)*.4) calc(var(--u)*2.4);justify-content:center}
.dg-stick{position:absolute;width:calc(var(--u)*20);height:calc(var(--u)*20);margin:calc(var(--u)*-10) 0 0 calc(var(--u)*-10);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.7);background:rgba(255,255,255,.14);display:none;pointer-events:none}.dg-stick b{position:absolute;left:50%;top:50%;width:calc(var(--u)*9);height:calc(var(--u)*9);margin:calc(var(--u)*-4.5) 0 0 calc(var(--u)*-4.5);border-radius:50%;background:rgba(255,255,255,.75)}
.dg-pounce{position:absolute;right:calc(var(--u)*3);bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));width:calc(var(--u)*22);height:calc(var(--u)*22);border-radius:50%;font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;border:calc(var(--u)*.8) solid #fff;background:#d8502a;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.45);touch-action:none}.dg-pounce i{font-style:normal;font-size:calc(var(--u)*8)}
.dg-bossbar{position:absolute;left:50%;top:calc(var(--u)*17);transform:translateX(-50%);display:none;gap:calc(var(--u)*1.2);align-items:center;background:rgba(40,0,0,.7);border:calc(var(--u)*.4) solid #ffa020;border-radius:99px;padding:calc(var(--u)*.8) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap}
.dg-float{position:absolute;left:0;top:0;font-weight:900;font-size:calc(var(--u)*5.5);text-shadow:0 0 6px #000,0 0 3px #000;pointer-events:none;white-space:nowrap}
.dg-stars span{display:inline-block;animation:dgpop .5s both}@keyframes dgpop{0%{transform:scale(0) rotate(-90deg)}70%{transform:scale(1.3)}100%{transform:scale(1)}}
.dg-hint{top:calc(var(--u)*26);font-size:calc(var(--u)*4.2)}
.dg-top{align-items:flex-start!important}
.dg-badge{background:linear-gradient(180deg,#fff8e8,#f0e0c0);color:#4a3a1a;border:calc(var(--u)*.45) solid #5a3a1a;border-radius:99px;font-weight:900;font-size:calc(var(--u)*4.2);padding:calc(var(--u)*.7) calc(var(--u)*2.4);display:flex;gap:calc(var(--u)*1);align-items:center;box-shadow:0 calc(var(--u)*.5) 0 #5a3a1a}
.dg-power{display:flex;align-items:center;gap:calc(var(--u)*.8);background:linear-gradient(180deg,#ffb23a,#e8801a);border:calc(var(--u)*.5) solid #fff2d8;border-radius:99px;padding:calc(var(--u)*.3) calc(var(--u)*3);font-weight:900;color:#fff;box-shadow:0 calc(var(--u)*.5) 0 #8a4a0a;direction:ltr}.dg-power i{font-style:normal;font-size:calc(var(--u)*5)}.dg-power b{font-size:calc(var(--u)*7.5);color:#17323a;-webkit-text-stroke:calc(var(--u)*.4) #fff;paint-order:stroke fill;line-height:1.1}
.dg-eat{background:linear-gradient(180deg,#fff8e8,#f0e0c0);color:#17323a;border:calc(var(--u)*.45) solid #5a3a1a;border-radius:99px;font-weight:900;font-size:calc(var(--u)*5);padding:calc(var(--u)*.6) calc(var(--u)*2.6);min-width:calc(var(--u)*7);text-align:center}
.dg-mid{flex:1;display:flex;justify-content:center;gap:calc(var(--u)*.6);min-width:0;direction:ltr}
.dg-prog{position:absolute;left:calc(var(--u)*8);right:calc(var(--u)*8);top:calc(var(--u)*15);display:flex;gap:calc(var(--u)*1.2);align-items:center;pointer-events:none;direction:ltr}.dg-prog .bar{flex:1;height:calc(var(--u)*2.8);border-radius:99px;background:rgba(10,30,20,.65);border:calc(var(--u)*.35) solid rgba(255,255,255,.7);overflow:hidden}.dg-prog .bar b{display:block;height:100%;width:0;background:linear-gradient(180deg,#7af0ff,#2ab8d8)}
.dg-goalpill{background:linear-gradient(180deg,#ff7a4a,#d8401a);border:calc(var(--u)*.4) solid #fff;border-radius:99px;font-weight:900;font-size:calc(var(--u)*3.8);padding:calc(var(--u)*.4) calc(var(--u)*2.2);color:#fff;display:flex;gap:calc(var(--u)*.8);align-items:center}
.dg-beat{position:absolute;left:0;right:0;top:calc(var(--u)*20);text-align:center;font-weight:900;font-size:calc(var(--u)*2.8);color:#fff;text-shadow:0 0 4px #000,0 0 2px #000;pointer-events:none;letter-spacing:.04em}
.dg-pounce{background:radial-gradient(circle at 40% 30%,#6af0e0,#1a9a9a)!important;border:calc(var(--u)*.9) solid #0e4a4a!important;box-shadow:0 0 0 calc(var(--u)*.5) #cfeee8,0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.45)!important;width:calc(var(--u)*19)!important;height:calc(var(--u)*19)!important;color:#0e3a3a!important}.dg-pounce i{font-size:calc(var(--u)*9)!important;color:#fff;text-shadow:0 0 4px #0e4a4a}.dg-pounce span{position:absolute;bottom:calc(var(--u)*-4.6);left:0;right:0;font-size:calc(var(--u)*2.8);color:#fff;text-shadow:0 0 4px #000,0 0 2px #000}
.dg-lvtitle{position:absolute;left:0;right:0;top:calc(var(--u)*24);text-align:center;pointer-events:none;opacity:0;transition:opacity .5s}.dg-lvtitle.show{opacity:1}.dg-lvtitle b{display:block;font-weight:900;font-size:calc(var(--u)*10);color:#fff;font-style:italic;-webkit-text-stroke:calc(var(--u)*.9) #1a3a1a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #1a3a1a}.dg-lvtitle span{display:block;font-weight:900;font-size:calc(var(--u)*3.8);color:#ffe9a8;text-shadow:0 0 4px #000,0 0 2px #000}
.dg-ban{position:absolute;left:0;right:0;top:calc(var(--u)*30);text-align:center;pointer-events:none;opacity:0}.dg-ban.show{animation:dgban 2.2s ease-out forwards}.dg-ban b{display:inline-block;background:linear-gradient(180deg,#5ae8e0,#1a9aa8);border:calc(var(--u)*.6) solid #0e3a42;border-radius:calc(var(--u)*3);padding:calc(var(--u)*.8) calc(var(--u)*5);font-weight:900;font-style:italic;font-size:calc(var(--u)*8);color:#fff;text-shadow:0 calc(var(--u)*.5) 0 #0e3a42}.dg-ban span{display:block;font-weight:900;font-size:calc(var(--u)*3.8);color:#ffe9a8;margin-top:calc(var(--u)*.6);text-shadow:0 0 4px #000,0 0 2px #000}@keyframes dgban{0%{opacity:0;transform:scale(.4)}15%{opacity:1;transform:scale(1.1)}30%{transform:scale(1)}80%{opacity:1}100%{opacity:0}}
.dg-alphabar{position:absolute;left:calc(var(--u)*8);right:calc(var(--u)*8);top:calc(var(--u)*14);display:none;flex-direction:column;gap:calc(var(--u)*.6);background:rgba(10,40,20,.82);border:calc(var(--u)*.6) solid #3ad86a;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1) calc(var(--u)*2.6);font-weight:900;color:#fff;pointer-events:none}.dg-alphabar.red{border-color:#e83a2a;background:rgba(50,10,10,.82)}.dg-alphabar .t{display:flex;justify-content:space-between;font-size:calc(var(--u)*3);letter-spacing:.03em}.dg-alphabar .t em{font-style:normal;font-size:calc(var(--u)*4.6);color:#7aff9a}.dg-alphabar.red .t em{color:#ff8a7a}.dg-alphabar .bar{height:calc(var(--u)*1.8);border-radius:99px;background:rgba(0,0,0,.5);overflow:hidden}.dg-alphabar .bar b{display:block;height:100%;width:0;background:linear-gradient(180deg,#7aff9a,#2ab84a)}.dg-alphabar.red .bar b{background:linear-gradient(180deg,#ff8a6a,#d82a1a)}
.dg-arrow{position:absolute;left:0;top:0;width:calc(var(--u)*7);height:calc(var(--u)*7);margin:calc(var(--u)*-3.5) 0 0 calc(var(--u)*-3.5);display:none;pointer-events:none;font-size:calc(var(--u)*7);line-height:1;color:#ffb21a;text-shadow:0 0 6px #000,0 0 3px #000}
@media (orientation:landscape){.dg-hint{top:calc(var(--u)*22)}.dg-bossbar{top:calc(var(--u)*15)}.dg-card{padding:calc(var(--u)*2.4) calc(var(--u)*5);gap:calc(var(--u)*1.4)}.dg-btn{min-height:calc(var(--u)*9)}.dg-title{font-size:calc(var(--u)*6.5)}.dg-logo{font-size:calc(var(--u)*7)}.dg-stars{font-size:calc(var(--u)*8)}}`)),this.root=Q("div",{class:"dg-root",dir:ft.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=Q("div",{class:"dg-layer"}),this.mode="menu",this.clock=0,this.shake=0,this.pops=[],this.floats=[],this.vanish=[],this.recs=new Map,this.parts=[],this.camDist=15,this.keys=new Set,this.shown=new Set,this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){this.renderer=new tr({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Se,this.root.prepend(this.renderer.domElement),this.scene=new nr,this.camera=new Ee(48,1,.5,600),this.hemi=new hr(16777215,6986328,1.9),this.scene.add(this.hemi),this.sun=new ur(16773832,1.5),this.sun.position.set(-12,30,10),this.scene.add(this.sun),this.stage=new Ht,this.scene.add(this.stage),this.things=new Ht,this.scene.add(this.things),this.teleDisc=new pe(new Vn(1,40),new Ke({color:16722474,transparent:!0,opacity:.3,depthWrite:!1})),this.teleDisc.rotation.x=-Math.PI/2,this.teleDisc.position.y=.08,this.teleDisc.visible=!1,this.teleFill=new pe(new Vn(1,40),new Ke({color:16734762,transparent:!0,opacity:.45,depthWrite:!1})),this.teleFill.rotation.x=-Math.PI/2,this.teleFill.position.y=.1,this.teleFill.visible=!1,this.teleLine=new pe(new Jn(1,1).rotateX(-Math.PI/2),new Ke({color:16726554,transparent:!0,opacity:.35,depthWrite:!1})),this.teleLine.position.y=.09,this.teleLine.visible=!1,this.shock=new pe(new ar(.85,1,48),new Ke({color:16765056,transparent:!0,opacity:.8,side:We,depthWrite:!1})),this.shock.rotation.x=-Math.PI/2,this.shock.position.y=.15,this.shock.visible=!1,this.shockT=0,this.scene.add(this.teleDisc,this.teleFill,this.teleLine,this.shock),this.projMeshes=new Map,this.pool=[];for(let t=0;t<220;t++){let e=new $n(new Li({map:Dl("dot"),transparent:!0,depthWrite:!1}));e.visible=!1,this.scene.add(e),this.pool.push({sp:e,life:0})}}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.updateProjectionMatrix()}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.root.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.stick)return;let s=this.root.getBoundingClientRect();this.stick={id:n.pointerId,x0:n.clientX,y0:n.clientY,x:0,z:0},this.stickEl.style.display="block",this.stickEl.style.left=`${n.clientX-s.left}px`,this.stickEl.style.top=`${n.clientY-s.top}px`}),this.root.addEventListener("pointermove",n=>{let s=this.stick;if(!s||s.id!==n.pointerId)return;let r=this.u*9,a=n.clientX-s.x0,o=n.clientY-s.y0,c=Math.hypot(a,o);c>r&&(a=a/c*r,o=o/c*r),s.x=a/r,s.z=o/r,Math.hypot(s.x,s.z)<.12&&(s.x=0,s.z=0),this.knobEl.style.transform=`translate(${a}px,${o}px)`});let e=n=>{this.stick&&this.stick.id===n.pointerId&&(this.stick=null,this.stickEl&&(this.stickEl.style.display="none",this.knobEl.style.transform=""))};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e),this._onKey=n=>{let s=n.key.toLowerCase();this.mode==="play"&&(["arrowleft","arrowright","arrowup","arrowdown","a","d","w","s"].includes(s)?(this.keys.add(s),n.preventDefault()):s===" "?(n.preventDefault(),this.pounceQ=!0):(s==="p"||s==="escape")&&this.togglePause())},this._onKeyUp=n=>this.keys.delete(n.key.toLowerCase()),window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKeyUp),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_input(){let t=0,e=0,n=this.keys;(n.has("arrowleft")||n.has("a"))&&(t-=1),(n.has("arrowright")||n.has("d"))&&(t+=1),(n.has("arrowup")||n.has("w"))&&(e-=1),(n.has("arrowdown")||n.has("s"))&&(e+=1),!t&&!e&&this.stick&&(t=this.stick.x,e=this.stick.z);let s={x:t,z:e,pounce:!!this.pounceQ};return this.pounceQ=!1,s}_clear(){this.layer.replaceChildren(),this.hudReady=!1}_soundPill(){let t=Q("button",{class:"dg-soundpill",onclick:()=>this.sound.unlock()},ft.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=3200,n=""){this.hintEl&&(t!=="evolve"&&this.shown.has(t)||(this.shown.add(t),this.hintEl.textContent=`${ft.t(`h_${t}`)}${n}`,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e)))}plainHint(t,e=2200){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}showMenu(){this.mode="menu",this.paused=!1,this._clear(),this.sound.setMode(null),this._loadLevel(0,!0),this.layer.append(Q("div",{class:"dg-dim",style:"background:rgba(5,25,10,.25)"},Q("div",{class:"dg-card"},Q("div",{class:"dg-logo"},"\u{1F996} ",ft.t("title")),Q("div",{class:"dg-menu"},Q("button",{class:"dg-btn",onclick:()=>{this.sound.play("tap"),this.start(Math.min(this.save.unlocked-1,2))}},"\u25B6 ",ft.t("play")),Q("button",{class:"dg-btn dark",onclick:()=>{this.sound.play("tap"),this.showLevels()}},"\u{1F5FA}\uFE0F ",ft.t("levels")),Q("button",{class:"dg-btn dark",onclick:()=>{this.sound.play("tap"),this.showSettings()}},"\u2699\uFE0F ",ft.t("settings")),Q("button",{class:"dg-btn alt",onclick:()=>this.post({type:"exit"})},ft.t("quit")))))),this._soundPill()}showLevels(){this._clear();let t=ft.getLang()!=="en",e=["\u{1F334}","\u{1F40A}","\u{1F30B}","\u{1F334}","\u{1F40A}","\u{1F30B}"],n=["#5ac84a,#2a8a3a","#6a9a70,#2e5a46","#e0602a,#5a1e1e","#3f9a38,#1f6a2c","#56806a,#26463a","#c8441c,#4a1414"],s=ye.map((r,a)=>{let o=a+1>this.save.unlocked,c=this.save.stars[a]||0;return Q("button",{class:`dg-env${o?" lock":""}`,style:`background:linear-gradient(180deg,${n[a].split(",")[0]},${n[a].split(",")[1]})`,onclick:()=>{if(o){this.plainHint(ft.t("locked"));return}this.sound.play("tap"),this.start(a)}},Q("i",{},e[a]),Q("span",{},`${ft.num(a+1)}. ${t?r.ar:r.en}`),Q("span",{},o?"\u{1F512}":"\u2B50".repeat(c)+"\u2606".repeat(3-c)))});this.layer.append(Q("div",{class:"dg-dim",style:"background:rgba(5,25,10,.25)"},Q("div",{class:"dg-card"},Q("div",{class:"dg-title"},ft.t("select")),Q("div",{class:"dg-grid"},s),Q("button",{class:"dg-btn dark",onclick:()=>this.showMenu()},ft.t("back"))))),this.hintEl=Q("div",{class:"dg-hint"}),this.layer.append(this.hintEl),this._soundPill()}showSettings(){this._clear();let t=Q("button",{class:"dg-btn",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.voice.setMuted(this.save.muted),this.post({type:"save",save:this.save}),t.textContent=`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${ft.t("sound")}`,this.sound.play("tap")}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${ft.t("sound")}`);this.layer.append(Q("div",{class:"dg-dim",style:"background:rgba(5,25,10,.25)"},Q("div",{class:"dg-card"},Q("div",{class:"dg-title"},"\u2699\uFE0F ",ft.t("settings")),t,Q("div",{class:"dg-small"},ft.t("how")),Q("button",{class:"dg-btn dark",onclick:()=>this.showMenu()},ft.t("back")))))}_hud(){let t=this.sim.L,e=ft.getLang()!=="en",n=this.sim.boss,s=t.alpha,r=Q("button",{class:"dg-round","aria-label":ft.t("paused"),onclick:()=>this.togglePause()},"\u23F8");this.iconEl=Q("i",{},"\u{1F95A}"),this.pwrEl=Q("b",{},""),this.eatEl=Q("div",{class:"dg-eat"},"0"),this.barEl=Q("b",{style:"width:0%"}),this.layer.append(Q("div",{class:"dg-top"},Q("div",{class:"dg-badge"},"\u{1F33F}",ft.num(this.level+1)),Q("div",{class:"dg-mid"},Q("div",{class:"dg-power"},this.iconEl,this.pwrEl),this.eatEl),r));let a=n?n.power:s?as[s.kind].power:0,o=n?n.power:t.goal;this.layer.append(Q("div",{class:"dg-prog"},Q("span",{},"\u{1F95A}"),Q("div",{class:"bar"},this.barEl),Q("div",{class:"dg-goalpill"},n?"\u{1F451}":"\u{1F996}",ft.num(o)))),this.beatEl=Q("div",{class:"dg-beat"},`${ft.t(n?"beatBoss":"beat")} ${ft.num(a)}`.toUpperCase()),this.layer.append(this.beatEl),this.heartsEl=Q("span",{},""),this.bossBar=Q("div",{class:"dg-bossbar"},"\u{1F451} ",ft.t("boss")," ",ft.num(n?n.power:0)," ",this.heartsEl),this.layer.append(this.bossBar),this.alphaBar=Q("div",{class:"dg-alphabar"},Q("div",{class:"t"},Q("span",{class:"nm"},""),Q("em",{},"")),Q("div",{class:"bar"},Q("b"))),this.layer.append(this.alphaBar),this.arrowEl=Q("div",{class:"dg-arrow"},"\u27A4"),this.layer.append(this.arrowEl),this.titleEl=Q("div",{class:"dg-lvtitle show"},Q("b",{},e?t.ar:t.en),Q("span",{},t.sub?t.sub[e?0:1]:"")),this.layer.append(this.titleEl),setTimeout(()=>this.titleEl&&this.titleEl.classList.remove("show"),3400),this.banEl=Q("div",{class:"dg-ban"},Q("b",{},""),Q("span",{},"")),this.layer.append(this.banEl),this.hintEl=Q("div",{class:"dg-hint"}),this.layer.append(this.hintEl),this.stickEl=Q("div",{class:"dg-stick"},this.knobEl=Q("b")),this.layer.append(this.stickEl),this.cdEl=Q("i",{},"\u{1F43E}"),this.pounceBtn=Q("button",{class:"dg-pounce","aria-label":ft.t("pounce"),onpointerdown:c=>{c.stopPropagation(),this.pounceQ=!0},onclick:c=>c.preventDefault()},this.cdEl,Q("span",{},ft.t("pounce").toUpperCase())),this.layer.append(this.pounceBtn),this._soundPill(),this.hudReady=!0,this._lastHud=""}banner(t,e=""){this.banEl&&(this.banEl.firstChild.textContent=t,this.banEl.lastChild.textContent=e,this.banEl.classList.remove("show"),this.banEl.offsetWidth,this.banEl.classList.add("show"))}_updateHud(){let t=this.sim,e=t.player,n=ft.getLang()!=="en",s=e.stage,r=nn[s+1],a=`${e.P}|${s}|${t.boss?t.boss.hp:0}|${t.stats.eaten}|${t.alpha?1:0}`;if(a!==this._lastHud){this._lastHud=a,this.pwrEl.textContent=ft.num(Math.round(e.P)),this.iconEl.textContent=s===0?"\u{1F95A}":"\u{1F43E}",this.eatEl.textContent=ft.num(t.stats.eaten);let c=r?(e.P-nn[s].at)/(r.at-nn[s].at):1;if(this.barEl.style.width=`${Math.max(2,Math.min(100,c*100))}%`,t.boss&&(this.bossBar.style.display="flex",this.heartsEl.textContent="\u2764\uFE0F".repeat(t.boss.hp)+"\u{1F5A4}".repeat(t.boss.maxHp-t.boss.hp),this.beatEl.style.display="none"),t.alpha){let l=t.alpha,h=as[l.kind];this.beatEl.style.display="none",this.alphaBar.style.display="flex",this.alphaBar.classList.toggle("red",e.P<=l.power),this.alphaBar.querySelector(".nm").textContent=(n?h.ar:h.en).toUpperCase(),this.alphaBar.querySelector("em").textContent=ft.num(l.power),this.alphaBar.querySelector(".bar b").style.width=`${Math.max(4,Math.min(100,e.P/l.power*100))}%`}else t.alphaDown&&(this.alphaBar.style.display="none")}let o=Math.max(0,e.pounceCd/1.5);this.pounceBtn.style.opacity=o>0?".75":"1",this.pounceBtn.style.filter=o>0?`grayscale(${o})`:"",this.cdEl.textContent=o>0?Math.ceil(o*1.5*10)/10+"":"\u{1F43E}"}togglePause(){this.mode==="play"&&(this.paused=!this.paused,this.paused?(this.stick=null,this.stickEl&&(this.stickEl.style.display="none"),this.pauseEl=Q("div",{class:"dg-dim"},Q("div",{class:"dg-card"},Q("div",{class:"dg-title"},ft.t("paused")),Q("button",{class:"dg-btn",onclick:()=>this.togglePause()},"\u25B6 ",ft.t("resume")),Q("button",{class:"dg-btn dark",onclick:()=>this.start(this.level)},"\u{1F504} ",ft.t("restart")),Q("button",{class:"dg-btn dark",onclick:()=>this.showMenu()},"\u{1F3E0} ",ft.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_loadLevel(t,e){this.level=t,this.sim=new mr({level:t,seed:e?3:(Date.now()&65535)+1,easy:this.age<=4}),e&&(this.sim.player.inv=1e9);for(let r of this.recs.values())this.things.remove(r.W,r.spr);this.recs.clear();for(let r of this.vanish)this.things.remove(r.W);this.vanish=[];for(let r of this.projMeshes.values())this.things.remove(r);this.projMeshes.clear(),this.stage.clear();let n=ye[t].look||ye[t].id,s=Nl[n];if(this.stage.add(rm(t,this.sim)),this.scene.background=new Vt(s.sky),this.scene.fog=new er(s.fog,38,n==="volcano"?120:150),this.hemi.color.set(s.hemi[0]),this.hemi.groundColor.set(s.hemi[1]),this.sun.color.set(s.sun),this.playerRec&&this.things.remove(this.playerRec.W,this.playerRec.spr),this._makePlayer(this.sim.player.stage),this.boss=null,this.sim.boss){let r=Do(Uo.boss),a=new Ht;a.add(r);let o=St(new Vn(1,20),os(0,.3),0,.04,0);o.rotation.x=-Math.PI/2,o.scale.setScalar(this.sim.boss.r*1.3),a.add(o),r.scale.setScalar(this.sim.boss.r*Lo.biped),this.things.add(a);let c=new $n(cs(ft.num(this.sim.boss.power),"boss"));c.renderOrder=10,this.things.add(c),this.boss={W:a,m:r,spr:c,pose:0,fall:0}}this.camDist=qo(this.sim.player.P),this.stats={cd:0}}_makePlayer(t){this.playerRec&&this.things.remove(this.playerRec.W,this.playerRec.spr);let e=Do(tm[t]),n=new Ht;n.add(e);let s=St(new Vn(1,20),os(0,.3),0,.04,0);s.rotation.x=-Math.PI/2,n.add(s);let r=new $n(cs("0","gold"));r.renderOrder=10,this.things.add(n,r),this.playerRec={W:n,m:e,sh:s,spr:r,key:""}}_creatureRec(t){let e=as[t.kind],n=Do(Uo[e.look]),s=new Ht;s.add(n);let r=St(new Vn(1,16),os(0,.28),0,.04,0);r.rotation.x=-Math.PI/2,r.scale.setScalar(t.r*1.2),s.add(r);let a=new $n(cs(String(t.power),"white"));a.renderOrder=9,this.things.add(s,a);let o={W:s,m:n,spr:a,key:"",age:0,sc:t.r*Lo[Uo[e.look].m]};return this.recs.set(t.id,o),o}start(t){this.voice.say("count"),this._clear(),this.sound.unlock(),this._loadLevel(t,!1),this.mode="play",this.paused=!1,this.shake=0,this.shown=new Set,this.pounceQ=!1,this.stick=null,this.sound.setMode(t),this._hud(),this.hint("eat",4200),this.plainHint("\u261D "+ft.t("dragMove"),2600),this.t0=performance.now(),setTimeout(()=>{this.mode==="play"&&this.level===t&&this.sim.player.P<6&&this.hint("pounce",3600)},9e3),this.sim.boss&&setTimeout(()=>this.mode==="play"&&this.hint("bossNeed",4200),4600)}_finish(t){let e=this.level,n=this.save,s=t.stars;n.stars[e]=Math.max(n.stars[e]||0,s),n.unlocked=Math.max(n.unlocked,Math.min(ye.length,e+2)),n.eaten+=t.eaten;let r=Math.round(t.time);(!n.best[e]||r<n.best[e])&&(n.best[e]=r),this.post({type:"save",save:n}),this.sound.play("win"),this.voice.say("win"),this.mode="over";let a=e===ye.length-1,o=Math.floor(t.time/60),c=Math.round(t.time%60),l=Q("div",{class:"dg-stars"});for(let h=0;h<3;h++){let d=Q("span",{class:h<s?"":"off",style:`animation-delay:${.3+h*.35}s`},"\u2B50");l.append(d),h<s&&setTimeout(()=>this.sound.play("star"),300+h*350)}this.layer.append(Q("div",{class:"dg-dim"},Q("div",{class:"dg-card"},Q("div",{class:"dg-logo",style:"color:#7dff9a"},ft.t("complete")),Q("div",{class:"dg-small"},ft.t(this.girl?"win_f":"win_m")),l,Q("div",{class:"dg-row"},Q("span",{},`\u23F1 ${ft.t("time")}`),Q("span",{},`${ft.num(o)}:${ft.num(String(c).padStart(2,"0"))}`)),Q("div",{class:"dg-row"},Q("span",{},`\u26A1 ${ft.t("power")}`),Q("span",{},ft.num(Math.round(t.power)))),Q("div",{class:"dg-row"},Q("span",{},`\u{1F356} ${ft.t("eaten")}`),Q("span",{},ft.num(t.eaten))),Q("div",{class:"dg-row"},Q("span",{},`\u{1F4A5} ${ft.t("bumps")}`),Q("span",{},ft.num(t.hits))),a?Q("div",{class:"dg-small"},ft.t("all")):Q("button",{class:"dg-btn",onclick:()=>this.start(e+1)},"\u25B6 ",ft.t("next")),Q("button",{class:"dg-btn alt",onclick:()=>this.start(e)},"\u{1F504} ",ft.t("again")),Q("button",{class:"dg-btn dark",onclick:()=>this.showMenu()},"\u{1F3E0} ",ft.t("home")))))}emit(t,e,n,s,r,a,o,c,l,h,d=0,u=0){let f=this.pool.find(A=>A.life<=0);if(!f)return;let m=f.sp.material;m.map=Dl(t),m.color.set(h),m.opacity=1,m.rotation=Math.random()*6,m.needsUpdate=!0,f.sp.position.set(e,n,s),f.sp.scale.setScalar(l),f.sp.visible=!0,Object.assign(f,{life:c,max:c,vx:r,vy:a,vz:o,size:l,grav:d,grow:u})}burst(t,e,n,s,r,a,o,c,l,h=6){for(let d=0;d<r;d++){let u=Math.random()*6.283,f=Math.random()*.8+.2;this.emit(t,e,n,s,Math.sin(u)*a*f,a*(.4+Math.random()*.8),Math.cos(u)*a*f,o*(.7+Math.random()*.6),c*(.7+Math.random()*.6),l[d%l.length],h)}}_parts(t){for(let e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sp.visible=!1;continue}e.vy-=e.grav*t,e.sp.position.x+=e.vx*t,e.sp.position.y=Math.max(.05,e.sp.position.y+e.vy*t),e.sp.position.z+=e.vz*t;let n=e.life/e.max;e.sp.material.opacity=Math.min(1,n*1.6),e.sp.scale.setScalar(e.size*(1+e.grow*(1-n)))}}floatText(t,e,n,s,r="#ffe04a",a=1.1){let o=Q("div",{class:"dg-float",style:`color:${r}`},t);this.layer.append(o),this.floats.push({el:o,x:e,y:n,z:s,t:0,life:a})}_floats(t){let e=new D;for(let n of this.floats){n.t+=t,e.set(n.x,n.y+n.t*2.2,n.z).project(this.camera);let s=(e.x*.5+.5)*this.cw,r=(-e.y*.5+.5)*this.ch;n.el.style.transform=`translate(${s}px,${r}px) translate(-50%,-50%)`,n.el.style.opacity=String(Math.max(0,1-n.t/n.life)),e.z>1&&(n.el.style.display="none")}this.floats=this.floats.filter(n=>n.t>=n.life?(n.el.remove(),!1):!0)}_events(t){let e=this.sim.player,n=this.playerRec;for(let s of t)switch(s.type){case"eat":{this.sound.play("chomp"),this.voice.say("pickup"),n.m.userData.bite=.35,this.burst("star",s.x,1.2,s.z,10,5,.7,.7,[16769098,16777215,16756960],4),this.burst("leaf",s.x,.8,s.z,8,4,1,.6,[7002970,3844154,10157946],5),this.floatText(`+${ft.num(s.gain)}`,s.x,2.5,s.z,"#9dff7a");let r=this.recs.get(s.id);r&&(this.recs.delete(s.id),this.things.remove(r.spr),this.vanish.push({W:r.W,t:0,x:s.x,z:s.z,sc:r.W.scale.x})),this.shake+=.08+e.r*.03;break}case"evolve":{this._makePlayer(s.stage),this.pop=1.7,this.sound.play("evolve"),this.voice.say("charge"),this.shake+=.6,this.burst("star",e.x,2,e.z,36,9,1.2,.9,[16769098,16777215,9109482,16751328],2),this.burst("dot",e.x,1,e.z,16,6,.8,2.2,[16777215],0);let r=ft.getLang()!=="en";this.banner(ft.t("evolved"),r?nn[s.stage].ar:nn[s.stage].en);break}case"bump":{this.sound.play("bump"),this.voice.say("bump"),this.shake+=.7,this.burst("star",e.x,1.5,e.z,12,6,.6,.6,[16730698,16752704],6),s.lost&&this.floatText(`-${ft.num(s.lost)}`,e.x,2.8,e.z,"#ff6a6a"),s.src!=="fire"&&s.src!=="stomp"&&this.hint("bump",2200);break}case"pounce":this.sound.play("pounce"),this.burst("puff",e.x,.3,e.z,6,3,.5,1.2,[14207136],0);break;case"alert":{(!this.alertT||this.clock-this.alertT>2)&&(this.alertT=this.clock,this.sound.play("alert"),this.voice.say("near"),this.hint("red",3e3)),this.floatText("\u2757",s.x,4.5,s.z,"#ff4a4a",.9);break}case"telegraph":this.sound.play("telegraph"),this.hint(s.kind==="stomp"?"stomp":"fire",2400);break;case"stomp":this.sound.play("stomp",1),this.sound.play("roar"),this.shake+=1.6,this.shockT=.55,this.shock.position.set(s.x,.15,s.z),this.shockR=s.radius,this.burst("puff",s.x,.5,s.z,26,11,.9,3.2,[13350538,10127978],0);break;case"fire":this.sound.play("fire"),this.burst("dot",s.x,3,s.z,12,7,.6,2.2,[16751146,16765498],0);break;case"bossBite":this.sound.play("bossHit"),this.voice.say("trick"),this.sound.play("roar"),this.shake+=1.2,this.burst("star",s.x,3,s.z,28,9,1,1,[16769098,16742954,16777215],3),this.hint("bossHit",2e3),this.floatText(`\u{1F4A5} ${"\u2764\uFE0F".repeat(s.hp)}`,s.x,8,s.z,"#ffffff",1.4);break;case"bossDown":this.sound.play("roar"),this.voice.say("win"),this.shake+=2,this.burst("star",s.x,3,s.z,60,12,1.8,1.3,[16769098,16777215,16751328,9109482],2);break;case"alpha":{this.sound.play("roar"),this.sound.play("alert"),this.hint("alpha",3600);break}case"alphaDown":{let r=as[s.kind],a=ft.getLang()!=="en";this.sound.play("roar"),this.voice.say("trick"),this.shake+=1,this.banner(ft.t("defeated"),a?r.ar:r.en),this.burst("star",s.x,3,s.z,40,10,1.4,1.1,[16769098,16777215,16751328,9109482],2);break}case"complete":this._finish(s);break;default:break}}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e;let n=this.sim,s=this.mode==="play"&&!this.paused;if(this.mode==="menu"||s){let r=s?this._input():{x:0,z:0,pounce:!1},a=n.step(e,r);s&&this._events(a)}s&&this.hudReady,this._render(e),s&&this.hudReady&&this._updateHud()}_render(t){let e=this.sim,n=e.player,s=this.clock,r=this.camDist;this.camDist+=(qo(n.P)-this.camDist)*Math.min(1,t*1.6);let a=this.camDist/24,o=this.playerRec;this.pop=Math.max(1,(this.pop||1)-t*1.4),o.W.position.set(n.x,0,n.z),o.m.rotation.y=n.face;let c=o.m,l=n.r*Lo.biped*this.pop;c.scale.setScalar(l),o.sh.scale.setScalar(n.r*1.25),c.userData.open=n.pounceT>0?1:0;let h=Vo(c,t,n.speedNow*(n.pounceT>0?.5:1),s);if(c.position.y=n.pounceT>0?Math.sin((1-n.pounceT/.32)*Math.PI)*.9:0,c.rotation.x=n.pounceT>0?-.35:0,c.visible=n.inv<=0||Math.floor(s*18)%2===0||n.inv>1e8,h&&this.mode==="play"&&!this.paused){let I=Math.min(1,n.r/3);this.shake+=(.012+.05*I*I)*(n.stage>=1?1:.5),n.stage>=1&&this.sound.play("stomp",I),this.burst("puff",n.x-Math.sin(n.face)*n.r*.5,.2,n.z-Math.cos(n.face)*n.r*.5,2+n.stage,1.5+n.r*.4,.5,.8+n.r*.5,[13350538],0)}o.spr.position.set(n.x,c.userData.top*l+.4*a,n.z),o.spr.scale.set(3.2*a,1.6*a,1);let d=String(Math.round(n.P));o.key!==d&&(o.key=d,o.spr.material=cs(ft.num(Math.round(n.P)),"gold"));let u=new Set;for(let I of e.creatures){u.add(I.id);let v=this.recs.get(I.id)||this._creatureRec(I),U=Math.hypot(I.x-n.x,I.z-n.z)>this.camDist*1.5+8;if(v.W.visible=!U,v.spr.visible=!U,U)continue;v.age=Math.min(1,v.age+t*2.5);let S=1-Math.pow(1-v.age,3);v.W.position.set(I.x,0,I.z),v.m.rotation.y=I.face,v.m.scale.setScalar(v.sc*S),v.m.userData.lift=0,v.m.userData.open=I.chase?1:0,Vo(v.m,t,I.speed,s);let E=bl(I.power,n.P),L=`${E}`;v.key!==L&&(v.key=L,v.spr.material=cs(ft.num(I.power),E)),v.spr.position.set(I.x,v.m.userData.top*v.sc+.4*a,I.z),v.spr.scale.set(2.6*a,1.3*a,1)}for(let[I,v]of this.recs)u.has(I)||(this.things.remove(v.W,v.spr),this.recs.delete(I));for(let I of this.vanish){I.t+=t*3.5;let v=Math.min(1,I.t);I.W.scale.setScalar(Math.max(.001,1-v)),I.W.position.set(I.x+(n.x-I.x)*v*.6,v*1.4,I.z+(n.z-I.z)*v*.6),I.W.rotation.y+=t*12}this.vanish=this.vanish.filter(I=>I.t>=1?(this.things.remove(I.W),!1):!0);let f=e.boss,m=this.boss;if(f&&m){m.W.position.set(f.x,0,f.z),m.m.rotation.y=f.face;let I=f.tele,v=I?I.type==="stomp"?1:2:0;m.pose+=(v-m.pose)*Math.min(1,t*6);let U=Math.min(1,m.pose),S=Math.max(0,m.pose-1);if(m.m.userData.body.rotation.x=f.down?0:-.45*U,m.m.userData.lift=S,m.m.userData.open=I&&I.type==="fire"?1:0,f.down&&(m.fall=Math.min(1,m.fall+t*.8),m.m.rotation.z=m.fall*1.5,m.m.position.y=-m.fall*1.5),f.stagger>0&&(m.m.rotation.z=Math.sin(s*30)*.08),Vo(m.m,t,f.speedNow*2.2,s)&&this.mode==="play"&&!this.paused){let _=Math.hypot(f.x-n.x,f.z-n.z);this.shake+=Math.max(0,.25-_*.004),_<40&&this.sound.play("stomp",1)}m.spr.visible=!f.down,m.spr.position.set(f.x,12.5*a*.4+f.r*3.1,f.z),m.spr.scale.set(4*a,2*a,1),n.P>f.power&&!this.shown.has("bossReady")&&this.mode==="play"&&this.hint("bossReady",3600),this._tele(f,t)}else this._tele(null,t);let A=new Set;for(let I of e.projectiles){A.add(I.id);let v=this.projMeshes.get(I.id);v||(v=St(nt.sphere,os(16742938),0,1,0,1.5,1.5,1.5),v.add(St(nt.sphere,os(16769162),0,0,0,.55,.55,.55)),this.things.add(v),this.projMeshes.set(I.id,v)),v.position.set(I.x,1.1,I.z),Math.random()<.5&&this.emit("dot",I.x,1.1,I.z,0,.5,0,.5,1.4,16751146,0)}for(let[I,v]of this.projMeshes)A.has(I)||(this.things.remove(v),this.projMeshes.delete(I));if(this.shockT>0){this.shockT-=t;let I=1-this.shockT/.55;this.shock.visible=!0,this.shock.scale.setScalar(Math.max(.1,this.shockR*I)),this.shock.material.opacity=.8*(1-I)}else this.shock.visible=!1;if(this._amb=(this._amb||0)-t,this._amb<=0){this._amb=.12;let I=e.L.look||e.L.id,v=n.x+(Math.random()-.5)*this.camDist*1.8,U=n.z+(Math.random()-.5)*this.camDist*1.4;I==="volcano"?this.emit("dot",v,14,U,-.8,-3,.4,4,.5,Math.random()<.5?16751162:6969946,0):I==="swamp"?this.emit("dot",v,.2,U,0,1.2,0,2.2,.6,13625552,0,.5):this.emit("leaf",v,12,U,.6,-2.2,.3,5,.6,7002970,0)}this._parts(t),this.shake=Math.max(0,this.shake-t*3);let g=Math.min(1.5,this.shake)*.25*a*(.4+Math.min(1,n.r/3)*.6),p=this.cw<this.ch,b=this.camDist*(p?1.05:1);if(this.mode==="menu"){let I=s*.25;this.camera.position.set(n.x+Math.sin(I)*10,6.5,n.z+Math.cos(I)*10),this.camera.lookAt(n.x,1.5,n.z)}else this.camera.position.set(n.x+(Math.random()-.5)*g,b*.88,n.z+b*.46+(Math.random()-.5)*g),this.camera.lookAt(n.x,0,n.z-b*.03);if(this.sun.position.set(n.x-12,30,n.z+10),this.sun.target.position.set(n.x,0,n.z),this.sun.target.updateMatrixWorld(),this.renderer.render(this.scene,this.camera),this.arrowEl){let I=e.alpha;if(I&&this.mode==="play"){let v=new D(I.x,1,I.z).project(this.camera),U=(v.x*.5+.5)*this.cw,S=(-v.y*.5+.5)*this.ch;v.z>1&&(U=this.cw-U,S=this.ch-S);let E=this.u*6;if(U<E||U>this.cw-E||S<E*2.4||S>this.ch-E*2.4||v.z>1){let _=this.cw/2,C=this.ch/2,w=Math.atan2(S-C,U-_),F=Math.min((_-E)/Math.abs(Math.cos(w)||1e-6),(C-E*2.4)/Math.abs(Math.sin(w)||1e-6));this.arrowEl.style.display="block",this.arrowEl.style.transform=`translate(${_+Math.cos(w)*F}px,${C+Math.sin(w)*F}px) rotate(${w}rad)`}else this.arrowEl.style.display="none"}else this.arrowEl.style.display="none"}this._floats(t)}_tele(t,e){let n=t&&t.tele;if(this.teleDisc.visible=this.teleFill.visible=this.teleLine.visible=!1,!n)return;let s=Math.min(1,n.t/n.dur),r=.25+.2*Math.sin(this.clock*14);if(n.type==="stomp")this.teleDisc.visible=this.teleFill.visible=!0,this.teleDisc.position.set(t.x,.08,t.z),this.teleDisc.scale.setScalar(n.radius),this.teleDisc.material.opacity=.18+r*.5,this.teleFill.position.set(t.x,.1,t.z),this.teleFill.scale.setScalar(Math.max(.1,n.radius*s));else{this.teleLine.visible=!0;let a=26;this.teleLine.scale.set(3.4,1,a),this.teleLine.rotation.set(0,n.ang,0),this.teleLine.position.set(t.x+Math.sin(n.ang)*a/2,.09,t.z+Math.cos(n.ang)*a/2),this.teleLine.material.opacity=(n.locked?.35:.2)+r*.6}}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.voice.dispose(),document.removeEventListener("pointerdown",this._voiceArm,!0),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKeyUp),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},Oo={start(i,t,e){let n=new Bo(i,t||{},e);return Oo.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.DinoGrow=Oo;var Rm=Oo;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
