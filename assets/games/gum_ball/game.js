(()=>{var Co="170";var Ol=0,Jo=1,kl=2;var il=1,Hl=2,fn=3,Dn=0,Pe=1,gn=2,Un=0,Ci=1,Os=2,Qo=3,$o=4,Gl=5,Yn=100,Wl=101,Xl=102,Yl=103,Zl=104,Kl=200,jl=201,Jl=202,Ql=203,na=204,ia=205,$l=206,th=207,eh=208,nh=209,ih=210,sh=211,rh=212,ah=213,oh=214,sa=0,ra=1,aa=2,Ii=3,oa=4,ca=5,la=6,ha=7,gr=0,ch=1,lh=2,Ln=0,hh=1,uh=2,dh=3,fh=4,ph=5,gh=6,mh=7;var sl=300,Mi=301,bi=302,ua=303,da=304,mr=306,Yi=1e3,jn=1001,fa=1002,Ne=1003,Ah=1004;var us=1005;var Je=1006,br=1007;var Jn=1008;var xn=1009,rl=1010,al=1011,Zi=1012,vo=1013,Qn=1014,Qe=1015,es=1016,_o=1017,yo=1018,Si=1020,ol=35902,cl=1021,ll=1022,Xe=1023,hl=1024,ul=1025,vi=1026,Ei=1027,Io=1028,Mo=1029,dl=1030,bo=1031;var So=1033,qs=33776,Ns=33777,Fs=33778,Bs=33779,pa=35840,ga=35841,ma=35842,Aa=35843,xa=36196,Ca=37492,va=37496,_a=37808,ya=37809,Ia=37810,Ma=37811,ba=37812,Sa=37813,Ea=37814,Ta=37815,wa=37816,Va=37817,Ra=37818,Pa=37819,Ua=37820,La=37821,zs=36492,Da=36494,qa=36495,fl=36283,Na=36284,Fa=36285,Ba=36286;var ks=2300,za=2301,Sr=2302,tc=2400,ec=2401,nc=2402;var xh=3200,Ch=3201;var Eo=0,vh=1,Pn="",xe="srgb",Vi="srgb-linear",Ar="linear",Qt="srgb";var ii=7680;var ic=519,_h=512,yh=513,Ih=514,pl=515,Mh=516,bh=517,Sh=518,Eh=519,sc=35044;var rc="300 es",mn=2e3,Hs=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Er=Math.PI/180,Oa=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Th(i,t){return(i%t+t)%t}function Tr(i,t,e){return(1-e)*i+e*t}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=s[0],g=s[3],f=s[6],b=s[1],M=s[4],_=s[7],D=s[2],S=s[5],E=s[8];return r[0]=a*x+o*b+c*D,r[3]=a*g+o*M+c*S,r[6]=a*f+o*_+c*E,r[1]=l*x+h*b+u*D,r[4]=l*g+h*M+u*S,r[7]=l*f+h*_+u*E,r[2]=d*x+p*b+m*D,r[5]=d*g+p*M+m*S,r[8]=d*f+p*_+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wr=new Pt;function gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wh(){let i=Gs("canvas");return i.style.display="block",i}var ac={};function Gi(i){i in ac||(ac[i]=!0,console.warn(i))}function Vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ph(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Gt={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?Ar:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var oc=[.64,.33,.3,.6,.15,.06],cc=[.2126,.7152,.0722],lc=[.3127,.329],hc=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[Vi]:{primaries:oc,whitePoint:lc,transfer:Ar,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:cc,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:oc,whitePoint:lc,transfer:Qt,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:cc,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});var si,ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=Gs("canvas")),si.width=t.width,si.height=t.height;let n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uh=0,Ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vr(s[a].image)):r.push(Vr(s[a]))}else r=Vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lh=0,Ue=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=Je,a=Jn,o=Xe,c=xn,l=i.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ns(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=sl;Ue.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],x=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,_=(p+1)/2,D=(f+1)/2,S=(h+d)/4,E=(u+x)/4,L=(m+g)/4;return M>_&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=E/n):_>D?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=E/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ha=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ws(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xs=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Te=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==m){let g=1-o,f=c*d+l*p+h*m+u*x,b=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let D=Math.sqrt(M),S=Math.atan2(D,f*b);g=Math.sin(g*S)/D,o=Math.sin(o*S)/D}let _=o*b;if(c=c*g+d*_,l=l*g+p*_,h=h*g+m*_,u=u*g+x*_,g===1-o){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-o*p,t[e+2]=l*m+h*p+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rr=new P,dc=new Te,vn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),fs.subVectors(this.max,Fi),ri.subVectors(t.a,Fi),ai.subVectors(t.b,Fi),oi.subVectors(t.c,Fi),Sn.subVectors(ai,ri),En.subVectors(oi,ai),zn.subVectors(ri,oi);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-zn.z,zn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,zn.z,0,-zn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-zn.y,zn.x,0];return!Pr(e,ri,ai,oi,fs)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,ri,ai,oi,fs))?!1:(ps.crossVectors(Sn,En),e=[ps.x,ps.y,ps.z],Pr(e,ri,ai,oi,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},cn=[new P,new P,new P,new P,new P,new P,new P,new P],He=new P,ds=new vn,ri=new P,ai=new P,oi=new P,Sn=new P,En=new P,zn=new P,Fi=new P,fs=new P,ps=new P,On=new P;function Pr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){On.fromArray(i,r);let o=s.x*Math.abs(On.x)+s.y*Math.abs(On.y)+s.z*Math.abs(On.z),c=t.dot(On),l=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Dh=new vn,Bi=new P,Ur=new P,Nn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);let e=Bi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(Ur)),this.expandByPoint(Bi.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new P,Lr=new P,gs=new P,Tn=new P,Dr=new P,ms=new P,qr=new P,Ys=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(Lr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(gs),o=Tn.dot(this.direction),c=-Tn.dot(gs),l=Tn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lr).addScaledVector(gs,d),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);let n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){Dr.subVectors(e,t),ms.subVectors(n,t),qr.crossVectors(Dr,ms);let a=this.direction.dot(qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);let c=o*this.direction.dot(ms.crossVectors(Tn,ms));if(c<0)return null;let l=o*this.direction.dot(Dr.cross(Tn));if(l<0||c+l>a)return null;let h=-o*Tn.dot(qr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,m,x,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,m=l*h,x=l*u;e[0]=d+x*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,m=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qh,t,Nh)}lookAt(t,e,n){let s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),wn.crossVectors(n,De),wn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),wn.crossVectors(n,De)),wn.normalize(),As.crossVectors(De,wn),s[0]=wn.x,s[4]=As.x,s[8]=De.x,s[1]=wn.y,s[5]=As.y,s[9]=De.y,s[2]=wn.z,s[6]=As.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],b=n[3],M=n[7],_=n[11],D=n[15],S=s[0],E=s[4],L=s[8],y=s[12],v=s[1],T=s[5],z=s[9],B=s[13],H=s[2],K=s[6],G=s[10],tt=s[14],k=s[3],st=s[7],ht=s[11],_t=s[15];return r[0]=a*S+o*v+c*H+l*k,r[4]=a*E+o*T+c*K+l*st,r[8]=a*L+o*z+c*G+l*ht,r[12]=a*y+o*B+c*tt+l*_t,r[1]=h*S+u*v+d*H+p*k,r[5]=h*E+u*T+d*K+p*st,r[9]=h*L+u*z+d*G+p*ht,r[13]=h*y+u*B+d*tt+p*_t,r[2]=m*S+x*v+g*H+f*k,r[6]=m*E+x*T+g*K+f*st,r[10]=m*L+x*z+g*G+f*ht,r[14]=m*y+x*B+g*tt+f*_t,r[3]=b*S+M*v+_*H+D*k,r[7]=b*E+M*T+_*K+D*st,r[11]=b*L+M*z+_*G+D*ht,r[15]=b*y+M*B+_*tt+D*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],x=t[7],g=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+g*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],x=t[13],g=t[14],f=t[15],b=u*g*l-x*d*l+x*c*p-o*g*p-u*c*f+o*d*f,M=m*d*l-h*g*l-m*c*p+a*g*p+h*c*f-a*d*f,_=h*x*l-m*u*l+m*o*p-a*x*p-h*o*f+a*u*f,D=m*u*c-h*x*c-m*o*d+a*x*d+h*o*g-a*u*g,S=e*b+n*M+s*_+r*D;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=b*E,t[1]=(x*d*r-u*g*r-x*s*p+n*g*p+u*s*f-n*d*f)*E,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*f+n*c*f)*E,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*E,t[4]=M*E,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*E,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*f-e*c*f)*E,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*E,t[8]=_*E,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*f-e*u*f)*E,t[10]=(a*x*r-m*o*r+m*n*l-e*x*l-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*E,t[12]=D*E,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*E,t[14]=(m*o*s-a*x*s-m*n*c+e*x*c+a*n*g-e*o*g)*E,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,m=r*u,x=a*h,g=a*u,f=o*u,b=c*l,M=c*h,_=c*u,D=n.x,S=n.y,E=n.z;return s[0]=(1-(x+f))*D,s[1]=(p+_)*D,s[2]=(m-M)*D,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(d+f))*S,s[6]=(g+b)*S,s[7]=0,s[8]=(m+M)*E,s[9]=(g-b)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ci.set(s[0],s[1],s[2]).length(),a=ci.set(s[4],s[5],s[6]).length(),o=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ge.copy(this);let l=1/r,h=1/a,u=1/o;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(o===mn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Hs)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,m,x;if(o===mn)m=(a+r)*u,x=-2*u;else if(o===Hs)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ci=new P,Ge=new Yt,qh=new P(0,0,0),Nh=new P(1,1,1),wn=new P,As=new P,De=new P,fc=new Yt,pc=new Te,Ce=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ce.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fh=0,gc=new P,li=new Te,hn=new Yt,xs=new P,zi=new P,Bh=new P,zh=new Te,mc=new P(1,0,0),Ac=new P(0,1,0),xc=new P(0,0,1),Cc={type:"added"},Oh={type:"removed"},hi={type:"childadded",child:null},Nr={type:"childremoved",child:null},Me=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Ce,n=new Te,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Pt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(mc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(xc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(zi,xs,this.up):hn.lookAt(xs,zi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(hn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cc),hi.child=t,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oh),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cc),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,Bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Me.DEFAULT_UP=new P(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var We=new P,un=new P,Fr=new P,dn=new P,ui=new P,di=new P,vc=new P,Br=new P,zr=new P,Or=new P,kr=new le,Hr=new le,Gr=new le,Zn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){We.subVectors(s,e),un.subVectors(n,e),Fr.subVectors(t,e);let a=We.dot(We),o=We.dot(un),c=We.dot(Fr),l=un.dot(un),h=un.dot(Fr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return kr.setScalar(0),Hr.setScalar(0),Gr.setScalar(0),kr.fromBufferAttribute(t,e),Hr.fromBufferAttribute(t,n),Gr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(kr,r.x),a.addScaledVector(Hr,r.y),a.addScaledVector(Gr,r.z),a}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),un.subVectors(t,e),We.cross(un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),un.subVectors(this.a,this.b),We.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ui.subVectors(s,n),di.subVectors(r,n),Br.subVectors(t,n);let c=ui.dot(Br),l=di.dot(Br);if(c<=0&&l<=0)return e.copy(n);zr.subVectors(t,s);let h=ui.dot(zr),u=di.dot(zr);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ui,a);Or.subVectors(t,r);let p=ui.dot(Or),m=di.dot(Or);if(m>=0&&p<=m)return e.copy(r);let x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(di,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return vc.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(vc,o);let f=1/(g+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(ui,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=Th(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wr(a,r,t+1/3),this.g=Wr(a,r,t),this.b=Wr(a,r,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=ml[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Gt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=xe){Gt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Cs);let n=Tr(Vn.h,Cs.h,e),s=Tr(Vn.s,Cs.s,e),r=Tr(Vn.l,Cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Tt;Tt.NAMES=ml;var kh=0,_n=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=ns(),this.name="",this.blending=Ci,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fn=class extends _n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new P,vs=new Wt,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sc&&(t.usage=this.usage),t}};var Ks=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var js=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hh=0,ze=new Yt,Xr=new Me,fi=new P,qe=new vn,Oi=new vn,me=new P,be=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gl(t)?js:Ks)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(qe.min,Oi.min),qe.expandByPoint(me),me.addVectors(qe.max,Oi.max),qe.expandByPoint(me)):(qe.expandByPoint(Oi.min),qe.expandByPoint(Oi.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)me.fromBufferAttribute(o,l),c&&(fi.fromBufferAttribute(t,l),me.add(fi)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new P,c[L]=new P;let l=new P,h=new P,u=new P,d=new Wt,p=new Wt,m=new Wt,x=new P,g=new P;function f(L,y,v){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let T=1/(p.x*m.y-m.x*p.y);isFinite(T)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(T),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(T),o[L].add(x),o[y].add(x),o[v].add(x),c[L].add(g),c[y].add(g),c[v].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,y=b.length;L<y;++L){let v=b[L],T=v.start,z=v.count;for(let B=T,H=T+z;B<H;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new P,_=new P,D=new P,S=new P;function E(L){D.fromBufferAttribute(s,L),S.copy(D);let y=o[L];M.copy(y),M.sub(D.multiplyScalar(D.dot(y))).normalize(),_.crossVectors(S,y);let T=_.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,T)}for(let L=0,y=b.length;L<y;++L){let v=b[L],T=v.start,z=v.count;for(let B=T,H=T+z;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_c=new Yt,kn=new Ys,_s=new Nn,yc=new P,ys=new P,Is=new P,Ms=new P,Yr=new P,bs=new P,Ic=new P,Ss=new P,re=class extends Me{constructor(t=new be,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){bs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Yr.fromBufferAttribute(u,t),a?bs.addScaledVector(Yr,h):bs.addScaledVector(Yr.sub(e),h))}e.add(bs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(_s.containsPoint(kn.origin)===!1&&(kn.intersectSphere(_s,yc)===null||kn.origin.distanceToSquared(yc)>(t.far-t.near)**2))&&(_c.copy(r).invert(),kn.copy(t.ray).applyMatrix4(_c),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex],b=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=b,D=M;_<D;_+=3){let S=o.getX(_),E=o.getX(_+1),L=o.getX(_+2);s=Es(this,f,t,n,l,h,u,S,E,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let b=o.getX(g),M=o.getX(g+1),_=o.getX(g+2);s=Es(this,a,t,n,l,h,u,b,M,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex],b=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=b,D=M;_<D;_+=3){let S=_,E=_+1,L=_+2;s=Es(this,f,t,n,l,h,u,S,E,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let b=g,M=g+1,_=g+2;s=Es(this,a,t,n,l,h,u,b,M,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Gh(i,t,e,n,s,r,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Dn,o),c===null)return null;Ss.copy(o),Ss.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ss);return l<e.near||l>e.far?null:{distance:l,point:Ss.clone(),object:i}}function Es(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ys),i.getVertexPosition(c,Is),i.getVertexPosition(l,Ms);let h=Gh(i,t,e,n,ys,Is,Ms,Ic);if(h){let u=new P;Zn.getBarycoord(Ic,ys,Is,Ms,u),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,c,l,u,new Wt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,c,l,u,new Wt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};Zn.getNormal(ys,Is,Ms,d.normal),h.face=d,h.barycoord=u}return h}var tn=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function m(x,g,f,b,M,_,D,S,E,L,y){let v=_/E,T=D/L,z=_/2,B=D/2,H=S/2,K=E+1,G=L+1,tt=0,k=0,st=new P;for(let ht=0;ht<G;ht++){let _t=ht*T-B;for(let qt=0;qt<K;qt++){let $t=qt*v-z;st[x]=$t*b,st[g]=_t*M,st[f]=H,l.push(st.x,st.y,st.z),st[x]=0,st[g]=0,st[f]=S>0?1:-1,h.push(st.x,st.y,st.z),u.push(qt/E),u.push(1-ht/L),tt+=1}}for(let ht=0;ht<L;ht++)for(let _t=0;_t<E;_t++){let qt=d+_t+K*ht,$t=d+_t+K*(ht+1),X=d+(_t+1)+K*(ht+1),et=d+(_t+1)+K*ht;c.push(qt,$t,et),c.push($t,X,et),k+=6}o.addGroup(p,k,y),p+=k,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ti(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){let t={};for(let e=0;e<i.length;e++){let n=Ti(i[e]);for(let s in n)t[s]=n[s]}return t}function Wh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Al(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var Xh={clone:Ti,merge:Se},Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends _n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Js=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=new P,Mc=new Wt,bc=new Wt,Ee=class extends Js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Mc,bc),e.subVectors(bc,Mc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},pi=-90,gi=1,Wa=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(pi,gi,t,e);s.layers=this.layers,this.add(s);let r=new Ee(pi,gi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(pi,gi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(pi,gi,t,e);o.layers=this.layers,this.add(o);let c=new Ee(pi,gi,t,e);c.layers=this.layers,this.add(c);let l=new Ee(pi,gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Qs=class extends Ue{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Mi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xa=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Un});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=Je),new Wa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Zr=new P,Kh=new P,jh=new Pt,pn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zr.subVectors(n,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jh.getNormalMatrix(t),s=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hn=new Nn,Ts=new P,Ki=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],x=s[10],g=s[11],f=s[12],b=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,g-p,_-f).normalize(),n[1].setComponents(c+r,d+l,g+p,_+f).normalize(),n[2].setComponents(c+a,d+h,g+m,_+b).normalize(),n[3].setComponents(c-a,d-h,g-m,_-b).normalize(),n[4].setComponents(c-o,d-u,g-x,_-M).normalize(),e===mn)n[5].setComponents(c+o,d+u,g+x,_+M).normalize();else if(e===Hs)n[5].setComponents(o,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ts.x=s.normal.x>0?t.max.x:t.min.x,Ts.y=s.normal.y>0?t.max.y:t.min.y,Ts.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jh(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ye=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){let b=f*d-a;for(let M=0;M<l;M++){let _=M*u-r;m.push(_,-b,0),x.push(0,0,1),g.push(M/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){let M=b+l*f,_=b+l*(f+1),D=b+1+l*(f+1),S=b+1+l*f;p.push(M,_,S),p.push(_,D,S)}this.setIndex(p),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,su=`#ifdef USE_AOMAP
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
#endif`,ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,au=`#ifdef USE_BATCHING
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
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uu=`#ifdef USE_IRIDESCENCE
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
#endif`,du=`#ifdef USE_BUMPMAP
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_u=`#define PI 3.141592653589793
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
#endif`,Iu=`vec3 transformedNormal = objectNormal;
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
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vu=`#ifdef USE_ENVMAP
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
	
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
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
}`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hu=`uniform bool receiveShadow;
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
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#endif`,ju=`struct PhysicalMaterial {
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
}`,Ju=`
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
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
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qd=`float getShadowMask() {
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`#include <common>
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
}`,rf=`#if DEPTH_PACKING == 3200
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
}`,af=`#define DISTANCE
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
}`,of=`#define DISTANCE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`uniform float scale;
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#define LAMBERT
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
}`,gf=`#define LAMBERT
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
}`,mf=`#define MATCAP
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
}`,Af=`#define MATCAP
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
}`,xf=`#define NORMAL
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
}`,Cf=`#define NORMAL
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
}`,_f=`#define PHONG
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
}`,If=`#define STANDARD
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
}`,Mf=`#define TOON
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
}`,bf=`#define TOON
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
}`,Sf=`uniform float size;
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
}`,Ef=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,Vf=`uniform float rotation;
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
}`,Lt={alphahash_fragment:Qh,alphahash_pars_fragment:$h,alphamap_fragment:tu,alphamap_pars_fragment:eu,alphatest_fragment:nu,alphatest_pars_fragment:iu,aomap_fragment:su,aomap_pars_fragment:ru,batching_pars_vertex:au,batching_vertex:ou,begin_vertex:cu,beginnormal_vertex:lu,bsdfs:hu,iridescence_fragment:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:fu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:mu,color_fragment:Au,color_pars_fragment:xu,color_pars_vertex:Cu,color_vertex:vu,common:_u,cube_uv_reflection_fragment:yu,defaultnormal_vertex:Iu,displacementmap_pars_vertex:Mu,displacementmap_vertex:bu,emissivemap_fragment:Su,emissivemap_pars_fragment:Eu,colorspace_fragment:Tu,colorspace_pars_fragment:wu,envmap_fragment:Vu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Pu,envmap_pars_vertex:Uu,envmap_physical_pars_fragment:Gu,envmap_vertex:Lu,fog_vertex:Du,fog_pars_vertex:qu,fog_fragment:Nu,fog_pars_fragment:Fu,gradientmap_pars_fragment:Bu,lightmap_pars_fragment:zu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:ku,lights_pars_begin:Hu,lights_toon_fragment:Wu,lights_toon_pars_fragment:Xu,lights_phong_fragment:Yu,lights_phong_pars_fragment:Zu,lights_physical_fragment:Ku,lights_physical_pars_fragment:ju,lights_fragment_begin:Ju,lights_fragment_maps:Qu,lights_fragment_end:$u,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:cd,metalnessmap_pars_fragment:ld,morphinstance_vertex:hd,morphcolor_vertex:ud,morphnormal_vertex:dd,morphtarget_pars_vertex:fd,morphtarget_vertex:pd,normal_fragment_begin:gd,normal_fragment_maps:md,normal_pars_fragment:Ad,normal_pars_vertex:xd,normal_vertex:Cd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Md,opaque_fragment:bd,packing:Sd,premultiplied_alpha_fragment:Ed,project_vertex:Td,dithering_fragment:wd,dithering_pars_fragment:Vd,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Ld,shadowmap_vertex:Dd,shadowmask_pars_fragment:qd,skinbase_vertex:Nd,skinning_pars_vertex:Fd,skinning_vertex:Bd,skinnormal_vertex:zd,specularmap_fragment:Od,specularmap_pars_fragment:kd,tonemapping_fragment:Hd,tonemapping_pars_fragment:Gd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:Yd,uv_pars_vertex:Zd,uv_vertex:Kd,worldpos_vertex:jd,background_vert:Jd,background_frag:Qd,backgroundCube_vert:$d,backgroundCube_frag:tf,cube_vert:ef,cube_frag:nf,depth_vert:sf,depth_frag:rf,distanceRGBA_vert:af,distanceRGBA_frag:of,equirect_vert:cf,equirect_frag:lf,linedashed_vert:hf,linedashed_frag:uf,meshbasic_vert:df,meshbasic_frag:ff,meshlambert_vert:pf,meshlambert_frag:gf,meshmatcap_vert:mf,meshmatcap_frag:Af,meshnormal_vert:xf,meshnormal_frag:Cf,meshphong_vert:vf,meshphong_frag:_f,meshphysical_vert:yf,meshphysical_frag:If,meshtoon_vert:Mf,meshtoon_frag:bf,points_vert:Sf,points_frag:Ef,shadow_vert:Tf,shadow_frag:wf,sprite_vert:Vf,sprite_frag:Rf},nt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},je={basic:{uniforms:Se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Se([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Se([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Se([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Se([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Se([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Se([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Se([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Se([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Se([nt.common,nt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Se([nt.lights,nt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};je.physical={uniforms:Se([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var ws={r:0,b:0,g:0},Gn=new Ce,Pf=new Yt;function Uf(i,t,e,n,s,r,a){let o=new Tt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1,_=m(b);_===null?f(o,c):_&&_.isColor&&(f(_,1),M=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,M){let _=m(M);_&&(_.isCubeTexture||_.mapping===mr)?(h===void 0&&(h=new re(new tn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ti(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(M.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pf.makeRotationFromEuler(Gn)),h.material.toneMapped=Gt.getTransfer(_.colorSpace)!==Qt,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new re(new Ye(2,2),new en({name:"BackgroundMaterial",uniforms:Ti(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(_.colorSpace)!==Qt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(ws,Al(i)),n.buffers.color.setClear(ws.r,ws.g,ws.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(o,c)},render:x,addToRenderList:g}}function Lf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,T,z,B,H){let K=!1,G=u(B,z,T);r!==G&&(r=G,l(r.object)),K=p(v,B,z,H),K&&m(v,B,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(v,T,z,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,T,z){let B=z.wireframe===!0,H=n[v.id];H===void 0&&(H={},n[v.id]=H);let K=H[T.id];K===void 0&&(K={},H[T.id]=K);let G=K[B];return G===void 0&&(G=d(c()),K[B]=G),G}function d(v){let T=[],z=[],B=[];for(let H=0;H<e;H++)T[H]=0,z[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,T,z,B){let H=r.attributes,K=T.attributes,G=0,tt=z.getAttributes();for(let k in tt)if(tt[k].location>=0){let ht=H[k],_t=K[k];if(_t===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor)),ht===void 0||ht.attribute!==_t||_t&&ht.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(v,T,z,B){let H={},K=T.attributes,G=0,tt=z.getAttributes();for(let k in tt)if(tt[k].location>=0){let ht=K[k];ht===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor));let _t={};_t.attribute=ht,ht&&ht.data&&(_t.data=ht.data),H[k]=_t,G++}r.attributes=H,r.attributesNum=G,r.index=B}function x(){let v=r.newAttributes;for(let T=0,z=v.length;T<z;T++)v[T]=0}function g(v){f(v,0)}function f(v,T){let z=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;z[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),H[v]!==T&&(i.vertexAttribDivisor(v,T),H[v]=T)}function b(){let v=r.newAttributes,T=r.enabledAttributes;for(let z=0,B=T.length;z<B;z++)T[z]!==v[z]&&(i.disableVertexAttribArray(z),T[z]=0)}function M(v,T,z,B,H,K,G){G===!0?i.vertexAttribIPointer(v,T,z,H,K):i.vertexAttribPointer(v,T,z,B,H,K)}function _(v,T,z,B){x();let H=B.attributes,K=z.getAttributes(),G=T.defaultAttributeValues;for(let tt in K){let k=K[tt];if(k.location>=0){let st=H[tt];if(st===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){let ht=st.normalized,_t=st.itemSize,qt=t.get(st);if(qt===void 0)continue;let $t=qt.buffer,X=qt.type,et=qt.bytesPerElement,At=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===vo;if(st.isInterleavedBufferAttribute){let rt=st.data,bt=rt.stride,wt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<k.locationSize;Nt++)f(k.location+Nt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<k.locationSize;Nt++)g(k.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Nt=0;Nt<k.locationSize;Nt++)M(k.location+Nt,_t/k.locationSize,X,ht,bt*et,(wt+_t/k.locationSize*Nt)*et,At)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)f(k.location+rt,st.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<k.locationSize;rt++)g(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let rt=0;rt<k.locationSize;rt++)M(k.location+rt,_t/k.locationSize,X,ht,_t*et,_t/k.locationSize*rt*et,At)}}else if(G!==void 0){let ht=G[tt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(k.location,ht);break;case 3:i.vertexAttrib3fv(k.location,ht);break;case 4:i.vertexAttrib4fv(k.location,ht);break;default:i.vertexAttrib1fv(k.location,ht)}}}}b()}function D(){L();for(let v in n){let T=n[v];for(let z in T){let B=T[z];for(let H in B)h(B[H].object),delete B[H];delete T[z]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;let T=n[v.id];for(let z in T){let B=T[z];for(let H in B)h(B[H].object),delete B[H];delete T[z]}delete n[v.id]}function E(v){for(let T in n){let z=n[T];if(z[v.id]===void 0)continue;let B=z[v.id];for(let H in B)h(B[H].object),delete B[H];delete z[v.id]}}function L(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Df(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function qf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Xe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let L=E===es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Qe&&!L)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:D,maxSamples:S}}function Nf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new pn,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,M=b*4,_=f.clippingState||null;c.value=_,_=h(m,d,M,p);for(let D=0;D!==M;++D)_[D]=e[D];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let f=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,_=p;M!==x;++M,_+=4)a.copy(u[M]).applyMatrix4(b,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Ff(i){let t=new WeakMap;function e(a,o){return o===ua?a.mapping=Mi:o===da&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ua||o===da)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Xa(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $s=class extends Js{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xi=4,Sc=[.125,.215,.35,.446,.526,.582],Kn=20,Kr=new $s,Ec=new Tt,jr=null,Jr=0,Qr=0,$r=!1,Xn=(1+Math.sqrt(5))/2,mi=1/Xn,Tc=[new P(-Xn,mi,0),new P(Xn,mi,0),new P(-mi,0,Xn),new P(mi,0,Xn),new P(0,Xn,-mi),new P(0,Xn,mi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){jr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,Jr,Qr),this._renderer.xr.enabled=$r,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:es,format:Xe,colorSpace:Vi,depthBuffer:!1},s=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bf(r)),this._blurMaterial=zf(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,n,s){let o=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ec),h.toneMapping=Ln,h.autoClear=!1;let p=new Fn({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new re(new tn,p),x=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(Ec),x=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):b===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let M=this._cubeSize;Vs(s,b*M,f>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Mi||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tc[(s-r-1)%Tc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new re(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Kn;g>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kn}`);let f=[],b=0;for(let E=0;E<Kn;++E){let L=E/x,y=Math.exp(-L*L/2);f.push(y),E===0?b+=y:E<g&&(b+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let _=this._sizeLods[s],D=3*_*(s>M-xi?s-M+xi:0),S=4*(this._cubeSize-_);Vs(e,D,S,3*_,2*_),c.setRenderTarget(e),c.render(u,Kr)}};function Bf(i){let t=[],e=[],n=[],s=i,r=i-xi+1+Sc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-xi?c=Sc[a-i+xi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,f=1,b=new Float32Array(x*m*p),M=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let S=0;S<p;S++){let E=S%3*2/3-1,L=S>2?0:-1,y=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];b.set(y,x*m*S),M.set(d,g*m*S);let v=[S,S,S,S,S,S];_.set(v,f*m*S)}let D=new be;D.setAttribute("position",new fe(b,x)),D.setAttribute("uv",new fe(M,g)),D.setAttribute("faceIndex",new fe(_,f)),t.push(D),s>xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(i,t,e){let n=new Cn(i,t,e);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zf(i,t,e){let n=new Float32Array(Kn),s=new P(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:To(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Vc(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Rc(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}function Of(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ua||c===da,h=c===Mi||c===bi;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new tr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new tr(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function kf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hf(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,f=x.length;g<f;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let x=p[m];for(let g=0,f=x.length;g<f;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,m=u.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let M=0,_=b.length;M<_;M+=3){let D=b[M+0],S=b[M+1],E=b[M+2];d.push(D,S,S,E,E,D)}}else if(m!==void 0){let b=m.array;x=m.version;for(let M=0,_=b.length/3-1;M<_;M+=3){let D=M+0,S=M+1,E=M+2;d.push(D,S,S,E,E,D)}}else return;let g=new(gl(d)?js:Ks)(d,1);g.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Gf(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,m);let f=0;for(let b=0;b<m;b++)f+=p[b]*x[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xf(i,t,e){let n=new WeakMap,s=new le;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,D=1;_>t.maxTextureSize&&(D=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*D*4*u),E=new Xs(S,_,D,u);E.type=Qe,E.needsUpdate=!0;let L=M*4;for(let v=0;v<u;v++){let T=g[v],z=f[v],B=b[v],H=_*D*4*v;for(let K=0;K<T.count;K++){let G=K*L;p===!0&&(s.fromBufferAttribute(T,K),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(z,K),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),x===!0&&(s.fromBufferAttribute(B,K),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new Wt(_,D)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Yf(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var er=class extends Ue{constructor(t,e,n,s,r,a,o,c,l,h=vi){if(h!==vi&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=Qn),n===void 0&&h===Ei&&(n=Si),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cl=new Ue,Pc=new er(1,1),vl=new Xs,_l=new Ga,yl=new Qs,Uc=[],Lc=[],Dc=new Float32Array(16),qc=new Float32Array(9),Nc=new Float32Array(4);function Ri(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xr(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Qf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(pe(e,n))return;Nc.set(n),i.uniformMatrix2fv(this.addr,!1,Nc),ge(e,n)}}function $f(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(pe(e,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),ge(e,n)}}function tp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(pe(e,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),ge(e,n)}}function ep(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pc.compareFunction=pl,r=Pc):r=Cl,e.setTexture2D(t||r,s)}function hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_l,s)}function up(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yl,s)}function dp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vl,s)}function fp(i){switch(i){case 5126:return Zf;case 35664:return Kf;case 35665:return jf;case 35666:return Jf;case 35674:return Qf;case 35675:return $f;case 35676:return tp;case 5124:case 35670:return ep;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return sp;case 5125:return rp;case 36294:return ap;case 36295:return op;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(i,t){i.uniform1fv(this.addr,t)}function gp(i,t){let e=Ri(t,this.size,2);i.uniform2fv(this.addr,e)}function mp(i,t){let e=Ri(t,this.size,3);i.uniform3fv(this.addr,e)}function Ap(i,t){let e=Ri(t,this.size,4);i.uniform4fv(this.addr,e)}function xp(i,t){let e=Ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cp(i,t){let e=Ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vp(i,t){let e=Ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _p(i,t){i.uniform1iv(this.addr,t)}function yp(i,t){i.uniform2iv(this.addr,t)}function Ip(i,t){i.uniform3iv(this.addr,t)}function Mp(i,t){i.uniform4iv(this.addr,t)}function bp(i,t){i.uniform1uiv(this.addr,t)}function Sp(i,t){i.uniform2uiv(this.addr,t)}function Ep(i,t){i.uniform3uiv(this.addr,t)}function Tp(i,t){i.uniform4uiv(this.addr,t)}function wp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Cl,r[a])}function Vp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_l,r[a])}function Rp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yl,r[a])}function Pp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vl,r[a])}function Up(i){switch(i){case 5126:return pp;case 35664:return gp;case 35665:return mp;case 35666:return Ap;case 35674:return xp;case 35675:return Cp;case 35676:return vp;case 5124:case 35670:return _p;case 35667:case 35671:return yp;case 35668:case 35672:return Ip;case 35669:case 35673:return Mp;case 5125:return bp;case 36294:return Sp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}var Ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fp(e.type)}},Za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Up(e.type)}},Ka=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ta=/(\w+)(\])?(\[|\.)?/g;function Fc(i,t){i.seq.push(t),i.map[t.id]=t}function Lp(i,t,e){let n=i.name,s=n.length;for(ta.lastIndex=0;;){let r=ta.exec(n),a=ta.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Fc(e,l===void 0?new Ya(o,i,t):new Za(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ka(o),Fc(e,u)),e=u}}}var yi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Lp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dp=37297,qp=0;function Np(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zc=new Pt;function Fp(i){Gt._getMatrix(zc,Gt.workingColorSpace,i);let t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Ar:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Np(i.getShaderSource(t),a)}else return s}function Bp(i,t){let e=Fp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zp(i,t){let e;switch(t){case hh:e="Linear";break;case uh:e="Reinhard";break;case dh:e="Cineon";break;case fh:e="ACESFilmic";break;case gh:e="AgX";break;case mh:e="Neutral";break;case ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rs=new P;function Op(){Gt.getLuminanceCoefficients(Rs);let i=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Hp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wi(i){return i!==""}function kc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(i){return i.replace(Wp,Yp)}var Xp=new Map;function Yp(i,t){let e=Lt[t];if(e===void 0){let n=Xp.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ja(e)}var Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(Zp,Kp)}function Kp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function jp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===il?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case bi:t="ENVMAP_TYPE_CUBE";break;case mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function $p(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gr:t="ENVMAP_BLENDING_MULTIPLY";break;case ch:t="ENVMAP_BLENDING_MIX";break;case lh:t="ENVMAP_BLENDING_ADD";break}return t}function tg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=jp(e),l=Jp(e),h=Qp(e),u=$p(e),d=tg(e),p=kp(e),m=Hp(r),x=s.createProgram(),g,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wi).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wi).join(`
`),f.length>0&&(f+=`
`)):(g=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),f=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,Bp("linearToOutputTexel",e.outputColorSpace),Op(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),a=ja(a),a=kc(a,e),a=Hc(a,e),o=ja(o),o=kc(o,e),o=Hc(o,e),a=Gc(a),o=Gc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=b+g+a,_=b+f+o,D=Bc(s,s.VERTEX_SHADER,M),S=Bc(s,s.FRAGMENT_SHADER,_);s.attachShader(x,D),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(T){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(S).trim(),K=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,S);else{let tt=Oc(s,D,"vertex"),k=Oc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+tt+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||H==="")&&(G=!1);G&&(T.diagnostics={runnable:K,programLog:z,vertexShader:{log:B,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(D),s.deleteShader(S),L=new yi(s,x),y=Gp(s,x)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Dp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=S,this}var ng=0,Ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qa(t),e.set(t,n)),n}},Qa=class{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}};function ig(i,t,e,n,s,r,a){let o=new Zs,c=new Ja,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,v,T,z,B){let H=z.fog,K=B.geometry,G=y.isMeshStandardMaterial?z.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),k=tt&&tt.mapping===mr?tt.image.height:null,st=m[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=ht!==void 0?ht.length:0,qt=0;K.morphAttributes.position!==void 0&&(qt=1),K.morphAttributes.normal!==void 0&&(qt=2),K.morphAttributes.color!==void 0&&(qt=3);let $t,X,et,At;if(st){let Jt=je[st];$t=Jt.vertexShader,X=Jt.fragmentShader}else $t=y.vertexShader,X=y.fragmentShader,c.update(y),et=c.getVertexShaderID(y),At=c.getFragmentShaderID(y);let rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),wt=B.isInstancedMesh===!0,Nt=B.isBatchedMesh===!0,oe=!!y.map,kt=!!y.matcap,ue=!!tt,U=!!y.aoMap,Fe=!!y.lightMap,Bt=!!y.bumpMap,zt=!!y.normalMap,It=!!y.displacementMap,ne=!!y.emissiveMap,yt=!!y.metalnessMap,I=!!y.roughnessMap,A=y.anisotropy>0,q=y.clearcoat>0,Y=y.dispersion>0,j=y.iridescence>0,W=y.sheen>0,xt=y.transmission>0,at=A&&!!y.anisotropyMap,ut=q&&!!y.clearcoatMap,Ht=q&&!!y.clearcoatNormalMap,Q=q&&!!y.clearcoatRoughnessMap,dt=j&&!!y.iridescenceMap,Mt=j&&!!y.iridescenceThicknessMap,St=W&&!!y.sheenColorMap,ft=W&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,Ut=!!y.specularColorMap,te=!!y.specularIntensityMap,w=xt&&!!y.transmissionMap,it=xt&&!!y.thicknessMap,O=!!y.gradientMap,Z=!!y.alphaMap,lt=y.alphaTest>0,ot=!!y.alphaHash,Vt=!!y.extensions,ce=Ln;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);let _e={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:X,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&B._colorsTexture!==null,instancing:wt,instancingColor:wt&&B.instanceColor!==null,instancingMorph:wt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Vi,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:kt,envMap:ue,envMapMode:ue&&tt.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:Fe,bumpMap:Bt,normalMap:zt,displacementMap:d&&It,emissiveMap:ne,normalMapObjectSpace:zt&&y.normalMapType===vh,normalMapTangentSpace:zt&&y.normalMapType===Eo,metalnessMap:yt,roughnessMap:I,anisotropy:A,anisotropyMap:at,clearcoat:q,clearcoatMap:ut,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:St,sheenRoughnessMap:ft,specularMap:Ot,specularColorMap:Ut,specularIntensityMap:te,transmission:xt,transmissionMap:w,thicknessMap:it,gradientMap:O,opaque:y.transparent===!1&&y.blending===Ci&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:ot,combine:y.combine,mapUv:oe&&x(y.map.channel),aoMapUv:U&&x(y.aoMap.channel),lightMapUv:Fe&&x(y.lightMap.channel),bumpMapUv:Bt&&x(y.bumpMap.channel),normalMapUv:zt&&x(y.normalMap.channel),displacementMapUv:It&&x(y.displacementMap.channel),emissiveMapUv:ne&&x(y.emissiveMap.channel),metalnessMapUv:yt&&x(y.metalnessMap.channel),roughnessMapUv:I&&x(y.roughnessMap.channel),anisotropyMapUv:at&&x(y.anisotropyMap.channel),clearcoatMapUv:ut&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&x(y.sheenRoughnessMap.channel),specularMapUv:Ot&&x(y.specularMap.channel),specularColorMapUv:Ut&&x(y.specularColorMap.channel),specularIntensityMapUv:te&&x(y.specularIntensityMap.channel),transmissionMapUv:w&&x(y.transmissionMap.channel),thicknessMapUv:it&&x(y.thicknessMap.channel),alphaMapUv:Z&&x(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(zt||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(oe||Z),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:qt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&Gt.getTransfer(y.map.colorSpace)===Qt,decodeVideoTextureEmissive:ne&&y.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(y.emissiveMap.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gn,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function f(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let T in y.defines)v.push(T),v.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(b(v,y),M(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function b(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function M(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){let v=m[y.type],T;if(v){let z=je[v];T=Xh.clone(z.uniforms)}else T=y.uniforms;return T}function D(y,v){let T;for(let z=0,B=h.length;z<B;z++){let H=h[z];if(H.cacheKey===v){T=H,++T.usedTimes;break}}return T===void 0&&(T=new eg(i,v,y,r),h.push(T)),T}function S(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function E(y){c.remove(y)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:D,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:L}}function sg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,x,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=x,f.group=g),t++,f}function o(u,d,p,m,x,g){let f=a(u,d,p,m,x,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,x,g){let f=a(u,d,p,m,x,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||rg),n.length>1&&n.sort(d||Xc),s.length>1&&s.sort(d||Xc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Yc,i.set(n,[a])):s>=r.length?(a=new Yc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function og(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Tt};break;case"SpotLight":e={position:new P,direction:new P,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function cg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lg=0;function hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ug(i){let t=new og,e=cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Yt,a=new Yt;function o(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,b=0,M=0,_=0,D=0,S=0,E=0;l.sort(hg);for(let y=0,v=l.length;y<v;y++){let T=l[y],z=T.color,B=T.intensity,H=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*B,u+=z.g*B,d+=z.b*B;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],B);E++}else if(T.isDirectionalLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let tt=T.shadow,k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=T.shadow.matrix,b++}n.directional[p]=G,p++}else if(T.isSpotLight){let G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(z).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[x]=G;let tt=T.shadow;if(T.map&&(n.spotLightMap[D]=T.map,D++,tt.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[x]=tt.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=K,_++}x++}else if(T.isRectAreaLight){let G=t.get(T);G.color.copy(z).multiplyScalar(B),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=G,g++}else if(T.isPointLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let tt=T.shadow,k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,k.shadowCameraNear=tt.camera.near,k.shadowCameraFar=tt.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=T.shadow.matrix,M++}n.point[m]=G,m++}else if(T.isHemisphereLight){let G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(B),G.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==D||L.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+D-S,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=p,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=D,L.numLightProbes=E,n.version=lg++)}function c(l,h){let u=0,d=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){let M=l[f];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function Zc(i){let t=new ug(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function dg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Zc(i),t.set(s,[o])):r>=a.length?(o=new Zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $a=class extends _n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},to=class extends _n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function gg(i,t,e){let n=new Ki,s=new Wt,r=new Wt,a=new le,o=new $a({depthPacking:Ch}),c=new to,l={},h=e.maxTextureSize,u={[Dn]:Pe,[Pe]:Dn,[gn]:gn},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new be;m.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new re(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let f=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let y=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Un),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=f!==fn&&this.type===fn,H=f===fn&&this.type!==fn;for(let K=0,G=S.length;K<G;K++){let tt=S[K],k=tt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||B===!0||H===!0){let _t=this.type!==fn?{minFilter:Ne,magFilter:Ne}:{};k.map!==null&&k.map.dispose(),k.map=new Cn(s.x,s.y,_t),k.map.texture.name=tt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ht=k.getViewportCount();for(let _t=0;_t<ht;_t++){let qt=k.getViewport(_t);a.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),z.viewport(a),k.updateMatrices(tt,_t),n=k.getFrustum(),_(E,L,k.camera,tt,this.type)}k.isPointLightShadow!==!0&&this.type===fn&&b(k,L),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(y,v,T)};function b(S,E){let L=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Cn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,L,d,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,L,p,x,null)}function M(S,E,L,y){let v=null,T=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)v=T;else if(v=L.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let z=v.uuid,B=E.uuid,H=l[z];H===void 0&&(H={},l[z]=H);let K=H[B];K===void 0&&(K=v.clone(),H[B]=K,E.addEventListener("dispose",D)),v=K}if(v.visible=E.visible,v.wireframe=E.wireframe,y===fn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=i.properties.get(v);z.light=L}return v}function _(S,E,L,y,v){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===fn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let B=t.update(S),H=S.material;if(Array.isArray(H)){let K=B.groups;for(let G=0,tt=K.length;G<tt;G++){let k=K[G],st=H[k.materialIndex];if(st&&st.visible){let ht=M(S,st,y,v);S.onBeforeShadow(i,S,E,L,B,ht,k),i.renderBufferDirect(L,null,B,ht,S,k),S.onAfterShadow(i,S,E,L,B,ht,k)}}}else if(H.visible){let K=M(S,H,y,v);S.onBeforeShadow(i,S,E,L,B,K,null),i.renderBufferDirect(L,null,B,K,S,null),S.onAfterShadow(i,S,E,L,B,K,null)}}let z=S.children;for(let B=0,H=z.length;B<H;B++)_(z[B],E,L,y,v)}function D(S){S.target.removeEventListener("dispose",D);for(let L in l){let y=l[L],v=S.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var mg={[sa]:ra,[aa]:la,[oa]:ha,[Ii]:ca,[ra]:sa,[la]:aa,[ha]:oa,[ca]:Ii};function Ag(i,t){function e(){let w=!1,it=new le,O=null,Z=new le(0,0,0,0);return{setMask:function(lt){O!==lt&&!w&&(i.colorMask(lt,lt,lt,lt),O=lt)},setLocked:function(lt){w=lt},setClear:function(lt,ot,Vt,ce,_e){_e===!0&&(lt*=ce,ot*=ce,Vt*=ce),it.set(lt,ot,Vt,ce),Z.equals(it)===!1&&(i.clearColor(lt,ot,Vt,ce),Z.copy(it))},reset:function(){w=!1,O=null,Z.set(-1,0,0,0)}}}function n(){let w=!1,it=!1,O=null,Z=null,lt=null;return{setReversed:function(ot){if(it!==ot){let Vt=t.get("EXT_clip_control");it?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let ce=lt;lt=null,this.setClear(ce)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ot){O!==ot&&!w&&(i.depthMask(ot),O=ot)},setFunc:function(ot){if(it&&(ot=mg[ot]),Z!==ot){switch(ot){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){w=ot},setClear:function(ot){lt!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){w=!1,O=null,Z=null,lt=null,it=!1}}}function s(){let w=!1,it=null,O=null,Z=null,lt=null,ot=null,Vt=null,ce=null,_e=null;return{setTest:function(Jt){w||(Jt?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!w&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,Oe,an){(O!==Jt||Z!==Oe||lt!==an)&&(i.stencilFunc(Jt,Oe,an),O=Jt,Z=Oe,lt=an)},setOp:function(Jt,Oe,an){(ot!==Jt||Vt!==Oe||ce!==an)&&(i.stencilOp(Jt,Oe,an),ot=Jt,Vt=Oe,ce=an)},setLocked:function(Jt){w=Jt},setClear:function(Jt){_e!==Jt&&(i.clearStencil(Jt),_e=Jt)},reset:function(){w=!1,it=null,O=null,Z=null,lt=null,ot=null,Vt=null,ce=null,_e=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,b=null,M=null,_=null,D=null,S=null,E=new Tt(0,0,0),L=0,y=!1,v=null,T=null,z=null,B=null,H=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=tt>=2);let st=null,ht={},_t=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),$t=new le().fromArray(_t),X=new le().fromArray(qt);function et(w,it,O,Z){let lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(w,ot),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<O;Vt++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}let At={};At[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Ii),Bt(!1),zt(Jo),rt(i.CULL_FACE),U(Un);function rt(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function bt(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function wt(w,it){return u[w]!==it?(i.bindFramebuffer(w,it),u[w]=it,w===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),w===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Nt(w,it){let O=p,Z=!1;if(w){O=d.get(it),O===void 0&&(O=[],d.set(it,O));let lt=w.textures;if(O.length!==lt.length||O[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Vt=lt.length;ot<Vt;ot++)O[ot]=i.COLOR_ATTACHMENT0+ot;O.length=lt.length,Z=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,Z=!0);Z&&i.drawBuffers(O)}function oe(w){return m!==w?(i.useProgram(w),m=w,!0):!1}let kt={[Yn]:i.FUNC_ADD,[Wl]:i.FUNC_SUBTRACT,[Xl]:i.FUNC_REVERSE_SUBTRACT};kt[Yl]=i.MIN,kt[Zl]=i.MAX;let ue={[Kl]:i.ZERO,[jl]:i.ONE,[Jl]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[ih]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[$l]:i.DST_ALPHA,[Ql]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[nh]:i.ONE_MINUS_DST_COLOR,[th]:i.ONE_MINUS_DST_ALPHA,[sh]:i.CONSTANT_COLOR,[rh]:i.ONE_MINUS_CONSTANT_COLOR,[ah]:i.CONSTANT_ALPHA,[oh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(w,it,O,Z,lt,ot,Vt,ce,_e,Jt){if(w===Un){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),w!==Gl){if(w!==g||Jt!==y){if((f!==Yn||_!==Yn)&&(i.blendEquation(i.FUNC_ADD),f=Yn,_=Yn),Jt)switch(w){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Os:i.blendFunc(i.ONE,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Os:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}b=null,M=null,D=null,S=null,E.set(0,0,0),L=0,g=w,y=Jt}return}lt=lt||it,ot=ot||O,Vt=Vt||Z,(it!==f||lt!==_)&&(i.blendEquationSeparate(kt[it],kt[lt]),f=it,_=lt),(O!==b||Z!==M||ot!==D||Vt!==S)&&(i.blendFuncSeparate(ue[O],ue[Z],ue[ot],ue[Vt]),b=O,M=Z,D=ot,S=Vt),(ce.equals(E)===!1||_e!==L)&&(i.blendColor(ce.r,ce.g,ce.b,_e),E.copy(ce),L=_e),g=w,y=!1}function Fe(w,it){w.side===gn?bt(i.CULL_FACE):rt(i.CULL_FACE);let O=w.side===Pe;it&&(O=!O),Bt(O),w.blending===Ci&&w.transparent===!1?U(Un):U(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),r.setMask(w.colorWrite);let Z=w.stencilWrite;o.setTest(Z),Z&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),ne(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(w){v!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),v=w)}function zt(w){w!==Ol?(rt(i.CULL_FACE),w!==T&&(w===Jo?i.cullFace(i.BACK):w===kl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),T=w}function It(w){w!==z&&(G&&i.lineWidth(w),z=w)}function ne(w,it,O){w?(rt(i.POLYGON_OFFSET_FILL),(B!==it||H!==O)&&(i.polygonOffset(it,O),B=it,H=O)):bt(i.POLYGON_OFFSET_FILL)}function yt(w){w?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function I(w){w===void 0&&(w=i.TEXTURE0+K-1),st!==w&&(i.activeTexture(w),st=w)}function A(w,it,O){O===void 0&&(st===null?O=i.TEXTURE0+K-1:O=st);let Z=ht[O];Z===void 0&&(Z={type:void 0,texture:void 0},ht[O]=Z),(Z.type!==w||Z.texture!==it)&&(st!==O&&(i.activeTexture(O),st=O),i.bindTexture(w,it||At[w]),Z.type=w,Z.texture=it)}function q(){let w=ht[st];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function St(w){$t.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),$t.copy(w))}function ft(w){X.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),X.copy(w))}function Ot(w,it){let O=l.get(it);O===void 0&&(O=new WeakMap,l.set(it,O));let Z=O.get(w);Z===void 0&&(Z=i.getUniformBlockIndex(it,w.name),O.set(w,Z))}function Ut(w,it){let Z=l.get(it).get(w);c.get(it)!==Z&&(i.uniformBlockBinding(it,Z,w.__bindingPointIndex),c.set(it,Z))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,b=null,M=null,_=null,D=null,S=null,E=new Tt(0,0,0),L=0,y=!1,v=null,T=null,z=null,B=null,H=null,$t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:wt,drawBuffers:Nt,useProgram:oe,setBlending:U,setMaterial:Fe,setFlipSided:Bt,setCullFace:zt,setLineWidth:It,setPolygonOffset:ne,setScissorTest:yt,activeTexture:I,bindTexture:A,unbindTexture:q,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:dt,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ut,texStorage2D:Ht,texStorage3D:Q,texSubImage2D:W,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:St,viewport:ft,reset:te}}function Kc(i,t,e,n){let s=xg(n);switch(e){case cl:return i*t;case hl:return i*t;case ul:return i*t*2;case Io:return i*t/s.components*s.byteLength;case Mo:return i*t/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case bo:return i*t*2/s.components*s.byteLength;case ll:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case So:return i*t*4/s.components*s.byteLength;case qs:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case Aa:return Math.max(i,16)*Math.max(t,8)/4;case pa:case ma:return Math.max(i,8)*Math.max(t,8)/2;case xa:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zs:case Da:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fl:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xg(i){switch(i){case xn:case rl:return{byteLength:1,components:1};case Zi:case al:case es:return{byteLength:2,components:1};case _o:case yo:return{byteLength:2,components:4};case Qn:case vo:case Qe:return{byteLength:4,components:1};case ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,A){return p?new OffscreenCanvas(I,A):Gs("canvas")}function x(I,A,q){let Y=1,j=yt(I);if((j.width>q||j.height>q)&&(Y=q/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let W=Math.floor(Y*j.width),xt=Math.floor(Y*j.height);u===void 0&&(u=m(W,xt));let at=A?m(W,xt):u;return at.width=W,at.height=xt,at.getContext("2d").drawImage(I,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+xt+")."),at}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function g(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,A,q,Y,j=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=A;if(A===i.RED&&(q===i.FLOAT&&(W=i.R32F),q===i.HALF_FLOAT&&(W=i.R16F),q===i.UNSIGNED_BYTE&&(W=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(W=i.R8UI),q===i.UNSIGNED_SHORT&&(W=i.R16UI),q===i.UNSIGNED_INT&&(W=i.R32UI),q===i.BYTE&&(W=i.R8I),q===i.SHORT&&(W=i.R16I),q===i.INT&&(W=i.R32I)),A===i.RG&&(q===i.FLOAT&&(W=i.RG32F),q===i.HALF_FLOAT&&(W=i.RG16F),q===i.UNSIGNED_BYTE&&(W=i.RG8)),A===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(W=i.RG8UI),q===i.UNSIGNED_SHORT&&(W=i.RG16UI),q===i.UNSIGNED_INT&&(W=i.RG32UI),q===i.BYTE&&(W=i.RG8I),q===i.SHORT&&(W=i.RG16I),q===i.INT&&(W=i.RG32I)),A===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(W=i.RGB8UI),q===i.UNSIGNED_SHORT&&(W=i.RGB16UI),q===i.UNSIGNED_INT&&(W=i.RGB32UI),q===i.BYTE&&(W=i.RGB8I),q===i.SHORT&&(W=i.RGB16I),q===i.INT&&(W=i.RGB32I)),A===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),q===i.UNSIGNED_INT&&(W=i.RGBA32UI),q===i.BYTE&&(W=i.RGBA8I),q===i.SHORT&&(W=i.RGBA16I),q===i.INT&&(W=i.RGBA32I)),A===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),A===i.RGBA){let xt=j?Ar:Gt.getTransfer(Y);q===i.FLOAT&&(W=i.RGBA32F),q===i.HALF_FLOAT&&(W=i.RGBA16F),q===i.UNSIGNED_BYTE&&(W=xt===Qt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(I,A){let q;return I?A===null||A===Qn||A===Si?q=i.DEPTH24_STENCIL8:A===Qe?q=i.DEPTH32F_STENCIL8:A===Zi&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Qn||A===Si?q=i.DEPTH_COMPONENT24:A===Qe?q=i.DEPTH_COMPONENT32F:A===Zi&&(q=i.DEPTH_COMPONENT16),q}function D(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ne&&I.minFilter!==Je?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function S(I){let A=I.target;A.removeEventListener("dispose",S),L(A),A.isVideoTexture&&h.delete(A)}function E(I){let A=I.target;A.removeEventListener("dispose",E),v(A)}function L(I){let A=n.get(I);if(A.__webglInit===void 0)return;let q=I.source,Y=d.get(q);if(Y){let j=Y[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(I),Object.keys(Y).length===0&&d.delete(q)}n.remove(I)}function y(I){let A=n.get(I);i.deleteTexture(A.__webglTexture);let q=I.source,Y=d.get(q);delete Y[A.__cacheKey],a.memory.textures--}function v(I){let A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let j=0;j<A.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(A.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let q=I.textures;for(let Y=0,j=q.length;Y<j;Y++){let W=n.get(q[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(q[Y])}n.remove(I)}let T=0;function z(){T=0}function B(){let I=T;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),T+=1,I}function H(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function K(I,A){let q=n.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(q,I,A);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function G(I,A){let q=n.get(I);if(I.version>0&&q.__version!==I.version){X(q,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function tt(I,A){let q=n.get(I);if(I.version>0&&q.__version!==I.version){X(q,I,A);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function k(I,A){let q=n.get(I);if(I.version>0&&q.__version!==I.version){et(q,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}let st={[Yi]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},ht={[Ne]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[br]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},_t={[_h]:i.NEVER,[Eh]:i.ALWAYS,[yh]:i.LESS,[pl]:i.LEQUAL,[Ih]:i.EQUAL,[Sh]:i.GEQUAL,[Mh]:i.GREATER,[bh]:i.NOTEQUAL};function qt(I,A){if(A.type===Qe&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Je||A.magFilter===br||A.magFilter===us||A.magFilter===Jn||A.minFilter===Je||A.minFilter===br||A.minFilter===us||A.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,st[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,st[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,st[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ht[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ht[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,_t[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ne||A.minFilter!==us&&A.minFilter!==Jn||A.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function $t(I,A){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",S));let Y=A.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let W=H(A);if(W!==I.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),j[W].usedTimes++;let xt=j[I.__cacheKey];xt!==void 0&&(j[I.__cacheKey].usedTimes--,xt.usedTimes===0&&y(A)),I.__cacheKey=W,I.__webglTexture=j[W].texture}return q}function X(I,A,q){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);let j=$t(I,A),W=A.source;e.bindTexture(Y,I.__webglTexture,i.TEXTURE0+q);let xt=n.get(W);if(W.version!==xt.__version||j===!0){e.activeTexture(i.TEXTURE0+q);let at=Gt.getPrimaries(Gt.workingColorSpace),ut=A.colorSpace===Pn?null:Gt.getPrimaries(A.colorSpace),Ht=A.colorSpace===Pn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Q=x(A.image,!1,s.maxTextureSize);Q=ne(A,Q);let dt=r.convert(A.format,A.colorSpace),Mt=r.convert(A.type),St=M(A.internalFormat,dt,Mt,A.colorSpace,A.isVideoTexture);qt(Y,A);let ft,Ot=A.mipmaps,Ut=A.isVideoTexture!==!0,te=xt.__version===void 0||j===!0,w=W.dataReady,it=D(A,Q);if(A.isDepthTexture)St=_(A.format===Ei,A.type),te&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,St,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,St,Q.width,Q.height,0,dt,Mt,null));else if(A.isDataTexture)if(Ot.length>0){Ut&&te&&e.texStorage2D(i.TEXTURE_2D,it,St,Ot[0].width,Ot[0].height);for(let O=0,Z=Ot.length;O<Z;O++)ft=Ot[O],Ut?w&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,O,St,ft.width,ft.height,0,dt,Mt,ft.data);A.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(i.TEXTURE_2D,it,St,Q.width,Q.height),w&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,Mt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,St,Q.width,Q.height,0,dt,Mt,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,St,Ot[0].width,Ot[0].height,Q.depth);for(let O=0,Z=Ot.length;O<Z;O++)if(ft=Ot[O],A.format!==Xe)if(dt!==null)if(Ut){if(w)if(A.layerUpdates.size>0){let lt=Kc(ft.width,ft.height,A.format,A.type);for(let ot of A.layerUpdates){let Vt=ft.data.subarray(ot*lt/ft.data.BYTES_PER_ELEMENT,(ot+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,ot,ft.width,ft.height,1,dt,Vt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,St,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?w&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ft.width,ft.height,Q.depth,dt,Mt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,St,ft.width,ft.height,Q.depth,0,dt,Mt,ft.data)}else{Ut&&te&&e.texStorage2D(i.TEXTURE_2D,it,St,Ot[0].width,Ot[0].height);for(let O=0,Z=Ot.length;O<Z;O++)ft=Ot[O],A.format!==Xe?dt!==null?Ut?w&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,O,St,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?w&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,O,St,ft.width,ft.height,0,dt,Mt,ft.data)}else if(A.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,St,Q.width,Q.height,Q.depth),w)if(A.layerUpdates.size>0){let O=Kc(Q.width,Q.height,A.format,A.type);for(let Z of A.layerUpdates){let lt=Q.data.subarray(Z*O/Q.data.BYTES_PER_ELEMENT,(Z+1)*O/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,dt,Mt,lt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Mt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,Q.width,Q.height,Q.depth,0,dt,Mt,Q.data);else if(A.isData3DTexture)Ut?(te&&e.texStorage3D(i.TEXTURE_3D,it,St,Q.width,Q.height,Q.depth),w&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Mt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,St,Q.width,Q.height,Q.depth,0,dt,Mt,Q.data);else if(A.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(i.TEXTURE_2D,it,St,Q.width,Q.height);else{let O=Q.width,Z=Q.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,St,O,Z,0,dt,Mt,null),O>>=1,Z>>=1}}else if(Ot.length>0){if(Ut&&te){let O=yt(Ot[0]);e.texStorage2D(i.TEXTURE_2D,it,St,O.width,O.height)}for(let O=0,Z=Ot.length;O<Z;O++)ft=Ot[O],Ut?w&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,dt,Mt,ft):e.texImage2D(i.TEXTURE_2D,O,St,dt,Mt,ft);A.generateMipmaps=!1}else if(Ut){if(te){let O=yt(Q);e.texStorage2D(i.TEXTURE_2D,it,St,O.width,O.height)}w&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Mt,Q)}else e.texImage2D(i.TEXTURE_2D,0,St,dt,Mt,Q);g(A)&&f(Y),xt.__version=W.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function et(I,A,q){if(A.image.length!==6)return;let Y=$t(I,A),j=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);let W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+q);let xt=Gt.getPrimaries(Gt.workingColorSpace),at=A.colorSpace===Pn?null:Gt.getPrimaries(A.colorSpace),ut=A.colorSpace===Pn||xt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ht=A.isCompressedTexture||A.image[0].isCompressedTexture,Q=A.image[0]&&A.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Ht&&!Q?dt[Z]=x(A.image[Z],!0,s.maxCubemapSize):dt[Z]=Q?A.image[Z].image:A.image[Z],dt[Z]=ne(A,dt[Z]);let Mt=dt[0],St=r.convert(A.format,A.colorSpace),ft=r.convert(A.type),Ot=M(A.internalFormat,St,ft,A.colorSpace),Ut=A.isVideoTexture!==!0,te=W.__version===void 0||Y===!0,w=j.dataReady,it=D(A,Mt);qt(i.TEXTURE_CUBE_MAP,A);let O;if(Ht){Ut&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ot,Mt.width,Mt.height);for(let Z=0;Z<6;Z++){O=dt[Z].mipmaps;for(let lt=0;lt<O.length;lt++){let ot=O[lt];A.format!==Xe?St!==null?Ut?w&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,St,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Ot,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,St,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Ot,ot.width,ot.height,0,St,ft,ot.data)}}}else{if(O=A.mipmaps,Ut&&te){O.length>0&&it++;let Z=yt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ot,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Ut?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,St,ft,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ot,dt[Z].width,dt[Z].height,0,St,ft,dt[Z].data);for(let lt=0;lt<O.length;lt++){let Vt=O[lt].image[Z].image;Ut?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Vt.width,Vt.height,St,ft,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Ot,Vt.width,Vt.height,0,St,ft,Vt.data)}}else{Ut?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,St,ft,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ot,St,ft,dt[Z]);for(let lt=0;lt<O.length;lt++){let ot=O[lt];Ut?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,St,ft,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Ot,St,ft,ot.image[Z])}}}g(A)&&f(i.TEXTURE_CUBE_MAP),W.__version=j.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function At(I,A,q,Y,j,W){let xt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ut=M(q.internalFormat,xt,at,q.colorSpace),Ht=n.get(A),Q=n.get(q);if(Q.__renderTarget=A,!Ht.__hasExternalTextures){let dt=Math.max(1,A.width>>W),Mt=Math.max(1,A.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,ut,dt,Mt,A.depth,0,xt,at,null):e.texImage2D(j,W,ut,dt,Mt,0,xt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),zt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Q.__webglTexture,0,Bt(A)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Q.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(I,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){let Y=A.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=_(A.stencilBuffer,j),xt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Bt(A);zt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,W,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,W,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,W,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,I)}else{let Y=A.textures;for(let j=0;j<Y.length;j++){let W=Y[j],xt=r.convert(W.format,W.colorSpace),at=r.convert(W.type),ut=M(W.internalFormat,xt,at,W.colorSpace),Ht=Bt(A);q&&zt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ut,A.width,A.height):zt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ut,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ut,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),K(A.depthTexture,0);let j=Y.__webglTexture,W=Bt(A);if(A.depthTexture.format===vi)zt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(A.depthTexture.format===Ei)zt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function wt(I){let A=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let j=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),A.__depthDisposeCallback=j}A.__boundDepthTexture=Y}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");bt(A.__webglFramebuffer,I)}else if(q){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(A.__webglDepthbuffer[Y],I,!1);else{let j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),rt(A.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(I,A,q){let Y=n.get(I);A!==void 0&&At(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&wt(I)}function oe(I){let A=I.texture,q=n.get(I),Y=n.get(A);I.addEventListener("dispose",E);let j=I.textures,W=I.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,a.memory.textures++),W){q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[at]=[];for(let ut=0;ut<A.mipmaps.length;ut++)q.__webglFramebuffer[at][ut]=i.createFramebuffer()}else q.__webglFramebuffer[at]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let at=0;at<A.mipmaps.length;at++)q.__webglFramebuffer[at]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(xt)for(let at=0,ut=j.length;at<ut;at++){let Ht=n.get(j[at]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&zt(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){let ut=j[at];q.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[at]);let Ht=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),dt=M(ut.internalFormat,Ht,Q,ut.colorSpace,I.isXRRenderTarget===!0),Mt=Bt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,dt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,q.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),qt(i.TEXTURE_CUBE_MAP,A);for(let at=0;at<6;at++)if(A.mipmaps&&A.mipmaps.length>0)for(let ut=0;ut<A.mipmaps.length;ut++)At(q.__webglFramebuffer[at][ut],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else At(q.__webglFramebuffer[at],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,ut=j.length;at<ut;at++){let Ht=j[at],Q=n.get(Ht);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),qt(i.TEXTURE_2D,Ht),At(q.__webglFramebuffer,I,Ht,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),g(Ht)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),qt(at,A),A.mipmaps&&A.mipmaps.length>0)for(let ut=0;ut<A.mipmaps.length;ut++)At(q.__webglFramebuffer[ut],I,A,i.COLOR_ATTACHMENT0,at,ut);else At(q.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,at,0);g(A)&&f(at),e.unbindTexture()}I.depthBuffer&&wt(I)}function kt(I){let A=I.textures;for(let q=0,Y=A.length;q<Y;q++){let j=A[q];if(g(j)){let W=b(I),xt=n.get(j).__webglTexture;e.bindTexture(W,xt),f(W),e.unbindTexture()}}}let ue=[],U=[];function Fe(I){if(I.samples>0){if(zt(I)===!1){let A=I.textures,q=I.width,Y=I.height,j=i.COLOR_BUFFER_BIT,W=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(I),at=A.length>1;if(at)for(let ut=0;ut<A.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<A.length;ut++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Ht=n.get(A[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,q,Y,0,0,q,Y,j,i.NEAREST),c===!0&&(ue.length=0,U.length=0,ue.push(i.COLOR_ATTACHMENT0+ut),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ue.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<A.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Ht=n.get(A[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Bt(I){return Math.min(s.maxSamples,I.samples)}function zt(I){let A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function It(I){let A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ne(I,A){let q=I.colorSpace,Y=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Vi&&q!==Pn&&(Gt.getTransfer(q)===Qt?(Y!==Xe||j!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function yt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=k,this.rebindTextures=Nt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=zt}function vg(i,t){function e(n,s=Pn){let r,a=Gt.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rl)return i.BYTE;if(n===al)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===Qe)return i.FLOAT;if(n===es)return i.HALF_FLOAT;if(n===cl)return i.ALPHA;if(n===ll)return i.RGB;if(n===Xe)return i.RGBA;if(n===hl)return i.LUMINANCE;if(n===ul)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===dl)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===So)return i.RGBA_INTEGER;if(n===qs||n===Ns||n===Fs||n===Bs)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ga||n===ma||n===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===Ca||n===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===Ca)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===ya||n===Ia||n===Ma||n===ba||n===Sa||n===Ea||n===Ta||n===wa||n===Va||n===Ra||n===Pa||n===Ua||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===Da||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zs)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===Na||n===Fa||n===Ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var eo=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$e=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},_g={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),f=this._getHandJoint(l,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
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

}`,no=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:yg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},io=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,x=new no,g=e.getContextAttributes(),f=null,b=null,M=[],_=[],D=new Wt,S=null,E=new Ee;E.viewport=new le;let L=new Ee;L.viewport=new le;let y=[E,L],v=new eo,T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=M[X];return et===void 0&&(et=new Xi,M[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=M[X];return et===void 0&&(et=new Xi,M[X]=et),et.getGripSpace()},this.getHand=function(X){let et=M[X];return et===void 0&&(et=new Xi,M[X]=et),et.getHandSpace()};function B(X){let et=_.indexOf(X.inputSource);if(et===-1)return;let At=M[et];At!==void 0&&(At.update(X.inputSource,X.frame,l||a),At.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let X=0;X<M.length;X++){let et=_[X];et!==null&&(_[X]=null,M[X].disconnect(et))}T=null,z=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Cn(p.framebufferWidth,p.framebufferHeight,{format:Xe,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,At=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?Ei:vi,At=g.stencil?Si:Qn);let bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Cn(d.textureWidth,d.textureHeight,{format:Xe,type:xn,depthTexture:new er(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(X){for(let et=0;et<X.removed.length;et++){let At=X.removed[et],rt=_.indexOf(At);rt>=0&&(_[rt]=null,M[rt].disconnect(At))}for(let et=0;et<X.added.length;et++){let At=X.added[et],rt=_.indexOf(At);if(rt===-1){for(let wt=0;wt<M.length;wt++)if(wt>=_.length){_.push(At),rt=wt;break}else if(_[wt]===null){_[wt]=At,rt=wt;break}if(rt===-1)break}let bt=M[rt];bt&&bt.connect(At)}}let G=new P,tt=new P;function k(X,et,At){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(At.matrixWorld);let rt=G.distanceTo(tt),bt=et.projectionMatrix.elements,wt=At.projectionMatrix.elements,Nt=bt[14]/(bt[10]-1),oe=bt[14]/(bt[10]+1),kt=(bt[9]+1)/bt[5],ue=(bt[9]-1)/bt[5],U=(bt[8]-1)/bt[0],Fe=(wt[8]+1)/wt[0],Bt=Nt*U,zt=Nt*Fe,It=rt/(-U+Fe),ne=It*-U;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let yt=Nt+It,I=oe+It,A=Bt-ne,q=zt+(rt-ne),Y=kt*oe/I*yt,j=ue*oe/I*yt;X.projectionMatrix.makePerspective(A,q,Y,j,yt,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,At=X.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(At=x.depthFar)),v.near=L.near=E.near=et,v.far=L.far=E.far=At,(T!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,z=v.far),E.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,v.layers.mask=E.layers.mask|L.layers.mask;let rt=X.parent,bt=v.cameras;st(v,rt);for(let wt=0;wt<bt.length;wt++)st(bt[wt],rt);bt.length===2?k(v,E,L):v.projectionMatrix.copy(E.projectionMatrix),ht(X,v,rt)};function ht(X,et,At){At===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(At.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Oa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let _t=null;function qt(X,et){if(h=et.getViewerPose(l||a),m=et,h!==null){let At=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;At.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let wt=0;wt<At.length;wt++){let Nt=At[wt],oe=null;if(p!==null)oe=p.getViewport(Nt);else{let ue=u.getViewSubImage(d,Nt);oe=ue.viewport,wt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(b))}let kt=y[wt];kt===void 0&&(kt=new Ee,kt.layers.enable(wt),kt.viewport=new le,y[wt]=kt),kt.matrix.fromArray(Nt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Nt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(oe.x,oe.y,oe.width,oe.height),wt===0&&(v.matrix.copy(kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(kt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let wt=u.getDepthInformation(At[0]);wt&&wt.isValid&&wt.texture&&x.init(t,wt,s.renderState)}}for(let At=0;At<M.length;At++){let rt=_[At],bt=M[At];rt!==null&&bt!==void 0&&bt.update(rt,et,l||a)}_t&&_t(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let $t=new xl;$t.setAnimationLoop(qt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}},Wn=new Ce,Mg=new Yt;function bg(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Al(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,b,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,b,M):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Pe&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Pe&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let b=t.get(f),M=b.envMap,_=b.envMapRotation;M&&(g.envMap.value=M,Wn.copy(_),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),g.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(Wn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,b,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*b,g.scale.value=M*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,b){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){let b=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let _=M.program;n.uniformBlockBinding(b,_)}function l(b,M){let _=s[b.id];_===void 0&&(m(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",g));let D=M.program;n.updateUBOMapping(b,D);let S=t.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let M=u();b.__bindingPointIndex=M;let _=i.createBuffer(),D=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,D,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=s[b.id],_=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,E=_.length;S<E;S++){let L=Array.isArray(_[S])?_[S]:[_[S]];for(let y=0,v=L.length;y<v;y++){let T=L[y];if(p(T,S,y,D)===!0){let z=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],H=0;for(let K=0;K<B.length;K++){let G=B[K],tt=x(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+H,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,M,_,D){let S=b.value,E=M+"_"+_;if(D[E]===void 0)return typeof S=="number"||typeof S=="boolean"?D[E]=S:D[E]=S.clone(),!0;{let L=D[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return D[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(b){let M=b.uniforms,_=0,D=16;for(let E=0,L=M.length;E<L;E++){let y=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,T=y.length;v<T;v++){let z=y[v],B=Array.isArray(z.value)?z.value:[z.value];for(let H=0,K=B.length;H<K;H++){let G=B[H],tt=x(G),k=_%D,st=k%tt.boundary,ht=k+st;_+=st,ht!==0&&D-ht<tt.storage&&(_+=D-ht),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=tt.storage}}}let S=_%D;return S>0&&(_+=D-S),b.__size=_,b.__cache={},this}function x(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){let M=b.target;M.removeEventListener("dispose",g);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var nr=class{constructor(t={}){let{canvas:e=wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=Ln,this.toneMappingExposure=1;let _=this,D=!1,S=0,E=0,L=null,y=-1,v=null,T=new le,z=new le,B=null,H=new Tt(0),K=0,G=e.width,tt=e.height,k=1,st=null,ht=null,_t=new le(0,0,G,tt),qt=new le(0,0,G,tt),$t=!1,X=new Ki,et=!1,At=!1,rt=new Yt,bt=new Yt,wt=new P,Nt=new le,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function ue(){return L===null?k:1}let U=n;function Fe(C,V){return e.getContext(C,V)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){let V="webgl2";if(U=Fe(V,C),U===null)throw Fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Bt,zt,It,ne,yt,I,A,q,Y,j,W,xt,at,ut,Ht,Q,dt,Mt,St,ft,Ot,Ut,te,w;function it(){Bt=new kf(U),Bt.init(),Ut=new vg(U,Bt),zt=new qf(U,Bt,t,Ut),It=new Ag(U,Bt),zt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),ne=new Wf(U),yt=new sg,I=new Cg(U,Bt,It,yt,zt,Ut,ne),A=new Ff(_),q=new Of(_),Y=new Jh(U),te=new Lf(U,Y),j=new Hf(U,Y,ne,te),W=new Yf(U,j,Y,ne),St=new Xf(U,zt,I),Q=new Nf(yt),xt=new ig(_,A,q,Bt,zt,te,Q),at=new bg(_,yt),ut=new ag,Ht=new dg(Bt),Mt=new Uf(_,A,q,It,W,p,c),dt=new gg(_,W,zt),w=new Sg(U,ne,zt,It),ft=new Df(U,Bt,ne),Ot=new Gf(U,Bt,ne),ne.programs=xt.programs,_.capabilities=zt,_.extensions=Bt,_.properties=yt,_.renderLists=ut,_.shadowMap=dt,_.state=It,_.info=ne}it();let O=new io(_,U);this.xr=O,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=Bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(G,tt,!1))},this.getSize=function(C){return C.set(G,tt)},this.setSize=function(C,V,N=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,tt=V,e.width=Math.floor(C*k),e.height=Math.floor(V*k),N===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(G*k,tt*k).floor()},this.setDrawingBufferSize=function(C,V,N){G=C,tt=V,k=N,e.width=Math.floor(C*N),e.height=Math.floor(V*N),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(_t)},this.setViewport=function(C,V,N,F){C.isVector4?_t.set(C.x,C.y,C.z,C.w):_t.set(C,V,N,F),It.viewport(T.copy(_t).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(qt)},this.setScissor=function(C,V,N,F){C.isVector4?qt.set(C.x,C.y,C.z,C.w):qt.set(C,V,N,F),It.scissor(z.copy(qt).multiplyScalar(k).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(C){It.setScissorTest($t=C)},this.setOpaqueSort=function(C){st=C},this.setTransparentSort=function(C){ht=C},this.getClearColor=function(C){return C.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(C=!0,V=!0,N=!0){let F=0;if(C){let R=!1;if(L!==null){let $=L.texture.format;R=$===So||$===bo||$===Mo}if(R){let $=L.texture.type,ct=$===xn||$===Qn||$===Zi||$===Si||$===_o||$===yo,pt=Mt.getClearColor(),gt=Mt.getClearAlpha(),Et=pt.r,Rt=pt.g,mt=pt.b;ct?(m[0]=Et,m[1]=Rt,m[2]=mt,m[3]=gt,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=Et,x[1]=Rt,x[2]=mt,x[3]=gt,U.clearBufferiv(U.COLOR,0,x))}else F|=U.COLOR_BUFFER_BIT}V&&(F|=U.DEPTH_BUFFER_BIT),N&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Ht.dispose(),yt.dispose(),A.dispose(),q.dispose(),W.dispose(),te.dispose(),w.dispose(),xt.dispose(),O.dispose(),O.removeEventListener("sessionstart",Ho),O.removeEventListener("sessionend",Go),Bn.stop()};function Z(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let C=ne.autoReset,V=dt.enabled,N=dt.autoUpdate,F=dt.needsUpdate,R=dt.type;it(),ne.autoReset=C,dt.enabled=V,dt.autoUpdate=N,dt.needsUpdate=F,dt.type=R}function ot(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Vt(C){let V=C.target;V.removeEventListener("dispose",Vt),ce(V)}function ce(C){_e(C),yt.remove(C)}function _e(C){let V=yt.get(C).programs;V!==void 0&&(V.forEach(function(N){xt.releaseProgram(N)}),C.isShaderMaterial&&xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,N,F,R,$){V===null&&(V=oe);let ct=R.isMesh&&R.matrixWorld.determinant()<0,pt=Fl(C,V,N,F,R);It.setMaterial(F,ct);let gt=N.index,Et=1;if(F.wireframe===!0){if(gt=j.getWireframeAttribute(N),gt===void 0)return;Et=2}let Rt=N.drawRange,mt=N.attributes.position,Xt=Rt.start*Et,ee=(Rt.start+Rt.count)*Et;$!==null&&(Xt=Math.max(Xt,$.start*Et),ee=Math.min(ee,($.start+$.count)*Et)),gt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,gt.count)):mt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,mt.count));let ie=ee-Xt;if(ie<0||ie===1/0)return;te.setup(R,F,pt,N,gt);let we,Zt=ft;if(gt!==null&&(we=Y.get(gt),Zt=Ot,Zt.setIndex(we)),R.isMesh)F.wireframe===!0?(It.setLineWidth(F.wireframeLinewidth*ue()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(R.isLine){let Ct=F.linewidth;Ct===void 0&&(Ct=1),It.setLineWidth(Ct*ue()),R.isLineSegments?Zt.setMode(U.LINES):R.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else R.isPoints?Zt.setMode(U.POINTS):R.isSprite&&Zt.setMode(U.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)Zt.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let Ct=R._multiDrawStarts,on=R._multiDrawCounts,Kt=R._multiDrawCount,ke=gt?Y.get(gt).bytesPerElement:1,ni=yt.get(F).currentProgram.getUniforms();for(let Le=0;Le<Kt;Le++)ni.setValue(U,"_gl_DrawID",Le),Zt.render(Ct[Le]/ke,on[Le])}else if(R.isInstancedMesh)Zt.renderInstances(Xt,ie,R.count);else if(N.isInstancedBufferGeometry){let Ct=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,on=Math.min(N.instanceCount,Ct);Zt.renderInstances(Xt,ie,on)}else Zt.render(Xt,ie)};function Jt(C,V,N){C.transparent===!0&&C.side===gn&&C.forceSinglePass===!1?(C.side=Pe,C.needsUpdate=!0,hs(C,V,N),C.side=Dn,C.needsUpdate=!0,hs(C,V,N),C.side=gn):hs(C,V,N)}this.compile=function(C,V,N=null){N===null&&(N=C),f=Ht.get(N),f.init(V),M.push(f),N.traverseVisible(function(R){R.isLight&&R.layers.test(V.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),C!==N&&C.traverseVisible(function(R){R.isLight&&R.layers.test(V.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights();let F=new Set;return C.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let $=R.material;if($)if(Array.isArray($))for(let ct=0;ct<$.length;ct++){let pt=$[ct];Jt(pt,N,R),F.add(pt)}else Jt($,N,R),F.add($)}),M.pop(),f=null,F},this.compileAsync=function(C,V,N=null){let F=this.compile(C,V,N);return new Promise(R=>{function $(){if(F.forEach(function(ct){yt.get(ct).currentProgram.isReady()&&F.delete(ct)}),F.size===0){R(C);return}setTimeout($,10)}Bt.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Oe=null;function an(C){Oe&&Oe(C)}function Ho(){Bn.stop()}function Go(){Bn.start()}let Bn=new xl;Bn.setAnimationLoop(an),typeof self!="undefined"&&Bn.setContext(self),this.setAnimationLoop=function(C){Oe=C,O.setAnimationLoop(C),C===null?Bn.stop():Bn.start()},O.addEventListener("sessionstart",Ho),O.addEventListener("sessionend",Go),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(V),V=O.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,V,L),f=Ht.get(C,M.length),f.init(V),M.push(f),bt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X.setFromProjectionMatrix(bt),At=this.localClippingEnabled,et=Q.init(this.clippingPlanes,At),g=ut.get(C,b.length),g.init(),b.push(g),O.enabled===!0&&O.isPresenting===!0){let $=_.xr.getDepthSensingMesh();$!==null&&Mr($,V,-1/0,_.sortObjects)}Mr(C,V,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(st,ht),kt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,kt&&Mt.addToRenderList(g,C),this.info.render.frame++,et===!0&&Q.beginShadows();let N=f.state.shadowsArray;dt.render(N,C,V),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,R=g.transmissive;if(f.setupLights(),V.isArrayCamera){let $=V.cameras;if(R.length>0)for(let ct=0,pt=$.length;ct<pt;ct++){let gt=$[ct];Xo(F,R,C,gt)}kt&&Mt.render(C);for(let ct=0,pt=$.length;ct<pt;ct++){let gt=$[ct];Wo(g,C,gt,gt.viewport)}}else R.length>0&&Xo(F,R,C,V),kt&&Mt.render(C),Wo(g,C,V);L!==null&&(I.updateMultisampleRenderTarget(L),I.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(_,C,V),te.resetDefaultState(),y=-1,v=null,M.pop(),M.length>0?(f=M[M.length-1],et===!0&&Q.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Mr(C,V,N,F){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)N=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){F&&Nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);let ct=W.update(C),pt=C.material;pt.visible&&g.push(C,ct,pt,N,Nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let ct=W.update(C),pt=C.material;if(F&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Nt.copy(C.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Nt.copy(ct.boundingSphere.center)),Nt.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){let gt=ct.groups;for(let Et=0,Rt=gt.length;Et<Rt;Et++){let mt=gt[Et],Xt=pt[mt.materialIndex];Xt&&Xt.visible&&g.push(C,ct,Xt,N,Nt.z,mt)}}else pt.visible&&g.push(C,ct,pt,N,Nt.z,null)}}let $=C.children;for(let ct=0,pt=$.length;ct<pt;ct++)Mr($[ct],V,N,F)}function Wo(C,V,N,F){let R=C.opaque,$=C.transmissive,ct=C.transparent;f.setupLightsView(N),et===!0&&Q.setGlobalState(_.clippingPlanes,N),F&&It.viewport(T.copy(F)),R.length>0&&ls(R,V,N),$.length>0&&ls($,V,N),ct.length>0&&ls(ct,V,N),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Xo(C,V,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[F.id]===void 0&&(f.state.transmissionRenderTarget[F.id]=new Cn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?es:xn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let $=f.state.transmissionRenderTarget[F.id],ct=F.viewport||T;$.setSize(ct.z,ct.w);let pt=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(H),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),kt&&Mt.render(N);let gt=_.toneMapping;_.toneMapping=Ln;let Et=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),f.setupLightsView(F),et===!0&&Q.setGlobalState(_.clippingPlanes,F),ls(C,N,F),I.updateMultisampleRenderTarget($),I.updateRenderTargetMipmap($),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let mt=0,Xt=V.length;mt<Xt;mt++){let ee=V[mt],ie=ee.object,we=ee.geometry,Zt=ee.material,Ct=ee.group;if(Zt.side===gn&&ie.layers.test(F.layers)){let on=Zt.side;Zt.side=Pe,Zt.needsUpdate=!0,Yo(ie,N,F,we,Zt,Ct),Zt.side=on,Zt.needsUpdate=!0,Rt=!0}}Rt===!0&&(I.updateMultisampleRenderTarget($),I.updateRenderTargetMipmap($))}_.setRenderTarget(pt),_.setClearColor(H,K),Et!==void 0&&(F.viewport=Et),_.toneMapping=gt}function ls(C,V,N){let F=V.isScene===!0?V.overrideMaterial:null;for(let R=0,$=C.length;R<$;R++){let ct=C[R],pt=ct.object,gt=ct.geometry,Et=F===null?ct.material:F,Rt=ct.group;pt.layers.test(N.layers)&&Yo(pt,V,N,gt,Et,Rt)}}function Yo(C,V,N,F,R,$){C.onBeforeRender(_,V,N,F,R,$),C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),R.onBeforeRender(_,V,N,F,C,$),R.transparent===!0&&R.side===gn&&R.forceSinglePass===!1?(R.side=Pe,R.needsUpdate=!0,_.renderBufferDirect(N,V,F,R,C,$),R.side=Dn,R.needsUpdate=!0,_.renderBufferDirect(N,V,F,R,C,$),R.side=gn):_.renderBufferDirect(N,V,F,R,C,$),C.onAfterRender(_,V,N,F,R,$)}function hs(C,V,N){V.isScene!==!0&&(V=oe);let F=yt.get(C),R=f.state.lights,$=f.state.shadowsArray,ct=R.state.version,pt=xt.getParameters(C,R.state,$,V,N),gt=xt.getProgramCacheKey(pt),Et=F.programs;F.environment=C.isMeshStandardMaterial?V.environment:null,F.fog=V.fog,F.envMap=(C.isMeshStandardMaterial?q:A).get(C.envMap||F.environment),F.envMapRotation=F.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Et===void 0&&(C.addEventListener("dispose",Vt),Et=new Map,F.programs=Et);let Rt=Et.get(gt);if(Rt!==void 0){if(F.currentProgram===Rt&&F.lightsStateVersion===ct)return Ko(C,pt),Rt}else pt.uniforms=xt.getUniforms(C),C.onBeforeCompile(pt,_),Rt=xt.acquireProgram(pt,gt),Et.set(gt,Rt),F.uniforms=pt.uniforms;let mt=F.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(mt.clippingPlanes=Q.uniform),Ko(C,pt),F.needsLights=zl(C),F.lightsStateVersion=ct,F.needsLights&&(mt.ambientLightColor.value=R.state.ambient,mt.lightProbe.value=R.state.probe,mt.directionalLights.value=R.state.directional,mt.directionalLightShadows.value=R.state.directionalShadow,mt.spotLights.value=R.state.spot,mt.spotLightShadows.value=R.state.spotShadow,mt.rectAreaLights.value=R.state.rectArea,mt.ltc_1.value=R.state.rectAreaLTC1,mt.ltc_2.value=R.state.rectAreaLTC2,mt.pointLights.value=R.state.point,mt.pointLightShadows.value=R.state.pointShadow,mt.hemisphereLights.value=R.state.hemi,mt.directionalShadowMap.value=R.state.directionalShadowMap,mt.directionalShadowMatrix.value=R.state.directionalShadowMatrix,mt.spotShadowMap.value=R.state.spotShadowMap,mt.spotLightMatrix.value=R.state.spotLightMatrix,mt.spotLightMap.value=R.state.spotLightMap,mt.pointShadowMap.value=R.state.pointShadowMap,mt.pointShadowMatrix.value=R.state.pointShadowMatrix),F.currentProgram=Rt,F.uniformsList=null,Rt}function Zo(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=yi.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Ko(C,V){let N=yt.get(C);N.outputColorSpace=V.outputColorSpace,N.batching=V.batching,N.batchingColor=V.batchingColor,N.instancing=V.instancing,N.instancingColor=V.instancingColor,N.instancingMorph=V.instancingMorph,N.skinning=V.skinning,N.morphTargets=V.morphTargets,N.morphNormals=V.morphNormals,N.morphColors=V.morphColors,N.morphTargetsCount=V.morphTargetsCount,N.numClippingPlanes=V.numClippingPlanes,N.numIntersection=V.numClipIntersection,N.vertexAlphas=V.vertexAlphas,N.vertexTangents=V.vertexTangents,N.toneMapping=V.toneMapping}function Fl(C,V,N,F,R){V.isScene!==!0&&(V=oe),I.resetTextureUnits();let $=V.fog,ct=F.isMeshStandardMaterial?V.environment:null,pt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Vi,gt=(F.isMeshStandardMaterial?q:A).get(F.envMap||ct),Et=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Rt=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),mt=!!N.morphAttributes.position,Xt=!!N.morphAttributes.normal,ee=!!N.morphAttributes.color,ie=Ln;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ie=_.toneMapping);let we=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Zt=we!==void 0?we.length:0,Ct=yt.get(F),on=f.state.lights;if(et===!0&&(At===!0||C!==v)){let Be=C===v&&F.id===y;Q.setState(F,C,Be)}let Kt=!1;F.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==on.state.version||Ct.outputColorSpace!==pt||R.isBatchedMesh&&Ct.batching===!1||!R.isBatchedMesh&&Ct.batching===!0||R.isBatchedMesh&&Ct.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&Ct.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&Ct.instancing===!1||!R.isInstancedMesh&&Ct.instancing===!0||R.isSkinnedMesh&&Ct.skinning===!1||!R.isSkinnedMesh&&Ct.skinning===!0||R.isInstancedMesh&&Ct.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Ct.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Ct.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Ct.instancingMorph===!1&&R.morphTexture!==null||Ct.envMap!==gt||F.fog===!0&&Ct.fog!==$||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Q.numPlanes||Ct.numIntersection!==Q.numIntersection)||Ct.vertexAlphas!==Et||Ct.vertexTangents!==Rt||Ct.morphTargets!==mt||Ct.morphNormals!==Xt||Ct.morphColors!==ee||Ct.toneMapping!==ie||Ct.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,Ct.__version=F.version);let ke=Ct.currentProgram;Kt===!0&&(ke=hs(F,V,R));let ni=!1,Le=!1,Di=!1,se=ke.getUniforms(),Ke=Ct.uniforms;if(It.useProgram(ke.program)&&(ni=!0,Le=!0,Di=!0),F.id!==y&&(y=F.id,Le=!0),ni||v!==C){It.buffers.depth.getReversed()?(rt.copy(C.projectionMatrix),Rh(rt),Ph(rt),se.setValue(U,"projectionMatrix",rt)):se.setValue(U,"projectionMatrix",C.projectionMatrix),se.setValue(U,"viewMatrix",C.matrixWorldInverse);let Mn=se.map.cameraPosition;Mn!==void 0&&Mn.setValue(U,wt.setFromMatrixPosition(C.matrixWorld)),zt.logarithmicDepthBuffer&&se.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&se.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,Le=!0,Di=!0)}if(R.isSkinnedMesh){se.setOptional(U,R,"bindMatrix"),se.setOptional(U,R,"bindMatrixInverse");let Be=R.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),se.setValue(U,"boneTexture",Be.boneTexture,I))}R.isBatchedMesh&&(se.setOptional(U,R,"batchingTexture"),se.setValue(U,"batchingTexture",R._matricesTexture,I),se.setOptional(U,R,"batchingIdTexture"),se.setValue(U,"batchingIdTexture",R._indirectTexture,I),se.setOptional(U,R,"batchingColorTexture"),R._colorsTexture!==null&&se.setValue(U,"batchingColorTexture",R._colorsTexture,I));let qi=N.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&St.update(R,N,ke),(Le||Ct.receiveShadow!==R.receiveShadow)&&(Ct.receiveShadow=R.receiveShadow,se.setValue(U,"receiveShadow",R.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ke.envMap.value=gt,Ke.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&V.environment!==null&&(Ke.envMapIntensity.value=V.environmentIntensity),Le&&(se.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&Bl(Ke,Di),$&&F.fog===!0&&at.refreshFogUniforms(Ke,$),at.refreshMaterialUniforms(Ke,F,k,tt,f.state.transmissionRenderTarget[C.id]),yi.upload(U,Zo(Ct),Ke,I)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(yi.upload(U,Zo(Ct),Ke,I),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&se.setValue(U,"center",R.center),se.setValue(U,"modelViewMatrix",R.modelViewMatrix),se.setValue(U,"normalMatrix",R.normalMatrix),se.setValue(U,"modelMatrix",R.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Be=F.uniformsGroups;for(let Mn=0,bn=Be.length;Mn<bn;Mn++){let jo=Be[Mn];w.update(jo,ke),w.bind(jo,ke)}}return ke}function Bl(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function zl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,V,N){yt.get(C.texture).__webglTexture=V,yt.get(C.depthTexture).__webglTexture=N;let F=yt.get(C);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){let N=yt.get(C);N.__webglFramebuffer=V,N.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,N=0){L=C,S=V,E=N;let F=!0,R=null,$=!1,ct=!1;if(C){let gt=yt.get(C);if(gt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(U.FRAMEBUFFER,null),F=!1;else if(gt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(gt.__hasExternalTextures)I.rebindTextures(C,yt.get(C.texture).__webglTexture,yt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let mt=C.depthTexture;if(gt.__boundDepthTexture!==mt){if(mt!==null&&yt.has(mt)&&(C.width!==mt.image.width||C.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let Et=C.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ct=!0);let Rt=yt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Rt[V])?R=Rt[V][N]:R=Rt[V],$=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?R=yt.get(C).__webglMultisampledFramebuffer:Array.isArray(Rt)?R=Rt[N]:R=Rt,T.copy(C.viewport),z.copy(C.scissor),B=C.scissorTest}else T.copy(_t).multiplyScalar(k).floor(),z.copy(qt).multiplyScalar(k).floor(),B=$t;if(It.bindFramebuffer(U.FRAMEBUFFER,R)&&F&&It.drawBuffers(C,R),It.viewport(T),It.scissor(z),It.setScissorTest(B),$){let gt=yt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,gt.__webglTexture,N)}else if(ct){let gt=yt.get(C.texture),Et=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.__webglTexture,N||0,Et)}y=-1},this.readRenderTargetPixels=function(C,V,N,F,R,$,ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=yt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){It.bindFramebuffer(U.FRAMEBUFFER,pt);try{let gt=C.texture,Et=gt.format,Rt=gt.type;if(!zt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-F&&N>=0&&N<=C.height-R&&U.readPixels(V,N,F,R,Ut.convert(Et),Ut.convert(Rt),$)}finally{let gt=L!==null?yt.get(L).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(C,V,N,F,R,$,ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=yt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){let gt=C.texture,Et=gt.format,Rt=gt.type;if(!zt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-F&&N>=0&&N<=C.height-R){It.bindFramebuffer(U.FRAMEBUFFER,pt);let mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.bufferData(U.PIXEL_PACK_BUFFER,$.byteLength,U.STREAM_READ),U.readPixels(V,N,F,R,Ut.convert(Et),Ut.convert(Rt),0);let Xt=L!==null?yt.get(L).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,Xt);let ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Vh(U,ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,$),U.deleteBuffer(mt),U.deleteSync(ee),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,N=0){C.isTexture!==!0&&(Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);let F=Math.pow(2,-N),R=Math.floor(C.image.width*F),$=Math.floor(C.image.height*F),ct=V!==null?V.x:0,pt=V!==null?V.y:0;I.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,N,0,0,ct,pt,R,$),It.unbindTexture()},this.copyTextureToTexture=function(C,V,N=null,F=null,R=0){C.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1],V=arguments[2],R=arguments[3]||0,N=null);let $,ct,pt,gt,Et,Rt,mt,Xt,ee,ie=C.isCompressedTexture?C.mipmaps[R]:C.image;N!==null?($=N.max.x-N.min.x,ct=N.max.y-N.min.y,pt=N.isBox3?N.max.z-N.min.z:1,gt=N.min.x,Et=N.min.y,Rt=N.isBox3?N.min.z:0):($=ie.width,ct=ie.height,pt=ie.depth||1,gt=0,Et=0,Rt=0),F!==null?(mt=F.x,Xt=F.y,ee=F.z):(mt=0,Xt=0,ee=0);let we=Ut.convert(V.format),Zt=Ut.convert(V.type),Ct;V.isData3DTexture?(I.setTexture3D(V,0),Ct=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),Ct=U.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),Ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);let on=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ke=U.getParameter(U.UNPACK_SKIP_PIXELS),ni=U.getParameter(U.UNPACK_SKIP_ROWS),Le=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ie.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Rt);let Di=C.isDataArrayTexture||C.isData3DTexture,se=V.isDataArrayTexture||V.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Ke=yt.get(C),qi=yt.get(V),Be=yt.get(Ke.__renderTarget),Mn=yt.get(qi.__renderTarget);It.bindFramebuffer(U.READ_FRAMEBUFFER,Be.__webglFramebuffer),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let bn=0;bn<pt;bn++)Di&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(C).__webglTexture,R,Rt+bn),C.isDepthTexture?(se&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(V).__webglTexture,R,ee+bn),U.blitFramebuffer(gt,Et,$,ct,mt,Xt,$,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):se?U.copyTexSubImage3D(Ct,R,mt,Xt,ee+bn,gt,Et,$,ct):U.copyTexSubImage2D(Ct,R,mt,Xt,ee+bn,gt,Et,$,ct);It.bindFramebuffer(U.READ_FRAMEBUFFER,null),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else se?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ct,R,mt,Xt,ee,$,ct,pt,we,Zt,ie.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,R,mt,Xt,ee,$,ct,pt,we,ie.data):U.texSubImage3D(Ct,R,mt,Xt,ee,$,ct,pt,we,Zt,ie):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,R,mt,Xt,$,ct,we,Zt,ie.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,R,mt,Xt,ie.width,ie.height,we,ie.data):U.texSubImage2D(U.TEXTURE_2D,R,mt,Xt,$,ct,we,Zt,ie);U.pixelStorei(U.UNPACK_ROW_LENGTH,on),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,ni),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le),R===0&&V.generateMipmaps&&U.generateMipmap(Ct),It.unbindTexture()},this.copyTextureToTexture3D=function(C,V,N=null,F=null,R=0){return C.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,C=arguments[2],V=arguments[3],R=arguments[4]||0),Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,V,N,F,R)},this.initRenderTarget=function(C){yt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),It.unbindTexture()},this.resetState=function(){S=0,E=0,L=null,It.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var ir=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sr=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ce,this.environmentIntensity=1,this.environmentRotation=new Ce,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var so=class extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ne,h=Ne,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=class extends fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ai=new Yt,jc=new Yt,Ps=[],Jc=new vn,Eg=new Yt,ki=new re,Hi=new Nn,rr=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Eg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),Jc.copy(t.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Jc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),Hi.copy(t.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(Hi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(n),t.ray.intersectsSphere(Hi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ai),jc.multiplyMatrices(n,Ai),ki.matrixWorld=jc,ki.raycast(t,Ps);for(let a=0,o=Ps.length;a<o;a++){let c=Ps[a];c.instanceId=r,c.object=this,e.push(c)}Ps.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new so(new Float32Array(s*this.count),s,this.count,Io,Qe));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ji=class extends _n{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qc=new Yt,ro=new Ys,Us=new Nn,Ls=new P,ar=class extends Me{constructor(t=new be,e=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;Qc.copy(s).invert(),ro.copy(t.ray).applyMatrix4(Qc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=d,x=p;m<x;m++){let g=l.getX(m);Ls.fromBufferAttribute(u,g),$c(Ls,g,c,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,x=p;m<x;m++)Ls.fromBufferAttribute(u,m),$c(Ls,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $c(i,t,e,n,s,r,a){let o=ro.distanceSqToPoint(i);if(o<e){let c=new P;ro.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var $n=class extends Ue{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var or=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new P,h=new Wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qi=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,x=[],g=n/2,f=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2));function b(){let _=new P,D=new P,S=0,E=(e-t)/n;for(let L=0;L<=r;L++){let y=[],v=L/r,T=v*(e-t)+t;for(let z=0;z<=s;z++){let B=z/s,H=B*c+o,K=Math.sin(H),G=Math.cos(H);D.x=T*K,D.y=-v*n+g,D.z=T*G,u.push(D.x,D.y,D.z),_.set(K,E,G).normalize(),d.push(_.x,_.y,_.z),p.push(B,1-v),y.push(m++)}x.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){let v=x[y][L],T=x[y+1][L],z=x[y+1][L+1],B=x[y][L+1];(t>0||y!==0)&&(h.push(v,T,B),S+=3),(e>0||y!==r-1)&&(h.push(T,z,B),S+=3)}l.addGroup(f,S,0),f+=S}function M(_){let D=m,S=new Wt,E=new P,L=0,y=_===!0?t:e,v=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*v,0),d.push(0,v,0),p.push(.5,.5),m++;let T=m;for(let z=0;z<=s;z++){let H=z/s*c+o,K=Math.cos(H),G=Math.sin(H);E.x=y*G,E.y=g*v,E.z=y*K,u.push(E.x,E.y,E.z),d.push(0,v,0),S.x=K*.5+.5,S.y=G*.5*v+.5,p.push(S.x,S.y),m++}for(let z=0;z<s;z++){let B=D+z,H=T+z;_===!0?h.push(H,H+1,B):h.push(H+1,H,B),L+=3}l.addGroup(f,L,_===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$i=class i extends Qi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ts=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){let b=[],M=f/n,_=0;f===0&&a===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){let S=D/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+M*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(S+_,1-M),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let M=h[f][b+1],_=h[f][b],D=h[f+1][b],S=h[f+1][b+1];(f!==0||a>0)&&p.push(M,_,S),(f!==n-1||c<Math.PI)&&p.push(_,D,S)}this.setIndex(p),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cr=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let x=m/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let x=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,b=(s+1)*p+m;a.push(x,g,b),a.push(g,f,b)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var lr=class extends _n{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var nn=class extends _n{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ds(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ao=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ec:r=t,o=2*e-n;break;case nc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ec:a=t,c=2*n-e;break;case nc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,f=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-p)*g+(1.5+p)*x+.5*m,_=p*g-p*x;for(let D=0;D!==o;++D)r[D]=f*a[h+D]+b*a[l+D]+M*a[c+D]+_*a[u+D];return r}},oo=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},co=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ds(e,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ds(t.times,Array),values:Ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ks:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Sr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Tg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=za;var ti=class extends Ze{constructor(t,e,n){super(t,e,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ks;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends Ze{};lo.prototype.ValueTypeName="color";var ho=class extends Ze{};ho.prototype.ValueTypeName="number";var uo=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Te.slerpFlat(r,0,a,l-o,a,l,c);return r}},hr=class extends Ze{InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends Ze{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=ks;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends Ze{};fo.prototype.ValueTypeName="vector";var po=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},wg=new po,go=class{constructor(t){this.manager=t!==void 0?t:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};go.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},dr=class extends ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ea=new Yt,tl=new P,el=new P,mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;tl.setFromMatrixPosition(t.matrixWorld),e.position.copy(tl),el.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(el),e.updateMatrixWorld(),ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ao=class extends mo{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Ao}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var pr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=nl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function nl(){return performance.now()}var wo="\\[\\]\\.:\\/",Vg=new RegExp("["+wo+"]","g"),Vo="[^"+wo+"]",Rg="[^"+wo.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",Vo),Ug=/(WCOD+)?/.source.replace("WCOD",Rg),Lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),qg=new RegExp("^"+Pg+Ug+Lg+Dg+"$"),Ng=["material","materials","bones","map"],xo=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){let e=qg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ng.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=xo;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yg=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);function is(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new be,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Ml(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][d]);let m=Ml(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Ml(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new fe(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,p=h.count;d<p;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var rn={candy:{s:.1,g:0,ar:"\u062D\u0644\u0627\u0648\u0629",en:"Candy"},apple:{s:.12,g:0,ar:"\u062A\u0641\u0627\u062D\u0629",en:"Apple"},duck:{s:.16,g:0,ar:"\u0628\u0637\u0629 \u0644\u0639\u0628\u0629",en:"Rubber duck"},hotdog:{s:.22,g:0,ar:"\u0647\u0648\u062A \u062F\u0648\u062C",en:"Hot Dog"},pretzel:{s:.22,g:0,ar:"\u0628\u0631\u064A\u062A\u0632\u0644",en:"Pretzel"},banana:{s:.22,g:0,ar:"\u0645\u0648\u0632\u0629",en:"Banana"},ball:{s:.24,g:0,ar:"\u0643\u0648\u0631\u0629",en:"Ball"},teddy:{s:.34,g:0,ar:"\u062F\u0628\u062F\u0648\u0628",en:"Teddy"},cone:{s:.4,g:0,ar:"\u0642\u0645\u0639 \u0645\u0631\u0648\u0631",en:"Cone"},hydrant:{s:.75,g:1,ar:"\u062D\u0646\u0641\u064A\u0629 \u062D\u0631\u064A\u0642",en:"Hydrant"},bin:{s:.9,g:1,ar:"\u0635\u0646\u062F\u0648\u0642 \u0632\u0628\u0627\u0644\u0629",en:"Trash can"},plant:{s:1.1,g:1,ar:"\u0632\u0631\u0639\u0629",en:"Plant pot"},bike:{s:1.7,g:1,ar:"\u0639\u062C\u0644\u0629",en:"Bike"},cart:{s:2,g:1,ar:"\u0639\u0631\u0628\u064A\u0629 \u0623\u0643\u0644",en:"Food cart"},umbrella:{s:2.2,g:1,ar:"\u0634\u0645\u0633\u064A\u0629",en:"Umbrella table"},car:{s:4.2,g:2,ar:"\u0639\u0631\u0628\u064A\u0629",en:"Car"},taxi:{s:4.4,g:2,ar:"\u062A\u0627\u0643\u0633\u064A",en:"Taxi"},police:{s:4.6,g:2,ar:"\u0639\u0631\u0628\u064A\u0629 \u0634\u0631\u0637\u0629",en:"Police Car"},tree:{s:5,g:2,ar:"\u0634\u062C\u0631\u0629",en:"Tree"},truck:{s:6.5,g:2,ar:"\u0639\u0631\u0628\u064A\u0629 \u0623\u0643\u0644 \u0643\u0628\u064A\u0631\u0629",en:"Food Truck"},bus:{s:11,g:3,ar:"\u0623\u062A\u0648\u0628\u064A\u0633",en:"Bus"},firetruck:{s:10,g:3,ar:"\u0639\u0631\u0628\u064A\u0629 \u0645\u0637\u0627\u0641\u064A",en:"Fire truck"},shop:{s:14,g:4,ar:"\u0645\u062D\u0644",en:"Shop"},house:{s:18,g:4,ar:"\u0639\u0645\u0627\u0631\u0629",en:"Building"},office:{s:24,g:4,ar:"\u0628\u0631\u062C",en:"Tower"},tower:{s:32,g:4,ar:"\u0646\u0627\u0637\u062D\u0629 \u0633\u062D\u0627\u0628",en:"Skyscraper"}},yn=[{d:1.3,next:"street",ar:"\u062D\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0631\u0639",en:"street stuff"},{d:3.2,next:"carts",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0627\u062A \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u0648\u0627\u0644\u0634\u0645\u0627\u0633\u064A",en:"carts and umbrellas"},{d:6.6,next:"cars",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0627\u062A",en:"cars"},{d:16,next:"buses",ar:"\u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633\u0627\u062A",en:"buses"},{d:22,next:"buildings",ar:"\u0627\u0644\u0639\u0645\u0627\u0631\u0627\u062A",en:"buildings"},{d:45,next:"giant",ar:"\u0646\u0627\u0637\u062D\u0627\u062A \u0627\u0644\u0633\u062D\u0627\u0628",en:"skyscrapers"},{d:60,next:"done",ar:"\u0643\u0644 \u0627\u0644\u0645\u062F\u064A\u0646\u0629",en:"the whole city"}],bl=[20,40,60],Ro=.6,sn=230;function Fg(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Po(i=11){let t=Fg(i),e=[],n=(o,c,l,h=t()*6.28)=>{let d=rn[o].s*(.9+t()*.2);e.push({kind:o,x:c,z:l,s:d,r:Math.max(.12,d*.5),a:h,id:e.length})},s=46,r=14,a=o=>(o%s+s)%s<r;for(let o=0;o<520;o++){let c=(t()*2-1)*13,l=-68+t()*86,h=t();n(h<.13?"candy":h<.24?"apple":h<.34?"duck":h<.48?"hotdog":h<.6?"pretzel":h<.7?"banana":h<.8?"ball":h<.9?"teddy":"cone",c,l)}for(let o=0;o<60;o++){let c=(t()<.5?-1:1)*(6+t()*7),l=-66+t()*82,h=t();n(h<.2?"hydrant":h<.4?"bin":h<.6?"plant":h<.75?"bike":h<.88?"umbrella":"cart",c,l)}for(let o=0;o<900;o++){let c=(t()*2-1)*(sn-6),l=(t()*2-1)*(sn-6);if(Math.abs(c)<16&&l>-72&&l<22)continue;let h=t();h<.45?n(["hotdog","teddy","cone","ball","banana","duck"][Math.floor(t()*6)],c,l):h<.75&&n(["hydrant","bin","plant","bike","umbrella","cart"][Math.floor(t()*6)],c,l)}for(let o=-5;o<=5;o++){let c=o*s+r/2;for(let l=-sn+10;l<sn-10;l+=9+t()*12){let h=t()<.5?-3:3,u=t(),d=u<.36?"car":u<.6?"taxi":u<.72?"police":u<.84?"truck":u<.94?"bus":"firetruck";Math.abs(c)<18&&l>-75&&l<25||(t()<.5?n(d,c+h,l,h>0?Math.PI:0):Math.abs(l)<18&&c>-75&&c<25||n(d,l,c+h,h>0?-Math.PI/2:Math.PI/2))}}for(let o=-5;o<=4;o++)for(let c=-5;c<=4;c++){let l=o*s+r,h=c*s+r,u=l+(s-r)/2,d=h+(s-r)/2;if(Math.abs(u)<30&&d>-90&&d<40)continue;let p=Math.hypot(u,d);if(t()<.15){for(let x=0;x<6;x++)n("tree",u+(t()-.5)*24,d+(t()-.5)*24);continue}let m=p<90?t()<.6?"shop":"house":p<150?t()<.5?"house":"office":t()<.5?"office":"tower";m==="shop"?(n("shop",u-7,d-7,0),n("shop",u+7,d+7,0),n("tree",u+8,d-8)):n(m,u,d,0)}for(let o of e)rn[o.kind].g===4&&(o.r=o.s*.48),o.h=rn[o.kind].g===4?o.s*(o.kind==="tower"?2.6:o.kind==="office"?1.9:o.kind==="house"?1.3:.8):o.s;return e}var Cr=class{constructor(t={}){var e,n;this.easy=!!t.easy,this.things=t.things||Po((e=t.city)!=null?e:11);for(let s of this.things)s.taken=!1;this.d=.5,this.ball={x:0,z:12,vx:0,vz:0},this.time=(n=t.time)!=null?n:this.easy?150:120,this.left=this.time,this.state="count",this.countT=3,this.goal=0,this.move={x:0,z:0},this.events=[],this.collected=0,this.byGroup=[0,0,0,0,0],this.bumpT=0,this.cell=12,this.grid=new Map;for(let s of this.things){let r=this._key(Math.floor(s.x/this.cell),Math.floor(s.z/this.cell));this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(s)}}_key(t,e){return t*10007+e}get r(){return this.d/2}get goalD(){return yn[Math.min(this.goal,yn.length-1)].d}setMove(t,e){let n=Math.hypot(t,e);this.move=n>1?{x:t/n,z:e/n}:{x:t,z:e}}_near(t,e,n){let s=[],r=Math.floor((t-n)/this.cell),a=Math.floor((t+n)/this.cell),o=Math.floor((e-n)/this.cell),c=Math.floor((e+n)/this.cell);for(let l=r;l<=a;l++)for(let h=o;h<=c;h++){let u=this.grid.get(this._key(l,h));if(u)for(let d of u)d.taken||s.push(d)}return s}step(t){if(this.events=[],this.state==="count"){let c=Math.ceil(this.countT);return this.countT-=t,Math.ceil(this.countT)!==c&&this.countT>0&&this.events.push({type:"count",n:Math.ceil(this.countT)}),this.countT<=0&&(this.state="roll",this.events.push({type:"go"})),this.events}if(this.state!=="roll")return this.events;let e=Math.ceil(this.left);this.left-=t,Math.ceil(this.left)!==e&&this.left<=10&&this.left>0&&this.events.push({type:"tick",n:Math.ceil(this.left)});let n=this.ball,s=3+this.d*1.5,r=7+this.d*2.2;n.vx+=(this.move.x*s-n.vx)*Math.min(1,r/s*t),n.vz+=(this.move.z*s-n.vz)*Math.min(1,r/s*t),n.x+=n.vx*t,n.z+=n.vz*t;let a=sn-this.r;Math.abs(n.x)>a&&(n.x=Math.sign(n.x)*a,n.vx*=-.4),Math.abs(n.z)>a&&(n.z=Math.sign(n.z)*a,n.vz*=-.4),this.bumpT=Math.max(0,this.bumpT-t);let o=this.r;for(let c of this._near(n.x,n.z,o+20)){let l=n.x-c.x,h=n.z-c.z,u=Math.hypot(l,h);if(!(u>o+c.r))if(c.s<=this.d*Ro){c.taken=!0,this.collected++,this.byGroup[rn[c.kind].g]++;let d=this.d;this.d+=c.s*.17*(1+.9/this.d)/(1+this.d/18),this.events.push({type:"stick",id:c.id,kind:c.kind,s:c.s,x:c.x,z:c.z,from:d}),this._goalCheck()}else if(c.s<=this.d*1.6&&rn[c.kind].g<4){let d=u||1,p=o+c.r-u;c.x-=l/d*p,c.z-=h/d*p,c.a+=.3,this.bumpT<=0&&(this.bumpT=.25,this.events.push({type:"nudge",kind:c.kind,id:c.id}))}else{let d=u||1,p=o+c.r-u;n.x+=l/d*p,n.z+=h/d*p;let m=n.vx*(l/d)+n.vz*(h/d);if(m<0&&(n.vx-=1.7*m*(l/d),n.vz-=1.7*m*(h/d)),this.bumpT<=0&&Math.abs(m)>1.2){this.bumpT=.6;let x=Math.min(this.d*.02,.6);this.d=Math.max(.5,this.d-x),this.events.push({type:"bump",kind:c.kind,x:c.x,z:c.z,lose:x})}}}return this.left<=0&&(this.left=0,this.state="done",this.result=this._result(),this.events.push({type:"timeUp"})),this.events}_goalCheck(){for(;this.goal<yn.length&&this.d>=yn[this.goal].d;){let t=yn[this.goal];this.goal++,this.events.push({type:"bigger",goal:this.goal,reached:t.d,next:t.next})}}_result(){let t=bl.filter(e=>this.d>=e*(this.easy?.75:1)).length;return{d:this.d,stars:t,collected:this.collected,byGroup:this.byGroup.slice()}}};function Sl(i){let t=i&&typeof i=="object"?i:{},e=Number(t.best),n=Math.floor(Number(t.stars)),s=Math.floor(Number(t.plays));return{best:Number.isFinite(e)&&e>0?Math.min(Math.round(e*10)/10,999):0,stars:n>=0&&n<=3?n:0,plays:Number.isFinite(s)&&s>0?Math.min(s,99999):0,muted:t.muted===!0}}var Bg=i=>new Tt(i);function J(i,t,e=0,n=0,s=0,r=0,a=0,o=0,c=1,l=1,h=1){let u=i.index?i.toNonIndexed():i.clone();for(let g of Object.keys(u.attributes))g!=="position"&&g!=="normal"&&u.deleteAttribute(g);let d=new Yt().compose(new P(e,n,s),new Te().setFromEuler(new Ce(r,a,o)),new P(c,l,h));u.applyMatrix4(d);let p=u.attributes.position.count,m=new Float32Array(p*3),x=Bg(t);for(let g=0;g<p;g++)m.set([x.r,x.g,x.b],g*3);return u.setAttribute("color",new fe(m,3)),u}var Ft=(i,t,e)=>new tn(i,t,e),jt=(i,t=10)=>new ts(i,Math.min(t,8),6),Ae=(i,t,e,n=10)=>new Qi(i,t,e,Math.min(n,8)),Pi=(i,t,e=10)=>new $i(i,t,e),ss=(i,t,e=12)=>new cr(i,t,6,e);function vr(i,t,e,n,s=n){for(let r of[-t*.32,t*.32])for(let a of[-1,1])i.push(J(Ae(n,n,.12,12),1710622,a*e*.5,s,r,0,0,Math.PI/2))}function Uo(i,t=i,e=[]){let n=[];n.push(J(Ft(.46,.18,1),i,0,.17,0)),n.push(J(Ft(.4,.16,.5),t,0,.33,.03)),n.push(J(Ft(.38,.12,.02),2767434,0,.34,-.23)),n.push(J(Ft(.38,.12,.02),2767434,0,.34,.29));for(let s of[-1,1])n.push(J(Ft(.08,.04,.02),16774344,s*.15,.2,-.5)),n.push(J(Ft(.08,.04,.02),15217194,s*.15,.2,.5));return vr(n,1,.46,.09),n.concat(e)}var rs={candy:()=>[J(jt(.35),16734904),J(Pi(.18,.3),16769594,.45,0,0,0,0,-Math.PI/2),J(Pi(.18,.3),16769594,-.45,0,0,0,0,Math.PI/2)].map(i=>i.translate(0,.35,0)),apple:()=>[J(jt(.45,12),15217194,0,.45,0),J(Ae(.04,.04,.2),6965794,0,.95,0),J(jt(.12),4896826,.12,.95,0,0,0,0,1.6,.4,.8)],duck:()=>[J(jt(.4,12),16765498,0,.35,0,0,0,0,1,.8,1.2),J(jt(.25,12),16765498,0,.75,-.25),J(Pi(.1,.2),16747034,0,.72,-.5,-Math.PI/2),J(jt(.05),1118481,.12,.82,-.38),J(jt(.05),1118481,-.12,.82,-.38)],hotdog:()=>[J(Ae(.22,.22,1,10),15249514,0,.22,0,Math.PI/2,0,0,1.4,1,.5),J(Ae(.13,.13,1.15,10),13127722,0,.32,0,Math.PI/2),J(Ft(.06,.04,.9),16765498,0,.45,0)],pretzel:()=>[J(ss(.3,.1),11035690,-.18,.12,0,Math.PI/2),J(ss(.3,.1),11035690,.18,.12,0,Math.PI/2),J(jt(.03),16777215,.2,.25,.2),J(jt(.03),16777215,-.25,.25,-.1)],banana:()=>[J(ss(.4,.11,10),16767034,0,.12,0,Math.PI/2,0,0).scale(1,1,1),J(jt(.05),5913114,.4,.12,0)].map(i=>i),ball:()=>[J(jt(.5,14),16777215,0,.5,0),J(jt(.18),1118481,0,.5,-.42),J(jt(.18),1118481,.4,.62,0),J(jt(.18),1118481,-.3,.75,.2)],teddy:()=>[J(jt(.32,12),12088890,0,.3,0),J(jt(.24,12),12088890,0,.72,0),J(jt(.09),12088890,.18,.9,0),J(jt(.09),12088890,-.18,.9,0),J(jt(.08),15255712,0,.68,-.2),J(jt(.03),1118481,.08,.78,-.2),J(jt(.03),1118481,-.08,.78,-.2),J(jt(.11),12088890,.3,.32,-.1),J(jt(.11),12088890,-.3,.32,-.1)],cone:()=>[J(Pi(.3,.9,12),16738842,0,.5,0),J(Ae(.17,.22,.12,12),16777215,0,.45,0),J(Ft(.7,.06,.7),16738842,0,.03,0)],hydrant:()=>[J(Ae(.22,.25,.7,12),15217194,0,.35,0),J(jt(.22),15217194,0,.72,0),J(Ae(.08,.08,.7),13158600,0,.5,0,0,0,Math.PI/2),J(Ae(.3,.3,.06,12),12066858,0,.03,0)],bin:()=>[J(Ae(.38,.32,.9,12),3836490,0,.45,0),J(Ae(.42,.42,.08,12),2779706,0,.92,0),J(jt(.12),16765498,0,.98,0)],plant:()=>[J(Ae(.3,.22,.4,12),13131834,0,.2,0),J(jt(.45,12),4892730,0,.75,0),J(jt(.3),5949514,.2,.95,.1)],bike:()=>[J(ss(.25,.04,14),1710618,0,.27,-.33,0,Math.PI/2),J(ss(.25,.04,14),1710618,0,.27,.33,0,Math.PI/2),J(Ft(.05,.05,.66),2788072,0,.45,0,.3),J(Ft(.05,.4,.05),2788072,0,.45,-.25),J(Ft(.3,.04,.04),2763306,0,.66,-.3),J(Ft(.12,.05,.2),2763306,0,.62,.18)],cart:()=>[J(Ft(.6,.45,.9),15921906,0,.45,0),J(Ft(.62,.08,.92),15217194,0,.7,0),J(Ae(.02,.02,.5),9079434,0,.95,0),J(Pi(.6,.3,8),16765498,0,1.25,0),J(Ae(.12,.12,.06,10),2763306,.32,.12,.3,0,0,Math.PI/2),J(Ae(.12,.12,.06,10),2763306,-.32,.12,.3,0,0,Math.PI/2)],umbrella:()=>{let i=[J(Ae(.03,.03,.9),13158600,0,.45,0),J(Ae(.3,.3,.04,14),15921906,0,.35,0),J(Ae(.03,.03,.35),9079434,0,.17,0)];for(let t=0;t<8;t++)i.push(J(new $i(.5,.2,8,1,!0,t/8*Math.PI*2,Math.PI/4),t%2?16777215:15217194,0,.98,0));return i},car:()=>Uo(3832552),taxi:()=>Uo(16761370,16761370,[J(Ft(.16,.06,.1),2763306,0,.44,.03)]),police:()=>Uo(16777215,1718922,[J(Ft(.1,.05,.06),15217194,-.06,.44,.03),J(Ft(.1,.05,.06),2779880,.06,.44,.03),J(Ft(.47,.06,.3),1718922,0,.2,0)]),tree:()=>[J(Ae(.06,.09,.5),8014370,0,.25,0),J(jt(.35,10),3840570,0,.7,0),J(jt(.25,10),4896842,.12,.9,.08),J(jt(.22,10),3115567,-.15,.85,-.05)],truck:()=>{let i=[J(Ft(.42,.42,.66),16738984,0,.3,.12),J(Ft(.42,.3,.3),16777215,0,.24,-.35),J(Ft(.36,.14,.02),2767434,0,.32,-.5),J(Ft(.02,.18,.4),2763306,.22,.32,.12),J(Pi(.1,.18,8),16767136,0,.6,.12)];return vr(i,1,.42,.08),i},bus:()=>{let i=[J(Ft(.3,.44,1),15217194,0,.27,0),J(Ft(.31,.06,1.01),16777215,0,.27,0)];for(let t of[.18,.38])for(let e of[-1,1])i.push(J(Ft(.01,.08,.86),2767434,e*.155,t,0));return i.push(J(Ft(.26,.14,.01),2767434,0,.3,-.5)),vr(i,1,.3,.06),i},firetruck:()=>{let i=[J(Ft(.36,.26,1),14164010,0,.2,0),J(Ft(.34,.12,.3),14164010,0,.38,-.33),J(Ft(.06,.06,.66),13158600,0,.38,.15),J(Ft(.3,.12,.01),2767434,0,.38,-.49),J(Ft(.06,.05,.06),3828456,0,.46,-.33)];return vr(i,1,.36,.07),i}};function _r(i,t,e,n){let s=[J(Ft(.96,t,.96),i,0,t/2,0),J(Ft(1,.04,1),14211288,0,t+.02,0)],r=Math.max(2,Math.round(t*7));for(let a=0;a<r;a++){let o=(a+.6)*(t/r),c=n?9099519:16773304;for(let[l,h,u]of[[0,.485,0],[0,-.485,0],[.485,0,Math.PI/2],[-.485,0,Math.PI/2]])s.push(J(Ft(.8,t/r*.45,.01),a%3===1?4872810:c,l,o,h,0,u))}return e&&s.push(J(Ft(.6,Math.min(.5,t*.4),.02),e,0,t*.55,-.5)),s.push(J(Ft(.2,.12,.2),10132122,.25,t+.1,.2)),s}rs.shop=()=>_r(16759e3,.8,5957887,!1);rs.house=()=>_r(15913610,1.3,16734904,!1);rs.office=()=>_r(6990056,1.9,16765498,!0);rs.tower=()=>_r(9079528,2.6,16738874,!0);var Lo=new Map;function Do(i){if(!Lo.has(i)){let t=is(rs[i]());t.computeBoundingSphere(),Lo.set(i,t)}return Lo.get(i)}var qo=new nn({vertexColors:!0});function El(){let i=new $e,t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d");e.fillStyle="#ff5aa8",e.fillRect(0,0,256,128);for(let r=0;r<40;r++)e.fillStyle=r%2?"rgba(255,140,200,0.6)":"rgba(220,40,140,0.35)",e.beginPath(),e.ellipse(Math.random()*256,Math.random()*128,6+Math.random()*18,3+Math.random()*8,Math.random()*3,0,Math.PI*2),e.fill();let n=new $n(t);n.colorSpace=xe;let s=new re(new ts(.5,32,22),new lr({map:n,shininess:90,specular:16763112}));return i.add(s),{root:i,core:s}}function No(i,t,e,n=4){let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,256,256);let a=256/n;for(let c=0;c<n;c++)for(let l=0;l<n;l++)r.fillStyle=(c+l)%2?i:t,r.fillRect(c*a+2,l*a+2,a-4,a-4);let o=new $n(s);return o.wrapS=o.wrapT=Yi,o.colorSpace=xe,o.anisotropy=4,o}function Tl(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let d=0;d<l.length;d++)h[d]=l.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function wl(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Vl={bigger:"data:audio/mpeg;base64,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rjsfQIZQXa5Wby6y56Z/T98F07Z/RT6JqNdON3wn66Dd2pCEK+OJ6AzOIQ/1Oa3RFlvXSLLSMo3jDK0SZCyEogcR3HkhqKWjlVMKdc8zEu3/+zjE1gOJhOkMB6TmgTkqocj0lLijy27s1TKnVyG+6uZi11lw9gehWtNuHy5lMdmq45cvd2tLuRiCJhYCocThXFG61AuslUCUvRLrbQ+Soj4FQRo0wBHqOqWo7fVbVPlTD5P5IswcjXkGJjdmpNKJhiREo9REpIiYkidzTEwk6kjRRg5GvprF2qvRsPmdqmjTha8VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAJH/+zjE6gAIeVUbRIRGweixoRmHoGBIIAsdQNu0MIS/My/9pq1scjJlkcjJlDAwaOR/2ykZMFDAg4JmTIvrFRYPGgqKN/+LMpFhcy76xQW/AooLTQVFiRoCigkNAUKmlUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7IAG1NMlIYRH4mqyIUj2GfhVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjExAPJaJTbBIRlwAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",bump:"data:audio/mpeg;base64,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jk8tllllsssst//9rLFDAwQIOjkatbHIy7JZ/2f7KwMFTTVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5YEKPXEVRZhGgc+vIYmEDjlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5AMJ/JUWYJhhwY4ol0T0jblVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",rumble:"data:audio/mpeg;base64,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W/PsS/pBfpbMRD7m/g/n6H3M1zjsZlcvh3B2oX/UPRQ5//ClEcWk86o3DOb/+zjE6oOMgP0QDqSrgXKaokXEFbpMxeCBlYVGOGPGm2zbgToRqGywt9tDYJPGeZwgkSy07NUHKba6Q2ZalRqt1UrYNYN/zHo+DeT55X6TxwVS5bRbit5/a27JW3OcWG3kjDnqAAaBcKdyFYNgpB9XCJ1w9HUpZVAzdWSRWyzOnxzj1+ZmWK81p2rIkr3UIjOsnEze22Qn/vH+jV/8mtjZpXC/XlrFoKqZ8qX5kIOmDpoHuwplVrCi3p0lhL9gxVlQtmO9T4gbUHsZ4ebE3vE0lxNwvdQVJY3/+zjE64MMrSkSTaSnwP6QZA2kCGgRaIhKxPRuEFDEI3BqOgceMKWLKroleeHDNIpyQTYSEpI20H6hkE1N2zdRDyrUGKuaqF3bM++fiNNeCevQtVfWr8+wnXj4J8D1b8Xpzf6wNFQbBUtkdEGv1OrWa/bjULofBP+zwSyUnOD6AI5lT9cPrE14jKdApwEHAoCKKNIcEpwmyoSt5+Im+y5mAvtAr3t41J7IfE0UBqKB7H2BfFAtMhJJRiqLLZ2QBLJBXLhTTaSTpKhJzhBUIKtQjcbWI1qEeFv/+zjE+oIPCYcQbSRvyRSXpBzwiPgoD+EIuIoVFlSjRPuX6iNVEfjrGsMzw7bSP+pJyk+UuzYxaWmS1553zjQYSDESKSK0VxbM5xpW5Ty0+dheZs/+n/lvUnaza1qSmsRq+OLjnd6dFIpOgGLR5YDBAgcea1CyhcjqYZcoX0i3ULsxZmsU//FhXULsxZn/4p/+qGZMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE/QISPY8ETDETQS6uI2jAiMCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE74IVRW0ILLDTiLKCohxhiBKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",siren:"data:audio/mpeg;base64,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",squeak:"data:audio/mpeg;base64,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",win:"data:audio/mpeg;base64,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yFje0PV0dwmQPC8UlLclMdlAohtRDBhA9YI9Xtbki2UcM5WEOswlCxsx+Z+ZGNCi8Q0CLyUxUCl3NLrzQmSU7+4qakj0NXyFk2ZMWd1xQtf/+zjE54NLIYccIwRwSXWxI4hgm9H2ectdifKTtejZ9wZdhR3T+gEgNwHpFQutlm2q2caQmEYZSksebUnvYMueCWy6Fp/ZqCy0Kvx7Jz6jd8+n/puKesiGd/L3128tpT/flr/yHZDMn0cEdN6WlfPVAACAACsEJvQVKrisagnbF568U5zSNfJZjLqAj3DJ8SIlRYn4XkgNeVXZHQYa81uDrxje3Ejpw96IEf3XwafF+OvGG+RGSHHxfJO3xQ2NSG1Nr4h0u/hB8RE1kcZ1W1//a6EYxROytFT/+zjE7YEKlYEjQYR+ibCwYsiTDfksZlbn3xEIZdbpA1YWn8MIculluJpNDZok10J1DY5TmRQuMkzCZuWD8+kJiTpMQ9isPo3/qQiRb7RQyG7UJ1CO/lxWTCgVpYf1GFDBA4V+4SYRkSjpPzyrIIYVWfpQDCOrdzICBPvVtwzuDXvcrh4Z1aH8C8gZrTv/L/wVAEgzhKCiwiRpgHXpVqLHLosB5izes02JZ7aq/amO/uu0UnWy8DVmfBoHAkx9F6Hzd/bdKUnbEe8ep5XRzeMpc/OZtaasMsv/+zjE7oMM/PkOB6ULCSUe4syQiakxC1HYbguDWqSRMpzIs5jt+9b9P/1Qzv9q+e9Y+0anVwXJucqtrLJT//5///j3j3j3xm/v38GRXVw+rFxXFv/THz/////4+38OPEpTdNPKZ//hML2uLSsTNLaDAAAAFIAAXRGbpbAS7MebHsf+zFxm6oC1Uv1XVS26p///1S9mbjMdUKAjwVOg0HFB2Cp62zg0oO1Hk/ljxZ/yx7+s7wVWCsRBxUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE9wKOgY0LIz0Bib0cYcaekAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5oAUWZkeOYeAAR8UYLOGMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var zg="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",ve=null,yr=!1;function Rl(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Fo(){Rl(),yr=!0;try{if(ve||(ve=document.createElement("audio"),ve.src=zg,ve.loop=!0,ve.preload="auto",ve.setAttribute("playsinline",""),ve.setAttribute("webkit-playsinline",""),ve.setAttribute("x-webkit-airplay","deny"),ve.volume=.01,ve.addEventListener("pause",()=>{yr&&!document.hidden&&setTimeout(()=>yr&&ve.paused&&ve.play().catch(()=>{}),300)})),ve.paused){let i=ve.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Pl(){yr=!1;try{ve&&!ve.paused&&ve.pause()}catch{}}function Ul(i,t){Rl();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Ui=i=>440*Math.pow(2,(i-69)/12),Og=[[40,[62,67,71,74]],[45,[61,64,67,71]],[38,[61,66,69,73]],[47,[62,66,69,74]],[40,[62,67,71,74]],[45,[61,64,67,71]],[43,[62,66,71,74]],[45,[61,64,67,73]]],kg=[[0,0,83],[0,3,86],[0,6,88],[1,0,85],[1,4,81],[2,0,78],[2,2,81],[2,4,85],[3,0,83],[3,4,78],[4,0,83],[4,2,86],[4,4,88],[4,6,90],[5,0,88],[5,4,85],[6,0,86],[6,3,83],[7,0,81],[7,4,85]],Li=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(Fo(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Ul(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Pl(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Fo(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="play"?124:110,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null,this.rollN=null}_tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let d=l.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}mar(t,e,n,s=this.music){let r=Ui(t);this._tone("sine",r,e,.35,n,s,.003),this._tone("sine",r*4,e,.05,n*.3,s,.002)}roll(t,e,n=!0){if(!this.ctx||this.ctx.state!=="running")return;let s=this.ctx;if(!this.rollN){let c=s.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;let l=s.createBiquadFilter();l.type="lowpass",l.Q.value=2;let h=s.createGain();h.gain.value=0,c.connect(l).connect(h).connect(this.sfx),c.start();let u=s.createOscillator();u.type="sine";let d=s.createGain();d.gain.value=0,u.connect(d).connect(this.sfx),u.start(),this.rollN={f:l,g:h,o:u,og:d}}let r=s.currentTime,a=Math.min(1,t/12),o=Math.min(1,Math.log10(1+e)/2);this.rollN.f.frequency.setTargetAtTime(900-o*700+a*300,r,.1),this.rollN.g.gain.setTargetAtTime(n?a*(.05+o*.12):0,r,.12),this.rollN.o.frequency.setTargetAtTime(70-o*35+a*10,r,.2),this.rollN.og.gain.setTargetAtTime(n?a*o*.12:0,r,.2)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=60/this.tempo/2,s=this.mode==="play";for(;this.nextTime<e;){let r=this.nextTime,a=this.step%64,o=Math.floor(a/8),c=a%8,[l,h]=Og[o],u=[0,null,12,0,null,7,12,10];u[c]!==null&&this._tone(c%3===2?"square":"triangle",Ui(l-12+u[c]),r,n*.9,c%3===2?.08:.2,this.music,.004),(c===1||c===4||c===7)&&h.forEach(d=>this._tone("square",Ui(d-12),r,.07,.018,this.music,.002));for(let[d,p,m]of kg)if(d===o&&p===c){let x=this._tone("sine",Ui(m),r,n*1.8,s?.07:.05,this.music,.02);x&&x.detune.setValueAtTime(0,r)}(s||c%4===0)&&((c===0||c===4)&&this._slide("sine",130,45,r,.16,.3,this.music),(c===2||c===6)&&(this._noise(r,.08,.1,"bandpass",1500,.9,this.music),this._noise(r+.01,.05,.07,"highpass",2500,1,this.music)),this._noise(r,.04,c%2?.035:.02,"highpass",7e3,1,this.music)),this.step++,this.nextTime+=n}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"pick":{let a=1400-Math.max(0,Math.min(1,e!=null?e:.3))*1e3;this._slide("sine",a,a*1.6,n,.08,.12),this._noise(n,.05,.05,"bandpass",a*2,2);break}case"squeak":this._slide("square",1200,1800,n,.12,.03),this._slide("square",1800,1100,n+.12,.1,.025);break;case"honk":[370,466].forEach(r=>this._tone("square",r,n,.25,.03));break;case"siren":this._slide("sawtooth",700,1e3,n,.25,.025),this._slide("sawtooth",1e3,700,n+.25,.25,.025);break;case"horn":[147,185].forEach(r=>this._tone("sawtooth",r,n,.5,.04));break;case"rumble":this._slide("sine",90,35,n,.9,.4),this._noise(n,1,.25,"lowpass",500,.8,s,120),this._noise(n+.2,.6,.06,"bandpass",2500,1);break;case"bump":this._slide("sine",160,60,n,.25,.3),this._slide("triangle",500,200,n,.2,.08);break;case"nudge":this._tone("triangle",300,n,.06,.04);break;case"count":this._tone("square",660,n,.18,.06),this._tone("sine",660,n,.25,.1);break;case"go":this._tone("square",990,n,.4,.06),this._tone("sine",1320,n,.5,.1);break;case"bigger":[72,76,79,84,88,91].forEach((r,a)=>this._tone("square",Ui(r),n+a*.06,.18,.045)),[84,88,91,96].forEach(r=>this._tone("sine",Ui(r),n+.4,.8,.05));break;case"tick":this._tone("square",e<=3?1320:990,n,.05,.04);break;case"timeUp":this._slide("sine",2200,1800,n,.6,.12),this._slide("sine",2200,1800,n+.7,.9,.12);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.8]].forEach(([r,a])=>this.mar(r,n+a,.2,s)),this._noise(n+.1,1.6,.05,"highpass",6e3,1);break;case"star":this.mar(88+(e!=null?e:0)*3,n,.2,s);break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.1,.03);break;default:}}};Tl(Li,Vl);wl(Li);var Bo={title:["\u0643\u0631\u0629 \u0627\u0644\u0639\u0644\u0643\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0642\u0629","Gum Ball Roll"],play:["\u064A\u0644\u0627 \u0646\u062F\u062D\u0631\u062C","Play"],exit:["\u062E\u0631\u0648\u062C","Exit"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Resume"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],diameter:["\u0642\u0637\u0631 \u0627\u0644\u0643\u0631\u0629","Ball diameter"],nextGoal:["\u0627\u0644\u0647\u062F\u0641 \u0627\u0644\u062C\u0627\u064A","Next size goal"],timeLeft:["\u0627\u0644\u0648\u0642\u062A","Time left"],m:["\u0645","m"],bigger:["\u0623\u0643\u0628\u0631!","BIGGER!"],nowRoll:["\u062F\u0644\u0648\u0642\u062A\u064A \u062F\u062D\u0631\u062C {x}!","Now roll up {x}!"],go:["\u062F\u062D\u0631\u062C!","Roll!"],hint:["\u{1F446} \u0627\u0633\u062D\u0628 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0639\u0634\u0627\u0646 \u062A\u062F\u062D\u0631\u062C \u0627\u0644\u0643\u0631\u0629","\u{1F446} Drag anywhere to roll the ball"],tooBig:["\u0644\u0633\u0647 \u0643\u0628\u064A\u0631 \u0639\u0644\u064A\u0643! \u0643\u0628\u0651\u0631 \u0627\u0644\u0623\u0648\u0644","Still too big! Grow first"],timeUp:["\u0627\u0644\u0648\u0642\u062A \u062E\u0644\u0635!","Time's up!"],finalSize:["\u0643\u0631\u062A\u0643 \u0648\u0635\u0644\u062A","Your ball reached"],best:["\u0623\u062D\u0633\u0646 \u0646\u062A\u064A\u062C\u0629","Best"],newBest:["\u0631\u0642\u0645 \u062C\u062F\u064A\u062F! \u{1F389}","New best! \u{1F389}"],collected:["\u0644\u0645\u064A\u062A","Rolled up"],things:["\u062D\u0627\u062C\u0629","things"],again:["\u062A\u0627\u0646\u064A","Again"],starHelp:["\u2B50 \u0662\u0660 \u0645  \u2B50\u2B50 \u0664\u0660 \u0645  \u2B50\u2B50\u2B50 \u0666\u0660 \u0645","\u2B50 20 m  \u2B50\u2B50 40 m  \u2B50\u2B50\u2B50 60 m"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u{1F389}","Well done! \u{1F389}"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u{1F389}","Well done! \u{1F389}"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u0645\u062F\u064A\u0646\u0629...","Getting the city ready..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},as="ar",Ll=!1,Dl=i=>{as=i==="en"?"en":"ar"},ql=i=>{Ll=!!i},os=()=>as,Dt=(i,t)=>{let e=`${i}_${Ll?"f":"m"}`,n=Bo[e]?e:i,s=Bo[n]?Bo[n][as==="en"?1:0]:i;if(t)for(let[r,a]of Object.entries(t))s=s.replace(`{${r}}`,a);return s},In=i=>as==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]).replace(".","\u066B"),zo=i=>as==="en"?i.en:i.ar;var Nl=`
.gb-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9ad4f5}
.gb-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.gb-layer{position:absolute;inset:0;pointer-events:none}
.gb-layer button,.gb-layer .gb-card{pointer-events:auto}
.gb-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*4);font-size:calc(var(--u)*9);font-weight:900;color:#fff;background:#9ad4f5;text-shadow:0 calc(var(--u)*.6) 0 #3a7ab8}
.gb-loading i{display:block;width:calc(var(--u)*50);height:calc(var(--u)*2.4);border-radius:999px;background:#d8eefc;overflow:hidden}
.gb-loading i::after{content:'';display:block;height:100%;width:40%;background:#4ad86a;border-radius:999px;animation:gbLoad 1.2s ease-in-out infinite}
@keyframes gbLoad{50%{width:90%}}
.gb-pills{position:absolute;top:max(calc(var(--u)*2),env(safe-area-inset-top));left:calc(var(--u)*2);right:calc(var(--u)*2);display:flex;gap:calc(var(--u)*1.6);justify-content:center;direction:ltr}
.gb-pill{flex:1;max-width:calc(var(--u)*32);background:rgba(28,34,62,.9);border:calc(var(--u)*.35) solid rgba(255,255,255,.18);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*.8) calc(var(--u)*1.6);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.3)}
.gb-pill small{font-size:calc(var(--u)*2.3);font-weight:700;opacity:.8;white-space:nowrap}
.gb-pill b{display:flex;align-items:center;gap:calc(var(--u)*1);font-size:calc(var(--u)*4.6);font-weight:900;white-space:nowrap}
.gb-pill b i{display:inline-block;width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffb8dc,#ff3aa0)}
.gb-pill .bar{width:100%;height:calc(var(--u)*.8);background:rgba(255,255,255,.2);border-radius:9px;overflow:hidden}
.gb-pill .bar i{display:block;height:100%;background:#4ad86a;transition:width .2s}
.gb-pill.low b{color:#ff8a8a}
.gb-pause{position:absolute;bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));left:calc(var(--u)*3);width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:50%;border:none;background:rgba(28,34,62,.85);color:#fff;font-size:calc(var(--u)*4.4);font-weight:900;cursor:pointer;font-family:inherit;padding:0}
.gb-mute{left:auto;right:calc(var(--u)*3)}
.gb-pop{position:absolute;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*5);white-space:nowrap;pointer-events:none;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.3) #7a3a00;paint-order:stroke fill;animation:gbPop 1.1s ease-out forwards}
@keyframes gbPop{from{transform:translate(-50%,-50%) scale(1.4);opacity:0}15%{transform:translate(-50%,-50%) scale(1);opacity:1}70%{opacity:1}to{transform:translate(-50%,-220%);opacity:0}}
.gb-bigger{position:absolute;left:50%;top:22%;transform:translate(-50%,-50%) scale(.5);text-align:center;opacity:0;transition:opacity .25s,transform .25s;pointer-events:none}
.gb-bigger.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
.gb-bigger b{display:block;font-size:calc(var(--u)*15);font-weight:900;color:#ffd23a;-webkit-text-stroke:calc(var(--u)*.8) #a8421a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #6a2a0a;line-height:1}
.gb-bigger span{display:inline-block;margin-top:calc(var(--u)*1.4);background:rgba(28,34,62,.92);border-radius:999px;padding:calc(var(--u)*.8) calc(var(--u)*3);font-weight:900;font-size:calc(var(--u)*3.6)}
.gb-count{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-size:calc(var(--u)*24);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #ff3aa0;paint-order:stroke fill;pointer-events:none}
.gb-count.pop{animation:gbCount .9s ease-out forwards}
@keyframes gbCount{from{transform:translate(-50%,-50%) scale(1.6);opacity:0}20%{opacity:1;transform:translate(-50%,-50%) scale(1)}80%{opacity:1}to{opacity:0}}
.gb-toast{position:absolute;left:50%;top:60%;transform:translate(-50%,-50%);background:rgba(28,34,62,.9);border-radius:calc(var(--u)*2.4);padding:calc(var(--u)*1.6) calc(var(--u)*3.4);font-weight:900;font-size:calc(var(--u)*3.8);text-align:center;opacity:0;transition:opacity .3s;pointer-events:none;max-width:calc(var(--u)*80)}
.gb-toast.show{opacity:1}
.gb-dim{position:absolute;inset:0;background:rgba(20,30,60,.45);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box;pointer-events:auto}
.gb-card{background:linear-gradient(180deg,#bfe6ff,#8acdf8);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*5);padding:calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.4);width:calc(var(--u)*80);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3)}
.gb-card h2{margin:0;font-size:calc(var(--u)*9);font-weight:900;color:#fff;text-shadow:0 calc(var(--u)*.6) 0 #3a7ab8;text-align:center}
.gb-big{font-size:calc(var(--u)*13);font-weight:900;color:#ff3aa0;-webkit-text-stroke:calc(var(--u)*.5) #fff;paint-order:stroke fill;direction:ltr}
.gb-sub{font-weight:900;font-size:calc(var(--u)*4);color:#1c2a4a;text-align:center}
.gb-stars{font-size:calc(var(--u)*11);letter-spacing:calc(var(--u)*1)}
.gb-stars .off{filter:grayscale(1);opacity:.35}
.gb-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*6);color:#fff;border:calc(var(--u)*.6) solid #fff;border-radius:calc(var(--u)*3.4);padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:calc(var(--u)*13);cursor:pointer;background:linear-gradient(180deg,#ff7ac0,#ff3aa0);box-shadow:0 calc(var(--u)*.9) 0 #b81a6a;width:100%}
.gb-btn.blue{background:linear-gradient(180deg,#5ab8f8,#2a7ad8);box-shadow:0 calc(var(--u)*.9) 0 #1a4a9a;font-size:calc(var(--u)*4.6)}
.gb-btn:active{transform:translateY(calc(var(--u)*.6))}
.gb-btn:focus-visible,.gb-pause:focus-visible{outline:calc(var(--u)*.7) solid #ffd23a;outline-offset:calc(var(--u)*.5)}
.gb-logo{position:absolute;top:calc(var(--u)*16);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*11);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #ff3aa0;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #b81a6a;white-space:nowrap;text-align:center}
.gb-menu{position:absolute;left:50%;bottom:max(calc(var(--u)*8),env(safe-area-inset-bottom));transform:translateX(-50%);width:calc(var(--u)*70);display:flex;flex-direction:column;gap:calc(var(--u)*2.4);align-items:center}
.gb-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*30);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
.gb-land .gb-card{width:calc(var(--u)*100)}
.gb-land .gb-logo{top:calc(var(--u)*8)}
`;function vt(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Hg=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},Gg=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},cs=i=>i<10?i.toFixed(1):String(Math.round(i)),Wg=i=>{let t=Math.floor(i/60),e=Math.floor(i%60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`},Ir;function Xg(){if(Ir)return Ir;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Ir=new $n(i),Ir}var Oo=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),Dl(e.lang),ql(e.gender==="girl"),this.age=Number(e.age)||5,this.save=Sl(e.save),this.base=e.base||"./",this.sound=new Li,this.sound.muted=!!this.save.muted,this.quality={low:Hg()},document.getElementById("gb-style")||document.head.append(vt("style",{id:"gb-style",text:Nl})),this.root=vt("div",{class:"gb-root",dir:os()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!Gg()){this.root.append(vt("div",{class:"gb-loading"},vt("div",{},Dt("noWebgl")," ",vt("button",{class:"gb-btn blue",onclick:()=>this.post({type:"exit"})},Dt("exit")))));return}this.loading=vt("div",{class:"gb-loading"},Dt("title"),vt("i")),this.root.append(this.loading),this.renderer=new nr({antialias:!this.quality.low,powerPreference:"high-performance"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.6),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=xe,this.root.prepend(this.renderer.domElement),this.layer=vt("div",{class:"gb-layer"}),this.root.append(this.layer),this.camera=new Ee(55,1,.3,900),this.camPos=new P(0,6,20),this.camLook=new P(0,0,0),this.input={pointer:null,keys:new Set,mx:0,mz:0},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new pr,this.city=Po(11),this._fonts().then(()=>{this._buildScene(),this.loading.remove(),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.land=this.cw>this.ch*1.15,this.root.classList.toggle("gb-land",this.land)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.land?48:60,this.camera.updateProjectionMatrix())}_buildScene(){let t=this.scene=new sr;t.background=new Tt(10147061),t.fog=new ir(12116216,80,420),t.add(new dr(16777215,9075306,1.7));let e=new fr(16774368,1.5);e.position.set(-60,120,40),t.add(e);let n=new re(new Ye(sn*2+200,sn*2+200),new nn({color:5593182}));n.rotation.x=-Math.PI/2,t.add(n);let s=46,r=14,a=No("#cfcac2","#c4bfb6","#a8a39a",4);a.repeat.set(8,8);let o=new nn({map:a}),c=[];for(let g=-5;g<=4;g++)for(let f=-5;f<=4;f++){let b=new Ye(s-r,s-r);b.rotateX(-Math.PI/2),b.translate(g*s+r+(s-r)/2,.03,f*s+r+(s-r)/2),c.push(b)}let l=[];for(let g=-5;g<=5;g++){let f=g*s+r/2;for(let b=-sn;b<sn;b+=6)l.push(new Ye(.35,3).rotateX(-Math.PI/2).translate(f,.02,b)),l.push(new Ye(3,.35).rotateX(-Math.PI/2).translate(b,.02,f))}t.add(new re(is(c),o)),t.add(new re(is(l),new Fn({color:16765498})));let h=No("#d8805a","#cc7450","#b8633f",4);h.repeat.set(10,32);let u=new re(new Ye(30,96),new nn({map:h}));u.rotation.x=-Math.PI/2,u.position.set(0,.05,-25),t.add(u);for(let g=0;g<6;g++){let f=new re(new tn(12,.4*(g+1),1.2),new nn({color:14166586}));f.position.set(0,.2*(g+1),-72-g*1.2),t.add(f)}this.inst=new Map;let d=new Map;for(let g of this.city)d.has(g.kind)||d.set(g.kind,[]),d.get(g.kind).push(g);let p=new Yt;for(let[g,f]of d){let b=new rr(Do(g),qo,f.length);f.forEach((M,_)=>{M.slot=_;let D=(rn[g].g===4,M.s);p.compose(new P(M.x,0,M.z),new Te().setFromEuler(new Ce(0,M.a,0)),new P(D,rn[g].g===4?M.s:D,D)),b.setMatrixAt(_,p)}),b.instanceMatrix.needsUpdate=!0,b.computeBoundingSphere(),t.add(b),this.inst.set(g,b)}let m=[16734904,5957887,16765498,9067263,5963658];for(let g=0;g<14;g++){let f=g%2?1:-1,b=26+g%4*10,M=new re(new tn(12,b,12),new nn({color:[3832536,15255674,14183050,6998248][g%4]}));M.position.set(f*22,b/2,-70+Math.floor(g/2)*13),t.add(M);let _=new re(new Ye(9,7),new Fn({color:m[g%5]}));_.position.set(f*15.9,b*.55,M.position.z),_.rotation.y=-f*Math.PI/2,t.add(_),this.walls=this.walls||[],this.walls.push({x:M.position.x,z:M.position.z,r:6.5,s:b})}this.gum=El(),t.add(this.gum.root),this.stuck=new $e,this.gum.root.add(this.stuck),this.trail=[];let x=new or(.5,14);x.rotateX(-Math.PI/2);for(let g=0;g<60;g++){let f=new re(x,new Fn({color:16739e3,transparent:!0,opacity:0,depthWrite:!1}));t.add(f),this.trail.push({m:f,t:9})}this.trailI=0,this.sparks=new ar(new be,new Ji({color:16769658,size:.4,map:Xg(),transparent:!0,depthWrite:!1,blending:Os})),this.spark={pos:new Float32Array(150*3),vel:new Float32Array(150*3),life:new Float32Array(150),i:0},this.sparks.geometry.setAttribute("position",new fe(this.spark.pos,3)),this.sparks.frustumCulled=!1,t.add(this.sparks),this.q=new Te}_resetCity(){var e,n;let t=new Yt;for(let s of this.city){s.taken=!1;let r=this.inst.get(s.kind);t.compose(new P((e=s.x0)!=null?e:s.x,0,(n=s.z0)!=null?n:s.z),new Te().setFromEuler(new Ce(0,s.a,0)),new P(s.s,s.s,s.s)),s.x0!==void 0&&(s.x=s.x0,s.z=s.z0),r.setMatrixAt(s.slot,t)}for(let s of this.inst.values())s.instanceMatrix.needsUpdate=!0;this.stuck.clear(),this.gum.root.quaternion.identity()}_burst(t,e,n,s,r){let a=this.spark;for(let o=0;o<s;o++){let c=a.i++%150,l=Math.random()*6.28;a.pos.set([t,e,n],c*3),a.vel.set([Math.cos(l)*r*Math.random(),Math.random()*r,Math.sin(l)*r*Math.random()],c*3),a.life[c]=.6}}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||n.target.closest(".gb-dim")||this.mode!=="play"||this.paused)return;let s=t.getBoundingClientRect();this.input.pointer=n.pointerId,this.input.ox=n.clientX-s.left,this.input.oy=n.clientY-s.top;try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let s=t.getBoundingClientRect(),r=n.clientX-s.left-this.input.ox,a=n.clientY-s.top-this.input.oy,o=Math.hypot(r,a);if(o<this.u*1.2){this.input.mx=this.input.mz=0;return}let c=Math.min(1,o/(this.u*8))/o;this.input.mx=r*c,this.input.mz=a*c,this.moved=!0});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.mx=this.input.mz=0)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause()):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=vt("button",{class:"gb-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},Dt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_clear(){this.layer.replaceChildren(),this.hud=null}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_mute(t){let e=vt("button",{class:`gb-pause ${t}`,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=vt("div",{class:"gb-toast"}),this.toastEl}toast(t,e=2.4){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}showMenu(){this.mode="menu",this.paused=!1,this.g=null,this.sound.setMode("menu"),this.sound.roll(0,0,!1),this._clear(),this.layer.append(vt("button",{class:"gb-pause",style:"top:max(calc(var(--u)*3),env(safe-area-inset-top));bottom:auto","aria-label":Dt("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},os()==="en"?"\u2190":"\u2192"),vt("div",{class:"gb-logo"},Dt("title")),vt("div",{class:"gb-menu"},this.save.best?vt("div",{class:"gb-sub",style:"color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.4)"},`${Dt("best")}: ${In(cs(this.save.best))} ${Dt("m")}  ${"\u2B50".repeat(this.save.stars)}`):null,vt("button",{class:"gb-btn",onclick:()=>this.start()},"\u25B6 ",Dt("play")),vt("div",{class:"gb-sub",style:"color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.4);font-size:calc(var(--u)*3.2)"},Dt("starHelp"))),this._mute("gb-mute"),this._toastEl())}start(){this._resetCity(),this.g=new Cr({things:this.city,easy:this.age<=4});for(let t of this.city)t.x0===void 0&&(t.x0=t.x,t.z0=t.z);this.mode="play",this.paused=!1,this.moved=!1,this.lastGoal=0,this.sound.setMode("play"),this._hud(),this.camPos.set(0,4,18)}_hud(){this._clear();let t=(e,n,s)=>vt("div",{class:"gb-pill"},vt("small",{},e),n,s);this.hud={d:vt("b",{},vt("i"),vt("span")),goal:vt("b",{},vt("i"),vt("span")),goalBar:vt("i",{style:"width:0%"}),time:vt("b",{},"\u23F1 ",vt("span")),bigger:vt("div",{class:"gb-bigger"},vt("b",{},Dt("bigger")),vt("span")),count:vt("div",{class:"gb-count"})},this.hud.timePill=t(Dt("timeLeft"),this.hud.time),this.layer.append(vt("div",{class:"gb-pills"},t(Dt("diameter"),this.hud.d),t(Dt("nextGoal"),this.hud.goal,vt("div",{class:"bar"},this.hud.goalBar)),this.hud.timePill),this.hud.bigger,this.hud.count,vt("button",{class:"gb-pause","aria-label":Dt("paused"),onclick:e=>{e.stopPropagation(),this.pause()}},"\u275A\u275A"),this._mute("gb-mute"),this._toastEl()),this._hc={}}_count(t){let e=this.hud.count;e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.mx=this.input.mz=0,this.sound.suspend();let t=vt("div",{class:"gb-dim"},vt("div",{class:"gb-card"},vt("h2",{},Dt("paused")),vt("button",{class:"gb-btn",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume(),this.clock.getDelta()}},"\u25B6 ",Dt("resume")),vt("button",{class:"gb-btn blue",onclick:()=>{this.sound.resume(),this.start()}},"\u21BB ",Dt("restart")),vt("button",{class:"gb-btn blue",onclick:()=>{this.sound.resume(),this.showMenu()}},Dt("menu"))));this.layer.append(t)}_results(){let e=this.g.result;this.mode="results",this.sound.roll(0,0,!1),this.sound.setMode("menu");let n=e.d>this.save.best;this.save.best=Math.max(this.save.best,Math.round(e.d*10)/10),this.save.stars=Math.max(this.save.stars,e.stars),this.save.plays++,this._saveNow(),this.sound.play("win"),[0,1,2].forEach(s=>s<e.stars&&setTimeout(()=>this.sound.play("star",s),700+s*280)),this.layer.append(vt("div",{class:"gb-dim"},vt("div",{class:"gb-card"},vt("h2",{},Dt("timeUp")),vt("div",{class:"gb-sub"},Dt("finalSize")),vt("div",{class:"gb-big"},`${In(cs(e.d))} ${Dt("m")}`),vt("div",{class:"gb-stars"},[1,2,3].map(s=>vt("span",{class:s<=e.stars?"":"off"},"\u2B50"))),vt("div",{class:"gb-sub"},`${Dt("collected")} ${In(e.collected)} ${Dt("things")}`),n?vt("div",{class:"gb-sub",style:"color:#b81a6a"},Dt("newBest")):vt("div",{class:"gb-sub"},`${Dt("best")}: ${In(cs(this.save.best))} ${Dt("m")}`),vt("div",{class:"gb-sub",style:"color:#b81a6a"},Dt("win")),vt("button",{class:"gb-btn",onclick:()=>this.start()},"\u21BB ",Dt("again")),vt("button",{class:"gb-btn blue",onclick:()=>this.showMenu()},Dt("menu")))))}_playFrame(t,e){let n=this.g,s=this.input.keys,r=this.input.mx,a=this.input.mz;(s.has("arrowleft")||s.has("a"))&&(r-=1),(s.has("arrowright")||s.has("d"))&&(r+=1),(s.has("arrowup")||s.has("w"))&&(a-=1),(s.has("arrowdown")||s.has("s"))&&(a+=1),n.setMove(r,a);let o=n.state;for(let c of n.step(t))this._event(c,n);for(let c of this.walls){let l=n.ball.x-c.x,h=n.ball.z-c.z,u=Math.hypot(l,h);u<n.r+c.r&&n.d<c.s*1.2&&(n.ball.x=c.x+l/u*(n.r+c.r),n.ball.z=c.z+h/u*(n.r+c.r))}o==="roll"&&n.state==="done"&&setTimeout(()=>this.mode==="play"&&this.g===n&&this._results(),1600),this._sync(t,e)}_event(t,e){var s,r;let n=this.sound;switch(t.type){case"count":n.play("count"),this._count(In(t.n));break;case"go":n.play("go"),this._count(Dt("go")),setTimeout(()=>this.mode==="play"&&!this.moved&&this.toast(Dt("hint"),3),1200);break;case"tick":n.play("tick",t.n);break;case"stick":{let a=this.city[t.id],o=rn[t.kind].g,c=Math.min(1,t.s/(t.from*Ro));o===4?(n.play("rumble"),this.shake=.6):t.kind==="police"?n.play("siren"):o===2&&t.kind!=="tree"?n.play("honk"):o===3?n.play("horn"):t.kind==="duck"||t.kind==="teddy"?n.play("squeak"):((s=this._pickT)!=null?s:0)<=0&&(n.play("pick",c),this._pickT=.04);let l=this.inst.get(t.kind);l.setMatrixAt(a.slot,new Yt().makeScale(0,0,0)),l.instanceMatrix.needsUpdate=!0,this._attach(t.kind,a);let h=this._proj(a.x,Math.max(1,t.s)+e.r,a.z),u=vt("div",{class:"gb-pop",style:`left:${h.x}px;top:${h.y}px`},`+${zo(rn[t.kind])}`);this.layer.append(u),setTimeout(()=>u.remove(),1100),this._burst(a.x,e.r,a.z,o>=2?20:5,2+o*2);break}case"bump":n.play("bump"),this.shake=.4,((r=this._tooBigT)!=null?r:0)<=0&&(this.toast(Dt("tooBig"),1.6),this._tooBigT=6);break;case"nudge":{n.play("nudge");let a=this.city[t.id],o=this.inst.get(a.kind);o.setMatrixAt(a.slot,new Yt().compose(new P(a.x,0,a.z),new Te().setFromEuler(new Ce(0,a.a,0)),new P(a.s,a.s,a.s))),o.instanceMatrix.needsUpdate=!0;break}case"bigger":{n.play("bigger");let a=yn[t.goal-1],o=yn[t.goal];this.hud.bigger.lastChild.textContent=o?Dt("nowRoll",{x:os()==="en"?a.en.toUpperCase():a.ar}):zo(a),this.hud.bigger.classList.add("show"),clearTimeout(this._bT),this._bT=setTimeout(()=>this.hud&&this.hud.bigger.classList.remove("show"),2200),this._burst(e.ball.x,e.r*2,e.ball.z,60,6);break}case"timeUp":n.play("timeUp"),this._count(Dt("timeUp"));break;default:}}_attach(t,e){let n=this.g,s=new re(Do(t),qo),r=e.s/n.d;s.scale.setScalar(r);let a=new P(e.x-n.ball.x,.15+Math.random()*.5,e.z-n.ball.z).normalize();if(a.applyQuaternion(this.gum.root.quaternion.clone().invert()),s.position.copy(a.multiplyScalar(.48)),s.quaternion.setFromUnitVectors(new P(0,1,0),a.clone().normalize()),s.userData.s=e.s,this.stuck.add(s),this.stuck.children.length>70){let o=[...this.stuck.children].sort((c,l)=>c.userData.s-l.userData.s);for(let c=0;c<12;c++)this.stuck.remove(o[c])}}_proj(t,e,n){let s=new P(t,e,n).project(this.camera);return{x:(s.x*.5+.5)*this.cw,y:(-s.y*.5+.5)*this.ch}}_sync(t,e){var l,h,u,d;let n=this.g,s=n.ball,r=n.r,a=Math.hypot(s.vx,s.vz);if(a>.01){let p=new P(s.vz,0,-s.vx).normalize();this.q.setFromAxisAngle(p,a*t/r),this.gum.root.quaternion.premultiply(this.q)}if(this.gum.root.position.set(s.x,r,s.z),this.gum.root.scale.setScalar(n.d),this._trailD=((l=this._trailD)!=null?l:0)+a*t,this._trailD>Math.max(.6,n.d*.5)){this._trailD=0;let p=this.trail[this.trailI++%this.trail.length];p.t=0,p.m.position.set(s.x+(Math.random()-.5)*r*.6,.06,s.z+(Math.random()-.5)*r*.6),p.m.scale.setScalar(Math.max(.3,n.d*.22)*(.6+Math.random()*.6))}for(let p of this.trail)p.t>6||(p.t+=t,p.m.material.opacity=Math.max(0,.75-p.t*.12));this.sound.roll(a,n.d,n.state==="roll"),this._pickT=((h=this._pickT)!=null?h:0)-t,this._tooBigT=((u=this._tooBigT)!=null?u:0)-t;let o=1+n.d*.9,c=this.land?new P(0,1.6+o*1.1,3.8+o*2.4):new P(0,1.9+o*1.3,4.2+o*2.6);this.camLook.lerp(new P(s.x,r*.9,s.z-4-n.d*1.6),Math.min(1,t*5)),this.camPos.lerp(new P(s.x+c.x,c.y,s.z+c.z),Math.min(1,t*3)),this.camera.position.copy(this.camPos),this.shake=Math.max(0,((d=this.shake)!=null?d:0)-t*1.6),this.shake>0&&this.camera.position.add(new P((Math.random()-.5)*this.shake*o*.3,0,0)),this.camera.lookAt(this.camLook),this.camera.far=500+n.d*10,this.camera.updateProjectionMatrix(),this._fx(t),this._hudSync(n)}_fx(t){let e=this.spark;for(let n=0;n<150;n++)if(!(e.life[n]<=0)){e.life[n]-=t,e.vel[n*3+1]-=9*t;for(let s=0;s<3;s++)e.pos[n*3+s]+=e.vel[n*3+s]*t;e.life[n]<=0&&(e.pos[n*3+1]=-500)}this.sparks.geometry.attributes.position.needsUpdate=!0}_hudSync(t){if(!this.hud)return;let e=this._hc,n=`${In(cs(t.d))} ${Dt("m")}`;e.d!==n&&(e.d=n,this.hud.d.lastChild.textContent=n);let s=t.goalD,r=`${In(cs(s))} ${Dt("m")}`;e.goal!==r&&(e.goal=r,this.hud.goal.lastChild.textContent=r);let a=t.goal>0?yn[t.goal-1].d:.5,o=Math.round(Math.max(0,Math.min(1,(t.d-a)/(s-a)))*100);e.w!==o&&(e.w=o,this.hud.goalBar.style.width=`${o}%`);let c=Wg(Math.ceil(t.left));e.tm!==c&&(e.tm=c,this.hud.time.lastChild.textContent=os()==="en"?c:In(c),this.hud.timePill.classList.toggle("low",t.left<=10))}_frame(){let t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;if(this._adapt(t),this.mode==="play"&&this.g&&!this.paused)this._playFrame(t,e);else if(this.mode==="results"&&this.g)this._sync(t,e);else if(this.mode!=="play"){let n=e*.4;this.gum.root.position.set(Math.sin(n)*3,.5,6+Math.cos(n)*3),this.gum.root.scale.setScalar(1),this.gum.root.rotation.set(e,e*.7,0);let s=new P(0,4.5,16);this.camPos.lerp(s,Math.min(1,t*2)),this.camera.position.copy(this.camPos),this.camera.lookAt(0,1,-6),this._fx(t)}this.renderer.render(this.scene,this.camera)}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),clearTimeout(this._tt),clearTimeout(this._bT),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this.scene&&this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},ko={start(i,t,e){let n=new Oo(i,t||{},e);return ko.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.GumBall=ko;var Cm=ko;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
