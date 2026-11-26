(()=>{var Ko="170";var Gh=0,Ll=1,Wh=2;var zc=1,Xh=2,Cn=3,kn=0,Ve=1,Ie=2,cn=0,Ni=1,Hn=2,Dl=3,Ul=4,Yh=5,ri=100,Zh=101,Kh=102,Jh=103,Qh=104,jh=200,$h=201,tu=202,eu=203,Ta=204,Ra=205,nu=206,iu=207,su=208,ru=209,au=210,ou=211,lu=212,cu=213,hu=214,Pa=0,qa=1,La=2,zi=3,Da=4,Ua=5,Va=6,Na=7,Jo=0,uu=1,du=2,On=0,Qo=1,jo=2,$o=3,tl=4,fu=5,el=6,nl=7;var kc=300,ki=301,Hi=302,Ba=303,Fa=304,Nr=306,Oa=1e3,oi=1001,za=1002,ke=1003,pu=1004;var qs=1005;var on=1006,Jr=1007;var li=1008;var bn=1009,Hc=1010,Gc=1011,ys=1012,il=1013,ci=1014,ln=1015,nn=1016,sl=1017,rl=1018,Gi=1020,Wc=35902,Xc=1021,Yc=1022,tn=1023,Zc=1024,Kc=1025,Bi=1026,Wi=1027,al=1028,ol=1029,Jc=1030,ll=1031;var cl=1033,ar=33776,or=33777,lr=33778,cr=33779,ka=35840,Ha=35841,Ga=35842,Wa=35843,Xa=36196,Ya=37492,Za=37496,Ka=37808,Ja=37809,Qa=37810,ja=37811,$a=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,hr=36492,co=36494,ho=36495,Qc=36283,uo=36284,fo=36285,po=36286;var ur=2300,go=2301,Qr=2302,Vl=2400,Nl=2401,Bl=2402;var gu=3200,mu=3201;var jc=0,Au=1,Bn="",Ae="srgb",Ki="srgb-linear",Br="linear",jt="srgb";var Ai=7680;var Fl=519,xu=512,vu=513,yu=514,$c=515,Cu=516,_u=517,Iu=518,Mu=519,mo=35044;var Ol="300 es",In=2e3,dr=2001,Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jr=Math.PI/180,Ao=180/Math.PI;function zn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function bu(i,t){return(i%t+t)%t}function $r(i,t,e){return(1-e)*i+e*t}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],A=s[0],g=s[3],f=s[6],E=s[1],M=s[4],_=s[7],S=s[2],I=s[5],w=s[8];return r[0]=a*A+o*E+l*S,r[3]=a*g+o*M+l*I,r[6]=a*f+o*_+l*w,r[1]=c*A+h*E+u*S,r[4]=c*g+h*M+u*I,r[7]=c*f+h*_+u*w,r[2]=d*A+p*E+m*S,r[5]=d*g+p*M+m*I,r[8]=d*f+p*_+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=p*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ta=new Nt;function th(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Su(){let i=fr("canvas");return i.style.display="block",i}var zl={};function As(i){i in zl||(zl[i]=!0,console.warn(i))}function Eu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ht={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=Mn(i.r),i.g=Mn(i.g),i.b=Mn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?Br:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kl=[.64,.33,.3,.6,.15,.06],Hl=[.2126,.7152,.0722],Gl=[.3127,.329],Wl=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[Ki]:{primaries:kl,whitePoint:Gl,transfer:Br,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:Hl,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:kl,whitePoint:Gl,transfer:jt,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:Hl,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var xi,xo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=fr("canvas")),xi.width=t.width,xi.height=t.height;let n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ru=0,pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ea(s[a].image)):r.push(ea(s[a]))}else r=ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ea(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pu=0,Ne=class i extends Gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=oi,s=oi,r=on,a=li,o=tn,l=bn,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=zn(),this.name="",this.source=new pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oa:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oa:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=kc;Ne.DEFAULT_ANISOTROPY=1;var ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],A=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(p+1)/2,S=(f+1)/2,I=(h+d)/4,w=(u+A)/4,T=(m+g)/4;return M>_&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=I/n,r=w/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=I/s,r=T/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=T/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-A)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vo=class extends Gn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new pr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends vo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gr=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yo=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==d||c!==p||h!==m){let g=1-o,f=l*d+c*p+h*m+u*A,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let S=Math.sqrt(M),I=Math.atan2(S,f*E);g=Math.sin(g*I)/S,o=Math.sin(o*I)/S}let _=o*E;if(l=l*g+d*_,c=c*g+p*_,h=h*g+m*_,u=u*g+A*_,g===1-o){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*p-c*d,t[e+1]=l*m+h*d+c*u-o*p,t[e+2]=c*m+h*p+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},na=new q,Yl=new Wn,Sn=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Ds.subVectors(this.max,os),vi.subVectors(t.a,os),yi.subVectors(t.b,os),Ci.subVectors(t.c,os),qn.subVectors(yi,vi),Ln.subVectors(Ci,yi),jn.subVectors(vi,Ci);let e=[0,-qn.z,qn.y,0,-Ln.z,Ln.y,0,-jn.z,jn.y,qn.z,0,-qn.x,Ln.z,0,-Ln.x,jn.z,0,-jn.x,-qn.y,qn.x,0,-Ln.y,Ln.x,0,-jn.y,jn.x,0];return!ia(e,vi,yi,Ci,Ds)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,vi,yi,Ci,Ds))?!1:(Us.crossVectors(qn,Ln),e=[Us.x,Us.y,Us.z],ia(e,vi,yi,Ci,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mn=[new q,new q,new q,new q,new q,new q,new q,new q],Qe=new q,Ls=new Sn,vi=new q,yi=new q,Ci=new q,qn=new q,Ln=new q,jn=new q,os=new q,Ds=new q,Us=new q,$n=new q;function ia(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);let o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qu=new Sn,ls=new q,sa=new q,Xn=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);let e=ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(sa)),this.expandByPoint(ls.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new q,ra=new q,Vs=new q,Dn=new q,aa=new q,Ns=new q,oa=new q,mr=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ra.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(ra);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Vs),o=Dn.dot(this.direction),l=-Dn.dot(Vs),c=Dn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ra).addScaledVector(Vs,d),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){aa.subVectors(e,t),Ns.subVectors(n,t),oa.crossVectors(aa,Ns);let a=this.direction.dot(oa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,t);let l=o*this.direction.dot(Ns.crossVectors(Dn,Ns));if(l<0)return null;let c=o*this.direction.dot(aa.cross(Dn));if(c<0||l+c>a)return null;let h=-o*Dn.dot(oa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,m,A,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,m,A,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=A,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,m=c*h,A=c*u;e[0]=d+A*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,m=c*h,A=c*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-p,e[8]=d*c+A,e[1]=l*u,e[5]=A*c+d,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*l,p=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+A,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Du)}lookAt(t,e,n){let s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Un.crossVectors(n,Oe),Un.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Un.crossVectors(n,Oe)),Un.normalize(),Bs.crossVectors(Oe,Un),s[0]=Un.x,s[4]=Bs.x,s[8]=Oe.x,s[1]=Un.y,s[5]=Bs.y,s[9]=Oe.y,s[2]=Un.z,s[6]=Bs.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],A=n[6],g=n[10],f=n[14],E=n[3],M=n[7],_=n[11],S=n[15],I=s[0],w=s[4],T=s[8],C=s[12],y=s[1],R=s[5],B=s[9],N=s[13],H=s[2],K=s[6],G=s[10],nt=s[14],k=s[3],at=s[7],dt=s[11],St=s[15];return r[0]=a*I+o*y+l*H+c*k,r[4]=a*w+o*R+l*K+c*at,r[8]=a*T+o*B+l*G+c*dt,r[12]=a*C+o*N+l*nt+c*St,r[1]=h*I+u*y+d*H+p*k,r[5]=h*w+u*R+d*K+p*at,r[9]=h*T+u*B+d*G+p*dt,r[13]=h*C+u*N+d*nt+p*St,r[2]=m*I+A*y+g*H+f*k,r[6]=m*w+A*R+g*K+f*at,r[10]=m*T+A*B+g*G+f*dt,r[14]=m*C+A*N+g*nt+f*St,r[3]=E*I+M*y+_*H+S*k,r[7]=E*w+M*R+_*K+S*at,r[11]=E*T+M*B+_*G+S*dt,r[15]=E*C+M*N+_*nt+S*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],A=t[7],g=t[11],f=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+A*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],A=t[13],g=t[14],f=t[15],E=u*g*c-A*d*c+A*l*p-o*g*p-u*l*f+o*d*f,M=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,_=h*A*c-m*u*c+m*o*p-a*A*p-h*o*f+a*u*f,S=m*u*l-h*A*l-m*o*d+a*A*d+h*o*g-a*u*g,I=e*E+n*M+s*_+r*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/I;return t[0]=E*w,t[1]=(A*d*r-u*g*r-A*s*p+n*g*p+u*s*f-n*d*f)*w,t[2]=(o*g*r-A*l*r+A*s*c-n*g*c-o*s*f+n*l*f)*w,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*w,t[4]=M*w,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*w,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*f-e*l*f)*w,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*w,t[8]=_*w,t[9]=(m*u*r-h*A*r-m*n*p+e*A*p+h*n*f-e*u*f)*w,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*w,t[12]=S*w,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*g+e*u*g)*w,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*g-e*o*g)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,A=a*h,g=a*u,f=o*u,E=l*c,M=l*h,_=l*u,S=n.x,I=n.y,w=n.z;return s[0]=(1-(A+f))*S,s[1]=(p+_)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(p-_)*I,s[5]=(1-(d+f))*I,s[6]=(g+E)*I,s[7]=0,s[8]=(m+M)*w,s[9]=(g-E)*w,s[10]=(1-(d+A))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=_i.set(s[0],s[1],s[2]).length(),a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let c=1/r,h=1/a,u=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=In){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(o===In)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===dr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,m,A;if(o===In)m=(a+r)*u,A=-2*u;else if(o===dr)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_i=new q,je=new se,Lu=new q(0,0,0),Du=new q(1,1,1),Un=new q,Bs=new q,Oe=new q,Zl=new se,Kl=new Wn,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uu=0,Jl=new q,Ii=new Wn,xn=new se,Fs=new q,cs=new q,Vu=new q,Nu=new Wn,Ql=new q(1,0,0),jl=new q(0,1,0),$l=new q(0,0,1),tc={type:"added"},Bu={type:"removed"},Mi={type:"childadded",child:null},la={type:"childremoved",child:null},pe=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new hn,n=new Wn,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Nt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Ql,t)}rotateY(t){return this.rotateOnAxis(jl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ql,t)}translateY(t){return this.translateOnAxis(jl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(cs,Fs,this.up):xn.lookAt(Fs,cs,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(xn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tc),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tc),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};pe.DEFAULT_UP=new q(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=new q,vn=new q,ca=new q,yn=new q,bi=new q,Si=new q,ec=new q,ha=new q,ua=new q,da=new q,fa=new ee,pa=new ee,ga=new ee,Fn=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),vn.subVectors(n,e),ca.subVectors(t,e);let a=$e.dot($e),o=$e.dot(vn),l=$e.dot(ca),c=vn.dot(vn),h=vn.dot(ca),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return fa.setScalar(0),pa.setScalar(0),ga.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,n),ga.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fa,r.x),a.addScaledVector(pa,r.y),a.addScaledVector(ga,r.z),a}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),vn.subVectors(t,e),$e.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),$e.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bi.subVectors(s,n),Si.subVectors(r,n),ha.subVectors(t,n);let l=bi.dot(ha),c=Si.dot(ha);if(l<=0&&c<=0)return e.copy(n);ua.subVectors(t,s);let h=bi.dot(ua),u=Si.dot(ua);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);da.subVectors(t,r);let p=bi.dot(da),m=Si.dot(da);if(m>=0&&p<=m)return e.copy(r);let A=p*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Si,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return ec.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(ec,o);let f=1/(g+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(bi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ht.workingColorSpace){if(t=bu(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ma(a,r,t+1/3),this.g=ma(a,r,t),this.b=ma(a,r,t-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Ht.fromWorkingColorSpace(we.copy(this),t),Math.round(Ue(we.r*255,0,255))*65536+Math.round(Ue(we.g*255,0,255))*256+Math.round(Ue(we.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ae){Ht.fromWorkingColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Os);let n=$r(Vn.h,Os.h,e),s=$r(Vn.s,Os.s,e),r=$r(Vn.l,Os.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new Et;Et.NAMES=eh;var Fu=0,En=class extends Gn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=zn(),this.name="",this.blending=Ni,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Ra,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xe=class extends En{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new q,zs=new Ct,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mo&&(t.usage=this.usage),t}};var xr=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ou=0,Ye=new se,Aa=new pe,Ei=new q,ze=new Sn,hs=new Sn,_e=new q,Me=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?vr:xr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(ze.min,hs.min),ze.expandByPoint(_e),_e.addVectors(ze.max,hs.max),ze.expandByPoint(_e)):(ze.expandByPoint(hs.min),ze.expandByPoint(hs.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),_e.add(Ei)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new q,l[T]=new q;let c=new q,h=new q,u=new q,d=new Ct,p=new Ct,m=new Ct,A=new q,g=new q;function f(T,C,y){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(R),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),o[T].add(A),o[C].add(A),o[y].add(A),l[T].add(g),l[C].add(g),l[y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let T=0,C=E.length;T<C;++T){let y=E[T],R=y.start,B=y.count;for(let N=R,H=R+B;N<H;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new q,_=new q,S=new q,I=new q;function w(T){S.fromBufferAttribute(s,T),I.copy(S);let C=o[T];M.copy(C),M.sub(S.multiplyScalar(S.dot(C))).normalize(),_.crossVectors(I,C);let R=_.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,R)}for(let T=0,C=E.length;T<C;++T){let y=E[T],R=y.start,B=y.count;for(let N=R,H=R+B;N<H;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new q,r=new q,a=new q,o=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),A=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let A=0,g=l.length;A<g;A++){o.isInterleavedBufferAttribute?p=l[A]*o.data.stride+o.offset:p=l[A]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nc=new se,ti=new mr,ks=new Xn,ic=new q,Hs=new q,Gs=new q,Ws=new q,xa=new q,Xs=new q,sc=new q,Ys=new q,ie=class extends pe{constructor(t=new Me,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(xa.fromBufferAttribute(u,t),a?Xs.addScaledVector(xa,h):Xs.addScaledVector(xa.sub(e),h))}e.add(Xs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(ks.containsPoint(ti.origin)===!1&&(ti.intersectSphere(ks,ic)===null||ti.origin.distanceToSquared(ic)>(t.far-t.near)**2))&&(nc.copy(r).invert(),ti.copy(t.ray).applyMatrix4(nc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],f=a[g.materialIndex],E=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=E,S=M;_<S;_+=3){let I=o.getX(_),w=o.getX(_+1),T=o.getX(_+2);s=Zs(this,f,t,n,c,h,u,I,w,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let g=m,f=A;g<f;g+=3){let E=o.getX(g),M=o.getX(g+1),_=o.getX(g+2);s=Zs(this,a,t,n,c,h,u,E,M,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],f=a[g.materialIndex],E=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=E,S=M;_<S;_+=3){let I=_,w=_+1,T=_+2;s=Zs(this,f,t,n,c,h,u,I,w,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let g=m,f=A;g<f;g+=3){let E=g,M=g+1,_=g+2;s=Zs(this,a,t,n,c,h,u,E,M,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function zu(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===kn,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:i}}function Zs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hs),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Ws);let h=zu(i,t,e,n,Hs,Gs,Ws,sc);if(h){let u=new q;Fn.getBarycoord(sc,Hs,Gs,Ws,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,o,l,c,u,new Ct)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,l,c,u,new Ct)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new q,materialIndex:0};Fn.getNormal(Hs,Gs,Ws,d.normal),h.face=d,h.barycoord=u}return h}var hi=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function m(A,g,f,E,M,_,S,I,w,T,C){let y=_/w,R=S/T,B=_/2,N=S/2,H=I/2,K=w+1,G=T+1,nt=0,k=0,at=new q;for(let dt=0;dt<G;dt++){let St=dt*R-N;for(let zt=0;zt<K;zt++){let ne=zt*y-B;at[A]=ne*E,at[g]=St*M,at[f]=H,c.push(at.x,at.y,at.z),at[A]=0,at[g]=0,at[f]=I>0?1:-1,h.push(at.x,at.y,at.z),u.push(zt/w),u.push(1-dt/T),nt+=1}}for(let dt=0;dt<T;dt++)for(let St=0;St<w;St++){let zt=d+St+K*dt,ne=d+St+K*(dt+1),X=d+(St+1)+K*(dt+1),it=d+(St+1)+K*dt;l.push(zt,ne,it),l.push(ne,X,it),k+=6}o.addGroup(p,k,C),p+=k,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function ku(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var Kn={clone:Xi,merge:qe},Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends En{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},yr=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=new q,rc=new Ct,ac=new Ct,Te=class extends yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,rc,ac),e.subVectors(ac,rc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},wi=-90,Ti=1,Co=class extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(wi,Ti,t,e);s.layers=this.layers,this.add(s);let r=new Te(wi,Ti,t,e);r.layers=this.layers,this.add(r);let a=new Te(wi,Ti,t,e);a.layers=this.layers,this.add(a);let o=new Te(wi,Ti,t,e);o.layers=this.layers,this.add(o);let l=new Te(wi,Ti,t,e);l.layers=this.layers,this.add(l);let c=new Te(wi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Cr=class extends Ne{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_o=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hi(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:cn});r.uniforms.tEquirect.value=e;let a=new ie(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=on),new Co(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},va=new q,Wu=new q,Xu=new Nt,_n=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=va.subVectors(n,e).cross(Wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xu.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new Xn,Ks=new q,Cs=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],A=s[10],g=s[11],f=s[12],E=s[13],M=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,g-p,_-f).normalize(),n[1].setComponents(l+r,d+c,g+p,_+f).normalize(),n[2].setComponents(l+a,d+h,g+m,_+E).normalize(),n[3].setComponents(l-a,d-h,g-m,_-E).normalize(),n[4].setComponents(l-o,d-u,g-A,_-M).normalize(),e===In)n[5].setComponents(l+o,d+u,g+A,_+M).normalize();else if(e===dr)n[5].setComponents(o,u,A,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ks.x=s.normal.x>0?t.max.x:t.min.x,Ks.y=s.normal.y>0?t.max.y:t.min.y,Ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ih(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],A=u[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let A=u[p];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var un=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],m=[],A=[],g=[];for(let f=0;f<h;f++){let E=f*d-a;for(let M=0;M<c;M++){let _=M*u-r;m.push(_,-E,0),A.push(0,0,1),g.push(M/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let M=E+c*f,_=E+c*(f+1),S=E+1+c*(f+1),I=E+1+c*f;p.push(M,_,I),p.push(_,S,I)}this.setIndex(p),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(A,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
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
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
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
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
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
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,od=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ad=`#define PI 3.141592653589793
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
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
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
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
#endif`,Xd=`struct PhysicalMaterial {
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
}`,Yd=`
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
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sf=`#if defined( USE_POINTS_UV )
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
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Af=`#ifdef USE_NORMALMAP
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
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lf=`float getShadowMask() {
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
}`,Df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nf=`#ifdef USE_SKINNING
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
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#ifdef USE_TRANSMISSION
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
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
}`,ep=`#if DEPTH_PACKING == 3200
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
}`,np=`#define DISTANCE
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
}`,ip=`#define DISTANCE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,up=`#define LAMBERT
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
}`,dp=`#define MATCAP
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
}`,fp=`#define MATCAP
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
}`,pp=`#define NORMAL
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
}`,gp=`#define NORMAL
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
}`,mp=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,xp=`#define STANDARD
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
}`,vp=`#define STANDARD
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
}`,yp=`#define TOON
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
}`,Cp=`#define TOON
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
}`,_p=`uniform float size;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,bp=`uniform vec3 color;
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
}`,Sp=`uniform float rotation;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Zu,alphahash_pars_fragment:Ku,alphamap_fragment:Ju,alphamap_pars_fragment:Qu,alphatest_fragment:ju,alphatest_pars_fragment:$u,aomap_fragment:td,aomap_pars_fragment:ed,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:sd,beginnormal_vertex:rd,bsdfs:ad,iridescence_fragment:od,bumpmap_pars_fragment:ld,clipping_planes_fragment:cd,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:dd,color_fragment:fd,color_pars_fragment:pd,color_pars_vertex:gd,color_vertex:md,common:Ad,cube_uv_reflection_fragment:xd,defaultnormal_vertex:vd,displacementmap_pars_vertex:yd,displacementmap_vertex:Cd,emissivemap_fragment:_d,emissivemap_pars_fragment:Id,colorspace_fragment:Md,colorspace_pars_fragment:bd,envmap_fragment:Sd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:wd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Od,envmap_vertex:Rd,fog_vertex:Pd,fog_pars_vertex:qd,fog_fragment:Ld,fog_pars_fragment:Dd,gradientmap_pars_fragment:Ud,lightmap_pars_fragment:Vd,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Bd,lights_pars_begin:Fd,lights_toon_fragment:zd,lights_toon_pars_fragment:kd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Xd,lights_fragment_begin:Yd,lights_fragment_maps:Zd,lights_fragment_end:Kd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:$d,map_fragment:tf,map_pars_fragment:ef,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:af,morphinstance_vertex:of,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:df,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:gf,normal_vertex:mf,normalmap_pars_fragment:Af,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Cf,opaque_fragment:_f,packing:If,premultiplied_alpha_fragment:Mf,project_vertex:bf,dithering_fragment:Sf,dithering_pars_fragment:Ef,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:Pf,shadowmap_vertex:qf,shadowmask_pars_fragment:Lf,skinbase_vertex:Df,skinning_pars_vertex:Uf,skinning_vertex:Vf,skinnormal_vertex:Nf,specularmap_fragment:Bf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:zf,transmission_fragment:kf,transmission_pars_fragment:Hf,uv_pars_fragment:Gf,uv_pars_vertex:Wf,uv_vertex:Xf,worldpos_vertex:Yf,background_vert:Zf,background_frag:Kf,backgroundCube_vert:Jf,backgroundCube_frag:Qf,cube_vert:jf,cube_frag:$f,depth_vert:tp,depth_frag:ep,distanceRGBA_vert:np,distanceRGBA_frag:ip,equirect_vert:sp,equirect_frag:rp,linedashed_vert:ap,linedashed_frag:op,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:hp,meshlambert_frag:up,meshmatcap_vert:dp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:gp,meshphong_vert:mp,meshphong_frag:Ap,meshphysical_vert:xp,meshphysical_frag:vp,meshtoon_vert:yp,meshtoon_frag:Cp,points_vert:_p,points_frag:Ip,shadow_vert:Mp,shadow_frag:bp,sprite_vert:Sp,sprite_frag:Ep},st={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},rn={basic:{uniforms:qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:qe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:qe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:qe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:qe([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:qe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:qe([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:qe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:qe([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:qe([st.common,st.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:qe([st.lights,st.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};rn.physical={uniforms:qe([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Js={r:0,b:0,g:0},ni=new hn,wp=new se;function Tp(i,t,e,n,s,r,a){let o=new Et(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function A(E){let M=!1,_=m(E);_===null?f(o,l):_&&_.isColor&&(f(_,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,M){let _=m(M);_&&(_.isCubeTexture||_.mapping===Nr)?(h===void 0&&(h=new ie(new hi(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:Xi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(M.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wp.makeRotationFromEuler(ni)),h.material.toneMapped=Ht.getTransfer(_.colorSpace)!==jt,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ie(new un(2,2),new ve({name:"BackgroundMaterial",uniforms:Xi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,M){E.getRGB(Js,nh(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:A,addToRenderList:g}}function Rp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,R,B,N,H){let K=!1,G=u(N,B,R);r!==G&&(r=G,c(r.object)),K=p(y,N,B,H),K&&m(y,N,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(y,R,B,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,R,B){let N=B.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let K=H[R.id];K===void 0&&(K={},H[R.id]=K);let G=K[N];return G===void 0&&(G=d(l()),K[N]=G),G}function d(y){let R=[],B=[],N=[];for(let H=0;H<e;H++)R[H]=0,B[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,R,B,N){let H=r.attributes,K=R.attributes,G=0,nt=B.getAttributes();for(let k in nt)if(nt[k].location>=0){let dt=H[k],St=K[k];if(St===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function m(y,R,B,N){let H={},K=R.attributes,G=0,nt=B.getAttributes();for(let k in nt)if(nt[k].location>=0){let dt=K[k];dt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));let St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),H[k]=St,G++}r.attributes=H,r.attributesNum=G,r.index=N}function A(){let y=r.newAttributes;for(let R=0,B=y.length;R<B;R++)y[R]=0}function g(y){f(y,0)}function f(y,R){let B=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;B[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),H[y]!==R&&(i.vertexAttribDivisor(y,R),H[y]=R)}function E(){let y=r.newAttributes,R=r.enabledAttributes;for(let B=0,N=R.length;B<N;B++)R[B]!==y[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function M(y,R,B,N,H,K,G){G===!0?i.vertexAttribIPointer(y,R,B,H,K):i.vertexAttribPointer(y,R,B,N,H,K)}function _(y,R,B,N){A();let H=N.attributes,K=B.getAttributes(),G=R.defaultAttributeValues;for(let nt in K){let k=K[nt];if(k.location>=0){let at=H[nt];if(at===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){let dt=at.normalized,St=at.itemSize,zt=t.get(at);if(zt===void 0)continue;let ne=zt.buffer,X=zt.type,it=zt.bytesPerElement,yt=X===i.INT||X===i.UNSIGNED_INT||at.gpuType===il;if(at.isInterleavedBufferAttribute){let ot=at.data,Pt=ot.stride,Dt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<k.locationSize;kt++)f(k.location+kt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<k.locationSize;kt++)g(k.location+kt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let kt=0;kt<k.locationSize;kt++)M(k.location+kt,St/k.locationSize,X,dt,Pt*it,(Dt+St/k.locationSize*kt)*it,yt)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)f(k.location+ot,at.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<k.locationSize;ot++)g(k.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ot=0;ot<k.locationSize;ot++)M(k.location+ot,St/k.locationSize,X,dt,St*it,St/k.locationSize*ot*it,yt)}}else if(G!==void 0){let dt=G[nt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(k.location,dt);break;case 3:i.vertexAttrib3fv(k.location,dt);break;case 4:i.vertexAttrib4fv(k.location,dt);break;default:i.vertexAttrib1fv(k.location,dt)}}}}E()}function S(){T();for(let y in n){let R=n[y];for(let B in R){let N=R[B];for(let H in N)h(N[H].object),delete N[H];delete R[B]}delete n[y]}}function I(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let B in R){let N=R[B];for(let H in N)h(N[H].object),delete N[H];delete R[B]}delete n[y.id]}function w(y){for(let R in n){let B=n[R];if(B[y.id]===void 0)continue;let N=B[y.id];for(let H in N)h(N[H].object),delete N[H];delete B[y.id]}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:I,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:g,disableUnusedAttributes:E}}function Pp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==tn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let T=w===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ln&&!T)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:S,maxSamples:I}}function Lp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,M=E*4,_=f.clippingState||null;l.value=_,_=h(m,d,M,p);for(let S=0;S!==M;++S)_[S]=e[S];f.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let f=p+A*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,_=p;M!==A;++M,_+=4)a.copy(u[M]).applyMatrix4(E,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Dp(i){let t=new WeakMap;function e(a,o){return o===Ba?a.mapping=ki:o===Fa&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ba||o===Fa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new _o(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yi=class extends yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vi=4,oc=[.125,.215,.35,.446,.526,.582],ai=20,ya=new Yi,lc=new Et,Ca=null,_a=0,Ia=0,Ma=!1,si=(1+Math.sqrt(5))/2,Ri=1/si,cc=[new q(-si,Ri,0),new q(si,Ri,0),new q(-Ri,0,si),new q(Ri,0,si),new q(0,si,-Ri),new q(0,si,Ri),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],_r=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ca=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,_a,Ia),this._renderer.xr.enabled=Ma,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:nn,format:tn,colorSpace:Ki,depthBuffer:!1},s=hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Up(r)),this._blurMaterial=Vp(r,t,e)}return s}_compileMaterial(t){let e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,s){let o=new Te(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lc),h.toneMapping=On,h.autoClear=!1;let p=new xe({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new ie(new hi,p),A=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,A=!0):(p.color.copy(lc),A=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let M=this._cubeSize;Qs(s,E*M,f>2?M:0,M,M),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ki||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cc[(s-r-1)%cc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ie(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):ai;g>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ai}`);let f=[],E=0;for(let w=0;w<ai;++w){let T=w/A,C=Math.exp(-T*T/2);f.push(C),w===0?E+=C:w<g&&(E+=2*C)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let _=this._sizeLods[s],S=3*_*(s>M-Vi?s-M+Vi:0),I=4*(this._cubeSize-_);Qs(e,S,I,3*_,2*_),l.setRenderTarget(e),l.render(u,ya)}};function Up(i){let t=[],e=[],n=[],s=i,r=i-Vi+1+oc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Vi?l=oc[a-i+Vi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,A=3,g=2,f=1,E=new Float32Array(A*m*p),M=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let I=0;I<p;I++){let w=I%3*2/3-1,T=I>2?0:-1,C=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];E.set(C,A*m*I),M.set(d,g*m*I);let y=[I,I,I,I,I,I];_.set(y,f*m*I)}let S=new Me;S.setAttribute("position",new Re(E,A)),S.setAttribute("uv",new Re(M,g)),S.setAttribute("faceIndex",new Re(_,f)),t.push(S),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hc(i,t,e){let n=new Le(i,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vp(i,t,e){let n=new Float32Array(ai),s=new q(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function uc(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function dc(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function Np(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ba||l===Fa,h=l===ki||l===Hi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new _r(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new _r(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fp(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let g=0,f=A.length;g<f;g++)t.remove(A[g])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let A=p[m];for(let g=0,f=A.length;g<f;g++)t.update(A[g],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,m=u.attributes.position,A=0;if(p!==null){let E=p.array;A=p.version;for(let M=0,_=E.length;M<_;M+=3){let S=E[M+0],I=E[M+1],w=E[M+2];d.push(S,I,I,w,w,S)}}else if(m!==void 0){let E=m.array;A=m.version;for(let M=0,_=E.length/3-1;M<_;M+=3){let S=M+0,I=M+1,w=M+2;d.push(S,I,I,w,w,S)}}else return;let g=new(th(d)?vr:xr)(d,1);g.version=A;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Op(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],A[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,A,0,m);let f=0;for(let E=0;E<m;E++)f+=p[E]*A[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kp(i,t,e){let n=new WeakMap,s=new ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let C=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),A===!0&&(M=3);let _=o.attributes.position.count*M,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let I=new Float32Array(_*S*4*u),w=new gr(I,_,S,u);w.type=ln,w.needsUpdate=!0;let T=M*4;for(let y=0;y<u;y++){let R=g[y],B=f[y],N=E[y],H=_*S*4*y;for(let K=0;K<R.count;K++){let G=K*T;p===!0&&(s.fromBufferAttribute(R,K),I[H+G+0]=s.x,I[H+G+1]=s.y,I[H+G+2]=s.z,I[H+G+3]=0),m===!0&&(s.fromBufferAttribute(B,K),I[H+G+4]=s.x,I[H+G+5]=s.y,I[H+G+6]=s.z,I[H+G+7]=0),A===!0&&(s.fromBufferAttribute(N,K),I[H+G+8]=s.x,I[H+G+9]=s.y,I[H+G+10]=s.z,I[H+G+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Ct(_,S)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ir=class extends Ne{constructor(t,e,n,s,r,a,o,l,c,h=Bi){if(h!==Bi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=ci),n===void 0&&h===Wi&&(n=Gi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sh=new Ne,fc=new Ir(1,1),rh=new gr,ah=new yo,oh=new Cr,pc=[],gc=[],mc=new Float32Array(16),Ac=new Float32Array(9),xc=new Float32Array(4);function Ji(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=pc[s];if(r===void 0&&(r=new Float32Array(s),pc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Zp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(ye(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),Ce(e,n)}}function Kp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(ye(e,n))return;Ac.set(n),i.uniformMatrix3fv(this.addr,!1,Ac),Ce(e,n)}}function Jp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(ye(e,n))return;mc.set(n),i.uniformMatrix4fv(this.addr,!1,mc),Ce(e,n)}}function Qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fc.compareFunction=$c,r=fc):r=sh,e.setTexture2D(t||r,s)}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ah,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||oh,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rh,s)}function cg(i){switch(i){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return Yp;case 35674:return Zp;case 35675:return Kp;case 35676:return Jp;case 5124:case 35670:return Qp;case 35667:case 35671:return jp;case 35668:case 35672:return $p;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,t){i.uniform1fv(this.addr,t)}function ug(i,t){let e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function dg(i,t){let e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function fg(i,t){let e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function pg(i,t){let e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){let e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mg(i,t){let e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ag(i,t){i.uniform1iv(this.addr,t)}function xg(i,t){i.uniform2iv(this.addr,t)}function vg(i,t){i.uniform3iv(this.addr,t)}function yg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function _g(i,t){i.uniform2uiv(this.addr,t)}function Ig(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){let n=this.cache,s=t.length,r=Fr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||sh,r[a])}function Sg(i,t,e){let n=this.cache,s=t.length,r=Fr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ah,r[a])}function Eg(i,t,e){let n=this.cache,s=t.length,r=Fr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||oh,r[a])}function wg(i,t,e){let n=this.cache,s=t.length,r=Fr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rh,r[a])}function Tg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return gg;case 35676:return mg;case 5124:case 35670:return Ag;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Cg;case 36294:return _g;case 36295:return Ig;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return wg}}var Io=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cg(e.type)}},Mo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},bo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ba=/(\w+)(\])?(\[|\.)?/g;function vc(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){let n=i.name,s=n.length;for(ba.lastIndex=0;;){let r=ba.exec(n),a=ba.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vc(e,c===void 0?new Io(o,i,t):new Mo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new bo(o),vc(e,u)),e=u}}}var Oi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Rg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Pg=37297,qg=0;function Lg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Cc=new Nt;function Dg(i){Ht._getMatrix(Cc,Ht.workingColorSpace,i);let t=`mat3( ${Cc.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _c(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(t),a)}else return s}function Ug(i,t){let e=Dg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vg(i,t){let e;switch(t){case Qo:e="Linear";break;case jo:e="Reinhard";break;case $o:e="Cineon";break;case tl:e="ACESFilmic";break;case el:e="AgX";break;case nl:e="Neutral";break;case fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var js=new q;function Ng(){Ht.getLuminanceCoefficients(js);let i=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Fg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function xs(i){return i!==""}function Ic(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(zg,Hg)}var kg=new Map;function Hg(i,t){let e=Ot[t];if(e===void 0){let n=kg.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}var Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(Gg,Wg)}function Wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Xg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function Kg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jo:t="ENVMAP_BLENDING_MULTIPLY";break;case uu:t="ENVMAP_BLENDING_MIX";break;case du:t="ENVMAP_BLENDING_ADD";break}return t}function Jg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Xg(e),c=Yg(e),h=Zg(e),u=Kg(e),d=Jg(e),p=Bg(e),m=Fg(r),A=s.createProgram(),g,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(xs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(xs).join(`
`),f.length>0&&(f+=`
`)):(g=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),f=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Ot.tonemapping_pars_fragment:"",e.toneMapping!==On?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),Ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),a=So(a),a=Ic(a,e),a=Mc(a,e),o=So(o),o=Ic(o,e),o=Mc(o,e),a=bc(a),o=bc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=E+g+a,_=E+f+o,S=yc(s,s.VERTEX_SHADER,M),I=yc(s,s.FRAGMENT_SHADER,_);s.attachShader(A,S),s.attachShader(A,I),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function w(R){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(A).trim(),N=s.getShaderInfoLog(S).trim(),H=s.getShaderInfoLog(I).trim(),K=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,S,I);else{let nt=_c(s,S,"vertex"),k=_c(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+nt+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||H==="")&&(G=!1);G&&(R.diagnostics={runnable:K,programLog:B,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(S),s.deleteShader(I),T=new Oi(s,A),C=Og(s,A)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(A,Pg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=S,this.fragmentShader=I,this}var jg=0,Eo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wo(t),e.set(t,n)),n}},wo=class{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}};function $g(i,t,e,n,s,r,a){let o=new Ar,l=new Eo,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return c.add(C),C===0?"uv":`uv${C}`}function g(C,y,R,B,N){let H=B.fog,K=N.geometry,G=C.isMeshStandardMaterial?B.environment:null,nt=(C.isMeshStandardMaterial?e:t).get(C.envMap||G),k=nt&&nt.mapping===Nr?nt.image.height:null,at=m[C.type];C.precision!==null&&(p=s.getMaxPrecision(C.precision),p!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));let dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=dt!==void 0?dt.length:0,zt=0;K.morphAttributes.position!==void 0&&(zt=1),K.morphAttributes.normal!==void 0&&(zt=2),K.morphAttributes.color!==void 0&&(zt=3);let ne,X,it,yt;if(at){let $t=rn[at];ne=$t.vertexShader,X=$t.fragmentShader}else ne=C.vertexShader,X=C.fragmentShader,l.update(C),it=l.getVertexShaderID(C),yt=l.getFragmentShaderID(C);let ot=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Dt=N.isInstancedMesh===!0,kt=N.isBatchedMesh===!0,de=!!C.map,Yt=!!C.matcap,ge=!!nt,U=!!C.aoMap,We=!!C.lightMap,Gt=!!C.bumpMap,Wt=!!C.normalMap,Tt=!!C.displacementMap,oe=!!C.emissiveMap,wt=!!C.metalnessMap,b=!!C.roughnessMap,x=C.anisotropy>0,V=C.clearcoat>0,Y=C.dispersion>0,J=C.iridescence>0,W=C.sheen>0,Mt=C.transmission>0,lt=x&&!!C.anisotropyMap,ft=V&&!!C.clearcoatMap,Zt=V&&!!C.clearcoatNormalMap,j=V&&!!C.clearcoatRoughnessMap,pt=J&&!!C.iridescenceMap,Rt=J&&!!C.iridescenceThicknessMap,qt=W&&!!C.sheenColorMap,gt=W&&!!C.sheenRoughnessMap,Xt=!!C.specularMap,Ft=!!C.specularColorMap,re=!!C.specularIntensityMap,P=Mt&&!!C.transmissionMap,rt=Mt&&!!C.thicknessMap,z=!!C.gradientMap,Z=!!C.alphaMap,ut=C.alphaTest>0,ct=!!C.alphaHash,Ut=!!C.extensions,fe=On;C.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Se={shaderID:at,shaderType:C.type,shaderName:C.name,vertexShader:ne,fragmentShader:X,defines:C.defines,customVertexShaderID:it,customFragmentShaderID:yt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:kt,batchingColor:kt&&N._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&N.instanceColor!==null,instancingMorph:Dt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ki,alphaToCoverage:!!C.alphaToCoverage,map:de,matcap:Yt,envMap:ge,envMapMode:ge&&nt.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:We,bumpMap:Gt,normalMap:Wt,displacementMap:d&&Tt,emissiveMap:oe,normalMapObjectSpace:Wt&&C.normalMapType===Au,normalMapTangentSpace:Wt&&C.normalMapType===jc,metalnessMap:wt,roughnessMap:b,anisotropy:x,anisotropyMap:lt,clearcoat:V,clearcoatMap:ft,clearcoatNormalMap:Zt,clearcoatRoughnessMap:j,dispersion:Y,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:W,sheenColorMap:qt,sheenRoughnessMap:gt,specularMap:Xt,specularColorMap:Ft,specularIntensityMap:re,transmission:Mt,transmissionMap:P,thicknessMap:rt,gradientMap:z,opaque:C.transparent===!1&&C.blending===Ni&&C.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:ct,combine:C.combine,mapUv:de&&A(C.map.channel),aoMapUv:U&&A(C.aoMap.channel),lightMapUv:We&&A(C.lightMap.channel),bumpMapUv:Gt&&A(C.bumpMap.channel),normalMapUv:Wt&&A(C.normalMap.channel),displacementMapUv:Tt&&A(C.displacementMap.channel),emissiveMapUv:oe&&A(C.emissiveMap.channel),metalnessMapUv:wt&&A(C.metalnessMap.channel),roughnessMapUv:b&&A(C.roughnessMap.channel),anisotropyMapUv:lt&&A(C.anisotropyMap.channel),clearcoatMapUv:ft&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:gt&&A(C.sheenRoughnessMap.channel),specularMapUv:Xt&&A(C.specularMap.channel),specularColorMapUv:Ft&&A(C.specularColorMap.channel),specularIntensityMapUv:re&&A(C.specularIntensityMap.channel),transmissionMapUv:P&&A(C.transmissionMap.channel),thicknessMapUv:rt&&A(C.thicknessMap.channel),alphaMapUv:Z&&A(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Wt||x),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!K.attributes.uv&&(de||Z),fog:!!H,useFog:C.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:N.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:de&&C.map.isVideoTexture===!0&&Ht.getTransfer(C.map.colorSpace)===jt,decodeVideoTextureEmissive:oe&&C.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(C.emissiveMap.colorSpace)===jt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ie,flipSided:C.side===Ve,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ut&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&C.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function f(C){let y=[];if(C.shaderID?y.push(C.shaderID):(y.push(C.customVertexShaderID),y.push(C.customFragmentShaderID)),C.defines!==void 0)for(let R in C.defines)y.push(R),y.push(C.defines[R]);return C.isRawShaderMaterial===!1&&(E(y,C),M(y,C),y.push(i.outputColorSpace)),y.push(C.customProgramCacheKey),y.join()}function E(C,y){C.push(y.precision),C.push(y.outputColorSpace),C.push(y.envMapMode),C.push(y.envMapCubeUVHeight),C.push(y.mapUv),C.push(y.alphaMapUv),C.push(y.lightMapUv),C.push(y.aoMapUv),C.push(y.bumpMapUv),C.push(y.normalMapUv),C.push(y.displacementMapUv),C.push(y.emissiveMapUv),C.push(y.metalnessMapUv),C.push(y.roughnessMapUv),C.push(y.anisotropyMapUv),C.push(y.clearcoatMapUv),C.push(y.clearcoatNormalMapUv),C.push(y.clearcoatRoughnessMapUv),C.push(y.iridescenceMapUv),C.push(y.iridescenceThicknessMapUv),C.push(y.sheenColorMapUv),C.push(y.sheenRoughnessMapUv),C.push(y.specularMapUv),C.push(y.specularColorMapUv),C.push(y.specularIntensityMapUv),C.push(y.transmissionMapUv),C.push(y.thicknessMapUv),C.push(y.combine),C.push(y.fogExp2),C.push(y.sizeAttenuation),C.push(y.morphTargetsCount),C.push(y.morphAttributeCount),C.push(y.numDirLights),C.push(y.numPointLights),C.push(y.numSpotLights),C.push(y.numSpotLightMaps),C.push(y.numHemiLights),C.push(y.numRectAreaLights),C.push(y.numDirLightShadows),C.push(y.numPointLightShadows),C.push(y.numSpotLightShadows),C.push(y.numSpotLightShadowsWithMaps),C.push(y.numLightProbes),C.push(y.shadowMapType),C.push(y.toneMapping),C.push(y.numClippingPlanes),C.push(y.numClipIntersection),C.push(y.depthPacking)}function M(C,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),C.push(o.mask)}function _(C){let y=m[C.type],R;if(y){let B=rn[y];R=Kn.clone(B.uniforms)}else R=C.uniforms;return R}function S(C,y){let R;for(let B=0,N=h.length;B<N;B++){let H=h[B];if(H.cacheKey===y){R=H,++R.usedTimes;break}}return R===void 0&&(R=new Qg(i,y,C,r),h.push(R)),R}function I(C){if(--C.usedTimes===0){let y=h.indexOf(C);h[y]=h[h.length-1],h.pop(),C.destroy()}}function w(C){l.remove(C)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:S,releaseProgram:I,releaseShaderCache:w,programs:h,dispose:T}}function tm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function em(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ec(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,A,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=A,f.group=g),t++,f}function o(u,d,p,m,A,g){let f=a(u,d,p,m,A,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,m,A,g){let f=a(u,d,p,m,A,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||em),n.length>1&&n.sort(d||Ec),s.length>1&&s.sort(d||Ec)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function nm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new wc,i.set(n,[a])):s>=r.length?(a=new wc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function im(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Et};break;case"SpotLight":e={position:new q,direction:new q,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function sm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var rm=0;function am(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function om(i){let t=new im,e=sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let s=new q,r=new se,a=new se;function o(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let p=0,m=0,A=0,g=0,f=0,E=0,M=0,_=0,S=0,I=0,w=0;c.sort(am);for(let C=0,y=c.length;C<y;C++){let R=c[C],B=R.color,N=R.intensity,H=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*N,u+=B.g*N,d+=B.b*N;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],N);w++}else if(R.isDirectionalLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let nt=R.shadow,k=e.get(R);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=G,p++}else if(R.isSpotLight){let G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(B).multiplyScalar(N),G.distance=H,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[A]=G;let nt=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,nt.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[A]=nt.matrix,R.castShadow){let k=e.get(R);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=K,_++}A++}else if(R.isRectAreaLight){let G=t.get(R);G.color.copy(B).multiplyScalar(N),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=G,g++}else if(R.isPointLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let nt=R.shadow,k=e.get(R);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,k.shadowCameraNear=nt.camera.near,k.shadowCameraFar=nt.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=R.shadow.matrix,M++}n.point[m]=G,m++}else if(R.isHemisphereLight){let G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(N),G.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==p||T.pointLength!==m||T.spotLength!==A||T.rectAreaLength!==g||T.hemiLength!==f||T.numDirectionalShadows!==E||T.numPointShadows!==M||T.numSpotShadows!==_||T.numSpotMaps!==S||T.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=w,T.directionalLength=p,T.pointLength=m,T.spotLength=A,T.rectAreaLength=g,T.hemiLength=f,T.numDirectionalShadows=E,T.numPointShadows=M,T.numSpotShadows=_,T.numSpotMaps=S,T.numLightProbes=w,n.version=rm++)}function l(c,h){let u=0,d=0,p=0,m=0,A=0,g=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let M=c[f];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let _=n.hemi[A];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),A++}}}return{setup:o,setupView:l,state:n}}function Tc(i){let t=new om(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function lm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Tc(i),t.set(s,[o])):r>=a.length?(o=new Tc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var To=class extends En{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ro=class extends En{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hm=`uniform sampler2D shadow_pass;
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
}`;function um(i,t,e){let n=new Cs,s=new Ct,r=new Ct,a=new ee,o=new To({depthPacking:mu}),l=new Ro,c={},h=e.maxTextureSize,u={[kn]:Ve,[Ve]:kn,[Ie]:Ie},d=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:cm,fragmentShader:hm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Me;m.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new ie(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let f=this.type;this.render=function(I,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let C=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(cn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let N=f!==Cn&&this.type===Cn,H=f===Cn&&this.type!==Cn;for(let K=0,G=I.length;K<G;K++){let nt=I[K],k=nt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let at=k.getFrameExtents();if(s.multiply(at),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,k.mapSize.y=r.y)),k.map===null||N===!0||H===!0){let St=this.type!==Cn?{minFilter:ke,magFilter:ke}:{};k.map!==null&&k.map.dispose(),k.map=new Le(s.x,s.y,St),k.map.texture.name=nt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let dt=k.getViewportCount();for(let St=0;St<dt;St++){let zt=k.getViewport(St);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),B.viewport(a),k.updateMatrices(nt,St),n=k.getFrustum(),_(w,T,k.camera,nt,this.type)}k.isPointLightShadow!==!0&&this.type===Cn&&E(k,T),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(C,y,R)};function E(I,w){let T=t.update(A);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Le(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(w,null,T,d,A,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(w,null,T,p,A,null)}function M(I,w,T,C){let y=null,R=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)y=R;else if(y=T.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let B=y.uuid,N=w.uuid,H=c[B];H===void 0&&(H={},c[B]=H);let K=H[N];K===void 0&&(K=y.clone(),H[N]=K,w.addEventListener("dispose",S)),y=K}if(y.visible=w.visible,y.wireframe=w.wireframe,C===Cn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let B=i.properties.get(y);B.light=T}return y}function _(I,w,T,C,y){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Cn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);let N=t.update(I),H=I.material;if(Array.isArray(H)){let K=N.groups;for(let G=0,nt=K.length;G<nt;G++){let k=K[G],at=H[k.materialIndex];if(at&&at.visible){let dt=M(I,at,C,y);I.onBeforeShadow(i,I,w,T,N,dt,k),i.renderBufferDirect(T,null,N,dt,I,k),I.onAfterShadow(i,I,w,T,N,dt,k)}}}else if(H.visible){let K=M(I,H,C,y);I.onBeforeShadow(i,I,w,T,N,K,null),i.renderBufferDirect(T,null,N,K,I,null),I.onAfterShadow(i,I,w,T,N,K,null)}}let B=I.children;for(let N=0,H=B.length;N<H;N++)_(B[N],w,T,C,y)}function S(I){I.target.removeEventListener("dispose",S);for(let T in c){let C=c[T],y=I.target.uuid;y in C&&(C[y].dispose(),delete C[y])}}}var dm={[Pa]:qa,[La]:Va,[Da]:Na,[zi]:Ua,[qa]:Pa,[Va]:La,[Na]:Da,[Ua]:zi};function fm(i,t){function e(){let P=!1,rt=new ee,z=null,Z=new ee(0,0,0,0);return{setMask:function(ut){z!==ut&&!P&&(i.colorMask(ut,ut,ut,ut),z=ut)},setLocked:function(ut){P=ut},setClear:function(ut,ct,Ut,fe,Se){Se===!0&&(ut*=fe,ct*=fe,Ut*=fe),rt.set(ut,ct,Ut,fe),Z.equals(rt)===!1&&(i.clearColor(ut,ct,Ut,fe),Z.copy(rt))},reset:function(){P=!1,z=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,rt=!1,z=null,Z=null,ut=null;return{setReversed:function(ct){if(rt!==ct){let Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let fe=ut;ut=null,this.setClear(fe)}rt=ct},getReversed:function(){return rt},setTest:function(ct){ct?ot(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ct){z!==ct&&!P&&(i.depthMask(ct),z=ct)},setFunc:function(ct){if(rt&&(ct=dm[ct]),Z!==ct){switch(ct){case Pa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ct}},setLocked:function(ct){P=ct},setClear:function(ct){ut!==ct&&(rt&&(ct=1-ct),i.clearDepth(ct),ut=ct)},reset:function(){P=!1,z=null,Z=null,ut=null,rt=!1}}}function s(){let P=!1,rt=null,z=null,Z=null,ut=null,ct=null,Ut=null,fe=null,Se=null;return{setTest:function($t){P||($t?ot(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function($t){rt!==$t&&!P&&(i.stencilMask($t),rt=$t)},setFunc:function($t,Ke,pn){(z!==$t||Z!==Ke||ut!==pn)&&(i.stencilFunc($t,Ke,pn),z=$t,Z=Ke,ut=pn)},setOp:function($t,Ke,pn){(ct!==$t||Ut!==Ke||fe!==pn)&&(i.stencilOp($t,Ke,pn),ct=$t,Ut=Ke,fe=pn)},setLocked:function($t){P=$t},setClear:function($t){Se!==$t&&(i.clearStencil($t),Se=$t)},reset:function(){P=!1,rt=null,z=null,Z=null,ut=null,ct=null,Ut=null,fe=null,Se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,A=!1,g=null,f=null,E=null,M=null,_=null,S=null,I=null,w=new Et(0,0,0),T=0,C=!1,y=null,R=null,B=null,N=null,H=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=nt>=1):k.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=nt>=2);let at=null,dt={},St=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),ne=new ee().fromArray(St),X=new ee().fromArray(zt);function it(P,rt,z,Z){let ut=new Uint8Array(4),ct=i.createTexture();i.bindTexture(P,ct),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<z;Ut++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(rt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ct}let yt={};yt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(zi),Gt(!1),Wt(Ll),ot(i.CULL_FACE),U(cn);function ot(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Pt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Dt(P,rt){return u[P]!==rt?(i.bindFramebuffer(P,rt),u[P]=rt,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function kt(P,rt){let z=p,Z=!1;if(P){z=d.get(rt),z===void 0&&(z=[],d.set(rt,z));let ut=P.textures;if(z.length!==ut.length||z[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ut=ut.length;ct<Ut;ct++)z[ct]=i.COLOR_ATTACHMENT0+ct;z.length=ut.length,Z=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,Z=!0);Z&&i.drawBuffers(z)}function de(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Yt={[ri]:i.FUNC_ADD,[Zh]:i.FUNC_SUBTRACT,[Kh]:i.FUNC_REVERSE_SUBTRACT};Yt[Jh]=i.MIN,Yt[Qh]=i.MAX;let ge={[jh]:i.ZERO,[$h]:i.ONE,[tu]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[au]:i.SRC_ALPHA_SATURATE,[su]:i.DST_COLOR,[nu]:i.DST_ALPHA,[eu]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[ru]:i.ONE_MINUS_DST_COLOR,[iu]:i.ONE_MINUS_DST_ALPHA,[ou]:i.CONSTANT_COLOR,[lu]:i.ONE_MINUS_CONSTANT_COLOR,[cu]:i.CONSTANT_ALPHA,[hu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(P,rt,z,Z,ut,ct,Ut,fe,Se,$t){if(P===cn){A===!0&&(Pt(i.BLEND),A=!1);return}if(A===!1&&(ot(i.BLEND),A=!0),P!==Yh){if(P!==g||$t!==C){if((f!==ri||_!==ri)&&(i.blendEquation(i.FUNC_ADD),f=ri,_=ri),$t)switch(P){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hn:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,M=null,S=null,I=null,w.set(0,0,0),T=0,g=P,C=$t}return}ut=ut||rt,ct=ct||z,Ut=Ut||Z,(rt!==f||ut!==_)&&(i.blendEquationSeparate(Yt[rt],Yt[ut]),f=rt,_=ut),(z!==E||Z!==M||ct!==S||Ut!==I)&&(i.blendFuncSeparate(ge[z],ge[Z],ge[ct],ge[Ut]),E=z,M=Z,S=ct,I=Ut),(fe.equals(w)===!1||Se!==T)&&(i.blendColor(fe.r,fe.g,fe.b,Se),w.copy(fe),T=Se),g=P,C=!1}function We(P,rt){P.side===Ie?Pt(i.CULL_FACE):ot(i.CULL_FACE);let z=P.side===Ve;rt&&(z=!z),Gt(z),P.blending===Ni&&P.transparent===!1?U(cn):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function Wt(P){P!==Gh?(ot(i.CULL_FACE),P!==R&&(P===Ll?i.cullFace(i.BACK):P===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),R=P}function Tt(P){P!==B&&(G&&i.lineWidth(P),B=P)}function oe(P,rt,z){P?(ot(i.POLYGON_OFFSET_FILL),(N!==rt||H!==z)&&(i.polygonOffset(rt,z),N=rt,H=z)):Pt(i.POLYGON_OFFSET_FILL)}function wt(P){P?ot(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function b(P){P===void 0&&(P=i.TEXTURE0+K-1),at!==P&&(i.activeTexture(P),at=P)}function x(P,rt,z){z===void 0&&(at===null?z=i.TEXTURE0+K-1:z=at);let Z=dt[z];Z===void 0&&(Z={type:void 0,texture:void 0},dt[z]=Z),(Z.type!==P||Z.texture!==rt)&&(at!==z&&(i.activeTexture(z),at=z),i.bindTexture(P,rt||yt[P]),Z.type=P,Z.texture=rt)}function V(){let P=dt[at];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(P){ne.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function gt(P){X.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function Xt(P,rt){let z=c.get(rt);z===void 0&&(z=new WeakMap,c.set(rt,z));let Z=z.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(rt,P.name),z.set(P,Z))}function Ft(P,rt){let Z=c.get(rt).get(P);l.get(rt)!==Z&&(i.uniformBlockBinding(rt,Z,P.__bindingPointIndex),l.set(rt,Z))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,dt={},u={},d=new WeakMap,p=[],m=null,A=!1,g=null,f=null,E=null,M=null,_=null,S=null,I=null,w=new Et(0,0,0),T=0,C=!1,y=null,R=null,B=null,N=null,H=null,ne.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Pt,bindFramebuffer:Dt,drawBuffers:kt,useProgram:de,setBlending:U,setMaterial:We,setFlipSided:Gt,setCullFace:Wt,setLineWidth:Tt,setPolygonOffset:oe,setScissorTest:wt,activeTexture:b,bindTexture:x,unbindTexture:V,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:pt,texImage3D:Rt,updateUBOMapping:Xt,uniformBlockBinding:Ft,texStorage2D:Zt,texStorage3D:j,texSubImage2D:W,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:qt,viewport:gt,reset:re}}function Rc(i,t,e,n){let s=pm(n);switch(e){case Xc:return i*t;case Zc:return i*t;case Kc:return i*t*2;case al:return i*t/s.components*s.byteLength;case ol:return i*t/s.components*s.byteLength;case Jc:return i*t*2/s.components*s.byteLength;case ll:return i*t*2/s.components*s.byteLength;case Yc:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case cl:return i*t*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case ka:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hr:case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qc:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pm(i){switch(i){case bn:case Hc:return{byteLength:1,components:1};case ys:case Gc:case nn:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case ci:case il:case ln:return{byteLength:4,components:1};case Wc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,x){return p?new OffscreenCanvas(b,x):fr("canvas")}function A(b,x,V){let Y=1,J=wt(b);if((J.width>V||J.height>V)&&(Y=V/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let W=Math.floor(Y*J.width),Mt=Math.floor(Y*J.height);u===void 0&&(u=m(W,Mt));let lt=x?m(W,Mt):u;return lt.width=W,lt.height=Mt,lt.getContext("2d").drawImage(b,0,0,W,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Mt+")."),lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function g(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,x,V,Y,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=x;if(x===i.RED&&(V===i.FLOAT&&(W=i.R32F),V===i.HALF_FLOAT&&(W=i.R16F),V===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.R8UI),V===i.UNSIGNED_SHORT&&(W=i.R16UI),V===i.UNSIGNED_INT&&(W=i.R32UI),V===i.BYTE&&(W=i.R8I),V===i.SHORT&&(W=i.R16I),V===i.INT&&(W=i.R32I)),x===i.RG&&(V===i.FLOAT&&(W=i.RG32F),V===i.HALF_FLOAT&&(W=i.RG16F),V===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RG8UI),V===i.UNSIGNED_SHORT&&(W=i.RG16UI),V===i.UNSIGNED_INT&&(W=i.RG32UI),V===i.BYTE&&(W=i.RG8I),V===i.SHORT&&(W=i.RG16I),V===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGB8UI),V===i.UNSIGNED_SHORT&&(W=i.RGB16UI),V===i.UNSIGNED_INT&&(W=i.RGB32UI),V===i.BYTE&&(W=i.RGB8I),V===i.SHORT&&(W=i.RGB16I),V===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),V===i.UNSIGNED_INT&&(W=i.RGBA32UI),V===i.BYTE&&(W=i.RGBA8I),V===i.SHORT&&(W=i.RGBA16I),V===i.INT&&(W=i.RGBA32I)),x===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let Mt=J?Br:Ht.getTransfer(Y);V===i.FLOAT&&(W=i.RGBA32F),V===i.HALF_FLOAT&&(W=i.RGBA16F),V===i.UNSIGNED_BYTE&&(W=Mt===jt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(b,x){let V;return b?x===null||x===ci||x===Gi?V=i.DEPTH24_STENCIL8:x===ln?V=i.DEPTH32F_STENCIL8:x===ys&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ci||x===Gi?V=i.DEPTH_COMPONENT24:x===ln?V=i.DEPTH_COMPONENT32F:x===ys&&(V=i.DEPTH_COMPONENT16),V}function S(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==ke&&b.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function I(b){let x=b.target;x.removeEventListener("dispose",I),T(x),x.isVideoTexture&&h.delete(x)}function w(b){let x=b.target;x.removeEventListener("dispose",w),y(x)}function T(b){let x=n.get(b);if(x.__webglInit===void 0)return;let V=b.source,Y=d.get(V);if(Y){let J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(b),Object.keys(Y).length===0&&d.delete(V)}n.remove(b)}function C(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let V=b.source,Y=d.get(V);delete Y[x.__cacheKey],a.memory.textures--}function y(b){let x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=b.textures;for(let Y=0,J=V.length;Y<J;Y++){let W=n.get(V[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(b)}let R=0;function B(){R=0}function N(){let b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function H(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function K(b,x){let V=n.get(b);if(b.isVideoTexture&&Tt(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(V,b,x);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function G(b,x){let V=n.get(b);if(b.version>0&&V.__version!==b.version){X(V,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function nt(b,x){let V=n.get(b);if(b.version>0&&V.__version!==b.version){X(V,b,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function k(b,x){let V=n.get(b);if(b.version>0&&V.__version!==b.version){it(V,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let at={[Oa]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},dt={[ke]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},St={[xu]:i.NEVER,[Mu]:i.ALWAYS,[vu]:i.LESS,[$c]:i.LEQUAL,[yu]:i.EQUAL,[Iu]:i.GEQUAL,[Cu]:i.GREATER,[_u]:i.NOTEQUAL};function zt(b,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===Jr||x.magFilter===qs||x.magFilter===li||x.minFilter===on||x.minFilter===Jr||x.minFilter===qs||x.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,at[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,at[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,at[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ke||x.minFilter!==qs&&x.minFilter!==li||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ne(b,x){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",I));let Y=x.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let W=H(x);if(W!==b.__cacheKey){J[W]===void 0&&(J[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),J[W].usedTimes++;let Mt=J[b.__cacheKey];Mt!==void 0&&(J[b.__cacheKey].usedTimes--,Mt.usedTimes===0&&C(x)),b.__cacheKey=W,b.__webglTexture=J[W].texture}return V}function X(b,x,V){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let J=ne(b,x),W=x.source;e.bindTexture(Y,b.__webglTexture,i.TEXTURE0+V);let Mt=n.get(W);if(W.version!==Mt.__version||J===!0){e.activeTexture(i.TEXTURE0+V);let lt=Ht.getPrimaries(Ht.workingColorSpace),ft=x.colorSpace===Bn?null:Ht.getPrimaries(x.colorSpace),Zt=x.colorSpace===Bn||lt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let j=A(x.image,!1,s.maxTextureSize);j=oe(x,j);let pt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),qt=M(x.internalFormat,pt,Rt,x.colorSpace,x.isVideoTexture);zt(Y,x);let gt,Xt=x.mipmaps,Ft=x.isVideoTexture!==!0,re=Mt.__version===void 0||J===!0,P=W.dataReady,rt=S(x,j);if(x.isDepthTexture)qt=_(x.format===Wi,x.type),re&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,qt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,qt,j.width,j.height,0,pt,Rt,null));else if(x.isDataTexture)if(Xt.length>0){Ft&&re&&e.texStorage2D(i.TEXTURE_2D,rt,qt,Xt[0].width,Xt[0].height);for(let z=0,Z=Xt.length;z<Z;z++)gt=Xt[z],Ft?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,gt.width,gt.height,pt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,z,qt,gt.width,gt.height,0,pt,Rt,gt.data);x.generateMipmaps=!1}else Ft?(re&&e.texStorage2D(i.TEXTURE_2D,rt,qt,j.width,j.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,pt,Rt,j.data)):e.texImage2D(i.TEXTURE_2D,0,qt,j.width,j.height,0,pt,Rt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,qt,Xt[0].width,Xt[0].height,j.depth);for(let z=0,Z=Xt.length;z<Z;z++)if(gt=Xt[z],x.format!==tn)if(pt!==null)if(Ft){if(P)if(x.layerUpdates.size>0){let ut=Rc(gt.width,gt.height,x.format,x.type);for(let ct of x.layerUpdates){let Ut=gt.data.subarray(ct*ut/gt.data.BYTES_PER_ELEMENT,(ct+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,ct,gt.width,gt.height,1,pt,Ut)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,gt.width,gt.height,j.depth,pt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,qt,gt.width,gt.height,j.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,gt.width,gt.height,j.depth,pt,Rt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,qt,gt.width,gt.height,j.depth,0,pt,Rt,gt.data)}else{Ft&&re&&e.texStorage2D(i.TEXTURE_2D,rt,qt,Xt[0].width,Xt[0].height);for(let z=0,Z=Xt.length;z<Z;z++)gt=Xt[z],x.format!==tn?pt!==null?Ft?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,qt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,gt.width,gt.height,pt,Rt,gt.data):e.texImage2D(i.TEXTURE_2D,z,qt,gt.width,gt.height,0,pt,Rt,gt.data)}else if(x.isDataArrayTexture)if(Ft){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,qt,j.width,j.height,j.depth),P)if(x.layerUpdates.size>0){let z=Rc(j.width,j.height,x.format,x.type);for(let Z of x.layerUpdates){let ut=j.data.subarray(Z*z/j.data.BYTES_PER_ELEMENT,(Z+1)*z/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,pt,Rt,ut)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pt,Rt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,j.width,j.height,j.depth,0,pt,Rt,j.data);else if(x.isData3DTexture)Ft?(re&&e.texStorage3D(i.TEXTURE_3D,rt,qt,j.width,j.height,j.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pt,Rt,j.data)):e.texImage3D(i.TEXTURE_3D,0,qt,j.width,j.height,j.depth,0,pt,Rt,j.data);else if(x.isFramebufferTexture){if(re)if(Ft)e.texStorage2D(i.TEXTURE_2D,rt,qt,j.width,j.height);else{let z=j.width,Z=j.height;for(let ut=0;ut<rt;ut++)e.texImage2D(i.TEXTURE_2D,ut,qt,z,Z,0,pt,Rt,null),z>>=1,Z>>=1}}else if(Xt.length>0){if(Ft&&re){let z=wt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,rt,qt,z.width,z.height)}for(let z=0,Z=Xt.length;z<Z;z++)gt=Xt[z],Ft?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt,Rt,gt):e.texImage2D(i.TEXTURE_2D,z,qt,pt,Rt,gt);x.generateMipmaps=!1}else if(Ft){if(re){let z=wt(j);e.texStorage2D(i.TEXTURE_2D,rt,qt,z.width,z.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Rt,j)}else e.texImage2D(i.TEXTURE_2D,0,qt,pt,Rt,j);g(x)&&f(Y),Mt.__version=W.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function it(b,x,V){if(x.image.length!==6)return;let Y=ne(b,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+V);let W=n.get(J);if(J.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+V);let Mt=Ht.getPrimaries(Ht.workingColorSpace),lt=x.colorSpace===Bn?null:Ht.getPrimaries(x.colorSpace),ft=x.colorSpace===Bn||Mt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Zt=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Zt&&!j?pt[Z]=A(x.image[Z],!0,s.maxCubemapSize):pt[Z]=j?x.image[Z].image:x.image[Z],pt[Z]=oe(x,pt[Z]);let Rt=pt[0],qt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),Xt=M(x.internalFormat,qt,gt,x.colorSpace),Ft=x.isVideoTexture!==!0,re=W.__version===void 0||Y===!0,P=J.dataReady,rt=S(x,Rt);zt(i.TEXTURE_CUBE_MAP,x);let z;if(Zt){Ft&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Xt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){z=pt[Z].mipmaps;for(let ut=0;ut<z.length;ut++){let ct=z[ut];x.format!==tn?qt!==null?Ft?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,qt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,qt,gt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Xt,ct.width,ct.height,0,qt,gt,ct.data)}}}else{if(z=x.mipmaps,Ft&&re){z.length>0&&rt++;let Z=wt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,qt,gt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,pt[Z].width,pt[Z].height,0,qt,gt,pt[Z].data);for(let ut=0;ut<z.length;ut++){let Ut=z[ut].image[Z].image;Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ut.width,Ut.height,qt,gt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Xt,Ut.width,Ut.height,0,qt,gt,Ut.data)}}else{Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,qt,gt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,qt,gt,pt[Z]);for(let ut=0;ut<z.length;ut++){let ct=z[ut];Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,qt,gt,ct.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Xt,qt,gt,ct.image[Z])}}}g(x)&&f(i.TEXTURE_CUBE_MAP),W.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function yt(b,x,V,Y,J,W){let Mt=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),ft=M(V.internalFormat,Mt,lt,V.colorSpace),Zt=n.get(x),j=n.get(V);if(j.__renderTarget=x,!Zt.__hasExternalTextures){let pt=Math.max(1,x.width>>W),Rt=Math.max(1,x.height>>W);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,W,ft,pt,Rt,x.depth,0,Mt,lt,null):e.texImage2D(J,W,ft,pt,Rt,0,Mt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,j.__webglTexture,0,Gt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,j.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(b,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){let Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,W=_(x.stencilBuffer,J),Mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Gt(x);Wt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,W,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,b)}else{let Y=x.textures;for(let J=0;J<Y.length;J++){let W=Y[J],Mt=r.convert(W.format,W.colorSpace),lt=r.convert(W.type),ft=M(W.internalFormat,Mt,lt,W.colorSpace),Zt=Gt(x);V&&Wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,ft,x.width,x.height):Wt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let J=Y.__webglTexture,W=Gt(x);if(x.depthTexture.format===Bi)Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===Wi)Wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(b){let x=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,b)}else if(V){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),ot(x.__webglDepthbuffer[Y],b,!1);else{let J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ot(x.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(b,x,V){let Y=n.get(b);x!==void 0&&yt(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Dt(b)}function de(b){let x=b.texture,V=n.get(b),Y=n.get(x);b.addEventListener("dispose",w);let J=b.textures,W=b.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),W){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let ft=0;ft<x.mipmaps.length;ft++)V.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else V.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)V.__webglFramebuffer[lt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let lt=0,ft=J.length;lt<ft;lt++){let Zt=n.get(J[lt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Wt(b)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){let ft=J[lt];V.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);let Zt=r.convert(ft.format,ft.colorSpace),j=r.convert(ft.type),pt=M(ft.internalFormat,Zt,j,ft.colorSpace,b.isXRRenderTarget===!0),Rt=Gt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(V.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)yt(V.__webglFramebuffer[lt][ft],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else yt(V.__webglFramebuffer[lt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,ft=J.length;lt<ft;lt++){let Zt=J[lt],j=n.get(Zt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),zt(i.TEXTURE_2D,Zt),yt(V.__webglFramebuffer,b,Zt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),g(Zt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Y.__webglTexture),zt(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)yt(V.__webglFramebuffer[ft],b,x,i.COLOR_ATTACHMENT0,lt,ft);else yt(V.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,lt,0);g(x)&&f(lt),e.unbindTexture()}b.depthBuffer&&Dt(b)}function Yt(b){let x=b.textures;for(let V=0,Y=x.length;V<Y;V++){let J=x[V];if(g(J)){let W=E(b),Mt=n.get(J).__webglTexture;e.bindTexture(W,Mt),f(W),e.unbindTexture()}}}let ge=[],U=[];function We(b){if(b.samples>0){if(Wt(b)===!1){let x=b.textures,V=b.width,Y=b.height,J=i.COLOR_BUFFER_BIT,W=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(b),lt=x.length>1;if(lt)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Zt=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,J,i.NEAREST),l===!0&&(ge.length=0,U.length=0,ge.push(i.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ge.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Zt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Gt(b){return Math.min(s.maxSamples,b.samples)}function Wt(b){let x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(b){let x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function oe(b,x){let V=b.colorSpace,Y=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||V!==Ki&&V!==Bn&&(Ht.getTransfer(V)===jt?(Y!==tn||J!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function wt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=k,this.rebindTextures=kt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Wt}function mm(i,t){function e(n,s=Bn){let r,a=Ht.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===il)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===tn)return i.RGBA;if(n===Zc)return i.LUMINANCE;if(n===Kc)return i.LUMINANCE_ALPHA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===al)return i.RED;if(n===ol)return i.RED_INTEGER;if(n===Jc)return i.RG;if(n===ll)return i.RG_INTEGER;if(n===cl)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ha||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xa||n===Ya)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ka||n===Ja||n===Qa||n===ja||n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===co||n===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hr)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qc||n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Po=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Bt=class extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Am={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),f=this._getHandJoint(c,A);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vm=`
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

}`,qo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:xm,fragmentShader:vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lo=class extends Gn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,A=new qo,g=e.getContextAttributes(),f=null,E=null,M=[],_=[],S=new Ct,I=null,w=new Te;w.viewport=new ee;let T=new Te;T.viewport=new ee;let C=[w,T],y=new Po,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let it=M[X];return it===void 0&&(it=new vs,M[X]=it),it.getTargetRaySpace()},this.getControllerGrip=function(X){let it=M[X];return it===void 0&&(it=new vs,M[X]=it),it.getGripSpace()},this.getHand=function(X){let it=M[X];return it===void 0&&(it=new vs,M[X]=it),it.getHandSpace()};function N(X){let it=_.indexOf(X.inputSource);if(it===-1)return;let yt=M[it];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||a),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let X=0;X<M.length;X++){let it=_[X];it!==null&&(_[X]=null,M[X].disconnect(it))}R=null,B=null,A.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Le(p.framebufferWidth,p.framebufferHeight,{format:tn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,yt=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?Wi:Bi,yt=g.stencil?Gi:ci);let Pt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Le(d.textureWidth,d.textureHeight,{format:tn,type:bn,depthTexture:new Ir(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function K(X){for(let it=0;it<X.removed.length;it++){let yt=X.removed[it],ot=_.indexOf(yt);ot>=0&&(_[ot]=null,M[ot].disconnect(yt))}for(let it=0;it<X.added.length;it++){let yt=X.added[it],ot=_.indexOf(yt);if(ot===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=_.length){_.push(yt),ot=Dt;break}else if(_[Dt]===null){_[Dt]=yt,ot=Dt;break}if(ot===-1)break}let Pt=M[ot];Pt&&Pt.connect(yt)}}let G=new q,nt=new q;function k(X,it,yt){G.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(yt.matrixWorld);let ot=G.distanceTo(nt),Pt=it.projectionMatrix.elements,Dt=yt.projectionMatrix.elements,kt=Pt[14]/(Pt[10]-1),de=Pt[14]/(Pt[10]+1),Yt=(Pt[9]+1)/Pt[5],ge=(Pt[9]-1)/Pt[5],U=(Pt[8]-1)/Pt[0],We=(Dt[8]+1)/Dt[0],Gt=kt*U,Wt=kt*We,Tt=ot/(-U+We),oe=Tt*-U;if(it.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(oe),X.translateZ(Tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pt[10]===-1)X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let wt=kt+Tt,b=de+Tt,x=Gt-oe,V=Wt+(ot-oe),Y=Yt*de/b*wt,J=ge*de/b*wt;X.projectionMatrix.makePerspective(x,V,Y,J,wt,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function at(X,it){it===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(it.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let it=X.near,yt=X.far;A.texture!==null&&(A.depthNear>0&&(it=A.depthNear),A.depthFar>0&&(yt=A.depthFar)),y.near=T.near=w.near=it,y.far=T.far=w.far=yt,(R!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,B=y.far),w.layers.mask=X.layers.mask|2,T.layers.mask=X.layers.mask|4,y.layers.mask=w.layers.mask|T.layers.mask;let ot=X.parent,Pt=y.cameras;at(y,ot);for(let Dt=0;Dt<Pt.length;Dt++)at(Pt[Dt],ot);Pt.length===2?k(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),dt(X,y,ot)};function dt(X,it,yt){yt===null?X.matrix.copy(it.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(it.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ao*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let St=null;function zt(X,it){if(h=it.getViewerPose(c||a),m=it,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ot=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Dt=0;Dt<yt.length;Dt++){let kt=yt[Dt],de=null;if(p!==null)de=p.getViewport(kt);else{let ge=u.getViewSubImage(d,kt);de=ge.viewport,Dt===0&&(t.setRenderTargetTextures(E,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(E))}let Yt=C[Dt];Yt===void 0&&(Yt=new Te,Yt.layers.enable(Dt),Yt.viewport=new ee,C[Dt]=Yt),Yt.matrix.fromArray(kt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(kt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(de.x,de.y,de.width,de.height),Dt===0&&(y.matrix.copy(Yt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(Yt)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let Dt=u.getDepthInformation(yt[0]);Dt&&Dt.isValid&&Dt.texture&&A.init(t,Dt,s.renderState)}}for(let yt=0;yt<M.length;yt++){let ot=_[yt],Pt=M[yt];ot!==null&&Pt!==void 0&&Pt.update(ot,it,c||a)}St&&St(X,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let ne=new ih;ne.setAnimationLoop(zt),this.setAnimationLoop=function(X){St=X},this.dispose=function(){}}},ii=new hn,ym=new se;function Cm(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,nh(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,E,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),A(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,E,M):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ve&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ve&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let E=t.get(f),M=E.envMap,_=E.envMapRotation;M&&(g.envMap.value=M,ii.copy(_),ii.x*=-1,ii.y*=-1,ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),g.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(ii)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,E,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*E,g.scale.value=M*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,E){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function A(g,f){let E=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _m(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let _=M.program;n.uniformBlockBinding(E,_)}function c(E,M){let _=s[E.id];_===void 0&&(m(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",g));let S=M.program;n.updateUBOMapping(E,S);let I=t.render.frame;r[E.id]!==I&&(d(E),r[E.id]=I)}function h(E){let M=u();E.__bindingPointIndex=M;let _=i.createBuffer(),S=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let M=s[E.id],_=E.uniforms,S=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let I=0,w=_.length;I<w;I++){let T=Array.isArray(_[I])?_[I]:[_[I]];for(let C=0,y=T.length;C<y;C++){let R=T[C];if(p(R,I,C,S)===!0){let B=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],H=0;for(let K=0;K<N.length;K++){let G=N[K],nt=A(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+H,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,H),H+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,_,S){let I=E.value,w=M+"_"+_;if(S[w]===void 0)return typeof I=="number"||typeof I=="boolean"?S[w]=I:S[w]=I.clone(),!0;{let T=S[w];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return S[w]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function m(E){let M=E.uniforms,_=0,S=16;for(let w=0,T=M.length;w<T;w++){let C=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,R=C.length;y<R;y++){let B=C[y],N=Array.isArray(B.value)?B.value:[B.value];for(let H=0,K=N.length;H<K;H++){let G=N[H],nt=A(G),k=_%S,at=k%nt.boundary,dt=k+at;_+=at,dt!==0&&S-dt<nt.storage&&(_+=S-dt),B.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=nt.storage}}}let I=_%S;return I>0&&(_+=S-I),E.__size=_,E.__cache={},this}function A(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function g(E){let M=E.target;M.removeEventListener("dispose",g);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Mr=class{constructor(t={}){let{canvas:e=Su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,f=null,E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=On,this.toneMappingExposure=1;let _=this,S=!1,I=0,w=0,T=null,C=-1,y=null,R=new ee,B=new ee,N=null,H=new Et(0),K=0,G=e.width,nt=e.height,k=1,at=null,dt=null,St=new ee(0,0,G,nt),zt=new ee(0,0,G,nt),ne=!1,X=new Cs,it=!1,yt=!1,ot=new se,Pt=new se,Dt=new q,kt=new ee,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function ge(){return T===null?k:1}let U=n;function We(v,L){return e.getContext(v,L)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){let L="webgl2";if(U=We(L,v),U===null)throw We(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Gt,Wt,Tt,oe,wt,b,x,V,Y,J,W,Mt,lt,ft,Zt,j,pt,Rt,qt,gt,Xt,Ft,re,P;function rt(){Gt=new Bp(U),Gt.init(),Ft=new mm(U,Gt),Wt=new qp(U,Gt,t,Ft),Tt=new fm(U,Gt),Wt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),oe=new zp(U),wt=new tm,b=new gm(U,Gt,Tt,wt,Wt,Ft,oe),x=new Dp(_),V=new Np(_),Y=new Yu(U),re=new Rp(U,Y),J=new Fp(U,Y,oe,re),W=new Hp(U,J,Y,oe),qt=new kp(U,Wt,b),j=new Lp(wt),Mt=new $g(_,x,V,Gt,Wt,re,j),lt=new Cm(_,wt),ft=new nm,Zt=new lm(Gt),Rt=new Tp(_,x,V,Tt,W,p,l),pt=new um(_,W,Wt),P=new _m(U,oe,Wt,Tt),gt=new Pp(U,Gt,oe),Xt=new Op(U,Gt,oe),oe.programs=Mt.programs,_.capabilities=Wt,_.extensions=Gt,_.properties=wt,_.renderLists=ft,_.shadowMap=pt,_.state=Tt,_.info=oe}rt();let z=new Lo(_,U);this.xr=z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=Gt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Gt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(G,nt,!1))},this.getSize=function(v){return v.set(G,nt)},this.setSize=function(v,L,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,nt=L,e.width=Math.floor(v*k),e.height=Math.floor(L*k),F===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(G*k,nt*k).floor()},this.setDrawingBufferSize=function(v,L,F){G=v,nt=L,k=F,e.width=Math.floor(v*F),e.height=Math.floor(L*F),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(St)},this.setViewport=function(v,L,F,O){v.isVector4?St.set(v.x,v.y,v.z,v.w):St.set(v,L,F,O),Tt.viewport(R.copy(St).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,L,F,O){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,L,F,O),Tt.scissor(B.copy(zt).multiplyScalar(k).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(v){Tt.setScissorTest(ne=v)},this.setOpaqueSort=function(v){at=v},this.setTransparentSort=function(v){dt=v},this.getClearColor=function(v){return v.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(v=!0,L=!0,F=!0){let O=0;if(v){let D=!1;if(T!==null){let tt=T.texture.format;D=tt===cl||tt===ll||tt===ol}if(D){let tt=T.texture.type,ht=tt===bn||tt===ci||tt===ys||tt===Gi||tt===sl||tt===rl,At=Rt.getClearColor(),xt=Rt.getClearAlpha(),Lt=At.r,Vt=At.g,vt=At.b;ht?(m[0]=Lt,m[1]=Vt,m[2]=vt,m[3]=xt,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=Lt,A[1]=Vt,A[2]=vt,A[3]=xt,U.clearBufferiv(U.COLOR,0,A))}else O|=U.COLOR_BUFFER_BIT}L&&(O|=U.DEPTH_BUFFER_BIT),F&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Zt.dispose(),wt.dispose(),x.dispose(),V.dispose(),W.dispose(),re.dispose(),P.dispose(),Mt.dispose(),z.dispose(),z.removeEventListener("sessionstart",bl),z.removeEventListener("sessionend",Sl),Qn.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let v=oe.autoReset,L=pt.enabled,F=pt.autoUpdate,O=pt.needsUpdate,D=pt.type;rt(),oe.autoReset=v,pt.enabled=L,pt.autoUpdate=F,pt.needsUpdate=O,pt.type=D}function ct(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ut(v){let L=v.target;L.removeEventListener("dispose",Ut),fe(L)}function fe(v){Se(v),wt.remove(v)}function Se(v){let L=wt.get(v).programs;L!==void 0&&(L.forEach(function(F){Mt.releaseProgram(F)}),v.isShaderMaterial&&Mt.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,F,O,D,tt){L===null&&(L=de);let ht=D.isMesh&&D.matrixWorld.determinant()<0,At=zh(v,L,F,O,D);Tt.setMaterial(O,ht);let xt=F.index,Lt=1;if(O.wireframe===!0){if(xt=J.getWireframeAttribute(F),xt===void 0)return;Lt=2}let Vt=F.drawRange,vt=F.attributes.position,Kt=Vt.start*Lt,ae=(Vt.start+Vt.count)*Lt;tt!==null&&(Kt=Math.max(Kt,tt.start*Lt),ae=Math.min(ae,(tt.start+tt.count)*Lt)),xt!==null?(Kt=Math.max(Kt,0),ae=Math.min(ae,xt.count)):vt!=null&&(Kt=Math.max(Kt,0),ae=Math.min(ae,vt.count));let le=ae-Kt;if(le<0||le===1/0)return;re.setup(D,O,At,F,xt);let De,Jt=gt;if(xt!==null&&(De=Y.get(xt),Jt=Xt,Jt.setIndex(De)),D.isMesh)O.wireframe===!0?(Tt.setLineWidth(O.wireframeLinewidth*ge()),Jt.setMode(U.LINES)):Jt.setMode(U.TRIANGLES);else if(D.isLine){let bt=O.linewidth;bt===void 0&&(bt=1),Tt.setLineWidth(bt*ge()),D.isLineSegments?Jt.setMode(U.LINES):D.isLineLoop?Jt.setMode(U.LINE_LOOP):Jt.setMode(U.LINE_STRIP)}else D.isPoints?Jt.setMode(U.POINTS):D.isSprite&&Jt.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Jt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let bt=D._multiDrawStarts,gn=D._multiDrawCounts,Qt=D._multiDrawCount,Je=xt?Y.get(xt).bytesPerElement:1,mi=wt.get(O).currentProgram.getUniforms();for(let Fe=0;Fe<Qt;Fe++)mi.setValue(U,"_gl_DrawID",Fe),Jt.render(bt[Fe]/Je,gn[Fe])}else if(D.isInstancedMesh)Jt.renderInstances(Kt,le,D.count);else if(F.isInstancedBufferGeometry){let bt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,gn=Math.min(F.instanceCount,bt);Jt.renderInstances(Kt,le,gn)}else Jt.render(Kt,le)};function $t(v,L,F){v.transparent===!0&&v.side===Ie&&v.forceSinglePass===!1?(v.side=Ve,v.needsUpdate=!0,Ps(v,L,F),v.side=kn,v.needsUpdate=!0,Ps(v,L,F),v.side=Ie):Ps(v,L,F)}this.compile=function(v,L,F=null){F===null&&(F=v),f=Zt.get(F),f.init(L),M.push(f),F.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),v!==F&&v.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();let O=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let tt=D.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){let At=tt[ht];$t(At,F,D),O.add(At)}else $t(tt,F,D),O.add(tt)}),M.pop(),f=null,O},this.compileAsync=function(v,L,F=null){let O=this.compile(v,L,F);return new Promise(D=>{function tt(){if(O.forEach(function(ht){wt.get(ht).currentProgram.isReady()&&O.delete(ht)}),O.size===0){D(v);return}setTimeout(tt,10)}Gt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ke=null;function pn(v){Ke&&Ke(v)}function bl(){Qn.stop()}function Sl(){Qn.start()}let Qn=new ih;Qn.setAnimationLoop(pn),typeof self!="undefined"&&Qn.setContext(self),this.setAnimationLoop=function(v){Ke=v,z.setAnimationLoop(v),v===null?Qn.stop():Qn.start()},z.addEventListener("sessionstart",bl),z.addEventListener("sessionend",Sl),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,L,T),f=Zt.get(v,M.length),f.init(L),M.push(f),Pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(Pt),yt=this.localClippingEnabled,it=j.init(this.clippingPlanes,yt),g=ft.get(v,E.length),g.init(),E.push(g),z.enabled===!0&&z.isPresenting===!0){let tt=_.xr.getDepthSensingMesh();tt!==null&&Kr(tt,L,-1/0,_.sortObjects)}Kr(v,L,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(at,dt),Yt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Yt&&Rt.addToRenderList(g,v),this.info.render.frame++,it===!0&&j.beginShadows();let F=f.state.shadowsArray;pt.render(F,v,L),it===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=g.opaque,D=g.transmissive;if(f.setupLights(),L.isArrayCamera){let tt=L.cameras;if(D.length>0)for(let ht=0,At=tt.length;ht<At;ht++){let xt=tt[ht];wl(O,D,v,xt)}Yt&&Rt.render(v);for(let ht=0,At=tt.length;ht<At;ht++){let xt=tt[ht];El(g,v,xt,xt.viewport)}}else D.length>0&&wl(O,D,v,L),Yt&&Rt.render(v),El(g,v,L);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),v.isScene===!0&&v.onAfterRender(_,v,L),re.resetDefaultState(),C=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],it===!0&&j.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Kr(v,L,F,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){O&&kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Pt);let ht=W.update(v),At=v.material;At.visible&&g.push(v,ht,At,F,kt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let ht=W.update(v),At=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),kt.copy(v.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),kt.copy(ht.boundingSphere.center)),kt.applyMatrix4(v.matrixWorld).applyMatrix4(Pt)),Array.isArray(At)){let xt=ht.groups;for(let Lt=0,Vt=xt.length;Lt<Vt;Lt++){let vt=xt[Lt],Kt=At[vt.materialIndex];Kt&&Kt.visible&&g.push(v,ht,Kt,F,kt.z,vt)}}else At.visible&&g.push(v,ht,At,F,kt.z,null)}}let tt=v.children;for(let ht=0,At=tt.length;ht<At;ht++)Kr(tt[ht],L,F,O)}function El(v,L,F,O){let D=v.opaque,tt=v.transmissive,ht=v.transparent;f.setupLightsView(F),it===!0&&j.setGlobalState(_.clippingPlanes,F),O&&Tt.viewport(R.copy(O)),D.length>0&&Rs(D,L,F),tt.length>0&&Rs(tt,L,F),ht.length>0&&Rs(ht,L,F),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function wl(v,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new Le(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?nn:bn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));let tt=f.state.transmissionRenderTarget[O.id],ht=O.viewport||R;tt.setSize(ht.z,ht.w);let At=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor(H),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Yt&&Rt.render(F);let xt=_.toneMapping;_.toneMapping=On;let Lt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),it===!0&&j.setGlobalState(_.clippingPlanes,O),Rs(v,F,O),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let vt=0,Kt=L.length;vt<Kt;vt++){let ae=L[vt],le=ae.object,De=ae.geometry,Jt=ae.material,bt=ae.group;if(Jt.side===Ie&&le.layers.test(O.layers)){let gn=Jt.side;Jt.side=Ve,Jt.needsUpdate=!0,Tl(le,F,O,De,Jt,bt),Jt.side=gn,Jt.needsUpdate=!0,Vt=!0}}Vt===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}_.setRenderTarget(At),_.setClearColor(H,K),Lt!==void 0&&(O.viewport=Lt),_.toneMapping=xt}function Rs(v,L,F){let O=L.isScene===!0?L.overrideMaterial:null;for(let D=0,tt=v.length;D<tt;D++){let ht=v[D],At=ht.object,xt=ht.geometry,Lt=O===null?ht.material:O,Vt=ht.group;At.layers.test(F.layers)&&Tl(At,L,F,xt,Lt,Vt)}}function Tl(v,L,F,O,D,tt){v.onBeforeRender(_,L,F,O,D,tt),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(_,L,F,O,v,tt),D.transparent===!0&&D.side===Ie&&D.forceSinglePass===!1?(D.side=Ve,D.needsUpdate=!0,_.renderBufferDirect(F,L,O,D,v,tt),D.side=kn,D.needsUpdate=!0,_.renderBufferDirect(F,L,O,D,v,tt),D.side=Ie):_.renderBufferDirect(F,L,O,D,v,tt),v.onAfterRender(_,L,F,O,D,tt)}function Ps(v,L,F){L.isScene!==!0&&(L=de);let O=wt.get(v),D=f.state.lights,tt=f.state.shadowsArray,ht=D.state.version,At=Mt.getParameters(v,D.state,tt,L,F),xt=Mt.getProgramCacheKey(At),Lt=O.programs;O.environment=v.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(v.isMeshStandardMaterial?V:x).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Lt===void 0&&(v.addEventListener("dispose",Ut),Lt=new Map,O.programs=Lt);let Vt=Lt.get(xt);if(Vt!==void 0){if(O.currentProgram===Vt&&O.lightsStateVersion===ht)return Pl(v,At),Vt}else At.uniforms=Mt.getUniforms(v),v.onBeforeCompile(At,_),Vt=Mt.acquireProgram(At,xt),Lt.set(xt,Vt),O.uniforms=At.uniforms;let vt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(vt.clippingPlanes=j.uniform),Pl(v,At),O.needsLights=Hh(v),O.lightsStateVersion=ht,O.needsLights&&(vt.ambientLightColor.value=D.state.ambient,vt.lightProbe.value=D.state.probe,vt.directionalLights.value=D.state.directional,vt.directionalLightShadows.value=D.state.directionalShadow,vt.spotLights.value=D.state.spot,vt.spotLightShadows.value=D.state.spotShadow,vt.rectAreaLights.value=D.state.rectArea,vt.ltc_1.value=D.state.rectAreaLTC1,vt.ltc_2.value=D.state.rectAreaLTC2,vt.pointLights.value=D.state.point,vt.pointLightShadows.value=D.state.pointShadow,vt.hemisphereLights.value=D.state.hemi,vt.directionalShadowMap.value=D.state.directionalShadowMap,vt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,vt.spotShadowMap.value=D.state.spotShadowMap,vt.spotLightMatrix.value=D.state.spotLightMatrix,vt.spotLightMap.value=D.state.spotLightMap,vt.pointShadowMap.value=D.state.pointShadowMap,vt.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=Vt,O.uniformsList=null,Vt}function Rl(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=Oi.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Pl(v,L){let F=wt.get(v);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function zh(v,L,F,O,D){L.isScene!==!0&&(L=de),b.resetTextureUnits();let tt=L.fog,ht=O.isMeshStandardMaterial?L.environment:null,At=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ki,xt=(O.isMeshStandardMaterial?V:x).get(O.envMap||ht),Lt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Vt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),vt=!!F.morphAttributes.position,Kt=!!F.morphAttributes.normal,ae=!!F.morphAttributes.color,le=On;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(le=_.toneMapping);let De=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Jt=De!==void 0?De.length:0,bt=wt.get(O),gn=f.state.lights;if(it===!0&&(yt===!0||v!==y)){let Xe=v===y&&O.id===C;j.setState(O,v,Xe)}let Qt=!1;O.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==gn.state.version||bt.outputColorSpace!==At||D.isBatchedMesh&&bt.batching===!1||!D.isBatchedMesh&&bt.batching===!0||D.isBatchedMesh&&bt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&bt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&bt.instancing===!1||!D.isInstancedMesh&&bt.instancing===!0||D.isSkinnedMesh&&bt.skinning===!1||!D.isSkinnedMesh&&bt.skinning===!0||D.isInstancedMesh&&bt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&bt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&bt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&bt.instancingMorph===!1&&D.morphTexture!==null||bt.envMap!==xt||O.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==j.numPlanes||bt.numIntersection!==j.numIntersection)||bt.vertexAlphas!==Lt||bt.vertexTangents!==Vt||bt.morphTargets!==vt||bt.morphNormals!==Kt||bt.morphColors!==ae||bt.toneMapping!==le||bt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,bt.__version=O.version);let Je=bt.currentProgram;Qt===!0&&(Je=Ps(O,L,D));let mi=!1,Fe=!1,rs=!1,ce=Je.getUniforms(),sn=bt.uniforms;if(Tt.useProgram(Je.program)&&(mi=!0,Fe=!0,rs=!0),O.id!==C&&(C=O.id,Fe=!0),mi||y!==v){Tt.buffers.depth.getReversed()?(ot.copy(v.projectionMatrix),wu(ot),Tu(ot),ce.setValue(U,"projectionMatrix",ot)):ce.setValue(U,"projectionMatrix",v.projectionMatrix),ce.setValue(U,"viewMatrix",v.matrixWorldInverse);let Rn=ce.map.cameraPosition;Rn!==void 0&&Rn.setValue(U,Dt.setFromMatrixPosition(v.matrixWorld)),Wt.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ce.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Fe=!0,rs=!0)}if(D.isSkinnedMesh){ce.setOptional(U,D,"bindMatrix"),ce.setOptional(U,D,"bindMatrixInverse");let Xe=D.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ce.setValue(U,"boneTexture",Xe.boneTexture,b))}D.isBatchedMesh&&(ce.setOptional(U,D,"batchingTexture"),ce.setValue(U,"batchingTexture",D._matricesTexture,b),ce.setOptional(U,D,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",D._indirectTexture,b),ce.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",D._colorsTexture,b));let as=F.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&qt.update(D,F,Je),(Fe||bt.receiveShadow!==D.receiveShadow)&&(bt.receiveShadow=D.receiveShadow,ce.setValue(U,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(sn.envMap.value=xt,sn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(sn.envMapIntensity.value=L.environmentIntensity),Fe&&(ce.setValue(U,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&kh(sn,rs),tt&&O.fog===!0&&lt.refreshFogUniforms(sn,tt),lt.refreshMaterialUniforms(sn,O,k,nt,f.state.transmissionRenderTarget[v.id]),Oi.upload(U,Rl(bt),sn,b)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Oi.upload(U,Rl(bt),sn,b),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ce.setValue(U,"center",D.center),ce.setValue(U,"modelViewMatrix",D.modelViewMatrix),ce.setValue(U,"normalMatrix",D.normalMatrix),ce.setValue(U,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Xe=O.uniformsGroups;for(let Rn=0,Pn=Xe.length;Rn<Pn;Rn++){let ql=Xe[Rn];P.update(ql,Je),P.bind(ql,Je)}}return Je}function kh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Hh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(v,L,F){wt.get(v.texture).__webglTexture=L,wt.get(v.depthTexture).__webglTexture=F;let O=wt.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){let F=wt.get(v);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,F=0){T=v,I=L,w=F;let O=!0,D=null,tt=!1,ht=!1;if(v){let xt=wt.get(v);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),O=!1;else if(xt.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(xt.__hasExternalTextures)b.rebindTextures(v,wt.get(v.texture).__webglTexture,wt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let vt=v.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&wt.has(vt)&&(v.width!==vt.image.width||v.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}let Lt=v.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);let Vt=wt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Vt[L])?D=Vt[L][F]:D=Vt[L],tt=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?D=wt.get(v).__webglMultisampledFramebuffer:Array.isArray(Vt)?D=Vt[F]:D=Vt,R.copy(v.viewport),B.copy(v.scissor),N=v.scissorTest}else R.copy(St).multiplyScalar(k).floor(),B.copy(zt).multiplyScalar(k).floor(),N=ne;if(Tt.bindFramebuffer(U.FRAMEBUFFER,D)&&O&&Tt.drawBuffers(v,D),Tt.viewport(R),Tt.scissor(B),Tt.setScissorTest(N),tt){let xt=wt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,F)}else if(ht){let xt=wt.get(v.texture),Lt=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,F||0,Lt)}C=-1},this.readRenderTargetPixels=function(v,L,F,O,D,tt,ht){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=wt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){Tt.bindFramebuffer(U.FRAMEBUFFER,At);try{let xt=v.texture,Lt=xt.format,Vt=xt.type;if(!Wt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&F>=0&&F<=v.height-D&&U.readPixels(L,F,O,D,Ft.convert(Lt),Ft.convert(Vt),tt)}finally{let xt=T!==null?wt.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(v,L,F,O,D,tt,ht){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=wt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){let xt=v.texture,Lt=xt.format,Vt=xt.type;if(!Wt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-O&&F>=0&&F<=v.height-D){Tt.bindFramebuffer(U.FRAMEBUFFER,At);let vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,tt.byteLength,U.STREAM_READ),U.readPixels(L,F,O,D,Ft.convert(Lt),Ft.convert(Vt),0);let Kt=T!==null?wt.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Kt);let ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Eu(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,tt),U.deleteBuffer(vt),U.deleteSync(ae),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,L=null,F=0){v.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);let O=Math.pow(2,-F),D=Math.floor(v.image.width*O),tt=Math.floor(v.image.height*O),ht=L!==null?L.x:0,At=L!==null?L.y:0;b.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ht,At,D,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(v,L,F=null,O=null,D=0){v.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],L=arguments[2],D=arguments[3]||0,F=null);let tt,ht,At,xt,Lt,Vt,vt,Kt,ae,le=v.isCompressedTexture?v.mipmaps[D]:v.image;F!==null?(tt=F.max.x-F.min.x,ht=F.max.y-F.min.y,At=F.isBox3?F.max.z-F.min.z:1,xt=F.min.x,Lt=F.min.y,Vt=F.isBox3?F.min.z:0):(tt=le.width,ht=le.height,At=le.depth||1,xt=0,Lt=0,Vt=0),O!==null?(vt=O.x,Kt=O.y,ae=O.z):(vt=0,Kt=0,ae=0);let De=Ft.convert(L.format),Jt=Ft.convert(L.type),bt;L.isData3DTexture?(b.setTexture3D(L,0),bt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(b.setTexture2DArray(L,0),bt=U.TEXTURE_2D_ARRAY):(b.setTexture2D(L,0),bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let gn=U.getParameter(U.UNPACK_ROW_LENGTH),Qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Je=U.getParameter(U.UNPACK_SKIP_PIXELS),mi=U.getParameter(U.UNPACK_SKIP_ROWS),Fe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Lt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);let rs=v.isDataArrayTexture||v.isData3DTexture,ce=L.isDataArrayTexture||L.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let sn=wt.get(v),as=wt.get(L),Xe=wt.get(sn.__renderTarget),Rn=wt.get(as.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Pn=0;Pn<At;Pn++)rs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(v).__webglTexture,D,Vt+Pn),v.isDepthTexture?(ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(L).__webglTexture,D,ae+Pn),U.blitFramebuffer(xt,Lt,tt,ht,vt,Kt,tt,ht,U.DEPTH_BUFFER_BIT,U.NEAREST)):ce?U.copyTexSubImage3D(bt,D,vt,Kt,ae+Pn,xt,Lt,tt,ht):U.copyTexSubImage2D(bt,D,vt,Kt,ae+Pn,xt,Lt,tt,ht);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ce?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(bt,D,vt,Kt,ae,tt,ht,At,De,Jt,le.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,D,vt,Kt,ae,tt,ht,At,De,le.data):U.texSubImage3D(bt,D,vt,Kt,ae,tt,ht,At,De,Jt,le):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,vt,Kt,tt,ht,De,Jt,le.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,vt,Kt,le.width,le.height,De,le.data):U.texSubImage2D(U.TEXTURE_2D,D,vt,Kt,tt,ht,De,Jt,le);U.pixelStorei(U.UNPACK_ROW_LENGTH,gn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,mi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe),D===0&&L.generateMipmaps&&U.generateMipmap(bt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(v,L,F=null,O=null,D=0){return v.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],L=arguments[3],D=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,F,O,D)},this.initRenderTarget=function(v){wt.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),Tt.unbindTexture()},this.resetState=function(){I=0,w=0,T=null,Tt.reset(),re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var br=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Do=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mo,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pe=new q,Er=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yn=class extends En{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pi,us=new q,qi=new q,Li=new q,Di=new Ct,ds=new Ct,lh=new se,$s=new q,fs=new q,tr=new q,Pc=new Ct,Sa=new Ct,qc=new Ct,ui=class extends pe{constructor(t=new Yn){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Do(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new Er(n,3,0,!1)),Pi.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Li.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;er($s.set(-.5,-.5,0),Li,a,qi,s,r),er(fs.set(.5,-.5,0),Li,a,qi,s,r),er(tr.set(.5,.5,0),Li,a,qi,s,r),Pc.set(0,0),Sa.set(1,0),qc.set(1,1);let o=t.ray.intersectTriangle($s,fs,tr,!1,us);if(o===null&&(er(fs.set(-.5,.5,0),Li,a,qi,s,r),Sa.set(0,1),o=t.ray.intersectTriangle($s,tr,fs,!1,us),o===null))return;let l=t.ray.origin.distanceTo(us);l<t.near||l>t.far||e.push({distance:l,point:us.clone(),uv:Fn.getInterpolation(us,$s,fs,tr,Pc,Sa,qc,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function er(i,t,e,n,s,r){Di.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ds.x=r*Di.x-s*Di.y,ds.y=s*Di.x+r*Di.y):ds.copy(Di),i.copy(t),i.x+=ds.x,i.y+=ds.y,i.applyMatrix4(lh)}var Uo=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wr=class extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ui=new se,Lc=new se,nr=[],Dc=new Sn,Im=new se,ps=new ie,gs=new Xn,wn=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Im)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),Dc.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Dc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),gs.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ui),Lc.multiplyMatrices(n,Ui),ps.matrixWorld=Lc,ps.raycast(t,nr);for(let a=0,o=nr.length;a<o;a++){let l=nr[a];l.instanceId=r,l.object=this,e.push(l)}nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uo(new Float32Array(s*this.count),s,this.count,al,ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var _s=class extends En{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uc=new se,Vo=new mr,ir=new Xn,sr=new q,Tr=class extends pe{constructor(t=new Me,e=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;Uc.copy(s).invert(),Vo.copy(t.ray).applyMatrix4(Uc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,A=p;m<A;m++){let g=c.getX(m);sr.fromBufferAttribute(u,g),Vc(sr,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,A=p;m<A;m++)sr.fromBufferAttribute(u,m),Vc(sr,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vc(i,t,e,n,s,r,a){let o=Vo.distanceSqToPoint(i);if(o<e){let l=new q;Vo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Tn=class extends Ne{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var dn=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new q,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},di=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,A=[],g=n/2,f=0;E(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(p,2));function E(){let _=new q,S=new q,I=0,w=(e-t)/n;for(let T=0;T<=r;T++){let C=[],y=T/r,R=y*(e-t)+t;for(let B=0;B<=s;B++){let N=B/s,H=N*l+o,K=Math.sin(H),G=Math.cos(H);S.x=R*K,S.y=-y*n+g,S.z=R*G,u.push(S.x,S.y,S.z),_.set(K,w,G).normalize(),d.push(_.x,_.y,_.z),p.push(N,1-y),C.push(m++)}A.push(C)}for(let T=0;T<s;T++)for(let C=0;C<r;C++){let y=A[C][T],R=A[C+1][T],B=A[C+1][T+1],N=A[C][T+1];(t>0||C!==0)&&(h.push(y,R,N),I+=3),(e>0||C!==r-1)&&(h.push(R,B,N),I+=3)}c.addGroup(f,I,0),f+=I}function M(_){let S=m,I=new Ct,w=new q,T=0,C=_===!0?t:e,y=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*y,0),d.push(0,y,0),p.push(.5,.5),m++;let R=m;for(let B=0;B<=s;B++){let H=B/s*l+o,K=Math.cos(H),G=Math.sin(H);w.x=C*G,w.y=g*y,w.z=C*K,u.push(w.x,w.y,w.z),d.push(0,y,0),I.x=K*.5+.5,I.y=G*.5*y+.5,p.push(I.x,I.y),m++}for(let B=0;B<s;B++){let N=S+B,H=R+B;_===!0?h.push(H,H+1,N):h.push(H+1,H,N),T+=3}c.addGroup(f,T,_===!0?1:2),f+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Is=class i extends di{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ms=class i extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new q,m=new Ct;for(let A=0;A<=s;A++){for(let g=0;g<=n;g++){let f=r+g/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let A=0;A<s;A++){let g=A*(n+1);for(let f=0;f<n;f++){let E=f+g,M=E,_=E+n+1,S=E+n+2,I=E+1;o.push(M,_,I),o.push(_,S,I)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zn=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new q,d=new q,p=[],m=[],A=[],g=[];for(let f=0;f<=n;f++){let E=[],M=f/n,_=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let I=S/e;u.x=-t*Math.cos(s+I*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+I*r)*Math.sin(a+M*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),g.push(I+_,1-M),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let M=h[f][E+1],_=h[f][E],S=h[f+1][E],I=h[f+1][E+1];(f!==0||a>0)&&p.push(M,_,I),(f!==n-1||l<Math.PI)&&p.push(_,S,I)}this.setIndex(p),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(A,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rr=class extends ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var Ze=class extends En{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function rr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},No=class extends Zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,o=2*e-n;break;case Bl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=t,l=2*n-e;break;case Bl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,f=-d*g+2*d*A-d*m,E=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*m+1,M=(-1-p)*g+(1.5+p)*A+.5*m,_=p*g-p*A;for(let S=0;S!==o;++S)r[S]=f*a[h+S]+E*a[c+S]+M*a[l+S]+_*a[u+S];return r}},Bo=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Fo=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rr(e,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rr(t.times,Array),values:rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new No(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ur:e=this.InterpolantFactoryMethodDiscrete;break;case go:e=this.InterpolantFactoryMethodLinear;break;case Qr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return go;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Mm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=go;var fi=class extends en{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=ur;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends en{};Oo.prototype.ValueTypeName="color";var zo=class extends en{};zo.prototype.ValueTypeName="number";var ko=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Pr=class extends en{InterpolantFactoryMethodLinear(t){return new ko(this.times,this.values,this.getValueSize(),t)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends en{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=ur;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends en{};Ho.prototype.ValueTypeName="vector";var Go=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},bm=new Go,Wo=class{constructor(t){this.manager=t!==void 0?t:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=class extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},qr=class extends bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ea=new se,Nc=new q,Bc=new q,Lr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fc=new se,ms=new q,wa=new q,Xo=class extends Lr{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(ms),wa.copy(n.position),wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wa),n.updateMatrixWorld(),s.makeTranslation(-ms.x,-ms.y,-ms.z),Fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc)}},Dr=class extends bs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Yo=class extends Lr{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Yo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Oc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Oc(){return performance.now()}var ul="\\[\\]\\.:\\/",Sm=new RegExp("["+ul+"]","g"),dl="[^"+ul+"]",Em="[^"+ul.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",dl),Tm=/(WCOD+)?/.source.replace("WCOD",Em),Rm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),Pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),qm=new RegExp("^"+wm+Tm+Rm+Pm+"$"),Lm=["material","materials","bones","map"],Zo=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sm,"")}static parseTrackName(t){let e=qm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Zo;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fA=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);function Qi(i,t,e){let n=Array.from({length:t},()=>Array(i).fill("#")),s=(l,c,h,u)=>{for(let d=c;d<=u;d++)for(let p=l;p<=h;p++)n[d][p]="."},r=(l,c,h)=>{n[c][l]=h};return e({f:s,s:r,gateH:(l,c,h)=>{s(l,c-1,l+h.length-1,c+1),h.split("").forEach((u,d)=>r(l+d,c,u))},gateV:(l,c,h)=>{s(l-1,c,l+1,c+h.length-1),h.split("").forEach((u,d)=>r(l,c+d,u))}}),n.map(l=>l.join(""))}var Dm=Qi(11,20,({f:i,s:t,gateH:e})=>{i(3,16,7,18),t(5,17,"S"),i(5,1,5,15),e(4,12,"123"),i(2,14,5,14),t(2,14,"K"),t(3,14,"$"),i(5,8,8,8),i(8,5,8,8),t(8,5,"k"),t(8,7,"$"),e(4,5,"456"),t(5,3,"f"),t(5,1,"E"),t(5,9,"$"),t(5,10,"$"),t(5,16,"$")}),Um=Qi(14,20,({f:i,s:t,gateH:e,gateV:n})=>{i(1,15,3,17),t(2,16,"S"),i(3,16,11,16),t(6,16,"^"),t(9,16,"^"),i(8,17,8,18),t(8,18,"K"),i(11,6,11,16),t(11,13,"^"),i(8,11,11,11),t(10,11,"^"),t(8,11,"K"),t(9,11,"$"),e(10,8,"123"),i(11,5,11,7),i(2,5,11,5),t(9,5,"^"),n(6,4,"456"),t(4,5,"$"),t(3,5,"^"),i(2,1,2,5),t(2,3,"f"),t(2,1,"E"),t(11,14,"$"),t(5,16,"$")}),Vm=Qi(15,21,({f:i,s:t,gateH:e})=>{i(6,17,8,19),t(7,18,"S"),i(7,10,7,17),e(6,14,"123"),i(2,12,7,12),t(2,12,"K"),t(4,12,"^"),t(3,12,"$"),i(7,12,12,12),t(12,12,"K"),t(10,12,"$"),t(7,10,"f"),i(3,3,11,9),t(7,5,"X"),t(5,8,"$"),t(9,8,"$"),i(7,1,7,2),t(7,1,"E")}),Nm=Qi(16,21,({f:i,s:t,gateH:e})=>{i(1,17,3,19),t(2,18,"S"),i(3,18,13,18),t(7,18,"^"),i(9,14,9,17),t(9,14,"a"),t(9,16,"$"),i(13,8,13,18),t(13,15,"A"),e(12,11,"123"),i(11,8,11,9),t(11,9,"b"),i(3,7,13,7),t(8,7,"B"),t(5,7,"f"),i(3,1,3,7),t(3,1,"E"),e(2,4,"456"),i(6,3,6,6),t(6,3,"K"),t(6,5,"$"),i(5,16,5,17),t(5,16,"K"),i(11,16,11,17),t(11,16,"K"),t(13,9,"$"),t(13,17,"$")}),Bm=Qi(17,23,({f:i,s:t,gateH:e})=>{i(7,19,9,21),t(8,20,"S"),i(8,13,8,19),t(8,17,"^"),i(2,13,14,13),t(4,13,"^"),t(12,13,"^"),i(2,8,2,13),t(2,10,"A"),t(2,8,"j"),i(14,9,14,13),t(14,9,"a"),t(14,11,"$"),i(8,4,8,12),e(7,10,"123"),t(8,8,"f"),i(4,6,8,6),t(4,6,"K"),t(6,6,"^"),i(8,6,12,6),t(12,6,"k"),t(10,6,"$"),i(7,3,9,5),t(7,4,"4"),t(8,4,"5"),t(9,4,"6"),i(8,1,8,2),t(8,1,"E"),t(6,13,"$"),t(10,13,"$"),t(8,15,"$")}),Fm=Qi(17,23,({f:i,s:t,gateH:e})=>{i(7,19,9,21),t(8,20,"S"),i(8,11,8,19),e(7,17,"123"),e(7,13,"456"),i(3,15,8,15),t(3,15,"K"),t(5,15,"$"),t(8,15,"^"),i(9,15,13,15),t(13,15,"j"),t(11,15,"e"),t(10,15,"$"),t(8,11,"f"),i(2,2,14,10),t(8,6,"Y"),t(4,8,"$"),t(12,8,"$"),t(8,1,"E")}),He=[{id:1,name:["\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0637\u062D\u0627\u0644\u0628","Mossy Gate"],theme:{sky:6986328,fog:11059338,wall:14268018,floor:15257492,accent:16765498},map:Dm,start:5,gates:{1:["x",2],2:["+",4],3:["-",3],4:["/",2],5:["x",2],6:["+",12]},hordes:{f:40},par:[30,60]},{id:2,name:["\u0642\u0627\u0639\u0629 \u0627\u0644\u0623\u0634\u0648\u0627\u0643","Spike Hall"],theme:{sky:1718848,fog:2775648,wall:4876906,floor:9078896,accent:7004392},map:Um,start:6,gates:{1:["x",2],2:["+",8],3:["/",2],4:["-",6],5:["x",3],6:["+",10]},hordes:{f:70},par:[70,140]},{id:3,name:["\u0639\u0631\u064A\u0646 \u0627\u0644\u0648\u062D\u0634","Brute's Den"],theme:{sky:2760768,fog:4864618,wall:6969978,floor:9076856,accent:13146864},map:Vm,start:8,gates:{1:["x",3],2:["-",6],3:["+",10]},hordes:{f:20},boss:{kind:"brute",hp:90,atk:5},par:[25,45]},{id:4,name:["\u0645\u0645\u0631\u0627\u062A \u0627\u0644\u0645\u0646\u0627\u0634\u064A\u0631","Saw Corridors"],theme:{sky:4204570,fog:6965802,wall:8018490,floor:10127976,accent:16756816},map:Nm,start:6,gates:{1:["x",2],2:["+",10],3:["/",3],4:["x",2],5:["-",8],6:["+",20]},hordes:{f:45},par:[50,100]},{id:5,name:["\u0627\u0644\u0645\u0639\u0628\u062F \u0627\u0644\u0645\u062A\u0634\u0627\u0628\u0643","Vine Temple"],theme:{sky:1714752,fog:2771562,wall:4876888,floor:8425594,accent:7391487},map:Bm,start:6,gates:{1:["x",2],2:["x",3],3:["/",2],4:["+",25],5:["x",2],6:["-",10]},hordes:{f:90},par:[50,110]},{id:6,name:["\u0639\u0631\u064A\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0642","Golem Arena"],theme:{sky:3811860,fog:6967328,wall:8022602,floor:10522736,accent:16765498},map:Fm,start:6,gates:{1:["x",2],2:["+",12],3:["/",2],4:["x",3],5:["x",2],6:["-",15]},hordes:{e:12,f:60},boss:{kind:"golem",hp:560,atk:12},par:[40,100]}];var _t=3,ji=.7,Om=7,zr=1/60,ch={k:6,K:12,j:25},Or={period:3.6,warnAt:1.6,upAt:2.5,downAt:3.3},Ss={k:1.3,c:1.5,trigger:4.2},zm=220,pl=(i,t,e)=>i<t?t:i>e?e:i;function gl(i,t,e){return t==="x"?i*e:t==="+"?i+e:t==="-"?Math.max(1,i-e):t==="/"?Math.max(1,Math.ceil(i/e)):i}var ml=(i,t)=>i==="x"?`\xD7${t}`:i==="+"?`+${t}`:i==="-"?`\u2212${t}`:`\xF7${t}`,Al=(i,t)=>i==="x"||i==="+";function km(i,t,e=zr,n=1,s=1){return{a:i-(Ss.k*t*s+Ss.c)*e,b:t-(Ss.k*i*n+Ss.c)*e}}var fn=[{id:"sand",cost:0,ar:"\u0627\u0644\u0631\u0645\u0644",en:"Sand",cape:2783976,tunic:3836656,helm:14200928,plume:16734778},{id:"ember",cost:40,ar:"\u0627\u0644\u062C\u0645\u0631",en:"Ember",cape:15223338,tunic:15755834,helm:13158608,plume:16765498},{id:"jade",cost:70,ar:"\u0627\u0644\u064A\u0634\u0645",en:"Jade",cape:1747048,tunic:2803848,helm:15259808,plume:16777215},{id:"royal",cost:110,ar:"\u0627\u0644\u0645\u0644\u0643\u064A",en:"Royal",cape:9059032,tunic:10509040,helm:16765498,plume:16730792},{id:"night",cost:160,ar:"\u0627\u0644\u0644\u064A\u0644",en:"Night",cape:2763336,tunic:4868728,helm:14738672,plume:7008511}],$i={start:{max:5,cost:[20,40,70,110,160]},power:{max:5,cost:[30,55,90,140,200]},speed:{max:3,cost:[25,60,120]}},Hm=()=>({unlocked:1,stars:He.map(()=>0),best:He.map(()=>0),coins:0,skin:"sand",skins:["sand"],up:{start:0,power:0,speed:0},muted:!1});function hh(i){let t=Hm();if(!i||typeof i!="object")return t;let e=He.length,n=(r,a,o,l)=>Number.isFinite(Number(r))?pl(Math.floor(Number(r)),a,o):l;t.unlocked=n(i.unlocked,1,e,1);for(let r=0;r<e;r++)t.stars[r]=n(Array.isArray(i.stars)?i.stars[r]:0,0,3,0),t.best[r]=n(Array.isArray(i.best)?i.best[r]:0,0,1e6,0),t.stars[r]>0&&(t.unlocked=Math.max(t.unlocked,Math.min(e,r+2)));t.coins=n(i.coins,0,1e7,0);let s=new Set(["sand"]);if(Array.isArray(i.skins))for(let r of i.skins)fn.some(a=>a.id===r)&&s.add(r);t.skins=fn.map(r=>r.id).filter(r=>s.has(r)),t.skin=t.skins.includes(i.skin)?i.skin:"sand";for(let r of Object.keys($i))t.up[r]=n(i.up&&i.up[r],0,$i[r].max,0);return t.muted=!!i.muted,t}function uh(i,t){let e=fn.find(n=>n.id===t);return e?i.skins.includes(t)?(i.skin=t,!0):i.coins<e.cost?!1:(i.coins-=e.cost,i.skins.push(t),i.skin=t,!0):!1}function dh(i,t){let e=$i[t];if(!e)return!1;let n=i.up[t];return n>=e.max||i.coins<e.cost[n]?!1:(i.coins-=e.cost[n],i.up[t]=n+1,!0)}function Gm(i,t){let e=He[i].par;return t>=e[1]?3:t>=e[0]?2:1}function Wm(i){let t=i.map,e=t.length,n=t[0].length,s=new Uint8Array(n*e),r={W:n,H:e,solid:s,gates:[],groups:[],traps:[],levers:[],saws:[],cages:[],hordes:[],coins:[],boss:null,exit:null,start:null},a=l=>(l+.5)*_t,o=new Map;for(let l=0;l<e;l++)for(let c=0;c<n;c++){let h=t[l][c],u=l*n+c;if(h==="#")s[u]=1;else if(h==="S")r.start={x:a(c),y:a(l)};else if(h==="E")r.exit={tx:c,ty:l,x:a(c),y:a(l),open:!i.boss};else if(h==="$")r.coins.push({id:r.coins.length,x:a(c),y:a(l),got:!1});else if(h==="^")r.traps.push({id:r.traps.length,tx:c,ty:l,x:a(c),y:a(l),off:(c*5+l*3)%3*.6,state:"idle"});else if(h>="1"&&h<="9"){let d=i.gates[h],p={id:r.gates.length,tx:c,ty:l,x:a(c),y:a(l),op:d[0],v:d[1],group:-1,used:!1};r.gates.push(p),o.set(`${c},${l}`,p)}else if(ch[h])r.cages.push({id:r.cages.length,x:a(c),y:a(l),count:ch[h],open:!1});else if(h>="a"&&h<="c")r.levers.push({id:r.levers.length,link:h.toUpperCase(),x:a(c),y:a(l),pulled:!1});else if(h>="A"&&h<="C")r.saws.push({id:r.saws.length,key:h,tx:c,ty:l,x:a(c),y:a(l),alive:!0}),s[u]=1;else if(h==="e"||h==="f"||h==="g")r.hordes.push({id:r.hordes.length,x:a(c),y:a(l),count:(i.hordes||{})[h]||10,alive:!0});else if(h==="X"||h==="Y"){let d=h==="X"?"brute":"golem",p=d==="brute"?{hp:150,atk:7,melee:5.4,r:1.9,engage:13,slamR:4.2,dur:[1.15,1],cd:[3.4,2.6],dmg:.3}:{hp:650,atk:17,melee:6.6,r:2.6,engage:15,slamR:4.4,sweepR:7.5,sweepA:.95,dur:[1.35,1.15],cd:[3.2,2.3],dmg:.3};r.boss={kind:d,x:a(c),y:a(l),...p,...i.boss||{},hpMax:i.boss&&i.boss.hp||p.hp}}}for(let l of r.gates){if(l.group>=0)continue;let c=r.groups.length,h={id:c,gates:[],taken:-1},u=[l];for(l.group=c;u.length;){let d=u.pop();h.gates.push(d.id);for(let[p,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let A=o.get(`${d.tx+p},${d.ty+m}`);A&&A.group<0&&(A.group=c,u.push(A))}}h.gates.sort((d,p)=>d-p),r.groups.push(h)}return r.boss&&(r.boss.hp=r.boss.hpMax),r}var ts=class{constructor(t={}){this.levelIdx=t.level||0,this.def=He[this.levelIdx],this.lv=Wm(this.def),this.easy=!!t.easy,this.up={start:0,power:0,speed:0,...t.up||{}},this.army=this.def.start+(this.easy?4:0)+this.up.start*3,this.pm=1+.1*this.up.power,this.em=this.easy?.7:1,this.speed=Om*(1+.05*this.up.speed),this.cap={x:this.lv.start.x,y:this.lv.start.y,fx:0,fy:-1,moving:!1},this.t=0,this.acc=0,this.state="play",this.hitCd=0,this.fight=null,this.coins=0,this.lost=0,this.maxArmy=this.army,this.bossState=this.lv.boss?{phase:"idle",tele:null,cd:1.2,count:0,flash:0}:null,this.events=[],this.result=null}get n(){return Math.max(0,Math.ceil(this.army-1e-6))}emit(t,e={}){this.events.push({type:t,t:this.t,...e})}setArmy(t){this.army=Math.max(0,t),this.army>this.maxArmy&&(this.maxArmy=this.army)}hurt(t,e){let n=this.army;this.setArmy(Math.max(0,this.army-t)),this.lost+=n-this.army,this.emit("hurt",{why:e,amount:Math.round(n-this.army)}),this.army<=1e-4&&this.finish(!1)}tileSolid(t,e){let n=this.lv;return t<0||e<0||t>=n.W||e>=n.H||n.solid[e*n.W+t]===1||this.lv.exit&&!this.lv.exit.open&&t===this.lv.exit.tx&&e===this.lv.exit.ty&&!1}free(t,e,n=ji){let s=Math.floor((t-n)/_t),r=Math.floor((t+n)/_t),a=Math.floor((e-n)/_t),o=Math.floor((e+n)/_t);for(let l=a;l<=o;l++)for(let c=s;c<=r;c++){if(!this.tileSolid(c,l))continue;let h=pl(t,c*_t,(c+1)*_t),u=pl(e,l*_t,(l+1)*_t);if((t-h)**2+(e-u)**2<n*n)return!1}return!0}tileOf(t,e){return[Math.floor(t/_t),Math.floor(e/_t)]}trapPhase(t,e=this.t){return(e+t.off)%Or.period}trapStateAt(t,e){let n=this.trapPhase(t,e);return n<Or.warnAt?"idle":n<Or.upAt?"warn":n<Or.downAt?"up":"idle"}trapUpDuring(t,e,n,s=.12){for(let r=e;r<=n+1e-9;r+=.05)if(this.trapStateAt(t,r-s)==="up"||this.trapStateAt(t,r+s)==="up")return!0;return!1}step(t,e={x:0,y:0}){this.acc+=t,this.events=[];let n=0;for(;this.acc>=zr&&n++<20;)this.acc-=zr,this.tick(e);return this.events}tick(t){if(this.state!=="play")return;let e=zr;this.t+=e;let n=this.lv,s=this.cap;this.hitCd=Math.max(0,this.hitCd-e);for(let c of n.traps){let h=this.trapStateAt(c,this.t);if(h!==c.state&&(h==="warn"&&this.emit("trapWarn",{id:c.id}),h==="up"&&this.emit("trapUp",{id:c.id}),c.state=h),h==="up"&&this.hitCd<=0){let[u,d]=this.tileOf(s.x,s.y);u===c.tx&&d===c.ty&&(this.hitCd=1,this.hurt(Math.max(2,Math.ceil(this.army*(this.easy?.12:.22))),"trap"),this.emit("trapHit",{id:c.id}))}}if(this.state!=="play")return;if(this.fight){this.tickFight(e);return}let r=t.x||0,a=t.y||0,o=Math.hypot(r,a);if(o>1&&(r/=o,a/=o),s.moving=o>.05,s.moving){s.fx=r/Math.max(o,1e-6),s.fy=a/Math.max(o,1e-6);let c=s.x+r*this.speed*e,h=s.y+a*this.speed*e;this.free(c,s.y)&&(s.x=c),this.free(s.x,h)&&(s.y=h)}let l=this.lv.boss;if(l&&this.bossState.phase!=="dead"){let c=s.x-l.x,h=s.y-l.y,u=Math.hypot(c,h),d=l.r+ji;u<d&&u>1e-6&&(s.x=l.x+c/u*d,s.y=l.y+h/u*d)}this.interact(e),this.state==="play"&&l&&this.tickBoss(e)}interact(t){let e=this.lv,n=this.cap,[s,r]=this.tileOf(n.x,n.y);for(let o of e.gates){if(o.tx!==s||o.ty!==r||o.used)continue;let l=e.groups[o.group];if(l.taken>=0)continue;l.taken=o.id;for(let u of l.gates)e.gates[u].used=!0;let c=this.n,h=gl(c,o.op,o.v);this.setArmy(h),this.emit("gate",{id:o.id,op:o.op,v:o.v,from:c,to:h,good:h>=c})}for(let o of e.coins)!o.got&&Math.hypot(o.x-n.x,o.y-n.y)<1.7&&(o.got=!0,this.coins++,this.emit("coin",{id:o.id}));for(let o of e.cages)!o.open&&Math.hypot(o.x-n.x,o.y-n.y)<1.9&&(o.open=!0,this.setArmy(this.army+o.count),this.emit("cage",{id:o.id,count:o.count}));for(let o of e.levers)if(!o.pulled&&Math.hypot(o.x-n.x,o.y-n.y)<1.8){o.pulled=!0,this.emit("lever",{id:o.id});for(let l of e.saws)l.key===o.link&&l.alive&&(l.alive=!1,e.solid[l.ty*e.W+l.tx]=0,this.emit("sawBreak",{id:l.id}))}for(let o of e.saws)if(o.alive&&this.hitCd<=0&&Math.hypot(o.x-n.x,o.y-n.y)<_t/2+ji+.15){this.hitCd=1.2,this.hurt(Math.max(3,Math.ceil(this.army*.15)),"saw"),this.emit("sawHit",{id:o.id});let l=n.x-o.x,c=n.y-o.y,h=Math.hypot(l,c)||1;for(let u of[1.2,.8,.4]){let d=n.x+l/h*u,p=n.y+c/h*u;if(this.free(d,p)){n.x=d,n.y=p;break}}}for(let o of e.hordes)if(o.alive&&Math.hypot(o.x-n.x,o.y-n.y)<Ss.trigger){this.fight={horde:o.id,a:this.army,b:o.count,a0:this.army,b0:o.count,time:0},this.emit("fightStart",{horde:o.id,a:this.army,b:o.count});return}let a=e.exit;a&&a.open&&Math.hypot(a.x-n.x,a.y-n.y)<1.7&&this.finish(!0)}tickFight(t){let e=this.fight;e.time+=t;let n=km(e.a,e.b,t,this.pm,this.em);e.a=n.a,e.b=n.b;let s=this.lv.hordes[e.horde];if(this.setArmy(Math.max(0,e.a)),e.a<=0){this.lost+=e.a0,this.emit("fightEnd",{won:!1}),this.fight=null,this.finish(!1);return}e.b<=0&&(s.alive=!1,this.setArmy(Math.max(1,Math.round(e.a))),this.lost+=e.a0-this.army,this.emit("fightEnd",{won:!0,left:this.n}),this.fight=null)}inTele(t,e,n){if(t.kind==="slam")return Math.hypot(e-t.x,n-t.y)<t.r+.3;let s=e-t.x,r=n-t.y;if(Math.hypot(s,r)>t.r+.3)return!1;let o=Math.atan2(r,s)-t.dir;return o=Math.atan2(Math.sin(o),Math.cos(o)),Math.abs(o)<t.half}tickBoss(t){let e=this.lv.boss,n=this.bossState,s=this.cap;if(n.phase==="dead")return;n.flash=Math.max(0,n.flash-t);let r=Math.hypot(s.x-e.x,s.y-e.y);if(n.phase==="idle"){r<e.engage&&(n.phase="fight",this.emit("bossStart",{kind:e.kind}));return}let o=e.hp/e.hpMax<.5?1:0;if(n.tele){let l=n.tele;if(l.t+=t,l.t>=l.dur){let c=this.inTele(l,s.x,s.y);this.emit("impact",{kind:l.kind,x:l.x,y:l.y,hit:c,teleAt:this.t-l.dur}),c&&this.hitCd<=0&&(this.hitCd=.8,this.hurt(Math.max(4,Math.ceil(this.army*e.dmg*(this.easy?.6:1))),"boss")),n.tele=null,n.cd=e.cd[o],n.count++}}else if(n.cd-=t,n.cd<=0){let l=this.easy?.3:0,c=e.kind==="golem"&&n.count%2===1,h=e.dur[o]+l;n.tele=c?{kind:"sweep",x:e.x,y:e.y,dir:Math.atan2(s.y-e.y,s.x-e.x),half:e.sweepA,r:e.sweepR,t:0,dur:h}:{kind:"slam",x:s.x,y:s.y,r:e.slamR,t:0,dur:h},this.emit("tele",{kind:n.tele.kind,dur:h,x:n.tele.x,y:n.tele.y})}if(r<e.melee){let l=Math.min(this.army,zm)*.9*this.pm;if(e.hp=Math.max(0,e.hp-l*t),n.flash=.1,this.setArmy(this.army-e.atk*(this.easy?.6:1)*t),this.lost+=e.atk*t*(this.easy?.6:1),this.army<=1e-4){this.finish(!1);return}e.hp<=0&&(n.phase="dead",n.tele=null,this.lv.exit.open=!0,this.emit("bossDown",{kind:e.kind}),this.emit("exitOpen"))}}finish(t){if(this.state!=="play")return;this.state=t?"won":"over";let e=this.n,n=t?Gm(this.levelIdx,e):0;this.result={won:t,survivors:e,stars:n,coins:t?this.coins+n*5+Math.floor(e/20):Math.floor(this.coins/2),time:this.t},this.emit(t?"won":"over",this.result)}};function Es(i,t,e,n){let s=i.lv,r=s.W,a=(h,u)=>u*r+h,o=new Map,l=[[t[0],t[1]]];o.set(a(t[0],t[1]),-1);let c=0;for(;c<l.length;){let[h,u]=l[c++];if(e(h,u)){let d=[],p=a(h,u);for(;p!==-1;)d.push([p%r,Math.floor(p/r)]),p=o.get(p);return d.reverse()}for(let[d,p]of[[1,0],[-1,0],[0,1],[0,-1]]){let m=h+d,A=u+p;m<0||A<0||m>=r||A>=s.H||o.has(a(m,A))||s.solid[a(m,A)]||n&&n(m,A)||(o.set(a(m,A),a(h,u)),l.push([m,A]))}}return null}var gi=class{constructor(){this.pts=[],this.len=[]}push(t,e){let n=this.pts,s=n.length;s&&Math.hypot(t-n[s-1].x,e-n[s-1].y)<.25||(n.push({x:t,y:e}),n.length>500&&n.shift())}at(t){let e=this.pts,n=e.length-1;if(n<1)return e[0]?{x:e[0].x,y:e[0].y,dx:0,dy:-1}:{x:0,y:0,dx:0,dy:-1};let s=t;for(;n>0;){let l=e[n],c=e[n-1],h=Math.hypot(l.x-c.x,l.y-c.y);if(s<=h){let u=h<1e-6?0:s/h;return{x:l.x+(c.x-l.x)*u,y:l.y+(c.y-l.y)*u,dx:h<1e-6?0:(l.x-c.x)/h,dy:h<1e-6?-1:(l.y-c.y)/h}}s-=h,n--}let r=e[1],a=e[0],o=Math.hypot(r.x-a.x,r.y-a.y)||1;return{x:a.x,y:a.y,dx:(r.x-a.x)/o,dy:(r.y-a.y)/o}}};function kr(i,t,e,n){let s=[],r=i>150?.42:i>40?.5:.62,a=Math.max(2,Math.min(16,Math.round(Math.sqrt(i)*1.1))),o=1.1,l=0;for(;s.length<i&&l++<1200;){let c=t.at(o),h=-c.dy,u=c.dx,d=0,p=0;for(let g=r;g<=r*a/2+.01&&n(c.x+h*g,c.y+u*g);g+=r/2)d=g;for(let g=r;g<=r*a/2+.01&&n(c.x-h*g,c.y-u*g);g+=r/2)p=g;let m=d+p,A=Math.max(1,Math.min(a,Math.floor(m/r)+1));for(let g=0;g<A&&s.length<i;g++){let f=A===1?(d-p)/2:-p+m*g/(A-1),M=(s.length*7919%13/13-.5)*.12,_=c.x+h*f+c.dx*M,S=c.y+u*f+c.dy*M;n(_,S)||(_=c.x,S=c.y),s.push({x:_,y:S})}o+=r*.9}for(;s.length<i;)s.push({x:e.x,y:e.y});return s}function fh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function ph(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var gh={clash:"data:audio/mpeg;base64,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",crumble:"data:audio/mpeg;base64,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hLe6HoMMg+WF0GkqtcZK1H/9/Vf//f+LCASHIdiMv8KqAQA+WsIAAKUzRQT/+zjEBYAK4WkzXNGACUYwZWTQjymUo/r6tf/bUXB/YWzswetFEkUR0WHfISr4nC31hnsiiRv85VXjcPq972SVSL7rrxjJj8///uFX/bqr1SZi/n7S5///xjCiThVflHzcAEBL/mAAbhmxs2Wpuj10zrpN7dJbNWZG9zCyRvRZSmYK2KNhIzMliEzOURI5n1bAiJwnvB8nLGT3JkHME5iFjY/6AIUvz5hv/yn61VrGwpfJumUQAO4/iCG4NBZ10QzHBzLvmfDIzNwzcHKkBdK1nOc3klK7HGL/+zjEEoNKmXciTBxgCRwkpEmBiPiHmanMiv3z4Z2f6wv8ybfzZWPbhw/pGX59+Os53/PJFqnG/1VSKf/DLyUr4VDouW19IqObfjmr25w+PVdcHLPzM+ZkSGjSKelS9iDmI1KmQrBi0FMWkkrOdciKxqHW1U6TW3X5HdK3Tt9Pp7qPrZWn6iqm0xnILq+UQOzGnDnhhIKMABgatqL1NB0CBVUgPKB2BhIxREJGnHAUIg0w3UdQHwdExoypzWgLVU1QmFS7iTio3Ud5CgWp3+RrWsFusmgEI8v/+zjEJgMI8BEkTAxAARkV48mEDDBNBoGkkxiThrFGyxJO2k1L/TjkhraZQcUTMpBnk5oar1gexWLJ0GuFa1bDBC4qCQ8BvWotZ3vZjl7yXtVq9tvolqYGBUPQZUBCg6gJObi8ohBazDkYIbhWwTkR8lLP+5qYgNmrk2VRzpgUdGU0lxm2HXAYp8YruTueEF30sqIXIdvii+7VRk2gMNRi1dpMqp4jTY4SGnjtNjlIa4fc9kIrKayBrUOjj8yafYZ2shXRHy3tvsK/j9H37fj6rey+MV+rgGT/+zjEQIMIrKEaTAhgARgaosawUAKWCUZip05vllu9dUAAGicOUhUK81JomMQNOVf6DYbZhM8ZPAl0aeD8UkDfa6XEUSAfi4Ho5rxxsy9B1DjmYbf9zKN6MXIFCpx44vTXSZbq7H3YuWGqGFio4pAXv9P+//+qIeYxMghXtISHAIK0FAKJQCROS15nsqlsx1dVKM3f9S+f7H1eqX///9X//h7N1SjRmoUBWMuzMeqmqr7M0Zjqrz+quzbMeqr1V2Amqt/////DjNQoCsDLkFPBegpMQU1FMy7/+zjEXAALpW8oOPOACVMtWIeMMAExMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",lever:"data:audio/mpeg;base64,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",trapWarn:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABoAABbIABISEhwcHBwlJSUlLy8vLzg4ODhCQkJCS0tLVVVVVV5eXl5oaGhocXFxcXt7e3uEhISOjo6Ol5eXl6GhoaGqqqqqtLS0tL29vb3Hx8fQ0NDQ2tra2uPj4+Pt7e3t9vb29v///wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBMAAAAAAAAAWyD4aqVIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJeQFrlBEAAbAb9P8MsAJpK1tFIQAAMxjHm8gAAB6nU7/z9uQhGkI1TnP///+SjHOc4GBi3nOc5+cIIITyHOc5zv/0IBiwf/KA++sHAQOfWDgIAgc6gQcD4Ph+IiJqaqXiXlmXW25ySSSAAAoDZRxJKiYScSw0G0Wki6aOgsSwRUqygfyd6BWypLfhyxqoeZXzalXNNg7cV3z925tdatXmj04nf1/1Nq80xR/EKjwkHT5F7gNCwbVUtx9dfc0CzYS050U6+sY9rpermoZGVAAUm8D/+zjEBYAMBXN93PKACYYusDjBiqkuE1r7k3H1ikm5mtCi4orDjCaCCiF26nOw5wMNNO3QWZlSMFG/U2zPq89NdFRRyupzgKGqVCLWi0HmFyLLsrZL8nLMnV3Vfc28yHf6WdL1ZcjRahSZxu3ObbK3UiwtsTAtHNy7CziSuaLIir0hVvusbf5SHBjrE3N+6ikosIKMv84ZB52hS5+VOnXbe18/k+Gez6MFFQGcbKGi5+AJ5Kz1qQpyugqmkif2/RmyrT2k36+iByd0FLq73butlojkpSYDaKP/+zjEBgAMVMuF5hU0wYMcr7jzFVkvKIni3ZjvnHoVp3ltr9tyzjfdkLbociDhwqOZk91I6uRgenqNmIR3V9uxJa5wjUWb2L7eesQug8FWmlAosNKNveUH5Jeki9+17whWAZUWrXFQVesyBk1Ofu3cOr0kwPxTP2FCYD9crNkVAgjDom1hQ+qtR5nlT+xA+EDCovVkSYNK0qo9vnYtF0Z3yzN3kQSlcw8VMqGYq6sQc6n+KeClGzvTHHWW9D+vZEffX4vVd/uRFwQtHgqVza79qmiCqVgCwcD/+zjEBYAMPXN/x5irCXmuMHzDFPHKpGqK/T7+CyKDESe6JvuTJnh7CEDNNqPoRGAZXFrdGHqLM0joyd1QaZz2SxNURl9pjiSoIUu6DSMQ5TDVbY7zzEa1trvV+lf+316MZVf22ZcofIfZF897n7V1LwkjAygAzoBoEdiAepIl65tMaWuZVlmwmwr+330FVKYWt5I1xo9rTU+pWajvjDlVVJR2vUecRFSBAjZEXZVjBha9GOJCZH5LHM6pKZ0aqE+v/6EV/p+oi61llaqrvLyoeSRhFAGDRBb/+zjEBoAMQYF/5YxTwYKfb/zzDLmkDcwciawxI1pRHTQRrjRUBIy//YgTAhKGxGuMHXUBW0z+HwGQPMrShnI3tTWklhkVBMvw1v8gMSlL2aR1I7VLyfMu24/S/ZNkalfNTyp+VVBlri4hy7zO7Iq3NGGmA8qeLJBjpE2Qw82Erk/1tyYejwHVAr3/2qmJAFnn4hIKUga2medNaQIk4xsN/L//m8gIlMX/lP/gK58hRHEtrHbhqVmIgM2//vjr9f/RWVrnflITAur+yp6+vPt4c+iYIh/MZKv/+zjEBoAMNW93x6CvSYefrrzzFPBfOT/LepMwm58/1LFoW5NkkpXHf/80MLCB1ariZF0NG31NrN33c9DjGPVjd23aUhXMiiwodrl3kcTY3OzMU7BrSo6+umnf9fdeU1DyeVP1GITYY19VXWVWU8Qm1ASgL1RRTcZ2ZS23B2Hmp45uvqZLc7E0/eP0ZYkHzgKGmd3VYdEZn1svVFS6GmUqIMY2caepTzKOEVAU2unSNHFZSpZFdBFXnpHYZ/uQaU5J57xAblVNBgDnoTqJ3rvMeJTiYSYFnav/+zjEBgALGP135gyvwVKcsTzDCK6J1cZW1b1beOAkQzWBjYUYoFT1/+6gIeyX+lh2GKEENv53yvxCykvwz3U2F4PWFCnjXeiSk/Z3eLIErrFJlOXfO+MJVC6qggHhKk9PJaZiYiGZk40ACBs2gkMlHy7CiBHtiGCl+jCxSPYpVRv6kOAlGbwaD2IGKJDCpbXRUNOLXdHH2pSU5UhbIpY9d2asKSeIlCp/6oqX7lX3ajGFKKipwrV93MvXpoTjQJIDB4PRGcSmrPxwc41nK+BhV4RhpVI//dr/+zjEEIAKtOVx5gytwVkvLrzTCDGDxAMiLjwH2TgWT/1lh2IuTr3a/szDRV0CQgY6kktmYWYMz8udJIviau/8gxVJiS5tDySg3Obed9w9OWMOUCg6bHglLLcxE85czL2VrPEOjlP9WdXYWavaMpFdzuV1RGqDZ+9i/76MUhDFhFfV/zGO/0apRrdf71r/VdbIau8v8sxT2RihzggQW8u2ntqt7Zu39WXICl1HUUdxdqQNR3RkftMOYs4woguX6OJyhIbc6qUTHIrZWa/eY0xnYhf/1RD0zIf/+zjEHAAKmPl154ylwU2frjywixhrpekpxaZUraURK9bOXpsXaYCwcq3KveDoJFlVOjYy935mLI2G2Ag1aJe42TNS1EpeuPRsl5xavpkz9x/URMqyoZLzxv15mNs7yh8gA5z6OCOEDNL0WsKVV9RoNR9xh8g9TdtcBNW2kDoLyoTSNAaFVW3qqt+JtuuBJAYyydNuYz9stRpyIemcFpoHUusbz/6RpUX/6woSJGLyPn/w5OWkU4kMtC+VUIPoAx9Lv7qKpvzWGqHCTtmu+nwEgdfRtqeOahT/+zjEKQAKPPtt5gyvwVUwL/zzCL/xMTEwzw42gQQHZaJi1jiZyRy4KfXDZtlIQmTOAJm1O/V0DIERknZTux36MiEfSR7JKP7NT6CbHGeOi/6VKUnbQoUkLbXRs1tN/3+vJ/7p+6pahQT1KniZmplniSNEkgVG9Zbd7jRpX/oslASj+WcnIxLiNyv/+8qWhjiE83P3dDyCJPFf166qbR+R7U9jo7xCkiF997hmCVqFjqZdzIz09NK3UokeWCI0AM7xERDM9fAAAuroPyU2CtV2dCzOxAIahSr/+zjENoAKfOV/55hL8VSfbnjUjKai8L//ylEx//qDoSN6rTY/vSNZDr5jdElV66WVxLJQxoZnznVEh29s+2jt5FbyS0PVX7gkyp1SYo0a5Y1qu6zbiaE0YRYGZ6R4VBcI2YlA8SnWcqLG4HVV/pYaiu/xEHOjmRkZyv0eRjMZZ7Ipnb1e7UxpVNWjX1OLMu1mU4qiekqyXtn6//1/9095KRRlDRSJSruMzcqfrGCoA5tOnz8NflDTlwYGbJRkre47Uxb38fucgcYi0RzSfu5yTsbUxb68fGb/+zjEQ4AKoXNh54ylyVSwrDywj2FTMTR4G3+MJAM6uZ9WA6Dyj4deW2/h9f6v5L+nrlXEL88GqtVZqarLmY0jIRQFTur6kTVLRoEV8zbxqTDitQMlixmtR/0tEFFYQcfygu+d7yzbGTKiZjtWv/+iGWplRGJ1kBjv25nANyBEKm4sE/ojBWa0Ll7RM1QKusabubDKm79sZaA1PRMXHhGuElCk1XEONBBE9FKCBHGATy6x5jqqrBr2SfM6MWYgTlXeyysJFxBtSqz95CP6qcEKhDDVeKIrG0v/+zjET4AK0Ptb56BNgVie7DzQiKgLIAuwUcpQslBQOqMpQnaIiYiXe2xkpAFyjUyM0ZZNl2za24ZfFw47MMiY2s6yeUrEEHVeuuiCUE5EGGsvyFGKenCUj/P8j0nfFK6l0iNZ1HlHdKfj06yCkNY1hJQQdB0qksPaJurzLmXJUHKAQHU3sRFWbTQV7NPY7SSlGDgzIyd5EC1KBMfcljrZbnOjpZlEFlzOTp/60OaVaP9noJPvyVI9CGf8v/1R033XdtSo6OWq/uUqEYG3MRV2iKm6mSNglgP/+zjEWoAKqMl16Kxp8VavK3zTCDiecs73DUnLW2nvemQaLKUgvQ06XENvueRUOyXuYuNsPnkmDkItk6hGca0f1f6/VLfXM0qDxy4RdWlt/ywuIE/bbyqKHZE6e//tl9Pr62/RNMMyCBR52KIDxExVQ5Ig3ABE6W4p91Q+6hmBgzj4YRWN3bayFAVjAhWu0pZBZnM6FpXoHetFs3/XOhCIMG9rJ0GjzlrfsQhj3LRCUPVF0TT+1+77U5LelqlKZlVw81pVJlV4iYiJHEE2A1OxNSrYjdYaJFb/+zjEZoAMBXFR5aBTiWGwKjzRlLn3M40FNJUWXyCCwgH5EE5+7GG3msykRMeNDyoQX/zbtdN3IxCDlfY+RCDhHa8buIF8VJCk4I2tfauy4SWvMQtQKC4CDRRDDUFd4mqlyRhugGqoq55TNR1HTNwowcCYKx+hiWP5oY4pBSZnOcGdKeDZv6+dQsjAUVsj6snzhMjq4UUlVT2hkNW2SzDib2qyrcl0td6enUuh/SS+0/MrshIZ1KFYQwwEpsSRgyrL7TiKCRxLtM3KrWRSl1m/EXDrBINn22b/+zjEa4ALSPtN5oynwXqw6bzRifhDKisn2ep2xgdHJZOM2W7OLsFiN5EHmzp/HPzZaTDIm+5nNwXvLR/EDvQ34dQl8l6k3+T5VlUq6t3hhS2g20iIUAW0zJbCCq6zRa0iugq1StbqZGdrJPtt1nf2NpFiDly7//T7Qnp9338XLXcS6W8XzzF8cV0o5sgmimCeRjx60j3G10DuUJvcLrOkgAaTmfpaRzf1t9qM1m6TG+xipQ4AYVvOMtUkOS272WMNwAgXpa0qCLPu633fRaEX33Htfc0YwQH/+zjEcIAL1Ps6iBWPyY4w5y0FijiBCfmQlwCBaXKSkZ7BxBojGwmZH//CrwYGpBoJITL/3lam5L8BlN4tfO64k2zNBZkZcyQv+0z/f35O9JcoRsHAqboDGZqABr9wArlyi6loXRSarOu6aTUnU6CkK29c1MS85UN3u1i6tKYN21WUy3Uy3RdbtfdqkmScwdZ4yjqIiM0tqX4hwtUo/g33t/jRZgw7KvejTHtaf3p10vbZqaf6MPCuQX4pE/oAAS5QBAHtNpQUueSWgnV0/Zr5k5Cb15hoZDD/+zjEcIAMaX9BpphySYqu5mEni8GZ63QOXSOf5t22v8jSG8/L8i23gm4WXQudOyaKgkcBhqy3zclpHs56k9Iuo+hqSwGXHpkCIBeRkUk8iIwACmE49wwAzIIGbKUtUyXvrf6erlWz89IKDsCGGPhkdgQYsyjsTVcQwKKZPIRl8P/I/KENYjXSVLzrrJAbg6ZaYv7OXp9rIGN02PMIJHnMTc7I7lVZgAKRLmM5a+5RpDB82T5qz+uOYk5pR/12kg5nMhZqPJXuEPstG0p4a7GQsYweyjXobLj/+zjEbwAK2P0xKYzTQU+fprERomgWH9ECNRRMoi0cJxF8aWDQCJHTuPTQXG0uTpTXS09U8gwG0POhMsENNCAC01SieSU5PJrO9dM7r3tu1/4zvgVgo8pEXG8BLPLdbPYCPU2ljEs3nUhmCX3shNXO5h3+c490D3+fulYLINx8VO3nQTY7b36OqpYaw7MqCAbIAEdMrwFdKhUjKZkD6Tlz+GTm3G9yMYUMpOo47FzpEXa8FJiWM9wphswLCFsRPYWAockC7GqEocNlJqAmzQsRoX120JuktSz/+zjEewILLOsqTIUHgUge5SVBmmizBE/FSUAQbKz9HBhHhC9FMm/RLXQ9hR5kxDILgaQjgsAoMPUGEQc7bnTcKgoLQ2dPIF3D4oh4NtcGoiYqFVw8ZPINSQ4Wi7FVP1e9G+jUaVIaahAI0FaVvWNcCLeAbMIUzCYT31Y80V3CjhGKtaZGtzO0V/KUI1Q0sCYmSwMhmO2gkBguWSXUaDRIsOYpqQVQTgO8y1tKaWuZ40qU3P4k1V+PhPWGJABlnrzbiC9neZH0j/nHRB1UH6ZkevK0s4a2LHn/+zjEhoEJyJ0kzJhgATgQ48mkDGgw8WJbaS9ypOGoGUtB//p+3b/uZRc33czVEoFV5f5rQCQM0BI2HIfkEOUAclRyyeFIMcErjV2E0ZHUMEyI6XY3jNYWTZVK92jllz6N/5LlDbT53/xrAdcHDAOP22pWSVlrLv3sy2j9NplzBxoizGNajvowRCpSzQwOW8w0xOY1YwdqKQzzGa1DtQqOt5Ua10lu1I9zDfiypFZ+5TxHItNAGql7mMrateKNs2vQyClpUiHUFiHWAACUKG8HOIT4s0iKjhr/+zjEmYMJvKEaLRhjQOkWJImDDCgTXTbcqVkOodxHY+6inuU9EhZOK/uxtbXsZiktdFnupD49dG191jRcAjzZoAm0fKeFSsUN6jDgkzU8OSKjJSl32WtzXdhLUTsdNphlDm5np2sdsSaoblzCb0ORBKhh7bY2MqciTgpubbdRUtL/pUW6+tkVCAHGkhQPtAdfIFdxtdT83ve87fb9SZxib5e87e937pxLEszPzsQwBw/JnXK5mZksnmZ5SbtnZm8YCWZxrBAAEBoeaSAQA4tP3plg/X/Wb///+zjEtoOJ5NMYDDBjQTMV4oWDCPA3bOzMzJ5m/k7d++MHixfcHycPLej5GCAY8QO2FznqY7dkwoJRdJnfbLr45YAwAAP/srQlo+f8X4kgVs/4YpAm5eCHlygCqBAYzqIoH4E2BohD9Q6VhofqqYNYeAw4EOPLXZeE1HPtwjn6iZwNIPI42O6dN5WjfRuW1Xv8MiGw1ehqPHoXDiOMuZLPqsd+8ja+J3kZh7nEj40W9cn4W87RzQUqtP/////////////3Nkf4jf/wm3s3//wTNGwGGwgG6kz/+zjEygIGuAUlIwRAIS0aogTzFWBBTUUAogPQ5pEiixwCASJxJLZmZOqWzM3GPVVXq8Zj//VVXq8Zv/qrsxbMx0KAjwVd8SrBU6Ig4WPLBWCqj3/8Ff8FVnf1VHiobkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6wAOSO8e9IYAAnwnJ/cw8ACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjEwYPI2KMu3GGAAAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",cheer:"data:audio/mpeg;base64,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mKtU0HRuGrLz6LiSb4kzxNqaDJeh+qWJkpOXK1EMZqPsY1T6VsiKW7pVlr3/+zjE44OJFJsaLbChwYCx4o2zCbiM44nNksn1zgENsEvpxsoQwu15uTg01qaRre7SLswU1EoQXIrVFkZQTCdDwdya3dZnqoEKeyh8WRqWOvL5WqUJ5xp17X4dXJQ/oJbVz/dmw+vEizQ2phfgfOd9jvub35WvGrt9r9tX/E/JpZdyGhChT0h26VJqAArBtse09EO4yaC8a0Nz31alz5tiIBkiIIQ49ZBF8eWmNHu6bnIQQapkSOUhWahLJVHRgRpMgro+M1TXgr09/o6EZnL5EvYll96pZ2b/+zjE8IMLnUcWTRhHyZ6bIkmkjPibR32z5m77M1qjZXdY1WgnYAAAEgBOA1AS8gcfBRLapLFKZ9M6dicMvTE+O27eyhMBQlri8ddwxEiHFScpOH0a9IfrS3EUUzsLTLBSRrC2DctFQtlg1UD2UxzePVyrdYPVRs1GWESM7bGzi1yM8dqkctjTnxo8TuX9iI/eYZT3q+rec1/5vMXzKem0r/zTrP9VGyfr87F8E46iZec9u0dN+332ZlzKTReltvTaZmZvsX7PLIqyvgcqKNsdjilV0//1VZb/+zjE74MMHXMUTCCtybYo4UWnoDAAAAu9cNpFW8/AQNlACy4USl9tFdZlPLdStgzTMdU9FfWuzltu/uxP16jXJexBI/mOuxV8/kkOTgUGXuVhUSfdFfcZj1aXOi77t2m0a2y+Uw+uNHwu+h1VJxXMTpcLtWzKq2f///nn/91J34o2cuM/kon5Vjv8v3rXf7/9//7///yqnlE1byu0E/nhlc//Tveg0gPgMDFRSKRSzSwqJoCoNE1oULOKAgKsBCjrM2qrxVXZm1ZuqpMy7Mx6rQokmAgqCxX/+zjE6YALrYESVYKACpuzIcsywAAFXA0WBpYKwVcDURPBUYe//Eqzv//ljwlcziVZ0tVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEyIAT8R9BuYwAAS+RW8eSMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",cage:"data:audio/mpeg;base64,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"};var Xm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Be=null,xl=!1;function mh(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Ah(){mh(),xl=!0;try{if(Be||(Be=document.createElement("audio"),Be.src=Xm,Be.loop=!0,Be.preload="auto",Be.setAttribute("playsinline",""),Be.setAttribute("webkit-playsinline",""),Be.setAttribute("x-webkit-airplay","deny"),Be.volume=.01,Be.addEventListener("pause",()=>{xl&&!document.hidden&&setTimeout(()=>xl&&Be.paused&&Be.play().catch(()=>{}),300)})),Be.paused){let i=Be.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function xh(i,t){mh();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var be=i=>440*Math.pow(2,(i-69)/12),Hr=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(Ah(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;xh(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=s,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.value=e;let h=l.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05)}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",be(l),a,c*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var Ym=[null,69,null,72,null,74,72,null,69,null,67,null,64,null,null,67],Zm=[57,null,null,60,null,63,null,null,57,null,56,null,60,null,59,null],es=class extends Hr{constructor(){super(),this.mode=null,this.step=0,this.nextT=0,this.birdAt=0}setMode(t){if(t!==this.mode){if(this.mode=t,this.nextT=0,this.step=0,!t){this.setBed(null);return}this.setBed("wind")}}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.muted||!this.mode)return;let n=60/(this.mode==="boss"?138:this.mode==="play"?112:94)/2;for((!this.nextT||this.nextT<t.currentTime-.4)&&(this.nextT=t.currentTime+.08);this.nextT<t.currentTime+.25;){let s=this.nextT,r=this.step%16,a=this.mode==="boss";[0,3,6,8,11,14].includes(r)&&this.slide("sine",170,62,s,.2,a?.5:.38,this.music),[4,12].includes(r)&&this.slide("triangle",260,130,s,.12,.22,this.music),a&&r%2===0&&this.slide("sine",110,55,s,.12,.18,this.music),r%2===1&&this.noise(s,.05,.05,"highpass",6e3,1,this.music),r===0&&this.tone("triangle",be(33),s,n*12,.16,this.music,.05);let o=(a?Zm:Ym)[r];(o&&this.mode!=="menu"||o&&this.mode==="menu"&&r%4===1)&&this.tone("sine",be(o+12),s,n*2.2,a?.07:.06,this.music,.03),this.nextT+=n,this.step++}if(t.currentTime>this.birdAt&&this.mode!=="boss"){this.birdAt=t.currentTime+2.5+Math.random()*5;let s=1800+Math.random()*1400,r=t.currentTime+.05;for(let a=0;a<3;a++)this.slide("sine",s,s*(1.2+Math.random()*.3),r+a*.11,.09,.05,this.sfx)}}play(t,e=0){let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let s=n.currentTime;switch(t){case"tap":this.tone("sine",640,s,.06,.08);break;case"gateGood":[0,4,7,12].forEach((r,a)=>this.tone("triangle",be(72+r),s+a*.06,.35,.13)),this.tone("sine",be(84),s+.2,.5,.06);break;case"gateBad":this.slide("sawtooth",330,110,s,.4,.1),this.tone("square",be(46),s+.05,.3,.06);break;case"cheer":this.noise(s,.9,.16,"bandpass",1300,1.2,this.sfx,1900),[0,.05,.1].forEach((r,a)=>this.slide("sawtooth",300+a*70,520+a*90,s+r,.5,.025));break;case"coin":this.tone("square",be(88),s,.05,.05),this.tone("square",be(95),s+.05,.1,.05);break;case"trapWarn":this.noise(s,.04,.08,"highpass",3e3),this.tone("square",1400,s,.04,.05);break;case"trapUp":this.noise(s,.12,.14,"bandpass",2400,2),this.tone("triangle",180,s,.1,.1);break;case"lever":this.tone("sine",90,s,.25,.3),this.noise(s,.12,.12,"lowpass",600),this.tone("square",520,s+.08,.05,.05);break;case"saw":this.slide("sawtooth",200,900,s,.3,.05),this.noise(s,.3,.05,"bandpass",3e3,3);break;case"sawBreak":this.noise(s,.6,.22,"lowpass",1500),this.slide("sawtooth",800,60,s,.6,.1),[0,5,9].forEach((r,a)=>this.tone("square",be(90+r),s+.1+a*.05,.1,.04));break;case"hit":this.noise(s,.2,.2,"lowpass",700),this.slide("sine",200,50,s,.25,.3);break;case"cage":this.noise(s,.18,.2,"bandpass",900,1.5),this.tone("triangle",be(60),s,.1,.1),[0,4,7].forEach((r,a)=>this.tone("triangle",be(76+r),s+.1+a*.06,.3,.1));break;case"fight":this.slide("sawtooth",120,90,s,.5,.1),this.noise(s,.4,.1,"bandpass",1100,1);break;case"clash":this.noise(s,.08,.07,"bandpass",2200+Math.random()*1500,3);break;case"roar":this.slide("sawtooth",160,55,s,1,.18),this.slide("square",90,40,s,1,.1),this.noise(s,1,.12,"lowpass",500);break;case"tele":this.tone("triangle",be(52),s,.5,.1),this.slide("sine",300,600,s,.7,.05);break;case"slam":this.slide("sine",120,30,s,.5,.5),this.noise(s,.5,.28,"lowpass",500);break;case"crumble":this.noise(s,1.4,.3,"lowpass",900,1,this.sfx,120),this.slide("sine",80,25,s,1.2,.4);break;case"open":[0,7,12,19].forEach((r,a)=>this.tone("triangle",be(67+r),s+a*.08,.5,.12));break;case"win":[0,4,7,12,16,19,24].forEach((r,a)=>this.tone("triangle",be(72+r),s+a*.1,.6,.14)),this.slide("sine",160,70,s,.3,.3);break;case"over":[0,-3,-7,-12].forEach((r,a)=>this.tone("triangle",be(64+r),s+a*.2,.5,.12));break;case"buy":[0,7,12].forEach((r,a)=>this.tone("triangle",be(80+r),s+a*.06,.2,.1));break;case"poof":this.tone("sine",900+e*40,s,.05,.03);break;default:break}}};fh(es,gh);ph(es);function vl(i={}){let t=!!i.worst,e=!!i.skipOptional;return function(s){let r=s.lv,a=s.cap,o=r.W;if(s.state!=="play"||s.fight)return{x:0,y:0};let[l,c]=s.tileOf(a.x,a.y),h=r.boss,u=s.bossState;if(h&&u.phase==="fight"){let I=u.tele;return I&&s.inTele(I,a.x,a.y)||I&&I.kind==="sweep"&&Math.hypot(a.x-h.x,a.y-h.y)<I.r+1?vh(s,I):Math.hypot(a.x-h.x,a.y-h.y)>h.melee-1.2?ns(a,h.x,h.y):{x:0,y:0}}let d=new Set;for(let I of r.groups){if(I.taken>=0)continue;let w=-1,T=t?1/0:-1/0;for(let C of I.gates){let y=r.gates[C],R=gl(s.n,y.op,y.v);(t?R<T:R>T)&&(T=R,w=C)}for(let C of I.gates)C!==w&&d.add(`${r.gates[C].tx},${r.gates[C].ty}`)}let p=(I,w)=>d.has(`${I},${w}`),m=[];if(e)for(let I of r.levers)I.pulled||m.push([Math.floor(I.x/_t),Math.floor(I.y/_t)]);else{for(let I of r.cages)I.open||m.push([Math.floor(I.x/_t),Math.floor(I.y/_t)]);for(let I of r.levers)I.pulled||m.push([Math.floor(I.x/_t),Math.floor(I.y/_t)]);for(let I of r.coins)I.got||m.push([Math.floor(I.x/_t),Math.floor(I.y/_t)])}let A=null;if(m.length){let I=new Set(m.map(T=>T[1]*o+T[0])),w=new Set;for(let T of r.groups)if(T.taken<0)for(let C of T.gates)w.add(`${r.gates[C].tx},${r.gates[C].ty}`);A=Es(s,[l,c],(T,C)=>I.has(C*o+T),(T,C)=>w.has(`${T},${C}`)),A||(A=Es(s,[l,c],(T,C)=>I.has(C*o+T),p))}if(!A&&r.exit&&r.exit.open&&(A=Es(s,[l,c],(I,w)=>I===r.exit.tx&&w===r.exit.ty,p)),!A&&h&&u.phase!=="dead"){let I=Math.floor(h.x/_t),w=Math.floor(h.y/_t);A=Es(s,[l,c],(T,C)=>Math.abs(T-I)+Math.abs(C-w)<=3,p)}if(!A)return{x:0,y:0};if(A.length<2){let I=A[0];return ns(a,(I[0]+.5)*_t,(I[1]+.5)*_t)}for(let I=1;I<Math.min(A.length,4);I++){let[w,T]=A[I],C=r.traps.find(N=>N.tx===w&&N.ty===T);if(!C)continue;let y=(I-1)*_t+_t,R=s.t+Math.max(0,(I-1)*_t-_t/2)/s.speed,B=s.t+(y+_t/2+1)/s.speed;if(s.trapUpDuring(C,R,B+.15))return ns(a,(l+.5)*_t,(c+.5)*_t,.15)}let g=A[1],f=(g[0]+.5)*_t,E=(g[1]+.5)*_t,M=(l+.5)*_t,_=(c+.5)*_t,S=Math.abs(g[1]-c)===1&&g[0]===l;return S&&Math.abs(a.x-M)>.25?ns(a,M,a.y+(E-a.y)*.2):!S&&Math.abs(a.y-_)>.25?ns(a,a.x+(f-a.x)*.2,_):ns(a,f,E)}}function ns(i,t,e,n=.12){let s=t-i.x,r=e-i.y,a=Math.hypot(s,r);return a<n?{x:0,y:0}:{x:s/a,y:r/a}}function vh(i,t){let e=i.cap,n=i.lv.boss,s=null,r=-1e9;for(let a=0;a<24;a++){let o=a/24*Math.PI*2,l=Math.cos(o),c=Math.sin(o),h=!0,u=e.x,d=e.y;for(let m=0;m<14;m++)if(u+=l*.5,d+=c*.5,!i.free(u,d,ji+.2)||n&&Math.hypot(u-n.x,d-n.y)<n.r+ji+.3){h=!1;break}if(!h||t.kind==="sweep"&&i.inTele(t,u,d))continue;let p=Math.hypot(u-t.x,d-t.y)+.3*(n?Math.hypot(u-n.x,d-n.y):0);p>r&&(r=p,s={x:l,y:c})}return s||{x:0,y:0}}var $={sphere:new Zn(.5,14,10),cyl:new di(.5,.5,1,14),box:new hi(1,1,1),cone:new Is(.5,1,10),low:new Zn(.5,8,6),hemi:new Zn(.5,10,6,0,Math.PI*2,0,Math.PI/2)},yl=new Map,mt=(i,t=0)=>{let e=`${i}|${t}`;return yl.has(e)||yl.set(e,new Ze({color:i,emissive:t})),yl.get(e)};function et(i,t,e=0,n=0,s=0,r=1,a=1,o=1){let l=new ie(i,t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}var Km=i=>{let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)},Jm=i=>`#${i.toString(16).padStart(6,"0")}`;function yh(i,t,e,n){let r=document.createElement("canvas");r.width=t*40,r.height=e*40;let a=r.getContext("2d"),o=Km(i.id*977);a.fillStyle=Jm(i.theme.sky),a.fillRect(0,0,r.width,r.height);for(let c=0;c<e;c++)for(let h=0;h<t;h++){if(n[c*t+h])continue;let u=.85+o()*.3,d=new Et(i.theme.floor).multiplyScalar(u);if(a.fillStyle=`#${d.getHexString()}`,a.fillRect(h*40,c*40,40,40),a.strokeStyle="rgba(40,40,30,.45)",a.lineWidth=2,a.strokeRect(h*40+1,c*40+1,38,38),a.beginPath(),a.moveTo(h*40,c*40+40*(.35+o()*.3)),a.lineTo(h*40+40,c*40+40*(.35+o()*.3)),a.stroke(),o()<.35){a.strokeStyle="rgba(30,25,20,.5)",a.lineWidth=1.5,a.beginPath();let A=h*40+o()*40,g=c*40+o()*40;a.moveTo(A,g);for(let f=0;f<4;f++)A+=(o()-.5)*14,g+=(o()-.5)*14,a.lineTo(A,g);a.stroke()}let m=1+((n[c*t+h-1]?1:0)+(n[c*t+h+1]?1:0)+(n[(c-1)*t+h]?1:0)+(n[(c+1)*t+h]?1:0))*2;for(let A=0;A<m;A++){let g=h*40+o()*40,f=c*40+o()*40,E=5+o()*10,M=a.createRadialGradient(g,f,1,g,f,E);M.addColorStop(0,"rgba(70,150,60,.55)"),M.addColorStop(1,"rgba(70,150,60,0)"),a.fillStyle=M,a.fillRect(g-E,f-E,E*2,E*2)}}let l=new Tn(r);return l.colorSpace=Ae,l.anisotropy=4,l}var Cl=new Map;function Qm(i,t,e){let n=`${i}|${t}|${e}`;if(Cl.has(n))return Cl.get(n);let s=document.createElement("canvas");s.width=256,s.height=128;let r=s.getContext("2d");r.fillStyle=e,r.beginPath(),r.roundRect(8,14,240,100,40),r.fill(),r.lineWidth=8,r.strokeStyle="#fff",r.stroke(),r.font="900 78px Tajawal, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.lineWidth=10,r.strokeStyle="rgba(0,20,30,.85)",r.strokeText(i,128,68),r.fillStyle=t,r.fillText(i,128,68);let a=new Tn(s);return a.colorSpace=Ae,Cl.set(n,a),a}function Ch(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");t.translate(32,33),t.beginPath();for(let n=0;n<10;n++){let s=-Math.PI/2+n*Math.PI/5,r=n%2?11:28;t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}t.closePath(),t.fillStyle="#ffe04a",t.fill(),t.lineWidth=4,t.strokeStyle="#fff",t.stroke();let e=new Tn(i);return e.colorSpace=Ae,e}function _h(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,200,90,.95)"),e.addColorStop(.4,"rgba(255,140,40,.4)"),e.addColorStop(1,"rgba(255,100,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Tn(i)}var jm=[15911328,14196848,11565648,15251600],ws=class{constructor(t,e,n){this.cap=t,this.team=e,this.group=new Bt;let s=new di(.15,.22,.55,7);s.translate(0,.3,0);let r=new Zn(.19,8,6);r.translate(0,.76,0);let a=e==="me"?new Zn(.215,8,4,0,Math.PI*2,0,Math.PI/2):new Is(.2,.34,6);a.translate(0,e==="me"?.8:.98,0);let o=new di(.018,.018,1,4);o.translate(.24,.65,.05);let l=new dn(.28,8);l.rotateX(-Math.PI/2),l.translate(0,.02,0);let c=(u,d)=>{let p=new wn(u,d,t);return p.count=0,p.frustumCulled=!1,this.group.add(p),p},h=new Ze({color:16777215});this.body=c(s,h),this.head=c(r,h),this.hat=c(a,h),this.spear=c(o,new Ze({color:9071168})),this.shadow=c(l,new xe({color:0,transparent:!0,opacity:.28,depthWrite:!1})),this.tmp=new pe,this.col=new Et,this.setSkin(n||fn[0])}setSkin(t){this.skin=t;let e=this.team==="me"?t.tunic:13119530,n=this.team==="me"?t.helm:3809312;for(let s=0;s<this.cap;s++)this.body.setColorAt(s,this.col.set(e).offsetHSL(0,0,s*37%11/90-.05)),this.head.setColorAt(s,this.col.set(jm[s%4])),this.hat.setColorAt(s,this.col.set(s%3===0?e:s%3===1?t.cape:n).offsetHSL(0,0,s*13%7/80-.04));for(let s of[this.body,this.head,this.hat])s.instanceColor.needsUpdate=!0}update(t,e,n,s,r=0){let a=Math.min(e,this.cap),o=this.tmp;for(let l=0;l<a;l++){let c=t[l],h=s?Math.abs(Math.sin(n*11+c.ph))*.14:Math.sin(n*3+c.ph)*.02;o.position.set(c.x,h,c.y),o.rotation.set(s?.18:0,-(c.face!==void 0?c.face:r)+Math.PI/2,0),o.scale.setScalar(1.5),o.updateMatrix(),this.body.setMatrixAt(l,o.matrix),this.head.setMatrixAt(l,o.matrix),this.hat.setMatrixAt(l,o.matrix),this.spear.setMatrixAt(l,o.matrix),o.position.set(c.x,.02,c.y),o.rotation.set(0,0,0),o.updateMatrix(),this.shadow.setMatrixAt(l,o.matrix)}for(let l of[this.body,this.head,this.hat,this.spear,this.shadow])l.count=a,l.instanceMatrix.needsUpdate=!0;this.group.visible=a>0}};function Ih(i){let t=new Bt,e=new Bt;t.add(e);let n=mt(i.tunic),s=mt(i.cape),r=mt(i.helm,2236945),a=mt(15911328),o=mt(3811872);e.add(et($.cyl,n,0,.9,0,.8,1,.6)),e.add(et($.box,mt(9067050),0,.62,.02,.86,.14,.64)),e.add(et($.sphere,a,0,1.65,0,.62,.62,.62)),e.add(et($.hemi,r,0,1.72,0,.78,.7,.78)),e.add(et($.cone,mt(i.plume,i.plume),0,2.28,-.05,.28,.7,.28)),e.add(et($.sphere,mt(1710618),-.13,1.68,.27,.1,.12,.08),et($.sphere,mt(1710618),.13,1.68,.27,.1,.12,.08));let l=et($.box,s,0,1,-.36,.78,1.25,.08);l.rotation.x=.18,e.add(l),t.userData.cape=l,t.userData.armL=new Bt,t.userData.armR=new Bt,t.userData.legL=new Bt,t.userData.legR=new Bt;for(let[h,u]of[[t.userData.armL,-.52],[t.userData.armR,.52]])h.position.set(u,1.3,0),h.add(et($.cyl,n,0,-.32,0,.2,.7,.2),et($.sphere,a,0,-.7,0,.24,.24,.24)),e.add(h);t.userData.armR.add(et($.box,mt(14212328,3355456),0,-.7,.55,.08,.07,1.2)),t.userData.armR.add(et($.box,mt(16765498),0,-.7,0,.3,.07,.07)),t.userData.armL.add(et($.cyl,mt(13138474),-.15,-.55,0,.7,.08,.7)),t.userData.armL.children[t.userData.armL.children.length-1].rotation.z=Math.PI/2;for(let[h,u]of[[t.userData.legL,-.2],[t.userData.legR,.2]])h.position.set(u,.55,0),h.add(et($.cyl,o,0,-.25,0,.22,.5,.22),et($.box,o,0,-.52,.06,.26,.12,.38)),e.add(h);t.userData.body=e,e.scale.setScalar(1.6);let c=et(new dn(.9,14),new xe({color:0,transparent:!0,opacity:.3,depthWrite:!1}),0,.03,0);return c.rotation.x=-Math.PI/2,t.add(c),t}function Mh(i,t,e,n,s){let r=new Bt,a=mt(9079416),o=e?3862666:16730682;r.add(et($.box,a,-1.25,1.3,0,.5,2.6,.6),et($.box,a,1.25,1.3,0,.5,2.6,.6),et($.box,a,0,2.7,0,3,.5,.7)),r.add(et($.box,mt(o,o),0,2.97,0,3.1,.12,.74));let l=new ie(new un(2,2.4),new xe({color:o,transparent:!0,opacity:.32,side:Ie,depthWrite:!1}));l.position.y=1.25,r.add(l),r.userData.panel=l;let c=new ui(new Yn({map:Qm(n,"#ffffff",e?"#1a9a5a":"#c8302a"),transparent:!0,depthWrite:!1}));return c.scale.set(3.4,1.7,1),c.position.set(0,4.1,.2),r.add(c),r.userData.label=c,s&&(r.rotation.y=Math.PI/2),r.userData.vertical=s,r}function bh(){let i=new Bt;i.add(et($.box,mt(3815994),0,.05,0,2.5,.1,2.5));let t=et($.box,new Ze({color:4473924,emissive:0}),0,.12,0,2.3,.05,2.3);i.add(t),i.userData.rim=t;let e=[];for(let n=0;n<9;n++){let s=et($.cone,mt(13685980,3158072),-.75+n%3*.75,0,-.75+Math.floor(n/3)*.75,.32,1.3,.32);s.position.y=.1,i.add(s),e.push(s)}return i.userData.spikes=e,i}function Sh(){let i=new Bt;i.add(et($.box,mt(6974048),0,.2,0,1.4,.4,1),et($.box,mt(4868676),0,.7,-.3,1,1,.3));let t=new Bt;return t.position.set(0,.45,.05),t.add(et($.cyl,mt(9067050),0,.7,0,.14,1.4,.14),et($.sphere,mt(15219258,8392720),0,1.45,0,.4,.4,.4)),t.rotation.z=.7,i.add(t),i.userData.arm=t,i.add(et($.sphere,mt(16765498,11172352),0,2.4,0,.45,.45,.45)),i}function Eh(){let i=new Bt,t=mt(12633292,2105384),e=new Bt;e.position.y=1.5;let n=et($.cyl,t,0,0,0,2.6,.14,2.6);n.rotation.x=Math.PI/2,e.add(n);for(let s=0;s<12;s++){let r=s/12*Math.PI*2,a=et($.cone,mt(14738668),Math.cos(r)*1.4,Math.sin(r)*1.4,0,.35,.5,.2);a.rotation.z=r-Math.PI/2,e.add(a)}return e.add(et($.cyl,mt(15219258,8392720),0,0,.1,.6,.25,.6)),e.children[e.children.length-1].rotation.x=Math.PI/2,i.add(e,et($.box,mt(5917242),-1.4,1,0,.3,2,.3),et($.box,mt(5917242),1.4,1,0,.3,2,.3),et($.box,mt(15255594),0,.12,0,3,.1,1)),i.userData.disc=e,i}function wh(){let i=new Bt,t=new Bt;i.add(t),i.add(et($.box,mt(6969914),0,.08,0,2.2,.16,2.2));for(let n=0;n<8;n++){let s=n/8*Math.PI*2;t.add(et($.cyl,mt(9079440),Math.cos(s)*1,.9,Math.sin(s)*1,.1,1.7,.1))}t.add(et($.cyl,mt(9079440),0,1.8,0,2.2,.1,2.2));let e=new Bt;i.add(e);for(let n=0;n<3;n++){let s=new Bt;s.position.set(-.5+n*.5,0,n%2*.3-.1),s.add(et($.cyl,mt(10132136),0,.5,0,.4,.7,.4),et($.sphere,mt(15911328),0,1,0,.36,.36,.36)),e.add(s)}return i.userData.bars=t,i.userData.pris=e,i}function Th(){let i=et($.cyl,mt(16765498,11172352),0,1,0,.8,.12,.8);i.rotation.x=Math.PI/2;let t=new Bt;return t.add(i),t}function Rh(i){let t=new Bt;t.add(et($.cyl,mt(5913114),0,1.3,0,.14,1.1,.14));let e=et($.cone,mt(16752672,16744464),0,1.15,0,.4,.8,.4);e.position.y=2.1,t.add(e);let n=new ui(new Yn({map:i,transparent:!0,blending:Hn,depthWrite:!1}));return n.scale.set(3.4,3.4,1),n.position.y=2.2,t.add(n),t.userData.fl=e,t.userData.glow=n,t}function Ph(i){let t=new Bt,e=mt(9078392);t.add(et($.box,e,-1.3,1.6,0,.7,3.2,.9),et($.box,e,1.3,1.6,0,.7,3.2,.9),et($.box,e,0,3.4,0,3.3,.7,1));let n=new ie(new un(2,3),new xe({color:16765498,transparent:!0,opacity:.6,side:Ie,depthWrite:!1}));n.position.y=1.5,t.add(n),t.userData.door=n;let s=et($.cyl,new xe({color:16771200,transparent:!0,opacity:.18,depthWrite:!1}),0,5,0,2,10,2);return t.add(s),t.userData.beam=s,t.userData.set=r=>{n.material.color.set(r?16765498:6953498),n.material.opacity=r?.6:.85,s.visible=r},t.userData.set(i),t}function qh(){let i=new Bt,t=mt(6989882),e=mt(4880938),n=new Bt;i.add(n),n.add(et($.sphere,t,0,2.3,0,3.4,3.6,2.6),et($.sphere,mt(10143840),0,2,.9,2.4,2.4,1.6),et($.box,mt(8014378),0,1.2,.3,2.8,.9,2.2)),n.add(et($.sphere,t,0,4.5,.2,1.9,1.7,1.8)),n.add(et($.sphere,mt(16777215),-.5,4.7,1,.55,.55,.4),et($.sphere,mt(16777215),.5,4.7,1,.55,.55,.4),et($.sphere,mt(1710618),-.5,4.65,1.25,.25,.25,.2),et($.sphere,mt(1710618),.5,4.65,1.25,.25,.25,.2));let s=et($.box,mt(2767386),0,5,1.15,1.6,.2,.3);n.add(s),n.add(et($.cone,mt(16051408),-.55,3.9,1.1,.35,.8,.35),et($.cone,mt(16051408),.55,3.9,1.1,.35,.8,.35)),n.add(et($.cone,mt(15261888),-1.1,5.4,0,.5,1.2,.5),et($.cone,mt(15261888),1.1,5.4,0,.5,1.2,.5));let r=new Bt;r.position.set(-2,3.4,0),r.add(et($.cyl,t,0,-1,0,.8,2.2,.8),et($.sphere,e,0,-2.2,0,1,1,1)),n.add(r);let a=new Bt;a.position.set(2,3.4,0),a.add(et($.cyl,t,0,-1,0,.8,2.2,.8),et($.sphere,e,0,-2.2,0,1,1,1));let o=new Bt;o.position.set(0,-2.2,.2),o.add(et($.cyl,mt(8014370),0,1.4,0,.5,3.4,.5),et($.sphere,mt(6961688),0,3.2,0,1.3,1.3,1.3)),o.rotation.x=0,a.add(o),n.add(a),n.add(et($.cyl,e,-.9,.7,0,1,1.4,1),et($.cyl,e,.9,.7,0,1,1.4,1));let l=et(new dn(2.8,20),new xe({color:0,transparent:!0,opacity:.3,depthWrite:!1}),0,.04,0);return l.rotation.x=-Math.PI/2,i.add(l),i.userData={body:n,armR:a,armL:r,kind:"brute"},i}function Lh(){let i=new Bt,t=mt(9077880),e=mt(6973020),n=mt(4885050),s=new Bt;i.add(s);let r=[],a=h=>(s.add(h),r.push(h),h);a(et($.box,e,-1.3,1.3,0,1.8,2.6,1.8)),a(et($.box,e,1.3,1.3,0,1.8,2.6,1.8)),a(et($.box,t,0,4,0,4.4,3.4,3)),a(et($.sphere,n,-1,5.6,.2,2.2,.9,1.8)),a(et($.sphere,t,-2.7,5.2,0,1.9,1.9,1.9)),a(et($.sphere,t,2.7,5.2,0,1.9,1.9,1.9)),a(et($.box,t,0,6.3,.2,2.2,1.8,2)),a(et($.box,mt(16769120,16760864),-.5,6.5,1.25,.5,.35,.2)),a(et($.box,mt(16769120,16760864),.5,6.5,1.25,.5,.35,.2));for(let h=0;h<4;h++)a(et($.cone,mt(6351103,2138304),-1.4+h*.95,6.1,-1.3,.7,1.7,.7));let o=new Bt;o.position.set(-2.8,5,0),o.add(et($.box,t,0,-1.5,0,1.2,3,1.2),et($.sphere,e,0,-3.2,0,1.8,1.8,1.8)),s.add(o),r.push(o);let l=new Bt;l.position.set(2.8,5,0),l.add(et($.box,t,0,-1.5,0,1.2,3,1.2),et($.sphere,e,0,-3.2,0,1.8,1.8,1.8)),s.add(l),r.push(l);let c=et(new dn(3.4,20),new xe({color:0,transparent:!0,opacity:.3,depthWrite:!1}),0,.04,0);return c.rotation.x=-Math.PI/2,i.add(c),i.userData={body:s,armR:l,armL:o,parts:r,kind:"golem"},i}function Dh(i,t,e){let n=new Bt,s=new wn($.cyl,mt(5913114),70),r=new wn($.low,mt(4168266),70),a=new pe,o=0,l=i*_t,c=t*_t;for(;o<70;){let h=-14+e()*(l+28),u=-14+e()*(c+28);if(h>-9&&h<l+9&&u>-9&&u<c+9)continue;let d=.6+e()*.6;a.position.set(h,2*d,u),a.scale.set(.8*d,4*d,.8*d),a.rotation.set(0,0,0),a.updateMatrix(),s.setMatrixAt(o,a.matrix),a.position.set(h,5*d,u),a.scale.set(5*d,4*d,5*d),a.updateMatrix(),r.setMatrixAt(o,a.matrix),r.setColorAt(o,new Et(4168266).offsetHSL((e()-.5)*.06,0,(e()-.5)*.1)),o++}return n.add(s,r),n}function Q(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function Uh(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function Vh(i,t,e,n="#ffd23a"){return`
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
`}var Gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ge=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tA=new Yi(-1,1,1,-1,0,1),_l=class extends Me{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}},eA=new _l,Jn=class{constructor(t){this._mesh=new ie(eA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,tA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var is=class extends Ge{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Kn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Jn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ts=class extends Ge{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Wr=class extends Ge{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Xr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new is(Gr),this.copyPass.material.blending=cn,this.clock=new Vr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ts!==void 0&&(a instanceof Ts?n=!0:a instanceof Wr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yr=class extends Ge{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Nh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ss=class i extends Ge{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new Et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Le(r,a,{type:nn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Le(r,a,{type:nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Nh;this.highPassUniforms=Kn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Gr;this.copyUniforms=Kn.clone(h.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Hn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Et,this.oldClearAlpha=1,this.basic=new xe,this.fsQuad=new Jn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ss.BlurDirectionX=new Ct(1,0);ss.BlurDirectionY=new Ct(0,1);var Bh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Zr=class extends Ge{constructor(){super();let t=Bh;this.uniforms=Kn.clone(t.uniforms),this.material=new Rr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Jn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===el?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Fh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},nA={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},iA={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function sA(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new Me;l.setAttribute("position",new Re(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new Tn(c);d.colorSpace=Ae;let p=new _s({map:d,color:iA[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Hn,fog:!1,sizeAttenuation:!0}),m=new Tr(l,p);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function rA(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var aA={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2},oA=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,lA=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;function cA(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=g=>{if(!n[g]){let f=new Audio(`${e}${g}_${t}.mp3`);f.preload="auto",f.volume=.95,n[g]=f}return n[g]},u=(g,f)=>{let E=performance.now();if(!f&&E-r<6e3||c)return;let M=g+(1+Math.floor(Math.random()*aA[g])),_=h(M);c=!0,r=E,_.currentTime=0;let S=()=>{c=!1};_.onended=S,_.onerror=S;let I=_.play();I&&I.catch&&I.catch(S),setTimeout(S,4e3)},d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),f=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),f.gain.setValueAtTime(.08,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(f),f.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},p=()=>{a=performance.now(),d(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",p,{passive:!0}),window.addEventListener("keydown",p,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let g=(i.innerText||"").slice(0,600);g!==m&&(m=g,oA.test(g)?u("win",!1):lA.test(g)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(u("idle",!1),a=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function Oh(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Fh[e.get("look")||t.preset||"warm"]||Fh.warm,s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,p=0,m=0,A=0,g=!1,f=performance.now();function E(M,_){let S=i.getSize(new Ct);p=S.x,m=S.y,A=i.getPixelRatio(),c=new Xr(i),c.setPixelRatio(A),c.setSize(p,m),h=new Yr(M,_),c.addPass(h),s||(u=new ss(new Ct(Math.max(2,p>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Zr),d=new is(nA),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(M,_){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!M||!_||!M.isScene)return a(M,_);try{c||E(M,_);let S=i.getSize(new Ct),I=i.getPixelRatio();(S.x!==p||S.y!==m||I!==A)&&(p=S.x,m=S.y,A=I,c.setPixelRatio(I),c.setSize(p,m),u&&u.resolution.set(Math.max(2,p>>1),Math.max(2,m>>1))),h.scene=M,h.camera=_,d.uniforms.time.value=(performance.now()-f)/1e3;let w=performance.now(),T=Math.min(.1,Math.max(0,(w-l)/1e3));if(l=w,!e.has("nomotes")&&t.motes!==!1){let C=o.get(M);C||(C=sA(M,_,e.get("look")||t.preset||"warm",r),o.set(M,C)),rA(C,_,T)}g=!0,c.render(),g=!1}catch(S){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",S&&S.message),i.render=a,a(M,_)}},!e.has("nocheer")&&!r&&setTimeout(()=>cA(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var hA={title:["\u062C\u064A\u0634 \u0627\u0644\u0645\u0639\u0628\u062F","TEMPLE ARMY"],play:["\u0627\u0644\u0639\u0628","PLAY"],levels:["\u0627\u0644\u0645\u0631\u0627\u062D\u0644","LEVELS"],shop:["\u0627\u0644\u0645\u062A\u062C\u0631","SHOP"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],select:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0639\u0628\u062F","CHOOSE A TEMPLE"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0639\u0628\u062F \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647","Finish the temple before"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0625\u0639\u0627\u062F\u0629","RESTART"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],won:["\u0627\u0646\u062A\u0635\u0631\u062A! \u{1F3C6}","VICTORY! \u{1F3C6}"],over:["\u062E\u0633\u0631 \u0627\u0644\u062C\u064A\u0634","ARMY LOST"],army:["\u0627\u0644\u062C\u064A\u0634","Army"],coins:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A","Coins"],next:["\u0627\u0644\u0645\u0639\u0628\u062F \u0627\u0644\u062A\u0627\u0644\u064A","NEXT TEMPLE"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],max:["\u0623\u0642\u0635\u0649","MAX"],equip:["\u0627\u0644\u0628\u0633","WEAR"],worn:["\u0644\u0627\u0628\u0633 \u2713","WORN \u2713"],skins:["\u0623\u0632\u064A\u0627\u0621 \u0627\u0644\u0642\u0627\u0626\u062F","Captain looks"],ups:["\u062A\u0642\u0648\u064A\u0629 \u0627\u0644\u062C\u064A\u0634","Army upgrades"],u_start:["\u062C\u0646\u0648\u062F \u0627\u0644\u0628\u062F\u0627\u064A\u0629 +\u0663","Start army +3"],u_power:["\u0642\u0648\u0629 \u0627\u0644\u0642\u062A\u0627\u0644 +\u0661\u0660\u066A","Fight power +10%"],u_speed:["\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0627\u0626\u062F +\u0665\u066A","Captain speed +5%"],how:["\u0627\u0633\u062D\u0628 \u0625\u0635\u0628\u0639\u0643 \u0644\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0642\u0627\u0626\u062F. \u0627\u062E\u062A\u0631 \u0623\u062D\u0633\u0646 \u0628\u0648\u0627\u0628\u0629\u060C \u062D\u0631\u0651\u0631 \u0627\u0644\u0623\u0633\u0631\u0649\u060C \u0648\u0627\u0646\u062A\u0628\u0647 \u0645\u0646 \u0627\u0644\u0623\u0634\u0648\u0627\u0643!","Drag to steer the captain. Pick the best gate, free prisoners, watch the spikes!"],boss:["\u0627\u0644\u0648\u062D\u0634","BOSS"],survivors:["\u0627\u0644\u0646\u0627\u062C\u0648\u0646","Survivors"],gained:["\u0639\u0645\u0644\u0627\u062A \u062C\u062F\u064A\u062F\u0629","Coins earned"],tip:["\u062C\u0631\u0651\u0628 \u0628\u0648\u0627\u0628\u0627\u062A \u0623\u062D\u0633\u0646 \u0648\u062D\u0631\u0651\u0631 \u0627\u0644\u0623\u0633\u0631\u0649!","Try better gates and free the prisoners!"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],freed:["\u062A\u062D\u0631\u0651\u0631\u0648\u0627!","freed!"],g_gate:["\u0627\u062E\u062A\u0631 \u0627\u0644\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0623\u0642\u0648\u0649","Pick the stronger gate"],g_boss:["\u062D\u0637\u0651\u0645 \u0627\u0644\u0648\u062D\u0634","Smash the Brute"],h1:["\u0627\u0633\u062D\u0628 \u0644\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0642\u0627\u0626\u062F \xB7 \u0627\u062E\u062A\u0631 \u0627\u0644\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0623\u062D\u0633\u0646!","Drag to move \xB7 pick the best gate!"],h2:["\u0627\u0646\u062A\u0638\u0631 \u062D\u062A\u0649 \u062A\u0646\u0632\u0644 \u0627\u0644\u0623\u0634\u0648\u0627\u0643 \u0627\u0644\u062D\u0645\u0631\u0627\u0621 \u062B\u0645 \u0627\u0639\u0628\u0631","Wait for the red glowing spikes to sink, then cross"],h3:["\u0627\u0647\u0631\u0628 \u0645\u0646 \u0627\u0644\u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u062D\u0645\u0631\u0627\u0621 \u062B\u0645 \u0627\u0636\u0631\u0628 \u0627\u0644\u0648\u062D\u0634 \u0628\u062C\u064A\u0634\u0643!","Run out of the red circle, then hit the brute with your army!"],h4:["\u0627\u062F\u062E\u0644 \u0627\u0644\u0630\u0631\u0627\u0639 \u0644\u062A\u062D\u0637\u064A\u0645 \u0627\u0644\u0645\u0646\u0634\u0627\u0631!","Walk into the lever to break the saw!"],h5:["\u062D\u0631\u0651\u0631 \u0627\u0644\u0623\u0633\u0631\u0649 \u0642\u0628\u0644 \u0627\u0644\u0628\u0648\u0627\u0628\u0627\u062A \u0644\u062A\u0643\u0628\u0631 \u0623\u0643\u062B\u0631","Free prisoners before the gates to grow bigger"],h6:["\u062A\u063A\u0644\u0651\u0628 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0644\u0627\u0642 \u0628\u0627\u0644\u0623\u0639\u062F\u0627\u062F \u0627\u0644\u0643\u0628\u064A\u0631\u0629!","Overwhelm the golem with numbers!"]},It=Uh(hA),uA={play(){}},Il=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),It.setLang(e.lang),It.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.easy=this.age<=4,this.save=hh(e.save),this.base=e.base||"./",this.sound=new es,this.sound.muted=!!this.save.muted,this.auto=/[?&]bot=1/.test(location.search),document.getElementById("ta-style")||document.head.append(Q("style",{id:"ta-style"},Vh("ta","#2a8a5a","#12503a","#ffd23a")+dA)),this.root=Q("div",{class:"ta-root",dir:It.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=Q("div",{class:"ta-layer"}),this.mode="menu",this.clock=0,this.keys=new Set,this.stick=null,this.vec={x:0,y:0},this.fol=[],this.trail=new gi,this.anims=[],this.floats=[],this.shake=0,this.demoLevel=0,this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){this.renderer=Oh(new Mr({antialias:!0}),{preset:"warm"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Ae,this.root.prepend(this.renderer.domElement),this.scene=new Sr,this.camera=new Te(46,1,.5,400),this.hemi=new qr(16773848,3824192,1.9),this.scene.add(this.hemi),this.sun=new Ur(16772808,1.6),this.sun.position.set(-18,40,14),this.scene.add(this.sun),this.lamp=new Dr(16756832,90,22,2),this.scene.add(this.lamp),this.stage=new Bt,this.scene.add(this.stage),this.glowTex=_h(),this.starTex=Ch(),this.me=new ws(300,"me",fn[0]),this.foe=new ws(420,"foe"),this.scene.add(this.me.group,this.foe.group),this.captain=null,this.pool=[];for(let t=0;t<140;t++){let e=new ui(new Yn({map:this.starTex,transparent:!0,depthWrite:!1}));e.visible=!1,e.userData={life:0},this.scene.add(e),this.pool.push(e)}this.teleGroup=new Bt,this.scene.add(this.teleGroup)}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.updateProjectionMatrix(),this.portrait=this.ch>this.cw}_material(t){return t}_buildLevel(t){this.stage.traverse(S=>{S.material&&S.material.map&&S.userData.ownTex&&S.material.map.dispose()}),this.stage.clear(),this.teleGroup.clear(),this.tele=null,this.anims=[];let e=t.def,n=t.lv,s=e.theme,r=(()=>{let S=e.id*7919+13;return()=>(S=S*1664525+1013904223>>>0,S/4294967296)})();this.scene.background=new Et(s.sky),this.scene.fog=new br(s.fog,55,170),this.hemi.color.set(16773848),this.hemi.groundColor.set(new Et(s.fog).multiplyScalar(.6));let a=n.W,o=n.H,l=new Uint8Array(a*o);for(let S=0;S<o;S++)for(let I=0;I<a;I++)e.map[S][I]==="#"&&(l[S*a+I]=1);let c=yh(e,a,o,l),h=new ie(new un(a*_t,o*_t),new Ze({map:c}));h.rotation.x=-Math.PI/2,h.position.set(a*_t/2,0,o*_t/2),h.userData.ownTex=!0,this.stage.add(h);let u=new ie(new un(500,500),new Ze({color:new Et(s.sky)}));u.rotation.x=-Math.PI/2,u.position.set(a*_t/2,-.06,o*_t/2),this.stage.add(u);let d=2.1,p=[],m=(S,I)=>S<0||I<0||S>=a||I>=o?1:l[I*a+S];for(let S=0;S<o;S++)for(let I=0;I<a;I++){if(!l[S*a+I])continue;let w=!1;for(let T=-1;T<=1;T++)for(let C=-1;C<=1;C++)m(I+C,S+T)||(w=!0);w&&p.push([I,S])}let A=new wn($.box,new Ze({color:16777215}),p.length),g=new wn($.box,new Ze({color:16777215}),p.length),f=new pe,E=new Et;p.forEach(([S,I],w)=>{let T=d+(r()-.5)*.35;f.position.set((S+.5)*_t,T/2,(I+.5)*_t),f.scale.set(_t*1,T,_t*1),f.rotation.set(0,0,0),f.updateMatrix(),A.setMatrixAt(w,f.matrix),A.setColorAt(w,E.set(s.wall).offsetHSL((r()-.5)*.03,0,(r()-.5)*.12)),f.position.y=T+.12,f.scale.set(_t*1.04,.28,_t*1.04),f.updateMatrix(),g.setMatrixAt(w,f.matrix),g.setColorAt(w,E.set(5216836).offsetHSL((r()-.5)*.05,0,(r()-.5)*.1))}),this.stage.add(A,g);let M=this.glowTex;this.torches=[];let _=0;p.forEach(([S,I],w)=>{if(!m(S,I+1)&&!m(S,I+1)){if(_<16&&(S*7+I*11)%5===0){let T=Rh(M);T.position.set((S+.5)*_t,0,(I+1)*_t+.25),T.rotation.x=.12,this.stage.add(T),this.torches.push(T),_++}else if((S*3+I*5)%3===0){let T=et($.box,mt(3111480),(S+.5)*_t+(r()-.5)*1.6,d-.9-r()*.4,(I+1)*_t+.06,.12+r()*.1,1.4+r()*1,.06);this.stage.add(T)}}}),this.stage.add(Dh(a,o,r)),this.ent={gates:[],traps:[],levers:[],saws:[],cages:[],coins:[],hordes:[],exit:null,boss:null};for(let S of n.gates){let I=n.groups[S.group],w=n.gates[I.gates[0]],T=n.gates[I.gates[I.gates.length-1]].tx===w.tx&&I.gates.length>1,C=Mh(S.op,S.v,Al(S.op,S.v),ml(S.op,S.v),T);C.position.set(S.x,0,S.y),this.stage.add(C),this.ent.gates.push(C)}for(let S of n.traps){let I=bh();I.position.set(S.x,0,S.y),this.stage.add(I),this.ent.traps.push(I)}for(let S of n.levers){let I=Sh();I.position.set(S.x,0,S.y),this.stage.add(I),this.ent.levers.push(I)}for(let S of n.saws){let I=Eh();I.position.set(S.x,0,S.y),this.stage.add(I),this.ent.saws.push(I)}for(let S of n.cages){let I=wh();I.position.set(S.x,0,S.y),this.stage.add(I),this.ent.cages.push(I)}for(let S of n.coins){let I=Th();I.position.set(S.x,0,S.y),this.stage.add(I),this.ent.coins.push(I)}if(n.exit){let S=Ph(n.exit.open);S.position.set(n.exit.x,0,n.exit.y),this.stage.add(S),this.ent.exit=S,this.exitOpen=n.exit.open}if(this.ent.hordes=n.hordes.map(S=>this._hordeLayout(t,S)),n.boss){let S=n.boss.kind==="brute"?qh():Lh();S.position.set(n.boss.x,0,n.boss.y),this.stage.add(S),this.ent.boss={m:S,down:0,impact:0}}this.labels=this.labels||new Map;for(let S of this.labels.values())S.remove();this.labels.clear(),this.ent.hordes.forEach((S,I)=>{let w=Q("div",{class:"ta-lab foe"});this.layer.append(w),this.labels.set(`h${I}`,w)}),this._skin(),this.fol=[],this.trail=new gi,this.trail.push(t.cap.x,t.cap.y),this.prevN=t.n,this.hit=0,this.lastFightN=0,this._buildMini(t)}_skin(){let t=fn.find(e=>e.id===this.save.skin)||fn[0];this.me.setSkin(t),this.captain&&this.scene.remove(this.captain),this.captain=Ih(t),this.scene.add(this.captain)}_hordeLayout(t,e){let n=(o,l)=>t.free(o,l,.18),s={x:0,y:1},r=-1;for(let o of[{x:0,y:1},{x:0,y:-1},{x:1,y:0},{x:-1,y:0}]){let l=0;for(;l<12&&n(e.x+o.x*l*.5,e.y+o.y*l*.5);)l++;l>r&&(r=l,s=o)}let a=new gi;for(let o=20;o>=0;o--)a.pts.push({x:e.x+s.x*o*.5,y:e.y+s.y*o*.5});return{hd:e,axis:s,tr:a,pts:kr(Math.min(e.count,60),a,e,n).map((o,l)=>({...o,ph:l*1.3}))}}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.root.addEventListener("pointerdown",n=>{if(!(n.target.closest("button")||n.target.closest(".ta-card")||this.mode!=="play"||this.paused)){this.stick={id:n.pointerId,x:n.clientX,y:n.clientY};try{this.root.setPointerCapture(n.pointerId)}catch{}this._stickUi(!0,n.clientX,n.clientY)}}),this.root.addEventListener("pointermove",n=>{if(!this.stick||n.pointerId!==this.stick.id)return;let s=this.u*9,r=n.clientX-this.stick.x,a=n.clientY-this.stick.y,o=Math.hypot(r,a);o>s&&(this.stick.x+=r/o*(o-s),this.stick.y+=a/o*(o-s),r=r/o*s,a=a/o*s),this.vec=o<this.u*1.2?{x:0,y:0}:{x:r/s,y:a/s},this._stickUi(!0,this.stick.x,this.stick.y,r,a)});let e=n=>{this.stick&&n.pointerId===this.stick.id&&(this.stick=null,this.vec={x:0,y:0},this._stickUi(!1))};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e),this._onKey=n=>{let s=n.key.toLowerCase();if(n.type==="keydown"){if(s==="p"||s==="escape"){this.mode==="play"&&this.togglePause();return}["arrowup","arrowdown","arrowleft","arrowright","w","a","s","d"].includes(s)&&(this.keys.add(s),this.mode==="play"&&n.preventDefault())}else this.keys.delete(s)},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_stickUi(t,e,n,s=0,r=0){if(this.stickEl||(this.stickEl=Q("div",{class:"ta-stick"},Q("i")),this.layer.append(this.stickEl)),this.stickEl.style.display=t?"block":"none",t){let a=this.root.getBoundingClientRect();this.stickEl.style.left=`${e-a.left}px`,this.stickEl.style.top=`${n-a.top}px`,this.stickEl.firstChild.style.transform=`translate(${s}px,${r}px)`}}_input(){if(this.auto&&this.bot&&this.run)return this.bot(this.run);let t=this.vec.x,e=this.vec.y,n=this.keys;return(n.has("arrowleft")||n.has("a"))&&(t-=1),(n.has("arrowright")||n.has("d"))&&(t+=1),(n.has("arrowup")||n.has("w"))&&(e-=1),(n.has("arrowdown")||n.has("s"))&&(e+=1),{x:t,y:e}}_clear(){if(this.layer.replaceChildren(),this.stickEl=null,this.labels)for(let t of this.labels.values())this.layer.append(t)}_soundPill(){let t=Q("button",{class:"ta-soundpill",onclick:()=>this.sound.unlock()},It.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=4200){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}_startDemo(t){this.run=new ts({level:t,easy:!0}),this.bot=vl(),this.demo=!0,this.demoIdx=t,this._buildLevel(this.run),this.endAt=0}showMenu(){this.mode="menu",this.paused=!1,this._clear(),this.sound.setMode("menu"),this.hideBoss(),(!this.demo||!this.run||this.run.state!=="play")&&this._startDemo(this.demoLevel%He.length),this.layer.append(Q("div",{class:"ta-dim ta-light"},Q("div",{class:"ta-card"},Q("div",{class:"ta-logo"},"\u2694\uFE0F ",It.t("title")),Q("div",{class:"ta-menu"},Q("button",{class:"ta-btn",onclick:()=>{this.sound.play("tap"),this.startLevel(Math.min(this.save.unlocked,He.length)-1)}},"\u25B6 ",It.t("play")),Q("button",{class:"ta-btn dark",onclick:()=>{this.sound.play("tap"),this.showLevels()}},"\u{1F5FA}\uFE0F ",It.t("levels")),Q("button",{class:"ta-btn dark",onclick:()=>{this.sound.play("tap"),this.showShop()}},"\u{1F6D2} ",It.t("shop")),Q("button",{class:"ta-btn dark",onclick:()=>{this.sound.play("tap"),this.showSettings()}},"\u2699\uFE0F ",It.t("settings")),Q("button",{class:"ta-btn alt",onclick:()=>this.post({type:"exit"})},It.t("quit")))),Q("div",{class:"ta-pill ta-coinpill"},"\u{1FA99} ",It.num(this.save.coins)))),this._soundPill()}showLevels(){this._clear();let t=It.getLang()!=="en",e=He.map((n,s)=>{let r=s+1>this.save.unlocked,a=this.save.stars[s]||0;return Q("button",{class:`ta-env${r?" lock":""}`,style:`background:linear-gradient(180deg,#${n.theme.fog.toString(16).padStart(6,"0")},#${n.theme.sky.toString(16).padStart(6,"0")})`,onclick:()=>{if(r){this.hint(It.t("locked"),2e3);return}this.sound.play("tap"),this.startLevel(s)}},Q("i",{},n.boss?n.boss.kind==="golem"?"\u{1F5FF}":"\u{1F479}":`${s+1}`),Q("span",{},t?n.name[0]:n.name[1]),Q("span",{},r?"\u{1F512}":a?"\u2B50".repeat(a):"\u2606"))});this.layer.append(Q("div",{class:"ta-dim ta-light"},Q("div",{class:"ta-card"},Q("div",{class:"ta-title"},It.t("select")),Q("div",{class:"ta-grid"},e),Q("button",{class:"ta-btn dark",onclick:()=>this.showMenu()},It.t("back"))))),this.hintEl=Q("div",{class:"ta-hint"}),this.layer.append(this.hintEl),this._soundPill()}showSettings(){this._clear();let t=Q("button",{class:"ta-btn",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.post({type:"save",save:this.save}),t.textContent=`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${It.t("sound")}`,this.sound.play("tap")}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${It.t("sound")}`);this.layer.append(Q("div",{class:"ta-dim ta-light"},Q("div",{class:"ta-card"},Q("div",{class:"ta-title"},"\u2699\uFE0F ",It.t("settings")),t,Q("div",{class:"ta-small"},It.t("how")),Q("button",{class:"ta-btn dark",onclick:()=>this.showMenu()},It.t("back")))))}showShop(){this._clear();let t=It.getLang()!=="en",e=()=>{this.post({type:"save",save:this.save}),this._skin(),this.showShop()},n=fn.map(r=>{let a=this.save.skins.includes(r.id),o=this.save.skin===r.id;return Q("button",{class:`ta-skin${o?" worn":""}`,onclick:()=>{uh(this.save,r.id)?(this.sound.play("buy"),e()):this.sound.play("tap")}},Q("i",{style:`background:linear-gradient(135deg,#${r.cape.toString(16).padStart(6,"0")},#${r.tunic.toString(16).padStart(6,"0")})`}),Q("span",{},t?r.ar:r.en),Q("small",{},o?It.t("worn"):a?It.t("equip"):`\u{1FA99} ${It.num(r.cost)}`))}),s=Object.keys($i).map(r=>{let a=$i[r],o=this.save.up[r],l=o>=a.max,c=a.cost[o],h="\u25A0".repeat(o)+"\u25A1".repeat(a.max-o);return Q("button",{class:`ta-up${!l&&this.save.coins>=c?" can":""}`,onclick:()=>{dh(this.save,r)?(this.sound.play("buy"),e()):this.sound.play("tap")}},Q("span",{},It.t(`u_${r}`)),Q("small",{},h),Q("b",{},l?It.t("max"):`\u{1FA99} ${It.num(c)}`))});this.layer.append(Q("div",{class:"ta-dim ta-light"},Q("div",{class:"ta-card"},Q("div",{class:"ta-title"},"\u{1F6D2} ",It.t("shop")),Q("div",{class:"ta-pill"},"\u{1FA99} ",It.num(this.save.coins)),Q("div",{class:"ta-small"},It.t("skins")),Q("div",{class:"ta-skins"},n),Q("div",{class:"ta-small"},It.t("ups")),Q("div",{class:"ta-ups"},s),Q("button",{class:"ta-btn dark",onclick:()=>this.showMenu()},It.t("back")))))}startLevel(t){this.levelIdx=t,this.demo=!1,this.run=new ts({level:t,easy:this.easy,up:this.save.up}),this.bot=this.auto?vl():null,this._buildLevel(this.run),this.mode="play",this.paused=!1,this.endAt=0,this.shake=0,this._clear(),this.sound.setMode("play"),this.armyEl=Q("span",{},""),this.coinEl=Q("span",{},"");let e=Q("button",{class:"ta-round","aria-label":It.t("paused"),onclick:()=>this.togglePause()},"\u23F8");this.bossBar=Q("div",{class:"ta-boss"},Q("span",{},"\u{1F479} ",It.t("boss")),Q("div",{class:"ta-hp"},this.bossFill=Q("b")),this.bossNum=Q("span",{},"")),this.mini=null,this.layer.append(Q("div",{class:"ta-top"},e,Q("div",{class:"ta-pill small"},this.goalEl=Q("span",{},It.t("g_gate"))),Q("div",{style:"display:flex;gap:calc(var(--u)*1.2)"},Q("div",{class:"ta-pill"},this.coinEl),Q("span",{style:"display:none"},this.armyEl))),this.bossBar),this.hintEl=Q("div",{class:"ta-hint",style:"top:calc(var(--u)*24)"}),this.layer.append(this.hintEl),this._soundPill(),this.hideBoss(),this.hint(It.t(`h${Math.min(6,t+1)}`),5e3);for(let n of this.labels.values())this.layer.append(n);this.capLab=Q("div",{class:"ta-lab me plain"}),this.layer.append(this.capLab)}hideBoss(){this.bossBar&&(this.bossBar.style.display="none")}togglePause(){this.mode==="play"&&(this.paused=!this.paused,this.paused?(this.pauseEl=Q("div",{class:"ta-dim"},Q("div",{class:"ta-card"},Q("div",{class:"ta-title"},It.t("paused")),Q("button",{class:"ta-btn",onclick:()=>this.togglePause()},"\u25B6 ",It.t("resume")),Q("button",{class:"ta-btn dark",onclick:()=>this.startLevel(this.levelIdx)},"\u{1F504} ",It.t("restart")),Q("button",{class:"ta-btn dark",onclick:()=>{this.demo=!1,this._startDemo(this.demoLevel),this.showMenu()}},"\u{1F3E0} ",It.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_results(){let t=this.run.result,e=this.levelIdx,n=this.save;t.won&&(n.stars[e]=Math.max(n.stars[e]||0,t.stars),n.unlocked=Math.max(n.unlocked,Math.min(He.length,e+2)),n.best[e]=Math.max(n.best[e]||0,t.survivors)),n.coins+=t.coins,this.post({type:"save",save:n}),this.sound.setMode(null),this.sound.play(t.won?"win":"over"),t.won&&this.sound.play("cheer"),this.mode="end";let s=Q("div",{class:"ta-stars"},[1,2,3].map(r=>Q("span",{class:r<=t.stars?"":"off"},"\u2B50")));this.layer.append(Q("div",{class:"ta-dim"},Q("div",{class:"ta-card"},Q("div",{class:"ta-logo",style:`color:${t.won?"#ffe04a":"#ff6a5a"}`},t.won?It.t("won"):It.t("over")),t.won?s:Q("div",{class:"ta-small"},It.t("tip")),t.won?Q("div",{class:"ta-small"},It.t("win")):null,Q("div",{class:"ta-row"},Q("span",{},It.t("survivors")),Q("span",{},"\u2694\uFE0F ",It.num(t.survivors))),Q("div",{class:"ta-row"},Q("span",{},It.t("gained")),Q("span",{},"\u{1FA99} ",It.num(t.coins))),Q("button",{class:"ta-btn alt",onclick:()=>this.startLevel(e)},"\u{1F504} ",It.t("restart")),t.won&&e+1<He.length?Q("button",{class:"ta-btn",onclick:()=>this.startLevel(e+1)},"\u25B6 ",It.t("next")):null,Q("button",{class:"ta-btn dark",onclick:()=>{this.demo=!1,this._startDemo(this.demoLevel),this.showMenu()}},"\u{1F3E0} ",It.t("home")))))}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e;let n=this.run;if(n){if(this.mode==="play"&&!this.paused){let s=n.step(e,this._input());this._events(s,this.sound),n.state!=="play"&&!this.endAt&&(this.endAt=this.clock+1.1),this.endAt&&this.clock>this.endAt&&this.mode==="play"&&this._results()}else if(this.mode!=="play"&&this.demo){let s=n.step(e,this.bot(n));this._events(s,uA),n.state!=="play"&&(this.demoEnd=this.demoEnd||this.clock+2.2,this.clock>this.demoEnd&&(this.demoEnd=0,this.demoLevel++,this._startDemo(this.demoLevel%He.length)))}this.paused||this._sync(e),this._hud()}this.renderer.render(this.scene,this.camera)}_hud(){let t=this.run;if(this.mode!=="play"||!this.armyEl)return;this.armyEl.textContent=It.num(t.n),this.coinEl.textContent=`\u{1FA99} ${It.num(this.save.coins+t.coins)}`;let e=t.lv.boss,n=t.bossState;e&&n.phase==="fight"?(this.bossBar.style.display="flex",this.bossFill.style.width=`${Math.max(0,e.hp/e.hpMax*100)}%`,this.bossNum.textContent=It.num(Math.ceil(e.hp)),this.goalEl.textContent=It.t("g_boss")):(!e||n.phase==="dead")&&this.hideBoss(),this.mini&&this.clock-(this.miniAt||0)>.12&&(this.miniAt=this.clock,this._drawMini())}_project(t,e,n){let s=new q(t,e,n).project(this.camera);return[(s.x*.5+.5)*this.cw,(-s.y*.5+.5)*this.ch,s.z<1]}_label(t,e,n,s,r,a){if(!a){t.style.display="none";return}let[o,l,c]=this._project(n,s,r);if(!c){t.style.display="none";return}t.style.display="block",t.style.transform=`translate(${o}px,${l}px) translate(-50%,-100%)`,t.textContent!==e&&(t.textContent=e)}_float(t,e,n,s,r){let[a,o,l]=this._project(t,e,n);if(!l)return;let c=Q("div",{class:"ta-float",style:`left:${a}px;top:${o}px;color:${r}`},s);this.layer.append(c),setTimeout(()=>c.remove(),1300)}_burst(t,e,n,s=1){let r=0;for(let a of this.pool){if(r>=n)break;if(a.userData.life>0)continue;r++;let o=Math.random()*6.28,l=2+Math.random()*3.5;a.userData={life:.8+Math.random()*.4,max:1.1,vx:Math.cos(o)*l,vy:3+Math.random()*3,vz:Math.sin(o)*l},a.position.set(t,s,e),a.scale.setScalar(.5+Math.random()*.4),a.visible=!0,a.material.opacity=1}}_partFx(t){for(let e of this.pool){let n=e.userData;if(n.life<=0){e.visible=!1;continue}n.life-=t,n.vy-=11*t,e.position.x+=n.vx*t,e.position.y=Math.max(.1,e.position.y+n.vy*t),e.position.z+=n.vz*t,e.material.opacity=Math.min(1,n.life*2.2),n.life<=0&&(e.visible=!1)}}_events(t,e){let n=this.run,s=n.cap;for(let r of t)switch(r.type){case"gate":e.play(r.good?"gateGood":"gateBad"),this._float(s.x,3.2,s.y,ml(r.op,r.v),r.good?"#7affb0":"#ff7a6a"),this._burst(s.x,s.y,r.good?14:5,1.5),r.good&&e.play("cheer");break;case"cage":e.play("cage"),e.play("cheer"),this._float(s.x,3,s.y,`+${r.count}`,"#7ad8ff");{let a=n.lv.cages[r.id];this._burst(a.x,a.y,16,1.2),this.anims.push({t:0,life:.6,id:r.id,kind:"cage"})}break;case"coin":e.play("coin");break;case"lever":e.play("lever");break;case"sawBreak":{e.play("sawBreak");let a=n.lv.saws[r.id];this._burst(a.x,a.y,22,1.5),this.shake=Math.max(this.shake,.35);break}case"sawHit":case"trapHit":e.play("hit"),this.shake=Math.max(this.shake,.5),this.hit=1,this._burst(s.x,s.y,8,1);break;case"hurt":this._float(s.x,3,s.y,`\u2212${r.amount}`,"#ff6a5a");break;case"trapWarn":Math.hypot(n.lv.traps[r.id].x-s.x,n.lv.traps[r.id].y-s.y)<16&&e.play("trapWarn");break;case"trapUp":Math.hypot(n.lv.traps[r.id].x-s.x,n.lv.traps[r.id].y-s.y)<16&&e.play("trapUp");break;case"fightStart":e.play("fight"),this.fightTick=0;break;case"fightEnd":r.won?(e.play("cheer"),this._float(s.x,3.2,s.y,`\u2694\uFE0F ${r.left}`,"#ffe04a")):this.hit=1;break;case"bossStart":e.play("roar"),this.shake=.5,e.setMode&&this.mode==="play"&&this.sound.setMode("boss");break;case"tele":e.play("tele"),this._teleStart(r);break;case"impact":e.play("slam"),this.shake=Math.max(this.shake,.7),this._burst(r.x,r.y,14,.5),this.ent.boss&&(this.ent.boss.impact=1),r.hit&&(this.hit=1),this._teleEnd();break;case"bossDown":e.play("crumble"),this.shake=.9,this.ent.boss&&(this.ent.boss.down=.001);{let a=n.lv.boss;this._burst(a.x,a.y,40,2)}this.mode==="play"&&this.sound.setMode("play");break;case"exitOpen":e.play("open");break;case"won":case"over":break;default:break}}_teleStart(t){this._teleEnd();let n=this.run.bossState.tele;if(!n)return;let s=new Bt,r=new xe({color:16722458,transparent:!0,opacity:.28,depthWrite:!1,side:Ie}),a,o;n.kind==="slam"?(o=new ie(new Ms(n.r*.93,n.r,40),new xe({color:16726570,transparent:!0,opacity:.9,depthWrite:!1,side:Ie})),a=new ie(new dn(n.r,40),r),s.position.set(n.x,.08,n.y)):(o=new ie(new Ms(n.r*.96,n.r,40,1,-n.half,n.half*2),new xe({color:16726570,transparent:!0,opacity:.9,depthWrite:!1,side:Ie})),a=new ie(new dn(n.r,40,-n.half,n.half*2),r),s.position.set(n.x,.08,n.y),s.rotation.y=-n.dir);for(let c of[o,a])c.rotation.x=-Math.PI/2,s.add(c);let l=new ie(a.geometry,new xe({color:16722458,transparent:!0,opacity:.5,depthWrite:!1,side:Ie}));l.rotation.x=-Math.PI/2,l.position.y=.01,s.add(l),this.teleGroup.add(s),this.tele={g:s,grow:l,kind:n.kind}}_teleEnd(){this.tele&&(this.teleGroup.remove(this.tele.g),this.tele=null)}_sync(t){let e=this.run,n=e.lv,s=this.ent,r=e.cap,a=this.clock;if(s){n.gates.forEach((o,l)=>{let c=s.gates[l],h=n.groups[o.group],u=h.taken>=0,d=h.taken===o.id;c.userData.panel.material.opacity=u?d?.55+Math.sin(a*8)*.1:.06:.3+Math.sin(a*3+l)*.06,c.userData.label.visible=!u||d}),n.traps.forEach((o,l)=>{let c=s.traps[l],h=o.state;c.userData.rim.material.emissive.setHex(h==="warn"?Math.sin(a*22)>0?16720384:6689024:h==="up"?16711680:0),c.userData.spikes.forEach((d,p)=>{let m=h==="up"?1.3:h==="warn"?.45+Math.sin(a*25+p)*.08:.08;d.scale.y+=(m-d.scale.y)*Math.min(1,t*24),d.position.y=.1+d.scale.y*.5})}),n.saws.forEach((o,l)=>{let c=s.saws[l];c&&(o.alive?c.userData.disc.rotation.z-=t*14:c.visible=!1)}),n.levers.forEach((o,l)=>{let c=s.levers[l].userData.arm,h=o.pulled?-.7:.7;c.rotation.z+=(h-c.rotation.z)*Math.min(1,t*10)}),n.coins.forEach((o,l)=>{let c=s.coins[l];c.visible=!o.got,c.rotation.y=a*3+l,c.position.y=Math.sin(a*3+l)*.15}),n.cages.forEach((o,l)=>{let c=s.cages[l];if(o.open){let h=this.anims.find(d=>d.kind==="cage"&&d.id===l),u=h?h.t/h.life:1;c.userData.bars.visible=!1,c.userData.pris.children.forEach((d,p)=>{d.position.y=Math.abs(Math.sin(u*9+p))*.8;let m=Math.max(0,1-u);d.scale.setScalar(m),d.position.x+=(r.x-o.x)*.04*Math.min(u,1)}),c.userData.pris.visible=u<1}});for(let o of this.anims)o.t+=t;this.anims=this.anims.filter(o=>o.t<o.life+.1),s.exit&&n.exit.open!==this.exitOpen&&(this.exitOpen=n.exit.open,s.exit.userData.set(this.exitOpen)),s.exit&&(s.exit.userData.door.material.opacity=(this.exitOpen?.55:.8)+Math.sin(a*4)*.08);for(let o of this.torches){let l=o.userData.fl;l.scale.y=.8+Math.sin(a*17+o.position.x)*.15+Math.random()*.1,o.userData.glow.material.opacity=.75+Math.sin(a*11+o.position.z)*.15}if(this._bossVisual(t),this._army(t),this._captainVisual(t),this.tele){let o=e.bossState.tele;if(o){let l=Math.min(1,o.t/o.dur);this.tele.grow.scale.set(l,l,1),this.tele.g.children[0].material.opacity=.65+Math.sin(a*20)*.25}else this._teleEnd()}if(this._partFx(t),this._camera(t),this.mode==="play")this.capLab&&this._label(this.capLab,`${It.num(e.n)}`,r.x,3.4+Math.min(1.5,Math.sqrt(e.n)*.05),r.y,!0),s.hordes.forEach((o,l)=>{let c=o.hd.alive&&Math.hypot(o.hd.x-r.x,o.hd.y-r.y)<40,h=e.fight&&e.fight.horde===l?Math.ceil(e.fight.b):o.hd.count;this._label(this.labels.get(`h${l}`),`${It.num(h)}`,e.fight&&e.fight.horde===l?this.foeCenter.x:o.hd.x,3.6,e.fight&&e.fight.horde===l?this.foeCenter.y:o.hd.y,c)});else for(let o of this.labels.values())o.style.display="none";this.hit=Math.max(0,this.hit-t*2.5),this.root.style.boxShadow=this.hit>.01?`inset 0 0 ${this.u*14}px rgba(255,40,30,${this.hit*.6})`:"none",this.lamp.position.set(r.x,4.5,r.y+1)}}_army(t){let e=this.run,n=e.cap,s=e.lv,r=this.clock;n.moving&&this.trail.push(n.x,n.y);let a=Math.max(0,e.n-1),o=Math.min(a,299),l=(A,g)=>e.free(A,g,.2),c=kr(o,this.trail,n,l);for(;this.fol.length<o;){let A=this.fol.length;this.fol.push({x:n.x+(Math.random()-.5)*.6,y:n.y+(Math.random()-.5)*.6,ph:A*1.7})}if(this.fol.length>o){let A=this.fol.length-o;for(let g=0;g<Math.min(A,5);g++){let f=this.fol[this.fol.length-1-g];this._burst(f.x,f.y,1,.8)}this.fol.length=o}let h=Math.min(1,t*(e.fight?5:9)),u=Math.atan2(n.fy,n.fx),d=null,p=e.fight;if(p){let A=s.hordes[p.horde];d=Math.atan2(A.y-n.y,A.x-n.x)}for(let A=0;A<o;A++){let g=this.fol[A],f=c[A];g.x+=(f.x-g.x)*h,g.y+=(f.y-g.y)*h,g.face=d!==null?d:u}this.me.update(this.fol,o,r,n.moving||!!p,u);let m=[];this.foeCenter=this.foeCenter||{x:0,y:0},this.ent.hordes.forEach((A,g)=>{let f=A.hd;if(f.alive){if(p&&p.horde===g){let E={x:A.axis.x,y:A.axis.y},M=Math.hypot(f.x-n.x,f.y-n.y)||1,_=(f.x-n.x)/M,S=(f.y-n.y)/M,I=Math.min(1,p.time*1.3),w=f.x+(n.x+_*3-f.x)*I,T=f.y+(n.y+S*3-f.y)*I;this.foeCenter={x:w,y:T};let C=new gi;for(let B=20;B>=0;B--)C.pts.push({x:w+_*B*.5,y:T+S*B*.5});let y=Math.min(Math.ceil(p.b),100);if(kr(y,C,{x:w,y:T},l).forEach((B,N)=>m.push({x:B.x,y:B.y,ph:N*1.3,face:Math.atan2(n.y-B.y,n.x-B.x)})),this.fightTick=(this.fightTick||0)+t,this.fightTick>.09){this.fightTick=0;let B=(this.lastFightN||p.a)-p.a;this.lastFightN=p.a,this._burst(w-_*1.2+(Math.random()-.5)*1.5,T-S*1.2+(Math.random()-.5)*1.5,2,1.2),Math.random()<.5&&this.sound.play("clash")}}else if(Math.hypot(f.x-n.x,f.y-n.y)<48)for(let E of A.pts)m.push({x:E.x,y:E.y,ph:E.ph,face:Math.atan2(n.y-E.y,n.x-E.x)})}}),this.foe.update(m,m.length,r,!!p,0),p||(this.lastFightN=0)}_captainVisual(t){let e=this.run,n=e.cap,s=this.captain,r=this.clock,a=s.userData,o=n.moving&&e.state==="play"&&!e.fight;s.position.set(n.x,0,n.y);let l=this.run.fight?Math.atan2(this.foeCenter.y-n.y,this.foeCenter.x-n.x):Math.atan2(n.fy,n.fx),h=Math.PI/2-l-(s.rotation.y||0);h=Math.atan2(Math.sin(h),Math.cos(h)),s.rotation.y+=h*Math.min(1,t*14);let u=r*13;a.legL.rotation.x=o?Math.sin(u)*.9:0,a.legR.rotation.x=o?-Math.sin(u)*.9:0,a.armL.rotation.x=o?-Math.sin(u)*.8:0,a.armR.rotation.x=e.fight?-1.6+Math.sin(r*16)*.8:o?Math.sin(u)*.8:e.state==="won"?-2.6:0,a.body.position.y=o?Math.abs(Math.sin(u))*.12:Math.sin(r*3)*.02,a.cape.rotation.x=.18+(o?.35:0)+Math.sin(r*6)*.05,e.state==="over"?s.rotation.z=Math.min(1.4,(s.rotation.z||0)+t*3):s.rotation.z=0}_bossVisual(t){let e=this.ent.boss;if(!e)return;let n=this.run,s=n.lv.boss,r=n.bossState,a=n.cap,o=this.clock,l=e.m,c=l.userData,h=Math.PI/2-Math.atan2(a.y-s.y,a.x-s.x);if(r.phase==="dead"){e.down+=t,c.kind==="brute"?(c.body.rotation.z=Math.min(1.5,e.down*2.2),l.position.y=-Math.max(0,e.down-.9)*1.4,e.down>2.4&&(l.visible=!1)):(e.vel||(e.vel=c.parts.map(A=>({vx:(Math.random()-.5)*6,vy:3+Math.random()*5,vz:(Math.random()-.5)*6,rx:(Math.random()-.5)*6,rz:(Math.random()-.5)*6}))),c.parts.forEach((A,g)=>{let f=e.vel[g];f.vy-=16*t,A.position.x+=f.vx*t,A.position.y=Math.max(.3,A.position.y+f.vy*t),A.position.z+=f.vz*t,A.rotation.x+=f.rx*t,A.rotation.z+=f.rz*t,e.down>1.6&&A.scale.multiplyScalar(Math.max(0,1-t*1.6))}),e.down>3.2&&(l.visible=!1));return}l.rotation.y=h,c.body.position.y=Math.sin(o*2.2)*.08;let u=r.tele;e.impact=Math.max(0,e.impact-t*2.2);let d=0;u&&(d=Math.min(1,u.t/u.dur));let p=u?-2.5*d:e.impact>0?.5*e.impact:Math.sin(o*2)*.1;c.armR.rotation.x+=(p-c.armR.rotation.x)*Math.min(1,t*(u?8:14)),c.kind==="golem"?c.armL.rotation.x=u&&u.kind==="sweep"?-1.6:Math.sin(o*1.7)*.08:c.armL.rotation.x=Math.sin(o*2+1)*.12,u&&u.kind==="sweep"?c.body.rotation.y=Math.sin(d*Math.PI)*.6*(d>.8?1.6:1):c.body.rotation.y*=.9;let m=1+(r.flash>0?.03:0);l.scale.setScalar(m)}_camera(t){let e=this.run,n=e.cap,s=e.lv.boss,r=e.bossState,a=n.x,o=n.y,l=1+Math.min(.85,Math.sqrt(Math.max(1,e.n))/26);s&&r.phase==="fight"&&(a=n.x+(s.x-n.x)*.45,o=n.y+(s.y-n.y)*.45,l+=.3),e.fight&&(l+=.1);let h=(this.portrait?33:22)*l,u=h*.62;this.cf=this.cf||{x:a,z:o,h};let d=Math.min(1,t*4);this.cf.x+=(a-this.cf.x)*d,this.cf.z+=(o-this.cf.z)*d,this.cf.h+=(h-this.cf.h)*Math.min(1,t*2),this.shake=Math.max(0,this.shake-t*1.8);let p=this.shake*.5;this.camera.position.set(this.cf.x+(Math.random()-.5)*p,this.cf.h,this.cf.z+this.cf.h*.62+(Math.random()-.5)*p),this.camera.lookAt(this.cf.x,0,this.cf.z-1.5)}_buildMini(t){let e=t.lv.W,n=t.lv.H,s=document.createElement("canvas");s.width=e*8,s.height=n*8;let r=s.getContext("2d");r.fillStyle="rgba(10,25,20,.78)",r.fillRect(0,0,s.width,s.height);for(let a=0;a<n;a++)for(let o=0;o<e;o++)t.def.map[a][o]!=="#"&&(r.fillStyle="rgba(190,200,160,.75)",r.fillRect(o*8,a*8,8,8));this.miniBase=s}_drawMini(){let t=this.run,e=this.mini;if(!e||!this.miniBase)return;let n=e.getContext("2d"),s=this.miniBase,r=Math.min(e.width/s.width,e.height/s.height);n.clearRect(0,0,e.width,e.height),n.drawImage(s,0,0,s.width*r,s.height*r);let a=r*8/_t,o=(c,h,u,d)=>{n.fillStyle=u,n.beginPath(),n.arc(c*a,h*a,d,0,6.3),n.fill()},l=t.lv;for(let c of l.gates)o(c.x,c.y,l.groups[c.group].taken>=0?"#888":Al(c.op,c.v)?"#3af08a":"#ff5a4a",3);for(let c of l.cages)c.open||o(c.x,c.y,"#7ad8ff",3.5);for(let c of l.levers)c.pulled||o(c.x,c.y,"#ffd23a",3.5);for(let c of l.saws)c.alive&&o(c.x,c.y,"#ffffff",3);for(let c of l.hordes)c.alive&&o(c.x,c.y,"#ff2a2a",4);l.boss&&t.bossState.phase!=="dead"&&o(l.boss.x,l.boss.y,"#ff2aff",6),o(l.exit.x,l.exit.y,l.exit.open?"#ffe04a":"#884422",5),o(t.cap.x,t.cap.y,"#ffffff",4.5),o(t.cap.x,t.cap.y,"#2a7ae8",2.8)}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},dA=`
.ta-dim.ta-light{background:rgba(5,30,20,.38)}
.ta-root .ta-card{max-height:96%}
@media (orientation:landscape){.ta-card{gap:calc(var(--u)*1.1);padding:calc(var(--u)*2.4) calc(var(--u)*5)}.ta-card .ta-btn{min-height:calc(var(--u)*9);font-size:calc(var(--u)*4.2);padding:calc(var(--u)*.8) calc(var(--u)*5)}.ta-stars{font-size:calc(var(--u)*8)}.ta-logo{font-size:calc(var(--u)*7)}.ta-title{font-size:calc(var(--u)*6)}.ta-row{font-size:calc(var(--u)*3.3)}}
.ta-menu{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);width:100%}
.ta-row{display:flex;justify-content:space-between;width:100%;font-weight:900;font-size:calc(var(--u)*3.8)}
.ta-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(var(--u)*1.6);width:100%}
@media (orientation:landscape){.ta-grid{grid-template-columns:repeat(3,1fr)}}
.ta-env{border:calc(var(--u)*.5) solid #fff;border-radius:calc(var(--u)*3);font-family:inherit;color:#fff;font-weight:900;padding:calc(var(--u)*1.2);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);font-size:calc(var(--u)*3);min-height:calc(var(--u)*22);cursor:pointer;justify-content:center}
.ta-env i{font-style:normal;font-size:calc(var(--u)*7)}.ta-env.lock{filter:grayscale(1) brightness(.6)}
.ta-pill.small{font-size:calc(var(--u)*3.2)}.ta-pill.army{background:linear-gradient(180deg,#2a7ae8,#12409a)}
.ta-coinpill{position:absolute;top:calc(var(--u)*2.5);right:calc(var(--u)*3);pointer-events:none}
.ta-boss{position:absolute;left:calc(var(--u)*6);right:calc(var(--u)*6);top:calc(var(--u)*15);display:none;align-items:center;gap:calc(var(--u)*1.5);direction:ltr;font-weight:900;font-size:calc(var(--u)*3.6);text-shadow:0 0 4px #000}
.ta-hp{flex:1;height:calc(var(--u)*3);background:rgba(0,0,0,.5);border:calc(var(--u)*.4) solid #fff;border-radius:99px;overflow:hidden}.ta-hp b{display:block;height:100%;background:linear-gradient(180deg,#ff6a5a,#c8302a)}
.ta-lab{position:absolute;left:0;top:0;pointer-events:none;font-weight:900;font-size:calc(var(--u)*4.2);padding:calc(var(--u)*.2) calc(var(--u)*2.2);border-radius:99px;border:calc(var(--u)*.4) solid #fff;color:#fff;white-space:nowrap;display:none;text-shadow:0 1px 2px #000}
.ta-lab.me{background:linear-gradient(180deg,#3a8af0,#12409a)}.ta-lab.me.plain{background:none;border:0;font-size:calc(var(--u)*6.4);-webkit-text-stroke:calc(var(--u)*.5) #0d2a55;paint-order:stroke fill;text-shadow:0 2px 3px rgba(0,0,0,.5)}.ta-lab.foe{background:linear-gradient(180deg,#e8483a,#8a1a12)}
.ta-float{position:absolute;pointer-events:none;font-weight:900;font-size:calc(var(--u)*6);text-shadow:0 0 6px #000,0 0 3px #000;animation:taup 1.2s ease-out forwards;transform:translate(-50%,-50%)}
@keyframes taup{to{transform:translate(-50%,-260%);opacity:0}}
.ta-stick{position:absolute;width:calc(var(--u)*18);height:calc(var(--u)*18);margin:calc(var(--u)*-9) 0 0 calc(var(--u)*-9);border-radius:50%;border:calc(var(--u)*.6) solid rgba(255,255,255,.7);background:rgba(255,255,255,.12);display:none;pointer-events:none}
.ta-stick i{position:absolute;left:50%;top:50%;width:calc(var(--u)*8);height:calc(var(--u)*8);margin:calc(var(--u)*-4) 0 0 calc(var(--u)*-4);border-radius:50%;background:rgba(255,255,255,.7)}
.ta-root canvas.ta-mini{inset:auto;position:absolute;left:calc(var(--u)*2.5);bottom:max(calc(var(--u)*2.5),env(safe-area-inset-bottom));width:calc(var(--u)*24);height:calc(var(--u)*24);border-radius:calc(var(--u)*2);border:calc(var(--u)*.4) solid rgba(255,255,255,.8);pointer-events:none;opacity:.92}
.ta-skins{display:grid;grid-template-columns:repeat(5,1fr);gap:calc(var(--u)*1.2);width:100%}
.ta-skin{font-family:inherit;border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*2.4);background:rgba(0,0,0,.25);color:#fff;font-weight:900;display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.4);padding:calc(var(--u)*1) calc(var(--u)*.4);font-size:calc(var(--u)*2.6);cursor:pointer}
.ta-skin i{width:calc(var(--u)*8);height:calc(var(--u)*8);border-radius:50%;border:calc(var(--u)*.4) solid #fff}.ta-skin.worn{border-color:#ffd23a;background:rgba(255,210,58,.25)}.ta-skin small{font-size:calc(var(--u)*2.4)}
.ta-ups{display:flex;flex-direction:column;gap:calc(var(--u)*1.2);width:100%}
.ta-up{font-family:inherit;display:flex;justify-content:space-between;align-items:center;gap:calc(var(--u)*1.5);border:calc(var(--u)*.4) solid #fff;border-radius:calc(var(--u)*2.4);background:rgba(0,0,0,.25);color:#fff;font-weight:900;padding:calc(var(--u)*1.4) calc(var(--u)*2.2);font-size:calc(var(--u)*3.2);cursor:pointer}
.ta-up.can{background:linear-gradient(180deg,#4ad87a,#1f9a4a)}.ta-up small{letter-spacing:2px;font-size:calc(var(--u)*2.6)}
`,Ml={start(i,t,e){let n=new Il(i,t||{},e);return Ml.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.TempleArmy=Ml;var y0=Ml;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
