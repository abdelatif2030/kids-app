(()=>{var Jo="170";var Nh=0,Dl=1,zh=2;var Gc=1,Fh=2,vn=3,Gn=0,_e=1,_n=2,hn=0,On=1,Oi=2,Nl=3,zl=4,Bh=5,ri=100,Oh=101,kh=102,Hh=103,Gh=104,qh=200,Wh=201,Xh=202,Yh=203,La=204,Ua=205,Zh=206,jh=207,Kh=208,Jh=209,Qh=210,$h=211,tu=212,eu=213,nu=214,Da=0,Na=1,za=2,ki=3,Fa=4,Ba=5,Oa=6,ka=7,Nr=0,iu=1,su=2,kn=0,Qo=1,$o=2,tl=3,el=4,ru=5,nl=6,il=7;var qc=300,Hi=301,Gi=302,Ha=303,Ga=304,zr=306,As=1e3,oi=1001,xs=1002,ke=1003,au=1004;var Ts=1005;var ln=1006,ea=1007;var li=1008;var Mn=1009,Wc=1010,Xc=1011,vs=1012,sl=1013,ci=1014,cn=1015,sn=1016,rl=1017,al=1018,qi=1020,Yc=35902,Zc=1021,jc=1022,$e=1023,Kc=1024,Jc=1025,zi=1026,Wi=1027,ol=1028,ll=1029,Qc=1030,cl=1031;var hl=1033,sr=33776,rr=33777,ar=33778,or=33779,qa=35840,Wa=35841,Xa=35842,Ya=35843,Za=36196,ja=37492,Ka=37496,Ja=37808,Qa=37809,$a=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,lr=36492,uo=36494,fo=36495,$c=36283,po=36284,go=36285,mo=36286;var cr=2300,Ao=2301,na=2302,Fl=2400,Bl=2401,Ol=2402;var ou=3200,lu=3201;var ul=0,cu=1,Fn="",ue="srgb",Ki="srgb-linear",Fr="linear",Kt="srgb";var Ai=7680;var kl=519,hu=512,uu=513,du=514,th=515,fu=516,pu=517,gu=518,mu=519,xo=35044,eh=35048;var Hl="300 es",yn=2e3,hr=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ia=Math.PI/180,vo=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Au(i,t){return(i%t+t)%t}function sa(i,t,e){return(1-e)*i+e*t}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var yt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],g=n[5],m=n[8],A=s[0],p=s[3],f=s[6],M=s[1],v=s[4],x=s[7],E=s[2],S=s[5],w=s[8];return r[0]=a*A+o*M+l*E,r[3]=a*p+o*v+l*S,r[6]=a*f+o*x+l*w,r[1]=c*A+h*M+u*E,r[4]=c*p+h*v+u*S,r[7]=c*f+h*x+u*w,r[2]=d*A+g*M+m*E,r[5]=d*p+g*v+m*S,r[8]=d*f+g*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,g=c*r-a*l,m=e*u+n*d+s*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ra=new Dt;function nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){let i=Cs("canvas");return i.style.display="block",i}var Gl={};function ps(i){i in Gl||(Gl[i]=!0,console.warn(i))}function vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Cu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _u(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ht={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fn?Fr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ql=[.64,.33,.3,.6,.15,.06],Wl=[.2126,.7152,.0722],Xl=[.3127,.329],Yl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[Ki]:{primaries:ql,whitePoint:Xl,transfer:Fr,toXYZ:Yl,fromXYZ:Zl,luminanceCoefficients:Wl,workingColorSpaceConfig:{unpackColorSpace:ue},outputColorSpaceConfig:{drawingBufferColorSpace:ue}},[ue]:{primaries:ql,whitePoint:Xl,transfer:Kt,toXYZ:Yl,fromXYZ:Zl,luminanceCoefficients:Wl,outputColorSpaceConfig:{drawingBufferColorSpace:ue}}});var xi,Co=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=Cs("canvas")),xi.width=t.width,xi.height=t.height;let n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Cs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yu=0,ur=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(aa(s[a].image)):r.push(aa(s[a]))}else r=aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function aa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Iu=0,Le=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=oi,s=oi,r=ln,a=li,o=$e,l=Mn,c=i.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Hn(),this.name="",this.source=new ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case xs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case xs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=qc;Le.DEFAULT_ANISOTROPY=1;var he=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],g=l[5],m=l[9],A=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(g+1)/2,E=(f+1)/2,S=(h+d)/4,w=(u+A)/4,T=(m+p)/4;return v>x&&v>E?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=w/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=T/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=T/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-A)/M,this.z=(d-h)/M,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_o=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ur(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends _o{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},dr=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yo=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],g=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=g,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==d||c!==g||h!==m){let p=1-o,f=l*d+c*g+h*m+u*A,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let E=Math.sqrt(v),S=Math.atan2(E,f*M);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E}let x=o*M;if(l=l*p+d*x,c=c*p+g*x,h=h*p+m*x,u=u*p+A*x,p===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],g=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*g-c*d,t[e+1]=l*m+h*d+c*u-o*g,t[e+2]=c*m+h*g+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),g=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u-d*g*m;break;case"YXZ":this._x=d*h*u+c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u+d*g*m;break;case"ZXY":this._x=d*h*u-c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u-d*g*m;break;case"ZYX":this._x=d*h*u-c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u+d*g*m;break;case"YZX":this._x=d*h*u+c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u-d*g*m;break;case"XZY":this._x=d*h*u-c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u+d*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>u){let g=2*Math.sqrt(1+n-o-u);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>u){let g=2*Math.sqrt(1+o-n-u);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+u-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oa=new D,jl=new tn,bn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Ps.subVectors(this.max,rs),vi.subVectors(t.a,rs),Ci.subVectors(t.b,rs),_i.subVectors(t.c,rs),Pn.subVectors(Ci,vi),Ln.subVectors(_i,Ci),Qn.subVectors(vi,_i);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Qn.z,Qn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Qn.z,0,-Qn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Qn.y,Qn.x,0];return!la(e,vi,Ci,_i,Ps)||(e=[1,0,0,0,1,0,0,0,1],!la(e,vi,Ci,_i,Ps))?!1:(Ls.crossVectors(Pn,Ln),e=[Ls.x,Ls.y,Ls.z],la(e,vi,Ci,_i,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pn=[new D,new D,new D,new D,new D,new D,new D,new D],Ke=new D,Rs=new bn,vi=new D,Ci=new D,_i=new D,Pn=new D,Ln=new D,Qn=new D,rs=new D,Ps=new D,Ls=new D,$n=new D;function la(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);let o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Mu=new bn,as=new D,ca=new D,Wn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);let e=as.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(ca)),this.expandByPoint(as.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gn=new D,ha=new D,Us=new D,Un=new D,ua=new D,Ds=new D,da=new D,fr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ha.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(ha);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Us),o=Un.dot(this.direction),l=-Un.dot(Us),c=Un.lengthSq(),h=Math.abs(1-a*a),u,d,g,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,g=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ha).addScaledVector(Us,d),g}intersectSphere(t,e){gn.subVectors(t.center,this.origin);let n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){ua.subVectors(e,t),Ds.subVectors(n,t),da.crossVectors(ua,Ds);let a=this.direction.dot(da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,t);let l=o*this.direction.dot(Ds.crossVectors(Un,Ds));if(l<0)return null;let c=o*this.direction.dot(ua.cross(Un));if(c<0||l+c>a)return null;let h=-o*Un.dot(da);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=g,f[7]=m,f[11]=A,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),a=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+m*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=m+g*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,g=l*u,m=c*h,A=c*u;e[0]=d+A*o,e[4]=m*o-g,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=g*o-m,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,g=l*u,m=c*h,A=c*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+g*o,e[1]=g+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-g,e[8]=d*c+A,e[1]=l*u,e[5]=A*c+d,e[9]=g*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-d*u,e[8]=m*u+g,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+A,e[5]=a*h,e[9]=g*u-m,e[2]=m*u-g,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bu,t,Su)}lookAt(t,e,n){let s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Dn.crossVectors(n,Be),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Dn.crossVectors(n,Be)),Dn.normalize(),Ns.crossVectors(Be,Dn),s[0]=Dn.x,s[4]=Ns.x,s[8]=Be.x,s[1]=Dn.y,s[5]=Ns.y,s[9]=Be.y,s[2]=Dn.z,s[6]=Ns.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],g=n[13],m=n[2],A=n[6],p=n[10],f=n[14],M=n[3],v=n[7],x=n[11],E=n[15],S=s[0],w=s[4],T=s[8],I=s[12],_=s[1],V=s[5],O=s[9],N=s[13],q=s[2],H=s[6],F=s[10],K=s[14],G=s[3],et=s[7],ot=s[11],gt=s[15];return r[0]=a*S+o*_+l*q+c*G,r[4]=a*w+o*V+l*H+c*et,r[8]=a*T+o*O+l*F+c*ot,r[12]=a*I+o*N+l*K+c*gt,r[1]=h*S+u*_+d*q+g*G,r[5]=h*w+u*V+d*H+g*et,r[9]=h*T+u*O+d*F+g*ot,r[13]=h*I+u*N+d*K+g*gt,r[2]=m*S+A*_+p*q+f*G,r[6]=m*w+A*V+p*H+f*et,r[10]=m*T+A*O+p*F+f*ot,r[14]=m*I+A*N+p*K+f*gt,r[3]=M*S+v*_+x*q+E*G,r[7]=M*w+v*V+x*H+E*et,r[11]=M*T+v*O+x*F+E*ot,r[15]=M*I+v*N+x*K+E*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],g=t[14],m=t[3],A=t[7],p=t[11],f=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*g-n*l*g)+A*(+e*l*g-e*c*d+r*a*d-s*a*g+s*c*h-r*l*h)+p*(+e*c*u-e*o*g-r*a*u+n*a*g+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],g=t[11],m=t[12],A=t[13],p=t[14],f=t[15],M=u*p*c-A*d*c+A*l*g-o*p*g-u*l*f+o*d*f,v=m*d*c-h*p*c-m*l*g+a*p*g+h*l*f-a*d*f,x=h*A*c-m*u*c+m*o*g-a*A*g-h*o*f+a*u*f,E=m*u*l-h*A*l-m*o*d+a*A*d+h*o*p-a*u*p,S=e*M+n*v+s*x+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=M*w,t[1]=(A*d*r-u*p*r-A*s*g+n*p*g+u*s*f-n*d*f)*w,t[2]=(o*p*r-A*l*r+A*s*c-n*p*c-o*s*f+n*l*f)*w,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*g-n*l*g)*w,t[4]=v*w,t[5]=(h*p*r-m*d*r+m*s*g-e*p*g-h*s*f+e*d*f)*w,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*f-e*l*f)*w,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*g+e*l*g)*w,t[8]=x*w,t[9]=(m*u*r-h*A*r-m*n*g+e*A*g+h*n*f-e*u*f)*w,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*g-e*o*g)*w,t[12]=E*w,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*p+e*u*p)*w,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*p-e*o*p)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,g=r*h,m=r*u,A=a*h,p=a*u,f=o*u,M=l*c,v=l*h,x=l*u,E=n.x,S=n.y,w=n.z;return s[0]=(1-(A+f))*E,s[1]=(g+x)*E,s[2]=(m-v)*E,s[3]=0,s[4]=(g-x)*S,s[5]=(1-(d+f))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(m+v)*w,s[9]=(p-M)*w,s[10]=(1-(d+A))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=yi.set(s[0],s[1],s[2]).length(),a=yi.set(s[4],s[5],s[6]).length(),o=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);let c=1/r,h=1/a,u=1/o;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,m;if(o===yn)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===hr)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,g=(n+s)*h,m,A;if(o===yn)m=(a+r)*u,A=-2*u;else if(o===hr)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},yi=new D,Je=new Jt,bu=new D(0,0,0),Su=new D(1,1,1),Dn=new D,Ns=new D,Be=new D,Kl=new Jt,Jl=new tn,He=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};He.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Eu=0,Ql=new D,Ii=new tn,mn=new Jt,zs=new D,os=new D,wu=new D,Vu=new tn,$l=new D(1,0,0),tc=new D(0,1,0),ec=new D(0,0,1),nc={type:"added"},Tu={type:"removed"},Mi={type:"childadded",child:null},fa={type:"childremoved",child:null},Me=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new He,n=new tn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Dt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(os,zs,this.up):mn.lookAt(zs,os,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(mn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tu),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),g=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new D,An=new D,pa=new D,xn=new D,bi=new D,Si=new D,ic=new D,ga=new D,ma=new D,Aa=new D,xa=new he,va=new he,Ca=new he,Bn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),An.subVectors(n,e),pa.subVectors(t,e);let a=Qe.dot(Qe),o=Qe.dot(An),l=Qe.dot(pa),c=An.dot(An),h=An.dot(pa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,g=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-g-m,m,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return xa.setScalar(0),va.setScalar(0),Ca.setScalar(0),xa.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xa,r.x),a.addScaledVector(va,r.y),a.addScaledVector(Ca,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),An.subVectors(t,e),Qe.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),An.subVectors(this.a,this.b),Qe.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bi.subVectors(s,n),Si.subVectors(r,n),ga.subVectors(t,n);let l=bi.dot(ga),c=Si.dot(ga);if(l<=0&&c<=0)return e.copy(n);ma.subVectors(t,s);let h=bi.dot(ma),u=Si.dot(ma);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);Aa.subVectors(t,r);let g=bi.dot(Aa),m=Si.dot(Aa);if(m>=0&&g<=m)return e.copy(r);let A=g*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Si,o);let p=h*m-g*u;if(p<=0&&u-h>=0&&g-m>=0)return ic.subVectors(r,s),o=(u-h)/(u-h+(g-m)),e.copy(s).addScaledVector(ic,o);let f=1/(p+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(bi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function _a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ht.workingColorSpace){if(t=Au(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_a(a,r,t+1/3),this.g=_a(a,r,t),this.b=_a(a,r,t-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(t,e=ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){let n=ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return Ht.fromWorkingColorSpace(we.copy(this),t),Math.round(Ne(we.r*255,0,255))*65536+Math.round(Ne(we.g*255,0,255))*256+Math.round(Ne(we.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=ue){Ht.fromWorkingColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Fs);let n=sa(Nn.h,Fs.h,e),s=sa(Nn.s,Fs.s,e),r=sa(Nn.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new _t;_t.NAMES=ih;var Ru=0,un=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Hn(),this.name="",this.blending=On,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ua,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xe=class extends un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new D,Bs=new yt,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xo,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xo&&(t.usage=this.usage),t}};var gr=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pu=0,We=new Jt,ya=new Me,Ei=new D,Oe=new bn,ls=new bn,Ce=new D,Ae=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?mr:gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Oe.min,ls.min),Oe.expandByPoint(Ce),Ce.addVectors(Oe.max,ls.max),Oe.expandByPoint(Ce)):(Oe.expandByPoint(ls.min),Oe.expandByPoint(ls.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),Ce.add(Ei)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new D,l[T]=new D;let c=new D,h=new D,u=new D,d=new yt,g=new yt,m=new yt,A=new D,p=new D;function f(T,I,_){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),g.sub(d),m.sub(d);let V=1/(g.x*m.y-m.x*g.y);isFinite(V)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-g.y).multiplyScalar(V),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(V),o[T].add(A),o[I].add(A),o[_].add(A),l[T].add(p),l[I].add(p),l[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let T=0,I=M.length;T<I;++T){let _=M[T],V=_.start,O=_.count;for(let N=V,q=V+O;N<q;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new D,x=new D,E=new D,S=new D;function w(T){E.fromBufferAttribute(s,T),S.copy(E);let I=o[T];v.copy(I),v.sub(E.multiplyScalar(E.dot(I))).normalize(),x.crossVectors(S,I);let V=x.dot(l[T])<0?-1:1;a.setXYZW(T,v.x,v.y,v.z,V)}for(let T=0,I=M.length;T<I;++T){let _=M[T],V=_.start,O=_.count;for(let N=V,q=V+O;N<q;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,g=t.count;d<g;d+=3){let m=t.getX(d+0),A=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),g=0,m=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*h;for(let f=0;f<h;f++)d[m++]=c[g++]}return new ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],g=t(d,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,g=u.length;d<g;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sc=new Jt,ti=new fr,Os=new Wn,rc=new D,ks=new D,Hs=new D,Gs=new D,Ia=new D,qs=new D,ac=new D,Ws=new D,de=class extends Me{constructor(t=new Ae,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ia.fromBufferAttribute(u,t),a?qs.addScaledVector(Ia,h):qs.addScaledVector(Ia.sub(e),h))}e.add(qs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Os.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Os,rc)===null||ti.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(sc.copy(r).invert(),ti.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let p=d[m],f=a[p.materialIndex],M=Math.max(p.start,g.start),v=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let x=M,E=v;x<E;x+=3){let S=o.getX(x),w=o.getX(x+1),T=o.getX(x+2);s=Xs(this,f,t,n,c,h,u,S,w,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let p=m,f=A;p<f;p+=3){let M=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);s=Xs(this,a,t,n,c,h,u,M,v,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let p=d[m],f=a[p.materialIndex],M=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let x=M,E=v;x<E;x+=3){let S=x,w=x+1,T=x+2;s=Xs(this,f,t,n,c,h,u,S,w,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let p=m,f=A;p<f;p+=3){let M=p,v=p+1,x=p+2;s=Xs(this,a,t,n,c,h,u,M,v,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Lu(i,t,e,n,s,r,a,o){let l;if(t.side===_e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Gn,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:i}}function Xs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ks),i.getVertexPosition(l,Hs),i.getVertexPosition(c,Gs);let h=Lu(i,t,e,n,ks,Hs,Gs,ac);if(h){let u=new D;Bn.getBarycoord(ac,ks,Hs,Gs,u),s&&(h.uv=Bn.getInterpolatedAttribute(s,o,l,c,u,new yt)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,o,l,c,u,new yt)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Bn.getNormal(ks,Hs,Gs,d.normal),h.face=d,h.barycoord=u}return h}var hi=class i extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,g=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function m(A,p,f,M,v,x,E,S,w,T,I){let _=x/w,V=E/T,O=x/2,N=E/2,q=S/2,H=w+1,F=T+1,K=0,G=0,et=new D;for(let ot=0;ot<F;ot++){let gt=ot*V-N;for(let Vt=0;Vt<H;Vt++){let Ot=Vt*_-O;et[A]=Ot*M,et[p]=gt*v,et[f]=q,c.push(et.x,et.y,et.z),et[A]=0,et[p]=0,et[f]=S>0?1:-1,h.push(et.x,et.y,et.z),u.push(Vt/w),u.push(1-ot/T),K+=1}}for(let ot=0;ot<T;ot++)for(let gt=0;gt<w;gt++){let Vt=d+gt+H*ot,Ot=d+gt+H*(ot+1),X=d+(gt+1)+H*(ot+1),Q=d+(gt+1)+H*ot;l.push(Vt,Ot,Q),l.push(Ot,X,Q),G+=6}o.addGroup(g,G,I),g+=G,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function Uu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var Zn={clone:Xi,merge:Te},Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fe=class extends un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Uu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ar=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=new D,oc=new yt,lc=new yt,Re=class extends Ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,oc,lc),e.subVectors(lc,oc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ia*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},wi=-90,Vi=1,Io=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(wi,Vi,t,e);s.layers=this.layers,this.add(s);let r=new Re(wi,Vi,t,e);r.layers=this.layers,this.add(r);let a=new Re(wi,Vi,t,e);a.layers=this.layers,this.add(a);let o=new Re(wi,Vi,t,e);o.layers=this.layers,this.add(o);let l=new Re(wi,Vi,t,e);l.layers=this.layers,this.add(l);let c=new Re(wi,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,g),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xr=class extends Le{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mo=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hi(5,5,5),r=new fe({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_e,blending:hn});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=ln),new Io(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ma=new D,zu=new D,Fu=new Dt,Cn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ma.subVectors(n,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fu.getNormalMatrix(t),s=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new Wn,Ys=new D,_s=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],g=s[8],m=s[9],A=s[10],p=s[11],f=s[12],M=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,p-g,x-f).normalize(),n[1].setComponents(l+r,d+c,p+g,x+f).normalize(),n[2].setComponents(l+a,d+h,p+m,x+M).normalize(),n[3].setComponents(l-a,d-h,p-m,x-M).normalize(),n[4].setComponents(l-o,d-u,p-A,x-v).normalize(),e===yn)n[5].setComponents(l+o,d+u,p+A,x+v).normalize();else if(e===hr)n[5].setComponents(o,u,A,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ys.x=s.normal.x>0?t.max.x:t.min.x,Ys.y=s.normal.y>0?t.max.y:t.min.y,Ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,m)=>g.start-m.start);let d=0;for(let g=1;g<u.length;g++){let m=u[d],A=u[g];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let g=0,m=u.length;g<m;g++){let A=u[g];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vr=class i extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,g=[],m=[],A=[],p=[];for(let f=0;f<h;f++){let M=f*d-a;for(let v=0;v<c;v++){let x=v*u-r;m.push(x,-M,0),A.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let v=M+c*f,x=M+c*(f+1),E=M+1+c*(f+1),S=M+1+c*f;g.push(v,x,S),g.push(x,E,S)}this.setIndex(g),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(A,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ku=`#ifdef USE_ALPHAHASH
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
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
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
#endif`,Yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
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
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$u=`#ifdef USE_IRIDESCENCE
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
#endif`,td=`#ifdef USE_BUMPMAP
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cd=`#define PI 3.141592653589793
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
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ud=`vec3 transformedNormal = objectNormal;
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
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
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
}`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
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
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
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
#endif`,Fd=`struct PhysicalMaterial {
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
}`,Bd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
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
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
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
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bf=`float getShadowMask() {
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
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kf=`uniform sampler2D t2D;
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
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
}`,Yf=`#if DEPTH_PACKING == 3200
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
}`,Zf=`#define DISTANCE
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
}`,jf=`#define DISTANCE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
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
}`,$f=`uniform vec3 diffuse;
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
}`,tp=`#include <common>
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
}`,ep=`uniform vec3 diffuse;
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
}`,np=`#define LAMBERT
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
}`,ip=`#define LAMBERT
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
}`,sp=`#define MATCAP
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
}`,rp=`#define MATCAP
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
}`,ap=`#define NORMAL
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
}`,op=`#define NORMAL
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
}`,lp=`#define PHONG
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
}`,cp=`#define PHONG
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
}`,hp=`#define STANDARD
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
}`,up=`#define STANDARD
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
}`,dp=`#define TOON
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
}`,fp=`#define TOON
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
}`,pp=`uniform float size;
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
}`,gp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,Ap=`uniform vec3 color;
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
}`,xp=`uniform float rotation;
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
}`,vp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Ou,alphahash_pars_fragment:ku,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:qu,alphatest_pars_fragment:Wu,aomap_fragment:Xu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:ju,begin_vertex:Ku,beginnormal_vertex:Ju,bsdfs:Qu,iridescence_fragment:$u,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:ad,color_pars_vertex:od,color_vertex:ld,common:cd,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:gd,colorspace_fragment:md,colorspace_pars_fragment:Ad,envmap_fragment:xd,envmap_common_pars_fragment:vd,envmap_pars_fragment:Cd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Pd,envmap_vertex:yd,fog_vertex:Id,fog_pars_vertex:Md,fog_fragment:bd,fog_pars_fragment:Sd,gradientmap_pars_fragment:Ed,lightmap_pars_fragment:wd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Td,lights_pars_begin:Rd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Ud,lights_phong_fragment:Dd,lights_phong_pars_fragment:Nd,lights_physical_fragment:zd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Bd,lights_fragment_maps:Od,lights_fragment_end:kd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Wd,map_fragment:Xd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:jd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Qd,morphcolor_vertex:$d,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:af,normal_pars_vertex:of,normal_vertex:lf,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:gf,premultiplied_alpha_fragment:mf,project_vertex:Af,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:yf,shadowmap_pars_vertex:If,shadowmap_vertex:Mf,shadowmask_pars_fragment:bf,skinbase_vertex:Sf,skinning_pars_vertex:Ef,skinning_vertex:wf,skinnormal_vertex:Vf,specularmap_fragment:Tf,specularmap_pars_fragment:Rf,tonemapping_fragment:Pf,tonemapping_pars_fragment:Lf,transmission_fragment:Uf,transmission_pars_fragment:Df,uv_pars_fragment:Nf,uv_pars_vertex:zf,uv_vertex:Ff,worldpos_vertex:Bf,background_vert:Of,background_frag:kf,backgroundCube_vert:Hf,backgroundCube_frag:Gf,cube_vert:qf,cube_frag:Wf,depth_vert:Xf,depth_frag:Yf,distanceRGBA_vert:Zf,distanceRGBA_frag:jf,equirect_vert:Kf,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:$f,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:gp,shadow_vert:mp,shadow_frag:Ap,sprite_vert:xp,sprite_frag:vp},st={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},an={basic:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new _t(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Te([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Te([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new _t(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Te([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Te([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Te([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Te([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Te([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Te([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Te([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Te([st.lights,st.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};an.physical={uniforms:Te([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Zs={r:0,b:0,g:0},ni=new He,Cp=new Jt;function _p(i,t,e,n,s,r,a){let o=new _t(0),l=r===!0?0:1,c,h,u=null,d=0,g=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function A(M){let v=!1,x=m(M);x===null?f(o,l):x&&x.isColor&&(f(x,1),v=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){let x=m(v);x&&(x.isCubeTexture||x.mapping===zr)?(h===void 0&&(h=new de(new hi(1,1,1),new fe({name:"BackgroundCubeMaterial",uniforms:Xi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:_e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(v.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(ni)),h.material.toneMapped=Ht.getTransfer(x.colorSpace)!==Kt,(u!==x||d!==x.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,g=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new de(new vr(2,2),new fe({name:"BackgroundMaterial",uniforms:Xi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(x.colorSpace)!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,g=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,v){M.getRGB(Zs,sh(i)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:A,addToRenderList:p}}function yp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,V,O,N,q){let H=!1,F=u(N,O,V);r!==F&&(r=F,c(r.object)),H=g(_,N,O,q),H&&m(_,N,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,x(_,V,O,N),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,V,O){let N=O.wireframe===!0,q=n[_.id];q===void 0&&(q={},n[_.id]=q);let H=q[V.id];H===void 0&&(H={},q[V.id]=H);let F=H[N];return F===void 0&&(F=d(l()),H[N]=F),F}function d(_){let V=[],O=[],N=[];for(let q=0;q<e;q++)V[q]=0,O[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:O,attributeDivisors:N,object:_,attributes:{},index:null}}function g(_,V,O,N){let q=r.attributes,H=V.attributes,F=0,K=O.getAttributes();for(let G in K)if(K[G].location>=0){let ot=q[G],gt=H[G];if(gt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),ot===void 0||ot.attribute!==gt||gt&&ot.data!==gt.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function m(_,V,O,N){let q={},H=V.attributes,F=0,K=O.getAttributes();for(let G in K)if(K[G].location>=0){let ot=H[G];ot===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor));let gt={};gt.attribute=ot,ot&&ot.data&&(gt.data=ot.data),q[G]=gt,F++}r.attributes=q,r.attributesNum=F,r.index=N}function A(){let _=r.newAttributes;for(let V=0,O=_.length;V<O;V++)_[V]=0}function p(_){f(_,0)}function f(_,V){let O=r.newAttributes,N=r.enabledAttributes,q=r.attributeDivisors;O[_]=1,N[_]===0&&(i.enableVertexAttribArray(_),N[_]=1),q[_]!==V&&(i.vertexAttribDivisor(_,V),q[_]=V)}function M(){let _=r.newAttributes,V=r.enabledAttributes;for(let O=0,N=V.length;O<N;O++)V[O]!==_[O]&&(i.disableVertexAttribArray(O),V[O]=0)}function v(_,V,O,N,q,H,F){F===!0?i.vertexAttribIPointer(_,V,O,q,H):i.vertexAttribPointer(_,V,O,N,q,H)}function x(_,V,O,N){A();let q=N.attributes,H=O.getAttributes(),F=V.defaultAttributeValues;for(let K in H){let G=H[K];if(G.location>=0){let et=q[K];if(et===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(et=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(et=_.instanceColor)),et!==void 0){let ot=et.normalized,gt=et.itemSize,Vt=t.get(et);if(Vt===void 0)continue;let Ot=Vt.buffer,X=Vt.type,Q=Vt.bytesPerElement,pt=X===i.INT||X===i.UNSIGNED_INT||et.gpuType===sl;if(et.isInterleavedBufferAttribute){let nt=et.data,It=nt.stride,wt=et.offset;if(nt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<G.locationSize;Pt++)f(G.location+Pt,nt.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Pt=0;Pt<G.locationSize;Pt++)p(G.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Pt=0;Pt<G.locationSize;Pt++)v(G.location+Pt,gt/G.locationSize,X,ot,It*Q,(wt+gt/G.locationSize*Pt)*Q,pt)}else{if(et.isInstancedBufferAttribute){for(let nt=0;nt<G.locationSize;nt++)f(G.location+nt,et.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<G.locationSize;nt++)p(G.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let nt=0;nt<G.locationSize;nt++)v(G.location+nt,gt/G.locationSize,X,ot,gt*Q,gt/G.locationSize*nt*Q,pt)}}else if(F!==void 0){let ot=F[K];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(G.location,ot);break;case 3:i.vertexAttrib3fv(G.location,ot);break;case 4:i.vertexAttrib4fv(G.location,ot);break;default:i.vertexAttrib1fv(G.location,ot)}}}}M()}function E(){T();for(let _ in n){let V=n[_];for(let O in V){let N=V[O];for(let q in N)h(N[q].object),delete N[q];delete V[O]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;let V=n[_.id];for(let O in V){let N=V[O];for(let q in N)h(N[q].object),delete N[q];delete V[O]}delete n[_.id]}function w(_){for(let V in n){let O=n[V];if(O[_.id]===void 0)continue;let N=O[_.id];for(let q in N)h(N[q].object),delete N[q];delete O[_.id]}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:p,disableUnusedAttributes:M}}function Ip(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m];e.update(g,n,1)}function l(c,h,u,d){if(u===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==$e&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let T=w===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Mn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==cn&&!T)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:E,maxSamples:S}}function bp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Cn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let g=u.length!==0||d||n!==0||s;return s=d,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,g){let m=u.clippingPlanes,A=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,v=M*4,x=f.clippingState||null;l.value=x,x=h(m,d,v,g);for(let E=0;E!==v;++E)x[E]=e[E];f.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,g,m){let A=u!==null?u.length:0,p=null;if(A!==0){if(p=l.value,m!==!0||p===null){let f=g+A*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,x=g;v!==A;++v,x+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}function Sp(i){let t=new WeakMap;function e(a,o){return o===Ha?a.mapping=Hi:o===Ga&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ha||o===Ga)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Mo(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yi=class extends Ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ni=4,cc=[.125,.215,.35,.446,.526,.582],ai=20,ba=new Yi,hc=new _t,Sa=null,Ea=0,wa=0,Va=!1,si=(1+Math.sqrt(5))/2,Ti=1/si,uc=[new D(-si,Ti,0),new D(si,Ti,0),new D(-Ti,0,si),new D(Ti,0,si),new D(0,si,-Ti),new D(0,si,Ti),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Cr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,Ea,wa),this._renderer.xr.enabled=Va,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:sn,format:$e,colorSpace:Ki,depthBuffer:!1},s=dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(r)),this._blurMaterial=wp(r,t,e)}return s}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,s){let o=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hc),h.toneMapping=kn,h.autoClear=!1;let g=new Xe({name:"PMREM.Background",side:_e,depthWrite:!1,depthTest:!1}),m=new de(new hi,g),A=!1,p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,A=!0):(g.color.copy(hc),A=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;js(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Hi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uc[(s-r-1)%uc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*ai-1),A=r/m,p=isFinite(r)?1+Math.floor(h*A):ai;p>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);let f=[],M=0;for(let w=0;w<ai;++w){let T=w/A,I=Math.exp(-T*T/2);f.push(I),w===0?M+=I:w<p&&(M+=2*I)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let x=this._sizeLods[s],E=3*x*(s>v-Ni?s-v+Ni:0),S=4*(this._cubeSize-x);js(e,E,S,3*x,2*x),l.setRenderTarget(e),l.render(u,ba)}};function Ep(i){let t=[],e=[],n=[],s=i,r=i-Ni+1+cc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ni?l=cc[a-i+Ni-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,m=6,A=3,p=2,f=1,M=new Float32Array(A*m*g),v=new Float32Array(p*m*g),x=new Float32Array(f*m*g);for(let S=0;S<g;S++){let w=S%3*2/3-1,T=S>2?0:-1,I=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];M.set(I,A*m*S),v.set(d,p*m*S);let _=[S,S,S,S,S,S];x.set(_,f*m*S)}let E=new Ae;E.setAttribute("position",new ge(M,A)),E.setAttribute("uv",new ge(v,p)),E.setAttribute("faceIndex",new ge(x,f)),t.push(E),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dc(i,t,e){let n=new Ue(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wp(i,t,e){let n=new Float32Array(ai),s=new D(0,1,0);return new fe({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dl(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function fc(){return new fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function pc(){return new fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function Vp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ha||l===Ga,h=l===Hi||l===Gi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Cr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let g=o.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new Cr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rp(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let p=0,f=A.length;p<f;p++)t.remove(A[p])}d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let g=u.morphAttributes;for(let m in g){let A=g[m];for(let p=0,f=A.length;p<f;p++)t.update(A[p],i.ARRAY_BUFFER)}}function c(u){let d=[],g=u.index,m=u.attributes.position,A=0;if(g!==null){let M=g.array;A=g.version;for(let v=0,x=M.length;v<x;v+=3){let E=M[v+0],S=M[v+1],w=M[v+2];d.push(E,S,S,w,w,E)}}else if(m!==void 0){let M=m.array;A=m.version;for(let v=0,x=M.length/3-1;v<x;v+=3){let E=v+0,S=v+1,w=v+2;d.push(E,S,S,w,w,E)}}else return;let p=new(nh(d)?mr:gr)(d,1);p.version=A;let f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let g=u.index;g!==null&&d.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Pp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,g){i.drawElements(n,g,r,d*a),e.update(g,n,1)}function c(d,g,m){m!==0&&(i.drawElementsInstanced(n,g,r,d*a,m),e.update(g,n,m))}function h(d,g,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,d,0,m);let p=0;for(let f=0;f<m;f++)p+=g[f];e.update(p,n,1)}function u(d,g,m,A){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,g[f],A[f]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,d,0,A,0,m);let f=0;for(let M=0;M<m;M++)f+=g[M]*A[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Lp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Up(i,t,e){let n=new WeakMap,s=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;g===!0&&(v=1),m===!0&&(v=2),A===!0&&(v=3);let x=o.attributes.position.count*v,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*E*4*u),w=new dr(S,x,E,u);w.type=cn,w.needsUpdate=!0;let T=v*4;for(let _=0;_<u;_++){let V=p[_],O=f[_],N=M[_],q=x*E*4*_;for(let H=0;H<V.count;H++){let F=H*T;g===!0&&(s.fromBufferAttribute(V,H),S[q+F+0]=s.x,S[q+F+1]=s.y,S[q+F+2]=s.z,S[q+F+3]=0),m===!0&&(s.fromBufferAttribute(O,H),S[q+F+4]=s.x,S[q+F+5]=s.y,S[q+F+6]=s.z,S[q+F+7]=0),A===!0&&(s.fromBufferAttribute(N,H),S[q+F+8]=s.x,S[q+F+9]=s.y,S[q+F+10]=s.z,S[q+F+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new yt(x,E)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<c.length;A++)g+=c[A];let m=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var _r=class extends Le{constructor(t,e,n,s,r,a,o,l,c,h=zi){if(h!==zi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=ci),n===void 0&&h===Wi&&(n=qi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ah=new Le,gc=new _r(1,1),oh=new dr,lh=new yo,ch=new xr,mc=[],Ac=[],xc=new Float32Array(16),vc=new Float32Array(9),Cc=new Float32Array(4);function Ji(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Br(i,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Np(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Op(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Cc.set(n),i.uniformMatrix2fv(this.addr,!1,Cc),ve(e,n)}}function kp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),ve(e,n)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;xc.set(n),i.uniformMatrix4fv(this.addr,!1,xc),ve(e,n)}}function Gp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Yp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=th,r=gc):r=ah,e.setTexture2D(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lh,s)}function $p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ch,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||oh,s)}function eg(i){switch(i){case 5126:return Np;case 35664:return zp;case 35665:return Fp;case 35666:return Bp;case 35674:return Op;case 35675:return kp;case 35676:return Hp;case 5124:case 35670:return Gp;case 35667:case 35671:return qp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return Yp;case 36294:return Zp;case 36295:return jp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return tg}}function ng(i,t){i.uniform1fv(this.addr,t)}function ig(i,t){let e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function sg(i,t){let e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function rg(i,t){let e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function ag(i,t){let e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function og(i,t){let e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lg(i,t){let e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cg(i,t){i.uniform1iv(this.addr,t)}function hg(i,t){i.uniform2iv(this.addr,t)}function ug(i,t){i.uniform3iv(this.addr,t)}function dg(i,t){i.uniform4iv(this.addr,t)}function fg(i,t){i.uniform1uiv(this.addr,t)}function pg(i,t){i.uniform2uiv(this.addr,t)}function gg(i,t){i.uniform3uiv(this.addr,t)}function mg(i,t){i.uniform4uiv(this.addr,t)}function Ag(i,t,e){let n=this.cache,s=t.length,r=Br(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ah,r[a])}function xg(i,t,e){let n=this.cache,s=t.length,r=Br(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||lh,r[a])}function vg(i,t,e){let n=this.cache,s=t.length,r=Br(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ch,r[a])}function Cg(i,t,e){let n=this.cache,s=t.length,r=Br(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||oh,r[a])}function _g(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return gg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return Cg}}var bo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eg(e.type)}},So=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_g(e.type)}},Eo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ta=/(\w+)(\])?(\[|\.)?/g;function _c(i,t){i.seq.push(t),i.map[t.id]=t}function yg(i,t,e){let n=i.name,s=n.length;for(Ta.lastIndex=0;;){let r=Ta.exec(n),a=Ta.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_c(e,c===void 0?new bo(o,i,t):new So(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Eo(o),_c(e,u)),e=u}}}var Bi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);yg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ig=37297,Mg=0;function bg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ic=new Dt;function Sg(i){Ht._getMatrix(Ic,Ht.workingColorSpace,i);let t=`mat3( ${Ic.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bg(i.getShaderSource(t),a)}else return s}function Eg(i,t){let e=Sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wg(i,t){let e;switch(t){case Qo:e="Linear";break;case $o:e="Reinhard";break;case tl:e="Cineon";break;case el:e="ACESFilmic";break;case nl:e="AgX";break;case il:e="Neutral";break;case ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ks=new D;function Vg(){Ht.getLuminanceCoefficients(Ks);let i=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gs(i){return i!==""}function bc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(i){return i.replace(Lg,Dg)}var Ug=new Map;function Dg(i,t){let e=zt[t];if(e===void 0){let n=Ug.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wo(e)}var Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace(Ng,zg)}function zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Fg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Og(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function kg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nr:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case su:t="ENVMAP_BLENDING_ADD";break}return t}function Hg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Fg(e),c=Bg(e),h=Og(e),u=kg(e),d=Hg(e),g=Tg(e),m=Rg(r),A=s.createProgram(),p,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(p=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?zt.tonemapping_pars_fragment:"",e.toneMapping!==kn?wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Eg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=wo(a),a=bc(a,e),a=Sc(a,e),o=wo(o),o=bc(o,e),o=Sc(o,e),a=Ec(a),o=Ec(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=M+p+a,x=M+f+o,E=yc(s,s.VERTEX_SHADER,v),S=yc(s,s.FRAGMENT_SHADER,x);s.attachShader(A,E),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function w(V){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(A).trim(),N=s.getShaderInfoLog(E).trim(),q=s.getShaderInfoLog(S).trim(),H=!0,F=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,E,S);else{let K=Mc(s,E,"vertex"),G=Mc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+O+`
`+K+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||q==="")&&(F=!1);F&&(V.diagnostics={runnable:H,programLog:O,vertexShader:{log:N,prefix:p},fragmentShader:{log:q,prefix:f}})}s.deleteShader(E),s.deleteShader(S),T=new Bi(s,A),I=Pg(s,A)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let I;this.getAttributes=function(){return I===void 0&&w(this),I};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(A,Ig)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=E,this.fragmentShader=S,this}var qg=0,Vo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new To(t),e.set(t,n)),n}},To=class{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}};function Wg(i,t,e,n,s,r,a){let o=new pr,l=new Vo,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,g=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(I){return c.add(I),I===0?"uv":`uv${I}`}function p(I,_,V,O,N){let q=O.fog,H=N.geometry,F=I.isMeshStandardMaterial?O.environment:null,K=(I.isMeshStandardMaterial?e:t).get(I.envMap||F),G=K&&K.mapping===zr?K.image.height:null,et=m[I.type];I.precision!==null&&(g=s.getMaxPrecision(I.precision),g!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",g,"instead."));let ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,gt=ot!==void 0?ot.length:0,Vt=0;H.morphAttributes.position!==void 0&&(Vt=1),H.morphAttributes.normal!==void 0&&(Vt=2),H.morphAttributes.color!==void 0&&(Vt=3);let Ot,X,Q,pt;if(et){let Qt=an[et];Ot=Qt.vertexShader,X=Qt.fragmentShader}else Ot=I.vertexShader,X=I.fragmentShader,l.update(I),Q=l.getVertexShaderID(I),pt=l.getFragmentShaderID(I);let nt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),wt=N.isInstancedMesh===!0,Pt=N.isBatchedMesh===!0,te=!!I.map,kt=!!I.matcap,Gt=!!K,R=!!I.aoMap,be=!!I.lightMap,Ft=!!I.bumpMap,qt=!!I.normalMap,St=!!I.displacementMap,re=!!I.emissiveMap,Mt=!!I.metalnessMap,b=!!I.roughnessMap,C=I.anisotropy>0,z=I.clearcoat>0,Z=I.dispersion>0,J=I.iridescence>0,Y=I.sheen>0,vt=I.transmission>0,at=C&&!!I.anisotropyMap,ut=z&&!!I.clearcoatMap,Xt=z&&!!I.clearcoatNormalMap,$=z&&!!I.clearcoatRoughnessMap,dt=J&&!!I.iridescenceMap,Et=J&&!!I.iridescenceThicknessMap,Tt=Y&&!!I.sheenColorMap,ft=Y&&!!I.sheenRoughnessMap,Wt=!!I.specularMap,Nt=!!I.specularColorMap,ie=!!I.specularIntensityMap,P=vt&&!!I.transmissionMap,rt=vt&&!!I.thicknessMap,W=!!I.gradientMap,j=!!I.alphaMap,ht=I.alphaTest>0,lt=!!I.alphaHash,Lt=!!I.extensions,ce=kn;I.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Se={shaderID:et,shaderType:I.type,shaderName:I.name,vertexShader:Ot,fragmentShader:X,defines:I.defines,customVertexShaderID:Q,customFragmentShaderID:pt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:g,batching:Pt,batchingColor:Pt&&N._colorsTexture!==null,instancing:wt,instancingColor:wt&&N.instanceColor!==null,instancingMorph:wt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ki,alphaToCoverage:!!I.alphaToCoverage,map:te,matcap:kt,envMap:Gt,envMapMode:Gt&&K.mapping,envMapCubeUVHeight:G,aoMap:R,lightMap:be,bumpMap:Ft,normalMap:qt,displacementMap:d&&St,emissiveMap:re,normalMapObjectSpace:qt&&I.normalMapType===cu,normalMapTangentSpace:qt&&I.normalMapType===ul,metalnessMap:Mt,roughnessMap:b,anisotropy:C,anisotropyMap:at,clearcoat:z,clearcoatMap:ut,clearcoatNormalMap:Xt,clearcoatRoughnessMap:$,dispersion:Z,iridescence:J,iridescenceMap:dt,iridescenceThicknessMap:Et,sheen:Y,sheenColorMap:Tt,sheenRoughnessMap:ft,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:ie,transmission:vt,transmissionMap:P,thicknessMap:rt,gradientMap:W,opaque:I.transparent===!1&&I.blending===On&&I.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:lt,combine:I.combine,mapUv:te&&A(I.map.channel),aoMapUv:R&&A(I.aoMap.channel),lightMapUv:be&&A(I.lightMap.channel),bumpMapUv:Ft&&A(I.bumpMap.channel),normalMapUv:qt&&A(I.normalMap.channel),displacementMapUv:St&&A(I.displacementMap.channel),emissiveMapUv:re&&A(I.emissiveMap.channel),metalnessMapUv:Mt&&A(I.metalnessMap.channel),roughnessMapUv:b&&A(I.roughnessMap.channel),anisotropyMapUv:at&&A(I.anisotropyMap.channel),clearcoatMapUv:ut&&A(I.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&A(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&A(I.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&A(I.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(I.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(I.sheenColorMap.channel),sheenRoughnessMapUv:ft&&A(I.sheenRoughnessMap.channel),specularMapUv:Wt&&A(I.specularMap.channel),specularColorMapUv:Nt&&A(I.specularColorMap.channel),specularIntensityMapUv:ie&&A(I.specularIntensityMap.channel),transmissionMapUv:P&&A(I.transmissionMap.channel),thicknessMapUv:rt&&A(I.thicknessMap.channel),alphaMapUv:j&&A(I.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(qt||C),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(te||j),fog:!!q,useFog:I.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Vt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:te&&I.map.isVideoTexture===!0&&Ht.getTransfer(I.map.colorSpace)===Kt,decodeVideoTextureEmissive:re&&I.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(I.emissiveMap.colorSpace)===Kt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===_n,flipSided:I.side===_e,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Lt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&I.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function f(I){let _=[];if(I.shaderID?_.push(I.shaderID):(_.push(I.customVertexShaderID),_.push(I.customFragmentShaderID)),I.defines!==void 0)for(let V in I.defines)_.push(V),_.push(I.defines[V]);return I.isRawShaderMaterial===!1&&(M(_,I),v(_,I),_.push(i.outputColorSpace)),_.push(I.customProgramCacheKey),_.join()}function M(I,_){I.push(_.precision),I.push(_.outputColorSpace),I.push(_.envMapMode),I.push(_.envMapCubeUVHeight),I.push(_.mapUv),I.push(_.alphaMapUv),I.push(_.lightMapUv),I.push(_.aoMapUv),I.push(_.bumpMapUv),I.push(_.normalMapUv),I.push(_.displacementMapUv),I.push(_.emissiveMapUv),I.push(_.metalnessMapUv),I.push(_.roughnessMapUv),I.push(_.anisotropyMapUv),I.push(_.clearcoatMapUv),I.push(_.clearcoatNormalMapUv),I.push(_.clearcoatRoughnessMapUv),I.push(_.iridescenceMapUv),I.push(_.iridescenceThicknessMapUv),I.push(_.sheenColorMapUv),I.push(_.sheenRoughnessMapUv),I.push(_.specularMapUv),I.push(_.specularColorMapUv),I.push(_.specularIntensityMapUv),I.push(_.transmissionMapUv),I.push(_.thicknessMapUv),I.push(_.combine),I.push(_.fogExp2),I.push(_.sizeAttenuation),I.push(_.morphTargetsCount),I.push(_.morphAttributeCount),I.push(_.numDirLights),I.push(_.numPointLights),I.push(_.numSpotLights),I.push(_.numSpotLightMaps),I.push(_.numHemiLights),I.push(_.numRectAreaLights),I.push(_.numDirLightShadows),I.push(_.numPointLightShadows),I.push(_.numSpotLightShadows),I.push(_.numSpotLightShadowsWithMaps),I.push(_.numLightProbes),I.push(_.shadowMapType),I.push(_.toneMapping),I.push(_.numClippingPlanes),I.push(_.numClipIntersection),I.push(_.depthPacking)}function v(I,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),I.push(o.mask)}function x(I){let _=m[I.type],V;if(_){let O=an[_];V=Zn.clone(O.uniforms)}else V=I.uniforms;return V}function E(I,_){let V;for(let O=0,N=h.length;O<N;O++){let q=h[O];if(q.cacheKey===_){V=q,++V.usedTimes;break}}return V===void 0&&(V=new Gg(i,_,I,r),h.push(V)),V}function S(I){if(--I.usedTimes===0){let _=h.indexOf(I);h[_]=h[h.length-1],h.pop(),I.destroy()}}function w(I){l.remove(I)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:E,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:T}}function Xg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,g,m,A,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:g,groupOrder:m,renderOrder:u.renderOrder,z:A,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=g,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=A,f.group=p),t++,f}function o(u,d,g,m,A,p){let f=a(u,d,g,m,A,p);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):e.push(f)}function l(u,d,g,m,A,p){let f=a(u,d,g,m,A,p);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Yg),n.length>1&&n.sort(d||Vc),s.length>1&&s.sort(d||Vc)}function h(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Zg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Tc,i.set(n,[a])):s>=r.length?(a=new Tc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new _t};break;case"SpotLight":e={position:new D,direction:new D,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jg=0;function Qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $g(i){let t=new jg,e=Kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Jt,a=new Jt;function o(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let g=0,m=0,A=0,p=0,f=0,M=0,v=0,x=0,E=0,S=0,w=0;c.sort(Qg);for(let I=0,_=c.length;I<_;I++){let V=c[I],O=V.color,N=V.intensity,q=V.distance,H=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(V.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(V.sh.coefficients[F],N);w++}else if(V.isDirectionalLight){let F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let K=V.shadow,G=e.get(V);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=H,n.directionalShadowMatrix[g]=V.shadow.matrix,M++}n.directional[g]=F,g++}else if(V.isSpotLight){let F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(O).multiplyScalar(N),F.distance=q,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,n.spot[A]=F;let K=V.shadow;if(V.map&&(n.spotLightMap[E]=V.map,E++,K.updateMatrices(V),V.castShadow&&S++),n.spotLightMatrix[A]=K.matrix,V.castShadow){let G=e.get(V);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[A]=G,n.spotShadowMap[A]=H,x++}A++}else if(V.isRectAreaLight){let F=t.get(V);F.color.copy(O).multiplyScalar(N),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),n.rectArea[p]=F,p++}else if(V.isPointLight){let F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){let K=V.shadow,G=e.get(V);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=V.shadow.matrix,v++}n.point[m]=F,m++}else if(V.isHemisphereLight){let F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(N),F.groundColor.copy(V.groundColor).multiplyScalar(N),n.hemi[f]=F,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==A||T.rectAreaLength!==p||T.hemiLength!==f||T.numDirectionalShadows!==M||T.numPointShadows!==v||T.numSpotShadows!==x||T.numSpotMaps!==E||T.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=p,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,T.directionalLength=g,T.pointLength=m,T.spotLength=A,T.rectAreaLength=p,T.hemiLength=f,T.numDirectionalShadows=M,T.numPointShadows=v,T.numSpotShadows=x,T.numSpotMaps=E,T.numLightProbes=w,n.version=Jg++)}function l(c,h){let u=0,d=0,g=0,m=0,A=0,p=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let v=c[f];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(v.isSpotLight){let x=n.spot[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),A++}}}return{setup:o,setupView:l,state:n}}function Rc(i){let t=new $g(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function tm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Rc(i),t.set(s,[o])):r>=a.length?(o=new Rc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ro=class extends un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Po=class extends un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
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
}`;function im(i,t,e){let n=new _s,s=new yt,r=new yt,a=new he,o=new Ro({depthPacking:lu}),l=new Po,c={},h=e.maxTextureSize,u={[Gn]:_e,[_e]:Gn,[_n]:_n},d=new fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:em,fragmentShader:nm}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let m=new Ae;m.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new de(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let f=this.type;this.render=function(S,w,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let I=i.getRenderTarget(),_=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),O=i.state;O.setBlending(hn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=f!==vn&&this.type===vn,q=f===vn&&this.type!==vn;for(let H=0,F=S.length;H<F;H++){let K=S[H],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let et=G.getFrameExtents();if(s.multiply(et),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,G.mapSize.y=r.y)),G.map===null||N===!0||q===!0){let gt=this.type!==vn?{minFilter:ke,magFilter:ke}:{};G.map!==null&&G.map.dispose(),G.map=new Ue(s.x,s.y,gt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ot=G.getViewportCount();for(let gt=0;gt<ot;gt++){let Vt=G.getViewport(gt);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),O.viewport(a),G.updateMatrices(K,gt),n=G.getFrustum(),x(w,T,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===vn&&M(G,T),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(I,_,V)};function M(S,w){let T=t.update(A);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ue(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,T,d,A,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,T,g,A,null)}function v(S,w,T,I){let _=null,V=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)_=V;else if(_=T.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let O=_.uuid,N=w.uuid,q=c[O];q===void 0&&(q={},c[O]=q);let H=q[N];H===void 0&&(H=_.clone(),q[N]=H,w.addEventListener("dispose",E)),_=H}if(_.visible=w.visible,_.wireframe=w.wireframe,I===vn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=i.properties.get(_);O.light=T}return _}function x(S,w,T,I,_){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===vn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let N=t.update(S),q=S.material;if(Array.isArray(q)){let H=N.groups;for(let F=0,K=H.length;F<K;F++){let G=H[F],et=q[G.materialIndex];if(et&&et.visible){let ot=v(S,et,I,_);S.onBeforeShadow(i,S,w,T,N,ot,G),i.renderBufferDirect(T,null,N,ot,S,G),S.onAfterShadow(i,S,w,T,N,ot,G)}}}else if(q.visible){let H=v(S,q,I,_);S.onBeforeShadow(i,S,w,T,N,H,null),i.renderBufferDirect(T,null,N,H,S,null),S.onAfterShadow(i,S,w,T,N,H,null)}}let O=S.children;for(let N=0,q=O.length;N<q;N++)x(O[N],w,T,I,_)}function E(S){S.target.removeEventListener("dispose",E);for(let T in c){let I=c[T],_=S.target.uuid;_ in I&&(I[_].dispose(),delete I[_])}}}var sm={[Da]:Na,[za]:Oa,[Fa]:ka,[ki]:Ba,[Na]:Da,[Oa]:za,[ka]:Fa,[Ba]:ki};function rm(i,t){function e(){let P=!1,rt=new he,W=null,j=new he(0,0,0,0);return{setMask:function(ht){W!==ht&&!P&&(i.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){P=ht},setClear:function(ht,lt,Lt,ce,Se){Se===!0&&(ht*=ce,lt*=ce,Lt*=ce),rt.set(ht,lt,Lt,ce),j.equals(rt)===!1&&(i.clearColor(ht,lt,Lt,ce),j.copy(rt))},reset:function(){P=!1,W=null,j.set(-1,0,0,0)}}}function n(){let P=!1,rt=!1,W=null,j=null,ht=null;return{setReversed:function(lt){if(rt!==lt){let Lt=t.get("EXT_clip_control");rt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ht;ht=null,this.setClear(ce)}rt=lt},getReversed:function(){return rt},setTest:function(lt){lt?nt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(lt){W!==lt&&!P&&(i.depthMask(lt),W=lt)},setFunc:function(lt){if(rt&&(lt=sm[lt]),j!==lt){switch(lt){case Da:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=lt}},setLocked:function(lt){P=lt},setClear:function(lt){ht!==lt&&(rt&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){P=!1,W=null,j=null,ht=null,rt=!1}}}function s(){let P=!1,rt=null,W=null,j=null,ht=null,lt=null,Lt=null,ce=null,Se=null;return{setTest:function(Qt){P||(Qt?nt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(Qt){rt!==Qt&&!P&&(i.stencilMask(Qt),rt=Qt)},setFunc:function(Qt,Ze,dn){(W!==Qt||j!==Ze||ht!==dn)&&(i.stencilFunc(Qt,Ze,dn),W=Qt,j=Ze,ht=dn)},setOp:function(Qt,Ze,dn){(lt!==Qt||Lt!==Ze||ce!==dn)&&(i.stencilOp(Qt,Ze,dn),lt=Qt,Lt=Ze,ce=dn)},setLocked:function(Qt){P=Qt},setClear:function(Qt){Se!==Qt&&(i.clearStencil(Qt),Se=Qt)},reset:function(){P=!1,rt=null,W=null,j=null,ht=null,lt=null,Lt=null,ce=null,Se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,g=[],m=null,A=!1,p=null,f=null,M=null,v=null,x=null,E=null,S=null,w=new _t(0,0,0),T=0,I=!1,_=null,V=null,O=null,N=null,q=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,K=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=K>=2);let et=null,ot={},gt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),Ot=new he().fromArray(gt),X=new he().fromArray(Vt);function Q(P,rt,W,j){let ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(P,lt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<W;Lt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(rt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}let pt={};pt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(ki),Ft(!1),qt(Dl),nt(i.CULL_FACE),R(hn);function nt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function It(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function wt(P,rt){return u[P]!==rt?(i.bindFramebuffer(P,rt),u[P]=rt,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Pt(P,rt){let W=g,j=!1;if(P){W=d.get(rt),W===void 0&&(W=[],d.set(rt,W));let ht=P.textures;if(W.length!==ht.length||W[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Lt=ht.length;lt<Lt;lt++)W[lt]=i.COLOR_ATTACHMENT0+lt;W.length=ht.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function te(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let kt={[ri]:i.FUNC_ADD,[Oh]:i.FUNC_SUBTRACT,[kh]:i.FUNC_REVERSE_SUBTRACT};kt[Hh]=i.MIN,kt[Gh]=i.MAX;let Gt={[qh]:i.ZERO,[Wh]:i.ONE,[Xh]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[Qh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[Zh]:i.DST_ALPHA,[Yh]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[Jh]:i.ONE_MINUS_DST_COLOR,[jh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[eu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(P,rt,W,j,ht,lt,Lt,ce,Se,Qt){if(P===hn){A===!0&&(It(i.BLEND),A=!1);return}if(A===!1&&(nt(i.BLEND),A=!0),P!==Bh){if(P!==p||Qt!==I){if((f!==ri||x!==ri)&&(i.blendEquation(i.FUNC_ADD),f=ri,x=ri),Qt)switch(P){case On:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case On:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,v=null,E=null,S=null,w.set(0,0,0),T=0,p=P,I=Qt}return}ht=ht||rt,lt=lt||W,Lt=Lt||j,(rt!==f||ht!==x)&&(i.blendEquationSeparate(kt[rt],kt[ht]),f=rt,x=ht),(W!==M||j!==v||lt!==E||Lt!==S)&&(i.blendFuncSeparate(Gt[W],Gt[j],Gt[lt],Gt[Lt]),M=W,v=j,E=lt,S=Lt),(ce.equals(w)===!1||Se!==T)&&(i.blendColor(ce.r,ce.g,ce.b,Se),w.copy(ce),T=Se),p=P,I=!1}function be(P,rt){P.side===_n?It(i.CULL_FACE):nt(i.CULL_FACE);let W=P.side===_e;rt&&(W=!W),Ft(W),P.blending===On&&P.transparent===!1?R(hn):R(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let j=P.stencilWrite;o.setTest(j),j&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(P){_!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),_=P)}function qt(P){P!==Nh?(nt(i.CULL_FACE),P!==V&&(P===Dl?i.cullFace(i.BACK):P===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),V=P}function St(P){P!==O&&(F&&i.lineWidth(P),O=P)}function re(P,rt,W){P?(nt(i.POLYGON_OFFSET_FILL),(N!==rt||q!==W)&&(i.polygonOffset(rt,W),N=rt,q=W)):It(i.POLYGON_OFFSET_FILL)}function Mt(P){P?nt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function b(P){P===void 0&&(P=i.TEXTURE0+H-1),et!==P&&(i.activeTexture(P),et=P)}function C(P,rt,W){W===void 0&&(et===null?W=i.TEXTURE0+H-1:W=et);let j=ot[W];j===void 0&&(j={type:void 0,texture:void 0},ot[W]=j),(j.type!==P||j.texture!==rt)&&(et!==W&&(i.activeTexture(W),et=W),i.bindTexture(P,rt||pt[P]),j.type=P,j.texture=rt)}function z(){let P=ot[et];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(P){Ot.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ot.copy(P))}function ft(P){X.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function Wt(P,rt){let W=c.get(rt);W===void 0&&(W=new WeakMap,c.set(rt,W));let j=W.get(P);j===void 0&&(j=i.getUniformBlockIndex(rt,P.name),W.set(P,j))}function Nt(P,rt){let j=c.get(rt).get(P);l.get(rt)!==j&&(i.uniformBlockBinding(rt,j,P.__bindingPointIndex),l.set(rt,j))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,ot={},u={},d=new WeakMap,g=[],m=null,A=!1,p=null,f=null,M=null,v=null,x=null,E=null,S=null,w=new _t(0,0,0),T=0,I=!1,_=null,V=null,O=null,N=null,q=null,Ot.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:It,bindFramebuffer:wt,drawBuffers:Pt,useProgram:te,setBlending:R,setMaterial:be,setFlipSided:Ft,setCullFace:qt,setLineWidth:St,setPolygonOffset:re,setScissorTest:Mt,activeTexture:b,bindTexture:C,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:dt,texImage3D:Et,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:$,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Tt,viewport:ft,reset:ie}}function Pc(i,t,e,n){let s=am(n);switch(e){case Zc:return i*t;case Kc:return i*t;case Jc:return i*t*2;case ol:return i*t/s.components*s.byteLength;case ll:return i*t/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case cl:return i*t*2/s.components*s.byteLength;case jc:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case hl:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case qa:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case Za:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lr:case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $c:case po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case go:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function am(i){switch(i){case Mn:case Wc:return{byteLength:1,components:1};case vs:case Xc:case sn:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case ci:case sl:case cn:return{byteLength:4,components:1};case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function om(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,C){return g?new OffscreenCanvas(b,C):Cs("canvas")}function A(b,C,z){let Z=1,J=Mt(b);if((J.width>z||J.height>z)&&(Z=z/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let Y=Math.floor(Z*J.width),vt=Math.floor(Z*J.height);u===void 0&&(u=m(Y,vt));let at=C?m(Y,vt):u;return at.width=Y,at.height=vt,at.getContext("2d").drawImage(b,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+vt+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function p(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(b,C,z,Z,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=C;if(C===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),C===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),C===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),C===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),C===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),C===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),C===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),C===i.RGBA){let vt=J?Fr:Ht.getTransfer(Z);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=vt===Kt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(b,C){let z;return b?C===null||C===ci||C===qi?z=i.DEPTH24_STENCIL8:C===cn?z=i.DEPTH32F_STENCIL8:C===vs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ci||C===qi?z=i.DEPTH_COMPONENT24:C===cn?z=i.DEPTH_COMPONENT32F:C===vs&&(z=i.DEPTH_COMPONENT16),z}function E(b,C){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==ke&&b.minFilter!==ln?Math.log2(Math.max(C.width,C.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?C.mipmaps.length:1}function S(b){let C=b.target;C.removeEventListener("dispose",S),T(C),C.isVideoTexture&&h.delete(C)}function w(b){let C=b.target;C.removeEventListener("dispose",w),_(C)}function T(b){let C=n.get(b);if(C.__webglInit===void 0)return;let z=b.source,Z=d.get(z);if(Z){let J=Z[C.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(b),Object.keys(Z).length===0&&d.delete(z)}n.remove(b)}function I(b){let C=n.get(b);i.deleteTexture(C.__webglTexture);let z=b.source,Z=d.get(z);delete Z[C.__cacheKey],a.memory.textures--}function _(b){let C=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(C.__webglFramebuffer[Z]))for(let J=0;J<C.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(C.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(C.__webglFramebuffer[Z]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[Z])}else{if(Array.isArray(C.__webglFramebuffer))for(let Z=0;Z<C.__webglFramebuffer.length;Z++)i.deleteFramebuffer(C.__webglFramebuffer[Z]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Z=0;Z<C.__webglColorRenderbuffer.length;Z++)C.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[Z]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let z=b.textures;for(let Z=0,J=z.length;Z<J;Z++){let Y=n.get(z[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(b)}let V=0;function O(){V=0}function N(){let b=V;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),V+=1,b}function q(b){let C=[];return C.push(b.wrapS),C.push(b.wrapT),C.push(b.wrapR||0),C.push(b.magFilter),C.push(b.minFilter),C.push(b.anisotropy),C.push(b.internalFormat),C.push(b.format),C.push(b.type),C.push(b.generateMipmaps),C.push(b.premultiplyAlpha),C.push(b.flipY),C.push(b.unpackAlignment),C.push(b.colorSpace),C.join()}function H(b,C){let z=n.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,b,C);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+C)}function F(b,C){let z=n.get(b);if(b.version>0&&z.__version!==b.version){X(z,b,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+C)}function K(b,C){let z=n.get(b);if(b.version>0&&z.__version!==b.version){X(z,b,C);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+C)}function G(b,C){let z=n.get(b);if(b.version>0&&z.__version!==b.version){Q(z,b,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+C)}let et={[As]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[xs]:i.MIRRORED_REPEAT},ot={[ke]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},gt={[hu]:i.NEVER,[mu]:i.ALWAYS,[uu]:i.LESS,[th]:i.LEQUAL,[du]:i.EQUAL,[gu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function Vt(b,C){if(C.type===cn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ln||C.magFilter===ea||C.magFilter===Ts||C.magFilter===li||C.minFilter===ln||C.minFilter===ea||C.minFilter===Ts||C.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,et[C.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,et[C.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,et[C.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ot[C.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ot[C.minFilter]),C.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,gt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===ke||C.minFilter!==Ts&&C.minFilter!==li||C.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Ot(b,C){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,C.addEventListener("dispose",S));let Z=C.source,J=d.get(Z);J===void 0&&(J={},d.set(Z,J));let Y=q(C);if(Y!==b.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[Y].usedTimes++;let vt=J[b.__cacheKey];vt!==void 0&&(J[b.__cacheKey].usedTimes--,vt.usedTimes===0&&I(C)),b.__cacheKey=Y,b.__webglTexture=J[Y].texture}return z}function X(b,C,z){let Z=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Z=i.TEXTURE_3D);let J=Ot(b,C),Y=C.source;e.bindTexture(Z,b.__webglTexture,i.TEXTURE0+z);let vt=n.get(Y);if(Y.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);let at=Ht.getPrimaries(Ht.workingColorSpace),ut=C.colorSpace===Fn?null:Ht.getPrimaries(C.colorSpace),Xt=C.colorSpace===Fn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let $=A(C.image,!1,s.maxTextureSize);$=re(C,$);let dt=r.convert(C.format,C.colorSpace),Et=r.convert(C.type),Tt=v(C.internalFormat,dt,Et,C.colorSpace,C.isVideoTexture);Vt(Z,C);let ft,Wt=C.mipmaps,Nt=C.isVideoTexture!==!0,ie=vt.__version===void 0||J===!0,P=Y.dataReady,rt=E(C,$);if(C.isDepthTexture)Tt=x(C.format===Wi,C.type),ie&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Tt,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Tt,$.width,$.height,0,dt,Et,null));else if(C.isDataTexture)if(Wt.length>0){Nt&&ie&&e.texStorage2D(i.TEXTURE_2D,rt,Tt,Wt[0].width,Wt[0].height);for(let W=0,j=Wt.length;W<j;W++)ft=Wt[W],Nt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,W,Tt,ft.width,ft.height,0,dt,Et,ft.data);C.generateMipmaps=!1}else Nt?(ie&&e.texStorage2D(i.TEXTURE_2D,rt,Tt,$.width,$.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,dt,Et,$.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,$.width,$.height,0,dt,Et,$.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Nt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Tt,Wt[0].width,Wt[0].height,$.depth);for(let W=0,j=Wt.length;W<j;W++)if(ft=Wt[W],C.format!==$e)if(dt!==null)if(Nt){if(P)if(C.layerUpdates.size>0){let ht=Pc(ft.width,ft.height,C.format,C.type);for(let lt of C.layerUpdates){let Lt=ft.data.subarray(lt*ht/ft.data.BYTES_PER_ELEMENT,(lt+1)*ht/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,lt,ft.width,ft.height,1,dt,Lt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ft.width,ft.height,$.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Tt,ft.width,ft.height,$.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ft.width,ft.height,$.depth,dt,Et,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Tt,ft.width,ft.height,$.depth,0,dt,Et,ft.data)}else{Nt&&ie&&e.texStorage2D(i.TEXTURE_2D,rt,Tt,Wt[0].width,Wt[0].height);for(let W=0,j=Wt.length;W<j;W++)ft=Wt[W],C.format!==$e?dt!==null?Nt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,W,Tt,ft.width,ft.height,0,dt,Et,ft.data)}else if(C.isDataArrayTexture)if(Nt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Tt,$.width,$.height,$.depth),P)if(C.layerUpdates.size>0){let W=Pc($.width,$.height,C.format,C.type);for(let j of C.layerUpdates){let ht=$.data.subarray(j*W/$.data.BYTES_PER_ELEMENT,(j+1)*W/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,dt,Et,ht)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,dt,Et,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,$.width,$.height,$.depth,0,dt,Et,$.data);else if(C.isData3DTexture)Nt?(ie&&e.texStorage3D(i.TEXTURE_3D,rt,Tt,$.width,$.height,$.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,dt,Et,$.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,$.width,$.height,$.depth,0,dt,Et,$.data);else if(C.isFramebufferTexture){if(ie)if(Nt)e.texStorage2D(i.TEXTURE_2D,rt,Tt,$.width,$.height);else{let W=$.width,j=$.height;for(let ht=0;ht<rt;ht++)e.texImage2D(i.TEXTURE_2D,ht,Tt,W,j,0,dt,Et,null),W>>=1,j>>=1}}else if(Wt.length>0){if(Nt&&ie){let W=Mt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,rt,Tt,W.width,W.height)}for(let W=0,j=Wt.length;W<j;W++)ft=Wt[W],Nt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,dt,Et,ft):e.texImage2D(i.TEXTURE_2D,W,Tt,dt,Et,ft);C.generateMipmaps=!1}else if(Nt){if(ie){let W=Mt($);e.texStorage2D(i.TEXTURE_2D,rt,Tt,W.width,W.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Et,$)}else e.texImage2D(i.TEXTURE_2D,0,Tt,dt,Et,$);p(C)&&f(Z),vt.__version=Y.version,C.onUpdate&&C.onUpdate(C)}b.__version=C.version}function Q(b,C,z){if(C.image.length!==6)return;let Z=Ot(b,C),J=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);let Y=n.get(J);if(J.version!==Y.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);let vt=Ht.getPrimaries(Ht.workingColorSpace),at=C.colorSpace===Fn?null:Ht.getPrimaries(C.colorSpace),ut=C.colorSpace===Fn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Xt=C.isCompressedTexture||C.image[0].isCompressedTexture,$=C.image[0]&&C.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!Xt&&!$?dt[j]=A(C.image[j],!0,s.maxCubemapSize):dt[j]=$?C.image[j].image:C.image[j],dt[j]=re(C,dt[j]);let Et=dt[0],Tt=r.convert(C.format,C.colorSpace),ft=r.convert(C.type),Wt=v(C.internalFormat,Tt,ft,C.colorSpace),Nt=C.isVideoTexture!==!0,ie=Y.__version===void 0||Z===!0,P=J.dataReady,rt=E(C,Et);Vt(i.TEXTURE_CUBE_MAP,C);let W;if(Xt){Nt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Wt,Et.width,Et.height);for(let j=0;j<6;j++){W=dt[j].mipmaps;for(let ht=0;ht<W.length;ht++){let lt=W[ht];C.format!==$e?Tt!==null?Nt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,Tt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Wt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,Tt,ft,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Wt,lt.width,lt.height,0,Tt,ft,lt.data)}}}else{if(W=C.mipmaps,Nt&&ie){W.length>0&&rt++;let j=Mt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Wt,j.width,j.height)}for(let j=0;j<6;j++)if($){Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,Tt,ft,dt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,dt[j].width,dt[j].height,0,Tt,ft,dt[j].data);for(let ht=0;ht<W.length;ht++){let Lt=W[ht].image[j].image;Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Lt.width,Lt.height,Tt,ft,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Wt,Lt.width,Lt.height,0,Tt,ft,Lt.data)}}else{Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Tt,ft,dt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,Tt,ft,dt[j]);for(let ht=0;ht<W.length;ht++){let lt=W[ht];Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Tt,ft,lt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Wt,Tt,ft,lt.image[j])}}}p(C)&&f(i.TEXTURE_CUBE_MAP),Y.__version=J.version,C.onUpdate&&C.onUpdate(C)}b.__version=C.version}function pt(b,C,z,Z,J,Y){let vt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),ut=v(z.internalFormat,vt,at,z.colorSpace),Xt=n.get(C),$=n.get(z);if($.__renderTarget=C,!Xt.__hasExternalTextures){let dt=Math.max(1,C.width>>Y),Et=Math.max(1,C.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,ut,dt,Et,C.depth,0,vt,at,null):e.texImage2D(J,Y,ut,dt,Et,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),qt(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,$.__webglTexture,0,Ft(C)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,$.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(b,C,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),C.depthBuffer){let Z=C.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,Y=x(C.stencilBuffer,J),vt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ft(C);qt(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,C.width,C.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Y,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,b)}else{let Z=C.textures;for(let J=0;J<Z.length;J++){let Y=Z[J],vt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),ut=v(Y.internalFormat,vt,at,Y.colorSpace),Xt=Ft(C);z&&qt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,ut,C.width,C.height):qt(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,ut,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ut,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(b,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(C.depthTexture);Z.__renderTarget=C,(!Z.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);let J=Z.__webglTexture,Y=Ft(C);if(C.depthTexture.format===zi)qt(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(C.depthTexture.format===Wi)qt(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function wt(b){let C=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Z){let J=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),C.__depthDisposeCallback=J}C.__boundDepthTexture=Z}if(b.depthTexture&&!C.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");It(C.__webglFramebuffer,b)}else if(z){C.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[Z]),C.__webglDepthbuffer[Z]===void 0)C.__webglDepthbuffer[Z]=i.createRenderbuffer(),nt(C.__webglDepthbuffer[Z],b,!1);else{let J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=C.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),nt(C.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(b,C,z){let Z=n.get(b);C!==void 0&&pt(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&wt(b)}function te(b){let C=b.texture,z=n.get(b),Z=n.get(C);b.addEventListener("dispose",w);let J=b.textures,Y=b.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=C.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let ut=0;ut<C.mipmaps.length;ut++)z.__webglFramebuffer[at][ut]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<C.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ut=J.length;at<ut;at++){let Xt=n.get(J[at]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&qt(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){let ut=J[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);let Xt=r.convert(ut.format,ut.colorSpace),$=r.convert(ut.type),dt=v(ut.internalFormat,Xt,$,ut.colorSpace,b.isXRRenderTarget===!0),Et=Ft(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,dt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,C);for(let at=0;at<6;at++)if(C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)pt(z.__webglFramebuffer[at][ut],b,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else pt(z.__webglFramebuffer[at],b,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(C)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=J.length;at<ut;at++){let Xt=J[at],$=n.get(Xt);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),Vt(i.TEXTURE_2D,Xt),pt(z.__webglFramebuffer,b,Xt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Xt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Vt(at,C),C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)pt(z.__webglFramebuffer[ut],b,C,i.COLOR_ATTACHMENT0,at,ut);else pt(z.__webglFramebuffer,b,C,i.COLOR_ATTACHMENT0,at,0);p(C)&&f(at),e.unbindTexture()}b.depthBuffer&&wt(b)}function kt(b){let C=b.textures;for(let z=0,Z=C.length;z<Z;z++){let J=C[z];if(p(J)){let Y=M(b),vt=n.get(J).__webglTexture;e.bindTexture(Y,vt),f(Y),e.unbindTexture()}}}let Gt=[],R=[];function be(b){if(b.samples>0){if(qt(b)===!1){let C=b.textures,z=b.width,Z=b.height,J=i.COLOR_BUFFER_BIT,Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(b),at=C.length>1;if(at)for(let ut=0;ut<C.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<C.length;ut++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let Xt=n.get(C[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,J,i.NEAREST),l===!0&&(Gt.length=0,R.length=0,Gt.push(i.COLOR_ATTACHMENT0+ut),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Gt.push(Y),R.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<C.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let Xt=n.get(C[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let C=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Ft(b){return Math.min(s.maxSamples,b.samples)}function qt(b){let C=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function St(b){let C=a.render.frame;h.get(b)!==C&&(h.set(b,C),b.update())}function re(b,C){let z=b.colorSpace,Z=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==Ki&&z!==Fn&&(Ht.getTransfer(z)===Kt?(Z!==$e||J!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),C}function Mt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Pt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=qt}function lm(i,t){function e(n,s=Fn){let r,a=Ht.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===sl)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===jc)return i.RGB;if(n===$e)return i.RGBA;if(n===Kc)return i.LUMINANCE;if(n===Jc)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===ol)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===Qc)return i.RG;if(n===cl)return i.RG_INTEGER;if(n===hl)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Wa||n===Xa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===ja)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Qa||n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===uo||n===fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lr)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===po||n===go||n===mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lo=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Pe=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},cm={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),f=this._getHandJoint(c,A);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),g=.02,m=.005;c.inputState.pinching&&d>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,um=`
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

}`,Uo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fe({vertexShader:hm,fragmentShader:um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Do=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,g=null,m=null,A=new Uo,p=e.getContextAttributes(),f=null,M=null,v=[],x=[],E=new yt,S=null,w=new Re;w.viewport=new he;let T=new Re;T.viewport=new he;let I=[w,T],_=new Lo,V=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=v[X];return Q===void 0&&(Q=new ms,v[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=v[X];return Q===void 0&&(Q=new ms,v[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=v[X];return Q===void 0&&(Q=new ms,v[X]=Q),Q.getHandSpace()};function N(X){let Q=x.indexOf(X.inputSource);if(Q===-1)return;let pt=v[Q];pt!==void 0&&(pt.update(X.inputSource,X.frame,c||a),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",H);for(let X=0;X<v.length;X++){let Q=x[X];Q!==null&&(x[X]=null,v[X].disconnect(Q))}V=null,O=null,A.reset(),t.setRenderTarget(f),g=null,d=null,u=null,s=null,M=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",q),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){let Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Ue(g.framebufferWidth,g.framebufferHeight,{format:$e,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,pt=null,nt=null;p.depth&&(nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Wi:zi,pt=p.stencil?qi:ci);let It={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ue(d.textureWidth,d.textureHeight,{format:$e,type:Mn,depthTexture:new _r(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function H(X){for(let Q=0;Q<X.removed.length;Q++){let pt=X.removed[Q],nt=x.indexOf(pt);nt>=0&&(x[nt]=null,v[nt].disconnect(pt))}for(let Q=0;Q<X.added.length;Q++){let pt=X.added[Q],nt=x.indexOf(pt);if(nt===-1){for(let wt=0;wt<v.length;wt++)if(wt>=x.length){x.push(pt),nt=wt;break}else if(x[wt]===null){x[wt]=pt,nt=wt;break}if(nt===-1)break}let It=v[nt];It&&It.connect(pt)}}let F=new D,K=new D;function G(X,Q,pt){F.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(pt.matrixWorld);let nt=F.distanceTo(K),It=Q.projectionMatrix.elements,wt=pt.projectionMatrix.elements,Pt=It[14]/(It[10]-1),te=It[14]/(It[10]+1),kt=(It[9]+1)/It[5],Gt=(It[9]-1)/It[5],R=(It[8]-1)/It[0],be=(wt[8]+1)/wt[0],Ft=Pt*R,qt=Pt*be,St=nt/(-R+be),re=St*-R;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(re),X.translateZ(St),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),It[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Mt=Pt+St,b=te+St,C=Ft-re,z=qt+(nt-re),Z=kt*te/b*Mt,J=Gt*te/b*Mt;X.projectionMatrix.makePerspective(C,z,Z,J,Mt,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function et(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,pt=X.far;A.texture!==null&&(A.depthNear>0&&(Q=A.depthNear),A.depthFar>0&&(pt=A.depthFar)),_.near=T.near=w.near=Q,_.far=T.far=w.far=pt,(V!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),V=_.near,O=_.far),w.layers.mask=X.layers.mask|2,T.layers.mask=X.layers.mask|4,_.layers.mask=w.layers.mask|T.layers.mask;let nt=X.parent,It=_.cameras;et(_,nt);for(let wt=0;wt<It.length;wt++)et(It[wt],nt);It.length===2?G(_,w,T):_.projectionMatrix.copy(w.projectionMatrix),ot(X,_,nt)};function ot(X,Q,pt){pt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=vo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let gt=null;function Vt(X,Q){if(h=Q.getViewerPose(c||a),m=Q,h!==null){let pt=h.views;g!==null&&(t.setRenderTargetFramebuffer(M,g.framebuffer),t.setRenderTarget(M));let nt=!1;pt.length!==_.cameras.length&&(_.cameras.length=0,nt=!0);for(let wt=0;wt<pt.length;wt++){let Pt=pt[wt],te=null;if(g!==null)te=g.getViewport(Pt);else{let Gt=u.getViewSubImage(d,Pt);te=Gt.viewport,wt===0&&(t.setRenderTargetTextures(M,Gt.colorTexture,d.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(M))}let kt=I[wt];kt===void 0&&(kt=new Re,kt.layers.enable(wt),kt.viewport=new he,I[wt]=kt),kt.matrix.fromArray(Pt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Pt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(te.x,te.y,te.width,te.height),wt===0&&(_.matrix.copy(kt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),nt===!0&&_.cameras.push(kt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let wt=u.getDepthInformation(pt[0]);wt&&wt.isValid&&wt.texture&&A.init(t,wt,s.renderState)}}for(let pt=0;pt<v.length;pt++){let nt=x[pt],It=v[pt];nt!==null&&It!==void 0&&It.update(nt,Q,c||a)}gt&&gt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Ot=new rh;Ot.setAnimationLoop(Vt),this.setAnimationLoop=function(X){gt=X},this.dispose=function(){}}},ii=new He,dm=new Jt;function fm(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,sh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,x)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),A(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,M,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===_e&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===_e&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M=t.get(f),v=M.envMap,x=M.envMapRotation;v&&(p.envMap.value=v,ii.copy(x),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),p.envMapRotation.value.setFromMatrix4(dm.makeRotationFromEuler(ii)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,M,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_e&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function A(p,f){let M=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=s[M.id];x===void 0&&(m(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",p));let E=v.program;n.updateUBOMapping(M,E);let S=t.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function h(M){let v=u();M.__bindingPointIndex=v;let x=i.createBuffer(),E=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=s[M.id],x=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,w=x.length;S<w;S++){let T=Array.isArray(x[S])?x[S]:[x[S]];for(let I=0,_=T.length;I<_;I++){let V=T[I];if(g(V,S,I,E)===!0){let O=V.__offset,N=Array.isArray(V.value)?V.value:[V.value],q=0;for(let H=0;H<N.length;H++){let F=N[H],K=A(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,O+q,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,v,x,E){let S=M.value,w=v+"_"+x;if(E[w]===void 0)return typeof S=="number"||typeof S=="boolean"?E[w]=S:E[w]=S.clone(),!0;{let T=E[w];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return E[w]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function m(M){let v=M.uniforms,x=0,E=16;for(let w=0,T=v.length;w<T;w++){let I=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,V=I.length;_<V;_++){let O=I[_],N=Array.isArray(O.value)?O.value:[O.value];for(let q=0,H=N.length;q<H;q++){let F=N[q],K=A(F),G=x%E,et=G%K.boundary,ot=G+et;x+=et,ot!==0&&E-ot<K.storage&&(x+=E-ot),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=K.storage}}}let S=x%E;return S>0&&(x+=E-S),M.__size=x,M.__cache={},this}function A(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){let v=M.target;v.removeEventListener("dispose",p);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var yr=class{constructor(t={}){let{canvas:e=xu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let m=new Uint32Array(4),A=new Int32Array(4),p=null,f=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this.toneMapping=kn,this.toneMappingExposure=1;let x=this,E=!1,S=0,w=0,T=null,I=-1,_=null,V=new he,O=new he,N=null,q=new _t(0),H=0,F=e.width,K=e.height,G=1,et=null,ot=null,gt=new he(0,0,F,K),Vt=new he(0,0,F,K),Ot=!1,X=new _s,Q=!1,pt=!1,nt=new Jt,It=new Jt,wt=new D,Pt=new he,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Gt(){return T===null?G:1}let R=n;function be(y,L){return e.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),R===null){let L="webgl2";if(R=be(L,y),R===null)throw be(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ft,qt,St,re,Mt,b,C,z,Z,J,Y,vt,at,ut,Xt,$,dt,Et,Tt,ft,Wt,Nt,ie,P;function rt(){Ft=new Tp(R),Ft.init(),Nt=new lm(R,Ft),qt=new Mp(R,Ft,t,Nt),St=new rm(R,Ft),qt.reverseDepthBuffer&&d&&St.buffers.depth.setReversed(!0),re=new Lp(R),Mt=new Xg,b=new om(R,Ft,St,Mt,qt,Nt,re),C=new Sp(x),z=new Vp(x),Z=new Bu(R),ie=new yp(R,Z),J=new Rp(R,Z,re,ie),Y=new Dp(R,J,Z,re),Tt=new Up(R,qt,b),$=new bp(Mt),vt=new Wg(x,C,z,Ft,qt,ie,$),at=new fm(x,Mt),ut=new Zg,Xt=new tm(Ft),Et=new _p(x,C,z,St,Y,g,l),dt=new im(x,Y,qt),P=new pm(R,re,qt,St),ft=new Ip(R,Ft,re),Wt=new Pp(R,Ft,re),re.programs=vt.programs,x.capabilities=qt,x.extensions=Ft,x.properties=Mt,x.renderLists=ut,x.shadowMap=dt,x.state=St,x.info=re}rt();let W=new Do(x,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let y=Ft.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ft.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(F,K,!1))},this.getSize=function(y){return y.set(F,K)},this.setSize=function(y,L,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=y,K=L,e.width=Math.floor(y*G),e.height=Math.floor(L*G),B===!0&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(F*G,K*G).floor()},this.setDrawingBufferSize=function(y,L,B){F=y,K=L,G=B,e.width=Math.floor(y*B),e.height=Math.floor(L*B),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(gt)},this.setViewport=function(y,L,B,k){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,L,B,k),St.viewport(V.copy(gt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Vt)},this.setScissor=function(y,L,B,k){y.isVector4?Vt.set(y.x,y.y,y.z,y.w):Vt.set(y,L,B,k),St.scissor(O.copy(Vt).multiplyScalar(G).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(y){St.setScissorTest(Ot=y)},this.setOpaqueSort=function(y){et=y},this.setTransparentSort=function(y){ot=y},this.getClearColor=function(y){return y.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(y=!0,L=!0,B=!0){let k=0;if(y){let U=!1;if(T!==null){let tt=T.texture.format;U=tt===hl||tt===cl||tt===ll}if(U){let tt=T.texture.type,ct=tt===Mn||tt===ci||tt===vs||tt===qi||tt===rl||tt===al,mt=Et.getClearColor(),At=Et.getClearAlpha(),Rt=mt.r,Ut=mt.g,xt=mt.b;ct?(m[0]=Rt,m[1]=Ut,m[2]=xt,m[3]=At,R.clearBufferuiv(R.COLOR,0,m)):(A[0]=Rt,A[1]=Ut,A[2]=xt,A[3]=At,R.clearBufferiv(R.COLOR,0,A))}else k|=R.COLOR_BUFFER_BIT}L&&(k|=R.DEPTH_BUFFER_BIT),B&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),Xt.dispose(),Mt.dispose(),C.dispose(),z.dispose(),Y.dispose(),ie.dispose(),P.dispose(),vt.dispose(),W.dispose(),W.removeEventListener("sessionstart",El),W.removeEventListener("sessionend",wl),Jn.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let y=re.autoReset,L=dt.enabled,B=dt.autoUpdate,k=dt.needsUpdate,U=dt.type;rt(),re.autoReset=y,dt.enabled=L,dt.autoUpdate=B,dt.needsUpdate=k,dt.type=U}function lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Lt(y){let L=y.target;L.removeEventListener("dispose",Lt),ce(L)}function ce(y){Se(y),Mt.remove(y)}function Se(y){let L=Mt.get(y).programs;L!==void 0&&(L.forEach(function(B){vt.releaseProgram(B)}),y.isShaderMaterial&&vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,B,k,U,tt){L===null&&(L=te);let ct=U.isMesh&&U.matrixWorld.determinant()<0,mt=Lh(y,L,B,k,U);St.setMaterial(k,ct);let At=B.index,Rt=1;if(k.wireframe===!0){if(At=J.getWireframeAttribute(B),At===void 0)return;Rt=2}let Ut=B.drawRange,xt=B.attributes.position,Yt=Ut.start*Rt,se=(Ut.start+Ut.count)*Rt;tt!==null&&(Yt=Math.max(Yt,tt.start*Rt),se=Math.min(se,(tt.start+tt.count)*Rt)),At!==null?(Yt=Math.max(Yt,0),se=Math.min(se,At.count)):xt!=null&&(Yt=Math.max(Yt,0),se=Math.min(se,xt.count));let ae=se-Yt;if(ae<0||ae===1/0)return;ie.setup(U,k,mt,B,At);let De,Zt=ft;if(At!==null&&(De=Z.get(At),Zt=Wt,Zt.setIndex(De)),U.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*Gt()),Zt.setMode(R.LINES)):Zt.setMode(R.TRIANGLES);else if(U.isLine){let Ct=k.linewidth;Ct===void 0&&(Ct=1),St.setLineWidth(Ct*Gt()),U.isLineSegments?Zt.setMode(R.LINES):U.isLineLoop?Zt.setMode(R.LINE_LOOP):Zt.setMode(R.LINE_STRIP)}else U.isPoints?Zt.setMode(R.POINTS):U.isSprite&&Zt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Zt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Zt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ct=U._multiDrawStarts,fn=U._multiDrawCounts,jt=U._multiDrawCount,je=At?Z.get(At).bytesPerElement:1,mi=Mt.get(k).currentProgram.getUniforms();for(let Fe=0;Fe<jt;Fe++)mi.setValue(R,"_gl_DrawID",Fe),Zt.render(Ct[Fe]/je,fn[Fe])}else if(U.isInstancedMesh)Zt.renderInstances(Yt,ae,U.count);else if(B.isInstancedBufferGeometry){let Ct=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,fn=Math.min(B.instanceCount,Ct);Zt.renderInstances(Yt,ae,fn)}else Zt.render(Yt,ae)};function Qt(y,L,B){y.transparent===!0&&y.side===_n&&y.forceSinglePass===!1?(y.side=_e,y.needsUpdate=!0,Vs(y,L,B),y.side=Gn,y.needsUpdate=!0,Vs(y,L,B),y.side=_n):Vs(y,L,B)}this.compile=function(y,L,B=null){B===null&&(B=y),f=Xt.get(B),f.init(L),v.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let k=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let tt=U.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){let mt=tt[ct];Qt(mt,B,U),k.add(mt)}else Qt(tt,B,U),k.add(tt)}),v.pop(),f=null,k},this.compileAsync=function(y,L,B=null){let k=this.compile(y,L,B);return new Promise(U=>{function tt(){if(k.forEach(function(ct){Mt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){U(y);return}setTimeout(tt,10)}Ft.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ze=null;function dn(y){Ze&&Ze(y)}function El(){Jn.stop()}function wl(){Jn.start()}let Jn=new rh;Jn.setAnimationLoop(dn),typeof self!="undefined"&&Jn.setContext(self),this.setAnimationLoop=function(y){Ze=y,W.setAnimationLoop(y),y===null?Jn.stop():Jn.start()},W.addEventListener("sessionstart",El),W.addEventListener("sessionend",wl),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,L,T),f=Xt.get(y,v.length),f.init(L),v.push(f),It.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(It),pt=this.localClippingEnabled,Q=$.init(this.clippingPlanes,pt),p=ut.get(y,M.length),p.init(),M.push(p),W.enabled===!0&&W.isPresenting===!0){let tt=x.xr.getDepthSensingMesh();tt!==null&&ta(tt,L,-1/0,x.sortObjects)}ta(y,L,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(et,ot),kt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,kt&&Et.addToRenderList(p,y),this.info.render.frame++,Q===!0&&$.beginShadows();let B=f.state.shadowsArray;dt.render(B,y,L),Q===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=p.opaque,U=p.transmissive;if(f.setupLights(),L.isArrayCamera){let tt=L.cameras;if(U.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){let At=tt[ct];Tl(k,U,y,At)}kt&&Et.render(y);for(let ct=0,mt=tt.length;ct<mt;ct++){let At=tt[ct];Vl(p,y,At,At.viewport)}}else U.length>0&&Tl(k,U,y,L),kt&&Et.render(y),Vl(p,y,L);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(x,y,L),ie.resetDefaultState(),I=-1,_=null,v.pop(),v.length>0?(f=v[v.length-1],Q===!0&&$.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function ta(y,L,B,k){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||X.intersectsSprite(y)){k&&Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(It);let ct=Y.update(y),mt=y.material;mt.visible&&p.push(y,ct,mt,B,Pt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||X.intersectsObject(y))){let ct=Y.update(y),mt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pt.copy(y.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Pt.copy(ct.boundingSphere.center)),Pt.applyMatrix4(y.matrixWorld).applyMatrix4(It)),Array.isArray(mt)){let At=ct.groups;for(let Rt=0,Ut=At.length;Rt<Ut;Rt++){let xt=At[Rt],Yt=mt[xt.materialIndex];Yt&&Yt.visible&&p.push(y,ct,Yt,B,Pt.z,xt)}}else mt.visible&&p.push(y,ct,mt,B,Pt.z,null)}}let tt=y.children;for(let ct=0,mt=tt.length;ct<mt;ct++)ta(tt[ct],L,B,k)}function Vl(y,L,B,k){let U=y.opaque,tt=y.transmissive,ct=y.transparent;f.setupLightsView(B),Q===!0&&$.setGlobalState(x.clippingPlanes,B),k&&St.viewport(V.copy(k)),U.length>0&&ws(U,L,B),tt.length>0&&ws(tt,L,B),ct.length>0&&ws(ct,L,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Tl(y,L,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Ue(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?sn:Mn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));let tt=f.state.transmissionRenderTarget[k.id],ct=k.viewport||V;tt.setSize(ct.z,ct.w);let mt=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(q),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),kt&&Et.render(B);let At=x.toneMapping;x.toneMapping=kn;let Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),Q===!0&&$.setGlobalState(x.clippingPlanes,k),ws(y,B,k),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,Yt=L.length;xt<Yt;xt++){let se=L[xt],ae=se.object,De=se.geometry,Zt=se.material,Ct=se.group;if(Zt.side===_n&&ae.layers.test(k.layers)){let fn=Zt.side;Zt.side=_e,Zt.needsUpdate=!0,Rl(ae,B,k,De,Zt,Ct),Zt.side=fn,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}x.setRenderTarget(mt),x.setClearColor(q,H),Rt!==void 0&&(k.viewport=Rt),x.toneMapping=At}function ws(y,L,B){let k=L.isScene===!0?L.overrideMaterial:null;for(let U=0,tt=y.length;U<tt;U++){let ct=y[U],mt=ct.object,At=ct.geometry,Rt=k===null?ct.material:k,Ut=ct.group;mt.layers.test(B.layers)&&Rl(mt,L,B,At,Rt,Ut)}}function Rl(y,L,B,k,U,tt){y.onBeforeRender(x,L,B,k,U,tt),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(x,L,B,k,y,tt),U.transparent===!0&&U.side===_n&&U.forceSinglePass===!1?(U.side=_e,U.needsUpdate=!0,x.renderBufferDirect(B,L,k,U,y,tt),U.side=Gn,U.needsUpdate=!0,x.renderBufferDirect(B,L,k,U,y,tt),U.side=_n):x.renderBufferDirect(B,L,k,U,y,tt),y.onAfterRender(x,L,B,k,U,tt)}function Vs(y,L,B){L.isScene!==!0&&(L=te);let k=Mt.get(y),U=f.state.lights,tt=f.state.shadowsArray,ct=U.state.version,mt=vt.getParameters(y,U.state,tt,L,B),At=vt.getProgramCacheKey(mt),Rt=k.programs;k.environment=y.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(y.isMeshStandardMaterial?z:C).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Lt),Rt=new Map,k.programs=Rt);let Ut=Rt.get(At);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===ct)return Ll(y,mt),Ut}else mt.uniforms=vt.getUniforms(y),y.onBeforeCompile(mt,x),Ut=vt.acquireProgram(mt,At),Rt.set(At,Ut),k.uniforms=mt.uniforms;let xt=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(xt.clippingPlanes=$.uniform),Ll(y,mt),k.needsLights=Dh(y),k.lightsStateVersion=ct,k.needsLights&&(xt.ambientLightColor.value=U.state.ambient,xt.lightProbe.value=U.state.probe,xt.directionalLights.value=U.state.directional,xt.directionalLightShadows.value=U.state.directionalShadow,xt.spotLights.value=U.state.spot,xt.spotLightShadows.value=U.state.spotShadow,xt.rectAreaLights.value=U.state.rectArea,xt.ltc_1.value=U.state.rectAreaLTC1,xt.ltc_2.value=U.state.rectAreaLTC2,xt.pointLights.value=U.state.point,xt.pointLightShadows.value=U.state.pointShadow,xt.hemisphereLights.value=U.state.hemi,xt.directionalShadowMap.value=U.state.directionalShadowMap,xt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xt.spotShadowMap.value=U.state.spotShadowMap,xt.spotLightMatrix.value=U.state.spotLightMatrix,xt.spotLightMap.value=U.state.spotLightMap,xt.pointShadowMap.value=U.state.pointShadowMap,xt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function Pl(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Bi.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Ll(y,L){let B=Mt.get(y);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Lh(y,L,B,k,U){L.isScene!==!0&&(L=te),b.resetTextureUnits();let tt=L.fog,ct=k.isMeshStandardMaterial?L.environment:null,mt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ki,At=(k.isMeshStandardMaterial?z:C).get(k.envMap||ct),Rt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xt=!!B.morphAttributes.position,Yt=!!B.morphAttributes.normal,se=!!B.morphAttributes.color,ae=kn;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ae=x.toneMapping);let De=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=De!==void 0?De.length:0,Ct=Mt.get(k),fn=f.state.lights;if(Q===!0&&(pt===!0||y!==_)){let qe=y===_&&k.id===I;$.setState(k,y,qe)}let jt=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==fn.state.version||Ct.outputColorSpace!==mt||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==At||k.fog===!0&&Ct.fog!==tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==$.numPlanes||Ct.numIntersection!==$.numIntersection)||Ct.vertexAlphas!==Rt||Ct.vertexTangents!==Ut||Ct.morphTargets!==xt||Ct.morphNormals!==Yt||Ct.morphColors!==se||Ct.toneMapping!==ae||Ct.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,Ct.__version=k.version);let je=Ct.currentProgram;jt===!0&&(je=Vs(k,L,U));let mi=!1,Fe=!1,is=!1,oe=je.getUniforms(),rn=Ct.uniforms;if(St.useProgram(je.program)&&(mi=!0,Fe=!0,is=!0),k.id!==I&&(I=k.id,Fe=!0),mi||_!==y){St.buffers.depth.getReversed()?(nt.copy(y.projectionMatrix),Cu(nt),_u(nt),oe.setValue(R,"projectionMatrix",nt)):oe.setValue(R,"projectionMatrix",y.projectionMatrix),oe.setValue(R,"viewMatrix",y.matrixWorldInverse);let Tn=oe.map.cameraPosition;Tn!==void 0&&Tn.setValue(R,wt.setFromMatrixPosition(y.matrixWorld)),qt.logarithmicDepthBuffer&&oe.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&oe.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),_!==y&&(_=y,Fe=!0,is=!0)}if(U.isSkinnedMesh){oe.setOptional(R,U,"bindMatrix"),oe.setOptional(R,U,"bindMatrixInverse");let qe=U.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),oe.setValue(R,"boneTexture",qe.boneTexture,b))}U.isBatchedMesh&&(oe.setOptional(R,U,"batchingTexture"),oe.setValue(R,"batchingTexture",U._matricesTexture,b),oe.setOptional(R,U,"batchingIdTexture"),oe.setValue(R,"batchingIdTexture",U._indirectTexture,b),oe.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(R,"batchingColorTexture",U._colorsTexture,b));let ss=B.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Tt.update(U,B,je),(Fe||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,oe.setValue(R,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(rn.envMap.value=At,rn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(rn.envMapIntensity.value=L.environmentIntensity),Fe&&(oe.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Uh(rn,is),tt&&k.fog===!0&&at.refreshFogUniforms(rn,tt),at.refreshMaterialUniforms(rn,k,G,K,f.state.transmissionRenderTarget[y.id]),Bi.upload(R,Pl(Ct),rn,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Bi.upload(R,Pl(Ct),rn,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&oe.setValue(R,"center",U.center),oe.setValue(R,"modelViewMatrix",U.modelViewMatrix),oe.setValue(R,"normalMatrix",U.normalMatrix),oe.setValue(R,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let qe=k.uniformsGroups;for(let Tn=0,Rn=qe.length;Tn<Rn;Tn++){let Ul=qe[Tn];P.update(Ul,je),P.bind(Ul,je)}}return je}function Uh(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Dh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,L,B){Mt.get(y.texture).__webglTexture=L,Mt.get(y.depthTexture).__webglTexture=B;let k=Mt.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){let B=Mt.get(y);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,B=0){T=y,S=L,w=B;let k=!0,U=null,tt=!1,ct=!1;if(y){let At=Mt.get(y);if(At.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(At.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(At.__hasExternalTextures)b.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let xt=y.depthTexture;if(At.__boundDepthTexture!==xt){if(xt!==null&&Mt.has(xt)&&(y.width!==xt.image.width||y.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}let Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);let Ut=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?U=Ut[L][B]:U=Ut[L],tt=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?U=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ut)?U=Ut[B]:U=Ut,V.copy(y.viewport),O.copy(y.scissor),N=y.scissorTest}else V.copy(gt).multiplyScalar(G).floor(),O.copy(Vt).multiplyScalar(G).floor(),N=Ot;if(St.bindFramebuffer(R.FRAMEBUFFER,U)&&k&&St.drawBuffers(y,U),St.viewport(V),St.scissor(O),St.setScissorTest(N),tt){let At=Mt.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,At.__webglTexture,B)}else if(ct){let At=Mt.get(y.texture),Rt=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,At.__webglTexture,B||0,Rt)}I=-1},this.readRenderTargetPixels=function(y,L,B,k,U,tt,ct){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){St.bindFramebuffer(R.FRAMEBUFFER,mt);try{let At=y.texture,Rt=At.format,Ut=At.type;if(!qt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-k&&B>=0&&B<=y.height-U&&R.readPixels(L,B,k,U,Nt.convert(Rt),Nt.convert(Ut),tt)}finally{let At=T!==null?Mt.get(T).__webglFramebuffer:null;St.bindFramebuffer(R.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,L,B,k,U,tt,ct){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){let At=y.texture,Rt=At.format,Ut=At.type;if(!qt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-k&&B>=0&&B<=y.height-U){St.bindFramebuffer(R.FRAMEBUFFER,mt);let xt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,xt),R.bufferData(R.PIXEL_PACK_BUFFER,tt.byteLength,R.STREAM_READ),R.readPixels(L,B,k,U,Nt.convert(Rt),Nt.convert(Ut),0);let Yt=T!==null?Mt.get(T).__webglFramebuffer:null;St.bindFramebuffer(R.FRAMEBUFFER,Yt);let se=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await vu(R,se,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,xt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,tt),R.deleteBuffer(xt),R.deleteSync(se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,B=0){y.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);let k=Math.pow(2,-B),U=Math.floor(y.image.width*k),tt=Math.floor(y.image.height*k),ct=L!==null?L.x:0,mt=L!==null?L.y:0;b.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,ct,mt,U,tt),St.unbindTexture()},this.copyTextureToTexture=function(y,L,B=null,k=null,U=0){y.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],L=arguments[2],U=arguments[3]||0,B=null);let tt,ct,mt,At,Rt,Ut,xt,Yt,se,ae=y.isCompressedTexture?y.mipmaps[U]:y.image;B!==null?(tt=B.max.x-B.min.x,ct=B.max.y-B.min.y,mt=B.isBox3?B.max.z-B.min.z:1,At=B.min.x,Rt=B.min.y,Ut=B.isBox3?B.min.z:0):(tt=ae.width,ct=ae.height,mt=ae.depth||1,At=0,Rt=0,Ut=0),k!==null?(xt=k.x,Yt=k.y,se=k.z):(xt=0,Yt=0,se=0);let De=Nt.convert(L.format),Zt=Nt.convert(L.type),Ct;L.isData3DTexture?(b.setTexture3D(L,0),Ct=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(b.setTexture2DArray(L,0),Ct=R.TEXTURE_2D_ARRAY):(b.setTexture2D(L,0),Ct=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);let fn=R.getParameter(R.UNPACK_ROW_LENGTH),jt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),je=R.getParameter(R.UNPACK_SKIP_PIXELS),mi=R.getParameter(R.UNPACK_SKIP_ROWS),Fe=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,At),R.pixelStorei(R.UNPACK_SKIP_ROWS,Rt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ut);let is=y.isDataArrayTexture||y.isData3DTexture,oe=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let rn=Mt.get(y),ss=Mt.get(L),qe=Mt.get(rn.__renderTarget),Tn=Mt.get(ss.__renderTarget);St.bindFramebuffer(R.READ_FRAMEBUFFER,qe.__webglFramebuffer),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let Rn=0;Rn<mt;Rn++)is&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,U,Ut+Rn),y.isDepthTexture?(oe&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mt.get(L).__webglTexture,U,se+Rn),R.blitFramebuffer(At,Rt,tt,ct,xt,Yt,tt,ct,R.DEPTH_BUFFER_BIT,R.NEAREST)):oe?R.copyTexSubImage3D(Ct,U,xt,Yt,se+Rn,At,Rt,tt,ct):R.copyTexSubImage2D(Ct,U,xt,Yt,se+Rn,At,Rt,tt,ct);St.bindFramebuffer(R.READ_FRAMEBUFFER,null),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else oe?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Ct,U,xt,Yt,se,tt,ct,mt,De,Zt,ae.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Ct,U,xt,Yt,se,tt,ct,mt,De,ae.data):R.texSubImage3D(Ct,U,xt,Yt,se,tt,ct,mt,De,Zt,ae):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,xt,Yt,tt,ct,De,Zt,ae.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,xt,Yt,ae.width,ae.height,De,ae.data):R.texSubImage2D(R.TEXTURE_2D,U,xt,Yt,tt,ct,De,Zt,ae);R.pixelStorei(R.UNPACK_ROW_LENGTH,fn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,jt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,je),R.pixelStorei(R.UNPACK_SKIP_ROWS,mi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Fe),U===0&&L.generateMipmaps&&R.generateMipmap(Ct),St.unbindTexture()},this.copyTextureToTexture3D=function(y,L,B=null,k=null,U=0){return y.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,y=arguments[2],L=arguments[3],U=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,B,k,U)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),St.unbindTexture()},this.resetState=function(){S=0,w=0,T=null,St.reset(),ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var Ir=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mr=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new He,this.environmentIntensity=1,this.environmentRotation=new He,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},No=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xo,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ve=new D,br=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ys=class extends un{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ri,cs=new D,Pi=new D,Li=new D,Ui=new yt,hs=new yt,hh=new Jt,Js=new D,us=new D,Qs=new D,Lc=new yt,Ra=new yt,Uc=new yt,Sr=class extends Me{constructor(t=new ys){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new No(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new br(n,3,0,!1)),Ri.setAttribute("uv",new br(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),hh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;$s(Js.set(-.5,-.5,0),Li,a,Pi,s,r),$s(us.set(.5,-.5,0),Li,a,Pi,s,r),$s(Qs.set(.5,.5,0),Li,a,Pi,s,r),Lc.set(0,0),Ra.set(1,0),Uc.set(1,1);let o=t.ray.intersectTriangle(Js,us,Qs,!1,cs);if(o===null&&($s(us.set(-.5,.5,0),Li,a,Pi,s,r),Ra.set(0,1),o=t.ray.intersectTriangle(Js,Qs,us,!1,cs),o===null))return;let l=t.ray.origin.distanceTo(cs);l<t.near||l>t.far||e.push({distance:l,point:cs.clone(),uv:Bn.getInterpolation(cs,Js,us,Qs,Lc,Ra,Uc,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $s(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(hs.x=r*Ui.x-s*Ui.y,hs.y=s*Ui.x+r*Ui.y):hs.copy(Ui),i.copy(t),i.x+=hs.x,i.y+=hs.y,i.applyMatrix4(hh)}var zo=class extends Le{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class extends ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Di=new Jt,Dc=new Jt,tr=[],Nc=new bn,gm=new Jt,ds=new de,fs=new Wn,en=class extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),Nc.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(Nc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),fs.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),Dc.multiplyMatrices(n,Di),ds.matrixWorld=Dc,ds.raycast(t,tr);for(let a=0,o=tr.length;a<o;a++){let l=tr[a];l.instanceId=r,l.object=this,e.push(l)}tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zo(new Float32Array(s*this.count),s,this.count,ol,cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ui=class extends un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zc=new Jt,Fo=new fr,er=new Wn,nr=new D,Xn=class extends Me{constructor(t=new Ae,e=new ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=r,t.ray.intersectsSphere(er)===!1)return;zc.copy(s).invert(),Fo.copy(t.ray).applyMatrix4(zc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let m=d,A=g;m<A;m++){let p=c.getX(m);nr.fromBufferAttribute(u,p),Fc(nr,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let m=d,A=g;m<A;m++)nr.fromBufferAttribute(u,m),Fc(nr,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fc(i,t,e,n,s,r,a){let o=Fo.distanceSqToPoint(i);if(o<e){let l=new D;Fo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Sn=class extends Le{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class i extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],g=[],m=0,A=[],p=n/2,f=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(g,2));function M(){let x=new D,E=new D,S=0,w=(e-t)/n;for(let T=0;T<=r;T++){let I=[],_=T/r,V=_*(e-t)+t;for(let O=0;O<=s;O++){let N=O/s,q=N*l+o,H=Math.sin(q),F=Math.cos(q);E.x=V*H,E.y=-_*n+p,E.z=V*F,u.push(E.x,E.y,E.z),x.set(H,w,F).normalize(),d.push(x.x,x.y,x.z),g.push(N,1-_),I.push(m++)}A.push(I)}for(let T=0;T<s;T++)for(let I=0;I<r;I++){let _=A[I][T],V=A[I+1][T],O=A[I+1][T+1],N=A[I][T+1];(t>0||I!==0)&&(h.push(_,V,N),S+=3),(e>0||I!==r-1)&&(h.push(V,O,N),S+=3)}c.addGroup(f,S,0),f+=S}function v(x){let E=m,S=new yt,w=new D,T=0,I=x===!0?t:e,_=x===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*_,0),d.push(0,_,0),g.push(.5,.5),m++;let V=m;for(let O=0;O<=s;O++){let q=O/s*l+o,H=Math.cos(q),F=Math.sin(q);w.x=I*F,w.y=p*_,w.z=I*H,u.push(w.x,w.y,w.z),d.push(0,_,0),S.x=H*.5+.5,S.y=F*.5*_+.5,g.push(S.x,S.y),m++}for(let O=0;O<s;O++){let N=E+O,q=V+O;x===!0?h.push(q,q+1,N):h.push(q+1,q,N),T+=3}c.addGroup(f,T,x===!0?1:2),f+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wr=class i extends Zi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Is=class i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,g=[],m=[],A=[],p=[];for(let f=0;f<=n;f++){let M=[],v=f/n,x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){let S=E/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),p.push(S+x,1-v),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let v=h[f][M+1],x=h[f][M],E=h[f+1][M],S=h[f+1][M+1];(f!==0||a>0)&&g.push(v,x,S),(f!==n-1||l<Math.PI)&&g.push(x,E,S)}this.setIndex(g),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(A,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vr=class extends fe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var Ms=class extends un{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Yn=class extends un{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ir(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bo=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bl:r=t,o=2*e-n;break;case Ol:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bl:a=t,l=2*n-e;break;case Ol:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,g=this._weightNext,m=(n-e)/(s-e),A=m*m,p=A*m,f=-d*p+2*d*A-d*m,M=(1+d)*p+(-1.5-2*d)*A+(-.5+d)*m+1,v=(-1-g)*p+(1.5+g)*A+.5*m,x=g*p-g*A;for(let E=0;E!==o;++E)r[E]=f*a[h+E]+M*a[c+E]+v*a[l+E]+x*a[u+E];return r}},Oo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ko=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ir(e,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ir(t.times,Array),values:ir(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case Ao:e=this.InterpolantFactoryMethodLinear;break;case na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&mm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===na,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,g=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[g+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[u+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Ao;var di=class extends nn{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=cr;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends nn{};Ho.prototype.ValueTypeName="color";var Go=class extends nn{};Go.prototype.ValueTypeName="number";var qo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Tr=class extends nn{InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends nn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=cr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends nn{};Wo.prototype.ValueTypeName="vector";var Bc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Xo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let g=c[u],m=c[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return m}return null}}},Am=new Xo,bs=class{constructor(t){this.manager=t!==void 0?t:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yo=class extends bs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Bc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Cs("img");function l(){h(),Bc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Rr=class extends bs{constructor(t){super(t)}load(t,e,n,s){let r=new Le,a=new Yo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Pr=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Lr=class extends Pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Pa=new Jt,Oc=new D,kc=new D,Zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kc),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var jo=class extends Zo{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new jo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Dr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Hc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Hc(){return performance.now()}var fl="\\[\\]\\.:\\/",xm=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",vm="[^"+fl.replace("\\.","")+"]",Cm=/((?:WC+[\/:])*)/.source.replace("WC",pl),_m=/(WCOD+)?/.source.replace("WCOD",vm),ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),Im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),Mm=new RegExp("^"+Cm+_m+ym+Im+"$"),bm=["material","materials","bones","map"],Ko=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xm,"")}static parseTrackName(t){let e=Mm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Ko;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);function it(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function uh(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function dh(i,t,e,n="#ffd23a"){return`
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
`}var Ye=(i,t,e)=>i<t?t:i>e?e:i;function fh(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var ye=3.8,En=30,ph=99999,pi=3.9,Or=["meadow","desert","snow","candy","space"],Sm=i=>Or[Math.min(4,Math.floor(i/6))],kr=[{id:"start",ar:"\u0643\u0648\u0631 \u0628\u062F\u0627\u064A\u0629",en:"Start balls",icon:"\u{1F534}",base:40,grow:1.55,max:8,per:8},{id:"wide",ar:"\u0645\u062C\u0631\u0641\u0629 \u0623\u0639\u0631\u0636",en:"Wider shovel",icon:"\u2194\uFE0F",base:60,grow:1.7,max:6,per:.3},{id:"coin",ar:"\u0639\u0645\u0644\u0627\u062A \u0623\u0643\u062A\u0631",en:"Coin value",icon:"\u{1FA99}",base:80,grow:1.75,max:8,per:.3},{id:"magnet",ar:"\u0645\u063A\u0646\u0627\u0637\u064A\u0633",en:"Magnet range",icon:"\u{1F9F2}",base:70,grow:1.7,max:5,per:.5},{id:"armor",ar:"\u062F\u0631\u0639 \u0644\u0644\u062D\u064A\u0637\u0627\u0646",en:"Wall armour",icon:"\u{1F6E1}\uFE0F",base:90,grow:1.8,max:5,per:.15}],Em=i=>230+i*26,Ie={ramp:10,plat:4,h:2.4,pitHalf:5.2,pitLen:11,pitY:-1.4},Al=i=>3+.3*i,wm=i=>i<100?Math.max(20,Math.round(i/10)*10):i<1e3?Math.round(i/50)*50:Math.round(i/500)*500;function Vm(i,t){let e=Ye(i,0,En-1),n=fh((t!=null?t:e*7919+11)>>>0),s=(v,x)=>v+Math.floor(n()*(x-v+1)),r=Em(e),a=[],o={curves:[],narrows:[],bumps:[],ramps:[]},l=1,c=e/(En-1),h=10*Math.round(1+e*.35),u=2+Math.floor(e/10),d=()=>14+e*3+s(0,20),g=v=>{a.push({id:l++,...v})},m=(v,x)=>{let E=[],S=60+s(0,40);for(;S+v<r-80;)E.push(S),S+=v+x+s(0,80);return E};if(e>=5)for(let v of m(50,160-e*2))o.narrows.push({z0:v,z1:v+50,min:e>20?1.9:2.4});if(e>=9)for(let v of m(80,130-e))o.curves.push({z0:v,z1:v+80,A:1.6+c*1.6,s:s(0,1)?1:-1,kind:n()<.6?"s":"c"});let A=v=>o.narrows.some(x=>v>x.z0-6&&v<x.z1+6),p=()=>{let v=[],x=w=>(w==="mul"&&u<=0&&(w="add"),w==="mul"?(u--,{op:"mul",v:e>=24&&n()<.2?4:e>=12&&n()<.4?3:2}):w==="minus"?{op:"add",v:-h*s(1,3)}:{op:"add",v:h*s(1,4)}),E=n(),S;return e<2?S=E<.7?["add","add"]:["add","mul"]:e<6?S=E<.35?["add","add"]:E<.65?["add","mul"]:["add","minus"]:S=E<.2?["add","add"]:E<.45?["add","mul"]:E<.7?["mul","minus"]:E<.85?["add","minus"]:["mul","mul"],n()<.5&&S.reverse(),v.push(x(S[0]),x(S[1])),v},f=[{min:0,w:4,f:v=>(g({kind:"pile",x:(n()-.5)*5.2,z:v,n:d(),w:1.8}),9)},{min:0,w:3,f:v=>{let x=4+Math.floor(c*2),E=1.6+c;for(let S=0;S<x;S++)g({kind:"pile",x:(S%2?1:-1)*E,z:v+S*6,n:Math.round(d()*.6),w:1.6});return x*6+4}},{min:0,w:5,f:v=>{let[x,E]=p();return g({kind:"gate",x:-1.95,z:v,w:3.3,...x}),g({kind:"gate",x:1.95,z:v,w:3.3,...E}),15}},{min:8,w:2,f:v=>{let x=[p(),p()];return[x[0][0],x[0][1],x[1][0]].forEach((S,w)=>g({kind:"gate",x:(w-1)*2.45,z:v,w:2.3,...S})),15}},{min:0,w:3,f:(v,x)=>{if(x)return 8;let E=2.4+c*1.4,S=(n()<.5?-1:1)*n()*(ye-E/2-1.8);return g({kind:"wall",x:S,z:v,w:E,loss:.12+Math.min(.18,e*.007)}),11}},{min:3,w:2,f:(v,x)=>{if(x)return 8;let E=(n()-.5)*3,S=3.4-c*.5,w=E-S/2+ye,T=ye-(E+S/2);return g({kind:"wall",x:-ye+w/2-0,z:v,w,loss:.14}),g({kind:"wall",x:ye-T/2,z:v,w:T,loss:.14}),13}},{min:4,w:2,f:v=>{o.bumps.push({z0:v,n:4,len:3,A:.38}),g({kind:"bumpmark",z:v,len:12});for(let x=0;x<3;x++)g({kind:"pile",x:(n()-.5)*4,z:v+14+x*5,n:Math.round(d()*.5),w:1.6});return 32}},{min:6,w:2,f:(v,x)=>x?8:(g({kind:"mwall",x:0,z:v,w:2.6,amp:1.5+c,f:1.1+c*.8,ph:n()*6,loss:.16}),12)},{min:7,w:2,f:(v,x)=>{if(x)return 8;let E=1.7;o.ramps.push({z0:v,len:5,H:E}),g({kind:"ramp",z:v,len:5,H:E});for(let S=0;S<3;S++)g({kind:"pile",x:(n()-.5)*4.4,z:v+17+S*4,n:Math.round(d()*.6),w:1.6});return 33}},{min:10,w:2,f:(v,x)=>x?8:(g({kind:"spinner",x:(n()-.5)*2,z:v,len:5.2,w0:(n()<.5?-1:1)*(1.8+c*1.2),ph:n()*6,cool:0}),14)},{min:12,w:2,f:(v,x)=>{if(x)return 8;let E=n()<.5?-1:1;return g({kind:"conv",z:v,len:16,dir:E}),g({kind:"pile",x:-E*2.4,z:v+6,n:d(),w:1.6}),g({kind:"pile",x:-E*2.4,z:v+12,n:d(),w:1.6}),26}}],M=24;for(;M<r-40;){let v=A(M),x=f.filter(T=>e>=T.min),E=x.reduce((T,I)=>T+I.w,0),S=n()*E,w=x[0];for(let T of x)if(S-=T.w,S<=0){w=T;break}M+=w.f(M,v)}return a.sort((v,x)=>v.z-x.z),{L:r,things:a,zones:o,lv:e,theme:Sm(e)}}function Tm(i){let{zones:t,L:e}=i;return{centerAt:a=>{let o=0;for(let l of t.curves)if(a>l.z0&&a<l.z1){let c=(a-l.z0)/(l.z1-l.z0);o+=l.s*l.A*(l.kind==="s"?Math.sin(2*Math.PI*c):Math.sin(Math.PI*c))}return o},halfAt:a=>{let o=ye;for(let l of t.narrows)if(a>l.z0&&a<l.z1){let c=(a-l.z0)/(l.z1-l.z0),h=Math.min(1,Math.sin(Math.PI*c)*3);o=Math.min(o,ye-(ye-l.min)*h)}return o},groundAt:a=>{if(a>=e){let o=a-e;return o<Ie.ramp?Ie.h*(o/Ie.ramp):Ie.h}for(let o of t.bumps)if(a>o.z0&&a<o.z0+o.n*o.len){let l=(a-o.z0)%o.len/o.len;return o.A*Math.sin(Math.PI*l)**2}for(let o of t.ramps)if(a>o.z0&&a<o.z0+o.len)return o.H*(a-o.z0)/o.len;return 0}}}var Qi=class{constructor(t={}){var n;this.level=Ye((n=t.level)!=null?n:0,0,En-1),this.up={start:0,wide:0,coin:0,magnet:0,armor:0,...t.up||{}};let e=Vm(this.level,t.seed);this.road=e,this.L=e.L,this.things=e.things,this.theme=e.theme,Object.assign(this,Tm(e)),this.zEdge=this.L+Ie.ramp+Ie.plat,this.zStop=this.zEdge-2.5,this.balls=10+this.up.start*8,this.peak=this.balls,this.x=0,this.targetX=0,this.z=0,this.y=0,this.vy=0,this.air=!1,this.pitch=0,this.time=0,this.state="run",this.events=[],this.easy=!!t.easy,this.coins=0,this.bankT=0,this.tilt=0,this.spilled=0,this.lostWalls=0,this.goal=t.goal||0,this.slow=0}get W(){return Al(this.up.wide)}get speed(){return(this.easy?9:12)*(this.slow>0?.55:1)}get coinRate(){return .2*(1+this.up.coin*.3)}get gx(){return this.centerAt(this.z)+this.x}steer(t){this.targetX=Ye(t,-1,1)*(ye-1.2)}lose(t){return t=Math.min(this.balls,Math.max(0,Math.round(t))),this.balls-=t,this.spilled+=t,t}starsFor(t=this.balls){return t>=this.goal?3:t>=this.goal*.6?2:1}spinnerHit(t){let e=t.ph+this.time*t.w0,n=t.x,s=t.len/2,r=Math.cos(e)*s,a=Math.sin(e)*s,o=this.z+pi,l=[o-.5,o+.5],c=[this.x-1.3,this.x+1.3];for(let h=-1;h<=1.001;h+=.1){let u=n+r*h,d=t.z+a*h;if(u>c[0]&&u<c[1]&&d>l[0]&&d<l[1])return!0}return!1}step(t){let e=this.events=[];if(this.state==="done")return e;if(this.time+=t,this.slow>0&&(this.slow-=t),this.state==="bank")return this._bank(t,e);let n=this.halfAt(this.z)-1;{let u=4.6*t;this.x+=Ye((this.targetX-this.x)*Math.min(1,t*9),-u,u)}let s=this.z;this.z+=this.speed*t;for(let u of this.things)u.kind==="conv"&&this.z>u.z&&this.z<u.z+u.len&&(this.x+=u.dir*3.4*t),u.kind==="ramp"&&!this.air&&s<u.z+u.len&&this.z>=u.z+u.len&&(this.air=!0,this.vy=u.H/u.len*this.speed,this.y=u.H,e.push({type:"jump"}));this.x=Ye(this.x,-n,n);let r=this.groundAt(this.z);if(this.air)this.vy-=20*t,this.y+=this.vy*t,this.y<=r&&(this.y=r,this.air=!1,this.vy=0,e.push({type:"land"}));else{let u=this.y;this.y=r,Math.abs(r-u)>0&&!this.bumped&&r>.2&&this.groundAt(this.z-3)>.2&&this.groundAt(this.z-3)<.45&&(this.bumped=!0,e.push({type:"bump"})),r<.05&&(this.bumped=!1)}let a=(this.groundAt(this.z+1.5)-this.groundAt(this.z-1.5))/3,o=this.air?-Math.atan2(this.vy,this.speed)*.7:-Math.atan(a);this.pitch+=(o-this.pitch)*Math.min(1,t*10);let l=this.y<.9,c=this.W/2+.3+this.up.magnet*.5,h=u=>u*(this.easy?.5:1)*(1-this.up.armor*.15);for(let u of this.things)if(!u.done){if(u.kind==="spinner"){if(u.cool>0&&(u.cool-=t),u.cool<=0&&Math.abs(u.z-(this.z+pi))<3&&l&&this.spinnerHit(u)){u.cool=1.2;let d=Math.min(this.balls,Math.max(2,Math.round(this.balls*h(.14))));this.balls-=d,this.lostWalls+=d,this.slow=.25,e.push({type:"wall",lost:d,before:this.balls+d,t:u})}continue}if(!(u.z-pi-(u.kind==="pile"?1.4:0)>this.z||u.z<this.z-2||!["pile","gate","wall","mwall"].includes(u.kind)))if(u.kind==="pile"){if(l&&Math.abs(u.x-this.x)<u.w/2+c){u.done=!0;let d=u.n;this.balls=Math.min(ph,this.balls+d),e.push({type:"scoop",n:d,t:u})}}else if(u.kind==="gate"){if(Math.abs(u.x-this.x)<u.w/2){for(let g of this.things)g.kind==="gate"&&Math.abs(g.z-u.z)<.01&&(g.done=!0);let d=this.balls;this.balls=Ye(Math.round(u.op==="mul"?this.balls*u.v:this.balls+u.v),0,ph),u.hit=!0,e.push({type:"gate",op:u.op,v:u.v,gained:this.balls-d,before:d,t:u})}}else{let d=u.kind==="mwall"?u.x+u.amp*Math.sin(this.time*u.f+u.ph):u.x;if(l&&Math.abs(d-this.x)<u.w/2+1.35){u.done=!0;let g=Math.min(this.balls,Math.max(2,Math.round(this.balls*h(u.loss))));this.balls-=g,this.lostWalls+=g,this.slow=.3,e.push({type:"wall",lost:g,before:this.balls+g,t:u})}}}return this.peak=Math.max(this.peak,this.balls),this.z>=this.L&&(this.state="bank",this.bankPhase="climb",e.push({type:"finish",balls:this.balls})),e}_bank(t,e){this.x+=(0-this.x)*Math.min(1,t*4),this.y=this.groundAt(this.z);let n=(this.groundAt(this.z+1.5)-this.groundAt(this.z-1.5))/3;if(this.pitch+=(-Math.atan(n)-this.pitch)*Math.min(1,t*10),this.z<this.zStop-.03)return this.z+=Math.min(this.speed,Math.max(2.2,(this.zStop-this.z)*1.6))*t,this.z>this.zStop&&(this.z=this.zStop),e;this.bankT===0&&(this.bankPhase="tilt",this.coins=Math.round(this.balls*this.coinRate),e.push({type:"bank",balls:this.balls,coins:this.coins})),this.bankT+=t;let s=Ye((this.bankT-.4)/1.5,0,1);return this.tilt=1.42*(s*s*(3-2*s)),this.bankT>.4&&!this.tilting&&(this.tilting=!0,e.push({type:"tilt"})),this.bankT>=4.4&&(this.state="done",e.push({type:"done",coins:this.coins,stars:this.starsFor()})),e}};function xl(i){let t=0,e=1e9;for(let n of i.things){if(n.done||n.z<i.z+1||n.z-i.z-pi>24)continue;let s=n.z-i.z-pi;if(n.kind==="gate"){let r=i.things.filter(l=>l.kind==="gate"&&Math.abs(l.z-n.z)<.01&&!l.done),a=l=>l.op==="mul"?i.balls*(l.v-1):l.v,o=r.sort((l,c)=>a(c)-a(l))[0];o&&s<e&&(e=s,t=o.x)}else if(n.kind==="pile"&&s<e)e=s,t=n.x;else if((n.kind==="wall"||n.kind==="mwall")&&s<9){let r=(n.kind==="mwall",n.x),a=0,o=-1e9;for(let l=-2.6;l<=2.6;l+=.2){let c=!0;for(let u of i.things)if((u.kind==="wall"||u.kind==="mwall")&&Math.abs(u.z-n.z)<.5){let d=u.kind==="mwall"?0:u.x,g=u.kind==="mwall"?u.w+2*u.amp:u.w;Math.abs(d-l)<g/2+1.55&&(c=!1)}let h=(c?100:0)-Math.abs(l-i.x);h>o&&(o=h,a=l)}t=a,e=0}else n.kind==="spinner"&&s<10&&s<e&&(e=s,t=i.x>0?-2.6:2.6,Math.abs(n.x-t)<1&&(t=n.x+(t>0?2.6:-2.6)),t=Ye(t,-2.6,2.6))}i.steer(t/(ye-1.2))}var Rm=[231,311,275,223,126,159,231,382,457,659,650,463,367,419,355,419,169,514,567,373,751,1069,448,1037,781,491,808,540,530,912],ml=new Map;function Pm(i,t={},e={}){let n=new Qi({level:i,up:t,...e}),s=0;for(;n.state!=="done"&&s<400;)xl(n),n.step(1/30),s+=1/30;return n}function gh(i){var t;return ml.has(i)||ml.set(i,wm(((t=Rm[i])!=null?t:Pm(i).balls*.3)*.75)),ml.get(i)}var mh=(i,t)=>{let e=kr.find(n=>n.id===i);return t>=e.max?null:Math.round(e.base*e.grow**t)};function Ah(i){let t=i&&typeof i=="object"?i:{},e={},n={};for(let r=1;r<=En;r++){let a=Number(t.best&&t.best[r]);a>0&&(e[r]=Math.floor(a));let o=Number(t.stars&&t.stars[r]);o>=1&&(n[r]=Ye(Math.floor(o),1,3))}let s={};for(let r of kr)s[r.id]=Ye(Math.floor(Number(t.up&&t.up[r.id]))||0,0,r.max);return{unlocked:Ye(Math.floor(Number(t.unlocked))||1,1,En),best:e,stars:n,coins:Math.max(0,Math.floor(Number(t.coins))||0),up:s,muted:!!t.muted}}var wn={pivotY:.42,pivotZ:3.1};function Hr(i){let t=Lm(i);for(let e of t)e.cb=Math.cos(e.pitch),e.sb=Math.sin(e.pitch);return t}function Lm(i){let t=i/2,e=Math.atan2(.42,.85);return[{n:"back",c:[0,1.4,.75],h:[t+.2,1.4,.2],pitch:0,grp:!0},{n:"floor",c:[0,.32,2],h:[t,.1,1.1],pitch:0,grp:!0},{n:"lip",c:[0,.15,3.525],h:[t,.06,.475],pitch:e,grp:!0},{n:"left",c:[t+.12,.95,2.325],h:[.15,.95,1.625],pitch:0,grp:!0},{n:"right",c:[-t-.12,.95,2.325],h:[.15,.95,1.625],pitch:0,grp:!0},{n:"cab",c:[0,.85,-.6],h:[1,.85,1.3],pitch:0,grp:!1}]}var Gr=class{constructor(t=900){this.max=t,this.state=new Uint8Array(t),this.x=new Float32Array(t),this.y=new Float32Array(t),this.z=new Float32Array(t),this.vx=new Float32Array(t),this.vy=new Float32Array(t),this.vz=new Float32Array(t),this.col=new Uint8Array(t),this.life=new Float32Array(t),this.pull=new Float32Array(t),this.free=new Int32Array(t),this.freeN=0;for(let e=t-1;e>=0;e--)this.free[this.freeN++]=e;this.head=new Int32Array(48*30*48).fill(-1),this.nxt=new Int32Array(t),this.ic=new Int16Array(t*3),this.pairs=new Int32Array(24e3*2),this.np=0,this.T={x:0,y:0,z:0,yaw:0,pitch:0,tilt:0,tiltRate:0,W:3,vx:0,vy:0,vz:0,magnet:0},this.boxes=Hr(3),this.ground=()=>0,this.statics=[],this.contactGround=new Uint8Array(t),this.tmp={nx:0,ny:0,nz:0,pen:0}}setTruck(t){let e=this.T;t.W!==e.W&&(this.boxes=Hr(t.W)),Object.assign(e,t),e.cy=Math.cos(e.yaw),e.sy=Math.sin(e.yaw),e.cp=Math.cos(e.pitch),e.sp=Math.sin(e.pitch),e.ct=Math.cos(e.tilt),e.st=Math.sin(e.tilt)}get live(){return this.max-this.freeN}spawn(t,e,n,s,r,a,o,l=1){if(!this.freeN)return-1;let c=this.free[--this.freeN];return this.state[c]=l,this.x[c]=t,this.y[c]=e,this.z[c]=n,this.vx[c]=s,this.vy[c]=r,this.vz[c]=a,this.col[c]=o,this.life[c]=0,this.pull[c]=0,c}kill(t){this.state[t]&&(this.state[t]=0,this.free[this.freeN++]=t)}step(t){let e=Math.max(1,Math.min(6,Math.ceil(t/.0085))),n=t/e;for(let s=0;s<e;s++)this._sub(n)}_sub(t){let{x:e,y:n,z:s,vx:r,vy:a,vz:o,state:l,T:c}=this;for(let h=0;h<this.max;h++){let u=l[h];if(!u)continue;this.pull[h]>0&&(this.pull[h]-=t,r[h]+=(c.x-e[h])*(10+c.magnet*7)*t+(c.vx-r[h])*Math.min(1,12*t),o[h]+=(c.vz*.9-o[h])*Math.min(1,4*t)),a[h]-=20*t;let d=1-.25*t;r[h]*=d,a[h]*=d,o[h]*=d,e[h]+=r[h]*t,n[h]+=a[h]*t,s[h]+=o[h]*t,u===2&&(this.life[h]+=t)}this._findPairs();for(let h=0;h<2;h++){this._resolvePairs();for(let u=0;u<this.max;u++)l[u]&&this._collide(u,t)}for(let h=0;h<this.max;h++)if(l[h]===1&&this.contactGround[h]){let u=1-2.2*t;r[h]*=u,o[h]*=u}}_findPairs(){let{x:t,y:e,z:n,state:s,head:r,nxt:a,T:o}=this;r.fill(-1);let l=o.x-48*.4/2,c=o.y-6.8,h=o.z-48*.4/2+4;this._o=[l,c,h];let u=this._idx||(this._idx=new Int32Array(this.max)),d=this.ic;for(let p=0;p<this.max;p++){if(u[p]=-1,s[p]!==1)continue;let f=Math.floor((t[p]-l)/.4),M=Math.floor((e[p]-c)/.4),v=Math.floor((n[p]-h)/.4);if(f<0||M<0||v<0||f>=48||M>=30||v>=48)continue;let x=(M*48+v)*48+f;u[p]=x,d[p*3]=f,d[p*3+1]=M,d[p*3+2]=v,a[p]=r[x],r[x]=p}let g=0,m=(.3+.06)*(.3+.06),A=this.pairs;for(let p=0;p<this.max;p++){if(u[p]<0)continue;let M=d[p*3],v=d[p*3+1],x=d[p*3+2];for(let E=-1;E<=1;E++){let S=v+E;if(!(S<0||S>=30))for(let w=-1;w<=1;w++){let T=x+w;if(!(T<0||T>=48))for(let I=-1;I<=1;I++){let _=M+I;if(!(_<0||_>=48))for(let V=r[(S*48+T)*48+_];V>=0;V=a[V]){if(V<=p)continue;let O=t[V]-t[p],N=e[V]-e[p],q=n[V]-n[p];O*O+N*N+q*q<m&&g<24e3&&(A[g*2]=p,A[g*2+1]=V,g++)}}}}}this.np=g}_resolvePairs(){let{x:t,y:e,z:n,vx:s,vy:r,vz:a,pairs:o}=this;for(let l=0;l<this.np;l++){let c=o[l*2],h=o[l*2+1],u=t[h]-t[c],d=e[h]-e[c],g=n[h]-n[c],m=u*u+d*d+g*g;if(m>=.3*.3)continue;let A=Math.sqrt(m);A<1e-5?(u=0,d=1,g=0,A=1e-5):(u/=A,d/=A,g/=A);let p=(.3-A)*.5*.85;t[c]-=u*p,e[c]-=d*p,n[c]-=g*p,t[h]+=u*p,e[h]+=d*p,n[h]+=g*p;let f=s[h]-s[c],M=r[h]-r[c],v=a[h]-a[c],x=f*u+M*d+v*g;if(x<0){let S=-x*.5*1.08;s[c]-=u*S,r[c]-=d*S,a[c]-=g*S,s[h]+=u*S,r[h]+=d*S,a[h]+=g*S}let E=.02;s[c]+=f*E,r[c]+=M*E,a[c]+=v*E,s[h]-=f*E,r[h]-=M*E,a[h]-=v*E}}_bounce(t,e,n,s,r,a,o,l,c){let{vx:h,vy:u,vz:d}=this,g=h[t]-r,m=u[t]-a,A=d[t]-o,p=g*e+m*n+A*s;if(p<0){let M=-(1+(p<-3?.32:0))*p;h[t]+=e*M,u[t]+=n*M,d[t]+=s*M;let v=Math.min(1,c*l),x=g-p*e,E=m-p*n,S=A-p*s;h[t]-=x*v,u[t]-=E*v,d[t]-=S*v}}_collide(t,e){let{x:n,y:s,z:r,state:a,T:o}=this;this.contactGround[t]=0;let l=this.ground(n[t],r[t]);if(s[t]-.15<l){let h=(this.ground(n[t],r[t]+.2)-this.ground(n[t],r[t]-.2))/.4,u=Math.max(-1.5,Math.min(1.5,h)),d=1/Math.sqrt(1+u*u);s[t]=l+.15,this._bounce(t,0,d,-u*d,0,0,0,e,0),this.contactGround[t]=1}for(let c of this.statics){let h=Math.max(c.a[0],Math.min(c.b[0],n[t])),u=Math.max(c.a[1],Math.min(c.b[1],s[t])),d=Math.max(c.a[2],Math.min(c.b[2],r[t])),g=n[t]-h,m=s[t]-u,A=r[t]-d,p=g*g+m*m+A*A;if(!(p>=.15*.15)){if(p>1e-9){let f=Math.sqrt(p);g/=f,m/=f,A/=f,n[t]+=g*(.15-f),s[t]+=m*(.15-f),r[t]+=A*(.15-f)}else{let f=[n[t]-c.a[0],c.b[0]-n[t],s[t]-c.a[1],c.b[1]-s[t],r[t]-c.a[2],c.b[2]-r[t]],M=0;for(let x=1;x<6;x++)f[x]<f[M]&&(M=x);g=m=A=0;let v=M%2?1:-1;M<2?g=v:M<4?m=v:A=v,n[t]+=g*(f[M]+.15),s[t]+=m*(f[M]+.15),r[t]+=A*(f[M]+.15)}this._bounce(t,g,m,A,0,0,0,e,3)}}this._truck(t,e),a[t]===2&&s[t]<-30&&this.kill(t)}_truck(t,e){let{x:n,y:s,z:r,T:a}=this,o=n[t]-a.x,l=s[t]-a.y,c=r[t]-a.z;if(o*o+c*c>49||l>12||l<-8)return;let h=o*a.cy-c*a.sy,u=o*a.sy+c*a.cy,d=l,g=d*a.cp+u*a.sp,m=u*a.cp-d*a.sp;if(d=g,u=m,Math.abs(h)>a.W/2+1.5||u<-3.5||u>5.6||d>8||d<-1.2)return;let A=d-wn.pivotY,p=u-wn.pivotZ,f=wn.pivotY+A*a.ct+p*a.st,M=wn.pivotZ+p*a.ct-A*a.st;for(let v of this.boxes){let x=h,E=v.grp?f:d,S=v.grp?M:u,w=E-v.c[1],T=S-v.c[2],I=v.cb,_=v.sb,V=w*I+T*_,O=T*I-w*_,N=x-v.c[0],q=Math.max(-v.h[0],Math.min(v.h[0],N)),H=Math.max(-v.h[1],Math.min(v.h[1],V)),F=Math.max(-v.h[2],Math.min(v.h[2],O)),K=N-q,G=V-H,et=O-F,ot=K*K+G*G+et*et;if(ot>=.15*.15)continue;let gt;if(ot>1e-9){let Gt=Math.sqrt(ot);K/=Gt,G/=Gt,et/=Gt,gt=.15-Gt}else{let Gt=[v.h[0]-N,v.h[0]+N,v.h[1]-V,v.h[1]+V,v.h[2]-O,v.h[2]+O],R=0;for(let Ft=1;Ft<6;Ft++)Gt[Ft]<Gt[R]&&(R=Ft);K=G=et=0;let be=R%2===0?1:-1;R<2?K=be:R<4?G=be:et=be,gt=Gt[R]+.15}let Vt=G*I-et*_,Ot=et*I+G*_,X=K;if(v.grp){let Gt=Vt*a.ct-Ot*a.st,R=Ot*a.ct+Vt*a.st;Vt=Gt,Ot=R}let Q=Vt*a.cp-Ot*a.sp,pt=Ot*a.cp+Vt*a.sp,nt=X*a.cy+pt*a.sy,It=-X*a.sy+pt*a.cy,wt=Q;n[t]+=nt*gt,s[t]+=wt*gt,r[t]+=It*gt;let Pt=a.vx,te=a.vy,kt=a.vz;if(v.grp&&a.tiltRate){let Gt=-p*a.tiltRate,R=A*a.tiltRate;te+=Gt,kt+=R*1}this._bounce(t,nt,wt,It,Pt,te,kt,e,5),h+=0}}toLocal(t,e,n,s){let r=this.T,a=t-r.x,o=e-r.y,l=n-r.z,c=a*r.cy-l*r.sy,h=a*r.sy+l*r.cy;return s[0]=c,s[1]=o*r.cp+h*r.sp,s[2]=h*r.cp-o*r.sp,s}fromLocal(t,e,n,s){let r=this.T,a=e*r.cp-n*r.sp,o=n*r.cp+e*r.sp;return s[0]=r.x+t*r.cy+o*r.sy,s[1]=r.y+a,s[2]=r.z-t*r.sy+o*r.cy,s}};var Dm=i=>Math.min(560,Math.round(i*100)),Vn=Ie;function vl(i){let t=2*.15*1.06,e=1;for(;e*(e+1)*(2*e+1)/6<i;)e++;let n=[];for(let s=0;s<e&&n.length<i;s++){let r=e-s;for(let a=0;a<r;a++)for(let o=0;o<r&&!(n.length>=i);o++)n.push({dx:(a-(r-1)/2)*t,dz:(o-(r-1)/2)*t,y:.15+s*t*.84})}return n}var Wr=45,qr=class{constructor(){this.w=new Gr(900),this.stats={spilled:0,ejected:0,ms:0,frames:0,maxLive:0}}begin(t){let e=this.w;for(let a=0;a<e.max;a++)e.kill(a);this.run=t,this.cap=Dm(t.W),this.lossAcc=0,this.spillRecent=0,this.banked=0,this.bankStart=0,this.prev=null,e.ground=(a,o)=>o>t.zEdge&&o<t.zEdge+Vn.pitLen&&Math.abs(a)<Vn.pitHalf?Vn.pitY:t.groundAt(o);let n=t.zEdge,s=Vn.pitHalf,r=Vn.pitY;e.statics=[{a:[s,r-2,n],b:[s+1.2,7,n+Vn.pitLen+1.2]},{a:[-s-1.2,r-2,n],b:[-s,7,n+Vn.pitLen+1.2]},{a:[-s-1.2,r-2,n+Vn.pitLen],b:[s+1.2,7,n+Vn.pitLen+1.2]},{a:[-s-1.2,r-2,n-3],b:[s+1.2,Ie.h,n-.02]}],this.updateTruck(1/60,!0)}updateTruck(t,e){let n=this.run,s=this.w.T,r=-n.gx,a=this.prev,o=0,l=0,c=e?n.speed:0;a&&!e&&(o=(r-a.x)/t,l=(n.y-a.y)/t,c=(n.z-a.z)/t,o=s.vx+(o-s.vx)*.6,l=s.vy+(l-s.vy)*.6);let h=c>1?Math.atan2(o,Math.max(c,1)):0,u=(s.yaw||0)+(Math.max(-.2,Math.min(.2,h*.4))-(s.yaw||0))*Math.min(1,t*8),d=n.tilt||0,g=a?(d-a.tilt)/t:0;this.prev={x:r,y:n.y,z:n.z,tilt:d},this.w.setTruck({x:r,y:n.y,z:n.z,yaw:u,pitch:n.pitch,tilt:d,tiltRate:e?0:g,W:n.W,vx:o,vy:l,vz:c,magnet:n.up.magnet})}get live(){let t=0,{state:e}=this.w;for(let n=0;n<e.length;n++)e[n]===1&&t++;return t}get weight(){let t=this.live;return t>0&&this.run.balls>t?this.run.balls/t:1}_local(t,e,n){let s=[0,0,0];return this.w.fromLocal(t,e,n,s)}_topY(){let t=1,{state:e,y:n}=this.w;for(let s=0;s<e.length;s++)e[s]===1&&n[s]>t&&(t=n[s]);return t}_rain(t){let e=this.w,n=e.T,s=n.W,r=Math.min(Math.max(this._topY()-n.y,.9)+.45,2.1);for(let a=0;a<t;a++){let o=this._local((Math.random()-.5)*(s-.7),r+Math.random()*.9,1.5+Math.random()*1.4);e.spawn(o[0],o[1],o[2],n.vx,n.vy,n.vz,Math.random()*6|0,1)}}_scoop(t,e){let n=this.w,s=this.run,r=n.T,a=t.t,o=Math.min(t.n,e),l=vl(Math.min(t.n,Wr)),c=s.centerAt(a.z)+a.x,h=n.toLocal(-c,0,a.z,[0,0,0])[0],u=l.reduce((g,m)=>Math.max(g,Math.abs(m.dx)),0),d=Math.max(0,r.W/2-.35-u);for(let g=0;g<o;g++)if(g<l.length){let m=l[g],A=-(c+m.dx),p=a.z+m.dz,f=n.toLocal(A,n.ground(A,p)+m.y,p,[0,0,0]);f[0]=f[0]-h+Math.max(-d,Math.min(d,h));let M=n.fromLocal(f[0],f[1],f[2],[0,0,0]),v=n.spawn(M[0],M[1],M[2],r.vx,0,r.vz*.7,(a.id+g)%6,1);v>=0&&(n.pull[v]=1)}else{let m=-(c+(Math.random()-.5)*1.2),A=a.z+(Math.random()-.5)*1.2,p=n.spawn(m,2.2+Math.random()*1.5,A,r.vx*.3,0,r.vz*.5,Math.random()*6|0,1);p>=0&&(n.pull[p]=1)}}_eject(t,e=1){let n=this.w,s=n.T,r=[];for(let a=0;a<n.max;a++)n.state[a]===1&&r.push(a);r.sort((a,o)=>n.y[o]-n.y[a]),t=Math.min(t,r.length);for(let a=0;a<t;a++){let o=r[a];n.state[o]=2,n.life[o]=0,n.vx[o]+=(Math.random()-.5)*11*e,n.vy[o]+=(4+Math.random()*5)*e,n.vz[o]+=(Math.random()-.3)*6*e}return this.stats.ejected+=t,t}_kick(t,e=0){let n=this.w;for(let s=0;s<n.max;s++)n.state[s]===1&&(n.vy[s]+=t*(.6+Math.random()*.8),n.vz[s]+=e*(Math.random()-.4))}update(t,e){let n=typeof performance!="undefined"?performance.now():0,s=this.run,r=this.w;this.updateTruck(t);let a=this.live;for(let h of e)if(h.type==="scoop")this._scoop(h,Math.max(0,Math.min(s.balls,this.cap)-this.live));else if(h.type==="wall"||h.type==="gate"&&h.gained<0){let u=h.type==="wall"?h.lost:-h.gained,d=h.before||s.balls+u,g=Math.max(1,Math.round(this.live*u/Math.max(1,d)));this._eject(Math.min(g,this.live),h.type==="wall"?1.15:.8),h.type==="wall"&&this._kick(3.2,2)}else h.type==="bump"||h.type==="land"?this._kick(h.type==="land"?2.4:1.6):h.type==="jump"&&this._kick(1.5);let o=Math.min(s.balls,this.cap),l=this.live;l>o?this._eject(l-o,.6):l<o&&s.state==="run"&&this._rain(Math.min(o-l,10)),r.step(t),this._spills();for(let h=0;h<r.max;h++)r.state[h]===2&&(r.life[h]>1.6||r.y[h]<-20)&&r.kill(h);let c=this.stats;c.frames++,c.ms+=(typeof performance!="undefined"?performance.now():0)-n,c.maxLive=Math.max(c.maxLive,this.live)}_spills(){let t=this.w,e=this.run,n=t.T;if(e.state==="bank"||e.state==="done"){let l=0;for(let c=0;c<t.max;c++)t.state[c]===1&&t.z[c]>e.zEdge+.4&&l++;e.tilt>.05&&!this.bankStart&&(this.bankStart=Math.max(1,this.live)),this.banked=l;return}let s=[0,0,0],r=n.W/2+.5,a=0,o=this.weight;for(let l=0;l<t.max;l++)if(t.state[l]===1&&(t.toLocal(t.x[l],t.y[l],t.z[l],s),Math.abs(s[0])>(s[2]>3.3?r+1.4:r)||s[2]>8||s[2]<-.4||s[1]<-.9)){t.state[l]=2,t.life[l]=.3,a++;let c=Math.abs(s[0])>r?"side":s[2]>8?"front":s[2]<-.4?"back":"low";this.stats[c]=(this.stats[c]||0)+1,this.dbg&&this.dbg.length<400&&this.dbg.push([c,+e.time.toFixed(2),...s.map(h=>+h.toFixed(2)),+t.vx[l].toFixed(1),+t.T.vx.toFixed(1),e.balls])}if(a){this.lossAcc+=a*o;let l=Math.floor(this.lossAcc+1e-9);this.lossAcc-=l,e.lose(l),this.stats.spilled+=a,this.spillRecent+=l}}};function xh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function vh(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Ch={scoop:"data:audio/mpeg;base64,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",pour:"data:audio/mpeg;base64,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//AwUqvMFQbkVvRjdNTNONmmt7KMrFMBs1SPIucw5OQg9jvDUvcke0jzmf38LFBYTzSaXmobUbf//85q7UDiTTmqe/EDogTVAGAAAIzNqXFLjHVAa7zOUSJSxIkS00FAKzQlHKrXqqqv+9VrzLHEsOJJb5nPMzn///av5nXmZ7VWVVf///zMscSwGj3Ep1R4t/8Szv4NDAaVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEj4AKVJseVPSAAV4ap/cSsABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEm4PKCOzrHDMAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",bank:"data:audio/mpeg;base64,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",wall:"data:audio/mpeg;base64,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IYORmXrJKnm0U963afu7usQACDAArO96K4DWrc20mp1Ly7E1hQ06mjEI1fN3AewkZNEZOIR7hfDETEdw5kHeeEbGHHO5iSI9WdT4nCBKD3E/GDMi8bLMSRrrd8smBsZmZcHoZGyWqpr6754vm5uaFw0L5fUktFqT0WXt76UwLiBfM3LhoyaaZpU/q6u2tTI719BAvm8wNKb/+zjEtQMJUNUYTKRBAROao0mEiChfAgIbftVMQU1FMy4xMDBVVVVVVVUqasVCoIhklpEKibEQqJmtirGFARJ3UDT0Q11A0/O/6zqjxZ/9R7iX/R/6jyj0Sw1/gr56VUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEzoAKSNkSFYQAAjUt48sw0ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEuIPGmCzuXJEAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",win:"data:audio/mpeg;base64,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pDkBMKqIXYHU34TJkyqc4M+M7vhGb3CZeomFrqVx8ZeNHqNkjhOzYgLZTlkPKq9NSOOPUWM5RMWtKE3ijKpmvYYomebXdCl1LMxU1/olPq3/+zjE7QANiX8Ox6SnyUovYgzyibHHEqiUza0F6qchcE3UzOk0LUO04aGe30ED8HlI0BN+MeRHY0RItYMlgPeslFgW53V8S+5udPGhH+r/V3Ar7E82FOQ99us56CbO1B9Hxa5Wq+L077u92wdNmMqFKeh8bMcrhxAwRQSfgkVq2sGfv+TnZu8K+ecEghuAonQkJ8Ig8POOeAelWRI60kPMF5T3qiYIRpquENZnZz3Iz3SrZTZ3qWpNB8AaCbRMJpwv5+C4lrTWdDPVyuh1lY89Faru3moo7zP/+zjE7wMOLY8SZhhzwVguYoj0FWHRfw+rUR7B0WAEAZtxomhTe4TQc0gU1N84e11fSHP05BvdnQ9Poo6Gg6ydp4oSGnHMW89kNONPnXlrc3k2saXrwKs604wu2KqVC4jcyJxlOtUN64qj21qgucdjtreYifYlvL9agRKM9849KNt9wP4DzV7//NKfP///9NfX+c33rGqUvfed299+9K7/+M3zf/H/kreemv+9szw6/BEXFIZHbLJfNRICgAAMOFnCYlCw3+RtuqDAIHntp8qWEXFigR84whz/+zjE7IMNSXEMR5xzyXclYkjDCXlB7R47ESkG2AGS+pyO1UiC1v0MFgLuFUWMFK/j/VJkMo/Wx2FgFlBanMSIsYDq/fx6f/lWtlwHkGAcDxTqVGnM3OZyyxP////2er+O63SAwTJ77pBkfsUN1//////8336a//x/BpGhT1rrMK+oP/hi8MdwqAXEWuwAAAAFgmD3FVnFgsCTKxETItVIRSKqqpRmUtmagICeBUNVhqeKv6w1lX7lgq4RPLHvwV5Y9wV/wV5Y9wV5YOf8FUxBTUUzLjEwMKr/+zjE6gAK0YkUZJhGykouI2qY8AGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE1wAT8Tk7uYeAAQYJImuSMACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",jump:"data:audio/mpeg;base64,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bi///K2rW/+t03lMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE3YMH0KEYRaRIQXsaYwqekABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8AAWfWsWOZwAGAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var Nm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",ze=null,Cl=!1;function _h(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function yh(){_h(),Cl=!0;try{if(ze||(ze=document.createElement("audio"),ze.src=Nm,ze.loop=!0,ze.preload="auto",ze.setAttribute("playsinline",""),ze.setAttribute("webkit-playsinline",""),ze.setAttribute("x-webkit-airplay","deny"),ze.volume=.01,ze.addEventListener("pause",()=>{Cl&&!document.hidden&&setTimeout(()=>Cl&&ze.paused&&ze.play().catch(()=>{}),300)})),ze.paused){let i=ze.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Ih(i,t){_h();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var gi=i=>440*Math.pow(2,(i-69)/12),Xr=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(yh(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Ih(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=s,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.value=e;let h=l.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05)}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",gi(l),a,c*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var $i=class extends Xr{play(t,e){typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t);let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let s=n.currentTime;switch(t){case"scoop":this.noise(s,.12,.08,"bandpass",1800,2),this.tone("triangle",gi(84+Math.min(12,Math.floor((e||10)/10))),s,.1,.06);break;case"gate+":[0,4,7].forEach((r,a)=>this.tone("triangle",gi(76+r),s+a*.05,.2,.12));break;case"gatex":[0,7,12,16].forEach((r,a)=>this.tone("triangle",gi(79+r),s+a*.05,.25,.13));break;case"gate-":this.slide("sawtooth",400,120,s,.3,.08);break;case"wall":this.noise(s,.3,.14,"lowpass",600),this.tone("sine",90,s,.3,.14);break;case"bank":for(let r=0;r<12;r++)this.tone("square",gi(84+r%5*2),s+r*.07,.08,.05);break;case"win":[0,4,7,12,16,19,24].forEach((r,a)=>this.tone("triangle",gi(72+r),s+a*.1,.6,.14));break;case"jump":this.slide("triangle",300,700,s,.2,.08);break;case"land":this.noise(s,.15,.1,"lowpass",500),this.tone("sine",110,s,.15,.1);break;case"spin":this.noise(s,.25,.1,"highpass",1500,1),this.tone("square",180,s,.2,.06);break;case"pour":this.noise(s,.12,.06,"bandpass",2600+Math.random()*1200,3);break;case"tilt":this.slide("sawtooth",120,220,s,.9,.05);break;case"tap":this.tone("sine",640,s,.06,.08);break;default:break}}setMode(t){if(!t){this.setBed(null),this.setTune(null),this.stopEng();return}this._eng(),this.setTune({tempo:120,beats:16,wave:"square",vol:.045,notes:[[0,60,1],[1,64,1],[2,67,1],[3,64,1],[4,62,1],[5,65,1],[6,69,1],[7,65,1],[8,60,1],[9,64,1],[10,67,2],[12,65,1],[13,62,1],[14,60,2],[0,36,2],[4,38,2],[8,36,2],[12,41,2]]})}_eng(){let t=this.ctx;if(!t||this.e)return;let e=t.createOscillator();e.type="sawtooth",e.frequency.value=55;let n=t.createBiquadFilter();n.frequency.value=300;let s=t.createGain();s.gain.value=this.muted?1e-4:.03,e.connect(n).connect(s).connect(this.sfx),e.start(),this.e={o:e,g:s}}stopEng(){if(this.e){try{this.e.o.stop()}catch{}this.e=null}}};xh($i,Ch);vh($i);var Yr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ge=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zm=new Yi(-1,1,1,-1,0,1),_l=class extends Ae{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}},Fm=new _l,Kn=class{constructor(t){this._mesh=new de(Fm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ts=class extends Ge{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof fe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Zn.clone(t.uniforms),this.material=new fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Kn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ss=class extends Ge{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Zr=class extends Ge{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var jr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new yt);this._width=n.width,this._height=n.height,e=new Ue(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ts(Yr),this.copyPass.material.blending=hn,this.clock=new Dr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ss!==void 0&&(a instanceof Ss?n=!0:a instanceof Zr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Kr=class extends Ge{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Mh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var es=class i extends Ge{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ue(r,a,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ue(r,a,{type:sn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let g=new Ue(r,a,{type:sn});g.texture.name="UnrealBloomPass.v"+u,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),a=Math.round(a/2)}let o=Mh;this.highPassUniforms=Zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Yr;this.copyUniforms=Zn.clone(h.uniforms),this.blendMaterial=new fe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Oi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new Xe,this.fsQuad=new Kn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new yt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new fe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new fe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};es.BlurDirectionX=new yt(1,0);es.BlurDirectionY=new yt(0,1);var bh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Jr=class extends Ge{constructor(){super();let t=bh;this.uniforms=Zn.clone(t.uniforms),this.material=new Vr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===el?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===il&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},Bm={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},Om={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function km(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new Ae;l.setAttribute("position",new ge(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new Sn(c);d.colorSpace=ue;let g=new ui({map:d,color:Om[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Oi,fog:!1,sizeAttenuation:!0}),m=new Xn(l,g);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function Hm(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var Eh={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},Gm=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,qm=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,Wm={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},wh={};typeof window!="undefined"&&(window.__cheerSfx=i=>{let t=Wm[i];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(wh[t]||-1e9)<n||(wh[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function Xm(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=p=>{if(!n[p]){let f=new Audio(`${e}${p}_${t}.mp3`);f.preload="auto",f.volume=.95,n[p]=f}return n[p]},u=(p,f)=>{let M=performance.now();if(!f&&M-r<6e3||c)return;let v=p+(1+Math.floor(Math.random()*Eh[p])),x=h(v);c=!0,r=M,x.currentTime=0;let E=()=>{c=!1};x.onended=E,x.onerror=E;let S=x.play();S&&S.catch&&S.catch(E),setTimeout(E,4e3)};window.__cheer=(p,f)=>{Eh[p]&&(o=!0,u(p,!!f))};let d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let p=s.createOscillator(),f=s.createGain();p.type="sine",p.frequency.setValueAtTime(520,s.currentTime),p.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),f.gain.setValueAtTime(.08,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),p.connect(f),f.connect(s.destination),p.start(),p.stop(s.currentTime+.13)}catch{}},g=()=>{a=performance.now(),d(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",g,{passive:!0}),window.addEventListener("keydown",g,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let p=(i.innerText||"").slice(0,600);p!==m&&(m=p,Gm.test(p)?u("win",!1):qm.test(p)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let p=performance.now();!o||document.hidden||(p-a>14e3?(u("idle",!1),a=p-4e3):p-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function Vh(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},Sh[e.get("look")||t.preset||"warm"]||Sh.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,g=0,m=0,A=0,p=!1,f=performance.now();function M(v,x){let E=i.getSize(new yt);g=E.x,m=E.y,A=i.getPixelRatio(),c=new jr(i),c.setPixelRatio(A),c.setSize(g,m),h=new Kr(v,x),c.addPass(h),s||(u=new es(new yt(Math.max(2,g>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Jr),d=new ts(Bm),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(v,x){if(p||i.getRenderTarget()!==null||i.autoClear===!1||!v||!x||!v.isScene)return a(v,x);try{c||M(v,x);let E=i.getSize(new yt),S=i.getPixelRatio();(E.x!==g||E.y!==m||S!==A)&&(g=E.x,m=E.y,A=S,c.setPixelRatio(S),c.setSize(g,m),u&&u.resolution.set(Math.max(2,g>>1),Math.max(2,m>>1))),h.scene=v,h.camera=x,d.uniforms.time.value=(performance.now()-f)/1e3;let w=performance.now(),T=Math.min(.1,Math.max(0,(w-l)/1e3));if(l=w,!e.has("nomotes")&&t.motes!==!1){let I=o.get(v);I||(I=km(v,x,e.get("look")||t.preset||"warm",r),o.set(v,I)),Hm(I,x,T)}p=!0,c.render(),p=!1}catch(E){p=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",E&&E.message),i.render=a,a(v,x)}},!e.has("nocheer")&&!r&&setTimeout(()=>Xm(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var Es=null;function Ym(){if(Es)return Es;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Es=new Sn(i),Es.colorSpace=ue,Es}var Qr=class{constructor(t,e=400){this.max=e,this.items=[],this.scene=t,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.siz=new Float32Array(e);let n=new Ae;n.setAttribute("position",new ge(this.pos,3)),n.setAttribute("color",new ge(this.col,3)),n.setAttribute("size",new ge(this.siz,1));let s=new fe({transparent:!0,depthWrite:!1,blending:On,vertexColors:!0,uniforms:{map:{value:Ym()},scale:{value:300}},vertexShader:"attribute float size; varying vec3 vC; uniform float scale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ vec4 t = texture2D(map, gl_PointCoord); if (t.a < 0.02) discard; gl_FragColor = vec4(vC * (0.8 + t.a * 0.6), t.a); }"});this.points=new Xn(n,s),this.points.frustumCulled=!1,this.points.renderOrder=998,t.add(this.points),this.geo=n}burst(t,e={}){let n=e.n||14,s=new _t(e.color||16765498),r=e.speed||4,a=e.life||.6;for(let o=0;o<n;o++){this.items.length>=this.max&&this.items.shift();let l=Math.random()*Math.PI*2,c=e.up!=null?e.up:Math.random()-.3,h=Math.random()*r,u=e.colors?new _t(e.colors[o%e.colors.length]):s;this.items.push({x:t.x,y:t.y,z:t.z,vx:Math.cos(l)*h*(e.flat?1:.8),vy:c*r*.8+(e.lift||0),vz:Math.sin(l)*h*(e.flat?1:.8)+(e.vz||0),life:a,max:a*(.7+Math.random()*.6),r:u.r,g:u.g,b:u.b,s:(e.size||.3)*(.6+Math.random()*.8),grav:e.gravity!=null?e.gravity:6})}}update(t){let e=this.items,n=0;for(let s=0;s<e.length;s++){let r=e[s];if(r.life-=t,r.life<=0)continue;r.vy-=r.grav*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t;let a=Math.min(1,r.life/r.max);this.pos[n*3]=r.x,this.pos[n*3+1]=r.y,this.pos[n*3+2]=r.z,this.col[n*3]=r.r,this.col[n*3+1]=r.g,this.col[n*3+2]=r.b,this.siz[n]=r.s*(.3+a),e[n]=r,n++}e.length=n;for(let s=n;s<this.max;s++)this.siz[s]=0;this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}setViewportScale(t){this.points.material.uniforms.scale.value=t*.9}};function $r(i,t=2759226,e=.06){let n=$r._m||($r._m=new Map),s=n.get(t);s||(s=new Xe({color:t,side:_e,fog:!1}),n.set(t,s));let r=[];i.traverse(a=>{a.isMesh&&!a.userData.__ol&&a.geometry&&a.material&&!a.material.transparent&&a.material.opacity!==0&&r.push(a)});for(let a of r){let o=new de(a.geometry,s);o.userData.__ol=!0,o.scale.setScalar(1+e),o.renderOrder=-1,a.add(o)}return i}var Ph={title:["\u0634\u0627\u062D\u0646\u0629 \u0639\u0645\u0648\u0631\u0629","Amoora's Truck"],exit:["\u062E\u0631\u0648\u062C","Exit"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],again:["\u062A\u0627\u0646\u064A","Again"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next level"],level:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629","LEVEL"],goal:["\u0627\u0644\u0647\u062F\u0641","GOAL"],play:["\u064A\u0644\u0627 \u0646\u0644\u0639\u0628","Play"],levels:["\u0627\u0644\u0645\u0631\u0627\u062D\u0644","Levels"],how:["\u0627\u0633\u062D\u0628 \u064A\u0645\u064A\u0646 \u0648\u0634\u0645\u0627\u0644 \u2014 \u062C\u0645\u0651\u0639 \u0627\u0644\u0643\u0648\u0631\u060C \u0627\u0639\u062F\u0651\u064A \u0645\u0646 \u0627\u0644\u0628\u0648\u0627\u0628\u0627\u062A\u060C \u0648\u0627\u062A\u0641\u0627\u062F\u0649 \u0627\u0644\u062D\u064A\u0637\u0627\u0646","Drag left and right: scoop balls, pass gates, dodge walls"],bank:["\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0643\u0628\u064A\u0631","The giant bank"],coins:["\u0639\u0645\u0644\u0627\u062A","coins"],shop:["\u0627\u0644\u0645\u062A\u062C\u0631","Shop"],max:["\u0623\u0642\u0635\u0649","MAX"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the level before"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],balls:["\u0643\u0648\u0631","balls"],best:["\u0623\u062D\u0633\u0646","Best"],hitWall:["\u0627\u0644\u062D\u064A\u0637\u0629 \u0648\u0642\u0651\u0639\u062A \u0643\u0648\u0631!","The wall knocked balls out!"],buy:["\u0627\u0634\u062A\u0631\u064A","Buy"],back:["\u0631\u062C\u0648\u0639","Back"],banked:["\u0641\u064A \u0627\u0644\u0628\u0646\u0643","In the bank"],meadow:["\u0627\u0644\u0645\u0631\u062C","Meadow"],desert:["\u0627\u0644\u0635\u062D\u0631\u0627\u0621","Desert"],snow:["\u0627\u0644\u062B\u0644\u062C","Snow"],candy:["\u0627\u0644\u062D\u0644\u0648\u0649","Candy"],space:["\u0627\u0644\u0641\u0636\u0627\u0621","Space"],start:["\u0643\u0648\u0631 \u0628\u062F\u0627\u064A\u0629","Start balls"],wide:["\u0645\u062C\u0631\u0641\u0629 \u0623\u0639\u0631\u0636","Wider shovel"],coin:["\u0639\u0645\u0644\u0627\u062A \u0623\u0643\u062A\u0631","Coin value"],magnet:["\u0645\u063A\u0646\u0627\u0637\u064A\u0633","Magnet range"],armor:["\u062F\u0631\u0639 \u0644\u0644\u062D\u064A\u0637\u0627\u0646","Wall armour"]},bt=uh(Ph),yl=[16730730,4897023,16765498,5959818,12086015,16747050],Il={meadow:{sky:7329992,ground:5228732,road:14721116,stripe:13142600,ra:16730698,rb:16773360,icon:"\u{1F30A}",prop:"tree",c1:15399158,c2:16777215},desert:{sky:16767392,ground:15253616,road:12093786,stripe:13146728,ra:16747050,rb:16773312,icon:"\u{1F335}",prop:"cactus",c1:3840586,c2:4896858},snow:{sky:14216447,ground:16055039,road:10137800,stripe:11453144,ra:4897023,rb:16777215,icon:"\u2744\uFE0F",prop:"pine",c1:6965802,c2:2787930},candy:{sky:16763112,ground:16751312,road:13144319,stripe:14199039,ra:16730778,rb:8060880,icon:"\u{1F36D}",prop:"lolli",c1:16777215,c2:16730762},space:{sky:1313336,ground:1841738,road:3816056,stripe:5000348,ra:3866623,rb:16730879,icon:"\u{1F680}",prop:"crystal",c1:6966015,c2:4915152}},Bt={sphere:new Is(1,8,6),low:new Is(1,6,4),cyl:new Zi(.5,.5,1,12),box:new hi(1,1,1),cone:new wr(.5,1,8)},Ml=new Map,ne=(i,t=0)=>{let e=`${i}|${t}`;return Ml.has(e)||Ml.set(e,new Yn({color:i,emissive:t})),Ml.get(e)};function $t(i,t,e,n,s,r=1,a=1,o=1){let l=new de(i,t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}var ns=new Map;function Zm(i,t,e="#fff"){let n=`${i}|${t}|${e}`;if(ns.has(n))return ns.get(n);let s=document.createElement("canvas");s.width=256,s.height=128;let r=s.getContext("2d");t&&(r.fillStyle=t,r.beginPath(),r.roundRect?r.roundRect(6,6,244,116,28):r.rect(6,6,244,116),r.fill(),r.strokeStyle="#fff",r.lineWidth=7,r.stroke()),r.fillStyle=e,r.font="900 78px Tajawal, system-ui, sans-serif";let a=r.measureText(i).width;a>220&&(r.font=`900 ${Math.floor(78*220/a)}px Tajawal, system-ui, sans-serif`),r.textAlign="center",r.textBaseline="middle",r.strokeStyle="rgba(0,0,0,.6)",r.lineWidth=9,r.strokeText(i,128,68),r.fillText(i,128,68);let o=new Sn(s);return o.colorSpace=ue,ns.set(n,o),o}function Th(i,t,e,n){let s=new Sr(new ys({map:Zm(i,t),transparent:!0,depthTest:!1}));return s.scale.set(e,n,1),s.renderOrder=10,s}function jm(){if(ns.has("chev"))return ns.get("chev");let i=document.createElement("canvas");i.width=64,i.height=64;let t=i.getContext("2d");t.fillStyle="#3a3a48",t.fillRect(0,0,64,64),t.strokeStyle="#ffd23a",t.lineWidth=8,t.beginPath(),t.moveTo(8,50),t.lineTo(32,24),t.lineTo(56,50),t.stroke();let e=new Sn(i);return e.wrapS=e.wrapT=As,e.colorSpace=ue,ns.set("chev",e),e}function Rh(i){let t=new Pe,e=new Pe;t.add(e),e.add($t(Bt.box,ne(16762922),0,.85,-.6,2,1.2,2.6)),e.add($t(Bt.box,ne(2767434,1056816),0,1.75,-1,1.6,.8,1.3)),e.add($t(Bt.box,ne(16762922),0,2.2,-1,1.7,.12,1.4));for(let r of[-1.1,1.1])for(let a of[.2,-1.5])e.add($t(Bt.cyl,ne(1710622),r,.5,a,1,.55,1).rotateZ(Math.PI/2));e.add($t(Bt.box,ne(16730698),.7,.95,.72,.3,.2,.05),$t(Bt.box,ne(16730698),-.7,.95,.72,.3,.2,.05));let n=new Pe;n.position.set(0,wn.pivotY,wn.pivotZ),t.add(n);let s=new Pe;s.position.set(0,-wn.pivotY,-wn.pivotZ),n.add(s);for(let r of Hr(i)){if(!r.grp)continue;let o=r.n==="back"?new Yn({color:13625599,transparent:!0,opacity:.25,depthWrite:!1}):ne(r.n==="lip"?16762922:r.n==="floor"?9080472:15263982),l=$t(Bt.box,o,r.c[0],r.c[1],r.c[2],r.h[0]*2,r.h[1]*2,r.h[2]*2);l.rotation.x=r.pitch,s.add(l)}return t.userData={tilt:n,body:e},t}var bl=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),bt.setLang(e.lang),bt.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.save=Ah(e.save),this.base=e.base||"./",this.sound=new $i,this.sound.muted=!!this.save.muted,document.getElementById("bs-style")||document.head.append(it("style",{id:"bs-style"},dh("bs","#ffa82a","#a85a10","#fff0a0")+Km)),this.root=it("div",{class:"bs-root",dir:bt.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=it("div",{class:"bs-layer"}),this.mode="menu",this.clock=0,this.fx=[],this.page=0,this.dispCount=0,this.perfT=[],this.robot=!1,this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this.pile=new qr,this._fonts().then(()=>{this.page=Math.min(4,Math.floor((this.save.unlocked-1)/6)),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){this.renderer=Vh(new yr({antialias:!0}),{preset:"warm"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=ue,this.root.prepend(this.renderer.domElement),this.scene=new Mr,this.scene.background=new _t(10477823),this.scene.fog=new Ir(10477823,45,140),this.camera=new Re(60,1,.3,420),this.hemi=new Lr(16777215,14198888,1.7),this.scene.add(this.hemi);let t=new Ur(16777215,1.1);t.position.set(-10,30,-10),this.scene.add(t),this.world=new Pe,this.scene.add(this.world),this.vfx=new Qr(this.scene,500),this.balls=new en(Bt.sphere,new Ms({color:16777215,shininess:70,specular:5592405}),900),this.balls.frustumCulled=!1,this.balls.instanceMatrix.setUsage(eh),this.scene.add(this.balls),this.colSeen=new Int8Array(900).fill(-1);let e=new _t;for(let n=0;n<900;n++)this.balls.setColorAt(n,e.setHex(yl[n%6]))}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?74:56,this.camera.updateProjectionMatrix()}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});let e=n=>{this.mode==="play"&&this.run&&this.drag&&!this.robot&&this.run.steer((n.clientX-this.root.getBoundingClientRect().left)/this.cw*2-1)};this.root.addEventListener("pointerdown",n=>{n.target.closest("button")||(this.drag=!0,e(n))}),this.root.addEventListener("pointermove",e),this.root.addEventListener("pointerup",()=>{this.drag=!1}),this.root.addEventListener("pointercancel",()=>{this.drag=!1}),this._onKey=n=>{if(!this.run||this.mode!=="play")return;let s=n.key.toLowerCase();n.type==="keydown"?((s==="arrowleft"||s==="a")&&(this.run.targetX=-(ye-1.2)),(s==="arrowright"||s==="d")&&(this.run.targetX=ye-1.2)):["arrowleft","arrowright","a","d"].includes(s)&&(this.run.targetX=0)},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_clear(){this.layer.replaceChildren(),this.fxEls=[]}_soundPill(){let t=it("button",{class:"bs-soundpill",onclick:()=>this.sound.unlock()},bt.t("sound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=3e3){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}_setPano(t){if(this.panoMesh&&(this.scene.remove(this.panoMesh),this.panoMesh.material.map.dispose(),this.panoMesh.material.dispose(),this.panoMesh=null),!t)return;let e=new Rr().load(`${this.base}art/pano${t}.webp`,()=>{this.panoMesh&&this.panoMesh.material.map===e&&(this.panoMesh.visible=!0)});e.colorSpace=ue,e.wrapS=xs,e.repeat.set(2,.66),e.offset.set(0,.34);let n=new de(new Zi(300,300,240,48,1,!0),new Xe({map:e,side:_e,fog:!1}));n.visible=!1,n.renderOrder=-10,this.panoMesh=n,this.scene.add(n)}_followPano(){this.panoMesh&&this.panoMesh.position.set(this.camera.position.x,this.camera.position.y+60,this.camera.position.z)}_buildWorld(t){var q;this._setPano(Math.min(6,Math.floor(t.level/5)+1));for(let H of[...this.world.children])this.world.remove(H),(q=H.traverse)==null||q.call(H,F=>{F.isInstancedMesh&&F.dispose()});this.truck&&this.scene.remove(this.truck);let e=Il[t.theme];this.th=e,this.scene.background.setHex(e.sky),this.scene.fog.color.setHex(e.sky),this.hemi.color.setHex(t.theme==="space"?9079551:16777215),this.hemi.groundColor.setHex(t.theme==="space"?3158112:14198888),this.hemi.intensity=t.theme==="space"?1.3:1.7,this.built=new Map,this.things=t.things;let n=t.L,s=t.zEdge,r=new Jt,a=new tn,o=new He,l=new D,c=new D,h=Math.ceil(s/2)+2,u=new en(Bt.box,ne(e.road),h),d=new en(Bt.box,ne(e.stripe),h),g=new en(Bt.box,new Yn({color:16777215}),h),m=new en(Bt.box,new Yn({color:16777215}),h),A=new _t(e.ra),p=new _t(e.rb);for(let H=0;H<h;H++){let F=H*2+1,K=t.halfAt(F),G=t.centerAt(F),et=t.groundAt(F),ot=(t.groundAt(F+1)-t.groundAt(F-1))/2,gt=Math.atan(ot),Vt=Math.atan2(-(t.centerAt(F+1)-t.centerAt(F-1))/2,1);o.set(-gt,Vt,0,"YXZ"),a.setFromEuler(o);let Ot=(Q,pt,nt,It,wt,Pt,te)=>{l.set(pt,nt,It),c.set(wt,Pt,te),r.compose(l,a,c),Q.setMatrixAt(H,r)},X=Math.cos(Vt);Ot(u,-G,et-.15,F,K*2,.3,2.1),Ot(d,-G,et+.01+(H%2?.02:0),F,K*2-.6,.02,H%2?1.4:1e-4),Ot(g,-G+(K+.4)*X,et+.35,F,.7,.9,2.1),Ot(m,-G-(K+.4)*X,et+.35,F,.7,.9,2.1),g.setColorAt(H,H%2?A:p),m.setColorAt(H,H%2?p:A)}for(let H of[u,d,g,m])H.frustumCulled=!1,this.world.add(H);let f=ne(e.ground),M=240;this.world.add($t(Bt.box,f,0,-.5,(s-80)/2+5,M,.6,s+80-.1+0));let v=Ie.pitHalf,x=Ie.pitLen;for(let H of[-1,1])this.world.add($t(Bt.box,f,H*(v+1.2+(M/2-v-1.2)/2),-.5,s+x/2+.6,M/2-v-1.2,.6,x+1.2));this.world.add($t(Bt.box,f,0,-.5,s+x+1.2+60,M,.6,120)),this.world.add($t(Bt.box,ne(9071162),0,Ie.h/2-.3,(n+Ie.ramp+s)/2,ye*2+1.2,Ie.h-.3>0?Ie.h-.4:.1,s-n-Ie.ramp));let E=new Pe,S=ne(16765498,6965760),w=ne(13146650),T=Ie.pitY;E.add($t(Bt.box,ne(16758810,4861952),0,T-.2,s+x/2,v*2,.4,x));for(let H of[-1,1])E.add($t(Bt.box,S,H*(v+.6),(T+6)/2+.5,s+x/2+.6,1.2,9,x+1.2));E.add($t(Bt.box,S,0,(T+6)/2+.5,s+x+.6,v*2+2.4,9,1.2)),E.add($t(Bt.box,w,0,8.6,s+x+.6,v*2+3.4,1,2.2));for(let H of[-3.8,-1.3,1.3,3.8])E.add($t(Bt.cyl,ne(16773296),H,3.5,s+x-.1,.9,8,.9));let I=Th(bt.t("bank"),"#a87a0a",9,4.5);I.position.set(0,11.6,s+x-.5),E.add(I),this.world.add(E),this.bank=E,this._props(t,e);let _=0,V=[];for(let H of t.things)if(H.kind==="pile"){let F=Math.min(H.n,Wr);V.push(F),_+=F}this.decor=new en(Bt.low,new Ms({color:16777215,shininess:60,specular:4473924}),Math.max(1,_)),this.decor.frustumCulled=!1,this.world.add(this.decor);let O=0,N=new _t;for(let H of t.things)if(H.kind==="pile"){H.decor=[];let F=t.centerAt(H.z)+H.x;for(let K of vl(Math.min(H.n,Wr)))r.compose(l.set(-(F+K.dx),t.groundAt(H.z+K.dz)+K.y,H.z+K.dz),a.identity(),c.set(.15,.15,.15)),this.decor.setMatrixAt(O,r),this.decor.setColorAt(O,N.setHex(yl[(H.id+H.decor.length)%6])),H.decor.push(O),O++}this.decor.instanceMatrix.needsUpdate=!0,this.decor.instanceColor&&(this.decor.instanceColor.needsUpdate=!0),this.truckW=t.W,this.truck=Rh(t.W),this.scene.add(this.truck)}_props(t,e){let n=(()=>{let u=12345+t.level*77;return()=>(u=u*16807%2147483647,u/2147483647)})(),s=[];for(let u=6;u<t.zEdge+40;u+=7+n()*6)for(let d of[-1,1])s.push({x:d*(ye+3+n()*12),z:u+n()*4,s:.8+n()*1.2});let r=new en(Bt.cyl,ne(e.c1),s.length),a=new en(e.prop==="pine"||e.prop==="crystal"?Bt.cone:Bt.sphere,ne(e.c2),s.length),o=new Jt,l=new tn,c=new D,h=new D;if(s.forEach((u,d)=>{let m=-t.centerAt(u.z)+u.x,A=e.prop,p=u.s,f=A==="cactus"?2.6*p:A==="crystal"?.3:A==="lolli"?2.2*p:1.6*p;o.compose(c.set(m,f/2-.2,u.z),l.identity(),h.set(A==="cactus"?.7*p:.5*p,f,A==="cactus"?.7*p:.5*p)),r.setMatrixAt(d,o);let M=A==="cactus"?f*.5:A==="pine"?f+1.2*p:A==="crystal"?1.8*p:f+.6*p,v=A==="pine"?[2.4*p,3.4*p,2.4*p]:A==="crystal"?[1.4*p,3.6*p,1.4*p]:A==="cactus"?[.01,.01,.01]:[2.2*p,2*p,2.2*p];o.compose(c.set(m,M,u.z),l.identity(),h.set(...v)),a.setMatrixAt(d,o)}),r.frustumCulled=a.frustumCulled=!1,this.world.add(r,a),t.theme==="space"){let u=[];for(let g=0;g<400;g++)u.push((n()-.5)*300,20+n()*80,n()*(t.zEdge+200));let d=new Ae;d.setAttribute("position",new me(u,3)),this.world.add(new Xn(d,new ui({color:16777215,size:.8,fog:!1}))),this.world.add($t(Bt.sphere,new Xe({color:16747213,fog:!1}),-60,40,t.zEdge*.6,18,18,18))}}_ensure(t,e){if(this.built.has(t.id)||["pile","bumpmark"].includes(t.kind))return;let n=new Pe,s=e.centerAt(t.z);if(n.position.set(-(s+(t.x||0)),e.groundAt(t.z),t.z),t.kind==="gate"){let r=t.op==="mul"||t.v>=0,a=t.op==="mul"?2797658:r?2779872:14690874;n.add($t(Bt.box,new Xe({color:a,transparent:!0,opacity:.4,depthWrite:!1}),0,1.8,0,t.w,3.4,.2),$t(Bt.box,ne(a),-t.w/2,1.8,0,.3,3.6,.3),$t(Bt.box,ne(a),t.w/2,1.8,0,.3,3.6,.3),$t(Bt.box,ne(a),0,3.6,0,t.w+.3,.3,.3));let o=Th(t.op==="mul"?`x${t.v}`:t.v>=0?`+${t.v}`:`${t.v}`,t.op==="mul"?"#1f9a4a":r?"#2a6ae0":"#e02a3a",3,1.5);o.position.y=4.6,n.add(o)}else if(t.kind==="wall"||t.kind==="mwall"){n.add($t(Bt.box,ne(t.kind==="mwall"?16758810:13124906),0,1.1,0,t.w,2.2,.9));for(let r=0;r<4;r++)n.add($t(Bt.box,ne(15261904),(r-1.5)*t.w/4,1.1,-.47,t.w/4-.08,.3,.05));n.add($t(Bt.box,ne(15261904),0,2,-.47,t.w,.16,.05))}else if(t.kind==="spinner"){n.add($t(Bt.cyl,ne(6975096),0,.8,0,.5,1.6,.5));let r=new Pe;r.add($t(Bt.box,ne(16730682),0,0,0,t.len,.45,.45),$t(Bt.box,ne(16777215),t.len*.25,0,0,t.len*.12,.47,.47),$t(Bt.box,ne(16777215),-t.len*.25,0,0,t.len*.12,.47,.47)),r.position.y=.9,n.add(r),n.userData.bar=r}else if(t.kind==="conv"){let r=jm().clone();r.needsUpdate=!0,r.repeat.set(Math.round(ye*2),t.len/2);let a=new de(Bt.box,new Yn({map:r}));a.scale.set(ye*2-.4,.06,t.len),a.position.set(0,.05,t.len/2),n.add(a),n.userData.tex=r,n.position.x=-s}else if(t.kind==="ramp")n.add($t(Bt.box,ne(16765498),0,.06,0,ye*2,.05,.4));else return;this.world.add(n),this.built.set(t.id,n)}_syncThings(t,e,n){for(let s of t.things){if(s.kind==="pile"||s.kind==="bumpmark"){if(s.done&&s.decor&&!s.hidden){s.hidden=!0;let l=new Jt().makeScale(0,0,0);for(let c of s.decor)this.decor.setMatrixAt(c,l);this.decor.instanceMatrix.needsUpdate=!0}continue}let r=s.z>e-14&&s.z<e+150;r&&this._ensure(s,t);let a=this.built.get(s.id);if(!a)continue;if(!r){this.world.remove(a),this.built.delete(s.id);continue}let o=t.centerAt(s.z);s.kind==="mwall"&&(a.position.x=-(o+s.x+s.amp*Math.sin(t.time*s.f+s.ph))),s.kind==="spinner"&&(a.userData.bar.rotation.y=-(s.ph+t.time*s.w0)),s.kind==="conv"&&(a.userData.tex.offset.y-=s.dir*n*1.6),s.done&&(s.kind==="wall"||s.kind==="mwall")&&(s.fall=(s.fall||0)+n,a.rotation.x=Math.min(1.4,s.fall*3),a.position.y=t.groundAt(s.z)-s.fall*3,s.fall>.8&&(a.visible=!1)),s.kind==="gate"&&s.hit&&(a.scale.y=Math.max(.01,1-(s.fl=(s.fl||0)+n*2)),s.fl>1&&(a.visible=!1)),s.kind==="gate"&&s.done&&!s.hit&&(a.visible=!1)}}_demoStart(){let t=new Qi({level:0,up:this.save.up,goal:0});t.balls=80,this.demo=t,this.run=null,this._buildWorld(t),this.pile.begin(t),this.camAng=0}showMenu(t="main"){this.mode="menu",this.run=null,this._clear(),this.sound.setMode(!1),(!this.demo||this.mode!=="menu"||!this.built||this._needDemo!==!1)&&(this._demoStart(),this._needDemo=!1);let e=bt.getLang()!=="en",n=it("div",{class:"bs-pill"},`\u{1FA99} ${bt.num(this.save.coins)}`),s;if(t==="main"){let r=Math.min(En,this.save.unlocked);s=it("div",{class:"bs-card"},it("div",{class:"bs-logo"},"\u{1F69C} ",bt.t("title")),n,it("div",{class:"bs-small"},bt.t("how")),it("button",{class:"bs-btn",onclick:()=>{this.sound.play("tap"),this.start(r-1)}},`\u25B6 ${bt.t("play")} \u2014 ${bt.t("level")} ${bt.num(r)}`),it("button",{class:"bs-btn dark",onclick:()=>{this.sound.play("tap"),this.showMenu("levels")}},`\u{1F5FA}\uFE0F ${bt.t("levels")}`),it("button",{class:"bs-btn dark",onclick:()=>{this.sound.play("tap"),this.showMenu("shop")}},`\u{1F6D2} ${bt.t("shop")}`),it("button",{class:"bs-btn dark",onclick:()=>this.post({type:"exit"})},bt.t("exit")))}else if(t==="levels"){let r=Or[this.page],a=it("div",{class:"bs-lvs bs-lvs6"},Array.from({length:6},(c,h)=>{let u=this.page*6+h,d=u+1>this.save.unlocked,g=this.save.stars[u+1]||0;return it("button",{class:`bs-lv${d?" lock":""}`,onclick:()=>{if(d){this.hint(bt.t("locked"));return}this.sound.play("tap"),this.start(u)}},it("i",{},d?"\u{1F512}":Il[r].icon),it("span",{},bt.num(u+1)),it("span",{class:"bs-st"},d?"\xB7":"\u2605".repeat(g)+"\u2606".repeat(3-g)),it("span",{class:"bs-tiny"},g?`\u{1F3C6}${bt.num(this.save.best[u+1]||0)}`:""))})),o=it("div",{class:"bs-nav"},it("button",{class:"bs-round",onclick:()=>{this.page=(this.page+4)%5,this.showMenu("levels")}},e?"\u25B6":"\u25C0"),it("div",{class:"bs-pill"},`${Il[r].icon} ${bt.t(r)}`),it("button",{class:"bs-round",onclick:()=>{this.page=(this.page+1)%5,this.showMenu("levels")}},e?"\u25C0":"\u25B6")),l=it("div",{class:"bs-dots"},Or.map((c,h)=>it("b",{class:h===this.page?"on":""})));s=it("div",{class:"bs-card"},it("div",{class:"bs-title"},`\u{1F5FA}\uFE0F ${bt.t("levels")}`),o,a,l,it("button",{class:"bs-btn dark",onclick:()=>this.showMenu()},bt.t("back")))}else{let r=(o,l)=>o.id==="start"?`${10+l*8}`:o.id==="wide"?`${Al(l).toFixed(1)} m`:o.id==="coin"?`${Math.round(100+l*30)}%`:o.id==="magnet"?`${(l*.5).toFixed(1)} m`:`-${Math.round(l*15)}%`,a=kr.map(o=>{let l=this.save.up[o.id],c=mh(o.id,l),h=c!==null&&this.save.coins>=c,u=it("div",{class:"bs-pips"},Array.from({length:o.max},(d,g)=>it("b",{class:g<l?"on":""})));return it("div",{class:`bs-shopc${h?" can":""}`},it("i",{},o.icon),it("div",{class:"bs-sn"},e?o.ar:o.en),u,it("div",{class:"bs-tiny",style:"direction:ltr"},c===null?r(o,l):`${r(o,l)} \u2192 ${r(o,l+1)}`),it("button",{class:`bs-buy${h?" go":""}`,onclick:()=>{h&&(this.save.coins-=c,this.save.up[o.id]+=1,this.post({type:"save",save:this.save}),this.sound.play("bank"),this.showMenu("shop"))}},c===null?bt.t("max"):`\u{1FA99} ${bt.num(c)}`))});s=it("div",{class:"bs-card"},it("div",{class:"bs-title"},`\u{1F6D2} ${bt.t("shop")}`),n,it("div",{class:"bs-shop"},a),it("button",{class:"bs-btn dark",onclick:()=>this.showMenu()},bt.t("back")))}this.layer.append(it("div",{class:"bs-dim"},s)),this.hintEl=it("div",{class:"bs-hint"}),this.layer.append(this.hintEl),this._soundPill()}start(t){this.levelIdx=t;let e=gh(t);this.run=new Qi({level:t,up:this.save.up,easy:this.age<=4,goal:e}),this.demo=null,this._buildWorld(this.run),this.pile.begin(this.run),this.mode="play",this.paused=!1,this.fx=[],this.dispCount=this.run.balls,this.coinShown=0,this.poured=0,this.finished=!1,this._tiltSnd=!1,this._clear(),this.sound.setMode(!0),this.cntEl=it("div",{class:"bs-bubble"},""),this.barEl=it("b",{style:"width:0%"}),this.carEl=it("span",{class:"bs-car"},"\u{1F69C}"),this.coinEl=it("div",{class:"bs-coinbig"},""),this.coinEl.style.display="none";let n=it("button",{class:"bs-round","aria-label":bt.t("menu"),onclick:()=>{this._needDemo=!0,this.showMenu()}},"\u2630"),s=it("button",{class:"bs-round","aria-label":bt.t("paused"),onclick:()=>this.togglePause()},"\u23F8");this.layer.append(it("div",{class:"bs-top"},n,it("div",{class:"bs-pill"},`${bt.t("level")} ${bt.num(t+1)}`),it("div",{class:"bs-pill bs-goal"},`\u{1F3AF} ${bt.t("goal")} ${bt.num(e)}`),s),it("div",{class:"bs-top",style:"top:calc(var(--u)*15)"},it("span",{},"\u{1F3C1}"),it("div",{class:"bs-bar"},this.barEl,this.carEl),it("span",{},"\u{1F3E6}")),this.cntEl,this.coinEl),this.banner=it("div",{class:"bs-banner"},it("div",{},`${bt.t("level")} ${bt.num(t+1)}`),it("small",{},`${bt.t("goal")} ${bt.num(e)}`)),this.layer.append(this.banner),this.bannerT=2.6,this.hintEl=it("div",{class:"bs-hint",style:"top:calc(var(--u)*24)"}),this.layer.append(this.hintEl),this._soundPill(),this.hint(bt.t("how"),3500)}togglePause(){this.mode==="play"&&(this.paused=!this.paused,this.paused?(this.pauseEl=it("div",{class:"bs-dim"},it("div",{class:"bs-card"},it("div",{class:"bs-title"},bt.t("paused")),it("button",{class:"bs-btn",onclick:()=>this.togglePause()},bt.t("resume")),it("button",{class:"bs-btn dark",onclick:()=>this.start(this.levelIdx)},bt.t("again")),it("button",{class:"bs-btn dark",onclick:()=>{this._needDemo=!0,this.showMenu()}},bt.t("menu")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_done(t){let e=this.run,n=this.levelIdx+1;this.save.coins+=e.coins,this.save.best[n]=Math.max(this.save.best[n]||0,e.balls),this.save.stars[n]=Math.max(this.save.stars[n]||0,t),this.save.unlocked=Math.max(this.save.unlocked,Math.min(En,n+1)),this.post({type:"save",save:this.save}),this.sound.play("win");let s=it("div",{class:"bs-stars"},[1,2,3].map(r=>it("span",{class:r<=t?"on":"off",style:`animation-delay:${r*.25}s`},"\u2605")));this.layer.append(it("div",{class:"bs-dim"},it("div",{class:"bs-card"},it("div",{class:"bs-title"},bt.t("win")),s,it("div",{class:"bs-pill"},`\u{1F3E6} ${bt.num(e.balls)} / \u{1F3AF} ${bt.num(e.goal)}`),it("div",{class:"bs-pill"},`\u{1FA99} +${bt.num(e.coins)}`),this.levelIdx<En-1?it("button",{class:"bs-btn",onclick:()=>this.start(this.levelIdx+1)},bt.t("next")):null,it("div",{class:"bs-row"},it("button",{class:"bs-btn alt",onclick:()=>this.start(this.levelIdx)},bt.t("again")),it("button",{class:"bs-btn dark",onclick:()=>{this._needDemo=!0,this.showMenu("levels")}},bt.t("menu"))))))}_frame(){let t=performance.now(),e=t-this.last,n=Math.min(.033,e/1e3);this.last=t,this.clock+=n,this.perfT.length<600&&this.perfT.push(e),this.mode==="play"&&!this.paused&&this.run?this._update(n):this.demo&&(this.pile.updateTruck(n),this.pile.update(n,[])),this._render(n)}_fx(t,e){this.fx.push({t:0,life:1,text:t,big:e})}_update(t){let e=this.run;this.robot&&xl(e);let n=e.step(t);this.pile.update(t,n);for(let s of n)switch(s.type){case"scoop":this.vfx.burst({x:this.pile.w.T.x,y:this.pile.w.T.y+1.6,z:this.pile.w.T.z+1.8},{n:Math.min(14,4+s.n),colors:[16765498,16734842,4901119,8060778],speed:5,size:.35,life:.6,gravity:8,vz:3}),this.sound.play("scoop",s.n),this._fx(`+${s.n}`);break;case"gate":this.vfx.burst({x:this.pile.w.T.x,y:this.pile.w.T.y+2,z:this.pile.w.T.z+2},{n:34,colors:s.v>=0?[7012234,16777215,16769098]:[16731501,16752800],speed:7,size:.4,life:.9,gravity:4,vz:4}),this.sound.play(s.op==="mul"?"gatex":s.v>=0?"gate+":"gate-",s.v),this._fx(s.op==="mul"?`x${s.v}`:s.v>=0?`+${s.v}`:`${s.v}`,!0);break;case"wall":this.vfx.burst({x:this.pile.w.T.x,y:this.pile.w.T.y+1.5,z:this.pile.w.T.z+2},{n:30,colors:[16731501,16777215,16760906],speed:8,size:.4,life:.7,gravity:9}),this.sound.play("wall"),this._fx(`-${s.lost}`),this.hint(bt.t("hitWall"),1500),this.shake=.5;break;case"jump":this.sound.play("jump");break;case"land":this.vfx.burst({x:this.pile.w.T.x,y:this.pile.w.T.y+.2,z:this.pile.w.T.z},{n:16,colors:[16777215,16050384],speed:4,size:.8,life:.6,gravity:-.5,flat:!0,up:.1}),this.sound.play("land"),this.shake=.25;break;case"bump":this.sound.play("land");break;case"finish":this.vfx.burst({x:this.pile.w.T.x,y:this.pile.w.T.y+4,z:this.pile.w.T.z+3},{n:140,colors:[16731501,16769098,6217850,4895999,13069311,16777215],speed:10,size:.55,life:2.4,gravity:4,lift:4}),this.sound.play("bank"),this.coinEl.style.display="block";break;case"tilt":this.sound.play("tilt");break;case"done":this.finished=!0,this._done(s.stars);break;default:break}this.pile.spillRecent>=3&&(this.sound.play("pour"),this.pile.spillRecent=0),e.state==="bank"&&e.tilt>.6&&Math.random()<.5&&this.sound.play("pour"),this.dispCount+=(e.balls-this.dispCount)*Math.min(1,t*10);for(let s of this.fx)s.t+=t;if(this.fx=this.fx.filter(s=>s.t<s.life),this.bannerT>0&&(this.bannerT-=t,this.banner.style.opacity=String(Math.min(1,this.bannerT)),this.bannerT<=0&&(this.banner.style.display="none")),this.carEl.style.left=`${Math.round(Math.min(1,e.z/e.L)*100)}%`,this.barEl.style.width=`${Math.round(Math.min(1,e.z/e.L)*100)}%`,e.state!=="run"){let s=this.pile.bankStart?Math.min(1,this.pile.banked/this.pile.bankStart):0,r=Math.min(1,Math.max(0,(e.bankT-1.2)/2.8));this.coinShown=Math.max(this.coinShown,e.state==="done"?1:Math.max(s,r*0+s)),this.coinEl.textContent=`\u{1FA99} ${bt.num(Math.round(e.coins*(e.state==="done"?1:Math.min(1,this.coinShown))))}`}}_setBalls(){let t=this.pile.w,e=this.balls.instanceMatrix.array,n=this.balls.instanceColor,s=0,r=!1;for(let a=0;a<t.max;a++){let o=a*16;if(!t.state[a]){e[o]=e[o+5]=e[o+10]=0;continue}s=a+1;let l=.15;if(t.state[a]===2&&(l=.15*Math.max(0,1-Math.max(0,t.life[a]-1)/.6)),e[o]=l,e[o+1]=0,e[o+2]=0,e[o+3]=0,e[o+4]=0,e[o+5]=l,e[o+6]=0,e[o+7]=0,e[o+8]=0,e[o+9]=0,e[o+10]=l,e[o+11]=0,e[o+12]=t.x[a],e[o+13]=t.y[a],e[o+14]=t.z[a],e[o+15]=1,this.colSeen[a]!==t.col[a]){this.colSeen[a]=t.col[a];let c=yl[t.col[a]%6];n.array[a*3]=(c>>16&255)/255,n.array[a*3+1]=(c>>8&255)/255,n.array[a*3+2]=(c&255)/255,r=!0}}this.balls.count=Math.max(1,s),this.balls.instanceMatrix.needsUpdate=!0,r&&(n.needsUpdate=!0)}_render(t){var g,m;let e=this.run||this.demo,n=!!this.run,s=performance.now(),r=this.pile.w.T;if(e){if(this._syncThings(e,e.z,t),this.vfx.update(t),this.vfx.setViewportScale(this.ch||400),n&&e.state==="run"&&this.pile.w.T){this._dustT=(this._dustT||0)+t;let A=this.pile.w.T;if(this._dustT>.05){this._dustT=0;for(let p of[-1,1])this.vfx.burst({x:A.x+p*e.W*.5,y:A.y+.2,z:A.z-1.6},{n:1,colors:[16773848,15257768],speed:1.2,size:.7,life:.55,gravity:-.6,up:.2,vz:-4})}}this.truckW!==e.W&&(this.scene.remove(this.truck),this.truckW=e.W,this.truck=Rh(e.W),$r(this.truck,1780282,.035),this.scene.add(this.truck)),this.truck.position.set(r.x,r.y,r.z),this.truck.rotation.set(r.pitch,r.yaw,0,"YXZ"),this.truck.userData.tilt.rotation.x=e.tilt||0,this._setBalls()}let a=this.cw<this.ch,o=r.z,l=r.x*.6;this.camX=((g=this.camX)!=null?g:l)+(l-((m=this.camX)!=null?m:l))*Math.min(1,t*5);let c=a?10.6:8,h=a?9.6:8.2,u=1.2,d=o+16;if(n){let A=0;e.state!=="run"&&(A=Math.min(1,(e.z-e.L)/6)),c+=A*5,h+=A*3,d=o+16+A*6,u=1.2+A*1.5;let p=this.shake>0?(this.shake-=t,(Math.random()-.5)*.4*Math.min(1,this.shake*3)):0;this.camera.position.set(this.camX+p,r.y*.6+c,o-h),this.camera.lookAt(this.camX*.5,u,d)}else{this.camAng+=t*.3;let A=Math.sin(this.camAng)*.5;this.camera.position.set(Math.sin(A)*12,5.5,-11+Math.cos(A)*0),this.camera.lookAt(0,1.4,2)}this._followPano(),this.renderer.render(this.scene,this.camera),this.cpuMs=(this.cpuMs||0)*.95+(performance.now()-s)*.05,n&&this._hud()}_hud(){let t=this.run,e=this.pile.w.T,n=new D(e.x,e.y+3.6,e.z+2.2).project(this.camera),s=(n.x*.5+.5)*this.cw,r=(-n.y*.5+.5)*this.ch;this.cntEl.style.transform=`translate(${s}px,${r}px) translate(-50%,-50%)`,this.cntEl.textContent=`${Math.round(this.dispCount)}`.replace(/[0-9]/g,a=>bt.getLang()==="en"?a:"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[a]),this.cntEl.classList.toggle("gold",t.balls>=t.goal),this.cntEl.style.display=t.state==="run"?"block":"none",this.fxEls=this.fxEls||[],this.fx.forEach((a,o)=>{let l=this.fxEls[o];l||(l=it("div",{class:"bs-float"}),this.layer.append(l),this.fxEls[o]=l),l.style.display="block",l.style.opacity=String(1-a.t/a.life),l.style.fontSize=`calc(var(--u)*${a.big?9:7})`,l.style.transform=`translate(${s}px,${r-20-a.t*90}px) translate(-50%,-100%)`,l.textContent=a.text});for(let a=this.fx.length;a<this.fxEls.length;a++)this.fxEls[a].style.display="none"}bench(t=300){this.perfT=[];let e={ms:this.pile.stats.ms,f:this.pile.stats.frames};return new Promise(n=>{let s=()=>{if(this.perfT.length>=t){let r=this.perfT.slice(0,t),a=r.reduce((o,l)=>o+l,0)/t;n({fps:+(1e3/a).toFixed(1),avgMs:+a.toFixed(2),worstMs:+Math.max(...r).toFixed(1),physMs:+((this.pile.stats.ms-e.ms)/Math.max(1,this.pile.stats.frames-e.f)).toFixed(2),cpuRenderMs:+this.cpuMs.toFixed(2),balls:this.pile.live})}else requestAnimationFrame(s)};s()})}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},Km=`
.bs-row{display:flex;gap:calc(var(--u)*1.6);width:100%}.bs-row .bs-btn{flex:1;padding-left:calc(var(--u)*2);padding-right:calc(var(--u)*2)}
.bs-lvs6{grid-template-columns:repeat(3,1fr)!important}
.bs-lvs6 .bs-lv{min-height:calc(var(--u)*22)!important}
.bs-st{color:#ffe36a;letter-spacing:.1em;font-size:calc(var(--u)*3.2)}
.bs-tiny{font-size:calc(var(--u)*2.6);opacity:.95;font-weight:700}
.bs-nav{display:flex;align-items:center;justify-content:space-between;width:100%;gap:calc(var(--u)*2)}
.bs-dots{display:flex;gap:calc(var(--u)*1.4)}.bs-dots b{width:calc(var(--u)*2.2);height:calc(var(--u)*2.2);border-radius:50%;background:rgba(255,255,255,.35)}.bs-dots b.on{background:#fff}
.bs-shop{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(var(--u)*1.6);width:100%}
@media (orientation:landscape){.bs-shop{grid-template-columns:repeat(5,1fr)}.bs-lvs6{grid-template-columns:repeat(6,1fr)!important}}
.bs-shopc{background:rgba(0,0,0,.28);border:calc(var(--u)*.4) solid rgba(255,255,255,.7);border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.bs-shopc.can{border-color:#6ae08a;box-shadow:0 0 calc(var(--u)*2) #6ae08a}
.bs-shopc i{font-style:normal;font-size:calc(var(--u)*7)}.bs-sn{font-weight:900;font-size:calc(var(--u)*3.2)}
.bs-pips{display:flex;gap:calc(var(--u)*.5);flex-wrap:wrap;justify-content:center}.bs-pips b{width:calc(var(--u)*1.7);height:calc(var(--u)*1.7);border-radius:50%;background:rgba(255,255,255,.3)}.bs-pips b.on{background:#ffe36a}
.bs-buy{font-family:inherit;font-weight:900;border:none;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3);font-size:calc(var(--u)*3.4);background:#7a8896;color:#fff;cursor:pointer;width:100%}
.bs-buy.go{background:linear-gradient(180deg,#6ae08a,#2fa85a);box-shadow:0 calc(var(--u)*.6) 0 #1a6a3a}
.bs-bubble{position:absolute;left:0;top:0;pointer-events:none;background:#fff;border:calc(var(--u)*.6) solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35);border-radius:999px;color:#222;font-weight:900;font-size:calc(var(--u)*6);padding:calc(var(--u)*.4) calc(var(--u)*3.5);box-shadow:0 calc(var(--u)*.8) calc(var(--u)*1.6) rgba(0,0,0,.4);white-space:nowrap}
.bs-bubble.gold{background:linear-gradient(180deg,#ffe36a,#e0a010)}
.bs-float{position:absolute;left:0;top:0;font-weight:900;color:#fff;text-shadow:0 0 8px #000,0 0 3px #000;pointer-events:none;display:none;white-space:nowrap}
.bs-banner{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%);text-align:center;font-weight:900;font-size:calc(var(--u)*11);color:#ffe36a;-webkit-text-stroke:calc(var(--u)*.8) rgba(0,30,50,.9);paint-order:stroke fill;pointer-events:none;line-height:1.1}
.bs-banner small{display:block;font-size:calc(var(--u)*7);color:#fff}
.bs-car{position:absolute;top:50%;transform:translate(-50%,-50%);font-size:calc(var(--u)*4.5)}
.bs-coinbig{position:absolute;left:50%;top:26%;transform:translateX(-50%);font-weight:900;font-size:calc(var(--u)*11);color:#ffe36a;-webkit-text-stroke:calc(var(--u)*.8) rgba(60,30,0,.9);paint-order:stroke fill;pointer-events:none}
.bs-stars{font-size:calc(var(--u)*13);display:flex;gap:calc(var(--u)*1)}.bs-stars span{display:inline-block;animation:bspop .5s backwards}.bs-stars .on{color:#ffd23a;text-shadow:0 0 calc(var(--u)*2) #ff9a00}.bs-stars .off{color:rgba(255,255,255,.3)}
@keyframes bspop{0%{transform:scale(0)}70%{transform:scale(1.3)}100%{transform:scale(1)}}
`;Ph.win=["\u062E\u0644\u0635\u062A!","Level complete!"];var Sl={start(i,t,e){let n=new bl(i,t||{},e);return Sl.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.BallScoop=Sl;var s0=Sl;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
