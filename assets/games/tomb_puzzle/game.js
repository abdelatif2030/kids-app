(()=>{var Yo="170";var Kh=0,Rl=1,Zh=2;var Fc=1,Qh=2,yn=3,Bn=0,Ne=1,Ve=2,dn=0,Ri=1,qe=2,Pl=3,ql=4,Jh=5,jn=100,jh=101,$h=102,tu=103,eu=104,nu=200,iu=201,su=202,ru=203,Ta=204,wa=205,au=206,ou=207,lu=208,cu=209,hu=210,uu=211,du=212,fu=213,pu=214,Ra=0,Pa=1,qa=2,Li=3,Da=4,La=5,Ua=6,Va=7,Ko=0,gu=1,mu=2,Nn=0,Zo=1,Qo=2,Jo=3,jo=4,Au=5,$o=6,tl=7;var Bc=300,Ui=301,Vi=302,Na=303,Fa=304,Tr=306,ds=1e3,ti=1001,Ba=1002,nn=1003,xu=1004;var Es=1005;var un=1006,Zr=1007;var ei=1008;var bn=1009,Oc=1010,kc=1011,fs=1012,el=1013,ni=1014,_n=1015,rn=1016,nl=1017,il=1018,Ni=1020,zc=35902,Hc=1021,Gc=1022,en=1023,Wc=1024,Xc=1025,Pi=1026,Fi=1027,Yc=1028,sl=1029,Kc=1030,rl=1031;var al=1033,tr=33776,er=33777,nr=33778,ir=33779,Oa=35840,ka=35841,za=35842,Ha=35843,Ga=36196,Wa=37492,Xa=37496,Ya=37808,Ka=37809,Za=37810,Qa=37811,Ja=37812,ja=37813,$a=37814,to=37815,eo=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,sr=36492,oo=36494,lo=36495,Zc=36283,co=36284,ho=36285,uo=36286;var rr=2300,fo=2301,Qr=2302,Dl=2400,Ll=2401,Ul=2402;var Cu=3200,vu=3201;var Qc=0,yu=1,Un="",_e="srgb",Ki="srgb-linear",wr="linear",Zt="srgb";var ui=7680;var Vl=519,_u=512,Iu=513,Mu=514,Jc=515,bu=516,Su=517,Eu=518,Tu=519,po=35044;var Nl="300 es",In=2e3,ar=2001,On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jr=Math.PI/180,go=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function wu(i,t){return(i%t+t)%t}function jr(i,t,e){return(1-e)*i+e*t}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var At=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],A=n[8],C=s[0],g=s[3],f=s[6],E=s[1],x=s[4],p=s[7],b=s[2],M=s[5],T=s[8];return r[0]=a*C+o*E+l*b,r[3]=a*g+o*x+l*M,r[6]=a*f+o*p+l*T,r[1]=c*C+h*E+u*b,r[4]=c*g+h*x+u*M,r[7]=c*f+h*p+u*T,r[2]=d*C+m*E+A*b,r[5]=d*g+m*x+A*M,r[8]=d*f+m*p+A*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,A=e*u+n*d+s*m;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=u*C,t[1]=(s*c-h*n)*C,t[2]=(o*n-s*a)*C,t[3]=d*C,t[4]=(h*e-s*l)*C,t[5]=(s*r-o*e)*C,t[6]=m*C,t[7]=(n*l-c*e)*C,t[8]=(a*e-n*r)*C,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$r=new Ut;function jc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ru(){let i=or("canvas");return i.style.display="block",i}var Fl={};function cs(i){i in Fl||(Fl[i]=!0,console.warn(i))}function Pu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Du(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ot={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=Mn(i.r),i.g=Mn(i.g),i.b=Mn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bl=[.64,.33,.3,.6,.15,.06],Ol=[.2126,.7152,.0722],kl=[.3127,.329],zl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ot.define({[Ki]:{primaries:Bl,whitePoint:kl,transfer:wr,toXYZ:zl,fromXYZ:Hl,luminanceCoefficients:Ol,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:Bl,whitePoint:kl,transfer:Zt,toXYZ:zl,fromXYZ:Hl,luminanceCoefficients:Ol,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}});var di,mo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{di===void 0&&(di=or("canvas")),di.width=t.width,di.height=t.height;let n=di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lu=0,lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ta(s[a].image)):r.push(ta(s[a]))}else r=ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ta(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uu=0,He=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ti,s=ti,r=un,a=ei,o=en,l=bn,c=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Fn(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Bc;He.DEFAULT_ANISOTROPY=1;var jt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],A=l[9],C=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-C)<.01&&Math.abs(A-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+C)<.1&&Math.abs(A+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,p=(m+1)/2,b=(f+1)/2,M=(h+d)/4,T=(u+C)/4,R=(A+g)/4;return x>p&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=M/n,r=T/n):p>b?p<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(p),n=M/s,r=R/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=R/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-A)*(g-A)+(u-C)*(u-C)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-A)/E,this.y=(u-C)/E,this.z=(d-h)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},De=class extends Ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xo=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],A=r[a+2],C=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=A,t[e+3]=C;return}if(u!==C||l!==d||c!==m||h!==A){let g=1-o,f=l*d+c*m+h*A+u*C,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let b=Math.sqrt(x),M=Math.atan2(b,f*E);g=Math.sin(g*M)/b,o=Math.sin(o*M)/b}let p=o*E;if(l=l*g+d*p,c=c*g+m*p,h=h*g+A*p,u=u*g+C*p,g===1-o){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],A=r[a+3];return t[e]=o*A+h*u+l*m-c*d,t[e+1]=l*A+h*d+c*u-o*m,t[e+2]=c*A+h*m+o*d-l*u,t[e+3]=h*A-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),A=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*A,this._y=c*m*u-d*h*A,this._z=c*h*A+d*m*u,this._w=c*h*u-d*m*A;break;case"YXZ":this._x=d*h*u+c*m*A,this._y=c*m*u-d*h*A,this._z=c*h*A-d*m*u,this._w=c*h*u+d*m*A;break;case"ZXY":this._x=d*h*u-c*m*A,this._y=c*m*u+d*h*A,this._z=c*h*A+d*m*u,this._w=c*h*u-d*m*A;break;case"ZYX":this._x=d*h*u-c*m*A,this._y=c*m*u+d*h*A,this._z=c*h*A-d*m*u,this._w=c*h*u+d*m*A;break;case"YZX":this._x=d*h*u+c*m*A,this._y=c*m*u+d*h*A,this._z=c*h*A-d*m*u,this._w=c*h*u-d*m*A;break;case"XZY":this._x=d*h*u-c*m*A,this._y=c*m*u-d*h*A,this._z=c*h*A+d*m*u,this._w=c*h*u+d*m*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ea=new q,Gl=new kn,ii=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),ws.subVectors(this.max,es),fi.subVectors(t.a,es),pi.subVectors(t.b,es),gi.subVectors(t.c,es),wn.subVectors(pi,fi),Rn.subVectors(gi,pi),Wn.subVectors(fi,gi);let e=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-Wn.z,Wn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,Wn.z,0,-Wn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-Wn.y,Wn.x,0];return!na(e,fi,pi,gi,ws)||(e=[1,0,0,0,1,0,0,0,1],!na(e,fi,pi,gi,ws))?!1:(Rs.crossVectors(wn,Rn),e=[Rs.x,Rs.y,Rs.z],na(e,fi,pi,gi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mn=[new q,new q,new q,new q,new q,new q,new q,new q],Je=new q,Ts=new ii,fi=new q,pi=new q,gi=new q,wn=new q,Rn=new q,Wn=new q,es=new q,ws=new q,Rs=new q,Xn=new q;function na(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);let o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vu=new ii,ns=new q,ia=new q,Bi=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(ia)),this.expandByPoint(ns.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new q,sa=new q,Ps=new q,Pn=new q,ra=new q,qs=new q,aa=new q,ps=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sa.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(sa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ps),o=Pn.dot(this.direction),l=-Pn.dot(Ps),c=Pn.lengthSq(),h=Math.abs(1-a*a),u,d,m,A;if(h>0)if(u=a*l-o,d=a*o-l,A=r*h,u>=0)if(d>=-A)if(d<=A){let C=1/h;u*=C,d*=C,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-A?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=A?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sa).addScaledVector(Ps,d),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){ra.subVectors(e,t),qs.subVectors(n,t),aa.crossVectors(ra,qs);let a=this.direction.dot(aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);let l=o*this.direction.dot(qs.crossVectors(Pn,qs));if(l<0)return null;let c=o*this.direction.dot(ra.cross(Pn));if(c<0||l+c>a)return null;let h=-o*Pn.dot(aa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,m,A,C,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,m,A,C,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,m,A,C,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=A,f[11]=C,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,m=a*u,A=o*h,C=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+A*c,e[5]=d-C*c,e[9]=-o*l,e[2]=C-d*c,e[6]=A+m*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,A=c*h,C=c*u;e[0]=d+C*o,e[4]=A*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-A,e[6]=C+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,A=c*h,C=c*u;e[0]=d-C*o,e[4]=-a*u,e[8]=A+m*o,e[1]=m+A*o,e[5]=a*h,e[9]=C-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,m=a*u,A=o*h,C=o*u;e[0]=l*h,e[4]=A*c-m,e[8]=d*c+C,e[1]=l*u,e[5]=C*c+d,e[9]=m*c-A,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,m=a*c,A=o*l,C=o*c;e[0]=l*h,e[4]=C-d*u,e[8]=A*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+A,e[10]=d-C*u}else if(t.order==="XZY"){let d=a*l,m=a*c,A=o*l,C=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+C,e[5]=a*h,e[9]=m*u-A,e[2]=A*u-m,e[6]=o*h,e[10]=C*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nu,t,Fu)}lookAt(t,e,n){let s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),qn.crossVectors(n,ke),qn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),qn.crossVectors(n,ke)),qn.normalize(),Ds.crossVectors(ke,qn),s[0]=qn.x,s[4]=Ds.x,s[8]=ke.x,s[1]=qn.y,s[5]=Ds.y,s[9]=ke.y,s[2]=qn.z,s[6]=Ds.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],A=n[2],C=n[6],g=n[10],f=n[14],E=n[3],x=n[7],p=n[11],b=n[15],M=s[0],T=s[4],R=s[8],I=s[12],y=s[1],w=s[5],O=s[9],N=s[13],H=s[2],Z=s[6],G=s[10],j=s[14],k=s[3],nt=s[7],ct=s[11],_t=s[15];return r[0]=a*M+o*y+l*H+c*k,r[4]=a*T+o*w+l*Z+c*nt,r[8]=a*R+o*O+l*G+c*ct,r[12]=a*I+o*N+l*j+c*_t,r[1]=h*M+u*y+d*H+m*k,r[5]=h*T+u*w+d*Z+m*nt,r[9]=h*R+u*O+d*G+m*ct,r[13]=h*I+u*N+d*j+m*_t,r[2]=A*M+C*y+g*H+f*k,r[6]=A*T+C*w+g*Z+f*nt,r[10]=A*R+C*O+g*G+f*ct,r[14]=A*I+C*N+g*j+f*_t,r[3]=E*M+x*y+p*H+b*k,r[7]=E*T+x*w+p*Z+b*nt,r[11]=E*R+x*O+p*G+b*ct,r[15]=E*I+x*N+p*j+b*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],A=t[3],C=t[7],g=t[11],f=t[15];return A*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+C*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+g*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],A=t[12],C=t[13],g=t[14],f=t[15],E=u*g*c-C*d*c+C*l*m-o*g*m-u*l*f+o*d*f,x=A*d*c-h*g*c-A*l*m+a*g*m+h*l*f-a*d*f,p=h*C*c-A*u*c+A*o*m-a*C*m-h*o*f+a*u*f,b=A*u*l-h*C*l-A*o*d+a*C*d+h*o*g-a*u*g,M=e*E+n*x+s*p+r*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return t[0]=E*T,t[1]=(C*d*r-u*g*r-C*s*m+n*g*m+u*s*f-n*d*f)*T,t[2]=(o*g*r-C*l*r+C*s*c-n*g*c-o*s*f+n*l*f)*T,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*T,t[4]=x*T,t[5]=(h*g*r-A*d*r+A*s*m-e*g*m-h*s*f+e*d*f)*T,t[6]=(A*l*r-a*g*r-A*s*c+e*g*c+a*s*f-e*l*f)*T,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*T,t[8]=p*T,t[9]=(A*u*r-h*C*r-A*n*m+e*C*m+h*n*f-e*u*f)*T,t[10]=(a*C*r-A*o*r+A*n*c-e*C*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*T,t[12]=b*T,t[13]=(h*C*s-A*u*s+A*n*d-e*C*d-h*n*g+e*u*g)*T,t[14]=(A*o*s-a*C*s-A*n*l+e*C*l+a*n*g-e*o*g)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,A=r*u,C=a*h,g=a*u,f=o*u,E=l*c,x=l*h,p=l*u,b=n.x,M=n.y,T=n.z;return s[0]=(1-(C+f))*b,s[1]=(m+p)*b,s[2]=(A-x)*b,s[3]=0,s[4]=(m-p)*M,s[5]=(1-(d+f))*M,s[6]=(g+E)*M,s[7]=0,s[8]=(A+x)*T,s[9]=(g-E)*T,s[10]=(1-(d+C))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=mi.set(s[0],s[1],s[2]).length(),a=mi.set(s[4],s[5],s[6]).length(),o=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let c=1/r,h=1/a,u=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=In){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,A;if(o===In)m=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===ar)m=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,m=(n+s)*h,A,C;if(o===In)A=(a+r)*u,C=-2*u;else if(o===ar)A=r*u,C=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=C,l[14]=-A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},mi=new q,je=new ae,Nu=new q(0,0,0),Fu=new q(1,1,1),qn=new q,Ds=new q,ke=new q,Wl=new ae,Xl=new kn,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bu=0,Yl=new q,Ai=new kn,xn=new ae,Ls=new q,is=new q,Ou=new q,ku=new kn,Kl=new q(1,0,0),Zl=new q(0,1,0),Ql=new q(0,0,1),Jl={type:"added"},zu={type:"removed"},xi={type:"childadded",child:null},oa={type:"childremoved",child:null},be=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new fn,n=new kn,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ut}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis(Ql,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis(Ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(is,Ls,this.up):xn.lookAt(Ls,is,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(xn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jl),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zu),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jl),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,Ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),A=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),A.length>0&&(n.nodes=A)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new q(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=new q,Cn=new q,la=new q,vn=new q,Ci=new q,vi=new q,jl=new q,ca=new q,ha=new q,ua=new q,da=new jt,fa=new jt,pa=new jt,Vn=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),Cn.subVectors(n,e),la.subVectors(t,e);let a=$e.dot($e),o=$e.dot(Cn),l=$e.dot(la),c=Cn.dot(Cn),h=Cn.dot(la),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,A=(a*h-o*l)*d;return r.set(1-m-A,A,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),pa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(da,r.x),a.addScaledVector(fa,r.y),a.addScaledVector(pa,r.z),a}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),Cn.subVectors(t,e),$e.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),$e.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ci.subVectors(s,n),vi.subVectors(r,n),ca.subVectors(t,n);let l=Ci.dot(ca),c=vi.dot(ca);if(l<=0&&c<=0)return e.copy(n);ha.subVectors(t,s);let h=Ci.dot(ha),u=vi.dot(ha);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ci,a);ua.subVectors(t,r);let m=Ci.dot(ua),A=vi.dot(ua);if(A>=0&&m<=A)return e.copy(r);let C=m*c-l*A;if(C<=0&&c>=0&&A<=0)return o=c/(c-A),e.copy(n).addScaledVector(vi,o);let g=h*A-m*u;if(g<=0&&u-h>=0&&m-A>=0)return jl.subVectors(r,s),o=(u-h)/(u-h+(m-A)),e.copy(s).addScaledVector(jl,o);let f=1/(g+C+d);return a=C*f,o=d*f,e.copy(n).addScaledVector(Ci,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ot.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ot.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ot.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ot.workingColorSpace){if(t=wu(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ga(a,r,t+1/3),this.g=ga(a,r,t),this.b=ga(a,r,t-1/3)}return Ot.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return Ot.fromWorkingColorSpace(Te.copy(this),t),Math.round(Ue(Te.r*255,0,255))*65536+Math.round(Ue(Te.g*255,0,255))*256+Math.round(Ue(Te.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=_e){Ot.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Us);let n=jr(Dn.h,Us.h,e),s=jr(Dn.s,Us.s,e),r=jr(Dn.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Rt;Rt.NAMES=$c;var Hu=0,Sn=class extends On{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Fn(),this.name="",this.blending=Ri,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=wa,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ge=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new q,Vs=new At,Me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=po,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==po&&(t.usage=this.usage),t}};var hr=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ur=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gu=0,Ke=new ae,ma=new be,yi=new q,ze=new ii,ss=new ii,ye=new q,me=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?ur:hr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ze.min,ss.min),ze.expandByPoint(ye),ye.addVectors(ze.max,ss.max),ze.expandByPoint(ye)):(ze.expandByPoint(ss.min),ze.expandByPoint(ss.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(t,c),ye.add(yi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new q,l[R]=new q;let c=new q,h=new q,u=new q,d=new At,m=new At,A=new At,C=new q,g=new q;function f(R,I,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,I),A.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(d),A.sub(d);let w=1/(m.x*A.y-A.x*m.y);isFinite(w)&&(C.copy(h).multiplyScalar(A.y).addScaledVector(u,-m.y).multiplyScalar(w),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-A.x).multiplyScalar(w),o[R].add(C),o[I].add(C),o[y].add(C),l[R].add(g),l[I].add(g),l[y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,I=E.length;R<I;++R){let y=E[R],w=y.start,O=y.count;for(let N=w,H=w+O;N<H;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let x=new q,p=new q,b=new q,M=new q;function T(R){b.fromBufferAttribute(s,R),M.copy(b);let I=o[R];x.copy(I),x.sub(b.multiplyScalar(b.dot(I))).normalize(),p.crossVectors(M,I);let w=p.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,w)}for(let R=0,I=E.length;R<I;++R){let y=E[R],w=y.start,O=y.count;for(let N=w,H=w+O;N<H;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new q,r=new q,a=new q,o=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let d=0,m=t.count;d<m;d+=3){let A=t.getX(d+0),C=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,A),r.fromBufferAttribute(e,C),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,C),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(A,o.x,o.y,o.z),n.setXYZ(C,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,A=0;for(let C=0,g=l.length;C<g;C++){o.isInterleavedBufferAttribute?m=l[C]*o.data.stride+o.offset:m=l[C]*h;for(let f=0;f<h;f++)d[A++]=c[m++]}return new Me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$l=new ae,Yn=new ps,Ns=new Bi,tc=new q,Fs=new q,Bs=new q,Os=new q,Aa=new q,ks=new q,ec=new q,zs=new q,he=class extends be{constructor(t=new me,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Aa.fromBufferAttribute(u,t),a?ks.addScaledVector(Aa,h):ks.addScaledVector(Aa.sub(e),h))}e.add(ks)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Ns,tc)===null||Yn.origin.distanceToSquared(tc)>(t.far-t.near)**2))&&($l.copy(r).invert(),Yn.copy(t.ray).applyMatrix4($l),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let A=0,C=d.length;A<C;A++){let g=d[A],f=a[g.materialIndex],E=Math.max(g.start,m.start),x=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let p=E,b=x;p<b;p+=3){let M=o.getX(p),T=o.getX(p+1),R=o.getX(p+2);s=Hs(this,f,t,n,c,h,u,M,T,R),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let A=Math.max(0,m.start),C=Math.min(o.count,m.start+m.count);for(let g=A,f=C;g<f;g+=3){let E=o.getX(g),x=o.getX(g+1),p=o.getX(g+2);s=Hs(this,a,t,n,c,h,u,E,x,p),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let A=0,C=d.length;A<C;A++){let g=d[A],f=a[g.materialIndex],E=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let p=E,b=x;p<b;p+=3){let M=p,T=p+1,R=p+2;s=Hs(this,f,t,n,c,h,u,M,T,R),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let A=Math.max(0,m.start),C=Math.min(l.count,m.start+m.count);for(let g=A,f=C;g<f;g+=3){let E=g,x=g+1,p=g+2;s=Hs(this,a,t,n,c,h,u,E,x,p),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Wu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Bn,o),l===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zs);return c<e.near||c>e.far?null:{distance:c,point:zs.clone(),object:i}}function Hs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Fs),i.getVertexPosition(l,Bs),i.getVertexPosition(c,Os);let h=Wu(i,t,e,n,Fs,Bs,Os,ec);if(h){let u=new q;Vn.getBarycoord(ec,Fs,Bs,Os,u),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,u,new At)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,u,new At)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new q,materialIndex:0};Vn.getNormal(Fs,Bs,Os,d.normal),h.face=d,h.barycoord=u}return h}var si=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;A("z","y","x",-1,-1,n,e,t,a,r,0),A("z","y","x",1,-1,n,e,-t,a,r,1),A("x","z","y",1,1,t,n,e,s,a,2),A("x","z","y",1,-1,t,n,-e,s,a,3),A("x","y","z",1,-1,t,e,n,s,r,4),A("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function A(C,g,f,E,x,p,b,M,T,R,I){let y=p/T,w=b/R,O=p/2,N=b/2,H=M/2,Z=T+1,G=R+1,j=0,k=0,nt=new q;for(let ct=0;ct<G;ct++){let _t=ct*w-N;for(let Ft=0;Ft<Z;Ft++){let $t=Ft*y-O;nt[C]=$t*E,nt[g]=_t*x,nt[f]=H,c.push(nt.x,nt.y,nt.z),nt[C]=0,nt[g]=0,nt[f]=M>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Ft/T),u.push(1-ct/R),j+=1}}for(let ct=0;ct<R;ct++)for(let _t=0;_t<T;_t++){let Ft=d+_t+Z*ct,$t=d+_t+Z*(ct+1),X=d+(_t+1)+Z*(ct+1),tt=d+(_t+1)+Z*ct;l.push(Ft,$t,tt),l.push($t,X,tt),k+=6}o.addGroup(m,k,I),m+=k,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let s in n)t[s]=n[s]}return t}function Xu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ot.workingColorSpace}var zn={clone:Oi,merge:Pe},Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends Sn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Xu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},dr=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ln=new q,nc=new At,ic=new At,we=class extends dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,nc,ic),e.subVectors(ic,nc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_i=-90,Ii=1,Co=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(_i,Ii,t,e);s.layers=this.layers,this.add(s);let r=new we(_i,Ii,t,e);r.layers=this.layers,this.add(r);let a=new we(_i,Ii,t,e);a.layers=this.layers,this.add(a);let o=new we(_i,Ii,t,e);o.layers=this.layers,this.add(o);let l=new we(_i,Ii,t,e);l.layers=this.layers,this.add(l);let c=new we(_i,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;let C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=C,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=A,n.texture.needsPMREMUpdate=!0}},fr=class extends He{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vo=class extends De{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new si(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:dn});r.uniforms.tEquirect.value=e;let a=new he(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=un),new Co(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},xa=new q,Zu=new q,Qu=new Ut,tn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xa.subVectors(n,e).cross(Zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qu.getNormalMatrix(t),s=this.coplanarPoint(xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new Bi,Gs=new q,ms=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,a=new tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],A=s[9],C=s[10],g=s[11],f=s[12],E=s[13],x=s[14],p=s[15];if(n[0].setComponents(l-r,d-c,g-m,p-f).normalize(),n[1].setComponents(l+r,d+c,g+m,p+f).normalize(),n[2].setComponents(l+a,d+h,g+A,p+E).normalize(),n[3].setComponents(l-a,d-h,g-A,p-E).normalize(),n[4].setComponents(l-o,d-u,g-C,p-x).normalize(),e===In)n[5].setComponents(l+o,d+u,g+C,p+x).normalize();else if(e===ar)n[5].setComponents(o,u,C,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ju(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,A)=>m.start-A.start);let d=0;for(let m=1;m<u.length;m++){let A=u[d],C=u[m];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++d,u[d]=C)}u.length=d+1;for(let m=0,A=u.length;m<A;m++){let C=u[m];i.bufferSubData(c,C.start*h.BYTES_PER_ELEMENT,h,C.start,C.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ki=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,m=[],A=[],C=[],g=[];for(let f=0;f<h;f++){let E=f*d-a;for(let x=0;x<c;x++){let p=x*u-r;A.push(p,-E,0),C.push(0,0,1),g.push(x/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let x=E+c*f,p=E+c*(f+1),b=E+1+c*(f+1),M=E+1+c*f;m.push(x,p,M),m.push(p,b,M)}this.setIndex(m),this.setAttribute("position",new oe(A,3)),this.setAttribute("normal",new oe(C,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
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
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
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
#endif`,dd=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Id=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,Jd=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lf=`#if defined( USE_POINTS_UV )
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
#endif`,cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nf=`float getShadowMask() {
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
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
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
}`,rp=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,gp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,Ap=`#define MATCAP
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
}`,xp=`#define NORMAL
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
}`,Cp=`#define NORMAL
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
}`,vp=`#define PHONG
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
}`,yp=`#define PHONG
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
}`,_p=`#define STANDARD
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
}`,Ip=`#define STANDARD
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
}`,Mp=`#define TOON
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
}`,bp=`#define TOON
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
}`,Sp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,wp=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:ju,alphahash_pars_fragment:$u,alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:ad,batching_vertex:od,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:gd,clipping_planes_vertex:md,color_fragment:Ad,color_pars_fragment:xd,color_pars_vertex:Cd,color_vertex:vd,common:yd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:Id,displacementmap_pars_vertex:Md,displacementmap_vertex:bd,emissivemap_fragment:Sd,emissivemap_pars_fragment:Ed,colorspace_fragment:Td,colorspace_pars_fragment:wd,envmap_fragment:Rd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:qd,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Gd,envmap_vertex:Ld,fog_vertex:Ud,fog_pars_vertex:Vd,fog_fragment:Nd,fog_pars_fragment:Fd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:Od,lights_lambert_fragment:kd,lights_lambert_pars_fragment:zd,lights_pars_begin:Hd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:Yd,lights_phong_pars_fragment:Kd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Qd,lights_fragment_begin:Jd,lights_fragment_maps:jd,lights_fragment_end:$d,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:sf,map_fragment:rf,map_pars_fragment:af,map_particle_fragment:of,map_particle_pars_fragment:lf,metalnessmap_fragment:cf,metalnessmap_pars_fragment:hf,morphinstance_vertex:uf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:gf,normal_fragment_begin:mf,normal_fragment_maps:Af,normal_pars_fragment:xf,normal_pars_vertex:Cf,normal_vertex:vf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:bf,opaque_fragment:Sf,packing:Ef,premultiplied_alpha_fragment:Tf,project_vertex:wf,dithering_fragment:Rf,dithering_pars_fragment:Pf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Nf,skinbase_vertex:Ff,skinning_pars_vertex:Bf,skinning_vertex:Of,skinnormal_vertex:kf,specularmap_fragment:zf,specularmap_pars_fragment:Hf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:Yf,uv_pars_fragment:Kf,uv_pars_vertex:Zf,uv_vertex:Qf,worldpos_vertex:Jf,background_vert:jf,background_frag:$f,backgroundCube_vert:tp,backgroundCube_frag:ep,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:rp,distanceRGBA_vert:ap,distanceRGBA_frag:op,equirect_vert:lp,equirect_frag:cp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:gp,meshmatcap_vert:mp,meshmatcap_frag:Ap,meshnormal_vert:xp,meshnormal_frag:Cp,meshphong_vert:vp,meshphong_frag:yp,meshphysical_vert:_p,meshphysical_frag:Ip,meshtoon_vert:Mp,meshtoon_frag:bp,points_vert:Sp,points_frag:Ep,shadow_vert:Tp,shadow_frag:wp,sprite_vert:Rp,sprite_frag:Pp},et={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},cn={basic:{uniforms:Pe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Pe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Pe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Pe([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Pe([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Pe([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Pe([et.points,et.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Pe([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Pe([et.common,et.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Pe([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Pe([et.sprite,et.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Pe([et.common,et.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Pe([et.lights,et.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};cn.physical={uniforms:Pe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Ws={r:0,b:0,g:0},Zn=new fn,qp=new ae;function Dp(i,t,e,n,s,r,a){let o=new Rt(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function A(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function C(E){let x=!1,p=A(E);p===null?f(o,l):p&&p.isColor&&(f(p,1),x=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,x){let p=A(x);p&&(p.isCubeTexture||p.mapping===Tr)?(h===void 0&&(h=new he(new si(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Oi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zn.copy(x.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=p,h.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Zn)),h.material.toneMapped=Ot.getTransfer(p.colorSpace)!==Zt,(u!==p||d!==p.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=p,d=p.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new he(new ki(2,2),new Ae({name:"BackgroundMaterial",uniforms:Oi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ot.getTransfer(p.colorSpace)!==Zt,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(u!==p||d!==p.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=p,d=p.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,x){E.getRGB(Ws,th(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:C,addToRenderList:g}}function Lp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,w,O,N,H){let Z=!1,G=u(N,O,w);r!==G&&(r=G,c(r.object)),Z=m(y,N,O,H),Z&&A(y,N,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,p(y,w,O,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,w,O){let N=O.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[w.id];Z===void 0&&(Z={},H[w.id]=Z);let G=Z[N];return G===void 0&&(G=d(l()),Z[N]=G),G}function d(y){let w=[],O=[],N=[];for(let H=0;H<e;H++)w[H]=0,O[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:N,object:y,attributes:{},index:null}}function m(y,w,O,N){let H=r.attributes,Z=w.attributes,G=0,j=O.getAttributes();for(let k in j)if(j[k].location>=0){let ct=H[k],_t=Z[k];if(_t===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),ct===void 0||ct.attribute!==_t||_t&&ct.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function A(y,w,O,N){let H={},Z=w.attributes,G=0,j=O.getAttributes();for(let k in j)if(j[k].location>=0){let ct=Z[k];ct===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor));let _t={};_t.attribute=ct,ct&&ct.data&&(_t.data=ct.data),H[k]=_t,G++}r.attributes=H,r.attributesNum=G,r.index=N}function C(){let y=r.newAttributes;for(let w=0,O=y.length;w<O;w++)y[w]=0}function g(y){f(y,0)}function f(y,w){let O=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;O[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),H[y]!==w&&(i.vertexAttribDivisor(y,w),H[y]=w)}function E(){let y=r.newAttributes,w=r.enabledAttributes;for(let O=0,N=w.length;O<N;O++)w[O]!==y[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function x(y,w,O,N,H,Z,G){G===!0?i.vertexAttribIPointer(y,w,O,H,Z):i.vertexAttribPointer(y,w,O,N,H,Z)}function p(y,w,O,N){C();let H=N.attributes,Z=O.getAttributes(),G=w.defaultAttributeValues;for(let j in Z){let k=Z[j];if(k.location>=0){let nt=H[j];if(nt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){let ct=nt.normalized,_t=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;let $t=Ft.buffer,X=Ft.type,tt=Ft.bytesPerElement,mt=X===i.INT||X===i.UNSIGNED_INT||nt.gpuType===el;if(nt.isInterleavedBufferAttribute){let st=nt.data,Et=st.stride,qt=nt.offset;if(st.isInstancedInterleavedBuffer){for(let Bt=0;Bt<k.locationSize;Bt++)f(k.location+Bt,st.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Bt=0;Bt<k.locationSize;Bt++)g(k.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Bt=0;Bt<k.locationSize;Bt++)x(k.location+Bt,_t/k.locationSize,X,ct,Et*tt,(qt+_t/k.locationSize*Bt)*tt,mt)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)f(k.location+st,nt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<k.locationSize;st++)g(k.location+st);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let st=0;st<k.locationSize;st++)x(k.location+st,_t/k.locationSize,X,ct,_t*tt,_t/k.locationSize*st*tt,mt)}}else if(G!==void 0){let ct=G[j];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(k.location,ct);break;case 3:i.vertexAttrib3fv(k.location,ct);break;case 4:i.vertexAttrib4fv(k.location,ct);break;default:i.vertexAttrib1fv(k.location,ct)}}}}E()}function b(){R();for(let y in n){let w=n[y];for(let O in w){let N=w[O];for(let H in N)h(N[H].object),delete N[H];delete w[O]}delete n[y]}}function M(y){if(n[y.id]===void 0)return;let w=n[y.id];for(let O in w){let N=w[O];for(let H in N)h(N[H].object),delete N[H];delete w[O]}delete n[y.id]}function T(y){for(let w in n){let O=n[w];if(O[y.id]===void 0)continue;let N=O[y.id];for(let H in N)h(N[H].object),delete N[H];delete O[y.id]}}function R(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:C,enableAttribute:g,disableUnusedAttributes:E}}function Up(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let A=0;A<c.length;A++)a(c[A],h[A],d[A]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let A=0;for(let C=0;C<u;C++)A+=h[C]*d[C];e.update(A,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==en&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==_n&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=A>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:p,vertexTextures:b,maxSamples:M}}function Np(i){let t=this,e=null,n=0,s=!1,r=!1,a=new tn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let A=u.clippingPlanes,C=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||A===null||A.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,x=E*4,p=f.clippingState||null;l.value=p,p=h(A,d,x,m);for(let b=0;b!==x;++b)p[b]=e[b];f.clippingState=p,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,A){let C=u!==null?u.length:0,g=null;if(C!==0){if(g=l.value,A!==!0||g===null){let f=m+C*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,p=m;x!==C;++x,p+=4)a.copy(u[x]).applyMatrix4(E,o),a.normal.toArray(g,p),g[p+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,g}}function Fp(i){let t=new WeakMap;function e(a,o){return o===Na?a.mapping=Ui:o===Fa&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Na||o===Fa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new vo(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zi=class extends dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wi=4,sc=[.125,.215,.35,.446,.526,.582],$n=20,Ca=new zi,rc=new Rt,va=null,ya=0,_a=0,Ia=!1,Jn=(1+Math.sqrt(5))/2,Mi=1/Jn,ac=[new q(-Jn,Mi,0),new q(Jn,Mi,0),new q(-Mi,0,Jn),new q(Mi,0,Jn),new q(0,Jn,-Mi),new q(0,Jn,Mi),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,ya,_a),this._renderer.xr.enabled=Ia,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:rn,format:en,colorSpace:Ki,depthBuffer:!1},s=oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){let e=new he(this._lodPlanes[0],t);this._renderer.compile(e,Ca)}_sceneToCubeUV(t,e,n,s){let o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rc),h.toneMapping=Nn,h.autoClear=!1;let m=new ge({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),A=new he(new si,m),C=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,C=!0):(m.color.copy(rc),C=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let x=this._cubeSize;Xs(s,E*x,f>2?x:0,x,x),h.setRenderTarget(s),C&&h.render(A,o),h.render(t,o)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ui||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new he(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ca)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ac[(s-r-1)%ac.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new he(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*$n-1),C=r/A,g=isFinite(r)?1+Math.floor(h*C):$n;g>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$n}`);let f=[],E=0;for(let T=0;T<$n;++T){let R=T/C,I=Math.exp(-R*R/2);f.push(I),T===0?E+=I:T<g&&(E+=2*I)}for(let T=0;T<f.length;T++)f[T]=f[T]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=A,d.mipInt.value=x-n;let p=this._sizeLods[s],b=3*p*(s>x-wi?s-x+wi:0),M=4*(this._cubeSize-p);Xs(e,b,M,3*p,2*p),l.setRenderTarget(e),l.render(u,Ca)}};function Bp(i){let t=[],e=[],n=[],s=i,r=i-wi+1+sc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-wi?l=sc[a-i+wi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,A=6,C=3,g=2,f=1,E=new Float32Array(C*A*m),x=new Float32Array(g*A*m),p=new Float32Array(f*A*m);for(let M=0;M<m;M++){let T=M%3*2/3-1,R=M>2?0:-1,I=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];E.set(I,C*A*M),x.set(d,g*A*M);let y=[M,M,M,M,M,M];p.set(y,f*A*M)}let b=new me;b.setAttribute("position",new Me(E,C)),b.setAttribute("uv",new Me(x,g)),b.setAttribute("faceIndex",new Me(p,f)),t.push(b),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oc(i,t,e){let n=new De(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){let n=new Float32Array($n),s=new q(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function lc(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function cc(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function kp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Na||l===Fa,h=l===Ui||l===Vi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new pr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new pr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function zp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hp(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let A in d.attributes)t.remove(d.attributes[A]);for(let A in d.morphAttributes){let C=d.morphAttributes[A];for(let g=0,f=C.length;g<f;g++)t.remove(C[g])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let A in d)t.update(d[A],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let A in m){let C=m[A];for(let g=0,f=C.length;g<f;g++)t.update(C[g],i.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,A=u.attributes.position,C=0;if(m!==null){let E=m.array;C=m.version;for(let x=0,p=E.length;x<p;x+=3){let b=E[x+0],M=E[x+1],T=E[x+2];d.push(b,M,M,T,T,b)}}else if(A!==void 0){let E=A.array;C=A.version;for(let x=0,p=E.length/3-1;x<p;x+=3){let b=x+0,M=x+1,T=x+2;d.push(b,M,M,T,T,b)}}else return;let g=new(jc(d)?ur:hr)(d,1);g.version=C;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,A){A!==0&&(i.drawElementsInstanced(n,m,r,d*a,A),e.update(m,n,A))}function h(d,m,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,A);let g=0;for(let f=0;f<A;f++)g+=m[f];e.update(g,n,1)}function u(d,m,A,C){if(A===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],C[f]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,C,0,A);let f=0;for(let E=0;E<A;E++)f+=m[E]*C[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xp(i,t,e){let n=new WeakMap,s=new jt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,C=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],x=0;m===!0&&(x=1),A===!0&&(x=2),C===!0&&(x=3);let p=o.attributes.position.count*x,b=1;p>t.maxTextureSize&&(b=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let M=new Float32Array(p*b*4*u),T=new cr(M,p,b,u);T.type=_n,T.needsUpdate=!0;let R=x*4;for(let y=0;y<u;y++){let w=g[y],O=f[y],N=E[y],H=p*b*4*y;for(let Z=0;Z<w.count;Z++){let G=Z*R;m===!0&&(s.fromBufferAttribute(w,Z),M[H+G+0]=s.x,M[H+G+1]=s.y,M[H+G+2]=s.z,M[H+G+3]=0),A===!0&&(s.fromBufferAttribute(O,Z),M[H+G+4]=s.x,M[H+G+5]=s.y,M[H+G+6]=s.z,M[H+G+7]=0),C===!0&&(s.fromBufferAttribute(N,Z),M[H+G+8]=s.x,M[H+G+9]=s.y,M[H+G+10]=s.z,M[H+G+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new At(p,b)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let C=0;C<c.length;C++)m+=c[C];let A=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",A),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Yp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var gr=class extends He{constructor(t,e,n,s,r,a,o,l,c,h=Pi){if(h!==Pi&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=ni),n===void 0&&h===Fi&&(n=Ni),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nh=new He,hc=new gr(1,1),ih=new cr,sh=new xo,rh=new fr,uc=[],dc=[],fc=new Float32Array(16),pc=new Float32Array(9),gc=new Float32Array(4);function Zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=uc[s];if(r===void 0&&(r=new Float32Array(s),uc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=dc[t];e===void 0&&(e=new Int32Array(t),dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function jp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;gc.set(n),i.uniformMatrix2fv(this.addr,!1,gc),Ce(e,n)}}function $p(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),Ce(e,n)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;fc.set(n),i.uniformMatrix4fv(this.addr,!1,fc),Ce(e,n)}}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=Jc,r=hc):r=nh,e.setTexture2D(t||r,s)}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sh,s)}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rh,s)}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ih,s)}function fg(i){switch(i){case 5126:return Kp;case 35664:return Zp;case 35665:return Qp;case 35666:return Jp;case 35674:return jp;case 35675:return $p;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(i,t){i.uniform1fv(this.addr,t)}function gg(i,t){let e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function mg(i,t){let e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){let e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function xg(i,t){let e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){let e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vg(i,t){let e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function Ig(i,t){i.uniform3iv(this.addr,t)}function Mg(i,t){i.uniform4iv(this.addr,t)}function bg(i,t){i.uniform1uiv(this.addr,t)}function Sg(i,t){i.uniform2uiv(this.addr,t)}function Eg(i,t){i.uniform3uiv(this.addr,t)}function Tg(i,t){i.uniform4uiv(this.addr,t)}function wg(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nh,r[a])}function Rg(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sh,r[a])}function Pg(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rh,r[a])}function qg(i,t,e){let n=this.cache,s=t.length,r=Rr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ih,r[a])}function Dg(i){switch(i){case 5126:return pg;case 35664:return gg;case 35665:return mg;case 35666:return Ag;case 35674:return xg;case 35675:return Cg;case 35676:return vg;case 5124:case 35670:return yg;case 35667:case 35671:return _g;case 35668:case 35672:return Ig;case 35669:case 35673:return Mg;case 5125:return bg;case 36294:return Sg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return qg}}var yo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}},_o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}},Io=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ma=/(\w+)(\])?(\[|\.)?/g;function mc(i,t){i.seq.push(t),i.map[t.id]=t}function Lg(i,t,e){let n=i.name,s=n.length;for(Ma.lastIndex=0;;){let r=Ma.exec(n),a=Ma.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mc(e,c===void 0?new yo(o,i,t):new _o(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Io(o),mc(e,u)),e=u}}}var Di=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Lg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ac(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ug=37297,Vg=0;function Ng(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var xc=new Ut;function Fg(i){Ot._getMatrix(xc,Ot.workingColorSpace,i);let t=`mat3( ${xc.elements.map(e=>e.toFixed(4))} )`;switch(Ot.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ng(i.getShaderSource(t),a)}else return s}function Bg(i,t){let e=Fg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Og(i,t){let e;switch(t){case Zo:e="Linear";break;case Qo:e="Reinhard";break;case Jo:e="Cineon";break;case jo:e="ACESFilmic";break;case $o:e="AgX";break;case tl:e="Neutral";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ys=new q;function kg(){Ot.getLuminanceCoefficients(Ys);let i=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Hg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hs(i){return i!==""}function vc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(i){return i.replace(Wg,Yg)}var Xg=new Map;function Yg(i,t){let e=Nt[t];if(e===void 0){let n=Xg.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mo(e)}var Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(i){return i.replace(Kg,Zg)}function Zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Vi:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function $g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ko:t="ENVMAP_BLENDING_MULTIPLY";break;case gu:t="ENVMAP_BLENDING_MIX";break;case mu:t="ENVMAP_BLENDING_ADD";break}return t}function tm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function em(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Qg(e),c=Jg(e),h=jg(e),u=$g(e),d=tm(e),m=zg(e),A=Hg(r),C=s.createProgram(),g,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(hs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(g=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=Mo(a),a=vc(a,e),a=yc(a,e),o=Mo(o),o=vc(o,e),o=yc(o,e),a=_c(a),o=_c(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=E+g+a,p=E+f+o,b=Ac(s,s.VERTEX_SHADER,x),M=Ac(s,s.FRAGMENT_SHADER,p);s.attachShader(C,b),s.attachShader(C,M),e.index0AttributeName!==void 0?s.bindAttribLocation(C,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function T(w){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(C).trim(),N=s.getShaderInfoLog(b).trim(),H=s.getShaderInfoLog(M).trim(),Z=!0,G=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,C,b,M);else{let j=Cc(s,b,"vertex"),k=Cc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+j+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||H==="")&&(G=!1);G&&(w.diagnostics={runnable:Z,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(b),s.deleteShader(M),R=new Di(s,C),I=Gg(s,C)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(C,Ug)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=b,this.fragmentShader=M,this}var nm=0,bo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new So(t),e.set(t,n)),n}},So=class{constructor(t){this.id=nm++,this.code=t,this.usedTimes=0}};function im(i,t,e,n,s,r,a){let o=new gs,l=new bo,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(I){return c.add(I),I===0?"uv":`uv${I}`}function g(I,y,w,O,N){let H=O.fog,Z=N.geometry,G=I.isMeshStandardMaterial?O.environment:null,j=(I.isMeshStandardMaterial?e:t).get(I.envMap||G),k=j&&j.mapping===Tr?j.image.height:null,nt=A[I.type];I.precision!==null&&(m=s.getMaxPrecision(I.precision),m!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",m,"instead."));let ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_t=ct!==void 0?ct.length:0,Ft=0;Z.morphAttributes.position!==void 0&&(Ft=1),Z.morphAttributes.normal!==void 0&&(Ft=2),Z.morphAttributes.color!==void 0&&(Ft=3);let $t,X,tt,mt;if(nt){let Qt=cn[nt];$t=Qt.vertexShader,X=Qt.fragmentShader}else $t=I.vertexShader,X=I.fragmentShader,l.update(I),tt=l.getVertexShaderID(I),mt=l.getFragmentShaderID(I);let st=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),qt=N.isInstancedMesh===!0,Bt=N.isBatchedMesh===!0,ue=!!I.map,Gt=!!I.matcap,fe=!!j,U=!!I.aoMap,Xe=!!I.lightMap,kt=!!I.bumpMap,zt=!!I.normalMap,bt=!!I.displacementMap,ie=!!I.emissiveMap,Mt=!!I.metalnessMap,S=!!I.roughnessMap,v=I.anisotropy>0,V=I.clearcoat>0,Y=I.dispersion>0,Q=I.iridescence>0,W=I.sheen>0,Ct=I.transmission>0,rt=v&&!!I.anisotropyMap,ht=V&&!!I.clearcoatMap,Wt=V&&!!I.clearcoatNormalMap,J=V&&!!I.clearcoatRoughnessMap,ut=Q&&!!I.iridescenceMap,St=Q&&!!I.iridescenceThicknessMap,wt=W&&!!I.sheenColorMap,dt=W&&!!I.sheenRoughnessMap,Ht=!!I.specularMap,Vt=!!I.specularColorMap,ee=!!I.specularIntensityMap,P=Ct&&!!I.transmissionMap,it=Ct&&!!I.thicknessMap,z=!!I.gradientMap,K=!!I.alphaMap,lt=I.alphaTest>0,at=!!I.alphaHash,Dt=!!I.extensions,de=Nn;I.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(de=i.toneMapping);let Se={shaderID:nt,shaderType:I.type,shaderName:I.name,vertexShader:$t,fragmentShader:X,defines:I.defines,customVertexShaderID:tt,customFragmentShaderID:mt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:m,batching:Bt,batchingColor:Bt&&N._colorsTexture!==null,instancing:qt,instancingColor:qt&&N.instanceColor!==null,instancingMorph:qt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ki,alphaToCoverage:!!I.alphaToCoverage,map:ue,matcap:Gt,envMap:fe,envMapMode:fe&&j.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:Xe,bumpMap:kt,normalMap:zt,displacementMap:d&&bt,emissiveMap:ie,normalMapObjectSpace:zt&&I.normalMapType===yu,normalMapTangentSpace:zt&&I.normalMapType===Qc,metalnessMap:Mt,roughnessMap:S,anisotropy:v,anisotropyMap:rt,clearcoat:V,clearcoatMap:ht,clearcoatNormalMap:Wt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:Q,iridescenceMap:ut,iridescenceThicknessMap:St,sheen:W,sheenColorMap:wt,sheenRoughnessMap:dt,specularMap:Ht,specularColorMap:Vt,specularIntensityMap:ee,transmission:Ct,transmissionMap:P,thicknessMap:it,gradientMap:z,opaque:I.transparent===!1&&I.blending===Ri&&I.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:at,combine:I.combine,mapUv:ue&&C(I.map.channel),aoMapUv:U&&C(I.aoMap.channel),lightMapUv:Xe&&C(I.lightMap.channel),bumpMapUv:kt&&C(I.bumpMap.channel),normalMapUv:zt&&C(I.normalMap.channel),displacementMapUv:bt&&C(I.displacementMap.channel),emissiveMapUv:ie&&C(I.emissiveMap.channel),metalnessMapUv:Mt&&C(I.metalnessMap.channel),roughnessMapUv:S&&C(I.roughnessMap.channel),anisotropyMapUv:rt&&C(I.anisotropyMap.channel),clearcoatMapUv:ht&&C(I.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&C(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&C(I.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&C(I.iridescenceMap.channel),iridescenceThicknessMapUv:St&&C(I.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&C(I.sheenColorMap.channel),sheenRoughnessMapUv:dt&&C(I.sheenRoughnessMap.channel),specularMapUv:Ht&&C(I.specularMap.channel),specularColorMapUv:Vt&&C(I.specularColorMap.channel),specularIntensityMapUv:ee&&C(I.specularIntensityMap.channel),transmissionMapUv:P&&C(I.transmissionMap.channel),thicknessMapUv:it&&C(I.thicknessMap.channel),alphaMapUv:K&&C(I.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(zt||v),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(ue||K),fog:!!H,useFog:I.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Et,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:ue&&I.map.isVideoTexture===!0&&Ot.getTransfer(I.map.colorSpace)===Zt,decodeVideoTextureEmissive:ie&&I.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(I.emissiveMap.colorSpace)===Zt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Ve,flipSided:I.side===Ne,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Dt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&I.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function f(I){let y=[];if(I.shaderID?y.push(I.shaderID):(y.push(I.customVertexShaderID),y.push(I.customFragmentShaderID)),I.defines!==void 0)for(let w in I.defines)y.push(w),y.push(I.defines[w]);return I.isRawShaderMaterial===!1&&(E(y,I),x(y,I),y.push(i.outputColorSpace)),y.push(I.customProgramCacheKey),y.join()}function E(I,y){I.push(y.precision),I.push(y.outputColorSpace),I.push(y.envMapMode),I.push(y.envMapCubeUVHeight),I.push(y.mapUv),I.push(y.alphaMapUv),I.push(y.lightMapUv),I.push(y.aoMapUv),I.push(y.bumpMapUv),I.push(y.normalMapUv),I.push(y.displacementMapUv),I.push(y.emissiveMapUv),I.push(y.metalnessMapUv),I.push(y.roughnessMapUv),I.push(y.anisotropyMapUv),I.push(y.clearcoatMapUv),I.push(y.clearcoatNormalMapUv),I.push(y.clearcoatRoughnessMapUv),I.push(y.iridescenceMapUv),I.push(y.iridescenceThicknessMapUv),I.push(y.sheenColorMapUv),I.push(y.sheenRoughnessMapUv),I.push(y.specularMapUv),I.push(y.specularColorMapUv),I.push(y.specularIntensityMapUv),I.push(y.transmissionMapUv),I.push(y.thicknessMapUv),I.push(y.combine),I.push(y.fogExp2),I.push(y.sizeAttenuation),I.push(y.morphTargetsCount),I.push(y.morphAttributeCount),I.push(y.numDirLights),I.push(y.numPointLights),I.push(y.numSpotLights),I.push(y.numSpotLightMaps),I.push(y.numHemiLights),I.push(y.numRectAreaLights),I.push(y.numDirLightShadows),I.push(y.numPointLightShadows),I.push(y.numSpotLightShadows),I.push(y.numSpotLightShadowsWithMaps),I.push(y.numLightProbes),I.push(y.shadowMapType),I.push(y.toneMapping),I.push(y.numClippingPlanes),I.push(y.numClipIntersection),I.push(y.depthPacking)}function x(I,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),I.push(o.mask)}function p(I){let y=A[I.type],w;if(y){let O=cn[y];w=zn.clone(O.uniforms)}else w=I.uniforms;return w}function b(I,y){let w;for(let O=0,N=h.length;O<N;O++){let H=h[O];if(H.cacheKey===y){w=H,++w.usedTimes;break}}return w===void 0&&(w=new em(i,y,I,r),h.push(w)),w}function M(I){if(--I.usedTimes===0){let y=h.indexOf(I);h[y]=h[h.length-1],h.pop(),I.destroy()}}function T(I){l.remove(I)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:p,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:R}}function sm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,A,C,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:A,renderOrder:u.renderOrder,z:C,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=A,f.renderOrder=u.renderOrder,f.z=C,f.group=g),t++,f}function o(u,d,m,A,C,g){let f=a(u,d,m,A,C,g);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,A,C,g){let f=a(u,d,m,A,C,g);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||rm),n.length>1&&n.sort(d||Mc),s.length>1&&s.sort(d||Mc)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function am(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bc,i.set(n,[a])):s>=r.length?(a=new bc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function om(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Rt};break;case"SpotLight":e={position:new q,direction:new q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function lm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cm=0;function hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function um(i){let t=new om,e=lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let s=new q,r=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let m=0,A=0,C=0,g=0,f=0,E=0,x=0,p=0,b=0,M=0,T=0;c.sort(hm);for(let I=0,y=c.length;I<y;I++){let w=c[I],O=w.color,N=w.intensity,H=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],N);T++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let j=w.shadow,k=e.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=w.shadow.matrix,E++}n.directional[m]=G,m++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(O).multiplyScalar(N),G.distance=H,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[C]=G;let j=w.shadow;if(w.map&&(n.spotLightMap[b]=w.map,b++,j.updateMatrices(w),w.castShadow&&M++),n.spotLightMatrix[C]=j.matrix,w.castShadow){let k=e.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.spotShadow[C]=k,n.spotShadowMap[C]=Z,p++}C++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(O).multiplyScalar(N),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=G,g++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let j=w.shadow,k=e.get(w);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,n.pointShadow[A]=k,n.pointShadowMap[A]=Z,n.pointShadowMatrix[A]=w.shadow.matrix,x++}n.point[A]=G,A++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(N),G.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==m||R.pointLength!==A||R.spotLength!==C||R.rectAreaLength!==g||R.hemiLength!==f||R.numDirectionalShadows!==E||R.numPointShadows!==x||R.numSpotShadows!==p||R.numSpotMaps!==b||R.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=C,n.rectArea.length=g,n.point.length=A,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=p,n.spotShadowMap.length=p,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=p+b-M,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,R.directionalLength=m,R.pointLength=A,R.spotLength=C,R.rectAreaLength=g,R.hemiLength=f,R.numDirectionalShadows=E,R.numPointShadows=x,R.numSpotShadows=p,R.numSpotMaps=b,R.numLightProbes=T,n.version=cm++)}function l(c,h){let u=0,d=0,m=0,A=0,C=0,g=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let x=c[f];if(x.isDirectionalLight){let p=n.directional[u];p.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),p.direction.sub(s),p.direction.transformDirection(g),u++}else if(x.isSpotLight){let p=n.spot[m];p.position.setFromMatrixPosition(x.matrixWorld),p.position.applyMatrix4(g),p.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),p.direction.sub(s),p.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let p=n.rectArea[A];p.position.setFromMatrixPosition(x.matrixWorld),p.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),p.halfWidth.set(x.width*.5,0,0),p.halfHeight.set(0,x.height*.5,0),p.halfWidth.applyMatrix4(a),p.halfHeight.applyMatrix4(a),A++}else if(x.isPointLight){let p=n.point[d];p.position.setFromMatrixPosition(x.matrixWorld),p.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let p=n.hemi[C];p.direction.setFromMatrixPosition(x.matrixWorld),p.direction.transformDirection(g),C++}}}return{setup:o,setupView:l,state:n}}function Sc(i){let t=new um(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function dm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Sc(i),t.set(s,[o])):r>=a.length?(o=new Sc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Eo=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},To=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
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
}`;function gm(i,t,e){let n=new ms,s=new At,r=new At,a=new jt,o=new Eo({depthPacking:vu}),l=new To,c={},h=e.maxTextureSize,u={[Bn]:Ne,[Ne]:Bn,[Ve]:Ve},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let A=new me;A.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new he(A,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let f=this.type;this.render=function(M,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let I=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(dn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=f!==yn&&this.type===yn,H=f===yn&&this.type!==yn;for(let Z=0,G=M.length;Z<G;Z++){let j=M[Z],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let nt=k.getFrameExtents();if(s.multiply(nt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,k.mapSize.y=r.y)),k.map===null||N===!0||H===!0){let _t=this.type!==yn?{minFilter:nn,magFilter:nn}:{};k.map!==null&&k.map.dispose(),k.map=new De(s.x,s.y,_t),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ct=k.getViewportCount();for(let _t=0;_t<ct;_t++){let Ft=k.getViewport(_t);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(a),k.updateMatrices(j,_t),n=k.getFrustum(),p(T,R,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===yn&&E(k,R),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(I,y,w)};function E(M,T){let R=t.update(C);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new De(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,C,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,R,m,C,null)}function x(M,T,R,I){let y=null,w=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)y=w;else if(y=R.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=y.uuid,N=T.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let Z=H[N];Z===void 0&&(Z=y.clone(),H[N]=Z,T.addEventListener("dispose",b)),y=Z}if(y.visible=T.visible,y.wireframe=T.wireframe,I===yn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=i.properties.get(y);O.light=R}return y}function p(M,T,R,I,y){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===yn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let N=t.update(M),H=M.material;if(Array.isArray(H)){let Z=N.groups;for(let G=0,j=Z.length;G<j;G++){let k=Z[G],nt=H[k.materialIndex];if(nt&&nt.visible){let ct=x(M,nt,I,y);M.onBeforeShadow(i,M,T,R,N,ct,k),i.renderBufferDirect(R,null,N,ct,M,k),M.onAfterShadow(i,M,T,R,N,ct,k)}}}else if(H.visible){let Z=x(M,H,I,y);M.onBeforeShadow(i,M,T,R,N,Z,null),i.renderBufferDirect(R,null,N,Z,M,null),M.onAfterShadow(i,M,T,R,N,Z,null)}}let O=M.children;for(let N=0,H=O.length;N<H;N++)p(O[N],T,R,I,y)}function b(M){M.target.removeEventListener("dispose",b);for(let R in c){let I=c[R],y=M.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}var mm={[Ra]:Pa,[qa]:Ua,[Da]:Va,[Li]:La,[Pa]:Ra,[Ua]:qa,[Va]:Da,[La]:Li};function Am(i,t){function e(){let P=!1,it=new jt,z=null,K=new jt(0,0,0,0);return{setMask:function(lt){z!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),z=lt)},setLocked:function(lt){P=lt},setClear:function(lt,at,Dt,de,Se){Se===!0&&(lt*=de,at*=de,Dt*=de),it.set(lt,at,Dt,de),K.equals(it)===!1&&(i.clearColor(lt,at,Dt,de),K.copy(it))},reset:function(){P=!1,z=null,K.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,z=null,K=null,lt=null;return{setReversed:function(at){if(it!==at){let Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let de=lt;lt=null,this.setClear(de)}it=at},getReversed:function(){return it},setTest:function(at){at?st(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(at){z!==at&&!P&&(i.depthMask(at),z=at)},setFunc:function(at){if(it&&(at=mm[at]),K!==at){switch(at){case Ra:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=at}},setLocked:function(at){P=at},setClear:function(at){lt!==at&&(it&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){P=!1,z=null,K=null,lt=null,it=!1}}}function s(){let P=!1,it=null,z=null,K=null,lt=null,at=null,Dt=null,de=null,Se=null;return{setTest:function(Qt){P||(Qt?st(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!P&&(i.stencilMask(Qt),it=Qt)},setFunc:function(Qt,Ze,pn){(z!==Qt||K!==Ze||lt!==pn)&&(i.stencilFunc(Qt,Ze,pn),z=Qt,K=Ze,lt=pn)},setOp:function(Qt,Ze,pn){(at!==Qt||Dt!==Ze||de!==pn)&&(i.stencilOp(Qt,Ze,pn),at=Qt,Dt=Ze,de=pn)},setLocked:function(Qt){P=Qt},setClear:function(Qt){Se!==Qt&&(i.clearStencil(Qt),Se=Qt)},reset:function(){P=!1,it=null,z=null,K=null,lt=null,at=null,Dt=null,de=null,Se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,m=[],A=null,C=!1,g=null,f=null,E=null,x=null,p=null,b=null,M=null,T=new Rt(0,0,0),R=0,I=!1,y=null,w=null,O=null,N=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=j>=2);let nt=null,ct={},_t=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),$t=new jt().fromArray(_t),X=new jt().fromArray(Ft);function tt(P,it,z,K){let lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(P,at),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<z;Dt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}let mt={};mt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Li),kt(!1),zt(Rl),st(i.CULL_FACE),U(dn);function st(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Et(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function qt(P,it){return u[P]!==it?(i.bindFramebuffer(P,it),u[P]=it,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Bt(P,it){let z=m,K=!1;if(P){z=d.get(it),z===void 0&&(z=[],d.set(it,z));let lt=P.textures;if(z.length!==lt.length||z[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Dt=lt.length;at<Dt;at++)z[at]=i.COLOR_ATTACHMENT0+at;z.length=lt.length,K=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,K=!0);K&&i.drawBuffers(z)}function ue(P){return A!==P?(i.useProgram(P),A=P,!0):!1}let Gt={[jn]:i.FUNC_ADD,[jh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};Gt[tu]=i.MIN,Gt[eu]=i.MAX;let fe={[nu]:i.ZERO,[iu]:i.ONE,[su]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[lu]:i.DST_COLOR,[au]:i.DST_ALPHA,[ru]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[cu]:i.ONE_MINUS_DST_COLOR,[ou]:i.ONE_MINUS_DST_ALPHA,[uu]:i.CONSTANT_COLOR,[du]:i.ONE_MINUS_CONSTANT_COLOR,[fu]:i.CONSTANT_ALPHA,[pu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(P,it,z,K,lt,at,Dt,de,Se,Qt){if(P===dn){C===!0&&(Et(i.BLEND),C=!1);return}if(C===!1&&(st(i.BLEND),C=!0),P!==Jh){if(P!==g||Qt!==I){if((f!==jn||p!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,p=jn),Qt)switch(P){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qe:i.blendFunc(i.ONE,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,x=null,b=null,M=null,T.set(0,0,0),R=0,g=P,I=Qt}return}lt=lt||it,at=at||z,Dt=Dt||K,(it!==f||lt!==p)&&(i.blendEquationSeparate(Gt[it],Gt[lt]),f=it,p=lt),(z!==E||K!==x||at!==b||Dt!==M)&&(i.blendFuncSeparate(fe[z],fe[K],fe[at],fe[Dt]),E=z,x=K,b=at,M=Dt),(de.equals(T)===!1||Se!==R)&&(i.blendColor(de.r,de.g,de.b,Se),T.copy(de),R=Se),g=P,I=!1}function Xe(P,it){P.side===Ve?Et(i.CULL_FACE):st(i.CULL_FACE);let z=P.side===Ne;it&&(z=!z),kt(z),P.blending===Ri&&P.transparent===!1?U(dn):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function zt(P){P!==Kh?(st(i.CULL_FACE),P!==w&&(P===Rl?i.cullFace(i.BACK):P===Zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),w=P}function bt(P){P!==O&&(G&&i.lineWidth(P),O=P)}function ie(P,it,z){P?(st(i.POLYGON_OFFSET_FILL),(N!==it||H!==z)&&(i.polygonOffset(it,z),N=it,H=z)):Et(i.POLYGON_OFFSET_FILL)}function Mt(P){P?st(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function S(P){P===void 0&&(P=i.TEXTURE0+Z-1),nt!==P&&(i.activeTexture(P),nt=P)}function v(P,it,z){z===void 0&&(nt===null?z=i.TEXTURE0+Z-1:z=nt);let K=ct[z];K===void 0&&(K={type:void 0,texture:void 0},ct[z]=K),(K.type!==P||K.texture!==it)&&(nt!==z&&(i.activeTexture(z),nt=z),i.bindTexture(P,it||mt[P]),K.type=P,K.texture=it)}function V(){let P=ct[nt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(P){$t.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$t.copy(P))}function dt(P){X.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function Ht(P,it){let z=c.get(it);z===void 0&&(z=new WeakMap,c.set(it,z));let K=z.get(P);K===void 0&&(K=i.getUniformBlockIndex(it,P.name),z.set(P,K))}function Vt(P,it){let K=c.get(it).get(P);l.get(it)!==K&&(i.uniformBlockBinding(it,K,P.__bindingPointIndex),l.set(it,K))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,ct={},u={},d=new WeakMap,m=[],A=null,C=!1,g=null,f=null,E=null,x=null,p=null,b=null,M=null,T=new Rt(0,0,0),R=0,I=!1,y=null,w=null,O=null,N=null,H=null,$t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Et,bindFramebuffer:qt,drawBuffers:Bt,useProgram:ue,setBlending:U,setMaterial:Xe,setFlipSided:kt,setCullFace:zt,setLineWidth:bt,setPolygonOffset:ie,setScissorTest:Mt,activeTexture:S,bindTexture:v,unbindTexture:V,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:ut,texImage3D:St,updateUBOMapping:Ht,uniformBlockBinding:Vt,texStorage2D:Wt,texStorage3D:J,texSubImage2D:W,texSubImage3D:Ct,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:wt,viewport:dt,reset:ee}}function Ec(i,t,e,n){let s=xm(n);switch(e){case Hc:return i*t;case Wc:return i*t;case Xc:return i*t*2;case Yc:return i*t/s.components*s.byteLength;case sl:return i*t/s.components*s.byteLength;case Kc:return i*t*2/s.components*s.byteLength;case rl:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case al:return i*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sr:case oo:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zc:case co:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ho:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xm(i){switch(i){case bn:case Oc:return{byteLength:1,components:1};case fs:case kc:case rn:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case ni:case el:case _n:return{byteLength:4,components:1};case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,v){return m?new OffscreenCanvas(S,v):or("canvas")}function C(S,v,V){let Y=1,Q=Mt(S);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap||typeof VideoFrame!="undefined"&&S instanceof VideoFrame){let W=Math.floor(Y*Q.width),Ct=Math.floor(Y*Q.height);u===void 0&&(u=A(W,Ct));let rt=v?A(W,Ct):u;return rt.width=W,rt.height=Ct,rt.getContext("2d").drawImage(S,0,0,W,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Ct+")."),rt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function g(S){return S.generateMipmaps}function f(S){i.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(S,v,V,Y,Q=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=v;if(v===i.RED&&(V===i.FLOAT&&(W=i.R32F),V===i.HALF_FLOAT&&(W=i.R16F),V===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.R8UI),V===i.UNSIGNED_SHORT&&(W=i.R16UI),V===i.UNSIGNED_INT&&(W=i.R32UI),V===i.BYTE&&(W=i.R8I),V===i.SHORT&&(W=i.R16I),V===i.INT&&(W=i.R32I)),v===i.RG&&(V===i.FLOAT&&(W=i.RG32F),V===i.HALF_FLOAT&&(W=i.RG16F),V===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RG8UI),V===i.UNSIGNED_SHORT&&(W=i.RG16UI),V===i.UNSIGNED_INT&&(W=i.RG32UI),V===i.BYTE&&(W=i.RG8I),V===i.SHORT&&(W=i.RG16I),V===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGB8UI),V===i.UNSIGNED_SHORT&&(W=i.RGB16UI),V===i.UNSIGNED_INT&&(W=i.RGB32UI),V===i.BYTE&&(W=i.RGB8I),V===i.SHORT&&(W=i.RGB16I),V===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),V===i.UNSIGNED_INT&&(W=i.RGBA32UI),V===i.BYTE&&(W=i.RGBA8I),V===i.SHORT&&(W=i.RGBA16I),V===i.INT&&(W=i.RGBA32I)),v===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),v===i.RGBA){let Ct=Q?wr:Ot.getTransfer(Y);V===i.FLOAT&&(W=i.RGBA32F),V===i.HALF_FLOAT&&(W=i.RGBA16F),V===i.UNSIGNED_BYTE&&(W=Ct===Zt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function p(S,v){let V;return S?v===null||v===ni||v===Ni?V=i.DEPTH24_STENCIL8:v===_n?V=i.DEPTH32F_STENCIL8:v===fs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ni||v===Ni?V=i.DEPTH_COMPONENT24:v===_n?V=i.DEPTH_COMPONENT32F:v===fs&&(V=i.DEPTH_COMPONENT16),V}function b(S,v){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==nn&&S.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function M(S){let v=S.target;v.removeEventListener("dispose",M),R(v),v.isVideoTexture&&h.delete(v)}function T(S){let v=S.target;v.removeEventListener("dispose",T),y(v)}function R(S){let v=n.get(S);if(v.__webglInit===void 0)return;let V=S.source,Y=d.get(V);if(Y){let Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(S),Object.keys(Y).length===0&&d.delete(V)}n.remove(S)}function I(S){let v=n.get(S);i.deleteTexture(v.__webglTexture);let V=S.source,Y=d.get(V);delete Y[v.__cacheKey],a.memory.textures--}function y(S){let v=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=S.textures;for(let Y=0,Q=V.length;Y<Q;Y++){let W=n.get(V[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(S)}let w=0;function O(){w=0}function N(){let S=w;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),w+=1,S}function H(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Z(S,v){let V=n.get(S);if(S.isVideoTexture&&bt(S),S.isRenderTargetTexture===!1&&S.version>0&&V.__version!==S.version){let Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(V,S,v);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function G(S,v){let V=n.get(S);if(S.version>0&&V.__version!==S.version){X(V,S,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function j(S,v){let V=n.get(S);if(S.version>0&&V.__version!==S.version){X(V,S,v);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function k(S,v){let V=n.get(S);if(S.version>0&&V.__version!==S.version){tt(V,S,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let nt={[ds]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},ct={[nn]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},_t={[_u]:i.NEVER,[Tu]:i.ALWAYS,[Iu]:i.LESS,[Jc]:i.LEQUAL,[Mu]:i.EQUAL,[Eu]:i.GEQUAL,[bu]:i.GREATER,[Su]:i.NOTEQUAL};function Ft(S,v){if(v.type===_n&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===Zr||v.magFilter===Es||v.magFilter===ei||v.minFilter===un||v.minFilter===Zr||v.minFilter===Es||v.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,nt[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,nt[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,nt[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ct[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==Es&&v.minFilter!==ei||v.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(S,v){let V=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",M));let Y=v.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let W=H(v);if(W!==S.__cacheKey){Q[W]===void 0&&(Q[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[W].usedTimes++;let Ct=Q[S.__cacheKey];Ct!==void 0&&(Q[S.__cacheKey].usedTimes--,Ct.usedTimes===0&&I(v)),S.__cacheKey=W,S.__webglTexture=Q[W].texture}return V}function X(S,v,V){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=$t(S,v),W=v.source;e.bindTexture(Y,S.__webglTexture,i.TEXTURE0+V);let Ct=n.get(W);if(W.version!==Ct.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);let rt=Ot.getPrimaries(Ot.workingColorSpace),ht=v.colorSpace===Un?null:Ot.getPrimaries(v.colorSpace),Wt=v.colorSpace===Un||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let J=C(v.image,!1,s.maxTextureSize);J=ie(v,J);let ut=r.convert(v.format,v.colorSpace),St=r.convert(v.type),wt=x(v.internalFormat,ut,St,v.colorSpace,v.isVideoTexture);Ft(Y,v);let dt,Ht=v.mipmaps,Vt=v.isVideoTexture!==!0,ee=Ct.__version===void 0||Q===!0,P=W.dataReady,it=b(v,J);if(v.isDepthTexture)wt=p(v.format===Fi,v.type),ee&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,wt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,wt,J.width,J.height,0,ut,St,null));else if(v.isDataTexture)if(Ht.length>0){Vt&&ee&&e.texStorage2D(i.TEXTURE_2D,it,wt,Ht[0].width,Ht[0].height);for(let z=0,K=Ht.length;z<K;z++)dt=Ht[z],Vt?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ut,St,dt.data):e.texImage2D(i.TEXTURE_2D,z,wt,dt.width,dt.height,0,ut,St,dt.data);v.generateMipmaps=!1}else Vt?(ee&&e.texStorage2D(i.TEXTURE_2D,it,wt,J.width,J.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ut,St,J.data)):e.texImage2D(i.TEXTURE_2D,0,wt,J.width,J.height,0,ut,St,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,Ht[0].width,Ht[0].height,J.depth);for(let z=0,K=Ht.length;z<K;z++)if(dt=Ht[z],v.format!==en)if(ut!==null)if(Vt){if(P)if(v.layerUpdates.size>0){let lt=Ec(dt.width,dt.height,v.format,v.type);for(let at of v.layerUpdates){let Dt=dt.data.subarray(at*lt/dt.data.BYTES_PER_ELEMENT,(at+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,at,dt.width,dt.height,1,ut,Dt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,dt.width,dt.height,J.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,wt,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,dt.width,dt.height,J.depth,ut,St,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,wt,dt.width,dt.height,J.depth,0,ut,St,dt.data)}else{Vt&&ee&&e.texStorage2D(i.TEXTURE_2D,it,wt,Ht[0].width,Ht[0].height);for(let z=0,K=Ht.length;z<K;z++)dt=Ht[z],v.format!==en?ut!==null?Vt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ut,St,dt.data):e.texImage2D(i.TEXTURE_2D,z,wt,dt.width,dt.height,0,ut,St,dt.data)}else if(v.isDataArrayTexture)if(Vt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,J.width,J.height,J.depth),P)if(v.layerUpdates.size>0){let z=Ec(J.width,J.height,v.format,v.type);for(let K of v.layerUpdates){let lt=J.data.subarray(K*z/J.data.BYTES_PER_ELEMENT,(K+1)*z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,ut,St,lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,St,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,J.width,J.height,J.depth,0,ut,St,J.data);else if(v.isData3DTexture)Vt?(ee&&e.texStorage3D(i.TEXTURE_3D,it,wt,J.width,J.height,J.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,St,J.data)):e.texImage3D(i.TEXTURE_3D,0,wt,J.width,J.height,J.depth,0,ut,St,J.data);else if(v.isFramebufferTexture){if(ee)if(Vt)e.texStorage2D(i.TEXTURE_2D,it,wt,J.width,J.height);else{let z=J.width,K=J.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,wt,z,K,0,ut,St,null),z>>=1,K>>=1}}else if(Ht.length>0){if(Vt&&ee){let z=Mt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,it,wt,z.width,z.height)}for(let z=0,K=Ht.length;z<K;z++)dt=Ht[z],Vt?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ut,St,dt):e.texImage2D(i.TEXTURE_2D,z,wt,ut,St,dt);v.generateMipmaps=!1}else if(Vt){if(ee){let z=Mt(J);e.texStorage2D(i.TEXTURE_2D,it,wt,z.width,z.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,St,J)}else e.texImage2D(i.TEXTURE_2D,0,wt,ut,St,J);g(v)&&f(Y),Ct.__version=W.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function tt(S,v,V){if(v.image.length!==6)return;let Y=$t(S,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+V);let W=n.get(Q);if(Q.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+V);let Ct=Ot.getPrimaries(Ot.workingColorSpace),rt=v.colorSpace===Un?null:Ot.getPrimaries(v.colorSpace),ht=v.colorSpace===Un||Ct===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!Wt&&!J?ut[K]=C(v.image[K],!0,s.maxCubemapSize):ut[K]=J?v.image[K].image:v.image[K],ut[K]=ie(v,ut[K]);let St=ut[0],wt=r.convert(v.format,v.colorSpace),dt=r.convert(v.type),Ht=x(v.internalFormat,wt,dt,v.colorSpace),Vt=v.isVideoTexture!==!0,ee=W.__version===void 0||Y===!0,P=Q.dataReady,it=b(v,St);Ft(i.TEXTURE_CUBE_MAP,v);let z;if(Wt){Vt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,St.width,St.height);for(let K=0;K<6;K++){z=ut[K].mipmaps;for(let lt=0;lt<z.length;lt++){let at=z[lt];v.format!==en?wt!==null?Vt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,at.width,at.height,wt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Ht,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,at.width,at.height,wt,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Ht,at.width,at.height,0,wt,dt,at.data)}}}else{if(z=v.mipmaps,Vt&&ee){z.length>0&&it++;let K=Mt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(J){Vt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,wt,dt,ut[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ut[K].width,ut[K].height,0,wt,dt,ut[K].data);for(let lt=0;lt<z.length;lt++){let Dt=z[lt].image[K].image;Vt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Dt.width,Dt.height,wt,dt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Ht,Dt.width,Dt.height,0,wt,dt,Dt.data)}}else{Vt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt,dt,ut[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,wt,dt,ut[K]);for(let lt=0;lt<z.length;lt++){let at=z[lt];Vt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,wt,dt,at.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Ht,wt,dt,at.image[K])}}}g(v)&&f(i.TEXTURE_CUBE_MAP),W.__version=Q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function mt(S,v,V,Y,Q,W){let Ct=r.convert(V.format,V.colorSpace),rt=r.convert(V.type),ht=x(V.internalFormat,Ct,rt,V.colorSpace),Wt=n.get(v),J=n.get(V);if(J.__renderTarget=v,!Wt.__hasExternalTextures){let ut=Math.max(1,v.width>>W),St=Math.max(1,v.height>>W);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,W,ht,ut,St,v.depth,0,Ct,rt,null):e.texImage2D(Q,W,ht,ut,St,0,Ct,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,J.__webglTexture,0,kt(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(S,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer){let Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,W=p(v.stencilBuffer,Q),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=kt(v);zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,W,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,S)}else{let Y=v.textures;for(let Q=0;Q<Y.length;Q++){let W=Y[Q],Ct=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),ht=x(W.internalFormat,Ct,rt,W.colorSpace),Wt=kt(v);V&&zt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ht,v.width,v.height):zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let Q=Y.__webglTexture,W=kt(v);if(v.depthTexture.format===Pi)zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Fi)zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function qt(S){let v=n.get(S),V=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let Y=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Et(v.__webglFramebuffer,S)}else if(V){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(v.__webglDepthbuffer[Y],S,!1);else{let Q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),st(v.__webglDepthbuffer,S,!1);else{let Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(S,v,V){let Y=n.get(S);v!==void 0&&mt(Y.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&qt(S)}function ue(S){let v=S.texture,V=n.get(S),Y=n.get(v);S.addEventListener("dispose",T);let Q=S.textures,W=S.isWebGLCubeRenderTarget===!0,Ct=Q.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),W){V.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[rt]=[];for(let ht=0;ht<v.mipmaps.length;ht++)V.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else V.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)V.__webglFramebuffer[rt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let rt=0,ht=Q.length;rt<ht;rt++){let Wt=n.get(Q[rt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&zt(S)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){let ht=Q[rt];V.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[rt]);let Wt=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),ut=x(ht.internalFormat,Wt,J,ht.colorSpace,S.isXRRenderTarget===!0),St=kt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,ut,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,V.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),st(V.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)mt(V.__webglFramebuffer[rt][ht],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else mt(V.__webglFramebuffer[rt],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let rt=0,ht=Q.length;rt<ht;rt++){let Wt=Q[rt],J=n.get(Wt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ft(i.TEXTURE_2D,Wt),mt(V.__webglFramebuffer,S,Wt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),g(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(rt=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Ft(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)mt(V.__webglFramebuffer[ht],S,v,i.COLOR_ATTACHMENT0,rt,ht);else mt(V.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,rt,0);g(v)&&f(rt),e.unbindTexture()}S.depthBuffer&&qt(S)}function Gt(S){let v=S.textures;for(let V=0,Y=v.length;V<Y;V++){let Q=v[V];if(g(Q)){let W=E(S),Ct=n.get(Q).__webglTexture;e.bindTexture(W,Ct),f(W),e.unbindTexture()}}}let fe=[],U=[];function Xe(S){if(S.samples>0){if(zt(S)===!1){let v=S.textures,V=S.width,Y=S.height,Q=i.COLOR_BUFFER_BIT,W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(S),rt=v.length>1;if(rt)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[ht]);let Wt=n.get(v[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,i.NEAREST),l===!0&&(fe.length=0,U.length=0,fe.push(i.COLOR_ATTACHMENT0+ht),S.depthBuffer&&S.resolveDepthBuffer===!1&&(fe.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[ht]);let Wt=n.get(v[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let v=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function kt(S){return Math.min(s.maxSamples,S.samples)}function zt(S){let v=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(S){let v=a.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function ie(S,v){let V=S.colorSpace,Y=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||V!==Ki&&V!==Un&&(Ot.getTransfer(V)===Zt?(Y!==en||Q!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function Mt(S){return typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame!="undefined"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=Bt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=zt}function vm(i,t){function e(n,s=Un){let r,a=Ot.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return i.BYTE;if(n===kc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===en)return i.RGBA;if(n===Wc)return i.LUMINANCE;if(n===Xc)return i.LUMINANCE_ALPHA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Yc)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Kc)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===ka||n===za||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ya||n===Ka||n===Za||n===Qa||n===Ja||n===ja||n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sr||n===oo||n===lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sr)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zc||n===co||n===ho||n===uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wo=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},ym={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let C of t.hand.values()){let g=e.getJointPose(C,n),f=this._getHandJoint(c,C);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,A=.005;c.inputState.pinching&&d>m+A?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-A&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
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

}`,Ro=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:_m,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Po=class extends On{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,A=null,C=new Ro,g=e.getContextAttributes(),f=null,E=null,x=[],p=[],b=new At,M=null,T=new we;T.viewport=new jt;let R=new we;R.viewport=new jt;let I=[T,R],y=new wo,w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=x[X];return tt===void 0&&(tt=new us,x[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=x[X];return tt===void 0&&(tt=new us,x[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=x[X];return tt===void 0&&(tt=new us,x[X]=tt),tt.getHandSpace()};function N(X){let tt=p.indexOf(X.inputSource);if(tt===-1)return;let mt=x[tt];mt!==void 0&&(mt.update(X.inputSource,X.frame,c||a),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<x.length;X++){let tt=p[X];tt!==null&&(p[X]=null,x[X].disconnect(tt))}w=null,O=null,C.reset(),t.setRenderTarget(f),m=null,d=null,u=null,s=null,E=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new De(m.framebufferWidth,m.framebufferHeight,{format:en,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,mt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Fi:Pi,mt=g.stencil?Ni:ni);let Et={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new De(d.textureWidth,d.textureHeight,{format:en,type:bn,depthTexture:new gr(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function Z(X){for(let tt=0;tt<X.removed.length;tt++){let mt=X.removed[tt],st=p.indexOf(mt);st>=0&&(p[st]=null,x[st].disconnect(mt))}for(let tt=0;tt<X.added.length;tt++){let mt=X.added[tt],st=p.indexOf(mt);if(st===-1){for(let qt=0;qt<x.length;qt++)if(qt>=p.length){p.push(mt),st=qt;break}else if(p[qt]===null){p[qt]=mt,st=qt;break}if(st===-1)break}let Et=x[st];Et&&Et.connect(mt)}}let G=new q,j=new q;function k(X,tt,mt){G.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(mt.matrixWorld);let st=G.distanceTo(j),Et=tt.projectionMatrix.elements,qt=mt.projectionMatrix.elements,Bt=Et[14]/(Et[10]-1),ue=Et[14]/(Et[10]+1),Gt=(Et[9]+1)/Et[5],fe=(Et[9]-1)/Et[5],U=(Et[8]-1)/Et[0],Xe=(qt[8]+1)/qt[0],kt=Bt*U,zt=Bt*Xe,bt=st/(-U+Xe),ie=bt*-U;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Et[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Mt=Bt+bt,S=ue+bt,v=kt-ie,V=zt+(st-ie),Y=Gt*ue/S*Mt,Q=fe*ue/S*Mt;X.projectionMatrix.makePerspective(v,V,Y,Q,Mt,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,mt=X.far;C.texture!==null&&(C.depthNear>0&&(tt=C.depthNear),C.depthFar>0&&(mt=C.depthFar)),y.near=R.near=T.near=tt,y.far=R.far=T.far=mt,(w!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,O=y.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;let st=X.parent,Et=y.cameras;nt(y,st);for(let qt=0;qt<Et.length;qt++)nt(Et[qt],st);Et.length===2?k(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),ct(X,y,st)};function ct(X,tt,mt){mt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=go*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(y)};let _t=null;function Ft(X,tt){if(h=tt.getViewerPose(c||a),A=tt,h!==null){let mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let st=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let qt=0;qt<mt.length;qt++){let Bt=mt[qt],ue=null;if(m!==null)ue=m.getViewport(Bt);else{let fe=u.getViewSubImage(d,Bt);ue=fe.viewport,qt===0&&(t.setRenderTargetTextures(E,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(E))}let Gt=I[qt];Gt===void 0&&(Gt=new we,Gt.layers.enable(qt),Gt.viewport=new jt,I[qt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ue.x,ue.y,ue.width,ue.height),qt===0&&(y.matrix.copy(Gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(Gt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let qt=u.getDepthInformation(mt[0]);qt&&qt.isValid&&qt.texture&&C.init(t,qt,s.renderState)}}for(let mt=0;mt<x.length;mt++){let st=p[mt],Et=x[mt];st!==null&&Et!==void 0&&Et.update(st,tt,c||a)}_t&&_t(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),A=null}let $t=new eh;$t.setAnimationLoop(Ft),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}},Qn=new fn,Mm=new ae;function bm(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,th(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,E,x,p){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&m(g,f,p)):f.isMeshMatcapMaterial?(r(g,f),A(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),C(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,E,x):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ne&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ne&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let E=t.get(f),x=E.envMap,p=E.envMapRotation;x&&(g.envMap.value=x,Qn.copy(p),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),g.envMapRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Qn)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,E,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*E,g.scale.value=x*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,E){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ne&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function A(g,f){f.matcap&&(g.matcap.value=f.matcap)}function C(g,f){let E=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){let p=x.program;n.uniformBlockBinding(E,p)}function c(E,x){let p=s[E.id];p===void 0&&(A(E),p=h(E),s[E.id]=p,E.addEventListener("dispose",g));let b=x.program;n.updateUBOMapping(E,b);let M=t.render.frame;r[E.id]!==M&&(d(E),r[E.id]=M)}function h(E){let x=u();E.__bindingPointIndex=x;let p=i.createBuffer(),b=E.__size,M=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,p),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,p),p}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let x=s[E.id],p=E.uniforms,b=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let M=0,T=p.length;M<T;M++){let R=Array.isArray(p[M])?p[M]:[p[M]];for(let I=0,y=R.length;I<y;I++){let w=R[I];if(m(w,M,I,b)===!0){let O=w.__offset,N=Array.isArray(w.value)?w.value:[w.value],H=0;for(let Z=0;Z<N.length;Z++){let G=N[Z],j=C(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,x,p,b){let M=E.value,T=x+"_"+p;if(b[T]===void 0)return typeof M=="number"||typeof M=="boolean"?b[T]=M:b[T]=M.clone(),!0;{let R=b[T];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return b[T]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function A(E){let x=E.uniforms,p=0,b=16;for(let T=0,R=x.length;T<R;T++){let I=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,w=I.length;y<w;y++){let O=I[y],N=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Z=N.length;H<Z;H++){let G=N[H],j=C(G),k=p%b,nt=k%j.boundary,ct=k+nt;p+=nt,ct!==0&&b-ct<j.storage&&(p+=b-ct),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=p,p+=j.storage}}}let M=p%b;return M>0&&(p+=b-M),E.__size=p,E.__cache={},this}function C(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function g(E){let x=E.target;x.removeEventListener("dispose",g);let p=a.indexOf(x.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var mr=class{constructor(t={}){let{canvas:e=Ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let A=new Uint32Array(4),C=new Int32Array(4),g=null,f=null,E=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this.toneMapping=Nn,this.toneMappingExposure=1;let p=this,b=!1,M=0,T=0,R=null,I=-1,y=null,w=new jt,O=new jt,N=null,H=new Rt(0),Z=0,G=e.width,j=e.height,k=1,nt=null,ct=null,_t=new jt(0,0,G,j),Ft=new jt(0,0,G,j),$t=!1,X=new ms,tt=!1,mt=!1,st=new ae,Et=new ae,qt=new q,Bt=new jt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function fe(){return R===null?k:1}let U=n;function Xe(_,D){return e.getContext(_,D)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){let D="webgl2";if(U=Xe(D,_),U===null)throw Xe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let kt,zt,bt,ie,Mt,S,v,V,Y,Q,W,Ct,rt,ht,Wt,J,ut,St,wt,dt,Ht,Vt,ee,P;function it(){kt=new zp(U),kt.init(),Vt=new vm(U,kt),zt=new Vp(U,kt,t,Vt),bt=new Am(U,kt),zt.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),ie=new Wp(U),Mt=new sm,S=new Cm(U,kt,bt,Mt,zt,Vt,ie),v=new Fp(p),V=new kp(p),Y=new Ju(U),ee=new Lp(U,Y),Q=new Hp(U,Y,ie,ee),W=new Yp(U,Q,Y,ie),wt=new Xp(U,zt,S),J=new Np(Mt),Ct=new im(p,v,V,kt,zt,ee,J),rt=new bm(p,Mt),ht=new am,Wt=new dm(kt),St=new Dp(p,v,V,bt,W,m,l),ut=new gm(p,W,zt),P=new Sm(U,ie,zt,bt),dt=new Up(U,kt,ie),Ht=new Gp(U,kt,ie),ie.programs=Ct.programs,p.capabilities=zt,p.extensions=kt,p.properties=Mt,p.renderLists=ht,p.shadowMap=ut,p.state=bt,p.info=ie}it();let z=new Po(p,U);this.xr=z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let _=kt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=kt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(_){_!==void 0&&(k=_,this.setSize(G,j,!1))},this.getSize=function(_){return _.set(G,j)},this.setSize=function(_,D,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=_,j=D,e.width=Math.floor(_*k),e.height=Math.floor(D*k),F===!0&&(e.style.width=_+"px",e.style.height=D+"px"),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set(G*k,j*k).floor()},this.setDrawingBufferSize=function(_,D,F){G=_,j=D,k=F,e.width=Math.floor(_*F),e.height=Math.floor(D*F),this.setViewport(0,0,_,D)},this.getCurrentViewport=function(_){return _.copy(w)},this.getViewport=function(_){return _.copy(_t)},this.setViewport=function(_,D,F,B){_.isVector4?_t.set(_.x,_.y,_.z,_.w):_t.set(_,D,F,B),bt.viewport(w.copy(_t).multiplyScalar(k).round())},this.getScissor=function(_){return _.copy(Ft)},this.setScissor=function(_,D,F,B){_.isVector4?Ft.set(_.x,_.y,_.z,_.w):Ft.set(_,D,F,B),bt.scissor(O.copy(Ft).multiplyScalar(k).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(_){bt.setScissorTest($t=_)},this.setOpaqueSort=function(_){nt=_},this.setTransparentSort=function(_){ct=_},this.getClearColor=function(_){return _.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(_=!0,D=!0,F=!0){let B=0;if(_){let L=!1;if(R!==null){let $=R.texture.format;L=$===al||$===rl||$===sl}if(L){let $=R.texture.type,ot=$===bn||$===ni||$===fs||$===Ni||$===nl||$===il,ft=St.getClearColor(),pt=St.getClearAlpha(),Pt=ft.r,Lt=ft.g,gt=ft.b;ot?(A[0]=Pt,A[1]=Lt,A[2]=gt,A[3]=pt,U.clearBufferuiv(U.COLOR,0,A)):(C[0]=Pt,C[1]=Lt,C[2]=gt,C[3]=pt,U.clearBufferiv(U.COLOR,0,C))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),Wt.dispose(),Mt.dispose(),v.dispose(),V.dispose(),W.dispose(),ee.dispose(),P.dispose(),Ct.dispose(),z.dispose(),z.removeEventListener("sessionstart",_l),z.removeEventListener("sessionend",Il),Gn.stop()};function K(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let _=ie.autoReset,D=ut.enabled,F=ut.autoUpdate,B=ut.needsUpdate,L=ut.type;it(),ie.autoReset=_,ut.enabled=D,ut.autoUpdate=F,ut.needsUpdate=B,ut.type=L}function at(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Dt(_){let D=_.target;D.removeEventListener("dispose",Dt),de(D)}function de(_){Se(_),Mt.remove(_)}function Se(_){let D=Mt.get(_).programs;D!==void 0&&(D.forEach(function(F){Ct.releaseProgram(F)}),_.isShaderMaterial&&Ct.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,F,B,L,$){D===null&&(D=ue);let ot=L.isMesh&&L.matrixWorld.determinant()<0,ft=Wh(_,D,F,B,L);bt.setMaterial(B,ot);let pt=F.index,Pt=1;if(B.wireframe===!0){if(pt=Q.getWireframeAttribute(F),pt===void 0)return;Pt=2}let Lt=F.drawRange,gt=F.attributes.position,Xt=Lt.start*Pt,ne=(Lt.start+Lt.count)*Pt;$!==null&&(Xt=Math.max(Xt,$.start*Pt),ne=Math.min(ne,($.start+$.count)*Pt)),pt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,pt.count)):gt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,gt.count));let se=ne-Xt;if(se<0||se===1/0)return;ee.setup(L,B,ft,F,pt);let Le,Yt=dt;if(pt!==null&&(Le=Y.get(pt),Yt=Ht,Yt.setIndex(Le)),L.isMesh)B.wireframe===!0?(bt.setLineWidth(B.wireframeLinewidth*fe()),Yt.setMode(U.LINES)):Yt.setMode(U.TRIANGLES);else if(L.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),bt.setLineWidth(vt*fe()),L.isLineSegments?Yt.setMode(U.LINES):L.isLineLoop?Yt.setMode(U.LINE_LOOP):Yt.setMode(U.LINE_STRIP)}else L.isPoints?Yt.setMode(U.POINTS):L.isSprite&&Yt.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Yt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let vt=L._multiDrawStarts,gn=L._multiDrawCounts,Kt=L._multiDrawCount,Qe=pt?Y.get(pt).bytesPerElement:1,hi=Mt.get(B).currentProgram.getUniforms();for(let Oe=0;Oe<Kt;Oe++)hi.setValue(U,"_gl_DrawID",Oe),Yt.render(vt[Oe]/Qe,gn[Oe])}else if(L.isInstancedMesh)Yt.renderInstances(Xt,se,L.count);else if(F.isInstancedBufferGeometry){let vt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,gn=Math.min(F.instanceCount,vt);Yt.renderInstances(Xt,se,gn)}else Yt.render(Xt,se)};function Qt(_,D,F){_.transparent===!0&&_.side===Ve&&_.forceSinglePass===!1?(_.side=Ne,_.needsUpdate=!0,Ss(_,D,F),_.side=Bn,_.needsUpdate=!0,Ss(_,D,F),_.side=Ve):Ss(_,D,F)}this.compile=function(_,D,F=null){F===null&&(F=_),f=Wt.get(F),f.init(D),x.push(f),F.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),_!==F&&_.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();let B=new Set;return _.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let $=L.material;if($)if(Array.isArray($))for(let ot=0;ot<$.length;ot++){let ft=$[ot];Qt(ft,F,L),B.add(ft)}else Qt($,F,L),B.add($)}),x.pop(),f=null,B},this.compileAsync=function(_,D,F=null){let B=this.compile(_,D,F);return new Promise(L=>{function $(){if(B.forEach(function(ot){Mt.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){L(_);return}setTimeout($,10)}kt.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Ze=null;function pn(_){Ze&&Ze(_)}function _l(){Gn.stop()}function Il(){Gn.start()}let Gn=new eh;Gn.setAnimationLoop(pn),typeof self!="undefined"&&Gn.setContext(self),this.setAnimationLoop=function(_){Ze=_,z.setAnimationLoop(_),_===null?Gn.stop():Gn.start()},z.addEventListener("sessionstart",_l),z.addEventListener("sessionend",Il),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(D),D=z.getCamera()),_.isScene===!0&&_.onBeforeRender(p,_,D,R),f=Wt.get(_,x.length),f.init(D),x.push(f),Et.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,mt),g=ht.get(_,E.length),g.init(),E.push(g),z.enabled===!0&&z.isPresenting===!0){let $=p.xr.getDepthSensingMesh();$!==null&&Kr($,D,-1/0,p.sortObjects)}Kr(_,D,0,p.sortObjects),g.finish(),p.sortObjects===!0&&g.sort(nt,ct),Gt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Gt&&St.addToRenderList(g,_),this.info.render.frame++,tt===!0&&J.beginShadows();let F=f.state.shadowsArray;ut.render(F,_,D),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,L=g.transmissive;if(f.setupLights(),D.isArrayCamera){let $=D.cameras;if(L.length>0)for(let ot=0,ft=$.length;ot<ft;ot++){let pt=$[ot];bl(B,L,_,pt)}Gt&&St.render(_);for(let ot=0,ft=$.length;ot<ft;ot++){let pt=$[ot];Ml(g,_,pt,pt.viewport)}}else L.length>0&&bl(B,L,_,D),Gt&&St.render(_),Ml(g,_,D);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),_.isScene===!0&&_.onAfterRender(p,_,D),ee.resetDefaultState(),I=-1,y=null,x.pop(),x.length>0?(f=x[x.length-1],tt===!0&&J.setGlobalState(p.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Kr(_,D,F,B){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||X.intersectsSprite(_)){B&&Bt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Et);let ot=W.update(_),ft=_.material;ft.visible&&g.push(_,ot,ft,F,Bt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||X.intersectsObject(_))){let ot=W.update(_),ft=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Bt.copy(_.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Bt.copy(ot.boundingSphere.center)),Bt.applyMatrix4(_.matrixWorld).applyMatrix4(Et)),Array.isArray(ft)){let pt=ot.groups;for(let Pt=0,Lt=pt.length;Pt<Lt;Pt++){let gt=pt[Pt],Xt=ft[gt.materialIndex];Xt&&Xt.visible&&g.push(_,ot,Xt,F,Bt.z,gt)}}else ft.visible&&g.push(_,ot,ft,F,Bt.z,null)}}let $=_.children;for(let ot=0,ft=$.length;ot<ft;ot++)Kr($[ot],D,F,B)}function Ml(_,D,F,B){let L=_.opaque,$=_.transmissive,ot=_.transparent;f.setupLightsView(F),tt===!0&&J.setGlobalState(p.clippingPlanes,F),B&&bt.viewport(w.copy(B)),L.length>0&&bs(L,D,F),$.length>0&&bs($,D,F),ot.length>0&&bs(ot,D,F),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function bl(_,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new De(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?rn:bn,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));let $=f.state.transmissionRenderTarget[B.id],ot=B.viewport||w;$.setSize(ot.z,ot.w);let ft=p.getRenderTarget();p.setRenderTarget($),p.getClearColor(H),Z=p.getClearAlpha(),Z<1&&p.setClearColor(16777215,.5),p.clear(),Gt&&St.render(F);let pt=p.toneMapping;p.toneMapping=Nn;let Pt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),tt===!0&&J.setGlobalState(p.clippingPlanes,B),bs(_,F,B),S.updateMultisampleRenderTarget($),S.updateRenderTargetMipmap($),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let gt=0,Xt=D.length;gt<Xt;gt++){let ne=D[gt],se=ne.object,Le=ne.geometry,Yt=ne.material,vt=ne.group;if(Yt.side===Ve&&se.layers.test(B.layers)){let gn=Yt.side;Yt.side=Ne,Yt.needsUpdate=!0,Sl(se,F,B,Le,Yt,vt),Yt.side=gn,Yt.needsUpdate=!0,Lt=!0}}Lt===!0&&(S.updateMultisampleRenderTarget($),S.updateRenderTargetMipmap($))}p.setRenderTarget(ft),p.setClearColor(H,Z),Pt!==void 0&&(B.viewport=Pt),p.toneMapping=pt}function bs(_,D,F){let B=D.isScene===!0?D.overrideMaterial:null;for(let L=0,$=_.length;L<$;L++){let ot=_[L],ft=ot.object,pt=ot.geometry,Pt=B===null?ot.material:B,Lt=ot.group;ft.layers.test(F.layers)&&Sl(ft,D,F,pt,Pt,Lt)}}function Sl(_,D,F,B,L,$){_.onBeforeRender(p,D,F,B,L,$),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),L.onBeforeRender(p,D,F,B,_,$),L.transparent===!0&&L.side===Ve&&L.forceSinglePass===!1?(L.side=Ne,L.needsUpdate=!0,p.renderBufferDirect(F,D,B,L,_,$),L.side=Bn,L.needsUpdate=!0,p.renderBufferDirect(F,D,B,L,_,$),L.side=Ve):p.renderBufferDirect(F,D,B,L,_,$),_.onAfterRender(p,D,F,B,L,$)}function Ss(_,D,F){D.isScene!==!0&&(D=ue);let B=Mt.get(_),L=f.state.lights,$=f.state.shadowsArray,ot=L.state.version,ft=Ct.getParameters(_,L.state,$,D,F),pt=Ct.getProgramCacheKey(ft),Pt=B.programs;B.environment=_.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(_.isMeshStandardMaterial?V:v).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,Pt===void 0&&(_.addEventListener("dispose",Dt),Pt=new Map,B.programs=Pt);let Lt=Pt.get(pt);if(Lt!==void 0){if(B.currentProgram===Lt&&B.lightsStateVersion===ot)return Tl(_,ft),Lt}else ft.uniforms=Ct.getUniforms(_),_.onBeforeCompile(ft,p),Lt=Ct.acquireProgram(ft,pt),Pt.set(pt,Lt),B.uniforms=ft.uniforms;let gt=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(gt.clippingPlanes=J.uniform),Tl(_,ft),B.needsLights=Yh(_),B.lightsStateVersion=ot,B.needsLights&&(gt.ambientLightColor.value=L.state.ambient,gt.lightProbe.value=L.state.probe,gt.directionalLights.value=L.state.directional,gt.directionalLightShadows.value=L.state.directionalShadow,gt.spotLights.value=L.state.spot,gt.spotLightShadows.value=L.state.spotShadow,gt.rectAreaLights.value=L.state.rectArea,gt.ltc_1.value=L.state.rectAreaLTC1,gt.ltc_2.value=L.state.rectAreaLTC2,gt.pointLights.value=L.state.point,gt.pointLightShadows.value=L.state.pointShadow,gt.hemisphereLights.value=L.state.hemi,gt.directionalShadowMap.value=L.state.directionalShadowMap,gt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,gt.spotShadowMap.value=L.state.spotShadowMap,gt.spotLightMatrix.value=L.state.spotLightMatrix,gt.spotLightMap.value=L.state.spotLightMap,gt.pointShadowMap.value=L.state.pointShadowMap,gt.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Lt,B.uniformsList=null,Lt}function El(_){if(_.uniformsList===null){let D=_.currentProgram.getUniforms();_.uniformsList=Di.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function Tl(_,D){let F=Mt.get(_);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Wh(_,D,F,B,L){D.isScene!==!0&&(D=ue),S.resetTextureUnits();let $=D.fog,ot=B.isMeshStandardMaterial?D.environment:null,ft=R===null?p.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ki,pt=(B.isMeshStandardMaterial?V:v).get(B.envMap||ot),Pt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Lt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),gt=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,ne=!!F.morphAttributes.color,se=Nn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(se=p.toneMapping);let Le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Yt=Le!==void 0?Le.length:0,vt=Mt.get(B),gn=f.state.lights;if(tt===!0&&(mt===!0||_!==y)){let Ye=_===y&&B.id===I;J.setState(B,_,Ye)}let Kt=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==gn.state.version||vt.outputColorSpace!==ft||L.isBatchedMesh&&vt.batching===!1||!L.isBatchedMesh&&vt.batching===!0||L.isBatchedMesh&&vt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&vt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&vt.instancing===!1||!L.isInstancedMesh&&vt.instancing===!0||L.isSkinnedMesh&&vt.skinning===!1||!L.isSkinnedMesh&&vt.skinning===!0||L.isInstancedMesh&&vt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&vt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&vt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&vt.instancingMorph===!1&&L.morphTexture!==null||vt.envMap!==pt||B.fog===!0&&vt.fog!==$||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==J.numPlanes||vt.numIntersection!==J.numIntersection)||vt.vertexAlphas!==Pt||vt.vertexTangents!==Lt||vt.morphTargets!==gt||vt.morphNormals!==Xt||vt.morphColors!==ne||vt.toneMapping!==se||vt.morphTargetsCount!==Yt)&&(Kt=!0):(Kt=!0,vt.__version=B.version);let Qe=vt.currentProgram;Kt===!0&&(Qe=Ss(B,D,L));let hi=!1,Oe=!1,$i=!1,re=Qe.getUniforms(),ln=vt.uniforms;if(bt.useProgram(Qe.program)&&(hi=!0,Oe=!0,$i=!0),B.id!==I&&(I=B.id,Oe=!0),hi||y!==_){bt.buffers.depth.getReversed()?(st.copy(_.projectionMatrix),qu(st),Du(st),re.setValue(U,"projectionMatrix",st)):re.setValue(U,"projectionMatrix",_.projectionMatrix),re.setValue(U,"viewMatrix",_.matrixWorldInverse);let En=re.map.cameraPosition;En!==void 0&&En.setValue(U,qt.setFromMatrixPosition(_.matrixWorld)),zt.logarithmicDepthBuffer&&re.setValue(U,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(U,"isOrthographic",_.isOrthographicCamera===!0),y!==_&&(y=_,Oe=!0,$i=!0)}if(L.isSkinnedMesh){re.setOptional(U,L,"bindMatrix"),re.setOptional(U,L,"bindMatrixInverse");let Ye=L.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),re.setValue(U,"boneTexture",Ye.boneTexture,S))}L.isBatchedMesh&&(re.setOptional(U,L,"batchingTexture"),re.setValue(U,"batchingTexture",L._matricesTexture,S),re.setOptional(U,L,"batchingIdTexture"),re.setValue(U,"batchingIdTexture",L._indirectTexture,S),re.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&re.setValue(U,"batchingColorTexture",L._colorsTexture,S));let ts=F.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&wt.update(L,F,Qe),(Oe||vt.receiveShadow!==L.receiveShadow)&&(vt.receiveShadow=L.receiveShadow,re.setValue(U,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ln.envMap.value=pt,ln.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(ln.envMapIntensity.value=D.environmentIntensity),Oe&&(re.setValue(U,"toneMappingExposure",p.toneMappingExposure),vt.needsLights&&Xh(ln,$i),$&&B.fog===!0&&rt.refreshFogUniforms(ln,$),rt.refreshMaterialUniforms(ln,B,k,j,f.state.transmissionRenderTarget[_.id]),Di.upload(U,El(vt),ln,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Di.upload(U,El(vt),ln,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(U,"center",L.center),re.setValue(U,"modelViewMatrix",L.modelViewMatrix),re.setValue(U,"normalMatrix",L.normalMatrix),re.setValue(U,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ye=B.uniformsGroups;for(let En=0,Tn=Ye.length;En<Tn;En++){let wl=Ye[En];P.update(wl,Qe),P.bind(wl,Qe)}}return Qe}function Xh(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function Yh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(_,D,F){Mt.get(_.texture).__webglTexture=D,Mt.get(_.depthTexture).__webglTexture=F;let B=Mt.get(_);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,D){let F=Mt.get(_);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(_,D=0,F=0){R=_,M=D,T=F;let B=!0,L=null,$=!1,ot=!1;if(_){let pt=Mt.get(_);if(pt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(pt.__webglFramebuffer===void 0)S.setupRenderTarget(_);else if(pt.__hasExternalTextures)S.rebindTextures(_,Mt.get(_.texture).__webglTexture,Mt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let gt=_.depthTexture;if(pt.__boundDepthTexture!==gt){if(gt!==null&&Mt.has(gt)&&(_.width!==gt.image.width||_.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(_)}}let Pt=_.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ot=!0);let Lt=Mt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?L=Lt[D][F]:L=Lt[D],$=!0):_.samples>0&&S.useMultisampledRTT(_)===!1?L=Mt.get(_).__webglMultisampledFramebuffer:Array.isArray(Lt)?L=Lt[F]:L=Lt,w.copy(_.viewport),O.copy(_.scissor),N=_.scissorTest}else w.copy(_t).multiplyScalar(k).floor(),O.copy(Ft).multiplyScalar(k).floor(),N=$t;if(bt.bindFramebuffer(U.FRAMEBUFFER,L)&&B&&bt.drawBuffers(_,L),bt.viewport(w),bt.scissor(O),bt.setScissorTest(N),$){let pt=Mt.get(_.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,F)}else if(ot){let pt=Mt.get(_.texture),Pt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,pt.__webglTexture,F||0,Pt)}I=-1},this.readRenderTargetPixels=function(_,D,F,B,L,$,ot){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Mt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){bt.bindFramebuffer(U.FRAMEBUFFER,ft);try{let pt=_.texture,Pt=pt.format,Lt=pt.type;if(!zt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-B&&F>=0&&F<=_.height-L&&U.readPixels(D,F,B,L,Vt.convert(Pt),Vt.convert(Lt),$)}finally{let pt=R!==null?Mt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(_,D,F,B,L,$,ot){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Mt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){let pt=_.texture,Pt=pt.format,Lt=pt.type;if(!zt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=_.width-B&&F>=0&&F<=_.height-L){bt.bindFramebuffer(U.FRAMEBUFFER,ft);let gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.bufferData(U.PIXEL_PACK_BUFFER,$.byteLength,U.STREAM_READ),U.readPixels(D,F,B,L,Vt.convert(Pt),Vt.convert(Lt),0);let Xt=R!==null?Mt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,Xt);let ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Pu(U,ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,$),U.deleteBuffer(gt),U.deleteSync(ne),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,D=null,F=0){_.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,_=arguments[1]);let B=Math.pow(2,-F),L=Math.floor(_.image.width*B),$=Math.floor(_.image.height*B),ot=D!==null?D.x:0,ft=D!==null?D.y:0;S.setTexture2D(_,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ot,ft,L,$),bt.unbindTexture()},this.copyTextureToTexture=function(_,D,F=null,B=null,L=0){_.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,_=arguments[1],D=arguments[2],L=arguments[3]||0,F=null);let $,ot,ft,pt,Pt,Lt,gt,Xt,ne,se=_.isCompressedTexture?_.mipmaps[L]:_.image;F!==null?($=F.max.x-F.min.x,ot=F.max.y-F.min.y,ft=F.isBox3?F.max.z-F.min.z:1,pt=F.min.x,Pt=F.min.y,Lt=F.isBox3?F.min.z:0):($=se.width,ot=se.height,ft=se.depth||1,pt=0,Pt=0,Lt=0),B!==null?(gt=B.x,Xt=B.y,ne=B.z):(gt=0,Xt=0,ne=0);let Le=Vt.convert(D.format),Yt=Vt.convert(D.type),vt;D.isData3DTexture?(S.setTexture3D(D,0),vt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(S.setTexture2DArray(D,0),vt=U.TEXTURE_2D_ARRAY):(S.setTexture2D(D,0),vt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let gn=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Qe=U.getParameter(U.UNPACK_SKIP_PIXELS),hi=U.getParameter(U.UNPACK_SKIP_ROWS),Oe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Lt);let $i=_.isDataArrayTexture||_.isData3DTexture,re=D.isDataArrayTexture||D.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let ln=Mt.get(_),ts=Mt.get(D),Ye=Mt.get(ln.__renderTarget),En=Mt.get(ts.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,Ye.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let Tn=0;Tn<ft;Tn++)$i&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(_).__webglTexture,L,Lt+Tn),_.isDepthTexture?(re&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(D).__webglTexture,L,ne+Tn),U.blitFramebuffer(pt,Pt,$,ot,gt,Xt,$,ot,U.DEPTH_BUFFER_BIT,U.NEAREST)):re?U.copyTexSubImage3D(vt,L,gt,Xt,ne+Tn,pt,Pt,$,ot):U.copyTexSubImage2D(vt,L,gt,Xt,ne+Tn,pt,Pt,$,ot);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else re?_.isDataTexture||_.isData3DTexture?U.texSubImage3D(vt,L,gt,Xt,ne,$,ot,ft,Le,Yt,se.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(vt,L,gt,Xt,ne,$,ot,ft,Le,se.data):U.texSubImage3D(vt,L,gt,Xt,ne,$,ot,ft,Le,Yt,se):_.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,gt,Xt,$,ot,Le,Yt,se.data):_.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,gt,Xt,se.width,se.height,Le,se.data):U.texSubImage2D(U.TEXTURE_2D,L,gt,Xt,$,ot,Le,Yt,se);U.pixelStorei(U.UNPACK_ROW_LENGTH,gn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,hi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe),L===0&&D.generateMipmaps&&U.generateMipmap(vt),bt.unbindTexture()},this.copyTextureToTexture3D=function(_,D,F=null,B=null,L=0){return _.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,_=arguments[2],D=arguments[3],L=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,D,F,B,L)},this.initRenderTarget=function(_){Mt.get(_).__webglFramebuffer===void 0&&S.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?S.setTextureCube(_,0):_.isData3DTexture?S.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?S.setTexture2DArray(_,0):S.setTexture2D(_,0),bt.unbindTexture()},this.resetState=function(){M=0,T=0,R=null,bt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ot._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ot._getUnpackColorSpace()}};var Ar=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},qo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=po,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Re=new q,xr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ri=class extends Sn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bi,rs=new q,Si=new q,Ei=new q,Ti=new At,as=new At,ah=new ae,Ks=new q,os=new q,Zs=new q,Tc=new At,ba=new At,wc=new At,Hi=class extends be{constructor(t=new ri){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qo(e,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new xr(n,3,0,!1)),bi.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=bi,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),ah.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ei.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-Ei.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Qs(Ks.set(-.5,-.5,0),Ei,a,Si,s,r),Qs(os.set(.5,-.5,0),Ei,a,Si,s,r),Qs(Zs.set(.5,.5,0),Ei,a,Si,s,r),Tc.set(0,0),ba.set(1,0),wc.set(1,1);let o=t.ray.intersectTriangle(Ks,os,Zs,!1,rs);if(o===null&&(Qs(os.set(-.5,.5,0),Ei,a,Si,s,r),ba.set(0,1),o=t.ray.intersectTriangle(Ks,Zs,os,!1,rs),o===null))return;let l=t.ray.origin.distanceTo(rs);l<t.near||l>t.far||e.push({distance:l,point:rs.clone(),uv:Vn.getInterpolation(rs,Ks,os,Zs,Tc,ba,wc,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Qs(i,t,e,n,s,r){Ti.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(as.x=r*Ti.x-s*Ti.y,as.y=s*Ti.x+r*Ti.y):as.copy(Ti),i.copy(t),i.x+=as.x,i.y+=as.y,i.applyMatrix4(ah)}var ai=class extends Sn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rc=new ae,Do=new ps,Js=new Bi,js=new q,Gi=class extends be{constructor(t=new me,e=new ai){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Rc.copy(s).invert(),Do.copy(t.ray).applyMatrix4(Rc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let A=d,C=m;A<C;A++){let g=c.getX(A);js.fromBufferAttribute(u,g),Pc(js,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let A=d,C=m;A<C;A++)js.fromBufferAttribute(u,A),Pc(js,A,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pc(i,t,e,n,s,r,a){let o=Do.distanceSqToPoint(i);if(o<e){let l=new q;Do.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Wi=class extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],A=0,C=[],g=n/2,f=0;E(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(m,2));function E(){let p=new q,b=new q,M=0,T=(e-t)/n;for(let R=0;R<=r;R++){let I=[],y=R/r,w=y*(e-t)+t;for(let O=0;O<=s;O++){let N=O/s,H=N*l+o,Z=Math.sin(H),G=Math.cos(H);b.x=w*Z,b.y=-y*n+g,b.z=w*G,u.push(b.x,b.y,b.z),p.set(Z,T,G).normalize(),d.push(p.x,p.y,p.z),m.push(N,1-y),I.push(A++)}C.push(I)}for(let R=0;R<s;R++)for(let I=0;I<r;I++){let y=C[I][R],w=C[I+1][R],O=C[I+1][R+1],N=C[I][R+1];(t>0||I!==0)&&(h.push(y,w,N),M+=3),(e>0||I!==r-1)&&(h.push(w,O,N),M+=3)}c.addGroup(f,M,0),f+=M}function x(p){let b=A,M=new At,T=new q,R=0,I=p===!0?t:e,y=p===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*y,0),d.push(0,y,0),m.push(.5,.5),A++;let w=A;for(let O=0;O<=s;O++){let H=O/s*l+o,Z=Math.cos(H),G=Math.sin(H);T.x=I*G,T.y=g*y,T.z=I*Z,u.push(T.x,T.y,T.z),d.push(0,y,0),M.x=Z*.5+.5,M.y=G*.5*y+.5,m.push(M.x,M.y),A++}for(let O=0;O<s;O++){let N=b+O,H=w+O;p===!0?h.push(H,H+1,N):h.push(H+1,H,N),R+=3}c.addGroup(f,R,p===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class i extends Xi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vr=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new q,d=new q,m=[],A=[],C=[],g=[];for(let f=0;f<=n;f++){let E=[],x=f/n,p=0;f===0&&a===0?p=.5/e:f===n&&l===Math.PI&&(p=-.5/e);for(let b=0;b<=e;b++){let M=b/e;u.x=-t*Math.cos(s+M*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+M*r)*Math.sin(a+x*o),A.push(u.x,u.y,u.z),d.copy(u).normalize(),C.push(d.x,d.y,d.z),g.push(M+p,1-x),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let x=h[f][E+1],p=h[f][E],b=h[f+1][E],M=h[f+1][E+1];(f!==0||a>0)&&m.push(x,p,M),(f!==n-1||l<Math.PI)&&m.push(p,b,M)}this.setIndex(m),this.setAttribute("position",new oe(A,3)),this.setAttribute("normal",new oe(C,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var As=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new q,u=new q,d=new q;for(let m=0;m<=n;m++)for(let A=0;A<=s;A++){let C=A/s*r,g=m/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(C),u.y=(t+e*Math.cos(g))*Math.sin(C),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(C),h.y=t*Math.sin(C),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(A/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let A=1;A<=s;A++){let C=(s+1)*m+A-1,g=(s+1)*(m-1)+A-1,f=(s+1)*(m-1)+A,E=(s+1)*m+A;a.push(C,g,E),a.push(g,f,E)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var yr=class extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var Ie=class extends Sn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function $s(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Em(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ll:r=t,o=2*e-n;break;case Ul:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ll:a=t,l=2*n-e;break;case Ul:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,A=(n-e)/(s-e),C=A*A,g=C*A,f=-d*g+2*d*C-d*A,E=(1+d)*g+(-1.5-2*d)*C+(-.5+d)*A+1,x=(-1-m)*g+(1.5+m)*C+.5*A,p=m*g-m*C;for(let b=0;b!==o;++b)r[b]=f*a[h+b]+E*a[c+b]+x*a[l+b]+p*a[u+b];return r}},Uo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Vo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case fo:e=this.InterpolantFactoryMethodLinear;break;case Qr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Em(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,m=u+n;for(let A=0;A!==n;++A){let C=e[u+A];if(C!==e[d+A]||C!==e[m+A]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=fo;var oi=class extends sn{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=rr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends sn{};No.prototype.ValueTypeName="color";var Fo=class extends sn{};Fo.prototype.ValueTypeName="number";var Bo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)kn.slerpFlat(r,0,a,c-o,a,c,l);return r}},_r=class extends sn{InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends sn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=rr;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends sn{};Oo.prototype.ValueTypeName="vector";var ko=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],A=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return A}return null}}},Tm=new ko,zo=class{constructor(t){this.manager=t!==void 0?t:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ir=class extends xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Sa=new ae,qc=new q,Dc=new q,Mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(qc),Dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dc),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Lc=new ae,ls=new q,Ea=new q,Ho=class extends Mr{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),Ea.copy(n.position),Ea.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ea),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),Lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc)}},Cs=class extends xs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ho}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Go=class extends Mr{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Go}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Uc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Uc(){return performance.now()}var ll="\\[\\]\\.:\\/",wm=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",Rm="[^"+ll.replace("\\.","")+"]",Pm=/((?:WC+[\/:])*)/.source.replace("WC",cl),qm=/(WCOD+)?/.source.replace("WCOD",Rm),Dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),Lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),Um=new RegExp("^"+Pm+qm+Dm+Lm+"$"),Vm=["material","materials","bones","map"],Wo=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wm,"")}static parseTrackName(t){let e=Um.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Wo;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nA=new Float32Array(1);var Vc=new ae,Er=class{constructor(t,e,n=0,s=1/0){this.ray=new ps(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vc),this}intersectObject(t,e=!0,n=[]){return Xo(t,this,n,e),n.sort(Nc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xo(t[s],this,n,e);return n.sort(Nc),n}};function Nc(i,t){return i.distance-t.distance}function Xo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Xo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);function xt(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function oh(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function lh(i,t,e,n="#ffd23a"){return`
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
`}var Lr={U:[0,-1],D:[0,1],L:[-1,0],R:[1,0]},hl=["U","D","L","R"],le={FLOOR:1,CRUMBLE:2,CRACKED:3,PIT:4};function uh(i){let t=i.rows,e=t.length,n=Math.max(...t.map(a=>a.length)),s=n*e,r={id:i.id,tomb:i.tomb,par:i.par||0,hint:i.hint,arrows:i.arrows||[],rows:t,w:n,h:e,n:s,wall:new Uint8Array(s).fill(1),carpet:new Uint8Array(s),terr0:new Uint8Array(s),plateAt:new Int8Array(s).fill(-1),doorAt:new Int8Array(s).fill(-1),keyAt:new Int8Array(s).fill(-1),lockAt:new Int8Array(s).fill(-1),torchAt:new Int8Array(s).fill(-1),gateAt:new Uint8Array(s),start:-1,exit:-1,platesByGrp:[[],[],[],[]],doors:[],keyCells:[],lockCells:[],torchCells:[],gateCells:[],blocks0:[],dyn:[]};for(let a=0;a<e;a++)for(let o=0;o<n;o++){let l=t[a][o]||" ",c=a*n+o;if(!(l===" "||l==="#")){if(r.wall[c]=0,r.terr0[c]=le.FLOOR,l==="~")r.carpet[c]=1;else if(l==="@")r.start=c;else if(l==="E")r.exit=c;else if(l==="X")r.blocks0.push(c);else if(l==="K")r.keyAt[c]=r.keyCells.length,r.keyCells.push(c);else if(l==="L")r.lockAt[c]=r.lockCells.length,r.lockCells.push(c);else if(l==="T")r.torchAt[c]=r.torchCells.length,r.torchCells.push(c);else if(l==="G")r.gateAt[c]=1,r.gateCells.push(c);else if(l>="1"&&l<="4"){let h=l.charCodeAt(0)-49;r.plateAt[c]=h,r.platesByGrp[h].push(c)}else if(l>="A"&&l<="D"){let h=l.charCodeAt(0)-65;r.doorAt[c]=h,r.doors.push(c)}else if(l==="c")r.terr0[c]=le.CRUMBLE,r.dyn.push(c);else if(l==="p")r.terr0[c]=le.PIT,r.dyn.push(c);else if(l!==".")throw new Error(`level ${i.id}: unknown char ${l}`)}}return r.torchFull=(1<<r.torchCells.length)-1,r.keyFull=(1<<r.keyCells.length)-1,r}function qr(i){return{p:i.start,blocks:i.blocks0.slice().sort((t,e)=>t-e),terr:i.terr0.slice(),keys:0,locks:0,torches:0,held:0,moves:0,falls:0,won:!1}}function ul(i){return{...i,blocks:i.blocks.slice(),terr:i.terr.slice()}}function Ur(i,t,e){let n=i.platesByGrp[e];if(!n.length)return!1;for(let s of n)if(t.p!==s&&!t.blocks.includes(s))return!1;return!0}function ch(i,t){let e=0;for(let n=0;n<4;n++)Ur(i,t,n)&&(e|=1<<n);return e}function Vr(i,t,e){let n=i.doorAt[e];return n<0||t.p===e||t.blocks.includes(e)?!0:Ur(i,t,n)}function Nr(i,t){return i.torchCells.length>0&&t.torches===i.torchFull}function dl(i,t,e){let n=i.lockAt[e];return n<0||(t.locks>>n&1)===1}function Nm(i,t,e){if(i.wall[e])return!1;let n=t.terr[e];return!(n!==le.FLOOR&&n!==le.PIT||t.blocks.includes(e)||i.torchAt[e]>=0||i.gateAt[e]&&!Nr(i,t)||i.doorAt[e]>=0&&!Vr(i,t,e)||i.lockAt[e]>=0&&!dl(i,t,e)||i.keyAt[e]>=0&&!(t.keys>>i.keyAt[e]&1)||e===i.exit||e===t.p)}function Fr(i,t,e){let[n,s]=Lr[e],r=i.w,a=t.p%r,o=t.p/r|0,l=a+n,c=o+s,h=x=>({s:t,ev:[{type:"bump",why:x,dir:e}],changed:!1,fell:!1});if(t.won)return h("won");if(l<0||c<0||l>=r||c>=i.h)return h("wall");let u=c*r+l;if(i.wall[u])return h("wall");if(t.terr[u]===le.PIT)return h("pit");let d=ul(t),m=[],A=ch(i,t),C=!1,g=i.torchAt[u];if(g>=0){if(d.torches>>g&1)return h("brazier");d.torches|=1<<g,m.push({type:"light",cell:u,idx:g,dir:e}),d.torches===i.torchFull&&m.push({type:"gate",open:!0})}else{if(i.gateAt[u]&&!Nr(i,t))return h("gate");if(!Vr(i,t,u))return h("door");let x=i.lockAt[u];if(x>=0&&!(d.locks>>x&1))if(d.held>0)d.locks|=1<<x,d.held--,m.push({type:"unlock",cell:u});else return h("lock");let p=d.blocks.indexOf(u);if(p>=0){let T=l+n,R=c+s;if(T<0||R<0||T>=r||R>=i.h)return h("block");let I=R*r+T;if(!Nm(i,t,I))return h("block");d.blocks.splice(p,1),d.terr[I]===le.PIT?(d.terr[I]=le.FLOOR,m.push({type:"push",from:u,to:I,fill:!0,dir:e})):(d.blocks.push(I),d.blocks.sort((y,w)=>y-w),m.push({type:"push",from:u,to:I,fill:!1,dir:e}))}let b=d.p;d.p=u,C=!0,m.push({type:"move",from:b,to:u,dir:e});let M=i.keyAt[u];if(M>=0&&!(d.keys>>M&1)&&(d.keys|=1<<M,d.held++,m.push({type:"key",cell:u,idx:M})),u===i.exit)return d.won=!0,d.moves++,m.push({type:"win"}),{s:d,ev:m,changed:!0,fell:!1};d.terr[b]===le.CRUMBLE&&(d.terr[b]=le.CRACKED,m.push({type:"crack",cell:b}),d._fresh=b)}let f=!1;for(let x of i.dyn)d.terr[x]===le.CRACKED&&x!==d._fresh&&(d.terr[x]=le.PIT,m.push({type:"crumble",cell:x}),d.p===x&&(f=!0));if(delete d._fresh,f){let x=qr(i);return x.falls=t.falls+1,m.push({type:"fall"}),{s:x,ev:m,changed:!0,fell:!0}}d.moves++;let E=ch(i,d);for(let x=0;x<4;x++)(A^E)>>x&1&&m.push({type:"plate",grp:x,on:!!(E>>x&1)});return{s:d,ev:m,changed:!0,fell:!1}}function vs(i,t){let e=`${t.p}|${t.blocks.join(",")}|${t.keys}|${t.locks}|${t.torches}|`;for(let n of i.dyn)e+=t.terr[n];return e}function hh(i,t=qr(i),e={}){let{allKeys:n=!1,maxStates:s=2e6}=e,r=[t],a=[-1],o=[""],l=new Set([vs(i,t)]);for(let c=0;c<r.length;c++){if(r.length>s)return{found:!1,states:r.length,capped:!0};let h=r[c];for(let u of hl){let d=Fr(i,h,u);if(!d.changed||d.fell)continue;let m=d.s;if(m.won){if(n&&m.keys!==i.keyFull)continue;let C=u,g=c;for(;a[g]>=0;)C=o[g]+C,g=a[g];return{found:!0,path:C,length:C.length,states:r.length}}let A=vs(i,m);l.has(A)||(l.add(A),r.push(m),a.push(c),o.push(u))}}return{found:!1,states:r.length}}function fl(i,t){let e=hh(i,t,{allKeys:!0,maxStates:3e5});return e.found||(e=hh(i,t,{allKeys:!1,maxStates:3e5})),e.found?e.path[0]:null}function dh(i,t){let e=t.keys===i.keyFull;return 1+(e?1:0)+(e&&t.moves<=i.par?1:0)}var Dr=class{constructor(t){this.L=t,this.s=qr(t),this.hist=[]}move(t){let e=Fr(this.L,this.s,t);return e.changed&&(this.hist.push(this.s),this.hist.length>500&&this.hist.shift(),this.s=e.s),e}undo(){return this.hist.length?(this.s=this.hist.pop(),!0):!1}reset(){return!this.hist.length&&this.s.moves===0?!1:(this.hist.push(this.s),this.s=qr(this.L),!0)}};function fh(i){let t=i&&typeof i=="object"?i:{},e=(s,r)=>Number.isFinite(s)?s:r,n=s=>{let r={};if(s&&typeof s=="object")for(let a of Object.keys(s))Number.isFinite(s[a])&&(r[a]=s[a]);return r};return{unlocked:Math.max(1,Math.min(12,e(t.unlocked,1))),stars:n(t.stars),keys:n(t.keys),best:n(t.best),muted:!!t.muted}}var ph=[{id:"sand",name:["\u0631\u0645\u0627\u0644 \u0627\u0644\u0641\u0631\u0639\u0648\u0646","Pharaoh Sands"],icon:"\u{1F3DC}\uFE0F"},{id:"gold",name:["\u0627\u0644\u0643\u0646\u0632 \u0627\u0644\u0630\u0647\u0628\u064A","Golden Treasury"],icon:"\u{1F451}"},{id:"moon",name:["\u0645\u0642\u0628\u0631\u0629 \u0627\u0644\u0642\u0645\u0631","Moonlit Tomb"],icon:"\u{1F319}"}],Fe=[{id:1,tomb:0,par:25,hint:["\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0645\u0642\u0628\u0631\u0629! \u0627\u062C\u0645\u0639 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D \u062B\u0645 \u0627\u062E\u0631\u062C","Explore the tomb! Find the keys, then leave"],arrows:[[1,4,"U"],[1,2,"U"],[3,1,"R"]],rows:["#######","#K~~~E#","#~###.#","#~#...#","#~#.#.#","#@..#K#","#######"]},{id:2,tomb:0,par:25,hint:["\u0627\u062F\u0641\u0639 \u0627\u0644\u062D\u062C\u0631 \u0641\u0648\u0642 \u0627\u0644\u0642\u0631\u0635 \u0627\u0644\u0630\u0647\u0628\u064A!","Push the block onto the plate!"],arrows:[[2,4,"R"],[3,4,"R"]],rows:["#######","#K#E#K#","#.#A#.#","#.....#","#.X..1#","#@....#","#######"]},{id:3,tomb:0,par:23,hint:["\u0627\u0645\u0644\u0623 \u0627\u0644\u062D\u0641\u0631\u0629 \u0628\u0627\u0644\u062D\u062C\u0631 \u0644\u062A\u0639\u0628\u0631","Fill the pit with the block to cross"],rows:["#######","#.....#","#.X..K#","#..####","#@.pKE#","#######"]},{id:4,tomb:0,par:28,hint:["\u0627\u0644\u0628\u0627\u0628 \u0627\u0644\u0645\u0642\u0641\u0644 \u064A\u062D\u062A\u0627\u062C \u0645\u0641\u062A\u0627\u062D\u0627\u064B","The locked door needs a key"],rows:["########","#@..#E.#","#...#L.#","#.K....#","#..X.#A#","#1...#K#","########"]},{id:5,tomb:1,par:18,hint:["\u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u062A\u0634\u0642\u0642\u0629 \u062A\u0642\u0639 \u0628\u0639\u062F \u0623\u0646 \u062A\u062A\u0631\u0643\u0647\u0627!","Cracked floor falls once you leave it!"],rows:["########","#@.c..K#","#.####.#","#.c..c.#","#K####E#","########"]},{id:6,tomb:1,par:45,hint:["\u0627\u0644\u0628\u0627\u0628 \u064A\u062D\u062A\u0627\u062C \u0642\u0631\u0635\u064A\u0646!","The door needs two plates!"],rows:["#######","#1#E#1#","#K#A#K#","#.X.X.#","#.....#","#..@..#","#######"]},{id:7,tomb:1,par:23,hint:["\u0623\u0634\u0639\u0644 \u0627\u0644\u0645\u0634\u0639\u0644\u064A\u0646 \u0644\u0641\u062A\u062D \u0627\u0644\u0628\u0648\u0627\u0628\u0629","Light both torches to open the gate"],rows:["#######","#K.E.K#","#.#G#.#","#.T.T.#","#.....#","#..@..#","#######"]},{id:8,tomb:1,par:20,hint:["\u062D\u062C\u0631 \u0623\u0648\u0644 \u064A\u0641\u062A\u062D \u0628\u0627\u0628\u0627\u064B... \u0648\u062D\u062C\u0631 \u062B\u0627\u0646\u064D \u064A\u0641\u062A\u062D \u0627\u0644\u0628\u0627\u0628 \u0627\u0644\u0623\u062E\u064A\u0631","One block opens a door... a second block opens the last"],rows:["########","#@..#K.#","#.X.A..#","#1.K#X.#","#####..#","#####2B#","######E#","########"]},{id:9,tomb:2,par:14,hint:["\u062D\u0641\u0631\u062A\u0627\u0646 \u0648\u062D\u062C\u0631\u0627\u0646","Two pits, two blocks"],rows:["########","#.....K#","#.X.X..#","#.....K#","#@..ppE#","########"]},{id:10,tomb:2,par:13,hint:["\u062E\u0630 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D \u0642\u0628\u0644 \u0623\u0646 \u062A\u0639\u0628\u0631 \u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0647\u0634\u0629","Take the keys before the brittle floor"],rows:["########","#@.cX.1#","#K.##A##","#.K.#E##","########"]},{id:11,tomb:2,par:34,hint:["\u0627\u0644\u0645\u0634\u0627\u0639\u0644 \u062B\u0645 \u0627\u0644\u0645\u0641\u062A\u0627\u062D \u062B\u0645 \u0627\u0644\u0628\u0627\u0628","Torches, then a key, then the door"],rows:["#######","#T.E.T#","#.#G#.#","#.#L#.#","#..X..#","#.c.c.#","#K.@.K#","#######"]},{id:12,tomb:2,par:34,hint:["\u063A\u0631\u0641\u0629 \u0627\u0644\u0645\u0644\u0643: \u0643\u0644 \u0627\u0644\u0623\u0633\u0631\u0627\u0631 \u0645\u0639\u0627\u064B","The king's chamber: every secret at once"],rows:["########","#@KX.p.#","######.#","#c.X..1#","#T...TK#","###A####","###L####","###G####","###E####","########"]}];function gh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function mh(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Ah={scrape:"data:audio/mpeg;base64,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",door:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAACUAACAQAA0NFBQUGhoaISEoKCgvLy81NTw8PENDQ0pKSlBQV1dXXl5eZWVra2tycnJ5eYCAgIaGho2NjZSUmpqaoaGhqKivr6+1tbW8vMPDw8rKytDQ0NfX3t7e5eXl6+vy8vL5+fn//wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBEAAAAAAAAAgEKscAfYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJsEtaFMGAAaaZcHcYsAIA4Hy3AYCQJAkEwnmZmZmZLJ5m+XoiIEEAYGLd3d3EAgCAIAgD4Pg+D4OAgCAIAgD4Pn/6wfB8HAQOcTg+D7/+UBAMfKAgCBz/4Pn/wfAEjaUbttstjbcbbbYABDyoglZ4GxLPICCaHIIUO8Th0lDudVDUeVJJw4axZiPiB41Gi1HdW0ps3baJ0+YufudUHq/6mvjnd/3/+2Oo632VGRJAVGJi20u6SjGoZoTc2uxz6XWBT27UqZWqAARIYkaNdG00I23/+zjEBYAMSV15/PKAIXkdL/TDDPwITCp0LYx9Io5FoA8mG+9ACckjDxEIGFg64IGiBGFBYgqc6NO7GFTCo8zqhOb1enq6kWhyK/MVXXeyu215SNb9nXVFXVK9PR6Uqlk7lOcceR9GPKIXUfrA1sV+8djiRChQZpw8FpEMI5slNg0LTC5lt7QinpemHkyZ1AgyzBH0Inm4GefuBvpUzifhyhfUiP0O+f5nEc0cQ8J2JxanDkosvQcHEp9mXE6mJaQnKZC4+t+p5O22igKIEow8hAKxBHIAlAv/+zjEBoAMPHdvh7BJwYUdbOGDChAyXxl0ajDiEbkw+OyqH6XoGreycxbXcMn2srQyKZc9m0JJRojJ+x87l1YUJVssPGSzzwlUeAR4CklDzDlHhEHYTBRZZIlPBuaJg0GjykCwdff9R7/QAKn3AIpq2Kzi9Qw7PHQbBPTeFA/tP+bYy/a1Yw/8OaaWmCnn+jUUCJelgssmDqgKERIY53YhVMdFnkKcljt7O53N3ViX0a1bybn8IHwyoa9r31F0SOthcf23Lfclj0eKi1UQI5SBZmu0jTYWgKH/+zjEBgAL6PN/5hhsqYeh7OWGDTCslHTg+IRBXVOqtFsvKAM9sUtZbY0AGIVs8sNYxLIFNDNGb0vOUtqvaf2eauR589i+f3+xl6jX4bM4zU3u/p3XU/unl2pTNo3v5Nv2OXp5u9/2xsAgNAqEAuOuVHM8ealDiIztskghelXHC9oCR0fr7rnIHq32aLLb67XEKCuLlIJKg1Cm4Q+L6Judv9voWhaOzf0xbV0OH5fl/+2lebylS9HeU8JWVR4gOX2hFLG3mrkq6371qgACAMQ3QgExHISYJQT/+zjEBoAL8J1vh7DpwY6cLWT2DPC1Jmwo2iktCt55Zp+ZH7EVcmF+k2muqICvCUimYGfXuwifilheGSZVeRe7+9DraqSaNLCwwcDwsNbXrdFWDRUQKtBMBFwnFWJS4mMeSkh3d0/Q8AgKy+hANoKcg54EsbykSZicLIRFh6Q7GsWLG73tKkdFdnPXNkyj1XQnAKkGGJAgRbY1KoY+xla5pEbEBPZzpv5kXa1NySkZccTsJBATtUV0FjYWH7lxdOQODmJYMmDolVr39lUJquPWNyIgASxC9Dv/+zjEBgAKrLuFp6Bwsb6ib7T0mXQK2AdcEsECPBXCqivZR+BYmGXwuZAOnMSQ+gl5cyiKdpbyUqIWLRMNiH0UtiDqosoyk5RKZZ/lBnDIXq+m17YpdKmhdjV71/PdYCFkE0l1jRAeooOE0WFy3MootHqsUVxFQuRzqGKznmVeJXBZYVoSc0xSqIoqJlYNwEpk5sRgs7aZvrrnKz9tadxD/vSNTWQTcCr/7ObX8q8A5XtRTO0tr/Lw1n/7WYTiQCqCEhAyHsYHiDnH0q6NywCPbJI5YmSQBdP/+zjEBQAKsOF5pjxsYXWNLaWGDHEGAVk5wq0fosoesZ5R+szZfNdmLisdKCcU6Y+EDKAFmuZnLs9yv+pqWUzrZ+f3i6wyWki3/4yYpw1ba6nUaIyRO51qn891rKudOvkQBQkGAAHEdsHXG7CGoH6g5uLTs+I1mWA1bPVkAnYgM9G1TJarUQaMBWqbjxApBSEMe8zx/zf73B7/u1Wkl/nm/Iz8nG21BH/0+v9RlO6QZv4ZAdnxX1vHufv9+88QYATjkbkaJJBBiCCwgsRnh5U+nVi0gjB0wL7/+zjEDQBKRLV3p7BjwVSPL3T2GTiJFl/7ufPLxbWasUSvY16kHOSqpFr32ar25qWbxmO7mGOtKtZXWliyyYvK3x1pHQoq6u/R1fuQxBAUbOdmjYmhfkPfOdlTJa3PuRmuXKxs42XOnOxx/oENCrdCYPx0A+YK0MwWDwPbVkNcImt8XqhDe9LbFxcanMiM637UAyHFsmsqEVNMoWmwW5r1NpoqUFWlVXaI9Y00CuBlGciA6mXm6DaZbq+0INKdaL+0v0GSeh8jwgZEQvru4UHa9bCJE/L/7ET/+zjEGoAK8JmH5iRpYU2UbvCRiiAQEBQM3pD7oT2DBAGAuiXKOmGMRaaevz6VConFzofYe7/xUADlKIlcqgVAZgfCBkGGB4EtyVKihoHwaKwjlLOMzt/VCqdpYCMvfCreQVw92qxqO98U7hhKdQGooxwoCrQ0mkyIj1e3S0WYRLedBo8mjW63xdvVRktkm0traSHFIrkmKEfNhw2JzfXT0EmEVZiiR8ytknJa01MjJIS/gIdFF8dfMKdTHn1hw8JDo5Q0aUcoUhRawUUkktKg6fwkXKlkX0f/+zjEJoAK2HmPpITUMVKWLQmWDOAcKXNfVRY9//ckYVAARCsReQQSCzqp1/NaVr0YihmPCxSPak/NbxIwbD/GZjNCf4MqE2rOdDEmZWnOZ+X99mPLuRwGGck6OSdrOvFxZpxQkgFe5Oac7WzUxLK2bv+1KkC9arfbI2kAcJvt/WcTIUqk4+KJ8UFCcQxgcnbvXs1AscWLHvcYhgrrEA2EiDhmk3ax813m1W/zdKtKIuGXTRd7KyQ4WWEtvPLUXsbMxGsWcCl1F9YALTLdkkbaAFjqoiMQm2b/+zjEMgAKnLOLp7BLMUoVsDSUjXrislkEXpQhayTpN5I2VgGgVDSqx2ZhJHE2ysQjIiRwuVyZTRFw8jYeztr9srGVQ53/BotNhxzEEh7AGw4x4Q/3bmf9NQCErq66E00dgJExnLAnCg1XpTw5O2Slcuh8bli13DWChLOOD0VAx8tnagYw+KkUiBjRADQjcgNFlMFJ0Nperc1UCKQfcQEygMAayzhyKSb96XVsR/7SGTABJTIDeLbW0WBQGnASOzAHVoKioJTgzXFrE1ZBA9wPIGcYSBUMlyb/+zjEP4AK8GdpLDBDgU2H7vyWGEyWtLAsYCxN7XhcPFzRQXN0sKOSCIcIRocScEhrF62ECWcV2f5AVqz/8rNoKiEq2nbLI0igyeREs3hRpwyEA7IDaE+93KF36dGrmGjDHvB7TNUMaFe7rCl0Q4tfmk08PO8cWKsNvQecYJJdp0W3qB2POJuHhV4MpPsFuq86HdP1axe4XAAYYJktbKbAiBDxPpXigkaAjT59kNiiLz1gEEuiKw5HaM22sn4Rcu++yaiEHFAGJQCFWGaIYJJjxd4YYSsWX67/+zjES4AK2HOHpg0ycVULbXWEmKCLFruDFvWubH1xMPW3bw0LjeKq7ZcAUBAtuaEkkGeBOgBkGCUkU3zY6xEbJXKtmwSeOsbYowUNMzcZ6a5HenZxmpIUYITOsNiFh0Suas6z5Ho63uWImsqboJFn0nnM4CWIiw5bRT2biMwNADpgTjcaIAEY90tRKQQYwD7CzLHuxMFWgbgvBHmQTyTCUWPc0cygNoCCM9mIzZdpBmVZ55OjC+QzSFxGQ+//vfb+LKdOsPbH90gLXHjO0c9cAQzjFDRcop3/+zjEVwAKoHVvp6RnIaQbL/T0ma4Qc4UfyhcgFgw1jlfN/iofAIBoGolEAIe8RchPRdt1fsXExOXbFFKtE4kOopo1HZCCz7PoVUPVQYU3+avIMEOBxoOxwUCBSph5j7ktLKBhjg6LyiUOijLkxjHknXnYEsSSqcn2eqzApASKDkckjaYJ9y0YBlwPQ8ixM5ZKsoJhxAdC4+s+Ytsmq9ltZW82mhmlP5RxFxrVZsFPl1HPQyagqv44f1pGOx94uxwNCV4vOzIbzSD9Onw70/q7W2EKABqZu93/+zjEWYAK7HlrTCRnAViYb7TDIJqsaYBkhA0JIZ0WYkfpEBFim0HJDbUHnULjIk5BCPIFmI0D1LvolrEybyQt+8RA8oITGRCxizQWDa0n7S5nSKIgkI0MQ5qaN8a8Iig+wwmJpruABaJTkbaRJBMXLvN2ORNmDTvMZSJAPf0u41Inu1ZQAOmHaZ0MxF9uvDjZev/q3aNrj/azlOAFRgzn2+8HjZWWMan5f6GOE9f9nZSO2CvBGCR22ff//ff/9G4AKmJu27OJMEnCnHUNEi6FtUotbgSDqJz/+zjEZAAKyJt7phhl4WYTL/STDS8yaLwdJ0pbPoHLMODu/e1JySu52q3w7mz29z0kYlb34dU1zjDubL97M/KZHYch7H3qiAuMFCBmRe+guCpKlnLJNYqdoW5iOuWiz3AEAAH3dmkmEw29EYRGNHF6JMjkdR8gcNVHzWfJClXO9fmHcSMpdYMQaNxJBzaxsYL0wuXTY7ZmhjikS5bhpmOefFqnk1I48Oh4kWpYZm1N8oMRQWZSHZddzmN6qSEAEAgGR3NhAWFM3UEUQ8IIiIJ0ePk0dDY5o+f/+zjEbYAMeNtzp7BpoXCS7emHjHSaHzvL0sWyu1FLUhk5Wmp/Kj6ZiMjL2L2sTEMqf5db3p9z+S1/OIlJMGQE4kVR92csKDRxc2wWy66hwYAKAtSNIpgtAbIFcMFQpFrRjkwqzUKSV1s/n6VrZGZZC2v5H7XTR4wzdFRUN+wQhK5ukMJk9lydYnrdmQ3m1r7BYip1KM9alGRHHd+Ff/ynEt5xw4NHyoWQnJ/QMmbeZVfN9b9jNX++/mo2nUN8/gZVFhEVBAbJkLR2WxAFh3YzJ7Ro2kWXzoz/+zjEbwAK0OFxrDBjoncx7ajzMix4QzPttU8bVuXaWHI7kEzuuOC+Zxr31QAG2AdI0iAQRZVOoeyNNeLwuXVo24cTt4z1j4+EZ7YhnZIm6Bid5cmqtFi0YIZSZDSZklzY2wzwwZLnfPh7NS4ak4FWG6AiVBHV1UMqqAGQdPVQ9hfrHuPvhZfw18J8L36m1T2z/+/+KSjHwk04AcZD1kjaSYBqnSMQB5DSgh+GXELAapTtTSNaaBCYWxoS0TcYzreJ1ldoi6Zz5HAYghRQEQM4fHQ9tFEHjAT/+zjEVgANtOdtrBhvCXMLrfT2GOhiQgVUgqoTi88We6SO+prgrY1z0WXdcs6neOli4lLKAA4ADskaSbAP0R8LsAfIJ6nyfo01DkZrFkSIiw/XoKzxoU7Pdo1HTiHY4V2fVehSaihJp7UCIAEwoS1LGKdLWUDmZEJiiQm2LLdMrZSTVuFzpCIRFCDBtN2V2LGkNaSS7W2NJBdmtsnaPRWSJF3Ko3RJ3kkPGF4jH1tupJ6Yikua62BILq5vOqgWAzLupPe9DrzZnzGMzYDQczmFU/nfPy8rvnT/+zjEUgALjHdrp6RpQWEfMPTEjTa7Bdl7c+sxhFdNDazibuz/XQCHI03HGSAAbHYBLLmB8uMz89SXeOD1kPYAOdDfFhX/b5wqbYre8+O3MXNZrJg45tw7q9LJq1YWxm9ow9CIfZFYlirwoIXNHIbfyZJqq+lxoKyZfNO9fOuAIaZLkjaSSAeAvDbCDs7gedjrTzA2GKoW3mCsCp+k5PJKIA53vqRvrQpTMigUg455VPAFM7LO6ypclTk//1PO165/9dyK7Eh3UFN8cTcB3PzZ61j2i9xH9G7/+zjEWQALCJt1phhvcWmebfTzCapCAAAaq1UNAoSSGmw1ROFx1ZqhGw+aJ1K0hXLBbFNwaxHvkeypOwo4Fd7tmUP3PYvyUoZR7+zJsW2CpQ5Gf9Tz/7mvwuP0K5kUyQxZaG33R7njc0xv7J6oQsEAyxEeCAmCZMmNDF/J8q4DJZSE3Ul5QsHUfCPAyLDtEECP+F8CCEABHQAQiZf6AAATiz6yEHAxzYDZFCIXUREKfHuEEV6Ud5/1OnomLGlwMh28Hybf6nxj3KdX85xtIA1hV0kaSSA1Drb/+zjEYQILEPVhLLBnAXida8WmDOC1SL987ZDKoYSlAGWxyLb9pK1I/KNR+RgxkZRqTMdUpxhWq1WOe2vGMmaqXnSZvLY12Pv+X56kWOiNfLjIznRjeh4Vtbk21/t/Tr8W1/2//705DQQDHJLnIyQABFEkruhHqaVJpRASaBClOBsSa05o9IlNeci8yMQRsZiaTtHDihoPi7hQXqQUCSYnaAGn0mwi2tefWkQha4+BGPeNZHN+oa8tE7zqixb6NKoABTab62tkoMI3mROk6fl41qcW2VWVhsj/+zjEZwALzOdzp5hpaVsN7vTDDS6mOx4JqpCFPfq5lhHLsLpn31KQi8oeWRTy+wz+rKrqJ/2pJyNeEmRNltmjjHBfVUVcVXPfJkTcwaayo3WS+BlAAAxsivGtkRRCcPY7xfiImFYkUHzyxlUTFjmUbepdGz2Jr8k619bD1oa50IHgKBQ7I0JEqyK4TNnhi5dQLYvagadbQt4Z0FqklqVWVOEU6jLVhpnoAIbikskaQBAdLD7Y44VRMEoPCEmCphbFm4FFmH/EQkpnNuiTUFGjQo3LxD86nhz/+zjEbYAK7PFtp6RnIVKK7Xz0mGQTE4QeXG0WGxcau9uNEbgc7UMCgWLmK0dLOrEkVGoUZeL7vL0KGgvSCbQAGjXdHokCQ5GwTwdweCajodBwoCKLmj9KTxDAluujSAkzp4euKN8id+uO0OLue4OiESDSyChNQWHVtNxezNjThoWOHAxPsoatd+pkaOtLIeY0+Vd64HoAwR6kQAFlJLEAQkmYwMOq+lcO2kjZwqXoC46t71Vkf4qMg7MASE9ZHCpKoKBOeFpaeFIhr8sVlrRuvhzWclLHQkb/+zjEeQALGGt3pJhNcVsQLTTzDOyUHyv/1Lltfvn7PXrdacv1P8ci9UWWilaAMaCWlyJ1ot5xrfEixiR2nQbDPknAsKuOPaFzNSVHukGknSpAABAmuSUT7EaaYHMaa1OAGbqKdaZJE07iCS3R35JbbZh2W4kpfdgswwVePLtNywNRKCAYukGy6xE07GumlDxHxCbEBtjAENyv2C088sSC5hSa8zV1tgATlqiJnSaxuAk8FYOo8wgPsrY0BpVdqLSjd2IAjXELCu++CQH8qliShWo6GT6TGR3/+zjEgoAP2RNZLLDJwVQM6y2DCPDas17/pZ30qZvVU+YxgSEqb8j7V0XX2/5juCFRUKBAGnvqqq6gBGPnQBDtqZ4BXQI4XhWqrG1MLQajUMouzpl5eMLldfJqVAz3J0lUE5g4CGFCro6jbvS5ipV0ua/020MZ//3VSp3Uj5fdWqJp1/tBVxJRpHtqAx4h1wAE7HbH65FAG2oOJdO0JguEsjh8VHWgepFk0ufEX9IVX/1fSjZrW858KSONw6iHQidAUOg1CQZ1XRoaImiYUa0YwWWNcIwqWSX/+zjEegAKsUFr56RDoVWiKWWTCPBhVZYVZLK/r/b1ts1mQAvqpvJo22gGqtUYyMAPLDkNVonG1Davcw6av/Kt+GU9+937S5PXgo9qBIEFHQgfEY42MU44iyJWIQdncRB0cfSkBIImW9xMIoj0k9SlT4WKqRTu6dYECSR72SNFAHy+55bl/Uy4w0HKblMoPhJeCTKqKo44w7Hn1nuDkixJLzSozzfmtLqlwmHvfv9tvkxNT4f+G1xhWtLhpKIrq4lDb5mMWd3HGBRqEEjmbQABJI/nI0wAAmP/+zjEhgAKyHdPrLDCQVaO6fWTDSydkuajMLCU8AN6ysPf3NPctX7jzUTGPaXS8tg3MuGG45iftjTWfUufbN6fk0XnIX8UoZcL0Ui+/HSgKK2uFyI9rFRhLKhrEbaNTcrVAAn/6UQOqhJSSARHpdLppBzpYa4K16YghNplWdTqA/RnochnhWaOzshnlRndCptOzGKlUO09E/oVH8zsiVLRWYzlqxftb09/2dquVu1XWrfjgKn/2gAROW22xokAHlS7Y67iupSy22NG9c+jYswd0GiHT9TwEir/+zjEkYAKzMlFrJhn4VMdp/W2DLQcxA+Z6kGtIkwIGlMGy2bqmMBUD5J/TCJYFvvP+nPqxVhLu37yzaptUr/1rjsYv/t+vb//BdoAACGmQA4uRiYIJhrxxYKkaHQo/RDpDoabDCxDmc3YnMo0KnR96fmysalWakRbJrDO5PNCfMGsuFDQdYQKYXY+SYfYpqjrWxwhdZGtaQJ998kQ/vAAbbkt1baQA7gBkfyobGVcOxNS+iQIw8mBaJKQ/BsQTwtDicIzlCLBKOTAtEk4NialLAlHJgHw4mD/+zjEnQAKnVMzLhhHQV8PJ3WzDOVHXNxHxVLCyJSBItRIDIJCXGGgqAjJgkDci6kfkbFMYSCoCdRv+ztKmRj1D06uzI14AGq/kbTVjLasnj2KHIQQHZgG/BQVQuyrKZqcP2j0Q5CyY0MeWNkStypDjFy4Zjx7gNIVCYUe9aytjrI+49Fzh1a9Pjl0bd6E7KusmSoHmvIylDuhvF3Al5pRc8LzWBTk86n5wo5IdK/0WRuFU3k5+tKxynZZbQYs3hVQ5cn3/TJ1uMuSLt0iqKnfKJ2ORTvzlar/+zjEqAAKcKkrLiRkgaSQJrT2GThaRsF6SzAsTGdQ4kcHYO1QwxhWZGzxG17rBAxkwTLc/WNkMexHjmIqV35nPNJ4zbHDBxT7umRSrd/azu6xlX/OJjqwCXAsKhCJ9jC/y/sPlWPWZeH6JhPPjGSi0VEDkGqzNTbc6I8GRwTN06WVT2Lz5GPeFf6Y8GQXonHPHCsw4uxpupjEC8XuFE+vV/md11cAAYL4gQHYGGew6xuPKcKJAuSG11lUCnjHjzpMAAYGxUxWEEPFWC7nrUeSWwkMH5RLGuH/+zjEqwMJeKMeLJhmwRmTI8mDDNhotEFmy/oXSNbZ1/I9727a2kcKVgINCoE+IEW4oCbFSXHEKhKwdQcdVxm5ShM/7aFrmzO6BuFcsHOZgpP4Yq6GuSiNS2/Hv5m52HmG6H9BYOpf9hv/b3qbtsTe6szXyd7qCyKLXdlcl7xX/Bqm5Wi6AAGDVDZDRBmqqFZYpMwqhXSItZy9QFJOi4H2mOKqkUDll8vKbrKa9XBZYPUoD7zeFUkB8oa+akGPR44UlUf7tQIRbh7yPvRbWy80rL+3Ov35RTz/+zjEwwMIUKEeR7xggTWWIwWDDPjJ+4eKEzmXm/mQ5bM1tPOZCG9+B0ZobGP+8ph5dYEm040IV2GNhmOxGZZN9Q7zLZUUWsIcjmYcpT9m2VhThhZHSC4gc0KuqXWsFxJdrPoJdq/93Xqa6+T2jIiX97Zy/aj56iHqRXB381rtAhGM7OCnaE+qgQTM9LY56YFC/grm5gTrIeDUkRjdw+aRgnt5RJESaRqUdFBxWpcVmyw1bh7vHTJ6ZAerbVyFvQfNCOOpTLinygXswz5aJ2fdKo6KVYUq5ir/+zjE3IMI3DcaR6RGwXAX4oj0jOnRTuB1J1dntxMTxHK0svzexd2W90FmF7ExYY6cAQCGYxK2ghKYKQhymlcNp0U1a7cpVzzhqolzgA9kGPrWeOGCIYIKt2TQJ8zPkHHEIUGhpJoO6BgkjDbCKjvEeCkBkELoz9aKCFjRSAzBgxBzc3FkFlNOtTPPKTZFJyglOrHeXywVB2MVy+buutX32QQQb7LVMyfdNBi4aGhXUs021avX1dt/r6kD5ACoybl9JmoAAABCDSQAAAA3tgzIt9ZD/hjAzTn/+zjE7IOMRNMOR5huyWoeIcTzFWmGq3+NPA41amf8DDngGly0cDDCwEBwoJVS4FgwGJRBRmBlDZ2irwHDwM8PFwgCkgFCYGWMoqXWr8MIhdoWFBgYQ8ToAQLCgWpdar/4auE3CDhHI+RSoxxHDiMf//8mSUFBEOJ8gpDScKxAi+Tgs3/6v/8ig9CziFIiOSSJPE0WzAcktG+uTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE74AOmVcINPQACkax4sczIAOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjEzYATOVcTOaoAAAAANIOAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",unlock:"data:audio/mpeg;base64,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",crack:"data:audio/mpeg;base64,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",win:"data:audio/mpeg;base64,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",fall:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABIAABAIABoaGhoaKCgoKCgoNTU1NTVDQ0NDQ0NQUFBQUF5eXl5eXmtra2treXl5eXl5hoaGhoaUlJSUlJShoaGhoaGvr6+vr7y8vLy8vMrKysrK19fX19fX5eXl5eXy8vLy8vL//////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkA8AAAAAAAAAQCIc6qQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAKIWdAFDEACW8P73cewAJEAABK7m7v1zgQDAxZznOc5CN/6nOc5CEIQn6EI1SEIQhOQjVOd5znOcDOec7/v//8hCEIQhG/zgAAACCNuT/IQnqchCNQhAADAzyAAAIwAABzSzSeT3feytttNJEADEuMGSQWRzL6ox/ZsmM3hTBVyzlsuIZhcwhTl7qNs0UMu8X0ITgdrNWHG+y/RRW+2zDGDKUCMFMlZeY6nH/elUaND4vJUya1P0rzJj/LufWooprG0iQAHKqMNtHBQztTPLFUCmj/+zjECwALuHVdvPQAAaUvanDDDlnQKR4MFCsIBBEgyxNE0XNoc9pw5TjnjmGS6QahgFjBIcpJ4AOBwkWLXoJizHKqUoYp6xo0NClJHqEFaxRN8i41SlGdc4ky7mZQEQU3SqABSZGRCJM3RLscXNLrPv2cfhlorEaFp14adJbv7S/R+aZb01Nr6465at+xzyOL86pLJWna+Td5mZ+dXLJRiczMl5o9NNfu0Jmrr4JGSEmhFSyNXdCHsTLM7tEayryKQMasbuSRyRuySNttEBl9HKX1yHKN7t7/+zjECQAM5U9vpgzRmXmha7STDLiay889zH0uEp968PV9JEKvf09Cc+5TpolI6aITuWUABFAzk/9ve2fQIQ5OQsLh9YxCIi2jC0yyZSB6yCD5N7mxd/xP3////xlqezID/pSAb/zSM8STvS+v7batAAAOcMjnUUkmWk/1IEM2AHrGDbTLvYSZXXEhRc3ErAZNkVLzIjxJH/lS6ZqRXzdfjN+pGU+8arsf0KvPkNfstOqzA1IkQ5SLK1Elyx5pYOmcRGIHOkSQkqVO1p2OWNIAADKsiYoS6Wz/+zjEB4ALoGtVpIzWCaEYLDSWGXhJfUzOB1ZlvEfn2F4qa7ItmD54MzRzuMgIOkk3BEC9sGWBOnlUal6Qtj9PFCmHbCv/+mt//85Qx8t8XfD/ngvbfn2f+aRbE+zZ5h3Oa9QpJpuSy1sgAH6IAw4jJ5e5yWdfmz+nH5wlNwQMQblVGeFdBMCudAcFBZEcqGI7mBfXE9gwMEM3CQmgBiSAGdAQOS2SCqjAdEHJ6Yq3nshcZZMpCzJ5ad7dGYu36kkf+f/+/FdBdmU9w5WBwIkhOhGcp9rJcUD/+zjEBgBL9XVWjBhnwX0u6vT0jDmiYiXplImEiSVnAx1bJlWnlLnujSBK5o+U12FWAQMcwFWpGriYzUv/yvnlP/Wd4OZK3b+Zlm0rfab2pN/p5dOXKL/py9P/55T9m5nCtX9zcx20oKxgouaSxoiM6i5gTCWKFmpLs9qiXEnosgAXa2TOISAh21Pd4h1mzKoY4narSO/lyQtT+GZf87Ps5/k9KkhOxHzJCMr75NC//+l9LBMeyf8spRCUzqHSyI/kffBUf1FkDnETNTNmjTRkAAA7c2U3Kaz/+zjECAAKlJdZ5JhpQV2NKvz2DOA2ToukvGkyQsm8IJUiFGF1KHWhHeaZ2WOPCrOR6GZ5163KHMHlCUJDniY6pS2WTYo0gaWxr0Db/niW2JmPXLSFD+Rgv0urHKKiuu9jKAAWZ33fsr1ZsLU9WrLF2vNNY7zgdWRoxkiCSM8nZnAXDqLBoSSBmAsedYbDwSD5IufJ0yDmGlEOIJEytagCgOvc5ICep/kbkPqfFC2n75c0Q4VWZo2rZIItdGywi1IJuI55JpFi2Vquwmy9SM5MJT3cSZbYyTj/+zjEE4ANcWdZ5IxayV0RqzRhiXA3GVrzhlznyTL3Lzdi851icPk6UnNwQBgA/BCt9V2T+7ufp+7mHZIEEdcpXAzfoGf1wZl1/unfU852vyHHAhHAAQAM59Nl+2t9tZRAEQAUXODvYRSNFpQKDMTx4J7QKKCNbq1WbGcbcKxpWoKytq2FOjHh0qdWNBU7JbgKA1B07K7RKdBWgGiri2WWdLdDip5bg7zyAViU6JniJ65TWXVIVl3saQIIw09G4hVQMeUE8nNpihazZQGzU2MmC3BU+FBaGYL/+zjEE4AKdOFT9JGAAjIwrn8wggKHIs/lT0qkvGdFLf/NfjeU2pHm3tn55mJYofklyzBIL5D+qUCyqNGxQkQ9ClK7K8NDrDs7rD7+ayRuJMAE24sGOikUvxiksSyG5VMR2WW4HmNQaSFhwQAqFyTTx9hSxeEk48IzBRxHFChDDBSCp8BwApRhAjWISRF597aOH9wQKJBQcj+xdoap7lC6ibSbSErxs4xxl3TLzU6o9vO///CJAtB0t/wTFjajj5/n/QPz7////gMBUWOMyVVyb22ay6IsADD/+zjEBIAKhU9RvMKAAVYTKbzEjLCXXkkOHhbS11hvXPow5VE4mJCxSlcUKzIVm1YrpPYyyqYhDIRGK5n7oiGc3/6Or2dvrtapa9E2I7Eowgdkuv///8zoDGHmfi7Oc8mju0sjOy/WNEEAqhj+UwnJaHgUPUwnWrK/QPKoVW3eC+FNGAXghWaDRNT2upb2lw36ZnH61wcmtWITiGEXsSKPaJoaZTFCrY4Of9ugREQmhDFy2p7MqntrLbrbZG0gDLQNjqNQ6qwbjqul2PRLmJUA3A0mY3SJsIT/+zjEEQDKfMFbphhpUUiWKxDzDPoo5rMKZswXmsFnD8tDfLpmfVp51c1reW1hOh0Ex3sW+mtidYbKImlevZdg15i9nZWwCyyzW20DHuyq2tKGO70TKQclpoZK07IeJIps7pQifzMxzCisSHIrDh8ZZTCtwz3wcOZVtczcyoZIkHEjsvuaiLKIDC80oQwYCl6OdVVZ0J1arhZHhHiFVWutaIICCaMhFEwsgYGAyAQRoLg9sajXSMYpCJPzlkeKgGFcRznSMKcaNSDxULFT4WDTlHyiTkT2Isf/+zjEH4AK2HNL7CRhgV2RaTzzDPibBCTOlx5+ztrrevxyGmSiSBNzm/i6FFCWCZEVWfbyFggmM8q4yz+VxiB6KD0EfSLWD1iWto09Obk3Mwv5ELfMj4Yx9Hba3K0eNvAI9wjDS5CLsJOrxM1IZcOGjHEgiWfBp6REvO7EBpsNoZqM+otVBZScktlRAAAn27t+08egD6iRUR+Ahpz/dG5cJQRtbfpESzB9K9rO5MR6M2c/PPq8Mvt7l/Po24Y+2lj1Hj1hLbWKNaklC/YYBotBq0sSVWCRrFH/+zjEKYAKgME/p5hlgVob6DTzDPjrFqkktvtccBAccVBNEGDl656KKBzaSPy1zHuHh3Zom8osc6Y/TMEr9pdNP93QqXTXyilsiRkXJyizoHmqsft38O7FrlgtJLDACep+2z/kOtDy4Pg/COJ1Fqkvk1zSUAAsEyeWkRZtbM0cuxhhCbiDBCZUqut3cjggbndgaHbz/KudpfM6O6Fo7toZVaWxJ19dmcN2OlGAzdiiIIO3z4f+zMhpYq4K1DDSEeSLCr2SPbfaNAgjMVdobvBul4pFy4cko4H/+zjENYAKhQlDp5hDgVKTZ/TzDOhqVPBEq3obNMkpnudcwuyZCt+2tSqzQVGb5WcePVRfNIFg6mVNiKaUVLrRBnO12BFin/fUHZWNIqFXA08JJQ2SolJZGiQQCyh2RWA+DWo5qkxPhsgdYUtkoFw1mbGJVCWIRMz7UuGD5P2jrmvnKGjxAlQCKtVXAtSiVdqCmZYsF63oKz+stQ4xlrkSGGsREgSaCkExJQY7LC0IEubQg+24Z0I0UFoBkLuCQzZIRkMWRPCHjI2T+Y93QhtCwUJGawcFyCz/+zjEQoDKXJs1p5hjgUCRppDyjAA4jZlc4+IlkmsUlJDLodEbQAcTFBU+JzdED/nxFBUptCKS7SNkABBFS9gTxYTkXiTjNLMQS8pNT3bDXfnAcHNszvQHAGaQSQsWAplYSFhesYiwapYDCkOjRRiw0Km6rQ6IodcRvZQdkdMNFTp6xD53oAAGHtUADbgDFkTindjaa4yz0hBQS35EQtch1DAmeOWK/SGmhz+iiQ1I9fYy9DuV635TaTGPnRxuBjyisi/3CxVyQkDTztksUfFMNYhBJ6ioijP/+zjEUoAKWGM3p4jHgVOX5OTzDDhlIMolUAFwTAGNrmlG1wqskFY80sNn8OIZZs7NDMnGAg5FXZzKTvCyC7mWvBSQ2k4LCpIDCg8yDS2isek/NHgMLEkXcScw2nQFLHNQMLEWa3M9CxZQQpNNg2DxiPHMgyrTca4M0lg/CIyGJ40l0qPaqKSMCO93jqQYjIWpp6WlD40IyM2Bg72zwR/hNp8k8OItQpClstvAqlN1St9uKzlpjewlAAAJMV/IQFjdN60V7MqtFe9P2LOd2fNbsiIzoOTMrpP/+zjEYAMKAJEgR5hhwT+aY8mEjBAquRrOXom4tu0cxV+r1KIt6UbdlbP/+rjXqapQABWoABtUQRpQkAV0djeOCJQ6HDWTdqaYi4Vgig8gYfQcCEUouomHOUOlD36HBwJzxQoSYdmCWbEjjkJOkdQpQpKkJlwMGGvB50QxyxRXfaXko0D/IY5h41LoeQRBMstkVDQePIW1Hp2kqxNm7Y24tsbVFUt1s19/1jYkct7SvP89DhjwIwOjEEAgoQAUAAmB7FeD5sNqBuQILNhypaLyeWM0KyfoaHT/+zjEcYAHYKErlNEAIiAxIssegAEiy/Qo3/ioeW9VKW0r3/9QLosCvCrLf/7Sp3//8cKFooNNPH6XkmbE7YVKaKGn8hX///6vUhyKg6IrVGhKi3hJ7//UL////9zXDIr2OPEZ4Fm9VuDarXts1xmto2cf/////++PuI8rZj3jL+//t/iF/B9f6vVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEcYASmXcW2ReAAAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var Fm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Be=null,pl=!1;function xh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Ch(){xh(),pl=!0;try{if(Be||(Be=document.createElement("audio"),Be.src=Fm,Be.loop=!0,Be.preload="auto",Be.setAttribute("playsinline",""),Be.setAttribute("webkit-playsinline",""),Be.setAttribute("x-webkit-airplay","deny"),Be.volume=.01,Be.addEventListener("pause",()=>{pl&&!document.hidden&&setTimeout(()=>pl&&Be.paused&&Be.play().catch(()=>{}),300)})),Be.paused){let i=Be.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function vh(i,t){xh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Ge=i=>440*Math.pow(2,(i-69)/12),Br=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Ch(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;vh(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=s,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.value=e;let h=l.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05)}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",Ge(l),a,c*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var ys={tempo:84,beats:16,notes:[[0,69,1.5],[1.5,67,.5],[2,66,1],[3,63,1],[4,62,2],[6,63,1],[7,66,1],[8,69,1],[9,70,1],[10,69,1],[11,67,1],[12,66,1.5],[13.5,63,.5],[14,62,2]],bass:[[0,50,4],[4,50,4],[8,55,4],[12,50,4]]},Qi=class extends Br{pluck(t,e,n,s,r=this.music){let a=this.ctx;if(!a)return;let o=a.createOscillator();o.type="sawtooth",o.frequency.value=t;let l=a.createOscillator();l.type="triangle",l.frequency.value=t*2.003;let c=a.createBiquadFilter();c.type="lowpass",c.Q.value=2,c.frequency.setValueAtTime(t*7,e),c.frequency.exponentialRampToValueAtTime(t*1.3,e+n);let h=a.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(s,e+.01),h.gain.exponentialRampToValueAtTime(1e-4,e+n);let u=a.createGain();u.gain.value=.35,o.connect(c),l.connect(u).connect(c),c.connect(h).connect(r),o.start(e),l.start(e),o.stop(e+n+.05),l.stop(e+n+.05)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=60/ys.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let n=t.currentTime+.25;for(;this.loopStart+this.nextBeat*e<n;){let s=this.nextBeat%ys.beats,r=this.loopStart+this.nextBeat*e;if(r<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[a,o,l]of ys.notes)Math.abs(a-s)<1e-6&&this.pluck(Ge(o),r,Math.min(1.6,l*e*1.6),.22);for(let[a,o,l]of ys.bass)Math.abs(a-s)<1e-6&&this.tone("sine",Ge(o),r,l*e,.16,this.music,.05);Math.abs(s%2)<1e-6&&this.tone("sine",s%4===0?90:120,r,.12,s%4===0?.2:.09,this.music),Math.abs(s%1-.5)<1e-6&&this.pluck(Ge(74+s*2%3*0),r,.2,.03),this.nextBeat+=.5}}setMode(t){if(!t){this.setBed(null),this.setTune(null);return}this.setBed("wind"),this.setTune(ys)}play(t){let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime;switch(t){case"step":this.noise(n,.07,.07,"bandpass",700+Math.random()*200,1.5);break;case"scrape":this.noise(n,.28,.16,"lowpass",500,1,this.sfx,180),this.tone("sine",70,n,.25,.1);break;case"plate":this.tone("square",220,n,.06,.07),this.tone("sine",Ge(81),n+.04,.35,.1),this.tone("sine",Ge(88),n+.1,.4,.07);break;case"unplate":this.tone("square",160,n,.06,.06);break;case"door":this.noise(n,.9,.18,"lowpass",380,1,this.sfx,120),this.slide("sawtooth",110,45,n,.8,.08);break;case"key":[0,4,7,12].forEach((s,r)=>this.tone("triangle",Ge(84+s),n+r*.07,.5,.1));break;case"crack":this.noise(n,.12,.12,"highpass",2200,2),this.tone("square",90,n,.05,.05);break;case"crumble":this.noise(n,.5,.2,"lowpass",900,1,this.sfx,150);break;case"fall":this.slide("triangle",520,90,n,.6,.12);break;case"light":this.noise(n,.4,.12,"highpass",1200,.8,this.sfx,3e3),this.tone("triangle",Ge(76),n+.1,.4,.07);break;case"unlock":this.tone("square",300,n,.05,.08),this.tone("square",450,n+.06,.05,.08),this.tone("triangle",Ge(86),n+.12,.4,.09);break;case"bump":this.tone("sine",110,n,.08,.08);break;case"undo":this.slide("triangle",700,350,n,.15,.08);break;case"win":[0,3,7,10,12,15,19].forEach((s,r)=>this.pluck(Ge(62+s),n+r*.1,.9,.25,this.sfx));break;case"tap":this.tone("sine",700,n,.06,.08);break;case"hint":this.tone("triangle",Ge(86),n,.3,.08),this.tone("triangle",Ge(91),n+.1,.3,.08);break;default:break}}};gh(Qi,Ah);mh(Qi);var yh={sand:{bg:1839627,floorA:"#dcbc82",floorB:"#cfae72",line:"#a07a44",wall:"#c99a5c",wallDark:"#8c6236",glyph:"#6d4120",trim:"#f0c850",carpet:"#b3202a",carpet2:"#7e1219",amb:16769720,ambG:6965802,ambI:1.15,sun:16767392,sunI:1.1,torch:16752704},gold:{bg:2365189,floorA:"#e6c872",floorB:"#d8b85c",line:"#9a7420",wall:"#d6a840",wallDark:"#8a6414",glyph:"#6a4208",trim:"#fff0a0",carpet:"#9c1530",carpet2:"#640a1a",amb:16773312,ambG:8018458,ambI:1.2,sun:16769168,sunI:1.2,torch:16756784},moon:{bg:461852,floorA:"#8e9cbc",floorB:"#7f8eb0",line:"#566486",wall:"#7585ae",wallDark:"#434f78",glyph:"#27335c",trim:"#c4d8ff",carpet:"#2c40a0",carpet2:"#1a2a70",amb:11453695,ambG:2634842,ambI:1,sun:12374271,sunI:.85,torch:16751176}};function Is(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function an(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function on(i,t=!1){let e=new Wi(i);return e.colorSpace=_e,e.anisotropy=4,t&&(e.wrapS=e.wrapT=ds),e}function _s(i,t,e,n,s,r){switch(i.save(),i.translate(e,n),i.scale(s,s),i.strokeStyle=r,i.fillStyle=r,i.lineWidth=.09,i.lineCap="round",i.lineJoin="round",t%10){case 0:i.beginPath(),i.moveTo(-.5,0),i.quadraticCurveTo(0,-.45,.5,0),i.quadraticCurveTo(0,.3,-.5,0),i.stroke(),i.beginPath(),i.arc(0,-.02,.14,0,7),i.fill(),i.beginPath(),i.moveTo(-.2,.2),i.lineTo(-.3,.5),i.moveTo(.1,.22),i.quadraticCurveTo(.3,.45,.1,.55),i.stroke();break;case 1:i.beginPath(),i.ellipse(0,-.3,.2,.28,0,0,7),i.stroke(),i.beginPath(),i.moveTo(0,-.02),i.lineTo(0,.55),i.moveTo(-.3,.12),i.lineTo(.3,.12),i.stroke();break;case 2:i.beginPath(),i.ellipse(0,.08,.34,.2,-.2,0,7),i.stroke(),i.beginPath(),i.arc(.32,-.15,.1,0,7),i.fill(),i.beginPath(),i.moveTo(.4,-.15),i.lineTo(.55,-.1),i.moveTo(-.3,.15),i.lineTo(-.55,.3),i.moveTo(-.05,.28),i.lineTo(-.05,.5),i.moveTo(.1,.28),i.lineTo(.1,.5),i.stroke();break;case 3:for(let a=0;a<3;a++)i.beginPath(),i.moveTo(-.5,-.25+a*.25),i.lineTo(-.25,-.4+a*.25),i.lineTo(0,-.25+a*.25),i.lineTo(.25,-.4+a*.25),i.lineTo(.5,-.25+a*.25),i.stroke();break;case 4:i.beginPath(),i.ellipse(0,.05,.22,.3,0,0,7),i.fill(),i.beginPath(),i.arc(0,-.3,.12,0,7),i.fill(),i.beginPath();for(let a of[-1,1])i.moveTo(a*.2,-.05),i.lineTo(a*.5,-.2),i.moveTo(a*.2,.1),i.lineTo(a*.5,.15),i.moveTo(a*.15,.28),i.lineTo(a*.4,.5);i.stroke();break;case 5:i.beginPath(),i.arc(0,0,.22,0,7),i.stroke(),i.beginPath(),i.arc(0,0,.07,0,7),i.fill();for(let a=0;a<8;a++){let o=a/8*6.283;i.moveTo(Math.cos(o)*.3,Math.sin(o)*.3),i.lineTo(Math.cos(o)*.46,Math.sin(o)*.46)}i.stroke();break;case 6:i.beginPath(),i.ellipse(0,0,.14,.5,0,0,7),i.stroke(),i.beginPath(),i.moveTo(0,-.5),i.lineTo(0,.5);for(let a=-2;a<=2;a++)i.moveTo(0,a*.18),i.lineTo(.12,a*.18-.1);i.stroke();break;case 7:for(let a of[-.7,0,.7])i.save(),i.rotate(a),i.beginPath(),i.ellipse(0,-.2,.1,.32,0,0,7),i.stroke(),i.restore();i.beginPath(),i.moveTo(0,.1),i.lineTo(0,.55),i.stroke();break;case 8:i.beginPath(),i.moveTo(-.5,.2),i.bezierCurveTo(-.3,-.4,-.1,.5,.1,-.1),i.bezierCurveTo(.2,-.4,.4,-.1,.5,-.3),i.stroke();break;default:i.beginPath(),i.moveTo(0,.5),i.lineTo(0,-.4),i.stroke(),i.beginPath(),i.ellipse(0,-.35,.1,.18,0,0,7),i.fill();break}i.restore()}function _h(i){let[t,e]=an(256,256),n=Is(7);e.fillStyle=i.floorA,e.fillRect(0,0,256,256);for(let s=0;s<1100;s++)e.fillStyle=n()>.5?"rgba(255,255,255,.06)":"rgba(0,0,0,.06)",e.fillRect(n()*256,n()*256,2+n()*3,2+n()*3);e.fillStyle=i.floorB,e.fillRect(8,8,240,240);for(let s=0;s<700;s++)e.fillStyle=n()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.07)",e.fillRect(8+n()*238,8+n()*238,2+n()*4,2+n()*4);return e.strokeStyle=i.line,e.lineWidth=6,e.strokeRect(3,3,250,250),e.strokeStyle="rgba(255,255,255,.25)",e.lineWidth=2,e.strokeRect(9,9,238,238),on(t)}function Ih(i){let[t,e]=an(256,256),n=Is(11);e.fillStyle=i.floorB,e.fillRect(0,0,256,256),e.fillStyle="rgba(70,40,10,.22)",e.fillRect(0,0,256,256);for(let s=0;s<900;s++)e.fillStyle=n()>.5?"rgba(255,255,255,.06)":"rgba(0,0,0,.1)",e.fillRect(n()*256,n()*256,2+n()*4,2+n()*4);e.strokeStyle="#3a2410",e.lineWidth=5,e.lineCap="round";for(let s=0;s<4;s++){e.beginPath();let r=128+(n()-.5)*60,a=128+(n()-.5)*60;e.moveTo(r,a);for(let o=0;o<5;o++)r+=(n()-.5)*70,a+=(n()-.5)*70,e.lineTo(r,a);e.stroke()}return e.strokeStyle="#6a4a22",e.lineWidth=6,e.setLineDash([16,10]),e.strokeRect(4,4,248,248),on(t)}function Mh(i){let[t,e]=an(256,256),n=Is(3);e.fillStyle=i.wall,e.fillRect(0,0,256,256);for(let s=0;s<1400;s++)e.fillStyle=n()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.06)",e.fillRect(n()*256,n()*256,2+n()*4,2+n()*4);e.fillStyle=i.wallDark,e.fillRect(0,0,256,20),e.fillStyle=i.trim,e.fillRect(0,20,256,6),e.fillStyle=i.wallDark,e.fillRect(0,232,256,24),e.fillStyle=i.trim,e.fillRect(0,226,256,5),e.strokeStyle="rgba(0,0,0,.25)",e.lineWidth=3,e.strokeRect(1,1,254,254),e.fillStyle="rgba(0,0,0,.1)",e.fillRect(24,44,208,170);for(let s=0;s<3;s++)for(let r=0;r<2;r++)_s(e,Math.floor(n()*10),56+s*72,90+r*76,52,i.glyph);return on(t)}function bh(i){let[t,e]=an(128,128),n=Is(5);e.fillStyle=i.wall,e.fillRect(0,0,128,128);for(let s=0;s<400;s++)e.fillStyle=n()>.5?"rgba(255,255,255,.12)":"rgba(0,0,0,.08)",e.fillRect(n()*128,n()*128,2+n()*3,2+n()*3);return e.strokeStyle=i.trim,e.lineWidth=5,e.strokeRect(4,4,120,120),on(t)}function Sh(i){let[t,e]=an(256,256);e.fillStyle=i.carpet,e.fillRect(0,0,256,256),e.fillStyle=i.carpet2;for(let n=0;n<8;n++)e.beginPath(),e.moveTo(40+22*(n%2),n*32+16),e.lineTo(60+22*(n%2),n*32),e.lineTo(80+22*(n%2),n*32+16),e.lineTo(60+22*(n%2),n*32+32),e.fill();e.fillStyle="#e8c050",e.fillRect(0,0,18,256),e.fillRect(238,0,18,256),e.fillStyle=i.carpet2,e.fillRect(18,0,8,256),e.fillRect(230,0,8,256),e.strokeStyle="#e8c050",e.lineWidth=4,e.strokeRect(34,0,188,256),e.save(),e.translate(128,128),e.fillStyle="#f4d878",e.strokeStyle="#7a4a10",e.lineWidth=3;for(let n of[-1.1,-.55,0,.55,1.1])e.save(),e.rotate(n),e.beginPath(),e.ellipse(0,-44,14,40,0,0,7),e.fill(),e.stroke(),e.restore();return e.fillStyle="#e8402a",e.beginPath(),e.arc(0,0,14,0,7),e.fill(),e.stroke(),e.restore(),on(t)}function Eh(i){let[t,e]=an(256,256);e.translate(128,128);let n=e.createRadialGradient(0,0,10,0,0,124);n.addColorStop(0,"#fff4b0"),n.addColorStop(.5,"#f2c43a"),n.addColorStop(1,"#b8841a"),e.fillStyle=n,e.beginPath(),e.arc(0,0,124,0,7),e.fill(),e.fillStyle=i,e.beginPath(),e.arc(0,0,124,0,7),e.arc(0,0,108,0,7,!0),e.fill(),e.strokeStyle="#8a5a10",e.lineWidth=5;for(let s=0;s<16;s++){let r=s/16*6.283;e.beginPath(),e.moveTo(Math.cos(r)*38,Math.sin(r)*38),e.lineTo(Math.cos(r)*100,Math.sin(r)*100),e.stroke()}return e.beginPath(),e.arc(0,0,34,0,7),e.fillStyle="#ffe680",e.fill(),e.stroke(),e.beginPath(),e.arc(0,0,16,0,7),e.fillStyle="#fff",e.fill(),on(t)}function Th(i){let[t,e]=an(256,256),n=Is(9);e.fillStyle=i.wall,e.fillRect(0,0,256,256),e.fillStyle="rgba(255,255,255,.12)",e.fillRect(0,0,256,10);for(let s=0;s<700;s++)e.fillStyle=n()>.5?"rgba(255,255,255,.07)":"rgba(0,0,0,.08)",e.fillRect(n()*256,n()*256,2+n()*4,2+n()*4);return e.strokeStyle=i.glyph,e.lineWidth=8,e.strokeRect(14,14,228,228),e.strokeStyle=i.trim,e.lineWidth=4,e.strokeRect(26,26,204,204),_s(e,5,128,128,120,i.glyph),e.strokeStyle="rgba(0,0,0,.4)",e.lineWidth=5,e.strokeRect(2,2,252,252),on(t)}function Or(i,t="door"){let[e,n]=an(256,256);return n.fillStyle="#7a6a58",n.fillRect(0,0,256,256),n.fillStyle="#8c7b66",n.fillRect(10,10,236,236),n.strokeStyle="#3a2e22",n.lineWidth=6,n.strokeRect(5,5,246,246),t==="lock"?(n.fillStyle="#e8c040",n.fillRect(10,10,236,236),_s(n,1,128,120,150,"#6a4208"),n.fillStyle="#3a2208",n.beginPath(),n.arc(128,112,14,0,7),n.fill(),n.fillRect(122,112,12,50)):t==="gate"?(n.fillStyle="#e8902a",n.fillRect(10,10,236,236),_s(n,5,128,128,170,"#6a2c08")):(n.fillStyle=i,n.fillRect(20,20,216,26),n.fillRect(20,210,216,26),_s(n,0,128,128,120,"#2a1e12"),n.fillStyle=i,n.beginPath(),n.arc(128,128,18,0,7),n.fill(),n.strokeStyle="#fff",n.lineWidth=4,n.stroke()),on(e)}function wh(){let[i,t]=an(128,128);return t.fillStyle="rgba(255,214,80,.95)",t.strokeStyle="rgba(90,50,0,.85)",t.lineWidth=6,t.lineJoin="round",t.beginPath(),t.moveTo(64,10),t.lineTo(112,68),t.lineTo(80,68),t.lineTo(80,118),t.lineTo(48,118),t.lineTo(48,68),t.lineTo(16,68),t.closePath(),t.fill(),t.stroke(),on(i)}function Rh(i="255,200,100"){let[t,e]=an(64,64),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(${i},1)`),n.addColorStop(.35,`rgba(${i},.45)`),n.addColorStop(1,`rgba(${i},0)`),e.fillStyle=n,e.fillRect(0,0,64,64),on(t)}function Ph(){let[i,t]=an(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),on(i)}var ml=[14696538,3065046,4113514,10509024],Al=["#e0405a","#2ec4d6","#3ec46a","#a05ae0"],It={sphere:new vr(.5,16,12),cyl:new Xi(.5,.5,1,18),box:new si(1,1,1),cone:new Cr(.5,1,12),torus:new As(.5,.12,8,20),plane:new ki(1,1)},gl=new Map,ve=(i,t=0,e={})=>{let n=`${i}|${t}|${JSON.stringify(e)}`;return gl.has(n)||gl.set(n,new Ie({color:i,emissive:t,...e})),gl.get(n)};function Tt(i,t,e=0,n=0,s=0,r=1,a=1,o=1){let l=new he(i,t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}var ci=class{constructor(){this.pos=[],this.nor=[],this.uv=[],this.idx=[]}quad(t,e,n,s,r,a=[[0,0],[1,0],[1,1],[0,1]]){let o=this.pos.length/3;[t,e,n,s].forEach((l,c)=>{this.pos.push(l[0],l[1],l[2]),this.nor.push(r[0],r[1],r[2]),this.uv.push(a[c][0],a[c][1])}),this.idx.push(o,o+1,o+2,o,o+2,o+3)}get empty(){return!this.pos.length}build(){let t=new me;return t.setAttribute("position",new oe(this.pos,3)),t.setAttribute("normal",new oe(this.nor,3)),t.setAttribute("uv",new oe(this.uv,2)),t.setIndex(this.idx),t}};function qh(){let i=new te,t=new te;i.add(t);let e=ve(15777416),n=ve(6987976),s=ve(12159557),r=ve(2759184),a=ve(14170170);t.add(Tt(It.cyl,n,0,.42,0,.36,.34,.3)),t.add(Tt(It.cyl,a,0,.58,0,.38,.07,.32)),t.add(Tt(It.box,ve(9067050),0,.42,-.2,.26,.3,.12));let o=new te;o.position.set(0,.8,0),t.add(o),o.add(Tt(It.sphere,e,0,0,0,.42,.4,.4)),o.add(Tt(It.sphere,r,-.09,0,.17,.07,.09,.05),Tt(It.sphere,r,.09,0,.17,.07,.09,.05)),o.add(Tt(It.sphere,ve(15239802),0,-.07,.18,.1,.05,.05)),o.add(Tt(It.cyl,s,0,.13,0,.62,.04,.62)),o.add(Tt(It.sphere,s,0,.14,0,.4,.34,.4)),o.add(Tt(It.cyl,a,0,.15,0,.42,.06,.42)),i.userData.legL=new te,i.userData.legR=new te;for(let[u,d]of[[i.userData.legL,-.09],[i.userData.legR,.09]])u.position.set(d,.26,0),u.add(Tt(It.cyl,ve(6965802),0,-.1,0,.12,.2,.12),Tt(It.box,r,0,-.2,.04,.14,.07,.2)),t.add(u);i.userData.armL=new te,i.userData.armR=new te,i.userData.armL.position.set(-.22,.52,0),i.userData.armL.add(Tt(It.cyl,n,0,-.1,0,.1,.22,.1),Tt(It.sphere,e,0,-.22,0,.1,.1,.1)),i.userData.armR.position.set(.22,.52,0),i.userData.armR.add(Tt(It.cyl,n,0,-.1,0,.1,.22,.1),Tt(It.sphere,e,0,-.22,0,.1,.1,.1)),t.add(i.userData.armL,i.userData.armR);let l=new te;l.position.set(.3,.42,.12),t.add(l),l.add(Tt(It.cyl,ve(6963224),0,.12,0,.05,.4,.05));let c=Tt(It.cone,new ge({color:16756784}),0,.42,0,.14,.26,.14);l.add(c);let h=Tt(It.cone,new ge({color:16773280}),0,.39,0,.08,.16,.08);return l.add(h),i.userData.flame=[c,h],i.userData.torch=l,i.userData.head=o,i.userData.body=t,i}function Dh(i){let t=new te,e=new Ie({map:i});return t.add(Tt(It.box,e,0,.42,0,.9,.84,.9)),t}function Lh(){let i=new te,t=ve(16041008,6965760),e=new he(new As(.17,.05,8,20),t);return e.position.y=.36,i.add(e),i.add(Tt(It.box,t,0,0,0,.09,.42,.07),Tt(It.box,t,0,.1,0,.34,.08,.07)),i.userData.pivot=i,i}function Uh(){let i=new te,t=ve(9075302);i.add(Tt(It.cyl,t,0,.1,0,.5,.2,.5),Tt(It.cyl,t,0,.42,0,.18,.5,.18),Tt(It.cyl,ve(5917242),0,.72,0,.52,.18,.52),Tt(It.cyl,ve(1707784),0,.82,0,.42,.02,.42));let e=new te;return e.position.y=.84,e.add(Tt(It.cone,new ge({color:16747040}),0,.22,0,.36,.55,.36),Tt(It.cone,new ge({color:16769136}),0,.18,0,.2,.34,.2)),i.add(e),i.userData.flame=e,e.visible=!1,i}function Vh(i,t){let e=new te;e.add(Tt(It.cyl,ve(5917240),0,.01,0,.9,.04,.9));let n=new he(new Xi(.4,.4,.06,28),[new Ie({color:t,emissive:t,emissiveIntensity:.25}),new Ie({map:i,emissive:5583616,emissiveIntensity:.6}),new Ie({color:t})]);n.position.y=.06,e.add(n),e.userData.top=n;let s=new he(It.plane,new ge({color:16769152,transparent:!0,opacity:0,depthWrite:!1,blending:qe}));return s.rotation.x=-Math.PI/2,s.position.y=.12,s.scale.set(1.5,1.5,1),e.add(s),e.userData.glow=s,e}function kr(i,t){let e=new te,n=Tt(It.box,new Ie({map:i}),0,.55,0,.98,1.1,.98);return e.add(n),e.add(Tt(It.box,ve(t,0),0,1.14,0,1,.1,1)),e.userData.slab=n,e}function Nh(i){let t=new te,e=ve(15777856,5585408),n=ve(10126438);t.add(Tt(It.box,n,-.42,.7,-.05,.16,1.4,.3),Tt(It.box,n,.42,.7,-.05,.16,1.4,.3),Tt(It.box,e,0,1.45,-.05,1.1,.18,.34));let s=Tt(It.cyl,e,0,1.7,-.05,.3,.05,.3);s.rotation.x=Math.PI/2,t.add(s);let r=new he(It.plane,new ge({map:i,transparent:!0,opacity:.95,depthWrite:!1,blending:qe,color:16773296}));r.position.set(0,.7,-.02),r.scale.set(1.5,1.7,1),t.add(r);let a=new he(It.plane,new ge({map:i,transparent:!0,opacity:.8,depthWrite:!1,blending:qe,color:16769152}));return a.rotation.x=-Math.PI/2,a.position.y=.03,a.scale.set(1.8,1.8,1),t.add(a),t.userData.portal=r,t.userData.floorGlow=a,t}function zr(i){let t=new he(It.plane,new ge({map:i,transparent:!0,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t}function Fh(){let i=new te,t=new Ie({color:1182214}),e=new Ie({color:4863008});return i.add(Tt(It.box,t,0,-.95,0,1,.1,1)),i.add(Tt(It.box,e,0,-.45,-.49,1,.9,.02),Tt(It.box,e,0,-.45,.49,1,.9,.02),Tt(It.box,e,-.49,-.45,0,.02,.9,1),Tt(It.box,e,.49,-.45,0,.02,.9,1)),i}var Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var We=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Om=new zi(-1,1,1,-1,0,1),xl=class extends me{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}},km=new xl,Hn=class{constructor(t){this._mesh=new he(km,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Om)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ji=class extends We{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zn.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ms=class extends We{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Gr=class extends We{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Wr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new At);this._width=n.width,this._height=n.height,e=new De(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ji(Hr),this.copyPass.material.blending=dn,this.clock=new Sr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ms!==void 0&&(a instanceof Ms?n=!0:a instanceof Gr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xr=class extends We{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Bh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ji=class i extends We{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new Rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new De(r,a,{type:rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new De(r,a,{type:rn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new De(r,a,{type:rn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}let o=Bh;this.highPassUniforms=zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new At(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Hr;this.copyUniforms=zn.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Rt,this.oldClearAlpha=1,this.basic=new ge,this.fsQuad=new Hn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ji.BlurDirectionX=new At(1,0);ji.BlurDirectionY=new At(0,1);var Oh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Yr=class extends We{constructor(){super();let t=Oh;this.uniforms=zn.clone(t.uniforms),this.material=new yr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ot.getTransfer(this._outputColorSpace)===Zt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var kh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},zm={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},Hm={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function Gm(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let C=0;C<r;C++)a[C*3]=t.position.x+(Math.random()-.5)*2*s,a[C*3+1]=t.position.y+(Math.random()-.5)*s,a[C*3+2]=t.position.z+(Math.random()-.5)*2*s,o[C*3]=(Math.random()-.5)*.25,o[C*3+1]=.05+Math.random()*.25,o[C*3+2]=(Math.random()-.5)*.25;let l=new me;l.setAttribute("position",new Me(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new Wi(c);d.colorSpace=_e;let m=new ai({map:d,color:Hm[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:qe,fog:!1,sizeAttenuation:!0}),A=new Gi(l,m);return A.frustumCulled=!1,A.renderOrder=999,A.name="__motes",i.add(A),{pts:A,pos:a,vel:o,R:s,N:r}}function Wm(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var Xm={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2},Ym=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,Km=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;function Zm(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=g=>{if(!n[g]){let f=new Audio(`${e}${g}_${t}.mp3`);f.preload="auto",f.volume=.95,n[g]=f}return n[g]},u=(g,f)=>{let E=performance.now();if(!f&&E-r<6e3||c)return;let x=g+(1+Math.floor(Math.random()*Xm[g])),p=h(x);c=!0,r=E,p.currentTime=0;let b=()=>{c=!1};p.onended=b,p.onerror=b;let M=p.play();M&&M.catch&&M.catch(b),setTimeout(b,4e3)},d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),f=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),f.gain.setValueAtTime(.08,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(f),f.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},m=()=>{a=performance.now(),d(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",m,{passive:!0}),window.addEventListener("keydown",m,{passive:!0});let A="";new MutationObserver(()=>{if(!o)return;let g=(i.innerText||"").slice(0,600);g!==A&&(A=g,Ym.test(g)?u("win",!1):Km.test(g)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(u("idle",!1),a=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function zh(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=kh[e.get("look")||t.preset||"warm"]||kh.warm,s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,m=0,A=0,C=0,g=!1,f=performance.now();function E(x,p){let b=i.getSize(new At);m=b.x,A=b.y,C=i.getPixelRatio(),c=new Wr(i),c.setPixelRatio(C),c.setSize(m,A),h=new Xr(x,p),c.addPass(h),s||(u=new ji(new At(Math.max(2,m>>1),Math.max(2,A>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Yr),d=new Ji(zm),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(x,p){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!x||!p||!x.isScene)return a(x,p);try{c||E(x,p);let b=i.getSize(new At),M=i.getPixelRatio();(b.x!==m||b.y!==A||M!==C)&&(m=b.x,A=b.y,C=M,c.setPixelRatio(M),c.setSize(m,A),u&&u.resolution.set(Math.max(2,m>>1),Math.max(2,A>>1))),h.scene=x,h.camera=p,d.uniforms.time.value=(performance.now()-f)/1e3;let T=performance.now(),R=Math.min(.1,Math.max(0,(T-l)/1e3));if(l=T,!e.has("nomotes")&&t.motes!==!1){let I=o.get(x);I||(I=Gm(x,p,e.get("look")||t.preset||"warm",r),o.set(x,I)),Wm(I,p,R)}g=!0,c.render(),g=!1}catch(b){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",b&&b.message),i.render=a,a(x,p)}},!e.has("nocheer")&&!r&&setTimeout(()=>Zm(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var Qm={title:["\u0644\u063A\u0632 \u0627\u0644\u0645\u0642\u0628\u0631\u0629","TOMB PUZZLE"],sub:["\u0645\u063A\u0627\u0645\u0631\u0629 \u0627\u0644\u0641\u0631\u0639\u0648\u0646 \u0627\u0644\u0635\u063A\u064A\u0631","The little explorer's adventure"],play:["\u0627\u0644\u0639\u0628","PLAY"],cont:["\u0643\u0645\u0651\u0644","CONTINUE"],levels:["\u0627\u0644\u0645\u0631\u0627\u062D\u0644","LEVELS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],back:["\u0631\u062C\u0648\u0639","Back"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","RESTART"],home:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","MENU"],moves:["\u062D\u0631\u0643\u0627\u062A","Moves"],par:["\u0627\u0644\u0623\u0641\u0636\u0644","Par"],keysWord:["\u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D","Keys"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","NEXT ROOM"],replay:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","PLAY AGAIN"],won:["\u0648\u0635\u0644\u062A \u0644\u0644\u0645\u062E\u0631\u062C! \u{1F3C6}","You found the exit! \u{1F3C6}"],select:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u063A\u0631\u0641\u0629","CHOOSE A ROOM"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u063A\u0631\u0641\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the room before"],room:["\u063A\u0631\u0641\u0629","Room"],st1:["\u0648\u0635\u0644\u062A \u0644\u0644\u0645\u062E\u0631\u062C","Reached the exit"],st2:["\u062C\u0645\u0639\u062A \u0627\u0644\u0645\u0641\u062A\u0627\u062D\u064A\u0646","Found both keys"],st3:["\u0628\u0623\u0642\u0644 \u062D\u0631\u0643\u0627\u062A","Within the par moves"],fall:["\u0627\u0646\u0647\u0627\u0631\u062A \u0627\u0644\u0623\u0631\u0636! \u0646\u0628\u062F\u0623 \u0627\u0644\u063A\u0631\u0641\u0629 \u0645\u0646 \u062C\u062F\u064A\u062F","The floor gave way! Back to the start"],stuck:["\u0627\u0636\u063A\u0637 \u21A9 \u0644\u0644\u0631\u062C\u0648\u0639 \u062E\u0637\u0648\u0629","Tap \u21A9 to step back"],deadRoom:["\u0627\u0644\u063A\u0631\u0641\u0629 \u0627\u062A\u0639\u0642\u062F\u062A! \u062F\u0648\u0633 \u21A9 \u062A\u0631\u062C\u0639 \u062E\u0637\u0648\u0629 \u0623\u0648 \u{1F504} \u062A\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644","This room is jammed! Tap \u21A9 to step back or \u{1F504} to restart"],thatWay:["\u062C\u0631\u0651\u0628 \u0647\u0630\u0627 \u0627\u0644\u0627\u062A\u062C\u0627\u0647!","Try this way!"],bLock:["\u0627\u0644\u0628\u0627\u0628 \u064A\u062D\u062A\u0627\u062C \u0645\u0641\u062A\u0627\u062D\u0627\u064B","This door needs a key"],bDoor:["\u0627\u0644\u0628\u0627\u0628 \u0645\u063A\u0644\u0642: \u0627\u0636\u063A\u0637 \u0627\u0644\u0642\u0631\u0635 \u0627\u0644\u0630\u0647\u0628\u064A","Door closed: press the golden plate"],bGate:["\u0623\u0634\u0639\u0644 \u0643\u0644 \u0627\u0644\u0645\u0634\u0627\u0639\u0644 \u0644\u062A\u0641\u062A\u062D \u0627\u0644\u0628\u0648\u0627\u0628\u0629","Light every torch to open the gate"],bPit:["\u062D\u0641\u0631\u0629! \u0627\u062F\u0641\u0639 \u062D\u062C\u0631\u0627\u064B \u0641\u064A\u0647\u0627","A pit! Push a block into it"],bBlock:["\u0627\u0644\u062D\u062C\u0631 \u0644\u0627 \u064A\u062A\u062D\u0631\u0643 \u0647\u0646\u0627\u0643","The block can't move there"],bBraz:["\u0627\u0644\u0645\u0634\u0639\u0644 \u0645\u0636\u0627\u0621","Already lit"],doorOpened:["\u0627\u0646\u0641\u062A\u062D \u0627\u0644\u0628\u0627\u0628!","A door opened!"],gateOpened:["\u0627\u0646\u0641\u062A\u062D\u062A \u0627\u0644\u0628\u0648\u0627\u0628\u0629!","The gate opened!"],keyFound:["\u0648\u062C\u062F\u062A \u0645\u0641\u062A\u0627\u062D \u0639\u0646\u062E!","Found an ankh key!"],fin:["\u0623\u0646\u062A \u0628\u0637\u0644 \u0627\u0644\u0645\u0642\u0627\u0628\u0631! \u{1F31F}","You are the tomb hero! \u{1F31F}"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],undo:["\u062A\u0631\u0627\u062C\u0639","Undo"],reset:["\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u063A\u0631\u0641\u0629","Reset room"],hintB:["\u062A\u0644\u0645\u064A\u062D","Hint"],pause:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Pause"],how:["\u0627\u0633\u062D\u0628 \u0628\u0625\u0635\u0628\u0639\u0643 \u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u0628\u0639 \u0644\u062A\u062A\u062D\u0631\u0643. \u0627\u062F\u0641\u0639 \u0627\u0644\u0623\u062D\u062C\u0627\u0631\u060C \u0627\u062C\u0645\u0639 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D\u060C \u0648\u0627\u0635\u0644 \u0644\u0644\u0645\u062E\u0631\u062C","Drag or tap a tile to move. Push blocks, collect keys, reach the exit"],tombKeys:["\u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0645\u0642\u0628\u0631\u0629","Tomb keys"]},yt=oh(Qm),Jm=lh("tp","#6a3f1a","#2a160a","#ffd25a")+`
.tp-root{background:#1c120b}
.tp-banner{position:absolute;left:50%;top:calc(var(--u)*20);transform:translateX(-50%);max-width:92%;background:linear-gradient(180deg,#4a2a12,#2a160a);border:calc(var(--u)*.6) solid #ffd25a;border-radius:calc(var(--u)*3);color:#ffe9a8;font-weight:900;font-size:calc(var(--u)*4);padding:calc(var(--u)*1.4) calc(var(--u)*4);text-align:center;opacity:0;transition:opacity .35s;pointer-events:none;box-shadow:0 calc(var(--u)*1) calc(var(--u)*2.4) rgba(0,0,0,.5);line-height:1.25}
.tp-banner.show{opacity:1}
.tp-ank{width:calc(var(--u)*5);height:calc(var(--u)*5)}
.tp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.6);width:100%}
.tp-tomb{width:100%;display:flex;flex-direction:column;gap:calc(var(--u)*1.2)}
.tp-th{display:flex;justify-content:space-between;align-items:center;font-weight:900;font-size:calc(var(--u)*4.2);color:#ffd25a;padding:0 calc(var(--u)*1)}
.tp-lvb{border:calc(var(--u)*.4) solid rgba(255,255,255,.7);font-family:inherit;border-radius:calc(var(--u)*3);color:#fff;font-weight:900;padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*5);min-height:calc(var(--u)*17);cursor:pointer;justify-content:center}
.tp-lvb small{font-size:calc(var(--u)*3);letter-spacing:calc(var(--u)*.2)}
.tp-lvb.lock{filter:grayscale(1) brightness(.55);cursor:default}
.tp-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:calc(var(--u)*3.8);gap:calc(var(--u)*2)}
.tp-row.off{opacity:.45}
.tp-bot{gap:calc(var(--u)*4)}
.tp-bot .tp-round{width:calc(var(--u)*13);height:calc(var(--u)*13);font-size:calc(var(--u)*6)}
.tp-star{display:inline-block;font-size:calc(var(--u)*13);transform:scale(0);animation:tpstar .5s forwards}
.tp-star.off{filter:grayscale(1);opacity:.3}
@keyframes tpstar{70%{transform:scale(1.25)}100%{transform:scale(1)}}
.tp-pill.big{font-size:calc(var(--u)*4.4)}
`,jm=["sand","gold","moon"],$m=["linear-gradient(180deg,#e8b868,#a8702a)","linear-gradient(180deg,#f4d048,#b88a10)","linear-gradient(180deg,#8aa0e8,#3a4c9a)"],Hh='<svg class="tp-ank" viewBox="0 0 24 24" fill="none" stroke="#ffd25a" stroke-linecap="round"><ellipse cx="12" cy="7" rx="4.6" ry="5.6" stroke-width="2.4"/><path d="M12 12.8V23M6 16h12" stroke-width="2.8"/></svg>',Cl={U:Math.PI,D:0,L:-Math.PI/2,R:Math.PI/2},Gh={U:0,L:Math.PI/2,D:Math.PI,R:-Math.PI/2},tA=.15,vl=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),yt.setLang(e.lang),yt.setGirl(e.gender==="girl"),this.base=e.base||"./",this.save=fh(e.save),this.sound=new Qi,this.sound.muted=!!this.save.muted,document.getElementById("tp-style")||document.head.append(xt("style",{id:"tp-style"},Jm)),this.root=xt("div",{class:"tp-root",dir:yt.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=xt("div",{class:"tp-layer"}),this.mode="menu",this.clock=0,this.cd=0,this.buf=null,this.fx=[],this.texCache={},this.vs=null,this.lastBanner="",this.lastBumpT=0,this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){this.renderer=zh(new mr({antialias:!0}),{preset:"night"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=_e,this.root.prepend(this.renderer.domElement),this.scene=new Ar,this.camera=new we(38,1,.5,200),this.hemi=new Ir(16777215,8939076,2.2),this.scene.add(this.hemi),this.sun=new br(16769200,2),this.sun.position.set(-6,14,4),this.scene.add(this.sun),this.pl=new Cs(16754768,5,8,1.6),this.scene.add(this.pl),this.bl=[];for(let n=0;n<4;n++){let s=new Cs(16751168,0,7,1.7);this.scene.add(s),this.bl.push(s)}this.stage=new te,this.scene.add(this.stage),this.glowTex=Rh("255,200,110"),this.shadowTex=Ph(),this.arrowTex=wh(),this.exp=qh(),this.scene.add(this.exp),this.expShadow=Tt(It.plane,new ge({map:this.shadowTex,transparent:!0,depthWrite:!1}),0,.02,0,.9,.9,1),this.expShadow.rotation.x=-Math.PI/2,this.scene.add(this.expShadow),this.hintArrow=zr(this.arrowTex),this.hintArrow.scale.set(.8,.8,1),this.hintArrow.visible=!1,this.hintArrow.rotation.order="YXZ",this.scene.add(this.hintArrow),this.sparks=[];for(let n=0;n<48;n++){let s=new Hi(new ri({map:this.glowTex,transparent:!0,depthWrite:!1,blending:qe}));s.visible=!1,s.userData={life:0},this.scene.add(s),this.sparks.push(s)}let t=new me,e=new Float32Array(90*3);for(let n=0;n<90;n++)e[n*3]=Math.random()*10,e[n*3+1]=Math.random()*3,e[n*3+2]=Math.random()*10;t.setAttribute("position",new Me(e,3)),this.dust=new Gi(t,new ai({map:this.glowTex,size:.18,transparent:!0,opacity:.45,depthWrite:!1,blending:qe,sizeAttenuation:!0})),this.dust.frustumCulled=!1,this.scene.add(this.dust)}_tex(t){if(this.texCache[t])return this.texCache[t];let e=yh[t],n={P:e,floor:_h(e),crumble:Ih(e),wallSide:Mh(e),wallTop:bh(e),carpet:Sh(e),block:Th(e),plate:[0,1,2,3].map(s=>Eh(Al[s])),door:[0,1,2,3].map(s=>Or(Al[s])),lock:Or("#fff","lock"),gate:Or("#fff","gate")};return this.texCache[t]=n}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.updateProjectionMatrix(),this._fit()}_fit(){let t=this.L;if(!t)return;let e=this.camera,n=60*Math.PI/180,s=new q(0,Math.sin(n),Math.cos(n)),r=[];for(let C of[0,t.w])for(let g of[0,t.h])for(let f of[0,1.5])r.push(new q(C,f,g));let a=this.cw<this.ch,o=a?.74:.72,l=a?-.7:-.68,c=.94,h=new q(t.w/2,0,t.h/2),u=C=>{e.position.copy(h).addScaledVector(s,C),e.lookAt(h),e.updateMatrixWorld(),e.updateProjectionMatrix();let g=9,f=-9,E=9,x=-9;for(let p of r){let b=p.clone().project(e);g=Math.min(g,b.x),f=Math.max(f,b.x),E=Math.min(E,b.y),x=Math.max(x,b.y)}return{mnx:g,mxx:f,mny:E,mxy:x}},d=4,m=120;for(let C=0;C<20;C++){let g=(d+m)/2,f=u(g);f.mxx<=c&&f.mnx>=-c&&f.mxy-f.mny<=o-l?m=g:d=g}let A=m;for(let C=0;C<8;C++){let g=u(A),f=(g.mxy+g.mny)/2,E=(o+l)/2;h.z-=(f-E)*A*.38}u(A),this.baseCam={pos:e.position.clone(),target:h.clone()}}_clearStage(){this.stage.traverse(t=>{t.geometry&&t.userData.own&&t.geometry.dispose()}),this.stage.clear(),this.blockMeshes=new Map,this.tiles=new Map,this.plateM=[],this.doorM=[],this.lockM=[],this.gateM=[],this.torchM=[],this.keyM=[],this.exitM=null,this.arrowM=[]}_build(t){this.idx=t;let e=Fe[t],n=this.L=uh(e);this.P=new Dr(n),this.vs=null;let s=jm[e.tomb],r=this.tx=this._tex(s),a=r.P;this._clearStage(),this.scene.background=new Rt(a.bg),this.hemi.color.set(a.amb),this.hemi.groundColor.set(a.ambG),this.hemi.intensity=a.ambI*1.35,this.sun.color.set(a.sun),this.sun.intensity=a.sunI*1.15,this.pl.color.set(a.torch);let{w:o,h:l}=n,c=this.stage,h=new ci,u=new ci,d=new ci,m=new ci,A=(x,p)=>x<0||p<0||x>=o||p>=l||!!n.wall[p*o+x],C=new Set(n.dyn),g=(x,p)=>{for(let b=0;b<p;b++)for(let M=x-1;M<=x+1;M++)if(!A(M,b))return!1;return!0},f=(x,p)=>A(x,p)?g(x,p)?1.5:.62:0;this.tallTorches=[];for(let x=0;x<l;x++)for(let p=0;p<o;p++){let b=x*o+p;if(!n.wall[b]){if(C.has(b)||h.quad([p,0,x],[p,0,x+1],[p+1,0,x+1],[p+1,0,x],[0,1,0],[[0,1],[0,0],[1,0],[1,1]]),n.carpet[b]){let I=n.carpet[x*o+p-1]||n.carpet[x*o+p+1],y=x>0&&n.carpet[b-o]||x<l-1&&n.carpet[b+o],w=I&&!y?[[0,0],[1,0],[1,1],[0,1]]:[[0,1],[0,0],[1,0],[1,1]];u.quad([p,.012,x],[p,.012,x+1],[p+1,.012,x+1],[p+1,.012,x],[0,1,0],w)}continue}let M=!1;for(let I=-1;I<=1;I++)for(let y=-1;y<=1;y++)A(p+y,x+I)||(M=!0);if(!M)continue;let T=f(p,x);m.quad([p,T,x],[p,T,x+1],[p+1,T,x+1],[p+1,T,x],[0,1,0],[[0,1],[0,0],[1,0],[1,1]]);let R=(I,y,w,O,N,H,Z)=>{let G=f(I,y);if(T>G){let j=G/T,k=(nt,ct)=>[nt[0],G,nt[2]];d.quad(k(w),k(O),N,H,Z,[[0,0],[1,0],[1,1],[0,1]])}};R(p,x+1,[p,0,x+1],[p+1,0,x+1],[p+1,T,x+1],[p,T,x+1],[0,0,1]),R(p,x-1,[p+1,0,x],[p,0,x],[p,T,x],[p+1,T,x],[0,0,-1]),R(p+1,x,[p+1,0,x+1],[p+1,0,x],[p+1,T,x],[p+1,T,x+1],[1,0,0]),R(p-1,x,[p,0,x],[p,0,x+1],[p,T,x+1],[p,T,x],[-1,0,0]),T>1&&!A(p,x+1)&&(p+x)%2===0&&this.tallTorches.push([p+.5,x+1])}let E=(x,p)=>{if(x.empty)return;let b=x.build(),M=new he(b,p);return M.userData.own=!0,c.add(M),M};E(h,new Ie({map:r.floor,side:Ve})),E(u,new Ie({map:r.carpet,side:Ve,polygonOffset:!0,polygonOffsetFactor:-2})),E(d,new Ie({map:r.wallSide,side:Ve})),E(m,new Ie({map:r.wallTop,side:Ve}));for(let[x,p]of this.tallTorches){let b=new te;b.position.set(x,0,p+.04),b.add(Tt(It.box,ve(5913114),0,.95,0,.1,.34,.1),Tt(It.cone,new ge({color:16752688}),0,1.25,0,.18,.3,.18));let M=new Hi(new ri({map:this.glowTex,transparent:!0,depthWrite:!1,blending:qe,color:a.torch}));M.scale.set(1.5,1.5,1),M.position.set(0,1.25,.1),b.add(M),b.userData.sp=M,b.userData.flame=b.children[1],c.add(b),this.torchM.push({wall:!0,g:b})}for(let x of n.dyn){let p=x%o,b=x/o|0,M=new te;M.position.set(p+.5,0,b+.5);let T=new Ie({map:r.floor}),R=new Ie({color:6965800}),I=new he(It.box,[R,R,T,R,R,R]);I.scale.set(.99,.3,.99),I.position.y=-.15,M.add(I);let y=Fh();M.add(y),M.userData={slab:I,pit:y,top:T,shown:-1,fallT:-1,popT:-1,cell:x},c.add(M),this.tiles.set(x,M)}for(let x of n.keyCells){let p=Lh();p.position.set(x%o+.5,.5,(x/o|0)+.5),c.add(p),this.keyM.push(p);let b=Tt(It.plane,new ge({map:this.shadowTex,transparent:!0,depthWrite:!1}),0,-.47,0,.5,.5,1);b.rotation.x=-Math.PI/2,p.add(b)}for(let x=0;x<4;x++)for(let p of n.platesByGrp[x]){let b=Vh(r.plate[x],ml[x]);b.position.set(p%o+.5,0,(p/o|0)+.5),c.add(b),this.plateM.push({g:b,c:p,grp:x,y:0})}for(let x of n.doors){let p=n.doorAt[x],b=kr(r.door[p],ml[p]);b.position.set(x%o+.5,0,(x/o|0)+.5),c.add(b),this.doorM.push({g:b,c:x,open:0,grp:p})}for(let x of n.lockCells){let p=kr(r.lock,16041008);p.position.set(x%o+.5,0,(x/o|0)+.5),c.add(p),this.lockM.push({g:p,c:x,open:0})}for(let x of n.gateCells){let p=kr(r.gate,16748576);p.position.set(x%o+.5,0,(x/o|0)+.5),c.add(p),this.gateM.push({g:p,c:x,open:0})}for(let x of n.torchCells){let p=Uh();p.position.set(x%o+.5,0,(x/o|0)+.5);let b=new Hi(new ri({map:this.glowTex,transparent:!0,depthWrite:!1,blending:qe,color:a.torch,opacity:0}));b.scale.set(1.7,1.7,1),b.position.y=1.1,p.add(b),p.userData.sp=b,c.add(p),this.torchM.push({g:p,c:x,lit:!1})}this.exitM=Nh(this.glowTex),this.exitM.position.set(n.exit%o+.5,0,(n.exit/o|0)+.5),c.add(this.exitM),this.exitArrow=zr(this.arrowTex),this.exitArrow.scale.set(.55,.55,1),this.exitArrow.rotation.order="YXZ",this.exitArrow.rotation.set(-Math.PI/2,0,0),this.exitArrow.visible=!1,c.add(this.exitArrow);for(let[x,p,b]of n.arrows){let M=zr(this.arrowTex);M.rotation.order="YXZ",M.rotation.set(-Math.PI/2,Gh[b],0),M.position.set(x+.5,.03,p+.5),M.scale.set(.5,.5,1),c.add(M),this.arrowM.push(M)}this._syncBlocks(!0),this._snapExplorer(),this.pl.position.set(this.exp.position.x,1.5,this.exp.position.z+.3),this._fit(),this.dust.position.set(-1,0,-1)}_blockMesh(){let t=Dh(this.tx.block),e=Tt(It.plane,new ge({map:this.shadowTex,transparent:!0,depthWrite:!1}),0,.02,0,1.25,1.25,1);return e.rotation.x=-Math.PI/2,t.add(e),this.stage.add(t),t}_syncBlocks(t){for(let s of this.blockMeshes.values())this.stage.remove(s);this.blockMeshes=new Map;let e=this.L.w,n=this.vs||this.P.s;for(let s of n.blocks){let r=this._blockMesh();r.position.set(s%e+.5,0,(s/e|0)+.5),r.userData={tx:r.position.x,tz:r.position.z,tg:0},this.blockMeshes.set(s,r)}}_snapExplorer(){let t=this.vs||this.P.s,e=this.L.w;this.exX=this.exTX=t.p%e+.5,this.exZ=this.exTZ=(t.p/e|0)+.5,this.face=0,this.exp.rotation.y=0,this.exp.position.set(this.exX,0,this.exZ),this.exp.scale.setScalar(1),this.exp.visible=!0,this.jumpT=-1}_bind(){let t=()=>this.sound.unlock();for(let e of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(e,t,{capture:!0,passive:!0});this.root.addEventListener("pointerdown",e=>{e.target.closest("button")||this.mode!=="play"||this.paused||(this.drag={x:e.clientX,y:e.clientY,t:performance.now(),moved:!1,dir:null,rep:0},this.auto=null)}),this.root.addEventListener("pointermove",e=>{let n=this.drag;if(!n||this.mode!=="play"||this.paused)return;let s=e.clientX-n.x,r=e.clientY-n.y,a=this.u*5;if(Math.max(Math.abs(s),Math.abs(r))<a){n.moved&&Math.max(Math.abs(s),Math.abs(r))<a*.5&&(n.dir=null);return}let o=Math.abs(s)>Math.abs(r)?s>0?"R":"L":r>0?"D":"U";(!n.moved||o!==n.dir)&&(n.moved=!0,n.dir=o,n.rep=performance.now()+260,this._want(o))}),this.root.addEventListener("pointerup",e=>{let n=this.drag;this.drag=null,!(!n||n.moved||this.mode!=="play"||this.paused)&&performance.now()-n.t<500&&Math.hypot(e.clientX-n.x,e.clientY-n.y)<this.u*3&&this._tap(e.clientX,e.clientY)}),this.root.addEventListener("pointercancel",()=>{this.drag=null}),this._onKey=e=>{if(this.mode!=="play")return;let n=e.key.toLowerCase(),s={arrowup:"U",w:"U",arrowdown:"D",s:"D",arrowleft:"L",a:"L",arrowright:"R",d:"R"};s[n]?(e.preventDefault(),this.auto=null,this._want(s[n])):n==="z"||n==="u"?this.undo():n==="r"?this.resetRoom():n==="h"?this.showHint():(n==="p"||n==="escape")&&this.togglePause()},window.addEventListener("keydown",this._onKey),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_want(t){this.buf=t}_tap(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=new At((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new Er;r.setFromCamera(s,this.camera);let a=new q;if(!r.ray.intersectPlane(new tn(new q(0,1,0),0),a))return;let o=this.L,l=Math.floor(a.x),c=Math.floor(a.z);if(l<0||c<0||l>=o.w||c>=o.h)return;let h=c*o.w+l,u=this.P.s,d=u.p%o.w,m=u.p/o.w|0;if(h===u.p)return;if(Math.abs(d-l)+Math.abs(m-c)===1){this._want(l>d?"R":l<d?"L":c>m?"D":"U");return}let A=this._path(h);A&&A.length?(this.auto=A,this._want(this.auto.shift())):this.banner(yt.t("bBlock"),1200)}_path(t){let e=this.L,n=this.P.s,s=new Set([vs(e,n)]),r=[{s:n,path:""}];for(let a=0;a<r.length&&a<6e3;a++){let o=r[a];for(let l of hl){let c=Fr(e,o.s,l);if(!c.changed||c.fell||c.s.won&&c.s.p!==t||c.ev.some(u=>u.type==="push"||u.type==="light"||u.type==="unlock"))continue;if(c.s.p===t)return(o.path+l).split("");let h=`${vs(e,c.s)}`;s.has(h)||(s.add(h),r.push({s:c.s,path:o.path+l}))}}return null}tryMove(t){if(this.mode!=="play"||this.paused||this.locked)return;let e=this.P.s,n=this.P.move(t);if(this.cd=tA,!n.changed){this.auto=null,this._events(n.ev,e);return}this._events(n.ev,e,n),this._watch()}_watch(){clearTimeout(this._deadT),clearTimeout(this._idleT),!this.P.s.won&&(this._deadT=setTimeout(()=>{this.mode!=="play"||this.paused||this.P.s.won||fl(this.L,this.P.s)||(this.sound.play("hint"),this.banner(yt.t("deadRoom"),6e3))},450),this._idleT=setTimeout(()=>{this.mode==="play"&&!this.paused&&!this.P.s.won&&this.showHint()},22e3))}_events(t,e,n){let s=this.L,r=s.w,a=l=>[l%r+.5,(l/r|0)+.5],o=!1;for(let l of t)switch(l.type){case"move":{let[c,h]=a(l.to);this.exTX=c,this.exTZ=h,this.face=Cl[l.dir],this.sound.play("step"),this.hintArrow.visible=!1;break}case"push":{let c=this.blockMeshes.get(l.from);if(this.blockMeshes.delete(l.from),this.sound.play("scrape"),c){let[h,u]=a(l.to);c.userData.tx=h,c.userData.tz=u,l.fill?c.userData.sink=0:this.blockMeshes.set(l.to,c)}l.fill&&this.sound.play("crumble");break}case"key":{let[c,h]=a(l.cell);this._burst(c,.7,h,16765008,10),this.sound.play("key"),this.banner(yt.t("keyFound"),1300);break}case"plate":if(this.sound.play(l.on?"plate":"unplate"),s.doors.some(c=>s.doorAt[c]===l.grp)&&(o=!0),l.on){let c=s.platesByGrp[l.grp];for(let h of c){let[u,d]=a(h);this._burst(u,.2,d,16769152,6)}}break;case"light":{let[c,h]=a(l.cell);this._burst(c,1,h,16752688,10),this.sound.play("light"),this.face=Cl[l.dir];break}case"gate":this.sound.play("door"),this.banner(yt.t("gateOpened"),1600);break;case"unlock":{let[c,h]=a(l.cell);this._burst(c,.7,h,16765008,10),this.sound.play("unlock");break}case"crack":{let[c,h]=a(l.cell);this._burst(c,.1,h,13148272,4),this.sound.play("crack");break}case"crumble":{let[c,h]=a(l.cell);this._burst(c,.1,h,13148272,8),this.sound.play("crumble");break}case"bump":this._bump(l);break;case"fall":this._fall(t,e);break;case"win":this._win();break;default:break}o&&setTimeout(()=>this.sound.play("door"),120),n&&n.changed&&!n.fell&&this.auto&&!this.auto.length&&(this.auto=null),n&&n.fell&&(this.auto=null),this._hud()}_bump(t){this.auto=null,this.face=Cl[t.dir],this.bumpT=.18,this.bumpDir=t.dir;let e=performance.now();if(e-this.lastBumpT<700)return;this.lastBumpT=e;let n={lock:"bLock",door:"bDoor",gate:"bGate",pit:"bPit",block:"bBlock",brazier:"bBraz"}[t.why];this.sound.play("bump"),n&&this.banner(yt.t(n),1700)}_fall(t,e){this.locked=!0,this.auto=null,this.buf=null;let n=this.L.w,s=ul(e);for(let r of t)r.type==="crack"&&(s.terr[r.cell]=le.CRACKED),r.type==="crumble"&&(s.terr[r.cell]=le.PIT),r.type==="move"&&(s.p=r.to);this.vs=s,this.fallT=0,this.fallCell=s.p,this.sound.play("fall"),this.banner(yt.t("fall"),2200)}_win(){this.locked=!0,this.auto=null,this.buf=null;let t=this.P.s,e=this.L,n=Fe[this.idx],s=dh(e,t),r=this.save;r.stars[n.id]=Math.max(r.stars[n.id]||0,s),r.keys[n.id]=Math.max(r.keys[n.id]||0,this._popcount(t.keys)),r.best[n.id]=r.best[n.id]?Math.min(r.best[n.id],t.moves):t.moves,r.unlocked=Math.max(r.unlocked,Math.min(Fe.length,this.idx+2)),this.post({type:"save",save:r}),this.jumpT=0,this.sound.play("win");let[a,o]=[e.exit%e.w+.5,(e.exit/e.w|0)+.5];this._burst(a,1,o,16769152,24),setTimeout(()=>{this.mode==="play"&&this.L===e&&this._results(s)},1100)}_popcount(t){let e=0;for(;t;)e+=t&1,t>>=1;return e}undo(){this.mode!=="play"||this.paused||this.locked||(this.P.undo()?(this.sound.play("undo"),this._resync(),this.auto=null,this._watch()):this.sound.play("bump"))}resetRoom(){this.mode!=="play"||this.paused||this.locked||this.P.reset()&&(this.sound.play("undo"),this._resync(),this.auto=null,this._watch())}_resync(){this.vs=null,this._syncBlocks(!0),this._snapExplorer(),this.hintArrow.visible=!1,this._hud()}showHint(){if(this.mode!=="play"||this.paused||this.locked)return;let t=fl(this.L,this.P.s);if(this.sound.play("hint"),!t){this.banner(yt.t("stuck"),2600);return}this.hintDir=t,this.hintT=3.2,this.hintArrow.visible=!0,this.banner(yt.t("thatWay"),1800)}banner(t,e=2600){this.bannerEl&&(this.bannerEl.textContent=t,this.bannerEl.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>this.bannerEl&&this.bannerEl.classList.remove("show"),e))}_burst(t,e,n,s,r){let a=0;for(let o of this.sparks){if(a>=r)break;if(o.visible)continue;a++,o.visible=!0,o.material.color.set(s),o.position.set(t,e,n);let l=Math.random()*6.283,c=.6+Math.random()*1.4;o.userData={life:.7+Math.random()*.4,t:0,vx:Math.cos(l)*c,vy:1+Math.random()*1.5,vz:Math.sin(l)*c,size:.3+Math.random()*.3}}}_clear(){this.layer.replaceChildren(),this.bannerEl=null}_soundPill(){let t=xt("button",{class:"tp-soundpill",onclick:()=>this.sound.unlock()},yt.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}_lastOpen(){return Math.min(this.save.unlocked,Fe.length)-1}showMenu(){this.mode="menu",this.paused=!1,this.locked=!1,this.sound.setMode(!1),this._clear(),this._build((Math.min(this._lastOpen(),0)===0,0)),this.menuSpin=!0;let t=this.save.unlocked>1||Object.keys(this.save.stars).length>0,e=Math.min(this._lastOpen(),Fe.length-1);this.layer.append(xt("div",{class:"tp-dim",style:"background:rgba(10,5,0,.5)"},xt("div",{class:"tp-card"},xt("div",{class:"tp-logo"},"\u{13080} ",yt.t("title")),xt("div",{class:"tp-small"},yt.t("sub")),xt("button",{class:"tp-btn",onclick:()=>{this.sound.play("tap"),this.start(e)}},"\u25B6 ",t?yt.t("cont"):yt.t("play")),xt("button",{class:"tp-btn dark",onclick:()=>{this.sound.play("tap"),this.showLevels()}},"\u{1F5FA}\uFE0F ",yt.t("levels")),xt("button",{class:"tp-btn dark",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.post({type:"save",save:this.save}),this.showMenu()}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${yt.t("sound")}`),xt("button",{class:"tp-btn alt",onclick:()=>this.post({type:"exit"})},yt.t("quit"))))),this._soundPill()}showLevels(){this._clear();let t=yt.getLang()!=="en",e=this.save,n=ph.map((s,r)=>{let a=Fe.map((h,u)=>[h,u]).filter(([h])=>h.tomb===r),o=a.reduce((h,[u])=>h+(e.keys[u.id]||0),0),l=a.map(([h,u])=>{let d=u+1>e.unlocked,m=e.stars[h.id]||0;return xt("button",{class:`tp-lvb${d?" lock":""}`,style:`background:${$m[r]}`,onclick:()=>{if(d){this.banner(yt.t("locked"),1500);return}this.sound.play("tap"),this.start(u)}},xt("span",{},yt.num(u+1)),xt("small",{},d?"\u{1F512}":m?"\u2B50".repeat(m):"\u2606\u2606\u2606"))}),c=xt("div",{class:"tp-th"},xt("span",{},`${s.icon} ${t?s.name[0]:s.name[1]}`),xt("span",{style:"display:flex;gap:calc(var(--u)*1);align-items:center"},`${yt.num(o)}/${yt.num(8)}`));return c.lastChild.insertAdjacentHTML("beforeend",Hh),xt("div",{class:"tp-tomb"},c,xt("div",{class:"tp-grid"},l))});this.layer.append(xt("div",{class:"tp-dim",style:"background:rgba(10,5,0,.6)"},xt("div",{class:"tp-card"},xt("div",{class:"tp-title"},yt.t("select")),...n,xt("button",{class:"tp-btn dark",onclick:()=>this.showMenu()},yt.t("back"))))),this.bannerEl=xt("div",{class:"tp-banner"}),this.layer.append(this.bannerEl),this._soundPill()}start(t){this.menuSpin=!1,this._build(t),this.mode="play",this.paused=!1,this.locked=!1,this.cd=.2,this.buf=null,this.auto=null,this.fallT=-1,this._clear(),this.sound.setMode(!0),this.movesEl=xt("span",{}),this.keysEl=xt("span",{}),this.lvEl=xt("span",{},`${yt.t("room")} ${yt.num(t+1)}`);let e=xt("div",{class:"tp-pill"},this.keysEl);e.insertAdjacentHTML("beforeend",Hh),this.layer.append(xt("div",{class:"tp-top"},xt("button",{class:"tp-round","aria-label":yt.t("pause"),onclick:()=>this.togglePause()},"\u23F8"),xt("div",{class:"tp-pill"},this.lvEl),e)),this.layer.append(xt("div",{class:"tp-top",style:"top:calc(var(--u)*13.5);justify-content:center"},xt("div",{class:"tp-pill",style:"font-size:calc(var(--u)*3.2);padding:calc(var(--u)*.4) calc(var(--u)*2.6)"},this.movesEl)));let n=(r,a,o)=>xt("button",{class:"tp-round","aria-label":a,title:a,onclick:()=>{this.sound.play("tap"),o()}},r);this.layer.append(xt("div",{class:"tp-bot"},n("\u21A9\uFE0F",yt.t("undo"),()=>this.undo()),n("\u{1F4A1}",yt.t("hintB"),()=>this.showHint()),n("\u{1F504}",yt.t("reset"),()=>this.resetRoom()))),this.bannerEl=xt("div",{class:"tp-banner"}),this.layer.append(this.bannerEl),this._soundPill(),this._hud();let s=Fe[t].hint;setTimeout(()=>this.banner(s[yt.getLang()==="en"?1:0],4500),350)}_hud(){if(!this.movesEl||!this.P)return;let t=this.P.s,e=this.L,n=Fe[this.idx].tomb,s=0;for(let r=0;r<Fe.length;r++)Fe[r].tomb===n&&(s+=r===this.idx?Math.max(this.save.keys[Fe[r].id]||0,this._popcount(t.keys)):this.save.keys[Fe[r].id]||0);this.keysEl.textContent=`${yt.num(s)}/${yt.num(8)}`,this.movesEl.textContent=`${yt.t("moves")} ${yt.num(t.moves)}  \xB7  ${yt.t("par")} ${yt.num(e.par)}`}togglePause(){this.mode!=="play"||this.locked||(this.paused=!this.paused,this.paused?(this.pauseEl=xt("div",{class:"tp-dim"},xt("div",{class:"tp-card"},xt("div",{class:"tp-title"},yt.t("paused")),xt("button",{class:"tp-btn",onclick:()=>this.togglePause()},"\u25B6 ",yt.t("resume")),xt("button",{class:"tp-btn dark",onclick:()=>{this.togglePause(),this.resetRoom()}},"\u{1F504} ",yt.t("restart")),xt("button",{class:"tp-btn dark",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.post({type:"save",save:this.save}),this.togglePause(),this.togglePause()}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${yt.t("sound")}`),xt("button",{class:"tp-btn dark",onclick:()=>{this.paused=!1,this.showLevels(),this.mode="menu",this.sound.setMode(!1)}},"\u{1F5FA}\uFE0F ",yt.t("levels")),xt("button",{class:"tp-btn dark",onclick:()=>{this.paused=!1,this.showMenu()}},"\u{1F3E0} ",yt.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_results(t){let e=this.L,n=this.P.s,s=this.idx>=Fe.length-1,r=n.keys===e.keyFull,a=(l,c)=>xt("div",{class:`tp-row${l?"":" off"}`},xt("span",{},l?"\u2B50":"\u2606"),xt("span",{},c)),o=[0,1,2].map(l=>xt("span",{class:`tp-star${l<t?"":" off"}`,style:`animation-delay:${.15+l*.25}s`},"\u2B50"));this.layer.append(xt("div",{class:"tp-dim"},xt("div",{class:"tp-card"},xt("div",{class:"tp-logo",style:"font-size:calc(var(--u)*7)"},s?yt.t("fin"):yt.t("won")),xt("div",{},o),a(!0,yt.t("st1")),a(r,yt.t("st2")),a(r&&n.moves<=e.par,`${yt.t("st3")} (${yt.num(n.moves)}/${yt.num(e.par)})`),s?null:xt("button",{class:"tp-btn",onclick:()=>this.start(this.idx+1)},"\u25B6 ",yt.t("next")),xt("button",{class:`tp-btn ${s?"":"dark"}`,onclick:()=>this.start(this.idx)},"\u{1F504} ",yt.t("replay")),xt("button",{class:"tp-btn dark",onclick:()=>this.showLevels()},"\u{1F5FA}\uFE0F ",yt.t("levels")))))}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e,this.mode==="play"&&!this.paused&&this._tickInput(e),this._visuals(e),this.renderer.render(this.scene,this.camera)}_tickInput(t){if(this.cd-=t,this.locked){if(this.fallT>=0&&(this.fallT+=t,this.fallT>.9)){this.fallT=-1,this.vs=null,this.locked=!1,this._syncBlocks(!0),this._snapExplorer();let n=this.L;this._burst(n.start%n.w+.5,.5,(n.start/n.w|0)+.5,16769152,12),this._hud()}return}let e=this.drag;if(e&&e.moved&&e.dir&&eA()>e.rep&&(this.buf=e.dir),this.cd<=0)if(this.buf){let n=this.buf;this.buf=null,this.tryMove(n)}else this.auto&&this.auto.length&&this.tryMove(this.auto.shift());this.hintT>0&&(this.hintT-=t,this.hintT<=0&&(this.hintArrow.visible=!1))}_visuals(t){let e=this.L;if(!e)return;let n=this.vs||this.P.s,s=e.w,r=this.clock,a=Math.min(1,t*16),o=this.exTX-this.exX,l=this.exTZ-this.exZ,c=Math.hypot(o,l)>.04;this.exX+=o*a,this.exZ+=l*a;let h=0,u=0;if(this.bumpT>0){this.bumpT-=t;let p=Math.sin((1-this.bumpT/.18)*Math.PI)*.1,b=Lr[this.bumpDir];h=b[0]*p,u=b[1]*p}let d=this.exp,m=0,A=1;if(this.fallT>=0){let p=Math.min(1,this.fallT/.7);m=-p*1.4,A=1-p*.7,d.visible=this.fallT<.75}this.jumpT>=0&&(this.jumpT+=t,m=Math.abs(Math.sin(this.jumpT*7))*.5,d.rotation.y+=t*8);let C=r*16,g=d.userData.body;if(d.position.set(this.exX+h,m,this.exZ+u),d.scale.setScalar(A),this.jumpT<0){let p=this.face-d.rotation.y;p=Math.atan2(Math.sin(p),Math.cos(p)),d.rotation.y+=p*Math.min(1,t*14)}g.position.y=c?Math.abs(Math.sin(C))*.06:Math.sin(r*2)*.012,d.userData.legL.rotation.x=c?Math.sin(C)*.8:0,d.userData.legR.rotation.x=c?-Math.sin(C)*.8:0,d.userData.armL.rotation.x=c?-Math.sin(C)*.7:0,d.userData.armR.rotation.z=-.35+Math.sin(r*3)*.04;let f=1+Math.sin(r*17)*.12+Math.sin(r*31)*.08;d.userData.flame[0].scale.set(.14*f,.26*f,.14*f),d.userData.flame[1].scale.set(.08*f,.16*f,.08*f),this.expShadow.position.set(this.exX,.025,this.exZ),this.expShadow.visible=this.fallT<0,this.pl.position.set(this.exX+.25,1.4,this.exZ+.3),this.pl.intensity=5*(.94+Math.sin(r*19)*.04+Math.sin(r*7)*.03);for(let p of[...this.blockMeshes.values()]){let b=p.userData;p.position.x+=(b.tx-p.position.x)*Math.min(1,t*14),p.position.z+=(b.tz-p.position.z)*Math.min(1,t*14)}for(let p of this.stage.children)p.userData&&p.userData.sink!==void 0&&(p.userData.sink+=t,p.position.y=-p.userData.sink*2,p.scale.setScalar(Math.max(.01,1-p.userData.sink*1.5)),p.userData.sink>.6&&this.stage.remove(p));for(let[p,b]of this.tiles){let M=b.userData,T=n.terr[p];if(M.shown!==T){M.shown===le.CRACKED&&T===le.PIT?M.fallT=0:M.fallT=-1,M.shown===le.PIT&&T===le.FLOOR&&(M.popT=0);let R=T===le.CRUMBLE||T===le.CRACKED;M.top.map=R?this.tx.crumble:this.tx.floor,M.top.needsUpdate=!0,M.shown=T,M.pit.visible=T===le.PIT,(T!==le.PIT||M.fallT>=0)&&(M.slab.visible=T!==le.PIT||M.fallT>=0),M.fallT<0&&(M.slab.position.set(0,-.15,0),M.slab.rotation.set(0,0,0))}if(M.fallT>=0&&(M.fallT+=t,M.slab.position.y=-.15-M.fallT*M.fallT*9,M.slab.rotation.x=M.fallT*2,M.slab.rotation.z=M.fallT*1.4,M.fallT>.7&&(M.slab.visible=!1,M.fallT=-1)),M.popT>=0){M.popT+=t;let R=Math.min(1,M.popT/.3);b.scale.y=.6+.4*R,R>=1&&(M.popT=-1,b.scale.y=1)}T===le.CRACKED&&(M.slab.position.x=Math.sin(r*60)*.015,M.slab.position.z=Math.cos(r*53)*.015,Math.random()<t*8&&this._burst(p%s+.5+(Math.random()-.5)*.7,.05,(p/s|0)+.5+(Math.random()-.5)*.7,13148272,1))}for(let p of this.plateM){let b=n.p===p.c||n.blocks.includes(p.c),M=b?-.045:0;p.y+=(M-p.y)*Math.min(1,t*14),p.g.userData.top.position.y=.06+p.y;let T=Ur(e,n,p.grp);p.g.userData.glow.material.opacity+=((b||T?.55+Math.sin(r*5)*.12:0)-p.g.userData.glow.material.opacity)*Math.min(1,t*10)}for(let p of this.doorM){let b=Vr(e,n,p.c)?1:0;p.open+=(b-p.open)*Math.min(1,t*7),p.g.position.y=-p.open*1.25,p.g.visible=p.open<.97}for(let p of this.lockM){let b=dl(e,n,p.c)?1:0;p.open+=(b-p.open)*Math.min(1,t*9),p.g.position.y=-p.open*1.25,p.g.visible=p.open<.97}for(let p of this.gateM){let b=Nr(e,n)?1:0;p.open+=(b-p.open)*Math.min(1,t*5),p.g.position.y=-p.open*1.25,p.g.visible=p.open<.97}let E=0;for(let p of this.torchM){if(p.wall){let T=1+Math.sin(r*13+p.g.position.x*3)*.12;p.g.userData.flame.scale.set(.18*T,.3*T,.18*T),p.g.userData.sp.material.opacity=.7+Math.sin(r*9+p.g.position.x)*.15;continue}let b=!!(n.torches>>e.torchAt[p.c]&1);p.g.userData.flame.visible=b;let M=1+Math.sin(r*15+p.c)*.12+Math.sin(r*27)*.06;if(p.g.userData.flame.scale.set(M,M*1.1,M),p.g.userData.sp.material.opacity+=((b?.5:0)-p.g.userData.sp.material.opacity)*Math.min(1,t*8),b&&E<this.bl.length){let T=this.bl[E++];T.position.set(p.g.position.x,1.3,p.g.position.z),T.intensity=4.5*M}}for(;E<this.bl.length;E++)this.bl[E].intensity=0;if(this.keyM.forEach((p,b)=>{let M=n.keys>>b&1;p.visible=!M,p.rotation.y=r*2.4+b,p.children[0].position.y=0,p.position.y=.55+Math.sin(r*3+b)*.08}),this.exitM){let p=this.exitM.userData;p.portal.material.opacity=.75+Math.sin(r*3)*.15,p.floorGlow.material.opacity=.55+Math.sin(r*4)*.15,p.floorGlow.rotation.z=r*.5,this.exitArrow.visible=this.mode==="play"&&!n.won,this.exitArrow.position.set(this.exitM.position.x,1.9+Math.sin(r*4)*.12,this.exitM.position.z+.2)}for(let p of this.arrowM){let b=.5+Math.sin(r*4)*.05;p.scale.set(b,b,1)}if(this.hintArrow.visible&&this.hintDir){let p=Lr[this.hintDir];this.hintArrow.rotation.set(-Math.PI/2,Gh[this.hintDir],0),this.hintArrow.position.set(this.exX+p[0]*(.95+Math.sin(r*8)*.12),.06,this.exZ+p[1]*(.95+Math.sin(r*8)*.12))}for(let p of this.sparks){if(!p.visible)continue;let b=p.userData;if(b.t+=t,b.t>b.life){p.visible=!1;continue}p.position.x+=b.vx*t,p.position.y+=b.vy*t,p.position.z+=b.vz*t,b.vy-=2.2*t;let M=1-b.t/b.life;p.scale.setScalar(b.size*M+.05),p.material.opacity=M}let x=this.dust.geometry.attributes.position;for(let p=0;p<x.count;p++){let b=x.getY(p)+t*.12;b>3&&(b=0),x.setY(p,b),x.setX(p,x.getX(p)+Math.sin(r*.5+p)*t*.1)}if(x.needsUpdate=!0,this.dust.position.set(this.L.w/2-5,0,this.L.h/2-5),this.baseCam){let p=this.camera;this.menuSpin?(p.position.copy(this.baseCam.pos),p.position.x+=Math.sin(r*.3)*.8,p.lookAt(this.baseCam.target)):(p.position.copy(this.baseCam.pos),p.lookAt(this.baseCam.target))}}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){clearTimeout(this._deadT),clearTimeout(this._idleT),this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}};function eA(){return performance.now()}var yl={start(i,t,e){let n=new vl(i,t||{},e);return yl.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.TombPuzzle=yl;var i0=yl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
