(()=>{var Sl="170";var Ru=0,lc=1,Pu=2;var Ch=1,bl=2,_n=3,kn=0,Pe=1,Qe=2,un=0,qi=1,zi=2,cc=3,hc=4,Lu=5,ii=100,Uu=101,Du=102,Nu=103,qu=104,Fu=200,Bu=201,Ou=202,zu=203,$a=204,to=205,ku=206,Hu=207,Gu=208,Wu=209,Xu=210,Yu=211,ju=212,Ku=213,Ju=214,eo=0,no=1,io=2,ki=3,so=4,ro=5,ao=6,oo=7,vh=0,Zu=1,Qu=2,zn=0,El=1,wl=2,Tl=3,Hs=4,$u=5,Vl=6,Rl=7;var _h=300,Hi=301,Gi=302,lo=303,co=304,ia=306,Wi=1e3,ri=1001,Ss=1002,tn=1003,td=1004;var Ks=1005;var hn=1006,xa=1007;var ai=1008;var En=1009,yh=1010,Ih=1011,bs=1012,Pl=1013,oi=1014,In=1015,an=1016,Ll=1017,Ul=1018,Xi=1020,Mh=35902,Sh=1021,bh=1022,$e=1023,Eh=1024,wh=1025,Fi=1026,Yi=1027,Th=1028,Dl=1029,Vh=1030,Nl=1031;var ql=1033,Sr=33776,br=33777,Er=33778,wr=33779,ho=35840,uo=35841,fo=35842,po=35843,go=36196,mo=37492,Ao=37496,xo=37808,Co=37809,vo=37810,_o=37811,yo=37812,Io=37813,Mo=37814,So=37815,bo=37816,Eo=37817,wo=37818,To=37819,Vo=37820,Ro=37821,Tr=36492,Po=36494,Lo=36495,Rh=36283,Uo=36284,Do=36285,No=36286;var Vr=2300,qo=2301,Ca=2302,uc=2400,dc=2401,fc=2402;var ed=3200,nd=3201;var Ph=0,id=1,Bn="",me="srgb",is="srgb-linear",sa="linear",Kt="srgb";var Ai=7680;var pc=519,sd=512,rd=513,ad=514,Lh=515,od=516,ld=517,cd=518,hd=519,Fo=35044;var gc="300 es",Mn=2e3,Rr=2001,Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var va=Math.PI/180,Bo=180/Math.PI;function Sn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function ud(i,t){return(i%t+t)%t}function _a(i,t,e){return(1-e)*i+e*t}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Z=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],A=s[0],g=s[3],p=s[6],y=s[1],C=s[4],x=s[7],R=s[2],b=s[5],E=s[8];return r[0]=a*A+o*y+l*R,r[3]=a*g+o*C+l*b,r[6]=a*p+o*x+l*E,r[1]=c*A+h*y+u*R,r[4]=c*g+h*C+u*b,r[7]=c*p+h*x+u*E,r[2]=f*A+d*y+m*R,r[5]=f*g+d*C+m*b,r[8]=f*p+d*x+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=f*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=d*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ya=new Lt;function Uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=Es("canvas");return i.style.display="block",i}var mc={};function Cs(i){i in mc||(mc[i]=!0,console.warn(i))}function fd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Bt={enabled:!0,workingColorSpace:is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=bn(i.r),i.g=bn(i.g),i.b=bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ac=[.64,.33,.3,.6,.15,.06],xc=[.2126,.7152,.0722],Cc=[.3127,.329],vc=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Bt.define({[is]:{primaries:Ac,whitePoint:Cc,transfer:sa,toXYZ:vc,fromXYZ:_c,luminanceCoefficients:xc,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:Ac,whitePoint:Cc,transfer:Kt,toXYZ:vc,fromXYZ:_c,luminanceCoefficients:xc,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});var xi,Oo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=Es("canvas")),xi.width=t.width,xi.height=t.height;let n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Es("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},md=0,Pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ia(s[a].image)):r.push(Ia(s[a]))}else r=Ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ia(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ad=0,Ne=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=hn,a=ai,o=$e,l=En,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Sn(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Ss:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Ss:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=_h;Ne.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],A=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,x=(d+1)/2,R=(p+1)/2,b=(h+f)/4,E=(u+A)/4,V=(m+g)/4;return C>x&&C>R?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=b/n,r=E/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=V/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=V/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-A)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zo=class extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Pr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Me=class extends zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lr=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ko=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==f||c!==d||h!==m){let g=1-o,p=l*f+c*d+h*m+u*A,y=p>=0?1:-1,C=1-p*p;if(C>Number.EPSILON){let R=Math.sqrt(C),b=Math.atan2(R,p*y);g=Math.sin(g*b)/R,o=Math.sin(o*b)/R}let x=o*y;if(l=l*g+f*x,c=c*g+d*x,h=h*g+m*x,u=u*g+A*x,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ma=new w,yc=new Gn,li=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Zs.subVectors(this.max,ds),Ci.subVectors(t.a,ds),vi.subVectors(t.b,ds),_i.subVectors(t.c,ds),Ln.subVectors(vi,Ci),Un.subVectors(_i,vi),Jn.subVectors(Ci,_i);let e=[0,-Ln.z,Ln.y,0,-Un.z,Un.y,0,-Jn.z,Jn.y,Ln.z,0,-Ln.x,Un.z,0,-Un.x,Jn.z,0,-Jn.x,-Ln.y,Ln.x,0,-Un.y,Un.x,0,-Jn.y,Jn.x,0];return!Sa(e,Ci,vi,_i,Zs)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,Ci,vi,_i,Zs))?!1:(Qs.crossVectors(Ln,Un),e=[Qs.x,Qs.y,Qs.z],Sa(e,Ci,vi,_i,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mn=[new w,new w,new w,new w,new w,new w,new w,new w],Ke=new w,Js=new li,Ci=new w,vi=new w,_i=new w,Ln=new w,Un=new w,Jn=new w,ds=new w,Zs=new w,Qs=new w,Zn=new w;function Sa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xd=new li,fs=new w,ba=new w,ji=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(ba)),this.expandByPoint(fs.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new w,Ea=new w,$s=new w,Dn=new w,wa=new w,tr=new w,Ta=new w,Ur=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ea.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Ea);let r=t.distanceTo(e)*.5,a=-this.direction.dot($s),o=Dn.dot(this.direction),l=-Dn.dot($s),c=Dn.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let A=1/h;u*=A,f*=A,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ea).addScaledVector($s,f),d}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){wa.subVectors(e,t),tr.subVectors(n,t),Ta.crossVectors(wa,tr);let a=this.direction.dot(Ta),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,t);let l=o*this.direction.dot(tr.crossVectors(Dn,tr));if(l<0)return null;let c=o*this.direction.dot(wa.cross(Dn));if(c<0||l+c>a)return null;let h=-o*Dn.dot(Ta);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,m,A,g)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),a=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-A*c,e[9]=-o*l,e[2]=A-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,A=c*u;e[0]=f+A*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=A+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,A=c*u;e[0]=f-A*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+A,e[1]=l*u,e[5]=A*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-A*u}else if(t.order==="XZY"){let f=a*l,d=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+A,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=A*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cd,t,vd)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Nn.crossVectors(n,Fe),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Nn.crossVectors(n,Fe)),Nn.normalize(),er.crossVectors(Fe,Nn),s[0]=Nn.x,s[4]=er.x,s[8]=Fe.x,s[1]=Nn.y,s[5]=er.y,s[9]=Fe.y,s[2]=Nn.z,s[6]=er.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],A=n[6],g=n[10],p=n[14],y=n[3],C=n[7],x=n[11],R=n[15],b=s[0],E=s[4],V=s[8],M=s[12],_=s[1],T=s[5],O=s[9],B=s[13],H=s[2],K=s[6],G=s[10],tt=s[14],k=s[3],st=s[7],ut=s[11],_t=s[15];return r[0]=a*b+o*_+l*H+c*k,r[4]=a*E+o*T+l*K+c*st,r[8]=a*V+o*O+l*G+c*ut,r[12]=a*M+o*B+l*tt+c*_t,r[1]=h*b+u*_+f*H+d*k,r[5]=h*E+u*T+f*K+d*st,r[9]=h*V+u*O+f*G+d*ut,r[13]=h*M+u*B+f*tt+d*_t,r[2]=m*b+A*_+g*H+p*k,r[6]=m*E+A*T+g*K+p*st,r[10]=m*V+A*O+g*G+p*ut,r[14]=m*M+A*B+g*tt+p*_t,r[3]=y*b+C*_+x*H+R*k,r[7]=y*E+C*T+x*K+R*st,r[11]=y*V+C*O+x*G+R*ut,r[15]=y*M+C*B+x*tt+R*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+A*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+g*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],A=t[13],g=t[14],p=t[15],y=u*g*c-A*f*c+A*l*d-o*g*d-u*l*p+o*f*p,C=m*f*c-h*g*c-m*l*d+a*g*d+h*l*p-a*f*p,x=h*A*c-m*u*c+m*o*d-a*A*d-h*o*p+a*u*p,R=m*u*l-h*A*l-m*o*f+a*A*f+h*o*g-a*u*g,b=e*y+n*C+s*x+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=y*E,t[1]=(A*f*r-u*g*r-A*s*d+n*g*d+u*s*p-n*f*p)*E,t[2]=(o*g*r-A*l*r+A*s*c-n*g*c-o*s*p+n*l*p)*E,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*E,t[4]=C*E,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*E,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*p-e*l*p)*E,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*E,t[8]=x*E,t[9]=(m*u*r-h*A*r-m*n*d+e*A*d+h*n*p-e*u*p)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*E,t[12]=R*E,t[13]=(h*A*s-m*u*s+m*n*f-e*A*f-h*n*g+e*u*g)*E,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*g-e*o*g)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,A=a*h,g=a*u,p=o*u,y=l*c,C=l*h,x=l*u,R=n.x,b=n.y,E=n.z;return s[0]=(1-(A+p))*R,s[1]=(d+x)*R,s[2]=(m-C)*R,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(f+p))*b,s[6]=(g+y)*b,s[7]=0,s[8]=(m+C)*E,s[9]=(g-y)*E,s[10]=(1-(f+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=yi.set(s[0],s[1],s[2]).length(),a=yi.set(s[4],s[5],s[6]).length(),o=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);let c=1/r,h=1/a,u=1/o;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Mn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,m;if(o===Mn)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Rr)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h,m,A;if(o===Mn)m=(a+r)*u,A=-2*u;else if(o===Rr)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},yi=new w,Je=new oe,Cd=new w(0,0,0),vd=new w(1,1,1),Nn=new w,er=new w,Fe=new w,Ic=new oe,Mc=new Gn,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_d=0,Sc=new w,Ii=new Gn,xn=new oe,nr=new w,ps=new w,yd=new w,Id=new Gn,bc=new w(1,0,0),Ec=new w(0,1,0),wc=new w(0,0,1),Tc={type:"added"},Md={type:"removed"},Mi={type:"childadded",child:null},Va={type:"childremoved",child:null},Se=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new w,e=new dn,n=new Gn,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Lt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ps,nr,this.up):xn.lookAt(nr,ps,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(xn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tc),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tc),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new w(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=new w,Cn=new w,Ra=new w,vn=new w,Si=new w,bi=new w,Vc=new w,Pa=new w,La=new w,Ua=new w,Da=new ue,Na=new ue,qa=new ue,On=class i{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),Cn.subVectors(n,e),Ra.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(Cn),l=Ze.dot(Ra),c=Cn.dot(Cn),h=Cn.dot(Ra),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Da.setScalar(0),Na.setScalar(0),qa.setScalar(0),Da.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Da,r.x),a.addScaledVector(Na,r.y),a.addScaledVector(qa,r.z),a}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),Cn.subVectors(t,e),Ze.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),Ze.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Si.subVectors(s,n),bi.subVectors(r,n),Pa.subVectors(t,n);let l=Si.dot(Pa),c=bi.dot(Pa);if(l<=0&&c<=0)return e.copy(n);La.subVectors(t,s);let h=Si.dot(La),u=bi.dot(La);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Si,a);Ua.subVectors(t,r);let d=Si.dot(Ua),m=bi.dot(Ua);if(m>=0&&d<=m)return e.copy(r);let A=d*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(bi,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Vc.subVectors(r,s),o=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Vc,o);let p=1/(g+A+f);return a=A*p,o=f*p,e.copy(n).addScaledVector(Si,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Bt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Bt.workingColorSpace){if(t=ud(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fa(a,r,t+1/3),this.g=Fa(a,r,t),this.b=Fa(a,r,t-1/3)}return Bt.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Bt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ye(Ve.r*255,0,255))*65536+Math.round(ye(Ve.g*255,0,255))*256+Math.round(ye(Ve.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=me){Bt.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(ir);let n=_a(qn.h,ir.h,e),s=_a(qn.s,ir.s,e),r=_a(qn.l,ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Et;Et.NAMES=Dh;var Sd=0,wn=class extends Hn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Sn(),this.name="",this.blending=qi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=to,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},be=class extends wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new w,sr=new Z,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fo&&(t.usage=this.usage),t}};var Nr=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qr=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wt=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},bd=0,Ge=new oe,Ba=new Se,Ei=new w,Be=new li,gs=new li,ve=new w,de=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?qr:Nr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Be.min,gs.min),Be.expandByPoint(ve),ve.addVectors(Be.max,gs.max),Be.expandByPoint(ve)):(Be.expandByPoint(gs.min),Be.expandByPoint(gs.max))}Be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),ve.add(Ei)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let V=0;V<n.count;V++)o[V]=new w,l[V]=new w;let c=new w,h=new w,u=new w,f=new Z,d=new Z,m=new Z,A=new w,g=new w;function p(V,M,_){c.fromBufferAttribute(n,V),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,V),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(T),o[V].add(A),o[M].add(A),o[_].add(A),l[V].add(g),l[M].add(g),l[_].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let V=0,M=y.length;V<M;++V){let _=y[V],T=_.start,O=_.count;for(let B=T,H=T+O;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let C=new w,x=new w,R=new w,b=new w;function E(V){R.fromBufferAttribute(s,V),b.copy(R);let M=o[V];C.copy(M),C.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(b,M);let T=x.dot(l[V])<0?-1:1;a.setXYZW(V,C.x,C.y,C.z,T)}for(let V=0,M=y.length;V<M;++V){let _=y[V],T=_.start,O=_.count;for(let B=T,H=T+O;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),A=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let A=0,g=l.length;A<g;A++){o.isInterleavedBufferAttribute?d=l[A]*o.data.stride+o.offset:d=l[A]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Ie(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rc=new oe,Qn=new Ur,rr=new ji,Pc=new w,ar=new w,or=new w,lr=new w,Oa=new w,cr=new w,Lc=new w,hr=new w,bt=class extends Se{constructor(t=new de,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Oa.fromBufferAttribute(u,t),a?cr.addScaledVector(Oa,h):cr.addScaledVector(Oa.sub(e),h))}e.add(cr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(rr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(rr,Pc)===null||Qn.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Rc.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),C=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,R=C;x<R;x+=3){let b=o.getX(x),E=o.getX(x+1),V=o.getX(x+2);s=ur(this,p,t,n,c,h,u,b,E,V),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),A=Math.min(o.count,d.start+d.count);for(let g=m,p=A;g<p;g+=3){let y=o.getX(g),C=o.getX(g+1),x=o.getX(g+2);s=ur(this,a,t,n,c,h,u,y,C,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=f.length;m<A;m++){let g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),C=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,R=C;x<R;x+=3){let b=x,E=x+1,V=x+2;s=ur(this,p,t,n,c,h,u,b,E,V),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),A=Math.min(l.count,d.start+d.count);for(let g=m,p=A;g<p;g+=3){let y=g,C=g+1,x=g+2;s=ur(this,a,t,n,c,h,u,y,C,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Ed(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===kn,o),l===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ar),i.getVertexPosition(l,or),i.getVertexPosition(c,lr);let h=Ed(i,t,e,n,ar,or,lr,Lc);if(h){let u=new w;On.getBarycoord(Lc,ar,or,lr,u),s&&(h.uv=On.getInterpolatedAttribute(s,o,l,c,u,new Z)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,l,c,u,new Z)),a&&(h.normal=On.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new w,materialIndex:0};On.getNormal(ar,or,lr,f.normal),h.face=f,h.barycoord=u}return h}var Wn=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function m(A,g,p,y,C,x,R,b,E,V,M){let _=x/E,T=R/V,O=x/2,B=R/2,H=b/2,K=E+1,G=V+1,tt=0,k=0,st=new w;for(let ut=0;ut<G;ut++){let _t=ut*T-B;for(let qt=0;qt<K;qt++){let $t=qt*_-O;st[A]=$t*y,st[g]=_t*C,st[p]=H,c.push(st.x,st.y,st.z),st[A]=0,st[g]=0,st[p]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(qt/E),u.push(1-ut/V),tt+=1}}for(let ut=0;ut<V;ut++)for(let _t=0;_t<E;_t++){let qt=f+_t+K*ut,$t=f+_t+K*(ut+1),X=f+(_t+1)+K*(ut+1),et=f+(_t+1)+K*ut;l.push(qt,$t,et),l.push($t,X,et),k+=6}o.addGroup(d,k,M),d+=k,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=Ki(i[e]);for(let s in n)t[s]=n[s]}return t}function wd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Xn={clone:Ki,merge:Ue},Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Fr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=new w,Uc=new Z,Dc=new Z,Re=class extends Fr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,Uc,Dc),e.subVectors(Dc,Uc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(va*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},wi=-90,Ti=1,Ho=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(wi,Ti,t,e);s.layers=this.layers,this.add(s);let r=new Re(wi,Ti,t,e);r.layers=this.layers,this.add(r);let a=new Re(wi,Ti,t,e);a.layers=this.layers,this.add(a);let o=new Re(wi,Ti,t,e);o.layers=this.layers,this.add(o);let l=new Re(wi,Ti,t,e);l.layers=this.layers,this.add(l);let c=new Re(wi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Br=class extends Ne{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Go=class extends Me{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wn(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:un});r.uniforms.tEquirect.value=e;let a=new bt(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=hn),new Ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},za=new w,Rd=new w,Pd=new Lt,yn=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=za.subVectors(n,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new ji,dr=new w,ws=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],A=s[10],g=s[11],p=s[12],y=s[13],C=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,g-d,x-p).normalize(),n[1].setComponents(l+r,f+c,g+d,x+p).normalize(),n[2].setComponents(l+a,f+h,g+m,x+y).normalize(),n[3].setComponents(l-a,f-h,g-m,x-y).normalize(),n[4].setComponents(l-o,f-u,g-A,x-C).normalize(),e===Mn)n[5].setComponents(l+o,f+u,g+A,x+C).normalize();else if(e===Rr)n[5].setComponents(o,u,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ld(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],A=u[d];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++f,u[f]=A)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let A=u[d];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var en=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let y=p*f-a;for(let C=0;C<c;C++){let x=C*u-r;m.push(x,-y,0),A.push(0,0,1),g.push(C/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let C=y+c*p,x=y+c*(p+1),R=y+1+c*(p+1),b=y+1+c*p;d.push(C,x,b),d.push(x,R,b)}this.setIndex(d),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(A,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
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
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
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
#endif`,jd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,af=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
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
#endif`,Lf=`struct PhysicalMaterial {
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
}`,Uf=`
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
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
}`,zp=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,Qp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,ag=`#define TOON
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
}`,og=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Ud,alphahash_pars_fragment:Dd,alphamap_fragment:Nd,alphamap_pars_fragment:qd,alphatest_fragment:Fd,alphatest_pars_fragment:Bd,aomap_fragment:Od,aomap_pars_fragment:zd,batching_pars_vertex:kd,batching_vertex:Hd,begin_vertex:Gd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:Yd,bumpmap_pars_fragment:jd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Qd,color_fragment:$d,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:gf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Ef,envmap_vertex:Af,fog_vertex:xf,fog_pars_vertex:Cf,fog_fragment:vf,fog_pars_fragment:_f,gradientmap_pars_fragment:yf,lightmap_pars_fragment:If,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:Sf,lights_pars_begin:bf,lights_toon_fragment:wf,lights_toon_pars_fragment:Tf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Rf,lights_physical_fragment:Pf,lights_physical_pars_fragment:Lf,lights_fragment_begin:Uf,lights_fragment_maps:Df,lights_fragment_end:Nf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:Of,map_fragment:zf,map_pars_fragment:kf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:Yf,morphcolor_vertex:jf,morphnormal_vertex:Kf,morphtarget_pars_vertex:Jf,morphtarget_vertex:Zf,normal_fragment_begin:Qf,normal_fragment_maps:$f,normal_pars_fragment:tp,normal_pars_vertex:ep,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:Ap,shadowmap_vertex:xp,shadowmask_pars_fragment:Cp,skinbase_vertex:vp,skinning_pars_vertex:_p,skinning_vertex:yp,skinnormal_vertex:Ip,specularmap_fragment:Mp,specularmap_pars_fragment:Sp,tonemapping_fragment:bp,tonemapping_pars_fragment:Ep,transmission_fragment:wp,transmission_pars_fragment:Tp,uv_pars_fragment:Vp,uv_pars_vertex:Rp,uv_vertex:Pp,worldpos_vertex:Lp,background_vert:Up,background_frag:Dp,backgroundCube_vert:Np,backgroundCube_frag:qp,cube_vert:Fp,cube_frag:Bp,depth_vert:Op,depth_frag:zp,distanceRGBA_vert:kp,distanceRGBA_frag:Hp,equirect_vert:Gp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:Yp,meshbasic_vert:jp,meshbasic_frag:Kp,meshlambert_vert:Jp,meshlambert_frag:Zp,meshmatcap_vert:Qp,meshmatcap_frag:$p,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},nt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},ln={basic:{uniforms:Ue([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ue([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ue([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ue([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ue([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ue([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ue([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ue([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ue([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ue([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ue([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ue([nt.common,nt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ue([nt.lights,nt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};ln.physical={uniforms:Ue([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var fr={r:0,b:0,g:0},ti=new dn,pg=new oe;function gg(i,t,e,n,s,r,a){let o=new Et(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(y){let C=y.isScene===!0?y.background:null;return C&&C.isTexture&&(C=(y.backgroundBlurriness>0?e:t).get(C)),C}function A(y){let C=!1,x=m(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),C=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,C){let x=m(C);x&&(x.isCubeTexture||x.mapping===ia)?(h===void 0&&(h=new bt(new Wn(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Ki(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(C.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(ti)),h.material.toneMapped=Bt.getTransfer(x.colorSpace)!==Kt,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new bt(new en(2,2),new Ae({name:"BackgroundMaterial",uniforms:Ki(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(x.colorSpace)!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,C){y.getRGB(fr,Nh(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,C,a)}return{getClearColor:function(){return o},setClearColor:function(y,C=1){o.set(y),l=C,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:A,addToRenderList:g}}function mg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(_,T,O,B,H){let K=!1,G=u(B,O,T);r!==G&&(r=G,c(r.object)),K=d(_,B,O,H),K&&m(_,B,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(_,T,O,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,T,O){let B=O.wireframe===!0,H=n[_.id];H===void 0&&(H={},n[_.id]=H);let K=H[T.id];K===void 0&&(K={},H[T.id]=K);let G=K[B];return G===void 0&&(G=f(l()),K[B]=G),G}function f(_){let T=[],O=[],B=[];for(let H=0;H<e;H++)T[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:B,object:_,attributes:{},index:null}}function d(_,T,O,B){let H=r.attributes,K=T.attributes,G=0,tt=O.getAttributes();for(let k in tt)if(tt[k].location>=0){let ut=H[k],_t=K[k];if(_t===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),ut===void 0||ut.attribute!==_t||_t&&ut.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(_,T,O,B){let H={},K=T.attributes,G=0,tt=O.getAttributes();for(let k in tt)if(tt[k].location>=0){let ut=K[k];ut===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));let _t={};_t.attribute=ut,ut&&ut.data&&(_t.data=ut.data),H[k]=_t,G++}r.attributes=H,r.attributesNum=G,r.index=B}function A(){let _=r.newAttributes;for(let T=0,O=_.length;T<O;T++)_[T]=0}function g(_){p(_,0)}function p(_,T){let O=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;O[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),H[_]!==T&&(i.vertexAttribDivisor(_,T),H[_]=T)}function y(){let _=r.newAttributes,T=r.enabledAttributes;for(let O=0,B=T.length;O<B;O++)T[O]!==_[O]&&(i.disableVertexAttribArray(O),T[O]=0)}function C(_,T,O,B,H,K,G){G===!0?i.vertexAttribIPointer(_,T,O,H,K):i.vertexAttribPointer(_,T,O,B,H,K)}function x(_,T,O,B){A();let H=B.attributes,K=O.getAttributes(),G=T.defaultAttributeValues;for(let tt in K){let k=K[tt];if(k.location>=0){let st=H[tt];if(st===void 0&&(tt==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),tt==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),st!==void 0){let ut=st.normalized,_t=st.itemSize,qt=t.get(st);if(qt===void 0)continue;let $t=qt.buffer,X=qt.type,et=qt.bytesPerElement,xt=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===Pl;if(st.isInterleavedBufferAttribute){let rt=st.data,St=rt.stride,Vt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)p(k.location+Ft,rt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)g(k.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Ft=0;Ft<k.locationSize;Ft++)C(k.location+Ft,_t/k.locationSize,X,ut,St*et,(Vt+_t/k.locationSize*Ft)*et,xt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt,st.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<k.locationSize;rt++)g(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let rt=0;rt<k.locationSize;rt++)C(k.location+rt,_t/k.locationSize,X,ut,_t*et,_t/k.locationSize*rt*et,xt)}}else if(G!==void 0){let ut=G[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(k.location,ut);break;case 3:i.vertexAttrib3fv(k.location,ut);break;case 4:i.vertexAttrib4fv(k.location,ut);break;default:i.vertexAttrib1fv(k.location,ut)}}}}y()}function R(){V();for(let _ in n){let T=n[_];for(let O in T){let B=T[O];for(let H in B)h(B[H].object),delete B[H];delete T[O]}delete n[_]}}function b(_){if(n[_.id]===void 0)return;let T=n[_.id];for(let O in T){let B=T[O];for(let H in B)h(B[H].object),delete B[H];delete T[O]}delete n[_.id]}function E(_){for(let T in n){let O=n[T];if(O[_.id]===void 0)continue;let B=O[_.id];for(let H in B)h(B[H].object),delete B[H];delete O[_.id]}}function V(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:y}}function Ag(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*f[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==$e&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let V=E===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==En&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==In&&!V)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:x,vertexTextures:R,maxSamples:b}}function Cg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,C=y*4,x=p.clippingState||null;l.value=x,x=h(m,f,C,d);for(let R=0;R!==C;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let p=d+A*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let C=0,x=d;C!==A;++C,x+=4)a.copy(u[C]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function vg(i){let t=new WeakMap;function e(a,o){return o===lo?a.mapping=Hi:o===co&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===lo||o===co)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Go(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ji=class extends Fr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Di=4,Nc=[.125,.215,.35,.446,.526,.582],si=20,ka=new Ji,qc=new Et,Ha=null,Ga=0,Wa=0,Xa=!1,ni=(1+Math.sqrt(5))/2,Vi=1/ni,Fc=[new w(-ni,Vi,0),new w(ni,Vi,0),new w(-Vi,0,ni),new w(Vi,0,ni),new w(0,ni,-Vi),new w(0,ni,Vi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ga,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:an,format:$e,colorSpace:is,depthBuffer:!1},s=Bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(r)),this._blurMaterial=yg(r,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s){let o=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(qc),h.toneMapping=zn,h.autoClear=!1;let d=new be({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new bt(new Wn,d),A=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,A=!0):(d.color.copy(qc),A=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let C=this._cubeSize;pr(s,y*C,p>2?C:0,C,C),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Hi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fc[(s-r-1)%Fc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*si-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):si;g>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${si}`);let p=[],y=0;for(let E=0;E<si;++E){let V=E/A,M=Math.exp(-V*V/2);p.push(M),E===0?y+=M:E<g&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:C}=this;f.dTheta.value=m,f.mipInt.value=C-n;let x=this._sizeLods[s],R=3*x*(s>C-Di?s-C+Di:0),b=4*(this._cubeSize-x);pr(e,R,b,3*x,2*x),l.setRenderTarget(e),l.render(u,ka)}};function _g(i){let t=[],e=[],n=[],s=i,r=i-Di+1+Nc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Di?l=Nc[a-i+Di-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,A=3,g=2,p=1,y=new Float32Array(A*m*d),C=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let b=0;b<d;b++){let E=b%3*2/3-1,V=b>2?0:-1,M=[E,V,0,E+2/3,V,0,E+2/3,V+1,0,E,V,0,E+2/3,V+1,0,E,V+1,0];y.set(M,A*m*b),C.set(f,g*m*b);let _=[b,b,b,b,b,b];x.set(_,p*m*b)}let R=new de;R.setAttribute("position",new Ie(y,A)),R.setAttribute("uv",new Ie(C,g)),R.setAttribute("faceIndex",new Ie(x,p)),t.push(R),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bc(i,t,e){let n=new Me(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yg(i,t,e){let n=new Float32Array(si),s=new w(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Oc(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function zc(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function Ig(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===lo||l===co,h=l===Hi||l===Gi;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Or(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Or(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Mg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let A=f.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let A=d[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,A=0;if(d!==null){let y=d.array;A=d.version;for(let C=0,x=y.length;C<x;C+=3){let R=y[C+0],b=y[C+1],E=y[C+2];f.push(R,b,b,E,E,R)}}else if(m!==void 0){let y=m.array;A=m.version;for(let C=0,x=y.length/3-1;C<x;C+=3){let R=C+0,b=C+1,E=C+2;f.push(R,b,b,E,E,R)}}else return;let g=new(Uh(f)?qr:Nr)(f,1);g.version=A;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,A,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*A[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Eg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wg(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],C=0;d===!0&&(C=1),m===!0&&(C=2),A===!0&&(C=3);let x=o.attributes.position.count*C,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*R*4*u),E=new Lr(b,x,R,u);E.type=In,E.needsUpdate=!0;let V=C*4;for(let _=0;_<u;_++){let T=g[_],O=p[_],B=y[_],H=x*R*4*_;for(let K=0;K<T.count;K++){let G=K*V;d===!0&&(s.fromBufferAttribute(T,K),b[H+G+0]=s.x,b[H+G+1]=s.y,b[H+G+2]=s.z,b[H+G+3]=0),m===!0&&(s.fromBufferAttribute(O,K),b[H+G+4]=s.x,b[H+G+5]=s.y,b[H+G+6]=s.z,b[H+G+7]=0),A===!0&&(s.fromBufferAttribute(B,K),b[H+G+8]=s.x,b[H+G+9]=s.y,b[H+G+10]=s.z,b[H+G+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new Z(x,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let A=0;A<c.length;A++)d+=c[A];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Tg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var zr=class extends Ne{constructor(t,e,n,s,r,a,o,l,c,h=Fi){if(h!==Fi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fi&&(n=oi),n===void 0&&h===Yi&&(n=Xi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fh=new Ne,kc=new zr(1,1),Bh=new Lr,Oh=new ko,zh=new Br,Hc=[],Gc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),Yc=new Float32Array(4);function ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;Yc.set(n),i.uniformMatrix2fv(this.addr,!1,Yc),Ce(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),Ce(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(xe(e,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),Ce(e,n)}}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Lh,r=kc):r=Fh,e.setTexture2D(t||r,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oh,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zh,s)}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bh,s)}function Kg(i){switch(i){case 5126:return Vg;case 35664:return Rg;case 35665:return Pg;case 35666:return Lg;case 35674:return Ug;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return qg;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return Og;case 5125:return zg;case 36294:return kg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return jg}}function Jg(i,t){i.uniform1fv(this.addr,t)}function Zg(i,t){let e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Qg(i,t){let e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function $g(i,t){let e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function tm(i,t){let e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function em(i,t){let e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function nm(i,t){let e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function im(i,t){i.uniform1iv(this.addr,t)}function sm(i,t){i.uniform2iv(this.addr,t)}function rm(i,t){i.uniform3iv(this.addr,t)}function am(i,t){i.uniform4iv(this.addr,t)}function om(i,t){i.uniform1uiv(this.addr,t)}function lm(i,t){i.uniform2uiv(this.addr,t)}function cm(i,t){i.uniform3uiv(this.addr,t)}function hm(i,t){i.uniform4uiv(this.addr,t)}function um(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Fh,r[a])}function dm(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Oh,r[a])}function fm(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zh,r[a])}function pm(i,t,e){let n=this.cache,s=t.length,r=ra(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bh,r[a])}function gm(i){switch(i){case 5126:return Jg;case 35664:return Zg;case 35665:return Qg;case 35666:return $g;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}var Wo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kg(e.type)}},Xo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gm(e.type)}},Yo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ya=/(\w+)(\])?(\[|\.)?/g;function jc(i,t){i.seq.push(t),i.map[t.id]=t}function mm(i,t,e){let n=i.name,s=n.length;for(Ya.lastIndex=0;;){let r=Ya.exec(n),a=Ya.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jc(e,c===void 0?new Wo(o,i,t):new Xo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Yo(o),jc(e,u)),e=u}}}var Oi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);mm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Am=37297,xm=0;function Cm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Jc=new Lt;function vm(i){Bt._getMatrix(Jc,Bt.workingColorSpace,i);let t=`mat3( ${Jc.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(t),a)}else return s}function _m(i,t){let e=vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ym(i,t){let e;switch(t){case El:e="Linear";break;case wl:e="Reinhard";break;case Tl:e="Cineon";break;case Hs:e="ACESFilmic";break;case Vl:e="AgX";break;case Rl:e="Neutral";break;case $u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gr=new w;function Im(){Bt.getLuminanceCoefficients(gr);let i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Sm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vs(i){return i!==""}function Qc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(Em,Tm)}var wm=new Map;function Tm(i,t){let e=Dt[t];if(e===void 0){let n=wm.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jo(e)}var Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(Vm,Rm)}function Rm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Lm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Um(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Dm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Qu:t="ENVMAP_BLENDING_ADD";break}return t}function Nm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Pm(e),c=Lm(e),h=Um(e),u=Dm(e),f=Nm(e),d=Mm(e),m=Sm(r),A=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(vs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(vs).join(`
`),p.length>0&&(p+=`
`)):(g=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),p=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==zn?ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=jo(a),a=Qc(a,e),a=$c(a,e),o=jo(o),o=Qc(o,e),o=$c(o,e),a=th(a),o=th(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=y+g+a,x=y+p+o,R=Kc(s,s.VERTEX_SHADER,C),b=Kc(s,s.FRAGMENT_SHADER,x);s.attachShader(A,R),s.attachShader(A,b),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(T){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(A).trim(),B=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(b).trim(),K=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,R,b);else{let tt=Zc(s,R,"vertex"),k=Zc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+tt+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||H==="")&&(G=!1);G&&(T.diagnostics={runnable:K,programLog:O,vertexShader:{log:B,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(R),s.deleteShader(b),V=new Oi(s,A),M=bm(s,A)}let V;this.getUniforms=function(){return V===void 0&&E(this),V};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(A,Am)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xm++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=R,this.fragmentShader=b,this}var Fm=0,Ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jo(t),e.set(t,n)),n}},Jo=class{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}};function Bm(i,t,e,n,s,r,a){let o=new Dr,l=new Ko,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,_,T,O,B){let H=O.fog,K=B.geometry,G=M.isMeshStandardMaterial?O.environment:null,tt=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),k=tt&&tt.mapping===ia?tt.image.height:null,st=m[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=ut!==void 0?ut.length:0,qt=0;K.morphAttributes.position!==void 0&&(qt=1),K.morphAttributes.normal!==void 0&&(qt=2),K.morphAttributes.color!==void 0&&(qt=3);let $t,X,et,xt;if(st){let Jt=ln[st];$t=Jt.vertexShader,X=Jt.fragmentShader}else $t=M.vertexShader,X=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);let rt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,Ft=B.isBatchedMesh===!0,le=!!M.map,Ht=!!M.matcap,fe=!!tt,D=!!M.aoMap,ke=!!M.lightMap,Ot=!!M.bumpMap,zt=!!M.normalMap,It=!!M.displacementMap,ie=!!M.emissiveMap,yt=!!M.metalnessMap,S=!!M.roughnessMap,v=M.anisotropy>0,N=M.clearcoat>0,Y=M.dispersion>0,J=M.iridescence>0,W=M.sheen>0,Ct=M.transmission>0,at=v&&!!M.anisotropyMap,dt=N&&!!M.clearcoatMap,Gt=N&&!!M.clearcoatNormalMap,Q=N&&!!M.clearcoatRoughnessMap,ft=J&&!!M.iridescenceMap,Mt=J&&!!M.iridescenceThicknessMap,wt=W&&!!M.sheenColorMap,pt=W&&!!M.sheenRoughnessMap,kt=!!M.specularMap,Ut=!!M.specularColorMap,te=!!M.specularIntensityMap,P=Ct&&!!M.transmissionMap,it=Ct&&!!M.thicknessMap,z=!!M.gradientMap,j=!!M.alphaMap,ct=M.alphaTest>0,ot=!!M.alphaHash,Rt=!!M.extensions,he=zn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(he=i.toneMapping);let we={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:$t,fragmentShader:X,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ft,batchingColor:Ft&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:is,alphaToCoverage:!!M.alphaToCoverage,map:le,matcap:Ht,envMap:fe,envMapMode:fe&&tt.mapping,envMapCubeUVHeight:k,aoMap:D,lightMap:ke,bumpMap:Ot,normalMap:zt,displacementMap:f&&It,emissiveMap:ie,normalMapObjectSpace:zt&&M.normalMapType===id,normalMapTangentSpace:zt&&M.normalMapType===Ph,metalnessMap:yt,roughnessMap:S,anisotropy:v,anisotropyMap:at,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:wt,sheenRoughnessMap:pt,specularMap:kt,specularColorMap:Ut,specularIntensityMap:te,transmission:Ct,transmissionMap:P,thicknessMap:it,gradientMap:z,opaque:M.transparent===!1&&M.blending===qi&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:ot,combine:M.combine,mapUv:le&&A(M.map.channel),aoMapUv:D&&A(M.aoMap.channel),lightMapUv:ke&&A(M.lightMap.channel),bumpMapUv:Ot&&A(M.bumpMap.channel),normalMapUv:zt&&A(M.normalMap.channel),displacementMapUv:It&&A(M.displacementMap.channel),emissiveMapUv:ie&&A(M.emissiveMap.channel),metalnessMapUv:yt&&A(M.metalnessMap.channel),roughnessMapUv:S&&A(M.roughnessMap.channel),anisotropyMapUv:at&&A(M.anisotropyMap.channel),clearcoatMapUv:dt&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:pt&&A(M.sheenRoughnessMap.channel),specularMapUv:kt&&A(M.specularMap.channel),specularColorMapUv:Ut&&A(M.specularColorMap.channel),specularIntensityMapUv:te&&A(M.specularIntensityMap.channel),transmissionMapUv:P&&A(M.transmissionMap.channel),thicknessMapUv:it&&A(M.thicknessMap.channel),alphaMapUv:j&&A(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(zt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(le||j),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:qt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:le&&M.map.isVideoTexture===!0&&Bt.getTransfer(M.map.colorSpace)===Kt,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(M.emissiveMap.colorSpace)===Kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qe,flipSided:M.side===Pe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Rt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function p(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)_.push(T),_.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(_,M),C(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function C(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let _=m[M.type],T;if(_){let O=ln[_];T=Xn.clone(O.uniforms)}else T=M.uniforms;return T}function R(M,_){let T;for(let O=0,B=h.length;O<B;O++){let H=h[O];if(H.cacheKey===_){T=H,++T.usedTimes;break}}return T===void 0&&(T=new qm(i,_,M,r),h.push(T)),T}function b(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function V(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:V}}function Om(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ih(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,m,A,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=A,p.group=g),t++,p}function o(u,f,d,m,A,g){let p=a(u,f,d,m,A,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,m,A,g){let p=a(u,f,d,m,A,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||zm),n.length>1&&n.sort(f||nh),s.length>1&&s.sort(f||nh)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function km(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ih,i.set(n,[a])):s>=r.length?(a=new ih,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Et};break;case"SpotLight":e={position:new w,direction:new w,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function Gm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wm=0;function Xm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ym(i){let t=new Hm,e=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let s=new w,r=new oe,a=new oe;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,A=0,g=0,p=0,y=0,C=0,x=0,R=0,b=0,E=0;c.sort(Xm);for(let M=0,_=c.length;M<_;M++){let T=c[M],O=T.color,B=T.intensity,H=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],B);E++}else if(T.isDirectionalLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let tt=T.shadow,k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=T.shadow.matrix,y++}n.directional[d]=G,d++}else if(T.isSpotLight){let G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[A]=G;let tt=T.shadow;if(T.map&&(n.spotLightMap[R]=T.map,R++,tt.updateMatrices(T),T.castShadow&&b++),n.spotLightMatrix[A]=tt.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=K,x++}A++}else if(T.isRectAreaLight){let G=t.get(T);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=G,g++}else if(T.isPointLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let tt=T.shadow,k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,k.shadowCameraNear=tt.camera.near,k.shadowCameraFar=tt.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=T.shadow.matrix,C++}n.point[m]=G,m++}else if(T.isHemisphereLight){let G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(B),G.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let V=n.hash;(V.directionalLength!==d||V.pointLength!==m||V.spotLength!==A||V.rectAreaLength!==g||V.hemiLength!==p||V.numDirectionalShadows!==y||V.numPointShadows!==C||V.numSpotShadows!==x||V.numSpotMaps!==R||V.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=x+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,V.directionalLength=d,V.pointLength=m,V.spotLength=A,V.rectAreaLength=g,V.hemiLength=p,V.numDirectionalShadows=y,V.numPointShadows=C,V.numSpotShadows=x,V.numSpotMaps=R,V.numLightProbes=E,n.version=Wm++)}function l(c,h){let u=0,f=0,d=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let C=c[p];if(C.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(C.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(C.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(C.width*.5,0,0),x.halfHeight.set(0,C.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(C.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(g),f++}else if(C.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(C.matrixWorld),x.direction.transformDirection(g),A++}}}return{setup:o,setupView:l,state:n}}function sh(i){let t=new Ym(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function jm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new sh(i),t.set(s,[o])):r>=a.length?(o=new sh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zo=class extends wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qo=class extends wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
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
}`;function Zm(i,t,e){let n=new ws,s=new Z,r=new Z,a=new ue,o=new Zo({depthPacking:nd}),l=new Qo,c={},h=e.maxTextureSize,u={[kn]:Pe,[Pe]:kn,[Qe]:Qe},f=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Km,fragmentShader:Jm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new de;m.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new bt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(b,E,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),O=i.state;O.setBlending(un),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=p!==_n&&this.type===_n,H=p===_n&&this.type!==_n;for(let K=0,G=b.length;K<G;K++){let tt=b[K],k=tt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||B===!0||H===!0){let _t=this.type!==_n?{minFilter:tn,magFilter:tn}:{};k.map!==null&&k.map.dispose(),k.map=new Me(s.x,s.y,_t),k.map.texture.name=tt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ut=k.getViewportCount();for(let _t=0;_t<ut;_t++){let qt=k.getViewport(_t);a.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),O.viewport(a),k.updateMatrices(tt,_t),n=k.getFrustum(),x(E,V,k.camera,tt,this.type)}k.isPointLightShadow!==!0&&this.type===_n&&y(k,V),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,_,T)};function y(b,E){let V=t.update(A);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Me(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,V,f,A,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,V,d,A,null)}function C(b,E,V,M){let _=null,T=V.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)_=T;else if(_=V.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=_.uuid,B=E.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let K=H[B];K===void 0&&(K=_.clone(),H[B]=K,E.addEventListener("dispose",R)),_=K}if(_.visible=E.visible,_.wireframe=E.wireframe,M===_n?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,V.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=i.properties.get(_);O.light=V}return _}function x(b,E,V,M,_){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===_n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld);let B=t.update(b),H=b.material;if(Array.isArray(H)){let K=B.groups;for(let G=0,tt=K.length;G<tt;G++){let k=K[G],st=H[k.materialIndex];if(st&&st.visible){let ut=C(b,st,M,_);b.onBeforeShadow(i,b,E,V,B,ut,k),i.renderBufferDirect(V,null,B,ut,b,k),b.onAfterShadow(i,b,E,V,B,ut,k)}}}else if(H.visible){let K=C(b,H,M,_);b.onBeforeShadow(i,b,E,V,B,K,null),i.renderBufferDirect(V,null,B,K,b,null),b.onAfterShadow(i,b,E,V,B,K,null)}}let O=b.children;for(let B=0,H=O.length;B<H;B++)x(O[B],E,V,M,_)}function R(b){b.target.removeEventListener("dispose",R);for(let V in c){let M=c[V],_=b.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var Qm={[eo]:no,[io]:ao,[so]:oo,[ki]:ro,[no]:eo,[ao]:io,[oo]:so,[ro]:ki};function $m(i,t){function e(){let P=!1,it=new ue,z=null,j=new ue(0,0,0,0);return{setMask:function(ct){z!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),z=ct)},setLocked:function(ct){P=ct},setClear:function(ct,ot,Rt,he,we){we===!0&&(ct*=he,ot*=he,Rt*=he),it.set(ct,ot,Rt,he),j.equals(it)===!1&&(i.clearColor(ct,ot,Rt,he),j.copy(it))},reset:function(){P=!1,z=null,j.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,z=null,j=null,ct=null;return{setReversed:function(ot){if(it!==ot){let Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);let he=ct;ct=null,this.setClear(he)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ot){z!==ot&&!P&&(i.depthMask(ot),z=ot)},setFunc:function(ot){if(it&&(ot=Qm[ot]),j!==ot){switch(ot){case eo:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ot}},setLocked:function(ot){P=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){P=!1,z=null,j=null,ct=null,it=!1}}}function s(){let P=!1,it=null,z=null,j=null,ct=null,ot=null,Rt=null,he=null,we=null;return{setTest:function(Jt){P||(Jt?rt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!P&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,Ye,pn){(z!==Jt||j!==Ye||ct!==pn)&&(i.stencilFunc(Jt,Ye,pn),z=Jt,j=Ye,ct=pn)},setOp:function(Jt,Ye,pn){(ot!==Jt||Rt!==Ye||he!==pn)&&(i.stencilOp(Jt,Ye,pn),ot=Jt,Rt=Ye,he=pn)},setLocked:function(Jt){P=Jt},setClear:function(Jt){we!==Jt&&(i.clearStencil(Jt),we=Jt)},reset:function(){P=!1,it=null,z=null,j=null,ct=null,ot=null,Rt=null,he=null,we=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,A=!1,g=null,p=null,y=null,C=null,x=null,R=null,b=null,E=new Et(0,0,0),V=0,M=!1,_=null,T=null,O=null,B=null,H=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=tt>=2);let st=null,ut={},_t=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),$t=new ue().fromArray(_t),X=new ue().fromArray(qt);function et(P,it,z,j){let ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(P,ot),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<z;Rt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}let xt={};xt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(ki),Ot(!1),zt(lc),rt(i.CULL_FACE),D(un);function rt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function St(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Vt(P,it){return u[P]!==it?(i.bindFramebuffer(P,it),u[P]=it,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ft(P,it){let z=d,j=!1;if(P){z=f.get(it),z===void 0&&(z=[],f.set(it,z));let ct=P.textures;if(z.length!==ct.length||z[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Rt=ct.length;ot<Rt;ot++)z[ot]=i.COLOR_ATTACHMENT0+ot;z.length=ct.length,j=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,j=!0);j&&i.drawBuffers(z)}function le(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Ht={[ii]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};Ht[Nu]=i.MIN,Ht[qu]=i.MAX;let fe={[Fu]:i.ZERO,[Bu]:i.ONE,[Ou]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[to]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function D(P,it,z,j,ct,ot,Rt,he,we,Jt){if(P===un){A===!0&&(St(i.BLEND),A=!1);return}if(A===!1&&(rt(i.BLEND),A=!0),P!==Lu){if(P!==g||Jt!==M){if((p!==ii||x!==ii)&&(i.blendEquation(i.FUNC_ADD),p=ii,x=ii),Jt)switch(P){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,C=null,R=null,b=null,E.set(0,0,0),V=0,g=P,M=Jt}return}ct=ct||it,ot=ot||z,Rt=Rt||j,(it!==p||ct!==x)&&(i.blendEquationSeparate(Ht[it],Ht[ct]),p=it,x=ct),(z!==y||j!==C||ot!==R||Rt!==b)&&(i.blendFuncSeparate(fe[z],fe[j],fe[ot],fe[Rt]),y=z,C=j,R=ot,b=Rt),(he.equals(E)===!1||we!==V)&&(i.blendColor(he.r,he.g,he.b,we),E.copy(he),V=we),g=P,M=!1}function ke(P,it){P.side===Qe?St(i.CULL_FACE):rt(i.CULL_FACE);let z=P.side===Pe;it&&(z=!z),Ot(z),P.blending===qi&&P.transparent===!1?D(un):D(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let j=P.stencilWrite;o.setTest(j),j&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(P){_!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),_=P)}function zt(P){P!==Ru?(rt(i.CULL_FACE),P!==T&&(P===lc?i.cullFace(i.BACK):P===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),T=P}function It(P){P!==O&&(G&&i.lineWidth(P),O=P)}function ie(P,it,z){P?(rt(i.POLYGON_OFFSET_FILL),(B!==it||H!==z)&&(i.polygonOffset(it,z),B=it,H=z)):St(i.POLYGON_OFFSET_FILL)}function yt(P){P?rt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function S(P){P===void 0&&(P=i.TEXTURE0+K-1),st!==P&&(i.activeTexture(P),st=P)}function v(P,it,z){z===void 0&&(st===null?z=i.TEXTURE0+K-1:z=st);let j=ut[z];j===void 0&&(j={type:void 0,texture:void 0},ut[z]=j),(j.type!==P||j.texture!==it)&&(st!==z&&(i.activeTexture(z),st=z),i.bindTexture(P,it||xt[P]),j.type=P,j.texture=it)}function N(){let P=ut[st];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(P){$t.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$t.copy(P))}function pt(P){X.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function kt(P,it){let z=c.get(it);z===void 0&&(z=new WeakMap,c.set(it,z));let j=z.get(P);j===void 0&&(j=i.getUniformBlockIndex(it,P.name),z.set(P,j))}function Ut(P,it){let j=c.get(it).get(P);l.get(it)!==j&&(i.uniformBlockBinding(it,j,P.__bindingPointIndex),l.set(it,j))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ut={},u={},f=new WeakMap,d=[],m=null,A=!1,g=null,p=null,y=null,C=null,x=null,R=null,b=null,E=new Et(0,0,0),V=0,M=!1,_=null,T=null,O=null,B=null,H=null,$t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:St,bindFramebuffer:Vt,drawBuffers:Ft,useProgram:le,setBlending:D,setMaterial:ke,setFlipSided:Ot,setCullFace:zt,setLineWidth:It,setPolygonOffset:ie,setScissorTest:yt,activeTexture:S,bindTexture:v,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:ft,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:Ct,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:wt,viewport:pt,reset:te}}function rh(i,t,e,n){let s=tA(n);switch(e){case Sh:return i*t;case Eh:return i*t;case wh:return i*t*2;case Th:return i*t/s.components*s.byteLength;case Dl:return i*t/s.components*s.byteLength;case Vh:return i*t*2/s.components*s.byteLength;case Nl:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case ql:return i*t*4/s.components*s.byteLength;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:case po:return Math.max(i,16)*Math.max(t,8)/4;case ho:case fo:return Math.max(i,8)*Math.max(t,8)/2;case go:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case Po:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rh:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Do:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tA(i){switch(i){case En:case yh:return{byteLength:1,components:1};case bs:case Ih:case an:return{byteLength:2,components:1};case Ll:case Ul:return{byteLength:2,components:4};case oi:case Pl:case In:return{byteLength:4,components:1};case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function eA(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,v){return d?new OffscreenCanvas(S,v):Es("canvas")}function A(S,v,N){let Y=1,J=yt(S);if((J.width>N||J.height>N)&&(Y=N/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap||typeof VideoFrame!="undefined"&&S instanceof VideoFrame){let W=Math.floor(Y*J.width),Ct=Math.floor(Y*J.height);u===void 0&&(u=m(W,Ct));let at=v?m(W,Ct):u;return at.width=W,at.height=Ct,at.getContext("2d").drawImage(S,0,0,W,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Ct+")."),at}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function g(S){return S.generateMipmaps}function p(S){i.generateMipmap(S)}function y(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(S,v,N,Y,J=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=v;if(v===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),v===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),v===i.RGBA){let Ct=J?sa:Bt.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=Ct===Kt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(S,v){let N;return S?v===null||v===oi||v===Xi?N=i.DEPTH24_STENCIL8:v===In?N=i.DEPTH32F_STENCIL8:v===bs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===oi||v===Xi?N=i.DEPTH_COMPONENT24:v===In?N=i.DEPTH_COMPONENT32F:v===bs&&(N=i.DEPTH_COMPONENT16),N}function R(S,v){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==tn&&S.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function b(S){let v=S.target;v.removeEventListener("dispose",b),V(v),v.isVideoTexture&&h.delete(v)}function E(S){let v=S.target;v.removeEventListener("dispose",E),_(v)}function V(S){let v=n.get(S);if(v.__webglInit===void 0)return;let N=S.source,Y=f.get(N);if(Y){let J=Y[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(S),Object.keys(Y).length===0&&f.delete(N)}n.remove(S)}function M(S){let v=n.get(S);i.deleteTexture(v.__webglTexture);let N=S.source,Y=f.get(N);delete Y[v.__cacheKey],a.memory.textures--}function _(S){let v=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let J=0;J<v.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let N=S.textures;for(let Y=0,J=N.length;Y<J;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(S)}let T=0;function O(){T=0}function B(){let S=T;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),T+=1,S}function H(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function K(S,v){let N=n.get(S);if(S.isVideoTexture&&It(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){let Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,S,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function G(S,v){let N=n.get(S);if(S.version>0&&N.__version!==S.version){X(N,S,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function tt(S,v){let N=n.get(S);if(S.version>0&&N.__version!==S.version){X(N,S,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function k(S,v){let N=n.get(S);if(S.version>0&&N.__version!==S.version){et(N,S,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}let st={[Wi]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Ss]:i.MIRRORED_REPEAT},ut={[tn]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},_t={[sd]:i.NEVER,[hd]:i.ALWAYS,[rd]:i.LESS,[Lh]:i.LEQUAL,[ad]:i.EQUAL,[cd]:i.GEQUAL,[od]:i.GREATER,[ld]:i.NOTEQUAL};function qt(S,v){if(v.type===In&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===xa||v.magFilter===Ks||v.magFilter===ai||v.minFilter===hn||v.minFilter===xa||v.minFilter===Ks||v.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,st[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ut[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==Ks&&v.minFilter!==ai||v.type===In&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(S,v){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",b));let Y=v.source,J=f.get(Y);J===void 0&&(J={},f.set(Y,J));let W=H(v);if(W!==S.__cacheKey){J[W]===void 0&&(J[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[W].usedTimes++;let Ct=J[S.__cacheKey];Ct!==void 0&&(J[S.__cacheKey].usedTimes--,Ct.usedTimes===0&&M(v)),S.__cacheKey=W,S.__webglTexture=J[W].texture}return N}function X(S,v,N){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);let J=$t(S,v),W=v.source;e.bindTexture(Y,S.__webglTexture,i.TEXTURE0+N);let Ct=n.get(W);if(W.version!==Ct.__version||J===!0){e.activeTexture(i.TEXTURE0+N);let at=Bt.getPrimaries(Bt.workingColorSpace),dt=v.colorSpace===Bn?null:Bt.getPrimaries(v.colorSpace),Gt=v.colorSpace===Bn||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=A(v.image,!1,s.maxTextureSize);Q=ie(v,Q);let ft=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),wt=C(v.internalFormat,ft,Mt,v.colorSpace,v.isVideoTexture);qt(Y,v);let pt,kt=v.mipmaps,Ut=v.isVideoTexture!==!0,te=Ct.__version===void 0||J===!0,P=W.dataReady,it=R(v,Q);if(v.isDepthTexture)wt=x(v.format===Yi,v.type),te&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,wt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,ft,Mt,null));else if(v.isDataTexture)if(kt.length>0){Ut&&te&&e.texStorage2D(i.TEXTURE_2D,it,wt,kt[0].width,kt[0].height);for(let z=0,j=kt.length;z<j;z++)pt=kt[z],Ut?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,Mt,pt.data):e.texImage2D(i.TEXTURE_2D,z,wt,pt.width,pt.height,0,ft,Mt,pt.data);v.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(i.TEXTURE_2D,it,wt,Q.width,Q.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Mt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,ft,Mt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,kt[0].width,kt[0].height,Q.depth);for(let z=0,j=kt.length;z<j;z++)if(pt=kt[z],v.format!==$e)if(ft!==null)if(Ut){if(P)if(v.layerUpdates.size>0){let ct=rh(pt.width,pt.height,v.format,v.type);for(let ot of v.layerUpdates){let Rt=pt.data.subarray(ot*ct/pt.data.BYTES_PER_ELEMENT,(ot+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,ot,pt.width,pt.height,1,ft,Rt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,wt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,pt.width,pt.height,Q.depth,ft,Mt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,wt,pt.width,pt.height,Q.depth,0,ft,Mt,pt.data)}else{Ut&&te&&e.texStorage2D(i.TEXTURE_2D,it,wt,kt[0].width,kt[0].height);for(let z=0,j=kt.length;z<j;z++)pt=kt[z],v.format!==$e?ft!==null?Ut?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,Mt,pt.data):e.texImage2D(i.TEXTURE_2D,z,wt,pt.width,pt.height,0,ft,Mt,pt.data)}else if(v.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){let z=rh(Q.width,Q.height,v.format,v.type);for(let j of v.layerUpdates){let ct=Q.data.subarray(j*z/Q.data.BYTES_PER_ELEMENT,(j+1)*z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,ft,Mt,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Mt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,Q.width,Q.height,Q.depth,0,ft,Mt,Q.data);else if(v.isData3DTexture)Ut?(te&&e.texStorage3D(i.TEXTURE_3D,it,wt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Mt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,wt,Q.width,Q.height,Q.depth,0,ft,Mt,Q.data);else if(v.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(i.TEXTURE_2D,it,wt,Q.width,Q.height);else{let z=Q.width,j=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,wt,z,j,0,ft,Mt,null),z>>=1,j>>=1}}else if(kt.length>0){if(Ut&&te){let z=yt(kt[0]);e.texStorage2D(i.TEXTURE_2D,it,wt,z.width,z.height)}for(let z=0,j=kt.length;z<j;z++)pt=kt[z],Ut?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft,Mt,pt):e.texImage2D(i.TEXTURE_2D,z,wt,ft,Mt,pt);v.generateMipmaps=!1}else if(Ut){if(te){let z=yt(Q);e.texStorage2D(i.TEXTURE_2D,it,wt,z.width,z.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Mt,Q)}else e.texImage2D(i.TEXTURE_2D,0,wt,ft,Mt,Q);g(v)&&p(Y),Ct.__version=W.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function et(S,v,N){if(v.image.length!==6)return;let Y=$t(S,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let W=n.get(J);if(J.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let Ct=Bt.getPrimaries(Bt.workingColorSpace),at=v.colorSpace===Bn?null:Bt.getPrimaries(v.colorSpace),dt=v.colorSpace===Bn||Ct===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!Gt&&!Q?ft[j]=A(v.image[j],!0,s.maxCubemapSize):ft[j]=Q?v.image[j].image:v.image[j],ft[j]=ie(v,ft[j]);let Mt=ft[0],wt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),kt=C(v.internalFormat,wt,pt,v.colorSpace),Ut=v.isVideoTexture!==!0,te=W.__version===void 0||Y===!0,P=J.dataReady,it=R(v,Mt);qt(i.TEXTURE_CUBE_MAP,v);let z;if(Gt){Ut&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,kt,Mt.width,Mt.height);for(let j=0;j<6;j++){z=ft[j].mipmaps;for(let ct=0;ct<z.length;ct++){let ot=z[ct];v.format!==$e?wt!==null?Ut?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,wt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,wt,pt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,kt,ot.width,ot.height,0,wt,pt,ot.data)}}}else{if(z=v.mipmaps,Ut&&te){z.length>0&&it++;let j=yt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,kt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,wt,pt,ft[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,ft[j].width,ft[j].height,0,wt,pt,ft[j].data);for(let ct=0;ct<z.length;ct++){let Rt=z[ct].image[j].image;Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Rt.width,Rt.height,wt,pt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,kt,Rt.width,Rt.height,0,wt,pt,Rt.data)}}else{Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt,pt,ft[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,wt,pt,ft[j]);for(let ct=0;ct<z.length;ct++){let ot=z[ct];Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,wt,pt,ot.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,kt,wt,pt,ot.image[j])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),W.__version=J.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function xt(S,v,N,Y,J,W){let Ct=r.convert(N.format,N.colorSpace),at=r.convert(N.type),dt=C(N.internalFormat,Ct,at,N.colorSpace),Gt=n.get(v),Q=n.get(N);if(Q.__renderTarget=v,!Gt.__hasExternalTextures){let ft=Math.max(1,v.width>>W),Mt=Math.max(1,v.height>>W);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,W,dt,ft,Mt,v.depth,0,Ct,at,null):e.texImage2D(J,W,dt,ft,Mt,0,Ct,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,Q.__webglTexture,0,Ot(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,Q.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(S,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer){let Y=v.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,W=x(v.stencilBuffer,J),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ot(v);zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,W,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,S)}else{let Y=v.textures;for(let J=0;J<Y.length;J++){let W=Y[J],Ct=r.convert(W.format,W.colorSpace),at=r.convert(W.type),dt=C(W.internalFormat,Ct,at,W.colorSpace),Gt=Ot(v);N&&zt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,dt,v.width,v.height):zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let J=Y.__webglTexture,W=Ot(v);if(v.depthTexture.format===Fi)zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Yi)zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Vt(S){let v=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let Y=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Y}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");St(v.__webglFramebuffer,S)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[Y],S,!1);else{let J=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,S,!1);else{let Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(S,v,N){let Y=n.get(S);v!==void 0&&xt(Y.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Vt(S)}function le(S){let v=S.texture,N=n.get(S),Y=n.get(v);S.addEventListener("dispose",E);let J=S.textures,W=S.isWebGLCubeRenderTarget===!0,Ct=J.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[at]=[];for(let dt=0;dt<v.mipmaps.length;dt++)N.__webglFramebuffer[at][dt]=i.createFramebuffer()}else N.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)N.__webglFramebuffer[at]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let at=0,dt=J.length;at<dt;at++){let Gt=n.get(J[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&zt(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){let dt=J[at];N.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[at]);let Gt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),ft=C(dt.internalFormat,Gt,Q,dt.colorSpace,S.isXRRenderTarget===!0),Mt=Ot(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ft,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,N.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),qt(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)xt(N.__webglFramebuffer[at][dt],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else xt(N.__webglFramebuffer[at],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let at=0,dt=J.length;at<dt;at++){let Gt=J[at],Q=n.get(Gt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),qt(i.TEXTURE_2D,Gt),xt(N.__webglFramebuffer,S,Gt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),g(Gt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(at=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),qt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)xt(N.__webglFramebuffer[dt],S,v,i.COLOR_ATTACHMENT0,at,dt);else xt(N.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,at,0);g(v)&&p(at),e.unbindTexture()}S.depthBuffer&&Vt(S)}function Ht(S){let v=S.textures;for(let N=0,Y=v.length;N<Y;N++){let J=v[N];if(g(J)){let W=y(S),Ct=n.get(J).__webglTexture;e.bindTexture(W,Ct),p(W),e.unbindTexture()}}}let fe=[],D=[];function ke(S){if(S.samples>0){if(zt(S)===!1){let v=S.textures,N=S.width,Y=S.height,J=i.COLOR_BUFFER_BIT,W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(S),at=v.length>1;if(at)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Gt=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,J,i.NEAREST),l===!0&&(fe.length=0,D.length=0,fe.push(i.COLOR_ATTACHMENT0+dt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(fe.push(W),D.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Gt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let v=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ot(S){return Math.min(s.maxSamples,S.samples)}function zt(S){let v=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function It(S){let v=a.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function ie(S,v){let N=S.colorSpace,Y=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==is&&N!==Bn&&(Bt.getTransfer(N)===Kt?(Y!==$e||J!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function yt(S){return typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame!="undefined"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=zt}function nA(i,t){function e(n,s=Bn){let r,a=Bt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return i.BYTE;if(n===Ih)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===bh)return i.RGB;if(n===$e)return i.RGBA;if(n===Eh)return i.LUMINANCE;if(n===wh)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Th)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Vh)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===Sr||n===br||n===Er||n===wr)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===mo||n===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===go||n===mo)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xo||n===Co||n===vo||n===_o||n===yo||n===Io||n===Mo||n===So||n===bo||n===Eo||n===wo||n===To||n===Vo||n===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===Po||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tr)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Uo||n===Do||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $o=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Qt=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},iA={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(c,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
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

}`,tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:sA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},el=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,A=new tl,g=e.getContextAttributes(),p=null,y=null,C=[],x=[],R=new Z,b=null,E=new Re;E.viewport=new ue;let V=new Re;V.viewport=new ue;let M=[E,V],_=new $o,T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=C[X];return et===void 0&&(et=new _s,C[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=C[X];return et===void 0&&(et=new _s,C[X]=et),et.getGripSpace()},this.getHand=function(X){let et=C[X];return et===void 0&&(et=new _s,C[X]=et),et.getHandSpace()};function B(X){let et=x.indexOf(X.inputSource);if(et===-1)return;let xt=C[et];xt!==void 0&&(xt.update(X.inputSource,X.frame,c||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let X=0;X<C.length;X++){let et=x[X];et!==null&&(x[X]=null,C[X].disconnect(et))}T=null,O=null,A.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Me(d.framebufferWidth,d.framebufferHeight,{format:$e,type:En,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,xt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?Yi:Fi,xt=g.stencil?Xi:oi);let St={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Me(f.textureWidth,f.textureHeight,{format:$e,type:En,depthTexture:new zr(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function K(X){for(let et=0;et<X.removed.length;et++){let xt=X.removed[et],rt=x.indexOf(xt);rt>=0&&(x[rt]=null,C[rt].disconnect(xt))}for(let et=0;et<X.added.length;et++){let xt=X.added[et],rt=x.indexOf(xt);if(rt===-1){for(let Vt=0;Vt<C.length;Vt++)if(Vt>=x.length){x.push(xt),rt=Vt;break}else if(x[Vt]===null){x[Vt]=xt,rt=Vt;break}if(rt===-1)break}let St=C[rt];St&&St.connect(xt)}}let G=new w,tt=new w;function k(X,et,xt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(xt.matrixWorld);let rt=G.distanceTo(tt),St=et.projectionMatrix.elements,Vt=xt.projectionMatrix.elements,Ft=St[14]/(St[10]-1),le=St[14]/(St[10]+1),Ht=(St[9]+1)/St[5],fe=(St[9]-1)/St[5],D=(St[8]-1)/St[0],ke=(Vt[8]+1)/Vt[0],Ot=Ft*D,zt=Ft*ke,It=rt/(-D+ke),ie=It*-D;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),St[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let yt=Ft+It,S=le+It,v=Ot-ie,N=zt+(rt-ie),Y=Ht*le/S*yt,J=fe*le/S*yt;X.projectionMatrix.makePerspective(v,N,Y,J,yt,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,xt=X.far;A.texture!==null&&(A.depthNear>0&&(et=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),_.near=V.near=E.near=et,_.far=V.far=E.far=xt,(T!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,O=_.far),E.layers.mask=X.layers.mask|2,V.layers.mask=X.layers.mask|4,_.layers.mask=E.layers.mask|V.layers.mask;let rt=X.parent,St=_.cameras;st(_,rt);for(let Vt=0;Vt<St.length;Vt++)st(St[Vt],rt);St.length===2?k(_,E,V):_.projectionMatrix.copy(E.projectionMatrix),ut(X,_,rt)};function ut(X,et,xt){xt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Bo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let _t=null;function qt(X,et){if(h=et.getViewerPose(c||a),m=et,h!==null){let xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let rt=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,rt=!0);for(let Vt=0;Vt<xt.length;Vt++){let Ft=xt[Vt],le=null;if(d!==null)le=d.getViewport(Ft);else{let fe=u.getViewSubImage(f,Ft);le=fe.viewport,Vt===0&&(t.setRenderTargetTextures(y,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(y))}let Ht=M[Vt];Ht===void 0&&(Ht=new Re,Ht.layers.enable(Vt),Ht.viewport=new ue,M[Vt]=Ht),Ht.matrix.fromArray(Ft.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ft.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(le.x,le.y,le.width,le.height),Vt===0&&(_.matrix.copy(Ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),rt===!0&&_.cameras.push(Ht)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){let Vt=u.getDepthInformation(xt[0]);Vt&&Vt.isValid&&Vt.texture&&A.init(t,Vt,s.renderState)}}for(let xt=0;xt<C.length;xt++){let rt=x[xt],St=C[xt];rt!==null&&St!==void 0&&St.update(rt,et,c||a)}_t&&_t(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let $t=new qh;$t.setAnimationLoop(qt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}},ei=new dn,aA=new oe;function oA(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,C,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,C):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Pe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Pe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),C=y.envMap,x=y.envMapRotation;C&&(g.envMap.value=C,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),g.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(ei)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=C*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lA(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,C){let x=C.program;n.uniformBlockBinding(y,x)}function c(y,C){let x=s[y.id];x===void 0&&(m(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",g));let R=C.program;n.updateUBOMapping(y,R);let b=t.render.frame;r[y.id]!==b&&(f(y),r[y.id]=b)}function h(y){let C=u();y.__bindingPointIndex=C;let x=i.createBuffer(),R=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let C=s[y.id],x=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let b=0,E=x.length;b<E;b++){let V=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,_=V.length;M<_;M++){let T=V[M];if(d(T,b,M,R)===!0){let O=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],H=0;for(let K=0;K<B.length;K++){let G=B[K],tt=A(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,C,x,R){let b=y.value,E=C+"_"+x;if(R[E]===void 0)return typeof b=="number"||typeof b=="boolean"?R[E]=b:R[E]=b.clone(),!0;{let V=R[E];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return R[E]=b,!0}else if(V.equals(b)===!1)return V.copy(b),!0}return!1}function m(y){let C=y.uniforms,x=0,R=16;for(let E=0,V=C.length;E<V;E++){let M=Array.isArray(C[E])?C[E]:[C[E]];for(let _=0,T=M.length;_<T;_++){let O=M[_],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,K=B.length;H<K;H++){let G=B[H],tt=A(G),k=x%R,st=k%tt.boundary,ut=k+st;x+=st,ut!==0&&R-ut<tt.storage&&(x+=R-ut),O.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=tt.storage}}}let b=x%R;return b>0&&(x+=R-b),y.__size=x,y.__cache={},this}function A(y){let C={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(C.boundary=4,C.storage=4):y.isVector2?(C.boundary=8,C.storage=8):y.isVector3||y.isColor?(C.boundary=16,C.storage=12):y.isVector4?(C.boundary=16,C.storage=16):y.isMatrix3?(C.boundary=48,C.storage=48):y.isMatrix4?(C.boundary=64,C.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),C}function g(y){let C=y.target;C.removeEventListener("dispose",g);let x=a.indexOf(C.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var kr=class{constructor(t={}){let{canvas:e=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,y=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=zn,this.toneMappingExposure=1;let x=this,R=!1,b=0,E=0,V=null,M=-1,_=null,T=new ue,O=new ue,B=null,H=new Et(0),K=0,G=e.width,tt=e.height,k=1,st=null,ut=null,_t=new ue(0,0,G,tt),qt=new ue(0,0,G,tt),$t=!1,X=new ws,et=!1,xt=!1,rt=new oe,St=new oe,Vt=new w,Ft=new ue,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function fe(){return V===null?k:1}let D=n;function ke(I,L){return e.getContext(I,L)}try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),D===null){let L="webgl2";if(D=ke(L,I),D===null)throw ke(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ot,zt,It,ie,yt,S,v,N,Y,J,W,Ct,at,dt,Gt,Q,ft,Mt,wt,pt,kt,Ut,te,P;function it(){Ot=new Mg(D),Ot.init(),Ut=new nA(D,Ot),zt=new xg(D,Ot,t,Ut),It=new $m(D,Ot),zt.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ie=new Eg(D),yt=new Om,S=new eA(D,Ot,It,yt,zt,Ut,ie),v=new vg(x),N=new Ig(x),Y=new Ld(D),te=new mg(D,Y),J=new Sg(D,Y,ie,te),W=new Tg(D,J,Y,ie),wt=new wg(D,zt,S),Q=new Cg(yt),Ct=new Bm(x,v,N,Ot,zt,te,Q),at=new oA(x,yt),dt=new km,Gt=new jm(Ot),Mt=new gg(x,v,N,It,W,d,l),ft=new Zm(x,W,zt),P=new lA(D,ie,zt,It),pt=new Ag(D,Ot,ie),kt=new bg(D,Ot,ie),ie.programs=Ct.programs,x.capabilities=zt,x.extensions=Ot,x.properties=yt,x.renderLists=dt,x.shadowMap=ft,x.state=It,x.info=ie}it();let z=new el(x,D);this.xr=z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let I=Ot.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ot.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(G,tt,!1))},this.getSize=function(I){return I.set(G,tt)},this.setSize=function(I,L,q=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=I,tt=L,e.width=Math.floor(I*k),e.height=Math.floor(L*k),q===!0&&(e.style.width=I+"px",e.style.height=L+"px"),this.setViewport(0,0,I,L)},this.getDrawingBufferSize=function(I){return I.set(G*k,tt*k).floor()},this.setDrawingBufferSize=function(I,L,q){G=I,tt=L,k=q,e.width=Math.floor(I*q),e.height=Math.floor(L*q),this.setViewport(0,0,I,L)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(_t)},this.setViewport=function(I,L,q,F){I.isVector4?_t.set(I.x,I.y,I.z,I.w):_t.set(I,L,q,F),It.viewport(T.copy(_t).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(qt)},this.setScissor=function(I,L,q,F){I.isVector4?qt.set(I.x,I.y,I.z,I.w):qt.set(I,L,q,F),It.scissor(O.copy(qt).multiplyScalar(k).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(I){It.setScissorTest($t=I)},this.setOpaqueSort=function(I){st=I},this.setTransparentSort=function(I){ut=I},this.getClearColor=function(I){return I.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(I=!0,L=!0,q=!0){let F=0;if(I){let U=!1;if(V!==null){let $=V.texture.format;U=$===ql||$===Nl||$===Dl}if(U){let $=V.texture.type,lt=$===En||$===oi||$===bs||$===Xi||$===Ll||$===Ul,gt=Mt.getClearColor(),mt=Mt.getClearAlpha(),Tt=gt.r,Pt=gt.g,At=gt.b;lt?(m[0]=Tt,m[1]=Pt,m[2]=At,m[3]=mt,D.clearBufferuiv(D.COLOR,0,m)):(A[0]=Tt,A[1]=Pt,A[2]=At,A[3]=mt,D.clearBufferiv(D.COLOR,0,A))}else F|=D.COLOR_BUFFER_BIT}L&&(F|=D.DEPTH_BUFFER_BIT),q&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),Gt.dispose(),yt.dispose(),v.dispose(),N.dispose(),W.dispose(),te.dispose(),P.dispose(),Ct.dispose(),z.dispose(),z.removeEventListener("sessionstart",tc),z.removeEventListener("sessionend",ec),Kn.stop()};function j(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let I=ie.autoReset,L=ft.enabled,q=ft.autoUpdate,F=ft.needsUpdate,U=ft.type;it(),ie.autoReset=I,ft.enabled=L,ft.autoUpdate=q,ft.needsUpdate=F,ft.type=U}function ot(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Rt(I){let L=I.target;L.removeEventListener("dispose",Rt),he(L)}function he(I){we(I),yt.remove(I)}function we(I){let L=yt.get(I).programs;L!==void 0&&(L.forEach(function(q){Ct.releaseProgram(q)}),I.isShaderMaterial&&Ct.releaseShaderCache(I))}this.renderBufferDirect=function(I,L,q,F,U,$){L===null&&(L=le);let lt=U.isMesh&&U.matrixWorld.determinant()<0,gt=wu(I,L,q,F,U);It.setMaterial(F,lt);let mt=q.index,Tt=1;if(F.wireframe===!0){if(mt=J.getWireframeAttribute(q),mt===void 0)return;Tt=2}let Pt=q.drawRange,At=q.attributes.position,Xt=Pt.start*Tt,ee=(Pt.start+Pt.count)*Tt;$!==null&&(Xt=Math.max(Xt,$.start*Tt),ee=Math.min(ee,($.start+$.count)*Tt)),mt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,mt.count)):At!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,At.count));let se=ee-Xt;if(se<0||se===1/0)return;te.setup(U,F,gt,q,mt);let De,Yt=pt;if(mt!==null&&(De=Y.get(mt),Yt=kt,Yt.setIndex(De)),U.isMesh)F.wireframe===!0?(It.setLineWidth(F.wireframeLinewidth*fe()),Yt.setMode(D.LINES)):Yt.setMode(D.TRIANGLES);else if(U.isLine){let vt=F.linewidth;vt===void 0&&(vt=1),It.setLineWidth(vt*fe()),U.isLineSegments?Yt.setMode(D.LINES):U.isLineLoop?Yt.setMode(D.LINE_LOOP):Yt.setMode(D.LINE_STRIP)}else U.isPoints?Yt.setMode(D.POINTS):U.isSprite&&Yt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let vt=U._multiDrawStarts,gn=U._multiDrawCounts,jt=U._multiDrawCount,je=mt?Y.get(mt).bytesPerElement:1,mi=yt.get(F).currentProgram.getUniforms();for(let qe=0;qe<jt;qe++)mi.setValue(D,"_gl_DrawID",qe),Yt.render(vt[qe]/je,gn[qe])}else if(U.isInstancedMesh)Yt.renderInstances(Xt,se,U.count);else if(q.isInstancedBufferGeometry){let vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,gn=Math.min(q.instanceCount,vt);Yt.renderInstances(Xt,se,gn)}else Yt.render(Xt,se)};function Jt(I,L,q){I.transparent===!0&&I.side===Qe&&I.forceSinglePass===!1?(I.side=Pe,I.needsUpdate=!0,js(I,L,q),I.side=kn,I.needsUpdate=!0,js(I,L,q),I.side=Qe):js(I,L,q)}this.compile=function(I,L,q=null){q===null&&(q=I),p=Gt.get(q),p.init(L),C.push(p),q.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),I!==q&&I.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let F=new Set;return I.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let $=U.material;if($)if(Array.isArray($))for(let lt=0;lt<$.length;lt++){let gt=$[lt];Jt(gt,q,U),F.add(gt)}else Jt($,q,U),F.add($)}),C.pop(),p=null,F},this.compileAsync=function(I,L,q=null){let F=this.compile(I,L,q);return new Promise(U=>{function $(){if(F.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&F.delete(lt)}),F.size===0){U(I);return}setTimeout($,10)}Ot.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Ye=null;function pn(I){Ye&&Ye(I)}function tc(){Kn.stop()}function ec(){Kn.start()}let Kn=new qh;Kn.setAnimationLoop(pn),typeof self!="undefined"&&Kn.setContext(self),this.setAnimationLoop=function(I){Ye=I,z.setAnimationLoop(I),I===null?Kn.stop():Kn.start()},z.addEventListener("sessionstart",tc),z.addEventListener("sessionend",ec),this.render=function(I,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,L,V),p=Gt.get(I,C.length),p.init(L),C.push(p),St.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(St),xt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,xt),g=dt.get(I,y.length),g.init(),y.push(g),z.enabled===!0&&z.isPresenting===!0){let $=x.xr.getDepthSensingMesh();$!==null&&Aa($,L,-1/0,x.sortObjects)}Aa(I,L,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(st,ut),Ht=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ht&&Mt.addToRenderList(g,I),this.info.render.frame++,et===!0&&Q.beginShadows();let q=p.state.shadowsArray;ft.render(q,I,L),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=g.opaque,U=g.transmissive;if(p.setupLights(),L.isArrayCamera){let $=L.cameras;if(U.length>0)for(let lt=0,gt=$.length;lt<gt;lt++){let mt=$[lt];ic(F,U,I,mt)}Ht&&Mt.render(I);for(let lt=0,gt=$.length;lt<gt;lt++){let mt=$[lt];nc(g,I,mt,mt.viewport)}}else U.length>0&&ic(F,U,I,L),Ht&&Mt.render(I),nc(g,I,L);V!==null&&(S.updateMultisampleRenderTarget(V),S.updateRenderTargetMipmap(V)),I.isScene===!0&&I.onAfterRender(x,I,L),te.resetDefaultState(),M=-1,_=null,C.pop(),C.length>0?(p=C[C.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Aa(I,L,q,F){if(I.visible===!1)return;if(I.layers.test(L.layers)){if(I.isGroup)q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(L);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||X.intersectsSprite(I)){F&&Ft.setFromMatrixPosition(I.matrixWorld).applyMatrix4(St);let lt=W.update(I),gt=I.material;gt.visible&&g.push(I,lt,gt,q,Ft.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||X.intersectsObject(I))){let lt=W.update(I),gt=I.material;if(F&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ft.copy(I.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ft.copy(lt.boundingSphere.center)),Ft.applyMatrix4(I.matrixWorld).applyMatrix4(St)),Array.isArray(gt)){let mt=lt.groups;for(let Tt=0,Pt=mt.length;Tt<Pt;Tt++){let At=mt[Tt],Xt=gt[At.materialIndex];Xt&&Xt.visible&&g.push(I,lt,Xt,q,Ft.z,At)}}else gt.visible&&g.push(I,lt,gt,q,Ft.z,null)}}let $=I.children;for(let lt=0,gt=$.length;lt<gt;lt++)Aa($[lt],L,q,F)}function nc(I,L,q,F){let U=I.opaque,$=I.transmissive,lt=I.transparent;p.setupLightsView(q),et===!0&&Q.setGlobalState(x.clippingPlanes,q),F&&It.viewport(T.copy(F)),U.length>0&&Ys(U,L,q),$.length>0&&Ys($,L,q),lt.length>0&&Ys(lt,L,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ic(I,L,q,F){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new Me(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?an:En,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));let $=p.state.transmissionRenderTarget[F.id],lt=F.viewport||T;$.setSize(lt.z,lt.w);let gt=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(H),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Ht&&Mt.render(q);let mt=x.toneMapping;x.toneMapping=zn;let Tt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),et===!0&&Q.setGlobalState(x.clippingPlanes,F),Ys(I,q,F),S.updateMultisampleRenderTarget($),S.updateRenderTargetMipmap($),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let At=0,Xt=L.length;At<Xt;At++){let ee=L[At],se=ee.object,De=ee.geometry,Yt=ee.material,vt=ee.group;if(Yt.side===Qe&&se.layers.test(F.layers)){let gn=Yt.side;Yt.side=Pe,Yt.needsUpdate=!0,sc(se,q,F,De,Yt,vt),Yt.side=gn,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(S.updateMultisampleRenderTarget($),S.updateRenderTargetMipmap($))}x.setRenderTarget(gt),x.setClearColor(H,K),Tt!==void 0&&(F.viewport=Tt),x.toneMapping=mt}function Ys(I,L,q){let F=L.isScene===!0?L.overrideMaterial:null;for(let U=0,$=I.length;U<$;U++){let lt=I[U],gt=lt.object,mt=lt.geometry,Tt=F===null?lt.material:F,Pt=lt.group;gt.layers.test(q.layers)&&sc(gt,L,q,mt,Tt,Pt)}}function sc(I,L,q,F,U,$){I.onBeforeRender(x,L,q,F,U,$),I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),U.onBeforeRender(x,L,q,F,I,$),U.transparent===!0&&U.side===Qe&&U.forceSinglePass===!1?(U.side=Pe,U.needsUpdate=!0,x.renderBufferDirect(q,L,F,U,I,$),U.side=kn,U.needsUpdate=!0,x.renderBufferDirect(q,L,F,U,I,$),U.side=Qe):x.renderBufferDirect(q,L,F,U,I,$),I.onAfterRender(x,L,q,F,U,$)}function js(I,L,q){L.isScene!==!0&&(L=le);let F=yt.get(I),U=p.state.lights,$=p.state.shadowsArray,lt=U.state.version,gt=Ct.getParameters(I,U.state,$,L,q),mt=Ct.getProgramCacheKey(gt),Tt=F.programs;F.environment=I.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(I.isMeshStandardMaterial?N:v).get(I.envMap||F.environment),F.envMapRotation=F.environment!==null&&I.envMap===null?L.environmentRotation:I.envMapRotation,Tt===void 0&&(I.addEventListener("dispose",Rt),Tt=new Map,F.programs=Tt);let Pt=Tt.get(mt);if(Pt!==void 0){if(F.currentProgram===Pt&&F.lightsStateVersion===lt)return ac(I,gt),Pt}else gt.uniforms=Ct.getUniforms(I),I.onBeforeCompile(gt,x),Pt=Ct.acquireProgram(gt,mt),Tt.set(mt,Pt),F.uniforms=gt.uniforms;let At=F.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(At.clippingPlanes=Q.uniform),ac(I,gt),F.needsLights=Vu(I),F.lightsStateVersion=lt,F.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Pt,F.uniformsList=null,Pt}function rc(I){if(I.uniformsList===null){let L=I.currentProgram.getUniforms();I.uniformsList=Oi.seqWithValue(L.seq,I.uniforms)}return I.uniformsList}function ac(I,L){let q=yt.get(I);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function wu(I,L,q,F,U){L.isScene!==!0&&(L=le),S.resetTextureUnits();let $=L.fog,lt=F.isMeshStandardMaterial?L.environment:null,gt=V===null?x.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:is,mt=(F.isMeshStandardMaterial?N:v).get(F.envMap||lt),Tt=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Pt=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),At=!!q.morphAttributes.position,Xt=!!q.morphAttributes.normal,ee=!!q.morphAttributes.color,se=zn;F.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(se=x.toneMapping);let De=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Yt=De!==void 0?De.length:0,vt=yt.get(F),gn=p.state.lights;if(et===!0&&(xt===!0||I!==_)){let He=I===_&&F.id===M;Q.setState(F,I,He)}let jt=!1;F.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==gn.state.version||vt.outputColorSpace!==gt||U.isBatchedMesh&&vt.batching===!1||!U.isBatchedMesh&&vt.batching===!0||U.isBatchedMesh&&vt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&vt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&vt.instancing===!1||!U.isInstancedMesh&&vt.instancing===!0||U.isSkinnedMesh&&vt.skinning===!1||!U.isSkinnedMesh&&vt.skinning===!0||U.isInstancedMesh&&vt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&vt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&vt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&vt.instancingMorph===!1&&U.morphTexture!==null||vt.envMap!==mt||F.fog===!0&&vt.fog!==$||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Q.numPlanes||vt.numIntersection!==Q.numIntersection)||vt.vertexAlphas!==Tt||vt.vertexTangents!==Pt||vt.morphTargets!==At||vt.morphNormals!==Xt||vt.morphColors!==ee||vt.toneMapping!==se||vt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,vt.__version=F.version);let je=vt.currentProgram;jt===!0&&(je=js(F,L,U));let mi=!1,qe=!1,hs=!1,re=je.getUniforms(),on=vt.uniforms;if(It.useProgram(je.program)&&(mi=!0,qe=!0,hs=!0),F.id!==M&&(M=F.id,qe=!0),mi||_!==I){It.buffers.depth.getReversed()?(rt.copy(I.projectionMatrix),pd(rt),gd(rt),re.setValue(D,"projectionMatrix",rt)):re.setValue(D,"projectionMatrix",I.projectionMatrix),re.setValue(D,"viewMatrix",I.matrixWorldInverse);let Rn=re.map.cameraPosition;Rn!==void 0&&Rn.setValue(D,Vt.setFromMatrixPosition(I.matrixWorld)),zt.logarithmicDepthBuffer&&re.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&re.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),_!==I&&(_=I,qe=!0,hs=!0)}if(U.isSkinnedMesh){re.setOptional(D,U,"bindMatrix"),re.setOptional(D,U,"bindMatrixInverse");let He=U.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),re.setValue(D,"boneTexture",He.boneTexture,S))}U.isBatchedMesh&&(re.setOptional(D,U,"batchingTexture"),re.setValue(D,"batchingTexture",U._matricesTexture,S),re.setOptional(D,U,"batchingIdTexture"),re.setValue(D,"batchingIdTexture",U._indirectTexture,S),re.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(D,"batchingColorTexture",U._colorsTexture,S));let us=q.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&wt.update(U,q,je),(qe||vt.receiveShadow!==U.receiveShadow)&&(vt.receiveShadow=U.receiveShadow,re.setValue(D,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(on.envMap.value=mt,on.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(on.envMapIntensity.value=L.environmentIntensity),qe&&(re.setValue(D,"toneMappingExposure",x.toneMappingExposure),vt.needsLights&&Tu(on,hs),$&&F.fog===!0&&at.refreshFogUniforms(on,$),at.refreshMaterialUniforms(on,F,k,tt,p.state.transmissionRenderTarget[I.id]),Oi.upload(D,rc(vt),on,S)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Oi.upload(D,rc(vt),on,S),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&re.setValue(D,"center",U.center),re.setValue(D,"modelViewMatrix",U.modelViewMatrix),re.setValue(D,"normalMatrix",U.normalMatrix),re.setValue(D,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let He=F.uniformsGroups;for(let Rn=0,Pn=He.length;Rn<Pn;Rn++){let oc=He[Rn];P.update(oc,je),P.bind(oc,je)}}return je}function Tu(I,L){I.ambientLightColor.needsUpdate=L,I.lightProbe.needsUpdate=L,I.directionalLights.needsUpdate=L,I.directionalLightShadows.needsUpdate=L,I.pointLights.needsUpdate=L,I.pointLightShadows.needsUpdate=L,I.spotLights.needsUpdate=L,I.spotLightShadows.needsUpdate=L,I.rectAreaLights.needsUpdate=L,I.hemisphereLights.needsUpdate=L}function Vu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(I,L,q){yt.get(I.texture).__webglTexture=L,yt.get(I.depthTexture).__webglTexture=q;let F=yt.get(I);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,L){let q=yt.get(I);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(I,L=0,q=0){V=I,b=L,E=q;let F=!0,U=null,$=!1,lt=!1;if(I){let mt=yt.get(I);if(mt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(D.FRAMEBUFFER,null),F=!1;else if(mt.__webglFramebuffer===void 0)S.setupRenderTarget(I);else if(mt.__hasExternalTextures)S.rebindTextures(I,yt.get(I.texture).__webglTexture,yt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let At=I.depthTexture;if(mt.__boundDepthTexture!==At){if(At!==null&&yt.has(At)&&(I.width!==At.image.width||I.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(I)}}let Tt=I.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(lt=!0);let Pt=yt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Pt[L])?U=Pt[L][q]:U=Pt[L],$=!0):I.samples>0&&S.useMultisampledRTT(I)===!1?U=yt.get(I).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[q]:U=Pt,T.copy(I.viewport),O.copy(I.scissor),B=I.scissorTest}else T.copy(_t).multiplyScalar(k).floor(),O.copy(qt).multiplyScalar(k).floor(),B=$t;if(It.bindFramebuffer(D.FRAMEBUFFER,U)&&F&&It.drawBuffers(I,U),It.viewport(T),It.scissor(O),It.setScissorTest(B),$){let mt=yt.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,q)}else if(lt){let mt=yt.get(I.texture),Tt=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,q||0,Tt)}M=-1},this.readRenderTargetPixels=function(I,L,q,F,U,$,lt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=yt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){It.bindFramebuffer(D.FRAMEBUFFER,gt);try{let mt=I.texture,Tt=mt.format,Pt=mt.type;if(!zt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=I.width-F&&q>=0&&q<=I.height-U&&D.readPixels(L,q,F,U,Ut.convert(Tt),Ut.convert(Pt),$)}finally{let mt=V!==null?yt.get(V).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(I,L,q,F,U,$,lt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=yt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){let mt=I.texture,Tt=mt.format,Pt=mt.type;if(!zt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=I.width-F&&q>=0&&q<=I.height-U){It.bindFramebuffer(D.FRAMEBUFFER,gt);let At=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.bufferData(D.PIXEL_PACK_BUFFER,$.byteLength,D.STREAM_READ),D.readPixels(L,q,F,U,Ut.convert(Tt),Ut.convert(Pt),0);let Xt=V!==null?yt.get(V).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,Xt);let ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fd(D,ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,$),D.deleteBuffer(At),D.deleteSync(ee),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,L=null,q=0){I.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,I=arguments[1]);let F=Math.pow(2,-q),U=Math.floor(I.image.width*F),$=Math.floor(I.image.height*F),lt=L!==null?L.x:0,gt=L!==null?L.y:0;S.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,lt,gt,U,$),It.unbindTexture()},this.copyTextureToTexture=function(I,L,q=null,F=null,U=0){I.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,I=arguments[1],L=arguments[2],U=arguments[3]||0,q=null);let $,lt,gt,mt,Tt,Pt,At,Xt,ee,se=I.isCompressedTexture?I.mipmaps[U]:I.image;q!==null?($=q.max.x-q.min.x,lt=q.max.y-q.min.y,gt=q.isBox3?q.max.z-q.min.z:1,mt=q.min.x,Tt=q.min.y,Pt=q.isBox3?q.min.z:0):($=se.width,lt=se.height,gt=se.depth||1,mt=0,Tt=0,Pt=0),F!==null?(At=F.x,Xt=F.y,ee=F.z):(At=0,Xt=0,ee=0);let De=Ut.convert(L.format),Yt=Ut.convert(L.type),vt;L.isData3DTexture?(S.setTexture3D(L,0),vt=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(S.setTexture2DArray(L,0),vt=D.TEXTURE_2D_ARRAY):(S.setTexture2D(L,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let gn=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),je=D.getParameter(D.UNPACK_SKIP_PIXELS),mi=D.getParameter(D.UNPACK_SKIP_ROWS),qe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt);let hs=I.isDataArrayTexture||I.isData3DTexture,re=L.isDataArrayTexture||L.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let on=yt.get(I),us=yt.get(L),He=yt.get(on.__renderTarget),Rn=yt.get(us.__renderTarget);It.bindFramebuffer(D.READ_FRAMEBUFFER,He.__webglFramebuffer),It.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Pn=0;Pn<gt;Pn++)hs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(I).__webglTexture,U,Pt+Pn),I.isDepthTexture?(re&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(L).__webglTexture,U,ee+Pn),D.blitFramebuffer(mt,Tt,$,lt,At,Xt,$,lt,D.DEPTH_BUFFER_BIT,D.NEAREST)):re?D.copyTexSubImage3D(vt,U,At,Xt,ee+Pn,mt,Tt,$,lt):D.copyTexSubImage2D(vt,U,At,Xt,ee+Pn,mt,Tt,$,lt);It.bindFramebuffer(D.READ_FRAMEBUFFER,null),It.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else re?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(vt,U,At,Xt,ee,$,lt,gt,De,Yt,se.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,U,At,Xt,ee,$,lt,gt,De,se.data):D.texSubImage3D(vt,U,At,Xt,ee,$,lt,gt,De,Yt,se):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,At,Xt,$,lt,De,Yt,se.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,At,Xt,se.width,se.height,De,se.data):D.texSubImage2D(D.TEXTURE_2D,U,At,Xt,$,lt,De,Yt,se);D.pixelStorei(D.UNPACK_ROW_LENGTH,gn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,je),D.pixelStorei(D.UNPACK_SKIP_ROWS,mi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe),U===0&&L.generateMipmaps&&D.generateMipmap(vt),It.unbindTexture()},this.copyTextureToTexture3D=function(I,L,q=null,F=null,U=0){return I.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,F=arguments[1]||null,I=arguments[2],L=arguments[3],U=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,L,q,F,U)},this.initRenderTarget=function(I){yt.get(I).__webglFramebuffer===void 0&&S.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?S.setTextureCube(I,0):I.isData3DTexture?S.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?S.setTexture2DArray(I,0):S.setTexture2D(I,0),It.unbindTexture()},this.resetState=function(){b=0,E=0,V=null,It.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}};var Hr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ts=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fo,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Le=new w,Gr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zi=class extends wn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ri,ms=new w,Pi=new w,Li=new w,Ui=new Z,As=new Z,kh=new oe,mr=new w,xs=new w,Ar=new w,ah=new Z,ja=new Z,oh=new Z,Vs=class extends Se{constructor(t=new Zi){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nl(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new Gr(n,3,0,!1)),Ri.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),kh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;xr(mr.set(-.5,-.5,0),Li,a,Pi,s,r),xr(xs.set(.5,-.5,0),Li,a,Pi,s,r),xr(Ar.set(.5,.5,0),Li,a,Pi,s,r),ah.set(0,0),ja.set(1,0),oh.set(1,1);let o=t.ray.intersectTriangle(mr,xs,Ar,!1,ms);if(o===null&&(xr(xs.set(-.5,.5,0),Li,a,Pi,s,r),ja.set(0,1),o=t.ray.intersectTriangle(mr,Ar,xs,!1,ms),o===null))return;let l=t.ray.origin.distanceTo(ms);l<t.near||l>t.far||e.push({distance:l,point:ms.clone(),uv:On.getInterpolation(ms,mr,xs,Ar,ah,ja,oh,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xr(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(As.x=r*Ui.x-s*Ui.y,As.y=s*Ui.x+r*Ui.y):As.copy(Ui),i.copy(t),i.x+=As.x,i.y+=As.y,i.applyMatrix4(kh)}var ci=class extends wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lh=new oe,il=new Ur,Cr=new ji,vr=new w,Qi=class extends Se{constructor(t=new de,e=new ci){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;lh.copy(s).invert(),il.copy(t.ray).applyMatrix4(lh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,A=d;m<A;m++){let g=c.getX(m);vr.fromBufferAttribute(u,g),ch(vr,g,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,A=d;m<A;m++)vr.fromBufferAttribute(u,m),ch(vr,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ch(i,t,e,n,s,r,a){let o=il.distanceSqToPoint(i);if(o<e){let l=new w;il.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var $i=class extends Ne{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},We=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Z:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,s=[],r=[],a=[],o=new w,l=new oe;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ye(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends We{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Z){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends Rs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _r=new w,Ka=new Bl,Ja=new Bl,Za=new Bl,rl=class extends We{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(_r.subVectors(s[0],s[1]).add(s[0]),c=_r);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),A=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),Ka.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,A,g),Ja.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,A,g),Za.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ja.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Za.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ka.calc(l),Ja.calc(l),Za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function cA(i,t){let e=1-i;return e*e*t}function hA(i,t){return 2*(1-i)*i*t}function uA(i,t){return i*i*t}function ys(i,t,e,n){return cA(i,t)+hA(i,e)+uA(i,n)}function dA(i,t){let e=1-i;return e*e*e*t}function fA(i,t){let e=1-i;return 3*e*e*i*t}function pA(i,t){return 3*(1-i)*i*i*t}function gA(i,t){return i*i*i*t}function Is(i,t,e,n,s){return dA(i,t)+fA(i,e)+pA(i,n)+gA(i,s)}var Wr=class extends We{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Is(t,s.x,r.x,a.x,o.x),Is(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},al=class extends We{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Is(t,s.x,r.x,a.x,o.x),Is(t,s.y,r.y,a.y,o.y),Is(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xr=class extends We{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends We{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends We{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ys(t,s.x,r.x,a.x),ys(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends We{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ys(t,s.x,r.x,a.x),ys(t,s.y,r.y,a.y),ys(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(hh(o,l.x,c.x,h.x,u.x),hh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Z().fromArray(s))}return this}},uh=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:Wr,CubicBezierCurve3:al,EllipseCurve:Rs,LineCurve:Xr,LineCurve3:ol,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:ll,SplineCurve:jr}),cl=class extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new uh[s.type]().fromJSON(s))}return this}},Ps=class extends cl{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xr(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Yr(this.currentPoint.clone(),new Z(t,e),new Z(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Wr(this.currentPoint.clone(),new Z(t,e),new Z(n,s),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Rs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hl=class i extends de{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new w,f=new Z,d=new w,m=new w,A=new w,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,A.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(A.x,A.y,A.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=A.x,d.y+=A.y,d.z+=A.z,d.normalize(),l.push(d.x,d.y,d.z),A.copy(m)}for(let y=0;y<=e;y++){let C=n+y*h*s,x=Math.sin(C),R=Math.cos(C);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*R,a.push(u.x,u.y,u.z),f.x=y/e,f.y=b/(t.length-1),o.push(f.x,f.y);let E=l[3*b+0]*x,V=l[3*b+1],M=l[3*b+0]*R;c.push(E,V,M)}}for(let y=0;y<e;y++)for(let C=0;C<t.length-1;C++){let x=C+y*t.length,R=x,b=x+t.length,E=x+t.length+1,V=x+1;r.push(R,b,V),r.push(E,V,b)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("uv",new Wt(o,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Kr=class i extends hl{constructor(t=1,e=1,n=4,s=8){let r=new Ps;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ls=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new w,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nn=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,A=[],g=n/2,p=0;y(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function y(){let x=new w,R=new w,b=0,E=(e-t)/n;for(let V=0;V<=r;V++){let M=[],_=V/r,T=_*(e-t)+t;for(let O=0;O<=s;O++){let B=O/s,H=B*l+o,K=Math.sin(H),G=Math.cos(H);R.x=T*K,R.y=-_*n+g,R.z=T*G,u.push(R.x,R.y,R.z),x.set(K,E,G).normalize(),f.push(x.x,x.y,x.z),d.push(B,1-_),M.push(m++)}A.push(M)}for(let V=0;V<s;V++)for(let M=0;M<r;M++){let _=A[M][V],T=A[M+1][V],O=A[M+1][V+1],B=A[M][V+1];(t>0||M!==0)&&(h.push(_,T,B),b+=3),(e>0||M!==r-1)&&(h.push(T,O,B),b+=3)}c.addGroup(p,b,0),p+=b}function C(x){let R=m,b=new Z,E=new w,V=0,M=x===!0?t:e,_=x===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),m++;let T=m;for(let O=0;O<=s;O++){let H=O/s*l+o,K=Math.cos(H),G=Math.sin(H);E.x=M*G,E.y=g*_,E.z=M*K,u.push(E.x,E.y,E.z),f.push(0,_,0),b.x=K*.5+.5,b.y=G*.5*_+.5,d.push(b.x,b.y),m++}for(let O=0;O<s;O++){let B=R+O,H=T+O;x===!0?h.push(H,H+1,B):h.push(H+1,H,B),V+=3}c.addGroup(p,V,x===!0?1:2),p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hi=class i extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Us=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let C=new w,x=new w,R=new w;for(let b=0;b<e.length;b+=3)d(e[b+0],C),d(e[b+1],x),d(e[b+2],R),l(C,x,R,y)}function l(y,C,x,R){let b=R+1,E=[];for(let V=0;V<=b;V++){E[V]=[];let M=y.clone().lerp(x,V/b),_=C.clone().lerp(x,V/b),T=b-V;for(let O=0;O<=T;O++)O===0&&V===b?E[V][O]=M:E[V][O]=M.clone().lerp(_,O/T)}for(let V=0;V<b;V++)for(let M=0;M<2*(b-V)-1;M++){let _=Math.floor(M/2);M%2===0?(f(E[V][_+1]),f(E[V+1][_]),f(E[V][_])):(f(E[V][_+1]),f(E[V+1][_+1]),f(E[V+1][_]))}}function c(y){let C=new w;for(let x=0;x<r.length;x+=3)C.x=r[x+0],C.y=r[x+1],C.z=r[x+2],C.normalize().multiplyScalar(y),r[x+0]=C.x,r[x+1]=C.y,r[x+2]=C.z}function h(){let y=new w;for(let C=0;C<r.length;C+=3){y.x=r[C+0],y.y=r[C+1],y.z=r[C+2];let x=g(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(x,1-R)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){let C=a[y+0],x=a[y+2],R=a[y+4],b=Math.max(C,x,R),E=Math.min(C,x,R);b>.9&&E<.1&&(C<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,C){let x=y*3;C.x=t[x+0],C.y=t[x+1],C.z=t[x+2]}function m(){let y=new w,C=new w,x=new w,R=new w,b=new Z,E=new Z,V=new Z;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),C.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),b.set(a[_+0],a[_+1]),E.set(a[_+2],a[_+3]),V.set(a[_+4],a[_+5]),R.copy(y).add(C).add(x).divideScalar(3);let T=g(R);A(b,_+0,y,T),A(E,_+2,C,T),A(V,_+4,x,T)}}function A(y,C,x,R){R<0&&y.x===1&&(a[C]=y.x-1),x.x===0&&x.z===0&&(a[C]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Jr=class i extends Us{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ds=class extends Ps{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ps().fromJSON(s))}return this}},mA={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Hh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=_A(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Ns(r,a,e,o,l,d,0),a}};function Hh(i,t,e,n,s){let r,a;if(s===PA(i,t,e,n)>0)for(r=t;r<e;r+=n)a=dh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=dh(r,i[r],i[r+1],a);return a&&aa(a,a.next)&&(Fs(a),a=a.next),a}function ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(aa(e,e.next)||ce(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ns(i,t,e,n,s,r,a){if(!i)return;!a&&r&&bA(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?xA(i,n,s,r):AA(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Fs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=CA(ui(i),t,e),Ns(i,t,e,n,s,r,2)):a===2&&vA(i,t,e,n,s,r):Ns(ui(i),t,e,n,s,r,1);break}}}function AA(i){let t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Ni(s,o,r,l,a,c,m.x,m.y)&&ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xA(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ce(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,A=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=ul(d,m,t,e,n),y=ul(A,g,t,e,n),C=i.prevZ,x=i.nextZ;for(;C&&C.z>=p&&x&&x.z<=y;){if(C.x>=d&&C.x<=A&&C.y>=m&&C.y<=g&&C!==s&&C!==a&&Ni(o,h,l,u,c,f,C.x,C.y)&&ce(C.prev,C,C.next)>=0||(C=C.prevZ,x.x>=d&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Ni(o,h,l,u,c,f,x.x,x.y)&&ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;C&&C.z>=p;){if(C.x>=d&&C.x<=A&&C.y>=m&&C.y<=g&&C!==s&&C!==a&&Ni(o,h,l,u,c,f,C.x,C.y)&&ce(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Ni(o,h,l,u,c,f,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function CA(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!aa(s,r)&&Gh(s,n,n.next,r)&&qs(s,r)&&qs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return ui(n)}function vA(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&TA(a,o)){let l=Wh(a,o);a=ui(a,a.next),l=ui(l,l.next),Ns(a,t,e,n,s,r,0),Ns(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _A(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Hh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(wA(c));for(s.sort(yA),r=0;r<s.length;r++)e=IA(s[r],e);return e}function yA(i,t){return i.x-t.x}function IA(i,t){let e=MA(i,t);if(!e)return t;let n=Wh(e,i);return ui(n,n.next),ui(e,e.next)}function MA(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ni(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),qs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&SA(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function SA(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function bA(i,t,e,n){let s=i;do s.z===0&&(s.z=ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,EA(s)}function EA(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ni(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function TA(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!VA(i,t)&&(qs(i,t)&&qs(t,i)&&RA(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||aa(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function aa(i,t){return i.x===t.x&&i.y===t.y}function Gh(i,t,e,n){let s=Ir(ce(i,t,e)),r=Ir(ce(i,t,n)),a=Ir(ce(e,n,i)),o=Ir(ce(e,n,t));return!!(s!==r&&a!==o||s===0&&yr(i,e,t)||r===0&&yr(i,n,t)||a===0&&yr(e,i,n)||o===0&&yr(e,t,n))}function yr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ir(i){return i>0?1:i<0?-1:0}function VA(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function RA(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wh(i,t){let e=new dl(i.i,i.x,i.y),n=new dl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dh(i,t,e,n){let s=new dl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function PA(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ms=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];fh(t),ph(n,t);let a=t.length;e.forEach(fh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ph(n,e[l]);let o=mA.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function fh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Bs=class i extends Us{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zr=class i extends Us{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Qr=class i extends de{constructor(t=new Ds([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(r,3)),this.setAttribute("uv",new Wt(a,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;Ms.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];Ms.isClockWise(y)===!0&&(m[g]=y.reverse())}let A=Ms.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];d=d.concat(y)}for(let g=0,p=d.length;g<p;g++){let y=d[g];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,p=A.length;g<p;g++){let y=A[g],C=y[0]+u,x=y[1]+u,R=y[2]+u;n.push(C,x,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return LA(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function LA(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var di=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,f=new w,d=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let y=[],C=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let b=R/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+C*o),u.y=t*Math.cos(a+C*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+C*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),A.push(f.x,f.y,f.z),g.push(b+x,1-C),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let C=h[p][y+1],x=h[p][y],R=h[p+1][y],b=h[p+1][y+1];(p!==0||a>0)&&d.push(C,x,b),(p!==n-1||l<Math.PI)&&d.push(x,R,b)}this.setIndex(d),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(A,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ts=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new w,u=new w,f=new w;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let A=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(A),u.y=(t+e*Math.cos(g))*Math.sin(A),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let A=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,y=(s+1)*d+m;a.push(A,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var $r=class extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},sn=class extends wn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Mr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function UA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dc:r=t,o=2*e-n;break;case fc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:a=t,l=2*n-e;break;case fc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-f*g+2*f*A-f*m,y=(1+f)*g+(-1.5-2*f)*A+(-.5+f)*m+1,C=(-1-d)*g+(1.5+d)*A+.5*m,x=d*g-d*A;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[c+R]+C*a[l+R]+x*a[u+R];return r}},pl=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},gl=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mr(e,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mr(t.times,Array),values:Mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&UA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ca,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[f+m]||A!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=qo;var fi=class extends rn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Vr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends rn{};ml.prototype.ValueTypeName="color";var Al=class extends rn{};Al.prototype.ValueTypeName="number";var xl=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ta=class extends rn{InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends rn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Vr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends rn{};Cl.prototype.ValueTypeName="vector";var gh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},DA=new vl,Os=class{constructor(t){this.manager=t!==void 0?t:DA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Os.DEFAULT_MATERIAL_NAME="__DEFAULT";var _l=class extends Os{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=gh.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Es("img");function l(){h(),gh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var ea=class extends Os{constructor(t){super(t)}load(t,e,n,s){let r=new Ne,a=new _l(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},na=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zs=class extends na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Qa=new oe,mh=new w,Ah=new w,yl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Il=class extends yl{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ns=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=xh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function xh(){return performance.now()}var Ol="\\[\\]\\.:\\/",NA=new RegExp("["+Ol+"]","g"),zl="[^"+Ol+"]",qA="[^"+Ol.replace("\\.","")+"]",FA=/((?:WC+[\/:])*)/.source.replace("WC",zl),BA=/(WCOD+)?/.source.replace("WCOD",qA),OA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),zA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),kA=new RegExp("^"+FA+BA+OA+zA+"$"),HA=["material","materials","bones","map"],Ml=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(NA,"")}static parseTrackName(t){let e=kA.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);HA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Ml;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);var fn=[-3.6,-1.8,0,1.8,3.6],gi=[{id:1,len:520,time:60,gap:[34,46],speed:[4.5,6],logs:.15,orbs:3,pads:5,rival:.92},{id:2,len:555,time:60,gap:[28,40],speed:[5,7],logs:.3,orbs:3,pads:5,rival:.97},{id:3,len:585,time:60,gap:[24,34],speed:[6,8],logs:.4,orbs:4,pads:6,rival:1.02},{id:4,len:615,time:62,gap:[22,31],speed:[6.5,8.5],logs:.45,orbs:4,pads:6,rival:1.04},{id:5,len:645,time:64,gap:[20,29],speed:[7,9],logs:.5,orbs:4,pads:7,rival:1.06}],Xh=10.4,GA=1.6,WA=1.4,XA=1.3,YA=7;function Yh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var la=[{id:"you",name:["\u0623\u0646\u062A","You"]},{id:"teal",name:["\u0644\u064A\u0644\u0649","Lila"]},{id:"yellow",name:["\u0639\u0645\u0651 \u0635\u0627\u0628\u0631","Saber"]},{id:"purple",name:["\u0645\u0631\u064A\u0645","Mariam"]}];function jA(i,t){let e=Yh(t),n=[];for(let o=30;o<i.len-30;o+=22+e()*18){let l=fn[Math.floor(e()*fn.length)],c=4+Math.floor(e()*2),h=e()<.4?e()<.5?-.45:.45:0;for(let u=0;u<c;u++)n.push({s:o+u*2.4,x:Math.max(-4.6+.6,Math.min(4.6-.6,l+h*u)),got:!1})}let s=[];for(let o=0;o<i.pads;o++)s.push({s:60+(i.len-120)*(o+e()*.6)/i.pads,x:fn[Math.floor(e()*fn.length)]});let r=[];for(let o=0;o<i.orbs;o++)r.push({s:90+(i.len-160)*(o+.3+e()*.4)/i.orbs,x:fn[Math.floor(e()*fn.length)],kind:o%2?"shield":"tailwind",got:!1});let a=[.25,.5,.75].map(o=>o*i.len);return{crystals:n,pads:s,orbs:r,checks:a}}var oa=class{constructor(t,e={}){var n;this.course=gi[t],this.easy=!!e.easy,this.seed=(n=e.seed)!=null?n:1,this.r=Yh(this.seed*977+t),this.lay=jA(this.course,this.seed+t*31),this.time=this.course.time+(this.easy?15:0),this.t=0,this.state="count",this.countdown=3,this.events=[],this.runners=la.map((s,r)=>({id:s.id,me:r===0,s:0,x:[0,-2.2,2.2,-.9][r],want:[0,-2.2,2.2,-.9][r],score:0,lives:3,down:0,safe:0,boost:0,wind:0,shield:0,pace:r===0?1:this.course.rival*[1,.99,.965,.98][r]*(this.easy?.9:1),finished:0,dodge:new Set})),this.me=this.runners[0],this.hazards=[],this.nextHazard=50,this.hid=0,this.lastRank=1,this.place=0}get remaining(){return Math.max(0,this.time-this.t)}steer(t){this.me.want=Math.max(-4.6+.4,Math.min(4.6-.4,t))}rankOf(t){return[...this.runners].sort((n,s)=>s.finished&&n.finished?n.finished-s.finished:s.finished?1:n.finished?-1:s.s-n.s).indexOf(t)+1}_emit(t,e={}){this.events.push({type:t,...e})}step(t){if(this.events=[],this.state==="count"){let s=Math.ceil(this.countdown);return this.countdown-=t,Math.ceil(this.countdown)!==s&&this.countdown>0&&this._emit("count",{n:Math.ceil(this.countdown)}),this.countdown<=0&&(this.state="run",this._emit("go")),this.events}if(this.state!=="run")return this.events;this.t+=t;let e=this.course;if(this.me.s+70>this.nextHazard&&this.nextHazard<e.len-25){let s=this._hazardLane(),r=this.r()<e.logs?"log":this.r()<.5?"boulder":"snowball",a=(e.speed[0]+this.r()*(e.speed[1]-e.speed[0]))*(this.easy?.7:1),o=r==="log"?.55:r==="boulder"?.75+this.r()*.25:.6+this.r()*.25,l=r==="log"?Math.max(-4.6+1.4,Math.min(4.6-1.4,s)):s;if(this.hazards.push({id:++this.hid,kind:r,s:this.nextHazard,x:l,v:a,r:o,half:r==="log"?1.35:o,roll:0}),this.nextHazard+=(e.gap[0]+this.r()*(e.gap[1]-e.gap[0]))*(this.easy?1.5:1),!this.easy&&this.r()<.3&&this.course.id>1){let c=fn.filter(u=>Math.abs(u-l)>2.5),h=c[Math.floor(this.r()*c.length)];this.hazards.push({id:++this.hid,kind:"snowball",s:this.nextHazard-8,x:h,v:a*.9,r:.75,half:.75,roll:0})}this._emit("spawn")}for(let s of this.hazards)s.s-=s.v*t,s.roll+=s.v*t/s.r;this.hazards=this.hazards.filter(s=>s.s>-20&&s.s>this.runners.reduce((r,a)=>Math.min(r,a.s),1/0)-25);for(let s of this.runners)this._move(s,t);let n=this.rankOf(this.me);return n<this.lastRank&&this.me.s>15&&!this.me.finished&&(this.me.score+=20,this._emit("overtake",{rank:n})),this.lastRank=n,this.me.finished&&this.state==="run"?(this.state="won",this.place=this.rankOf(this.me),this._emit("finish",{place:this.place})):this.me.lives<=0&&this.me.down<=0?(this.state="out",this._emit("out")):this.t>=this.time&&(this.state="timeup",this.place=this.rankOf(this.me),this._emit("timeup",{place:this.place})),this.events}_hazardLane(){if(this.r()<.55){let t=fn.filter(e=>Math.abs(e-this.me.x)<2.2);return t[Math.floor(this.r()*t.length)]}return fn[Math.floor(this.r()*fn.length)]}_move(t,e){if(t.finished){t.s+=Xh*.3*e;return}if(t.safe=Math.max(0,t.safe-e),t.boost=Math.max(0,t.boost-e),t.wind=Math.max(0,t.wind-e),t.shield=Math.max(0,t.shield-e),t.down>0){t.down-=e,t.down<=0&&(t.safe=1.6,t.me&&this._emit("up"));return}t.me||this._ai(t);let n=Math.min(1,e*(t.me?12:5));t.x+=(t.want-t.x)*n;let s=(t.boost>0?GA:1)*(t.wind>0?WA:1);if(t.s+=Xh*t.pace*s*e,t.s>=this.course.len){t.s=this.course.len,t.finished=this.t,t.me&&this._emit("summit");return}for(let r of this.lay.crystals)Math.abs(r.s-t.s)<.9&&Math.abs(r.x-t.x)<.75&&(t.me&&!r.got?(r.got=!0,t.score+=10,this._emit("crystal",{x:r.x,s:r.s})):!t.me&&!r[`g_${t.id}`]&&(r[`g_${t.id}`]=!0,t.score+=10));for(let r of this.lay.pads)Math.abs(r.s-t.s)<1.1&&Math.abs(r.x-t.x)<.95&&t.boost<1.3&&(t.boost=1.5,t.me&&this._emit("boost"));for(let r of this.lay.orbs)!r.got&&Math.abs(r.s-t.s)<1&&Math.abs(r.x-t.x)<.9&&t.me&&(r.got=!0,r.kind==="tailwind"?t.wind=4:t.shield=6,this._emit(r.kind));for(let r of this.hazards){let a=Math.abs(r.s-t.s),o=Math.abs(r.x-t.x),l=r.half+.32;if(a<r.r*.8+.3&&o<l){if(t.safe>0||r[`hit_${t.id}`])continue;if(r[`hit_${t.id}`]=!0,t.shield>0){t.shield=0,t.safe=1,t.me&&this._emit("blocked",{kind:r.kind});continue}t.down=XA,t.s=Math.max(0,t.s-YA),t.boost=0,t.wind=0,t.me&&(this.easy||t.lives--,this._emit("wipeout",{kind:r.kind,lives:t.lives}))}else t.me&&a<1.2&&o<l+1.1&&r.s<t.s&&!t.dodge.has(r.id)&&!r[`hit_${t.id}`]&&(t.dodge.add(r.id),t.score+=5,this._emit("dodge"))}}_ai(t){let e=this.hazards.find(s=>s.s>t.s&&s.s-t.s<16&&Math.abs(s.x-t.x)<s.half+.9);if(e){if((t.sees===void 0||t.sees!==e.id)&&(t.sees=e.id,t.notice=this.r()<(this.easy?.75:.85)),t.notice){let s=e.x-e.half-1,r=e.x+e.half+1;t.want=Math.abs(s-t.x)<Math.abs(r-t.x)&&s>-4.6+.4?s:r<4.6-.4?r:s}return}let n=this.lay.crystals.find(s=>s.s>t.s+2&&s.s<t.s+14&&!s[`g_${t.id}`]);n&&(t.want=n.x)}};function jh(i){let t=i&&typeof i=="object"?i:{},e={};if(t.best&&typeof t.best=="object")for(let[n,s]of Object.entries(t.best))Number(s)>=1&&Number(s)<=4&&(e[n]=Math.round(Number(s)));return{unlocked:Math.max(1,Math.min(gi.length,Math.max(Math.round(Number(t.unlocked)||1),...Object.keys(e).map(n=>Number(n)+1)))),best:e,crystals:Math.max(0,Math.min(999999,Math.round(Number(t.crystals)||0))),muted:!!t.muted}}var Hl=new Map;function ne(i,t={}){let e=`${i}|${JSON.stringify(t)}`;return Hl.has(e)||Hl.set(e,new sn({color:i,roughness:.75,metalness:0,...t})),Hl.get(e)}function Gl(i,t,e,n,s=0,r=0,a=0){let o=new bt(new Wn(i,t,e),n);return o.position.set(s,r,a),o.castShadow=!0,o}function Oe(i,t,e=0,n=0,s=0,r=1,a=1,o=1,l=16){let c=new bt(new di(i,l,Math.max(8,l-4)),t);return c.position.set(e,n,s),c.scale.set(r,a,o),c.castShadow=!0,c}function rs(i,t,e,n=0,s=0,r=0){let a=new bt(new Kr(i,t,6,12),e);return a.position.set(n,s,r),a.castShadow=!0,a}var as=[{jacket:13777450,shoulder:3817032,pants:2237484,skin:15251604,hair:2759700,hat:null,beard:!1,girl:!1,card:["#e85a3a","#a8321e"]},{jacket:2074778,shoulder:1473136,pants:15527668,skin:15780008,hair:5913122,hat:16053496,beard:!1,girl:!0,card:["#2ab8a8","#167a70"]},{jacket:14196778,shoulder:11565588,pants:3814440,skin:14197882,hair:6964260,hat:5913124,beard:!0,girl:!1,card:["#e8b83a","#a87a14"]},{jacket:8014552,shoulder:5911208,pants:2761792,skin:15780008,hair:3809812,hat:13150448,beard:!1,girl:!0,card:["#8a5ae8","#5a32a8"]}];function Wl(i){let t=new Qt,e=new Qt;e.position.y=.95,t.add(e);let n=ne(i.jacket,{roughness:.55}),s=ne(i.shoulder,{roughness:.6}),r=ne(i.pants,{roughness:.8}),a=ne(i.skin,{roughness:.7}),o=ne(i.hair,{roughness:.9}),l=ne(2763312,{roughness:.6}),c=ne(2500140,{roughness:.7}),h=[];for(let y of[-1,1]){let C=new Qt;C.position.set(y*.12,0,0),C.add(rs(.09,.32,r,0,-.22,0));let x=new Qt;x.position.set(0,-.44,0),x.add(rs(.08,.3,r,0,-.2,0)),x.add(Gl(.15,.13,.28,l,0,-.44,.05)),x.add(Gl(.16,.035,.3,ne(14211808),0,-.51,.05)),C.add(x),e.add(C),h.push({hip:C,knee:x})}let u=new Qt;u.position.y=.05,e.add(u);let f=rs(.22,.34,n,0,.3,0);f.scale.set(1.05,1,.78),u.add(f);for(let y of[.16,.32]){let C=new bt(new ts(.205,.022,6,22),n);C.rotation.x=Math.PI/2,C.scale.set(1.08,.82,1),C.position.y=y,u.add(C)}let d=rs(.2,.12,s,0,.5,0);d.scale.set(1.15,.8,.82),u.add(d),u.add(Gl(.025,.42,.02,ne(1579036),0,.3,.175));let m=new bt(new nn(.1,.13,.12,14),s);m.position.y=.66,u.add(m);let A=new Qt;A.position.set(0,.82,.01),u.add(A),A.add(Oe(.13,a,0,0,0,.92,1.05,.98)),A.add(Oe(.135,o,0,.045,-.02,.97,.9,1));for(let y of[-1,1])A.add(Oe(.022,ne(1709072),y*.045,.02,.115)),A.add(Oe(.03,a,y*.125,0,0,.5,1,1));if(A.add(Oe(.025,a,0,-.02,.13,1,1,.9)),i.beard&&A.add(Oe(.12,o,0,-.07,.03,.95,.75,.95)),i.girl){A.add(Oe(.12,o,0,-.04,-.07,1.05,1.25,.8));let y=Oe(.07,o,0,-.02,-.17,.8,1.6,.8);y.rotation.x=.4,A.add(y)}if(i.hat){let y=Oe(.142,ne(i.hat,{roughness:.95}),0,.06,-.01,1,.82,1.02);A.add(y);let C=new bt(new ts(.13,.03,8,22),ne(i.hat,{roughness:.95}));C.rotation.x=Math.PI/2-.1,C.position.y=.035,A.add(C)}let g=[];for(let y of[-1,1]){let C=new Qt;C.position.set(y*.25,.55,0),C.add(rs(.075,.2,n,0,-.15,0));let x=new Qt;x.position.set(0,-.3,0),x.add(rs(.068,.18,n,0,-.13,0)),x.add(Oe(.06,c,0,-.29,0)),C.add(x),C.rotation.z=y*.12,u.add(C),g.push({sh:C,el:x})}let p=new bt(new Ls(.42,20),new be({color:3816042,transparent:!0,opacity:.25,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.y=.02,t.add(p),{root:t,body:e,torso:u,head:A,legs:h,arms:g,shadow:p}}function Xl(i,t,e=1){let n=Math.sin(t),s=Math.cos(t);i.legs[0].hip.rotation.x=n*.9*e,i.legs[1].hip.rotation.x=-n*.9*e,i.legs[0].knee.rotation.x=Math.max(0,-s)*1.3*e+.1,i.legs[1].knee.rotation.x=Math.max(0,s)*1.3*e+.1,i.arms[0].sh.rotation.x=-n*.9*e,i.arms[1].sh.rotation.x=n*.9*e,i.arms[0].el.rotation.x=-1.2*e-.2,i.arms[1].el.rotation.x=-1.2*e-.2,i.torso.rotation.x=.18*e,i.body.position.y=.95+Math.abs(s)*.07*e,i.body.rotation.x=0,i.body.rotation.z=0}function Kh(i,t){i.body.rotation.x=-Math.PI/2*Math.min(1,t*1.6),i.body.position.y=.95-.72*Math.min(1,t*1.6),i.legs[0].hip.rotation.x=-.3,i.legs[1].hip.rotation.x=.4,i.legs[0].knee.rotation.x=.6,i.legs[1].knee.rotation.x=.2,i.arms[0].sh.rotation.x=-2.2,i.arms[1].sh.rotation.x=-1.6,i.arms[0].el.rotation.x=-.3,i.arms[1].el.rotation.x=-.6,i.torso.rotation.x=0}function Gs(i,t,e){let n=i.attributes.position,s=new w;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);let a=Math.sin(s.x*7+e)*Math.sin(s.y*6+e*2)*Math.sin(s.z*8+e*3);s.multiplyScalar(1+a*t),n.setXYZ(r,s.x,s.y,s.z)}return i.computeVertexNormals(),i}function Jh(i,t=1){let e=new Qt,n=new bt(Gs(new Bs(i,2),.12,t),ne(4869980,{roughness:.95,flatShading:!0}));n.castShadow=!0,e.add(n);for(let s=0;s<6;s++){let r=s*1.7+t;e.add(Oe(i*.18,ne(14673650),Math.cos(r)*i*.85,Math.sin(r*1.3)*i*.6,Math.sin(r)*i*.85,1,.5,1,8))}return{root:e,spin:n}}function Zh(i,t=2){let e=new Qt,n=new bt(Gs(new Bs(i,3),.06,t),ne(15133944,{roughness:1}));return n.castShadow=!0,e.add(n),{root:e,spin:n}}function Qh(i,t){let e=new Qt,n=new Qt;e.add(n);let s=new bt(new nn(t,t,i*2,18,1,!0),new sn({map:ZA(),roughness:.95}));s.rotation.z=Math.PI/2,s.castShadow=!0,n.add(s);for(let r of[-1,1]){let a=new bt(new Ls(t,18),new sn({map:QA(),roughness:.9}));a.rotation.y=r*Math.PI/2,a.position.x=r*i,n.add(a)}for(let r=0;r<5;r++){let a=Oe(t*.5,ne(15922940,{roughness:1}),-i*.75+r*i*.38,t*.82,(r%2?1:-1)*t*.2,1.4,.35,.9,10);n.add(a)}return{root:e,spin:n,axis:"x"}}function $h(i){let t=new bt(new en(i,1),new be({map:KA(),transparent:!0,opacity:.85,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t}function tu(){let i=new Qt,t=new bt(new Zr(.22,0),ne(16761370,{emissive:13138432,emissiveIntensity:.55,roughness:.25,metalness:.3,flatShading:!0}));return t.scale.set(.8,1.35,.5),i.add(t),i}function eu(){let i=new bt(new en(1.7,2.2),new be({map:JA(),transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i}function nu(i){let t=new Qt,e=i==="tailwind"?5953791:15791871,n=new bt(new di(.26,20,14),new be({color:e})),s=new bt(new di(.46,20,14),new be({color:e,transparent:!0,opacity:.28,depthWrite:!1})),r=new bt(new ts(.42,.03,8,30),new be({color:i==="tailwind"?12579071:10143999}));return t.add(n,s,r),t.userData={halo:s,ring:r},t}function iu(){let i=new bt(new di(1.05,24,16),new be({color:13625599,transparent:!0,opacity:.32,depthWrite:!1}));return i.position.y=.95,i}function su(i=1){let t=new Qt,e=new bt(new nn(.12*i,.16*i,.7*i,8),ne(5913124));e.position.y=.35*i,t.add(e);let n=ne(3103306,{roughness:.9,flatShading:!0}),s=ne(15791356,{roughness:1,flatShading:!0});for(let r=0;r<3;r++){let a=(1.2-r*.3)*i,o=new bt(new hi(a,1.3*i,8),n);o.position.y=(.95+r*.75)*i,o.castShadow=!0,t.add(o);let l=new bt(new hi(a*.72,.5*i,8),s);l.position.y=(1.38+r*.75)*i,t.add(l)}return t}function ru(i=1,t=1){let e=new bt(Gs(new Jr(i,1),.15,t),ne(5922410,{roughness:1,flatShading:!0}));e.scale.y=.6,e.castShadow=!0;let n=new Qt;return n.add(e),n.add(Oe(i*.7,ne(15659770),0,i*.45,0,1.1,.3,1.1,10)),n}function au(i=15249450){let t=new Qt,e=new bt(new nn(.03,.03,2,6),ne(4868690));e.position.y=1,t.add(e);let n=new Ds;n.moveTo(0,0),n.lineTo(.7,-.2),n.lineTo(0,-.42),n.closePath();let s=new bt(new Qr(n),new sn({color:i,side:Qe,roughness:.7}));return s.position.y=1.95,t.add(s),t.userData.flag=s,t}function ou(i){let t=new Qt,e=ne(15220778,{roughness:.5});for(let s of[-1,1]){let r=new bt(new nn(.22,.22,4.4,12),e);r.position.set(s*i/2,2.2,0),t.add(r)}let n=new bt(new Wn(i+.6,1,.2),new sn({map:$A(),roughness:.6}));return n.position.y=4.2,t.add(n),t}function lu(i,t,e){let n=new Qt,s=Gs(new hi(i,t,9,3),.05,e),r=new bt(s,ne(10134724,{roughness:1,flatShading:!0}));r.position.y=t/2,n.add(r);let a=new bt(Gs(new hi(i*.45,t*.45,9,2),.05,e+1),ne(16054012,{roughness:1,flatShading:!0}));return a.position.y=t*.78,n.add(a),n}function Tn(i,t){let e=new $i(i);return e.colorSpace=me,e.anisotropy=4,t&&(e.wrapS=e.wrapT=Wi,e.repeat.set(...t)),e}function Vn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function cu(){let i=Vn(512,512),t=i.getContext("2d");t.fillStyle="#e4e6f4",t.fillRect(0,0,512,512);let e=9,n=()=>(e=e*16807%2147483647,e/2147483647);for(let s=0;s<40;s++){let r=n()*512,a=n()*512,o=30+n()*80,l=t.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(170,176,214,0.25)"),l.addColorStop(1,"rgba(170,176,214,0)"),t.fillStyle=l,t.fillRect(r-o,a-o,o*2,o*2)}for(let s of[52,150,256,362,460])t.fillStyle="rgba(150,156,200,0.35)",t.fillRect(s-9,0,18,512),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(s+9,0,3,512);for(let s=0;s<160;s++){let r=n()*512,a=n()*512,o=6+n()*9;t.fillStyle="rgba(150,154,198,0.45)",t.beginPath(),t.ellipse(r,a,o,o*.8,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.5)",t.beginPath(),t.ellipse(r+o*.25,a+o*.3,o*.6,o*.35,0,0,Math.PI*2),t.fill()}return Tn(i,[1,6])}function hu(){let i=Vn(256,256),t=i.getContext("2d");t.fillStyle="#eef0f8",t.fillRect(0,0,256,256);for(let e=0;e<60;e++)t.fillStyle=`rgba(160,166,210,${.12+Math.random()*.12})`,t.beginPath(),t.ellipse(Math.random()*256,Math.random()*256,10+Math.random()*30,6+Math.random()*14,Math.random(),0,Math.PI*2),t.fill();return Tn(i,[2,8])}function KA(){let i=Vn(128,512),t=i.getContext("2d");t.strokeStyle="rgba(232,70,70,0.9)",t.lineWidth=8,t.strokeRect(10,0,108,512),t.lineWidth=6;for(let n=12;n<512;n+=26)t.beginPath(),t.moveTo(10,n),t.lineTo(118,n),t.stroke();t.fillStyle="rgba(232,90,90,0.18)",t.fillRect(10,0,108,512);let e=Tn(i);return e.wrapT=Wi,e}function JA(){let i=Vn(256,320),t=i.getContext("2d");t.fillStyle="rgba(90,150,200,0.55)",t.strokeStyle="rgba(150,230,255,0.95)",t.lineWidth=10,t.beginPath(),t.roundRect(8,8,240,304,18),t.fill(),t.stroke(),t.strokeStyle="rgba(200,245,255,0.95)",t.lineWidth=16,t.lineCap="round",t.lineJoin="round";for(let e of[80,170])t.beginPath(),t.moveTo(52,e+60),t.lineTo(128,e),t.lineTo(204,e+60),t.stroke();return Tn(i)}function ZA(){let i=Vn(256,128),t=i.getContext("2d");t.fillStyle="#6a4228",t.fillRect(0,0,256,128);for(let e=0;e<70;e++){t.strokeStyle=`rgba(${40+Math.random()*30},${24+Math.random()*16},14,0.7)`,t.lineWidth=2+Math.random()*3;let n=Math.random()*128;t.beginPath(),t.moveTo(Math.random()*256,n),t.lineTo(Math.random()*256,n+(Math.random()-.5)*8),t.stroke()}return Tn(i)}function QA(){let i=Vn(128,128),t=i.getContext("2d");t.fillStyle="#c8a070",t.fillRect(0,0,128,128);for(let e=6;e<64;e+=7)t.strokeStyle="rgba(140,96,56,0.6)",t.lineWidth=2,t.beginPath(),t.arc(64,64,e,0,Math.PI*2),t.stroke();return t.strokeStyle="#6a4228",t.lineWidth=8,t.beginPath(),t.arc(64,64,60,0,Math.PI*2),t.stroke(),Tn(i)}function $A(){let i=Vn(512,96),t=i.getContext("2d");for(let e=0;e<512;e+=32)for(let n=0;n<96;n+=32)t.fillStyle=(e+n)/32%2?"#ffffff":"#1a1a22",t.fillRect(e,n,32,32);return t.fillStyle="rgba(232,64,42,0.92)",t.fillRect(96,12,320,72),t.fillStyle="#fff",t.font="900 52px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u0627\u0644\u0642\u0645\u0629  \u2022  SUMMIT",256,52),Tn(i)}function uu(){let i=Vn(64,64),t=i.getContext("2d");t.fillStyle="#fff",t.beginPath();for(let e=0;e<10;e++){let n=e/10*Math.PI*2-Math.PI/2,s=e%2?11:30;t.lineTo(32+Math.cos(n)*s,32+Math.sin(n)*s)}return t.closePath(),t.fill(),Tn(i)}function du(){let i=Vn(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.6,"rgba(240,248,255,0.6)"),e.addColorStop(1,"rgba(240,248,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Tn(i)}function fu(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let f=0;f<c.length;f++)h[f]=c.charCodeAt(f);let u=a.ctx.decodeAudioData(h.buffer,f=>{a._smp[o]=f},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function pu(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var gu={boost:"data:audio/mpeg;base64,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",crystal:"data:audio/mpeg;base64,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",wipeout:"data:audio/mpeg;base64,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KA4ql/N02GQzqdemdPMMQVctQiN9TRzDwdYky1Q+AAGr/uQjBxuVkvDSqPD/+zjErYIKhF0xh6TAgTSLZeSRmPjm06esrHlY1dIWxbCQuOeEzZQKTIaAgmDIShQibVNEhwuommEnHQWet4TEQTQT0XDxpRyiIwl+v3Zf9eABLDj45IvKzDAZedoQ/LXTY5XMQPwKnGe3ulDC8AHULQVSiwE+0E5zj5le9h19eXB3LvXLlI7wGCb4ara/373bEe3XXV7O5lvK0GF9v33/ujM+VxCW5vWtpSjHalEC8OJmJ0/vZVD6B5NokBJl0DFOJzv9dgFhk10qqZriQxrRMurk2llf2Y3/+zjEvgJKsG0mzBhgiVUQpIjBDggyNJ41/8jWG2n7eWeNvSajgMYOqY2BSShFHLWEhngBiWMtAQqQVJR8AkkXICZAbGVPFvIs3/f9nzc/3M1qI9DVoy1kBVQlkLu6WmkR3agmfafU8mMJd6voAT0OU4w1Yu+qRRazcICoZcWJlnrU3YJaAACIEAAAAeSlPy8OKVuf92HvDCFLIAlUSnUuofnqsBNGC6zFkmgjVFh0poUZyvGmC/BpCwCxqVhpf3kW7wkuRwIMFcFQFX7MMGJZqhLC7pPMry//+zjEygIJJFktIwRwQXCXo8UGDHmmETcvSGSg5S5fwYNIVszs9Y9PeJnaIUifTk0eLBgoiS28Y//tfN7/5j+mL3ZF9XI5UM6lbGePNCXVtwa43/nPxinvikT7ia99//v4zkumE6WZlg0xEnP9LMUv9GIKFgSDTyEESVIVM1KUvcYnVVVjARMzN1VoUBWMx/7M2okwolSwdiJ8NFQ0WBpQNFQ0IlP/1gqWPCI9BUqGiz//UHYKlQViJ4NQ1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE2IIKVNMaJ5hnAR+UJB6SIABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7IAV/XUc2ZeACScOmYeSMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",log:"data:audio/mpeg;base64,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",tailwind:"data:audio/mpeg;base64,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QzzHKwbZ1ZWqXQWvxDUdZXkbThLJKbArsGXn7v96/vv9lq3KGQvCbRGNIrn/+zjErwMK5L8WTLBNAVOUI0mDDhiqRVtpVIrgVUI6C2qeartpQWWxtL2aqG1dHMYK2O0xMnagLj9upye1VXbNwyj+u/xVn26hhAAhDefqEGVGG8qmpSiDqV0XZLvk8xqeadfmCTOEKjCQuqPlRVas+SoeZ+BI0QRdSyzl11bGvGiy0sgeeg80Leo+sUaDOmXiGMOZxMittqfstuVQ5vOJkR650bUABsDwzWCEe1HEI61E0jNLyZ5TT2AKqsZ6pTcjRzvEHMUWKhuyOJPXx2vR7MkOTKKabCv/+zjEuoPKjNUWLJhREVQaYoGGCWiJHxBqpjXwXT/yPt2avS6PvpyTI2/6t+X3ToOxtJdeSJjhWkUJCfcitI+E/EwL3M4NwwFxdZNsy2cK7MqzLRNkotQ0nyl0GQ+X5oogJsvKEXc18i1zUi+44Et3ugvyhfJm1FrMpdoefHDHnal7DzTj9DJhTtlBxSy0gCr6Jq6fUvIWXaEGAANBQUpIFKNIBGNKFTlei1Ezleq6YizoxLQ+mAvGBRLMBaHURh2Jp8iXuQpjExEoSTrn1D8UxRxI1Ko9JST/+zjExwMHqKEcR5hKgWiaogT0FiA/NCigK1i9CKV3nDMSA/DwMyMeFc8XuVXYtBODyBMgMWq1U8XcJTiU1hGnNi8p3i435WI73KLKLKp/lV9LP/+Vf/8qjHftVCtyMDDFn1DDXgBg+CE4swsCAj43vRpRVxebNGiQLGgKKRYl5qoW+oXZ+sUbrbrFP6xRv//+vrFGzQVFlUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE3IOKdXMSRhiswYyiYYD0nXBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE4oMRlQ8STDDNyNKG4QiTGABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",summit:"data:audio/mpeg;base64,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lX0Hn9zeOaVHP3B06TjEs3GKzqR4jQia0Nx9dXKt4w8gKhSXDPhmJc+Qfrq35tLRnbVsmraPYdk5f01TVsE0/R9LI7q5z0TOVBzSpfOMbs5dJPdDUirz6W2l+/KqABAJEomSBKeOM9ounzyvmHjTx7nclP5TyFqcchw8cqhqOmoKWiWDNCqcP6ajXedTs27uMLjGw2jPnZFHU6AfMmjrHvTyaBTgS3xToJQoWnBVDhdllhZWMbHhdWAx0vL/+zjE9gIOyYMIR5kVCVWrYhj0iOmf6vQQteZ2qKGsCtAAEEFuDcZ+DFS1j9TCx0RGYUHdLF9oVvpPbF/3zIhe+8djFELhVJ9jtfFftbti8e/Dqnq3KX/edyHbK/R7xDMZfcRnb/gf7t9d/SMy0c6nh4nqv5LGcrZA+zJ93hvTZLZpzPYf6Bd9h7t7OXD5WdnjJ7G1ACXGiAALgsH+cTccigex2NPq9RubAyZw1qNjjwIh+LEc5Fi+GAvh0VV7yJSJDL+lz2MRVi2HApTTTxcBbCEM6fQsnhP/+zjE8YOPFV8EDDELyR8qoozxFOCDgbzTUZIBosRJgOCAIiIwWiWE4fy2/ceyedv3vdeZnnXe6ddwAQAFg+J/AghAAIFBOBDhTqOKBBZyyggfuIV/0T4ZECNSxpIgDiBEdYrQmJiewrYCUfQrXYFrrRkTozkSQamTzRKJz5KRcTJy9eq2IMIDMHUUIR4mxuktXBOnM5Tp3piUUdOqHW7WzRTIc5J1QyoaqZH2VIMFJmNQESgUBKHVVWcKAiduszMzHQoEarAwVDZLErw0IhKEzodRiUs9vPf/+zjE8oANTY8TR5Rxwc4x4dz0mNDLLUeDpVVMQU1FMy4xMDBVVVVVAStKgEZGRkZEZGRkZfrLKkcjVrKDgkNAyDQsDhoGQkLB40DQSFhYLf//qUj/rFBZv//6xUWFlUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5QIRBOke57B6QhCe5OjHjphVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEuYPGyF7OwIBuYAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var t0="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ee=null,ca=!1;function mu(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function Yl(){mu(),ca=!0;try{if(Ee||(Ee=document.createElement("audio"),Ee.src=t0,Ee.loop=!0,Ee.preload="auto",Ee.setAttribute("playsinline",""),Ee.setAttribute("webkit-playsinline",""),Ee.setAttribute("x-webkit-airplay","deny"),Ee.volume=.01,Ee.addEventListener("pause",()=>{ca&&!document.hidden&&setTimeout(()=>ca&&Ee.paused&&Ee.play().catch(()=>{}),300)})),Ee.paused){let i=Ee.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function jl(){ca=!1;try{Ee&&!Ee.paused&&Ee.pause()}catch{}}function Au(i,t){mu();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var _e=i=>440*Math.pow(2,(i-69)/12),e0=[[45,[69,72,76]],[41,[69,72,77]],[48,[67,72,76]],[43,[67,71,74]],[45,[69,72,76]],[41,[69,72,77]],[48,[67,72,76]],[43,[67,71,74]]],n0=[[0,0,76,2],[0,3,79,1],[0,4,81,3],[0,8,79,2],[0,10,76,2],[0,12,74,4],[1,0,72,2],[1,2,74,2],[1,4,76,4],[1,10,72,2],[1,12,69,4],[2,0,76,2],[2,3,79,1],[2,4,84,3],[2,8,83,2],[2,10,81,2],[2,12,79,4],[3,0,79,2],[3,2,81,2],[3,4,83,6],[3,12,86,4],[4,0,88,3],[4,4,86,2],[4,6,84,2],[4,8,81,4],[4,12,84,4],[5,0,84,2],[5,2,81,2],[5,4,77,4],[5,10,81,2],[5,12,84,4],[6,0,84,3],[6,4,79,2],[6,6,76,2],[6,8,79,4],[6,12,84,4],[7,0,83,4],[7,4,79,2],[7,6,81,2],[7,8,83,8]],os=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.speed=0,this.rumble=0}unlock(){if(Yl(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Au(this.ctx,()=>!!this.held),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-12,n.ratio.value=5,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.32,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=60/128*.75;let r=e.createGain();r.gain.value=.25;let a=e.createGain();a.gain.value=.16,this.leadBus=e.createGain(),this.leadBus.connect(this.music),this.leadBus.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*2,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this.wind=this._loopNoise("bandpass",700,.6,1e-4),this.rumbleN=this._loopNoise("lowpass",120,1,1e-4),this._timer=setInterval(()=>this._schedule(),25),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_loopNoise(t,e,n,s){let r=this.ctx,a=r.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let o=r.createBiquadFilter();o.type=t,o.frequency.value=e,o.Q.value=n;let l=r.createGain();return l.gain.value=s,a.connect(o).connect(l).connect(this.sfx),a.start(),{f:o,g:l}}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){jl(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){Yl(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.step=0,this.nextTime=this.ctx.currentTime+.1))}setRun(t,e){if(this.speed=t,this.rumble=e,!this.ctx)return;let n=this.ctx.currentTime;this.wind.g.gain.setTargetAtTime(this.mode==="off"?1e-4:.012+t*.03,n,.3),this.wind.f.frequency.setTargetAtTime(500+t*700,n,.3),this.rumbleN.g.gain.setTargetAtTime(1e-4+e*.35,n,.1)}dispose(){clearInterval(this._timer),jl(),this.ctx&&this.ctx.close(),this.ctx=null}_tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}_noise(t,e,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let f=c.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(f).connect(o),h.start(t,Math.random()*.8),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}_synth(t,e,n,s,r,a=1800){let o=this.ctx,l=o.createGain(),c=o.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(a,e),c.frequency.exponentialRampToValueAtTime(a*.35,e+n),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(s,e+.01),l.gain.exponentialRampToValueAtTime(1e-4,e+n);for(let h of[-6,6]){let u=o.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(t,e),u.detune.value=h,u.connect(c),u.start(e),u.stop(e+n+.05)}c.connect(l).connect(r)}_kick(t,e=.5){this._slide("sine",140,42,t,.22,e,this.music),this._noise(t,.02,e*.2,"highpass",3e3,1,this.music)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.15,n=60/128/4,s=this.mode==="race",r=this.mode==="menu";for(;this.nextTime<e;){let a=this.nextTime,o=this.step%128,l=Math.floor(o/16),c=o%16,[h,u]=e0[l];if(c===0&&u.forEach(f=>this._tone("triangle",_e(f-12),a,n*15,s?.025:.035,this.music,.15)),s){c%4===0&&this._kick(a,.42),(c===4||c===12)&&(this._noise(a,.12,.12,"bandpass",1500,.8,this.music),this._noise(a+.01,.08,.06,"highpass",2500,1,this.music)),c%2===1&&this._noise(a,.035,c%4===3?.04:.025,"highpass",8e3,1,this.music),c%2===0&&this._synth(_e(h-(c%8===6?-12:0)),a,n*1.6,.06,this.music,700);for(let[f,d,m,A]of n0)f===l&&d===c&&this._synth(_e(m),a,n*A*1.1,.035,this.leadBus,2600)}if((s||r)&&c%2===0){let f=u[c/2%3]+(c>=8?12:0);this._tone("triangle",_e(f),a,.16,s?.03:.035,this.music,.002)}this.mode==="end"&&c%4===0&&this._tone("sine",_e(u[c/4%3]+12),a,.5,.03,this.music,.01),this.step++,this.nextTime+=n}}play(t,e){if(typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t),!this.on)return;let n=this.ctx.currentTime+.005;switch(t){case"step":this._noise(n,.07,.05+(e||0)*.02,"bandpass",2200+Math.random()*900,1.2),this._noise(n,.05,.03,"lowpass",500,1);break;case"count":this._tone("square",660,n,.18,.06),this._tone("sine",660,n,.25,.08);break;case"go":this._tone("square",990,n,.45,.07),this._tone("sine",1320,n,.5,.06),this._noise(n,.6,.08,"bandpass",1200,.6,this.sfx,3e3);break;case"crystal":{let s=Math.min(e||0,6),r=84+[0,2,4,7,9,12,14][s];this._tone("sine",_e(r),n,.35,.07),this._tone("sine",_e(r+12),n+.03,.2,.03),this._tone("triangle",_e(r+7),n+.05,.15,.02);break}case"boost":this._noise(n,.7,.14,"bandpass",600,.8,this.sfx,4e3),this._slide("sawtooth",200,900,n,.5,.03),this._slide("sine",400,1600,n,.5,.05);break;case"tailwind":for(let s=0;s<3;s++)this._noise(n+s*.12,.6,.1,"bandpass",500+s*300,1.2,this.sfx,2500);[79,83,86,91].forEach((s,r)=>this._tone("sine",_e(s),n+r*.06,.4,.05));break;case"shield":[72,76,79,84,88].forEach((s,r)=>this._tone("sine",_e(s),n+r*.04,.6,.04)),this._slide("sine",300,600,n,.5,.05);break;case"blocked":this._noise(n,.25,.15,"highpass",2e3,1),[88,84,91].forEach((s,r)=>this._tone("sine",_e(s),n+r*.05,.3,.05));break;case"wipeout":this._slide("sine",160,45,n,.35,.5),this._noise(n,.45,.25,"lowpass",900,.8,this.sfx,200),this._slide("triangle",420,200,n+.05,.25,.08),this._slide("square",400,190,n+.05,.22,.015);break;case"heart":[72,67,64].forEach((s,r)=>this._tone("triangle",_e(s),n+.3+r*.12,.25,.05));break;case"log":this._tone("triangle",150,n,.12,.12),this._noise(n,.08,.06,"bandpass",600,2);break;case"dodge":this._noise(n,.35,.11,"bandpass",1600,1,this.sfx,400),this._tone("sine",_e(88),n+.1,.25,.04);break;case"overtake":this._noise(n,.4,.1,"bandpass",500,.8,this.sfx,2600),[84,88,91].forEach((s,r)=>this._tone("triangle",_e(s),n+.1+r*.07,.3,.05));break;case"up":[67,72].forEach((s,r)=>this._tone("sine",_e(s),n+r*.08,.2,.05));break;case"summit":[[72,0],[76,.12],[79,.24],[84,.4],[79,.62],[84,.74],[88,.95],[91,1.2]].forEach(([s,r])=>{this._synth(_e(s),n+r,.5,.06,this.sfx,3e3),this._tone("sine",_e(s)*2,n+r,.2,.02)});for(let s=0;s<24;s++)this._noise(n+.2+s*.07,.25,.04+Math.random()*.04,"bandpass",900+Math.random()*1600,.7);this._noise(n+.2,2.4,.07,"bandpass",1300,.4);break;case"lose":[[76,0],[74,.25],[72,.5],[69,.8]].forEach(([s,r])=>this._tone("triangle",_e(s),n+r,.45,.06));break;case"tap":this._tone("sine",880,n,.06,.05);break;default:}}};fu(os,gu);pu(os);var Kl={title:["\u0633\u0628\u0627\u0642 \u0627\u0644\u062A\u0644\u062C","Snow Race"],tagline:["\u0627\u0637\u0644\u0639 \u0644\u0644\u0642\u0645\u0629!","Race to the top"],drag:["\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u062C\u0631\u064A","Drag to run"],course:["\u0627\u0644\u0633\u0628\u0627\u0642","Race"],c1:["\u062B\u0644\u062C \u0633\u0627\u0646\u062A \u0643\u0627\u062A\u0631\u064A\u0646","St Catherine Snow"],c2:["\u0642\u0631\u064A\u0629 \u0627\u0644\u0623\u0644\u0628","Alps Village"],c3:["\u0642\u0645\u0629 \u0643\u0644\u064A\u0645\u0646\u062C\u0627\u0631\u0648","Kilimanjaro"],c4:["\u0633\u0627\u0646\u062A \u0643\u0627\u062A\u0631\u064A\u0646 \u062A\u0627\u0646\u064A","Catherine Return"],c5:["\u0642\u0645\u0629 \u0627\u0644\u0623\u0644\u0628 \u0627\u0644\u0643\u0628\u064A\u0631\u0629","Grand Alps"],locked:["\u0627\u0648\u0635\u0644 \u0644\u0644\u0642\u0645\u0629 \u0641\u064A \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647","Finish the race before"],go:["\u0627\u0646\u0637\u0644\u0642!","GO!"],dodge:["\u062A\u0641\u0627\u062F\u064A \u062D\u0644\u0648!","NICE DODGE!"],overtake:["\u0633\u0628\u0642\u062A\u0647!","OVERTAKE!"],wipeout:["\u0648\u0642\u0639\u0629!","WIPEOUT"],tailwind:["\u0631\u064A\u0627\u062D \u062F\u0627\u0641\u0639\u0629!","TAILWIND!"],shield:["\u062F\u0631\u0639!","SHIELD!"],blocked:["\u0627\u0644\u062F\u0631\u0639 \u062D\u0645\u0627\u0643!","SHIELD SAVED YOU!"],boost:["\u062F\u0641\u0639\u0629!","BOOST!"],you:["\u0623\u0646\u062A","YOU"],p1:["\u0627\u0644\u0623\u0648\u0644","1ST"],p2:["\u0627\u0644\u062A\u0627\u0646\u064A","2ND"],p3:["\u0627\u0644\u062A\u0627\u0644\u062A","3RD"],p4:["\u0627\u0644\u0631\u0627\u0628\u0639","4TH"],summit_m:["\u0648\u0635\u0644\u062A \u0644\u0644\u0642\u0645\u0629! \u{1F3D4}\uFE0F","You reached the summit! \u{1F3D4}\uFE0F"],summit_f:["\u0648\u0635\u0644\u062A\u064A \u0644\u0644\u0642\u0645\u0629! \u{1F3D4}\uFE0F","You reached the summit! \u{1F3D4}\uFE0F"],place:["\u0627\u0644\u0645\u0631\u0643\u0632","Place"],score:["\u0627\u0644\u0646\u0642\u0637","Score"],crystals:["\u0627\u0644\u0643\u0631\u064A\u0633\u062A\u0627\u0644","Crystals"],best:["\u0623\u062D\u0633\u0646 \u0645\u0631\u0643\u0632","Best place"],next:["\u0627\u0644\u0633\u0628\u0627\u0642 \u0627\u0644\u062C\u0627\u064A","Next race"],again:["\u062A\u0627\u0646\u064A","Race again"],courses:["\u0627\u0644\u0633\u0628\u0627\u0642\u0627\u062A","Races"],outTitle:["\u062E\u0644\u0635\u062A \u0627\u0644\u0642\u0644\u0648\u0628","Out of hearts"],outText_m:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643! \u0642\u0648\u0645 \u0648\u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A","No problem! Get up and try again"],outText_f:["\u0648\u0644\u0627 \u064A\u0647\u0645\u0643! \u0642\u0648\u0645\u064A \u0648\u062C\u0631\u0651\u0628\u064A \u062A\u0627\u0646\u064A","No problem! Get up and try again"],timeTitle:["\u0627\u0644\u0648\u0642\u062A \u062E\u0644\u0635","Time's up"],timeText_m:["\u0642\u0631\u0651\u0628\u062A \u0642\u0648\u064A \u0645\u0646 \u0627\u0644\u0642\u0645\u0629! \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A","So close to the top! Try again"],timeText_f:["\u0642\u0631\u0651\u0628\u062A\u064A \u0642\u0648\u064A \u0645\u0646 \u0627\u0644\u0642\u0645\u0629! \u062C\u0631\u0651\u0628\u064A \u062A\u0627\u0646\u064A","So close to the top! Try again"],win1_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0627\u0644\u0623\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0642\u0645\u0629! \u{1F947}","Champion! First to the top! \u{1F947}"],win1_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0627\u0644\u0623\u0648\u0644\u0649 \u0639\u0644\u0649 \u0627\u0644\u0642\u0645\u0629! \u{1F947}","Champion! First to the top! \u{1F947}"],winN_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u0643\u0645\u0651\u0644 \u0639\u0634\u0627\u0646 \u062A\u0628\u0642\u0649 \u0627\u0644\u0623\u0648\u0644","Well done! Keep going to be first"],winN_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u0643\u0645\u0651\u0644\u064A \u0639\u0634\u0627\u0646 \u062A\u0628\u0642\u064A \u0627\u0644\u0623\u0648\u0644\u0649","Well done! Keep going to be first"],easy:["\u0633\u0647\u0644","Easy"],exit:["\u062E\u0631\u0648\u062C","Exit"],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u062C\u0628\u0644...","Getting the mountain ready..."]},ha="ar",xu=!1,Cu=i=>{ha=i==="en"?"en":"ar"},vu=i=>{xu=!!i},Ws=()=>ha,Nt=i=>{let t=`${i}_${xu?"f":"m"}`,e=Kl[t]?t:i;return Kl[e]?Kl[e][ha==="en"?1:0]:i},Xe=i=>ha==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]);function ht(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function ua(i,t,e){let n=ht("div",{class:"sr-peak"});return n.innerHTML='<svg viewBox="0 0 120 60"><path d="M4 58 L44 14 L58 28 L72 8 L116 58 Z" fill="#3a6ad8"/><path d="M44 14 L34 26 L40 24 L46 30 L52 24 L58 28 Z M72 8 L62 22 L68 20 L74 26 L80 20 L86 24 Z" fill="#fff"/><path d="M72 8 L72 -4" stroke="#5a4a3a" stroke-width="2"/><path d="M72 -4 L86 0 L72 4 Z" fill="#e8402a"/><g fill="#bfe8ff"><circle cx="20" cy="18" r="2"/><circle cx="100" cy="22" r="1.6"/><circle cx="92" cy="10" r="1.2"/></g></svg>',ht("div",{class:`sr-logo${e?" small":""}`},n,ht("div",{class:"sr-tag"},t),ht("div",{class:"sr-name"},i))}var _u=`
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
`;var da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ze=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},i0=new Ji(-1,1,1,-1,0,1),Jl=class extends de{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}},s0=new Jl,Yn=class{constructor(t){this._mesh=new bt(s0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,i0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ls=class extends ze{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xn.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Yn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xs=class extends ze{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fa=class extends ze{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var pa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Z);this._width=n.width,this._height=n.height,e=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ls(da),this.copyPass.material.blending=un,this.clock=new ns}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xs!==void 0&&(a instanceof Xs?n=!0:a instanceof fa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ga=class extends ze{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var yu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var cs=class i extends ze{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Z(t.x,t.y):new Z(256,256),this.clearColor=new Et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Me(r,a,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Me(r,a,{type:an});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Me(r,a,{type:an});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=yu;this.highPassUniforms=Xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Z(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=da;this.copyUniforms=Xn.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Et,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new Yn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};cs.BlurDirectionX=new Z(1,0);cs.BlurDirectionY=new Z(0,1);var Iu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ma=class extends ze{constructor(){super();let t=Iu;this.uniforms=Xn.clone(t.uniforms),this.material=new $r({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Yn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===El?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Mu={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},r0={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},a0={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function o0(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new de;l.setAttribute("position",new Ie(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let f=new $i(c);f.colorSpace=me;let d=new ci({map:f,color:a0[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:zi,fog:!1,sizeAttenuation:!0}),m=new Qi(l,d);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function l0(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var Su={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},c0=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,h0=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,u0={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},bu={};typeof window!="undefined"&&(window.__cheerSfx=i=>{let t=u0[i];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(bu[t]||-1e9)<n||(bu[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function d0(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=g=>{if(!n[g]){let p=new Audio(`${e}${g}_${t}.mp3`);p.preload="auto",p.volume=.95,n[g]=p}return n[g]},u=(g,p)=>{let y=performance.now();if(!p&&y-r<6e3||c)return;let C=g+(1+Math.floor(Math.random()*Su[g])),x=h(C);c=!0,r=y,x.currentTime=0;let R=()=>{c=!1};x.onended=R,x.onerror=R;let b=x.play();b&&b.catch&&b.catch(R),setTimeout(R,4e3)};window.__cheer=(g,p)=>{Su[g]&&(o=!0,u(g,!!p))};let f=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),p=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),p.gain.setValueAtTime(.08,s.currentTime),p.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(p),p.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},d=()=>{a=performance.now(),f(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",d,{passive:!0}),window.addEventListener("keydown",d,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let g=(i.innerText||"").slice(0,600);g!==m&&(m=g,c0.test(g)?u("win",!1):h0.test(g)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(u("idle",!1),a=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function Eu(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},Mu[e.get("look")||t.preset||"warm"]||Mu.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,f=null,d=0,m=0,A=0,g=!1,p=performance.now();function y(C,x){let R=i.getSize(new Z);d=R.x,m=R.y,A=i.getPixelRatio(),c=new pa(i),c.setPixelRatio(A),c.setSize(d,m),h=new ga(C,x),c.addPass(h),s||(u=new cs(new Z(Math.max(2,d>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new ma),f=new ls(r0),f.uniforms.contrast.value=n.contrast,f.uniforms.sat.value=n.sat,f.uniforms.tint.value=n.tint,f.uniforms.vig.value=n.vig,c.addPass(f)}return i.render=function(C,x){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!C||!x||!C.isScene)return a(C,x);try{c||y(C,x);let R=i.getSize(new Z),b=i.getPixelRatio();(R.x!==d||R.y!==m||b!==A)&&(d=R.x,m=R.y,A=b,c.setPixelRatio(b),c.setSize(d,m),u&&u.resolution.set(Math.max(2,d>>1),Math.max(2,m>>1))),h.scene=C,h.camera=x,f.uniforms.time.value=(performance.now()-p)/1e3;let E=performance.now(),V=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let M=o.get(C);M||(M=o0(C,x,e.get("look")||t.preset||"warm",r),o.set(C,M)),l0(M,x,V)}g=!0,c.render(),g=!1}catch(R){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",R&&R.message),i.render=a,a(C,x)}},!e.has("nocheer")&&!r&&setTimeout(()=>d0(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var Zl=.16,pe=i=>i*Zl,Ql=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),Cu(e.lang),vu(e.gender==="girl"),this.age=Number(e.age)||5,this.easy=this.age<=4,this.save=jh(e.save),this.base=e.base||"./",this.sound=new os,this.sound.muted=this.save.muted,document.getElementById("sr-style")||document.head.append(ht("style",{id:"sr-style"},_u)),this.root=ht("div",{class:"sr-root",dir:Ws()==="en"?"ltr":"rtl"}),t.append(this.root),this.renderer=Eu(new kr({antialias:!0,powerPreference:"high-performance"}),{preset:"warm"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=me,this.renderer.toneMapping=Hs,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bl,this.root.append(this.renderer.domElement),this.layer=ht("div",{class:"sr-layer"}),this.root.append(this.layer),this.scene=new Ts,this.scene.background=new Et(14212336),this.scene.fog=new Hr(14212336,38,120),this.camera=new Re(55,1,.1,400),this.scene.add(new zs(15922431,9081016,1.7));let s=new ks(16774376,2.1);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-14,right:14,top:18,bottom:-10,near:1,far:60}),this.sun=s,this.scene.add(s,s.target),this.starTex=uu(),this.puffTex=du(),this.fx=[],this.floaters=[],this.runners=as.map(r=>{let a=Wl(r);return this.scene.add(a.root),a}),this.bubble=iu(),this.bubble.visible=!1,this.scene.add(this.bubble),this.snow=this._snowfall(),this.portraits=as.map(r=>this._portrait(r)),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.clock=new ns,this._fonts().then(()=>this.showMenu(Math.min(this.save.unlocked,gi.length)-1)),this._loop()}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_resize(){let t=this.el.getBoundingClientRect();this.w=t.width||window.innerWidth,this.h=t.height||window.innerHeight,this.u=Math.min(this.w,this.h)/100,this.root.style.setProperty("--u",`${this.u}px`),this.root.classList.toggle("land",this.w>this.h*1.1),this.renderer.setSize(this.w,this.h,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=this.w/this.h,this.camera.fov=this.camera.aspect<1?62:50,this.camera.updateProjectionMatrix()}_portrait(t){let n=new Me(160,200,{samples:4});n.texture.colorSpace=me;let s=new Ts;s.add(new zs(16777215,9079480,2.2));let r=new ks(16777215,1.6);r.position.set(1,2,3),s.add(r);let a=Wl(t);Xl(a,0,0),a.arms[0].sh.rotation.z=-.35,a.arms[1].sh.rotation.z=.35,a.root.rotation.y=.25,s.add(a.root);let o=new Re(30,.8,.1,20);o.position.set(0,1.72,2.2),o.lookAt(0,1.6,0);let l=this.renderer.getRenderTarget();this.renderer.setRenderTarget(n),this.renderer.setClearColor(0,0),this.renderer.clear(),this.renderer.render(s,o);let c=new Uint8Array(160*160*1.25*4);this.renderer.readRenderTargetPixels(n,0,0,160,160*1.25,c),this.renderer.setRenderTarget(l);let h=document.createElement("canvas");h.width=160,h.height=160*1.25;let u=h.getContext("2d"),f=u.createImageData(160,160*1.25);for(let d=0;d<160*1.25;d++)f.data.set(c.subarray((160*1.25-1-d)*160*4,(160*1.25-d)*160*4),d*160*4);return u.putImageData(f,0,0),n.dispose(),h.toDataURL()}_buildWorld(t){this.world&&(this.scene.remove(this.world),this.world.traverse(h=>{h.geometry&&h.geometry.dispose()}));let e=this.world=new Qt;this.scene.add(e),this.panoMesh&&(this.scene.remove(this.panoMesh),this.panoMesh.material.map.dispose(),this.panoMesh.material.dispose());{let h=new ea().load(`${this.base}art/pano${(t.id-1)%3+1}.webp`,()=>{u.visible=!0});h.colorSpace=me,h.wrapS=Ss,h.repeat.set(2,.66),h.offset.set(0,.34);let u=new bt(new nn(300,300,240,48,1,!0),new be({map:h,side:Pe,fog:!1}));u.visible=!1,u.renderOrder=-10,this.panoMesh=u,this.scene.add(u)}let n=t.len+120,s=Math.atan(Zl),r=n/Math.cos(s),a=new bt(new en(4.6*2+1.2,r),new sn({map:cu(),roughness:.95}));a.material.map.repeat.set(1,r/14),a.rotation.x=-Math.PI/2+s,a.position.set(0,pe(n/2-40),-(n/2-40)),a.receiveShadow=!0,e.add(a);for(let h of[-1,1]){let u=new bt(new en(40,r),new sn({map:hu(),roughness:1}));u.material.map.repeat.set(4,r/20),u.rotation.x=-Math.PI/2+s,u.position.set(h*(4.6+.6+19.6),pe(n/2-40)+.35,-(n/2-40)),u.receiveShadow=!0,e.add(u)}let o=t.id*101,l=()=>(o=o*16807%2147483647,o/2147483647);for(let h=-30;h<n;h+=5+l()*6)for(let u of[-1,1]){if(l()<.75){let f=su(.9+l()*.8),d=u*(4.6+2.5+l()*10);f.position.set(d,pe(h)+Math.abs(d)*.12,-h),e.add(f)}if(l()<.2){let f=ru(.5+l()*.6,h);f.position.set(u*(4.6+1.3+l()*2),pe(h)+.15,-h),e.add(f)}}for(let h=6;h<t.len+10;h+=16)for(let u of[-1,1]){let f=au(15249450);f.position.set(u*(4.6+.9),pe(h),-h),u>0&&(f.userData.flag.scale.x=-1),e.add(f)}for(let h of this.race.lay.checks){let u=new bt(new en(4.6*2+1,.22),new be({color:16762938,transparent:!0,opacity:.55,depthWrite:!1}));u.rotation.x=-Math.PI/2+s,u.position.set(0,pe(h)+.03,-h),e.add(u)}let c=ou(4.6*2+1.2);c.position.set(0,pe(t.len),-t.len),e.add(c);for(let h=0;h<9;h++){let u=lu(28+l()*30,40+l()*40,h);u.position.set((h-4)*45+(l()-.5)*20,pe(t.len)-10,-t.len-70-l()*60),e.add(u)}this.crystalMeshes=this.race.lay.crystals.map(h=>{let u=tu();return u.position.set(h.x,pe(h.s)+.75,-h.s),e.add(u),u});for(let h of this.race.lay.pads){let u=eu();u.rotation.x=-Math.PI/2+s,u.position.set(h.x,pe(h.s)+.03,-h.s),e.add(u)}this.orbMeshes=this.race.lay.orbs.map(h=>{let u=nu(h.kind);return u.position.set(h.x,pe(h.s)+1,-h.s),e.add(u),u}),this.hazMeshes=new Map}_snowfall(){let e=new de,n=new Float32Array(500*3);for(let r=0;r<500;r++)n[r*3]=(Math.random()-.5)*40,n[r*3+1]=Math.random()*20,n[r*3+2]=-Math.random()*50;e.setAttribute("position",new Ie(n,3));let s=new Qi(e,new ci({color:16777215,size:.09,transparent:!0,opacity:.85,depthWrite:!1}));return this.scene.add(s),s}_bind(){let t=this.root;for(let s of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(s,()=>this.sound.unlock(),{capture:!0,passive:!0});let e=null;t.addEventListener("pointerdown",s=>{s.target.closest("button")||s.target.closest(".sr-dim")||s.target.closest(".sr-chips")||(e={x:s.clientX,want:this.race?this.race.me.want:0},this.mode==="menu"&&this._startRace())}),t.addEventListener("pointermove",s=>{if(!e||!this.race||this.race.state==="count"&&this.mode!=="race")return;let r=Math.min(this.w,this.h*.75)*.5;this.race.steer(e.want+(s.clientX-e.x)/r*4.6),this.hint&&(this.hint.remove(),this.hint=null)});let n=()=>{e=null};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),this._onKey=s=>{if(!this.race||this.mode!=="race"){this.mode==="menu"&&(s.key==="Enter"||s.key===" ")&&this._startRace();return}if(s.key==="ArrowLeft")this.race.steer(this.race.me.want-1.8);else if(s.key==="ArrowRight")this.race.steer(this.race.me.want+1.8);else return;s.preventDefault()},window.addEventListener("keydown",this._onKey),this._onVis=()=>{document.hidden?this.sound.suspend():this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=ht("button",{class:"sr-soundpill",onclick:s=>{s.stopPropagation(),this.sound.unlock()}},Nt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden?"block":"none"},700)}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_soundBtn(){let t=ht("button",{class:"sr-round","aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return t.addEventListener("click",e=>{e.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),t.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),t}showMenu(t){this.mode="menu",this.ci=t,this.race=new oa(t,{easy:this.easy,seed:Math.floor(Math.random()*1e6)}),this._buildWorld(this.race.course),this._clearHaz(),this.sound.setMode("menu"),this.layer.replaceChildren(),this._hud();let e=ht("div",{class:"sr-chips"},gi.map((n,s)=>{let r=n.id>this.save.unlocked,a=this.save.best[n.id];return ht("button",{class:`sr-chip${s===t?" on":""}${r?" lock":""}`,onclick:o=>{if(o.stopPropagation(),r){this._float(Nt("locked"),"pill");return}this.sound.play("tap"),this.showMenu(s)}},r?"\u{1F512} ":a?`${["\u{1F947}","\u{1F948}","\u{1F949}","\u{1F3C5}"][a-1]} `:"",Nt(`c${n.id}`))}));this.layer.append(ht("div",{class:"sr-logo-wrap"},ua(Nt("title"),Nt("tagline"))),e,this.hint=ht("div",{class:"sr-drag"},ht("span",{class:"sr-hand"},"\u{1F446}"),Nt("drag")),ht("button",{class:"sr-round sr-exit","aria-label":Nt("exit"),onclick:n=>{n.stopPropagation(),this._saveNow(),this.post({type:"exit"})}},Ws()==="en"?"\u2190":"\u2192")),this.easy&&this.layer.append(ht("div",{class:"sr-easy"},"\u{1F31F} ",Nt("easy")))}_startRace(){if(this.mode==="menu"){this.mode="race",this.sound.setMode("race"),this.streak=0,this.lastCrystalT=-9;for(let t of[...this.layer.querySelectorAll(".sr-logo-wrap,.sr-chips,.sr-easy,.sr-exit")])t.remove();this._big(Xe(3),"count"),this.sound.play("count")}}_hud(){let t=this.race;this.hudEl={};let e=t.lay.checks.map(s=>ht("i",{class:"sr-tick",style:`${Ws()==="en"?"left":"right"}:${s/t.course.len*100}%`})),n=la.map((s,r)=>ht("b",{class:`sr-pdot${r===0?" me":""}`,style:`background:${as[r].card[0]}`}));this.hudEl.dots=n,this.hudEl.hearts=ht("div",{class:"sr-hearts"}),this.hudEl.clock=ht("div",{class:"sr-clock"},ht("i"),ht("span")),this.hudEl.clock.firstChild.innerHTML='<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="rgba(30,30,60,.55)" stroke="rgba(255,255,255,.35)" stroke-width="4"/><circle class="sr-ring" cx="20" cy="20" r="16" fill="none" stroke="#ff8a2a" stroke-width="4" stroke-linecap="round" transform="rotate(-90 20 20)" stroke-dasharray="100.5" stroke-dashoffset="0"/></svg>',this.layer.append(ht("div",{class:"sr-top"},ht("div",{class:"sr-left"},this._soundBtn(),this.hudEl.hearts),ht("div",{class:"sr-track"},ht("div",{class:"sr-line"},e,ht("i",{class:"sr-flagend"},"\u{1F3C1}"),n)),this.hudEl.clock)),this.hudEl.cards=la.map((s,r)=>{let a=ht("div",{class:"sr-badge"}),o=ht("div",{class:"sr-score"}),l=r===0?ht("div",{class:"sr-you"},Nt("you")):null;return{card:ht("div",{class:`sr-card${r===0?" me":""}`,style:`background:linear-gradient(180deg,${as[r].card[0]},${as[r].card[1]})`},a,ht("img",{src:this.portraits[r],alt:""}),o,l),badge:a,score:o}}),this.layer.append(ht("div",{class:"sr-cards"},this.hudEl.cards.map(s=>s.card))),this._updateHud(!0)}_updateHud(t){let e=this.race;if(!e||!this.hudEl)return;let n=e.me,s=this.easy?3:n.lives;(t||this._lastHearts!==s)&&(this._lastHearts=s,this.hudEl.hearts.replaceChildren(...[0,1,2].map(o=>ht("span",{class:o<s?"":"off"},"\u2665"))));let r=Math.ceil(e.remaining);this.hudEl.clock.lastChild.textContent=Xe(r),this.hudEl.clock.querySelector(".sr-ring").setAttribute("stroke-dashoffset",String(100.5*(1-e.remaining/e.time))),this.hudEl.clock.classList.toggle("low",r<=10&&e.state==="run");let a=Ws()==="en"?"left":"right";e.runners.forEach((o,l)=>{this.hudEl.dots[l].style[a]=`${Math.min(1,o.s/e.course.len)*100}%`;let c=this.hudEl.cards[l],h=e.rankOf(o);c.badge.textContent=Nt(`p${h}`),c.badge.classList.toggle("gold",h===1),c.score.textContent=Xe(o.score),c.card.classList.toggle("down",o.down>0),c.card.style.order=String(h)})}_big(t,e){let n=ht("div",{class:`sr-big ${e}`},t);this.layer.append(n),setTimeout(()=>n.remove(),900)}_float(t,e="word"){let n=ht("div",{class:`sr-word ${e}`},t);this.layer.append(n),setTimeout(()=>n.remove(),1300)}_plus(t,e){let n=ht("div",{class:"sr-plus"},t);this.layer.append(n),this.floaters.push({e:n,pos:e.clone(),t:0})}_sparkle(t,e=10,n=16777215){for(let s=0;s<e;s++){let r=new Vs(new Zi({map:this.starTex,color:n,transparent:!0,depthWrite:!1}));r.position.copy(t);let a=Math.random()*Math.PI*2;r.userData={v:new w(Math.cos(a)*1.6,1+Math.random()*2,Math.sin(a)*1.2),life:.7+Math.random()*.3,size:.18+Math.random()*.2},r.scale.setScalar(r.userData.size),this.scene.add(r),this.fx.push(r)}}_puff(t,e=8,n=.8){for(let s=0;s<e;s++){let r=new Vs(new Zi({map:this.puffTex,transparent:!0,depthWrite:!1}));r.position.copy(t).add(new w((Math.random()-.5)*.8,Math.random()*.4,(Math.random()-.5)*.8)),r.userData={v:new w((Math.random()-.5)*1.5,.6+Math.random(),(Math.random()-.5)*1.5),life:.8,size:n,grow:!0},r.scale.setScalar(n),this.scene.add(r),this.fx.push(r)}}_events(t){let e=this.race.me,n=new w(e.x,pe(e.s)+1.2,-e.s);for(let s of t)switch(s.type){case"count":this._big(Xe(s.n),"count"),this.sound.play("count");break;case"go":this._big(Nt("go"),"go"),this.sound.play("go"),this.hint&&(this.hint.remove(),this.hint=null);break;case"crystal":{let r=this.race.t;this.streak=r-this.lastCrystalT<.6?this.streak+1:0,this.lastCrystalT=r,this.sound.play("crystal",this.streak);let a=new w(s.x,pe(s.s)+.8,-s.s);this._sparkle(a,6,16769658),this._sparkle(n,4),this._plus(`+${Xe(10)}`,a);break}case"dodge":this._float(Nt("dodge")),this.sound.play("dodge"),this._sparkle(n,12),this._plus(`+${Xe(5)}`,n);break;case"overtake":this._float(Nt("overtake")),this.sound.play("overtake"),this._plus(`+${Xe(20)}`,n);break;case"boost":this.sound.play("boost"),this._puff(n.clone().setY(n.y-1),6,.6);break;case"tailwind":this._float(Nt("tailwind"),"wind"),this.sound.play("tailwind"),this._puff(n,10,1);break;case"shield":this._float(Nt("shield"),"shield"),this.sound.play("shield");break;case"blocked":this._float(Nt("blocked"),"shield"),this.sound.play("blocked"),this._sparkle(n,14,13625599);break;case"wipeout":this._float(Nt("wipeout"),"pill"),this.sound.play("wipeout"),this.easy||this.sound.play("heart"),this._puff(n.clone().setY(n.y-.8),12,1),this.shake=.45;break;case"up":this.sound.play("up");break;case"summit":this.sound.play("summit");break;case"finish":setTimeout(()=>this._winCard(s.place),1200);break;case"out":this.sound.play("lose"),setTimeout(()=>this._loseCard("out"),900);break;case"timeup":this.sound.play("lose"),setTimeout(()=>this._loseCard("time"),600);break;default:}}_winCard(t){this.mode="end",this.sound.setMode("end");let e=this.race.course,n=this.save.best[e.id];(!n||t<n)&&(this.save.best[e.id]=t),e.id+1>this.save.unlocked&&e.id<gi.length&&(this.save.unlocked=e.id+1);let s=this.race.lay.crystals.filter(a=>a.got).length;this.save.crystals=Math.min(999999,this.save.crystals+s),this._saveNow();let r=this.ci+1>=gi.length;this.layer.append(ht("div",{class:"sr-dim"},ht("div",{class:"sr-card-end"},ua(Nt("title"),Nt(`c${e.id}`),!0),ht("div",{class:"sr-medal"},["\u{1F947}","\u{1F948}","\u{1F949}","\u{1F3C5}"][t-1]),ht("div",{class:"sr-endtitle"},Nt("summit")),ht("div",{class:"sr-endsub"},t===1?Nt("win1"):Nt("winN")),ht("div",{class:"sr-stats"},ht("div",{},ht("small",{},Nt("place")),ht("b",{},Nt(`p${t}`))),ht("div",{},ht("small",{},Nt("score")),ht("b",{},Xe(this.race.me.score))),ht("div",{},ht("small",{},Nt("crystals")),ht("b",{},"\u{1F48E} ",Xe(s)))),r?null:ht("button",{class:"sr-btn",onclick:()=>this.showMenu(this.ci+1)},Nt("next")," \u25B6"),ht("button",{class:`sr-btn${r?"":" alt"}`,onclick:()=>this.showMenu(this.ci)},"\u21BB ",Nt("again")),ht("button",{class:"sr-btn alt",onclick:()=>this.showMenu(this.ci)},Nt("courses")))))}_loseCard(t){this.mode="end",this.sound.setMode("end"),this.layer.append(ht("div",{class:"sr-dim"},ht("div",{class:"sr-card-end"},ua(Nt("title"),Nt(`c${this.race.course.id}`),!0),ht("div",{class:"sr-medal"},t==="out"?"\u2744\uFE0F":"\u23F1\uFE0F"),ht("div",{class:"sr-endtitle"},t==="out"?Nt("outTitle"):Nt("timeTitle")),ht("div",{class:"sr-endsub"},t==="out"?Nt("outText"):Nt("timeText")),ht("div",{class:"sr-stats"},ht("div",{},ht("small",{},Nt("score")),ht("b",{},Xe(this.race.me.score))),ht("div",{},ht("small",{},Nt("crystals")),ht("b",{},"\u{1F48E} ",Xe(this.race.lay.crystals.filter(e=>e.got).length)))),ht("button",{class:"sr-btn",onclick:()=>this.showMenu(this.ci)},"\u21BB ",Nt("again")))))}_clearHaz(){if(this.hazMeshes){for(let t of this.hazMeshes.values())this.world.remove(t.root),this.world.remove(t.ladder);this.hazMeshes.clear()}}_syncHazards(t){let e=this.race,n=Math.atan(Zl),s=new Set,r=0;for(let a of e.hazards){s.add(a.id);let o=this.hazMeshes.get(a.id);if(o||(o=a.kind==="log"?Qh(a.half,a.r):a.kind==="boulder"?Jh(a.r,a.id):Zh(a.r,a.id),o.ladder=$h(a.kind==="log"?a.half*2+.4:a.r*2+.3),o.ladder.rotation.x=-Math.PI/2+n,this.world.add(o.root,o.ladder),this.hazMeshes.set(a.id,o)),o.root.position.set(a.x,pe(a.s)+a.r,-a.s),a.kind==="log"){o.spin.rotation.x=-a.roll;let h=Math.abs(Math.sin(a.roll*.5));o.root.position.y+=h*.15,h<.06&&!o.knock&&Math.abs(a.s-e.me.s)<30&&(o.knock=!0,this.sound.play("log")),h>.5&&(o.knock=!1)}else o.spin.rotation.x=-a.roll;let l=Math.max(2,Math.min(26,a.s-e.me.s+6));o.ladder.scale.set(1,l,1),o.ladder.material.map.repeat.set(1,l/14),o.ladder.position.set(a.x,pe(a.s-l/2)+.025,-(a.s-l/2)),o.ladder.visible=a.s>e.me.s-2;let c=a.s-e.me.s;c>-3&&c<22&&(r=Math.max(r,(1-Math.max(0,c)/22)*(Math.abs(a.x-e.me.x)<3?1:.4)))}for(let[a,o]of this.hazMeshes)s.has(a)||(this.world.remove(o.root,o.ladder),o.ladder.material.map.dispose(),o.ladder.material.dispose(),this.hazMeshes.delete(a));return r}_loop(){this._raf=requestAnimationFrame(()=>this._loop());let t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime,n=this.race;if(!n){this.renderer.render(this.scene,this.camera);return}(this.mode==="race"||this.mode==="end")&&this._events(n.step(t));let s=this._syncHazards(e);n.runners.forEach((d,m)=>{let A=this.runners[m],g=pe(d.s);A.root.position.set(d.x,g,-d.s),A.root.rotation.y=Math.PI+(d.want-d.x)*-.12;let p=this.mode!=="menu"&&n.state!=="count"&&d.down<=0&&!(d.finished&&d.s>=n.course.len+3);if(d.down>0)d._fall=(d._fall||0)+t,Kh(A,d._fall);else if(d._fall=0,d._ph=(d._ph||m)+t*(p?11*(d.boost>0?1.3:1):0),Xl(A,d._ph,p?1:.05),d.me&&p){let y=Math.floor(d._ph/Math.PI);y!==this._lastStep&&(this._lastStep=y,this.sound.play("step",d.boost>0?1:0))}A.root.visible=!(d.safe>0&&Math.floor(e*12)%2===0)});let r=n.me;this.bubble.visible=r.shield>0,this.bubble.position.set(r.x,pe(r.s)+.95,-r.s),this.bubble.material.opacity=.25+Math.sin(e*6)*.08,r.wind>0&&Math.random()<t*14&&this._puff(new w(r.x,pe(r.s)+.4,-r.s+.4),1,.7),r.boost>0&&Math.random()<t*20&&this._sparkle(new w(r.x,pe(r.s)+.2,-r.s+.3),1,10152703),this.crystalMeshes.forEach((d,m)=>{let A=n.lay.crystals[m];d.visible=!A.got&&A.s>r.s-6&&A.s<r.s+90,d.visible&&(d.rotation.y=e*2.4+m,d.position.y=pe(A.s)+.75+Math.sin(e*3+m)*.08)}),this.orbMeshes.forEach((d,m)=>{let A=n.lay.orbs[m];d.visible=!A.got,d.userData.ring.rotation.set(e*2,e*1.3,0),d.userData.halo.scale.setScalar(1+Math.sin(e*4)*.12)});let a=this.camera.aspect<1,o=pe(r.s),l=a?5.4:6,c=a?4.2:3.5,h=new w(r.x*.8,o+c,-r.s+l);this.mode==="menu"&&h.set(r.x*.5,o+(a?3.2:3),-r.s+(a?6:7)),this.camPos||(this.camPos=h.clone()),this.camPos.lerp(h,Math.min(1,t*5)),this.camera.position.copy(this.camPos),this.shake>0&&(this.shake-=t,this.camera.position.x+=(Math.random()-.5)*this.shake*.5,this.camera.position.y+=(Math.random()-.5)*this.shake*.4),this.camera.lookAt(r.x*.75,o+(a?1.2:1.4),-r.s-7),this.panoMesh&&this.panoMesh.position.set(this.camera.position.x,this.camera.position.y+60,this.camera.position.z);let u=(a?62:50)+(r.boost>0||r.wind>0?6:0);Math.abs(this.camera.fov-u)>.05&&(this.camera.fov+=(u-this.camera.fov)*Math.min(1,t*4),this.camera.updateProjectionMatrix()),this.sun.position.set(r.x-6,o+16,-r.s+6),this.sun.target.position.set(r.x,o,-r.s-6);let f=this.snow.geometry.attributes.position;for(let d=0;d<f.count;d++){let m=f.getY(d)-t*1.4;m<-2&&(m=18),f.setY(d,m),f.setX(d,f.getX(d)+Math.sin(e+d)*t*.2)}f.needsUpdate=!0,this.snow.position.set(r.x,o-2,-r.s-8);for(let d=this.fx.length-1;d>=0;d--){let m=this.fx[d],A=m.userData;A.life-=t,m.position.addScaledVector(A.v,t),A.v.y-=(A.grow?.5:3)*t,m.material.opacity=Math.max(0,A.life*1.4),A.grow&&m.scale.setScalar(A.size*(1+(.8-A.life))),A.life<=0&&(this.scene.remove(m),m.material.dispose(),this.fx.splice(d,1))}for(let d=this.floaters.length-1;d>=0;d--){let m=this.floaters[d];m.t+=t;let A=m.pos.clone().project(this.camera);m.e.style.left=`${(A.x*.5+.5)*this.w}px`,m.e.style.top=`${(-A.y*.5+.5)*this.h-m.t*this.u*14}px`,m.e.style.opacity=String(Math.max(0,1-m.t/1.1)),m.t>1.1&&(m.e.remove(),this.floaters.splice(d,1))}this.sound.setRun(this.mode==="race"&&n.state==="run"&&r.down<=0?r.boost>0?1.4:r.wind>0?1.2:.8:.2,this.mode==="race"?s:0),this._updateHud(),this.renderer.render(this.scene,this.camera)}pause(){this.sound.suspend()}dispose(){cancelAnimationFrame(this._raf),clearInterval(this._pill),window.removeEventListener("keydown",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.sound.dispose(),this.ro&&this.ro.disconnect(),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},$l={start(i,t,e){let n=new Ql(i,t||{},e);return $l.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.SummitRush=$l;var dx=$l;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
