(()=>{var dc="170";var lu=0,Gc=1,hu=2;var nh=1,fc=2,xn=3,On=0,we=1,Je=2,Fn=0,Pi=1,Wc=2,Xc=3,Yc=4,uu=5,$n=100,du=101,fu=102,pu=103,gu=104,mu=200,Au=201,xu=202,Cu=203,Oa=204,za=205,vu=206,yu=207,_u=208,Iu=209,Mu=210,Su=211,bu=212,Eu=213,wu=214,ka=0,Ha=1,Ga=2,Ni=3,Wa=4,Xa=5,Ya=6,Ka=7,ih=0,Tu=1,Vu=2,Bn=0,Ru=1,Pu=2,Lu=3,pc=4,Uu=5,Du=6,Nu=7;var sh=300,qi=301,Fi=302,Ja=303,ja=304,Kr=306,Bi=1e3,ei=1001,ps=1002,Ze=1003,qu=1004;var qs=1005;var on=1006,ra=1007;var ni=1008;var Mn=1009,rh=1010,ah=1011,gs=1012,gc=1013,ii=1014,vn=1015,Ls=1016,mc=1017,Ac=1018,Oi=1020,oh=35902,ch=1021,lh=1022,je=1023,hh=1024,uh=1025,Li=1026,zi=1027,dh=1028,xc=1029,fh=1030,Cc=1031;var vc=1033,fr=33776,pr=33777,gr=33778,mr=33779,Za=35840,Qa=35841,$a=35842,to=35843,eo=36196,no=37492,io=37496,so=37808,ro=37809,ao=37810,oo=37811,co=37812,lo=37813,ho=37814,uo=37815,fo=37816,po=37817,go=37818,mo=37819,Ao=37820,xo=37821,Ar=36492,Co=36494,vo=36495,ph=36283,yo=36284,_o=36285,Io=36286;var xr=2300,Mo=2301,aa=2302,Kc=2400,Jc=2401,jc=2402;var Fu=3200,Bu=3201;var gh=0,Ou=1,Nn="",xe="srgb",Yi="srgb-linear",Jr="linear",jt="srgb";var di=7680;var Zc=519,zu=512,ku=513,Hu=514,mh=515,Gu=516,Wu=517,Xu=518,Yu=519,So=35044;var Qc="300 es",yn=2e3,Cr=2001,zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oa=Math.PI/180,bo=180/Math.PI;function _n(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Ku(i,t){return(i%t+t)%t}function ca(i,t,e){return(1-e)*i+e*t}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],A=s[0],g=s[3],p=s[6],_=s[1],v=s[4],x=s[7],L=s[2],b=s[5],E=s[8];return r[0]=a*A+o*_+c*L,r[3]=a*g+o*v+c*b,r[6]=a*p+o*x+c*E,r[1]=l*A+h*_+u*L,r[4]=l*g+h*v+u*b,r[7]=l*p+h*x+u*E,r[2]=f*A+d*_+m*L,r[5]=f*g+d*v+m*b,r[8]=f*p+d*x+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=f*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=d*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},la=new Pt;function Ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=ms("canvas");return i.style.display="block",i}var $c={};function cs(i){i in $c||($c[i]=!0,console.warn(i))}function ju(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Gt={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?Jr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var tl=[.64,.33,.3,.6,.15,.06],el=[.2126,.7152,.0722],nl=[.3127,.329],il=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[Yi]:{primaries:tl,whitePoint:nl,transfer:Jr,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:tl,whitePoint:nl,transfer:jt,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});var fi,Eo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=ms("canvas")),fi.width=t.width,fi.height=t.height;let n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ms("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$u=0,vr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=_n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ha(s[a].image)):r.push(ha(s[a]))}else r=ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ha(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var td=0,Ue=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=on,a=ni,o=je,c=Mn,l=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=_n(),this.name="",this.source=new vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case ps:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case ps:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=sh;Ue.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],A=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,x=(d+1)/2,L=(p+1)/2,b=(h+f)/4,E=(u+A)/4,V=(m+g)/4;return v>x&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=E/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=V/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=V/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-A)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wo=class extends zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new vr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends wo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yr=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=A;return}if(u!==A||c!==f||l!==d||h!==m){let g=1-o,p=c*f+l*d+h*m+u*A,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let L=Math.sqrt(v),b=Math.atan2(L,p*_);g=Math.sin(g*b)/L,o=Math.sin(o*b)/L}let x=o*_;if(c=c*g+f*x,l=l*g+d*x,h=h*g+m*x,u=u*g+A*x,g===1-o){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-o*d,t[e+2]=l*m+h*d+o*f-c*u,t[e+3]=h*m-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new w,rl=new kn,si=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Bs.subVectors(this.max,es),pi.subVectors(t.a,es),gi.subVectors(t.b,es),mi.subVectors(t.c,es),Vn.subVectors(gi,pi),Rn.subVectors(mi,gi),Xn.subVectors(pi,mi);let e=[0,-Vn.z,Vn.y,0,-Rn.z,Rn.y,0,-Xn.z,Xn.y,Vn.z,0,-Vn.x,Rn.z,0,-Rn.x,Xn.z,0,-Xn.x,-Vn.y,Vn.x,0,-Rn.y,Rn.x,0,-Xn.y,Xn.x,0];return!da(e,pi,gi,mi,Bs)||(e=[1,0,0,0,1,0,0,0,1],!da(e,pi,gi,mi,Bs))?!1:(Os.crossVectors(Vn,Rn),e=[Os.x,Os.y,Os.z],da(e,pi,gi,mi,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fn=[new w,new w,new w,new w,new w,new w,new w,new w],Xe=new w,Fs=new si,pi=new w,gi=new w,mi=new w,Vn=new w,Rn=new w,Xn=new w,es=new w,Bs=new w,Os=new w,Yn=new w;function da(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);let o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),c=t.dot(Yn),l=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ed=new si,ns=new w,fa=new w,ki=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(fa)),this.expandByPoint(ns.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pn=new w,pa=new w,zs=new w,Pn=new w,ga=new w,ks=new w,ma=new w,_r=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pa.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(pa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=Pn.dot(this.direction),c=-Pn.dot(zs),l=Pn.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pa).addScaledVector(zs,f),d}intersectSphere(t,e){pn.subVectors(t.center,this.origin);let n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){ga.subVectors(e,t),ks.subVectors(n,t),ma.crossVectors(ga,ks);let a=this.direction.dot(ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);let c=o*this.direction.dot(ks.crossVectors(Pn,ks));if(c<0)return null;let l=o*this.direction.dot(ga.cross(Pn));if(l<0||c+l>a)return null;let h=-o*Pn.dot(ma);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,f,d,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,d,m,A,g)}set(t,e,n,s,r,a,o,c,l,h,u,f,d,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-A*l,e[9]=-o*c,e[2]=A-f*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,m=l*h,A=l*u;e[0]=f+A*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=A+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,m=l*h,A=l*u;e[0]=f-A*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,A=o*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+A,e[1]=c*u,e[5]=A*l+f,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=A-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=a*c,d=a*l,m=o*c,A=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+A,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nd,t,id)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Ln.crossVectors(n,Ne),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Ln.crossVectors(n,Ne)),Ln.normalize(),Hs.crossVectors(Ne,Ln),s[0]=Ln.x,s[4]=Hs.x,s[8]=Ne.x,s[1]=Ln.y,s[5]=Hs.y,s[9]=Ne.y,s[2]=Ln.z,s[6]=Hs.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],A=n[6],g=n[10],p=n[14],_=n[3],v=n[7],x=n[11],L=n[15],b=s[0],E=s[4],V=s[8],M=s[12],y=s[1],T=s[5],O=s[9],B=s[13],H=s[2],J=s[6],G=s[10],$=s[14],k=s[3],st=s[7],ut=s[11],yt=s[15];return r[0]=a*b+o*y+c*H+l*k,r[4]=a*E+o*T+c*J+l*st,r[8]=a*V+o*O+c*G+l*ut,r[12]=a*M+o*B+c*$+l*yt,r[1]=h*b+u*y+f*H+d*k,r[5]=h*E+u*T+f*J+d*st,r[9]=h*V+u*O+f*G+d*ut,r[13]=h*M+u*B+f*$+d*yt,r[2]=m*b+A*y+g*H+p*k,r[6]=m*E+A*T+g*J+p*st,r[10]=m*V+A*O+g*G+p*ut,r[14]=m*M+A*B+g*$+p*yt,r[3]=_*b+v*y+x*H+L*k,r[7]=_*E+v*T+x*J+L*st,r[11]=_*V+v*O+x*G+L*ut,r[15]=_*M+v*B+x*$+L*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+A*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+g*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],A=t[13],g=t[14],p=t[15],_=u*g*l-A*f*l+A*c*d-o*g*d-u*c*p+o*f*p,v=m*f*l-h*g*l-m*c*d+a*g*d+h*c*p-a*f*p,x=h*A*l-m*u*l+m*o*d-a*A*d-h*o*p+a*u*p,L=m*u*c-h*A*c-m*o*f+a*A*f+h*o*g-a*u*g,b=e*_+n*v+s*x+r*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=_*E,t[1]=(A*f*r-u*g*r-A*s*d+n*g*d+u*s*p-n*f*p)*E,t[2]=(o*g*r-A*c*r+A*s*l-n*g*l-o*s*p+n*c*p)*E,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*E,t[4]=v*E,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*E,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*E,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*E,t[8]=x*E,t[9]=(m*u*r-h*A*r-m*n*d+e*A*d+h*n*p-e*u*p)*E,t[10]=(a*A*r-m*o*r+m*n*l-e*A*l-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*E,t[12]=L*E,t[13]=(h*A*s-m*u*s+m*n*f-e*A*f-h*n*g+e*u*g)*E,t[14]=(m*o*s-a*A*s-m*n*c+e*A*c+a*n*g-e*o*g)*E,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,A=a*h,g=a*u,p=o*u,_=c*l,v=c*h,x=c*u,L=n.x,b=n.y,E=n.z;return s[0]=(1-(A+p))*L,s[1]=(d+x)*L,s[2]=(m-v)*L,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(f+p))*b,s[6]=(g+_)*b,s[7]=0,s[8]=(m+v)*E,s[9]=(g-_)*E,s[10]=(1-(f+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),a=Ai.set(s[4],s[5],s[6]).length(),o=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let l=1/r,h=1/a,u=1/o;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,m;if(o===yn)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Cr)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*l,d=(n+s)*h,m,A;if(o===yn)m=(a+r)*u,A=-2*u;else if(o===Cr)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=A,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ai=new w,Ye=new oe,nd=new w(0,0,0),id=new w(1,1,1),Ln=new w,Hs=new w,Ne=new w,al=new oe,ol=new kn,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sd=0,cl=new w,xi=new kn,gn=new oe,Gs=new w,is=new w,rd=new w,ad=new kn,ll=new w(1,0,0),hl=new w(0,1,0),ul=new w(0,0,1),dl={type:"added"},od={type:"removed"},Ci={type:"childadded",child:null},Aa={type:"childremoved",child:null},_e=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new w,e=new cn,n=new kn,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Pt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(ll,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ll,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(is,Gs,this.up):gn.lookAt(Gs,is,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(gn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(od),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};_e.DEFAULT_UP=new w(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new w,mn=new w,xa=new w,An=new w,vi=new w,yi=new w,fl=new w,Ca=new w,va=new w,ya=new w,_a=new ue,Ia=new ue,Ma=new ue,qn=class i{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),mn.subVectors(n,e),xa.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(mn),c=Ke.dot(xa),l=mn.dot(mn),h=mn.dot(xa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(a,An.y),c.addScaledVector(o,An.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return _a.setScalar(0),Ia.setScalar(0),Ma.setScalar(0),_a.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_a,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Ma,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),mn.subVectors(t,e),Ke.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ke.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;vi.subVectors(s,n),yi.subVectors(r,n),Ca.subVectors(t,n);let c=vi.dot(Ca),l=yi.dot(Ca);if(c<=0&&l<=0)return e.copy(n);va.subVectors(t,s);let h=vi.dot(va),u=yi.dot(va);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(vi,a);ya.subVectors(t,r);let d=vi.dot(ya),m=yi.dot(ya);if(m>=0&&d<=m)return e.copy(r);let A=d*l-c*m;if(A<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(yi,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return fl.subVectors(r,s),o=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(fl,o);let p=1/(g+A+f);return a=A*p,o=f*p,e.copy(n).addScaledVector(vi,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=Ku(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Sa(a,r,t+1/3),this.g=Sa(a,r,t),this.b=Sa(a,r,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Gt.fromWorkingColorSpace(be.copy(this),t),Math.round(ye(be.r*255,0,255))*65536+Math.round(ye(be.g*255,0,255))*256+Math.round(ye(be.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=xe){Gt.fromWorkingColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(Ws);let n=ca(Un.h,Ws.h,e),s=ca(Un.s,Ws.s,e),r=ca(Un.l,Ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new Dt;Dt.NAMES=xh;var cd=0,Sn=class extends zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=_n(),this.name="",this.blending=Pi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=za,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pe=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new w,Xs=new nt,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=So,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==So&&(t.usage=this.usage),t}};var Mr=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sr=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},ld=0,ze=new oe,ba=new _e,_i=new w,qe=new si,ss=new si,Ae=new w,Ce=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?Sr:Mr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(qe.min,ss.min),qe.expandByPoint(Ae),Ae.addVectors(qe.max,ss.max),qe.expandByPoint(Ae)):(qe.expandByPoint(ss.min),qe.expandByPoint(ss.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(t,l),Ae.add(_i)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let V=0;V<n.count;V++)o[V]=new w,c[V]=new w;let l=new w,h=new w,u=new w,f=new nt,d=new nt,m=new nt,A=new w,g=new w;function p(V,M,y){l.fromBufferAttribute(n,V),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,V),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(T),o[V].add(A),o[M].add(A),o[y].add(A),c[V].add(g),c[M].add(g),c[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let V=0,M=_.length;V<M;++V){let y=_[V],T=y.start,O=y.count;for(let B=T,H=T+O;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let v=new w,x=new w,L=new w,b=new w;function E(V){L.fromBufferAttribute(s,V),b.copy(L);let M=o[V];v.copy(M),v.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(b,M);let T=x.dot(c[V])<0?-1:1;a.setXYZW(V,v.x,v.y,v.z,T)}for(let V=0,M=_.length;V<M;++V){let y=_[V],T=y.start,O=y.count;for(let B=T,H=T+O;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new w,r=new w,a=new w,o=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let A=0,g=c.length;A<g;A++){o.isInterleavedBufferAttribute?d=c[A]*o.data.stride+o.offset:d=c[A]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Re(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pl=new oe,Kn=new _r,Ys=new ki,gl=new w,Ks=new w,Js=new w,js=new w,Ea=new w,Zs=new w,ml=new w,Qs=new w,Et=class extends _e{constructor(t=new Ce,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ea.fromBufferAttribute(u,t),a?Zs.addScaledVector(Ea,h):Zs.addScaledVector(Ea.sub(e),h))}e.add(Zs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Ys.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ys,gl)===null||Kn.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(pl.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,L=v;x<L;x+=3){let b=o.getX(x),E=o.getX(x+1),V=o.getX(x+2);s=$s(this,p,t,n,l,h,u,b,E,V),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),A=Math.min(o.count,d.start+d.count);for(let g=m,p=A;g<p;g+=3){let _=o.getX(g),v=o.getX(g+1),x=o.getX(g+2);s=$s(this,a,t,n,l,h,u,_,v,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,L=v;x<L;x+=3){let b=x,E=x+1,V=x+2;s=$s(this,p,t,n,l,h,u,b,E,V),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),A=Math.min(c.count,d.start+d.count);for(let g=m,p=A;g<p;g+=3){let _=g,v=g+1,x=g+2;s=$s(this,a,t,n,l,h,u,_,v,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function hd(i,t,e,n,s,r,a,o){let c;if(t.side===we?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===On,o),c===null)return null;Qs.copy(o),Qs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:i}}function $s(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ks),i.getVertexPosition(c,Js),i.getVertexPosition(l,js);let h=hd(i,t,e,n,Ks,Js,js,ml);if(h){let u=new w;qn.getBarycoord(ml,Ks,Js,js,u),s&&(h.uv=qn.getInterpolatedAttribute(s,o,c,l,u,new nt)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,c,l,u,new nt)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new w,materialIndex:0};qn.getNormal(Ks,Js,js,f.normal),h.face=f,h.barycoord=u}return h}var Hn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function m(A,g,p,_,v,x,L,b,E,V,M){let y=x/E,T=L/V,O=x/2,B=L/2,H=b/2,J=E+1,G=V+1,$=0,k=0,st=new w;for(let ut=0;ut<G;ut++){let yt=ut*T-B;for(let qt=0;qt<J;qt++){let $t=qt*y-O;st[A]=$t*_,st[g]=yt*v,st[p]=H,l.push(st.x,st.y,st.z),st[A]=0,st[g]=0,st[p]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(qt/E),u.push(1-ut/V),$+=1}}for(let ut=0;ut<V;ut++)for(let yt=0;yt<E;yt++){let qt=f+yt+J*ut,$t=f+yt+J*(ut+1),X=f+(yt+1)+J*(ut+1),tt=f+(yt+1)+J*ut;c.push(qt,$t,tt),c.push($t,X,tt),k+=6}o.addGroup(d,k,M),d+=k,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Hi(i[e]);for(let s in n)t[s]=n[s]}return t}function ud(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ch(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var dd={clone:Hi,merge:Ve},fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Sn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},br=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=new w,Al=new nt,xl=new nt,Ee=class extends br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Al,xl),e.subVectors(xl,Al)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(oa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ii=-90,Mi=1,Vo=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(Ii,Mi,t,e);s.layers=this.layers,this.add(s);let r=new Ee(Ii,Mi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(Ii,Mi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(Ii,Mi,t,e);o.layers=this.layers,this.add(o);let c=new Ee(Ii,Mi,t,e);c.layers=this.layers,this.add(c);let l=new Ee(Ii,Mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Er=class extends Ue{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ro=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hn(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Fn});r.uniforms.tEquirect.value=e;let a=new Et(s,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=on),new Vo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},wa=new w,gd=new w,md=new Pt,Cn=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wa.subVectors(n,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||md.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jn=new ki,tr=new w,As=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],A=s[10],g=s[11],p=s[12],_=s[13],v=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,g-d,x-p).normalize(),n[1].setComponents(c+r,f+l,g+d,x+p).normalize(),n[2].setComponents(c+a,f+h,g+m,x+_).normalize(),n[3].setComponents(c-a,f-h,g-m,x-_).normalize(),n[4].setComponents(c-o,f-u,g-A,x-v).normalize(),e===yn)n[5].setComponents(c+o,f+u,g+A,x+v).normalize();else if(e===Cr)n[5].setComponents(o,u,A,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ad(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],A=u[d];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let A=u[d];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $e=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let _=p*f-a;for(let v=0;v<l;v++){let x=v*u-r;m.push(x,-_,0),A.push(0,0,1),g.push(v/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let v=_+l*p,x=_+l*(p+1),L=_+1+l*(p+1),b=_+1+l*p;d.push(v,x,b),d.push(x,L,b)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(A,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hd=`vec3 transformedNormal = objectNormal;
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
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
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
#endif`,Af=`struct PhysicalMaterial {
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
}`,xf=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wf=`#if defined( USE_POINTS_UV )
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
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
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
#endif`,kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,bp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Np=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,Bp=`#define NORMAL
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
}`,Op=`#define PHONG
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
}`,zp=`#define PHONG
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
}`,kp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Wp=`#define TOON
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
}`,Xp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Jp=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:xd,alphahash_pars_fragment:Cd,alphamap_fragment:vd,alphamap_pars_fragment:yd,alphatest_fragment:_d,alphatest_pars_fragment:Id,aomap_fragment:Md,aomap_pars_fragment:Sd,batching_pars_vertex:bd,batching_vertex:Ed,begin_vertex:wd,beginnormal_vertex:Td,bsdfs:Vd,iridescence_fragment:Rd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Nd,color_fragment:qd,color_pars_fragment:Fd,color_pars_vertex:Bd,color_vertex:Od,common:zd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:Yd,colorspace_fragment:Kd,colorspace_pars_fragment:Jd,envmap_fragment:jd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:Qd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:uf,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:cf,lights_lambert_pars_fragment:lf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:ff,lights_phong_fragment:pf,lights_phong_pars_fragment:gf,lights_physical_fragment:mf,lights_physical_pars_fragment:Af,lights_fragment_begin:xf,lights_fragment_maps:Cf,lights_fragment_end:vf,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Mf,map_fragment:Sf,map_pars_fragment:bf,map_particle_fragment:Ef,map_particle_pars_fragment:wf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Vf,morphinstance_vertex:Rf,morphcolor_vertex:Pf,morphnormal_vertex:Lf,morphtarget_pars_vertex:Uf,morphtarget_vertex:Df,normal_fragment_begin:Nf,normal_fragment_maps:qf,normal_pars_fragment:Ff,normal_pars_vertex:Bf,normal_vertex:Of,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:kf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:Yf,premultiplied_alpha_fragment:Kf,project_vertex:Jf,dithering_fragment:jf,dithering_pars_fragment:Zf,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:ep,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:ap,skinnormal_vertex:op,specularmap_fragment:cp,specularmap_pars_fragment:lp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:gp,uv_vertex:mp,worldpos_vertex:Ap,background_vert:xp,background_frag:Cp,backgroundCube_vert:vp,backgroundCube_frag:yp,cube_vert:_p,cube_frag:Ip,depth_vert:Mp,depth_frag:Sp,distanceRGBA_vert:bp,distanceRGBA_frag:Ep,equirect_vert:wp,equirect_frag:Tp,linedashed_vert:Vp,linedashed_frag:Rp,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Up,meshlambert_frag:Dp,meshmatcap_vert:Np,meshmatcap_frag:qp,meshnormal_vert:Fp,meshnormal_frag:Bp,meshphong_vert:Op,meshphong_frag:zp,meshphysical_vert:kp,meshphysical_frag:Hp,meshtoon_vert:Gp,meshtoon_frag:Wp,points_vert:Xp,points_frag:Yp,shadow_vert:Kp,shadow_frag:Jp,sprite_vert:jp,sprite_frag:Zp},et={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},rn={basic:{uniforms:Ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ve([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ve([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ve([et.points,et.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ve([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ve([et.common,et.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ve([et.sprite,et.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ve([et.common,et.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ve([et.lights,et.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};rn.physical={uniforms:Ve([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var er={r:0,b:0,g:0},jn=new cn,Qp=new oe;function $p(i,t,e,n,s,r,a){let o=new Dt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function A(_){let v=!1,x=m(_);x===null?p(o,c):x&&x.isColor&&(p(x,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){let x=m(v);x&&(x.isCubeTexture||x.mapping===Kr)?(h===void 0&&(h=new Et(new Hn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Hi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(v.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(jn)),h.material.toneMapped=Gt.getTransfer(x.colorSpace)!==jt,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Et(new $e(2,2),new ln({name:"BackgroundMaterial",uniforms:Hi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(x.colorSpace)!==jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(er,Ch(i)),n.buffers.color.setClear(er.r,er.g,er.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:A,addToRenderList:g}}function tg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,T,O,B,H){let J=!1,G=u(B,O,T);r!==G&&(r=G,l(r.object)),J=d(y,B,O,H),J&&m(y,B,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(y,T,O,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,T,O){let B=O.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let J=H[T.id];J===void 0&&(J={},H[T.id]=J);let G=J[B];return G===void 0&&(G=f(c()),J[B]=G),G}function f(y){let T=[],O=[],B=[];for(let H=0;H<e;H++)T[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,T,O,B){let H=r.attributes,J=T.attributes,G=0,$=O.getAttributes();for(let k in $)if($[k].location>=0){let ut=H[k],yt=J[k];if(yt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(y,T,O,B){let H={},J=T.attributes,G=0,$=O.getAttributes();for(let k in $)if($[k].location>=0){let ut=J[k];ut===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));let yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),H[k]=yt,G++}r.attributes=H,r.attributesNum=G,r.index=B}function A(){let y=r.newAttributes;for(let T=0,O=y.length;T<O;T++)y[T]=0}function g(y){p(y,0)}function p(y,T){let O=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;O[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),H[y]!==T&&(i.vertexAttribDivisor(y,T),H[y]=T)}function _(){let y=r.newAttributes,T=r.enabledAttributes;for(let O=0,B=T.length;O<B;O++)T[O]!==y[O]&&(i.disableVertexAttribArray(O),T[O]=0)}function v(y,T,O,B,H,J,G){G===!0?i.vertexAttribIPointer(y,T,O,H,J):i.vertexAttribPointer(y,T,O,B,H,J)}function x(y,T,O,B){A();let H=B.attributes,J=O.getAttributes(),G=T.defaultAttributeValues;for(let $ in J){let k=J[$];if(k.location>=0){let st=H[$];if(st===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let ut=st.normalized,yt=st.itemSize,qt=t.get(st);if(qt===void 0)continue;let $t=qt.buffer,X=qt.type,tt=qt.bytesPerElement,xt=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===gc;if(st.isInterleavedBufferAttribute){let rt=st.data,St=rt.stride,Tt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)p(k.location+Ft,rt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)g(k.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Ft=0;Ft<k.locationSize;Ft++)v(k.location+Ft,yt/k.locationSize,X,ut,St*tt,(Tt+yt/k.locationSize*Ft)*tt,xt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt,st.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<k.locationSize;rt++)g(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let rt=0;rt<k.locationSize;rt++)v(k.location+rt,yt/k.locationSize,X,ut,yt*tt,yt/k.locationSize*rt*tt,xt)}}else if(G!==void 0){let ut=G[$];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(k.location,ut);break;case 3:i.vertexAttrib3fv(k.location,ut);break;case 4:i.vertexAttrib4fv(k.location,ut);break;default:i.vertexAttrib1fv(k.location,ut)}}}}_()}function L(){V();for(let y in n){let T=n[y];for(let O in T){let B=T[O];for(let H in B)h(B[H].object),delete B[H];delete T[O]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let O in T){let B=T[O];for(let H in B)h(B[H].object),delete B[H];delete T[O]}delete n[y.id]}function E(y){for(let T in n){let O=n[T];if(O[y.id]===void 0)continue;let B=O[y.id];for(let H in B)h(B[H].object),delete B[H];delete O[y.id]}}function V(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:_}}function eg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==je&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let V=E===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==vn&&!V)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:L,maxSamples:b}}function ig(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Cn,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,v=_*4,x=p.clippingState||null;c.value=x,x=h(m,f,v,d);for(let L=0;L!==v;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=c.value,m!==!0||g===null){let p=d+A*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,x=d;v!==A;++v,x+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function sg(i){let t=new WeakMap;function e(a,o){return o===Ja?a.mapping=qi:o===ja&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ja||o===ja)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ro(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var wr=class extends br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vi=4,Cl=[.125,.215,.35,.446,.526,.582],ti=20,Ta=new wr,vl=new Dt,Va=null,Ra=0,Pa=0,La=!1,Qn=(1+Math.sqrt(5))/2,Si=1/Qn,yl=[new w(-Qn,Si,0),new w(Qn,Si,0),new w(-Si,0,Qn),new w(Si,0,Qn),new w(0,Qn,-Si),new w(0,Qn,Si),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Va=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Ra,Pa),this._renderer.xr.enabled=La,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ls,format:je,colorSpace:Yi,depthBuffer:!1},s=_l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(r)),this._blurMaterial=ag(r,t,e)}return s}_compileMaterial(t){let e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,s){let o=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vl),h.toneMapping=Bn,h.autoClear=!1;let d=new Pe({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),m=new Et(new Hn,d),A=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,A=!0):(d.color.copy(vl),A=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let v=this._cubeSize;nr(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qi||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yl[(s-r-1)%yl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Et(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ti-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):ti;g>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ti}`);let p=[],_=0;for(let E=0;E<ti;++E){let V=E/A,M=Math.exp(-V*V/2);p.push(M),E===0?_+=M:E<g&&(_+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;let x=this._sizeLods[s],L=3*x*(s>v-Vi?s-v+Vi:0),b=4*(this._cubeSize-x);nr(e,L,b,3*x,2*x),c.setRenderTarget(e),c.render(u,Ta)}};function rg(i){let t=[],e=[],n=[],s=i,r=i-Vi+1+Cl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Vi?c=Cl[a-i+Vi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,A=3,g=2,p=1,_=new Float32Array(A*m*d),v=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let b=0;b<d;b++){let E=b%3*2/3-1,V=b>2?0:-1,M=[E,V,0,E+2/3,V,0,E+2/3,V+1,0,E,V,0,E+2/3,V+1,0,E,V+1,0];_.set(M,A*m*b),v.set(f,g*m*b);let y=[b,b,b,b,b,b];x.set(y,p*m*b)}let L=new Ce;L.setAttribute("position",new Re(_,A)),L.setAttribute("uv",new Re(v,g)),L.setAttribute("faceIndex",new Re(x,p)),t.push(L),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _l(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ag(i,t,e){let n=new Float32Array(ti),s=new w(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Il(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ml(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ja||c===ja,h=c===qi||c===Fi;if(l||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Tr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Tr(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let A=d[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,m=u.attributes.position,A=0;if(d!==null){let _=d.array;A=d.version;for(let v=0,x=_.length;v<x;v+=3){let L=_[v+0],b=_[v+1],E=_[v+2];f.push(L,b,b,E,E,L)}}else if(m!==void 0){let _=m.array;A=m.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let L=v+0,b=v+1,E=v+2;f.push(L,b,b,E,E,L)}}else return;let g=new(Ah(f)?Sr:Mr)(f,1);g.version=A;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function hg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,A,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_]*A[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ug(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dg(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),A===!0&&(v=3);let x=o.attributes.position.count*v,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*L*4*u),E=new yr(b,x,L,u);E.type=vn,E.needsUpdate=!0;let V=v*4;for(let y=0;y<u;y++){let T=g[y],O=p[y],B=_[y],H=x*L*4*y;for(let J=0;J<T.count;J++){let G=J*V;d===!0&&(s.fromBufferAttribute(T,J),b[H+G+0]=s.x,b[H+G+1]=s.y,b[H+G+2]=s.z,b[H+G+3]=0),m===!0&&(s.fromBufferAttribute(O,J),b[H+G+4]=s.x,b[H+G+5]=s.y,b[H+G+6]=s.z,b[H+G+7]=0),A===!0&&(s.fromBufferAttribute(B,J),b[H+G+8]=s.x,b[H+G+9]=s.y,b[H+G+10]=s.z,b[H+G+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new nt(x,L)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let A=0;A<l.length;A++)d+=l[A];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Vr=class extends Ue{constructor(t,e,n,s,r,a,o,c,l,h=Li){if(h!==Li&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=ii),n===void 0&&h===zi&&(n=Oi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yh=new Ue,Sl=new Vr(1,1),_h=new yr,Ih=new To,Mh=new Er,bl=[],El=[],wl=new Float32Array(16),Tl=new Float32Array(9),Vl=new Float32Array(4);function Ki(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bl[s];if(r===void 0&&(r=new Float32Array(s),bl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jr(i,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),me(e,n)}}function Cg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;Tl.set(n),i.uniformMatrix3fv(this.addr,!1,Tl),me(e,n)}}function vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(ge(e,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),me(e,n)}}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sl.compareFunction=mh,r=Sl):r=yh,e.setTexture2D(t||r,s)}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mh,s)}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_h,s)}function Lg(i){switch(i){case 5126:return pg;case 35664:return gg;case 35665:return mg;case 35666:return Ag;case 35674:return xg;case 35675:return Cg;case 35676:return vg;case 5124:case 35670:return yg;case 35667:case 35671:return _g;case 35668:case 35672:return Ig;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return bg;case 36295:return Eg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Ug(i,t){i.uniform1fv(this.addr,t)}function Dg(i,t){let e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){let e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function qg(i,t){let e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Fg(i,t){let e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bg(i,t){let e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Og(i,t){let e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zg(i,t){i.uniform1iv(this.addr,t)}function kg(i,t){i.uniform2iv(this.addr,t)}function Hg(i,t){i.uniform3iv(this.addr,t)}function Gg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function Yg(i,t){i.uniform3uiv(this.addr,t)}function Kg(i,t){i.uniform4uiv(this.addr,t)}function Jg(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||yh,r[a])}function jg(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ih,r[a])}function Zg(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Mh,r[a])}function Qg(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_h,r[a])}function $g(i){switch(i){case 5126:return Ug;case 35664:return Dg;case 35665:return Ng;case 35666:return qg;case 35674:return Fg;case 35675:return Bg;case 35676:return Og;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return Xg;case 36295:return Yg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Qg}}var Po=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lg(e.type)}},Lo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}},Uo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ua=/(\w+)(\])?(\[|\.)?/g;function Rl(i,t){i.seq.push(t),i.map[t.id]=t}function tm(i,t,e){let n=i.name,s=n.length;for(Ua.lastIndex=0;;){let r=Ua.exec(n),a=Ua.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Rl(e,l===void 0?new Po(o,i,t):new Lo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Uo(o),Rl(e,u)),e=u}}}var Di=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);tm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Pl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var em=37297,nm=0;function im(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ll=new Pt;function sm(i){Gt._getMatrix(Ll,Gt.workingColorSpace,i);let t=`mat3( ${Ll.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Jr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ul(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+im(i.getShaderSource(t),a)}else return s}function rm(i,t){let e=sm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function am(i,t){let e;switch(t){case Ru:e="Linear";break;case Pu:e="Reinhard";break;case Lu:e="Cineon";break;case pc:e="ACESFilmic";break;case Du:e="AgX";break;case Nu:e="Neutral";break;case Uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ir=new w;function om(){Gt.getLuminanceCoefficients(ir);let i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function lm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ls(i){return i!==""}function Dl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(um,fm)}var dm=new Map;function fm(i,t){let e=Ut[t];if(e===void 0){let n=dm.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}var pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(pm,gm)}function gm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function mm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Am(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Fi:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Cm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case Tu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function vm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ym(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=mm(e),l=Am(e),h=xm(e),u=Cm(e),f=vm(e),d=cm(e),m=lm(r),A=s.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ls).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(g=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Bn?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,rm("linearToOutputTexel",e.outputColorSpace),om(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=Do(a),a=Dl(a,e),a=Nl(a,e),o=Do(o),o=Dl(o,e),o=Nl(o,e),a=ql(a),o=ql(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+g+a,x=_+p+o,L=Pl(s,s.VERTEX_SHADER,v),b=Pl(s,s.FRAGMENT_SHADER,x);s.attachShader(A,L),s.attachShader(A,b),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(T){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(A).trim(),B=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(b).trim(),J=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,L,b);else{let $=Ul(s,L,"vertex"),k=Ul(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+$+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||H==="")&&(G=!1);G&&(T.diagnostics={runnable:J,programLog:O,vertexShader:{log:B,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(L),s.deleteShader(b),V=new Di(s,A),M=hm(s,A)}let V;this.getUniforms=function(){return V===void 0&&E(this),V};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(A,em)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nm++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=b,this}var _m=0,No=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new qo(t),e.set(t,n)),n}},qo=class{constructor(t){this.id=_m++,this.code=t,this.usedTimes=0}};function Im(i,t,e,n,s,r,a){let o=new Ir,c=new No,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,T,O,B){let H=O.fog,J=B.geometry,G=M.isMeshStandardMaterial?O.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),k=$&&$.mapping===Kr?$.image.height:null,st=m[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=ut!==void 0?ut.length:0,qt=0;J.morphAttributes.position!==void 0&&(qt=1),J.morphAttributes.normal!==void 0&&(qt=2),J.morphAttributes.color!==void 0&&(qt=3);let $t,X,tt,xt;if(st){let Jt=rn[st];$t=Jt.vertexShader,X=Jt.fragmentShader}else $t=M.vertexShader,X=M.fragmentShader,c.update(M),tt=c.getVertexShaderID(M),xt=c.getFragmentShaderID(M);let rt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Tt=B.isInstancedMesh===!0,Ft=B.isBatchedMesh===!0,ce=!!M.map,kt=!!M.matcap,de=!!$,D=!!M.aoMap,Be=!!M.lightMap,Bt=!!M.bumpMap,Ot=!!M.normalMap,It=!!M.displacementMap,ie=!!M.emissiveMap,_t=!!M.metalnessMap,S=!!M.roughnessMap,C=M.anisotropy>0,N=M.clearcoat>0,Y=M.dispersion>0,j=M.iridescence>0,W=M.sheen>0,Ct=M.transmission>0,at=C&&!!M.anisotropyMap,dt=N&&!!M.clearcoatMap,Ht=N&&!!M.clearcoatNormalMap,Z=N&&!!M.clearcoatRoughnessMap,ft=j&&!!M.iridescenceMap,Mt=j&&!!M.iridescenceThicknessMap,bt=W&&!!M.sheenColorMap,pt=W&&!!M.sheenRoughnessMap,zt=!!M.specularMap,Lt=!!M.specularColorMap,te=!!M.specularIntensityMap,R=Ct&&!!M.transmissionMap,it=Ct&&!!M.thicknessMap,z=!!M.gradientMap,K=!!M.alphaMap,lt=M.alphaTest>0,ot=!!M.alphaHash,Vt=!!M.extensions,he=Bn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(he=i.toneMapping);let Me={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:$t,fragmentShader:X,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ft,batchingColor:Ft&&B._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&B.instanceColor!==null,instancingMorph:Tt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Yi,alphaToCoverage:!!M.alphaToCoverage,map:ce,matcap:kt,envMap:de,envMapMode:de&&$.mapping,envMapCubeUVHeight:k,aoMap:D,lightMap:Be,bumpMap:Bt,normalMap:Ot,displacementMap:f&&It,emissiveMap:ie,normalMapObjectSpace:Ot&&M.normalMapType===Ou,normalMapTangentSpace:Ot&&M.normalMapType===gh,metalnessMap:_t,roughnessMap:S,anisotropy:C,anisotropyMap:at,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Z,dispersion:Y,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:bt,sheenRoughnessMap:pt,specularMap:zt,specularColorMap:Lt,specularIntensityMap:te,transmission:Ct,transmissionMap:R,thicknessMap:it,gradientMap:z,opaque:M.transparent===!1&&M.blending===Pi&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:ot,combine:M.combine,mapUv:ce&&A(M.map.channel),aoMapUv:D&&A(M.aoMap.channel),lightMapUv:Be&&A(M.lightMap.channel),bumpMapUv:Bt&&A(M.bumpMap.channel),normalMapUv:Ot&&A(M.normalMap.channel),displacementMapUv:It&&A(M.displacementMap.channel),emissiveMapUv:ie&&A(M.emissiveMap.channel),metalnessMapUv:_t&&A(M.metalnessMap.channel),roughnessMapUv:S&&A(M.roughnessMap.channel),anisotropyMapUv:at&&A(M.anisotropyMap.channel),clearcoatMapUv:dt&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:pt&&A(M.sheenRoughnessMap.channel),specularMapUv:zt&&A(M.specularMap.channel),specularColorMapUv:Lt&&A(M.specularColorMap.channel),specularIntensityMapUv:te&&A(M.specularIntensityMap.channel),transmissionMapUv:R&&A(M.transmissionMap.channel),thicknessMapUv:it&&A(M.thicknessMap.channel),alphaMapUv:K&&A(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ot||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(ce||K),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:qt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:ce&&M.map.isVideoTexture===!0&&Gt.getTransfer(M.map.colorSpace)===jt,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(M.emissiveMap.colorSpace)===jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===we,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)y.push(T),y.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(_(y,M),v(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let y=m[M.type],T;if(y){let O=rn[y];T=dd.clone(O.uniforms)}else T=M.uniforms;return T}function L(M,y){let T;for(let O=0,B=h.length;O<B;O++){let H=h[O];if(H.cacheKey===y){T=H,++T.usedTimes;break}}return T===void 0&&(T=new ym(i,y,M,r),h.push(T)),T}function b(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function V(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:V}}function Mm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ol(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,m,A,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=A,p.group=g),t++,p}function o(u,f,d,m,A,g){let p=a(u,f,d,m,A,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,m,A,g){let p=a(u,f,d,m,A,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Sm),n.length>1&&n.sort(f||Bl),s.length>1&&s.sort(f||Bl)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function bm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ol,i.set(n,[a])):s>=r.length?(a=new Ol,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Em(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Dt};break;case"SpotLight":e={position:new w,direction:new w,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function wm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Tm=0;function Vm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rm(i){let t=new Em,e=wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,r=new oe,a=new oe;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,A=0,g=0,p=0,_=0,v=0,x=0,L=0,b=0,E=0;l.sort(Vm);for(let M=0,y=l.length;M<y;M++){let T=l[M],O=T.color,B=T.intensity,H=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],B);E++}else if(T.isDirectionalLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let $=T.shadow,k=e.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=T.shadow.matrix,_++}n.directional[d]=G,d++}else if(T.isSpotLight){let G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[A]=G;let $=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,$.updateMatrices(T),T.castShadow&&b++),n.spotLightMatrix[A]=$.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=J,x++}A++}else if(T.isRectAreaLight){let G=t.get(T);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=G,g++}else if(T.isPointLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let $=T.shadow,k=e.get(T);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=T.shadow.matrix,v++}n.point[m]=G,m++}else if(T.isHemisphereLight){let G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(B),G.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let V=n.hash;(V.directionalLength!==d||V.pointLength!==m||V.spotLength!==A||V.rectAreaLength!==g||V.hemiLength!==p||V.numDirectionalShadows!==_||V.numPointShadows!==v||V.numSpotShadows!==x||V.numSpotMaps!==L||V.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+L-b,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,V.directionalLength=d,V.pointLength=m,V.spotLength=A,V.rectAreaLength=g,V.hemiLength=p,V.numDirectionalShadows=_,V.numPointShadows=v,V.numSpotShadows=x,V.numSpotMaps=L,V.numLightProbes=E,n.version=Tm++)}function c(l,h){let u=0,f=0,d=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let v=l[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(v.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),A++}}}return{setup:o,setupView:c,state:n}}function zl(i){let t=new Rm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Pm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new zl(i),t.set(s,[o])):r>=a.length?(o=new zl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fo=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Dm(i,t,e){let n=new As,s=new nt,r=new nt,a=new ue,o=new Fo({depthPacking:Bu}),c=new Bo,l={},h=e.maxTextureSize,u={[On]:we,[we]:On,[Je]:Je},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Lm,fragmentShader:Um}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ce;m.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Et(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let p=this.type;this.render=function(b,E,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Fn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=p!==xn&&this.type===xn,H=p===xn&&this.type!==xn;for(let J=0,G=b.length;J<G;J++){let $=b[J],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||B===!0||H===!0){let yt=this.type!==xn?{minFilter:Ze,magFilter:Ze}:{};k.map!==null&&k.map.dispose(),k.map=new Qe(s.x,s.y,yt),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ut=k.getViewportCount();for(let yt=0;yt<ut;yt++){let qt=k.getViewport(yt);a.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),O.viewport(a),k.updateMatrices($,yt),n=k.getFrustum(),x(E,V,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===xn&&_(k,V),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,y,T)};function _(b,E){let V=t.update(A);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Qe(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,V,f,A,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,V,d,A,null)}function v(b,E,V,M){let y=null,T=V.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)y=T;else if(y=V.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=y.uuid,B=E.uuid,H=l[O];H===void 0&&(H={},l[O]=H);let J=H[B];J===void 0&&(J=y.clone(),H[B]=J,E.addEventListener("dispose",L)),y=J}if(y.visible=E.visible,y.wireframe=E.wireframe,M===xn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=i.properties.get(y);O.light=V}return y}function x(b,E,V,M,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===xn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld);let B=t.update(b),H=b.material;if(Array.isArray(H)){let J=B.groups;for(let G=0,$=J.length;G<$;G++){let k=J[G],st=H[k.materialIndex];if(st&&st.visible){let ut=v(b,st,M,y);b.onBeforeShadow(i,b,E,V,B,ut,k),i.renderBufferDirect(V,null,B,ut,b,k),b.onAfterShadow(i,b,E,V,B,ut,k)}}}else if(H.visible){let J=v(b,H,M,y);b.onBeforeShadow(i,b,E,V,B,J,null),i.renderBufferDirect(V,null,B,J,b,null),b.onAfterShadow(i,b,E,V,B,J,null)}}let O=b.children;for(let B=0,H=O.length;B<H;B++)x(O[B],E,V,M,y)}function L(b){b.target.removeEventListener("dispose",L);for(let V in l){let M=l[V],y=b.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Nm={[ka]:Ha,[Ga]:Ya,[Wa]:Ka,[Ni]:Xa,[Ha]:ka,[Ya]:Ga,[Ka]:Wa,[Xa]:Ni};function qm(i,t){function e(){let R=!1,it=new ue,z=null,K=new ue(0,0,0,0);return{setMask:function(lt){z!==lt&&!R&&(i.colorMask(lt,lt,lt,lt),z=lt)},setLocked:function(lt){R=lt},setClear:function(lt,ot,Vt,he,Me){Me===!0&&(lt*=he,ot*=he,Vt*=he),it.set(lt,ot,Vt,he),K.equals(it)===!1&&(i.clearColor(lt,ot,Vt,he),K.copy(it))},reset:function(){R=!1,z=null,K.set(-1,0,0,0)}}}function n(){let R=!1,it=!1,z=null,K=null,lt=null;return{setReversed:function(ot){if(it!==ot){let Vt=t.get("EXT_clip_control");it?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let he=lt;lt=null,this.setClear(he)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ot){z!==ot&&!R&&(i.depthMask(ot),z=ot)},setFunc:function(ot){if(it&&(ot=Nm[ot]),K!==ot){switch(ot){case ka:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ot}},setLocked:function(ot){R=ot},setClear:function(ot){lt!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){R=!1,z=null,K=null,lt=null,it=!1}}}function s(){let R=!1,it=null,z=null,K=null,lt=null,ot=null,Vt=null,he=null,Me=null;return{setTest:function(Jt){R||(Jt?rt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!R&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,Ge,un){(z!==Jt||K!==Ge||lt!==un)&&(i.stencilFunc(Jt,Ge,un),z=Jt,K=Ge,lt=un)},setOp:function(Jt,Ge,un){(ot!==Jt||Vt!==Ge||he!==un)&&(i.stencilOp(Jt,Ge,un),ot=Jt,Vt=Ge,he=un)},setLocked:function(Jt){R=Jt},setClear:function(Jt){Me!==Jt&&(i.clearStencil(Jt),Me=Jt)},reset:function(){R=!1,it=null,z=null,K=null,lt=null,ot=null,Vt=null,he=null,Me=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,A=!1,g=null,p=null,_=null,v=null,x=null,L=null,b=null,E=new Dt(0,0,0),V=0,M=!1,y=null,T=null,O=null,B=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=$>=2);let st=null,ut={},yt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),$t=new ue().fromArray(yt),X=new ue().fromArray(qt);function tt(R,it,z,K){let lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(R,ot),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<z;Vt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}let xt={};xt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Ni),Bt(!1),Ot(Gc),rt(i.CULL_FACE),D(Fn);function rt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function St(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Tt(R,it){return u[R]!==it?(i.bindFramebuffer(R,it),u[R]=it,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ft(R,it){let z=d,K=!1;if(R){z=f.get(it),z===void 0&&(z=[],f.set(it,z));let lt=R.textures;if(z.length!==lt.length||z[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Vt=lt.length;ot<Vt;ot++)z[ot]=i.COLOR_ATTACHMENT0+ot;z.length=lt.length,K=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,K=!0);K&&i.drawBuffers(z)}function ce(R){return m!==R?(i.useProgram(R),m=R,!0):!1}let kt={[$n]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};kt[pu]=i.MIN,kt[gu]=i.MAX;let de={[mu]:i.ZERO,[Au]:i.ONE,[xu]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[Mu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[vu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[Su]:i.CONSTANT_COLOR,[bu]:i.ONE_MINUS_CONSTANT_COLOR,[Eu]:i.CONSTANT_ALPHA,[wu]:i.ONE_MINUS_CONSTANT_ALPHA};function D(R,it,z,K,lt,ot,Vt,he,Me,Jt){if(R===Fn){A===!0&&(St(i.BLEND),A=!1);return}if(A===!1&&(rt(i.BLEND),A=!0),R!==uu){if(R!==g||Jt!==M){if((p!==$n||x!==$n)&&(i.blendEquation(i.FUNC_ADD),p=$n,x=$n),Jt)switch(R){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}_=null,v=null,L=null,b=null,E.set(0,0,0),V=0,g=R,M=Jt}return}lt=lt||it,ot=ot||z,Vt=Vt||K,(it!==p||lt!==x)&&(i.blendEquationSeparate(kt[it],kt[lt]),p=it,x=lt),(z!==_||K!==v||ot!==L||Vt!==b)&&(i.blendFuncSeparate(de[z],de[K],de[ot],de[Vt]),_=z,v=K,L=ot,b=Vt),(he.equals(E)===!1||Me!==V)&&(i.blendColor(he.r,he.g,he.b,Me),E.copy(he),V=Me),g=R,M=!1}function Be(R,it){R.side===Je?St(i.CULL_FACE):rt(i.CULL_FACE);let z=R.side===we;it&&(z=!z),Bt(z),R.blending===Pi&&R.transparent===!1?D(Fn):D(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let K=R.stencilWrite;o.setTest(K),K&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ie(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(R){y!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),y=R)}function Ot(R){R!==lu?(rt(i.CULL_FACE),R!==T&&(R===Gc?i.cullFace(i.BACK):R===hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),T=R}function It(R){R!==O&&(G&&i.lineWidth(R),O=R)}function ie(R,it,z){R?(rt(i.POLYGON_OFFSET_FILL),(B!==it||H!==z)&&(i.polygonOffset(it,z),B=it,H=z)):St(i.POLYGON_OFFSET_FILL)}function _t(R){R?rt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function S(R){R===void 0&&(R=i.TEXTURE0+J-1),st!==R&&(i.activeTexture(R),st=R)}function C(R,it,z){z===void 0&&(st===null?z=i.TEXTURE0+J-1:z=st);let K=ut[z];K===void 0&&(K={type:void 0,texture:void 0},ut[z]=K),(K.type!==R||K.texture!==it)&&(st!==z&&(i.activeTexture(z),st=z),i.bindTexture(R,it||xt[R]),K.type=R,K.texture=it)}function N(){let R=ut[st];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(R){$t.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),$t.copy(R))}function pt(R){X.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function zt(R,it){let z=l.get(it);z===void 0&&(z=new WeakMap,l.set(it,z));let K=z.get(R);K===void 0&&(K=i.getUniformBlockIndex(it,R.name),z.set(R,K))}function Lt(R,it){let K=l.get(it).get(R);c.get(it)!==K&&(i.uniformBlockBinding(it,K,R.__bindingPointIndex),c.set(it,K))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ut={},u={},f=new WeakMap,d=[],m=null,A=!1,g=null,p=null,_=null,v=null,x=null,L=null,b=null,E=new Dt(0,0,0),V=0,M=!1,y=null,T=null,O=null,B=null,H=null,$t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:St,bindFramebuffer:Tt,drawBuffers:Ft,useProgram:ce,setBlending:D,setMaterial:Be,setFlipSided:Bt,setCullFace:Ot,setLineWidth:It,setPolygonOffset:ie,setScissorTest:_t,activeTexture:S,bindTexture:C,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:ft,texImage3D:Mt,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:Ht,texStorage3D:Z,texSubImage2D:W,texSubImage3D:Ct,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:bt,viewport:pt,reset:te}}function kl(i,t,e,n){let s=Fm(n);switch(e){case ch:return i*t;case hh:return i*t;case uh:return i*t*2;case dh:return i*t/s.components*s.byteLength;case xc:return i*t/s.components*s.byteLength;case fh:return i*t*2/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case vc:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:case to:return Math.max(i,16)*Math.max(t,8)/4;case Za:case $a:return Math.max(i,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ar:case Co:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ph:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _o:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fm(i){switch(i){case Mn:case rh:return{byteLength:1,components:1};case gs:case ah:case Ls:return{byteLength:2,components:1};case mc:case Ac:return{byteLength:2,components:4};case ii:case gc:case vn:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,C){return d?new OffscreenCanvas(S,C):ms("canvas")}function A(S,C,N){let Y=1,j=_t(S);if((j.width>N||j.height>N)&&(Y=N/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap||typeof VideoFrame!="undefined"&&S instanceof VideoFrame){let W=Math.floor(Y*j.width),Ct=Math.floor(Y*j.height);u===void 0&&(u=m(W,Ct));let at=C?m(W,Ct):u;return at.width=W,at.height=Ct,at.getContext("2d").drawImage(S,0,0,W,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Ct+")."),at}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function g(S){return S.generateMipmaps}function p(S){i.generateMipmap(S)}function _(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(S,C,N,Y,j=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=C;if(C===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),C===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),C===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),C===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),C===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),C===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),C===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),C===i.RGBA){let Ct=j?Jr:Gt.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=Ct===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(S,C){let N;return S?C===null||C===ii||C===Oi?N=i.DEPTH24_STENCIL8:C===vn?N=i.DEPTH32F_STENCIL8:C===gs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ii||C===Oi?N=i.DEPTH_COMPONENT24:C===vn?N=i.DEPTH_COMPONENT32F:C===gs&&(N=i.DEPTH_COMPONENT16),N}function L(S,C){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ze&&S.minFilter!==on?Math.log2(Math.max(C.width,C.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?C.mipmaps.length:1}function b(S){let C=S.target;C.removeEventListener("dispose",b),V(C),C.isVideoTexture&&h.delete(C)}function E(S){let C=S.target;C.removeEventListener("dispose",E),y(C)}function V(S){let C=n.get(S);if(C.__webglInit===void 0)return;let N=S.source,Y=f.get(N);if(Y){let j=Y[C.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(S),Object.keys(Y).length===0&&f.delete(N)}n.remove(S)}function M(S){let C=n.get(S);i.deleteTexture(C.__webglTexture);let N=S.source,Y=f.get(N);delete Y[C.__cacheKey],a.memory.textures--}function y(S){let C=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let j=0;j<C.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(C.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)i.deleteFramebuffer(C.__webglFramebuffer[Y]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let N=S.textures;for(let Y=0,j=N.length;Y<j;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(S)}let T=0;function O(){T=0}function B(){let S=T;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),T+=1,S}function H(S){let C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.wrapR||0),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.colorSpace),C.join()}function J(S,C){let N=n.get(S);if(S.isVideoTexture&&It(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){let Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,S,C);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+C)}function G(S,C){let N=n.get(S);if(S.version>0&&N.__version!==S.version){X(N,S,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+C)}function $(S,C){let N=n.get(S);if(S.version>0&&N.__version!==S.version){X(N,S,C);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+C)}function k(S,C){let N=n.get(S);if(S.version>0&&N.__version!==S.version){tt(N,S,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+C)}let st={[Bi]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[ps]:i.MIRRORED_REPEAT},ut={[Ze]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},yt={[zu]:i.NEVER,[Yu]:i.ALWAYS,[ku]:i.LESS,[mh]:i.LEQUAL,[Hu]:i.EQUAL,[Xu]:i.GEQUAL,[Gu]:i.GREATER,[Wu]:i.NOTEQUAL};function qt(S,C){if(C.type===vn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===on||C.magFilter===ra||C.magFilter===qs||C.magFilter===ni||C.minFilter===on||C.minFilter===ra||C.minFilter===qs||C.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,st[C.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,st[C.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,st[C.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ut[C.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ut[C.minFilter]),C.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,yt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ze||C.minFilter!==qs&&C.minFilter!==ni||C.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function $t(S,C){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,C.addEventListener("dispose",b));let Y=C.source,j=f.get(Y);j===void 0&&(j={},f.set(Y,j));let W=H(C);if(W!==S.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[W].usedTimes++;let Ct=j[S.__cacheKey];Ct!==void 0&&(j[S.__cacheKey].usedTimes--,Ct.usedTimes===0&&M(C)),S.__cacheKey=W,S.__webglTexture=j[W].texture}return N}function X(S,C,N){let Y=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=i.TEXTURE_3D);let j=$t(S,C),W=C.source;e.bindTexture(Y,S.__webglTexture,i.TEXTURE0+N);let Ct=n.get(W);if(W.version!==Ct.__version||j===!0){e.activeTexture(i.TEXTURE0+N);let at=Gt.getPrimaries(Gt.workingColorSpace),dt=C.colorSpace===Nn?null:Gt.getPrimaries(C.colorSpace),Ht=C.colorSpace===Nn||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Z=A(C.image,!1,s.maxTextureSize);Z=ie(C,Z);let ft=r.convert(C.format,C.colorSpace),Mt=r.convert(C.type),bt=v(C.internalFormat,ft,Mt,C.colorSpace,C.isVideoTexture);qt(Y,C);let pt,zt=C.mipmaps,Lt=C.isVideoTexture!==!0,te=Ct.__version===void 0||j===!0,R=W.dataReady,it=L(C,Z);if(C.isDepthTexture)bt=x(C.format===zi,C.type),te&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,bt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,bt,Z.width,Z.height,0,ft,Mt,null));else if(C.isDataTexture)if(zt.length>0){Lt&&te&&e.texStorage2D(i.TEXTURE_2D,it,bt,zt[0].width,zt[0].height);for(let z=0,K=zt.length;z<K;z++)pt=zt[z],Lt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,Mt,pt.data):e.texImage2D(i.TEXTURE_2D,z,bt,pt.width,pt.height,0,ft,Mt,pt.data);C.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(i.TEXTURE_2D,it,bt,Z.width,Z.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ft,Mt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,bt,Z.width,Z.height,0,ft,Mt,Z.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Lt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,zt[0].width,zt[0].height,Z.depth);for(let z=0,K=zt.length;z<K;z++)if(pt=zt[z],C.format!==je)if(ft!==null)if(Lt){if(R)if(C.layerUpdates.size>0){let lt=kl(pt.width,pt.height,C.format,C.type);for(let ot of C.layerUpdates){let Vt=pt.data.subarray(ot*lt/pt.data.BYTES_PER_ELEMENT,(ot+1)*lt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,ot,pt.width,pt.height,1,ft,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,pt.width,pt.height,Z.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,bt,pt.width,pt.height,Z.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,pt.width,pt.height,Z.depth,ft,Mt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,bt,pt.width,pt.height,Z.depth,0,ft,Mt,pt.data)}else{Lt&&te&&e.texStorage2D(i.TEXTURE_2D,it,bt,zt[0].width,zt[0].height);for(let z=0,K=zt.length;z<K;z++)pt=zt[z],C.format!==je?ft!==null?Lt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,Mt,pt.data):e.texImage2D(i.TEXTURE_2D,z,bt,pt.width,pt.height,0,ft,Mt,pt.data)}else if(C.isDataArrayTexture)if(Lt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,Z.width,Z.height,Z.depth),R)if(C.layerUpdates.size>0){let z=kl(Z.width,Z.height,C.format,C.type);for(let K of C.layerUpdates){let lt=Z.data.subarray(K*z/Z.data.BYTES_PER_ELEMENT,(K+1)*z/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Z.width,Z.height,1,ft,Mt,lt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ft,Mt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,Z.width,Z.height,Z.depth,0,ft,Mt,Z.data);else if(C.isData3DTexture)Lt?(te&&e.texStorage3D(i.TEXTURE_3D,it,bt,Z.width,Z.height,Z.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ft,Mt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,bt,Z.width,Z.height,Z.depth,0,ft,Mt,Z.data);else if(C.isFramebufferTexture){if(te)if(Lt)e.texStorage2D(i.TEXTURE_2D,it,bt,Z.width,Z.height);else{let z=Z.width,K=Z.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,bt,z,K,0,ft,Mt,null),z>>=1,K>>=1}}else if(zt.length>0){if(Lt&&te){let z=_t(zt[0]);e.texStorage2D(i.TEXTURE_2D,it,bt,z.width,z.height)}for(let z=0,K=zt.length;z<K;z++)pt=zt[z],Lt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft,Mt,pt):e.texImage2D(i.TEXTURE_2D,z,bt,ft,Mt,pt);C.generateMipmaps=!1}else if(Lt){if(te){let z=_t(Z);e.texStorage2D(i.TEXTURE_2D,it,bt,z.width,z.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Mt,Z)}else e.texImage2D(i.TEXTURE_2D,0,bt,ft,Mt,Z);g(C)&&p(Y),Ct.__version=W.version,C.onUpdate&&C.onUpdate(C)}S.__version=C.version}function tt(S,C,N){if(C.image.length!==6)return;let Y=$t(S,C),j=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let Ct=Gt.getPrimaries(Gt.workingColorSpace),at=C.colorSpace===Nn?null:Gt.getPrimaries(C.colorSpace),dt=C.colorSpace===Nn||Ct===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ht=C.isCompressedTexture||C.image[0].isCompressedTexture,Z=C.image[0]&&C.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Ht&&!Z?ft[K]=A(C.image[K],!0,s.maxCubemapSize):ft[K]=Z?C.image[K].image:C.image[K],ft[K]=ie(C,ft[K]);let Mt=ft[0],bt=r.convert(C.format,C.colorSpace),pt=r.convert(C.type),zt=v(C.internalFormat,bt,pt,C.colorSpace),Lt=C.isVideoTexture!==!0,te=W.__version===void 0||Y===!0,R=j.dataReady,it=L(C,Mt);qt(i.TEXTURE_CUBE_MAP,C);let z;if(Ht){Lt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,zt,Mt.width,Mt.height);for(let K=0;K<6;K++){z=ft[K].mipmaps;for(let lt=0;lt<z.length;lt++){let ot=z[lt];C.format!==je?bt!==null?Lt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ot.width,ot.height,bt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,zt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ot.width,ot.height,bt,pt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,zt,ot.width,ot.height,0,bt,pt,ot.data)}}}else{if(z=C.mipmaps,Lt&&te){z.length>0&&it++;let K=_t(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,zt,K.width,K.height)}for(let K=0;K<6;K++)if(Z){Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,bt,pt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,ft[K].width,ft[K].height,0,bt,pt,ft[K].data);for(let lt=0;lt<z.length;lt++){let Vt=z[lt].image[K].image;Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Vt.width,Vt.height,bt,pt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,zt,Vt.width,Vt.height,0,bt,pt,Vt.data)}}else{Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt,pt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,bt,pt,ft[K]);for(let lt=0;lt<z.length;lt++){let ot=z[lt];Lt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,bt,pt,ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,zt,bt,pt,ot.image[K])}}}g(C)&&p(i.TEXTURE_CUBE_MAP),W.__version=j.version,C.onUpdate&&C.onUpdate(C)}S.__version=C.version}function xt(S,C,N,Y,j,W){let Ct=r.convert(N.format,N.colorSpace),at=r.convert(N.type),dt=v(N.internalFormat,Ct,at,N.colorSpace),Ht=n.get(C),Z=n.get(N);if(Z.__renderTarget=C,!Ht.__hasExternalTextures){let ft=Math.max(1,C.width>>W),Mt=Math.max(1,C.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,dt,ft,Mt,C.depth,0,Ct,at,null):e.texImage2D(j,W,dt,ft,Mt,0,Ct,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Ot(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Z.__webglTexture,0,Bt(C)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Z.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(S,C,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),C.depthBuffer){let Y=C.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=x(C.stencilBuffer,j),Ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Bt(C);Ot(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,W,C.width,C.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,W,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,W,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,S)}else{let Y=C.textures;for(let j=0;j<Y.length;j++){let W=Y[j],Ct=r.convert(W.format,W.colorSpace),at=r.convert(W.type),dt=v(W.internalFormat,Ct,at,W.colorSpace),Ht=Bt(C);N&&Ot(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,dt,C.width,C.height):Ot(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,dt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,dt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(S,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(C.depthTexture);Y.__renderTarget=C,(!Y.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),J(C.depthTexture,0);let j=Y.__webglTexture,W=Bt(C);if(C.depthTexture.format===Li)Ot(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(C.depthTexture.format===zi)Ot(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Tt(S){let C=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==S.depthTexture){let Y=S.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){let j=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),C.__depthDisposeCallback=j}C.__boundDepthTexture=Y}if(S.depthTexture&&!C.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");St(C.__webglFramebuffer,S)}else if(N){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(C.__webglDepthbuffer[Y],S,!1);else{let j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=C.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),rt(C.__webglDepthbuffer,S,!1);else{let Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(S,C,N){let Y=n.get(S);C!==void 0&&xt(Y.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Tt(S)}function ce(S){let C=S.texture,N=n.get(S),Y=n.get(C);S.addEventListener("dispose",E);let j=S.textures,W=S.isWebGLCubeRenderTarget===!0,Ct=j.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=C.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let at=0;at<6;at++)if(C.mipmaps&&C.mipmaps.length>0){N.__webglFramebuffer[at]=[];for(let dt=0;dt<C.mipmaps.length;dt++)N.__webglFramebuffer[at][dt]=i.createFramebuffer()}else N.__webglFramebuffer[at]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){N.__webglFramebuffer=[];for(let at=0;at<C.mipmaps.length;at++)N.__webglFramebuffer[at]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let at=0,dt=j.length;at<dt;at++){let Ht=n.get(j[at]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&Ot(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){let dt=j[at];N.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[at]);let Ht=r.convert(dt.format,dt.colorSpace),Z=r.convert(dt.type),ft=v(dt.internalFormat,Ht,Z,dt.colorSpace,S.isXRRenderTarget===!0),Mt=Bt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ft,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,N.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),qt(i.TEXTURE_CUBE_MAP,C);for(let at=0;at<6;at++)if(C.mipmaps&&C.mipmaps.length>0)for(let dt=0;dt<C.mipmaps.length;dt++)xt(N.__webglFramebuffer[at][dt],S,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else xt(N.__webglFramebuffer[at],S,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(C)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let at=0,dt=j.length;at<dt;at++){let Ht=j[at],Z=n.get(Ht);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),qt(i.TEXTURE_2D,Ht),xt(N.__webglFramebuffer,S,Ht,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),g(Ht)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(at=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),qt(at,C),C.mipmaps&&C.mipmaps.length>0)for(let dt=0;dt<C.mipmaps.length;dt++)xt(N.__webglFramebuffer[dt],S,C,i.COLOR_ATTACHMENT0,at,dt);else xt(N.__webglFramebuffer,S,C,i.COLOR_ATTACHMENT0,at,0);g(C)&&p(at),e.unbindTexture()}S.depthBuffer&&Tt(S)}function kt(S){let C=S.textures;for(let N=0,Y=C.length;N<Y;N++){let j=C[N];if(g(j)){let W=_(S),Ct=n.get(j).__webglTexture;e.bindTexture(W,Ct),p(W),e.unbindTexture()}}}let de=[],D=[];function Be(S){if(S.samples>0){if(Ot(S)===!1){let C=S.textures,N=S.width,Y=S.height,j=i.COLOR_BUFFER_BIT,W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(S),at=C.length>1;if(at)for(let dt=0;dt<C.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let dt=0;dt<C.length;dt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Ht=n.get(C[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,j,i.NEAREST),c===!0&&(de.length=0,D.length=0,de.push(i.COLOR_ATTACHMENT0+dt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(de.push(W),D.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<C.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Ht=n.get(C[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let C=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Bt(S){return Math.min(s.maxSamples,S.samples)}function Ot(S){let C=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(S){let C=a.render.frame;h.get(S)!==C&&(h.set(S,C),S.update())}function ie(S,C){let N=S.colorSpace,Y=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==Yi&&N!==Nn&&(Gt.getTransfer(N)===jt?(Y!==je||j!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),C}function _t(S){return typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame!="undefined"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ot}function Om(i,t){function e(n,s=Nn){let r,a=Gt.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.BYTE;if(n===ah)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===ch)return i.ALPHA;if(n===lh)return i.RGB;if(n===je)return i.RGBA;if(n===hh)return i.LUMINANCE;if(n===uh)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===dh)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===fh)return i.RG;if(n===Cc)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===fr||n===pr||n===gr||n===mr)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Qa||n===$a||n===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===no)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===go||n===mo||n===Ao||n===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===Co||n===vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===yo||n===_o||n===Io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Oo=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Qt=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},zm={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(l,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hm=`
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

}`,zo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:km,fragmentShader:Hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ko=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,A=new zo,g=e.getContextAttributes(),p=null,_=null,v=[],x=[],L=new nt,b=null,E=new Ee;E.viewport=new ue;let V=new Ee;V.viewport=new ue;let M=[E,V],y=new Oo,T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=v[X];return tt===void 0&&(tt=new hs,v[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=v[X];return tt===void 0&&(tt=new hs,v[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=v[X];return tt===void 0&&(tt=new hs,v[X]=tt),tt.getHandSpace()};function B(X){let tt=x.indexOf(X.inputSource);if(tt===-1)return;let xt=v[tt];xt!==void 0&&(xt.update(X.inputSource,X.frame,l||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let X=0;X<v.length;X++){let tt=x[X];tt!==null&&(x[X]=null,v[X].disconnect(tt))}T=null,O=null,A.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,_=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Qe(d.framebufferWidth,d.framebufferHeight,{format:je,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,xt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?zi:Li,xt=g.stencil?Oi:ii);let St={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Qe(f.textureWidth,f.textureHeight,{format:je,type:Mn,depthTexture:new Vr(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function J(X){for(let tt=0;tt<X.removed.length;tt++){let xt=X.removed[tt],rt=x.indexOf(xt);rt>=0&&(x[rt]=null,v[rt].disconnect(xt))}for(let tt=0;tt<X.added.length;tt++){let xt=X.added[tt],rt=x.indexOf(xt);if(rt===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=x.length){x.push(xt),rt=Tt;break}else if(x[Tt]===null){x[Tt]=xt,rt=Tt;break}if(rt===-1)break}let St=v[rt];St&&St.connect(xt)}}let G=new w,$=new w;function k(X,tt,xt){G.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);let rt=G.distanceTo($),St=tt.projectionMatrix.elements,Tt=xt.projectionMatrix.elements,Ft=St[14]/(St[10]-1),ce=St[14]/(St[10]+1),kt=(St[9]+1)/St[5],de=(St[9]-1)/St[5],D=(St[8]-1)/St[0],Be=(Tt[8]+1)/Tt[0],Bt=Ft*D,Ot=Ft*Be,It=rt/(-D+Be),ie=It*-D;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),St[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let _t=Ft+It,S=ce+It,C=Bt-ie,N=Ot+(rt-ie),Y=kt*ce/S*_t,j=de*ce/S*_t;X.projectionMatrix.makePerspective(C,N,Y,j,_t,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,xt=X.far;A.texture!==null&&(A.depthNear>0&&(tt=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),y.near=V.near=E.near=tt,y.far=V.far=E.far=xt,(T!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,O=y.far),E.layers.mask=X.layers.mask|2,V.layers.mask=X.layers.mask|4,y.layers.mask=E.layers.mask|V.layers.mask;let rt=X.parent,St=y.cameras;st(y,rt);for(let Tt=0;Tt<St.length;Tt++)st(St[Tt],rt);St.length===2?k(y,E,V):y.projectionMatrix.copy(E.projectionMatrix),ut(X,y,rt)};function ut(X,tt,xt){xt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=bo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let yt=null;function qt(X,tt){if(h=tt.getViewerPose(l||a),m=tt,h!==null){let xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let rt=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Tt=0;Tt<xt.length;Tt++){let Ft=xt[Tt],ce=null;if(d!==null)ce=d.getViewport(Ft);else{let de=u.getViewSubImage(f,Ft);ce=de.viewport,Tt===0&&(t.setRenderTargetTextures(_,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(_))}let kt=M[Tt];kt===void 0&&(kt=new Ee,kt.layers.enable(Tt),kt.viewport=new ue,M[Tt]=kt),kt.matrix.fromArray(Ft.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ft.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ce.x,ce.y,ce.width,ce.height),Tt===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(kt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){let Tt=u.getDepthInformation(xt[0]);Tt&&Tt.isValid&&Tt.texture&&A.init(t,Tt,s.renderState)}}for(let xt=0;xt<v.length;xt++){let rt=x[xt],St=v[xt];rt!==null&&St!==void 0&&St.update(rt,tt,l||a)}yt&&yt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let $t=new vh;$t.setAnimationLoop(qt),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}},Zn=new cn,Gm=new oe;function Wm(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ch(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,_,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===we&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===we&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,x=_.envMapRotation;v&&(g.envMap.value=v,Zn.copy(x),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),g.envMapRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(Zn)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,_,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===we&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let x=v.program;n.uniformBlockBinding(_,x)}function l(_,v){let x=s[_.id];x===void 0&&(m(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",g));let L=v.program;n.updateUBOMapping(_,L);let b=t.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function h(_){let v=u();_.__bindingPointIndex=v;let x=i.createBuffer(),L=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=s[_.id],x=_.uniforms,L=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,E=x.length;b<E;b++){let V=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,y=V.length;M<y;M++){let T=V[M];if(d(T,b,M,L)===!0){let O=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],H=0;for(let J=0;J<B.length;J++){let G=B[J],$=A(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,v,x,L){let b=_.value,E=v+"_"+x;if(L[E]===void 0)return typeof b=="number"||typeof b=="boolean"?L[E]=b:L[E]=b.clone(),!0;{let V=L[E];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return L[E]=b,!0}else if(V.equals(b)===!1)return V.copy(b),!0}return!1}function m(_){let v=_.uniforms,x=0,L=16;for(let E=0,V=v.length;E<V;E++){let M=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,T=M.length;y<T;y++){let O=M[y],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,J=B.length;H<J;H++){let G=B[H],$=A(G),k=x%L,st=k%$.boundary,ut=k+st;x+=st,ut!==0&&L-ut<$.storage&&(x+=L-ut),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=$.storage}}}let b=x%L;return b>0&&(x+=L-b),_.__size=x,_.__cache={},this}function A(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Rr=class{constructor(t={}){let{canvas:e=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=Bn,this.toneMappingExposure=1;let x=this,L=!1,b=0,E=0,V=null,M=-1,y=null,T=new ue,O=new ue,B=null,H=new Dt(0),J=0,G=e.width,$=e.height,k=1,st=null,ut=null,yt=new ue(0,0,G,$),qt=new ue(0,0,G,$),$t=!1,X=new As,tt=!1,xt=!1,rt=new oe,St=new oe,Tt=new w,Ft=new ue,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function de(){return V===null?k:1}let D=n;function Be(I,P){return e.getContext(I,P)}try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),D===null){let P="webgl2";if(D=Be(P,I),D===null)throw Be(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Bt,Ot,It,ie,_t,S,C,N,Y,j,W,Ct,at,dt,Ht,Z,ft,Mt,bt,pt,zt,Lt,te,R;function it(){Bt=new cg(D),Bt.init(),Lt=new Om(D,Bt),Ot=new ng(D,Bt,t,Lt),It=new qm(D,Bt),Ot.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ie=new ug(D),_t=new Mm,S=new Bm(D,Bt,It,_t,Ot,Lt,ie),C=new sg(x),N=new og(x),Y=new Ad(D),te=new tg(D,Y),j=new lg(D,Y,ie,te),W=new fg(D,j,Y,ie),bt=new dg(D,Ot,S),Z=new ig(_t),Ct=new Im(x,C,N,Bt,Ot,te,Z),at=new Wm(x,_t),dt=new bm,Ht=new Pm(Bt),Mt=new $p(x,C,N,It,W,d,c),ft=new Dm(x,W,Ot),R=new Xm(D,ie,Ot,It),pt=new eg(D,Bt,ie),zt=new hg(D,Bt,ie),ie.programs=Ct.programs,x.capabilities=Ot,x.extensions=Bt,x.properties=_t,x.renderLists=dt,x.shadowMap=ft,x.state=It,x.info=ie}it();let z=new ko(x,D);this.xr=z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let I=Bt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Bt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(G,$,!1))},this.getSize=function(I){return I.set(G,$)},this.setSize=function(I,P,q=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=I,$=P,e.width=Math.floor(I*k),e.height=Math.floor(P*k),q===!0&&(e.style.width=I+"px",e.style.height=P+"px"),this.setViewport(0,0,I,P)},this.getDrawingBufferSize=function(I){return I.set(G*k,$*k).floor()},this.setDrawingBufferSize=function(I,P,q){G=I,$=P,k=q,e.width=Math.floor(I*q),e.height=Math.floor(P*q),this.setViewport(0,0,I,P)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(yt)},this.setViewport=function(I,P,q,F){I.isVector4?yt.set(I.x,I.y,I.z,I.w):yt.set(I,P,q,F),It.viewport(T.copy(yt).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(qt)},this.setScissor=function(I,P,q,F){I.isVector4?qt.set(I.x,I.y,I.z,I.w):qt.set(I,P,q,F),It.scissor(O.copy(qt).multiplyScalar(k).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(I){It.setScissorTest($t=I)},this.setOpaqueSort=function(I){st=I},this.setTransparentSort=function(I){ut=I},this.getClearColor=function(I){return I.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(I=!0,P=!0,q=!0){let F=0;if(I){let U=!1;if(V!==null){let Q=V.texture.format;U=Q===vc||Q===Cc||Q===xc}if(U){let Q=V.texture.type,ct=Q===Mn||Q===ii||Q===gs||Q===Oi||Q===mc||Q===Ac,gt=Mt.getClearColor(),mt=Mt.getClearAlpha(),wt=gt.r,Rt=gt.g,At=gt.b;ct?(m[0]=wt,m[1]=Rt,m[2]=At,m[3]=mt,D.clearBufferuiv(D.COLOR,0,m)):(A[0]=wt,A[1]=Rt,A[2]=At,A[3]=mt,D.clearBufferiv(D.COLOR,0,A))}else F|=D.COLOR_BUFFER_BIT}P&&(F|=D.DEPTH_BUFFER_BIT),q&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),Ht.dispose(),_t.dispose(),C.dispose(),N.dispose(),W.dispose(),te.dispose(),R.dispose(),Ct.dispose(),z.dispose(),z.removeEventListener("sessionstart",Nc),z.removeEventListener("sessionend",qc),Wn.stop()};function K(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let I=ie.autoReset,P=ft.enabled,q=ft.autoUpdate,F=ft.needsUpdate,U=ft.type;it(),ie.autoReset=I,ft.enabled=P,ft.autoUpdate=q,ft.needsUpdate=F,ft.type=U}function ot(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Vt(I){let P=I.target;P.removeEventListener("dispose",Vt),he(P)}function he(I){Me(I),_t.remove(I)}function Me(I){let P=_t.get(I).programs;P!==void 0&&(P.forEach(function(q){Ct.releaseProgram(q)}),I.isShaderMaterial&&Ct.releaseShaderCache(I))}this.renderBufferDirect=function(I,P,q,F,U,Q){P===null&&(P=ce);let ct=U.isMesh&&U.matrixWorld.determinant()<0,gt=au(I,P,q,F,U);It.setMaterial(F,ct);let mt=q.index,wt=1;if(F.wireframe===!0){if(mt=j.getWireframeAttribute(q),mt===void 0)return;wt=2}let Rt=q.drawRange,At=q.attributes.position,Wt=Rt.start*wt,ee=(Rt.start+Rt.count)*wt;Q!==null&&(Wt=Math.max(Wt,Q.start*wt),ee=Math.min(ee,(Q.start+Q.count)*wt)),mt!==null?(Wt=Math.max(Wt,0),ee=Math.min(ee,mt.count)):At!=null&&(Wt=Math.max(Wt,0),ee=Math.min(ee,At.count));let se=ee-Wt;if(se<0||se===1/0)return;te.setup(U,F,gt,q,mt);let Le,Xt=pt;if(mt!==null&&(Le=Y.get(mt),Xt=zt,Xt.setIndex(Le)),U.isMesh)F.wireframe===!0?(It.setLineWidth(F.wireframeLinewidth*de()),Xt.setMode(D.LINES)):Xt.setMode(D.TRIANGLES);else if(U.isLine){let vt=F.linewidth;vt===void 0&&(vt=1),It.setLineWidth(vt*de()),U.isLineSegments?Xt.setMode(D.LINES):U.isLineLoop?Xt.setMode(D.LINE_LOOP):Xt.setMode(D.LINE_STRIP)}else U.isPoints?Xt.setMode(D.POINTS):U.isSprite&&Xt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let vt=U._multiDrawStarts,dn=U._multiDrawCounts,Yt=U._multiDrawCount,We=mt?Y.get(mt).bytesPerElement:1,ui=_t.get(F).currentProgram.getUniforms();for(let De=0;De<Yt;De++)ui.setValue(D,"_gl_DrawID",De),Xt.render(vt[De]/We,dn[De])}else if(U.isInstancedMesh)Xt.renderInstances(Wt,se,U.count);else if(q.isInstancedBufferGeometry){let vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,dn=Math.min(q.instanceCount,vt);Xt.renderInstances(Wt,se,dn)}else Xt.render(Wt,se)};function Jt(I,P,q){I.transparent===!0&&I.side===Je&&I.forceSinglePass===!1?(I.side=we,I.needsUpdate=!0,Ns(I,P,q),I.side=On,I.needsUpdate=!0,Ns(I,P,q),I.side=Je):Ns(I,P,q)}this.compile=function(I,P,q=null){q===null&&(q=I),p=Ht.get(q),p.init(P),v.push(p),q.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),I!==q&&I.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let F=new Set;return I.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Q=U.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){let gt=Q[ct];Jt(gt,q,U),F.add(gt)}else Jt(Q,q,U),F.add(Q)}),v.pop(),p=null,F},this.compileAsync=function(I,P,q=null){let F=this.compile(I,P,q);return new Promise(U=>{function Q(){if(F.forEach(function(ct){_t.get(ct).currentProgram.isReady()&&F.delete(ct)}),F.size===0){U(I);return}setTimeout(Q,10)}Bt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ge=null;function un(I){Ge&&Ge(I)}function Nc(){Wn.stop()}function qc(){Wn.start()}let Wn=new vh;Wn.setAnimationLoop(un),typeof self!="undefined"&&Wn.setContext(self),this.setAnimationLoop=function(I){Ge=I,z.setAnimationLoop(I),I===null?Wn.stop():Wn.start()},z.addEventListener("sessionstart",Nc),z.addEventListener("sessionend",qc),this.render=function(I,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,P,V),p=Ht.get(I,v.length),p.init(P),v.push(p),St.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(St),xt=this.localClippingEnabled,tt=Z.init(this.clippingPlanes,xt),g=dt.get(I,_.length),g.init(),_.push(g),z.enabled===!0&&z.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&sa(Q,P,-1/0,x.sortObjects)}sa(I,P,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(st,ut),kt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,kt&&Mt.addToRenderList(g,I),this.info.render.frame++,tt===!0&&Z.beginShadows();let q=p.state.shadowsArray;ft.render(q,I,P),tt===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,U=g.transmissive;if(p.setupLights(),P.isArrayCamera){let Q=P.cameras;if(U.length>0)for(let ct=0,gt=Q.length;ct<gt;ct++){let mt=Q[ct];Bc(F,U,I,mt)}kt&&Mt.render(I);for(let ct=0,gt=Q.length;ct<gt;ct++){let mt=Q[ct];Fc(g,I,mt,mt.viewport)}}else U.length>0&&Bc(F,U,I,P),kt&&Mt.render(I),Fc(g,I,P);V!==null&&(S.updateMultisampleRenderTarget(V),S.updateRenderTargetMipmap(V)),I.isScene===!0&&I.onAfterRender(x,I,P),te.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],tt===!0&&Z.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function sa(I,P,q,F){if(I.visible===!1)return;if(I.layers.test(P.layers)){if(I.isGroup)q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(P);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||X.intersectsSprite(I)){F&&Ft.setFromMatrixPosition(I.matrixWorld).applyMatrix4(St);let ct=W.update(I),gt=I.material;gt.visible&&g.push(I,ct,gt,q,Ft.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||X.intersectsObject(I))){let ct=W.update(I),gt=I.material;if(F&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ft.copy(I.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ft.copy(ct.boundingSphere.center)),Ft.applyMatrix4(I.matrixWorld).applyMatrix4(St)),Array.isArray(gt)){let mt=ct.groups;for(let wt=0,Rt=mt.length;wt<Rt;wt++){let At=mt[wt],Wt=gt[At.materialIndex];Wt&&Wt.visible&&g.push(I,ct,Wt,q,Ft.z,At)}}else gt.visible&&g.push(I,ct,gt,q,Ft.z,null)}}let Q=I.children;for(let ct=0,gt=Q.length;ct<gt;ct++)sa(Q[ct],P,q,F)}function Fc(I,P,q,F){let U=I.opaque,Q=I.transmissive,ct=I.transparent;p.setupLightsView(q),tt===!0&&Z.setGlobalState(x.clippingPlanes,q),F&&It.viewport(T.copy(F)),U.length>0&&Ds(U,P,q),Q.length>0&&Ds(Q,P,q),ct.length>0&&Ds(ct,P,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Bc(I,P,q,F){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new Qe(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Ls:Mn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let Q=p.state.transmissionRenderTarget[F.id],ct=F.viewport||T;Q.setSize(ct.z,ct.w);let gt=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(H),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),kt&&Mt.render(q);let mt=x.toneMapping;x.toneMapping=Bn;let wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),tt===!0&&Z.setGlobalState(x.clippingPlanes,F),Ds(I,q,F),S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let At=0,Wt=P.length;At<Wt;At++){let ee=P[At],se=ee.object,Le=ee.geometry,Xt=ee.material,vt=ee.group;if(Xt.side===Je&&se.layers.test(F.layers)){let dn=Xt.side;Xt.side=we,Xt.needsUpdate=!0,Oc(se,q,F,Le,Xt,vt),Xt.side=dn,Xt.needsUpdate=!0,Rt=!0}}Rt===!0&&(S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q))}x.setRenderTarget(gt),x.setClearColor(H,J),wt!==void 0&&(F.viewport=wt),x.toneMapping=mt}function Ds(I,P,q){let F=P.isScene===!0?P.overrideMaterial:null;for(let U=0,Q=I.length;U<Q;U++){let ct=I[U],gt=ct.object,mt=ct.geometry,wt=F===null?ct.material:F,Rt=ct.group;gt.layers.test(q.layers)&&Oc(gt,P,q,mt,wt,Rt)}}function Oc(I,P,q,F,U,Q){I.onBeforeRender(x,P,q,F,U,Q),I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),U.onBeforeRender(x,P,q,F,I,Q),U.transparent===!0&&U.side===Je&&U.forceSinglePass===!1?(U.side=we,U.needsUpdate=!0,x.renderBufferDirect(q,P,F,U,I,Q),U.side=On,U.needsUpdate=!0,x.renderBufferDirect(q,P,F,U,I,Q),U.side=Je):x.renderBufferDirect(q,P,F,U,I,Q),I.onAfterRender(x,P,q,F,U,Q)}function Ns(I,P,q){P.isScene!==!0&&(P=ce);let F=_t.get(I),U=p.state.lights,Q=p.state.shadowsArray,ct=U.state.version,gt=Ct.getParameters(I,U.state,Q,P,q),mt=Ct.getProgramCacheKey(gt),wt=F.programs;F.environment=I.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(I.isMeshStandardMaterial?N:C).get(I.envMap||F.environment),F.envMapRotation=F.environment!==null&&I.envMap===null?P.environmentRotation:I.envMapRotation,wt===void 0&&(I.addEventListener("dispose",Vt),wt=new Map,F.programs=wt);let Rt=wt.get(mt);if(Rt!==void 0){if(F.currentProgram===Rt&&F.lightsStateVersion===ct)return kc(I,gt),Rt}else gt.uniforms=Ct.getUniforms(I),I.onBeforeCompile(gt,x),Rt=Ct.acquireProgram(gt,mt),wt.set(mt,Rt),F.uniforms=gt.uniforms;let At=F.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(At.clippingPlanes=Z.uniform),kc(I,gt),F.needsLights=cu(I),F.lightsStateVersion=ct,F.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Rt,F.uniformsList=null,Rt}function zc(I){if(I.uniformsList===null){let P=I.currentProgram.getUniforms();I.uniformsList=Di.seqWithValue(P.seq,I.uniforms)}return I.uniformsList}function kc(I,P){let q=_t.get(I);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function au(I,P,q,F,U){P.isScene!==!0&&(P=ce),S.resetTextureUnits();let Q=P.fog,ct=F.isMeshStandardMaterial?P.environment:null,gt=V===null?x.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Yi,mt=(F.isMeshStandardMaterial?N:C).get(F.envMap||ct),wt=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Rt=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),At=!!q.morphAttributes.position,Wt=!!q.morphAttributes.normal,ee=!!q.morphAttributes.color,se=Bn;F.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(se=x.toneMapping);let Le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xt=Le!==void 0?Le.length:0,vt=_t.get(F),dn=p.state.lights;if(tt===!0&&(xt===!0||I!==y)){let Oe=I===y&&F.id===M;Z.setState(F,I,Oe)}let Yt=!1;F.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==dn.state.version||vt.outputColorSpace!==gt||U.isBatchedMesh&&vt.batching===!1||!U.isBatchedMesh&&vt.batching===!0||U.isBatchedMesh&&vt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&vt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&vt.instancing===!1||!U.isInstancedMesh&&vt.instancing===!0||U.isSkinnedMesh&&vt.skinning===!1||!U.isSkinnedMesh&&vt.skinning===!0||U.isInstancedMesh&&vt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&vt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&vt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&vt.instancingMorph===!1&&U.morphTexture!==null||vt.envMap!==mt||F.fog===!0&&vt.fog!==Q||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Z.numPlanes||vt.numIntersection!==Z.numIntersection)||vt.vertexAlphas!==wt||vt.vertexTangents!==Rt||vt.morphTargets!==At||vt.morphNormals!==Wt||vt.morphColors!==ee||vt.toneMapping!==se||vt.morphTargetsCount!==Xt)&&(Yt=!0):(Yt=!0,vt.__version=F.version);let We=vt.currentProgram;Yt===!0&&(We=Ns(F,P,U));let ui=!1,De=!1,$i=!1,re=We.getUniforms(),sn=vt.uniforms;if(It.useProgram(We.program)&&(ui=!0,De=!0,$i=!0),F.id!==M&&(M=F.id,De=!0),ui||y!==I){It.buffers.depth.getReversed()?(rt.copy(I.projectionMatrix),Zu(rt),Qu(rt),re.setValue(D,"projectionMatrix",rt)):re.setValue(D,"projectionMatrix",I.projectionMatrix),re.setValue(D,"viewMatrix",I.matrixWorldInverse);let wn=re.map.cameraPosition;wn!==void 0&&wn.setValue(D,Tt.setFromMatrixPosition(I.matrixWorld)),Ot.logarithmicDepthBuffer&&re.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&re.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,De=!0,$i=!0)}if(U.isSkinnedMesh){re.setOptional(D,U,"bindMatrix"),re.setOptional(D,U,"bindMatrixInverse");let Oe=U.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),re.setValue(D,"boneTexture",Oe.boneTexture,S))}U.isBatchedMesh&&(re.setOptional(D,U,"batchingTexture"),re.setValue(D,"batchingTexture",U._matricesTexture,S),re.setOptional(D,U,"batchingIdTexture"),re.setValue(D,"batchingIdTexture",U._indirectTexture,S),re.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(D,"batchingColorTexture",U._colorsTexture,S));let ts=q.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&bt.update(U,q,We),(De||vt.receiveShadow!==U.receiveShadow)&&(vt.receiveShadow=U.receiveShadow,re.setValue(D,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(sn.envMap.value=mt,sn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&P.environment!==null&&(sn.envMapIntensity.value=P.environmentIntensity),De&&(re.setValue(D,"toneMappingExposure",x.toneMappingExposure),vt.needsLights&&ou(sn,$i),Q&&F.fog===!0&&at.refreshFogUniforms(sn,Q),at.refreshMaterialUniforms(sn,F,k,$,p.state.transmissionRenderTarget[I.id]),Di.upload(D,zc(vt),sn,S)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Di.upload(D,zc(vt),sn,S),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&re.setValue(D,"center",U.center),re.setValue(D,"modelViewMatrix",U.modelViewMatrix),re.setValue(D,"normalMatrix",U.normalMatrix),re.setValue(D,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let Oe=F.uniformsGroups;for(let wn=0,Tn=Oe.length;wn<Tn;wn++){let Hc=Oe[wn];R.update(Hc,We),R.bind(Hc,We)}}return We}function ou(I,P){I.ambientLightColor.needsUpdate=P,I.lightProbe.needsUpdate=P,I.directionalLights.needsUpdate=P,I.directionalLightShadows.needsUpdate=P,I.pointLights.needsUpdate=P,I.pointLightShadows.needsUpdate=P,I.spotLights.needsUpdate=P,I.spotLightShadows.needsUpdate=P,I.rectAreaLights.needsUpdate=P,I.hemisphereLights.needsUpdate=P}function cu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(I,P,q){_t.get(I.texture).__webglTexture=P,_t.get(I.depthTexture).__webglTexture=q;let F=_t.get(I);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,P){let q=_t.get(I);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(I,P=0,q=0){V=I,b=P,E=q;let F=!0,U=null,Q=!1,ct=!1;if(I){let mt=_t.get(I);if(mt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(D.FRAMEBUFFER,null),F=!1;else if(mt.__webglFramebuffer===void 0)S.setupRenderTarget(I);else if(mt.__hasExternalTextures)S.rebindTextures(I,_t.get(I.texture).__webglTexture,_t.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let At=I.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&_t.has(At)&&(I.width!==At.image.width||I.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(I)}}let wt=I.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ct=!0);let Rt=_t.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Rt[P])?U=Rt[P][q]:U=Rt[P],Q=!0):I.samples>0&&S.useMultisampledRTT(I)===!1?U=_t.get(I).__webglMultisampledFramebuffer:Array.isArray(Rt)?U=Rt[q]:U=Rt,T.copy(I.viewport),O.copy(I.scissor),B=I.scissorTest}else T.copy(yt).multiplyScalar(k).floor(),O.copy(qt).multiplyScalar(k).floor(),B=$t;if(It.bindFramebuffer(D.FRAMEBUFFER,U)&&F&&It.drawBuffers(I,U),It.viewport(T),It.scissor(O),It.setScissorTest(B),Q){let mt=_t.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,q)}else if(ct){let mt=_t.get(I.texture),wt=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,q||0,wt)}M=-1},this.readRenderTargetPixels=function(I,P,q,F,U,Q,ct){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=_t.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){It.bindFramebuffer(D.FRAMEBUFFER,gt);try{let mt=I.texture,wt=mt.format,Rt=mt.type;if(!Ot.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=I.width-F&&q>=0&&q<=I.height-U&&D.readPixels(P,q,F,U,Lt.convert(wt),Lt.convert(Rt),Q)}finally{let mt=V!==null?_t.get(V).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(I,P,q,F,U,Q,ct){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=_t.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){let mt=I.texture,wt=mt.format,Rt=mt.type;if(!Ot.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=I.width-F&&q>=0&&q<=I.height-U){It.bindFramebuffer(D.FRAMEBUFFER,gt);let At=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(P,q,F,U,Lt.convert(wt),Lt.convert(Rt),0);let Wt=V!==null?_t.get(V).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,Wt);let ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ju(D,ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(At),D.deleteSync(ee),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,P=null,q=0){I.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,I=arguments[1]);let F=Math.pow(2,-q),U=Math.floor(I.image.width*F),Q=Math.floor(I.image.height*F),ct=P!==null?P.x:0,gt=P!==null?P.y:0;S.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,ct,gt,U,Q),It.unbindTexture()},this.copyTextureToTexture=function(I,P,q=null,F=null,U=0){I.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,I=arguments[1],P=arguments[2],U=arguments[3]||0,q=null);let Q,ct,gt,mt,wt,Rt,At,Wt,ee,se=I.isCompressedTexture?I.mipmaps[U]:I.image;q!==null?(Q=q.max.x-q.min.x,ct=q.max.y-q.min.y,gt=q.isBox3?q.max.z-q.min.z:1,mt=q.min.x,wt=q.min.y,Rt=q.isBox3?q.min.z:0):(Q=se.width,ct=se.height,gt=se.depth||1,mt=0,wt=0,Rt=0),F!==null?(At=F.x,Wt=F.y,ee=F.z):(At=0,Wt=0,ee=0);let Le=Lt.convert(P.format),Xt=Lt.convert(P.type),vt;P.isData3DTexture?(S.setTexture3D(P,0),vt=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(S.setTexture2DArray(P,0),vt=D.TEXTURE_2D_ARRAY):(S.setTexture2D(P,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let dn=D.getParameter(D.UNPACK_ROW_LENGTH),Yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),We=D.getParameter(D.UNPACK_SKIP_PIXELS),ui=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);let $i=I.isDataArrayTexture||I.isData3DTexture,re=P.isDataArrayTexture||P.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let sn=_t.get(I),ts=_t.get(P),Oe=_t.get(sn.__renderTarget),wn=_t.get(ts.__renderTarget);It.bindFramebuffer(D.READ_FRAMEBUFFER,Oe.__webglFramebuffer),It.bindFramebuffer(D.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let Tn=0;Tn<gt;Tn++)$i&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(I).__webglTexture,U,Rt+Tn),I.isDepthTexture?(re&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(P).__webglTexture,U,ee+Tn),D.blitFramebuffer(mt,wt,Q,ct,At,Wt,Q,ct,D.DEPTH_BUFFER_BIT,D.NEAREST)):re?D.copyTexSubImage3D(vt,U,At,Wt,ee+Tn,mt,wt,Q,ct):D.copyTexSubImage2D(vt,U,At,Wt,ee+Tn,mt,wt,Q,ct);It.bindFramebuffer(D.READ_FRAMEBUFFER,null),It.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else re?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(vt,U,At,Wt,ee,Q,ct,gt,Le,Xt,se.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,U,At,Wt,ee,Q,ct,gt,Le,se.data):D.texSubImage3D(vt,U,At,Wt,ee,Q,ct,gt,Le,Xt,se):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,At,Wt,Q,ct,Le,Xt,se.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,At,Wt,se.width,se.height,Le,se.data):D.texSubImage2D(D.TEXTURE_2D,U,At,Wt,Q,ct,Le,Xt,se);D.pixelStorei(D.UNPACK_ROW_LENGTH,dn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,ui),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),U===0&&P.generateMipmaps&&D.generateMipmap(vt),It.unbindTexture()},this.copyTextureToTexture3D=function(I,P,q=null,F=null,U=0){return I.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,F=arguments[1]||null,I=arguments[2],P=arguments[3],U=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,P,q,F,U)},this.initRenderTarget=function(I){_t.get(I).__webglFramebuffer===void 0&&S.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?S.setTextureCube(I,0):I.isData3DTexture?S.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?S.setTexture2DArray(I,0):S.setTexture2D(I,0),It.unbindTexture()},this.resetState=function(){b=0,E=0,V=null,It.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var Pr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xs=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ho=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=So,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Te=new w,Lr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gi=class extends Sn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bi,rs=new w,Ei=new w,wi=new w,Ti=new nt,as=new nt,Sh=new oe,sr=new w,os=new w,rr=new w,Hl=new nt,Da=new nt,Gl=new nt,Cs=class extends _e{constructor(t=new Gi){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ho(e,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new Lr(n,3,0,!1)),bi.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=bi,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),Sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-wi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ar(sr.set(-.5,-.5,0),wi,a,Ei,s,r),ar(os.set(.5,-.5,0),wi,a,Ei,s,r),ar(rr.set(.5,.5,0),wi,a,Ei,s,r),Hl.set(0,0),Da.set(1,0),Gl.set(1,1);let o=t.ray.intersectTriangle(sr,os,rr,!1,rs);if(o===null&&(ar(os.set(-.5,.5,0),wi,a,Ei,s,r),Da.set(0,1),o=t.ray.intersectTriangle(sr,rr,os,!1,rs),o===null))return;let c=t.ray.origin.distanceTo(rs);c<t.near||c>t.far||e.push({distance:c,point:rs.clone(),uv:qn.getInterpolation(rs,sr,os,rr,Hl,Da,Gl,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ar(i,t,e,n,s,r){Ti.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(as.x=r*Ti.x-s*Ti.y,as.y=s*Ti.x+r*Ti.y):as.copy(Ti),i.copy(t),i.x+=as.x,i.y+=as.y,i.applyMatrix4(Sh)}var vs=class extends Sn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wl=new oe,Go=new _r,or=new ki,cr=new w,Ur=class extends _e{constructor(t=new Ce,e=new vs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;Wl.copy(s).invert(),Go.copy(t.ray).applyMatrix4(Wl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,A=d;m<A;m++){let g=l.getX(m);cr.fromBufferAttribute(u,g),Xl(cr,g,c,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,A=d;m<A;m++)cr.fromBufferAttribute(u,m),Xl(cr,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xl(i,t,e,n,s,r,a){let o=Go.distanceSqToPoint(i);if(o<e){let c=new w;Go.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Dr=class extends Ue{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new nt:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,s=[],r=[],a=[],o=new w,c=new oe;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ye(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ys=class extends ke{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wo=class extends ys{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var lr=new w,Na=new _c,qa=new _c,Fa=new _c,Xo=class extends ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(lr.subVectors(s[0],s[1]).add(s[0]),l=lr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),A=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),Na.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,A,g),qa.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,A,g),Fa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),qa.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Fa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Na.calc(c),qa.calc(c),Fa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yl(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Ym(i,t){let e=1-i;return e*e*t}function Km(i,t){return 2*(1-i)*i*t}function Jm(i,t){return i*i*t}function us(i,t,e,n){return Ym(i,t)+Km(i,e)+Jm(i,n)}function jm(i,t){let e=1-i;return e*e*e*t}function Zm(i,t){let e=1-i;return 3*e*e*i*t}function Qm(i,t){return 3*(1-i)*i*i*t}function $m(i,t){return i*i*i*t}function ds(i,t,e,n,s){return jm(i,t)+Zm(i,e)+Qm(i,n)+$m(i,s)}var Nr=class extends ke{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,s.x,r.x,a.x,o.x),ds(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yo=class extends ke{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,s.x,r.x,a.x,o.x),ds(t,s.y,r.y,a.y,o.y),ds(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qr=class extends ke{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends ke{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends ke{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(us(t,s.x,r.x,a.x),us(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends ke{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(us(t,s.x,r.x,a.x),us(t,s.y,r.y,a.y),us(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Yl(o,c.x,l.x,h.x,u.x),Yl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},Kl=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:Xo,CubicBezierCurve:Nr,CubicBezierCurve3:Yo,EllipseCurve:ys,LineCurve:qr,LineCurve3:Ko,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:Jo,SplineCurve:Br}),jo=class extends ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}},_s=class extends jo{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qr(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Fr(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Nr(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new ys(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zo=class i extends Ce{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new w,f=new nt,d=new w,m=new w,A=new w,g=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-g,d.z=p*0,A.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(A.x,A.y,A.z);break;default:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=A.x,d.y+=A.y,d.z+=A.z,d.normalize(),c.push(d.x,d.y,d.z),A.copy(m)}for(let _=0;_<=e;_++){let v=n+_*h*s,x=Math.sin(v),L=Math.cos(v);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*L,a.push(u.x,u.y,u.z),f.x=_/e,f.y=b/(t.length-1),o.push(f.x,f.y);let E=c[3*b+0]*x,V=c[3*b+1],M=c[3*b+0]*L;l.push(E,V,M)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let x=v+_*t.length,L=x,b=x+t.length,E=x+t.length+1,V=x+1;r.push(L,b,V),r.push(E,V,b)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("uv",new Kt(o,2)),this.setAttribute("normal",new Kt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Or=class i extends Zo{constructor(t=1,e=1,n=4,s=8){let r=new _s;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Is=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new w,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tn=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,A=[],g=n/2,p=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(d,2));function _(){let x=new w,L=new w,b=0,E=(e-t)/n;for(let V=0;V<=r;V++){let M=[],y=V/r,T=y*(e-t)+t;for(let O=0;O<=s;O++){let B=O/s,H=B*c+o,J=Math.sin(H),G=Math.cos(H);L.x=T*J,L.y=-y*n+g,L.z=T*G,u.push(L.x,L.y,L.z),x.set(J,E,G).normalize(),f.push(x.x,x.y,x.z),d.push(B,1-y),M.push(m++)}A.push(M)}for(let V=0;V<s;V++)for(let M=0;M<r;M++){let y=A[M][V],T=A[M+1][V],O=A[M+1][V+1],B=A[M][V+1];(t>0||M!==0)&&(h.push(y,T,B),b+=3),(e>0||M!==r-1)&&(h.push(T,O,B),b+=3)}l.addGroup(p,b,0),p+=b}function v(x){let L=m,b=new nt,E=new w,V=0,M=x===!0?t:e,y=x===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*y,0),f.push(0,y,0),d.push(.5,.5),m++;let T=m;for(let O=0;O<=s;O++){let H=O/s*c+o,J=Math.cos(H),G=Math.sin(H);E.x=M*G,E.y=g*y,E.z=M*J,u.push(E.x,E.y,E.z),f.push(0,y,0),b.x=J*.5+.5,b.y=G*.5*y+.5,d.push(b.x,b.y),m++}for(let O=0;O<s;O++){let B=L+O,H=T+O;x===!0?h.push(H,H+1,B):h.push(H+1,H,B),V+=3}l.addGroup(p,V,x===!0?1:2),p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ri=class i extends tn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ms=class i extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new w,x=new w,L=new w;for(let b=0;b<e.length;b+=3)d(e[b+0],v),d(e[b+1],x),d(e[b+2],L),c(v,x,L,_)}function c(_,v,x,L){let b=L+1,E=[];for(let V=0;V<=b;V++){E[V]=[];let M=_.clone().lerp(x,V/b),y=v.clone().lerp(x,V/b),T=b-V;for(let O=0;O<=T;O++)O===0&&V===b?E[V][O]=M:E[V][O]=M.clone().lerp(y,O/T)}for(let V=0;V<b;V++)for(let M=0;M<2*(b-V)-1;M++){let y=Math.floor(M/2);M%2===0?(f(E[V][y+1]),f(E[V+1][y]),f(E[V][y])):(f(E[V][y+1]),f(E[V+1][y+1]),f(E[V+1][y]))}}function l(_){let v=new w;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(_),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let _=new w;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let x=g(_)/2/Math.PI+.5,L=p(_)/Math.PI+.5;a.push(x,1-L)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],x=a[_+2],L=a[_+4],b=Math.max(v,x,L),E=Math.min(v,x,L);b>.9&&E<.1&&(v<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),L<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,v){let x=_*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function m(){let _=new w,v=new w,x=new w,L=new w,b=new nt,E=new nt,V=new nt;for(let M=0,y=0;M<r.length;M+=9,y+=6){_.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),b.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),V.set(a[y+4],a[y+5]),L.copy(_).add(v).add(x).divideScalar(3);let T=g(L);A(b,y+0,_,T),A(E,y+2,v,T),A(V,y+4,x,T)}}function A(_,v,x,L){L<0&&_.x===1&&(a[v]=_.x-1),x.x===0&&x.z===0&&(a[v]=L/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},zr=class i extends Ms{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ss=class extends _s{constructor(t){super(t),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new _s().fromJSON(s))}return this}},tA={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=bh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=rA(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return bs(r,a,e,o,c,d,0),a}};function bh(i,t,e,n,s){let r,a;if(s===mA(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Jl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Jl(r,i[r],i[r+1],a);return a&&Zr(a,a.next)&&(ws(a),a=a.next),a}function ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zr(e,e.next)||le(e.prev,e,e.next)===0)){if(ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&hA(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?nA(i,n,s,r):eA(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ws(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=iA(ai(i),t,e),bs(i,t,e,n,s,r,2)):a===2&&sA(i,t,e,n,s,r):bs(ai(i),t,e,n,s,r,1);break}}}function eA(i){let t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Ri(s,o,r,c,a,l,m.x,m.y)&&le(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function nA(i,t,e,n){let s=i.prev,r=i,a=i.next;if(le(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,A=o>c?o>l?o:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,p=Qo(d,m,t,e,n),_=Qo(A,g,t,e,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=_;){if(v.x>=d&&v.x<=A&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Ri(o,h,c,u,l,f,v.x,v.y)&&le(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Ri(o,h,c,u,l,f,x.x,x.y)&&le(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=A&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Ri(o,h,c,u,l,f,v.x,v.y)&&le(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Ri(o,h,c,u,l,f,x.x,x.y)&&le(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function iA(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Zr(s,r)&&Eh(s,n,n.next,r)&&Es(s,r)&&Es(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ws(n),ws(n.next),n=i=r),n=n.next}while(n!==i);return ai(n)}function sA(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fA(a,o)){let c=wh(a,o);a=ai(a,a.next),c=ai(c,c.next),bs(a,t,e,n,s,r,0),bs(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function rA(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=bh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(dA(l));for(s.sort(aA),r=0;r<s.length;r++)e=oA(s[r],e);return e}function aA(i,t){return i.x-t.x}function oA(i,t){let e=cA(i,t);if(!e)return t;let n=wh(e,i);return ai(n,n.next),ai(e,e.next)}function cA(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ri(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Es(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&lA(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function lA(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function hA(i,t,e,n){let s=i;do s.z===0&&(s.z=Qo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,uA(s)}function uA(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Qo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function dA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ri(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function fA(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!pA(i,t)&&(Es(i,t)&&Es(t,i)&&gA(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||Zr(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zr(i,t){return i.x===t.x&&i.y===t.y}function Eh(i,t,e,n){let s=ur(le(i,t,e)),r=ur(le(i,t,n)),a=ur(le(e,n,i)),o=ur(le(e,n,t));return!!(s!==r&&a!==o||s===0&&hr(i,e,t)||r===0&&hr(i,n,t)||a===0&&hr(e,i,n)||o===0&&hr(e,t,n))}function hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ur(i){return i>0?1:i<0?-1:0}function pA(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Eh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Es(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function gA(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wh(i,t){let e=new $o(i.i,i.x,i.y),n=new $o(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jl(i,t,e,n){let s=new $o(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $o(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mA(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var fs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jl(t),Zl(n,t);let a=t.length;e.forEach(jl);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Zl(n,e[c]);let o=tA.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function jl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ts=class i extends Ms{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},kr=class i extends Ms{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Hr=class i extends Ce{constructor(t=new Ss([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;fs.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let _=m[g];fs.isClockWise(_)===!0&&(m[g]=_.reverse())}let A=fs.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let _=m[g];d=d.concat(_)}for(let g=0,p=d.length;g<p;g++){let _=d[g];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,p=A.length;g<p;g++){let _=A[g],v=_[0]+u,x=_[1]+u,L=_[2]+u;n.push(v,x,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return AA(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function AA(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var oi=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new w,f=new w,d=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let _=[],v=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){let b=L/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),g.push(b+x,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let v=h[p][_+1],x=h[p][_],L=h[p+1][_],b=h[p+1][_+1];(p!==0||a>0)&&d.push(v,x,b),(p!==n-1||c<Math.PI)&&d.push(x,L,b)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(A,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wi=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new w,u=new w,f=new w;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let A=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let A=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,_=(s+1)*d+m;a.push(A,g,_),a.push(g,p,_)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var en=class extends Sn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function dr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tc=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,o=2*e-n;break;case jc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jc:a=t,c=2*n-e;break;case jc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-f*g+2*f*A-f*m,_=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*A+.5*m,x=d*g-d*A;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+_*a[l+L]+v*a[c+L]+x*a[u+L];return r}},ec=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},nc=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xr:e=this.InterpolantFactoryMethodDiscrete;break;case Mo:e=this.InterpolantFactoryMethodLinear;break;case aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&xA(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===aa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Mo;var ci=class extends nn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=xr;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends nn{};ic.prototype.ValueTypeName="color";var sc=class extends nn{};sc.prototype.ValueTypeName="number";var rc=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)kn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Gr=class extends nn{InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends nn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=xr;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends nn{};ac.prototype.ValueTypeName="vector";var Ql={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},oc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},CA=new oc,Vs=class{constructor(t){this.manager=t!==void 0?t:CA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var cc=class extends Vs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ql.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=ms("img");function c(){h(),Ql.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Wr=class extends Vs{constructor(t){super(t)}load(t,e,n,s){let r=new Ue,a=new cc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Xr=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rs=class extends Xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ba=new oe,$l=new w,th=new w,lc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$l.setFromMatrixPosition(t.matrixWorld),e.position.copy($l),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var hc=class extends lc{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new hc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function eh(){return performance.now()}var Ic="\\[\\]\\.:\\/",vA=new RegExp("["+Ic+"]","g"),Mc="[^"+Ic+"]",yA="[^"+Ic.replace("\\.","")+"]",_A=/((?:WC+[\/:])*)/.source.replace("WC",Mc),IA=/(WCOD+)?/.source.replace("WCOD",yA),MA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),SA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),bA=new RegExp("^"+_A+IA+MA+SA+"$"),EA=["material","materials","bones","map"],uc=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vA,"")}static parseTrackName(t){let e=bA.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);EA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=uc;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HA=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);var hn=[-3.6,-1.8,0,1.8,3.6],hi=[{id:1,len:520,time:60,gap:[34,46],speed:[4.5,6],logs:.15,orbs:3,pads:5,rival:.92},{id:2,len:555,time:60,gap:[28,40],speed:[5,7],logs:.3,orbs:3,pads:5,rival:.97},{id:3,len:585,time:60,gap:[24,34],speed:[6,8],logs:.4,orbs:4,pads:6,rival:1.02},{id:4,len:615,time:62,gap:[22,31],speed:[6.5,8.5],logs:.45,orbs:4,pads:6,rival:1.04},{id:5,len:645,time:64,gap:[20,29],speed:[7,9],logs:.5,orbs:4,pads:7,rival:1.06}],Vh=10.4,wA=1.6,TA=1.4,VA=1.3,RA=7;function Rh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var $r=[{id:"you",name:["\u0623\u0646\u062A","You"]},{id:"teal",name:["\u0644\u064A\u0644\u0649","Lila"]},{id:"yellow",name:["\u0639\u0645\u0651 \u0635\u0627\u0628\u0631","Saber"]},{id:"purple",name:["\u0645\u0631\u064A\u0645","Mariam"]}];function PA(i,t){let e=Rh(t),n=[];for(let o=30;o<i.len-30;o+=22+e()*18){let c=hn[Math.floor(e()*hn.length)],l=4+Math.floor(e()*2),h=e()<.4?e()<.5?-.45:.45:0;for(let u=0;u<l;u++)n.push({s:o+u*2.4,x:Math.max(-4.6+.6,Math.min(4.6-.6,c+h*u)),got:!1})}let s=[];for(let o=0;o<i.pads;o++)s.push({s:60+(i.len-120)*(o+e()*.6)/i.pads,x:hn[Math.floor(e()*hn.length)]});let r=[];for(let o=0;o<i.orbs;o++)r.push({s:90+(i.len-160)*(o+.3+e()*.4)/i.orbs,x:hn[Math.floor(e()*hn.length)],kind:o%2?"shield":"tailwind",got:!1});let a=[.25,.5,.75].map(o=>o*i.len);return{crystals:n,pads:s,orbs:r,checks:a}}var Qr=class{constructor(t,e={}){var n;this.course=hi[t],this.easy=!!e.easy,this.seed=(n=e.seed)!=null?n:1,this.r=Rh(this.seed*977+t),this.lay=PA(this.course,this.seed+t*31),this.time=this.course.time+(this.easy?15:0),this.t=0,this.state="count",this.countdown=3,this.events=[],this.runners=$r.map((s,r)=>({id:s.id,me:r===0,s:0,x:[0,-2.2,2.2,-.9][r],want:[0,-2.2,2.2,-.9][r],score:0,lives:3,down:0,safe:0,boost:0,wind:0,shield:0,pace:r===0?1:this.course.rival*[1,.99,.965,.98][r]*(this.easy?.9:1),finished:0,dodge:new Set})),this.me=this.runners[0],this.hazards=[],this.nextHazard=50,this.hid=0,this.lastRank=1,this.place=0}get remaining(){return Math.max(0,this.time-this.t)}steer(t){this.me.want=Math.max(-4.6+.4,Math.min(4.6-.4,t))}rankOf(t){return[...this.runners].sort((n,s)=>s.finished&&n.finished?n.finished-s.finished:s.finished?1:n.finished?-1:s.s-n.s).indexOf(t)+1}_emit(t,e={}){this.events.push({type:t,...e})}step(t){if(this.events=[],this.state==="count"){let s=Math.ceil(this.countdown);return this.countdown-=t,Math.ceil(this.countdown)!==s&&this.countdown>0&&this._emit("count",{n:Math.ceil(this.countdown)}),this.countdown<=0&&(this.state="run",this._emit("go")),this.events}if(this.state!=="run")return this.events;this.t+=t;let e=this.course;if(this.me.s+70>this.nextHazard&&this.nextHazard<e.len-25){let s=this._hazardLane(),r=this.r()<e.logs?"log":this.r()<.5?"boulder":"snowball",a=(e.speed[0]+this.r()*(e.speed[1]-e.speed[0]))*(this.easy?.7:1),o=r==="log"?.55:r==="boulder"?.75+this.r()*.25:.6+this.r()*.25,c=r==="log"?Math.max(-4.6+1.4,Math.min(4.6-1.4,s)):s;if(this.hazards.push({id:++this.hid,kind:r,s:this.nextHazard,x:c,v:a,r:o,half:r==="log"?1.35:o,roll:0}),this.nextHazard+=(e.gap[0]+this.r()*(e.gap[1]-e.gap[0]))*(this.easy?1.5:1),!this.easy&&this.r()<.3&&this.course.id>1){let l=hn.filter(u=>Math.abs(u-c)>2.5),h=l[Math.floor(this.r()*l.length)];this.hazards.push({id:++this.hid,kind:"snowball",s:this.nextHazard-8,x:h,v:a*.9,r:.75,half:.75,roll:0})}this._emit("spawn")}for(let s of this.hazards)s.s-=s.v*t,s.roll+=s.v*t/s.r;this.hazards=this.hazards.filter(s=>s.s>-20&&s.s>this.runners.reduce((r,a)=>Math.min(r,a.s),1/0)-25);for(let s of this.runners)this._move(s,t);let n=this.rankOf(this.me);return n<this.lastRank&&this.me.s>15&&!this.me.finished&&(this.me.score+=20,this._emit("overtake",{rank:n})),this.lastRank=n,this.me.finished&&this.state==="run"?(this.state="won",this.place=this.rankOf(this.me),this._emit("finish",{place:this.place})):this.me.lives<=0&&this.me.down<=0?(this.state="out",this._emit("out")):this.t>=this.time&&(this.state="timeup",this.place=this.rankOf(this.me),this._emit("timeup",{place:this.place})),this.events}_hazardLane(){if(this.r()<.55){let t=hn.filter(e=>Math.abs(e-this.me.x)<2.2);return t[Math.floor(this.r()*t.length)]}return hn[Math.floor(this.r()*hn.length)]}_move(t,e){if(t.finished){t.s+=Vh*.3*e;return}if(t.safe=Math.max(0,t.safe-e),t.boost=Math.max(0,t.boost-e),t.wind=Math.max(0,t.wind-e),t.shield=Math.max(0,t.shield-e),t.down>0){t.down-=e,t.down<=0&&(t.safe=1.6,t.me&&this._emit("up"));return}t.me||this._ai(t);let n=Math.min(1,e*(t.me?12:5));t.x+=(t.want-t.x)*n;let s=(t.boost>0?wA:1)*(t.wind>0?TA:1);if(t.s+=Vh*t.pace*s*e,t.s>=this.course.len){t.s=this.course.len,t.finished=this.t,t.me&&this._emit("summit");return}for(let r of this.lay.crystals)Math.abs(r.s-t.s)<.9&&Math.abs(r.x-t.x)<.75&&(t.me&&!r.got?(r.got=!0,t.score+=10,this._emit("crystal",{x:r.x,s:r.s})):!t.me&&!r[`g_${t.id}`]&&(r[`g_${t.id}`]=!0,t.score+=10));for(let r of this.lay.pads)Math.abs(r.s-t.s)<1.1&&Math.abs(r.x-t.x)<.95&&t.boost<1.3&&(t.boost=1.5,t.me&&this._emit("boost"));for(let r of this.lay.orbs)!r.got&&Math.abs(r.s-t.s)<1&&Math.abs(r.x-t.x)<.9&&t.me&&(r.got=!0,r.kind==="tailwind"?t.wind=4:t.shield=6,this._emit(r.kind));for(let r of this.hazards){let a=Math.abs(r.s-t.s),o=Math.abs(r.x-t.x),c=r.half+.32;if(a<r.r*.8+.3&&o<c){if(t.safe>0||r[`hit_${t.id}`])continue;if(r[`hit_${t.id}`]=!0,t.shield>0){t.shield=0,t.safe=1,t.me&&this._emit("blocked",{kind:r.kind});continue}t.down=VA,t.s=Math.max(0,t.s-RA),t.boost=0,t.wind=0,t.me&&(this.easy||t.lives--,this._emit("wipeout",{kind:r.kind,lives:t.lives}))}else t.me&&a<1.2&&o<c+1.1&&r.s<t.s&&!t.dodge.has(r.id)&&!r[`hit_${t.id}`]&&(t.dodge.add(r.id),t.score+=5,this._emit("dodge"))}}_ai(t){let e=this.hazards.find(s=>s.s>t.s&&s.s-t.s<16&&Math.abs(s.x-t.x)<s.half+.9);if(e){if((t.sees===void 0||t.sees!==e.id)&&(t.sees=e.id,t.notice=this.r()<(this.easy?.75:.85)),t.notice){let s=e.x-e.half-1,r=e.x+e.half+1;t.want=Math.abs(s-t.x)<Math.abs(r-t.x)&&s>-4.6+.4?s:r<4.6-.4?r:s}return}let n=this.lay.crystals.find(s=>s.s>t.s+2&&s.s<t.s+14&&!s[`g_${t.id}`]);n&&(t.want=n.x)}};function Ph(i){let t=i&&typeof i=="object"?i:{},e={};if(t.best&&typeof t.best=="object")for(let[n,s]of Object.entries(t.best))Number(s)>=1&&Number(s)<=4&&(e[n]=Math.round(Number(s)));return{unlocked:Math.max(1,Math.min(hi.length,Math.max(Math.round(Number(t.unlocked)||1),...Object.keys(e).map(n=>Number(n)+1)))),best:e,crystals:Math.max(0,Math.min(999999,Math.round(Number(t.crystals)||0))),muted:!!t.muted}}var Sc=new Map;function ne(i,t={}){let e=`${i}|${JSON.stringify(t)}`;return Sc.has(e)||Sc.set(e,new en({color:i,roughness:.75,metalness:0,...t})),Sc.get(e)}function bc(i,t,e,n,s=0,r=0,a=0){let o=new Et(new Hn(i,t,e),n);return o.position.set(s,r,a),o.castShadow=!0,o}function Fe(i,t,e=0,n=0,s=0,r=1,a=1,o=1,c=16){let l=new Et(new oi(i,c,Math.max(8,c-4)),t);return l.position.set(e,n,s),l.scale.set(r,a,o),l.castShadow=!0,l}function Ji(i,t,e,n=0,s=0,r=0){let a=new Et(new Or(i,t,6,12),e);return a.position.set(n,s,r),a.castShadow=!0,a}var ji=[{jacket:13777450,shoulder:3817032,pants:2237484,skin:15251604,hair:2759700,hat:null,beard:!1,girl:!1,card:["#e85a3a","#a8321e"]},{jacket:2074778,shoulder:1473136,pants:15527668,skin:15780008,hair:5913122,hat:16053496,beard:!1,girl:!0,card:["#2ab8a8","#167a70"]},{jacket:14196778,shoulder:11565588,pants:3814440,skin:14197882,hair:6964260,hat:5913124,beard:!0,girl:!1,card:["#e8b83a","#a87a14"]},{jacket:8014552,shoulder:5911208,pants:2761792,skin:15780008,hair:3809812,hat:13150448,beard:!1,girl:!0,card:["#8a5ae8","#5a32a8"]}];function Ec(i){let t=new Qt,e=new Qt;e.position.y=.95,t.add(e);let n=ne(i.jacket,{roughness:.55}),s=ne(i.shoulder,{roughness:.6}),r=ne(i.pants,{roughness:.8}),a=ne(i.skin,{roughness:.7}),o=ne(i.hair,{roughness:.9}),c=ne(2763312,{roughness:.6}),l=ne(2500140,{roughness:.7}),h=[];for(let _ of[-1,1]){let v=new Qt;v.position.set(_*.12,0,0),v.add(Ji(.09,.32,r,0,-.22,0));let x=new Qt;x.position.set(0,-.44,0),x.add(Ji(.08,.3,r,0,-.2,0)),x.add(bc(.15,.13,.28,c,0,-.44,.05)),x.add(bc(.16,.035,.3,ne(14211808),0,-.51,.05)),v.add(x),e.add(v),h.push({hip:v,knee:x})}let u=new Qt;u.position.y=.05,e.add(u);let f=Ji(.22,.34,n,0,.3,0);f.scale.set(1.05,1,.78),u.add(f);for(let _ of[.16,.32]){let v=new Et(new Wi(.205,.022,6,22),n);v.rotation.x=Math.PI/2,v.scale.set(1.08,.82,1),v.position.y=_,u.add(v)}let d=Ji(.2,.12,s,0,.5,0);d.scale.set(1.15,.8,.82),u.add(d),u.add(bc(.025,.42,.02,ne(1579036),0,.3,.175));let m=new Et(new tn(.1,.13,.12,14),s);m.position.y=.66,u.add(m);let A=new Qt;A.position.set(0,.82,.01),u.add(A),A.add(Fe(.13,a,0,0,0,.92,1.05,.98)),A.add(Fe(.135,o,0,.045,-.02,.97,.9,1));for(let _ of[-1,1])A.add(Fe(.022,ne(1709072),_*.045,.02,.115)),A.add(Fe(.03,a,_*.125,0,0,.5,1,1));if(A.add(Fe(.025,a,0,-.02,.13,1,1,.9)),i.beard&&A.add(Fe(.12,o,0,-.07,.03,.95,.75,.95)),i.girl){A.add(Fe(.12,o,0,-.04,-.07,1.05,1.25,.8));let _=Fe(.07,o,0,-.02,-.17,.8,1.6,.8);_.rotation.x=.4,A.add(_)}if(i.hat){let _=Fe(.142,ne(i.hat,{roughness:.95}),0,.06,-.01,1,.82,1.02);A.add(_);let v=new Et(new Wi(.13,.03,8,22),ne(i.hat,{roughness:.95}));v.rotation.x=Math.PI/2-.1,v.position.y=.035,A.add(v)}let g=[];for(let _ of[-1,1]){let v=new Qt;v.position.set(_*.25,.55,0),v.add(Ji(.075,.2,n,0,-.15,0));let x=new Qt;x.position.set(0,-.3,0),x.add(Ji(.068,.18,n,0,-.13,0)),x.add(Fe(.06,l,0,-.29,0)),v.add(x),v.rotation.z=_*.12,u.add(v),g.push({sh:v,el:x})}let p=new Et(new Is(.42,20),new Pe({color:3816042,transparent:!0,opacity:.25,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.y=.02,t.add(p),{root:t,body:e,torso:u,head:A,legs:h,arms:g,shadow:p}}function wc(i,t,e=1){let n=Math.sin(t),s=Math.cos(t);i.legs[0].hip.rotation.x=n*.9*e,i.legs[1].hip.rotation.x=-n*.9*e,i.legs[0].knee.rotation.x=Math.max(0,-s)*1.3*e+.1,i.legs[1].knee.rotation.x=Math.max(0,s)*1.3*e+.1,i.arms[0].sh.rotation.x=-n*.9*e,i.arms[1].sh.rotation.x=n*.9*e,i.arms[0].el.rotation.x=-1.2*e-.2,i.arms[1].el.rotation.x=-1.2*e-.2,i.torso.rotation.x=.18*e,i.body.position.y=.95+Math.abs(s)*.07*e,i.body.rotation.x=0,i.body.rotation.z=0}function Lh(i,t){i.body.rotation.x=-Math.PI/2*Math.min(1,t*1.6),i.body.position.y=.95-.72*Math.min(1,t*1.6),i.legs[0].hip.rotation.x=-.3,i.legs[1].hip.rotation.x=.4,i.legs[0].knee.rotation.x=.6,i.legs[1].knee.rotation.x=.2,i.arms[0].sh.rotation.x=-2.2,i.arms[1].sh.rotation.x=-1.6,i.arms[0].el.rotation.x=-.3,i.arms[1].el.rotation.x=-.6,i.torso.rotation.x=0}function Us(i,t,e){let n=i.attributes.position,s=new w;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);let a=Math.sin(s.x*7+e)*Math.sin(s.y*6+e*2)*Math.sin(s.z*8+e*3);s.multiplyScalar(1+a*t),n.setXYZ(r,s.x,s.y,s.z)}return i.computeVertexNormals(),i}function Uh(i,t=1){let e=new Qt,n=new Et(Us(new Ts(i,2),.12,t),ne(4869980,{roughness:.95,flatShading:!0}));n.castShadow=!0,e.add(n);for(let s=0;s<6;s++){let r=s*1.7+t;e.add(Fe(i*.18,ne(14673650),Math.cos(r)*i*.85,Math.sin(r*1.3)*i*.6,Math.sin(r)*i*.85,1,.5,1,8))}return{root:e,spin:n}}function Dh(i,t=2){let e=new Qt,n=new Et(Us(new Ts(i,3),.06,t),ne(15133944,{roughness:1}));return n.castShadow=!0,e.add(n),{root:e,spin:n}}function Nh(i,t){let e=new Qt,n=new Qt;e.add(n);let s=new Et(new tn(t,t,i*2,18,1,!0),new en({map:DA(),roughness:.95}));s.rotation.z=Math.PI/2,s.castShadow=!0,n.add(s);for(let r of[-1,1]){let a=new Et(new Is(t,18),new en({map:NA(),roughness:.9}));a.rotation.y=r*Math.PI/2,a.position.x=r*i,n.add(a)}for(let r=0;r<5;r++){let a=Fe(t*.5,ne(15922940,{roughness:1}),-i*.75+r*i*.38,t*.82,(r%2?1:-1)*t*.2,1.4,.35,.9,10);n.add(a)}return{root:e,spin:n,axis:"x"}}function qh(i){let t=new Et(new $e(i,1),new Pe({map:LA(),transparent:!0,opacity:.85,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t}function Fh(){let i=new Qt,t=new Et(new kr(.22,0),ne(16761370,{emissive:13138432,emissiveIntensity:.55,roughness:.25,metalness:.3,flatShading:!0}));return t.scale.set(.8,1.35,.5),i.add(t),i}function Bh(){let i=new Et(new $e(1.7,2.2),new Pe({map:UA(),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i}function Oh(i){let t=new Qt,e=i==="tailwind"?5953791:15791871,n=new Et(new oi(.26,20,14),new Pe({color:e})),s=new Et(new oi(.46,20,14),new Pe({color:e,transparent:!0,opacity:.28,depthWrite:!1})),r=new Et(new Wi(.42,.03,8,30),new Pe({color:i==="tailwind"?12579071:10143999}));return t.add(n,s,r),t.userData={halo:s,ring:r},t}function zh(){let i=new Et(new oi(1.05,24,16),new Pe({color:13625599,transparent:!0,opacity:.32,depthWrite:!1}));return i.position.y=.95,i}function kh(i=1){let t=new Qt,e=new Et(new tn(.12*i,.16*i,.7*i,8),ne(5913124));e.position.y=.35*i,t.add(e);let n=ne(3103306,{roughness:.9,flatShading:!0}),s=ne(15791356,{roughness:1,flatShading:!0});for(let r=0;r<3;r++){let a=(1.2-r*.3)*i,o=new Et(new ri(a,1.3*i,8),n);o.position.y=(.95+r*.75)*i,o.castShadow=!0,t.add(o);let c=new Et(new ri(a*.72,.5*i,8),s);c.position.y=(1.38+r*.75)*i,t.add(c)}return t}function Hh(i=1,t=1){let e=new Et(Us(new zr(i,1),.15,t),ne(5922410,{roughness:1,flatShading:!0}));e.scale.y=.6,e.castShadow=!0;let n=new Qt;return n.add(e),n.add(Fe(i*.7,ne(15659770),0,i*.45,0,1.1,.3,1.1,10)),n}function Gh(i=15249450){let t=new Qt,e=new Et(new tn(.03,.03,2,6),ne(4868690));e.position.y=1,t.add(e);let n=new Ss;n.moveTo(0,0),n.lineTo(.7,-.2),n.lineTo(0,-.42),n.closePath();let s=new Et(new Hr(n),new en({color:i,side:Je,roughness:.7}));return s.position.y=1.95,t.add(s),t.userData.flag=s,t}function Wh(i){let t=new Qt,e=ne(15220778,{roughness:.5});for(let s of[-1,1]){let r=new Et(new tn(.22,.22,4.4,12),e);r.position.set(s*i/2,2.2,0),t.add(r)}let n=new Et(new Hn(i+.6,1,.2),new en({map:qA(),roughness:.6}));return n.position.y=4.2,t.add(n),t}function Xh(i,t,e){let n=new Qt,s=Us(new ri(i,t,9,3),.05,e),r=new Et(s,ne(10134724,{roughness:1,flatShading:!0}));r.position.y=t/2,n.add(r);let a=new Et(Us(new ri(i*.45,t*.45,9,2),.05,e+1),ne(16054012,{roughness:1,flatShading:!0}));return a.position.y=t*.78,n.add(a),n}function bn(i,t){let e=new Dr(i);return e.colorSpace=xe,e.anisotropy=4,t&&(e.wrapS=e.wrapT=Bi,e.repeat.set(...t)),e}function En(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Yh(){let i=En(512,512),t=i.getContext("2d");t.fillStyle="#e4e6f4",t.fillRect(0,0,512,512);let e=9,n=()=>(e=e*16807%2147483647,e/2147483647);for(let s=0;s<40;s++){let r=n()*512,a=n()*512,o=30+n()*80,c=t.createRadialGradient(r,a,0,r,a,o);c.addColorStop(0,"rgba(170,176,214,0.25)"),c.addColorStop(1,"rgba(170,176,214,0)"),t.fillStyle=c,t.fillRect(r-o,a-o,o*2,o*2)}for(let s of[52,150,256,362,460])t.fillStyle="rgba(150,156,200,0.35)",t.fillRect(s-9,0,18,512),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(s+9,0,3,512);for(let s=0;s<160;s++){let r=n()*512,a=n()*512,o=6+n()*9;t.fillStyle="rgba(150,154,198,0.45)",t.beginPath(),t.ellipse(r,a,o,o*.8,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.5)",t.beginPath(),t.ellipse(r+o*.25,a+o*.3,o*.6,o*.35,0,0,Math.PI*2),t.fill()}return bn(i,[1,6])}function Kh(){let i=En(256,256),t=i.getContext("2d");t.fillStyle="#eef0f8",t.fillRect(0,0,256,256);for(let e=0;e<60;e++)t.fillStyle=`rgba(160,166,210,${.12+Math.random()*.12})`,t.beginPath(),t.ellipse(Math.random()*256,Math.random()*256,10+Math.random()*30,6+Math.random()*14,Math.random(),0,Math.PI*2),t.fill();return bn(i,[2,8])}function LA(){let i=En(128,512),t=i.getContext("2d");t.strokeStyle="rgba(232,70,70,0.9)",t.lineWidth=8,t.strokeRect(10,0,108,512),t.lineWidth=6;for(let n=12;n<512;n+=26)t.beginPath(),t.moveTo(10,n),t.lineTo(118,n),t.stroke();t.fillStyle="rgba(232,90,90,0.18)",t.fillRect(10,0,108,512);let e=bn(i);return e.wrapT=Bi,e}function UA(){let i=En(256,320),t=i.getContext("2d");t.fillStyle="rgba(90,150,200,0.55)",t.strokeStyle="rgba(150,230,255,0.95)",t.lineWidth=10,t.beginPath(),t.roundRect(8,8,240,304,18),t.fill(),t.stroke(),t.strokeStyle="rgba(200,245,255,0.95)",t.lineWidth=16,t.lineCap="round",t.lineJoin="round";for(let e of[80,170])t.beginPath(),t.moveTo(52,e+60),t.lineTo(128,e),t.lineTo(204,e+60),t.stroke();return bn(i)}function DA(){let i=En(256,128),t=i.getContext("2d");t.fillStyle="#6a4228",t.fillRect(0,0,256,128);for(let e=0;e<70;e++){t.strokeStyle=`rgba(${40+Math.random()*30},${24+Math.random()*16},14,0.7)`,t.lineWidth=2+Math.random()*3;let n=Math.random()*128;t.beginPath(),t.moveTo(Math.random()*256,n),t.lineTo(Math.random()*256,n+(Math.random()-.5)*8),t.stroke()}return bn(i)}function NA(){let i=En(128,128),t=i.getContext("2d");t.fillStyle="#c8a070",t.fillRect(0,0,128,128);for(let e=6;e<64;e+=7)t.strokeStyle="rgba(140,96,56,0.6)",t.lineWidth=2,t.beginPath(),t.arc(64,64,e,0,Math.PI*2),t.stroke();return t.strokeStyle="#6a4228",t.lineWidth=8,t.beginPath(),t.arc(64,64,60,0,Math.PI*2),t.stroke(),bn(i)}function qA(){let i=En(512,96),t=i.getContext("2d");for(let e=0;e<512;e+=32)for(let n=0;n<96;n+=32)t.fillStyle=(e+n)/32%2?"#ffffff":"#1a1a22",t.fillRect(e,n,32,32);return t.fillStyle="rgba(232,64,42,0.92)",t.fillRect(96,12,320,72),t.fillStyle="#fff",t.font="900 52px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u0627\u0644\u0642\u0645\u0629  \u2022  SUMMIT",256,52),bn(i)}function Jh(){let i=En(64,64),t=i.getContext("2d");t.fillStyle="#fff",t.beginPath();for(let e=0;e<10;e++){let n=e/10*Math.PI*2-Math.PI/2,s=e%2?11:30;t.lineTo(32+Math.cos(n)*s,32+Math.sin(n)*s)}return t.closePath(),t.fill(),bn(i)}function jh(){let i=En(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.6,"rgba(240,248,255,0.6)"),e.addColorStop(1,"rgba(240,248,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),bn(i)}function Zh(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,c]of Object.entries(t))try{let l=atob(c.split(",")[1]),h=new Uint8Array(l.length);for(let f=0;f<l.length;f++)h[f]=l.charCodeAt(f);let u=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let c=this.ctx;if(c&&c.state==="running"&&!this.muted&&this.on!==!1){r(this);let l=this._smp&&this._smp[a];if(l){let h=c.createBufferSource(),u=c.createGain();h.buffer=l,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||c.destination),h.start(c.currentTime+.005);return}}return n.call(this,a,o)}}function Qh(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let c=a.ctx;fetch(o).then(l=>l.ok?l.arrayBuffer():Promise.reject()).then(l=>c.decodeAudioData(l)).then(l=>{if(a.ctx!==c)return;let h=c.createBufferSource(),u=c.createGain();h.buffer=l,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||c.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var $h={boost:"data:audio/mpeg;base64,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",crystal:"data:audio/mpeg;base64,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",wipeout:"data:audio/mpeg;base64,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KA4ql/N02GQzqdemdPMMQVctQiN9TRzDwdYky1Q+AAGr/uQjBxuVkvDSqPD/+zjErYIKhF0xh6TAgTSLZeSRmPjm06esrHlY1dIWxbCQuOeEzZQKTIaAgmDIShQibVNEhwuommEnHQWet4TEQTQT0XDxpRyiIwl+v3Zf9eABLDj45IvKzDAZedoQ/LXTY5XMQPwKnGe3ulDC8AHULQVSiwE+0E5zj5le9h19eXB3LvXLlI7wGCb4ara/373bEe3XXV7O5lvK0GF9v33/ujM+VxCW5vWtpSjHalEC8OJmJ0/vZVD6B5NokBJl0DFOJzv9dgFhk10qqZriQxrRMurk2llf2Y3/+zjEvgJKsG0mzBhgiVUQpIjBDggyNJ41/8jWG2n7eWeNvSajgMYOqY2BSShFHLWEhngBiWMtAQqQVJR8AkkXICZAbGVPFvIs3/f9nzc/3M1qI9DVoy1kBVQlkLu6WmkR3agmfafU8mMJd6voAT0OU4w1Yu+qRRazcICoZcWJlnrU3YJaAACIEAAAAeSlPy8OKVuf92HvDCFLIAlUSnUuofnqsBNGC6zFkmgjVFh0poUZyvGmC/BpCwCxqVhpf3kW7wkuRwIMFcFQFX7MMGJZqhLC7pPMry//+zjEygIJJFktIwRwQXCXo8UGDHmmETcvSGSg5S5fwYNIVszs9Y9PeJnaIUifTk0eLBgoiS28Y//tfN7/5j+mL3ZF9XI5UM6lbGePNCXVtwa43/nPxinvikT7ia99//v4zkumE6WZlg0xEnP9LMUv9GIKFgSDTyEESVIVM1KUvcYnVVVjARMzN1VoUBWMx/7M2okwolSwdiJ8NFQ0WBpQNFQ0IlP/1gqWPCI9BUqGiz//UHYKlQViJ4NQ1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE2IIKVNMaJ5hnAR+UJB6SIABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7IAV/XUc2ZeACScOmYeSMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",log:"data:audio/mpeg;base64,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",tailwind:"data:audio/mpeg;base64,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QzzHKwbZ1ZWqXQWvxDUdZXkbThLJKbArsGXn7v96/vv9lq3KGQvCbRGNIrn/+zjErwMK5L8WTLBNAVOUI0mDDhiqRVtpVIrgVUI6C2qeartpQWWxtL2aqG1dHMYK2O0xMnagLj9upye1VXbNwyj+u/xVn26hhAAhDefqEGVGG8qmpSiDqV0XZLvk8xqeadfmCTOEKjCQuqPlRVas+SoeZ+BI0QRdSyzl11bGvGiy0sgeeg80Leo+sUaDOmXiGMOZxMittqfstuVQ5vOJkR650bUABsDwzWCEe1HEI61E0jNLyZ5TT2AKqsZ6pTcjRzvEHMUWKhuyOJPXx2vR7MkOTKKabCv/+zjEuoPKjNUWLJhREVQaYoGGCWiJHxBqpjXwXT/yPt2avS6PvpyTI2/6t+X3ToOxtJdeSJjhWkUJCfcitI+E/EwL3M4NwwFxdZNsy2cK7MqzLRNkotQ0nyl0GQ+X5oogJsvKEXc18i1zUi+44Et3ugvyhfJm1FrMpdoefHDHnal7DzTj9DJhTtlBxSy0gCr6Jq6fUvIWXaEGAANBQUpIFKNIBGNKFTlei1Ezleq6YizoxLQ+mAvGBRLMBaHURh2Jp8iXuQpjExEoSTrn1D8UxRxI1Ko9JST/+zjExwMHqKEcR5hKgWiaogT0FiA/NCigK1i9CKV3nDMSA/DwMyMeFc8XuVXYtBODyBMgMWq1U8XcJTiU1hGnNi8p3i435WI73KLKLKp/lV9LP/+Vf/8qjHftVCtyMDDFn1DDXgBg+CE4swsCAj43vRpRVxebNGiQLGgKKRYl5qoW+oXZ+sUbrbrFP6xRv//+vrFGzQVFlUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE3IOKdXMSRhiswYyiYYD0nXBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE4oMRlQ8STDDNyNKG4QiTGABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",summit:"data:audio/mpeg;base64,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lX0Hn9zeOaVHP3B06TjEs3GKzqR4jQia0Nx9dXKt4w8gKhSXDPhmJc+Qfrq35tLRnbVsmraPYdk5f01TVsE0/R9LI7q5z0TOVBzSpfOMbs5dJPdDUirz6W2l+/KqABAJEomSBKeOM9ounzyvmHjTx7nclP5TyFqcchw8cqhqOmoKWiWDNCqcP6ajXedTs27uMLjGw2jPnZFHU6AfMmjrHvTyaBTgS3xToJQoWnBVDhdllhZWMbHhdWAx0vL/+zjE9gIOyYMIR5kVCVWrYhj0iOmf6vQQteZ2qKGsCtAAEEFuDcZ+DFS1j9TCx0RGYUHdLF9oVvpPbF/3zIhe+8djFELhVJ9jtfFftbti8e/Dqnq3KX/edyHbK/R7xDMZfcRnb/gf7t9d/SMy0c6nh4nqv5LGcrZA+zJ93hvTZLZpzPYf6Bd9h7t7OXD5WdnjJ7G1ACXGiAALgsH+cTccigex2NPq9RubAyZw1qNjjwIh+LEc5Fi+GAvh0VV7yJSJDL+lz2MRVi2HApTTTxcBbCEM6fQsnhP/+zjE8YOPFV8EDDELyR8qoozxFOCDgbzTUZIBosRJgOCAIiIwWiWE4fy2/ceyedv3vdeZnnXe6ddwAQAFg+J/AghAAIFBOBDhTqOKBBZyyggfuIV/0T4ZECNSxpIgDiBEdYrQmJiewrYCUfQrXYFrrRkTozkSQamTzRKJz5KRcTJy9eq2IMIDMHUUIR4mxuktXBOnM5Tp3piUUdOqHW7WzRTIc5J1QyoaqZH2VIMFJmNQESgUBKHVVWcKAiduszMzHQoEarAwVDZLErw0IhKEzodRiUs9vPf/+zjE8oANTY8TR5Rxwc4x4dz0mNDLLUeDpVVMQU1FMy4xMDBVVVVVAStKgEZGRkZEZGRkZfrLKkcjVrKDgkNAyDQsDhoGQkLB40DQSFhYLf//qUj/rFBZv//6xUWFlUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5QIRBOke57B6QhCe5OjHjphVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEuYPGyF7OwIBuYAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var FA="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ie=null,ta=!1;function tu(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Tc(){tu(),ta=!0;try{if(Ie||(Ie=document.createElement("audio"),Ie.src=FA,Ie.loop=!0,Ie.preload="auto",Ie.setAttribute("playsinline",""),Ie.setAttribute("webkit-playsinline",""),Ie.setAttribute("x-webkit-airplay","deny"),Ie.volume=.01,Ie.addEventListener("pause",()=>{ta&&!document.hidden&&setTimeout(()=>ta&&Ie.paused&&Ie.play().catch(()=>{}),300)})),Ie.paused){let i=Ie.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Vc(){ta=!1;try{Ie&&!Ie.paused&&Ie.pause()}catch{}}function eu(i,t){tu();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var ve=i=>440*Math.pow(2,(i-69)/12),BA=[[45,[69,72,76]],[41,[69,72,77]],[48,[67,72,76]],[43,[67,71,74]],[45,[69,72,76]],[41,[69,72,77]],[48,[67,72,76]],[43,[67,71,74]]],OA=[[0,0,76,2],[0,3,79,1],[0,4,81,3],[0,8,79,2],[0,10,76,2],[0,12,74,4],[1,0,72,2],[1,2,74,2],[1,4,76,4],[1,10,72,2],[1,12,69,4],[2,0,76,2],[2,3,79,1],[2,4,84,3],[2,8,83,2],[2,10,81,2],[2,12,79,4],[3,0,79,2],[3,2,81,2],[3,4,83,6],[3,12,86,4],[4,0,88,3],[4,4,86,2],[4,6,84,2],[4,8,81,4],[4,12,84,4],[5,0,84,2],[5,2,81,2],[5,4,77,4],[5,10,81,2],[5,12,84,4],[6,0,84,3],[6,4,79,2],[6,6,76,2],[6,8,79,4],[6,12,84,4],[7,0,83,4],[7,4,79,2],[7,6,81,2],[7,8,83,8]],Zi=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.speed=0,this.rumble=0}unlock(){if(Tc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;eu(this.ctx,()=>!!this.held),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-12,n.ratio.value=5,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.32,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=60/128*.75;let r=e.createGain();r.gain.value=.25;let a=e.createGain();a.gain.value=.16,this.leadBus=e.createGain(),this.leadBus.connect(this.music),this.leadBus.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*2,e.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.noiseBuf=o,this.wind=this._loopNoise("bandpass",700,.6,1e-4),this.rumbleN=this._loopNoise("lowpass",120,1,1e-4),this._timer=setInterval(()=>this._schedule(),25),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_loopNoise(t,e,n,s){let r=this.ctx,a=r.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let o=r.createBiquadFilter();o.type=t,o.frequency.value=e,o.Q.value=n;let c=r.createGain();return c.gain.value=s,a.connect(o).connect(c).connect(this.sfx),a.start(),{f:o,g:c}}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Vc(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Tc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.step=0,this.nextTime=this.ctx.currentTime+.1))}setRun(t,e){if(this.speed=t,this.rumble=e,!this.ctx)return;let n=this.ctx.currentTime;this.wind.g.gain.setTargetAtTime(this.mode==="off"?1e-4:.012+t*.03,n,.3),this.wind.f.frequency.setTargetAtTime(500+t*700,n,.3),this.rumbleN.g.gain.setTargetAtTime(1e-4+e*.35,n,.1)}dispose(){clearInterval(this._timer),Vc(),this.ctx&&this.ctx.close(),this.ctx=null}_tone(t,e,n,s,r,a=this.sfx,o=.005){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,n);let h=c.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h).connect(a),l.start(n),l.stop(n+s+.05),l}_noise(t,e,n,s,r,a=1,o=this.sfx,c){let l=this.ctx,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+e),u.Q.value=a;let f=l.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(o),h.start(t,Math.random()*.8),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.setValueAtTime(e,s),l.frequency.exponentialRampToValueAtTime(n,s+r);let h=c.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),l.connect(h).connect(o),l.start(s),l.stop(s+r+.05)}_synth(t,e,n,s,r,a=1800){let o=this.ctx,c=o.createGain(),l=o.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(a,e),l.frequency.exponentialRampToValueAtTime(a*.35,e+n),c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(s,e+.01),c.gain.exponentialRampToValueAtTime(1e-4,e+n);for(let h of[-6,6]){let u=o.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(t,e),u.detune.value=h,u.connect(l),u.start(e),u.stop(e+n+.05)}l.connect(c).connect(r)}_kick(t,e=.5){this._slide("sine",140,42,t,.22,e,this.music),this._noise(t,.02,e*.2,"highpass",3e3,1,this.music)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.15,n=60/128/4,s=this.mode==="race",r=this.mode==="menu";for(;this.nextTime<e;){let a=this.nextTime,o=this.step%128,c=Math.floor(o/16),l=o%16,[h,u]=BA[c];if(l===0&&u.forEach(f=>this._tone("triangle",ve(f-12),a,n*15,s?.025:.035,this.music,.15)),s){l%4===0&&this._kick(a,.42),(l===4||l===12)&&(this._noise(a,.12,.12,"bandpass",1500,.8,this.music),this._noise(a+.01,.08,.06,"highpass",2500,1,this.music)),l%2===1&&this._noise(a,.035,l%4===3?.04:.025,"highpass",8e3,1,this.music),l%2===0&&this._synth(ve(h-(l%8===6?-12:0)),a,n*1.6,.06,this.music,700);for(let[f,d,m,A]of OA)f===c&&d===l&&this._synth(ve(m),a,n*A*1.1,.035,this.leadBus,2600)}if((s||r)&&l%2===0){let f=u[l/2%3]+(l>=8?12:0);this._tone("triangle",ve(f),a,.16,s?.03:.035,this.music,.002)}this.mode==="end"&&l%4===0&&this._tone("sine",ve(u[l/4%3]+12),a,.5,.03,this.music,.01),this.step++,this.nextTime+=n}}play(t,e){if(!this.on)return;let n=this.ctx.currentTime+.005;switch(t){case"step":this._noise(n,.07,.05+(e||0)*.02,"bandpass",2200+Math.random()*900,1.2),this._noise(n,.05,.03,"lowpass",500,1);break;case"count":this._tone("square",660,n,.18,.06),this._tone("sine",660,n,.25,.08);break;case"go":this._tone("square",990,n,.45,.07),this._tone("sine",1320,n,.5,.06),this._noise(n,.6,.08,"bandpass",1200,.6,this.sfx,3e3);break;case"crystal":{let s=Math.min(e||0,6),r=84+[0,2,4,7,9,12,14][s];this._tone("sine",ve(r),n,.35,.07),this._tone("sine",ve(r+12),n+.03,.2,.03),this._tone("triangle",ve(r+7),n+.05,.15,.02);break}case"boost":this._noise(n,.7,.14,"bandpass",600,.8,this.sfx,4e3),this._slide("sawtooth",200,900,n,.5,.03),this._slide("sine",400,1600,n,.5,.05);break;case"tailwind":for(let s=0;s<3;s++)this._noise(n+s*.12,.6,.1,"bandpass",500+s*300,1.2,this.sfx,2500);[79,83,86,91].forEach((s,r)=>this._tone("sine",ve(s),n+r*.06,.4,.05));break;case"shield":[72,76,79,84,88].forEach((s,r)=>this._tone("sine",ve(s),n+r*.04,.6,.04)),this._slide("sine",300,600,n,.5,.05);break;case"blocked":this._noise(n,.25,.15,"highpass",2e3,1),[88,84,91].forEach((s,r)=>this._tone("sine",ve(s),n+r*.05,.3,.05));break;case"wipeout":this._slide("sine",160,45,n,.35,.5),this._noise(n,.45,.25,"lowpass",900,.8,this.sfx,200),this._slide("triangle",420,200,n+.05,.25,.08),this._slide("square",400,190,n+.05,.22,.015);break;case"heart":[72,67,64].forEach((s,r)=>this._tone("triangle",ve(s),n+.3+r*.12,.25,.05));break;case"log":this._tone("triangle",150,n,.12,.12),this._noise(n,.08,.06,"bandpass",600,2);break;case"dodge":this._noise(n,.35,.11,"bandpass",1600,1,this.sfx,400),this._tone("sine",ve(88),n+.1,.25,.04);break;case"overtake":this._noise(n,.4,.1,"bandpass",500,.8,this.sfx,2600),[84,88,91].forEach((s,r)=>this._tone("triangle",ve(s),n+.1+r*.07,.3,.05));break;case"up":[67,72].forEach((s,r)=>this._tone("sine",ve(s),n+r*.08,.2,.05));break;case"summit":[[72,0],[76,.12],[79,.24],[84,.4],[79,.62],[84,.74],[88,.95],[91,1.2]].forEach(([s,r])=>{this._synth(ve(s),n+r,.5,.06,this.sfx,3e3),this._tone("sine",ve(s)*2,n+r,.2,.02)});for(let s=0;s<24;s++)this._noise(n+.2+s*.07,.25,.04+Math.random()*.04,"bandpass",900+Math.random()*1600,.7);this._noise(n+.2,2.4,.07,"bandpass",1300,.4);break;case"lose":[[76,0],[74,.25],[72,.5],[69,.8]].forEach(([s,r])=>this._tone("triangle",ve(s),n+r,.45,.06));break;case"tap":this._tone("sine",880,n,.06,.05);break;default:}}};Zh(Zi,$h);Qh(Zi);var Rc={ar:{go:["\u064A\u0627\u0644\u0627 \u0627\u0646\u0637\u0644\u0642!","\u0627\u0646\u0637\u0644\u0642 \u064A\u0627 \u0628\u0637\u0644!"],nitro:["\u0646\u064A\u062A\u0631\u0648\u0648\u0648! \u0637\u064A\u0631 \u064A\u0627 \u0648\u062D\u0634!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0631\u0639\u0629!","\u0646\u064A\u062A\u0631\u0648! \u0627\u0645\u0633\u0643 \u0627\u0644\u0637\u0631\u064A\u0642!"],overtake:["\u0639\u062F\u0651\u064A\u062A\u0647! \u0628\u0631\u0627\u0641\u0648 \u0639\u0644\u064A\u0643!","\u062A\u062C\u0627\u0648\u0632 \u0631\u0627\u0626\u0639 \u064A\u0627 \u0628\u0637\u0644!","\u0627\u064A\u0648\u0647 \u0643\u062F\u0647! \u0633\u0628\u0642\u062A\u0647!"],overtaken:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643\u060C \u0647\u062A\u0639\u062F\u064A\u0647!","\u062E\u0644\u064A\u0643 \u0648\u0631\u0627\u0647\u060C \u0641\u0631\u0635\u062A\u0643 \u062C\u0627\u064A\u0629!"],near:["\u064A\u0627\u0627\u0627\u0647! \u0643\u0627\u0646\u062A \u0642\u0631\u064A\u0628\u0629!","\u0639\u062F\u0651\u062A \u0639\u0644\u0649 \u062E\u064A\u0631! \u0642\u0644\u0628\u0643 \u062C\u0627\u0645\u062F!","\u0627\u0648\u0648\u0647! \u0642\u0631\u064A\u0628\u0629 \u0642\u0648\u064A!"],bump:["\u0627\u0648\u0628\u0633! \u062E\u0628\u0637\u0629 \u0635\u063A\u064A\u0631\u0629\u060C \u0643\u0645\u0651\u0644!","\u0648\u0644\u0627 \u064A\u0647\u0645\u0643 \u064A\u0627 \u0628\u0637\u0644\u060C \u0643\u0645\u0651\u0644!"],charge:["\u0646\u064A\u062A\u0631\u0648 \u062C\u062F\u064A\u062F \u062C\u0627\u0647\u0632!","\u0639\u0646\u062F\u0643 \u0646\u064A\u062A\u0631\u0648!"],pickup:["\u0623\u064A\u0648\u0647! \u0639\u0645\u0644\u0629!","\u062C\u0645\u0639\u062A \u0639\u0645\u0644\u0629! \u0628\u0631\u0627\u0641\u0648!"],trick:["\u062D\u0631\u0643\u0629 \u0628\u0647\u0644\u0648\u0627\u0646\u064A\u0629! \u0648\u0627\u0648!","\u064A\u0627 \u0633\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u062D\u0631\u0643\u0629!"],draft:["\u0631\u0627\u0643\u0628 \u0648\u0631\u0627\u0647! \u0627\u0644\u0647\u0648\u0627 \u0628\u064A\u0632\u0642\u0651\u0643!","\u0633\u0644\u064A\u0628 \u0633\u062A\u0631\u064A\u0645! \u0633\u0631\u0639\u0629 \u0632\u064A\u0627\u062F\u0629!"],lap:["\u0644\u0641\u0651\u0629 \u062C\u062F\u064A\u062F\u0629! \u0643\u0645\u0651\u0644 \u064A\u0627 \u0628\u0637\u0644!","\u0622\u062E\u0631 \u0644\u0641\u0651\u0629! \u0627\u062F\u064A\u0647\u0627 \u0643\u0644 \u0627\u0644\u0644\u064A \u0639\u0646\u062F\u0643!"],win:["\u0643\u0633\u0628\u062A \u064A\u0627 \u0628\u0637\u0644! \u0627\u0646\u062A \u0627\u0644\u0623\u0648\u0644!","\u0645\u0628\u0631\u0648\u0648\u0648\u0643! \u0628\u0637\u0644 \u0627\u0644\u0633\u0628\u0627\u0642!"],lose:["\u0644\u0639\u0628\u062A \u062D\u0644\u0648 \u0642\u0648\u064A! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A \u0648\u0647\u062A\u0643\u0633\u0628!","\u0643\u0646\u062A \u0642\u0631\u064A\u0628! \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u0643!"],count:["\u0627\u0633\u062A\u0639\u062F!"]},en:{go:["Let's go!","Go, champion, go!"],nitro:["Nitrooo! Fly, superstar!","Wow, so fast!","Nitro boost! Hold on tight!"],overtake:["You passed him! Bravo!","Great overtake, champion!","Yes! You are ahead!"],overtaken:["Don't worry, you'll pass him!","Stay close, your chance is coming!"],near:["Whoa! That was close!","Phew! Great driving!","Ooh! So close!"],bump:["Oops! Small bump, keep going!","No worries, champion, keep going!"],charge:["New nitro ready!","You have a nitro!"],pickup:["Yes! A coin!","You got a coin! Bravo!"],trick:["Amazing trick! Wow!","What a move!"],draft:["Right behind him! The wind pushes you!","Slipstream! Extra speed!"],lap:["New lap! Keep going, champion!","Last lap! Give it everything!"],win:["You won, champion! First place!","Hooray! Racing star!"],lose:["Great racing! Try again and win!","So close! Next one is yours!"],count:["Get ready!"]}},zA=[[/يا بطل/g,"\u064A\u0627 \u0628\u0637\u0644\u0629"]],ea=class{constructor(t={}){var e,n;this.base=t.base||"./",this.lang=t.lang==="en"?"en":"ar",this.girl=!!t.girl,this.clips=t.clips||{},this.cooldown=(e=t.cooldown)!=null?e:3,this.gap=(n=t.gap)!=null?n:1.4,this.muted=!1,this.unlocked=!1,this.lastSay=-1/0,this.lastEvent={},this.pick={},this.audio=null,this.failed=new Set}setMuted(t){let e=!!t;e!==this.muted&&(this.muted=e,this.muted&&this._stop())}unlock(){this.unlocked=!0;try{let t=window.speechSynthesis;t&&t.getVoices().length===0&&t.getVoices()}catch{}}_stop(){if(this.audio){try{this.audio.pause()}catch{}this.audio=null}try{window.speechSynthesis&&window.speechSynthesis.cancel()}catch{}}_phrase(t){let e=Rc[this.lang]&&Rc[this.lang][t]||Rc.ar[t]||[];if(!e.length)return null;let n=((this.pick[t]=(this.pick[t]||0)+1)-1)%e.length,s=e[n];if(this.girl&&this.lang==="ar")for(let[r,a]of zA)s=s.replace(r,a);return{text:s,n:n+1}}say(t,e=performance.now()/1e3){var a;if(this.muted||!this.unlocked||e-this.lastSay<this.gap||e-((a=this.lastEvent[t])!=null?a:-1/0)<this.cooldown)return!1;let n=this._phrase(t);if(!n)return!1;this.lastSay=e,this.lastEvent[t]=e;let s=this.clips[t]||0,r=`${t}_${n.n}`;if(s>=n.n&&!this.failed.has(r)){let o=new Audio(`${this.base}voice/${this.lang}/${r}.mp3`);o.volume=.95,o.onerror=()=>{this.failed.add(r),this._speak(n.text)};let c=o.play();return c&&c.catch&&c.catch(()=>{this.failed.add(r),this._speak(n.text)}),this.audio=o,!0}return this._speak(n.text)}_speak(t){try{let e=window.speechSynthesis;if(!e)return!1;let n=new SpeechSynthesisUtterance(t);n.lang=this.lang==="ar"?"ar-EG":"en-US",n.rate=1.05,n.pitch=1.15;let r=e.getVoices().find(a=>a.lang&&a.lang.toLowerCase().startsWith(this.lang));return r&&(n.voice=r),e.cancel(),e.speak(n),!0}catch{return!1}}dispose(){this._stop()}};var Pc={title:["\u0633\u0628\u0627\u0642 \u0627\u0644\u062A\u0644\u062C","Snow Race"],tagline:["\u0627\u0637\u0644\u0639 \u0644\u0644\u0642\u0645\u0629!","Race to the top"],drag:["\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u062C\u0631\u064A","Drag to run"],course:["\u0627\u0644\u0633\u0628\u0627\u0642","Race"],c1:["\u062B\u0644\u062C \u0633\u0627\u0646\u062A \u0643\u0627\u062A\u0631\u064A\u0646","St Catherine Snow"],c2:["\u0642\u0631\u064A\u0629 \u0627\u0644\u0623\u0644\u0628","Alps Village"],c3:["\u0642\u0645\u0629 \u0643\u0644\u064A\u0645\u0646\u062C\u0627\u0631\u0648","Kilimanjaro"],c4:["\u0633\u0627\u0646\u062A \u0643\u0627\u062A\u0631\u064A\u0646 \u062A\u0627\u0646\u064A","Catherine Return"],c5:["\u0642\u0645\u0629 \u0627\u0644\u0623\u0644\u0628 \u0627\u0644\u0643\u0628\u064A\u0631\u0629","Grand Alps"],locked:["\u0627\u0648\u0635\u0644 \u0644\u0644\u0642\u0645\u0629 \u0641\u064A \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647","Finish the race before"],go:["\u0627\u0646\u0637\u0644\u0642!","GO!"],dodge:["\u062A\u0641\u0627\u062F\u064A \u062D\u0644\u0648!","NICE DODGE!"],overtake:["\u0633\u0628\u0642\u062A\u0647!","OVERTAKE!"],wipeout:["\u0648\u0642\u0639\u0629!","WIPEOUT"],tailwind:["\u0631\u064A\u0627\u062D \u062F\u0627\u0641\u0639\u0629!","TAILWIND!"],shield:["\u062F\u0631\u0639!","SHIELD!"],blocked:["\u0627\u0644\u062F\u0631\u0639 \u062D\u0645\u0627\u0643!","SHIELD SAVED YOU!"],boost:["\u062F\u0641\u0639\u0629!","BOOST!"],you:["\u0623\u0646\u062A","YOU"],p1:["\u0627\u0644\u0623\u0648\u0644","1ST"],p2:["\u0627\u0644\u062A\u0627\u0646\u064A","2ND"],p3:["\u0627\u0644\u062A\u0627\u0644\u062A","3RD"],p4:["\u0627\u0644\u0631\u0627\u0628\u0639","4TH"],summit_m:["\u0648\u0635\u0644\u062A \u0644\u0644\u0642\u0645\u0629! \u{1F3D4}\uFE0F","You reached the summit! \u{1F3D4}\uFE0F"],summit_f:["\u0648\u0635\u0644\u062A\u064A \u0644\u0644\u0642\u0645\u0629! \u{1F3D4}\uFE0F","You reached the summit! \u{1F3D4}\uFE0F"],place:["\u0627\u0644\u0645\u0631\u0643\u0632","Place"],score:["\u0627\u0644\u0646\u0642\u0637","Score"],crystals:["\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644","Crystals"],best:["\u0623\u062D\u0633\u0646 \u0645\u0631\u0643\u0632","Best place"],next:["\u0627\u0644\u0633\u0628\u0627\u0642 \u0627\u0644\u062C\u0627\u064A","Next race"],again:["\u062A\u0627\u0646\u064A","Race again"],courses:["\u0627\u0644\u0633\u0628\u0627\u0642\u0627\u062A","Races"],outTitle:["\u062E\u0644\u0635\u062A \u0627\u0644\u0642\u0644\u0648\u0628","Out of hearts"],outText_m:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643! \u0642\u0648\u0645 \u0648\u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A","No problem! Get up and try again"],outText_f:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643! \u0642\u0648\u0645\u064A \u0648\u062C\u0631\u0651\u0628\u064A \u062A\u0627\u0646\u064A","No problem! Get up and try again"],timeTitle:["\u0627\u0644\u0648\u0642\u062A \u062E\u0644\u0635","Time's up"],timeText_m:["\u0642\u0631\u0651\u0628\u062A \u0642\u0648\u064A \u0645\u0646 \u0627\u0644\u0642\u0645\u0629! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A","So close to the top! Try again"],timeText_f:["\u0642\u0631\u0651\u0628\u062A\u064A \u0642\u0648\u064A \u0645\u0646 \u0627\u0644\u0642\u0645\u0629! \u062C\u0631\u0651\u0628\u064A \u062A\u0627\u0646\u064A","So close to the top! Try again"],win1_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0627\u0644\u0623\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0642\u0645\u0629! \u{1F947}","Champion! First to the top! \u{1F947}"],win1_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0627\u0644\u0623\u0648\u0644\u0649 \u0639\u0644\u0649 \u0627\u0644\u0642\u0645\u0629! \u{1F947}","Champion! First to the top! \u{1F947}"],winN_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0643\u0645\u0651\u0644 \u0639\u0634\u0627\u0646 \u062A\u0628\u0642\u0649 \u0627\u0644\u0623\u0648\u0644","Well done! Keep going to be first"],winN_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0643\u0645\u0651\u0644\u064A \u0639\u0634\u0627\u0646 \u062A\u0628\u0642\u064A \u0627\u0644\u0623\u0648\u0644\u0649","Well done! Keep going to be first"],easy:["\u0633\u0647\u0644","Easy"],exit:["\u062E\u0631\u0648\u062C","Exit"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u062C\u0628\u0644...","Getting the mountain ready..."]},na="ar",nu=!1,iu=i=>{na=i==="en"?"en":"ar"},su=i=>{nu=!!i},Qi=()=>na,Nt=i=>{let t=`${i}_${nu?"f":"m"}`,e=Pc[t]?t:i;return Pc[e]?Pc[e][na==="en"?1:0]:i},He=i=>na==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]);function ht(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function ia(i,t,e){let n=ht("div",{class:"sr-peak"});return n.innerHTML='<svg viewBox="0 0 120 60"><path d="M4 58 L44 14 L58 28 L72 8 L116 58 Z" fill="#3a6ad8"/><path d="M44 14 L34 26 L40 24 L46 30 L52 24 L58 28 Z M72 8 L62 22 L68 20 L74 26 L80 20 L86 24 Z" fill="#fff"/><path d="M72 8 L72 -4" stroke="#5a4a3a" stroke-width="2"/><path d="M72 -4 L86 0 L72 4 Z" fill="#e8402a"/><g fill="#bfe8ff"><circle cx="20" cy="18" r="2"/><circle cx="100" cy="22" r="1.6"/><circle cx="92" cy="10" r="1.2"/></g></svg>',ht("div",{class:`sr-logo${e?" small":""}`},n,ht("div",{class:"sr-tag"},t),ht("div",{class:"sr-name"},i))}var ru=`
.sr-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#d8dcf0}
.sr-root canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.sr-layer{position:absolute;inset:0;pointer-events:none}
.sr-layer button,.sr-layer .sr-dim,.sr-chips{pointer-events:auto}
.sr-top{position:absolute;top:max(calc(var(--u)*2.6),env(safe-area-inset-top));left:calc(var(--u)*3);right:calc(var(--u)*3);display:flex;align-items:flex-start;gap:calc(var(--u)*2.4);direction:ltr}
.sr-left{display:flex;flex-direction:column;gap:calc(var(--u)*1.6);align-items:flex-start}
.sr-round{width:max(44px,calc(var(--u)*10));height:max(44px,calc(var(--u)*10));border-radius:50%;border:calc(var(--u)*.5) solid rgba(255,255,255,.75);background:rgba(40,44,70,.55);color:#fff;font-size:calc(var(--u)*4.4);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font-family:inherit;box-shadow:0 calc(var(--u)*.6) calc(var(--u)*1.6) rgba(20,20,50,.3)}
.sr-round:focus-visible,.sr-btn:focus-visible,.sr-chip:focus-visible{outline:calc(var(--u)*.7) solid #3a8ae8;outline-offset:calc(var(--u)*.5)}
.sr-exit{position:absolute;bottom:calc(var(--u)*44);left:calc(var(--u)*3)}
.sr-hearts{display:flex;gap:calc(var(--u)*.8);font-size:calc(var(--u)*5.2);line-height:1;color:#ff3a5a;text-shadow:0 0 calc(var(--u)*.6) #fff,0 calc(var(--u)*.3) calc(var(--u)*.6) rgba(0,0,0,.25)}
.sr-hearts .off{color:rgba(255,255,255,.75)}
.sr-track{flex:1;padding-top:calc(var(--u)*4.4)}
.sr-line{position:relative;height:calc(var(--u)*.9);border-radius:999px;background:rgba(255,255,255,.85);box-shadow:0 calc(var(--u)*.3) calc(var(--u)*.8) rgba(20,20,60,.25)}
.sr-tick{position:absolute;top:calc(var(--u)*-.7);width:calc(var(--u)*1);height:calc(var(--u)*2.3);border-radius:3px;background:#ff8a2a;transform:translateX(-50%)}
.sr-flagend{position:absolute;right:calc(var(--u)*-1.4);top:calc(var(--u)*-3.2);font-size:calc(var(--u)*3.6);font-style:normal}
.sr-pdot{position:absolute;top:50%;width:calc(var(--u)*2.6);height:calc(var(--u)*2.6);border-radius:50%;border:calc(var(--u)*.45) solid #fff;transform:translate(-50%,-50%);box-shadow:0 0 calc(var(--u)*.6) rgba(0,0,0,.4);transition:left .15s linear,right .15s linear}
.sr-pdot.me{width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);z-index:2;border-color:#fff;box-shadow:0 0 0 calc(var(--u)*.4) #ff8a2a}
[dir=rtl] .sr-pdot{transform:translate(50%,-50%)}
[dir=rtl] .sr-tick{transform:translateX(50%)}
[dir=rtl] .sr-flagend{right:auto;left:calc(var(--u)*-1.4)}
.sr-clock{position:relative;width:max(46px,calc(var(--u)*11));height:max(46px,calc(var(--u)*11));flex:none}
.sr-clock i,.sr-clock svg{position:absolute;inset:0;width:100%;height:100%;display:block}
.sr-clock span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--u)*4.4);text-shadow:0 1px 2px rgba(0,0,0,.4)}
.sr-clock.low span{color:#ffd23a;animation:sr-pulse .5s infinite alternate}
@keyframes sr-pulse{to{transform:scale(1.15)}}
.sr-cards{position:absolute;left:50%;bottom:max(calc(var(--u)*2.4),env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:calc(var(--u)*1.6);direction:ltr}
.sr-card{position:relative;width:calc(var(--u)*17);height:calc(var(--u)*25);border-radius:calc(var(--u)*8.5);border:calc(var(--u)*.6) solid rgba(255,255,255,.55);overflow:hidden;box-shadow:0 calc(var(--u)*.8) calc(var(--u)*2) rgba(20,20,60,.35);transition:filter .3s,transform .3s}
.sr-card.me{border-color:#ff8a2a;box-shadow:0 0 0 calc(var(--u)*.5) #ffb05a,0 calc(var(--u)*.8) calc(var(--u)*2) rgba(20,20,60,.35)}
.sr-card.down{filter:grayscale(1) brightness(.55)}
.sr-card img{position:absolute;left:-10%;width:120%;bottom:calc(var(--u)*1);height:auto}
.sr-badge{position:absolute;top:calc(var(--u)*.6);left:50%;transform:translateX(-50%);z-index:2;background:#2a2a3a;color:#fff;font-weight:900;font-size:calc(var(--u)*2.5);border-radius:999px;padding:calc(var(--u)*.3) calc(var(--u)*1.4);white-space:nowrap}
.sr-badge.gold{background:linear-gradient(180deg,#ffe07a,#f5b72c);color:#5a3a00}
.sr-score{position:absolute;left:50%;bottom:calc(var(--u)*2.4);transform:translateX(-50%);z-index:2;min-width:calc(var(--u)*9);text-align:center;background:rgba(20,20,40,.75);border-radius:999px;font-weight:900;font-size:calc(var(--u)*3.4);padding:calc(var(--u)*.2) calc(var(--u)*1.2)}
.sr-you{position:absolute;left:0;right:0;bottom:calc(var(--u)*.3);text-align:center;font-size:calc(var(--u)*2.2);font-weight:900;color:#ffb05a;z-index:2}
.sr-logo-wrap{position:absolute;top:calc(var(--u)*16);left:calc(var(--u)*4)}
.sr-logo{display:flex;flex-direction:column;align-items:flex-start;position:relative;transform:rotate(-5deg)}
.sr-peak{width:calc(var(--u)*24);height:calc(var(--u)*12);margin-inline-start:calc(var(--u)*6)}
.sr-peak svg{width:100%;height:100%;overflow:visible}
.sr-tag{position:absolute;top:calc(var(--u)*2);inset-inline-start:calc(var(--u)*27);font-weight:900;font-size:calc(var(--u)*3);color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #2a3a6a;paint-order:stroke fill;white-space:nowrap;letter-spacing:.04em}
.sr-name{font-weight:900;font-size:calc(var(--u)*11);line-height:.95;color:#eaf8ff;font-style:italic;-webkit-text-stroke:calc(var(--u)*1) #1a3a8a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1) 0 #ff6a2a,0 calc(var(--u)*1.6) 0 #1a3a8a,0 0 calc(var(--u)*3) rgba(150,220,255,.8);white-space:nowrap}
.sr-logo.small{transform:none;align-items:center}
.sr-logo.small .sr-name{font-size:calc(var(--u)*8)}
.sr-logo.small .sr-peak{margin:0;width:calc(var(--u)*18);height:calc(var(--u)*9)}
.sr-logo.small .sr-tag{position:static;-webkit-text-stroke:0;color:#4a5a9a}
.sr-chips{position:absolute;top:calc(var(--u)*46);left:calc(var(--u)*4);display:flex;flex-direction:column;gap:calc(var(--u)*1.4)}
.sr-chip{font-family:inherit;font-weight:900;font-size:calc(var(--u)*3.6);color:#2a3a6a;background:rgba(255,255,255,.82);border:calc(var(--u)*.5) solid #fff;border-radius:999px;padding:calc(var(--u)*1) calc(var(--u)*3);min-height:44px;cursor:pointer;text-align:start;box-shadow:0 calc(var(--u)*.5) calc(var(--u)*1.2) rgba(20,20,60,.2)}
.sr-chip.on{background:linear-gradient(180deg,#ff9a4a,#e8582a);color:#fff;border-color:#ffd0a0}
.sr-chip.lock{opacity:.6}
.sr-easy{position:absolute;top:calc(var(--u)*40);left:calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*3.4);color:#2a3a6a}
.sr-drag{position:absolute;left:50%;top:58%;transform:translateX(-50%);background:rgba(40,46,80,.78);border:calc(var(--u)*.4) solid rgba(255,255,255,.4);color:#fff;font-weight:900;font-size:calc(var(--u)*3.6);border-radius:999px;padding:calc(var(--u)*1.2) calc(var(--u)*4);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*1.6);letter-spacing:.03em}
.sr-hand{font-size:calc(var(--u)*6);animation:sr-hand 1.4s ease-in-out infinite}
@keyframes sr-hand{0%,100%{transform:translateX(calc(var(--u)*-3))}50%{transform:translateX(calc(var(--u)*3))}}
.sr-big{position:absolute;left:50%;top:36%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*22);color:#fff;-webkit-text-stroke:calc(var(--u)*1.2) #1a1a2a;paint-order:stroke fill;text-shadow:0 calc(var(--u)*1.2) 0 #1a1a2a;animation:sr-pop .9s ease-out forwards;white-space:nowrap}
.sr-big.go{color:#6ae84a;font-size:calc(var(--u)*18)}
@keyframes sr-pop{0%{transform:translate(-50%,-50%) scale(1.8);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}80%{opacity:1}100%{transform:translate(-50%,-50%) scale(.9);opacity:0}}
.sr-word{position:absolute;left:50%;top:24%;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*7.4);color:#fff;-webkit-text-stroke:calc(var(--u)*.8) #2a2a40;paint-order:stroke fill;letter-spacing:.04em;white-space:nowrap;animation:sr-word 1.3s ease-out forwards}
.sr-word.wind{color:#ffe07a;-webkit-text-stroke-color:#1a1a2a}
.sr-word.shield{color:#e8f4ff}
.sr-word.pill{-webkit-text-stroke:0;font-size:calc(var(--u)*4.6);background:rgba(255,255,255,.9);color:#c8cad8;border:calc(var(--u)*.5) solid #c8cad8;border-radius:999px;padding:calc(var(--u)*.8) calc(var(--u)*4);top:45%;color:#7a7a9a}
@keyframes sr-word{0%{transform:translate(-50%,-50%) scale(.4);opacity:0}15%{transform:translate(-50%,-50%) scale(1.1);opacity:1}25%{transform:translate(-50%,-50%) scale(1)}80%{opacity:1}100%{transform:translate(-50%,-70%);opacity:0}}
.sr-plus{position:absolute;transform:translate(-50%,-50%);font-weight:900;font-size:calc(var(--u)*4.6);color:#ff9a2a;-webkit-text-stroke:calc(var(--u)*.35) #fff;paint-order:stroke fill;pointer-events:none;white-space:nowrap}
.sr-dim{position:absolute;inset:0;background:rgba(30,34,70,.45);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*4);box-sizing:border-box}
.sr-card-end{background:linear-gradient(180deg,#ffffff,#e8eefc);border:calc(var(--u)*.7) solid #fff;border-radius:calc(var(--u)*6);padding:calc(var(--u)*4) calc(var(--u)*5);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.8);width:calc(var(--u)*82);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;box-shadow:0 calc(var(--u)*2) calc(var(--u)*6) rgba(20,20,60,.45);color:#2a3a6a;animation:sr-in .45s cubic-bezier(.2,1.4,.4,1)}
@keyframes sr-in{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
.sr-medal{font-size:calc(var(--u)*15);line-height:1}
.sr-endtitle{font-weight:900;font-size:calc(var(--u)*6);text-align:center}
.sr-endsub{font-weight:700;font-size:calc(var(--u)*4);text-align:center;color:#3a8a5a}
.sr-stats{display:flex;gap:calc(var(--u)*2);width:100%}
.sr-stats>div{flex:1;background:#fff;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.4);display:flex;flex-direction:column;align-items:center;box-shadow:inset 0 0 0 calc(var(--u)*.4) #d8e0f4}
.sr-stats small{font-size:calc(var(--u)*3);color:#6a7aa8;font-weight:700}
.sr-stats b{font-size:calc(var(--u)*5);font-weight:900}
.sr-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*5.2);color:#fff;border:none;border-radius:999px;padding:calc(var(--u)*1.6) calc(var(--u)*6);min-height:max(50px,calc(var(--u)*11.5));cursor:pointer;background:linear-gradient(180deg,#ff9a4a,#e8582a);box-shadow:0 calc(var(--u)*.9) 0 #a83a14,inset 0 calc(var(--u)*.5) 0 rgba(255,255,255,.35);width:100%}
.sr-btn.alt{background:linear-gradient(180deg,#5a8ae8,#2a5ac8);box-shadow:0 calc(var(--u)*.9) 0 #1a3a8a;font-size:calc(var(--u)*4.4)}
.sr-btn:active{transform:translateY(calc(var(--u)*.5))}
.sr-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*32);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}

.land .sr-cards{left:auto;right:calc(var(--u)*2.4);bottom:auto;top:calc(var(--u)*17);transform:none;flex-direction:column;gap:calc(var(--u)*1.2)}
.land .sr-card{width:calc(var(--u)*13);height:calc(var(--u)*17.5);border-radius:calc(var(--u)*4)}
.land .sr-card img{bottom:calc(var(--u)*-1)}
.land .sr-badge{font-size:calc(var(--u)*2.2)}
.land .sr-score{font-size:calc(var(--u)*2.8);bottom:calc(var(--u)*1.4)}
.land .sr-you{display:none}
.land .sr-card-end{width:calc(var(--u)*120);display:grid;grid-template-columns:1fr 1fr;align-items:center;column-gap:calc(var(--u)*4)}
.land .sr-card-end>*{grid-column:2}
.land .sr-card-end>.sr-logo,.land .sr-card-end>.sr-medal{grid-column:1}
.land .sr-card-end>.sr-logo{grid-row:1/3}
.land .sr-card-end>.sr-medal{grid-row:3/6;font-size:calc(var(--u)*24)}
.land .sr-exit{bottom:calc(var(--u)*4)}
.land .sr-drag{top:62%}
`;var kA={go:2,nitro:3,overtake:3,near:3,bump:3,pickup:2,win:2,lose:2,count:1},Lc=.16,fe=i=>i*Lc,Uc=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),iu(e.lang),su(e.gender==="girl"),this.age=Number(e.age)||5,this.easy=this.age<=4,this.save=Ph(e.save),this.base=e.base||"./",this.sound=new Zi,this.sound.muted=this.save.muted,this.voice=new ea({base:this.base,lang:Qi(),girl:e.gender==="girl",clips:kA}),this.voice.setMuted(this.sound.muted),this._voiceArm=()=>this.voice.unlock(),document.addEventListener("pointerdown",this._voiceArm,!0),document.getElementById("sr-style")||document.head.append(ht("style",{id:"sr-style"},ru)),this.root=ht("div",{class:"sr-root",dir:Qi()==="en"?"ltr":"rtl"}),t.append(this.root),this.renderer=new Rr({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=xe,this.renderer.toneMapping=pc,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fc,this.root.append(this.renderer.domElement),this.layer=ht("div",{class:"sr-layer"}),this.root.append(this.layer),this.scene=new xs,this.scene.background=new Dt(14212336),this.scene.fog=new Pr(14212336,38,120),this.camera=new Ee(55,1,.1,400),this.scene.add(new Rs(15922431,9081016,1.7));let s=new Ps(16774376,2.1);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-14,right:14,top:18,bottom:-10,near:1,far:60}),this.sun=s,this.scene.add(s,s.target),this.starTex=Jh(),this.puffTex=jh(),this.fx=[],this.floaters=[],this.runners=ji.map(r=>{let a=Ec(r);return this.scene.add(a.root),a}),this.bubble=zh(),this.bubble.visible=!1,this.scene.add(this.bubble),this.snow=this._snowfall(),this.portraits=ji.map(r=>this._portrait(r)),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.clock=new Yr,this._fonts().then(()=>this.showMenu(Math.min(this.save.unlocked,hi.length)-1)),this._loop()}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_resize(){let t=this.el.getBoundingClientRect();this.w=t.width||window.innerWidth,this.h=t.height||window.innerHeight,this.u=Math.min(this.w,this.h)/100,this.root.style.setProperty("--u",`${this.u}px`),this.root.classList.toggle("land",this.w>this.h*1.1),this.renderer.setSize(this.w,this.h,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=this.w/this.h,this.camera.fov=this.camera.aspect<1?62:50,this.camera.updateProjectionMatrix()}_portrait(t){let n=new Qe(160,200,{samples:4});n.texture.colorSpace=xe;let s=new xs;s.add(new Rs(16777215,9079480,2.2));let r=new Ps(16777215,1.6);r.position.set(1,2,3),s.add(r);let a=Ec(t);wc(a,0,0),a.arms[0].sh.rotation.z=-.35,a.arms[1].sh.rotation.z=.35,a.root.rotation.y=.25,s.add(a.root);let o=new Ee(30,.8,.1,20);o.position.set(0,1.72,2.2),o.lookAt(0,1.6,0);let c=this.renderer.getRenderTarget();this.renderer.setRenderTarget(n),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(s,o);let l=new Uint8Array(160*160*1.25*4);this.renderer.readRenderTargetPixels(n,0,0,160,160*1.25,l),this.renderer.setRenderTarget(c);let h=document.createElement("canvas");h.width=160,h.height=160*1.25;let u=h.getContext("2d"),f=u.createImageData(160,160*1.25);for(let d=0;d<160*1.25;d++)f.data.set(l.subarray((160*1.25-1-d)*160*4,(160*1.25-d)*160*4),d*160*4);return u.putImageData(f,0,0),n.dispose(),h.toDataURL()}_buildWorld(t){this.world&&(this.scene.remove(this.world),this.world.traverse(h=>{h.geometry&&h.geometry.dispose()}));let e=this.world=new Qt;this.scene.add(e),this.panoMesh&&(this.scene.remove(this.panoMesh),this.panoMesh.material.map.dispose(),this.panoMesh.material.dispose());{let h=new Wr().load(`${this.base}art/pano${(t.id-1)%3+1}.webp`,()=>{u.visible=!0});h.colorSpace=xe,h.wrapS=ps,h.repeat.set(2,.66),h.offset.set(0,.34);let u=new Et(new tn(300,300,240,48,1,!0),new Pe({map:h,side:we,fog:!1}));u.visible=!1,u.renderOrder=-10,this.panoMesh=u,this.scene.add(u)}let n=t.len+120,s=Math.atan(Lc),r=n/Math.cos(s),a=new Et(new $e(4.6*2+1.2,r),new en({map:Yh(),roughness:.95}));a.material.map.repeat.set(1,r/14),a.rotation.x=-Math.PI/2+s,a.position.set(0,fe(n/2-40),-(n/2-40)),a.receiveShadow=!0,e.add(a);for(let h of[-1,1]){let u=new Et(new $e(40,r),new en({map:Kh(),roughness:1}));u.material.map.repeat.set(4,r/20),u.rotation.x=-Math.PI/2+s,u.position.set(h*(4.6+.6+19.6),fe(n/2-40)+.35,-(n/2-40)),u.receiveShadow=!0,e.add(u)}let o=t.id*101,c=()=>(o=o*16807%2147483647,o/2147483647);for(let h=-30;h<n;h+=5+c()*6)for(let u of[-1,1]){if(c()<.75){let f=kh(.9+c()*.8),d=u*(4.6+2.5+c()*10);f.position.set(d,fe(h)+Math.abs(d)*.12,-h),e.add(f)}if(c()<.2){let f=Hh(.5+c()*.6,h);f.position.set(u*(4.6+1.3+c()*2),fe(h)+.15,-h),e.add(f)}}for(let h=6;h<t.len+10;h+=16)for(let u of[-1,1]){let f=Gh(15249450);f.position.set(u*(4.6+.9),fe(h),-h),u>0&&(f.userData.flag.scale.x=-1),e.add(f)}for(let h of this.race.lay.checks){let u=new Et(new $e(4.6*2+1,.22),new Pe({color:16762938,transparent:!0,opacity:.55,depthWrite:!1}));u.rotation.x=-Math.PI/2+s,u.position.set(0,fe(h)+.03,-h),e.add(u)}let l=Wh(4.6*2+1.2);l.position.set(0,fe(t.len),-t.len),e.add(l);for(let h=0;h<9;h++){let u=Xh(28+c()*30,40+c()*40,h);u.position.set((h-4)*45+(c()-.5)*20,fe(t.len)-10,-t.len-70-c()*60),e.add(u)}this.crystalMeshes=this.race.lay.crystals.map(h=>{let u=Fh();return u.position.set(h.x,fe(h.s)+.75,-h.s),e.add(u),u});for(let h of this.race.lay.pads){let u=Bh();u.rotation.x=-Math.PI/2+s,u.position.set(h.x,fe(h.s)+.03,-h.s),e.add(u)}this.orbMeshes=this.race.lay.orbs.map(h=>{let u=Oh(h.kind);return u.position.set(h.x,fe(h.s)+1,-h.s),e.add(u),u}),this.hazMeshes=new Map}_snowfall(){let e=new Ce,n=new Float32Array(500*3);for(let r=0;r<500;r++)n[r*3]=(Math.random()-.5)*40,n[r*3+1]=Math.random()*20,n[r*3+2]=-Math.random()*50;e.setAttribute("position",new Re(n,3));let s=new Ur(e,new vs({color:16777215,size:.09,transparent:!0,opacity:.85,depthWrite:!1}));return this.scene.add(s),s}_bind(){let t=this.root;for(let s of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(s,()=>this.sound.unlock(),{capture:!0,passive:!0});let e=null;t.addEventListener("pointerdown",s=>{s.target.closest("button")||s.target.closest(".sr-dim")||s.target.closest(".sr-chips")||(e={x:s.clientX,want:this.race?this.race.me.want:0},this.mode==="menu"&&this._startRace())}),t.addEventListener("pointermove",s=>{if(!e||!this.race||this.race.state==="count"&&this.mode!=="race")return;let r=Math.min(this.w,this.h*.75)*.5;this.race.steer(e.want+(s.clientX-e.x)/r*4.6),this.hint&&(this.hint.remove(),this.hint=null)});let n=()=>{e=null};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),this._onKey=s=>{if(!this.race||this.mode!=="race"){this.mode==="menu"&&(s.key==="Enter"||s.key===" ")&&this._startRace();return}if(s.key==="ArrowLeft")this.race.steer(this.race.me.want-1.8);else if(s.key==="ArrowRight")this.race.steer(this.race.me.want+1.8);else return;s.preventDefault()},window.addEventListener("keydown",this._onKey),this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=ht("button",{class:"sr-soundpill",onclick:s=>{s.stopPropagation(),this.sound.unlock()}},Nt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700)}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_soundBtn(){let t=ht("button",{class:"sr-round","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.addEventListener("click",e=>{e.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.voice.setMuted(this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),t}showMenu(t){this.mode="menu",this.ci=t,this.race=new Qr(t,{easy:this.easy,seed:Math.floor(Math.random()*1e6)}),this._buildWorld(this.race.course),this._clearHaz(),this.sound.setMode("menu"),this.layer.replaceChildren(),this._hud();let e=ht("div",{class:"sr-chips"},hi.map((n,s)=>{let r=n.id>this.save.unlocked,a=this.save.best[n.id];return ht("button",{class:`sr-chip${s===t?" on":""}${r?" lock":""}`,onclick:o=>{if(o.stopPropagation(),r){this._float(Nt("locked"),"pill");return}this.sound.play("tap"),this.showMenu(s)}},r?"\u{1F512} ":a?`${["\u{1F947}","\u{1F948}","\u{1F949}","\u{1F3C5}"][a-1]} `:"",Nt(`c${n.id}`))}));this.layer.append(ht("div",{class:"sr-logo-wrap"},ia(Nt("title"),Nt("tagline"))),e,this.hint=ht("div",{class:"sr-drag"},ht("span",{class:"sr-hand"},"\u{1F446}"),Nt("drag")),ht("button",{class:"sr-round sr-exit","aria-label":Nt("exit"),onclick:n=>{n.stopPropagation(),this._saveNow(),this.post({type:"exit"})}},Qi()==="en"?"\u2190":"\u2192")),this.easy&&this.layer.append(ht("div",{class:"sr-easy"},"\u{1F31F} ",Nt("easy")))}_startRace(){if(this.mode==="menu"){this.mode="race",this.sound.setMode("race"),this.streak=0,this.lastCrystalT=-9;for(let t of[...this.layer.querySelectorAll(".sr-logo-wrap,.sr-chips,.sr-easy,.sr-exit")])t.remove();this._big(He(3),"count"),this.sound.play("count")}}_hud(){let t=this.race;this.hudEl={};let e=t.lay.checks.map(s=>ht("i",{class:"sr-tick",style:`${Qi()==="en"?"left":"right"}:${s/t.course.len*100}%`})),n=$r.map((s,r)=>ht("b",{class:`sr-pdot${r===0?" me":""}`,style:`background:${ji[r].card[0]}`}));this.hudEl.dots=n,this.hudEl.hearts=ht("div",{class:"sr-hearts"}),this.hudEl.clock=ht("div",{class:"sr-clock"},ht("i"),ht("span")),this.hudEl.clock.firstChild.innerHTML='<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="rgba(30,30,60,.55)" stroke="rgba(255,255,255,.35)" stroke-width="4"/><circle class="sr-ring" cx="20" cy="20" r="16" fill="none" stroke="#ff8a2a" stroke-width="4" stroke-linecap="round" transform="rotate(-90 20 20)" stroke-dasharray="100.5" stroke-dashoffset="0"/></svg>',this.layer.append(ht("div",{class:"sr-top"},ht("div",{class:"sr-left"},this._soundBtn(),this.hudEl.hearts),ht("div",{class:"sr-track"},ht("div",{class:"sr-line"},e,ht("i",{class:"sr-flagend"},"\u{1F3C1}"),n)),this.hudEl.clock)),this.hudEl.cards=$r.map((s,r)=>{let a=ht("div",{class:"sr-badge"}),o=ht("div",{class:"sr-score"}),c=r===0?ht("div",{class:"sr-you"},Nt("you")):null;return{card:ht("div",{class:`sr-card${r===0?" me":""}`,style:`background:linear-gradient(180deg,${ji[r].card[0]},${ji[r].card[1]})`},a,ht("img",{src:this.portraits[r],alt:""}),o,c),badge:a,score:o}}),this.layer.append(ht("div",{class:"sr-cards"},this.hudEl.cards.map(s=>s.card))),this._updateHud(!0)}_updateHud(t){let e=this.race;if(!e||!this.hudEl)return;let n=e.me,s=this.easy?3:n.lives;(t||this._lastHearts!==s)&&(this._lastHearts=s,this.hudEl.hearts.replaceChildren(...[0,1,2].map(o=>ht("span",{class:o<s?"":"off"},"\u2665"))));let r=Math.ceil(e.remaining);this.hudEl.clock.lastChild.textContent=He(r),this.hudEl.clock.querySelector(".sr-ring").setAttribute("stroke-dashoffset",String(100.5*(1-e.remaining/e.time))),this.hudEl.clock.classList.toggle("low",r<=10&&e.state==="run");let a=Qi()==="en"?"left":"right";e.runners.forEach((o,c)=>{this.hudEl.dots[c].style[a]=`${Math.min(1,o.s/e.course.len)*100}%`;let l=this.hudEl.cards[c],h=e.rankOf(o);l.badge.textContent=Nt(`p${h}`),l.badge.classList.toggle("gold",h===1),l.score.textContent=He(o.score),l.card.classList.toggle("down",o.down>0),l.card.style.order=String(h)})}_big(t,e){let n=ht("div",{class:`sr-big ${e}`},t);this.layer.append(n),setTimeout(()=>n.remove(),900)}_float(t,e="word"){let n=ht("div",{class:`sr-word ${e}`},t);this.layer.append(n),setTimeout(()=>n.remove(),1300)}_plus(t,e){let n=ht("div",{class:"sr-plus"},t);this.layer.append(n),this.floaters.push({e:n,pos:e.clone(),t:0})}_sparkle(t,e=10,n=16777215){for(let s=0;s<e;s++){let r=new Cs(new Gi({map:this.starTex,color:n,transparent:!0,depthWrite:!1}));r.position.copy(t);let a=Math.random()*Math.PI*2;r.userData={v:new w(Math.cos(a)*1.6,1+Math.random()*2,Math.sin(a)*1.2),life:.7+Math.random()*.3,size:.18+Math.random()*.2},r.scale.setScalar(r.userData.size),this.scene.add(r),this.fx.push(r)}}_puff(t,e=8,n=.8){for(let s=0;s<e;s++){let r=new Cs(new Gi({map:this.puffTex,transparent:!0,depthWrite:!1}));r.position.copy(t).add(new w((Math.random()-.5)*.8,Math.random()*.4,(Math.random()-.5)*.8)),r.userData={v:new w((Math.random()-.5)*1.5,.6+Math.random(),(Math.random()-.5)*1.5),life:.8,size:n,grow:!0},r.scale.setScalar(n),this.scene.add(r),this.fx.push(r)}}_events(t){let e=this.race.me,n=new w(e.x,fe(e.s)+1.2,-e.s);for(let s of t)switch(s.type){case"count":this._big(He(s.n),"count"),this.sound.play("count"),s.n>=3&&this.voice.say("count");break;case"go":this._big(Nt("go"),"go"),this.sound.play("go"),this.voice.say("go"),this.hint&&(this.hint.remove(),this.hint=null);break;case"crystal":this.voice.say("pickup");{let r=this.race.t;this.streak=r-this.lastCrystalT<.6?this.streak+1:0,this.lastCrystalT=r,this.sound.play("crystal",this.streak);let a=new w(s.x,fe(s.s)+.8,-s.s);this._sparkle(a,6,16769658),this._sparkle(n,4),this._plus(`+${He(10)}`,a);break}case"dodge":this._float(Nt("dodge")),this.sound.play("dodge"),this.voice.say("near"),this._sparkle(n,12),this._plus(`+${He(5)}`,n);break;case"overtake":this._float(Nt("overtake")),this.sound.play("overtake"),this.voice.say("overtake"),this._plus(`+${He(20)}`,n);break;case"boost":this.sound.play("boost"),this.voice.say("nitro"),this._puff(n.clone().setY(n.y-1),6,.6);break;case"tailwind":this._float(Nt("tailwind"),"wind"),this.sound.play("tailwind"),this.voice.say("nitro"),this._puff(n,10,1);break;case"shield":this._float(Nt("shield"),"shield"),this.sound.play("shield");break;case"blocked":this._float(Nt("blocked"),"shield"),this.sound.play("blocked"),this._sparkle(n,14,13625599);break;case"wipeout":this._float(Nt("wipeout"),"pill"),this.sound.play("wipeout"),this.voice.say("bump"),this.easy||this.sound.play("heart"),this._puff(n.clone().setY(n.y-.8),12,1),this.shake=.45;break;case"up":this.sound.play("up");break;case"summit":this.sound.play("summit");break;case"finish":setTimeout(()=>this._winCard(s.place),1200);break;case"out":this.sound.play("lose"),this.voice.say("lose"),setTimeout(()=>this._loseCard("out"),900);break;case"timeup":this.sound.play("lose"),this.voice.say("lose"),setTimeout(()=>this._loseCard("time"),600);break;default:}}_winCard(t){this.mode="end",this.voice.say(t===1?"win":"lose"),this.sound.setMode("end");let e=this.race.course,n=this.save.best[e.id];(!n||t<n)&&(this.save.best[e.id]=t),e.id+1>this.save.unlocked&&e.id<hi.length&&(this.save.unlocked=e.id+1);let s=this.race.lay.crystals.filter(a=>a.got).length;this.save.crystals=Math.min(999999,this.save.crystals+s),this._saveNow();let r=this.ci+1>=hi.length;this.layer.append(ht("div",{class:"sr-dim"},ht("div",{class:"sr-card-end"},ia(Nt("title"),Nt(`c${e.id}`),!0),ht("div",{class:"sr-medal"},["\u{1F947}","\u{1F948}","\u{1F949}","\u{1F3C5}"][t-1]),ht("div",{class:"sr-endtitle"},Nt("summit")),ht("div",{class:"sr-endsub"},t===1?Nt("win1"):Nt("winN")),ht("div",{class:"sr-stats"},ht("div",{},ht("small",{},Nt("place")),ht("b",{},Nt(`p${t}`))),ht("div",{},ht("small",{},Nt("score")),ht("b",{},He(this.race.me.score))),ht("div",{},ht("small",{},Nt("crystals")),ht("b",{},"\u{1F48E} ",He(s)))),r?null:ht("button",{class:"sr-btn",onclick:()=>this.showMenu(this.ci+1)},Nt("next")," \u25B6"),ht("button",{class:`sr-btn${r?"":" alt"}`,onclick:()=>this.showMenu(this.ci)},"\u21BB ",Nt("again")),ht("button",{class:"sr-btn alt",onclick:()=>this.showMenu(this.ci)},Nt("courses")))))}_loseCard(t){this.mode="end",this.sound.setMode("end"),this.layer.append(ht("div",{class:"sr-dim"},ht("div",{class:"sr-card-end"},ia(Nt("title"),Nt(`c${this.race.course.id}`),!0),ht("div",{class:"sr-medal"},t==="out"?"\u2744\uFE0F":"\u23F1\uFE0F"),ht("div",{class:"sr-endtitle"},t==="out"?Nt("outTitle"):Nt("timeTitle")),ht("div",{class:"sr-endsub"},t==="out"?Nt("outText"):Nt("timeText")),ht("div",{class:"sr-stats"},ht("div",{},ht("small",{},Nt("score")),ht("b",{},He(this.race.me.score))),ht("div",{},ht("small",{},Nt("crystals")),ht("b",{},"\u{1F48E} ",He(this.race.lay.crystals.filter(e=>e.got).length)))),ht("button",{class:"sr-btn",onclick:()=>this.showMenu(this.ci)},"\u21BB ",Nt("again")))))}_clearHaz(){if(this.hazMeshes){for(let t of this.hazMeshes.values())this.world.remove(t.root),this.world.remove(t.ladder);this.hazMeshes.clear()}}_syncHazards(t){let e=this.race,n=Math.atan(Lc),s=new Set,r=0;for(let a of e.hazards){s.add(a.id);let o=this.hazMeshes.get(a.id);if(o||(o=a.kind==="log"?Nh(a.half,a.r):a.kind==="boulder"?Uh(a.r,a.id):Dh(a.r,a.id),o.ladder=qh(a.kind==="log"?a.half*2+.4:a.r*2+.3),o.ladder.rotation.x=-Math.PI/2+n,this.world.add(o.root,o.ladder),this.hazMeshes.set(a.id,o)),o.root.position.set(a.x,fe(a.s)+a.r,-a.s),a.kind==="log"){o.spin.rotation.x=-a.roll;let h=Math.abs(Math.sin(a.roll*.5));o.root.position.y+=h*.15,h<.06&&!o.knock&&Math.abs(a.s-e.me.s)<30&&(o.knock=!0,this.sound.play("log")),h>.5&&(o.knock=!1)}else o.spin.rotation.x=-a.roll;let c=Math.max(2,Math.min(26,a.s-e.me.s+6));o.ladder.scale.set(1,c,1),o.ladder.material.map.repeat.set(1,c/14),o.ladder.position.set(a.x,fe(a.s-c/2)+.025,-(a.s-c/2)),o.ladder.visible=a.s>e.me.s-2;let l=a.s-e.me.s;l>-3&&l<22&&(r=Math.max(r,(1-Math.max(0,l)/22)*(Math.abs(a.x-e.me.x)<3?1:.4)))}for(let[a,o]of this.hazMeshes)s.has(a)||(this.world.remove(o.root,o.ladder),o.ladder.material.map.dispose(),o.ladder.material.dispose(),this.hazMeshes.delete(a));return r}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime,n=this.race;if(!n){this.renderer.render(this.scene,this.camera);return}(this.mode==="race"||this.mode==="end")&&this._events(n.step(t));let s=this._syncHazards(e);n.runners.forEach((d,m)=>{let A=this.runners[m],g=fe(d.s);A.root.position.set(d.x,g,-d.s),A.root.rotation.y=Math.PI+(d.want-d.x)*-.12;let p=this.mode!=="menu"&&n.state!=="count"&&d.down<=0&&!(d.finished&&d.s>=n.course.len+3);if(d.down>0)d._fall=(d._fall||0)+t,Lh(A,d._fall);else if(d._fall=0,d._ph=(d._ph||m)+t*(p?11*(d.boost>0?1.3:1):0),wc(A,d._ph,p?1:.05),d.me&&p){let _=Math.floor(d._ph/Math.PI);_!==this._lastStep&&(this._lastStep=_,this.sound.play("step",d.boost>0?1:0))}A.root.visible=!(d.safe>0&&Math.floor(e*12)%2===0)});let r=n.me;this.bubble.visible=r.shield>0,this.bubble.position.set(r.x,fe(r.s)+.95,-r.s),this.bubble.material.opacity=.25+Math.sin(e*6)*.08,r.wind>0&&Math.random()<t*14&&this._puff(new w(r.x,fe(r.s)+.4,-r.s+.4),1,.7),r.boost>0&&Math.random()<t*20&&this._sparkle(new w(r.x,fe(r.s)+.2,-r.s+.3),1,10152703),this.crystalMeshes.forEach((d,m)=>{let A=n.lay.crystals[m];d.visible=!A.got&&A.s>r.s-6&&A.s<r.s+90,d.visible&&(d.rotation.y=e*2.4+m,d.position.y=fe(A.s)+.75+Math.sin(e*3+m)*.08)}),this.orbMeshes.forEach((d,m)=>{let A=n.lay.orbs[m];d.visible=!A.got,d.userData.ring.rotation.set(e*2,e*1.3,0),d.userData.halo.scale.setScalar(1+Math.sin(e*4)*.12)});let a=this.camera.aspect<1,o=fe(r.s),c=a?7:7.8,l=a?5.4:4.6,h=new w(r.x*.8,o+l,-r.s+c);this.mode==="menu"&&h.set(r.x*.5,o+(a?3.2:3),-r.s+(a?6:7)),this.camPos||(this.camPos=h.clone()),this.camPos.lerp(h,Math.min(1,t*5)),this.camera.position.copy(this.camPos),this.shake>0&&(this.shake-=t,this.camera.position.x+=(Math.random()-.5)*this.shake*.5,this.camera.position.y+=(Math.random()-.5)*this.shake*.4),this.camera.lookAt(r.x*.75,o+(a?1.2:1.4),-r.s-7),this.panoMesh&&this.panoMesh.position.set(this.camera.position.x,this.camera.position.y+60,this.camera.position.z);let u=(a?62:50)+(r.boost>0||r.wind>0?6:0);Math.abs(this.camera.fov-u)>.05&&(this.camera.fov+=(u-this.camera.fov)*Math.min(1,t*4),this.camera.updateProjectionMatrix()),this.sun.position.set(r.x-6,o+16,-r.s+6),this.sun.target.position.set(r.x,o,-r.s-6);let f=this.snow.geometry.attributes.position;for(let d=0;d<f.count;d++){let m=f.getY(d)-t*1.4;m<-2&&(m=18),f.setY(d,m),f.setX(d,f.getX(d)+Math.sin(e+d)*t*.2)}f.needsUpdate=!0,this.snow.position.set(r.x,o-2,-r.s-8);for(let d=this.fx.length-1;d>=0;d--){let m=this.fx[d],A=m.userData;A.life-=t,m.position.addScaledVector(A.v,t),A.v.y-=(A.grow?.5:3)*t,m.material.opacity=Math.max(0,A.life*1.4),A.grow&&m.scale.setScalar(A.size*(1+(.8-A.life))),A.life<=0&&(this.scene.remove(m),m.material.dispose(),this.fx.splice(d,1))}for(let d=this.floaters.length-1;d>=0;d--){let m=this.floaters[d];m.t+=t;let A=m.pos.clone().project(this.camera);m.e.style.left=`${(A.x*.5+.5)*this.w}px`,m.e.style.top=`${(-A.y*.5+.5)*this.h-m.t*this.u*14}px`,m.e.style.opacity=String(Math.max(0,1-m.t/1.1)),m.t>1.1&&(m.e.remove(),this.floaters.splice(d,1))}this.sound.setRun(this.mode==="race"&&n.state==="run"&&r.down<=0?r.boost>0?1.4:r.wind>0?1.2:.8:.2,this.mode==="race"?s:0),this._updateHud(),this.renderer.render(this.scene,this.camera)}pause(){this.sound.suspend()}dispose(){cancelAnimationFrame(this._raf),clearInterval(this._pill),window.removeEventListener("keydown",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.sound.dispose(),this.voice.dispose(),document.removeEventListener("pointerdown",this._voiceArm,!0),this.ro&&this.ro.disconnect(),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},Dc={start(i,t,e){let n=new Uc(i,t||{},e);return Dc.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.SummitRush=Dc;var c0=Dc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
