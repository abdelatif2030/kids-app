(()=>{var Hl="170";var $u=0,Mc=1,td=2;var Bh=1,ed=2,En=3,An=0,Ve=1,Tn=2,mn=0,Wn=1,qi=2,bc=3,Sc=4,nd=5,ci=100,id=101,sd=102,rd=103,ad=104,od=200,ld=201,cd=202,hd=203,go=204,mo=205,ud=206,dd=207,fd=208,pd=209,gd=210,md=211,Ad=212,xd=213,vd=214,Ao=0,xo=1,vo=2,Hi=3,Co=4,_o=5,yo=6,Io=7,oa=0,Cd=1,_d=2,Xn=0,Gl=1,Wl=2,Xl=3,qs=4,yd=5,Yl=6,Zl=7;var zh=300,Gi=301,Wi=302,Mo=303,bo=304,la=306,Yn=1e3,di=1001,So=1002,ke=1003,Id=1004;var tr=1005;var pn=1006,Ua=1007;var fi=1008;var Pn=1009,Oh=1010,kh=1011,ws=1012,Kl=1013,pi=1014,gn=1015,un=1016,jl=1017,Jl=1018,Xi=1020,qh=35902,Hh=1021,Gh=1022,rn=1023,Wh=1024,Xh=1025,zi=1026,Yi=1027,Ql=1028,$l=1029,Yh=1030,tc=1031;var ec=1033,Vr=33776,Rr=33777,Pr=33778,Ur=33779,Eo=35840,wo=35841,To=35842,Vo=35843,Ro=36196,Po=37492,Uo=37496,Lo=37808,Do=37809,No=37810,Fo=37811,Bo=37812,zo=37813,Oo=37814,ko=37815,qo=37816,Ho=37817,Go=37818,Wo=37819,Xo=37820,Yo=37821,Lr=36492,Zo=36494,Ko=36495,Zh=36283,jo=36284,Jo=36285,Qo=36286;var Dr=2300,$o=2301,La=2302,Ec=2400,wc=2401,Tc=2402;var Md=3200,bd=3201;var nc=0,Sd=1,Gn="",re="srgb",ss="srgb-linear",ca="linear",se="srgb";var yi=7680;var Vc=519,Ed=512,wd=513,Td=514,Kh=515,Vd=516,Rd=517,Pd=518,Ud=519,Rc=35044;var Pc="300 es",Vn=2e3,Nr=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Da=Math.PI/180,tl=180/Math.PI;function rs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Ld(i,t){return(i%t+t)%t}function Na(i,t,e){return(1-e)*i+e*t}function ps(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var J=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],A=s[0],g=s[3],p=s[6],y=s[1],v=s[4],x=s[7],U=s[2],S=s[5],w=s[8];return r[0]=a*A+o*y+l*U,r[3]=a*g+o*v+l*S,r[6]=a*p+o*x+l*w,r[1]=c*A+h*y+u*U,r[4]=c*g+h*v+u*S,r[7]=c*p+h*x+u*w,r[2]=d*A+f*y+m*U,r[5]=d*g+f*v+m*S,r[8]=d*p+f*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=f*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fa=new Ht;function jh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dd(){let i=Ts("canvas");return i.style.display="block",i}var Uc={};function ys(i){i in Uc||(Uc[i]=!0,console.warn(i))}function Nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yt={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lc=[.64,.33,.3,.6,.15,.06],Dc=[.2126,.7152,.0722],Nc=[.3127,.329],Fc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[ss]:{primaries:Lc,whitePoint:Nc,transfer:ca,toXYZ:Fc,fromXYZ:Bc,luminanceCoefficients:Dc,workingColorSpaceConfig:{unpackColorSpace:re},outputColorSpaceConfig:{drawingBufferColorSpace:re}},[re]:{primaries:Lc,whitePoint:Nc,transfer:se,toXYZ:Fc,fromXYZ:Bc,luminanceCoefficients:Dc,outputColorSpaceConfig:{drawingBufferColorSpace:re}}});var Ii,el=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=Ts("canvas")),Ii.width=t.width,Ii.height=t.height;let n=Ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ts("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zd=0,Fr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ba(s[a].image)):r.push(Ba(s[a]))}else r=Ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ba(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?el.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Od=0,Ue=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=pn,a=fi,o=rn,l=Pn,c=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=rs(),this.name="",this.source=new Fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case So:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case So:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=zh;Ue.DEFAULT_ANISOTROPY=1;var Ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],A=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(f+1)/2,U=(p+1)/2,S=(h+d)/4,w=(u+A)/4,P=(m+g)/4;return v>x&&v>U?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=w/n):x>U?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=w/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-A)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nl=class extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends nl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var il=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==d||c!==f||h!==m){let g=1-o,p=l*d+c*f+h*m+u*A,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let U=Math.sqrt(v),S=Math.atan2(U,p*y);g=Math.sin(g*S)/U,o=Math.sin(o*S)/U}let x=o*y;if(l=l*g+d*x,c=c*g+f*x,h=h*g+m*x,u=u*g+A*x,g===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new T,zc=new Fe,an=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),nr.subVectors(this.max,gs),Mi.subVectors(t.a,gs),bi.subVectors(t.b,gs),Si.subVectors(t.c,gs),Bn.subVectors(bi,Mi),zn.subVectors(Si,bi),ni.subVectors(Mi,Si);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ni.z,ni.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!Oa(e,Mi,bi,Si,nr)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Mi,bi,Si,nr))?!1:(ir.crossVectors(Bn,zn),e=[ir.x,ir.y,ir.z],Oa(e,Mi,bi,Si,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_n=[new T,new T,new T,new T,new T,new T,new T,new T],en=new T,er=new an,Mi=new T,bi=new T,Si=new T,Bn=new T,zn=new T,ni=new T,gs=new T,nr=new T,ir=new T,ii=new T;function Oa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);let o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kd=new an,ms=new T,ka=new T,Un=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);let e=ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(ka)),this.expandByPoint(ms.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yn=new T,qa=new T,sr=new T,On=new T,Ha=new T,rr=new T,Ga=new T,Vs=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(qa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sr),o=On.dot(this.direction),l=-On.dot(sr),c=On.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(sr,d),f}intersectSphere(t,e){yn.subVectors(t.center,this.origin);let n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){Ha.subVectors(e,t),rr.subVectors(n,t),Ga.crossVectors(Ha,rr);let a=this.direction.dot(Ga),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,t);let l=o*this.direction.dot(rr.crossVectors(On,rr));if(l<0)return null;let c=o*this.direction.dot(Ha.cross(On));if(c<0||l+c>a)return null;let h=-o*On.dot(Ga);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,A,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,A=c*u;e[0]=d+A*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,A=c*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+A,e[1]=l*u,e[5]=A*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+A,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qd,t,Hd)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),kn.crossVectors(n,ze),kn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),kn.crossVectors(n,ze)),kn.normalize(),ar.crossVectors(ze,kn),s[0]=kn.x,s[4]=ar.x,s[8]=ze.x,s[1]=kn.y,s[5]=ar.y,s[9]=ze.y,s[2]=kn.z,s[6]=ar.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],A=n[6],g=n[10],p=n[14],y=n[3],v=n[7],x=n[11],U=n[15],S=s[0],w=s[4],P=s[8],M=s[12],_=s[1],V=s[5],G=s[9],z=s[13],R=s[2],H=s[6],F=s[10],K=s[14],O=s[3],tt=s[7],st=s[11],ft=s[15];return r[0]=a*S+o*_+l*R+c*O,r[4]=a*w+o*V+l*H+c*tt,r[8]=a*P+o*G+l*F+c*st,r[12]=a*M+o*z+l*K+c*ft,r[1]=h*S+u*_+d*R+f*O,r[5]=h*w+u*V+d*H+f*tt,r[9]=h*P+u*G+d*F+f*st,r[13]=h*M+u*z+d*K+f*ft,r[2]=m*S+A*_+g*R+p*O,r[6]=m*w+A*V+g*H+p*tt,r[10]=m*P+A*G+g*F+p*st,r[14]=m*M+A*z+g*K+p*ft,r[3]=y*S+v*_+x*R+U*O,r[7]=y*w+v*V+x*H+U*tt,r[11]=y*P+v*G+x*F+U*st,r[15]=y*M+v*z+x*K+U*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+A*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],A=t[13],g=t[14],p=t[15],y=u*g*c-A*d*c+A*l*f-o*g*f-u*l*p+o*d*p,v=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,x=h*A*c-m*u*c+m*o*f-a*A*f-h*o*p+a*u*p,U=m*u*l-h*A*l-m*o*d+a*A*d+h*o*g-a*u*g,S=e*y+n*v+s*x+r*U;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=y*w,t[1]=(A*d*r-u*g*r-A*s*f+n*g*f+u*s*p-n*d*p)*w,t[2]=(o*g*r-A*l*r+A*s*c-n*g*c-o*s*p+n*l*p)*w,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*w,t[4]=v*w,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*w,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*p-e*l*p)*w,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*w,t[8]=x*w,t[9]=(m*u*r-h*A*r-m*n*f+e*A*f+h*n*p-e*u*p)*w,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*w,t[12]=U*w,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*g+e*u*g)*w,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*g-e*o*g)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,A=a*h,g=a*u,p=o*u,y=l*c,v=l*h,x=l*u,U=n.x,S=n.y,w=n.z;return s[0]=(1-(A+p))*U,s[1]=(f+x)*U,s[2]=(m-v)*U,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+v)*w,s[9]=(g-y)*w,s[10]=(1-(d+A))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ei.set(s[0],s[1],s[2]).length(),a=Ei.set(s[4],s[5],s[6]).length(),o=Ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);let c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(o===Vn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Nr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Vn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,m,A;if(o===Vn)m=(a+r)*u,A=-2*u;else if(o===Nr)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ei=new T,nn=new Zt,qd=new T(0,0,0),Hd=new T(1,1,1),kn=new T,ar=new T,ze=new T,Oc=new Zt,kc=new Fe,on=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gd=0,qc=new T,wi=new Fe,In=new Zt,or=new T,As=new T,Wd=new T,Xd=new Fe,Hc=new T(1,0,0),Gc=new T(0,1,0),Wc=new T(0,0,1),Xc={type:"added"},Yd={type:"removed"},Ti={type:"childadded",child:null},Wa={type:"childremoved",child:null},Me=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new on,n=new Fe,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(Hc,t)}rotateY(t){return this.rotateOnAxis(Gc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hc,t)}translateY(t){return this.translateOnAxis(Gc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(As,or,this.up):In.lookAt(or,As,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(In),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xc),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xc),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Me.DEFAULT_UP=new T(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new T,Mn=new T,Xa=new T,bn=new T,Vi=new T,Ri=new T,Yc=new T,Ya=new T,Za=new T,Ka=new T,ja=new Ae,Ja=new Ae,Qa=new Ae,hi=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Mn.subVectors(n,e),Xa.subVectors(t,e);let a=sn.dot(sn),o=sn.dot(Mn),l=sn.dot(Xa),c=Mn.dot(Mn),h=Mn.dot(Xa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ja.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),ja.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,n),Qa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ja,r.x),a.addScaledVector(Ja,r.y),a.addScaledVector(Qa,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Mn.subVectors(t,e),sn.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),sn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Ri.subVectors(r,n),Ya.subVectors(t,n);let l=Vi.dot(Ya),c=Ri.dot(Ya);if(l<=0&&c<=0)return e.copy(n);Za.subVectors(t,s);let h=Vi.dot(Za),u=Ri.dot(Za);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vi,a);Ka.subVectors(t,r);let f=Vi.dot(Ka),m=Ri.dot(Ka);if(m>=0&&f<=m)return e.copy(r);let A=f*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ri,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Yc.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Yc,o);let p=1/(g+A+d);return a=A*p,o=d*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function $a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Ld(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$a(a,r,t+1/3),this.g=$a(a,r,t),this.b=$a(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=re){let n=Jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=re){return Yt.fromWorkingColorSpace(we.copy(this),t),Math.round(Te(we.r*255,0,255))*65536+Math.round(Te(we.g*255,0,255))*256+Math.round(Te(we.b*255,0,255))}getHexString(t=re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=re){Yt.fromWorkingColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(lr);let n=Na(qn.h,lr.h,e),s=Na(qn.s,lr.s,e),r=Na(qn.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new Mt;Mt.NAMES=Jh;var Zd=0,qe=class extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=rs(),this.name="",this.blending=Wn,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=mo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Kn=class extends qe{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new T,cr=new J,de=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rc&&(t.usage=this.usage),t}};var Or=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var kr=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kd=0,Ze=new Zt,to=new Me,Pi=new T,Oe=new an,xs=new an,Ie=new T,oe=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jh(t)?kr:Or)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return to.lookAt(t),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(Oe.min,xs.min),Oe.expandByPoint(Ie),Ie.addVectors(Oe.max,xs.max),Oe.expandByPoint(Ie)):(Oe.expandByPoint(xs.min),Oe.expandByPoint(xs.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(t,c),Ie.add(Pi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new T,l[P]=new T;let c=new T,h=new T,u=new T,d=new J,f=new J,m=new J,A=new T,g=new T;function p(P,M,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let V=1/(f.x*m.y-m.x*f.y);isFinite(V)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(V),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(V),o[P].add(A),o[M].add(A),o[_].add(A),l[P].add(g),l[M].add(g),l[_].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,M=y.length;P<M;++P){let _=y[P],V=_.start,G=_.count;for(let z=V,R=V+G;z<R;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new T,x=new T,U=new T,S=new T;function w(P){U.fromBufferAttribute(s,P),S.copy(U);let M=o[P];v.copy(M),v.sub(U.multiplyScalar(U.dot(M))).normalize(),x.crossVectors(S,M);let V=x.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,V)}for(let P=0,M=y.length;P<M;++P){let _=y[P],V=_.start,G=_.count;for(let z=V,R=V+G;z<R;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),A=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let A=0,g=l.length;A<g;A++){o.isInterleavedBufferAttribute?f=l[A]*o.data.stride+o.offset:f=l[A]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new de(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zc=new Zt,si=new Vs,hr=new Un,Kc=new T,ur=new T,dr=new T,fr=new T,eo=new T,pr=new T,jc=new T,gr=new T,zt=class extends Me{constructor(t=new oe,e=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(eo.fromBufferAttribute(u,t),a?pr.addScaledVector(eo,h):pr.addScaledVector(eo.sub(e),h))}e.add(pr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(hr.containsPoint(si.origin)===!1&&(si.intersectSphere(hr,Kc)===null||si.origin.distanceToSquared(Kc)>(t.far-t.near)**2))&&(Zc.copy(r).invert(),si.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,U=v;x<U;x+=3){let S=o.getX(x),w=o.getX(x+1),P=o.getX(x+2);s=mr(this,p,t,n,c,h,u,S,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(o.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let y=o.getX(g),v=o.getX(g+1),x=o.getX(g+2);s=mr(this,a,t,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,U=v;x<U;x+=3){let S=x,w=x+1,P=x+2;s=mr(this,p,t,n,c,h,u,S,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let y=g,v=g+1,x=g+2;s=mr(this,a,t,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function jd(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===An,o),l===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:i}}function mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ur),i.getVertexPosition(l,dr),i.getVertexPosition(c,fr);let h=jd(i,t,e,n,ur,dr,fr,jc);if(h){let u=new T;hi.getBarycoord(jc,ur,dr,fr,u),s&&(h.uv=hi.getInterpolatedAttribute(s,o,l,c,u,new J)),r&&(h.uv1=hi.getInterpolatedAttribute(r,o,l,c,u,new J)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new T,materialIndex:0};hi.getNormal(ur,dr,fr,d.normal),h.face=d,h.barycoord=u}return h}var He=class i extends oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function m(A,g,p,y,v,x,U,S,w,P,M){let _=x/w,V=U/P,G=x/2,z=U/2,R=S/2,H=w+1,F=P+1,K=0,O=0,tt=new T;for(let st=0;st<F;st++){let ft=st*V-z;for(let Pt=0;Pt<H;Pt++){let Xt=Pt*_-G;tt[A]=Xt*y,tt[g]=ft*v,tt[p]=R,c.push(tt.x,tt.y,tt.z),tt[A]=0,tt[g]=0,tt[p]=S>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Pt/w),u.push(1-st/P),K+=1}}for(let st=0;st<P;st++)for(let ft=0;ft<w;ft++){let Pt=d+ft+H*st,Xt=d+ft+H*(st+1),X=d+(ft+1)+H*(st+1),nt=d+(ft+1)+H*st;l.push(Pt,Xt,nt),l.push(Xt,X,nt),O+=6}o.addGroup(f,O,M),f+=O,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Jd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Jn={clone:Zi,merge:Re},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends qe{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qr=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new T,Jc=new J,Qc=new J,Pe=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,Qc),e.subVectors(Qc,Jc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Da*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ui=-90,Li=1,sl=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(Ui,Li,t,e);s.layers=this.layers,this.add(s);let r=new Pe(Ui,Li,t,e);r.layers=this.layers,this.add(r);let a=new Pe(Ui,Li,t,e);a.layers=this.layers,this.add(a);let o=new Pe(Ui,Li,t,e);o.layers=this.layers,this.add(o);let l=new Pe(Ui,Li,t,e);l.layers=this.layers,this.add(l);let c=new Pe(Ui,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Hr=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rl=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:mn});r.uniforms.tEquirect.value=e;let a=new zt(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=pn),new sl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},no=new T,tf=new T,ef=new Ht,wn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=no.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(no),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ef.getNormalMatrix(t),s=this.coplanarPoint(no).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Un,Ar=new T,Rs=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],A=s[10],g=s[11],p=s[12],y=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,g-f,x-p).normalize(),n[1].setComponents(l+r,d+c,g+f,x+p).normalize(),n[2].setComponents(l+a,d+h,g+m,x+y).normalize(),n[3].setComponents(l-a,d-h,g-m,x-y).normalize(),n[4].setComponents(l-o,d-u,g-A,x-v).normalize(),e===Vn)n[5].setComponents(l+o,d+u,g+A,x+v).normalize();else if(e===Nr)n[5].setComponents(o,u,A,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $h(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],A=u[f];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let A=u[f];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ln=class i extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let y=p*d-a;for(let v=0;v<c;v++){let x=v*u-r;m.push(x,-y,0),A.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let v=y+c*p,x=y+c*(p+1),U=y+1+c*(p+1),S=y+1+c*p;f.push(v,x,S),f.push(x,U,S)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
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
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,xf=`#ifdef USE_BUMPMAP
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
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
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
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
#endif`,np=`struct PhysicalMaterial {
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
}`,ip=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fp=`#if defined( USE_POINTS_UV )
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
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
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
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,Ig=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:gf,bsdfs:mf,iridescence_fragment:Af,bumpmap_pars_fragment:xf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:yf,color_fragment:If,color_pars_fragment:Mf,color_pars_vertex:bf,color_vertex:Sf,common:Ef,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Rf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Uf,colorspace_fragment:Lf,colorspace_pars_fragment:Df,envmap_fragment:Nf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Bf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:jf,envmap_vertex:Of,fog_vertex:kf,fog_pars_vertex:qf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Wf,lightmap_pars_fragment:Xf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Kf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:$f,lights_phong_pars_fragment:tp,lights_physical_fragment:ep,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:gp,morphinstance_vertex:mp,morphcolor_vertex:Ap,morphnormal_vertex:xp,morphtarget_pars_vertex:vp,morphtarget_vertex:Cp,normal_fragment_begin:_p,normal_fragment_maps:yp,normal_pars_fragment:Ip,normal_pars_vertex:Mp,normal_vertex:bp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Vp,opaque_fragment:Rp,packing:Pp,premultiplied_alpha_fragment:Up,project_vertex:Lp,dithering_fragment:Dp,dithering_pars_fragment:Np,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Op,shadowmap_vertex:kp,shadowmask_pars_fragment:qp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:Yp,specularmap_pars_fragment:Zp,tonemapping_fragment:Kp,tonemapping_pars_fragment:jp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:$p,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:gg,linedashed_frag:mg,meshbasic_vert:Ag,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:Cg,meshmatcap_vert:_g,meshmatcap_frag:yg,meshnormal_vert:Ig,meshnormal_frag:Mg,meshphong_vert:bg,meshphong_frag:Sg,meshphysical_vert:Eg,meshphysical_frag:wg,meshtoon_vert:Tg,meshtoon_frag:Vg,points_vert:Rg,points_frag:Pg,shadow_vert:Ug,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},ut={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},fn={basic:{uniforms:Re([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Re([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Re([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Re([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Re([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Re([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Re([ut.points,ut.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Re([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Re([ut.common,ut.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Re([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Re([ut.sprite,ut.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Re([ut.common,ut.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Re([ut.lights,ut.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};fn.physical={uniforms:Re([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var xr={r:0,b:0,g:0},ai=new on,Fg=new Zt;function Bg(i,t,e,n,s,r,a){let o=new Mt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function A(y){let v=!1,x=m(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),v=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,v){let x=m(v);x&&(x.isCubeTexture||x.mapping===la)?(h===void 0&&(h=new zt(new He(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Zi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(v.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(ai)),h.material.toneMapped=Yt.getTransfer(x.colorSpace)!==se,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zt(new ln(2,2),new xe({name:"BackgroundMaterial",uniforms:Zi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(xr,Qh(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:A,addToRenderList:g}}function zg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,V,G,z,R){let H=!1,F=u(z,G,V);r!==F&&(r=F,c(r.object)),H=f(_,z,G,R),H&&m(_,z,G,R),R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,x(_,V,G,z),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,V,G){let z=G.wireframe===!0,R=n[_.id];R===void 0&&(R={},n[_.id]=R);let H=R[V.id];H===void 0&&(H={},R[V.id]=H);let F=H[z];return F===void 0&&(F=d(l()),H[z]=F),F}function d(_){let V=[],G=[],z=[];for(let R=0;R<e;R++)V[R]=0,G[R]=0,z[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,V,G,z){let R=r.attributes,H=V.attributes,F=0,K=G.getAttributes();for(let O in K)if(K[O].location>=0){let st=R[O],ft=H[O];if(ft===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),st===void 0||st.attribute!==ft||ft&&st.data!==ft.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function m(_,V,G,z){let R={},H=V.attributes,F=0,K=G.getAttributes();for(let O in K)if(K[O].location>=0){let st=H[O];st===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(st=_.instanceColor));let ft={};ft.attribute=st,st&&st.data&&(ft.data=st.data),R[O]=ft,F++}r.attributes=R,r.attributesNum=F,r.index=z}function A(){let _=r.newAttributes;for(let V=0,G=_.length;V<G;V++)_[V]=0}function g(_){p(_,0)}function p(_,V){let G=r.newAttributes,z=r.enabledAttributes,R=r.attributeDivisors;G[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),R[_]!==V&&(i.vertexAttribDivisor(_,V),R[_]=V)}function y(){let _=r.newAttributes,V=r.enabledAttributes;for(let G=0,z=V.length;G<z;G++)V[G]!==_[G]&&(i.disableVertexAttribArray(G),V[G]=0)}function v(_,V,G,z,R,H,F){F===!0?i.vertexAttribIPointer(_,V,G,R,H):i.vertexAttribPointer(_,V,G,z,R,H)}function x(_,V,G,z){A();let R=z.attributes,H=G.getAttributes(),F=V.defaultAttributeValues;for(let K in H){let O=H[K];if(O.location>=0){let tt=R[K];if(tt===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(tt=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(tt=_.instanceColor)),tt!==void 0){let st=tt.normalized,ft=tt.itemSize,Pt=t.get(tt);if(Pt===void 0)continue;let Xt=Pt.buffer,X=Pt.type,nt=Pt.bytesPerElement,xt=X===i.INT||X===i.UNSIGNED_INT||tt.gpuType===Kl;if(tt.isInterleavedBufferAttribute){let rt=tt.data,Rt=rt.stride,Ft=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<O.locationSize;Dt++)p(O.location+Dt,rt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Dt=0;Dt<O.locationSize;Dt++)g(O.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Dt=0;Dt<O.locationSize;Dt++)v(O.location+Dt,ft/O.locationSize,X,st,Rt*nt,(Ft+ft/O.locationSize*Dt)*nt,xt)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<O.locationSize;rt++)p(O.location+rt,tt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<O.locationSize;rt++)g(O.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let rt=0;rt<O.locationSize;rt++)v(O.location+rt,ft/O.locationSize,X,st,ft*nt,ft/O.locationSize*rt*nt,xt)}}else if(F!==void 0){let st=F[K];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(O.location,st);break;case 3:i.vertexAttrib3fv(O.location,st);break;case 4:i.vertexAttrib4fv(O.location,st);break;default:i.vertexAttrib1fv(O.location,st)}}}}y()}function U(){P();for(let _ in n){let V=n[_];for(let G in V){let z=V[G];for(let R in z)h(z[R].object),delete z[R];delete V[G]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;let V=n[_.id];for(let G in V){let z=V[G];for(let R in z)h(z[R].object),delete z[R];delete V[G]}delete n[_.id]}function w(_){for(let V in n){let G=n[V];if(G[_.id]===void 0)continue;let z=G[_.id];for(let R in z)h(z[R].object),delete z[R];delete G[_.id]}}function P(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:g,disableUnusedAttributes:y}}function Og(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let P=w===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Pn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==gn&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:U,maxSamples:S}}function qg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new wn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,v=y*4,x=p.clippingState||null;l.value=x,x=h(m,d,v,f);for(let U=0;U!==v;++U)x[U]=e[U];p.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let p=f+A*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,x=f;v!==A;++v,x+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function Hg(i){let t=new WeakMap;function e(a,o){return o===Mo?a.mapping=Gi:o===bo&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mo||o===bo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new rl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ki=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fi=4,$c=[.125,.215,.35,.446,.526,.582],ui=20,io=new Ki,th=new Mt,so=null,ro=0,ao=0,oo=!1,li=(1+Math.sqrt(5))/2,Di=1/li,eh=[new T(-li,Di,0),new T(li,Di,0),new T(-Di,0,li),new T(Di,0,li),new T(0,li,-Di),new T(0,li,Di),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Gr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(so,ro,ao),this._renderer.xr.enabled=oo,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:un,format:rn,colorSpace:ss,depthBuffer:!1},s=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gg(r)),this._blurMaterial=Wg(r,t,e)}return s}_compileMaterial(t){let e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,s){let o=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(th),h.toneMapping=Xn,h.autoClear=!1;let f=new Kn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new zt(new He,f),A=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,A=!0):(f.color.copy(th),A=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;vr(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eh[(s-r-1)%eh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):ui;g>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ui}`);let p=[],y=0;for(let w=0;w<ui;++w){let P=w/A,M=Math.exp(-P*P/2);p.push(M),w===0?y+=M:w<g&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let x=this._sizeLods[s],U=3*x*(s>v-Fi?s-v+Fi:0),S=4*(this._cubeSize-x);vr(e,U,S,3*x,2*x),l.setRenderTarget(e),l.render(u,io)}};function Gg(i){let t=[],e=[],n=[],s=i,r=i-Fi+1+$c.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Fi?l=$c[a-i+Fi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,A=3,g=2,p=1,y=new Float32Array(A*m*f),v=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,P=S>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];y.set(M,A*m*S),v.set(d,g*m*S);let _=[S,S,S,S,S,S];x.set(_,p*m*S)}let U=new oe;U.setAttribute("position",new de(y,A)),U.setAttribute("uv",new de(v,g)),U.setAttribute("faceIndex",new de(x,p)),t.push(U),s>Fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nh(i,t,e){let n=new Le(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wg(i,t,e){let n=new Float32Array(ui),s=new T(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ic(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ih(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function sh(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function Xg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Mo||l===bo,h=l===Gi||l===Wi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Gr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Gr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let A=f[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,A=0;if(f!==null){let y=f.array;A=f.version;for(let v=0,x=y.length;v<x;v+=3){let U=y[v+0],S=y[v+1],w=y[v+2];d.push(U,S,S,w,w,U)}}else if(m!==void 0){let y=m.array;A=m.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let U=v+0,S=v+1,w=v+2;d.push(U,S,S,w,w,U)}}else return;let g=new(jh(d)?kr:Or)(d,1);g.version=A;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Kg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,A,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*A[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jg(i,t,e){let n=new WeakMap,s=new Ae;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),A===!0&&(v=3);let x=o.attributes.position.count*v,U=1;x>t.maxTextureSize&&(U=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*U*4*u),w=new Br(S,x,U,u);w.type=gn,w.needsUpdate=!0;let P=v*4;for(let _=0;_<u;_++){let V=g[_],G=p[_],z=y[_],R=x*U*4*_;for(let H=0;H<V.count;H++){let F=H*P;f===!0&&(s.fromBufferAttribute(V,H),S[R+F+0]=s.x,S[R+F+1]=s.y,S[R+F+2]=s.z,S[R+F+3]=0),m===!0&&(s.fromBufferAttribute(G,H),S[R+F+4]=s.x,S[R+F+5]=s.y,S[R+F+6]=s.z,S[R+F+7]=0),A===!0&&(s.fromBufferAttribute(z,H),S[R+F+8]=s.x,S[R+F+9]=s.y,S[R+F+10]=s.z,S[R+F+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new J(x,U)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let A=0;A<c.length;A++)f+=c[A];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Wr=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,h=zi){if(h!==zi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=pi),n===void 0&&h===Yi&&(n=Xi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},tu=new Ue,rh=new Wr(1,1),eu=new Br,nu=new il,iu=new Hr,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function as(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ah[s];if(r===void 0&&(r=new Float32Array(s),ah[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),ye(e,n)}}function sm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;ch.set(n),i.uniformMatrix3fv(this.addr,!1,ch),ye(e,n)}}function rm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;lh.set(n),i.uniformMatrix4fv(this.addr,!1,lh),ye(e,n)}}function am(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rh.compareFunction=Kh,r=rh):r=tu,e.setTexture2D(t||r,s)}function gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nu,s)}function mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||iu,s)}function Am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eu,s)}function xm(i){switch(i){case 5126:return $g;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return Am}}function vm(i,t){i.uniform1fv(this.addr,t)}function Cm(i,t){let e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function _m(i,t){let e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function ym(i,t){let e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function Im(i,t){let e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mm(i,t){let e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bm(i,t){let e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sm(i,t){i.uniform1iv(this.addr,t)}function Em(i,t){i.uniform2iv(this.addr,t)}function wm(i,t){i.uniform3iv(this.addr,t)}function Tm(i,t){i.uniform4iv(this.addr,t)}function Vm(i,t){i.uniform1uiv(this.addr,t)}function Rm(i,t){i.uniform2uiv(this.addr,t)}function Pm(i,t){i.uniform3uiv(this.addr,t)}function Um(i,t){i.uniform4uiv(this.addr,t)}function Lm(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||tu,r[a])}function Dm(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nu,r[a])}function Nm(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||iu,r[a])}function Fm(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||eu,r[a])}function Bm(i){switch(i){case 5126:return vm;case 35664:return Cm;case 35665:return _m;case 35666:return ym;case 35674:return Im;case 35675:return Mm;case 35676:return bm;case 5124:case 35670:return Sm;case 35667:case 35671:return Em;case 35668:case 35672:return wm;case 35669:case 35673:return Tm;case 5125:return Vm;case 36294:return Rm;case 36295:return Pm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}var al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xm(e.type)}},ol=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bm(e.type)}},ll=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},lo=/(\w+)(\])?(\[|\.)?/g;function uh(i,t){i.seq.push(t),i.map[t.id]=t}function zm(i,t,e){let n=i.name,s=n.length;for(lo.lastIndex=0;;){let r=lo.exec(n),a=lo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uh(e,c===void 0?new al(o,i,t):new ol(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ll(o),uh(e,u)),e=u}}}var ki=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);zm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function dh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Om=37297,km=0;function qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var fh=new Ht;function Hm(i){Yt._getMatrix(fh,Yt.workingColorSpace,i);let t=`mat3( ${fh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case ca:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ph(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+qm(i.getShaderSource(t),a)}else return s}function Gm(i,t){let e=Hm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wm(i,t){let e;switch(t){case Gl:e="Linear";break;case Wl:e="Reinhard";break;case Xl:e="Cineon";break;case qs:e="ACESFilmic";break;case Yl:e="AgX";break;case Zl:e="Neutral";break;case yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Cr=new T;function Xm(){Yt.getLuminanceCoefficients(Cr);let i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function Zm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Km(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Is(i){return i!==""}function gh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(jm,Qm)}var Jm=new Map;function Qm(i,t){let e=Wt[t];if(e===void 0){let n=Jm.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cl(e)}var $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace($m,tA)}function tA(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function eA(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function nA(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iA(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function sA(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oa:t="ENVMAP_BLENDING_MULTIPLY";break;case Cd:t="ENVMAP_BLENDING_MIX";break;case _d:t="ENVMAP_BLENDING_ADD";break}return t}function rA(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function aA(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=eA(e),c=nA(e),h=iA(e),u=sA(e),d=rA(e),f=Ym(e),m=Zm(r),A=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Is).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(g=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Wm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Gm("linearToOutputTexel",e.outputColorSpace),Xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=cl(a),a=gh(a,e),a=mh(a,e),o=cl(o),o=gh(o,e),o=mh(o,e),a=Ah(a),o=Ah(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+a,x=y+p+o,U=dh(s,s.VERTEX_SHADER,v),S=dh(s,s.FRAGMENT_SHADER,x);s.attachShader(A,U),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function w(V){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(A).trim(),z=s.getShaderInfoLog(U).trim(),R=s.getShaderInfoLog(S).trim(),H=!0,F=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,U,S);else{let K=ph(s,U,"vertex"),O=ph(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+G+`
`+K+`
`+O)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||R==="")&&(F=!1);F&&(V.diagnostics={runnable:H,programLog:G,vertexShader:{log:z,prefix:g},fragmentShader:{log:R,prefix:p}})}s.deleteShader(U),s.deleteShader(S),P=new ki(s,A),M=Km(s,A)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(A,Om)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=km++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=S,this}var oA=0,hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ul(t),e.set(t,n)),n}},ul=class{constructor(t){this.id=oA++,this.code=t,this.usedTimes=0}};function lA(i,t,e,n,s,r,a){let o=new zr,l=new hl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,_,V,G,z){let R=G.fog,H=z.geometry,F=M.isMeshStandardMaterial?G.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),O=K&&K.mapping===la?K.image.height:null,tt=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=st!==void 0?st.length:0,Pt=0;H.morphAttributes.position!==void 0&&(Pt=1),H.morphAttributes.normal!==void 0&&(Pt=2),H.morphAttributes.color!==void 0&&(Pt=3);let Xt,X,nt,xt;if(tt){let ae=fn[tt];Xt=ae.vertexShader,X=ae.fragmentShader}else Xt=M.vertexShader,X=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);let rt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Ft=z.isInstancedMesh===!0,Dt=z.isBatchedMesh===!0,te=!!M.map,Q=!!M.matcap,at=!!K,E=!!M.aoMap,Tt=!!M.lightMap,et=!!M.bumpMap,_t=!!M.normalMap,lt=!!M.displacementMap,Ut=!!M.emissiveMap,vt=!!M.metalnessMap,b=!!M.roughnessMap,C=M.anisotropy>0,B=M.clearcoat>0,Y=M.dispersion>0,$=M.iridescence>0,Z=M.sheen>0,bt=M.transmission>0,dt=C&&!!M.anisotropyMap,Ct=B&&!!M.clearcoatMap,Jt=B&&!!M.clearcoatNormalMap,it=B&&!!M.clearcoatRoughnessMap,yt=$&&!!M.iridescenceMap,Lt=$&&!!M.iridescenceThicknessMap,Nt=Z&&!!M.sheenColorMap,It=Z&&!!M.sheenRoughnessMap,$t=!!M.specularMap,Gt=!!M.specularColorMap,le=!!M.specularIntensityMap,L=bt&&!!M.transmissionMap,pt=bt&&!!M.thicknessMap,W=!!M.gradientMap,j=!!M.alphaMap,At=M.alphaTest>0,gt=!!M.alphaHash,kt=!!M.extensions,me=Xn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(me=i.toneMapping);let Se={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Xt,fragmentShader:X,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&z._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&z.instanceColor!==null,instancingMorph:Ft&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ss,alphaToCoverage:!!M.alphaToCoverage,map:te,matcap:Q,envMap:at,envMapMode:at&&K.mapping,envMapCubeUVHeight:O,aoMap:E,lightMap:Tt,bumpMap:et,normalMap:_t,displacementMap:d&&lt,emissiveMap:Ut,normalMapObjectSpace:_t&&M.normalMapType===Sd,normalMapTangentSpace:_t&&M.normalMapType===nc,metalnessMap:vt,roughnessMap:b,anisotropy:C,anisotropyMap:dt,clearcoat:B,clearcoatMap:Ct,clearcoatNormalMap:Jt,clearcoatRoughnessMap:it,dispersion:Y,iridescence:$,iridescenceMap:yt,iridescenceThicknessMap:Lt,sheen:Z,sheenColorMap:Nt,sheenRoughnessMap:It,specularMap:$t,specularColorMap:Gt,specularIntensityMap:le,transmission:bt,transmissionMap:L,thicknessMap:pt,gradientMap:W,opaque:M.transparent===!1&&M.blending===Wn&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:At,alphaHash:gt,combine:M.combine,mapUv:te&&A(M.map.channel),aoMapUv:E&&A(M.aoMap.channel),lightMapUv:Tt&&A(M.lightMap.channel),bumpMapUv:et&&A(M.bumpMap.channel),normalMapUv:_t&&A(M.normalMap.channel),displacementMapUv:lt&&A(M.displacementMap.channel),emissiveMapUv:Ut&&A(M.emissiveMap.channel),metalnessMapUv:vt&&A(M.metalnessMap.channel),roughnessMapUv:b&&A(M.roughnessMap.channel),anisotropyMapUv:dt&&A(M.anisotropyMap.channel),clearcoatMapUv:Ct&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&A(M.sheenRoughnessMap.channel),specularMapUv:$t&&A(M.specularMap.channel),specularColorMapUv:Gt&&A(M.specularColorMap.channel),specularIntensityMapUv:le&&A(M.specularIntensityMap.channel),transmissionMapUv:L&&A(M.transmissionMap.channel),thicknessMapUv:pt&&A(M.thicknessMap.channel),alphaMapUv:j&&A(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_t||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(te||j),fog:!!R,useFog:M.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Pt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===se,decodeVideoTextureEmissive:Ut&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tn,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&M.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let V in M.defines)_.push(V),_.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(y(_,M),v(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function v(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let _=m[M.type],V;if(_){let G=fn[_];V=Jn.clone(G.uniforms)}else V=M.uniforms;return V}function U(M,_){let V;for(let G=0,z=h.length;G<z;G++){let R=h[G];if(R.cacheKey===_){V=R,++V.usedTimes;break}}return V===void 0&&(V=new aA(i,_,M,r),h.push(V)),V}function S(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:P}}function cA(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ch(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,A,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=A,p.group=g),t++,p}function o(u,d,f,m,A,g){let p=a(u,d,f,m,A,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,A,g){let p=a(u,d,f,m,A,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||hA),n.length>1&&n.sort(d||vh),s.length>1&&s.sort(d||vh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function uA(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ch,i.set(n,[a])):s>=r.length?(a=new Ch,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function dA(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Mt};break;case"SpotLight":e={position:new T,direction:new T,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function fA(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var pA=0;function gA(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mA(i){let t=new dA,e=fA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new Zt,a=new Zt;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,A=0,g=0,p=0,y=0,v=0,x=0,U=0,S=0,w=0;c.sort(gA);for(let M=0,_=c.length;M<_;M++){let V=c[M],G=V.color,z=V.intensity,R=V.distance,H=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=G.r*z,u+=G.g*z,d+=G.b*z;else if(V.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(V.sh.coefficients[F],z);w++}else if(V.isDirectionalLight){let F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let K=V.shadow,O=e.get(V);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=V.shadow.matrix,y++}n.directional[f]=F,f++}else if(V.isSpotLight){let F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(G).multiplyScalar(z),F.distance=R,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,n.spot[A]=F;let K=V.shadow;if(V.map&&(n.spotLightMap[U]=V.map,U++,K.updateMatrices(V),V.castShadow&&S++),n.spotLightMatrix[A]=K.matrix,V.castShadow){let O=e.get(V);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.spotShadow[A]=O,n.spotShadowMap[A]=H,x++}A++}else if(V.isRectAreaLight){let F=t.get(V);F.color.copy(G).multiplyScalar(z),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),n.rectArea[g]=F,g++}else if(V.isPointLight){let F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){let K=V.shadow,O=e.get(V);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=V.shadow.matrix,v++}n.point[m]=F,m++}else if(V.isHemisphereLight){let F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(z),F.groundColor.copy(V.groundColor).multiplyScalar(z),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==A||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==U||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+U-S,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,P.directionalLength=f,P.pointLength=m,P.spotLength=A,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=U,P.numLightProbes=w,n.version=pA++)}function l(c,h){let u=0,d=0,f=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),A++}}}return{setup:o,setupView:l,state:n}}function _h(i){let t=new mA(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function AA(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new _h(i),t.set(s,[o])):r>=a.length?(o=new _h(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var dl=class extends qe{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends qe{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
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
}`;function CA(i,t,e){let n=new Rs,s=new J,r=new J,a=new Ae,o=new dl({depthPacking:bd}),l=new fl,c={},h=e.maxTextureSize,u={[An]:Ve,[Ve]:An,[Tn]:Tn},d=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:xA,fragmentShader:vA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new oe;m.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new zt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(S,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),G=i.state;G.setBlending(mn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let z=p!==En&&this.type===En,R=p===En&&this.type!==En;for(let H=0,F=S.length;H<F;H++){let K=S[H],O=K.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let tt=O.getFrameExtents();if(s.multiply(tt),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,O.mapSize.y=r.y)),O.map===null||z===!0||R===!0){let ft=this.type!==En?{minFilter:ke,magFilter:ke}:{};O.map!==null&&O.map.dispose(),O.map=new Le(s.x,s.y,ft),O.map.texture.name=K.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let st=O.getViewportCount();for(let ft=0;ft<st;ft++){let Pt=O.getViewport(ft);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),G.viewport(a),O.updateMatrices(K,ft),n=O.getFrustum(),x(w,P,O.camera,K,this.type)}O.isPointLightShadow!==!0&&this.type===En&&y(O,P),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,_,V)};function y(S,w){let P=t.update(A);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Le(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,A,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,P,f,A,null)}function v(S,w,P,M){let _=null,V=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)_=V;else if(_=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let G=_.uuid,z=w.uuid,R=c[G];R===void 0&&(R={},c[G]=R);let H=R[z];H===void 0&&(H=_.clone(),R[z]=H,w.addEventListener("dispose",U)),_=H}if(_.visible=w.visible,_.wireframe=w.wireframe,M===En?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let G=i.properties.get(_);G.light=P}return _}function x(S,w,P,M,_){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===En)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let z=t.update(S),R=S.material;if(Array.isArray(R)){let H=z.groups;for(let F=0,K=H.length;F<K;F++){let O=H[F],tt=R[O.materialIndex];if(tt&&tt.visible){let st=v(S,tt,M,_);S.onBeforeShadow(i,S,w,P,z,st,O),i.renderBufferDirect(P,null,z,st,S,O),S.onAfterShadow(i,S,w,P,z,st,O)}}}else if(R.visible){let H=v(S,R,M,_);S.onBeforeShadow(i,S,w,P,z,H,null),i.renderBufferDirect(P,null,z,H,S,null),S.onAfterShadow(i,S,w,P,z,H,null)}}let G=S.children;for(let z=0,R=G.length;z<R;z++)x(G[z],w,P,M,_)}function U(S){S.target.removeEventListener("dispose",U);for(let P in c){let M=c[P],_=S.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var _A={[Ao]:xo,[vo]:yo,[Co]:Io,[Hi]:_o,[xo]:Ao,[yo]:vo,[Io]:Co,[_o]:Hi};function yA(i,t){function e(){let L=!1,pt=new Ae,W=null,j=new Ae(0,0,0,0);return{setMask:function(At){W!==At&&!L&&(i.colorMask(At,At,At,At),W=At)},setLocked:function(At){L=At},setClear:function(At,gt,kt,me,Se){Se===!0&&(At*=me,gt*=me,kt*=me),pt.set(At,gt,kt,me),j.equals(pt)===!1&&(i.clearColor(At,gt,kt,me),j.copy(pt))},reset:function(){L=!1,W=null,j.set(-1,0,0,0)}}}function n(){let L=!1,pt=!1,W=null,j=null,At=null;return{setReversed:function(gt){if(pt!==gt){let kt=t.get("EXT_clip_control");pt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let me=At;At=null,this.setClear(me)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?rt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(gt){W!==gt&&!L&&(i.depthMask(gt),W=gt)},setFunc:function(gt){if(pt&&(gt=_A[gt]),j!==gt){switch(gt){case Ao:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case _o:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=gt}},setLocked:function(gt){L=gt},setClear:function(gt){At!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),At=gt)},reset:function(){L=!1,W=null,j=null,At=null,pt=!1}}}function s(){let L=!1,pt=null,W=null,j=null,At=null,gt=null,kt=null,me=null,Se=null;return{setTest:function(ae){L||(ae?rt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(ae){pt!==ae&&!L&&(i.stencilMask(ae),pt=ae)},setFunc:function(ae,$e,vn){(W!==ae||j!==$e||At!==vn)&&(i.stencilFunc(ae,$e,vn),W=ae,j=$e,At=vn)},setOp:function(ae,$e,vn){(gt!==ae||kt!==$e||me!==vn)&&(i.stencilOp(ae,$e,vn),gt=ae,kt=$e,me=vn)},setLocked:function(ae){L=ae},setClear:function(ae){Se!==ae&&(i.clearStencil(ae),Se=ae)},reset:function(){L=!1,pt=null,W=null,j=null,At=null,gt=null,kt=null,me=null,Se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,y=null,v=null,x=null,U=null,S=null,w=new Mt(0,0,0),P=0,M=!1,_=null,V=null,G=null,z=null,R=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,K=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=K>=1):O.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=K>=2);let tt=null,st={},ft=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Xt=new Ae().fromArray(ft),X=new Ae().fromArray(Pt);function nt(L,pt,W,j){let At=new Uint8Array(4),gt=i.createTexture();i.bindTexture(L,gt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<W;kt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(pt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return gt}let xt={};xt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Hi),et(!1),_t(Mc),rt(i.CULL_FACE),E(mn);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ft(L,pt){return u[L]!==pt?(i.bindFramebuffer(L,pt),u[L]=pt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Dt(L,pt){let W=f,j=!1;if(L){W=d.get(pt),W===void 0&&(W=[],d.set(pt,W));let At=L.textures;if(W.length!==At.length||W[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,kt=At.length;gt<kt;gt++)W[gt]=i.COLOR_ATTACHMENT0+gt;W.length=At.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function te(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let Q={[ci]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};Q[rd]=i.MIN,Q[ad]=i.MAX;let at={[od]:i.ZERO,[ld]:i.ONE,[cd]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[gd]:i.SRC_ALPHA_SATURATE,[fd]:i.DST_COLOR,[ud]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[mo]:i.ONE_MINUS_SRC_ALPHA,[pd]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[vd]:i.ONE_MINUS_CONSTANT_ALPHA};function E(L,pt,W,j,At,gt,kt,me,Se,ae){if(L===mn){A===!0&&(Rt(i.BLEND),A=!1);return}if(A===!1&&(rt(i.BLEND),A=!0),L!==nd){if(L!==g||ae!==M){if((p!==ci||x!==ci)&&(i.blendEquation(i.FUNC_ADD),p=ci,x=ci),ae)switch(L){case Wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,v=null,U=null,S=null,w.set(0,0,0),P=0,g=L,M=ae}return}At=At||pt,gt=gt||W,kt=kt||j,(pt!==p||At!==x)&&(i.blendEquationSeparate(Q[pt],Q[At]),p=pt,x=At),(W!==y||j!==v||gt!==U||kt!==S)&&(i.blendFuncSeparate(at[W],at[j],at[gt],at[kt]),y=W,v=j,U=gt,S=kt),(me.equals(w)===!1||Se!==P)&&(i.blendColor(me.r,me.g,me.b,Se),w.copy(me),P=Se),g=L,M=!1}function Tt(L,pt){L.side===Tn?Rt(i.CULL_FACE):rt(i.CULL_FACE);let W=L.side===Ve;pt&&(W=!W),et(W),L.blending===Wn&&L.transparent===!1?E(mn):E(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(L){_!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),_=L)}function _t(L){L!==$u?(rt(i.CULL_FACE),L!==V&&(L===Mc?i.cullFace(i.BACK):L===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),V=L}function lt(L){L!==G&&(F&&i.lineWidth(L),G=L)}function Ut(L,pt,W){L?(rt(i.POLYGON_OFFSET_FILL),(z!==pt||R!==W)&&(i.polygonOffset(pt,W),z=pt,R=W)):Rt(i.POLYGON_OFFSET_FILL)}function vt(L){L?rt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function b(L){L===void 0&&(L=i.TEXTURE0+H-1),tt!==L&&(i.activeTexture(L),tt=L)}function C(L,pt,W){W===void 0&&(tt===null?W=i.TEXTURE0+H-1:W=tt);let j=st[W];j===void 0&&(j={type:void 0,texture:void 0},st[W]=j),(j.type!==L||j.texture!==pt)&&(tt!==W&&(i.activeTexture(W),tt=W),i.bindTexture(L,pt||xt[L]),j.type=L,j.texture=pt)}function B(){let L=st[tt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){Xt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Xt.copy(L))}function It(L){X.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function $t(L,pt){let W=c.get(pt);W===void 0&&(W=new WeakMap,c.set(pt,W));let j=W.get(L);j===void 0&&(j=i.getUniformBlockIndex(pt,L.name),W.set(L,j))}function Gt(L,pt){let j=c.get(pt).get(L);l.get(pt)!==j&&(i.uniformBlockBinding(pt,j,L.__bindingPointIndex),l.set(pt,j))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,st={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,y=null,v=null,x=null,U=null,S=null,w=new Mt(0,0,0),P=0,M=!1,_=null,V=null,G=null,z=null,R=null,Xt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Rt,bindFramebuffer:Ft,drawBuffers:Dt,useProgram:te,setBlending:E,setMaterial:Tt,setFlipSided:et,setCullFace:_t,setLineWidth:lt,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:b,bindTexture:C,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:yt,texImage3D:Lt,updateUBOMapping:$t,uniformBlockBinding:Gt,texStorage2D:Jt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:bt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Ct,scissor:Nt,viewport:It,reset:le}}function yh(i,t,e,n){let s=IA(n);switch(e){case Hh:return i*t;case Wh:return i*t;case Xh:return i*t*2;case Ql:return i*t/s.components*s.byteLength;case $l:return i*t/s.components*s.byteLength;case Yh:return i*t*2/s.components*s.byteLength;case tc:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case ec:return i*t*4/s.components*s.byteLength;case Vr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:case Vo:return Math.max(i,16)*Math.max(t,8)/4;case Eo:case To:return Math.max(i,8)*Math.max(t,8)/2;case Ro:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lr:case Zo:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zh:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function IA(i){switch(i){case Pn:case Oh:return{byteLength:1,components:1};case ws:case kh:case un:return{byteLength:2,components:1};case jl:case Jl:return{byteLength:2,components:4};case pi:case Kl:case gn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function MA(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,C){return f?new OffscreenCanvas(b,C):Ts("canvas")}function A(b,C,B){let Y=1,$=vt(b);if(($.width>B||$.height>B)&&(Y=B/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let Z=Math.floor(Y*$.width),bt=Math.floor(Y*$.height);u===void 0&&(u=m(Z,bt));let dt=C?m(Z,bt):u;return dt.width=Z,dt.height=bt,dt.getContext("2d").drawImage(b,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+bt+")."),dt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(b,C,B,Y,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=C;if(C===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),C===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),C===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),C===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),C===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),C===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),C===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),C===i.RGBA){let bt=$?ca:Yt.getTransfer(Y);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=bt===se?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(b,C){let B;return b?C===null||C===pi||C===Xi?B=i.DEPTH24_STENCIL8:C===gn?B=i.DEPTH32F_STENCIL8:C===ws&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===pi||C===Xi?B=i.DEPTH_COMPONENT24:C===gn?B=i.DEPTH_COMPONENT32F:C===ws&&(B=i.DEPTH_COMPONENT16),B}function U(b,C){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==ke&&b.minFilter!==pn?Math.log2(Math.max(C.width,C.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?C.mipmaps.length:1}function S(b){let C=b.target;C.removeEventListener("dispose",S),P(C),C.isVideoTexture&&h.delete(C)}function w(b){let C=b.target;C.removeEventListener("dispose",w),_(C)}function P(b){let C=n.get(b);if(C.__webglInit===void 0)return;let B=b.source,Y=d.get(B);if(Y){let $=Y[C.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(b),Object.keys(Y).length===0&&d.delete(B)}n.remove(b)}function M(b){let C=n.get(b);i.deleteTexture(C.__webglTexture);let B=b.source,Y=d.get(B);delete Y[C.__cacheKey],a.memory.textures--}function _(b){let C=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let $=0;$<C.__webglFramebuffer[Y].length;$++)i.deleteFramebuffer(C.__webglFramebuffer[Y][$]);else i.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)i.deleteFramebuffer(C.__webglFramebuffer[Y]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let B=b.textures;for(let Y=0,$=B.length;Y<$;Y++){let Z=n.get(B[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(b)}let V=0;function G(){V=0}function z(){let b=V;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),V+=1,b}function R(b){let C=[];return C.push(b.wrapS),C.push(b.wrapT),C.push(b.wrapR||0),C.push(b.magFilter),C.push(b.minFilter),C.push(b.anisotropy),C.push(b.internalFormat),C.push(b.format),C.push(b.type),C.push(b.generateMipmaps),C.push(b.premultiplyAlpha),C.push(b.flipY),C.push(b.unpackAlignment),C.push(b.colorSpace),C.join()}function H(b,C){let B=n.get(b);if(b.isVideoTexture&&lt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,b,C);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+C)}function F(b,C){let B=n.get(b);if(b.version>0&&B.__version!==b.version){X(B,b,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+C)}function K(b,C){let B=n.get(b);if(b.version>0&&B.__version!==b.version){X(B,b,C);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+C)}function O(b,C){let B=n.get(b);if(b.version>0&&B.__version!==b.version){nt(B,b,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+C)}let tt={[Yn]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},st={[ke]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},ft={[Ed]:i.NEVER,[Ud]:i.ALWAYS,[wd]:i.LESS,[Kh]:i.LEQUAL,[Td]:i.EQUAL,[Pd]:i.GEQUAL,[Vd]:i.GREATER,[Rd]:i.NOTEQUAL};function Pt(b,C){if(C.type===gn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===pn||C.magFilter===Ua||C.magFilter===tr||C.magFilter===fi||C.minFilter===pn||C.minFilter===Ua||C.minFilter===tr||C.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,tt[C.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,tt[C.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,tt[C.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,st[C.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,st[C.minFilter]),C.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ft[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===ke||C.minFilter!==tr&&C.minFilter!==fi||C.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Xt(b,C){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,C.addEventListener("dispose",S));let Y=C.source,$=d.get(Y);$===void 0&&($={},d.set(Y,$));let Z=R(C);if(Z!==b.__cacheKey){$[Z]===void 0&&($[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[Z].usedTimes++;let bt=$[b.__cacheKey];bt!==void 0&&($[b.__cacheKey].usedTimes--,bt.usedTimes===0&&M(C)),b.__cacheKey=Z,b.__webglTexture=$[Z].texture}return B}function X(b,C,B){let Y=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=i.TEXTURE_3D);let $=Xt(b,C),Z=C.source;e.bindTexture(Y,b.__webglTexture,i.TEXTURE0+B);let bt=n.get(Z);if(Z.version!==bt.__version||$===!0){e.activeTexture(i.TEXTURE0+B);let dt=Yt.getPrimaries(Yt.workingColorSpace),Ct=C.colorSpace===Gn?null:Yt.getPrimaries(C.colorSpace),Jt=C.colorSpace===Gn||dt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let it=A(C.image,!1,s.maxTextureSize);it=Ut(C,it);let yt=r.convert(C.format,C.colorSpace),Lt=r.convert(C.type),Nt=v(C.internalFormat,yt,Lt,C.colorSpace,C.isVideoTexture);Pt(Y,C);let It,$t=C.mipmaps,Gt=C.isVideoTexture!==!0,le=bt.__version===void 0||$===!0,L=Z.dataReady,pt=U(C,it);if(C.isDepthTexture)Nt=x(C.format===Yi,C.type),le&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Nt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Nt,it.width,it.height,0,yt,Lt,null));else if(C.isDataTexture)if($t.length>0){Gt&&le&&e.texStorage2D(i.TEXTURE_2D,pt,Nt,$t[0].width,$t[0].height);for(let W=0,j=$t.length;W<j;W++)It=$t[W],Gt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,yt,Lt,It.data):e.texImage2D(i.TEXTURE_2D,W,Nt,It.width,It.height,0,yt,Lt,It.data);C.generateMipmaps=!1}else Gt?(le&&e.texStorage2D(i.TEXTURE_2D,pt,Nt,it.width,it.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,yt,Lt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,it.width,it.height,0,yt,Lt,it.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Gt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Nt,$t[0].width,$t[0].height,it.depth);for(let W=0,j=$t.length;W<j;W++)if(It=$t[W],C.format!==rn)if(yt!==null)if(Gt){if(L)if(C.layerUpdates.size>0){let At=yh(It.width,It.height,C.format,C.type);for(let gt of C.layerUpdates){let kt=It.data.subarray(gt*At/It.data.BYTES_PER_ELEMENT,(gt+1)*At/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,gt,It.width,It.height,1,yt,kt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,it.depth,yt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Nt,It.width,It.height,it.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,It.width,It.height,it.depth,yt,Lt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Nt,It.width,It.height,it.depth,0,yt,Lt,It.data)}else{Gt&&le&&e.texStorage2D(i.TEXTURE_2D,pt,Nt,$t[0].width,$t[0].height);for(let W=0,j=$t.length;W<j;W++)It=$t[W],C.format!==rn?yt!==null?Gt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,yt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Nt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,It.width,It.height,yt,Lt,It.data):e.texImage2D(i.TEXTURE_2D,W,Nt,It.width,It.height,0,yt,Lt,It.data)}else if(C.isDataArrayTexture)if(Gt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Nt,it.width,it.height,it.depth),L)if(C.layerUpdates.size>0){let W=yh(it.width,it.height,C.format,C.type);for(let j of C.layerUpdates){let At=it.data.subarray(j*W/it.data.BYTES_PER_ELEMENT,(j+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,yt,Lt,At)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Lt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,it.width,it.height,it.depth,0,yt,Lt,it.data);else if(C.isData3DTexture)Gt?(le&&e.texStorage3D(i.TEXTURE_3D,pt,Nt,it.width,it.height,it.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Lt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,it.width,it.height,it.depth,0,yt,Lt,it.data);else if(C.isFramebufferTexture){if(le)if(Gt)e.texStorage2D(i.TEXTURE_2D,pt,Nt,it.width,it.height);else{let W=it.width,j=it.height;for(let At=0;At<pt;At++)e.texImage2D(i.TEXTURE_2D,At,Nt,W,j,0,yt,Lt,null),W>>=1,j>>=1}}else if($t.length>0){if(Gt&&le){let W=vt($t[0]);e.texStorage2D(i.TEXTURE_2D,pt,Nt,W.width,W.height)}for(let W=0,j=$t.length;W<j;W++)It=$t[W],Gt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt,Lt,It):e.texImage2D(i.TEXTURE_2D,W,Nt,yt,Lt,It);C.generateMipmaps=!1}else if(Gt){if(le){let W=vt(it);e.texStorage2D(i.TEXTURE_2D,pt,Nt,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Lt,it)}else e.texImage2D(i.TEXTURE_2D,0,Nt,yt,Lt,it);g(C)&&p(Y),bt.__version=Z.version,C.onUpdate&&C.onUpdate(C)}b.__version=C.version}function nt(b,C,B){if(C.image.length!==6)return;let Y=Xt(b,C),$=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);let Z=n.get($);if($.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);let bt=Yt.getPrimaries(Yt.workingColorSpace),dt=C.colorSpace===Gn?null:Yt.getPrimaries(C.colorSpace),Ct=C.colorSpace===Gn||bt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Jt=C.isCompressedTexture||C.image[0].isCompressedTexture,it=C.image[0]&&C.image[0].isDataTexture,yt=[];for(let j=0;j<6;j++)!Jt&&!it?yt[j]=A(C.image[j],!0,s.maxCubemapSize):yt[j]=it?C.image[j].image:C.image[j],yt[j]=Ut(C,yt[j]);let Lt=yt[0],Nt=r.convert(C.format,C.colorSpace),It=r.convert(C.type),$t=v(C.internalFormat,Nt,It,C.colorSpace),Gt=C.isVideoTexture!==!0,le=Z.__version===void 0||Y===!0,L=$.dataReady,pt=U(C,Lt);Pt(i.TEXTURE_CUBE_MAP,C);let W;if(Jt){Gt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,$t,Lt.width,Lt.height);for(let j=0;j<6;j++){W=yt[j].mipmaps;for(let At=0;At<W.length;At++){let gt=W[At];C.format!==rn?Nt!==null?Gt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,gt.width,gt.height,Nt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,$t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,0,0,gt.width,gt.height,Nt,It,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At,$t,gt.width,gt.height,0,Nt,It,gt.data)}}}else{if(W=C.mipmaps,Gt&&le){W.length>0&&pt++;let j=vt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,$t,j.width,j.height)}for(let j=0;j<6;j++)if(it){Gt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt[j].width,yt[j].height,Nt,It,yt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,yt[j].width,yt[j].height,0,Nt,It,yt[j].data);for(let At=0;At<W.length;At++){let kt=W[At].image[j].image;Gt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,kt.width,kt.height,Nt,It,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,$t,kt.width,kt.height,0,Nt,It,kt.data)}}else{Gt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Nt,It,yt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Nt,It,yt[j]);for(let At=0;At<W.length;At++){let gt=W[At];Gt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,0,0,Nt,It,gt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,At+1,$t,Nt,It,gt.image[j])}}}g(C)&&p(i.TEXTURE_CUBE_MAP),Z.__version=$.version,C.onUpdate&&C.onUpdate(C)}b.__version=C.version}function xt(b,C,B,Y,$,Z){let bt=r.convert(B.format,B.colorSpace),dt=r.convert(B.type),Ct=v(B.internalFormat,bt,dt,B.colorSpace),Jt=n.get(C),it=n.get(B);if(it.__renderTarget=C,!Jt.__hasExternalTextures){let yt=Math.max(1,C.width>>Z),Lt=Math.max(1,C.height>>Z);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,Z,Ct,yt,Lt,C.depth,0,bt,dt,null):e.texImage2D($,Z,Ct,yt,Lt,0,bt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),_t(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,$,it.__webglTexture,0,et(C)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,$,it.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(b,C,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),C.depthBuffer){let Y=C.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,Z=x(C.stencilBuffer,$),bt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=et(C);_t(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Z,C.width,C.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Z,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Z,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,b)}else{let Y=C.textures;for(let $=0;$<Y.length;$++){let Z=Y[$],bt=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),Ct=v(Z.internalFormat,bt,dt,Z.colorSpace),Jt=et(C);B&&_t(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Ct,C.width,C.height):_t(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,Ct,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(b,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(C.depthTexture);Y.__renderTarget=C,(!Y.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);let $=Y.__webglTexture,Z=et(C);if(C.depthTexture.format===zi)_t(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(C.depthTexture.format===Yi)_t(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ft(b){let C=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){let $=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),C.__depthDisposeCallback=$}C.__boundDepthTexture=Y}if(b.depthTexture&&!C.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Rt(C.__webglFramebuffer,b)}else if(B){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(C.__webglDepthbuffer[Y],b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=C.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),rt(C.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(b,C,B){let Y=n.get(b);C!==void 0&&xt(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ft(b)}function te(b){let C=b.texture,B=n.get(b),Y=n.get(C);b.addEventListener("dispose",w);let $=b.textures,Z=b.isWebGLCubeRenderTarget===!0,bt=$.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=C.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(C.mipmaps&&C.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let Ct=0;Ct<C.mipmaps.length;Ct++)B.__webglFramebuffer[dt][Ct]=i.createFramebuffer()}else B.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<C.mipmaps.length;dt++)B.__webglFramebuffer[dt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(bt)for(let dt=0,Ct=$.length;dt<Ct;dt++){let Jt=n.get($[dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&_t(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<$.length;dt++){let Ct=$[dt];B.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);let Jt=r.convert(Ct.format,Ct.colorSpace),it=r.convert(Ct.type),yt=v(Ct.internalFormat,Jt,it,Ct.colorSpace,b.isXRRenderTarget===!0),Lt=et(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,yt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,C);for(let dt=0;dt<6;dt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ct=0;Ct<C.mipmaps.length;Ct++)xt(B.__webglFramebuffer[dt][Ct],b,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct);else xt(B.__webglFramebuffer[dt],b,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(C)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let dt=0,Ct=$.length;dt<Ct;dt++){let Jt=$[dt],it=n.get(Jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Pt(i.TEXTURE_2D,Jt),xt(B.__webglFramebuffer,b,Jt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(dt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Pt(dt,C),C.mipmaps&&C.mipmaps.length>0)for(let Ct=0;Ct<C.mipmaps.length;Ct++)xt(B.__webglFramebuffer[Ct],b,C,i.COLOR_ATTACHMENT0,dt,Ct);else xt(B.__webglFramebuffer,b,C,i.COLOR_ATTACHMENT0,dt,0);g(C)&&p(dt),e.unbindTexture()}b.depthBuffer&&Ft(b)}function Q(b){let C=b.textures;for(let B=0,Y=C.length;B<Y;B++){let $=C[B];if(g($)){let Z=y(b),bt=n.get($).__webglTexture;e.bindTexture(Z,bt),p(Z),e.unbindTexture()}}}let at=[],E=[];function Tt(b){if(b.samples>0){if(_t(b)===!1){let C=b.textures,B=b.width,Y=b.height,$=i.COLOR_BUFFER_BIT,Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(b),dt=C.length>1;if(dt)for(let Ct=0;Ct<C.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ct=0;Ct<C.length;Ct++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ct]);let Jt=n.get(C[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,$,i.NEAREST),l===!0&&(at.length=0,E.length=0,at.push(i.COLOR_ATTACHMENT0+Ct),b.depthBuffer&&b.resolveDepthBuffer===!1&&(at.push(Z),E.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Ct=0;Ct<C.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ct]);let Jt=n.get(C[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let C=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function et(b){return Math.min(s.maxSamples,b.samples)}function _t(b){let C=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function lt(b){let C=a.render.frame;h.get(b)!==C&&(h.set(b,C),b.update())}function Ut(b,C){let B=b.colorSpace,Y=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==ss&&B!==Gn&&(Yt.getTransfer(B)===se?(Y!==rn||$!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),C}function vt(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=K,this.setTextureCube=O,this.rebindTextures=Dt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=_t}function bA(i,t){function e(n,s=Gn){let r,a=Yt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.BYTE;if(n===kh)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Kl)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===rn)return i.RGBA;if(n===Wh)return i.LUMINANCE;if(n===Xh)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===Yh)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===ec)return i.RGBA_INTEGER;if(n===Vr||n===Rr||n===Pr||n===Ur)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===wo||n===To||n===Vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Po||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ro||n===Po)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Do||n===No||n===Fo||n===Bo||n===zo||n===Oo||n===ko||n===qo||n===Ho||n===Go||n===Wo||n===Xo||n===Yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===Zo||n===Ko)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zh||n===jo||n===Jo||n===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var pl=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},SA={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(c,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},EA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
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

}`,gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:EA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,A=new gl,g=e.getContextAttributes(),p=null,y=null,v=[],x=[],U=new J,S=null,w=new Pe;w.viewport=new Ae;let P=new Pe;P.viewport=new Ae;let M=[w,P],_=new pl,V=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=v[X];return nt===void 0&&(nt=new Ms,v[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=v[X];return nt===void 0&&(nt=new Ms,v[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=v[X];return nt===void 0&&(nt=new Ms,v[X]=nt),nt.getHandSpace()};function z(X){let nt=x.indexOf(X.inputSource);if(nt===-1)return;let xt=v[nt];xt!==void 0&&(xt.update(X.inputSource,X.frame,c||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function R(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",H);for(let X=0;X<v.length;X++){let nt=x[X];nt!==null&&(x[X]=null,v[X].disconnect(nt))}V=null,G=null,A.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",R),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Le(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,xt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Yi:zi,xt=g.stencil?Xi:pi);let Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Le(d.textureWidth,d.textureHeight,{format:rn,type:Pn,depthTexture:new Wr(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function H(X){for(let nt=0;nt<X.removed.length;nt++){let xt=X.removed[nt],rt=x.indexOf(xt);rt>=0&&(x[rt]=null,v[rt].disconnect(xt))}for(let nt=0;nt<X.added.length;nt++){let xt=X.added[nt],rt=x.indexOf(xt);if(rt===-1){for(let Ft=0;Ft<v.length;Ft++)if(Ft>=x.length){x.push(xt),rt=Ft;break}else if(x[Ft]===null){x[Ft]=xt,rt=Ft;break}if(rt===-1)break}let Rt=v[rt];Rt&&Rt.connect(xt)}}let F=new T,K=new T;function O(X,nt,xt){F.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(xt.matrixWorld);let rt=F.distanceTo(K),Rt=nt.projectionMatrix.elements,Ft=xt.projectionMatrix.elements,Dt=Rt[14]/(Rt[10]-1),te=Rt[14]/(Rt[10]+1),Q=(Rt[9]+1)/Rt[5],at=(Rt[9]-1)/Rt[5],E=(Rt[8]-1)/Rt[0],Tt=(Ft[8]+1)/Ft[0],et=Dt*E,_t=Dt*Tt,lt=rt/(-E+Tt),Ut=lt*-E;if(nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ut),X.translateZ(lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Rt[10]===-1)X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let vt=Dt+lt,b=te+lt,C=et-Ut,B=_t+(rt-Ut),Y=Q*te/b*vt,$=at*te/b*vt;X.projectionMatrix.makePerspective(C,B,Y,$,vt,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function tt(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let nt=X.near,xt=X.far;A.texture!==null&&(A.depthNear>0&&(nt=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),_.near=P.near=w.near=nt,_.far=P.far=w.far=xt,(V!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),V=_.near,G=_.far),w.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,_.layers.mask=w.layers.mask|P.layers.mask;let rt=X.parent,Rt=_.cameras;tt(_,rt);for(let Ft=0;Ft<Rt.length;Ft++)tt(Rt[Ft],rt);Rt.length===2?O(_,w,P):_.projectionMatrix.copy(w.projectionMatrix),st(X,_,rt)};function st(X,nt,xt){xt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=tl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let ft=null;function Pt(X,nt){if(h=nt.getViewerPose(c||a),m=nt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let rt=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,rt=!0);for(let Ft=0;Ft<xt.length;Ft++){let Dt=xt[Ft],te=null;if(f!==null)te=f.getViewport(Dt);else{let at=u.getViewSubImage(d,Dt);te=at.viewport,Ft===0&&(t.setRenderTargetTextures(y,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(y))}let Q=M[Ft];Q===void 0&&(Q=new Pe,Q.layers.enable(Ft),Q.viewport=new Ae,M[Ft]=Q),Q.matrix.fromArray(Dt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Dt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),Ft===0&&(_.matrix.copy(Q.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),rt===!0&&_.cameras.push(Q)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Ft=u.getDepthInformation(xt[0]);Ft&&Ft.isValid&&Ft.texture&&A.init(t,Ft,s.renderState)}}for(let xt=0;xt<v.length;xt++){let rt=x[xt],Rt=v[xt];rt!==null&&Rt!==void 0&&Rt.update(rt,nt,c||a)}ft&&ft(X,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let Xt=new $h;Xt.setAnimationLoop(Pt),this.setAnimationLoop=function(X){ft=X},this.dispose=function(){}}},oi=new on,TA=new Zt;function VA(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ve&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ve&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(g.envMap.value=v,oi.copy(x),oi.x*=-1,oi.y*=-1,oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),g.envMapRotation.value.setFromMatrix4(TA.makeRotationFromEuler(oi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function RA(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(m(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",g));let U=v.program;n.updateUBOMapping(y,U);let S=t.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){let v=u();y.__bindingPointIndex=v;let x=i.createBuffer(),U=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,U,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],x=y.uniforms,U=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,w=x.length;S<w;S++){let P=Array.isArray(x[S])?x[S]:[x[S]];for(let M=0,_=P.length;M<_;M++){let V=P[M];if(f(V,S,M,U)===!0){let G=V.__offset,z=Array.isArray(V.value)?V.value:[V.value],R=0;for(let H=0;H<z.length;H++){let F=z[H],K=A(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,G+R,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,R),R+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,x,U){let S=y.value,w=v+"_"+x;if(U[w]===void 0)return typeof S=="number"||typeof S=="boolean"?U[w]=S:U[w]=S.clone(),!0;{let P=U[w];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return U[w]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function m(y){let v=y.uniforms,x=0,U=16;for(let w=0,P=v.length;w<P;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,V=M.length;_<V;_++){let G=M[_],z=Array.isArray(G.value)?G.value:[G.value];for(let R=0,H=z.length;R<H;R++){let F=z[R],K=A(F),O=x%U,tt=O%K.boundary,st=O+tt;x+=tt,st!==0&&U-st<K.storage&&(x+=U-st),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=K.storage}}}let S=x%U;return S>0&&(x+=U-S),y.__size=x,y.__cache={},this}function A(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Xr=class{constructor(t={}){let{canvas:e=Dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=re,this.toneMapping=Xn,this.toneMappingExposure=1;let x=this,U=!1,S=0,w=0,P=null,M=-1,_=null,V=new Ae,G=new Ae,z=null,R=new Mt(0),H=0,F=e.width,K=e.height,O=1,tt=null,st=null,ft=new Ae(0,0,F,K),Pt=new Ae(0,0,F,K),Xt=!1,X=new Rs,nt=!1,xt=!1,rt=new Zt,Rt=new Zt,Ft=new T,Dt=new Ae,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function at(){return P===null?O:1}let E=n;function Tt(I,D){return e.getContext(I,D)}try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",gt,!1),E===null){let D="webgl2";if(E=Tt(D,I),E===null)throw Tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let et,_t,lt,Ut,vt,b,C,B,Y,$,Z,bt,dt,Ct,Jt,it,yt,Lt,Nt,It,$t,Gt,le,L;function pt(){et=new Yg(E),et.init(),Gt=new bA(E,et),_t=new kg(E,et,t,Gt),lt=new yA(E,et),_t.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Ut=new jg(E),vt=new cA,b=new MA(E,et,lt,vt,_t,Gt,Ut),C=new Hg(x),B=new Xg(x),Y=new nf(E),le=new zg(E,Y),$=new Zg(E,Y,Ut,le),Z=new Qg(E,$,Y,Ut),Nt=new Jg(E,_t,b),it=new qg(vt),bt=new lA(x,C,B,et,_t,le,it),dt=new VA(x,vt),Ct=new uA,Jt=new AA(et),Lt=new Bg(x,C,B,lt,Z,f,l),yt=new CA(x,Z,_t),L=new RA(E,Ut,_t,lt),It=new Og(E,et,Ut),$t=new Kg(E,et,Ut),Ut.programs=bt.programs,x.capabilities=_t,x.extensions=et,x.properties=vt,x.renderLists=Ct,x.shadowMap=yt,x.state=lt,x.info=Ut}pt();let W=new ml(x,E);this.xr=W,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let I=et.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=et.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(I){I!==void 0&&(O=I,this.setSize(F,K,!1))},this.getSize=function(I){return I.set(F,K)},this.setSize=function(I,D,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,K=D,e.width=Math.floor(I*O),e.height=Math.floor(D*O),k===!0&&(e.style.width=I+"px",e.style.height=D+"px"),this.setViewport(0,0,I,D)},this.getDrawingBufferSize=function(I){return I.set(F*O,K*O).floor()},this.setDrawingBufferSize=function(I,D,k){F=I,K=D,O=k,e.width=Math.floor(I*k),e.height=Math.floor(D*k),this.setViewport(0,0,I,D)},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(ft)},this.setViewport=function(I,D,k,q){I.isVector4?ft.set(I.x,I.y,I.z,I.w):ft.set(I,D,k,q),lt.viewport(V.copy(ft).multiplyScalar(O).round())},this.getScissor=function(I){return I.copy(Pt)},this.setScissor=function(I,D,k,q){I.isVector4?Pt.set(I.x,I.y,I.z,I.w):Pt.set(I,D,k,q),lt.scissor(G.copy(Pt).multiplyScalar(O).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(I){lt.setScissorTest(Xt=I)},this.setOpaqueSort=function(I){tt=I},this.setTransparentSort=function(I){st=I},this.getClearColor=function(I){return I.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(I=!0,D=!0,k=!0){let q=0;if(I){let N=!1;if(P!==null){let ot=P.texture.format;N=ot===ec||ot===tc||ot===$l}if(N){let ot=P.texture.type,mt=ot===Pn||ot===pi||ot===ws||ot===Xi||ot===jl||ot===Jl,St=Lt.getClearColor(),Et=Lt.getClearAlpha(),Bt=St.r,qt=St.g,wt=St.b;mt?(m[0]=Bt,m[1]=qt,m[2]=wt,m[3]=Et,E.clearBufferuiv(E.COLOR,0,m)):(A[0]=Bt,A[1]=qt,A[2]=wt,A[3]=Et,E.clearBufferiv(E.COLOR,0,A))}else q|=E.COLOR_BUFFER_BIT}D&&(q|=E.DEPTH_BUFFER_BIT),k&&(q|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Ct.dispose(),Jt.dispose(),vt.dispose(),C.dispose(),B.dispose(),Z.dispose(),le.dispose(),L.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",mc),W.removeEventListener("sessionend",Ac),ei.stop()};function j(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let I=Ut.autoReset,D=yt.enabled,k=yt.autoUpdate,q=yt.needsUpdate,N=yt.type;pt(),Ut.autoReset=I,yt.enabled=D,yt.autoUpdate=k,yt.needsUpdate=q,yt.type=N}function gt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function kt(I){let D=I.target;D.removeEventListener("dispose",kt),me(D)}function me(I){Se(I),vt.remove(I)}function Se(I){let D=vt.get(I).programs;D!==void 0&&(D.forEach(function(k){bt.releaseProgram(k)}),I.isShaderMaterial&&bt.releaseShaderCache(I))}this.renderBufferDirect=function(I,D,k,q,N,ot){D===null&&(D=te);let mt=N.isMesh&&N.matrixWorld.determinant()<0,St=ju(I,D,k,q,N);lt.setMaterial(q,mt);let Et=k.index,Bt=1;if(q.wireframe===!0){if(Et=$.getWireframeAttribute(k),Et===void 0)return;Bt=2}let qt=k.drawRange,wt=k.attributes.position,ee=qt.start*Bt,ce=(qt.start+qt.count)*Bt;ot!==null&&(ee=Math.max(ee,ot.start*Bt),ce=Math.min(ce,(ot.start+ot.count)*Bt)),Et!==null?(ee=Math.max(ee,0),ce=Math.min(ce,Et.count)):wt!=null&&(ee=Math.max(ee,0),ce=Math.min(ce,wt.count));let he=ce-ee;if(he<0||he===1/0)return;le.setup(N,q,St,k,Et);let De,ne=It;if(Et!==null&&(De=Y.get(Et),ne=$t,ne.setIndex(De)),N.isMesh)q.wireframe===!0?(lt.setLineWidth(q.wireframeLinewidth*at()),ne.setMode(E.LINES)):ne.setMode(E.TRIANGLES);else if(N.isLine){let Vt=q.linewidth;Vt===void 0&&(Vt=1),lt.setLineWidth(Vt*at()),N.isLineSegments?ne.setMode(E.LINES):N.isLineLoop?ne.setMode(E.LINE_LOOP):ne.setMode(E.LINE_STRIP)}else N.isPoints?ne.setMode(E.POINTS):N.isSprite&&ne.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Vt=N._multiDrawStarts,Cn=N._multiDrawCounts,ie=N._multiDrawCount,tn=Et?Y.get(Et).bytesPerElement:1,_i=vt.get(q).currentProgram.getUniforms();for(let Be=0;Be<ie;Be++)_i.setValue(E,"_gl_DrawID",Be),ne.render(Vt[Be]/tn,Cn[Be])}else if(N.isInstancedMesh)ne.renderInstances(ee,he,N.count);else if(k.isInstancedBufferGeometry){let Vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Cn=Math.min(k.instanceCount,Vt);ne.renderInstances(ee,he,Cn)}else ne.render(ee,he)};function ae(I,D,k){I.transparent===!0&&I.side===Tn&&I.forceSinglePass===!1?(I.side=Ve,I.needsUpdate=!0,$s(I,D,k),I.side=An,I.needsUpdate=!0,$s(I,D,k),I.side=Tn):$s(I,D,k)}this.compile=function(I,D,k=null){k===null&&(k=I),p=Jt.get(k),p.init(D),v.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),I!==k&&I.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let q=new Set;return I.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){let St=ot[mt];ae(St,k,N),q.add(St)}else ae(ot,k,N),q.add(ot)}),v.pop(),p=null,q},this.compileAsync=function(I,D,k=null){let q=this.compile(I,D,k);return new Promise(N=>{function ot(){if(q.forEach(function(mt){vt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){N(I);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let $e=null;function vn(I){$e&&$e(I)}function mc(){ei.stop()}function Ac(){ei.start()}let ei=new $h;ei.setAnimationLoop(vn),typeof self!="undefined"&&ei.setContext(self),this.setAnimationLoop=function(I){$e=I,W.setAnimationLoop(I),I===null?ei.stop():ei.start()},W.addEventListener("sessionstart",mc),W.addEventListener("sessionend",Ac),this.render=function(I,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,D,P),p=Jt.get(I,v.length),p.init(D),v.push(p),Rt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,xt),g=Ct.get(I,y.length),g.init(),y.push(g),W.enabled===!0&&W.isPresenting===!0){let ot=x.xr.getDepthSensingMesh();ot!==null&&Pa(ot,D,-1/0,x.sortObjects)}Pa(I,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(tt,st),Q=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Q&&Lt.addToRenderList(g,I),this.info.render.frame++,nt===!0&&it.beginShadows();let k=p.state.shadowsArray;yt.render(k,I,D),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,N=g.transmissive;if(p.setupLights(),D.isArrayCamera){let ot=D.cameras;if(N.length>0)for(let mt=0,St=ot.length;mt<St;mt++){let Et=ot[mt];vc(q,N,I,Et)}Q&&Lt.render(I);for(let mt=0,St=ot.length;mt<St;mt++){let Et=ot[mt];xc(g,I,Et,Et.viewport)}}else N.length>0&&vc(q,N,I,D),Q&&Lt.render(I),xc(g,I,D);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),I.isScene===!0&&I.onAfterRender(x,I,D),le.resetDefaultState(),M=-1,_=null,v.pop(),v.length>0?(p=v[v.length-1],nt===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Pa(I,D,k,q){if(I.visible===!1)return;if(I.layers.test(D.layers)){if(I.isGroup)k=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(D);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||X.intersectsSprite(I)){q&&Dt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Rt);let mt=Z.update(I),St=I.material;St.visible&&g.push(I,mt,St,k,Dt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||X.intersectsObject(I))){let mt=Z.update(I),St=I.material;if(q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Dt.copy(I.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Dt.copy(mt.boundingSphere.center)),Dt.applyMatrix4(I.matrixWorld).applyMatrix4(Rt)),Array.isArray(St)){let Et=mt.groups;for(let Bt=0,qt=Et.length;Bt<qt;Bt++){let wt=Et[Bt],ee=St[wt.materialIndex];ee&&ee.visible&&g.push(I,mt,ee,k,Dt.z,wt)}}else St.visible&&g.push(I,mt,St,k,Dt.z,null)}}let ot=I.children;for(let mt=0,St=ot.length;mt<St;mt++)Pa(ot[mt],D,k,q)}function xc(I,D,k,q){let N=I.opaque,ot=I.transmissive,mt=I.transparent;p.setupLightsView(k),nt===!0&&it.setGlobalState(x.clippingPlanes,k),q&&lt.viewport(V.copy(q)),N.length>0&&Qs(N,D,k),ot.length>0&&Qs(ot,D,k),mt.length>0&&Qs(mt,D,k),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function vc(I,D,k,q){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Le(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?un:Pn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let ot=p.state.transmissionRenderTarget[q.id],mt=q.viewport||V;ot.setSize(mt.z,mt.w);let St=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(R),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Lt.render(k);let Et=x.toneMapping;x.toneMapping=Xn;let Bt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),nt===!0&&it.setGlobalState(x.clippingPlanes,q),Qs(I,k,q),b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let wt=0,ee=D.length;wt<ee;wt++){let ce=D[wt],he=ce.object,De=ce.geometry,ne=ce.material,Vt=ce.group;if(ne.side===Tn&&he.layers.test(q.layers)){let Cn=ne.side;ne.side=Ve,ne.needsUpdate=!0,Cc(he,k,q,De,ne,Vt),ne.side=Cn,ne.needsUpdate=!0,qt=!0}}qt===!0&&(b.updateMultisampleRenderTarget(ot),b.updateRenderTargetMipmap(ot))}x.setRenderTarget(St),x.setClearColor(R,H),Bt!==void 0&&(q.viewport=Bt),x.toneMapping=Et}function Qs(I,D,k){let q=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ot=I.length;N<ot;N++){let mt=I[N],St=mt.object,Et=mt.geometry,Bt=q===null?mt.material:q,qt=mt.group;St.layers.test(k.layers)&&Cc(St,D,k,Et,Bt,qt)}}function Cc(I,D,k,q,N,ot){I.onBeforeRender(x,D,k,q,N,ot),I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),N.onBeforeRender(x,D,k,q,I,ot),N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=Ve,N.needsUpdate=!0,x.renderBufferDirect(k,D,q,N,I,ot),N.side=An,N.needsUpdate=!0,x.renderBufferDirect(k,D,q,N,I,ot),N.side=Tn):x.renderBufferDirect(k,D,q,N,I,ot),I.onAfterRender(x,D,k,q,N,ot)}function $s(I,D,k){D.isScene!==!0&&(D=te);let q=vt.get(I),N=p.state.lights,ot=p.state.shadowsArray,mt=N.state.version,St=bt.getParameters(I,N.state,ot,D,k),Et=bt.getProgramCacheKey(St),Bt=q.programs;q.environment=I.isMeshStandardMaterial?D.environment:null,q.fog=D.fog,q.envMap=(I.isMeshStandardMaterial?B:C).get(I.envMap||q.environment),q.envMapRotation=q.environment!==null&&I.envMap===null?D.environmentRotation:I.envMapRotation,Bt===void 0&&(I.addEventListener("dispose",kt),Bt=new Map,q.programs=Bt);let qt=Bt.get(Et);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===mt)return yc(I,St),qt}else St.uniforms=bt.getUniforms(I),I.onBeforeCompile(St,x),qt=bt.acquireProgram(St,Et),Bt.set(Et,qt),q.uniforms=St.uniforms;let wt=q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(wt.clippingPlanes=it.uniform),yc(I,St),q.needsLights=Qu(I),q.lightsStateVersion=mt,q.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function _c(I){if(I.uniformsList===null){let D=I.currentProgram.getUniforms();I.uniformsList=ki.seqWithValue(D.seq,I.uniforms)}return I.uniformsList}function yc(I,D){let k=vt.get(I);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function ju(I,D,k,q,N){D.isScene!==!0&&(D=te),b.resetTextureUnits();let ot=D.fog,mt=q.isMeshStandardMaterial?D.environment:null,St=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ss,Et=(q.isMeshStandardMaterial?B:C).get(q.envMap||mt),Bt=q.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,qt=!!k.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,ce=!!k.morphAttributes.color,he=Xn;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(he=x.toneMapping);let De=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=De!==void 0?De.length:0,Vt=vt.get(q),Cn=p.state.lights;if(nt===!0&&(xt===!0||I!==_)){let Ye=I===_&&q.id===M;it.setState(q,I,Ye)}let ie=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Cn.state.version||Vt.outputColorSpace!==St||N.isBatchedMesh&&Vt.batching===!1||!N.isBatchedMesh&&Vt.batching===!0||N.isBatchedMesh&&Vt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Vt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Vt.instancing===!1||!N.isInstancedMesh&&Vt.instancing===!0||N.isSkinnedMesh&&Vt.skinning===!1||!N.isSkinnedMesh&&Vt.skinning===!0||N.isInstancedMesh&&Vt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Vt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Vt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Vt.instancingMorph===!1&&N.morphTexture!==null||Vt.envMap!==Et||q.fog===!0&&Vt.fog!==ot||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==it.numPlanes||Vt.numIntersection!==it.numIntersection)||Vt.vertexAlphas!==Bt||Vt.vertexTangents!==qt||Vt.morphTargets!==wt||Vt.morphNormals!==ee||Vt.morphColors!==ce||Vt.toneMapping!==he||Vt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Vt.__version=q.version);let tn=Vt.currentProgram;ie===!0&&(tn=$s(q,D,N));let _i=!1,Be=!1,ds=!1,ue=tn.getUniforms(),dn=Vt.uniforms;if(lt.useProgram(tn.program)&&(_i=!0,Be=!0,ds=!0),q.id!==M&&(M=q.id,Be=!0),_i||_!==I){lt.buffers.depth.getReversed()?(rt.copy(I.projectionMatrix),Fd(rt),Bd(rt),ue.setValue(E,"projectionMatrix",rt)):ue.setValue(E,"projectionMatrix",I.projectionMatrix),ue.setValue(E,"viewMatrix",I.matrixWorldInverse);let Nn=ue.map.cameraPosition;Nn!==void 0&&Nn.setValue(E,Ft.setFromMatrixPosition(I.matrixWorld)),_t.logarithmicDepthBuffer&&ue.setValue(E,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ue.setValue(E,"isOrthographic",I.isOrthographicCamera===!0),_!==I&&(_=I,Be=!0,ds=!0)}if(N.isSkinnedMesh){ue.setOptional(E,N,"bindMatrix"),ue.setOptional(E,N,"bindMatrixInverse");let Ye=N.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ue.setValue(E,"boneTexture",Ye.boneTexture,b))}N.isBatchedMesh&&(ue.setOptional(E,N,"batchingTexture"),ue.setValue(E,"batchingTexture",N._matricesTexture,b),ue.setOptional(E,N,"batchingIdTexture"),ue.setValue(E,"batchingIdTexture",N._indirectTexture,b),ue.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(E,"batchingColorTexture",N._colorsTexture,b));let fs=k.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&Nt.update(N,k,tn),(Be||Vt.receiveShadow!==N.receiveShadow)&&(Vt.receiveShadow=N.receiveShadow,ue.setValue(E,"receiveShadow",N.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(dn.envMap.value=Et,dn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&D.environment!==null&&(dn.envMapIntensity.value=D.environmentIntensity),Be&&(ue.setValue(E,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Ju(dn,ds),ot&&q.fog===!0&&dt.refreshFogUniforms(dn,ot),dt.refreshMaterialUniforms(dn,q,O,K,p.state.transmissionRenderTarget[I.id]),ki.upload(E,_c(Vt),dn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ki.upload(E,_c(Vt),dn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ue.setValue(E,"center",N.center),ue.setValue(E,"modelViewMatrix",N.modelViewMatrix),ue.setValue(E,"normalMatrix",N.normalMatrix),ue.setValue(E,"modelMatrix",N.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Ye=q.uniformsGroups;for(let Nn=0,Fn=Ye.length;Nn<Fn;Nn++){let Ic=Ye[Nn];L.update(Ic,tn),L.bind(Ic,tn)}}return tn}function Ju(I,D){I.ambientLightColor.needsUpdate=D,I.lightProbe.needsUpdate=D,I.directionalLights.needsUpdate=D,I.directionalLightShadows.needsUpdate=D,I.pointLights.needsUpdate=D,I.pointLightShadows.needsUpdate=D,I.spotLights.needsUpdate=D,I.spotLightShadows.needsUpdate=D,I.rectAreaLights.needsUpdate=D,I.hemisphereLights.needsUpdate=D}function Qu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(I,D,k){vt.get(I.texture).__webglTexture=D,vt.get(I.depthTexture).__webglTexture=k;let q=vt.get(I);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=k===void 0,q.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,D){let k=vt.get(I);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(I,D=0,k=0){P=I,S=D,w=k;let q=!0,N=null,ot=!1,mt=!1;if(I){let Et=vt.get(I);if(Et.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(E.FRAMEBUFFER,null),q=!1;else if(Et.__webglFramebuffer===void 0)b.setupRenderTarget(I);else if(Et.__hasExternalTextures)b.rebindTextures(I,vt.get(I.texture).__webglTexture,vt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let wt=I.depthTexture;if(Et.__boundDepthTexture!==wt){if(wt!==null&&vt.has(wt)&&(I.width!==wt.image.width||I.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(I)}}let Bt=I.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);let qt=vt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(qt[D])?N=qt[D][k]:N=qt[D],ot=!0):I.samples>0&&b.useMultisampledRTT(I)===!1?N=vt.get(I).__webglMultisampledFramebuffer:Array.isArray(qt)?N=qt[k]:N=qt,V.copy(I.viewport),G.copy(I.scissor),z=I.scissorTest}else V.copy(ft).multiplyScalar(O).floor(),G.copy(Pt).multiplyScalar(O).floor(),z=Xt;if(lt.bindFramebuffer(E.FRAMEBUFFER,N)&&q&&lt.drawBuffers(I,N),lt.viewport(V),lt.scissor(G),lt.setScissorTest(z),ot){let Et=vt.get(I.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+D,Et.__webglTexture,k)}else if(mt){let Et=vt.get(I.texture),Bt=D||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Et.__webglTexture,k||0,Bt)}M=-1},this.readRenderTargetPixels=function(I,D,k,q,N,ot,mt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=vt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){lt.bindFramebuffer(E.FRAMEBUFFER,St);try{let Et=I.texture,Bt=Et.format,qt=Et.type;if(!_t.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=I.width-q&&k>=0&&k<=I.height-N&&E.readPixels(D,k,q,N,Gt.convert(Bt),Gt.convert(qt),ot)}finally{let Et=P!==null?vt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(E.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(I,D,k,q,N,ot,mt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=vt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){let Et=I.texture,Bt=Et.format,qt=Et.type;if(!_t.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=I.width-q&&k>=0&&k<=I.height-N){lt.bindFramebuffer(E.FRAMEBUFFER,St);let wt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,wt),E.bufferData(E.PIXEL_PACK_BUFFER,ot.byteLength,E.STREAM_READ),E.readPixels(D,k,q,N,Gt.convert(Bt),Gt.convert(qt),0);let ee=P!==null?vt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(E.FRAMEBUFFER,ee);let ce=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Nd(E,ce,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,wt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ot),E.deleteBuffer(wt),E.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,D=null,k=0){I.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,I=arguments[1]);let q=Math.pow(2,-k),N=Math.floor(I.image.width*q),ot=Math.floor(I.image.height*q),mt=D!==null?D.x:0,St=D!==null?D.y:0;b.setTexture2D(I,0),E.copyTexSubImage2D(E.TEXTURE_2D,k,0,0,mt,St,N,ot),lt.unbindTexture()},this.copyTextureToTexture=function(I,D,k=null,q=null,N=0){I.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,I=arguments[1],D=arguments[2],N=arguments[3]||0,k=null);let ot,mt,St,Et,Bt,qt,wt,ee,ce,he=I.isCompressedTexture?I.mipmaps[N]:I.image;k!==null?(ot=k.max.x-k.min.x,mt=k.max.y-k.min.y,St=k.isBox3?k.max.z-k.min.z:1,Et=k.min.x,Bt=k.min.y,qt=k.isBox3?k.min.z:0):(ot=he.width,mt=he.height,St=he.depth||1,Et=0,Bt=0,qt=0),q!==null?(wt=q.x,ee=q.y,ce=q.z):(wt=0,ee=0,ce=0);let De=Gt.convert(D.format),ne=Gt.convert(D.type),Vt;D.isData3DTexture?(b.setTexture3D(D,0),Vt=E.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),Vt=E.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),Vt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,D.unpackAlignment);let Cn=E.getParameter(E.UNPACK_ROW_LENGTH),ie=E.getParameter(E.UNPACK_IMAGE_HEIGHT),tn=E.getParameter(E.UNPACK_SKIP_PIXELS),_i=E.getParameter(E.UNPACK_SKIP_ROWS),Be=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,he.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,he.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Et),E.pixelStorei(E.UNPACK_SKIP_ROWS,Bt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,qt);let ds=I.isDataArrayTexture||I.isData3DTexture,ue=D.isDataArrayTexture||D.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let dn=vt.get(I),fs=vt.get(D),Ye=vt.get(dn.__renderTarget),Nn=vt.get(fs.__renderTarget);lt.bindFramebuffer(E.READ_FRAMEBUFFER,Ye.__webglFramebuffer),lt.bindFramebuffer(E.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<St;Fn++)ds&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,vt.get(I).__webglTexture,N,qt+Fn),I.isDepthTexture?(ue&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,vt.get(D).__webglTexture,N,ce+Fn),E.blitFramebuffer(Et,Bt,ot,mt,wt,ee,ot,mt,E.DEPTH_BUFFER_BIT,E.NEAREST)):ue?E.copyTexSubImage3D(Vt,N,wt,ee,ce+Fn,Et,Bt,ot,mt):E.copyTexSubImage2D(Vt,N,wt,ee,ce+Fn,Et,Bt,ot,mt);lt.bindFramebuffer(E.READ_FRAMEBUFFER,null),lt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else ue?I.isDataTexture||I.isData3DTexture?E.texSubImage3D(Vt,N,wt,ee,ce,ot,mt,St,De,ne,he.data):D.isCompressedArrayTexture?E.compressedTexSubImage3D(Vt,N,wt,ee,ce,ot,mt,St,De,he.data):E.texSubImage3D(Vt,N,wt,ee,ce,ot,mt,St,De,ne,he):I.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,N,wt,ee,ot,mt,De,ne,he.data):I.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,N,wt,ee,he.width,he.height,De,he.data):E.texSubImage2D(E.TEXTURE_2D,N,wt,ee,ot,mt,De,ne,he);E.pixelStorei(E.UNPACK_ROW_LENGTH,Cn),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ie),E.pixelStorei(E.UNPACK_SKIP_PIXELS,tn),E.pixelStorei(E.UNPACK_SKIP_ROWS,_i),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Be),N===0&&D.generateMipmaps&&E.generateMipmap(Vt),lt.unbindTexture()},this.copyTextureToTexture3D=function(I,D,k=null,q=null,N=0){return I.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,q=arguments[1]||null,I=arguments[2],D=arguments[3],N=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,D,k,q,N)},this.initRenderTarget=function(I){vt.get(I).__webglFramebuffer===void 0&&b.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?b.setTextureCube(I,0):I.isData3DTexture?b.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?b.setTexture2DArray(I,0):b.setTexture2D(I,0),lt.unbindTexture()},this.resetState=function(){S=0,w=0,P=null,lt.reset(),le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var ji=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Al=class extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class extends de{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ni=new Zt,Ih=new Zt,_r=[],Mh=new an,PA=new Zt,vs=new zt,Cs=new Un,gi=class extends zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,PA)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new an),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),Mh.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Mh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),Cs.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),Ih.multiplyMatrices(n,Ni),vs.matrixWorld=Ih,vs.raycast(t,_r);for(let a=0,o=_r.length;a<o;a++){let l=_r[a];l.instanceId=r,l.object=this,e.push(l)}_r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Al(new Float32Array(s*this.count),s,this.count,Ql,gn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mi=class extends qe{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yr=new T,Zr=new T,bh=new Zt,_s=new Vs,yr=new Un,co=new T,Sh=new T,xl=class extends Me{constructor(t=new oe,e=new mi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yr.fromBufferAttribute(e,s-1),Zr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yr.distanceTo(Zr);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;bh.copy(s).invert(),_s.copy(t.ray).applyMatrix4(bh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let A=f,g=m-1;A<g;A+=c){let p=h.getX(A),y=h.getX(A+1),v=Ir(this,t,_s,l,p,y);v&&e.push(v)}if(this.isLineLoop){let A=h.getX(m-1),g=h.getX(f),p=Ir(this,t,_s,l,A,g);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let A=f,g=m-1;A<g;A+=c){let p=Ir(this,t,_s,l,A,A+1);p&&e.push(p)}if(this.isLineLoop){let A=Ir(this,t,_s,l,m-1,f);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ir(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(Yr.fromBufferAttribute(a,s),Zr.fromBufferAttribute(a,r),e.distanceSqToSegment(Yr,Zr,co,Sh)>n)return;co.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(co);if(!(l<t.near||l>t.far))return{distance:l,point:Sh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Eh=new T,wh=new T,Ls=class extends xl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eh.fromBufferAttribute(e,s),wh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eh.distanceTo(wh);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ke=class extends qe{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Th=new Zt,vl=new Vs,Mr=new Un,br=new T,je=class extends Me{constructor(t=new oe,e=new Ke){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;Th.copy(s).invert(),vl.copy(t.ray).applyMatrix4(Th);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,A=f;m<A;m++){let g=c.getX(m);br.fromBufferAttribute(u,g),Vh(br,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,A=f;m<A;m++)br.fromBufferAttribute(u,m),Vh(br,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vh(i,t,e,n,s,r,a){let o=vl.distanceSqToPoint(i);if(o<e){let l=new T;vl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ge=class extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new J:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],a=[],o=new T,l=new Zt;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ds=class extends Je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new J){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends Ds{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Sr=new T,ho=new sc,uo=new sc,fo=new sc,_l=class extends Je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sr.subVectors(s[0],s[1]).add(s[0]),c=Sr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),A=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);A<1e-4&&(A=1),m<1e-4&&(m=A),g<1e-4&&(g=A),ho.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,A,g),uo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,A,g),fo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,A,g)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),uo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),fo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ho.calc(l),uo.calc(l),fo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function UA(i,t){let e=1-i;return e*e*t}function LA(i,t){return 2*(1-i)*i*t}function DA(i,t){return i*i*t}function bs(i,t,e,n){return UA(i,t)+LA(i,e)+DA(i,n)}function NA(i,t){let e=1-i;return e*e*e*t}function FA(i,t){let e=1-i;return 3*e*e*i*t}function BA(i,t){return 3*(1-i)*i*i*t}function zA(i,t){return i*i*i*t}function Ss(i,t,e,n,s){return NA(i,t)+FA(i,e)+BA(i,n)+zA(i,s)}var Kr=class extends Je{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ss(t,s.x,r.x,a.x,o.x),Ss(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yl=class extends Je{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ss(t,s.x,r.x,a.x,o.x),Ss(t,s.y,r.y,a.y,o.y),Ss(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jr=class extends Je{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends Je{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Je{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bs(t,s.x,r.x,a.x),bs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ml=class extends Je{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bs(t,s.x,r.x,a.x),bs(t,s.y,r.y,a.y),bs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends Je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Rh(o,l.x,c.x,h.x,u.x),Rh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new J().fromArray(s))}return this}},bl=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:_l,CubicBezierCurve:Kr,CubicBezierCurve3:yl,EllipseCurve:Ds,LineCurve:jr,LineCurve3:Il,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:Ml,SplineCurve:Qr}),Sl=class extends Je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new bl[s.type]().fromJSON(s))}return this}},$r=class extends Sl{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new jr(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Jr(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Kr(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ds(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var jn=class i extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new T,h=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ns=class i extends oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,A=[],g=n/2,p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function y(){let x=new T,U=new T,S=0,w=(e-t)/n;for(let P=0;P<=r;P++){let M=[],_=P/r,V=_*(e-t)+t;for(let G=0;G<=s;G++){let z=G/s,R=z*l+o,H=Math.sin(R),F=Math.cos(R);U.x=V*H,U.y=-_*n+g,U.z=V*F,u.push(U.x,U.y,U.z),x.set(H,w,F).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-_),M.push(m++)}A.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let _=A[M][P],V=A[M+1][P],G=A[M+1][P+1],z=A[M][P+1];(t>0||M!==0)&&(h.push(_,V,z),S+=3),(e>0||M!==r-1)&&(h.push(V,G,z),S+=3)}c.addGroup(p,S,0),p+=S}function v(x){let U=m,S=new J,w=new T,P=0,M=x===!0?t:e,_=x===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),m++;let V=m;for(let G=0;G<=s;G++){let R=G/s*l+o,H=Math.cos(R),F=Math.sin(R);w.x=M*F,w.y=g*_,w.z=M*H,u.push(w.x,w.y,w.z),d.push(0,_,0),S.x=H*.5+.5,S.y=F*.5*_+.5,f.push(S.x,S.y),m++}for(let G=0;G<s;G++){let z=U+G,R=V+G;x===!0?h.push(R,R+1,z):h.push(R+1,R,z),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fs=class i extends Ns{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},El=class i extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new T,x=new T,U=new T;for(let S=0;S<e.length;S+=3)f(e[S+0],v),f(e[S+1],x),f(e[S+2],U),l(v,x,U,y)}function l(y,v,x,U){let S=U+1,w=[];for(let P=0;P<=S;P++){w[P]=[];let M=y.clone().lerp(x,P/S),_=v.clone().lerp(x,P/S),V=S-P;for(let G=0;G<=V;G++)G===0&&P===S?w[P][G]=M:w[P][G]=M.clone().lerp(_,G/V)}for(let P=0;P<S;P++)for(let M=0;M<2*(S-P)-1;M++){let _=Math.floor(M/2);M%2===0?(d(w[P][_+1]),d(w[P+1][_]),d(w[P][_])):(d(w[P][_+1]),d(w[P+1][_+1]),d(w[P+1][_]))}}function c(y){let v=new T;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let y=new T;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let x=g(y)/2/Math.PI+.5,U=p(y)/Math.PI+.5;a.push(x,1-U)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],x=a[y+2],U=a[y+4],S=Math.max(v,x,U),w=Math.min(v,x,U);S>.9&&w<.1&&(v<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),U<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){let x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function m(){let y=new T,v=new T,x=new T,U=new T,S=new J,w=new J,P=new J;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),S.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),U.copy(y).add(v).add(x).divideScalar(3);let V=g(U);A(S,_+0,y,V),A(w,_+2,v,V),A(P,_+4,x,V)}}function A(y,v,x,U){U<0&&y.x===1&&(a[v]=y.x-1),x.x===0&&x.z===0&&(a[v]=U/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},ta=class i extends El{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ai=class extends $r{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new $r().fromJSON(s))}return this}},OA={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=su(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=WA(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Bs(r,a,e,o,l,f,0),a}};function su(i,t,e,n,s){let r,a;if(s===n0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Ph(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ph(r,i[r],i[r+1],a);return a&&ua(a,a.next)&&(Os(a),a=a.next),a}function xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ua(e,e.next)||pe(e.prev,e,e.next)===0)){if(Os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&jA(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?qA(i,n,s,r):kA(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Os(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=HA(xi(i),t,e),Bs(i,t,e,n,s,r,2)):a===2&&GA(i,t,e,n,s,r):Bs(xi(i),t,e,n,s,r,1);break}}}function kA(i){let t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Bi(s,o,r,l,a,c,m.x,m.y)&&pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qA(i,t,e,n){let s=i.prev,r=i,a=i.next;if(pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,A=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=wl(f,m,t,e,n),y=wl(A,g,t,e,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=A&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Bi(o,h,l,u,c,d,v.x,v.y)&&pe(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Bi(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=A&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&Bi(o,h,l,u,c,d,v.x,v.y)&&pe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=A&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Bi(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function HA(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ua(s,r)&&ru(s,n,n.next,r)&&zs(s,r)&&zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Os(n),Os(n.next),n=i=r),n=n.next}while(n!==i);return xi(n)}function GA(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$A(a,o)){let l=au(a,o);a=xi(a,a.next),l=xi(l,l.next),Bs(a,t,e,n,s,r,0),Bs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function WA(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=su(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(QA(c));for(s.sort(XA),r=0;r<s.length;r++)e=YA(s[r],e);return e}function XA(i,t){return i.x-t.x}function YA(i,t){let e=ZA(i,t);if(!e)return t;let n=au(e,i);return xi(n,n.next),xi(e,e.next)}function ZA(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Bi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),zs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&KA(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function KA(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function jA(i,t,e,n){let s=i;do s.z===0&&(s.z=wl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,JA(s)}function JA(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function wl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function QA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function $A(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!t0(i,t)&&(zs(i,t)&&zs(t,i)&&e0(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||ua(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ua(i,t){return i.x===t.x&&i.y===t.y}function ru(i,t,e,n){let s=wr(pe(i,t,e)),r=wr(pe(i,t,n)),a=wr(pe(e,n,i)),o=wr(pe(e,n,t));return!!(s!==r&&a!==o||s===0&&Er(i,e,t)||r===0&&Er(i,n,t)||a===0&&Er(e,i,n)||o===0&&Er(e,t,n))}function Er(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wr(i){return i>0?1:i<0?-1:0}function t0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ru(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zs(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function e0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function au(i,t){let e=new Tl(i.i,i.x,i.y),n=new Tl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ph(i,t,e,n){let s=new Tl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function n0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Es=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Uh(t),Lh(n,t);let a=t.length;e.forEach(Uh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Lh(n,e[l]);let o=OA.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Uh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Lh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ji=class i extends oe{constructor(t=new Ai([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:i0,v,x=!1,U,S,w,P;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,U=p.computeFrenetFrames(h,!1),S=new T,w=new T,P=new T),d||(g=0,f=0,m=0,A=0);let M=o.extractPoints(c),_=M.shape,V=M.holes;if(!Es.isClockWise(_)){_=_.reverse();for(let Q=0,at=V.length;Q<at;Q++){let E=V[Q];Es.isClockWise(E)&&(V[Q]=E.reverse())}}let z=Es.triangulateShape(_,V),R=_;for(let Q=0,at=V.length;Q<at;Q++){let E=V[Q];_=_.concat(E)}function H(Q,at,E){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(at,E)}let F=_.length,K=z.length;function O(Q,at,E){let Tt,et,_t,lt=Q.x-at.x,Ut=Q.y-at.y,vt=E.x-Q.x,b=E.y-Q.y,C=lt*lt+Ut*Ut,B=lt*b-Ut*vt;if(Math.abs(B)>Number.EPSILON){let Y=Math.sqrt(C),$=Math.sqrt(vt*vt+b*b),Z=at.x-Ut/Y,bt=at.y+lt/Y,dt=E.x-b/$,Ct=E.y+vt/$,Jt=((dt-Z)*b-(Ct-bt)*vt)/(lt*b-Ut*vt);Tt=Z+lt*Jt-Q.x,et=bt+Ut*Jt-Q.y;let it=Tt*Tt+et*et;if(it<=2)return new J(Tt,et);_t=Math.sqrt(it/2)}else{let Y=!1;lt>Number.EPSILON?vt>Number.EPSILON&&(Y=!0):lt<-Number.EPSILON?vt<-Number.EPSILON&&(Y=!0):Math.sign(Ut)===Math.sign(b)&&(Y=!0),Y?(Tt=-Ut,et=lt,_t=Math.sqrt(C)):(Tt=lt,et=Ut,_t=Math.sqrt(C/2))}return new J(Tt/_t,et/_t)}let tt=[];for(let Q=0,at=R.length,E=at-1,Tt=Q+1;Q<at;Q++,E++,Tt++)E===at&&(E=0),Tt===at&&(Tt=0),tt[Q]=O(R[Q],R[E],R[Tt]);let st=[],ft,Pt=tt.concat();for(let Q=0,at=V.length;Q<at;Q++){let E=V[Q];ft=[];for(let Tt=0,et=E.length,_t=et-1,lt=Tt+1;Tt<et;Tt++,_t++,lt++)_t===et&&(_t=0),lt===et&&(lt=0),ft[Tt]=O(E[Tt],E[_t],E[lt]);st.push(ft),Pt=Pt.concat(ft)}for(let Q=0;Q<g;Q++){let at=Q/g,E=f*Math.cos(at*Math.PI/2),Tt=m*Math.sin(at*Math.PI/2)+A;for(let et=0,_t=R.length;et<_t;et++){let lt=H(R[et],tt[et],Tt);rt(lt.x,lt.y,-E)}for(let et=0,_t=V.length;et<_t;et++){let lt=V[et];ft=st[et];for(let Ut=0,vt=lt.length;Ut<vt;Ut++){let b=H(lt[Ut],ft[Ut],Tt);rt(b.x,b.y,-E)}}}let Xt=m+A;for(let Q=0;Q<F;Q++){let at=d?H(_[Q],Pt[Q],Xt):_[Q];x?(w.copy(U.normals[0]).multiplyScalar(at.x),S.copy(U.binormals[0]).multiplyScalar(at.y),P.copy(v[0]).add(w).add(S),rt(P.x,P.y,P.z)):rt(at.x,at.y,0)}for(let Q=1;Q<=h;Q++)for(let at=0;at<F;at++){let E=d?H(_[at],Pt[at],Xt):_[at];x?(w.copy(U.normals[Q]).multiplyScalar(E.x),S.copy(U.binormals[Q]).multiplyScalar(E.y),P.copy(v[Q]).add(w).add(S),rt(P.x,P.y,P.z)):rt(E.x,E.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let at=Q/g,E=f*Math.cos(at*Math.PI/2),Tt=m*Math.sin(at*Math.PI/2)+A;for(let et=0,_t=R.length;et<_t;et++){let lt=H(R[et],tt[et],Tt);rt(lt.x,lt.y,u+E)}for(let et=0,_t=V.length;et<_t;et++){let lt=V[et];ft=st[et];for(let Ut=0,vt=lt.length;Ut<vt;Ut++){let b=H(lt[Ut],ft[Ut],Tt);x?rt(b.x,b.y+v[h-1].y,v[h-1].x+E):rt(b.x,b.y,u+E)}}}X(),nt();function X(){let Q=s.length/3;if(d){let at=0,E=F*at;for(let Tt=0;Tt<K;Tt++){let et=z[Tt];Rt(et[2]+E,et[1]+E,et[0]+E)}at=h+g*2,E=F*at;for(let Tt=0;Tt<K;Tt++){let et=z[Tt];Rt(et[0]+E,et[1]+E,et[2]+E)}}else{for(let at=0;at<K;at++){let E=z[at];Rt(E[2],E[1],E[0])}for(let at=0;at<K;at++){let E=z[at];Rt(E[0]+F*h,E[1]+F*h,E[2]+F*h)}}n.addGroup(Q,s.length/3-Q,0)}function nt(){let Q=s.length/3,at=0;xt(R,at),at+=R.length;for(let E=0,Tt=V.length;E<Tt;E++){let et=V[E];xt(et,at),at+=et.length}n.addGroup(Q,s.length/3-Q,1)}function xt(Q,at){let E=Q.length;for(;--E>=0;){let Tt=E,et=E-1;et<0&&(et=Q.length-1);for(let _t=0,lt=h+g*2;_t<lt;_t++){let Ut=F*_t,vt=F*(_t+1),b=at+Tt+Ut,C=at+et+Ut,B=at+et+vt,Y=at+Tt+vt;Ft(b,C,B,Y)}}}function rt(Q,at,E){l.push(Q),l.push(at),l.push(E)}function Rt(Q,at,E){Dt(Q),Dt(at),Dt(E);let Tt=s.length/3,et=y.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);te(et[0]),te(et[1]),te(et[2])}function Ft(Q,at,E,Tt){Dt(Q),Dt(at),Dt(Tt),Dt(at),Dt(E),Dt(Tt);let et=s.length/3,_t=y.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);te(_t[0]),te(_t[1]),te(_t[3]),te(_t[1]),te(_t[2]),te(_t[3])}function Dt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function te(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return s0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bl[s.type]().fromJSON(s)),new i(n,t.options)}},i0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new J(r,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],A=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-u),new J(d,1-m),new J(A,1-p)]:[new J(o,1-l),new J(h,1-u),new J(f,1-m),new J(g,1-p)]}};function s0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ks=class i extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,f=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let U=0;U<=e;U++){let S=U/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),g.push(S+x,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],x=h[p][y],U=h[p+1][y],S=h[p+1][y+1];(p!==0||a>0)&&f.push(v,x,S),(p!==n-1||l<Math.PI)&&f.push(x,U,S)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ea=class extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var Qi=class extends qe{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var cn=class extends qe{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Tr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function r0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vl=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wc:r=t,o=2*e-n;break;case Tc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:a=t,l=2*n-e;break;case Tc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-d*g+2*d*A-d*m,y=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*A+.5*m,x=f*g-f*A;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+y*a[c+U]+v*a[l+U]+x*a[u+U];return r}},Rl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Pl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Tr(e,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Tr(t.times,Array),values:Tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&r0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===La,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=$o;var vi=class extends hn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Dr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends hn{};Ul.prototype.ValueTypeName="color";var Ll=class extends hn{};Ll.prototype.ValueTypeName="number";var Dl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Fe.slerpFlat(r,0,a,c-o,a,c,l);return r}},na=class extends hn{InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends hn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Dr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends hn{};Nl.prototype.ValueTypeName="vector";var ia={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Fl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},rc=new Fl,xn=class{constructor(t){this.manager=t!==void 0?t:rc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sn={},Bl=class extends Error{constructor(t,e){super(t),this.response=e}},ts=class extends xn{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ia.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Sn[t]!==void 0){Sn[t].push({onLoad:e,onProgress:n,onError:s});return}Sn[t]=[],Sn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Sn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,A=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{A+=x.byteLength;let U=new ProgressEvent("progress",{lengthComputable:m,loaded:A,total:f});for(let S=0,w=h.length;S<w;S++){let P=h[S];P.onProgress&&P.onProgress(U)}p.enqueue(x),y()}},v=>{p.error(v)})}}});return new Response(g)}else throw new Bl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ia.add(t,c);let h=Sn[t];delete Sn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Sn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Sn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var zl=class extends xn{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=ia.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ts("img");function l(){h(),ia.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var sa=class extends xn{constructor(t){super(t)}load(t,e,n,s){let r=new Ue,a=new zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ra=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},es=class extends ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},po=new Zt,Dh=new T,Nh=new T,Ol=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dh),Nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nh),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var kl=class extends Ol{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new kl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var aa=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var is=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Fh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Fh(){return performance.now()}var ac="\\[\\]\\.:\\/",a0=new RegExp("["+ac+"]","g"),oc="[^"+ac+"]",o0="[^"+ac.replace("\\.","")+"]",l0=/((?:WC+[\/:])*)/.source.replace("WC",oc),c0=/(WCOD+)?/.source.replace("WCOD",o0),h0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),u0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),d0=new RegExp("^"+l0+c0+h0+u0+"$"),f0=["material","materials","bones","map"],ql=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(t){let e=d0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);f0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=ql;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);var Gs={wheat:{ar:"\u0642\u0645\u062D",en:"Wheat",yield:1,price:.16,color:15909198,product:"flour"},corn:{ar:"\u0630\u0631\u0629",en:"Corn",yield:1.4,price:.15,color:16241482,product:"corn"},sunflower:{ar:"\u0639\u0628\u0627\u062F \u0627\u0644\u0634\u0645\u0633",en:"Sunflowers",yield:1.2,price:.18,color:16763176,product:"seeds"}},ou={sheep:{ar:"\u062E\u0631\u0641\u0627\u0646",en:"Sheep",r:.55},cow:{ar:"\u0628\u0642\u0631",en:"Cows",r:.8},chicken:{ar:"\u0641\u0631\u0627\u062E",en:"Chickens",r:.35}},Qn=[{id:1,ar:"\u0627\u0644\u0648\u0627\u062F\u064A \u0627\u0644\u0630\u0647\u0628\u064A",en:"Golden Valley",w:30,d:34,fields:[[-8,-12,16,12,"wheat"]],rocks:[],animals:[],pen:null},{id:2,ar:"\u062A\u0644\u0629 \u0627\u0644\u0628\u0631\u0633\u064A\u0645",en:"Clover Hill",w:34,d:36,fields:[[-10,-14,20,14,"wheat"]],rocks:[[-4,-9],[5,-5]],animals:[],pen:null},{id:3,ar:"\u0628\u0633\u062A\u0627\u0646 \u0627\u0644\u0630\u0631\u0629",en:"Corn Corner",w:38,d:38,fields:[[-14,-15,14,14,"corn"],[2,-13,10,10,"wheat"]],rocks:[[-8,-9],[6,-8],[-2,-3]],animals:[["sheep",10,2],["sheep",12,4]],pen:[8,6,7,5]},{id:4,ar:"\u062D\u0642\u0648\u0644 \u0627\u0644\u0634\u0645\u0633",en:"Sunny Fields",w:40,d:40,fields:[[-12,-16,22,16,"sunflower"]],rocks:[[-6,-11],[4,-9],[-2,-5],[7,-3]],animals:[["sheep",-10,4],["sheep",-12,2],["sheep",-8,6]],pen:[-16,8,7,5]},{id:5,ar:"\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0637\u0627\u062D\u0648\u0646\u0629",en:"Windmill Farm",w:44,d:44,fields:[[-18,-18,12,14,"wheat"],[-4,-18,12,12,"corn"],[10,-16,10,12,"sunflower"]],rocks:[[-13,-12],[0,-10],[14,-8],[-8,-2],[5,-1]],animals:[["cow",12,4],["cow",15,6],["cow",10,8]],pen:[13,10,8,6]},{id:6,ar:"\u0627\u0644\u0633\u0647\u0644 \u0627\u0644\u0643\u0628\u064A\u0631",en:"Big Plains",w:48,d:46,fields:[[-16,-20,30,20,"wheat"]],rocks:[[-10,-15],[-2,-12],[6,-16],[9,-6],[-6,-5],[2,-3]],animals:[["sheep",-18,6],["sheep",-14,8],["chicken",-16,4],["chicken",-12,6]],pen:[-20,10,8,6]},{id:7,ar:"\u0648\u0627\u062F\u064A \u0627\u0644\u0646\u0647\u0631",en:"River Valley",w:50,d:48,fields:[[-20,-21,18,16,"corn"],[2,-21,18,16,"sunflower"]],rocks:[[-14,-15],[-6,-9],[-17,-7],[8,-16],[14,-10],[5,-7],[18,-14],[-1,-2]],animals:[["cow",14,6],["sheep",18,4],["sheep",16,8],["chicken",12,4]],pen:[16,11,9,6]},{id:8,ar:"\u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629",en:"Grand Farm",w:54,d:52,fields:[[-22,-23,14,14,"wheat"],[-6,-23,12,18,"corn"],[8,-23,14,14,"sunflower"],[8,-7,14,8,"wheat"]],rocks:[[-17,-18],[-11,-12],[-2,-17],[2,-9],[12,-18],[18,-13],[-15,-6],[13,-3],[-4,-3],[19,-4]],animals:[["cow",-18,6],["cow",-14,8],["sheep",-20,4],["sheep",-16,2],["chicken",-12,4]],pen:[-22,11,10,6]}];function lu(i){let t=i.d/2-6;return{barn:{x:-6,z:t+1,w:7,d:5},pad:{x:2.5,z:t,w:4,d:4}}}var da=[{id:"cutter",ar:"\u0627\u0644\u0633\u0643\u064A\u0646\u0629",en:"Cutter",sub:["\u0623\u0639\u0631\u0636","Wider"],icon:"art:wheat",base:1.8,step:.45,unit:"m"},{id:"engine",ar:"\u0627\u0644\u0645\u0648\u062A\u0648\u0631",en:"Engine",sub:["\u0623\u0633\u0631\u0639","Faster"],icon:"art:combine",base:3.2,step:.4,unit:"m/s"},{id:"trailer",ar:"\u0627\u0644\u0645\u0642\u0637\u0648\u0631\u0629",en:"Trailer",sub:["\u0623\u0643\u0628\u0631","Bigger"],icon:"art:trailer",base:400,step:200,unit:""},{id:"barn",ar:"\u0627\u0644\u0645\u062E\u0632\u0646",en:"Barn",sub:["\u0623\u0633\u0639\u0627\u0631 \u0623\u062D\u0633\u0646","Better prices"],icon:"art:barn",base:0,step:10,unit:"%"}],Ws=6,lc=(i,t)=>({cutter:120,engine:150,trailer:100,barn:200})[i]+t*{cutter:100,engine:90,trailer:90,barn:120}[i],Ln=(i,t)=>{let e=da.find(n=>n.id===i);return e.base+e.step*t};function p0(){return{v:1,coins:0,unlocked:1,stars:{},up:{cutter:0,engine:0,trailer:0,barn:0},store:{flour:0,hay:0,corn:0,seeds:0}}}function cu(i){let t=p0();if(!i||typeof i!="object")return t;let e=(n,s,r,a)=>Number.isFinite(n)?Math.max(s,Math.min(r,Math.floor(n))):a;if(t.coins=e(i.coins,0,9999999,0),t.unlocked=e(i.unlocked,1,Qn.length,1),i.stars&&typeof i.stars=="object")for(let n of Qn)i.stars[n.id]!==void 0&&(t.stars[n.id]=e(i.stars[n.id],0,3,0));if(i.up&&typeof i.up=="object")for(let n of da)t.up[n.id]=e(i.up[n.id],0,Ws,0);if(i.store&&typeof i.store=="object")for(let n of Object.keys(t.store))t.store[n]=e(i.store[n],0,9999999,0);return i.muted===!0&&(t.muted=!0),t}function hu(i,t){let e=i.up[t];if(e>=Ws)return"max";let n=lc(t,e);return i.coins<n?"poor":(i.coins-=n,i.up[t]=e+1,"bought")}function uu(i,t,e){var r;let n=Qn[t].id;i.stars[n]=Math.max((r=i.stars[n])!=null?r:0,e);let s=!1;return t+1<Qn.length&&i.unlocked<t+2&&(i.unlocked=t+2,s=!0),{opened:s}}var du=1.9,g0=.95,$n=(i,t,e)=>i<t?t:i>e?e:i,m0=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),pa=class{constructor(t,e={}){var s,r,a,o;this.level=t,this.events=[],this.time=0,this.W=t.w,this.D=t.d,this.cutter=Ln("cutter",(s=e.cutter)!=null?s:0),this.maxSpeed=Ln("engine",(r=e.engine)!=null?r:0),this.capacity=Ln("trailer",(a=e.trailer)!=null?a:0),this.priceBonus=1+Ln("barn",(o=e.barn)!=null?o:0)/100;let n=lu(t);this.barn=n.barn,this.pad=n.pad,this.rocks=t.rocks.map(([l,c])=>({x:l,z:c,r:.75})),this.pen=t.pen?{x:t.pen[0],z:t.pen[1],w:t.pen[2],d:t.pen[3]}:null,this.animals=t.animals.map(([l,c,h],u)=>({kind:l,x:c,z:h,r:ou[l].r,vx:0,vz:0,wander:u*1.7,penned:!1,heading:0})),this.cells=[];for(let[l,c,h,u,d]of t.fields)for(let f=0;f<h/.5;f++)for(let m=0;m<u/.5;m++){let A=l+(f+.5)*.5,g=c+(m+.5)*.5;this.rocks.some(y=>(y.x-A)**2+(y.z-g)**2<du*du)||this.cells.push({x:A,z:g,crop:d,cut:!1})}this.total=this.cells.length,this.cutCount=0,this.grid=new Map,this.cells.forEach((l,c)=>{let h=`${Math.floor(l.x/2)},${Math.floor(l.z/2)}`;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(c)}),this.load=0,this.loadMix={wheat:0,corn:0,sunflower:0},this.coins=0,this.sold={flour:0,hay:0,corn:0,seeds:0},this.bumps=0,this.full=!1,this.done=!1,this.unloading=!1,this.t={x:this.pad.x,z:this.pad.z-2.5,heading:-Math.PI/2,speed:0,bump:0}}emit(t,e={}){this.events.push({type:t,...e})}get progress(){return this.total?this.cutCount/this.total:1}get penned(){return this.animals.filter(t=>t.penned).length}step(t,e){this.events.length=0,t=Math.min(t,.1);let n=Math.max(1,Math.ceil(t/(1/60)-1e-6));for(let s=0;s<n;s++)this._step(t/n,e)}_step(t,e){if(this.done)return;this.time+=t;let n=this.t,s=$n(Math.hypot(e.x,e.z),0,1);if(n.bump>0&&(n.bump-=t),s>.15&&n.bump<=0){let u=Math.atan2(e.z,e.x),d=m0(n.heading,u);n.heading+=$n(d,-2.6*t,2.6*t);let f=this.maxSpeed*s*(Math.abs(d)>1.6?.35:1);n.speed+=(f-n.speed)*Math.min(1,t*3)}else n.speed+=(0-n.speed)*Math.min(1,t*4);let r=Math.cos(n.heading),a=Math.sin(n.heading),o=n.x+r*n.speed*t,l=n.z+a*n.speed*t,c=1.4;o=$n(o,-this.W/2+c,this.W/2-c),l=$n(l,-this.D/2+c,this.D/2-c);let h=this.barn;Math.abs(o-h.x)<h.w/2+1.2&&Math.abs(l-h.z)<h.d/2+1.2&&(o=n.x,l=n.z,n.speed*=.5);for(let u of this.rocks)Math.hypot(o+r*1-u.x,l+a*1-u.z)<u.r+.75&&n.bump<=0&&(n.bump=.45,n.speed=-1.5,this.bumps++,this.emit("rock",{x:u.x,z:u.z}),o=n.x,l=n.z);n.x=o,n.z=l,this._cut(t),this._animals(t),this._unload(t)}cutterBox(){let t=this.t;return{cx:t.x+Math.cos(t.heading)*1.8,cz:t.z+Math.sin(t.heading)*1.8,half:this.cutter/2,depth:.45,heading:t.heading}}_cut(){if(this.load>=this.capacity-1e-6)return;let t=this.t;if(Math.abs(t.speed)<.2)return;let e=this.cutterBox(),n=Math.cos(e.heading),s=Math.sin(e.heading),r=e.half+1,a=[];for(let o=Math.floor((e.cx-r)/2);o<=Math.floor((e.cx+r)/2);o++)for(let l=Math.floor((e.cz-r)/2);l<=Math.floor((e.cz+r)/2);l++){let c=this.grid.get(`${o},${l}`);if(c)for(let h of c){let u=this.cells[h];if(u.cut)continue;let d=u.x-e.cx,f=u.z-e.cz,m=d*n+f*s,A=-d*s+f*n;if(Math.abs(m)<=e.depth&&Math.abs(A)<=e.half){if(this.load>=this.capacity)break;u.cut=!0,this.cutCount++;let g=Gs[u.crop].yield;this.load=Math.min(this.capacity,this.load+g),this.loadMix[u.crop]+=g,a.push(h)}}}a.length&&this.emit("cut",{cells:a}),this.load>=this.capacity-1e-6&&!this.full&&(this.full=!0,this.emit("full"))}_animals(t){let e=this.t;for(let n of this.animals){if(n.penned){n.wander+=t;let h=this.pen;n.x=$n(n.x+Math.cos(n.wander*.6)*t*.3,h.x+.8,h.x+h.w-.8),n.z=$n(n.z+Math.sin(n.wander*.5)*t*.3,h.z+.8,h.z+h.d-.8);continue}let s=n.x-e.x,r=n.z-e.z,a=Math.hypot(s,r)||1,o=0,l=0;if(a<4.5){let h=(4.5-a)/4.5;o=s/a*3.2*h,l=r/a*3.2*h}else n.wander+=t,o=Math.cos(n.wander*.4)*.25,l=Math.sin(n.wander*.33)*.25;n.vx+=(o-n.vx)*Math.min(1,t*4),n.vz+=(l-n.vz)*Math.min(1,t*4),n.x=$n(n.x+n.vx*t,-this.W/2+1,this.W/2-1),n.z=$n(n.z+n.vz*t,-this.D/2+1,this.D/2-1),Math.hypot(n.vx,n.vz)>.05&&(n.heading=Math.atan2(n.vz,n.vx));let c=this.pen;c&&n.x>c.x&&n.x<c.x+c.w&&n.z>c.z&&n.z<c.z+c.d&&(n.penned=!0,this.emit("penned",{kind:n.kind,n:this.penned,of:this.animals.length}))}}_unload(t){var l;let e=this.t,n=this.pad,s=e.x-Math.cos(e.heading)*3,r=e.z-Math.sin(e.heading)*3,a=(c,h)=>Math.abs(c-n.x)<n.w/2+.6&&Math.abs(h-n.z)<n.d/2+.6;if((a(e.x,e.z)||a(s,r))&&this.load>0){this.unloading||(this.unloading=!0,this.emit("unloadStart"));let c=Math.min(this.load,160*t),h=this.load,u=0;for(let f of Object.keys(this.loadMix)){let m=this.loadMix[f]/h*c;this.loadMix[f]-=m,u+=m*Gs[f].price*this.priceBonus;let A=Gs[f].product;A==="flour"?(this.sold.flour+=m*.5,this.sold.hay+=m*.5):this.sold[A]+=m}this.load-=c,this._earned=((l=this._earned)!=null?l:0)+u;let d=Math.floor(this._earned);if(d>0&&(this._earned-=d,this.coins+=d,this.emit("coins",{n:d,total:this.coins})),this.load<=1e-6){this.load=0;for(let f of Object.keys(this.loadMix))this.loadMix[f]=0;this.full=!1,this.unloading=!1,this.emit("unloaded")}}else this.unloading&&(this.unloading=!1);if(!this.done&&this.progress>=g0&&this.load===0){this.done=!0;let h=1+(this.animals.length===0||this.penned===this.animals.length?1:0)+(this.bumps<=2?1:0);this.result={stars:h,coins:this.coins,bumps:this.bumps,penned:this.penned,animals:this.animals.length,time:this.time},this.emit("done",this.result)}}};function Xs(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new oe,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=fu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let A=0;A<a[h].length;++A)f.push(a[h][A][d]);let m=fu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function fu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new de(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let A=h.getComponent(d,m);o.setComponent(d+u,m,A)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var A0=/^[og]\s*(.+)?/,x0=/^mtllib /,v0=/^usemtl /,C0=/^usemap /,pu=/\s+/,gu=new T,cc=new T,mu=new T,Au=new T,Qe=new T,ga=new Mt;function _0(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){let s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){let s=this.vertices,r=this.object.geometry.normals;gu.fromArray(s,t),cc.fromArray(s,e),mu.fromArray(s,n),Qe.subVectors(mu,cc),Au.subVectors(gu,cc),Qe.cross(Au),Qe.normalize(),r.push(Qe.x,Qe.y,Qe.z),r.push(Qe.x,Qe.y,Qe.z),r.push(Qe.x,Qe.y,Qe.z)},addColor:function(t,e,n){let s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let m=this.normals.length;u=this.parseNormalIndex(o,m),d=this.parseNormalIndex(l,m),f=this.parseNormalIndex(c,m),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(s!==void 0&&s!==""){let m=this.uvs.length;u=this.parseUVIndex(s,m),d=this.parseUVIndex(r,m),f=this.parseUVIndex(a,m),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){let r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";let n=this.vertices.length,s=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,a=e.length;r<a;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}var ma=class extends xn{constructor(t){super(t),this.materials=null}load(t,e,n,s){let r=this,a=new ts(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){let e=new _0;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));let n=t.split(`
`),s=[];for(let o=0,l=n.length;o<l;o++){let c=n[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(pu);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(ga.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),re),e.colors.push(ga.r,ga.g,ga.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=c.slice(1).trim().split(pu),f=[];for(let A=0,g=d.length;A<g;A++){let p=d[A];if(p.length>0){let y=p.split("/");f.push(y)}}let m=f[0];for(let A=1,g=f.length-1;A<g;A++){let p=f[A],y=f[A+1];e.addFace(m[0],p[0],y[0],m[1],p[1],y[1],m[2],p[2],y[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let m=0,A=u.length;m<A;m++){let g=u[m].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&f.push(g[1])}e.addLineGeometry(d,f)}else if(h==="p"){let d=c.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((s=A0.exec(c))!==null){let u=(" "+s[0].slice(1).trim()).slice(1);e.startObject(u)}else if(v0.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(x0.test(c))e.materialLibraries.push(c.substring(7).trim());else if(C0.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){let d=s[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;let u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();let r=new jt;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){let c=e.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points",m=!1;if(h.vertices.length===0)continue;let A=new oe;A.setAttribute("position",new Qt(h.vertices,3)),h.normals.length>0&&A.setAttribute("normal",new Qt(h.normals,3)),h.colors.length>0&&(m=!0,A.setAttribute("color",new Qt(h.colors,3))),h.hasUVIndices===!0&&A.setAttribute("uv",new Qt(h.uvs,2));let g=[];for(let y=0,v=u.length;y<v;y++){let x=u[y],U=x.name+"_"+x.smooth+"_"+m,S=e.materials[U];if(this.materials!==null){if(S=this.materials.create(x.name),d&&S&&!(S instanceof mi)){let w=new mi;qe.prototype.copy.call(w,S),w.color.copy(S.color),S=w}else if(f&&S&&!(S instanceof Ke)){let w=new Ke({size:10,sizeAttenuation:!1});qe.prototype.copy.call(w,S),w.color.copy(S.color),w.map=S.map,S=w}}S===void 0&&(d?S=new mi:f?S=new Ke({size:1,sizeAttenuation:!1}):S=new Qi,S.name=x.name,S.flatShading=!x.smooth,S.vertexColors=m,e.materials[U]=S),g.push(S)}let p;if(g.length>1){for(let y=0,v=u.length;y<v;y++){let x=u[y];A.addGroup(x.groupStart,x.groupCount,y)}d?p=new Ls(A,g):f?p=new je(A,g):p=new zt(A,g)}else d?p=new Ls(A,g[0]):f?p=new je(A,g[0]):p=new zt(A,g[0]);p.name=c.name,r.add(p)}else if(e.vertices.length>0){let o=new Ke({size:1,sizeAttenuation:!1}),l=new oe;l.setAttribute("position",new Qt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Qt(e.colors,3)),o.vertexColors=!0);let c=new je(l,o);r.add(c)}return r}};var Aa=class extends xn{constructor(t){super(t)}load(t,e,n,s){let r=this,a=this.path===""?aa.extractUrlBase(t):this.path,o=new ts(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{e(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){let n=t.split(`
`),s={},r=/\s+/,a={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;let h=c.indexOf(" "),u=h>=0?c.substring(0,h):c;u=u.toLowerCase();let d=h>=0?c.substring(h+1):"";if(d=d.trim(),u==="newmtl")s={name:d},a[d]=s;else if(u==="ka"||u==="kd"||u==="ks"||u==="ke"){let f=d.split(r,3);s[u]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else s[u]=d}let o=new hc(this.resourcePath||e,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}},hc=class{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:An,this.wrap=this.options.wrap!==void 0?this.options.wrap:Yn}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;let e={};for(let n in t){let s=t[n],r={};e[n]=r;for(let a in s){let o=!0,l=s[a],c=a.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break;default:break}o&&(r[c]=l)}}return e}preload(){for(let t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(let e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){let e=this,n=this.materialsInfo[t],s={name:t,side:this.side};function r(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function a(o,l){if(s[o])return;let c=e.getTextureParams(l,s),h=e.loadTexture(r(e.baseUrl,c.url));h.repeat.copy(c.scale),h.offset.copy(c.offset),h.wrapS=e.wrap,h.wrapT=e.wrap,(o==="map"||o==="emissiveMap")&&(h.colorSpace=re),s[o]=h}for(let o in n){let l=n[o],c;if(l!=="")switch(o.toLowerCase()){case"kd":s.color=Yt.toWorkingColorSpace(new Mt().fromArray(l),re);break;case"ks":s.specular=Yt.toWorkingColorSpace(new Mt().fromArray(l),re);break;case"ke":s.emissive=Yt.toWorkingColorSpace(new Mt().fromArray(l),re);break;case"map_kd":a("map",l);break;case"map_ks":a("specularMap",l);break;case"map_ke":a("emissiveMap",l);break;case"norm":a("normalMap",l);break;case"map_bump":case"bump":a("bumpMap",l);break;case"map_d":a("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break;default:break}}return this.materials[t]=new Qi(s),this.materials[t]}getTextureParams(t,e){let n={scale:new J(1,1),offset:new J(0,0)},s=t.split(/\s+/),r;return r=s.indexOf("-bm"),r>=0&&(e.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),n.url=s.join(" ").trim(),n}loadTexture(t,e,n,s,r){let a=this.manager!==void 0?this.manager:rc,o=a.getHandler(t);o===null&&(o=new sa(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);let l=o.load(t,n,s,r);return e!==void 0&&(l.mapping=e),l}};var uc=new Map;function ct(i,t=0,e=1){let n=`${i}|${t}|${e}`;return uc.has(n)||uc.set(n,new cn({color:i,emissive:t,emissiveIntensity:e})),uc.get(n)}function Ot(i,t,e,n,s=0,r=0,a=0){let o=new zt(new He(i,t,e),n);return o.position.set(s,r,a),o}function ge(i,t,e,n,s=0,r=0,a=0,o=14){let l=new zt(new Ns(i,t,e,o),n);return l.position.set(s,r,a),l}function We(i,t,e=0,n=0,s=0,r=1,a=1,o=1,l=12){let c=new zt(new ks(i,l,Math.max(6,l-4)),t);return c.position.set(e,n,s),c.scale.set(r,a,o),c}function Dn(i,t=[]){i.updateMatrixWorld(!0);let e=new Zt().copy(i.matrixWorld).invert(),n=new Map,s=[];i.traverse(a=>{if(t.includes(a.name)){s.push(a);return}if(!a.isMesh||s.some(l=>y0(a,l)))return;let o=a.geometry.clone().applyMatrix4(new Zt().multiplyMatrices(e,a.matrixWorld));for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);o.index||o.setIndex([...Array(o.attributes.position.count).keys()]),n.has(a.material)||n.set(a.material,[]),n.get(a.material).push(o)});let r=new jt;for(let[a,o]of n)r.add(new zt(Xs(o,!1),a));for(let a of s){let o=new T,l=new Fe,c=new T;a.updateMatrixWorld(!0),new Zt().multiplyMatrices(e,a.matrixWorld).decompose(o,l,c),a.removeFromParent(),a.position.copy(o),a.quaternion.copy(l),a.scale.copy(c),r.add(a)}return r}function y0(i,t){for(let e=i.parent;e;e=e.parent)if(e===t)return!0;return!1}function vu(i){let t=new jt,e=ct(4033533,1060970,.25),n=ct(2778052),s=ct(16763955,6965760,.2),r=ct(2829107),a=ct(12577023,4892376,.35),o=ct(14672874);t.add(Ot(2.6,1.1,1.7,e,-.2,1.15,0)),t.add(Ot(2.2,.35,1.75,n,-.3,.6,0)),t.add(Ot(1.4,.5,1.5,e,-.6,1.95,0)),t.add(Ot(1.3,.12,1.4,s,-.6,2.25,0)),t.add(Ot(.95,.9,1.1,a,.75,2.05,0)),t.add(Ot(1.1,.1,1.25,e,.75,2.55,0)),t.add(We(.2,ct(16239529),.8,2.05,0)),t.add(ge(.34,.34,.05,ct(15254122),.8,2.24,0,16)),t.add(ge(.18,.2,.18,ct(15254122),.8,2.33,0)),t.add(Ot(.3,.3,.42,ct(15222847),.78,1.78,0));for(let p of[-1,1]){let y=ge(.62,.62,.42,r,.45,.62,p*.95,18);y.rotation.x=Math.PI/2,t.add(y);let v=ge(.26,.26,.44,s,.45,.62,p*.96,12);v.rotation.x=Math.PI/2,t.add(v);let x=ge(.4,.4,.34,r,-1.2,.42,p*.88,14);x.rotation.x=Math.PI/2,t.add(x)}t.add(ge(.07,.07,.8,o,-.9,2.5,-.55,8));let l=new jt;l.name="spout";let c=ge(.12,.12,1.8,s,0,0,0,10);c.rotation.z=Math.PI/2,c.position.x=-.9,l.add(c),l.position.set(-.8,2.3,.5),l.rotation.y=-.35,t.add(l);let h=Dn(t,["spout"]),u=new jt;u.name="header",u.position.set(1.55,.45,0);let d=Ot(.7,.35,1,s,0,0,0);u.add(d);let f=Ot(.12,.06,1,ct(13620442),.38,-.13,0);u.add(f);for(let p of[-.5,.5])u.add(Ot(.75,.5,.06,s,0,.12,p));let m=new jt;m.position.set(.25,.45,0);let A=ge(.05,.05,1,ct(15222847),0,0,0,8);A.rotation.x=Math.PI/2,m.add(A);for(let p=0;p<5;p++){let y=p/5*Math.PI*2,v=Ot(.05,.05,1,ct(15222847),Math.cos(y)*.32,Math.sin(y)*.32,0);m.add(v)}u.add(m),h.add(u);let g=p=>{d.scale.z=p,f.scale.z=p,u.children[2].position.z=-p/2,u.children[3].position.z=p/2,m.scale.z=p*.95};return g(i),{root:h,reel:m,header:u,spout:h.children.find(p=>p.name==="spout"),setWidth:g}}function Cu(){let i=new jt,t=ct(16747050,5908992,.2),e=ct(11883546),n=ct(2829107);i.add(Ot(2.2,.15,1.5,e,0,.7,0));for(let l of[-.72,.72])i.add(Ot(2.2,.7,.08,t,0,1.1,l));for(let l of[-1.08,1.08])i.add(Ot(.08,.7,1.5,t,l,1.1,0));i.add(Ot(1.2,.08,.1,ct(6711923),1.7,.6,0));for(let l of[-.85,.85]){let c=ge(.42,.42,.28,n,-.2,.42,l,14);c.rotation.x=Math.PI/2,i.add(c)}let s=Dn(i),r=new zt(new He(2.05,1,1.35),ct(15909198,6965760,.25));r.position.y=.78,r.scale.y=.001,s.add(r);let a=new zt(new ks(1,14,8,0,Math.PI*2,0,Math.PI/2),ct(16174944,6965760,.25));return a.scale.set(1,.001,.66),s.add(a),{root:s,setFill:l=>{let c=.05+l*.62;r.scale.y=Math.max(.001,c),r.position.y=.78+c/2,a.position.y=.78+c,a.scale.y=l>.02?.12+l*.25:.001}}}function xa(){let i=new jt,t=ct(14235198,4196362,.25),e=ct(16777215),n=ct(5917250);i.add(Ot(7,4,5,t,0,2,0));let s=new Ai([new J(-3.8,0),new J(3.8,0),new J(0,2.4)]),r=new Ji(s,{depth:5.4,bevelEnabled:!1});r.translate(0,4,-2.7),i.add(new zt(r,n));let a=new Ji(new Ai([new J(-3.5,0),new J(3.5,0),new J(0,2.1)]),{depth:.05,bevelEnabled:!1});a.translate(0,4,2.5),i.add(new zt(a,t)),i.add(Ot(2.6,2.8,.1,ct(11872817),0,1.4,2.53));let o=Ot(.18,3.6,.06,e,0,1.4,2.6);o.rotation.z=.75;let l=Ot(.18,3.6,.06,e,0,1.4,2.6);return l.rotation.z=-.75,i.add(o,l),i.add(Ot(2.9,.18,.1,e,0,2.85,2.6),Ot(.18,2.9,.1,e,-1.36,1.4,2.6),Ot(.18,2.9,.1,e,1.36,1.4,2.6)),i.add(Ot(.9,.9,.1,e,0,4.9,2.58),Ot(.7,.7,.1,ct(2829107),0,4.9,2.62)),Dn(i)}function _u(i,t){let e=new jt,n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d");s.fillStyle="#2f3540",s.fillRect(0,0,128,128),s.fillStyle="#4a5260";for(let o=8;o<128;o+=14)s.fillRect(o,10,6,108);for(let o=0;o<128;o+=16)s.fillStyle=o/16%2?"#ffcc33":"#222",s.fillRect(o,0,16,8),s.fillRect(o,120,16,8),s.fillRect(0,o,8,16),s.fillRect(120,o,8,16);let r=new Ge(n);r.colorSpace=re;let a=new zt(new ln(i,t),new cn({map:r}));return a.rotation.x=-Math.PI/2,a.position.y=.04,e.add(a),e}function yu(){let i=new jt,t=ct(16763955,16755200,.6);i.add(Ot(.5,1,.5,t,0,1.2,0));let e=new zt(new Fs(.75,.9,4),t);return e.rotation.x=Math.PI,e.rotation.y=Math.PI/4,e.position.y=.3,i.add(e),i}function Iu(){let i=ge(.55,.55,.9,ct(15254106,4863232,.15),0,.55,0,14);i.rotation.x=Math.PI/2;let t=new jt;t.add(i);for(let e of[-.2,.2]){let n=ge(.56,.56,.06,ct(11883546),0,.55,e,14);n.rotation.x=Math.PI/2,t.add(n)}return Dn(t)}function Mu(i=16447210){let t=new jt;return t.add(We(.38,ct(i),0,.35,0,1,1.1,.8)),t.add(ge(.12,.18,.18,ct(i),0,.78,0)),t.add(Ot(.3,.04,.02,ct(14235198),0,.4,.31)),Dn(t)}function bu(i){i.updateMatrixWorld(!0);let t=new Map;return i.traverse(e=>{if(!e.isMesh)return;let n=e.geometry.clone().applyMatrix4(e.matrixWorld);for(let o of Object.keys(n.attributes))["position","normal"].includes(o)||n.deleteAttribute(o);n.index||n.setIndex([...Array(n.attributes.position.count).keys()]);let s=new Mt(e.material.color),r=n.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a.set([s.r,s.g,s.b],o*3);n.setAttribute("color",new de(a,3)),t.set(t.size,n)}),Xs([...t.values()],!1)}function Su(i){let t=new jt;if(i==="wheat"){let e=ct(14263866),n=ct(16107596);for(let[s,r,a]of[[-.1,-.08,.95],[.1,.05,1.05],[0,.12,.85],[.12,-.12,.9],[-.12,.12,1]])t.add(ge(.018,.022,a,e,s,a/2,r,4)),t.add(We(.05,n,s,a+.1,r,1,2.6,1,5))}else if(i==="corn"){let e=ct(5940794),n=ct(7126853);t.add(ge(.04,.06,1.6,e,0,.8,0,5));for(let s=0;s<4;s++){let r=Ot(.55,.02,.12,n,.22,.45+s*.3,0);r.rotation.y=s*1.6,r.rotation.z=-.5,t.add(r)}t.add(We(.08,ct(16241482),.08,1,0,1,2.4,1,6)),t.add(ge(.02,.04,.3,ct(14729322),0,1.75,0,4))}else{let e=ct(5216821);t.add(ge(.035,.05,1.4,e,0,.7,0,5)),t.add(Ot(.35,.02,.16,ct(6534468),.12,.6,0));let n=new jt;n.position.set(.05,1.42,0),n.rotation.z=-.5;let s=ge(.26,.26,.05,ct(16763176),0,0,0,12);n.add(s),n.add(ge(.14,.14,.07,ct(7028509),0,.02,0,10)),t.add(n)}return bu(t)}function Eu(){let i=new jt,t=ct(13214026);for(let[e,n]of[[-.12,-.1],[.1,.08],[0,.14],[.13,-.12],[-.1,.12],[.02,-.02]])i.add(ge(.02,.025,.14,t,e,.07,n,4));return bu(i)}function wu(){let i=new jt,t=new zt(new ta(.75,0),ct(9278622,1711394,.2));return t.scale.set(1,.65,.9),t.position.y=.35,t.rotation.y=.6,i.add(t),i.add(We(.32,ct(10134189),.6,.2,.3,1,.7,1,6)),i.add(We(.35,ct(7319103),-.1,.72,0,1.2,.25,1,6)),Dn(i)}var xu=0;function va(i=1){let t=xu++%3===2?"bush":"tree";if(os[t]){let s=new an().setFromObject(os[t]),r=(t==="tree"?3.4:1.3)*i,a=os[t].clone(!0),o=r/Math.max(1e-6,s.max.y-s.min.y);a.scale.setScalar(o),a.position.y=-s.min.y*o,a.rotation.y=xu*1.7;let l=new jt;return l.add(a),l}let e=new jt;e.add(ge(.18*i,.25*i,1.6*i,ct(9065776),0,.8*i,0,7));let n=ct(5025616,670224,.2);return e.add(We(1.1*i,n,0,2.2*i,0,1,.9,1,9)),e.add(We(.8*i,ct(6734426),.5*i,2.7*i,.2*i,1,.9,1,8)),e}var os={};async function Tu(i){let t=(i||"./").replace(/\/?$/,"/")+"models/",e={tree:{darkgreen_tree:4168252,green_tree:6471498,darkred:14698554,wood:9065776},bush:{berry:14169162,green_bush:5814344},chicken:{"material.001":16765498,"material.002":16747034}};await Promise.all([["cow","Cow"],["sheep","Sheep"],["chicken","Chick"],["tree","Apple_4"],["bush","BushBerries_4"]].map(async([n,s])=>{try{let r=await new Promise((o,l)=>new Aa().setPath(t).load(`${s}.mtl`,o,void 0,l));r.preload();let a=await new Promise((o,l)=>new ma().setMaterials(r).setPath(t).load(`${s}.obj`,o,void 0,l));a.traverse(o=>{o.isMesh&&(o.material=Array.isArray(o.material)?o.material.map(l=>{let c=l.clone();c.flatShading=!1,c.shininess=8,c.specular.setScalar(.05);let h=(c.name||"").toLowerCase();return e[n]&&e[n][h]!==void 0?(c.color.set(e[n][h]),c):(c.color.set(h==="white"?16775922:h==="black"?3816006:h==="pink"?16752564:c.color.getHex()),c)}):o.material)}),os[n]=a}catch{}}))}function Vu(i){if(os[i]){let e=os[i].clone(!0);e.scale.setScalar(i==="chicken"?.11:.18),e.rotation.y=Math.PI/2;let n=new jt;return n.add(e),n}let t=new jt;if(i==="sheep"){let e=ct(16447730);for(let[n,s,r]of[[0,.62,0],[.25,.65,.12],[-.25,.62,-.1],[.05,.75,-.15],[-.15,.72,.15]])t.add(We(.32,e,n,s,r,1,1,1,8));t.add(We(.2,ct(2829107),.5,.75,0,1.2,1,.9,8));for(let n of[-1,1])t.add(We(.08,ct(2829107),.48,.88,n*.18,1,.5,1.4,6));for(let[n,s]of[[.25,.15],[.25,-.15],[-.25,.15],[-.25,-.15]])t.add(ge(.05,.05,.4,ct(2829107),n,.2,s,6))}else if(i==="cow"){let e=ct(16777215),n=ct(2829107);t.add(Ot(1.4,.75,.8,e,0,.95,0)),t.add(Ot(.5,.45,.82,n,-.25,1.05,0)),t.add(Ot(.3,.35,.82,n,.4,.9,0)),t.add(Ot(.5,.5,.5,e,.85,1.25,0)),t.add(Ot(.2,.28,.46,ct(16752564),1.15,1.13,0));for(let s of[-1,1])t.add(Ot(.1,.12,.18,ct(16115400),.85,1.58,s*.22));for(let[s,r]of[[.5,.28],[.5,-.28],[-.5,.28],[-.5,-.28]])t.add(Ot(.16,.6,.16,e,s,.3,r))}else{t.add(We(.26,ct(16777215),0,.35,0,1.2,1,1,8)),t.add(We(.15,ct(16777215),.25,.6,0,1,1,1,8)),t.add(Ot(.1,.12,.04,ct(15222847),.25,.78,0)),t.add(Ot(.1,.05,.06,ct(16755251),.42,.6,0));for(let e of[-1,1])t.add(ge(.02,.02,.2,ct(16755251),0,.1,e*.1,4))}return Dn(t)}function Ru(){let i=new jt;i.add(Ot(4.2,2.6,3.4,ct(16774112),0,1.3,0));let t=new Ai([new J(-2.5,0),new J(2.5,0),new J(0,1.8)]),e=new Ji(t,{depth:3.8,bevelEnabled:!1});e.translate(0,2.6,-1.9),i.add(new zt(e,ct(4156356))),i.add(Ot(.9,1.5,.08,ct(10510381),0,.75,1.72));for(let n of[-1.3,1.3])i.add(Ot(.8,.7,.08,ct(12577023,4892376,.3),n,1.6,1.72));return i.add(Ot(.5,1.1,.5,ct(11881018),1.2,4,-.5)),Dn(i)}function Pu(){let i=new jt;i.add(ge(.9,1.4,6,ct(16774112),0,3,0,10)),i.add(new zt(new Fs(1.2,1.4,10),ct(14235198)).translateY(6.7));let t=Dn(i),e=new jt;e.position.set(0,5.8,1.15);for(let n=0;n<4;n++){let s=Ot(.5,3.2,.06,ct(16447210),0,1.6,0),r=new jt;r.rotation.z=n*Math.PI/2,r.add(s),e.add(r)}return t.add(e),t.userData.blades=e,t}function I0(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle="#6cc04a",t.fillRect(0,0,256,256);for(let n=0;n<1400;n++){let s=Math.random();t.fillStyle=s<.5?"rgba(80,160,50,0.6)":s<.85?"rgba(140,215,90,0.6)":"rgba(255,255,255,0.5)",t.fillRect(Math.random()*256,Math.random()*256,2,s<.97?3:2)}let e=new Ge(i);return e.wrapS=e.wrapT=Yn,e.colorSpace=re,e}function M0(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#b8864f",t.fillRect(0,0,128,128);for(let n=0;n<128;n+=8)t.fillStyle="rgba(120,80,40,0.35)",t.fillRect(0,n,128,3);for(let n=0;n<300;n++)t.fillStyle=Math.random()<.5?"rgba(90,60,30,0.4)":"rgba(220,180,120,0.4)",t.fillRect(Math.random()*128,Math.random()*128,2,2);let e=new Ge(i);return e.wrapS=e.wrapT=Yn,e.colorSpace=re,e}function b0(i){let t=new cn({vertexColors:!0});return t.onBeforeCompile=e=>{e.uniforms.uTime=i.uTime,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       #ifdef USE_INSTANCING
         float ph = instanceMatrix[3].x * 0.45 + instanceMatrix[3].z * 0.3;
         float bend = position.y * position.y * 0.06;
         transformed.x += sin(uTime * 1.6 + ph) * bend;
         transformed.z += cos(uTime * 1.3 + ph) * bend * 0.6;
       #endif`)},t}var Ca=class{constructor(t,e,n){var z;this.scene=t,this.farm=e,this.root=new jt,t.add(this.root);let s=e.level;t.background=new Mt(10476799),t.fog=new ji(12577023,40,110),this.root.add(new es(16774358,6262586,1.7));let r=new ns(16773328,1.5);r.position.set(-10,25,12),this.root.add(r);let a=I0();a.repeat.set(s.w/4+10,s.d/4+10);let o=new zt(new ln(s.w+40,s.d+40),new cn({map:a}));o.rotation.x=-Math.PI/2,this.root.add(o);let l=M0();for(let[R,H,F,K]of s.fields){let O=l.clone();O.needsUpdate=!0,O.repeat.set(F/3,K/3);let tt=new zt(new ln(F+.6,K+.6),new cn({map:O}));tt.rotation.x=-Math.PI/2,tt.position.set(R+F/2,.02,H+K/2),this.root.add(tt)}let c=new zt(new jn(7.5,28),ct(11569754));c.rotation.x=-Math.PI/2,c.position.set(e.pad.x-2,.015,e.pad.z),this.root.add(c),this.uniforms={uTime:{value:0}},this.crops={};let h={};for(let R of e.cells)h[R.crop]=((z=h[R.crop])!=null?z:0)+1;let u=new Zt,d=new Fe,f=new T(0,1,0);this.cellIndex=new Int32Array(e.cells.length),this.baseMatrix=[];for(let R of Object.keys(h)){let H=new gi(Su(R),b0(this.uniforms),h[R]);H.frustumCulled=!1,this.crops[R]={mesh:H,n:0},this.root.add(H)}let m=new gi(Eu(),new cn({vertexColors:!0}),e.cells.length);m.frustumCulled=!1,this.stubble=m;let A=new Zt().makeScale(0,0,0);e.cells.forEach((R,H)=>{let F=this.crops[R.crop],K=Math.sin(H*12.9898)*43758.5453%1;d.setFromAxisAngle(f,K*Math.PI*2);let O=.85+Math.abs(K)*.3;u.compose(new T(R.x+(K-.5)*.12,0,R.z+(K*7%1-.5)*.12),d,new T(O,O,O)),F.mesh.setMatrixAt(F.n,u),this.cellIndex[H]=F.n,this.baseMatrix.push(u.clone()),F.n++,m.setMatrixAt(H,A)}),this.root.add(m),this.falling=[];for(let R of e.rocks){let H=wu();H.position.set(R.x,0,R.z),H.rotation.y=R.x*1.3,this.root.add(H)}let g=[],p=[],y=s.w/2,v=s.d/2,x=(R,H,F,K)=>{let O=Math.hypot(F-R,K-H),tt=Math.ceil(O/2.5);for(let st=0;st<=tt;st++)g.push([R+(F-R)*st/tt,H+(K-H)*st/tt]);for(let st=0;st<tt;st++){let ft=R+(F-R)*st/tt,Pt=H+(K-H)*st/tt,Xt=R+(F-R)*(st+1)/tt,X=H+(K-H)*(st+1)/tt;p.push([(ft+Xt)/2,(Pt+X)/2,Math.hypot(Xt-ft,X-Pt),Math.atan2(X-Pt,Xt-ft)])}};x(-y,-v,y,-v),x(-y,v,y,v),x(-y,-v,-y,v),x(y,-v,y,v);let U=new He(.18,1.1,.18);U.translate(0,.55,0);let S=new gi(U,ct(16777215),g.length);g.forEach(([R,H],F)=>S.setMatrixAt(F,new Zt().makeTranslation(R,0,H))),this.root.add(S);let w=new He(1,.1,.08),P=new gi(w,ct(16777215),p.length*2);p.forEach(([R,H,F,K],O)=>{for(let[tt,st]of[[0,.5],[1,.9]])P.setMatrixAt(O*2+tt,new Zt().compose(new T(R,st,H),new Fe().setFromAxisAngle(f,-K),new T(F,1,1)))}),this.root.add(P);let M=n.low?14:26;for(let R=0;R<M;R++){let H=R/M*Math.PI*2,F=(y+4+R%3*3)*Math.cos(H),K=(v+4+R%4*2.5)*Math.sin(H),O=va(.9+R%3*.25);O.position.set(F,0,K),this.root.add(O)}let _=new zt(new jn(3,28),new cn({color:5223400,emissive:1727114,emissiveIntensity:.3}));_.rotation.x=-Math.PI/2,_.position.set(y-5,.03,-v+5),_.scale.set(1.4,1,1),this.root.add(_);let V=Ru();V.position.set(-y-5,0,v-8),V.rotation.y=Math.PI/2,this.root.add(V),this.windmill=Pu(),this.windmill.position.set(y+6,0,v-10),this.windmill.rotation.y=-Math.PI/2,this.root.add(this.windmill);let G=xa();if(G.position.set(e.barn.x,0,e.barn.z),this.root.add(G),this.root.add(Object.assign(_u(e.pad.w,e.pad.d),{}).translateX(e.pad.x).translateZ(e.pad.z)),this.arrow=yu(),this.arrow.position.set(e.pad.x,1.5,e.pad.z),this.arrow.visible=!1,this.root.add(this.arrow),this.stacks=new jt,this.stacks.position.set(e.barn.x+4.6,0,e.barn.z+3.6),this.root.add(this.stacks),e.pen){let R=e.pen,H=ct(10510381),F=[],K=(st,ft,Pt,Xt)=>{let X=Math.hypot(Pt-st,Xt-ft);for(let xt of[.4,.8]){let rt=new He(X,.12,.1);rt.rotateY(-Math.atan2(Xt-ft,Pt-st)),rt.translate((st+Pt)/2,xt,(ft+Xt)/2),F.push(rt)}let nt=Math.ceil(X/1.5);for(let xt=0;xt<=nt;xt++){let rt=new He(.14,1,.14);rt.translate(st+(Pt-st)*xt/nt,.5,ft+(Xt-ft)*xt/nt),F.push(rt)}},O=Math.min(3,R.w/2);K(R.x,R.z,R.x+(R.w-O)/2,R.z),K(R.x+(R.w+O)/2,R.z,R.x+R.w,R.z),K(R.x,R.z+R.d,R.x+R.w,R.z+R.d),K(R.x,R.z,R.x,R.z+R.d),K(R.x+R.w,R.z,R.x+R.w,R.z+R.d),this.root.add(new zt(Xs(F),H));let tt=new zt(new jn(Math.min(R.w,R.d)*.4,20),ct(15254106));tt.rotation.x=-Math.PI/2,tt.position.set(R.x+R.w/2,.03,R.z+R.d/2),this.root.add(tt),this.penSign={x:R.x+R.w/2,z:R.z-.5}}this.animals=e.animals.map(R=>{let H=Vu(R.kind);return this.root.add(H),H})}cut(t){for(let e of t)this.falling.push({i:e,t:0})}update(t,e){if(this.uniforms.uTime.value=e,this.windmill&&(this.windmill.userData.blades.rotation.z=e*.6),this.falling.length){let n=new Zt,s=new Zt,r=new Set;this.falling=this.falling.filter(a=>{a.t+=t;let o=this.farm.cells[a.i],l=this.crops[o.crop],c=Math.min(1,a.t/.22);if(c>=1){l.mesh.setMatrixAt(this.cellIndex[a.i],n.makeScale(0,0,0));let h=.9+a.i*7%5*.05;this.stubble.setMatrixAt(a.i,n.compose(new T(o.x,0,o.z),new Fe().setFromAxisAngle(new T(0,1,0),a.i),new T(h,h,h))),this.stubble.instanceMatrix.needsUpdate=!0}else s.makeRotationZ(c*1.2).premultiply(new Zt().makeScale(1+c*.3,1-c*.85,1+c*.3)),n.multiplyMatrices(this.baseMatrix[a.i],s),l.mesh.setMatrixAt(this.cellIndex[a.i],n);return r.add(l.mesh),c<1});for(let a of r)a.instanceMatrix.needsUpdate=!0}this.farm.animals.forEach((n,s)=>{let r=this.animals[s];r.position.set(n.x,Math.abs(Math.sin(e*6+s))*(Math.hypot(n.vx,n.vz)>.3?.08:0),n.z),r.rotation.y=-n.heading}),this.arrow.visible=this.farm.full,this.arrow.position.y=1.5+Math.abs(Math.sin(e*4))*.7}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose()})}};var Ys=null;function S0(){if(Ys)return Ys;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ys=new Ge(i),Ys.colorSpace=re,Ys}var _a=class{constructor(t,e=400){this.max=e,this.items=[],this.scene=t,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.siz=new Float32Array(e);let n=new oe;n.setAttribute("position",new de(this.pos,3)),n.setAttribute("color",new de(this.col,3)),n.setAttribute("size",new de(this.siz,1));let s=new xe({transparent:!0,depthWrite:!1,blending:Wn,vertexColors:!0,uniforms:{map:{value:S0()},scale:{value:300}},vertexShader:"attribute float size; varying vec3 vC; uniform float scale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ vec4 t = texture2D(map, gl_PointCoord); if (t.a < 0.02) discard; gl_FragColor = vec4(vC * (0.8 + t.a * 0.6), t.a); }"});this.points=new je(n,s),this.points.frustumCulled=!1,this.points.renderOrder=998,t.add(this.points),this.geo=n}burst(t,e={}){let n=e.n||14,s=new Mt(e.color||16765498),r=e.speed||4,a=e.life||.6;for(let o=0;o<n;o++){this.items.length>=this.max&&this.items.shift();let l=Math.random()*Math.PI*2,c=e.up!=null?e.up:Math.random()-.3,h=Math.random()*r,u=e.colors?new Mt(e.colors[o%e.colors.length]):s;this.items.push({x:t.x,y:t.y,z:t.z,vx:Math.cos(l)*h*(e.flat?1:.8),vy:c*r*.8+(e.lift||0),vz:Math.sin(l)*h*(e.flat?1:.8)+(e.vz||0),life:a,max:a*(.7+Math.random()*.6),r:u.r,g:u.g,b:u.b,s:(e.size||.3)*(.6+Math.random()*.8),grav:e.gravity!=null?e.gravity:6})}}update(t){let e=this.items,n=0;for(let s=0;s<e.length;s++){let r=e[s];if(r.life-=t,r.life<=0)continue;r.vy-=r.grav*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t;let a=Math.min(1,r.life/r.max);this.pos[n*3]=r.x,this.pos[n*3+1]=r.y,this.pos[n*3+2]=r.z,this.col[n*3]=r.r,this.col[n*3+1]=r.g,this.col[n*3+2]=r.b,this.siz[n]=r.s*(.3+a),e[n]=r,n++}e.length=n;for(let s=n;s<this.max;s++)this.siz[s]=0;this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}setViewportScale(t){this.points.material.uniforms.scale.value=t*.9}};function ya(i,t=2759226,e=.06){let n=ya._m||(ya._m=new Map),s=n.get(t);s||(s=new Kn({color:t,side:Ve,fog:!1}),n.set(t,s));let r=[];i.traverse(a=>{a.isMesh&&!a.userData.__ol&&a.geometry&&a.material&&!a.material.transparent&&a.material.opacity!==0&&r.push(a)});for(let a of r){let o=new zt(a.geometry,s);o.userData.__ol=!0,o.scale.setScalar(1+e),o.renderOrder=-1,a.add(o)}return i}function Uu(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function Lu(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Du={coin:"data:audio/mpeg;base64,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",pour:"data:audio/mpeg;base64,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XaaCdw0ohU3BJJLY0iQQPFaev9WXTOCFRUPrb5Fm4scZzQwwDuDQj2wpQjj/+zjEwwALUOVZrCRj0ViYbX2TDLpGdmarMSVOUif+Sw25ZE8zCq8CbFwafnq7DxdRyuKBQegNDFW4xP924MriiQBGpJftGAAAFG084LXx1fHPFy2qUNV4RfJeoL0TPlJRXN6+lt8py6q9tU4mP4bQeuYLXJlV9TI4tcs8U8JJGtFmLqZTZgJJCMJXCyeTTU20YVA4/sgEWO5IwQAAjGesyaNS5qXh+Ztf6TSog9Ke4llVlQ4ZkJjGzWHqscvjdUvKMUO7H7SMpeU1jH+fJb8T2aMx/8P4UO//+zjEzAALIIFJ6ZhhyVoT63TDDSrSi+mu5Kxf9ILfDGpdjUKTdPpNQwovgAEi1vfWXSrGfr3KK/l3mGMfeGKiDHdiq+JZ8bx1GNnxo1k3QILEke8SATEdXPRzVNqRMaUcRnIe3NVymNz0zZ/k/d/b9mZq3/9tfOyhV0r5ARCW4OjAaBlwk3B2MPPZUtT1ubUAAKQQAAABhL2BBjwrtsx0FVJZSKkmyj3BV862mK6r4EqkN+FbcF823PxNjFRNa42mm1pQhcKAbq8xHM8L/8/4zv0YNeaOdqT/+zjE1YAKIMFLp4BmEVOvZ7SAj5mOElrScJBWTNYVvj/ed3j/x6aco7JO4IM0Egxs+c+1syWtBpS83pSn1n0RxwsbGfif0r0Io9W4dfmut+uMWznGtfxL3f7/zf/rphm8rDFXl0uXJzcWLxmoRBNGRRMKSAViKheFHdNiiuBWQ3wXoLwK6N8F//yOi/ibw4K8FhO//8F8K/J4KwM4N+LiKhNmxft8J4KwE+FHRWwV3Dv///oLw7gU8F6KTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5AAK4YszRYRjwZWf44qwYABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5wAUQXko2PeAATAAW5+AMAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",done:"data:audio/mpeg;base64,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FW9Z04wnSxtTtw7y1611CteufbH/+tf////9X4frhtZXPM9HjyGz/0sxTGYosCEm5AVBVwiPA0HVgqVBWDURP1nVHoNf/rO9P+IvO//lv9XWGuW/56VVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE8AIMgL0WR+hwQV6X5FqS8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE84AXNXkvOYeACKKAHk+GMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",rock:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABIAABAIABoaGhoaKCgoKCgoNTU1NTVDQ0NDQ0NQUFBQUF5eXl5eXmtra2treXl5eXl5hoaGhoaUlJSUlJShoaGhoaGvr6+vr7y8vLy8vMrKysrK19fX19fX5eXl5eXy8vLy8vL//////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkA8AAAAAAAAAQCKj8YvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAKMC8ybOGAQYyIZWXMJEkAAA0AORN+cHWOkAgiggUA0JhPOzMzMzNeZn5gYGCxYcg+D6wfBwEHawfB8HwcBAEAQBAHwfB8HwIcqDA8HwffKOUGHxOD/5cPwJ/5R2H4nP6AJABQZIDxS0OMIE+6Bh4CpkkUVHWThgnBdChDKE6QuuCqElAKOtb+zeMgoMuiG0AoKKJ1Jgoa8WTc78MgpPj45sKX4q3/cOQbmaFDbUfioKUBSiYKaf7IqKcmf4Sp/ey8///SAAGqWWgM1TCNMJDOuDH/+zjEBwILnE8pLuDCyYcQpFXWDJkMQARGHwTafnOmi9pNIlAMURmnMQRMdHq1rL/pjYFtx8sVT1FoT2cyjoxIoufR/7C/3/6/9W4np42DUvDfZ1P00Qu//5znL/q/39Lz/ifIHgDmYZzWgkzCSBTDAGACAqnB+NA1qiB6k54MzgQ9ExixzBm1BRJlK2GK5tkGp04bPiScgcsSLIY9aK5U2CwWp09zrDL+l6n6rmdKBvMD9m+/L+2+1uu13fmfvavbICXv/90AMNNy1yxyACFXNGazv2AmCl7/+zjECQAL4QExrZhnwWaQZJnMDFCRt5aPsSVTMJfdyGkqXx+TTSRjOPUUQgsxe1Mya62xI5KEw66/NoKkyXya44XOcz//uNu3OHzWxoo1hoCGtnHCAERjC1DGtLpd2cWDSAA3oiBqiJGQgseoGwkSQmTmTb5UdIB11oyPaWvm0BEZDq0em5WgdQImMKV7oiPUEg4ATA8Aiwuk6si8IhkSg4xTXl5hCGjRabQDimGDDfhZEa0WNEmst+4hUuAOqkLNfXyMWFJMJwsYXFGX0kSzf2JFJKFRKSX/+zjEDgINzX8cLphrwV2PpOWzCTj3FtcM0NqG0cDnbmVkudORcdpCSq0hSGnlAiuxjbg3Ga79WlcjQwcGh5m9rknUb099SMbIRFyN7eENmjFEXPkpI2neYL0L9SsM+6l5TZS/IIMz4jfTKB6qUYwzmutiJcPtSfyN2LyN1eVz7zGj/I58vjpcpPYJTkjVNZuQfrOVD44lQg4YCTWmVseByh57krhtpgQkgCWEp9JJriTga7Wy83LLFJhAGZ0YimBVA+9azbBvOPCsOJieTmh5oLBu7RKDcWj/+zjEDIMMMT8gThhkiZ8uY4WzDOFIeiYXjQiPp0thA2IzPLVLyZncBB/SPdpUN97speSBgjhSX2+BsCNEv0zJj3F5b6jKx5EZo+szMstfs9vMLlpi2xkHL7Ka+3owINKpT1uI9N/Dha+80XixyjF7fO4PYrWPTLIU5I9BM7hDKDkRBoiEVlzFmqPuKesQr2YFawgqf5DSHIydUy3ejFNpIUf2T3EngImOqHUOT6XBnrAoSlCyK3Oqnnnc+TLP9QRu5F5aeeoAAArqVA+ZwMXCzPFxRepMOpr/+zjECQIK6IslLYjFgYQe49mzDTgd1DLQGhdrfAl5w63Kqm3LwKc/Xekjsdr/iJl+UttIpYIQ8QGsCYCYDansayXUtptyRzHQ0sVxRjkLY0cMHp9KGKbTkfvCyqgAwVNuUDnnNLRb7iyyQRqUnhMGvUOzs169dwJHVDITgkzILY8RZsmypBBfrcW4arAwU1HPHjQqnXnOExsLtQhk6mnU9n7CcthR2OEknkhwLiIYLGKQgpV6NSX/yOO7agA1Mqh0w6mch2USZHOWwNGrXeIZjX3A9ja+P97/+zjEDgIMCP8gzhhpwaGoIwWjDPh6D6e+kEu52PYzZPatsh7EZZoKpCxNMJrOwMRsKByCuZCgwfrZllC7AcJvh6bwwp6f0acvKnUT0ClVGoimGkyyx7JTS0gDwyjPKhl0pazqHK8iBkBwrgdukCxj2nsq1xZ7YmuENnnpMhCyM1I3EIsNXAQbWA4CtlDBhLq6jB7leJVYXPLp2K82lZ2NSUWcML4diplHibudVUc4xnWsKnC0O4xEaT1uTUJDI4+klSUQA7UijN5GBoFdPlDnSdsUbrVTAe3/+zjECwMLqQEcThhpwY4aowHDFTljdvjeU3Y1ohOWM8GAO8i2TRxqcUOzOAWBQO4Yg5KUCNaNfJtTWG3OlllLBHYh8NlIjCHkv0aLa1oZmC1TWMfexy53tomtGg8c6TJ4sDFEwuMte7DkgmhqpAyScCQP8js0XXAmU6WMUF5e1vuyqjcSsykzlGMWErsVnI5zOqmbuvoY5TlJarSIPUMO6yKNpTh7mOKKRaTR96ENoIi/eeZz7evoskvM07xdye0ZVAOe8AwcpFhyBbEkioJHaZooOh4naPD/+zjEDAMLLQ8cTWRggZ6mIsXDDXnbOiNgViluqqnN4fioWxIFDoECbC9VUK5Qo6luSEWR3T+7xT0IgU4ho0tfynVQun5CQ3FF1HFvGyqCSavemLWzUkQB9giCQURlGAC61e5R4ZzEvTsmzi0Tikl51kNPNeT8KBgekDkskNMG3qt16RTNtPLSPqrCnygqGuo93JtzwBs28zZ8llyQ/yudJ2j5PRl5IZ5HP9aSw5cVqyPi5lbv+6J+jJF/kssJPZCsKggiGSgwhUc9bssrqHNNiPa1C0zYTjD/+zjEDQILVKEYDiSjiQkUJOmBDHjoCsYGPGuqFKS90LLsIEnjSibJW9kQakakUpFtUUrWvZex3P7sX4OCHLO4XV7H4/WOL2PtwT7uM7+9rO+n/1f/6MKbjaTC5hQsFy4apquzrK4NK+3JvLUFPQ9jWyTLJIZdMiVVakzGdc0txr0nQAOUbbtMKa502RTQ5eLfUhH//W7P0BADTCYQDSKyxaly7CI425IHvIHu+8xv2KvND04qm6flFWTOd2otrWwTkQZjGIhRbIglb1m0fVdtO+nVGRncFIj/+zjEIAAKRO8aLhhHwPoRpJmkFBjBKwi0aUiNjpNICb0d1d1r2/aCG/5sD7r6CoDmNVXu6dhtad8zPZjoPRCoh0sfYiPRb3Rywkth7DBhVCWouHDzQ9is4qhOS1u/6qfu/X3X2V09ghFidYdYMETQiRTQERiZSswZyeklY5RCmLCmACioZeDXWG2o5nNeZ2aXTKftmYu/zfaHcz8+X+5BjvY8e4VkmuvW0V2vv9DdvQi7UI6NxI6KOlampqRmUlWKOze8Z6XhXTz+Ow6zahSaqae8M4Z3ZzD/+zjEOQOJlNsYDaRjQTsaYsWUjPhDzsL7h5MPKfcPwG17+C4hwwf52X8VFbY58PzV8etCXsa3vR2Wb72I/aoBhmxBbqSeMxXOBqGtE9QaSXAl2bHWYG7Zd3JyCrdoep7WR8gZzFPeyoV1v0WTKM3SJshsFnZd8aR3vHUUMbcjju64M0XsdHZC11Ysr4eFqegrMV0bkFMAq7DQHX10i/J5pocZ+GfGLzhS3LLLhfF27I8aCf+4+Ml3I59WhlF9yuxvXuJLdAHkbHjXSUyNAQrDjhFBlA8CoCD/+zjETIMJXNMWLRhLQQyWI4mWDAgOCZPYiMpW+eLp7RBvB2/3EGLY2VYsGuWX5sd/Pc4CQ8cWzow/lJG5VUpI+lyIKST1ppsQcY/XR31efmB1aDpFG9mm7sCY3HnmNEJCJBGRIREJ0aJFq95Mm95NWl2mu1sFucjCZ2focZSrpDTyFa1rYlWGn1xO4x8S0H9phGKWY/lZyP27TV/o/yGmPlNPuNK4f2FRiTEIpAGIx0QzQkxGRSiy/BliF9NLKZhPbpeiTneqyYKltXVQpUnS5cHgwy04bR7/+zjEZwMJIIsYTSRhwTMaYkGklPig7Ta8VZD6L5aVvjxvtL+Vo7l/eAKJWwQxaAKrlxMiVQrrERxOiFFfItlAWzFJeCGMVD/opk9eRKqFPI91HFUa6zZ2oHNQxqNirKR8QorXXhmnb2jKKJ1a/jmXZaju9HfVAYKDfmH11i2w0lGYXSdClO5Usrtzbaw7KHtBnLHs52sRaNR0UQ57IVWj8q1aovkFW2kDdHxfileofsWeFoicmizV9qnaKO/2Wa6pMIACOgYS4kfIqOWgObWLarlfH17d9uL/+zjEfYPJdNMSDKRHwTId4gGElPh0bPgu2j6f220fXk0fbRtOTTr+uYm3Utl/v8mh0/qrfj6N9OLv5oP34tUAgErEOyZwKWGGQ5cuqm2fvLTNFiumzuLU22qeW7J3V8k1yoNUTlKaf1239xrYzWAAsNDlgR1fV7cvx4KvZHBjUfa83hB00gtCCF4pLULHqAxZdPBd168L51PV4Nap3obR7g3x5OoFY4/dNFpKaV19q5jX7lu8OKem21UFEpyiQMsjBJzCJiQKjRxoaxr9pRul51YazWrDXPn/+zjEkoMJcNMQLDCjwP8uYwyUCNGpBnAQSJhrLDH/DWW7lnd3SV9HnnSz1ux5YRfb3EmOLA4aYHGk4SQ6B0LgeFY4E80RopEQUCJoLztv+VJxpRZZQOPFgMSArItLBIXFUgIWFWfFRUWbqaaWKiyPrFRY0aFRQWNdFYo1+LJMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjErgAF7BEjIwSiISuaYkjxibCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE0gMHvHkeYJhhQSMJmMRmGGCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",penned:"data:audio/mpeg;base64,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625ppZjoYmnENkdUz8jJlZbFOe+bRrnewu7HSVc01nlbnSPI/2kMUHUlSV7/+zjE24AKTGVTR5jAIVUgqWWEjDw8Wl5kRnW9mlHgYhRRWAEIC+ABRNtQFcftaXhKJ+RCSKgViqPCQVWnVOSckjDomxpH5VzXNnHyt1rNRkackFEqAibmy+65HwU0O2GK4wUSqopN5qVPZj2Ofl+1+lDtVxMkp7lpFKlHo9JKgsSOQKWllQApyNNQFRKsip7JcOtlKgPkfb8s0NeZbkqGWAqU2UKJWCNiZmYsv01UYTWHVPKHm9309wwrtchlSqGM/+OBUb+tp7/VAQl/ou6TjXp9rrbwSx7/+zjE6QMLAKM+LDDBgayl5oWWDTiavPKgWIOBaSmpEAIM3geTJUvBpmNw7zQvJ60HnoZUtMGaB0iEhGDi5ZBqjR0zpM689Dd5PiECbcPhPLuFC5FUnoUitsZLKJ9n3RMuiXb3u2d+qspKh6pO+lfn5t1bFXcNmOuznytH//Uff7jnx99x5wAAkgADoV4K8Ig/WiGhY9gXB/KaCxgSZxLRfT5oAyg5hDS4VyomLnFkkaTxkmfdA0FvDjwsIDkyAkyaF4uNNFMHqi4y4MMMiCUzJMumKBt00FP/+zjE6IALFPM7J5hpwYqiZeDzDXgw7RkyGDJDMEPGRGTSWiipJJadDWmm8ghePLLRNlgrFx2qSSdFdK237sVCLmBWJxZVJ84VjRi0k6K6SnRXSUu90//mZeKxokaG5mVy4iWi+d6WYolmKLADVFUBErszbBmbVVhQEpYGoiDqwVKgqoGoNPKuKhriL/Br/ET9Ya4ifrDXEX+rzv+GuWVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7AIIGKEm5IhlwgktoUKwsAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7AAVFXUmuPiACMuFnAuGIABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",buy:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABQAABG4ABgYGBgkJCQkJDAwMDAwPDw8PDxJSUlJSVVVVVVVYWFhYWFtbW1tbXl5eXl5hoaGhoaSkpKSkp6enp6eqqqqqqq2tra2tsPDw8PDz8/Pz8/b29vb2+fn5+fn8/Pz8/P//////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkArgAAAAAAAARuGwuz10AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAI4PdfdBEAAcMib/8SgAAAB4kIIADMYx3lkAADnzvOfIQhCN+c//+hCEIQ5znOc//IQ5znOc+r/+QhG85zndCAYGBgYGLD+IDmCAIAg7/KAgch//h+GEV9q5mrnLy3mv9JSgkACAEP8ZKgkPGipnUTZ1V8RgjOw0SSLHiCH48PxQMExAhIO7FrUw0kkMCg+VsQgJ39CEDJc7SzXc7Mlrb8b1cR/vTliP/wo4aJQ+//THnyw++mtWnz274GjTslSDHtds5JrvxdhHepyKiNVGCCNBv/+zjEBYAL5Rlz/GQAAXcrL/yRlbh6F4gie+iEUXtxDG2MyxQRoG3UIfwMZql7jmKffm6nceMFFTe+4V4qPiX6uVkb3xpfL8///FJfA+igiWLTRP/+b4iHPDoESXvC3+LAMHAGF47y4RXEu11U1E/OMFEMKiRvWI8hBBEKjFGd14MOSCl6OqixDwDjuLSt8sqBlP8WTP3s5XmSupjIeiWpZHdnVJf+VtTbsf17v85DEcKHfRSZH1/PKJDhyi4OCi0uBjOpxDTSd2daupp/4mCANbg7faXWmof/+zjECIAMjVN35iyywYSi8Lz2FiKsnyt+z7l4/W6Q1q203VM7l0Hv2b3RMSrJMkvv5HaJNNijX+7XEglcWMxtqTsp5U8l6X6rYo5Tn/9HcrFdw8DCU5HqY3/7DVYXPGiQVGEz79CzkyzM7Q7Oy2tIEEI0/E8kW02HSPNN6XIbKaVSRiwGUs2BEFzw5QRI6I5I9DznqOVds9+utNGTsZoXgzPZztgXnsNPTuWTPIxWd2ff8qL2/0/pv/J+ujl1Brns/twaEyFt+9TaZkZ1qIdvEoAGCtBqkiH/+zjEBwAMhVVz4yhYwX6qrnSVnpowlMsKqlybcwdfFSdANaLO5tHJHHN9rab+jnVTpyBx2seabVUo2qnExhQlU2hpZap//ZTKIeMRiIQkLGo+//6ggIUK81pf/5yDuQgwl4R9QNHgWBqWAts+++lsbYIQCgZDOHzRkCjRlEbykSxsPib2r8NMSultprdrIobZj+La22HvSPkQBshkWsmDy8baiodtOqpQt0U01v//tzo+GTTmR6K3/qcwkE1U/mf//NRmUeGwN/yHspbZd7LYmwSgCyQjDIj/+zjEBoAMHVNrpI2ykZApq7xkNeBEgwkcijJSpclVNCF9W19BVm0rikEnWiqaZVTaWN7rMwljrOkySGtqkaNI4cRTW3ZLv///WiPYeZTehV7fq5WS5LLLx92///l9NBSzoeBdX7VIpCCtMNGxDz6ZAARsWTCDwRypWeFIkGKNOo+VYDLZCq8lvp8V/tTrrj+omhzDF1TzN6SLoKTTSNDZzdJdv///TnR4l8KgIoJCU2Zbuv/0U1j6JaCoNnPLbmf/9bGJuzweFXu+hZLVkl19ushcACDUnIj/+zjEBYAL4SVhp41SkYcpbTzDKkrZNuA2EgWauMiNvNiLCrXwNGVFh6AlM+Uj4auWAiUij/UYBDVpKVWhr0REshxxKQqZyh5iG//+dsVKAEhIHpIlP/9zxJIzJPNJCcg/8UWgXc/00hdUV4h3Zm1UgSYMjNU1pZMCWIhoYnSbFymr+9H1LhzPvVI2j/hlcWgjVZaGm/IQyFciXVnTRX5qmITHpd7WY1f//tzRZIXNXlv/VDkB0Axio1Ih1DSV//6qREx5VHpoB85YVZHbdbbWEwCgVw6MkPr/+zjEBoAMIUlbpioXEYYja/TGqsoz09YRpD5RCtpi2OkG7pezerWWm2v6nVcqbRLVP/jELb+yfpRy8lITlZ2uq5zf/9TSImLhKUYDrWb/9a0okY4TQ+cdTqWvW39GsyPhoEg7AP4jMxVybX7/aNwBMVnnLnhPNWmIHTtWo99epeM5qXgqBip/ciKpWpVCUMYqULepFT5lqbAJMNpy1VkP136sXJVJpQhUxJyHGf//nExUlFok7p/+zTgMj8sttP2jD4NGJv6FH2pgVXLrdvbmZAExsFjQiE7/+zjEBoALcU9dpLVWUVojarTzKkpOf8V4CdzeUqSk40lUBmPj9jSFzSTk+hX/6PrccoooPljlVjkYw045hWOns6HH1ICaa6///zxHIBixrotf/2PBkw1tv//R9JU60t6DdbKQ5RbbpWWwCx/3s6uapPz9v6SfMGkGabTMHcqoOttcPKJxHHo7aqtUv7GCCAIkXntmq2bdaHZpibvud//8iI7iuOktzv/6PUCQC0oXMf+x38sfeIyrSxoW27b66qQFQfyBZmJ5muYbzHTk2UZT60xGax2bdGH/+zjEDwAKhRtbpJmykVkjKfSwt0oYEbNE98xZW7EEPoiBAsz7dabX1KdZigzL+l7Oktv/+pmTPoO+3/91HC8HhjZot/zlP9AoIMoHLLLbLA2AUPsgzQhh4FN7hcbdL2xtPHcnGTXGV+7TNnlBKdlDInbKHyj/+Ug6jvnJIpGzAQIICTTZb///QUoxKI6GpOUdR//0jgfARllf+tqB37TYhUoNyS22VlsgscCIUUDWmlQRIU5uYER8DoY5c3ZW4ZJmjlfTneqhXA4SHbGUY9qWU+eboiI7VMf/+zjEGwAKlRdPoplH0VqjajS0tdpZx//+g/OYQQDoiTixyf/7rDAGk9Sz/TuT5YLnQjEIck1lt8MgCY+D0Jq3J8D5rwntmM4z2zCH1OboEsSQSCZMSabT6KaGa6q1kgKy/QQd51lMtJBIxZ271rZR3Wi3/7V3YeRLf//qSYtDeNVCC7+irT9YwsaqKsin/nQmAMDuwkmcarHXoZw7jluFO+kw8XmHsJB43179eLQHznFvVrtWqzWszq1pVVHkv/+pOdJ5A0JoYRgbK//9SAtYFw6XieCDjf//+zjEJoBKpR1DoxYJwVQj57RhyXAWexX5gEhCxwBZsdszDuH4Ba5gTnFJ3E/fobocUe30Q6ArQgMaf6nST02NwLkZq1JoVPftupkbus8p3Sc///1ZfN3HOIGJOPDnmQf/+Uy+OaCSmhgaIKFv86CIqYXVBSblluYdAAHLoHw5/mHeYt0XyvFAj/uHYYQag4RcPi/epZgICBRC/617LqUn9Nba1szGSa9f/+smkJQ4CgG6aGyKndP/rsYlEElABETOnhYGv+LglKKS2wNgEB5UM1Clxto+WQX/+zjEMoAKbR09ow2rgU2kp3RhxXDhJKQgsGQog1jWM0aIVaFG7so3CsPXugkqnqXrpKv9G6lv//9imfTE9EXIuX06KC0P+pR1MlRmgDqgTKaZ80/73kEAgotyUhMAARDElJ3uaXn977y27sIRx53NI7RRtfN+1h60ymIoGoqZ9SKm6Ha06qzNZnQX1f+3csldZFyqbpHzQqvf/1nzg6wQTEPIkOEvHkiq//qBBJScmQTAICZoCMMpk0v8fM2tRjy4qG7EctbeDjkPzPfW5qfBHxEzS3taran/+zjEQIAKiSM3owZ2AVWj5vSAysBTpqupNTrQe1T//rmZADQmSUE/HjIvHCukbf6GiYF8IFE/FQ4T7B//QgAU0VLYFQEBXYSawOZiLXX5+44oT1lMtCIjdElSXqUaaiPUoRELTnMm1tv962MzA6yBu7rzijOtJv/9AipdLw9HR3JLulr/2l1AJ2Xj503hr/U8eAAEW5Mw4AYGeA7Omoxt338l9wluhYc8FCBJPiyWa+gbizQfC6y+92ar19BA8i3QQff//3IsYE6RYlDB0j6StJ29dSVwg4n/+zjETQAKdR83pA5UQTujpvRRxaiqZuwCd/p/+MoAIBFKRhMAARpM9ToD+998vXhzwYjJXhMXIc7fMovivnSDASaSq6SmTV39NbIIOhWpSlvW9v/oLQHg0WcMCRNkk9BJ/7OgomgvSGxHikXyqosHwAArkBg5DgFjWJtnG/36cKlIJ/bgChlmlYKwRY5FjdZkUQzgQXIcdQZSF1/Ul000kEFKoIGSCSkEq0//3YhpWH43LZoUEHrMdX61Hy6Ww3YI0IkfJEPBR/+tFQByCAFMiBVDYhi/aZ//+zjEXQBKSSUzpI4JwWijpeiByXA+9y+AfJ8HHKZId2pqDdd9SzczDJAWvHSRNE1O6q2q9VWtBFa7rUtOn9X9RQOlg6bpDhNwxUjSRNza9avueSMgIAQUkEUIocMlueUP/bXA8nD8EimoeGRKCVZi867Vbn3WkrNO6knZ+zOighnDp0mAHgQDtQ0yYQOMZGQ/t+p/1K7NyMeST9T9T0Sow+yPURQVsLkHOPGhRZi1Qo9I4kimZjWEHgfWKXJ0+V0CqvL/0kAAgnLB8aBNIHWYmj1ZtnXaupP/+zjEaAJLZScoxg6JwYckpIVBy0g49aFzqmQrmy3dJ7t7pGRMj6Ad0DkQSiXy+Yw12JeStCzP7pC0ArY2fb67y8iZkYiUCJiAiZalF5v2a1brPmpEQEDAHwMgM859i8mZp+2c/6lBPIMxTTNRXxJn7LrBvxNt47FjOxp0Mcv471vZ4u3rtTzizQvBkwCrUYhNFdNjWpI6yLpM6K2pGhedRx9SSbqMb0uyqS0DjIDdDQiuOowGK5mRY6i5gaILZ2SUzoFk8OSFsgWjDMFoUEcUeSMf3KpkzxP/+zjEawNMeSUiSY56Qbsko8DzUXBoirY1VuyZv5H99t+/jPtMy0mdgC3DsmRLr1qTIGBqYEiAtAA1osodc+6NaaR76FSzBFJlKUutVKYJaqm7VoLSKY7yiQwTwPZQMyi9SKNaKDLdlzxuQEPwAZ2GCTA+XTyRq12miTQUCiFQi6EFYljKjJ5+POA/peGf5DzLnm83t1ak2ZZGBi4CciuaJVUmZFF/ddRqmkxgtTqRMD7y/ZmXb1uo4pImDAwHeT6Juiy6/ar8vBjxPl48VToyxHdqR/RVEIH/+zjEYwMNJSMeB45ygWgjpIzBzXDFmahQOUOyUm0EHWHZBt1NZgc1EeKOZJrMxFdCcjpnElmAWrDLxEzBbMZIVP17KoOyFE9QZI0SWo8/X9WrlmTRF5UZFBTNXbTWk7TqAfgC5IlMwJgeSs3//vEUGCXzAdBAo7XnHV2ttepW51LstjrqS6vNdGgt3SdAi4ZyCsEARPsdUjsyDLrSZ2NjFGt1LTUp2TSZNWt/WytaDmx+iglTVZ3bqVTWszCECLF8uJGigwO+e1I/oQ0lE43G49b5di4GwAD/+zjEYoMLcR0gR5ZJwXEkJAqTIAAM8AwFIL6TmfLhU1CU/Llo4X2s30plV9fKgh+DF/p0u7hxX2G11v0hE5tzfQZJjEOhOvFocwKo05b7prFMHmyPEMdVVkMW5TqhOnKTlSlx////+sv95iXvf3mkcj92rV57ZE///4r//4n2/kiEERn1f7hd83IUkWY5VAnWp++//TcHy5OsgDZ4QkUAgGBQMBAEAgIAQGAAA8fwkJeLF8wj4Upv1MUJf8y3AX/8RHGT///cxxERHB4SHh3///LdHEREcHj/+zjEaAAS2Ts9uPeAASCpI/cKUAFJyr////sHhJxERYSGk0RMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo="};var E0="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",be=null,Ia=!1;function Nu(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function dc(){Nu(),Ia=!0;try{if(be||(be=document.createElement("audio"),be.src=E0,be.loop=!0,be.preload="auto",be.setAttribute("playsinline",""),be.setAttribute("webkit-playsinline",""),be.setAttribute("x-webkit-airplay","deny"),be.volume=.01,be.addEventListener("pause",()=>{Ia&&!document.hidden&&setTimeout(()=>Ia&&be.paused&&be.play().catch(()=>{}),300)})),be.paused){let i=be.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Fu(){Ia=!1;try{be&&!be.paused&&be.pause()}catch{}}function Bu(i,t){Nu();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var Ma=i=>440*Math.pow(2,(i-69)/12),w0=[[43,[55,59,62,67]],[48,[55,60,64,67]],[50,[57,62,66,69]],[52,[55,59,64,67]],[43,[55,59,62,67]],[48,[55,60,64,67]],[50,[57,62,66,69]],[43,[55,59,62,67]]],T0=[[0,0,74],[0,4,71],[0,6,74],[1,0,76],[1,4,72],[2,0,74],[2,3,78],[2,6,76],[3,0,71],[3,4,67],[4,0,74],[4,2,76],[4,4,79],[5,0,76],[5,4,72],[6,0,74],[6,4,78],[7,0,79],[7,4,74]],V0=[0,2,1,3,0,2,1,3],ls=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map,this.cutRate=0}unlock(){if(dc(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Bu(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.42,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.6);s.delayTime.value=.31;let r=e.createGain();r.gain.value=.2;let a=e.createGain();a.gain.value=.16,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Fu(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){dc(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="farm"?92:80,this.step=0,this.nextTime=this.ctx.currentTime+.12,t!=="farm"&&this.engine(!1)))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null}_pluckBuffer(t){if(this.plucks.has(t))return this.plucks.get(t);let e=this.ctx,n=e.sampleRate,s=Math.floor(n*2.2),r=e.createBuffer(1,s,n),a=r.getChannelData(0),o=Math.max(2,Math.round(n/Ma(t))),l=new Float32Array(o);for(let u=0;u<o;u++)l[u]=(Math.random()*2-1)*.6;let c=0,h=.996-Math.max(0,t-60)*4e-4;for(let u=0;u<s;u++){let d=(c+1)%o,f=(l[c]+l[d])*.5*h;a[u]=l[c],l[c]=f,c=d}return this.plucks.set(t,r),r}pluck(t,e,n=.25,s=this.music){let r=this.ctx.createBufferSource();r.buffer=this._pluckBuffer(t);let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=3200;let o=this.ctx.createGain();o.gain.value=n,r.connect(a).connect(o).connect(s),r.start(e),r.stop(e+2.2)}_tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}_noise(t,e,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.01,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=60/this.tempo/2,s=this.mode==="farm";for(;this.nextTime<e;){let r=this.nextTime,a=this.step%64,o=Math.floor(a/8),l=a%8,[c,h]=w0[o];l===0&&this.pluck(c,r,.35),l===4&&this.pluck(c+7,r,.22),this.pluck(h[V0[l]],r,l%2?.11:.15);for(let[u,d,f]of T0)u===o&&d===l&&this.pluck(f,r+.01,s?.24:.18);if(s&&l%2===1&&this._noise(r,.05,.025,"highpass",6e3,.7,this.music),l===3&&Math.random()<.12){let u=2200+Math.random()*1200;this._slide("sine",u,u*1.4,r,.12,.03,this.music),this._slide("sine",u*1.2,u*.9,r+.15,.1,.025,this.music)}this.step++,this.nextTime+=n}}engine(t){if(!this.ctx)return;let e=this.ctx;if(t&&!this._eng){let n=e.createOscillator();n.type="square";let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=260;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=9;let o=e.createGain();o.gain.value=.02,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),this._eng={o:n,lp:s,g:r,lfo:a}}else if(!t&&this._eng){let n=this._eng;n.g.gain.setTargetAtTime(1e-4,e.currentTime,.1),n.o.stop(e.currentTime+.5),n.lfo.stop(e.currentTime+.5),this._eng=null}}engineUpdate(t,e){if(!this._eng||!this.ctx)return;let n=this.ctx.currentTime;this._eng.o.frequency.setTargetAtTime(48+t*9,n,.1),this._eng.lfo.frequency.setTargetAtTime(7+t*2.5,n,.1),this._eng.lp.frequency.setTargetAtTime(220+t*60+(e?120:0),n,.1),this._eng.g.gain.setTargetAtTime(.03+t*.008,n,.15)}cutting(t){if(!this.on||t<=0)return;let e=this.ctx.currentTime;this._lastCut&&e-this._lastCut<.045||(this._lastCut=e,this._noise(e,.07,Math.min(.12,.04+t*.012),"bandpass",2400+Math.random()*900,1.4),this._noise(e,.04,.05,"highpass",5e3,.7))}play(t,e){if(typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t),!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"full":this._tone("square",392,n,.18,.06),this._tone("square",392,n+.25,.25,.06),this._tone("square",330,n+.25,.25,.05);break;case"pour":this._noise(n,1,.12,"bandpass",1500,.6,s,600);break;case"coin":{let r=84+(e!=null?e:0)%8*2;this._tone("sine",Ma(r),n,.22,.09),this._tone("sine",Ma(r+7),n+.05,.2,.06);break}case"rock":this._tone("sine",140,n,.2,.25),this._noise(n,.12,.15,"lowpass",700);break;case"sheep":{let r=this._tone("sawtooth",380,n,.55,.05),a=this.ctx.createOscillator();a.frequency.value=7;let o=this.ctx.createGain();o.gain.value=25,a.connect(o).connect(r.frequency),a.start(n),a.stop(n+.6);break}case"cow":this._slide("sawtooth",150,105,n,.9,.06),this._slide("sine",300,210,n,.9,.04);break;case"chicken":for(let r=0;r<3;r++)this._slide("square",900,650,n+r*.09,.07,.03);break;case"penned":[79,83,86,91].forEach((r,a)=>this.pluck(r,n+a*.07,.3,s));break;case"done":[[67,0],[71,.15],[74,.3],[79,.45],[83,.7],[86,.9]].forEach(([r,a])=>this.pluck(r,n+a,.4,s)),this._noise(n+.9,1.4,.05,"bandpass",1600,.5);break;case"buy":[84,88,91,96].forEach((r,a)=>this._tone("sine",Ma(r),n+a*.06,.3,.08));break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.12,.05),this._tone("square",196,n+.13,.14,.05);break;default:}}};Uu(ls,Du);Lu(ls);var zu={title:["\u0645\u0632\u0631\u0639\u062A\u064A \u0627\u0644\u0633\u0639\u064A\u062F\u0629","Happy Farm"],farm:["\u0645\u0632\u0631\u0639\u0629","Farm"],pick:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0632\u0631\u0639\u0629","Choose a farm"],shed:["\u0645\u062E\u0632\u0646 \u0627\u0644\u0639\u062F\u0629","Tool shed"],exit:["\u062E\u0631\u0648\u062C","Exit"],back:["\u0631\u062C\u0648\u0639","Back"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the farm before"],drag:["\u062D\u0637 \u0635\u0628\u0627\u0639\u0643 \u0648\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u0633\u0648\u0642","Touch and drag to drive"],full:["\u0627\u0644\u0645\u0642\u0637\u0648\u0631\u0629 \u0627\u062A\u0645\u0644\u062A! \u0641\u0636\u0651\u064A\u0647\u0627 \u0639\u0646\u062F \u0627\u0644\u0645\u062E\u0632\u0646","Trailer full! Empty it at the barn"],emptied:["\u0641\u0636\u0651\u064A\u062A\u0647\u0627! \u064A\u0644\u0627 \u0646\u0643\u0645\u0651\u0644","Emptied! Back to work"],rock:["\u062D\u062C\u0631! \u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0647","A rock! Go around it"],herd:["\u0648\u062F\u0651\u064A \u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0638\u064A\u0631\u0629","Guide the animals to their pen"],penned:["\u0631\u062C\u0639 \u0627\u0644\u0628\u064A\u062A!","Home safe!"],allPenned:["\u0643\u0644 \u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0641\u064A \u0627\u0644\u062D\u0638\u064A\u0631\u0629!","Every animal is home!"],done:["\u062E\u0644\u0651\u0635\u062A \u0627\u0644\u0645\u0632\u0631\u0639\u0629!","Farm finished!"],coinsEarned:["\u0627\u0644\u0639\u0645\u0644\u0627\u062A","Coins"],made:["\u0627\u0644\u0644\u064A \u0627\u062A\u0639\u0645\u0644","You made"],flour:["\u062F\u0642\u064A\u0642","Flour"],hay:["\u0628\u0627\u0644\u0627\u062A \u0642\u0634","Hay bales"],corn:["\u0630\u0631\u0629","Corn"],seeds:["\u0628\u0630\u0648\u0631","Seeds"],animals:["\u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A","Animals"],next:["\u0627\u0644\u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","Next farm"],again:["\u062A\u0627\u0646\u064A","Again"],map:["\u0627\u0644\u062E\u0631\u064A\u0637\u0629","Map"],newFarm:["\u0645\u0632\u0631\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 \u0627\u062A\u0641\u062A\u062D\u062A!","New farm unlocked!"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Continue"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],max:["\u0627\u0644\u0623\u0642\u0635\u0649","Max"],needMore:["\u0645\u062D\u062A\u0627\u062C \u0639\u0645\u0644\u0627\u062A \u0623\u0643\u062A\u0631 \u2014 \u0627\u062D\u0635\u062F \u0648\u0628\u064A\u0639!","Need more coins \u2014 harvest and sell!"],bought:["\u0627\u062A\u0631\u0643\u0651\u0628\u062A!","Installed!"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u0645\u0632\u0631\u0639\u0629...","Getting the farm ready..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},Zs="ar",Ou=i=>{Zs=i==="en"?"en":"ar"},cs=()=>Zs,Kt=i=>zu[i]?zu[i][Zs==="en"?1:0]:i,Ce=i=>Zs==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]),ba=i=>Zs==="en"?i.en:i.ar;var ku=`
.hf-root{position:absolute;inset:0;overflow:hidden;font-family:Tajawal,system-ui,sans-serif;color:#5a3a1a;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;background:#9fdcff}
.hf-root>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.hf-layer{position:absolute;inset:0;pointer-events:none}
.hf-layer button,.hf-layer .hf-card{pointer-events:auto}
.hf-pill{display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);background:#fff7e6;border:calc(var(--u)*.5) solid #c98a3a;border-radius:999px;padding:calc(var(--u)*.6) calc(var(--u)*2.6);font-weight:900;font-size:calc(var(--u)*4.4);box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.hf-coin{display:inline-block;width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe58a,#f5b72c 60%,#c98a14);border:calc(var(--u)*.35) solid #a8692a;box-sizing:border-box}
.hf-round{position:absolute;width:calc(var(--u)*11);height:calc(var(--u)*11);border-radius:calc(var(--u)*3);border:calc(var(--u)*.5) solid #c98a3a;background:#fff7e6;color:#5a3a1a;font-size:calc(var(--u)*5);font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 calc(var(--u)*.6) 0 #a8692a;padding:0;font-family:inherit}
.hf-top{position:absolute;top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline:calc(var(--u)*16);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*1.2)}
.hf-sign{background:linear-gradient(180deg,#e0a35c,#c27a35);color:#fff;font-weight:900;font-size:calc(var(--u)*3.8);border-radius:calc(var(--u)*1.6);padding:calc(var(--u)*.4) calc(var(--u)*3);border:calc(var(--u)*.4) solid #8a4f1d;text-shadow:0 2px 0 #8a4f1d}
.hf-bar{position:relative;width:100%;max-width:calc(var(--u)*80);height:calc(var(--u)*6);background:#fff7e6;border:calc(var(--u)*.6) solid #c98a3a;border-radius:999px;overflow:hidden;box-shadow:0 calc(var(--u)*.6) 0 #a8692a}
.hf-bar i{position:absolute;inset-block:0;inset-inline-start:0;background:linear-gradient(180deg,#ffd75e,#f2a51e);transition:width .25s}
.hf-bar b{position:absolute;inset-inline-end:calc(var(--u)*2);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);color:#5a3a1a}
.hf-bar s{position:absolute;inset-inline-start:calc(var(--u)*1.6);top:50%;transform:translateY(-50%);font-size:calc(var(--u)*3.8);text-decoration:none}
.hf-label{position:absolute;transform:translate(-50%,-100%);background:#fff7e6;border:calc(var(--u)*.35) solid #c98a3a;border-radius:calc(var(--u)*1.2);padding:0 calc(var(--u)*1.4);font-weight:900;font-size:calc(var(--u)*3.2);white-space:nowrap;pointer-events:none}
.hf-label.full{background:#ffd75e;animation:hfPulse .5s infinite alternate}
@keyframes hfPulse{to{transform:translate(-50%,-100%) scale(1.12)}}
.hf-toast{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:rgba(255,247,230,.95);border:calc(var(--u)*.5) solid #c98a3a;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.6) calc(var(--u)*4);font-weight:900;font-size:calc(var(--u)*4.6);text-align:center;white-space:nowrap;opacity:0;transition:opacity .25s;pointer-events:none;box-shadow:0 calc(var(--u)*.8) 0 #a8692a}
.hf-toast.show{opacity:1}
.hf-joy{position:absolute;width:calc(var(--u)*24);height:calc(var(--u)*24);margin:calc(var(--u)*-12) 0 0 calc(var(--u)*-12);border-radius:50%;border:calc(var(--u)*.8) solid rgba(255,255,255,.7);background:rgba(255,255,255,.15);pointer-events:none;display:none}
.hf-joy i{position:absolute;left:50%;top:50%;width:calc(var(--u)*10);height:calc(var(--u)*10);margin:calc(var(--u)*-5) 0 0 calc(var(--u)*-5);border-radius:50%;background:rgba(255,255,255,.85)}
.hf-float{position:absolute;font-weight:900;font-size:calc(var(--u)*4.6);color:#f2a51e;text-shadow:0 2px 0 #fff,0 0 6px #fff;pointer-events:none;animation:hfUp 1s ease-out forwards}
@keyframes hfUp{to{transform:translateY(calc(var(--u)*-12));opacity:0}}
.hf-dim{position:absolute;inset:0;background:rgba(40,25,10,.35);display:flex;align-items:center;justify-content:center;padding:calc(var(--u)*3);box-sizing:border-box}
.hf-panel{background:#fff7e6;border:calc(var(--u)*.8) solid #c98a3a;border-radius:calc(var(--u)*4);box-shadow:0 calc(var(--u)*1.2) 0 #a8692a,0 calc(var(--u)*2) calc(var(--u)*6) rgba(0,0,0,.3);padding:calc(var(--u)*3) calc(var(--u)*4);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2);max-width:100%;max-height:100%;overflow:auto;box-sizing:border-box;pointer-events:auto}
.hf-title{font-size:calc(var(--u)*7);font-weight:900;color:#c2552a;text-align:center;line-height:1.1}
.hf-btn{font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.4);color:#fff;border:none;border-radius:calc(var(--u)*2.6);padding:calc(var(--u)*1.8) calc(var(--u)*5);min-height:calc(var(--u)*11);cursor:pointer;background:linear-gradient(180deg,#5ccf5a,#33a333);box-shadow:0 calc(var(--u)*.8) 0 #1f7a1f;display:inline-flex;align-items:center;gap:calc(var(--u)*1.2);justify-content:center}
.hf-btn.wood{background:linear-gradient(180deg,#e0a35c,#c27a35);box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d}
.hf-btn[disabled]{background:#c9c4bb;box-shadow:0 calc(var(--u)*.8) 0 #9a958c}
.hf-btn:active{transform:translateY(calc(var(--u)*.5))}
.hf-btn:focus-visible,.hf-node:focus-visible,.hf-round:focus-visible{outline:calc(var(--u)*.7) solid #2f6fd8;outline-offset:calc(var(--u)*.5)}
.hf-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(var(--u)*2)}
.hf-land .hf-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.hf-card{background:#fff;border:calc(var(--u)*.5) solid #e0c9a3;border-radius:calc(var(--u)*3);padding:calc(var(--u)*1.8);display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*.8);text-align:center}
.hf-card .ic{font-size:calc(var(--u)*8)}
.hf-card .nm{font-weight:900;font-size:calc(var(--u)*4.4)}
.hf-card .sb{font-size:calc(var(--u)*3);opacity:.8}
.hf-card .pips{display:flex;gap:calc(var(--u)*.6)}
.hf-card .pip{width:calc(var(--u)*3);height:calc(var(--u)*1.4);border-radius:9px;background:#e0c9a3}
.hf-card .pip.on{background:#f2a51e}
.hf-card .st{font-weight:900;font-size:calc(var(--u)*3.2)}
.hf-map{display:grid;grid-template-columns:repeat(4,calc(var(--u)*17));gap:calc(var(--u)*2.4) calc(var(--u)*3);justify-content:center}
.hf-node{width:calc(var(--u)*17);height:calc(var(--u)*17);border-radius:50%;border:calc(var(--u)*.8) solid #fff;background:radial-gradient(circle at 40% 35%,#e9b46a,#b8742e);color:#fff;font-family:inherit;font-weight:900;font-size:calc(var(--u)*6.4);cursor:pointer;box-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;position:relative;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 0 #8a4f1d}
.hf-node.lock{background:radial-gradient(circle at 40% 35%,#e2e2e2,#a8a8a8);box-shadow:0 calc(var(--u)*.8) 0 #7a7a7a}
.hf-node.next{animation:hfPulse2 .8s infinite alternate}
@keyframes hfPulse2{to{transform:scale(1.08)}}
.hf-node .stars{position:absolute;bottom:calc(var(--u)*-4.4);left:50%;transform:translateX(-50%);font-size:calc(var(--u)*3);white-space:nowrap;text-shadow:none}
.hf-logo{font-size:calc(var(--u)*9);font-weight:900;color:#fff;-webkit-text-stroke:calc(var(--u)*.5) #8a4f1d;paint-order:stroke fill;text-shadow:0 calc(var(--u)*.8) 0 #8a4f1d;text-align:center}
.hf-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(var(--u)*5);font-weight:900;color:#f2a51e;background:#bfe8ff}
.hf-stars{font-size:calc(var(--u)*10);letter-spacing:calc(var(--u)*1)}
.hf-stars .off{filter:grayscale(1);opacity:.4}
.hf-made{display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center}
.hf-made div{background:#fff;border:calc(var(--u)*.4) solid #e0c9a3;border-radius:calc(var(--u)*2);padding:calc(var(--u)*1) calc(var(--u)*2);text-align:center;font-weight:900}
.hf-made b{display:block;font-size:calc(var(--u)*5.4)}
.hf-made span{font-size:calc(var(--u)*2.8)}
.hf-soundpill{position:absolute;left:50%;bottom:calc(var(--u)*16);transform:translateX(-50%);z-index:30;font-family:inherit;font-weight:900;font-size:calc(var(--u)*4.6);color:#1f2a24;background:#ffd166;border:calc(var(--u)*.6) solid #fff;border-radius:999px;padding:calc(var(--u)*2) calc(var(--u)*5);box-shadow:0 calc(var(--u)*1) calc(var(--u)*3) rgba(0,0,0,.4);cursor:pointer;display:none;pointer-events:auto}
`;function ht(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},R0=new Ki(-1,1,1,-1,0,1),fc=class extends oe{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}},P0=new fc,ti=class{constructor(t){this._mesh=new zt(P0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,R0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hs=class extends Xe{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Jn.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ti(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ks=class extends Xe{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ea=class extends Xe{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var wa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hs(Sa),this.copyPass.material.blending=mn,this.clock=new is}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ks!==void 0&&(a instanceof Ks?n=!0:a instanceof Ea&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ta=class extends Xe{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var qu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var us=class i extends Xe{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new Mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,a,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Le(r,a,{type:un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Le(r,a,{type:un});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=qu;this.highPassUniforms=Jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Sa;this.copyUniforms=Jn.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Mt,this.oldClearAlpha=1,this.basic=new Kn,this.fsQuad=new ti(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};us.BlurDirectionX=new J(1,0);us.BlurDirectionY=new J(0,1);var Hu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Va=class extends Xe{constructor(){super();let t=Hu;this.uniforms=Jn.clone(t.uniforms),this.material=new ea({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};if(typeof document!="undefined"&&!document.getElementById("tw-emoji-font")){let i=document.createElement("style");i.id="tw-emoji-font";let t=new URL("../../fonts/TwemojiMozilla.ttf",location.href).href,e="U+1F000-1FAFF,U+2600-27BF,U+2B00-2BFF,U+2300-23FF,U+FE0F,U+200D,U+2122,U+2139,U+2194-21AA,U+2934-2935,U+3030,U+303D,U+3297,U+3299,U+00A9,U+00AE,U+203C,U+2049,U+25AA-25FE";i.textContent=`@font-face{font-family:Tajawal;src:url(${t});unicode-range:${e};font-weight:100 900;font-display:swap}`,document.head.appendChild(i)}var Gu={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},U0={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},L0={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function D0(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new oe;l.setAttribute("position",new de(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new Ge(c);d.colorSpace=re;let f=new Ke({map:d,color:L0[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:qi,fog:!1,sizeAttenuation:!0}),m=new je(l,f);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function N0(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var Wu={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},F0=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,B0=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,z0={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},Xu={};typeof window!="undefined"&&(window.__cheerSfx=i=>{let t=z0[i];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(Xu[t]||-1e9)<n||(Xu[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function O0(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=g=>{if(!n[g]){let p=new Audio(`${e}${g}_${t}.mp3`);p.preload="auto",p.volume=.95,n[g]=p}return n[g]},u=(g,p)=>{let y=performance.now();if(!p&&y-r<6e3||c)return;let v=g+(1+Math.floor(Math.random()*Wu[g])),x=h(v);c=!0,r=y,x.currentTime=0;let U=()=>{c=!1};x.onended=U,x.onerror=U;let S=x.play();S&&S.catch&&S.catch(U),setTimeout(U,4e3)};window.__cheer=(g,p)=>{Wu[g]&&(o=!0,u(g,!!p))};let d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),p=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),p.gain.setValueAtTime(.08,s.currentTime),p.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(p),p.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},f=()=>{a=performance.now(),d(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",f,{passive:!0}),window.addEventListener("keydown",f,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let g=(i.innerText||"").slice(0,600);g!==m&&(m=g,F0.test(g)?u("win",!1):B0.test(g)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(u("idle",!1),a=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function Yu(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},Gu[e.get("look")||t.preset||"warm"]||Gu.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,f=0,m=0,A=0,g=!1,p=performance.now();function y(v,x){let U=i.getSize(new J);f=U.x,m=U.y,A=i.getPixelRatio(),c=new wa(i),c.setPixelRatio(A),c.setSize(f,m),h=new Ta(v,x),c.addPass(h),s||(u=new us(new J(Math.max(2,f>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Va),d=new hs(U0),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(v,x){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!v||!x||!v.isScene)return a(v,x);try{c||y(v,x);let U=i.getSize(new J),S=i.getPixelRatio();(U.x!==f||U.y!==m||S!==A)&&(f=U.x,m=U.y,A=S,c.setPixelRatio(S),c.setSize(f,m),u&&u.resolution.set(Math.max(2,f>>1),Math.max(2,m>>1))),h.scene=v,h.camera=x,d.uniforms.time.value=(performance.now()-p)/1e3;let w=performance.now(),P=Math.min(.1,Math.max(0,(w-l)/1e3));if(l=w,!e.has("nomotes")&&t.motes!==!1){let M=o.get(v);M||(M=D0(v,x,e.get("look")||t.preset||"warm",r),o.set(v,M)),N0(M,x,P)}g=!0,c.render(),g=!1}catch(U){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",U&&U.message),i.render=a,a(v,x)}},!e.has("nocheer")&&!r&&setTimeout(()=>O0(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var Js=(i,t,e=.04)=>(ya(i.root||i,t,e),i),Zu=(...i)=>Js(vu(...i),1056842),Ku=(...i)=>Js(Cu(...i),3807748),k0=(...i)=>Js(va(...i),1323016),q0=(...i)=>Js(xa(...i),3803144),H0=(...i)=>Js(Iu(...i),4862984);var G0=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},W0=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},Ra;function X0(){if(Ra)return Ra;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.arc(16,16,16,0,Math.PI*2),t.fill(),Ra=new Ge(i),Ra}var js=class{constructor(t,e,n,s){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.g=new oe,this.g.setAttribute("position",new de(this.pos,3)),this.pts=new je(this.g,new Ke({color:s,size:n,map:X0(),alphaTest:.2,sizeAttenuation:!0,transparent:!0,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts),this.i=0;for(let r=0;r<e;r++)this.pos[r*3+1]=-99}emit(t,e,n,s,r,a,o=.8){let l=this.i++%this.n;this.pos.set([t,e,n],l*3),this.vel.set([s,r,a],l*3),this.life[l]=o}update(t,e=9){for(let n=0;n<this.n;n++)if(!(this.life[n]<=0)){this.life[n]-=t,this.vel[n*3+1]-=e*t;for(let s=0;s<3;s++)this.pos[n*3+s]+=this.vel[n*3+s]*t;(this.life[n]<=0||this.pos[n*3+1]<0)&&(this.life[n]=0,this.pos[n*3+1]=-99)}this.g.attributes.position.needsUpdate=!0}},pc=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),Ou(e.lang),this.save=cu(e.save),this.base=e.base||"./",this.sound=new ls,this.sound.muted=!!this.save.muted,this.quality={low:G0()},document.getElementById("hf-style")||document.head.append(ht("style",{id:"hf-style",text:ku})),this.root=ht("div",{class:"hf-root",dir:cs()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!W0()){this.root.append(ht("div",{class:"hf-loading"},ht("div",{},Kt("noWebgl")," ",ht("button",{class:"hf-btn",onclick:()=>this.post({type:"exit"})},Kt("exit")))));return}this.loading=ht("div",{class:"hf-loading"},Kt("loading")),this.root.append(this.loading),this.renderer=Yu(new Xr({antialias:!this.quality.low,powerPreference:"high-performance"}),{preset:"fresh"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.5),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=re,this.renderer.toneMapping=qs,this.renderer.toneMappingExposure=1.05,this.root.prepend(this.renderer.domElement),this.layer=ht("div",{class:"hf-layer"}),this.root.append(this.layer),this.camera=new Pe(45,1,.5,300),this.input={x:0,z:0,pointer:null,ox:0,oy:0,keys:new Set},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new is,Promise.all([this._fonts(),Tu(this.base)]).then(()=>{this.loading.remove(),this._buildShowcase(),this.showMap(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.root.style.setProperty("--u",`${Math.min(this.cw,this.ch)/100}px`),this.root.classList.toggle("hf-land",this.cw>this.ch*1.15)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.cw<this.ch?58:42,this.camera.updateProjectionMatrix())}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});this.joy=ht("div",{class:"hf-joy"},ht("i")),t.append(this.joy),t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.input.pointer!==null)return;this.input.pointer=n.pointerId,this.input.ox=n.clientX,this.input.oy=n.clientY;let s=t.getBoundingClientRect();this.joy.style.left=`${n.clientX-s.left}px`,this.joy.style.top=`${n.clientY-s.top}px`,this.joy.style.display="block",this.joy.firstChild.style.transform="translate(0,0)";try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let r=Math.min(this.cw,this.ch)/100*12,a=n.clientX-this.input.ox,o=n.clientY-this.input.oy,l=Math.hypot(a,o);l>r&&(a=a/l*r,o=o/l*r),this.input.x=a/r,this.input.z=o/r,this.joy.firstChild.style.transform=`translate(${a}px,${o}px)`});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.x=0,this.input.z=0,this.joy.style.display="none")};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause()):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=ht("button",{class:"hf-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},Kt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_readInput(){let t=this.input.keys,e=this.input.x,n=this.input.z;return(t.has("arrowleft")||t.has("a"))&&(e=-1),(t.has("arrowright")||t.has("d"))&&(e=1),(t.has("arrowup")||t.has("w"))&&(n=-1),(t.has("arrowdown")||t.has("s"))&&(n=1),{x:e,z:n}}_clear(){this.layer.replaceChildren()}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_coins(){return this.coinEl=ht("span",{},Ce(this.save.coins)),ht("div",{class:"hf-pill"},ht("span",{class:"hf-coin"}),this.coinEl)}_mute(t){let e=ht("button",{class:"hf-round",style:t,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=ht("div",{class:"hf-toast"}),this.toastEl}toast(t,e=1.6){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}_buildShowcase(){let t=new Ps;t.background=new Mt(10476799),t.fog=new ji(12577023,30,90),t.add(new es(16774358,6262586,1.8));let e=new ns(16773328,1.4);e.position.set(-8,20,10),t.add(e);let n=new zt(new jn(80,40),ct(7127114));n.rotation.x=-Math.PI/2,t.add(n);let s=new zt(new ln(14,10),ct(15909198,6965760,.25));s.rotation.x=-Math.PI/2,s.position.set(-6,.3,-9),t.add(s);let r=q0();r.position.set(9,0,-8),r.rotation.y=-.5,t.add(r);for(let l=0;l<16;l++){let c=l/16*Math.PI*2,h=k0(.9+l%3*.3);h.position.set(Math.cos(c)*(20+l%3*4),0,Math.sin(c)*(16+l%4*3)-6),t.add(h)}let a=Zu(2.2);this.showCombine=new jt,this.showCombine.add(a.root);let o=Ku();o.root.position.x=-3.4,o.setFill(.7),this.showCombine.add(o.root),this.showReel=a.reel,t.add(this.showCombine),this.showcase=t}showMap(){this._endFarm(),this.mode="menu",this.sound.setMode("menu"),this._clear();let t=Qn.map((e,n)=>{var a;let s=n+1>this.save.unlocked,r=(a=this.save.stars[e.id])!=null?a:0;return ht("button",{class:`hf-node${s?" lock":""}${n+1===this.save.unlocked?" next":""}`,"aria-label":`${Kt("farm")} ${e.id} ${ba(e)}`,title:ba(e),onclick:()=>{if(s){this.sound.play("no"),this.toast(Kt("locked"));return}this.startFarm(n)}},s?"\u{1F512}":Ce(e.id),ht("span",{class:"stars"},s?"":"\u2B50".repeat(r)+"\u2606".repeat(3-r)))});this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Kt("exit"),onclick:()=>this.post({type:"exit"})},cs()==="en"?"\u2190":"\u2192"),ht("div",{class:"hf-top"},this._coins()),ht("div",{class:"hf-dim",style:"background:none"},ht("div",{class:"hf-panel",style:"background:rgba(255,247,230,.9)"},ht("div",{class:"hf-logo"},"\u{1F69C} ",Kt("title")),ht("div",{style:"font-weight:900;font-size:calc(var(--u)*4)"},Kt("pick")),ht("div",{class:"hf-map"},t),ht("button",{class:"hf-btn wood",style:"margin-top:calc(var(--u)*3)",onclick:()=>this.showShed()},"\u{1F3DA}\uFE0F ",Kt("shed")))),this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl())}showShed(){this.mode="shed",this.sound.setMode("menu"),this._clear();let t=(n,s)=>n.id==="barn"?`+${Ce(s)}%`:n.id==="trailer"?Ce(s):`${Ce(Math.round(s*100)/100)} ${cs()==="en"?n.unit:n.unit==="m"?"\u0645":"\u0645/\u062B"}`,e=da.map(n=>{let s=this.save.up[n.id],r=s>=Ws,a=lc(n.id,s);return ht("div",{class:"hf-card"},ht("div",{class:"ic"},n.icon.startsWith("art:")?ht("img",{src:`${this.base}art/${n.icon.slice(4)}.webp`,alt:""}):n.icon),ht("div",{class:"nm"},ba(n)),ht("div",{class:"sb"},n.sub[cs()==="en"?1:0]),ht("div",{class:"pips"},Array.from({length:Ws},(o,l)=>ht("span",{class:`pip${l<s?" on":""}`}))),ht("div",{class:"st"},r?t(n,Ln(n.id,s)):`${t(n,Ln(n.id,s))} \u2190 ${t(n,Ln(n.id,s+1))}`),ht("button",{class:"hf-btn",disabled:r||this.save.coins<a,onclick:()=>{hu(this.save,n.id)==="bought"?(this.sound.play("buy"),this._saveNow(),this.showShed(),this.toast(Kt("bought"),1)):(this.sound.play("no"),this.toast(Kt("needMore"),2))}},r?Kt("max"):ht("span",{style:"display:inline-flex;align-items:center;gap:calc(var(--u)*1)"},ht("span",{class:"hf-coin"}),Ce(a))))});this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Kt("back"),onclick:()=>this.showMap()},cs()==="en"?"\u2190":"\u2192"),ht("div",{class:"hf-dim",style:"background:none"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},"\u{1F3DA}\uFE0F ",Kt("shed")),this._coins(),ht("div",{class:"hf-grid"},e))),this._toastEl())}startFarm(t){this._endFarm(),this.levelIndex=t;let e=Qn[t],n=new pa(e,this.save.up),s=new Ps,r=new Ca(s,n,this.quality),a=Zu(n.cutter);s.add(a.root),a.root.scale.setScalar(1.25);let o=new _a(s),l=Ku();s.add(l.root);let c=new js(s,260,.22,16175978),h=new js(s,200,.2,16763176),u=new js(s,60,.6,15132390);this.f={pfx:o,farm:n,scene:s,world:r,comb:a,trailer:l,chaff:c,grain:h,smoke:u,tr:{x:n.t.x-3,z:n.t.z,heading:n.t.heading},cam:null,endT:-1,coinsAtStart:this.save.coins,cutFlash:0},this.mode="play",this.paused=!1,this.sound.setMode("farm"),this._hud(),t===0?setTimeout(()=>this.mode==="play"&&this.toast(Kt("drag"),3),600):n.animals.length&&setTimeout(()=>this.mode==="play"&&this.toast(Kt("herd"),3),600)}_endFarm(){this.f&&(this.f.world.dispose(),this.f.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.f=null,this.sound.engine(!1))}_hud(){this._clear();let t=this.f;this.hud={fill:ht("i",{style:"width:0%"}),pct:ht("b",{},Ce(0)+"%"),animals:ht("span",{}),label:ht("div",{class:"hf-label"},"")},this.layer.append(ht("button",{class:"hf-round",style:"top:max(calc(var(--u)*2.4),env(safe-area-inset-top));inset-inline-start:calc(var(--u)*3)","aria-label":Kt("paused"),onclick:e=>{e.stopPropagation(),this.pause()}},"\u23F8"),ht("div",{class:"hf-top"},this._coins(),ht("div",{class:"hf-sign"},`${Kt("farm")} ${Ce(t.farm.level.id)}`),ht("div",{class:"hf-bar"},this.hud.fill,ht("s",{},"\u{1F33E}"),this.hud.pct),t.farm.animals.length?ht("div",{class:"hf-pill",style:"font-size:calc(var(--u)*3.6)"},this.hud.animals):null),this.hud.label,this._mute("bottom:max(calc(var(--u)*3),env(safe-area-inset-bottom));inset-inline-end:calc(var(--u)*3)"),this._toastEl()),this._hc={}}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.x=this.input.z=0,this.joy.style.display="none",this.sound.suspend();let t=ht("div",{class:"hf-dim"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},Kt("paused")),ht("button",{class:"hf-btn",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume()}},"\u25B6 ",Kt("resume")),ht("button",{class:"hf-btn wood",onclick:()=>{this.sound.resume(),this.startFarm(this.levelIndex)}},"\u21BB ",Kt("restart")),ht("button",{class:"hf-btn wood",onclick:()=>{this.sound.resume(),this.showMap()}},Kt("map"))));this.layer.append(t)}_floatCoin(t){let e=ht("div",{class:"hf-float",style:`left:${this.cw/2-20}px;top:${this.ch*.42}px`},`+${Ce(t)}`);this.layer.append(e),setTimeout(()=>e.remove(),1e3)}_farmFrame(t,e){let n=this.f,s=n.farm,r=this._readInput();s.step(t,r);let a=0;for(let v of s.events)switch(v.type){case"cut":{a+=v.cells.length,n.world.cut(v.cells),n.pfx.burst(new T(o.x,1.2,o.z),{n:10,colors:[16765498,16773792,16175978],speed:5,size:.6,life:.6,gravity:5});let x=s.cutterBox();for(let U=0;U<Math.min(6,v.cells.length*2);U++){let S=(Math.random()-.5)*s.cutter;n.chaff.emit(x.cx-Math.sin(x.heading)*S,.6+Math.random()*.4,x.cz+Math.cos(x.heading)*S,(Math.random()-.5)*3,2+Math.random()*3,(Math.random()-.5)*3,.9)}n.cutFlash=.3;break}case"full":this.sound.play("full"),this.toast(Kt("full"),2.4);break;case"unloadStart":this.sound.play("pour");break;case"coins":this.save.coins+=v.n,this.sound.play("coin",v.total),Math.random()<.35&&this._floatCoin(v.n);break;case"unloaded":this.toast(Kt("emptied"),1.4),this._saveNow(),this._stack();break;case"rock":this.sound.play("rock"),this.toast(Kt("rock"),1.2);break;case"penned":this.sound.play(v.kind==="cow"?"cow":v.kind==="chicken"?"chicken":"sheep"),setTimeout(()=>this.sound.play("penned"),300),this.toast(v.n===v.of?Kt("allPenned"):Kt("penned"),1.6);break;case"done":this.sound.play("done"),this.toast(Kt("done"),2),n.endT=1.6;break;default:}this.sound.cutting(a),this.sound.engine(!0),this.sound.engineUpdate(Math.abs(s.t.speed),n.cutFlash>0);for(let v of s.animals)!v.penned&&Math.hypot(v.x-s.t.x,v.z-s.t.z)<5&&Math.random()<t*.25&&this.sound.play(v.kind==="cow"?"cow":v.kind==="chicken"?"chicken":"sheep");let o=s.t;n.comb.root.position.set(o.x,Math.sin(e*18)*.02*Math.min(1,Math.abs(o.speed)),o.z),n.comb.root.rotation.y=-o.heading,n.comb.reel.rotation.z-=t*(2+Math.abs(o.speed)*2);let l=o.x-Math.cos(o.heading)*1.6,c=o.z-Math.sin(o.heading)*1.6,h=Math.atan2(c-n.tr.z,l-n.tr.x);if(n.tr.heading=h,n.tr.x=l-Math.cos(h)*2.4,n.tr.z=c-Math.sin(h)*2.4,n.trailer.root.position.set(n.tr.x,0,n.tr.z),n.trailer.root.rotation.y=-n.tr.heading,n.trailer.setFill(s.load/s.capacity),n.cutFlash=Math.max(0,n.cutFlash-t),n.cutFlash>0)for(let v=0;v<3;v++){let x=o.x-Math.cos(o.heading)*.9-Math.sin(o.heading)*.6,U=o.z-Math.sin(o.heading)*.9+Math.cos(o.heading)*.6,S=n.tr.x-x,w=n.tr.z-U;n.grain.emit(x,2.4,U,S*1.6+(Math.random()-.5)*.4,1.5,w*1.6+(Math.random()-.5)*.4,.55)}if(s.unloading)for(let v=0;v<4;v++)n.grain.emit(n.tr.x+(Math.random()-.5),1.4,n.tr.z+(Math.random()-.5),(s.pad.x-n.tr.x)*1.2,1,(s.pad.z-n.tr.z)*1.2,.6);Math.random()<t*6&&n.smoke.emit(o.x-Math.cos(o.heading)*.9+Math.sin(o.heading)*.55,2.9,o.z-Math.sin(o.heading)*.9-Math.cos(o.heading)*.55,0,1.2,0,1.2),n.chaff.update(t,7),n.grain.update(t,9),n.smoke.update(t,-.6),n.world.update(t,e),n.pfx.update(t);let u=this.cw<this.ch,d=o.x,f=o.z+(u?10:8),m=u?17:12.5;n.cam||(n.cam=new T(d,m,f)),n.cam.lerp(new T(d,m,f),Math.min(1,t*3)),this.camera.position.copy(n.cam),this.camera.up.set(0,1,0),this.camera.lookAt(n.cam.x,0,n.cam.z-(u?13:11)-1);let A=this._hc,g=Math.min(100,Math.round(s.progress*100/.95));A.pct!==g&&(A.pct=g,this.hud.fill.style.width=`${g}%`,this.hud.pct.textContent=Ce(g)+"%"),this.coinEl&&A.coins!==this.save.coins&&(A.coins=this.save.coins,this.coinEl.textContent=Ce(this.save.coins)),s.animals.length&&A.pen!==s.penned&&(A.pen=s.penned,this.hud.animals.textContent=`\u{1F411} ${Ce(s.penned)}/${Ce(s.animals.length)}`);let p=new T(n.tr.x,2.6,n.tr.z).project(this.camera);this.hud.label.style.left=`${(p.x*.5+.5)*this.cw}px`,this.hud.label.style.top=`${(-p.y*.5+.5)*this.ch}px`;let y=`${Ce(Math.floor(s.load))}/${Ce(s.capacity)}`;A.lbl!==y&&(A.lbl=y,this.hud.label.textContent=y),this.hud.label.classList.toggle("full",s.full),n.endT>=0&&(n.endT-=t,n.endT<0&&this.showResults())}_stack(){let t=this.f,e=t.world.stacks.children.length;if(e>=18)return;let n=e%2?Mu(e%4===1?16447210:16241482):H0();n.position.set(e%3*1.3,Math.floor(e/6)*1,Math.floor(e%6/3)*1.3),t.world.stacks.add(n)}showResults(){let t=this.f,e=t.farm.result,n=this.levelIndex,s=t.farm.sold;for(let h of Object.keys(this.save.store))this.save.store[h]+=Math.round(s[h]);let r=uu(this.save,n,e.stars);this._saveNow(),this.mode="results",this.sound.engine(!1),this.sound.setMode("menu");let a=this.save.coins-t.coinsAtStart,o=n+1<Qn.length,l=[["flour","\u{1F956}"],["hay","\u{1F33E}"],["corn","\u{1F33D}"],["seeds","\u{1F33B}"]].filter(([h])=>s[h]>=1),c=ht("div",{class:"hf-dim hf-win"},ht("div",{class:"hf-panel"},ht("div",{class:"hf-title"},"\u{1F389} ",Kt("done")),ht("div",{class:"hf-stars"},[1,2,3].map(h=>ht("span",{class:h<=e.stars?"":"off"},"\u2B50"))),ht("div",{class:"hf-pill",style:"font-size:calc(var(--u)*5.4)"},ht("span",{class:"hf-coin"}),"+",Ce(a)),l.length?ht("div",{style:"font-weight:900"},Kt("made")):null,l.length?ht("div",{class:"hf-made"},l.map(([h,u])=>ht("div",{},ht("b",{},u," ",Ce(Math.round(s[h]/10))),ht("span",{},Kt(h))))):null,e.animals?ht("div",{style:"font-weight:900"},`\u{1F411} ${Kt("animals")}: ${Ce(e.penned)}/${Ce(e.animals)}`):null,r.opened?ht("div",{style:"font-weight:900;color:#33a333"},"\u{1F389} ",Kt("newFarm")):null,ht("div",{style:"display:flex;gap:calc(var(--u)*2);flex-wrap:wrap;justify-content:center"},o?ht("button",{class:"hf-btn",onclick:()=>this.startFarm(n+1)},Kt("next")," \u25B6"):null,ht("button",{class:"hf-btn wood",onclick:()=>this.showShed()},"\u{1F3DA}\uFE0F ",Kt("shed")),ht("button",{class:"hf-btn wood",onclick:()=>this.showMap()},Kt("map")))));this.layer.querySelectorAll(".hf-label").forEach(h=>h.remove()),this.layer.append(c)}_frame(){let t=Math.min(this.clock.getDelta(),.1),e=this.clock.elapsedTime;if(this._adapt(t),(this.mode==="play"||this.mode==="results")&&this.f)this.mode==="play"&&!this.paused?this._farmFrame(t,e):this.f.world.update(t,e),this.f&&this.renderer.render(this.f.scene,this.camera);else if(this.showcase){this.showCombine.rotation.y=e*.25,this.showReel.rotation.z-=t*3;let n=this.cw<this.ch;this.camera.position.set(Math.sin(e*.05)*3,n?13:9,n?20:14),this.camera.lookAt(0,1.5,0),this.renderer.render(this.showcase,this.camera)}}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this._endFarm(),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},gc={start(i,t,e){let n=new pc(i,t||{},e);return gc.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.HappyFarm=gc;var Av=gc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
