(()=>{var Po="170";var eh=0,ll=1,nh=2;var fc=1,ih=2,un=3,Dn=0,Te=1,fn=2,Pn=0,Ln=1,Js=2,cl=3,hl=4,sh=5,Jn=100,rh=101,ah=102,oh=103,lh=104,ch=200,hh=201,uh=202,dh=203,ca=204,ha=205,fh=206,ph=207,gh=208,mh=209,Ah=210,xh=211,Ch=212,vh=213,_h=214,ua=0,da=1,fa=2,Ei=3,pa=4,ga=5,ma=6,Aa=7,_r=0,yh=1,Ih=2,Un=0,Mh=1,bh=2,Sh=3,Eh=4,wh=5,Th=6,Rh=7;var pc=300,wi=301,Ti=302,xa=303,Ca=304,yr=306,rs=1e3,Qn=1001,va=1002,Xe=1003,qh=1004;var xs=1005;var tn=1006,Tr=1007;var jn=1008;var An=1009,gc=1010,mc=1011,as=1012,Lo=1013,$n=1014,pn=1015,us=1016,Uo=1017,Do=1018,Ri=1020,Ac=35902,xc=1021,Cc=1022,We=1023,vc=1024,_c=1025,Mi=1026,qi=1027,yc=1028,No=1029,Ic=1030,Bo=1031;var Fo=1033,Hs=33776,Gs=33777,Ws=33778,Xs=33779,_a=35840,ya=35841,Ia=35842,Ma=35843,ba=36196,Sa=37492,Ea=37496,wa=37808,Ta=37809,Ra=37810,qa=37811,Va=37812,Pa=37813,La=37814,Ua=37815,Da=37816,Na=37817,Ba=37818,Fa=37819,Oa=37820,za=37821,Ys=36492,ka=36494,Ha=36495,Mc=36283,Ga=36284,Wa=36285,Xa=36286;var Ks=2300,Ya=2301,Rr=2302,ul=2400,dl=2401,fl=2402;var Vh=3200,Ph=3201;var Oo=0,Lh=1,Vn="",ye="srgb",zi="srgb-linear",Ir="linear",Qt="srgb";var ci=7680;var pl=519,Uh=512,Dh=513,Nh=514,bc=515,Bh=516,Fh=517,Oh=518,zh=519,gl=35044;var ml="300 es",gn=2e3,Zs=2001,Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qr=Math.PI/180,Ja=180/Math.PI;function ds(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[s&255]+ve[s>>8&255]+ve[s>>16&255]+ve[s>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Ie(s,t,e){return Math.max(t,Math.min(e,s))}function kh(s,t){return(s%t+t)%t}function Vr(s,t,e){return(1-e)*s+e*t}function Ki(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var _t=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],C=i[0],g=i[3],f=i[6],b=i[1],I=i[4],_=i[7],U=i[2],E=i[5],w=i[8];return r[0]=a*C+o*b+l*U,r[3]=a*g+o*I+l*E,r[6]=a*f+o*_+l*w,r[1]=c*C+h*b+u*U,r[4]=c*g+h*I+u*E,r[7]=c*f+h*_+u*w,r[2]=d*C+p*b+m*U,r[5]=d*g+p*I+m*E,r[8]=d*f+p*_+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=e*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/m;return t[0]=u*C,t[1]=(i*c-h*n)*C,t[2]=(o*n-i*a)*C,t[3]=d*C,t[4]=(h*e-i*l)*C,t[5]=(i*r-o*e)*C,t[6]=p*C,t[7]=(n*l-c*e)*C,t[8]=(a*e-n*r)*C,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pr=new Lt;function Sc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hh(){let s=Qs("canvas");return s.style.display="block",s}var Al={};function ts(s){s in Al||(Al[s]=!0,console.warn(s))}function Gh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wh(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xh(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Ir:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var xl=[.64,.33,.3,.6,.15,.06],Cl=[.2126,.7152,.0722],vl=[.3127,.329],_l=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[zi]:{primaries:xl,whitePoint:vl,transfer:Ir,toXYZ:_l,fromXYZ:yl,luminanceCoefficients:Cl,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:xl,whitePoint:vl,transfer:Qt,toXYZ:_l,fromXYZ:yl,luminanceCoefficients:Cl,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var hi,Ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=Qs("canvas")),hi.width=t.width,hi.height=t.height;let n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Qs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=mn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mn(e[n]/255)*255):e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yh=0,js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Lr(i[a].image)):r.push(Lr(i[a]))}else r=Lr(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lr(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jh=0,Ue=class s extends Nn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Qn,i=Qn,r=tn,a=jn,o=We,l=An,c=s.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=ds(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=pc;Ue.DEFAULT_ANISOTROPY=1;var he=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],C=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-C)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+C)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,_=(p+1)/2,U=(f+1)/2,E=(h+d)/4,w=(u+C)/4,V=(m+g)/4;return I>_&&I>U?I<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(I),i=E/n,r=w/n):_>U?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=V/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=w/r,i=V/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-C)*(u-C)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-C)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends Nn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new js(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$s=class extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],m=r[a+2],C=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=C;return}if(u!==C||l!==d||c!==p||h!==m){let g=1-o,f=l*d+c*p+h*m+u*C,b=f>=0?1:-1,I=1-f*f;if(I>Number.EPSILON){let U=Math.sqrt(I),E=Math.atan2(U,f*b);g=Math.sin(g*E)/U,o=Math.sin(o*E)/U}let _=o*b;if(l=l*g+d*_,c=c*g+p*_,h=h*g+m*_,u=u*g+C*_,g===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*p-c*d,t[e+1]=l*m+h*d+c*u-o*p,t[e+2]=c*m+h*p+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ur=new T,Il=new Bn,ti=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(r,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),vs.subVectors(this.max,Zi),ui.subVectors(t.a,Zi),di.subVectors(t.b,Zi),fi.subVectors(t.c,Zi),Sn.subVectors(di,ui),En.subVectors(fi,di),zn.subVectors(ui,fi);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-zn.z,zn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,zn.z,0,-zn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-zn.y,zn.x,0];return!Dr(e,ui,di,fi,vs)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,ui,di,fi,vs))?!1:(_s.crossVectors(Sn,En),e=[_s.x,_s.y,_s.z],Dr(e,ui,di,fi,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},an=[new T,new T,new T,new T,new T,new T,new T,new T],ke=new T,Cs=new ti,ui=new T,di=new T,fi=new T,Sn=new T,En=new T,zn=new T,Zi=new T,vs=new T,_s=new T,kn=new T;function Dr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){kn.fromArray(s,r);let o=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Kh=new ti,Qi=new T,Nr=new T,Vi=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);let e=Qi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Nr)),this.expandByPoint(Qi.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},on=new T,Br=new T,ys=new T,wn=new T,Fr=new T,Is=new T,Or=new T,tr=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Br.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Br);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ys),o=wn.dot(this.direction),l=-wn.dot(ys),c=wn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let C=1/h;u*=C,d*=C,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Br).addScaledVector(ys,d),p}intersectSphere(t,e){on.subVectors(t.center,this.origin);let n=on.dot(this.direction),i=on.dot(on)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,r){Fr.subVectors(e,t),Is.subVectors(n,t),Or.crossVectors(Fr,Is);let a=this.direction.dot(Or),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);let l=o*this.direction.dot(Is.crossVectors(wn,Is));if(l<0)return null;let c=o*this.direction.dot(Fr.cross(wn));if(c<0||l+c>a)return null;let h=-o*wn.dot(Or);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,m,C,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,m,C,g)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,m,C,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=C,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,C=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=d-C*c,e[9]=-o*l,e[2]=C-d*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,m=c*h,C=c*u;e[0]=d+C*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=C+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,m=c*h,C=c*u;e[0]=d-C*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=C-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,C=o*u;e[0]=l*h,e[4]=m*c-p,e[8]=d*c+C,e[1]=l*u,e[5]=C*c+d,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,m=o*l,C=o*c;e[0]=l*h,e[4]=C-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+m,e[10]=d-C*u}else if(t.order==="XZY"){let d=a*l,p=a*c,m=o*l,C=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+C,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=C*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zh,t,Qh)}lookAt(t,e,n){let i=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),Tn.crossVectors(n,Pe),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),Tn.crossVectors(n,Pe)),Tn.normalize(),Ms.crossVectors(Pe,Tn),i[0]=Tn.x,i[4]=Ms.x,i[8]=Pe.x,i[1]=Tn.y,i[5]=Ms.y,i[9]=Pe.y,i[2]=Tn.z,i[6]=Ms.z,i[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],C=n[6],g=n[10],f=n[14],b=n[3],I=n[7],_=n[11],U=n[15],E=i[0],w=i[4],V=i[8],y=i[12],A=i[1],S=i[5],N=i[9],D=i[13],z=i[2],K=i[6],G=i[10],Q=i[14],H=i[3],st=i[7],ht=i[11],vt=i[15];return r[0]=a*E+o*A+l*z+c*H,r[4]=a*w+o*S+l*K+c*st,r[8]=a*V+o*N+l*G+c*ht,r[12]=a*y+o*D+l*Q+c*vt,r[1]=h*E+u*A+d*z+p*H,r[5]=h*w+u*S+d*K+p*st,r[9]=h*V+u*N+d*G+p*ht,r[13]=h*y+u*D+d*Q+p*vt,r[2]=m*E+C*A+g*z+f*H,r[6]=m*w+C*S+g*K+f*st,r[10]=m*V+C*N+g*G+f*ht,r[14]=m*y+C*D+g*Q+f*vt,r[3]=b*E+I*A+_*z+U*H,r[7]=b*w+I*S+_*K+U*st,r[11]=b*V+I*N+_*G+U*ht,r[15]=b*y+I*D+_*Q+U*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],C=t[7],g=t[11],f=t[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+C*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],C=t[13],g=t[14],f=t[15],b=u*g*c-C*d*c+C*l*p-o*g*p-u*l*f+o*d*f,I=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,_=h*C*c-m*u*c+m*o*p-a*C*p-h*o*f+a*u*f,U=m*u*l-h*C*l-m*o*d+a*C*d+h*o*g-a*u*g,E=e*b+n*I+i*_+r*U;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=b*w,t[1]=(C*d*r-u*g*r-C*i*p+n*g*p+u*i*f-n*d*f)*w,t[2]=(o*g*r-C*l*r+C*i*c-n*g*c-o*i*f+n*l*f)*w,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*w,t[4]=I*w,t[5]=(h*g*r-m*d*r+m*i*p-e*g*p-h*i*f+e*d*f)*w,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*f-e*l*f)*w,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*w,t[8]=_*w,t[9]=(m*u*r-h*C*r-m*n*p+e*C*p+h*n*f-e*u*f)*w,t[10]=(a*C*r-m*o*r+m*n*c-e*C*c-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*w,t[12]=U*w,t[13]=(h*C*i-m*u*i+m*n*d-e*C*d-h*n*g+e*u*g)*w,t[14]=(m*o*i-a*C*i-m*n*l+e*C*l+a*n*g-e*o*g)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,C=a*h,g=a*u,f=o*u,b=l*c,I=l*h,_=l*u,U=n.x,E=n.y,w=n.z;return i[0]=(1-(C+f))*U,i[1]=(p+_)*U,i[2]=(m-I)*U,i[3]=0,i[4]=(p-_)*E,i[5]=(1-(d+f))*E,i[6]=(g+b)*E,i[7]=0,i[8]=(m+I)*w,i[9]=(g-b)*w,i[10]=(1-(d+C))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=pi.set(i[0],i[1],i[2]).length(),a=pi.set(i[4],i[5],i[6]).length(),o=pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],He.copy(this);let c=1/r,h=1/a,u=1/o;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,m;if(o===gn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Zs)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=gn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h,m,C;if(o===gn)m=(a+r)*u,C=-2*u;else if(o===Zs)m=r*u,C=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=C,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new T,He=new le,Zh=new T(0,0,0),Qh=new T(1,1,1),Tn=new T,Ms=new T,Pe=new T,Ml=new le,bl=new Bn,Ye=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ye.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jh=0,Sl=new T,gi=new Bn,ln=new le,bs=new T,ji=new T,$h=new T,tu=new Bn,El=new T(1,0,0),wl=new T(0,1,0),Tl=new T(0,0,1),Rl={type:"added"},eu={type:"removed"},mi={type:"childadded",child:null},zr={type:"childremoved",child:null},Me=class s extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new T,e=new Ye,n=new Bn,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Lt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Tl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(ji,bs,this.up):ln.lookAt(bs,ji,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(ln),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rl),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eu),zr.child=t,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rl),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,$h),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Me.DEFAULT_UP=new T(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=new T,cn=new T,kr=new T,hn=new T,Ai=new T,xi=new T,ql=new T,Hr=new T,Gr=new T,Wr=new T,Xr=new he,Yr=new he,Jr=new he,Kn=class s{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ge.subVectors(t,e),i.cross(Ge);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ge.subVectors(i,e),cn.subVectors(n,e),kr.subVectors(t,e);let a=Ge.dot(Ge),o=Ge.dot(cn),l=Ge.dot(kr),c=cn.dot(cn),h=cn.dot(kr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Xr.setScalar(0),Yr.setScalar(0),Jr.setScalar(0),Xr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,n),Jr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Xr,r.x),a.addScaledVector(Yr,r.y),a.addScaledVector(Jr,r.z),a}static isFrontFacing(t,e,n,i){return Ge.subVectors(n,e),cn.subVectors(t,e),Ge.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ge.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Ai.subVectors(i,n),xi.subVectors(r,n),Hr.subVectors(t,n);let l=Ai.dot(Hr),c=xi.dot(Hr);if(l<=0&&c<=0)return e.copy(n);Gr.subVectors(t,i);let h=Ai.dot(Gr),u=xi.dot(Gr);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ai,a);Wr.subVectors(t,r);let p=Ai.dot(Wr),m=xi.dot(Wr);if(m>=0&&p<=m)return e.copy(r);let C=p*c-l*m;if(C<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(xi,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return ql.subVectors(r,i),o=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(ql,o);let f=1/(g+C+d);return a=C*f,o=d*f,e.copy(n).addScaledVector(Ai,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Kr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=kh(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kr(a,r,t+1/3),this.g=Kr(a,r,t),this.b=Kr(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=Ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Wt.fromWorkingColorSpace(_e.copy(this),t),Math.round(Ie(_e.r*255,0,255))*65536+Math.round(Ie(_e.g*255,0,255))*256+Math.round(Ie(_e.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(_e.copy(this),e);let n=_e.r,i=_e.g,r=_e.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=ye){Wt.fromWorkingColorSpace(_e.copy(this),t);let e=_e.r,n=_e.g,i=_e.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ss);let n=Vr(Rn.h,Ss.h,e),i=Vr(Rn.s,Ss.s,e),r=Vr(Rn.l,Ss.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_e=new wt;wt.NAMES=Ec;var nu=0,Cn=class extends Nn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ds(),this.name="",this.blending=Ln,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ln&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pi=class extends Cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new T,Es=new _t,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gl&&(t.usage=this.usage),t}};var nr=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},iu=0,Be=new le,Zr=new Me,Ci=new T,Le=new ti,$i=new ti,me=new T,Ae=class s extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sc(t)?ir:nr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Zr.lookAt(t),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(Le.min,$i.min),Le.expandByPoint(me),me.addVectors(Le.max,$i.max),Le.expandByPoint(me)):(Le.expandByPoint($i.min),Le.expandByPoint($i.max))}Le.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)me.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(t,c),me.add(Ci)),i=Math.max(i,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let V=0;V<n.count;V++)o[V]=new T,l[V]=new T;let c=new T,h=new T,u=new T,d=new _t,p=new _t,m=new _t,C=new T,g=new T;function f(V,y,A){c.fromBufferAttribute(n,V),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,A),d.fromBufferAttribute(r,V),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,A),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let S=1/(p.x*m.y-m.x*p.y);isFinite(S)&&(C.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(S),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(S),o[V].add(C),o[y].add(C),o[A].add(C),l[V].add(g),l[y].add(g),l[A].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let V=0,y=b.length;V<y;++V){let A=b[V],S=A.start,N=A.count;for(let D=S,z=S+N;D<z;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let I=new T,_=new T,U=new T,E=new T;function w(V){U.fromBufferAttribute(i,V),E.copy(U);let y=o[V];I.copy(y),I.sub(U.multiplyScalar(U.dot(y))).normalize(),_.crossVectors(E,y);let S=_.dot(l[V])<0?-1:1;a.setXYZW(V,I.x,I.y,I.z,S)}for(let V=0,y=b.length;V<y;++V){let A=b[V],S=A.start,N=A.count;for(let D=S,z=S+N;D<z;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),C=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,C),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,C),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(C,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let C=0,g=l.length;C<g;C++){o.isInterleavedBufferAttribute?p=l[C]*o.data.stride+o.offset:p=l[C]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vl=new le,Hn=new tr,ws=new Vi,Pl=new T,Ts=new T,Rs=new T,qs=new T,Qr=new T,Vs=new T,Ll=new T,Ps=new T,Yt=class extends Me{constructor(t=new Ae,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Qr.fromBufferAttribute(u,t),a?Vs.addScaledVector(Qr,h):Vs.addScaledVector(Qr.sub(e),h))}e.add(Vs)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(ws.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(ws,Pl)===null||Hn.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,C=d.length;m<C;m++){let g=d[m],f=a[g.materialIndex],b=Math.max(g.start,p.start),I=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=b,U=I;_<U;_+=3){let E=o.getX(_),w=o.getX(_+1),V=o.getX(_+2);i=Ls(this,f,t,n,c,h,u,E,w,V),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),C=Math.min(o.count,p.start+p.count);for(let g=m,f=C;g<f;g+=3){let b=o.getX(g),I=o.getX(g+1),_=o.getX(g+2);i=Ls(this,a,t,n,c,h,u,b,I,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,C=d.length;m<C;m++){let g=d[m],f=a[g.materialIndex],b=Math.max(g.start,p.start),I=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=b,U=I;_<U;_+=3){let E=_,w=_+1,V=_+2;i=Ls(this,f,t,n,c,h,u,E,w,V),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),C=Math.min(l.count,p.start+p.count);for(let g=m,f=C;g<f;g+=3){let b=g,I=g+1,_=g+2;i=Ls(this,a,t,n,c,h,u,b,I,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function su(s,t,e,n,i,r,a,o){let l;if(t.side===Te?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Dn,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:s}}function Ls(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ts),s.getVertexPosition(l,Rs),s.getVertexPosition(c,qs);let h=su(s,t,e,n,Ts,Rs,qs,Ll);if(h){let u=new T;Kn.getBarycoord(Ll,Ts,Rs,qs,u),i&&(h.uv=Kn.getInterpolatedAttribute(i,o,l,c,u,new _t)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,o,l,c,u,new _t)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new T,materialIndex:0};Kn.getNormal(Ts,Rs,qs,d.normal),h.face=d,h.barycoord=u}return h}var vn=class s extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function m(C,g,f,b,I,_,U,E,w,V,y){let A=_/w,S=U/V,N=_/2,D=U/2,z=E/2,K=w+1,G=V+1,Q=0,H=0,st=new T;for(let ht=0;ht<G;ht++){let vt=ht*S-D;for(let Nt=0;Nt<K;Nt++){let jt=Nt*A-N;st[C]=jt*b,st[g]=vt*I,st[f]=z,c.push(st.x,st.y,st.z),st[C]=0,st[g]=0,st[f]=E>0?1:-1,h.push(st.x,st.y,st.z),u.push(Nt/w),u.push(1-ht/V),Q+=1}}for(let ht=0;ht<V;ht++)for(let vt=0;vt<w;vt++){let Nt=d+vt+K*ht,jt=d+vt+K*(ht+1),X=d+(vt+1)+K*(ht+1),tt=d+(vt+1)+K*ht;l.push(Nt,jt,tt),l.push(jt,X,tt),H+=6}o.addGroup(p,H,y),p+=H,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Li(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(s){let t={};for(let e=0;e<s.length;e++){let n=Li(s[e]);for(let i in n)t[i]=n[i]}return t}function ru(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function wc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var au={clone:Li,merge:be},ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ou,this.fragmentShader=lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sr=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new T,Ul=new _t,Dl=new _t,Se=class extends sr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Ul,Dl),e.subVectors(Dl,Ul)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vi=-90,_i=1,ja=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Se(vi,_i,t,e);i.layers=this.layers,this.add(i);let r=new Se(vi,_i,t,e);r.layers=this.layers,this.add(r);let a=new Se(vi,_i,t,e);a.layers=this.layers,this.add(a);let o=new Se(vi,_i,t,e);o.layers=this.layers,this.add(o);let l=new Se(vi,_i,t,e);l.layers=this.layers,this.add(l);let c=new Se(vi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=C,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},rr=class extends Ue{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$a=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Pn});r.uniforms.tEquirect.value=e;let a=new Yt(i,r),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=tn),new ja(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},jr=new T,cu=new T,hu=new Lt,dn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=jr.subVectors(n,e).cross(cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hu.getNormalMatrix(t),i=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new Vi,Us=new T,os=class{constructor(t=new dn,e=new dn,n=new dn,i=new dn,r=new dn,a=new dn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],m=i[9],C=i[10],g=i[11],f=i[12],b=i[13],I=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,g-p,_-f).normalize(),n[1].setComponents(l+r,d+c,g+p,_+f).normalize(),n[2].setComponents(l+a,d+h,g+m,_+b).normalize(),n[3].setComponents(l-a,d-h,g-m,_-b).normalize(),n[4].setComponents(l-o,d-u,g-C,_-I).normalize(),e===gn)n[5].setComponents(l+o,d+u,g+C,_+I).normalize();else if(e===Zs)n[5].setComponents(o,u,C,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Us.x=i.normal.x>0?t.max.x:t.min.x,Us.y=i.normal.y>0?t.max.y:t.min.y,Us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uu(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],C=u[p];C.start<=m.start+m.count+1?m.count=Math.max(m.count,C.start+C.count-m.start):(++d,u[d]=C)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let C=u[p];s.bufferSubData(c,C.start*h.BYTES_PER_ELEMENT,h,C.start,C.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ui=class s extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],m=[],C=[],g=[];for(let f=0;f<h;f++){let b=f*d-a;for(let I=0;I<c;I++){let _=I*u-r;m.push(_,-b,0),C.push(0,0,1),g.push(I/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let I=b+c*f,_=b+c*(f+1),U=b+1+c*(f+1),E=b+1+c*f;p.push(I,_,E),p.push(_,U,E)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(C,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fu=`#ifdef USE_ALPHAHASH
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
#endif`,pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
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
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vu=`#ifdef USE_BATCHING
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
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bu=`#ifdef USE_IRIDESCENCE
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
#endif`,Su=`#ifdef USE_BUMPMAP
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uu=`#define PI 3.141592653589793
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
} // validated`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nu=`vec3 transformedNormal = objectNormal;
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
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$u=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
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
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
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
#endif`,hd=`struct PhysicalMaterial {
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
}`,ud=`
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
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
#endif`,wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ld=`#ifdef USE_NORMALMAP
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
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zd=`float getShadowMask() {
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
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,Cf=`#if DEPTH_PACKING == 3200
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
}`,vf=`#define DISTANCE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,Ef=`uniform vec3 diffuse;
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
}`,wf=`#define LAMBERT
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
}`,Tf=`#define LAMBERT
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
}`,qf=`#define MATCAP
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
}`,Vf=`#define NORMAL
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
}`,Pf=`#define NORMAL
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
}`,Lf=`#define PHONG
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
}`,Uf=`#define PHONG
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
}`,Df=`#define STANDARD
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
}`,Nf=`#define STANDARD
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
}`,Bf=`#define TOON
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
}`,Ff=`#define TOON
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
}`,Of=`uniform float size;
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Hf=`uniform vec3 color;
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
}`,Gf=`uniform float rotation;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:du,alphahash_pars_fragment:fu,alphamap_fragment:pu,alphamap_pars_fragment:gu,alphatest_fragment:mu,alphatest_pars_fragment:Au,aomap_fragment:xu,aomap_pars_fragment:Cu,batching_pars_vertex:vu,batching_vertex:_u,begin_vertex:yu,beginnormal_vertex:Iu,bsdfs:Mu,iridescence_fragment:bu,bumpmap_pars_fragment:Su,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Ru,color_fragment:qu,color_pars_fragment:Vu,color_pars_vertex:Pu,color_vertex:Lu,common:Uu,cube_uv_reflection_fragment:Du,defaultnormal_vertex:Nu,displacementmap_pars_vertex:Bu,displacementmap_vertex:Fu,emissivemap_fragment:Ou,emissivemap_pars_fragment:zu,colorspace_fragment:ku,colorspace_pars_fragment:Hu,envmap_fragment:Gu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:sd,envmap_vertex:Ju,fog_vertex:Ku,fog_pars_vertex:Zu,fog_fragment:Qu,fog_pars_fragment:ju,gradientmap_pars_fragment:$u,lightmap_pars_fragment:td,lights_lambert_fragment:ed,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:rd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:hd,lights_fragment_begin:ud,lights_fragment_maps:dd,lights_fragment_end:fd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:Ad,map_fragment:xd,map_pars_fragment:Cd,map_particle_fragment:vd,map_particle_pars_fragment:_d,metalnessmap_fragment:yd,metalnessmap_pars_fragment:Id,morphinstance_vertex:Md,morphcolor_vertex:bd,morphnormal_vertex:Sd,morphtarget_pars_vertex:Ed,morphtarget_vertex:wd,normal_fragment_begin:Td,normal_fragment_maps:Rd,normal_pars_fragment:qd,normal_pars_vertex:Vd,normal_vertex:Pd,normalmap_pars_fragment:Ld,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Bd,opaque_fragment:Fd,packing:Od,premultiplied_alpha_fragment:zd,project_vertex:kd,dithering_fragment:Hd,dithering_pars_fragment:Gd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Kd,shadowmask_pars_fragment:Zd,skinbase_vertex:Qd,skinning_pars_vertex:jd,skinning_vertex:$d,skinnormal_vertex:tf,specularmap_fragment:ef,specularmap_pars_fragment:nf,tonemapping_fragment:sf,tonemapping_pars_fragment:rf,transmission_fragment:af,transmission_pars_fragment:of,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,worldpos_vertex:uf,background_vert:df,background_frag:ff,backgroundCube_vert:pf,backgroundCube_frag:gf,cube_vert:mf,cube_frag:Af,depth_vert:xf,depth_frag:Cf,distanceRGBA_vert:vf,distanceRGBA_frag:_f,equirect_vert:yf,equirect_frag:If,linedashed_vert:Mf,linedashed_frag:bf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:wf,meshlambert_frag:Tf,meshmatcap_vert:Rf,meshmatcap_frag:qf,meshnormal_vert:Vf,meshnormal_frag:Pf,meshphong_vert:Lf,meshphong_frag:Uf,meshphysical_vert:Df,meshphysical_frag:Nf,meshtoon_vert:Bf,meshtoon_frag:Ff,points_vert:Of,points_frag:zf,shadow_vert:kf,shadow_frag:Hf,sprite_vert:Gf,sprite_frag:Wf},nt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},$e={basic:{uniforms:be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:be([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:be([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:be([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:be([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:be([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:be([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:be([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:be([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:be([nt.common,nt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:be([nt.lights,nt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};$e.physical={uniforms:be([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var Ds={r:0,b:0,g:0},Wn=new Ye,Xf=new le;function Yf(s,t,e,n,i,r,a){let o=new wt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(b){let I=b.isScene===!0?b.background:null;return I&&I.isTexture&&(I=(b.backgroundBlurriness>0?e:t).get(I)),I}function C(b){let I=!1,_=m(b);_===null?f(o,l):_&&_.isColor&&(f(_,1),I=!0);let U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,I){let _=m(I);_&&(_.isCubeTexture||_.mapping===yr)?(h===void 0&&(h=new Yt(new vn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Li($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wn.copy(I.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(Wn)),h.material.toneMapped=Wt.getTransfer(_.colorSpace)!==Qt,(u!==_||d!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Yt(new Ui(2,2),new en({name:"BackgroundMaterial",uniforms:Li($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(_.colorSpace)!==Qt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,I){b.getRGB(Ds,wc(s)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,I,a)}return{getClearColor:function(){return o},setClearColor:function(b,I=1){o.set(b),l=I,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:C,addToRenderList:g}}function Jf(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(A,S,N,D,z){let K=!1,G=u(D,N,S);r!==G&&(r=G,c(r.object)),K=p(A,D,N,z),K&&m(A,D,N,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(A,S,N,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(A){return s.bindVertexArray(A)}function h(A){return s.deleteVertexArray(A)}function u(A,S,N){let D=N.wireframe===!0,z=n[A.id];z===void 0&&(z={},n[A.id]=z);let K=z[S.id];K===void 0&&(K={},z[S.id]=K);let G=K[D];return G===void 0&&(G=d(l()),K[D]=G),G}function d(A){let S=[],N=[],D=[];for(let z=0;z<e;z++)S[z]=0,N[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:D,object:A,attributes:{},index:null}}function p(A,S,N,D){let z=r.attributes,K=S.attributes,G=0,Q=N.getAttributes();for(let H in Q)if(Q[H].location>=0){let ht=z[H],vt=K[H];if(vt===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(vt=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(vt=A.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function m(A,S,N,D){let z={},K=S.attributes,G=0,Q=N.getAttributes();for(let H in Q)if(Q[H].location>=0){let ht=K[H];ht===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(ht=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(ht=A.instanceColor));let vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),z[H]=vt,G++}r.attributes=z,r.attributesNum=G,r.index=D}function C(){let A=r.newAttributes;for(let S=0,N=A.length;S<N;S++)A[S]=0}function g(A){f(A,0)}function f(A,S){let N=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;N[A]=1,D[A]===0&&(s.enableVertexAttribArray(A),D[A]=1),z[A]!==S&&(s.vertexAttribDivisor(A,S),z[A]=S)}function b(){let A=r.newAttributes,S=r.enabledAttributes;for(let N=0,D=S.length;N<D;N++)S[N]!==A[N]&&(s.disableVertexAttribArray(N),S[N]=0)}function I(A,S,N,D,z,K,G){G===!0?s.vertexAttribIPointer(A,S,N,z,K):s.vertexAttribPointer(A,S,N,D,z,K)}function _(A,S,N,D){C();let z=D.attributes,K=N.getAttributes(),G=S.defaultAttributeValues;for(let Q in K){let H=K[Q];if(H.location>=0){let st=z[Q];if(st===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(st=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(st=A.instanceColor)),st!==void 0){let ht=st.normalized,vt=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;let jt=Nt.buffer,X=Nt.type,tt=Nt.bytesPerElement,At=X===s.INT||X===s.UNSIGNED_INT||st.gpuType===Lo;if(st.isInterleavedBufferAttribute){let rt=st.data,bt=rt.stride,qt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)f(H.location+Bt,rt.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)g(H.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Bt=0;Bt<H.locationSize;Bt++)I(H.location+Bt,vt/H.locationSize,X,ht,bt*tt,(qt+vt/H.locationSize*Bt)*tt,At)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)f(H.location+rt,st.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<H.locationSize;rt++)g(H.location+rt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let rt=0;rt<H.locationSize;rt++)I(H.location+rt,vt/H.locationSize,X,ht,vt*tt,vt/H.locationSize*rt*tt,At)}}else if(G!==void 0){let ht=G[Q];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(H.location,ht);break;case 3:s.vertexAttrib3fv(H.location,ht);break;case 4:s.vertexAttrib4fv(H.location,ht);break;default:s.vertexAttrib1fv(H.location,ht)}}}}b()}function U(){V();for(let A in n){let S=n[A];for(let N in S){let D=S[N];for(let z in D)h(D[z].object),delete D[z];delete S[N]}delete n[A]}}function E(A){if(n[A.id]===void 0)return;let S=n[A.id];for(let N in S){let D=S[N];for(let z in D)h(D[z].object),delete D[z];delete S[N]}delete n[A.id]}function w(A){for(let S in n){let N=n[S];if(N[A.id]===void 0)continue;let D=N[A.id];for(let z in D)h(D[z].object),delete D[z];delete N[A.id]}}function V(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:V,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:C,enableAttribute:g,disableUnusedAttributes:b}}function Kf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let C=0;C<u;C++)m+=h[C]*d[C];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==We&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let V=w===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==An&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==pn&&!V)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:C,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:_,vertexTextures:U,maxSamples:E}}function Qf(s){let t=this,e=null,n=0,i=!1,r=!1,a=new dn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,C=u.clipIntersection,g=u.clipShadows,f=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,I=b*4,_=f.clippingState||null;l.value=_,_=h(m,d,I,p);for(let U=0;U!==I;++U)_[U]=e[U];f.clippingState=_,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let C=u!==null?u.length:0,g=null;if(C!==0){if(g=l.value,m!==!0||g===null){let f=p+C*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<f)&&(g=new Float32Array(f));for(let I=0,_=p;I!==C;++I,_+=4)a.copy(u[I]).applyMatrix4(b,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,g}}function jf(s){let t=new WeakMap;function e(a,o){return o===xa?a.mapping=wi:o===Ca&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===xa||o===Ca)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new $a(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ar=class extends sr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ii=4,Nl=[.125,.215,.35,.446,.526,.582],Zn=20,$r=new ar,Bl=new wt,ta=null,ea=0,na=0,ia=!1,Yn=(1+Math.sqrt(5))/2,yi=1/Yn,Fl=[new T(-Yn,yi,0),new T(Yn,yi,0),new T(-yi,0,Yn),new T(yi,0,Yn),new T(0,Yn,-yi),new T(0,Yn,yi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:us,format:We,colorSpace:zi,depthBuffer:!1},i=Ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$f(r)),this._blurMaterial=tp(r,t,e)}return i}_compileMaterial(t){let e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,n,i){let o=new Se(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bl),h.toneMapping=Un,h.autoClear=!1;let p=new Pi({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),m=new Yt(new vn,p),C=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,C=!0):(p.color.copy(Bl),C=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let I=this._cubeSize;Ns(i,b*I,f>2?I:0,I,I),h.setRenderTarget(i),C&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===wi||t.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$r)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fl[(i-r-1)%Fl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Yt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zn-1),C=r/m,g=isFinite(r)?1+Math.floor(h*C):Zn;g>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zn}`);let f=[],b=0;for(let w=0;w<Zn;++w){let V=w/C,y=Math.exp(-V*V/2);f.push(y),w===0?b+=y:w<g&&(b+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:I}=this;d.dTheta.value=m,d.mipInt.value=I-n;let _=this._sizeLods[i],U=3*_*(i>I-Ii?i-I+Ii:0),E=4*(this._cubeSize-_);Ns(e,U,E,3*_,2*_),l.setRenderTarget(e),l.render(u,$r)}};function $f(s){let t=[],e=[],n=[],i=s,r=s-Ii+1+Nl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ii?l=Nl[a-s+Ii-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,C=3,g=2,f=1,b=new Float32Array(C*m*p),I=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let E=0;E<p;E++){let w=E%3*2/3-1,V=E>2?0:-1,y=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];b.set(y,C*m*E),I.set(d,g*m*E);let A=[E,E,E,E,E,E];_.set(A,f*m*E)}let U=new Ae;U.setAttribute("position",new Re(b,C)),U.setAttribute("uv",new Re(I,g)),U.setAttribute("faceIndex",new Re(_,f)),t.push(U),i>Ii&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ol(s,t,e){let n=new xn(s,t,e);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tp(s,t,e){let n=new Float32Array(Zn),i=new T(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function zl(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function kl(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function ep(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===xa||l===Ca,h=l===wi||l===Ti;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new or(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new or(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function np(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ip(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let C=d.morphAttributes[m];for(let g=0,f=C.length;g<f;g++)t.remove(C[g])}d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let C=p[m];for(let g=0,f=C.length;g<f;g++)t.update(C[g],s.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,m=u.attributes.position,C=0;if(p!==null){let b=p.array;C=p.version;for(let I=0,_=b.length;I<_;I+=3){let U=b[I+0],E=b[I+1],w=b[I+2];d.push(U,E,E,w,w,U)}}else if(m!==void 0){let b=m.array;C=m.version;for(let I=0,_=b.length/3-1;I<_;I+=3){let U=I+0,E=I+1,w=I+2;d.push(U,E,E,w,w,U)}}else return;let g=new(Sc(d)?ir:nr)(d,1);g.version=C;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sp(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,C){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],C[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,C,0,m);let f=0;for(let b=0;b<m;b++)f+=p[b]*C[b];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rp(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ap(s,t,e){let n=new WeakMap,i=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,C=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],I=0;p===!0&&(I=1),m===!0&&(I=2),C===!0&&(I=3);let _=o.attributes.position.count*I,U=1;_>t.maxTextureSize&&(U=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*U*4*u),w=new $s(E,_,U,u);w.type=pn,w.needsUpdate=!0;let V=I*4;for(let A=0;A<u;A++){let S=g[A],N=f[A],D=b[A],z=_*U*4*A;for(let K=0;K<S.count;K++){let G=K*V;p===!0&&(i.fromBufferAttribute(S,K),E[z+G+0]=i.x,E[z+G+1]=i.y,E[z+G+2]=i.z,E[z+G+3]=0),m===!0&&(i.fromBufferAttribute(N,K),E[z+G+4]=i.x,E[z+G+5]=i.y,E[z+G+6]=i.z,E[z+G+7]=0),C===!0&&(i.fromBufferAttribute(D,K),E[z+G+8]=i.x,E[z+G+9]=i.y,E[z+G+10]=i.z,E[z+G+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new _t(_,U)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let C=0;C<c.length;C++)p+=c[C];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function op(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var lr=class extends Ue{constructor(t,e,n,i,r,a,o,l,c,h=Mi){if(h!==Mi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=$n),n===void 0&&h===qi&&(n=Ri),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rc=new Ue,Hl=new lr(1,1),qc=new $s,Vc=new Qa,Pc=new rr,Gl=[],Wl=[],Xl=new Float32Array(16),Yl=new Float32Array(9),Jl=new Float32Array(4);function ki(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Gl[i];if(r===void 0&&(r=new Float32Array(i),Gl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Mr(s,t){let e=Wl[t];e===void 0&&(e=new Int32Array(t),Wl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2fv(this.addr,t),pe(e,t)}}function hp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;s.uniform3fv(this.addr,t),pe(e,t)}}function up(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4fv(this.addr,t),pe(e,t)}}function dp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Jl.set(n),s.uniformMatrix2fv(this.addr,!1,Jl),pe(e,n)}}function fp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Yl.set(n),s.uniformMatrix3fv(this.addr,!1,Yl),pe(e,n)}}function pp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Xl.set(n),s.uniformMatrix4fv(this.addr,!1,Xl),pe(e,n)}}function gp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2iv(this.addr,t),pe(e,t)}}function Ap(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3iv(this.addr,t),pe(e,t)}}function xp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4iv(this.addr,t),pe(e,t)}}function Cp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function vp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2uiv(this.addr,t),pe(e,t)}}function _p(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3uiv(this.addr,t),pe(e,t)}}function yp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4uiv(this.addr,t),pe(e,t)}}function Ip(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hl.compareFunction=bc,r=Hl):r=Rc,e.setTexture2D(t||r,i)}function Mp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vc,i)}function bp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pc,i)}function Sp(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qc,i)}function Ep(s){switch(s){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return gp;case 35667:case 35671:return mp;case 35668:case 35672:return Ap;case 35669:case 35673:return xp;case 5125:return Cp;case 36294:return vp;case 36295:return _p;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Sp}}function wp(s,t){s.uniform1fv(this.addr,t)}function Tp(s,t){let e=ki(t,this.size,2);s.uniform2fv(this.addr,e)}function Rp(s,t){let e=ki(t,this.size,3);s.uniform3fv(this.addr,e)}function qp(s,t){let e=ki(t,this.size,4);s.uniform4fv(this.addr,e)}function Vp(s,t){let e=ki(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pp(s,t){let e=ki(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Lp(s,t){let e=ki(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Up(s,t){s.uniform1iv(this.addr,t)}function Dp(s,t){s.uniform2iv(this.addr,t)}function Np(s,t){s.uniform3iv(this.addr,t)}function Bp(s,t){s.uniform4iv(this.addr,t)}function Fp(s,t){s.uniform1uiv(this.addr,t)}function Op(s,t){s.uniform2uiv(this.addr,t)}function zp(s,t){s.uniform3uiv(this.addr,t)}function kp(s,t){s.uniform4uiv(this.addr,t)}function Hp(s,t,e){let n=this.cache,i=t.length,r=Mr(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Rc,r[a])}function Gp(s,t,e){let n=this.cache,i=t.length,r=Mr(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Vc,r[a])}function Wp(s,t,e){let n=this.cache,i=t.length,r=Mr(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Pc,r[a])}function Xp(s,t,e){let n=this.cache,i=t.length,r=Mr(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||qc,r[a])}function Yp(s){switch(s){case 5126:return wp;case 35664:return Tp;case 35665:return Rp;case 35666:return qp;case 35674:return Vp;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Up;case 35667:case 35671:return Dp;case 35668:case 35672:return Np;case 35669:case 35673:return Bp;case 5125:return Fp;case 36294:return Op;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}var to=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ep(e.type)}},eo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yp(e.type)}},no=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},sa=/(\w+)(\])?(\[|\.)?/g;function Kl(s,t){s.seq.push(t),s.map[t.id]=t}function Jp(s,t,e){let n=s.name,i=n.length;for(sa.lastIndex=0;;){let r=sa.exec(n),a=sa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Kl(e,c===void 0?new to(o,s,t):new eo(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new no(o),Kl(e,u)),e=u}}}var Si=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Jp(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Zl(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Kp=37297,Zp=0;function Qp(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ql=new Lt;function jp(s){Wt._getMatrix(Ql,Wt.workingColorSpace,s);let t=`mat3( ${Ql.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Ir:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function jl(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Qp(s.getShaderSource(t),a)}else return i}function $p(s,t){let e=jp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tg(s,t){let e;switch(t){case Mh:e="Linear";break;case bh:e="Reinhard";break;case Sh:e="Cineon";break;case Eh:e="ACESFilmic";break;case Th:e="AgX";break;case Rh:e="Neutral";break;case wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bs=new T;function eg(){Wt.getLuminanceCoefficients(Bs);let s=Bs.x.toFixed(4),t=Bs.y.toFixed(4),e=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ng(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function ig(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function es(s){return s!==""}function $l(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(s){return s.replace(rg,og)}var ag=new Map;function og(s,t){let e=Dt[t];if(e===void 0){let n=ag.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}var lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(s){return s.replace(lg,cg)}function cg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function hg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function ug(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wi:case Ti:t="ENVMAP_TYPE_CUBE";break;case yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function fg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _r:t="ENVMAP_BLENDING_MULTIPLY";break;case yh:t="ENVMAP_BLENDING_MIX";break;case Ih:t="ENVMAP_BLENDING_ADD";break}return t}function pg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=hg(e),c=ug(e),h=dg(e),u=fg(e),d=pg(e),p=ng(e),m=ig(r),C=i.createProgram(),g,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(es).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(es).join(`
`),f.length>0&&(f+=`
`)):(g=[nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),f=[nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Un?tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,$p("linearToOutputTexel",e.outputColorSpace),eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=io(a),a=$l(a,e),a=tc(a,e),o=io(o),o=$l(o,e),o=tc(o,e),a=ec(a),o=ec(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let I=b+g+a,_=b+f+o,U=Zl(i,i.VERTEX_SHADER,I),E=Zl(i,i.FRAGMENT_SHADER,_);i.attachShader(C,U),i.attachShader(C,E),e.index0AttributeName!==void 0?i.bindAttribLocation(C,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(C,0,"position"),i.linkProgram(C);function w(S){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(C).trim(),D=i.getShaderInfoLog(U).trim(),z=i.getShaderInfoLog(E).trim(),K=!0,G=!0;if(i.getProgramParameter(C,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,C,U,E);else{let Q=jl(i,U,"vertex"),H=jl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(C,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+Q+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||z==="")&&(G=!1);G&&(S.diagnostics={runnable:K,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:z,prefix:f}})}i.deleteShader(U),i.deleteShader(E),V=new Si(i,C),y=sg(i,C)}let V;this.getUniforms=function(){return V===void 0&&w(this),V};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(C,Kp)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zp++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=E,this}var mg=0,so=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ro(t),e.set(t,n)),n}},ro=class{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}};function Ag(s,t,e,n,i,r,a){let o=new er,l=new so,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,A,S,N,D){let z=N.fog,K=D.geometry,G=y.isMeshStandardMaterial?N.environment:null,Q=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),H=Q&&Q.mapping===yr?Q.image.height:null,st=m[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vt=ht!==void 0?ht.length:0,Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let jt,X,tt,At;if(st){let Zt=$e[st];jt=Zt.vertexShader,X=Zt.fragmentShader}else jt=y.vertexShader,X=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),At=l.getFragmentShaderID(y);let rt=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),qt=D.isInstancedMesh===!0,Bt=D.isBatchedMesh===!0,oe=!!y.map,Ht=!!y.matcap,ue=!!Q,L=!!y.aoMap,De=!!y.lightMap,Ot=!!y.bumpMap,zt=!!y.normalMap,It=!!y.displacementMap,ne=!!y.emissiveMap,yt=!!y.metalnessMap,M=!!y.roughnessMap,x=y.anisotropy>0,B=y.clearcoat>0,Y=y.dispersion>0,Z=y.iridescence>0,W=y.sheen>0,xt=y.transmission>0,at=x&&!!y.anisotropyMap,ut=B&&!!y.clearcoatMap,Gt=B&&!!y.clearcoatNormalMap,j=B&&!!y.clearcoatRoughnessMap,dt=Z&&!!y.iridescenceMap,Mt=Z&&!!y.iridescenceThicknessMap,St=W&&!!y.sheenColorMap,ft=W&&!!y.sheenRoughnessMap,kt=!!y.specularMap,Ut=!!y.specularColorMap,te=!!y.specularIntensityMap,R=xt&&!!y.transmissionMap,it=xt&&!!y.thicknessMap,k=!!y.gradientMap,J=!!y.alphaMap,ct=y.alphaTest>0,ot=!!y.alphaHash,Vt=!!y.extensions,ce=Un;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=s.toneMapping);let Ce={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:X,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&D._colorsTexture!==null,instancing:qt,instancingColor:qt&&D.instanceColor!==null,instancingMorph:qt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:zi,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:Ht,envMap:ue,envMapMode:ue&&Q.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:De,bumpMap:Ot,normalMap:zt,displacementMap:d&&It,emissiveMap:ne,normalMapObjectSpace:zt&&y.normalMapType===Lh,normalMapTangentSpace:zt&&y.normalMapType===Oo,metalnessMap:yt,roughnessMap:M,anisotropy:x,anisotropyMap:at,clearcoat:B,clearcoatMap:ut,clearcoatNormalMap:Gt,clearcoatRoughnessMap:j,dispersion:Y,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:St,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:Ut,specularIntensityMap:te,transmission:xt,transmissionMap:R,thicknessMap:it,gradientMap:k,opaque:y.transparent===!1&&y.blending===Ln&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ct,alphaHash:ot,combine:y.combine,mapUv:oe&&C(y.map.channel),aoMapUv:L&&C(y.aoMap.channel),lightMapUv:De&&C(y.lightMap.channel),bumpMapUv:Ot&&C(y.bumpMap.channel),normalMapUv:zt&&C(y.normalMap.channel),displacementMapUv:It&&C(y.displacementMap.channel),emissiveMapUv:ne&&C(y.emissiveMap.channel),metalnessMapUv:yt&&C(y.metalnessMap.channel),roughnessMapUv:M&&C(y.roughnessMap.channel),anisotropyMapUv:at&&C(y.anisotropyMap.channel),clearcoatMapUv:ut&&C(y.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&C(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&C(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&C(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&C(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&C(y.sheenRoughnessMap.channel),specularMapUv:kt&&C(y.specularMap.channel),specularColorMapUv:Ut&&C(y.specularColorMap.channel),specularIntensityMapUv:te&&C(y.specularIntensityMap.channel),transmissionMapUv:R&&C(y.transmissionMap.channel),thicknessMapUv:it&&C(y.thicknessMap.channel),alphaMapUv:J&&C(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(zt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!K.attributes.uv&&(oe||J),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:D.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&S.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===Qt,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===Te,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function f(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)A.push(S),A.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(b(A,y),I(A,y),A.push(s.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function b(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function I(y,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){let A=m[y.type],S;if(A){let N=$e[A];S=au.clone(N.uniforms)}else S=y.uniforms;return S}function U(y,A){let S;for(let N=0,D=h.length;N<D;N++){let z=h[N];if(z.cacheKey===A){S=z,++S.usedTimes;break}}return S===void 0&&(S=new gg(s,A,y,r),h.push(S)),S}function E(y){if(--y.usedTimes===0){let A=h.indexOf(y);h[A]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function V(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:U,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:V}}function xg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Cg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ic(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function sc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,m,C,g){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:C,group:g},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=C,f.group=g),t++,f}function o(u,d,p,m,C,g){let f=a(u,d,p,m,C,g);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,m,C,g){let f=a(u,d,p,m,C,g);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Cg),n.length>1&&n.sort(d||ic),i.length>1&&i.sort(d||ic)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function vg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new sc,s.set(n,[a])):i>=r.length?(a=new sc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function _g(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new wt};break;case"SpotLight":e={position:new T,direction:new T,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function yg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ig=0;function Mg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bg(s){let t=new _g,e=yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let i=new T,r=new le,a=new le;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,m=0,C=0,g=0,f=0,b=0,I=0,_=0,U=0,E=0,w=0;c.sort(Mg);for(let y=0,A=c.length;y<A;y++){let S=c[y],N=S.color,D=S.intensity,z=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*D,u+=N.g*D,d+=N.b*D;else if(S.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(S.sh.coefficients[G],D);w++}else if(S.isDirectionalLight){let G=t.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let Q=S.shadow,H=e.get(S);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=S.shadow.matrix,b++}n.directional[p]=G,p++}else if(S.isSpotLight){let G=t.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(N).multiplyScalar(D),G.distance=z,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,n.spot[C]=G;let Q=S.shadow;if(S.map&&(n.spotLightMap[U]=S.map,U++,Q.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[C]=Q.matrix,S.castShadow){let H=e.get(S);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[C]=H,n.spotShadowMap[C]=K,_++}C++}else if(S.isRectAreaLight){let G=t.get(S);G.color.copy(N).multiplyScalar(D),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=G,g++}else if(S.isPointLight){let G=t.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),G.distance=S.distance,G.decay=S.decay,S.castShadow){let Q=S.shadow,H=e.get(S);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=S.shadow.matrix,I++}n.point[m]=G,m++}else if(S.isHemisphereLight){let G=t.get(S);G.skyColor.copy(S.color).multiplyScalar(D),G.groundColor.copy(S.groundColor).multiplyScalar(D),n.hemi[f]=G,f++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let V=n.hash;(V.directionalLength!==p||V.pointLength!==m||V.spotLength!==C||V.rectAreaLength!==g||V.hemiLength!==f||V.numDirectionalShadows!==b||V.numPointShadows!==I||V.numSpotShadows!==_||V.numSpotMaps!==U||V.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=C,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=_+U-E,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,V.directionalLength=p,V.pointLength=m,V.spotLength=C,V.rectAreaLength=g,V.hemiLength=f,V.numDirectionalShadows=b,V.numPointShadows=I,V.numSpotShadows=_,V.numSpotMaps=U,V.numLightProbes=w,n.version=Ig++)}function l(c,h){let u=0,d=0,p=0,m=0,C=0,g=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let I=c[f];if(I.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(I.matrixWorld),i.setFromMatrixPosition(I.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(I.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(I.matrixWorld),i.setFromMatrixPosition(I.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),p++}else if(I.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(I.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(I.width*.5,0,0),_.halfHeight.set(0,I.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(I.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(g),d++}else if(I.isHemisphereLight){let _=n.hemi[C];_.direction.setFromMatrixPosition(I.matrixWorld),_.direction.transformDirection(g),C++}}}return{setup:o,setupView:l,state:n}}function rc(s){let t=new bg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Sg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new rc(s),t.set(i,[o])):r>=a.length?(o=new rc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ao=class extends Cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oo=class extends Cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
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
}`;function Tg(s,t,e){let n=new os,i=new _t,r=new _t,a=new he,o=new ao({depthPacking:Ph}),l=new oo,c={},h=e.maxTextureSize,u={[Dn]:Te,[Te]:Dn,[fn]:fn},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Eg,fragmentShader:wg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ae;m.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new Yt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let f=this.type;this.render=function(E,w,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let y=s.getRenderTarget(),A=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Pn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=f!==un&&this.type===un,z=f===un&&this.type!==un;for(let K=0,G=E.length;K<G;K++){let Q=E[K],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let st=H.getFrameExtents();if(i.multiply(st),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||D===!0||z===!0){let vt=this.type!==un?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new xn(i.x,i.y,vt),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ht=H.getViewportCount();for(let vt=0;vt<ht;vt++){let Nt=H.getViewport(vt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),N.viewport(a),H.updateMatrices(Q,vt),n=H.getFrustum(),_(w,V,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===un&&b(H,V),H.needsUpdate=!1}f=this.type,g.needsUpdate=!1,s.setRenderTarget(y,A,S)};function b(E,w){let V=t.update(C);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new xn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,V,d,C,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,V,p,C,null)}function I(E,w,V,y){let A=null,S=V.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)A=S;else if(A=V.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let N=A.uuid,D=w.uuid,z=c[N];z===void 0&&(z={},c[N]=z);let K=z[D];K===void 0&&(K=A.clone(),z[D]=K,w.addEventListener("dispose",U)),A=K}if(A.visible=w.visible,A.wireframe=w.wireframe,y===un?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=s.properties.get(A);N.light=V}return A}function _(E,w,V,y,A){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===un)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld);let D=t.update(E),z=E.material;if(Array.isArray(z)){let K=D.groups;for(let G=0,Q=K.length;G<Q;G++){let H=K[G],st=z[H.materialIndex];if(st&&st.visible){let ht=I(E,st,y,A);E.onBeforeShadow(s,E,w,V,D,ht,H),s.renderBufferDirect(V,null,D,ht,E,H),E.onAfterShadow(s,E,w,V,D,ht,H)}}}else if(z.visible){let K=I(E,z,y,A);E.onBeforeShadow(s,E,w,V,D,K,null),s.renderBufferDirect(V,null,D,K,E,null),E.onAfterShadow(s,E,w,V,D,K,null)}}let N=E.children;for(let D=0,z=N.length;D<z;D++)_(N[D],w,V,y,A)}function U(E){E.target.removeEventListener("dispose",U);for(let V in c){let y=c[V],A=E.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}var Rg={[ua]:da,[fa]:ma,[pa]:Aa,[Ei]:ga,[da]:ua,[ma]:fa,[Aa]:pa,[ga]:Ei};function qg(s,t){function e(){let R=!1,it=new he,k=null,J=new he(0,0,0,0);return{setMask:function(ct){k!==ct&&!R&&(s.colorMask(ct,ct,ct,ct),k=ct)},setLocked:function(ct){R=ct},setClear:function(ct,ot,Vt,ce,Ce){Ce===!0&&(ct*=ce,ot*=ce,Vt*=ce),it.set(ct,ot,Vt,ce),J.equals(it)===!1&&(s.clearColor(ct,ot,Vt,ce),J.copy(it))},reset:function(){R=!1,k=null,J.set(-1,0,0,0)}}}function n(){let R=!1,it=!1,k=null,J=null,ct=null;return{setReversed:function(ot){if(it!==ot){let Vt=t.get("EXT_clip_control");it?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ct;ct=null,this.setClear(ce)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(ot){k!==ot&&!R&&(s.depthMask(ot),k=ot)},setFunc:function(ot){if(it&&(ot=Rg[ot]),J!==ot){switch(ot){case ua:s.depthFunc(s.NEVER);break;case da:s.depthFunc(s.ALWAYS);break;case fa:s.depthFunc(s.LESS);break;case Ei:s.depthFunc(s.LEQUAL);break;case pa:s.depthFunc(s.EQUAL);break;case ga:s.depthFunc(s.GEQUAL);break;case ma:s.depthFunc(s.GREATER);break;case Aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ot}},setLocked:function(ot){R=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),s.clearDepth(ot),ct=ot)},reset:function(){R=!1,k=null,J=null,ct=null,it=!1}}}function i(){let R=!1,it=null,k=null,J=null,ct=null,ot=null,Vt=null,ce=null,Ce=null;return{setTest:function(Zt){R||(Zt?rt(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(Zt){it!==Zt&&!R&&(s.stencilMask(Zt),it=Zt)},setFunc:function(Zt,Oe,sn){(k!==Zt||J!==Oe||ct!==sn)&&(s.stencilFunc(Zt,Oe,sn),k=Zt,J=Oe,ct=sn)},setOp:function(Zt,Oe,sn){(ot!==Zt||Vt!==Oe||ce!==sn)&&(s.stencilOp(Zt,Oe,sn),ot=Zt,Vt=Oe,ce=sn)},setLocked:function(Zt){R=Zt},setClear:function(Zt){Ce!==Zt&&(s.clearStencil(Zt),Ce=Zt)},reset:function(){R=!1,it=null,k=null,J=null,ct=null,ot=null,Vt=null,ce=null,Ce=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,C=!1,g=null,f=null,b=null,I=null,_=null,U=null,E=null,w=new wt(0,0,0),V=0,y=!1,A=null,S=null,N=null,D=null,z=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=Q>=2);let st=null,ht={},vt=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),jt=new he().fromArray(vt),X=new he().fromArray(Nt);function tt(R,it,k,J){let ct=new Uint8Array(4),ot=s.createTexture();s.bindTexture(R,ot),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<k;Vt++)R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(it+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return ot}let At={};At[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(Ei),Ot(!1),zt(ll),rt(s.CULL_FACE),L(Pn);function rt(R){h[R]!==!0&&(s.enable(R),h[R]=!0)}function bt(R){h[R]!==!1&&(s.disable(R),h[R]=!1)}function qt(R,it){return u[R]!==it?(s.bindFramebuffer(R,it),u[R]=it,R===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),R===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Bt(R,it){let k=p,J=!1;if(R){k=d.get(it),k===void 0&&(k=[],d.set(it,k));let ct=R.textures;if(k.length!==ct.length||k[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Vt=ct.length;ot<Vt;ot++)k[ot]=s.COLOR_ATTACHMENT0+ot;k.length=ct.length,J=!0}}else k[0]!==s.BACK&&(k[0]=s.BACK,J=!0);J&&s.drawBuffers(k)}function oe(R){return m!==R?(s.useProgram(R),m=R,!0):!1}let Ht={[Jn]:s.FUNC_ADD,[rh]:s.FUNC_SUBTRACT,[ah]:s.FUNC_REVERSE_SUBTRACT};Ht[oh]=s.MIN,Ht[lh]=s.MAX;let ue={[ch]:s.ZERO,[hh]:s.ONE,[uh]:s.SRC_COLOR,[ca]:s.SRC_ALPHA,[Ah]:s.SRC_ALPHA_SATURATE,[gh]:s.DST_COLOR,[fh]:s.DST_ALPHA,[dh]:s.ONE_MINUS_SRC_COLOR,[ha]:s.ONE_MINUS_SRC_ALPHA,[mh]:s.ONE_MINUS_DST_COLOR,[ph]:s.ONE_MINUS_DST_ALPHA,[xh]:s.CONSTANT_COLOR,[Ch]:s.ONE_MINUS_CONSTANT_COLOR,[vh]:s.CONSTANT_ALPHA,[_h]:s.ONE_MINUS_CONSTANT_ALPHA};function L(R,it,k,J,ct,ot,Vt,ce,Ce,Zt){if(R===Pn){C===!0&&(bt(s.BLEND),C=!1);return}if(C===!1&&(rt(s.BLEND),C=!0),R!==sh){if(R!==g||Zt!==y){if((f!==Jn||_!==Jn)&&(s.blendEquation(s.FUNC_ADD),f=Jn,_=Jn),Zt)switch(R){case Ln:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFunc(s.ONE,s.ONE);break;case cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ln:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,I=null,U=null,E=null,w.set(0,0,0),V=0,g=R,y=Zt}return}ct=ct||it,ot=ot||k,Vt=Vt||J,(it!==f||ct!==_)&&(s.blendEquationSeparate(Ht[it],Ht[ct]),f=it,_=ct),(k!==b||J!==I||ot!==U||Vt!==E)&&(s.blendFuncSeparate(ue[k],ue[J],ue[ot],ue[Vt]),b=k,I=J,U=ot,E=Vt),(ce.equals(w)===!1||Ce!==V)&&(s.blendColor(ce.r,ce.g,ce.b,Ce),w.copy(ce),V=Ce),g=R,y=!1}function De(R,it){R.side===fn?bt(s.CULL_FACE):rt(s.CULL_FACE);let k=R.side===Te;it&&(k=!k),Ot(k),R.blending===Ln&&R.transparent===!1?L(Pn):L(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let J=R.stencilWrite;o.setTest(J),J&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(R){A!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),A=R)}function zt(R){R!==eh?(rt(s.CULL_FACE),R!==S&&(R===ll?s.cullFace(s.BACK):R===nh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),S=R}function It(R){R!==N&&(G&&s.lineWidth(R),N=R)}function ne(R,it,k){R?(rt(s.POLYGON_OFFSET_FILL),(D!==it||z!==k)&&(s.polygonOffset(it,k),D=it,z=k)):bt(s.POLYGON_OFFSET_FILL)}function yt(R){R?rt(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function M(R){R===void 0&&(R=s.TEXTURE0+K-1),st!==R&&(s.activeTexture(R),st=R)}function x(R,it,k){k===void 0&&(st===null?k=s.TEXTURE0+K-1:k=st);let J=ht[k];J===void 0&&(J={type:void 0,texture:void 0},ht[k]=J),(J.type!==R||J.texture!==it)&&(st!==k&&(s.activeTexture(k),st=k),s.bindTexture(R,it||At[R]),J.type=R,J.texture=it)}function B(){let R=ht[st];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Gt(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function St(R){jt.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),jt.copy(R))}function ft(R){X.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function kt(R,it){let k=c.get(it);k===void 0&&(k=new WeakMap,c.set(it,k));let J=k.get(R);J===void 0&&(J=s.getUniformBlockIndex(it,R.name),k.set(R,J))}function Ut(R,it){let J=c.get(it).get(R);l.get(it)!==J&&(s.uniformBlockBinding(it,J,R.__bindingPointIndex),l.set(it,J))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ht={},u={},d=new WeakMap,p=[],m=null,C=!1,g=null,f=null,b=null,I=null,_=null,U=null,E=null,w=new wt(0,0,0),V=0,y=!1,A=null,S=null,N=null,D=null,z=null,jt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:qt,drawBuffers:Bt,useProgram:oe,setBlending:L,setMaterial:De,setFlipSided:Ot,setCullFace:zt,setLineWidth:It,setPolygonOffset:ne,setScissorTest:yt,activeTexture:M,bindTexture:x,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:dt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:j,texSubImage2D:W,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:St,viewport:ft,reset:te}}function ac(s,t,e,n){let i=Vg(n);switch(e){case xc:return s*t;case vc:return s*t;case _c:return s*t*2;case yc:return s*t/i.components*i.byteLength;case No:return s*t/i.components*i.byteLength;case Ic:return s*t*2/i.components*i.byteLength;case Bo:return s*t*2/i.components*i.byteLength;case Cc:return s*t*3/i.components*i.byteLength;case We:return s*t*4/i.components*i.byteLength;case Fo:return s*t*4/i.components*i.byteLength;case Hs:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ma:return Math.max(s,16)*Math.max(t,8)/4;case _a:case Ia:return Math.max(s,8)*Math.max(t,8)/2;case ba:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ys:case ka:case Ha:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mc:case Ga:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wa:case Xa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vg(s){switch(s){case An:case gc:return{byteLength:1,components:1};case as:case mc:case us:return{byteLength:2,components:1};case Uo:case Do:return{byteLength:2,components:4};case $n:case Lo:case pn:return{byteLength:4,components:1};case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Pg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,x){return p?new OffscreenCanvas(M,x):Qs("canvas")}function C(M,x,B){let Y=1,Z=yt(M);if((Z.width>B||Z.height>B)&&(Y=B/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(Y*Z.width),xt=Math.floor(Y*Z.height);u===void 0&&(u=m(W,xt));let at=x?m(W,xt):u;return at.width=W,at.height=xt,at.getContext("2d").drawImage(M,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+xt+")."),at}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function g(M){return M.generateMipmaps}function f(M){s.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?s.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(M,x,B,Y,Z=!1){if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=x;if(x===s.RED&&(B===s.FLOAT&&(W=s.R32F),B===s.HALF_FLOAT&&(W=s.R16F),B===s.UNSIGNED_BYTE&&(W=s.R8)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.R8UI),B===s.UNSIGNED_SHORT&&(W=s.R16UI),B===s.UNSIGNED_INT&&(W=s.R32UI),B===s.BYTE&&(W=s.R8I),B===s.SHORT&&(W=s.R16I),B===s.INT&&(W=s.R32I)),x===s.RG&&(B===s.FLOAT&&(W=s.RG32F),B===s.HALF_FLOAT&&(W=s.RG16F),B===s.UNSIGNED_BYTE&&(W=s.RG8)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RG8UI),B===s.UNSIGNED_SHORT&&(W=s.RG16UI),B===s.UNSIGNED_INT&&(W=s.RG32UI),B===s.BYTE&&(W=s.RG8I),B===s.SHORT&&(W=s.RG16I),B===s.INT&&(W=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGB8UI),B===s.UNSIGNED_SHORT&&(W=s.RGB16UI),B===s.UNSIGNED_INT&&(W=s.RGB32UI),B===s.BYTE&&(W=s.RGB8I),B===s.SHORT&&(W=s.RGB16I),B===s.INT&&(W=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),B===s.UNSIGNED_INT&&(W=s.RGBA32UI),B===s.BYTE&&(W=s.RGBA8I),B===s.SHORT&&(W=s.RGBA16I),B===s.INT&&(W=s.RGBA32I)),x===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),x===s.RGBA){let xt=Z?Ir:Wt.getTransfer(Y);B===s.FLOAT&&(W=s.RGBA32F),B===s.HALF_FLOAT&&(W=s.RGBA16F),B===s.UNSIGNED_BYTE&&(W=xt===Qt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(M,x){let B;return M?x===null||x===$n||x===Ri?B=s.DEPTH24_STENCIL8:x===pn?B=s.DEPTH32F_STENCIL8:x===as&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$n||x===Ri?B=s.DEPTH_COMPONENT24:x===pn?B=s.DEPTH_COMPONENT32F:x===as&&(B=s.DEPTH_COMPONENT16),B}function U(M,x){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Xe&&M.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function E(M){let x=M.target;x.removeEventListener("dispose",E),V(x),x.isVideoTexture&&h.delete(x)}function w(M){let x=M.target;x.removeEventListener("dispose",w),A(x)}function V(M){let x=n.get(M);if(x.__webglInit===void 0)return;let B=M.source,Y=d.get(B);if(Y){let Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(M),Object.keys(Y).length===0&&d.delete(B)}n.remove(M)}function y(M){let x=n.get(M);s.deleteTexture(x.__webglTexture);let B=M.source,Y=d.get(B);delete Y[x.__cacheKey],a.memory.textures--}function A(M){let x=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=M.textures;for(let Y=0,Z=B.length;Y<Z;Y++){let W=n.get(B[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(M)}let S=0;function N(){S=0}function D(){let M=S;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),S+=1,M}function z(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function K(M,x){let B=n.get(M);if(M.isVideoTexture&&It(M),M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,M,x);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function G(M,x){let B=n.get(M);if(M.version>0&&B.__version!==M.version){X(B,M,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function Q(M,x){let B=n.get(M);if(M.version>0&&B.__version!==M.version){X(B,M,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function H(M,x){let B=n.get(M);if(M.version>0&&B.__version!==M.version){tt(B,M,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}let st={[rs]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},ht={[Xe]:s.NEAREST,[qh]:s.NEAREST_MIPMAP_NEAREST,[xs]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Tr]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},vt={[Uh]:s.NEVER,[zh]:s.ALWAYS,[Dh]:s.LESS,[bc]:s.LEQUAL,[Nh]:s.EQUAL,[Oh]:s.GEQUAL,[Bh]:s.GREATER,[Fh]:s.NOTEQUAL};function Nt(M,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===Tr||x.magFilter===xs||x.magFilter===jn||x.minFilter===tn||x.minFilter===Tr||x.minFilter===xs||x.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(M,s.TEXTURE_WRAP_S,st[x.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,st[x.wrapT]),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,st[x.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,ht[x.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xe||x.minFilter!==xs&&x.minFilter!==jn||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(M,x){let B=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",E));let Y=x.source,Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));let W=z(x);if(W!==M.__cacheKey){Z[W]===void 0&&(Z[W]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[W].usedTimes++;let xt=Z[M.__cacheKey];xt!==void 0&&(Z[M.__cacheKey].usedTimes--,xt.usedTimes===0&&y(x)),M.__cacheKey=W,M.__webglTexture=Z[W].texture}return B}function X(M,x,B){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);let Z=jt(M,x),W=x.source;e.bindTexture(Y,M.__webglTexture,s.TEXTURE0+B);let xt=n.get(W);if(W.version!==xt.__version||Z===!0){e.activeTexture(s.TEXTURE0+B);let at=Wt.getPrimaries(Wt.workingColorSpace),ut=x.colorSpace===Vn?null:Wt.getPrimaries(x.colorSpace),Gt=x.colorSpace===Vn||at===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let j=C(x.image,!1,i.maxTextureSize);j=ne(x,j);let dt=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),St=I(x.internalFormat,dt,Mt,x.colorSpace,x.isVideoTexture);Nt(Y,x);let ft,kt=x.mipmaps,Ut=x.isVideoTexture!==!0,te=xt.__version===void 0||Z===!0,R=W.dataReady,it=U(x,j);if(x.isDepthTexture)St=_(x.format===qi,x.type),te&&(Ut?e.texStorage2D(s.TEXTURE_2D,1,St,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,St,j.width,j.height,0,dt,Mt,null));else if(x.isDataTexture)if(kt.length>0){Ut&&te&&e.texStorage2D(s.TEXTURE_2D,it,St,kt[0].width,kt[0].height);for(let k=0,J=kt.length;k<J;k++)ft=kt[k],Ut?R&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(s.TEXTURE_2D,k,St,ft.width,ft.height,0,dt,Mt,ft.data);x.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(s.TEXTURE_2D,it,St,j.width,j.height),R&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,dt,Mt,j.data)):e.texImage2D(s.TEXTURE_2D,0,St,j.width,j.height,0,dt,Mt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,St,kt[0].width,kt[0].height,j.depth);for(let k=0,J=kt.length;k<J;k++)if(ft=kt[k],x.format!==We)if(dt!==null)if(Ut){if(R)if(x.layerUpdates.size>0){let ct=ac(ft.width,ft.height,x.format,x.type);for(let ot of x.layerUpdates){let Vt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,ot,ft.width,ft.height,1,dt,Vt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,ft.width,ft.height,j.depth,dt,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,St,ft.width,ft.height,j.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?R&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,ft.width,ft.height,j.depth,dt,Mt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,k,St,ft.width,ft.height,j.depth,0,dt,Mt,ft.data)}else{Ut&&te&&e.texStorage2D(s.TEXTURE_2D,it,St,kt[0].width,kt[0].height);for(let k=0,J=kt.length;k<J;k++)ft=kt[k],x.format!==We?dt!==null?Ut?R&&e.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,k,St,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?R&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(s.TEXTURE_2D,k,St,ft.width,ft.height,0,dt,Mt,ft.data)}else if(x.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,St,j.width,j.height,j.depth),R)if(x.layerUpdates.size>0){let k=ac(j.width,j.height,x.format,x.type);for(let J of x.layerUpdates){let ct=j.data.subarray(J*k/j.data.BYTES_PER_ELEMENT,(J+1)*k/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,dt,Mt,ct)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,Mt,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,j.width,j.height,j.depth,0,dt,Mt,j.data);else if(x.isData3DTexture)Ut?(te&&e.texStorage3D(s.TEXTURE_3D,it,St,j.width,j.height,j.depth),R&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,Mt,j.data)):e.texImage3D(s.TEXTURE_3D,0,St,j.width,j.height,j.depth,0,dt,Mt,j.data);else if(x.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(s.TEXTURE_2D,it,St,j.width,j.height);else{let k=j.width,J=j.height;for(let ct=0;ct<it;ct++)e.texImage2D(s.TEXTURE_2D,ct,St,k,J,0,dt,Mt,null),k>>=1,J>>=1}}else if(kt.length>0){if(Ut&&te){let k=yt(kt[0]);e.texStorage2D(s.TEXTURE_2D,it,St,k.width,k.height)}for(let k=0,J=kt.length;k<J;k++)ft=kt[k],Ut?R&&e.texSubImage2D(s.TEXTURE_2D,k,0,0,dt,Mt,ft):e.texImage2D(s.TEXTURE_2D,k,St,dt,Mt,ft);x.generateMipmaps=!1}else if(Ut){if(te){let k=yt(j);e.texStorage2D(s.TEXTURE_2D,it,St,k.width,k.height)}R&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Mt,j)}else e.texImage2D(s.TEXTURE_2D,0,St,dt,Mt,j);g(x)&&f(Y),xt.__version=W.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function tt(M,x,B){if(x.image.length!==6)return;let Y=jt(M,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,M.__webglTexture,s.TEXTURE0+B);let W=n.get(Z);if(Z.version!==W.__version||Y===!0){e.activeTexture(s.TEXTURE0+B);let xt=Wt.getPrimaries(Wt.workingColorSpace),at=x.colorSpace===Vn?null:Wt.getPrimaries(x.colorSpace),ut=x.colorSpace===Vn||xt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let J=0;J<6;J++)!Gt&&!j?dt[J]=C(x.image[J],!0,i.maxCubemapSize):dt[J]=j?x.image[J].image:x.image[J],dt[J]=ne(x,dt[J]);let Mt=dt[0],St=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),kt=I(x.internalFormat,St,ft,x.colorSpace),Ut=x.isVideoTexture!==!0,te=W.__version===void 0||Y===!0,R=Z.dataReady,it=U(x,Mt);Nt(s.TEXTURE_CUBE_MAP,x);let k;if(Gt){Ut&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,kt,Mt.width,Mt.height);for(let J=0;J<6;J++){k=dt[J].mipmaps;for(let ct=0;ct<k.length;ct++){let ot=k[ct];x.format!==We?St!==null?Ut?R&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,ot.width,ot.height,St,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,ot.width,ot.height,St,ft,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,kt,ot.width,ot.height,0,St,ft,ot.data)}}}else{if(k=x.mipmaps,Ut&&te){k.length>0&&it++;let J=yt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,kt,J.width,J.height)}for(let J=0;J<6;J++)if(j){Ut?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,dt[J].width,dt[J].height,St,ft,dt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,dt[J].width,dt[J].height,0,St,ft,dt[J].data);for(let ct=0;ct<k.length;ct++){let Vt=k[ct].image[J].image;Ut?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Vt.width,Vt.height,St,ft,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,kt,Vt.width,Vt.height,0,St,ft,Vt.data)}}else{Ut?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,ft,dt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,St,ft,dt[J]);for(let ct=0;ct<k.length;ct++){let ot=k[ct];Ut?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,St,ft,ot.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,kt,St,ft,ot.image[J])}}}g(x)&&f(s.TEXTURE_CUBE_MAP),W.__version=Z.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function At(M,x,B,Y,Z,W){let xt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),ut=I(B.internalFormat,xt,at,B.colorSpace),Gt=n.get(x),j=n.get(B);if(j.__renderTarget=x,!Gt.__hasExternalTextures){let dt=Math.max(1,x.width>>W),Mt=Math.max(1,x.height>>W);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,ut,dt,Mt,x.depth,0,xt,at,null):e.texImage2D(Z,W,ut,dt,Mt,0,xt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,M),zt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,j.__webglTexture,0,Ot(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,j.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(M,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,M),x.depthBuffer){let Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,W=_(x.stencilBuffer,Z),xt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Ot(x);zt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,W,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,W,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,W,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,M)}else{let Y=x.textures;for(let Z=0;Z<Y.length;Z++){let W=Y[Z],xt=r.convert(W.format,W.colorSpace),at=r.convert(W.type),ut=I(W.internalFormat,xt,at,W.colorSpace),Gt=Ot(x);B&&zt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,ut,x.width,x.height):zt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,ut,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ut,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let Z=Y.__webglTexture,W=Ot(x);if(x.depthTexture.format===Mi)zt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(x.depthTexture.format===qi)zt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function qt(M){let x=n.get(M),B=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let Y=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");bt(x.__webglFramebuffer,M)}else if(B){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),rt(x.__webglDepthbuffer[Y],M,!1);else{let Z=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,W)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),rt(x.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(M,x,B){let Y=n.get(M);x!==void 0&&At(Y.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&qt(M)}function oe(M){let x=M.texture,B=n.get(M),Y=n.get(x);M.addEventListener("dispose",w);let Z=M.textures,W=M.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let ut=0;ut<x.mipmaps.length;ut++)B.__webglFramebuffer[at][ut]=s.createFramebuffer()}else B.__webglFramebuffer[at]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)B.__webglFramebuffer[at]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xt)for(let at=0,ut=Z.length;at<ut;at++){let Gt=n.get(Z[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(M.samples>0&&zt(M)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){let ut=Z[at];B.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[at]);let Gt=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),dt=I(ut.internalFormat,Gt,j,ut.colorSpace,M.isXRRenderTarget===!0),Mt=Ot(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,dt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,B.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)At(B.__webglFramebuffer[at][ut],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else At(B.__webglFramebuffer[at],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,ut=Z.length;at<ut;at++){let Gt=Z[at],j=n.get(Gt);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),Nt(s.TEXTURE_2D,Gt),At(B.__webglFramebuffer,M,Gt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),g(Gt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(at=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),Nt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)At(B.__webglFramebuffer[ut],M,x,s.COLOR_ATTACHMENT0,at,ut);else At(B.__webglFramebuffer,M,x,s.COLOR_ATTACHMENT0,at,0);g(x)&&f(at),e.unbindTexture()}M.depthBuffer&&qt(M)}function Ht(M){let x=M.textures;for(let B=0,Y=x.length;B<Y;B++){let Z=x[B];if(g(Z)){let W=b(M),xt=n.get(Z).__webglTexture;e.bindTexture(W,xt),f(W),e.unbindTexture()}}}let ue=[],L=[];function De(M){if(M.samples>0){if(zt(M)===!1){let x=M.textures,B=M.width,Y=M.height,Z=s.COLOR_BUFFER_BIT,W=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(M),at=x.length>1;if(at)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Gt=n.get(x[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Gt,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,Z,s.NEAREST),l===!0&&(ue.length=0,L.length=0,ue.push(s.COLOR_ATTACHMENT0+ut),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ue.push(W),L.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Gt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let x=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ot(M){return Math.min(i.maxSamples,M.samples)}function zt(M){let x=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(M){let x=a.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function ne(M,x){let B=M.colorSpace,Y=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||B!==zi&&B!==Vn&&(Wt.getTransfer(B)===Qt?(Y!==We||Z!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function yt(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=zt}function Lg(s,t){function e(n,i=Vn){let r,a=Wt.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===Uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gc)return s.BYTE;if(n===mc)return s.SHORT;if(n===as)return s.UNSIGNED_SHORT;if(n===Lo)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===us)return s.HALF_FLOAT;if(n===xc)return s.ALPHA;if(n===Cc)return s.RGB;if(n===We)return s.RGBA;if(n===vc)return s.LUMINANCE;if(n===_c)return s.LUMINANCE_ALPHA;if(n===Mi)return s.DEPTH_COMPONENT;if(n===qi)return s.DEPTH_STENCIL;if(n===yc)return s.RED;if(n===No)return s.RED_INTEGER;if(n===Ic)return s.RG;if(n===Bo)return s.RG_INTEGER;if(n===Fo)return s.RGBA_INTEGER;if(n===Hs||n===Gs||n===Ws||n===Xs)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===ya||n===Ia||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Sa||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Sa)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Ta||n===Ra||n===qa||n===Va||n===Pa||n===La||n===Ua||n===Da||n===Na||n===Ba||n===Fa||n===Oa||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===ka||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ys)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===Ga||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ys)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var lo=class extends Se{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let C of t.hand.values()){let g=e.getJointPose(C,n),f=this._getHandJoint(c,C);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`,co=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ue,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:Dg,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ho=class extends Nn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,C=new co,g=e.getContextAttributes(),f=null,b=null,I=[],_=[],U=new _t,E=null,w=new Se;w.viewport=new he;let V=new Se;V.viewport=new he;let y=[w,V],A=new lo,S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=I[X];return tt===void 0&&(tt=new ns,I[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=I[X];return tt===void 0&&(tt=new ns,I[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=I[X];return tt===void 0&&(tt=new ns,I[X]=tt),tt.getHandSpace()};function D(X){let tt=_.indexOf(X.inputSource);if(tt===-1)return;let At=I[tt];At!==void 0&&(At.update(X.inputSource,X.frame,c||a),At.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",K);for(let X=0;X<I.length;X++){let tt=_[X];tt!==null&&(_[X]=null,I[X].disconnect(tt))}S=null,N=null,C.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(U),i.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new xn(p.framebufferWidth,p.framebufferHeight,{format:We,type:An,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,At=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?qi:Mi,At=g.stencil?Ri:$n);let bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new xn(d.textureWidth,d.textureHeight,{format:We,type:An,depthTexture:new lr(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function K(X){for(let tt=0;tt<X.removed.length;tt++){let At=X.removed[tt],rt=_.indexOf(At);rt>=0&&(_[rt]=null,I[rt].disconnect(At))}for(let tt=0;tt<X.added.length;tt++){let At=X.added[tt],rt=_.indexOf(At);if(rt===-1){for(let qt=0;qt<I.length;qt++)if(qt>=_.length){_.push(At),rt=qt;break}else if(_[qt]===null){_[qt]=At,rt=qt;break}if(rt===-1)break}let bt=I[rt];bt&&bt.connect(At)}}let G=new T,Q=new T;function H(X,tt,At){G.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(At.matrixWorld);let rt=G.distanceTo(Q),bt=tt.projectionMatrix.elements,qt=At.projectionMatrix.elements,Bt=bt[14]/(bt[10]-1),oe=bt[14]/(bt[10]+1),Ht=(bt[9]+1)/bt[5],ue=(bt[9]-1)/bt[5],L=(bt[8]-1)/bt[0],De=(qt[8]+1)/qt[0],Ot=Bt*L,zt=Bt*De,It=rt/(-L+De),ne=It*-L;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let yt=Bt+It,M=oe+It,x=Ot-ne,B=zt+(rt-ne),Y=Ht*oe/M*yt,Z=ue*oe/M*yt;X.projectionMatrix.makePerspective(x,B,Y,Z,yt,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let tt=X.near,At=X.far;C.texture!==null&&(C.depthNear>0&&(tt=C.depthNear),C.depthFar>0&&(At=C.depthFar)),A.near=V.near=w.near=tt,A.far=V.far=w.far=At,(S!==A.near||N!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),S=A.near,N=A.far),w.layers.mask=X.layers.mask|2,V.layers.mask=X.layers.mask|4,A.layers.mask=w.layers.mask|V.layers.mask;let rt=X.parent,bt=A.cameras;st(A,rt);for(let qt=0;qt<bt.length;qt++)st(bt[qt],rt);bt.length===2?H(A,w,V):A.projectionMatrix.copy(w.projectionMatrix),ht(X,A,rt)};function ht(X,tt,At){At===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(At.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ja*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let vt=null;function Nt(X,tt){if(h=tt.getViewerPose(c||a),m=tt,h!==null){let At=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;At.length!==A.cameras.length&&(A.cameras.length=0,rt=!0);for(let qt=0;qt<At.length;qt++){let Bt=At[qt],oe=null;if(p!==null)oe=p.getViewport(Bt);else{let ue=u.getViewSubImage(d,Bt);oe=ue.viewport,qt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(b))}let Ht=y[qt];Ht===void 0&&(Ht=new Se,Ht.layers.enable(qt),Ht.viewport=new he,y[qt]=Ht),Ht.matrix.fromArray(Bt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Bt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(oe.x,oe.y,oe.width,oe.height),qt===0&&(A.matrix.copy(Ht.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),rt===!0&&A.cameras.push(Ht)}let bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let qt=u.getDepthInformation(At[0]);qt&&qt.isValid&&qt.texture&&C.init(t,qt,i.renderState)}}for(let At=0;At<I.length;At++){let rt=_[At],bt=I[At];rt!==null&&bt!==void 0&&bt.update(rt,tt,c||a)}vt&&vt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let jt=new Tc;jt.setAnimationLoop(Nt),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}},Xn=new Ye,Bg=new le;function Fg(s,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,wc(s)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,b,I,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),C(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,b,I):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Te&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Te&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let b=t.get(f),I=b.envMap,_=b.envMapRotation;I&&(g.envMap.value=I,Xn.copy(_),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),g.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(Xn)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,b,I){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*b,g.scale.value=I*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,b){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function C(g,f){let b=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Og(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,I){let _=I.program;n.uniformBlockBinding(b,_)}function c(b,I){let _=i[b.id];_===void 0&&(m(b),_=h(b),i[b.id]=_,b.addEventListener("dispose",g));let U=I.program;n.updateUBOMapping(b,U);let E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){let I=u();b.__bindingPointIndex=I;let _=s.createBuffer(),U=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,U,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let I=i[b.id],_=b.uniforms,U=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let E=0,w=_.length;E<w;E++){let V=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,A=V.length;y<A;y++){let S=V[y];if(p(S,E,y,U)===!0){let N=S.__offset,D=Array.isArray(S.value)?S.value:[S.value],z=0;for(let K=0;K<D.length;K++){let G=D[K],Q=C(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,N+z,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,I,_,U){let E=b.value,w=I+"_"+_;if(U[w]===void 0)return typeof E=="number"||typeof E=="boolean"?U[w]=E:U[w]=E.clone(),!0;{let V=U[w];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return U[w]=E,!0}else if(V.equals(E)===!1)return V.copy(E),!0}return!1}function m(b){let I=b.uniforms,_=0,U=16;for(let w=0,V=I.length;w<V;w++){let y=Array.isArray(I[w])?I[w]:[I[w]];for(let A=0,S=y.length;A<S;A++){let N=y[A],D=Array.isArray(N.value)?N.value:[N.value];for(let z=0,K=D.length;z<K;z++){let G=D[z],Q=C(G),H=_%U,st=H%Q.boundary,ht=H+st;_+=st,ht!==0&&U-ht<Q.storage&&(_+=U-ht),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=Q.storage}}}let E=_%U;return E>0&&(_+=U-E),b.__size=_,b.__cache={},this}function C(b){let I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),I}function g(b){let I=b.target;I.removeEventListener("dispose",g);let _=a.indexOf(I.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[I.id]),delete i[I.id],delete r[I.id]}function f(){for(let b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}var cr=class{constructor(t={}){let{canvas:e=Hh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),C=new Int32Array(4),g=null,f=null,b=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=Un,this.toneMappingExposure=1;let _=this,U=!1,E=0,w=0,V=null,y=-1,A=null,S=new he,N=new he,D=null,z=new wt(0),K=0,G=e.width,Q=e.height,H=1,st=null,ht=null,vt=new he(0,0,G,Q),Nt=new he(0,0,G,Q),jt=!1,X=new os,tt=!1,At=!1,rt=new le,bt=new le,qt=new T,Bt=new he,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function ue(){return V===null?H:1}let L=n;function De(v,q){return e.getContext(v,q)}try{let v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){let q="webgl2";if(L=De(q,v),L===null)throw De(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ot,zt,It,ne,yt,M,x,B,Y,Z,W,xt,at,ut,Gt,j,dt,Mt,St,ft,kt,Ut,te,R;function it(){Ot=new np(L),Ot.init(),Ut=new Lg(L,Ot),zt=new Zf(L,Ot,t,Ut),It=new qg(L,Ot),zt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),ne=new rp(L),yt=new xg,M=new Pg(L,Ot,It,yt,zt,Ut,ne),x=new jf(_),B=new ep(_),Y=new uu(L),te=new Jf(L,Y),Z=new ip(L,Y,ne,te),W=new op(L,Z,Y,ne),St=new ap(L,zt,M),j=new Qf(yt),xt=new Ag(_,x,B,Ot,zt,te,j),at=new Fg(_,yt),ut=new vg,Gt=new Sg(Ot),Mt=new Yf(_,x,B,It,W,p,l),dt=new Tg(_,W,zt),R=new Og(L,ne,zt,It),ft=new Kf(L,Ot,ne),kt=new sp(L,Ot,ne),ne.programs=xt.programs,_.capabilities=zt,_.extensions=Ot,_.properties=yt,_.renderLists=ut,_.shadowMap=dt,_.state=It,_.info=ne}it();let k=new ho(_,L);this.xr=k,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=Ot.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ot.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(G,Q,!1))},this.getSize=function(v){return v.set(G,Q)},this.setSize=function(v,q,F=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,Q=q,e.width=Math.floor(v*H),e.height=Math.floor(q*H),F===!0&&(e.style.width=v+"px",e.style.height=q+"px"),this.setViewport(0,0,v,q)},this.getDrawingBufferSize=function(v){return v.set(G*H,Q*H).floor()},this.setDrawingBufferSize=function(v,q,F){G=v,Q=q,H=F,e.width=Math.floor(v*F),e.height=Math.floor(q*F),this.setViewport(0,0,v,q)},this.getCurrentViewport=function(v){return v.copy(S)},this.getViewport=function(v){return v.copy(vt)},this.setViewport=function(v,q,F,O){v.isVector4?vt.set(v.x,v.y,v.z,v.w):vt.set(v,q,F,O),It.viewport(S.copy(vt).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Nt)},this.setScissor=function(v,q,F,O){v.isVector4?Nt.set(v.x,v.y,v.z,v.w):Nt.set(v,q,F,O),It.scissor(N.copy(Nt).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(v){It.setScissorTest(jt=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(v=!0,q=!0,F=!0){let O=0;if(v){let P=!1;if(V!==null){let $=V.texture.format;P=$===Fo||$===Bo||$===No}if(P){let $=V.texture.type,lt=$===An||$===$n||$===as||$===Ri||$===Uo||$===Do,pt=Mt.getClearColor(),gt=Mt.getClearAlpha(),Et=pt.r,Pt=pt.g,mt=pt.b;lt?(m[0]=Et,m[1]=Pt,m[2]=mt,m[3]=gt,L.clearBufferuiv(L.COLOR,0,m)):(C[0]=Et,C[1]=Pt,C[2]=mt,C[3]=gt,L.clearBufferiv(L.COLOR,0,C))}else O|=L.COLOR_BUFFER_BIT}q&&(O|=L.DEPTH_BUFFER_BIT),F&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Gt.dispose(),yt.dispose(),x.dispose(),B.dispose(),W.dispose(),te.dispose(),R.dispose(),xt.dispose(),k.dispose(),k.removeEventListener("sessionstart",tl),k.removeEventListener("sessionend",el),On.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let v=ne.autoReset,q=dt.enabled,F=dt.autoUpdate,O=dt.needsUpdate,P=dt.type;it(),ne.autoReset=v,dt.enabled=q,dt.autoUpdate=F,dt.needsUpdate=O,dt.type=P}function ot(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Vt(v){let q=v.target;q.removeEventListener("dispose",Vt),ce(q)}function ce(v){Ce(v),yt.remove(v)}function Ce(v){let q=yt.get(v).programs;q!==void 0&&(q.forEach(function(F){xt.releaseProgram(F)}),v.isShaderMaterial&&xt.releaseShaderCache(v))}this.renderBufferDirect=function(v,q,F,O,P,$){q===null&&(q=oe);let lt=P.isMesh&&P.matrixWorld.determinant()<0,pt=jc(v,q,F,O,P);It.setMaterial(O,lt);let gt=F.index,Et=1;if(O.wireframe===!0){if(gt=Z.getWireframeAttribute(F),gt===void 0)return;Et=2}let Pt=F.drawRange,mt=F.attributes.position,Xt=Pt.start*Et,ee=(Pt.start+Pt.count)*Et;$!==null&&(Xt=Math.max(Xt,$.start*Et),ee=Math.min(ee,($.start+$.count)*Et)),gt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,gt.count)):mt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,mt.count));let ie=ee-Xt;if(ie<0||ie===1/0)return;te.setup(P,O,pt,F,gt);let Ee,Jt=ft;if(gt!==null&&(Ee=Y.get(gt),Jt=kt,Jt.setIndex(Ee)),P.isMesh)O.wireframe===!0?(It.setLineWidth(O.wireframeLinewidth*ue()),Jt.setMode(L.LINES)):Jt.setMode(L.TRIANGLES);else if(P.isLine){let Ct=O.linewidth;Ct===void 0&&(Ct=1),It.setLineWidth(Ct*ue()),P.isLineSegments?Jt.setMode(L.LINES):P.isLineLoop?Jt.setMode(L.LINE_LOOP):Jt.setMode(L.LINE_STRIP)}else P.isPoints?Jt.setMode(L.POINTS):P.isSprite&&Jt.setMode(L.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Jt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Jt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Ct=P._multiDrawStarts,rn=P._multiDrawCounts,Kt=P._multiDrawCount,ze=gt?Y.get(gt).bytesPerElement:1,li=yt.get(O).currentProgram.getUniforms();for(let Ve=0;Ve<Kt;Ve++)li.setValue(L,"_gl_DrawID",Ve),Jt.render(Ct[Ve]/ze,rn[Ve])}else if(P.isInstancedMesh)Jt.renderInstances(Xt,ie,P.count);else if(F.isInstancedBufferGeometry){let Ct=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,rn=Math.min(F.instanceCount,Ct);Jt.renderInstances(Xt,ie,rn)}else Jt.render(Xt,ie)};function Zt(v,q,F){v.transparent===!0&&v.side===fn&&v.forceSinglePass===!1?(v.side=Te,v.needsUpdate=!0,As(v,q,F),v.side=Dn,v.needsUpdate=!0,As(v,q,F),v.side=fn):As(v,q,F)}this.compile=function(v,q,F=null){F===null&&(F=v),f=Gt.get(F),f.init(q),I.push(f),F.traverseVisible(function(P){P.isLight&&P.layers.test(q.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),v!==F&&v.traverseVisible(function(P){P.isLight&&P.layers.test(q.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),f.setupLights();let O=new Set;return v.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let $=P.material;if($)if(Array.isArray($))for(let lt=0;lt<$.length;lt++){let pt=$[lt];Zt(pt,F,P),O.add(pt)}else Zt($,F,P),O.add($)}),I.pop(),f=null,O},this.compileAsync=function(v,q,F=null){let O=this.compile(v,q,F);return new Promise(P=>{function $(){if(O.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&O.delete(lt)}),O.size===0){P(v);return}setTimeout($,10)}Ot.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Oe=null;function sn(v){Oe&&Oe(v)}function tl(){On.stop()}function el(){On.start()}let On=new Tc;On.setAnimationLoop(sn),typeof self!="undefined"&&On.setContext(self),this.setAnimationLoop=function(v){Oe=v,k.setAnimationLoop(v),v===null?On.stop():On.start()},k.addEventListener("sessionstart",tl),k.addEventListener("sessionend",el),this.render=function(v,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(q),q=k.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,q,V),f=Gt.get(v,I.length),f.init(q),I.push(f),bt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix(bt),At=this.localClippingEnabled,tt=j.init(this.clippingPlanes,At),g=ut.get(v,b.length),g.init(),b.push(g),k.enabled===!0&&k.isPresenting===!0){let $=_.xr.getDepthSensingMesh();$!==null&&wr($,q,-1/0,_.sortObjects)}wr(v,q,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(st,ht),Ht=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Ht&&Mt.addToRenderList(g,v),this.info.render.frame++,tt===!0&&j.beginShadows();let F=f.state.shadowsArray;dt.render(F,v,q),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=g.opaque,P=g.transmissive;if(f.setupLights(),q.isArrayCamera){let $=q.cameras;if(P.length>0)for(let lt=0,pt=$.length;lt<pt;lt++){let gt=$[lt];il(O,P,v,gt)}Ht&&Mt.render(v);for(let lt=0,pt=$.length;lt<pt;lt++){let gt=$[lt];nl(g,v,gt,gt.viewport)}}else P.length>0&&il(O,P,v,q),Ht&&Mt.render(v),nl(g,v,q);V!==null&&(M.updateMultisampleRenderTarget(V),M.updateRenderTargetMipmap(V)),v.isScene===!0&&v.onAfterRender(_,v,q),te.resetDefaultState(),y=-1,A=null,I.pop(),I.length>0?(f=I[I.length-1],tt===!0&&j.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function wr(v,q,F,O){if(v.visible===!1)return;if(v.layers.test(q.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(q);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){O&&Bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(bt);let lt=W.update(v),pt=v.material;pt.visible&&g.push(v,lt,pt,F,Bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let lt=W.update(v),pt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Bt.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(v.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){let gt=lt.groups;for(let Et=0,Pt=gt.length;Et<Pt;Et++){let mt=gt[Et],Xt=pt[mt.materialIndex];Xt&&Xt.visible&&g.push(v,lt,Xt,F,Bt.z,mt)}}else pt.visible&&g.push(v,lt,pt,F,Bt.z,null)}}let $=v.children;for(let lt=0,pt=$.length;lt<pt;lt++)wr($[lt],q,F,O)}function nl(v,q,F,O){let P=v.opaque,$=v.transmissive,lt=v.transparent;f.setupLightsView(F),tt===!0&&j.setGlobalState(_.clippingPlanes,F),O&&It.viewport(S.copy(O)),P.length>0&&ms(P,q,F),$.length>0&&ms($,q,F),lt.length>0&&ms(lt,q,F),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function il(v,q,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new xn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?us:An,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let $=f.state.transmissionRenderTarget[O.id],lt=O.viewport||S;$.setSize(lt.z,lt.w);let pt=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(z),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Ht&&Mt.render(F);let gt=_.toneMapping;_.toneMapping=Un;let Et=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),tt===!0&&j.setGlobalState(_.clippingPlanes,O),ms(v,F,O),M.updateMultisampleRenderTarget($),M.updateRenderTargetMipmap($),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let mt=0,Xt=q.length;mt<Xt;mt++){let ee=q[mt],ie=ee.object,Ee=ee.geometry,Jt=ee.material,Ct=ee.group;if(Jt.side===fn&&ie.layers.test(O.layers)){let rn=Jt.side;Jt.side=Te,Jt.needsUpdate=!0,sl(ie,F,O,Ee,Jt,Ct),Jt.side=rn,Jt.needsUpdate=!0,Pt=!0}}Pt===!0&&(M.updateMultisampleRenderTarget($),M.updateRenderTargetMipmap($))}_.setRenderTarget(pt),_.setClearColor(z,K),Et!==void 0&&(O.viewport=Et),_.toneMapping=gt}function ms(v,q,F){let O=q.isScene===!0?q.overrideMaterial:null;for(let P=0,$=v.length;P<$;P++){let lt=v[P],pt=lt.object,gt=lt.geometry,Et=O===null?lt.material:O,Pt=lt.group;pt.layers.test(F.layers)&&sl(pt,q,F,gt,Et,Pt)}}function sl(v,q,F,O,P,$){v.onBeforeRender(_,q,F,O,P,$),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),P.onBeforeRender(_,q,F,O,v,$),P.transparent===!0&&P.side===fn&&P.forceSinglePass===!1?(P.side=Te,P.needsUpdate=!0,_.renderBufferDirect(F,q,O,P,v,$),P.side=Dn,P.needsUpdate=!0,_.renderBufferDirect(F,q,O,P,v,$),P.side=fn):_.renderBufferDirect(F,q,O,P,v,$),v.onAfterRender(_,q,F,O,P,$)}function As(v,q,F){q.isScene!==!0&&(q=oe);let O=yt.get(v),P=f.state.lights,$=f.state.shadowsArray,lt=P.state.version,pt=xt.getParameters(v,P.state,$,q,F),gt=xt.getProgramCacheKey(pt),Et=O.programs;O.environment=v.isMeshStandardMaterial?q.environment:null,O.fog=q.fog,O.envMap=(v.isMeshStandardMaterial?B:x).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?q.environmentRotation:v.envMapRotation,Et===void 0&&(v.addEventListener("dispose",Vt),Et=new Map,O.programs=Et);let Pt=Et.get(gt);if(Pt!==void 0){if(O.currentProgram===Pt&&O.lightsStateVersion===lt)return al(v,pt),Pt}else pt.uniforms=xt.getUniforms(v),v.onBeforeCompile(pt,_),Pt=xt.acquireProgram(pt,gt),Et.set(gt,Pt),O.uniforms=pt.uniforms;let mt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(mt.clippingPlanes=j.uniform),al(v,pt),O.needsLights=th(v),O.lightsStateVersion=lt,O.needsLights&&(mt.ambientLightColor.value=P.state.ambient,mt.lightProbe.value=P.state.probe,mt.directionalLights.value=P.state.directional,mt.directionalLightShadows.value=P.state.directionalShadow,mt.spotLights.value=P.state.spot,mt.spotLightShadows.value=P.state.spotShadow,mt.rectAreaLights.value=P.state.rectArea,mt.ltc_1.value=P.state.rectAreaLTC1,mt.ltc_2.value=P.state.rectAreaLTC2,mt.pointLights.value=P.state.point,mt.pointLightShadows.value=P.state.pointShadow,mt.hemisphereLights.value=P.state.hemi,mt.directionalShadowMap.value=P.state.directionalShadowMap,mt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,mt.spotShadowMap.value=P.state.spotShadowMap,mt.spotLightMatrix.value=P.state.spotLightMatrix,mt.spotLightMap.value=P.state.spotLightMap,mt.pointShadowMap.value=P.state.pointShadowMap,mt.pointShadowMatrix.value=P.state.pointShadowMatrix),O.currentProgram=Pt,O.uniformsList=null,Pt}function rl(v){if(v.uniformsList===null){let q=v.currentProgram.getUniforms();v.uniformsList=Si.seqWithValue(q.seq,v.uniforms)}return v.uniformsList}function al(v,q){let F=yt.get(v);F.outputColorSpace=q.outputColorSpace,F.batching=q.batching,F.batchingColor=q.batchingColor,F.instancing=q.instancing,F.instancingColor=q.instancingColor,F.instancingMorph=q.instancingMorph,F.skinning=q.skinning,F.morphTargets=q.morphTargets,F.morphNormals=q.morphNormals,F.morphColors=q.morphColors,F.morphTargetsCount=q.morphTargetsCount,F.numClippingPlanes=q.numClippingPlanes,F.numIntersection=q.numClipIntersection,F.vertexAlphas=q.vertexAlphas,F.vertexTangents=q.vertexTangents,F.toneMapping=q.toneMapping}function jc(v,q,F,O,P){q.isScene!==!0&&(q=oe),M.resetTextureUnits();let $=q.fog,lt=O.isMeshStandardMaterial?q.environment:null,pt=V===null?_.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:zi,gt=(O.isMeshStandardMaterial?B:x).get(O.envMap||lt),Et=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),mt=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,ee=!!F.morphAttributes.color,ie=Un;O.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ie=_.toneMapping);let Ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Jt=Ee!==void 0?Ee.length:0,Ct=yt.get(O),rn=f.state.lights;if(tt===!0&&(At===!0||v!==A)){let Ne=v===A&&O.id===y;j.setState(O,v,Ne)}let Kt=!1;O.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==rn.state.version||Ct.outputColorSpace!==pt||P.isBatchedMesh&&Ct.batching===!1||!P.isBatchedMesh&&Ct.batching===!0||P.isBatchedMesh&&Ct.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ct.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ct.instancing===!1||!P.isInstancedMesh&&Ct.instancing===!0||P.isSkinnedMesh&&Ct.skinning===!1||!P.isSkinnedMesh&&Ct.skinning===!0||P.isInstancedMesh&&Ct.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ct.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ct.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ct.instancingMorph===!1&&P.morphTexture!==null||Ct.envMap!==gt||O.fog===!0&&Ct.fog!==$||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==j.numPlanes||Ct.numIntersection!==j.numIntersection)||Ct.vertexAlphas!==Et||Ct.vertexTangents!==Pt||Ct.morphTargets!==mt||Ct.morphNormals!==Xt||Ct.morphColors!==ee||Ct.toneMapping!==ie||Ct.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,Ct.__version=O.version);let ze=Ct.currentProgram;Kt===!0&&(ze=As(O,q,P));let li=!1,Ve=!1,Yi=!1,se=ze.getUniforms(),je=Ct.uniforms;if(It.useProgram(ze.program)&&(li=!0,Ve=!0,Yi=!0),O.id!==y&&(y=O.id,Ve=!0),li||A!==v){It.buffers.depth.getReversed()?(rt.copy(v.projectionMatrix),Wh(rt),Xh(rt),se.setValue(L,"projectionMatrix",rt)):se.setValue(L,"projectionMatrix",v.projectionMatrix),se.setValue(L,"viewMatrix",v.matrixWorldInverse);let Mn=se.map.cameraPosition;Mn!==void 0&&Mn.setValue(L,qt.setFromMatrixPosition(v.matrixWorld)),zt.logarithmicDepthBuffer&&se.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&se.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),A!==v&&(A=v,Ve=!0,Yi=!0)}if(P.isSkinnedMesh){se.setOptional(L,P,"bindMatrix"),se.setOptional(L,P,"bindMatrixInverse");let Ne=P.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),se.setValue(L,"boneTexture",Ne.boneTexture,M))}P.isBatchedMesh&&(se.setOptional(L,P,"batchingTexture"),se.setValue(L,"batchingTexture",P._matricesTexture,M),se.setOptional(L,P,"batchingIdTexture"),se.setValue(L,"batchingIdTexture",P._indirectTexture,M),se.setOptional(L,P,"batchingColorTexture"),P._colorsTexture!==null&&se.setValue(L,"batchingColorTexture",P._colorsTexture,M));let Ji=F.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&St.update(P,F,ze),(Ve||Ct.receiveShadow!==P.receiveShadow)&&(Ct.receiveShadow=P.receiveShadow,se.setValue(L,"receiveShadow",P.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(je.envMap.value=gt,je.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&q.environment!==null&&(je.envMapIntensity.value=q.environmentIntensity),Ve&&(se.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&$c(je,Yi),$&&O.fog===!0&&at.refreshFogUniforms(je,$),at.refreshMaterialUniforms(je,O,H,Q,f.state.transmissionRenderTarget[v.id]),Si.upload(L,rl(Ct),je,M)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Si.upload(L,rl(Ct),je,M),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&se.setValue(L,"center",P.center),se.setValue(L,"modelViewMatrix",P.modelViewMatrix),se.setValue(L,"normalMatrix",P.normalMatrix),se.setValue(L,"modelMatrix",P.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Ne=O.uniformsGroups;for(let Mn=0,bn=Ne.length;Mn<bn;Mn++){let ol=Ne[Mn];R.update(ol,ze),R.bind(ol,ze)}}return ze}function $c(v,q){v.ambientLightColor.needsUpdate=q,v.lightProbe.needsUpdate=q,v.directionalLights.needsUpdate=q,v.directionalLightShadows.needsUpdate=q,v.pointLights.needsUpdate=q,v.pointLightShadows.needsUpdate=q,v.spotLights.needsUpdate=q,v.spotLightShadows.needsUpdate=q,v.rectAreaLights.needsUpdate=q,v.hemisphereLights.needsUpdate=q}function th(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,q,F){yt.get(v.texture).__webglTexture=q,yt.get(v.depthTexture).__webglTexture=F;let O=yt.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,q){let F=yt.get(v);F.__webglFramebuffer=q,F.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(v,q=0,F=0){V=v,E=q,w=F;let O=!0,P=null,$=!1,lt=!1;if(v){let gt=yt.get(v);if(gt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(L.FRAMEBUFFER,null),O=!1;else if(gt.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(gt.__hasExternalTextures)M.rebindTextures(v,yt.get(v.texture).__webglTexture,yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let mt=v.depthTexture;if(gt.__boundDepthTexture!==mt){if(mt!==null&&yt.has(mt)&&(v.width!==mt.image.width||v.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}let Et=v.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(lt=!0);let Pt=yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[q])?P=Pt[q][F]:P=Pt[q],$=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?P=yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?P=Pt[F]:P=Pt,S.copy(v.viewport),N.copy(v.scissor),D=v.scissorTest}else S.copy(vt).multiplyScalar(H).floor(),N.copy(Nt).multiplyScalar(H).floor(),D=jt;if(It.bindFramebuffer(L.FRAMEBUFFER,P)&&O&&It.drawBuffers(v,P),It.viewport(S),It.scissor(N),It.setScissorTest(D),$){let gt=yt.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt.__webglTexture,F)}else if(lt){let gt=yt.get(v.texture),Et=q||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,Et)}y=-1},this.readRenderTargetPixels=function(v,q,F,O,P,$,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){It.bindFramebuffer(L.FRAMEBUFFER,pt);try{let gt=v.texture,Et=gt.format,Pt=gt.type;if(!zt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=v.width-O&&F>=0&&F<=v.height-P&&L.readPixels(q,F,O,P,Ut.convert(Et),Ut.convert(Pt),$)}finally{let gt=V!==null?yt.get(V).__webglFramebuffer:null;It.bindFramebuffer(L.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,q,F,O,P,$,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){let gt=v.texture,Et=gt.format,Pt=gt.type;if(!zt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=v.width-O&&F>=0&&F<=v.height-P){It.bindFramebuffer(L.FRAMEBUFFER,pt);let mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,mt),L.bufferData(L.PIXEL_PACK_BUFFER,$.byteLength,L.STREAM_READ),L.readPixels(q,F,O,P,Ut.convert(Et),Ut.convert(Pt),0);let Xt=V!==null?yt.get(V).__webglFramebuffer:null;It.bindFramebuffer(L.FRAMEBUFFER,Xt);let ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gh(L,ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,$),L.deleteBuffer(mt),L.deleteSync(ee),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,q=null,F=0){v.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,v=arguments[1]);let O=Math.pow(2,-F),P=Math.floor(v.image.width*O),$=Math.floor(v.image.height*O),lt=q!==null?q.x:0,pt=q!==null?q.y:0;M.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,lt,pt,P,$),It.unbindTexture()},this.copyTextureToTexture=function(v,q,F=null,O=null,P=0){v.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],q=arguments[2],P=arguments[3]||0,F=null);let $,lt,pt,gt,Et,Pt,mt,Xt,ee,ie=v.isCompressedTexture?v.mipmaps[P]:v.image;F!==null?($=F.max.x-F.min.x,lt=F.max.y-F.min.y,pt=F.isBox3?F.max.z-F.min.z:1,gt=F.min.x,Et=F.min.y,Pt=F.isBox3?F.min.z:0):($=ie.width,lt=ie.height,pt=ie.depth||1,gt=0,Et=0,Pt=0),O!==null?(mt=O.x,Xt=O.y,ee=O.z):(mt=0,Xt=0,ee=0);let Ee=Ut.convert(q.format),Jt=Ut.convert(q.type),Ct;q.isData3DTexture?(M.setTexture3D(q,0),Ct=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(M.setTexture2DArray(q,0),Ct=L.TEXTURE_2D_ARRAY):(M.setTexture2D(q,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);let rn=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ze=L.getParameter(L.UNPACK_SKIP_PIXELS),li=L.getParameter(L.UNPACK_SKIP_ROWS),Ve=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ie.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt);let Yi=v.isDataArrayTexture||v.isData3DTexture,se=q.isDataArrayTexture||q.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let je=yt.get(v),Ji=yt.get(q),Ne=yt.get(je.__renderTarget),Mn=yt.get(Ji.__renderTarget);It.bindFramebuffer(L.READ_FRAMEBUFFER,Ne.__webglFramebuffer),It.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let bn=0;bn<pt;bn++)Yi&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(v).__webglTexture,P,Pt+bn),v.isDepthTexture?(se&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(q).__webglTexture,P,ee+bn),L.blitFramebuffer(gt,Et,$,lt,mt,Xt,$,lt,L.DEPTH_BUFFER_BIT,L.NEAREST)):se?L.copyTexSubImage3D(Ct,P,mt,Xt,ee+bn,gt,Et,$,lt):L.copyTexSubImage2D(Ct,P,mt,Xt,ee+bn,gt,Et,$,lt);It.bindFramebuffer(L.READ_FRAMEBUFFER,null),It.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else se?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Ct,P,mt,Xt,ee,$,lt,pt,Ee,Jt,ie.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,P,mt,Xt,ee,$,lt,pt,Ee,ie.data):L.texSubImage3D(Ct,P,mt,Xt,ee,$,lt,pt,Ee,Jt,ie):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,P,mt,Xt,$,lt,Ee,Jt,ie.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,P,mt,Xt,ie.width,ie.height,Ee,ie.data):L.texSubImage2D(L.TEXTURE_2D,P,mt,Xt,$,lt,Ee,Jt,ie);L.pixelStorei(L.UNPACK_ROW_LENGTH,rn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,li),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve),P===0&&q.generateMipmaps&&L.generateMipmap(Ct),It.unbindTexture()},this.copyTextureToTexture3D=function(v,q,F=null,O=null,P=0){return v.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],q=arguments[3],P=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,q,F,O,P)},this.initRenderTarget=function(v){yt.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),It.unbindTexture()},this.resetState=function(){E=0,w=0,V=null,It.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var hr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ls=class extends Cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},oc=new le,uo=new tr,Fs=new Vi,Os=new T,dr=class extends Me{constructor(t=new Ae,e=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=r,t.ray.intersectsSphere(Fs)===!1)return;oc.copy(i).invert(),uo.copy(t.ray).applyMatrix4(oc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,C=p;m<C;m++){let g=c.getX(m);Os.fromBufferAttribute(u,g),lc(Os,g,l,i,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,C=p;m<C;m++)Os.fromBufferAttribute(u,m),lc(Os,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lc(s,t,e,n,i,r,a){let o=uo.distanceSqToPoint(s);if(o<e){let l=new T;uo.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Di=class extends Ue{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new _t:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],r=[],a=[],o=new T,l=new le;for(let p=0;p<=t;p++){let m=p/t;i[p]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ie(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Ie(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends Je{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fo=class extends fr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ko(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var zs=new T,ra=new ko,aa=new ko,oa=new ko,po=class extends Je{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(zs.subVectors(i[0],i[1]).add(i[0]),c=zs);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(zs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=zs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),C=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);C<1e-4&&(C=1),m<1e-4&&(m=C),g<1e-4&&(g=C),ra.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,C,g),aa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,C,g),oa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,C,g)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),aa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),oa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ra.calc(l),aa.calc(l),oa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cc(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function zg(s,t){let e=1-s;return e*e*t}function kg(s,t){return 2*(1-s)*s*t}function Hg(s,t){return s*s*t}function is(s,t,e,n){return zg(s,t)+kg(s,e)+Hg(s,n)}function Gg(s,t){let e=1-s;return e*e*e*t}function Wg(s,t){let e=1-s;return 3*e*e*s*t}function Xg(s,t){return 3*(1-s)*s*s*t}function Yg(s,t){return s*s*s*t}function ss(s,t,e,n,i){return Gg(s,t)+Wg(s,e)+Xg(s,n)+Yg(s,i)}var go=class extends Je{constructor(t=new _t,e=new _t,n=new _t,i=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ss(t,i.x,r.x,a.x,o.x),ss(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mo=class extends Je{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ss(t,i.x,r.x,a.x,o.x),ss(t,i.y,r.y,a.y,o.y),ss(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends Je{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends Je{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends Je{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(is(t,i.x,r.x,a.x),is(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ni=class extends Je{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(is(t,i.x,r.x,a.x),is(t,i.y,r.y,a.y),is(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(cc(o,l.x,c.x,h.x,u.x),cc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new _t().fromArray(i))}return this}},Jg=Object.freeze({__proto__:null,ArcCurve:fo,CatmullRomCurve3:po,CubicBezierCurve:go,CubicBezierCurve3:mo,EllipseCurve:fr,LineCurve:Ao,LineCurve3:xo,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Ni,SplineCurve:vo});var ei=class s extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new T,h=new _t;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cs=class s extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,C=[],g=n/2,f=0;b(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function b(){let _=new T,U=new T,E=0,w=(e-t)/n;for(let V=0;V<=r;V++){let y=[],A=V/r,S=A*(e-t)+t;for(let N=0;N<=i;N++){let D=N/i,z=D*l+o,K=Math.sin(z),G=Math.cos(z);U.x=S*K,U.y=-A*n+g,U.z=S*G,u.push(U.x,U.y,U.z),_.set(K,w,G).normalize(),d.push(_.x,_.y,_.z),p.push(D,1-A),y.push(m++)}C.push(y)}for(let V=0;V<i;V++)for(let y=0;y<r;y++){let A=C[y][V],S=C[y+1][V],N=C[y+1][V+1],D=C[y][V+1];(t>0||y!==0)&&(h.push(A,S,D),E+=3),(e>0||y!==r-1)&&(h.push(S,N,D),E+=3)}c.addGroup(f,E,0),f+=E}function I(_){let U=m,E=new _t,w=new T,V=0,y=_===!0?t:e,A=_===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*A,0),d.push(0,A,0),p.push(.5,.5),m++;let S=m;for(let N=0;N<=i;N++){let z=N/i*l+o,K=Math.cos(z),G=Math.sin(z);w.x=y*G,w.y=g*A,w.z=y*K,u.push(w.x,w.y,w.z),d.push(0,A,0),E.x=K*.5+.5,E.y=G*.5*A+.5,p.push(E.x,E.y),m++}for(let N=0;N<i;N++){let D=U+N,z=S+N;_===!0?h.push(z,z+1,D):h.push(z+1,z,D),V+=3}c.addGroup(f,V,_===!0?1:2),f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bi=class s extends cs{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fi=class s extends Ae{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,p=new T,m=new _t;for(let C=0;C<=i;C++){for(let g=0;g<=n;g++){let f=r+g/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let C=0;C<i;C++){let g=C*(n+1);for(let f=0;f<n;f++){let b=f+g,I=b,_=b+n+1,U=b+n+2,E=b+1;o.push(I,_,E),o.push(_,U,E)}}this.setIndex(o),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ni=class s extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,p=[],m=[],C=[],g=[];for(let f=0;f<=n;f++){let b=[],I=f/n,_=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let U=0;U<=e;U++){let E=U/e;u.x=-t*Math.cos(i+E*r)*Math.sin(a+I*o),u.y=t*Math.cos(a+I*o),u.z=t*Math.sin(i+E*r)*Math.sin(a+I*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),C.push(d.x,d.y,d.z),g.push(E+_,1-I),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let I=h[f][b+1],_=h[f][b],U=h[f+1][b],E=h[f+1][b+1];(f!==0||a>0)&&p.push(I,_,E),(f!==n-1||l<Math.PI)&&p.push(_,U,E)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(C,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var hs=class s extends Ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let C=m/i*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(C),u.y=(t+e*Math.cos(g))*Math.sin(C),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(C),h.y=t*Math.sin(C),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let C=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,f=(i+1)*(p-1)+m,b=(i+1)*p+m;a.push(C,g,b),a.push(g,f,b)}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var pr=class s extends Ae{constructor(t=new Ni(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new _t,h=new T,u=[],d=[],p=[],m=[];C(),this.setIndex(m),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function C(){for(let I=0;I<e;I++)g(I);g(r===!1?e:0),b(),f()}function g(I){h=t.getPointAt(I/e,h);let _=a.normals[I],U=a.binormals[I];for(let E=0;E<=i;E++){let w=E/i*Math.PI*2,V=Math.sin(w),y=-Math.cos(w);l.x=y*_.x+V*U.x,l.y=y*_.y+V*U.y,l.z=y*_.z+V*U.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let I=1;I<=e;I++)for(let _=1;_<=i;_++){let U=(i+1)*(I-1)+(_-1),E=(i+1)*I+(_-1),w=(i+1)*I+_,V=(i+1)*(I-1)+_;m.push(U,E,V),m.push(E,w,V)}}function b(){for(let I=0;I<=e;I++)for(let _=0;_<=i;_++)c.x=I/e,c.y=_/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Jg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var gr=class extends Cn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ii=class extends Cn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ks(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Kg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Oi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_o=class extends Oi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case dl:r=t,o=2*e-n;break;case fl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dl:a=t,l=2*n-e;break;case fl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),C=m*m,g=C*m,f=-d*g+2*d*C-d*m,b=(1+d)*g+(-1.5-2*d)*C+(-.5+d)*m+1,I=(-1-p)*g+(1.5+p)*C+.5*m,_=p*g-p*C;for(let U=0;U!==o;++U)r[U]=f*a[h+U]+b*a[c+U]+I*a[l+U]+_*a[u+U];return r}},yo=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Io=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ke=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _o(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Rr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Rr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Kg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let C=e[u+m];if(C!==e[d+m]||C!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=Ya;var si=class extends Ke{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Ks;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends Ke{};Mo.prototype.ValueTypeName="color";var bo=class extends Ke{};bo.prototype.ValueTypeName="number";var So=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},mr=class extends Ke{InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Ke{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Ks;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Ke{};Eo.prototype.ValueTypeName="vector";var wo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Zg=new wo,To=class{constructor(t){this.manager=t!==void 0?t:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};To.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},xr=class extends Ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},la=new le,hc=new T,uc=new T,Ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(hc),uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uc),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qo=class extends Ro{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new qo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var vr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=dc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function dc(){return performance.now()}var Ho="\\[\\]\\.:\\/",Qg=new RegExp("["+Ho+"]","g"),Go="[^"+Ho+"]",jg="[^"+Ho.replace("\\.","")+"]",$g=/((?:WC+[\/:])*)/.source.replace("WC",Go),tm=/(WCOD+)?/.source.replace("WCOD",jg),em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Go),nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Go),im=new RegExp("^"+$g+tm+em+nm+"$"),sm=["material","materials","bones","map"],Vo=class{constructor(t,e,n){let i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qg,"")}static parseTrackName(t){let e=im.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);sm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Vo;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);var ai={fly:{v:[1,2],speed:2,move:"buzz",fly:!0,r:.22},mosquito:{v:[2,4],speed:2.8,move:"zig",fly:!0,r:.24},beetle:{v:[3,7],speed:.9,move:"crawl",r:.32},dragonfly:{v:[5,14],speed:4.2,move:"dart",fly:!0,r:.45},fish:{v:[8,22],speed:1.6,move:"fish",r:.5},snake:{v:[12,40],speed:1.8,move:"slither",danger:!0,r:.55},frog:{v:[6,40],speed:1.2,move:"hop",danger:!0,r:.6}},qe=[{id:1,ar:"\u0641\u062C\u0631 \u0636\u0628\u0627\u0628\u064A",en:"Misty Dawn",start:4,evolve:15,boss:26,kinds:["fly","fly","mosquito","beetle","dragonfly","frog"],heron:!1,bossKind:"bigbo",bossPower:40,bossHp:40},{id:2,ar:"\u0645\u0633\u062A\u0646\u0642\u0639 \u0627\u0644\u0632\u0646\u0627\u0628\u0642",en:"Lily Marsh",start:8,evolve:30,boss:50,kinds:["fly","mosquito","beetle","dragonfly","dragonfly","fish","frog","snake"],heron:!0,bossKind:"snake",bossPower:70,bossHp:60},{id:3,ar:"\u0645\u0633\u062A\u0646\u0642\u0639 \u0627\u0644\u063A\u0631\u0648\u0628",en:"Sunset Swamp",start:15,evolve:60,boss:90,kinds:["mosquito","dragonfly","dragonfly","fish","fish","frog","snake","snake"],heron:!0,bossKind:"heron",bossPower:130,bossHp:90},{id:4,ar:"\u0628\u0631\u0643\u0629 \u0627\u0644\u0642\u0645\u0631",en:"Moonlit Pond",start:20,evolve:80,boss:130,kinds:["mosquito","dragonfly","dragonfly","fish","fish","frog","snake","frog"],heron:!0,bossKind:"bigbo2",bossPower:190,bossHp:110},{id:5,ar:"\u0645\u0633\u062A\u0646\u0642\u0639 \u0627\u0644\u0632\u0645\u0631\u062F",en:"Emerald Fen",start:30,evolve:110,boss:180,kinds:["dragonfly","fish","fish","fish","frog","snake","snake","snake"],heron:!0,bossKind:"snake2",bossPower:260,bossHp:130},{id:6,ar:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0623\u0633\u0627\u0637\u064A\u0631",en:"Legend Lake",start:40,evolve:150,boss:250,kinds:["dragonfly","fish","fish","frog","frog","snake","snake","beetle"],heron:!0,bossKind:"heron2",bossPower:360,bossHp:160}],_n={bigbo:{ar:"\u0628\u064A\u062C \u0628\u0648",en:"Big Bo",r:1.6},snake:{ar:"\u0627\u0644\u062B\u0639\u0628\u0627\u0646 \u0633\u0644\u0627\u064A",en:"Sly the Snake",r:1.4},heron:{ar:"\u0645\u0627\u0644\u0643 \u0627\u0644\u062D\u0632\u064A\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0642",en:"The Grand Heron",r:2},bigbo2:{ar:"\u0627\u0644\u062C\u062F \u0628\u0648",en:"Grandpa Bo",r:1.9},snake2:{ar:"\u0627\u0644\u0645\u0644\u0643\u0629 \u0633\u0644\u0627\u064A",en:"Queen Sly",r:1.6},heron2:{ar:"\u0645\u0644\u0643 \u0645\u0627\u0644\u0643 \u0627\u0644\u062D\u0632\u064A\u0646",en:"The Heron King",r:2.3}},Fe=s=>String(s).replace(/\d$/,""),rm=3,Wo=.55;function am(s){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var om=s=>s<=3?s:Math.round(3+(s-3)*.28),yn=s=>.45*Math.pow(Math.max(1,s)/4,.42),br=class{constructor(t={}){var e,n;this.levelIndex=Math.max(0,Math.min(qe.length-1,(e=t.level)!=null?e:0)),this.level=qe[this.levelIndex],this.easy=!!t.easy,this.rand=am((n=t.seed)!=null?n:3),this.frog={x:0,z:6,power:this.level.start,face:Math.PI,hopT:0,leapT:0,leapCd:0,vx:0,vz:0,invul:0,stage:1},this.hearts=this.easy?4:3,this.maxHearts=this.hearts,this.critters=[],this.tongue=null,this.herons=[],this.boss=null,this.phase="grow",this.state="play",this.t=0,this.nextId=1,this.eaten=0,this.drops=0,this.combo=0,this.comboT=0,this.tongueCd=0,this.move={x:0,z:0},this.events=[],this.pending=[],this.heronT=8;for(let i=0;i<11;i++)this._spawn(!0)}get r(){return yn(this.frog.power)}get goal(){return this.phase==="grow"?this.level.evolve:this.phase==="grow2"?this.level.boss:null}get airborne(){return this.frog.leapT>0}setMove(t,e){let n=Math.hypot(t,e);this.move=n>1?{x:t/n,z:e/n}:{x:t,z:e}}leap(){let t=this.frog;if(this.state!=="play"||t.leapCd>0||t.leapT>0)return!1;let e=this.move.x,n=this.move.z;Math.hypot(e,n)<.2&&(e=Math.sin(t.face),n=Math.cos(t.face));let i=Math.hypot(e,n)||1;return t.leapT=Wo,t.leapCd=rm,t.lx=e/i*(6+this.r*2)/Wo,t.lz=n/i*(6+this.r*2)/Wo,this.pending.push({type:"leap"}),!0}_value(t){let[e,n]=ai[t].v,i=this.frog.power,r=this.rand()<(ai[t].danger?.45:.22),a=r?Math.round(i*(1.2+this.rand()*.9)):Math.max(1,Math.round(i*(.05+this.rand()*.3)));return(t==="fly"||t==="mosquito")&&(a=Math.round(e+this.rand()*(n-e))+(r?0:Math.floor(i*.05))),Math.max(e,Math.min(Math.max(n,Math.round(i*2.2)),a))}_spawn(t=!1){let e=this.level.kinds,n=e[Math.floor(this.rand()*e.length)],i=ai[n],r,a;for(let c=0;c<12&&(r=(this.rand()*2-1)*14,a=(this.rand()*2-1)*21,!(Math.hypot(r-this.frog.x,a-this.frog.z)>(t?6:9)));c++);let o=this._value(n);(n==="frog"||n==="snake")&&(o=Math.max(o,Math.round(this.frog.power*(this.rand()<.5?.6:1.4))));let l={id:this.nextId++,kind:n,x:r,z:a,v:o,a:this.rand()*Math.PI*2,t:this.rand()*10,r:i.r*(.8+Math.min(1.8,o/12)*.35),y:i.fly?.9:0,air:0,aim:0,aimX:0,aimZ:0,lash:0,cool:2+this.rand()*3,hopT:0};n==="fish"&&(l.jumpT=1+this.rand()*3),this.critters.push(l),this.events.push({type:"spawn",id:l.id,kind:n})}_moveCritter(t,e){let n=ai[t.kind],i=this.frog;t.t+=e;let r=i.x-t.x,a=i.z-t.z,o=Math.hypot(r,a)||1,l=t.v>i.power,c=n.speed;switch(n.move){case"buzz":t.a+=Math.sin(t.t*1.7)*2.2*e,t.y=.9+Math.sin(t.t*5)*.25;break;case"zig":t.a+=(Math.sin(t.t*4)>0?3:-3)*e,t.y=1+Math.sin(t.t*7)*.3;break;case"crawl":t.a+=Math.sin(t.t*.6)*.8*e;break;case"dart":{let h=t.t%2.4/2.4;c=h<.3?n.speed*1.6:.3,h<.02&&(t.a+=(this.rand()-.5)*3),t.y=1.2;break}case"fish":{c=t.air>0?3:1.1,t.a+=Math.sin(t.t*.9)*e,t.air>0?(t.air-=e,t.y=Math.sin((1-t.air/1.1)*Math.PI)*1.8,t.air<=0&&(t.y=0,this.events.push({type:"splash",x:t.x,z:t.z}))):(t.jumpT-=e,t.jumpT<=0&&(t.air=1.1,t.jumpT=2+this.rand()*3,this.events.push({type:"splash",x:t.x,z:t.z})));break}case"slither":t.a+=Math.sin(t.t*2.2)*2.4*e;break;case"hop":default:{t.hopT-=e,c=t.hopT>0?n.speed*3:0,t.hopT<=-.6&&(t.hopT=.4,t.a+=(this.rand()-.5)*2);break}}n.danger&&l&&o<9&&this.state==="play"&&!this.airborne?t.a=Uc(t.a,Math.atan2(r,a),2*e):!l&&o<4.5+this.r&&!n.danger&&(t.a=Uc(t.a,Math.atan2(-r,-a),4*e),c*=1.5),(t.aim>0||t.lash>0)&&(c=0),t.x+=Math.sin(t.a)*c*e,t.z+=Math.cos(t.a)*c*e,Math.abs(t.x)>15-.5&&(t.x=Math.sign(t.x)*(15-.5),t.a=-t.a),Math.abs(t.z)>22-.5&&(t.z=Math.sign(t.z)*(22-.5),t.a=Math.PI-t.a),n.danger&&l&&this.state==="play"&&this.t>8&&this._attack(t,o,e,t.kind==="snake"?2.6+t.r:3.6+t.r)}_attack(t,e,n,i){let r=this.frog;if(t.cool-=n,t.aim>0){if(t.aim-=n,t.aim<=0){t.lash=.3;let a=t.aimX-t.x,o=t.aimZ-t.z,l=Math.hypot(a,o)||1,c=r.x-t.x,h=r.z-t.z,u=(c*a+h*o)/l,d=Math.abs(c*o-h*a)/l;this.events.push({type:"lash",id:t.id,kind:t.kind}),u>0&&u<i+.4&&d<this.r+.35&&this._hurt(t),t.cool=2.4+this.rand()*1.5}}else if(t.lash>0)t.lash-=n;else if(t.cool<=0&&e<i&&!this.airborne&&r.invul<=0){t.aim=this.easy?1.3:.9;let a=Math.hypot(r.x-t.x,r.z-t.z)||1;t.aimX=t.x+(r.x-t.x)/a*i,t.aimZ=t.z+(r.z-t.z)/a*i,this.events.push({type:"aim",id:t.id})}}_hurt(t){let e=this.frog;if(e.invul>0||this.airborne||this.state!=="play")return;this.hearts--,e.invul=2,this.combo=0;let n=e.x-(t?t.x:e.x),i=e.z-(t?t.z:e.z+1),r=Math.hypot(n,i)||1;e.kx=n/r*8,e.kz=i/r*8,this.events.push({type:"hurt",by:t?t.kind:"heron",hearts:this.hearts}),this.hearts<=0&&(this.state="lost",this.result=this._result(!1,t?t.kind:"heron"),this.events.push({type:"gulped",by:this.result.by}))}_tongueTarget(){let t=this.frog,e=2.4+this.r*2.6,n=null;for(let i of this.critters){if(i.v>t.power||i.gone||i.kind==="fish"&&i.air<=0)continue;let r=Math.hypot(i.x-t.x,i.z-t.z)-i.r;r<e&&(!n||r<n.d)&&(n={c:i,d:r})}if(this.boss&&this.boss.hp>0&&t.power>=this.level.boss){let i=this.boss,r=Math.hypot(i.x-t.x,i.z-t.z)-i.r;r<e+.6&&(!n||r<n.d+1)&&(n={c:i,d:r,boss:!0})}return n}_tongueStep(t){var r,a;let e=this.frog,n=this.tongue;if(!n){if(this.tongueCd-=t,this.tongueCd>0||this.state!=="play")return;let o=this._tongueTarget();if(!o)return;this.tongue={id:o.c.id,boss:!!o.boss,phase:"out",t:0,len:0,tx:o.c.x,tz:o.c.z,ty:(r=o.c.y)!=null?r:0,air:this.airborne},e.face=Math.atan2(o.c.x-e.x,o.c.z-e.z),this.events.push({type:"tongue"});return}let i=n.boss?this.boss:this.critters.find(o=>o.id===n.id);if(n.t+=t,n.phase==="out"){i&&!n.caught&&(n.tx=i.x,n.tz=i.z,n.ty=(a=i.y)!=null?a:0);let o=Math.hypot(n.tx-e.x,n.tz-e.z);if(n.len=Math.min(o,n.len+t*34),n.len>=o-.05)if(n.phase="back",n.t=0,i&&n.boss){let l=Math.max(2,Math.round(e.power*.14));i.hp=Math.max(0,i.hp-l),i.flash=.2,this.events.push({type:"bossHit",dmg:l,hp:i.hp}),i.hp<=0&&this._bossDown()}else i&&i.v<=e.power?(n.caught=i,i.gone=!0,this.events.push({type:"stick",kind:i.kind})):this.events.push({type:"miss"})}else{n.len=Math.max(0,n.len-t*(n.caught?22:30));let o=Math.hypot(n.tx-e.x,n.tz-e.z)||1;n.caught&&(n.caught.x=e.x+(n.tx-e.x)/o*n.len,n.caught.z=e.z+(n.tz-e.z)/o*n.len),n.len<=0&&(n.caught&&this._eat(n.caught,n.air),this.tongue=null,this.tongueCd=.4)}}_eat(t,e){let n=this.frog;this.critters=this.critters.filter(r=>r!==t),this.combo=this.comboT>0?this.combo+1:1,this.comboT=2.2;let i=(e?1:0)+(this.combo>=3?1:0);n.power+=om(t.v)+i,this.eaten++,this.drops+=1+Math.floor(t.v/5),this.events.push({type:"eat",kind:t.kind,v:t.v,bonus:i,air:e,combo:this.combo,power:n.power}),this.phase==="grow"&&n.power>=this.level.evolve&&(this.phase="grow2",n.stage=2,this.events.push({type:"evolve",stage:2})),this.phase==="grow2"&&n.power>=this.level.boss&&(this.phase="boss",n.stage=3,this._bossIn())}_bossIn(){let t=this.level,e=this.frog.z>0?-17:17;this.boss={kind:t.bossKind,x:0,z:e,hp:t.bossHp*(this.easy?.75:1),max:t.bossHp*(this.easy?.75:1),v:t.bossPower,r:_n[t.bossKind].r,a:0,t:0,aim:0,lash:0,cool:3,flash:0,y:0,id:-1},this.boss.max=this.boss.hp,this.events.push({type:"boss",kind:t.bossKind})}_bossStep(t){let e=this.boss,n=this.frog;if(e.t+=t,e.flash=Math.max(0,e.flash-t),e.hp<=0)return;let i=n.x-e.x,r=n.z-e.z,a=Math.hypot(i,r)||1,o=e.r+4.2,l=e.aim>0||e.lash>0?0:Fe(e.kind)==="heron"?2.4:Fe(e.kind)==="snake"?2:Math.sin(e.t*4)>.2?3.2:0;if(a>o*.7&&(e.x+=i/a*l*t,e.z+=r/a*l*t),e.a=Math.atan2(i,r),e.cool-=t,e.aim>0){if(e.aim-=t,e.aim<=0){e.lash=.35;let c=e.aimX-e.x,h=e.aimZ-e.z,u=Math.hypot(c,h)||1,d=(i*c+r*h)/u,p=Math.abs(i*h-r*c)/u;this.events.push({type:"lash",id:-1,kind:e.kind}),d>0&&d<o+.5&&p<this.r+.5&&this._hurt(e),e.cool=(this.easy?2.6:1.9)+this.rand()}}else e.lash>0?e.lash-=t:e.cool<=0&&a<o+1&&(e.aim=this.easy?1.4:1,e.aimX=e.x+i/a*o,e.aimZ=e.z+r/a*o,this.events.push({type:"aim",id:-1}));e.x=Math.max(-14,Math.min(14,e.x)),e.z=Math.max(-21,Math.min(21,e.z))}_bossDown(){this.state="won",this.result=this._result(!0),this.events.push({type:"bossDown",kind:this.boss.kind})}_heronStep(t){if(!(!this.level.heron||this.phase==="boss")){if(this.heronT-=t,this.heronT<=0){let e=this.frog;this.herons.push({x:e.x+this.move.x*2,z:e.z+this.move.z*2,t:this.easy?1.8:1.3,r:1.5}),this.heronT=(this.easy?12:8)+this.rand()*4,this.events.push({type:"heron"})}for(let e of this.herons)e.t-=t,e.t<=0&&!e.struck&&(e.struck=!0,this.events.push({type:"strike",x:e.x,z:e.z}),Math.hypot(this.frog.x-e.x,this.frog.z-e.z)<e.r+this.r*.5&&this._hurt(null));this.herons=this.herons.filter(e=>e.t>-.6)}}step(t){var r,a,o,l;if(this.events=this.pending,this.pending=[],this.state!=="play")return this.events;this.t+=t;let e=this.frog;e.invul=Math.max(0,e.invul-t),e.leapCd=Math.max(0,e.leapCd-t),this.comboT-=t,this.comboT<=0&&(this.combo=0);let n=3.4+this.r*1.4;if(e.leapT>0)e.leapT-=t,e.x+=e.lx*t,e.z+=e.lz*t,e.leapT<=0&&(e.leapT=0,this.events.push({type:"land"}));else{let c=Math.hypot(this.move.x,this.move.z);c>.1?(e.face=this.tongue?e.face:Math.atan2(this.move.x,this.move.z),e.hopT+=t*(2.6+c),e.hopT>=1&&(e.hopT-=1,this.events.push({type:"hop"}))):e.hopT=Math.max(0,e.hopT-t*3),e.x+=this.move.x*n*t+((r=e.kx)!=null?r:0)*t,e.z+=this.move.z*n*t+((a=e.kz)!=null?a:0)*t}e.kx=((o=e.kx)!=null?o:0)*Math.pow(.02,t),e.kz=((l=e.kz)!=null?l:0)*Math.pow(.02,t),e.x=Math.max(-15+.6,Math.min(15-.6,e.x)),e.z=Math.max(-22+.6,Math.min(22-.6,e.z));for(let c of this.critters)this._moveCritter(c,t);for(let c of this.critters)ai[c.kind].danger&&c.v>e.power&&Math.hypot(c.x-e.x,c.z-e.z)<c.r+this.r*.8&&this._hurt(c);this.boss&&(this._bossStep(t),this.boss.hp>0&&Math.hypot(this.boss.x-e.x,this.boss.z-e.z)<this.boss.r+this.r*.6&&this._hurt(this.boss)),this._heronStep(t),this._tongueStep(t);let i=this.phase==="boss"?7:10;return this.critters.length<i&&this.rand()<t*.45&&this._spawn(),this.critters=this.critters.filter(c=>c.gone||c.v>=e.power*.04||c.kind==="fly"),this.events}_result(t,e){let n=this.maxHearts-this.hearts;return{won:t,stars:t?1+(n<=1?1:0)+(n===0?1:0):0,power:this.frog.power,eaten:this.eaten,drops:this.drops,by:e}}};function Uc(s,t,e){let n=t-s;return n=Math.atan2(Math.sin(n),Math.cos(n)),s+Math.max(-e,Math.min(e,n))}function Dc(s){let t=s&&typeof s=="object"?s:{},e={};if(t.stars&&typeof t.stars=="object")for(let a of qe){let o=Math.floor(Number(t.stars[a.id]));o>=1&&o<=3&&(e[a.id]=o)}let n=Math.floor(Number(t.unlocked)),i=Math.floor(Number(t.drops)),r={};if(t.best&&typeof t.best=="object")for(let a of qe){let o=Math.floor(Number(t.best[a.id]));o>0&&(r[a.id]=Math.min(o,99999))}return{unlocked:Math.min(qe.length,Math.max(Number.isFinite(n)?Math.max(1,n):1,...Object.keys(e).map(a=>Number(a)+1))),stars:e,drops:Number.isFinite(i)&&i>0?Math.min(i,999999):0,best:r,muted:t.muted===!0}}var Hi=new Map;function Tt(s,t=0,e=1){let n=`${s}|${t}|${e}`;return Hi.has(n)||Hi.set(n,new ii({color:s,emissive:t,emissiveIntensity:e})),Hi.get(n)}function Fn(s){let t=`p${s}`;return Hi.has(t)||Hi.set(t,new gr({color:s,shininess:60,specular:6715238})),Hi.get(t)}var oi=(s,t={})=>new Pi({color:s,...t});function Wi(s,t,e,n,i=0,r=0,a=0){let o=new Yt(new vn(s,t,e),n);return o.position.set(i,r,a),o}function Gi(s,t,e,n,i=0,r=0,a=0,o=14){let l=new Yt(new cs(s,t,e,o),n);return l.position.set(i,r,a),l}function Ft(s,t,e=0,n=0,i=0,r=1,a=1,o=1,l=16){let c=new Yt(new ni(s,l,Math.max(8,l-4)),t);return c.position.set(e,n,i),c.scale.set(r,a,o),c}function lm(s,t,e,n,i,r){let a=[];for(let o of[-1,1]){let l=new re;l.position.set(o*t,e,n),l.add(Ft(i,Tt(r),0,0,0,1,1,1,14)),l.add(Ft(i*.86,Tt(16777215),0,i*.15,i*.25,1,1,1,14)),l.add(Ft(i*.45,Tt(1118481),o*i*.05,i*.2,i*.75,1,1,.6,10)),l.add(Ft(i*.15,Tt(16777215),o*i*.05+i*.15,i*.4,i*.95,1,1,.5,6));let c=Ft(i*1.02,Tt(r),0,0,0,1,1,1,14);c.scale.y=.05,c.position.y=i*.95,l.add(c),s.add(l),a.push({e:l,lid:c})}return a}function Xo(s={body:7002170,belly:14219432,dark:3840554}){let t=new re,e=new re;t.add(e);let n=Fn(s.body);e.add(Ft(.5,n,0,.42,0,1.05,.72,1,20)),e.add(Ft(.42,Tt(s.belly),0,.32,.12,1,.6,.9));let i=Ft(.26,Tt(s.belly),0,.3,.38,1.2,.8,.9);e.add(i),e.add(Ft(.42,n,0,.6,.2,1.1,.7,.9,18));let r=new Yt(new hs(.3,.025,6,20,Math.PI),Tt(s.dark));r.rotation.set(.2,0,Math.PI),r.position.set(0,.52,.5),e.add(r);for(let u of[-1,1])e.add(Ft(.06,Tt(16751280),u*.32,.55,.47,1,.6,.4));let a=lm(e,.25,.86,.22,.17,s.body),o=[];for(let u of[-1,1]){let d=new re;d.position.set(u*.42,.18,-.2),d.add(Ft(.22,n,0,.05,0,1,.8,1.6)),d.add(Ft(.14,n,u*.08,-.05,.3,1.4,.5,1.2)),e.add(d),o.push(d);let p=new re;p.position.set(u*.3,.12,.35),p.add(Ft(.09,n,0,.05,0,1,1.5,1)),p.add(Ft(.1,n,u*.03,-.05,.06,1.4,.4,1.3)),e.add(p),o.push(p)}let l=new re;for(let[u,d,p]of[[.2,-.15,.09],[-.25,-.05,.08],[.05,-.3,.07],[-.1,.05,.06]])l.add(Ft(p,Tt(s.dark),u,.75,d,1,.3,1));l.visible=!1,e.add(l);let c=new re;c.add(Gi(.16,.18,.1,Tt(16761370,8015872,.4),0,0,0,10));for(let u=0;u<5;u++){let d=u/5*Math.PI*2,p=new Yt(new Bi(.04,.12,5),Tt(16761370,8015872,.4));p.position.set(Math.sin(d)*.15,.1,Math.cos(d)*.15),c.add(p)}c.position.set(0,.92,0),c.visible=!1,e.add(c);let h=new Yt(new ei(.6,20),oi(1714746,{transparent:!0,opacity:.25,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.position.y=.02,t.add(h),{root:t,body:e,throat:i,eyes:a,legs:o,spots:l,crown:c,shadow:h,mouthY:.5}}function Yo(s=!1){let t=Xo({body:s?9079370:10133594,belly:15261864,dark:5921322});t.spots.visible=!0;let e=new Yt(new hs(.42,.06,8,24),Tt(16734874));e.rotation.x=Math.PI/2-.3,e.position.set(0,.36,.12),t.body.add(e);for(let n of[-1,1]){let i=Wi(.22,.05,.05,Tt(3815962),n*.25,1.06,.3);i.rotation.z=n*.4,t.body.add(i)}return s&&(t.crown.visible=!0),t}function Jo(s=9095226){let t=new re,e=[];for(let r=0;r<9;r++){let a=.22-r*.015,o=Ft(a,Fn(r%2?s:14207034),0,a*.8,-r*.3,1,.8,1.3,12);t.add(o),e.push(o)}let n=new re;n.add(Ft(.28,Fn(s),0,.22,.18,1.1,.7,1.3));for(let r of[-1,1])n.add(Ft(.08,Tt(16777215),r*.13,.36,.3)),n.add(Ft(.04,Tt(1118481),r*.14,.38,.36));let i=Wi(.03,.01,.25,Tt(15217242),0,.18,.55);return n.add(i),t.add(n),{root:t,segs:e,head:n,tongue:i}}function Ko(){let s=new re,t=Tt(12107976),e=Tt(15921906);s.add(Ft(.6,t,0,2.4,0,1,.8,1.5));for(let a of[-1,1]){let o=Ft(.5,Tt(9082530),a*.5,2.5,-.1,.3,.6,1.4);s.add(o)}for(let a of[-1,1])s.add(Gi(.04,.04,2,Tt(15247418),a*.2,1,0,6));let n=new re;n.position.set(0,2.7,.6),n.add(Gi(.12,.15,1.2,e,0,.5,0,8));let i=new re;i.position.y=1.15,i.add(Ft(.25,e,0,0,0)),i.add(Wi(.05,.05,.5,Tt(2763306),0,.15,-.3));let r=new Yt(new Bi(.08,.8,8),Tt(16757274));r.rotation.x=Math.PI/2,r.position.set(0,-.02,.5),i.add(r);for(let a of[-1,1])i.add(Ft(.06,Tt(16777215),a*.14,.06,.12)),i.add(Ft(.035,Tt(1118481),a*.16,.06,.16));return n.add(i),s.add(n),{root:s,neck:n,head:i}}function Nc(s){let t=new re,e=[];if(s==="dragonfly"){let n=Gi(.05,.03,1,Fn(3848424),0,0,-.2,8);n.rotation.x=Math.PI/2,t.add(n),t.add(Ft(.12,Fn(2788056),0,0,.3));for(let i of[-1,1])for(let r of[.18,0]){let a=Ft(.3,oi(14218495,{transparent:!0,opacity:.65}),i*.32,.03,r,1.2,.05,.35);t.add(a),e.push(a)}}else if(s==="beetle"){t.add(Ft(.25,Fn(13117482),0,.15,0,1,.6,1.2)),t.add(Wi(.02,.02,.5,Tt(1118481),0,.31,0));for(let[n,i]of[[.1,.1],[-.12,-.05],[.08,-.15]])t.add(Ft(.05,Tt(1118481),n,.29,i,1,.3,1));t.add(Ft(.12,Tt(1118481),0,.12,.28))}else if(s==="fish"){t.add(Ft(.35,Fn(16747066),0,0,0,.6,.8,1.2));let n=new Yt(new Bi(.25,.35,4),Fn(16756826));n.rotation.x=-Math.PI/2,n.position.z=-.5,t.add(n),e.push(n);for(let i of[-1,1])t.add(Ft(.06,Tt(16777215),i*.16,.08,.25)),t.add(Ft(.03,Tt(1118481),i*.18,.08,.28))}else{let n=s==="mosquito";t.add(Ft(n?.08:.13,Tt(n?6974074:2763316),0,0,0,1,1,n?2:1.3)),t.add(Ft(n?.06:.09,Tt(9054762),0,.02,n?.16:.14));for(let i of[-1,1]){let r=Ft(.14,oi(15267071,{transparent:!0,opacity:.7}),i*.13,.08,-.02,1.1,.08,.6);t.add(r),e.push(r)}}return{root:t,wings:e}}function Bc(s,t){let e=new re,n=new ei(s,28,.35,Math.PI*2-.35);n.rotateX(-Math.PI/2),e.add(new Yt(n,Tt(t)));for(let r=0;r<7;r++){let a=.6+r*.8,o=Wi(.03,.005,s*.85,Tt(new wt(t).multiplyScalar(1.15).getHex()),Math.sin(a)*s*.42,.01,Math.cos(a)*s*.42);o.rotation.y=a,e.add(o)}let i=new Yt(new Fi(s*.94,s,28,1,.35,Math.PI*2-.35),Tt(new wt(t).multiplyScalar(.8).getHex()));return i.rotation.x=-Math.PI/2,i.position.y=.005,e.add(i),e}function Fc(){let s=new re,t=Tt(16754888);for(let e=0;e<8;e++){let n=e/8*Math.PI*2,i=Ft(.16,e%2?t:Tt(16747192),Math.sin(n)*.12,.16,Math.cos(n)*.12,.5,1.2,.9);i.rotation.set(Math.cos(n)*.5,0,-Math.sin(n)*.5),s.add(i)}return s.add(Ft(.08,Tt(16769594),0,.22,0)),s}function Oc(s=2.2){let t=new re;t.add(Gi(.025,.035,s,Tt(5933626),0,s/2,0,6)),t.add(Gi(.08,.08,.45,Tt(8014370),0,s-.3,0,8));for(let e=0;e<2;e++){let n=Wi(.06,s*.8,.01,Tt(6986298),e?.08:-.06,s*.4,0);n.rotation.z=e?-.15:.12,t.add(n)}return t}function zc(s,t){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d");n.fillStyle=s,n.fillRect(0,0,256,256);for(let r=0;r<70;r++){n.strokeStyle=t,n.globalAlpha=.25,n.lineWidth=2,n.beginPath();let a=Math.random()*256,o=Math.random()*256;n.ellipse(a,o,10+Math.random()*30,3+Math.random()*6,0,0,Math.PI*2),n.stroke()}n.globalAlpha=1;let i=new Di(e);return i.wrapS=i.wrapT=rs,i.colorSpace=ye,i}function kc(s,t,e={}){let n=s.prototype.play,i=s.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}i&&(s.prototype.unlock=function(...a){let o=i.apply(this,a);return r(this),o}),s.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function Hc(s,{gain:t=.5,file:e="music.mp3"}={}){let n=s.prototype.unlock,i=s.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),i&&i.call(a,null)}).catch(()=>{a._song=null})}s.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},i&&(s.prototype.setTune=function(a){if(!this._song)return i.call(this,a)})}var Gc={tongue:"data:audio/mpeg;base64,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",gulp:"data:audio/mpeg;base64,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+MgQAnCDkDJ8ZgcwyLxstFlGX+RAgZFyfIIRQqEXIubmy0WpPRV/5FCCFQi5FzcihFCoRcvpk5V1fS//y4aEXIublwuGhfJ83JwuGmVsKsCpVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEn4IGYH8k54RHwTUOosaYMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEwIATcVck2YkAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",croak:"data:audio/mpeg;base64,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",hop:"data:audio/mpeg;base64,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",splash:"data:audio/mpeg;base64,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rjrFta1BvPhV6olPLhukUYOCDSAgI2B20Xefrp1TsfnV7ly6okI/WjrbV3roXThfobn7YPVPzb9e/aor99OnJ7nVlZ57JZ5gxZkc6spocJL/+zjEfoIIbKEexAhngPoIYsSRiZJVQcbBZWoofWoABoUYwAAbOYP/6dDwElyhrXHMCJlEN9zEWkujuZdd+zUZ3CfY/Jq2nG0TZvgmqmXjVV2cJ6l3o/MOoOFZaVYL2lhRfEusLW1YClWgSLJtY4woKlQmWWWOkRKuLyp9SUeGChKGa25st3yv3yn2akpZEjLC2oke+kWff/mrUP///9DlTVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEnwAHwNMdRYRNwRWkoswXiCBVVVVVVVVVVVVVVVVVVVVVVVVVEinAIGjpZZD6YKGBB0MmUMFBhHMgsEhGZ4s36hcj9Shf+oXI1CzP1Cwq79X+LM/izDJkYLpxZUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEvoIIuNUURiBJwPWRpFhhmLBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEuYPG0DzsQYRoQAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",win:"data:audio/mpeg;base64,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ogedYKQaJArXaB3g0Dh0i4RA017knUOMuRYkaz7f/DT+hAyAAe9gpW4ZVgcTiq0FkQahxuxzlMVYRTTGBgYxhRIIzYovuj3syQUEpfTN1ID/+zjEPoMJ5FsoRODMgTaQZAicDciFw25QsJa3KQDR4JgkLbJY970PotUv9X18ftueo2i4UWqVxCnB8iUbYGQmIhC7JwlHX/Q0am/UMBND9t2J7wz6OjlF4UVGTiaybAumLFkh4kWapKVdSuRCaMaS2uze11u/RuelmqrnSpExXNQ3lfDH48wYQk+FCkFwKMMYIgBTMYLe8Zltnl3qECaRd7MFBYInDwKiEjWDKBcJgFYhJFmrZGv/72H6KErR3tpV//rWbe/SGUBCJK4ouv8rvAseahL3vrT/+zjEUYMI6KEiQzBuQSqM5Ahnmcjo+UhFZawAnGoynNDYuWZpr+HzR/xp+5KqN2fFagadLv9bW+eP5h/nrMXJwVONYiY/Bx+atyXr/ahnb/rAAGFmLKSGBXKig0ot4ncXsSPuNZcyzMQLDExkgGZji7UOhnag9dHahU9Wlojt3al7mFW+PqNic6jn1Vucll8YrGu6l0SVN0ls3u8lEQKDlCbCQ7sW362ES+RdAtK8P7DxkKUBzv6fctsocmfQtk9p2cI5jj7NhdBbs4p+QsnNb9t1y9qEfTb/+zjEagMJqLMeRmDQAS6WI0j8FgDbcZm789XIdoIDYSKlmikx1g0tFRcHIS0hbkrUAzW0hbLttOlVduaEnuzIovo1bfEtR/66Pm0O6dl0bT7K/bbb7r2//+3HWydDNxJi+8eqBKITgHSeTjIbBRNfNLnDw/CsDglcEQObwnnvnFdIfbCNswUL+E5uYivk8hHlqn3T8KMTRpd+9DlYp7kf3UNFPcoLN3yYACLkAMmCmAIDGgy6OLGgyYDGmTUSHQ2Gg6drARIi0kz5E6dPO8rjxmk6eOnX/+r/+zjEfwMIZKEYRgRUgRgpIwiRldhOv//1FWdSce5WPkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjEm4MIlL0eZIxNwOiGIgxjDJiqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="};var cm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",xe=null,Sr=!1;function Wc(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Zo(){Wc(),Sr=!0;try{if(xe||(xe=document.createElement("audio"),xe.src=cm,xe.loop=!0,xe.preload="auto",xe.setAttribute("playsinline",""),xe.setAttribute("webkit-playsinline",""),xe.setAttribute("x-webkit-airplay","deny"),xe.volume=.01,xe.addEventListener("pause",()=>{Sr&&!document.hidden&&setTimeout(()=>Sr&&xe.paused&&xe.play().catch(()=>{}),300)})),xe.paused){let s=xe.play();s&&s.catch&&s.catch(()=>{})}}catch{}}function Xc(){Sr=!1;try{xe&&!xe.paused&&xe.pause()}catch{}}function Yc(s,t){Wc();try{s.addEventListener("statechange",()=>{s.state==="interrupted"&&!t()&&!document.hidden&&s.resume().catch(()=>{})})}catch{}}var nn=s=>440*Math.pow(2,(s-69)/12),hm=[[41,[65,69,72]],[38,[62,65,69]],[46,[62,65,70]],[48,[64,67,72]],[41,[65,69,72]],[38,[62,65,69]],[46,[65,70,74]],[48,[67,72,76]]],um=[[0,0,77],[0,3,81],[0,6,84],[1,0,81],[1,4,77],[2,0,79],[2,2,77],[2,4,74],[3,0,76],[3,4,79],[4,0,84],[4,3,81],[4,6,77],[5,0,74],[5,4,77],[6,0,82],[6,2,81],[6,4,79],[7,0,77],[7,4,72]],Xi=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(Zo(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Yc(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let i=e.createDelay(.8);i.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(i),i.connect(r).connect(i),i.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Xc(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Zo(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="boss"?128:t==="play"?108:96,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_tone(t,e,n,i,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+i),c.connect(h).connect(a),c.start(n),c.stop(n+i+.05),c}_noise(t,e,n,i,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=i,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,i,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,i),c.frequency.exponentialRampToValueAtTime(n,i+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,i),h.gain.exponentialRampToValueAtTime(a,i+.02),h.gain.exponentialRampToValueAtTime(1e-4,i+r),c.connect(h).connect(o),c.start(i),c.stop(i+r+.05)}mar(t,e,n,i=this.music){let r=nn(t);this._tone("sine",r,e,.35,n,i,.003),this._tone("sine",r*4,e,.05,n*.3,i,.002)}setWorld(t){this.world=t}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=60/this.tempo/2,i=this.mode==="play"||this.mode==="boss",r=this.mode==="boss";for(;this.nextTime<e;){let a=this.nextTime,o=this.step%64,l=Math.floor(o/8),c=o%8,[h,u]=hm[l];if(c===0&&u.forEach(d=>this._tone("sine",nn(d-12),a,n*7,.03,this.music,.3)),(c===0||c===4||r&&c%2===0)&&this._tone("triangle",nn(h-12+(c===4?7:0)),a,n*1.6,.2,this.music,.01),c%2===1||!i){let d=u[(o>>1)%3]+12;this._tone("sine",nn(d),a,.4,.05,this.music,.002),this._tone("sine",nn(d)*3,a,.08,.012,this.music,.002)}for(let[d,p,m]of um)d===l&&p===c&&this.mar(m,a+.004,i?.11:.08);i&&((c===0||c===4)&&this._slide("sine",120,45,a,.16,r?.3:.18,this.music),r&&(c===2||c===6)&&this._noise(a,.1,.08,"bandpass",1900,.8,this.music),c%2===1&&this._noise(a,.025,.018,"highpass",7e3,1,this.music)),c===0&&l%2===0&&Math.random()<.6&&this._ambience(a+Math.random()*n*4),this.step++,this.nextTime+=n}}_ambience(t){if((this.world||"dawn")==="sunset")for(let n=0;n<6;n++)this._tone("sine",4200+Math.random()*300,t+n*.06,.03,.006);else if(Math.random()<.5){let n=2400+Math.random()*1200;this._slide("sine",n,n*1.5,t,.12,.012),this._slide("sine",n*1.2,n*.9,t+.15,.1,.01)}Math.random()<.4&&this._croak(t+.3,70+Math.random()*30,.012)}_croak(t,e,n){for(let i=0;i<2;i++){let r=t+i*.14;this._slide("sawtooth",e*1.1,e*.8,r,.11,n),this._noise(r,.1,n*.8,"bandpass",e*6,3)}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,i=this.sfx;switch(t){case"tongue":this._slide("sine",300,1500,n,.09,.12),this._noise(n,.07,.04,"bandpass",3e3,2);break;case"stick":this._noise(n,.06,.12,"lowpass",1200,1),this._slide("sine",900,400,n,.06,.06);break;case"miss":this._slide("sine",600,300,n,.1,.05);break;case"gulp":{if(e==="beetle")for(let r=0;r<3;r++)this._noise(n+r*.04,.04,.08,"bandpass",2500,2);this._slide("sine",420,140,n+.02,.16,.22),this._slide("sine",260,520,n+.18,.08,.07);break}case"grow":{let r=Math.min(e!=null?e:1,10);this._tone("triangle",nn(76+[0,2,4,7,9,12,14,16,19,21][r-1]),n,.18,.06);break}case"airsnap":[84,88,91].forEach((r,a)=>this._tone("sine",nn(r),n+a*.05,.2,.06));break;case"hop":this._slide("sine",180,330,n,.08,.06);break;case"leap":this._slide("sine",160,700,n,.3,.18),this._noise(n+.05,.4,.06,"bandpass",900,.8,i,2600);break;case"land":this._noise(n,.25,.1,"lowpass",1400,.8,i,300),this._slide("sine",200,90,n,.12,.12);break;case"splash":this._noise(n,.35,.08,"bandpass",1800,.7,i,500);break;case"aim":this._slide("sawtooth",220,440,n,.5,.025),this._tone("square",880,n,.06,.02),this._tone("square",880,n+.15,.06,.02);break;case"lash":this._noise(n,.12,.1,"highpass",2500,1,i),this._slide("sine",1200,300,n,.12,.05);break;case"hurt":this._slide("triangle",600,140,n,.35,.16),this._slide("sine",300,80,n+.05,.3,.12);break;case"heron":for(let r=0;r<4;r++)this._noise(n+r*.18,.12,.05,"lowpass",600,1);break;case"strike":this._noise(n,.3,.15,"bandpass",1500,.7,i,400),this._tone("square",1400,n,.05,.04);break;case"evolve":[72,76,79,84,88,91].forEach((r,a)=>this._tone("triangle",nn(r),n+a*.07,.25,.06)),[84,88,91,96].forEach(r=>this._tone("sine",nn(r),n+.45,.8,.05));break;case"boss":e==="heron"?(this._slide("sawtooth",900,500,n,.4,.06),this._slide("sawtooth",800,450,n+.45,.5,.06)):e==="snake"?this._noise(n,1.2,.1,"highpass",4e3,1):this._croak(n,55,.12),this._slide("sine",90,40,n,.8,.3);break;case"bossHit":this._noise(n,.08,.12,"bandpass",1500,1),this._tone("square",330,n,.1,.05);break;case"bossDown":this._slide("sine",600,80,n,.7,.2),[72,76,79,84,88].forEach((r,a)=>this.mar(r,n+.6+a*.1,.18,i));break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.8]].forEach(([r,a])=>this.mar(r,n+a,.2,i)),this._croak(n+1.1,120,.06);break;case"gulped":this._slide("sine",400,90,n,.6,.2),[[67,.6],[63,.85],[60,1.1]].forEach(([r,a])=>this._tone("triangle",nn(r),n+a,.3,.07));break;case"croak":this._croak(n,140,.08);break;case"star":this.mar(88+(e!=null?e:0)*3,n,.2,i);break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.1,.03);break;default:}}};kc(Xi,Gc);Hc(Xi);var Qo={title:["\u0644\u0639\u0628\u0629 \u0627\u0644\u0636\u0641\u062F\u0639 \u0627\u0644\u062C\u0627\u0626\u0639","Hungry Frog"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Play"],map:["\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0628\u0631\u0643\u0629","Pond map"],level:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","Level"],exit:["\u062E\u0631\u0648\u062C","Exit"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Resume"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],retry:["\u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A","Retry"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next level"],growTo:["\u0643\u0628\u0651\u0631 \u0644\u062D\u062F {n} \u0639\u0634\u0627\u0646 \u062A\u062A\u0637\u0648\u0651\u0631!","Grow to {n} to evolve!"],growTo2:["\u0643\u0628\u0651\u0631 \u0644\u062D\u062F {n}","Grow to {n}"],beat:["\u0627\u0647\u0632\u0645 {b}","Beat {b}"],dragHop:["\u0627\u0633\u062D\u0628 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0639\u0634\u0627\u0646 \u062A\u0646\u0637","Drag anywhere to hop"],tapLeap:["\u062F\u0648\u0633 \u0639\u0644\u0649 \u0627\u0644\u0632\u0631\u0627\u0631 \u0627\u0644\u0648\u0631\u062F\u064A \u0639\u0634\u0627\u0646 \u062A\u0642\u0641\u0632","Tap to LEAP"],redBigger:["\u0627\u0644\u0623\u062D\u0645\u0631 \u0623\u0643\u0628\u0631 \u0645\u0646\u0643 - \u062E\u0644\u064A\u0643 \u0628\u0639\u064A\u062F!","RED is bigger - keep out of reach!"],evolved:["\u0627\u062A\u0637\u0648\u0651\u0631\u062A! \u{1F31F}","Evolved! \u{1F31F}"],airSnap:["\u062E\u0637\u0641\u0629 \u0641\u064A \u0627\u0644\u0647\u0648\u0627!","Air snap!"],combo:["\u0643\u0648\u0645\u0628\u0648","Combo"],bossIntro_bigbo:["\u0628\u064A\u062C \u0628\u0648 \u0647\u0648 \u0643\u0628\u064A\u0631 \u0627\u0644\u0628\u0631\u0643\u0629. \u0643\u0628\u0651\u0631 \u0648\u0627\u0647\u0632\u0645\u0647!","Big Bo rules this pond. Grow bigger and gobble him!"],bossIntro_snake:["\u0627\u0644\u062B\u0639\u0628\u0627\u0646 \u0633\u0644\u0627\u064A \u062C\u0647! \u062E\u0644\u064A \u0644\u0633\u0627\u0646\u0643 \u064A\u0636\u0631\u0628\u0647 \u0645\u0646 \u0628\u0639\u064A\u062F.","Sly the Snake is here! Hit him with your tongue from a distance."],bossIntro_heron:["\u0645\u0627\u0644\u0643 \u0627\u0644\u062D\u0632\u064A\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0642 \u0646\u0632\u0644 \u0627\u0644\u0628\u0631\u0643\u0629! \u0627\u0642\u0641\u0632 \u0645\u0646 \u0636\u0631\u0628\u062A\u0647 \u0648\u0627\u0636\u0631\u0628\u0647!","The Grand Heron landed! Leap away from his beak and strike back!"],bossIntro_bigbo2:["\u0627\u0644\u062C\u062F \u0628\u0648 \u0623\u0643\u0628\u0631 \u0636\u0641\u062F\u0639 \u0641\u064A \u0627\u0644\u0628\u0631\u0643\u0629! \u0643\u0628\u0651\u0631 \u0643\u062A\u064A\u0631 \u0648\u0627\u0647\u0632\u0645\u0647!","Grandpa Bo is the biggest frog in the pond! Grow a lot and gobble him!"],bossIntro_snake2:["\u0627\u0644\u0645\u0644\u0643\u0629 \u0633\u0644\u0627\u064A \u0648\u0635\u0644\u062A! \u0627\u0636\u0631\u0628 \u0645\u0646 \u0628\u0639\u064A\u062F \u0648\u0627\u0628\u0639\u062F \u0639\u0646 \u0644\u0633\u0627\u0646\u0647\u0627.","Queen Sly has arrived! Strike from afar and dodge her tongue."],bossIntro_heron2:["\u0645\u0644\u0643 \u0645\u0627\u0644\u0643 \u0627\u0644\u062D\u0632\u064A\u0646 \u0646\u0632\u0644! \u0627\u0642\u0641\u0632 \u0645\u0646 \u0645\u0646\u0642\u0627\u0631\u0647 \u0648\u0627\u0636\u0631\u0628\u0647!","The Heron King landed! Leap away from his beak and strike back!"],gulped:["\u0627\u062A\u0628\u0644\u0639\u062A!","Gulped!"],gotYou_frog:["\u0627\u0644\u0636\u0641\u062F\u0639 \u0627\u0644\u0643\u0628\u064A\u0631 \u0645\u0633\u0643\u0643!","The bully frog got you!"],gotYou_snake:["\u0627\u0644\u062B\u0639\u0628\u0627\u0646 \u0645\u0633\u0643\u0643!","The snake got you!"],gotYou_heron:["\u0645\u0627\u0644\u0643 \u0627\u0644\u062D\u0632\u064A\u0646 \u0645\u0633\u0643\u0643!","The heron got you!"],gotYou_bigbo:["\u0628\u064A\u062C \u0628\u0648 \u0645\u0633\u0643\u0643!","Big Bo got you!"],power:["\u0642\u0648\u062A\u0643 \u0648\u0635\u0644\u062A: {n}","Power reached: {n}"],tipLine:["\u0646\u0635\u064A\u062D\u0629: \u0627\u0644\u062E\u0637 \u0627\u0644\u0623\u062D\u0645\u0631 \u0627\u0644\u0645\u0646\u0642\u0637 \u0645\u0639\u0646\u0627\u0647 \u0625\u0646 \u0636\u0641\u062F\u0639 \u0643\u0628\u064A\u0631 \u0628\u064A\u0635\u0648\u0651\u0628 \u0644\u0633\u0627\u0646\u0647 - \u0627\u0646\u0637 \u0628\u0639\u064A\u062F!","Tip: a red dotted line means a big frog is aiming its tongue - hop away!"],won:["\u0623\u0643\u0644\u062A {b}!","You gobbled {b}!"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u{1F438}","Well done! \u{1F438}"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u{1F438}","Well done! \u{1F438}"],eaten:["\u0623\u0643\u0644\u062A","Eaten"],drops:["\u0642\u0637\u0631\u0627\u062A","Drops"],locked:["\u0627\u0643\u0633\u0628 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Win the level before"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u0628\u0631\u0643\u0629...","Getting the pond ready..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],leap:["\u0642\u0641\u0632\u0629","Leap"]},fs="ar",Jc=!1,Kc=s=>{fs=s==="en"?"en":"ar"},Zc=s=>{Jc=!!s},ps=()=>fs,Rt=(s,t)=>{let e=`${s}_${Jc?"f":"m"}`,n=Qo[e]?e:s,i=Qo[n]?Qo[n][fs==="en"?1:0]:s;if(t)for(let[r,a]of Object.entries(t))i=i.replace(`{${r}}`,a);return i},ge=s=>fs==="en"?String(s):String(s).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),In=s=>fs==="en"?s.en:s.ar;var Qc=`
.hf-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#2a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#a8b8c0}
.hf-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.hf-layer{position:absolute;inset:0;pointer-events:none}
.hf-layer button,.hf-layer .hf-card{pointer-events:auto}
.hf-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#3aa83a;background:#dfeee0}
.hf-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.4);background:linear-gradient(180deg,#8ee06a,#4cb83a);border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.6);color:#1a3a10;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.2) rgba(0,0,0,.2);direction:ltr}
.hf-pill .w{background:#fff;border-radius:999px;padding:0 calc(var(--u)*2);display:inline-flex;align-items:center;gap:calc(var(--u)*.8)}
.hf-round{position:absolute;width:calc(var(--u)*10);height:calc(var(--u)*10);border-radius:50%;border:calc(var(--u)*.6) solid #fff;background:linear-gradient(180deg,#8ee06a,#3aa82a);color:#fff;font-size:calc(var(--u)*4.4);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.2) rgba(0,0,0,.2)}
.hf-round.lv{background:radial-gradient(circle at 40% 35%,#c8c8f8,#8a8ad8);color:#2a2a6a}
.hf-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*15);right:calc(var(--u)*15);display:flex;justify-content:center}
.hf-goal{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*11.5);left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;align-items:center;gap:calc(var(--u)*1.6);direction:ltr}
.hf-hearts{display:flex;gap:calc(var(--u)*.6);background:#fff;border-radius:999px;padding:calc(var(--u)*.4) calc(var(--u)*1.4);font-size:calc(var(--u)*4)}
.hf-hearts b{color:#ff3a6a}
.hf-hearts b.off{color:#c8c8c8}
.hf-bar{flex:1;position:relative;height:calc(var(--u)*6);background:#9ab890;border-radius:999px;border:calc(var(--u)*.4) solid #fff;overflow:hidden;box-shadow:0 calc(var(--u)*.4) calc(var(--u)*1) rgba(0,0,0,.15)}
.hf-bar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(180deg,#8ee06a,#3aa82a);border-radius:999px;transition:width .3s}
.hf-bar span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*3.4);color:#fff;text-shadow:0 0 calc(var(--u)*.6) #1a5a10,0 calc(var(--u)*.3) 0 #1a5a10;white-space:nowrap;direction:rtl}
.hf-bar.boss i{background:linear-gradient(180deg,#ff8ab0,#e8326a)}
.hf-frogicon{font-size:calc(var(--u)*5)}
.hf-hint{position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);background:#fffbe8;border:calc(var(--u)*.7) solid #6ac84a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.2);text-align:center;max-width:calc(var(--u)*80);opacity:0;transition:opacity .3s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.2)}
.hf-hint.show{opacity:1}
.hf-leap{position:absolute;right:calc(var(--u)*4);bottom:max(calc(var(--u)*5),env(safe-area-inset-bottom));width:calc(var(--u)*22);height:calc(var(--u)*22);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 30%,#ff8ab8,#e8327a 70%);box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(0,0,0,.3);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*9);pointer-events:auto;--cd:0}
.hf-leap::after{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(rgba(60,20,40,.55) calc(var(--cd)*1%),transparent 0)}
.hf-leap:active{transform:scale(.95)}
.hf-tag{position:absolute;transform:translate(-50%,-100%);font-weight:900;font-size:calc(var(--u)*3.6);white-space:nowrap;pointer-events:none;color:#1a2a10;text-shadow:0 0 calc(var(--u)*.6) #fff,0 0 calc(var(--u)*.6) #fff;display:flex;align-items:center;gap:calc(var(--u)*.6);direction:ltr}
.hf-tag.me{background:rgba(255,255,255,.85);border-radius:999px;padding:0 calc(var(--u)*1.6)}
.hf-tag.red{color:#e8203a}
.hf-tag.boss{font-size:calc(var(--u)*4.4)}
.hf-pop{position:absolute;transform:translate(-50%,-50%);font-weight:900;white-space:nowrap;pointer-events:none;animation:hfPop 1s ease-out forwards;font-size:calc(var(--u)*4);color:#2a8a1a;text-shadow:0 0 calc(var(--u)*.6) #fff,0 0 calc(var(--u)*.8) #fff}
.hf-pop.air{color:#3a6ad8;font-size:calc(var(--u)*3.4)}
.hf-pop.combo{color:#e8327a;font-size:calc(var(--u)*4.6)}
@keyframes hfPop{from{transform:translate(-50%,-50%) scale(1.5);opacity:0}15%{transform:translate(-50%,-50%) scale(1);opacity:1}75%{opacity:1}to{transform:translate(-50%,-180%);opacity:0}}
.hf-big{position:absolute;left:50%;top:26%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;opacity:0;transition:opacity .4s}
.hf-big.show{opacity:1}
.hf-big b{display:block;font-size:calc(var(--u)*10);color:#fff;-webkit-text-stroke:calc(var(--u)*.6) #2a6a1a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #2a6a1a}
.hf-big span{display:inline-block;margin-top:calc(var(--u)*1);font-size:calc(var(--u)*4.4);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.4) #6a4a0a;paint-order:stroke fill}
.hf-bossbar{position:absolute;top:calc(max(calc(var(--u)*2.4),env(safe-area-inset-top)) + var(--u)*20);left:50%;transform:translateX(-50%);display:none;align-items:center;gap:calc(var(--u)*1.6);background:#fff4f6;border:calc(var(--u)*.6) solid #e8327a;border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1) calc(var(--u)*2.4);font-weight:900;font-size:calc(var(--u)*3.6);color:#a81a4a;direction:ltr}
.hf-bossbar div{width:calc(var(--u)*30);height:calc(var(--u)*2.4);background:#f8d0dc;border-radius:999px;overflow:hidden}
.hf-bossbar i{display:block;height:100%;background:linear-gradient(90deg,#e8327a,#ff6aa8)}
.hf-dim{position:absolute;inset:0;background:rgba(30,40,30,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.hf-card{position:relative;background:#fffdf2;border:calc(var(--u)*.8) solid #6ac84a;border-radius:calc(var(--u)*5);padding:calc(var(--u)*7) calc(var(--u)*5) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.2);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3)}
.hf-ribbon{position:absolute;top:calc(var(--u)*-1);left:50%;transform:translateX(-50%);background:linear-gradient(180deg,#ff6aa8,#e8327a);border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*5);font-weight:900;font-size:calc(var(--u)*6);color:#fff;white-space:nowrap;box-shadow:0 calc(var(--u)*.6) 0 #a81a4a}
.hf-ribbon.green{background:linear-gradient(180deg,#8ee06a,#3aa82a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a10}
.hf-face{font-size:calc(var(--u)*16);line-height:1}
.hf-note{background:#ffe8ee;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1.4) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*3.8);text-align:center;width:100%;box-sizing:border-box}
.hf-small{font-size:calc(var(--u)*3.2);text-align:center;opacity:.85;font-weight:700;line-height:1.4}
.hf-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.6);color:#fff;-webkit-text-stroke:calc(var(--u)*.25) #1a5a10;paint-order:stroke fill;border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*12);cursor:pointer;background:linear-gradient(180deg,#8ee06a,#3aa82a);box-shadow:0 calc(var(--u)*.8) 0 #1a6a10;width:100%}
.hf-btn.brown{background:linear-gradient(180deg,#b8784a,#8a4a22);box-shadow:0 calc(var(--u)*.8) 0 #5a2a0a;-webkit-text-stroke-color:#5a2a0a;width:auto;font-size:calc(var(--u)*4.6)}
.hf-btn[disabled]{filter:grayscale(1);opacity:.6}
.hf-btn:active{transform:translateY(calc(var(--u)*.5))}
.hf-btn:focus-visible,.hf-round:focus-visible,.hf-leap:focus-visible,.hf-node:focus-visible{outline:calc(var(--u)*.7) solid #3a6ad8;outline-offset:calc(var(--u)*.5)}
.hf-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.hf-stars .off{filter:grayscale(1);opacity:.35}
.hf-stats{display:flex;gap:calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*4)}
.hf-map{display:flex;flex-direction:column;gap:calc(var(--u)*2.4);width:100%}
.hf-node{display:flex;align-items:center;gap:calc(var(--u)*3);background:#eaf8e0;border:calc(var(--u)*.6) solid #6ac84a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*2) calc(var(--u)*3);font-family:inherit;color:#2a3a1a;cursor:pointer;text-align:start}
.hf-node .n{width:calc(var(--u)*12);height:calc(var(--u)*12);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*6);color:#fff;background:linear-gradient(180deg,#8ee06a,#3aa82a);border:calc(var(--u)*.5) solid #fff;flex:none}
.hf-node .nm{flex:1;font-weight:900;font-size:calc(var(--u)*4.4)}
.hf-node .nm small{display:block;font-size:calc(var(--u)*3);opacity:.7}
.hf-node .st{font-size:calc(var(--u)*4);white-space:nowrap}
.hf-node.lock{opacity:.5;filter:grayscale(.8)}
.hf-node.dawn{background:linear-gradient(90deg,#eef0ff,#e0f0e0)}
.hf-node.marsh{background:linear-gradient(90deg,#e0f8e0,#f8f8d0)}
.hf-node.sunset{background:linear-gradient(90deg,#ffe0c8,#f8c8d8)}
.hf-logo{position:absolute;top:calc(var(--u)*14);left:50%;transform:translateX(-50%) rotate(-4deg);text-align:center;white-space:nowrap;font-weight:900;font-size:calc(var(--u)*10);color:#8ee06a;-webkit-text-stroke:calc(var(--u)*.8) #1a5a10;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #1a5a10}
.hf-menu{position:absolute;left:50%;bottom:max(calc(var(--u)*7),env(safe-area-inset-bottom));transform:translateX(-50%);width:calc(var(--u)*72);display:flex;flex-direction:column;gap:calc(var(--u)*2.6);align-items:center}
.hf-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*30);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.hf-land .hf-card{width:calc(var(--u)*100)}
.hf-land .hf-logo{top:calc(var(--u)*8)}
.hf-land .hf-goal{left:calc(var(--u)*25);right:calc(var(--u)*25)}
`;function et(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t))r==null||r===!1||(i==="class"?n.className=r:i==="text"?n.textContent=r:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),r):i==="style"?n.style.cssText=r:n.setAttribute(i,r===!0?"":r));for(let i of e.flat())i!=null&&i!==!1&&n.append(i.nodeType?i:document.createTextNode(String(i)));return n}var dm=()=>{var s,t;return((s=navigator.deviceMemory)!=null?s:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},fm=()=>{try{let s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}},Er;function pm(){if(Er)return Er;let s=document.createElement("canvas");s.width=s.height=32;let t=s.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Er=new Di(s),Er}var gs=class{constructor(t,e,n,i,r=!1,a=1){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new Ae,this.g.setAttribute("position",new Re(this.pos,3)),this.pts=new dr(this.g,new ls({color:i,size:n,map:pm(),transparent:!0,depthWrite:!1,opacity:a,blending:r?Ln:Js})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let o=0;o<e;o++)this.pos[o*3+1]=-500}emit(t,e,n,i,r,a,o=.8){let l=this.i++%this.n;this.pos.set([t,e,n],l*3),this.vel.set([i,r,a],l*3),this.life[l]=o}burst(t,e,n,i=14,r=3,a=.6){for(let o=0;o<i;o++){let l=Math.random()*Math.PI*2;this.emit(t,e,n,Math.cos(l)*r*Math.random(),Math.random()*r,Math.sin(l)*r*Math.random(),a*(.6+Math.random()*.6))}}update(t,e=0){for(let n=0;n<this.n;n++)if(!(this.life[n]<=0)){this.life[n]-=t,this.vel[n*3+1]+=e*t;for(let i=0;i<3;i++)this.pos[n*3+i]+=this.vel[n*3+i]*t;this.life[n]<=0&&(this.pos[n*3+1]=-500)}this.g.attributes.position.needsUpdate=!0}},gm=[{bg:12106968,fog:13158624,near:18,far:70,water:["#8a96b0","#c8d0e8"],hemi:[15790335,6978186,1.6],sun:[16771312,1],pad:[6998090,5945402,8050778],sound:"dawn"},{bg:10148080,fog:12577e3,near:26,far:90,water:["#5aa8b8","#a8e0e8"],hemi:[16777215,6982234,1.7],sun:[16775392,1.4],pad:[5949498,4896810,9101402],sound:"day"},{bg:15769722,fog:15245448,near:20,far:75,water:["#8a6a7a","#f0b890"],hemi:[16769224,5913162,1.5],sun:[16756858,1.3],pad:[8042554,6989866,10143818],sound:"sunset"},{bg:1844304,fog:2766448,near:16,far:66,water:["#1c2a58","#5a6ab0"],hemi:[11056383,1712192,1.35],sun:[13688063,.95],pad:[3840602,2787914,4893290],sound:"dawn"},{bg:11065520,fog:12116160,near:14,far:58,water:["#3a7a5a","#9ad8b0"],hemi:[15794160,4876874,1.6],sun:[16318432,1.2],pad:[3848266,2795578,7002218],sound:"day"},{bg:16308344,fog:16310432,near:22,far:80,water:["#c89a4a","#fff0a8"],hemi:[16774352,9071146,1.6],sun:[16771216,1.5],pad:[10143802,9091114,12640352],sound:"sunset"}],jo=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),Kc(e.lang),Zc(e.gender==="girl"),this.age=Number(e.age)||5,this.save=Dc(e.save),this.base=e.base||"./",this.sound=new Xi,this.sound.muted=!!this.save.muted,this.quality={low:dm()},document.getElementById("hf-style")||document.head.append(et("style",{id:"hf-style",text:Qc})),this.root=et("div",{class:"hf-root",dir:ps()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!fm()){this.root.append(et("div",{class:"hf-loading"},et("div",{},Rt("noWebgl")," ",et("button",{class:"hf-btn brown",onclick:()=>this.post({type:"exit"})},Rt("exit")))));return}this.loading=et("div",{class:"hf-loading"},Rt("loading")),this.root.append(this.loading),this.renderer=new cr({antialias:!this.quality.low,powerPreference:"high-performance"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.6),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=ye,this.root.prepend(this.renderer.domElement),this.layer=et("div",{class:"hf-layer"}),this.root.append(this.layer),this.camera=new Se(50,1,.3,200),this.camPos=new T(0,14,16),this.camLook=new T(0,0,0),this.input={pointer:null,keys:new Set,mx:0,mz:0},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new vr,this._buildScene(),this._fonts().then(()=>{this.loading.remove(),this._buildPond(Math.min(this.save.unlocked,qe.length)-1),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.land=this.cw>this.ch*1.15,this.root.classList.toggle("hf-land",this.land)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.land?42:54,this.camera.updateProjectionMatrix())}_buildScene(){let t=this.scene=new ur;this.hemi=new xr(16777215,7829367,1.6),t.add(this.hemi),this.sun=new Cr(16777215,1.2),this.sun.position.set(-10,25,12),t.add(this.sun),this.frog=Xo(),t.add(this.frog.root),this.tongueMat=new ii({color:16734858,emissive:5900842,emissiveIntensity:.3}),this.tongueMesh=new Yt(new Ae,this.tongueMat),this.tongueMesh.frustumCulled=!1,t.add(this.tongueMesh),this.tongueTip=new Yt(new ni(.12,12,8),this.tongueMat),t.add(this.tongueTip),this.tongueWob={v:0,x:0},this.dots=[];let e=new ni(.09,8,6);for(let n=0;n<60;n++){let i=new Yt(e,oi(16722490));i.visible=!1,t.add(i),this.dots.push(i)}this.shadows=[];for(let n=0;n<3;n++){let i=new Yt(new ei(1,28),oi(1710634,{transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.visible=!1,t.add(i),this.shadows.push(i)}this.heronModel=Ko(),this.heronModel.root.visible=!1,t.add(this.heronModel.root),this.ripples=[];for(let n=0;n<14;n++){let i=new Yt(new Fi(.8,1,28),oi(16777215,{transparent:!0,opacity:0,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.visible=!1,t.add(i),this.ripples.push({m:i,t:9})}this.sparkle=new gs(t,200,.35,16773792),this.drops=new gs(t,160,.3,14217471,!0,.9),this.mist=new gs(t,80,5,16777215,!0,.18),this.models=new Map,this.tags=new Map}_buildPond(t){if(this.pondIndex===t&&this.pond)return;this.pond&&(this.scene.remove(this.pond),this.pond.traverse(o=>{o.geometry&&o.geometry.dispose()})),this.pondIndex=t;let e=gm[t];this.look=e;let n=this.pond=new re;this.scene.add(n),this.scene.background=new wt(e.bg),this.scene.fog=new hr(e.fog,e.near,e.far),this.hemi.color.setHex(e.hemi[0]),this.hemi.groundColor.setHex(e.hemi[1]),this.hemi.intensity=e.hemi[2],this.sun.color.setHex(e.sun[0]),this.sun.intensity=e.sun[1],this.sound.setWorld(e.sound),this.waterTex=zc(e.water[0],e.water[1]),this.waterTex.repeat.set(10,14);let i=new Yt(new Ui(15*2+60,22*2+60),new ii({map:this.waterTex}));i.rotation.x=-Math.PI/2,n.add(i);let r=Tt(t===2||t===5?8018490:t===3?3820090:6978106);for(let[o,l,c,h]of[[0,-26,15*2+16,8],[0,26,15*2+16,8],[-19,0,8,22*2],[19,0,8,22*2]]){let u=new Yt(new vn(c,.6,h),r);u.position.set(o,.05,l),n.add(u)}let a=o=>(Math.sin(o*91.7+t*13)*43758.5453%1+1)%1;for(let o=0;o<70;o++){let l=o%4,c=a(o)*2-1,h=l<2?c*17:(l===2?-1:1)*(15+.6+a(o+50)*2.5),u=l<2?(l===0?-1:1)*(22+.6+a(o+50)*2.5):c*24,d=Oc(1.8+a(o+9)*1.6);d.position.set(h,0,u),d.rotation.z=(a(o+3)-.5)*.2,n.add(d)}for(let o=0;o<46;o++){let l=.8+a(o+200)*1.7,c=Bc(l,e.pad[o%3]);if(c.position.set((a(o+300)*2-1)*(15-.5),.03+o*6e-4,(a(o+400)*2-1)*(22-.5)),c.rotation.y=a(o+500)*6.28,n.add(c),o%5===0){let h=Fc();h.position.set(c.position.x+l*.3,.05,c.position.z),n.add(h)}}}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||n.target.closest(".hf-dim")||this.mode!=="play"||this.paused)return;let i=t.getBoundingClientRect();this.input.pointer=n.pointerId,this.input.ox=n.clientX-i.left,this.input.oy=n.clientY-i.top;try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let i=t.getBoundingClientRect(),r=n.clientX-i.left-this.input.ox,a=n.clientY-i.top-this.input.oy,o=this.u*8,l=Math.hypot(r,a);if(l<this.u*1.2){this.input.mx=this.input.mz=0;return}let c=Math.min(1,l/o)/l;this.input.mx=r*c,this.input.mz=a*c,this.moved=!0});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.mx=this.input.mz=0)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&this.sound.play("tap")},!0),this._onKey=n=>{let i=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(i),this.mode==="play"&&(i===" "||i==="shift")&&!n.repeat&&this._leap(),this.mode==="play"&&(i==="escape"||i==="p")&&this.pause()):this.input.keys.delete(i),this.mode==="play"&&(i.startsWith("arrow")||i===" ")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=et("button",{class:"hf-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},Rt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_clear(){this.layer.replaceChildren(),this.hud=null,this.tags.clear()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_mute(t){let e=et("button",{class:"hf-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_tl(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));left:calc(var(--u)*3)"}_tr(){return"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));right:calc(var(--u)*3)"}_hintEl(){return this.hintEl=et("div",{class:"hf-hint"}),this.hintEl}hint(t,e=2.6){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e*1e3))}_dropsPill(){return this.dropEl=et("span",{},ge(this.save.drops)),et("div",{class:"hf-pill"},"\u{1F438}",et("span",{class:"w"},"\u{1F4A7}",this.dropEl))}showMenu(){this._endLevel(),this.mode="menu",this.paused=!1,this.sound.setMode("menu"),this._clear(),this.layer.append(et("button",{class:"hf-round",style:this._tl(),"aria-label":Rt("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},ps()==="en"?"\u2190":"\u2192"),et("div",{class:"hf-top"},this._dropsPill()),this._mute(this._tr()),et("div",{class:"hf-logo"},"\u{1F438} ",Rt("title")),et("div",{class:"hf-menu"},et("button",{class:"hf-btn",onclick:()=>this.startLevel(Math.min(this.save.unlocked,qe.length)-1)},"\u25B6 ",Rt("play")),et("button",{class:"hf-btn brown",onclick:()=>this.showMap()},"\u{1F5FA} ",Rt("map"))),this._hintEl())}showMap(){this.mode="map",this._clear();let t=["dawn","marsh","sunset"],e=qe.map((n,i)=>{var o;let r=n.id>this.save.unlocked,a=(o=this.save.stars[n.id])!=null?o:0;return et("button",{class:`hf-node ${t[i]}${r?" lock":""}`,onclick:()=>{if(r){this.sound.play("no"),this.hint(Rt("locked"));return}this.startLevel(i)}},et("span",{class:"n"},r?"\u{1F512}":ge(n.id)),et("span",{class:"nm"},In(n),et("small",{},`\u{1F451} ${In(_n[n.bossKind])}`)),et("span",{class:"st"},"\u2B50".repeat(a)+"\u2606".repeat(3-a)))});this.layer.append(et("button",{class:"hf-round",style:this._tl(),"aria-label":Rt("back"),onclick:()=>this.showMenu()},ps()==="en"?"\u2190":"\u2192"),et("div",{class:"hf-dim"},et("div",{class:"hf-card"},et("div",{class:"hf-ribbon green"},Rt("map")),et("div",{class:"hf-map"},e))),this._hintEl())}startLevel(t){this._endLevel(),this._buildPond(t),this.levelIndex=t,this.p=new br({level:t,easy:this.age<=4,seed:(Date.now()&65535)+1}),this.mode="play",this.paused=!1,this.moved=!1,this.redWarned=!1,this.frog.root.visible=!0,this.frog.spots.visible=!1,this.frog.crown.visible=!1,this.sound.setMode("play"),this._hud(),this._big(`${Rt("level")} ${ge(t+1)}`,ps()==="en"?`Grow and gobble ${In(_n[qe[t].bossKind])}!`:`\u0643\u0628\u0651\u0631 \u0648\u0643\u064F\u0644 ${In(_n[qe[t].bossKind])}!`,2.4),t===0&&setTimeout(()=>this.mode==="play"&&!this.moved&&this.hint(Rt("dragHop"),4),2400),this.camPos.set(0,18,20)}_endLevel(){for(let t of this.models.values())this.scene.remove(t.root);this.models.clear(),this.bossModel&&(this.scene.remove(this.bossModel.root),this.bossModel=null),this.tongueMesh.visible=this.tongueTip.visible=!1,this.dots.forEach(t=>{t.visible=!1}),this.shadows.forEach(t=>{t.visible=!1}),this.heronModel.root.visible=!1,this.p=null}_hud(){var t;this._clear(),this.hud={lv:et("button",{class:"hf-round lv",style:this._tl(),"aria-label":Rt("level")},ge(((t=this.levelIndex)!=null?t:0)+1)),hearts:et("div",{class:"hf-hearts"}),bar:et("i",{style:"width:0%"}),barT:et("span"),leap:et("button",{class:"hf-leap","aria-label":Rt("leap"),onclick:e=>{e.stopPropagation(),this._leap()}},"\u{1F438}"),big:et("div",{class:"hf-big"},et("b"),et("span")),boss:et("div",{class:"hf-bossbar"},"\u{1F451} ",et("span"),et("div",{},et("i",{style:"width:100%"})))},this.hud.barWrap=et("div",{class:"hf-bar"},this.hud.bar,this.hud.barT),this.layer.append(this.hud.lv,et("div",{class:"hf-top"},this._dropsPill()),et("button",{class:"hf-round",style:this._tr(),"aria-label":Rt("paused"),onclick:e=>{e.stopPropagation(),this.pause()}},"\u275A\u275A"),et("div",{class:"hf-goal"},this.hud.hearts,this.hud.barWrap,et("span",{class:"hf-frogicon"},"\u{1F438}")),this.hud.boss,this.hud.leap,this.hud.big,this._hintEl()),this._hc={},this.dropsAtStart=this.save.drops}_big(t,e,n=2){this.hud&&(this.hud.big.firstChild.textContent=t,this.hud.big.lastChild.textContent=e,this.hud.big.classList.add("show"),clearTimeout(this._bgT),this._bgT=setTimeout(()=>this.hud&&this.hud.big.classList.remove("show"),n*1e3))}_leap(){this.p&&(this.p.leap()?this.hintedLeap=!0:this.sound.play("no"))}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.mx=this.input.mz=0,this.sound.suspend();let t=et("div",{class:"hf-dim"},et("div",{class:"hf-card"},et("div",{class:"hf-ribbon green"},Rt("paused")),et("button",{class:"hf-btn",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume(),this.clock.getDelta()}},"\u25B6 ",Rt("resume")),et("button",{class:"hf-btn brown",onclick:()=>{this.sound.resume(),this.startLevel(this.levelIndex)}},"\u21BB ",Rt("restart")),et("button",{class:"hf-btn brown",onclick:()=>{this.sound.resume(),this.showMap()}},Rt("map")),this._mute("position:static")));this.layer.append(t)}_results(){var o,l;let e=this.p.result,n=this.levelIndex,i=qe[n];this.mode="results",this.sound.setMode("menu"),this.save.drops=Math.min(999999,this.save.drops+e.drops),this.save.best[i.id]=Math.max((o=this.save.best[i.id])!=null?o:0,e.power),e.won?(this.save.stars[i.id]=Math.max((l=this.save.stars[i.id])!=null?l:0,e.stars),i.id+1>this.save.unlocked&&n+1<qe.length&&(this.save.unlocked=i.id+1),this.sound.play("win"),[0,1,2].forEach(c=>c<e.stars&&setTimeout(()=>this.sound.play("star",c),700+c*280))):this.sound.play("gulped"),this._saveNow();let r=e.won&&n+1<qe.length,a=e.won?et("div",{class:"hf-card"},et("div",{class:"hf-ribbon green"},Rt("won",{b:In(_n[i.bossKind])})),et("div",{class:"hf-face"},"\u{1F438}"),et("div",{class:"hf-stars"},[1,2,3].map(c=>et("span",{class:c<=e.stars?"":"off"},"\u2B50"))),et("div",{class:"hf-stats"},et("span",{},`\u{1F438} ${ge(e.power)}`),et("span",{},`\u{1FAB0} ${ge(e.eaten)}`),et("span",{},`\u{1F4A7} +${ge(e.drops)}`)),et("div",{class:"hf-note",style:"background:#e8f8e0"},Rt("win")),r?et("button",{class:"hf-btn",onclick:()=>this.startLevel(n+1)},Rt("next")," \u25B6"):et("button",{class:"hf-btn",onclick:()=>this.startLevel(n)},"\u21BB ",Rt("retry")),et("button",{class:"hf-btn brown",onclick:()=>this.showMap()},Rt("map"))):et("div",{class:"hf-card"},et("div",{class:"hf-ribbon"},Rt("gulped")),et("div",{class:"hf-face"},e.by==="heron"?"\u{1F9A9}":e.by==="snake"?"\u{1F40D}":"\u{1F438}"),et("div",{class:"hf-note"},Rt(`gotYou_${/^(bigbo|heron|snake)\d?$/.test(e.by)?Fe(e.by):"frog"}`),et("br"),Rt("power",{n:ge(e.power)})),et("div",{class:"hf-small"},Rt("tipLine")),et("button",{class:"hf-btn",onclick:()=>this.startLevel(n)},Rt("retry")),et("button",{class:"hf-btn brown",onclick:()=>this.showMap()},Rt("map")));this.layer.append(et("div",{class:"hf-dim"},a))}_playFrame(t,e){let n=this.p,i=this.input.keys,r=this.input.mx,a=this.input.mz;(i.has("arrowleft")||i.has("a"))&&(r-=1),(i.has("arrowright")||i.has("d"))&&(r+=1),(i.has("arrowup")||i.has("w"))&&(a-=1),(i.has("arrowdown")||i.has("s"))&&(a+=1),(r||a)&&(this.moved=!0),n.setMove(r,a);let o=n.state;for(let l of n.step(t))this._event(l,n);o==="play"&&n.state!=="play"&&setTimeout(()=>this.mode==="play"&&this.p===n&&this._results(),n.state==="won"?2200:1400),this._sync(t,e)}_event(t,e){let n=this.sound,i=e.frog;switch(t.type){case"tongue":n.play("tongue"),this.tongueWob.v=0;break;case"stick":n.play("stick"),this.tongueWob.v=6;break;case"miss":n.play("miss");break;case"eat":{n.play("gulp",Fe(t.kind)),setTimeout(()=>n.play("grow",t.combo),160),this.gulpT=.35;let r=this._proj(i.x,yn(i.power)*2.2,i.z);this._pop(r,`+${ge(t.v+t.bonus)}`),t.air&&(this._pop({x:r.x,y:r.y-this.u*6},Rt("airSnap").toUpperCase(),"air"),n.play("airsnap")),t.combo>=3&&this._pop({x:r.x,y:r.y-this.u*11},`${Rt("combo").toUpperCase()} \xD7${ge(t.combo)}`,"combo"),this.sparkle.burst(i.x,.6,i.z,8,2,.5),this.levelIndex===0&&e.eaten===3&&!this.hintedLeap&&this.hint(Rt("tapLeap"),3),this.levelIndex===0&&e.eaten===6&&this.hint(Rt("growTo",{n:ge(e.level.evolve)}),3);break}case"hop":Math.random()<.5&&n.play("hop"),this._ripple(i.x,i.z,yn(i.power)*1.2);break;case"leap":n.play("leap"),this._ripple(i.x,i.z,1.5);break;case"land":n.play("land"),this._ripple(i.x,i.z,2.2),this.drops.burst(i.x,.2,i.z,16,3,.6);break;case"splash":n.play("splash"),this._ripple(t.x,t.z,1.2),this.drops.burst(t.x,.2,t.z,10,2.5,.5);break;case"aim":n.play("aim"),this.redWarned||(this.redWarned=!0,this.hint(Rt("redBigger"),3));break;case"lash":n.play("lash");break;case"hurt":n.play("hurt"),this.shake=.5;break;case"heron":n.play("heron");break;case"strike":n.play("strike"),this.drops.burst(t.x,.3,t.z,24,4,.7),this._ripple(t.x,t.z,2.5);break;case"evolve":n.play("evolve"),this.sparkle.burst(i.x,1,i.z,60,5,1),this._big(Rt("evolved"),Rt("growTo2",{n:ge(e.level.boss)}),2.2);break;case"boss":{n.play("boss",Fe(t.kind)),n.setMode("boss");let r=e.boss;this.bossModel=Fe(t.kind)==="heron"?Ko():Fe(t.kind)==="snake"?Jo(t.kind==="snake2"?13126312:6989866):Yo(!0),this.bossModel.root.scale.setScalar(Fe(t.kind)==="heron"?t.kind==="heron2"?2:1.6:Fe(t.kind)==="snake"?t.kind==="snake2"?3.8:3.2:yn(r.v)*2),this.scene.add(this.bossModel.root),this.hud.boss.style.display="flex",this.hud.boss.querySelector("span").textContent=In(_n[t.kind]),this._big(In(_n[t.kind]),"",2.2),setTimeout(()=>this.mode==="play"&&this.hint(Rt(`bossIntro_${t.kind}`),3.6),1200),this.shake=.6;break}case"bossHit":n.play("bossHit"),this.sparkle.burst(e.boss.x,1,e.boss.z,16,4,.5),this.hud.boss.querySelector("i").style.width=`${t.hp/e.boss.max*100}%`;break;case"bossDown":n.play("bossDown"),this.sparkle.burst(e.boss.x,1.5,e.boss.z,120,7,1.2),this.bossDownT=0;break;case"gulped":this.frog.root.visible=!0;break;default:}}_ripple(t,e,n){let i=this.ripples.find(r=>r.t>1)||this.ripples[0];i.t=0,i.r=n,i.m.position.set(t,.06,e),i.m.visible=!0}_pop(t,e,n=""){let i=et("div",{class:`hf-pop ${n}`,style:`left:${t.x}px;top:${t.y}px`},e);this.layer.append(i),setTimeout(()=>i.remove(),1e3)}_proj(t,e,n){let i=new T(t,e,n).project(this.camera);return{x:(i.x*.5+.5)*this.cw,y:(-i.y*.5+.5)*this.ch,behind:i.z>1}}_model(t){return t.kind==="frog"?Yo(!1):t.kind==="snake"?Jo():Nc(t.kind)}_sync(t,e){var w,V,y;let n=this.p,i=n.frog,r=this.frog,a=yn(i.power),o=a/.45,l=i.leapT>0?Math.sin((1-i.leapT/.55)*Math.PI):0,c=Math.sin(i.hopT*Math.PI);r.root.position.set(i.x,l*(2.2+a)+c*.35*o,i.z),r.root.scale.setScalar(o);let h=i.face-r.root.rotation.y;h=Math.atan2(Math.sin(h),Math.cos(h)),r.root.rotation.y+=h*Math.min(1,t*14);let u=l>0?1.15:1-Math.max(0,Math.cos(i.hopT*Math.PI*2))*.08;r.body.scale.set(1/Math.sqrt(u),u,1/Math.sqrt(u)),r.legs.forEach((A,S)=>{A.rotation.x=(l>0||c>.3)&&S%2===0?-.9:0}),this.gulpT=Math.max(0,((w=this.gulpT)!=null?w:0)-t),r.throat.scale.setScalar(1+Math.sin(e*3)*.06+this.gulpT*1.4);let d=e%3.4<.12;r.eyes.forEach(A=>{A.lid.scale.y=d?1:.05}),r.spots.visible=i.stage>=2,r.crown.visible=i.stage>=3,r.shadow.position.y=.02-r.root.position.y/o,r.body.visible=!(i.invul>0&&Math.floor(e*12)%2===0);let p=n.tongue;if(p){let A=new T(i.x+Math.sin(r.root.rotation.y)*a*1.05,r.root.position.y+a*1.05,i.z+Math.cos(r.root.rotation.y)*a*1.05),S=p.tx-i.x,N=p.tz-i.z,D=Math.hypot(S,N)||1,z=new T(i.x+S/D*p.len,Math.max(.2,(p.ty||0)*Math.min(1,p.len/D)+.3),i.z+N/D*p.len);this.tongueWob.v+=(-this.tongueWob.x*160-this.tongueWob.v*9)*t,this.tongueWob.x+=this.tongueWob.v*t;let K=A.clone().lerp(z,.5);K.y+=p.len*.12+this.tongueWob.x*.4,K.x+=-N/D*this.tongueWob.x*.5,K.z+=S/D*this.tongueWob.x*.5;let G=new Ni(A,K,z);if(this.tongueMesh.geometry.dispose(),this.tongueMesh.geometry=new pr(G,14,.07*Math.min(2.2,o*.7),6,!1),this.tongueMesh.visible=this.tongueTip.visible=p.len>.05,this.tongueTip.position.copy(z),this.tongueTip.scale.setScalar(Math.min(2.2,o*.7)),p.caught){let Q=this.models.get(p.caught.id);Q&&(Q.root.position.copy(z),Q.root.rotation.y+=t*12)}}else this.tongueMesh.visible=this.tongueTip.visible=!1;let m=new Set;for(let A of n.critters){m.add(A.id);let S=this.models.get(A.id);if(S||(S=this._model(A),this.scene.add(S.root),this.models.set(A.id,S)),!(p&&p.caught===A)){let N=A.kind==="frog"?yn(A.v)/.45:A.kind==="snake"?.7+Math.min(2.4,A.v/25):Math.max(.8,A.r/ai[A.kind].r);S.root.scale.setScalar(N);let D=A.kind==="frog"&&A.hopT>0?Math.sin(A.hopT/.4*Math.PI)*.5:0;S.root.position.set(A.x,(A.y||0)+D+(A.kind==="fish"&&A.air<=0?-.25:0),A.z),S.root.rotation.y=A.a,A.kind==="fish"&&(S.root.rotation.x=A.air>0?Math.cos((1-A.air/1.1)*Math.PI)*.8:0)}S.wings&&S.wings.forEach((N,D)=>{N.rotation.z=Math.sin(e*50+D)*.6}),S.segs&&S.segs.forEach((N,D)=>{N.position.x=Math.sin(e*5-D*.7)*.18}),S.eyes&&(S.eyes.forEach(N=>{N.lid.scale.y=(e+A.id)%3<.12?1:.05}),S.throat.scale.setScalar(1+Math.sin(e*3+A.id)*.08)),A.kind==="fish"&&A.air<=0?S.root.visible=Math.sin(A.t*2)>-.2:S.root.visible=!0}for(let[A,S]of this.models)m.has(A)||(this.scene.remove(S.root),this.models.delete(A));let C=0,g=n.critters.filter(A=>A.aim>0);n.boss&&n.boss.aim>0&&g.push(n.boss);for(let A of g)for(let N=1;N<=12&&C<this.dots.length;N++){let D=this.dots[C++];D.visible=!0,D.position.set(A.x+(A.aimX-A.x)*N/12,.25,A.z+(A.aimZ-A.z)*N/12),D.scale.setScalar(1+Math.sin(e*14-N)*.3)}for(;C<this.dots.length;C++)this.dots[C].visible=!1;this.shadows.forEach((A,S)=>{let N=n.herons[S];if(A.visible=!!N,!N)return;let D=N.struck?1:1-Math.max(0,N.t)/1.8;A.position.set(N.x,.07,N.z),A.scale.setScalar(N.r*(.5+D*.6)),A.material.opacity=.2+D*.3});let f=n.herons.find(A=>A.struck);if(this.heronModel.root.visible=!!f||n.herons.some(A=>A.t<.6),this.heronModel.root.visible){let A=f||n.herons.find(S=>S.t<.6);this.heronModel.root.position.set(A.x,0,A.z-1.2),this.heronModel.neck.rotation.x=f?1.2:.3}let b=n.boss;if(b&&this.bossModel){let A=this.bossModel;if(b.hp>0){let S=Fe(b.kind)==="bigbo"&&Math.sin(b.t*4)>.2?Math.abs(Math.sin(b.t*8))*.6:0;A.root.position.set(b.x,S,b.z),A.root.rotation.y=b.a,A.segs&&A.segs.forEach((N,D)=>{N.position.x=Math.sin(b.t*4-D*.7)*.2}),A.neck&&(A.neck.rotation.x=b.lash>0?1.2:b.aim>0?-.3:.2+Math.sin(b.t*2)*.1),A.throat&&A.throat.scale.setScalar(1+Math.sin(b.t*4)*.15),A.root.visible=!(b.flash>0&&Math.floor(e*30)%2)}else{this.bossDownT=((V=this.bossDownT)!=null?V:0)+t;let S=Math.min(1,this.bossDownT/1.2);A.root.position.lerp(new T(i.x,.5,i.z),S*.2),A.root.scale.multiplyScalar(1-t*2.2),A.root.rotation.y+=t*10,S>=1&&(A.root.visible=!1)}}this._ambient(t,e);let I=1+Math.min(1.6,(a-.45)*1.1),_=this.land?new T(0,7*I,5.5*I):new T(0,8*I,5.5*I),U=Math.max(-11,Math.min(11,i.x)),E=Math.max(-18,Math.min(20,i.z));this.camLook.lerp(new T(U,0,E-1),Math.min(1,t*4)),this.camPos.lerp(new T(U+_.x,_.y,E+_.z),Math.min(1,t*3)),this.camera.position.copy(this.camPos),this.shake=Math.max(0,((y=this.shake)!=null?y:0)-t*2),this.shake>0&&this.camera.position.add(new T((Math.random()-.5)*this.shake,0,(Math.random()-.5)*this.shake)),this.camera.lookAt(this.camLook),this._hudSync(n)}_ambient(t,e){this.waterTex&&this.waterTex.offset.set(Math.sin(e*.1)*.05,e*.01);for(let n of this.ripples)n.t>1||(n.t+=t,n.m.scale.setScalar(n.r*(.4+n.t*1.4)),n.m.material.opacity=(1-n.t)*.6,n.t>1&&(n.m.visible=!1));this.pondIndex===0&&Math.random()<t*3&&this.mist.emit((Math.random()-.5)*15*2,.6,(Math.random()-.5)*22*2,.3,.05,0,6),this.sparkle.update(t,1),this.drops.update(t,-9),this.mist.update(t)}_hudSync(t){if(!this.hud)return;let e=this._hc,n=t.frog;e.hearts!==t.hearts&&(e.hearts=t.hearts,this.hud.hearts.replaceChildren(...Array.from({length:t.maxHearts},(d,p)=>et("b",{class:p<t.hearts?"":"off"},"\u2665"))));let i,r;t.phase==="grow"?(i=Rt("growTo",{n:ge(t.level.evolve)}),r=(n.power-t.level.start)/(t.level.evolve-t.level.start)):t.phase==="grow2"?(i=Rt("growTo2",{n:ge(t.level.boss)}),r=(n.power-t.level.evolve)/(t.level.boss-t.level.evolve)):(i=Rt("beat",{b:In(_n[t.level.bossKind])}),r=t.boss?t.boss.hp/t.boss.max:0);let a=`${i}|${Math.round(r*100)}`;e.goal!==a&&(e.goal=a,this.hud.barT.textContent=i,this.hud.bar.style.width=`${Math.max(0,Math.min(100,r*100))}%`,this.hud.barWrap.classList.toggle("boss",t.phase==="boss"));let o=Math.round(n.leapCd/3*100);e.cd!==o&&(e.cd=o,this.hud.leap.style.setProperty("--cd",o));let l=this.dropsAtStart+t.drops;this.dropEl&&e.drops!==l&&(e.drops=l,this.dropEl.textContent=ge(l));let c=new Set,h=(d,p,m,C,g,f)=>{let b=this._proj(p,m,C);if(b.behind||b.x<-40||b.x>this.cw+40||b.y<0||b.y>this.ch)return;let I=this.tags.get(d);I||(I=et("div",{class:"hf-tag"}),this.layer.insertBefore(I,this.hud.big),this.tags.set(d,I)),I._t!==g&&(I._t=g,I.textContent=g),I._c!==f&&(I._c=f,I.className=`hf-tag ${f}`),I.style.left=`${b.x}px`,I.style.top=`${b.y}px`,c.add(d)},u=yn(n.power);h("me",n.x,this.frog.root.position.y+u*2.4,n.z,`\u{1F438} ${ge(n.power)}`,"me");for(let d of t.critters){if(t.tongue&&t.tongue.caught===d||Math.hypot(d.x-n.x,d.z-n.z)>16)continue;let p=d.v>n.power;h(d.id,d.x,(d.y||0)+(d.kind==="frog"?yn(d.v)*2.4:.8),d.z,ge(d.v),p?"red":"")}t.boss&&t.boss.hp>0&&h("boss",t.boss.x,Fe(t.boss.kind)==="heron"?6:3.4,t.boss.z,`\u{1F451} ${ge(t.boss.v)}`,"red boss");for(let[d,p]of this.tags)c.has(d)||(p.remove(),this.tags.delete(d))}_frame(){let t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;if(this._adapt(t),this.mode==="play"&&this.p&&!this.paused)this._playFrame(t,e);else if(this.mode==="results"&&this.p)this._ambient(t,e);else if(this.mode!=="play"){this._ambient(t,e);let n=this.frog;n.root.visible=!0,n.root.position.set(0,Math.max(0,Math.sin(e*2.2))*.25,0),n.root.scale.setScalar(1.6),n.root.rotation.y=Math.sin(e*.5)*.4,n.throat.scale.setScalar(1+Math.max(0,Math.sin(e*3))*.5),n.eyes.forEach(r=>{r.lid.scale.y=e%3<.12?1:.05}),Math.random()<t*.25&&this.sound.play("croak");let i=new T(Math.sin(e*.15)*3,9,9);this.camPos.lerp(i,Math.min(1,t*1.5)),this.camLook.lerp(new T(0,.5,0),Math.min(1,t*2)),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook)}this.renderer.render(this.scene,this.camera)}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,i)=>n+i,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),clearTimeout(this._ht),clearTimeout(this._bgT),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},$o={start(s,t,e){let n=new jo(s,t||{},e);return $o.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.HungryFrog=$o;var Pm=$o;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
