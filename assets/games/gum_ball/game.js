(()=>{var Ro="170";var dh=0,Al=1,fh=2;var Ic=1,ph=2,xn=3,Bn=0,Le=1,Cn=2,rn=0,bi=1,zn=2,xl=3,vl=4,gh=5,$n=100,mh=101,Ah=102,xh=103,vh=104,Ch=200,_h=201,yh=202,Ih=203,pa=204,ga=205,Mh=206,bh=207,Sh=208,Eh=209,Th=210,wh=211,Vh=212,Rh=213,Ph=214,ma=0,Aa=1,xa=2,wi=3,va=4,Ca=5,_a=6,ya=7,yr=0,Uh=1,Lh=2,Fn=0,Po=1,Uo=2,Lo=3,Do=4,Dh=5,qo=6,No=7;var Mc=300,Vi=301,Ri=302,Ia=303,Ma=304,Ir=306,ss=1e3,ni=1001,ba=1002,Be=1003,qh=1004;var _s=1005;var en=1006,Nr=1007;var ii=1008;var In=1009,bc=1010,Sc=1011,rs=1012,Fo=1013,si=1014,nn=1015,Je=1016,Bo=1017,zo=1018,Pi=1020,Ec=35902,Tc=1021,wc=1022,Ke=1023,Vc=1024,Rc=1025,Si=1026,Ui=1027,Oo=1028,ko=1029,Pc=1030,Ho=1031;var Go=1033,Xs=33776,Ys=33777,Zs=33778,Ks=33779,Sa=35840,Ea=35841,Ta=35842,wa=35843,Va=36196,Ra=37492,Pa=37496,Ua=37808,La=37809,Da=37810,qa=37811,Na=37812,Fa=37813,Ba=37814,za=37815,Oa=37816,ka=37817,Ha=37818,Ga=37819,Wa=37820,Xa=37821,js=36492,Ya=36494,Za=36495,Uc=36283,Ka=36284,ja=36285,Qa=36286;var Qs=2300,Ja=2301,Fr=2302,Cl=2400,_l=2401,yl=2402;var Nh=3200,Fh=3201;var Wo=0,Bh=1,Nn="",ge="srgb",Bi="srgb-linear",Mr="linear",jt="srgb";var ci=7680;var Il=519,zh=512,Oh=513,kh=514,Lc=515,Hh=516,Gh=517,Wh=518,Xh=519,Ml=35044;var bl="300 es",_n=2e3,Js=2001,On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Br=Math.PI/180,$a=180/Math.PI;function us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Yh(i,t){return(i%t+t)%t}function zr(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],g=n[5],m=n[8],A=s[0],p=s[3],f=s[6],b=s[1],I=s[4],_=s[7],L=s[2],S=s[5],E=s[8];return r[0]=a*A+o*b+l*L,r[3]=a*p+o*I+l*S,r[6]=a*f+o*_+l*E,r[1]=c*A+h*b+u*L,r[4]=c*p+h*I+u*S,r[7]=c*f+h*_+u*E,r[2]=d*A+g*b+m*L,r[5]=d*p+g*I+m*S,r[8]=d*f+g*_+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,g=c*r-a*l,m=e*u+n*d+s*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Or=new Ut;function Dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){let i=$s("canvas");return i.style.display="block",i}var Sl={};function es(i){i in Sl||(Sl[i]=!0,console.warn(i))}function Kh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function jh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var zt={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?Mr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var El=[.64,.33,.3,.6,.15,.06],Tl=[.2126,.7152,.0722],wl=[.3127,.329],Vl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[Bi]:{primaries:El,whitePoint:wl,transfer:Mr,toXYZ:Vl,fromXYZ:Rl,luminanceCoefficients:Tl,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:El,whitePoint:wl,transfer:jt,toXYZ:Vl,fromXYZ:Rl,luminanceCoefficients:Tl,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});var hi,to=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=$s("canvas")),hi.width=t.width,hi.height=t.height;let n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jh=0,tr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kr(s[a].image)):r.push(kr(s[a]))}else r=kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?to.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $h=0,De=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ni,s=ni,r=en,a=ii,o=Ke,l=In,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=us(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Mc;De.DEFAULT_ANISOTROPY=1;var he=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],g=l[5],m=l[9],A=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,_=(g+1)/2,L=(f+1)/2,S=(h+d)/4,E=(u+A)/4,D=(m+p)/4;return I>_&&I>L?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=S/n,r=E/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=D/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-m)*(p-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-A)/b,this.z=(d-h)/b,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eo=class extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new tr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},we=class extends eo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},er=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var no=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],g=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=g,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==d||c!==g||h!==m){let p=1-o,f=l*d+c*g+h*m+u*A,b=f>=0?1:-1,I=1-f*f;if(I>Number.EPSILON){let L=Math.sqrt(I),S=Math.atan2(L,f*b);p=Math.sin(p*S)/L,o=Math.sin(o*S)/L}let _=o*b;if(l=l*p+d*_,c=c*p+g*_,h=h*p+m*_,u=u*p+A*_,p===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],g=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*g-c*d,t[e+1]=l*m+h*d+c*u-o*g,t[e+2]=c*m+h*g+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),g=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u-d*g*m;break;case"YXZ":this._x=d*h*u+c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u+d*g*m;break;case"ZXY":this._x=d*h*u-c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u-d*g*m;break;case"ZYX":this._x=d*h*u-c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u+d*g*m;break;case"YZX":this._x=d*h*u+c*g*m,this._y=c*g*u+d*h*m,this._z=c*h*m-d*g*u,this._w=c*h*u-d*g*m;break;case"XZY":this._x=d*h*u-c*g*m,this._y=c*g*u-d*h*m,this._z=c*h*m+d*g*u,this._w=c*h*u+d*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>u){let g=2*Math.sqrt(1+n-o-u);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>u){let g=2*Math.sqrt(1+o-n-u);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+u-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hr=new V,Pl=new Ve,Mn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),Is.subVectors(this.max,Ki),ui.subVectors(t.a,Ki),di.subVectors(t.b,Ki),fi.subVectors(t.c,Ki),Rn.subVectors(di,ui),Pn.subVectors(fi,di),Xn.subVectors(ui,fi);let e=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Xn.z,Xn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Xn.z,0,-Xn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Xn.y,Xn.x,0];return!Gr(e,ui,di,fi,Is)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,ui,di,fi,Is))?!1:(Ms.crossVectors(Rn,Pn),e=[Ms.x,Ms.y,Ms.z],Gr(e,ui,di,fi,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fn=[new V,new V,new V,new V,new V,new V,new V,new V],Xe=new V,ys=new Mn,ui=new V,di=new V,fi=new V,Rn=new V,Pn=new V,Xn=new V,Ki=new V,Is=new V,Ms=new V,Yn=new V;function Gr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);let o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tu=new Mn,ji=new V,Wr=new V,kn=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);let e=ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(Wr)),this.expandByPoint(ji.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pn=new V,Xr=new V,bs=new V,Un=new V,Yr=new V,Ss=new V,Zr=new V,nr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Xr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Un.dot(this.direction),l=-Un.dot(bs),c=Un.lengthSq(),h=Math.abs(1-a*a),u,d,g,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,g=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),g=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xr).addScaledVector(bs,d),g}intersectSphere(t,e){pn.subVectors(t.center,this.origin);let n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){Yr.subVectors(e,t),Ss.subVectors(n,t),Zr.crossVectors(Yr,Ss);let a=this.direction.dot(Zr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,t);let l=o*this.direction.dot(Ss.crossVectors(Un,Ss));if(l<0)return null;let c=o*this.direction.dot(Yr.cross(Un));if(c<0||l+c>a)return null;let h=-o*Un.dot(Zr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,g,m,A,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=g,f[7]=m,f[11]=A,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+m*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=m+g*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,g=l*u,m=c*h,A=c*u;e[0]=d+A*o,e[4]=m*o-g,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=g*o-m,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,g=l*u,m=c*h,A=c*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+g*o,e[1]=g+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,g=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-g,e[8]=d*c+A,e[1]=l*u,e[5]=A*c+d,e[9]=g*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-d*u,e[8]=m*u+g,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*l,g=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+A,e[5]=a*h,e[9]=g*u-m,e[2]=m*u-g,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eu,t,nu)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Ln.crossVectors(n,Ne),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Ln.crossVectors(n,Ne)),Ln.normalize(),Es.crossVectors(Ne,Ln),s[0]=Ln.x,s[4]=Es.x,s[8]=Ne.x,s[1]=Ln.y,s[5]=Es.y,s[9]=Ne.y,s[2]=Ln.z,s[6]=Es.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],g=n[13],m=n[2],A=n[6],p=n[10],f=n[14],b=n[3],I=n[7],_=n[11],L=n[15],S=s[0],E=s[4],D=s[8],y=s[12],C=s[1],T=s[5],z=s[9],B=s[13],H=s[2],K=s[6],G=s[10],tt=s[14],k=s[3],st=s[7],ht=s[11],_t=s[15];return r[0]=a*S+o*C+l*H+c*k,r[4]=a*E+o*T+l*K+c*st,r[8]=a*D+o*z+l*G+c*ht,r[12]=a*y+o*B+l*tt+c*_t,r[1]=h*S+u*C+d*H+g*k,r[5]=h*E+u*T+d*K+g*st,r[9]=h*D+u*z+d*G+g*ht,r[13]=h*y+u*B+d*tt+g*_t,r[2]=m*S+A*C+p*H+f*k,r[6]=m*E+A*T+p*K+f*st,r[10]=m*D+A*z+p*G+f*ht,r[14]=m*y+A*B+p*tt+f*_t,r[3]=b*S+I*C+_*H+L*k,r[7]=b*E+I*T+_*K+L*st,r[11]=b*D+I*z+_*G+L*ht,r[15]=b*y+I*B+_*tt+L*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],g=t[14],m=t[3],A=t[7],p=t[11],f=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*g-n*l*g)+A*(+e*l*g-e*c*d+r*a*d-s*a*g+s*c*h-r*l*h)+p*(+e*c*u-e*o*g-r*a*u+n*a*g+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],g=t[11],m=t[12],A=t[13],p=t[14],f=t[15],b=u*p*c-A*d*c+A*l*g-o*p*g-u*l*f+o*d*f,I=m*d*c-h*p*c-m*l*g+a*p*g+h*l*f-a*d*f,_=h*A*c-m*u*c+m*o*g-a*A*g-h*o*f+a*u*f,L=m*u*l-h*A*l-m*o*d+a*A*d+h*o*p-a*u*p,S=e*b+n*I+s*_+r*L;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=b*E,t[1]=(A*d*r-u*p*r-A*s*g+n*p*g+u*s*f-n*d*f)*E,t[2]=(o*p*r-A*l*r+A*s*c-n*p*c-o*s*f+n*l*f)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*g-n*l*g)*E,t[4]=I*E,t[5]=(h*p*r-m*d*r+m*s*g-e*p*g-h*s*f+e*d*f)*E,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*f-e*l*f)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*g+e*l*g)*E,t[8]=_*E,t[9]=(m*u*r-h*A*r-m*n*g+e*A*g+h*n*f-e*u*f)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*g-e*o*g)*E,t[12]=L*E,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*p+e*u*p)*E,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*p-e*o*p)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,g=r*h,m=r*u,A=a*h,p=a*u,f=o*u,b=l*c,I=l*h,_=l*u,L=n.x,S=n.y,E=n.z;return s[0]=(1-(A+f))*L,s[1]=(g+_)*L,s[2]=(m-I)*L,s[3]=0,s[4]=(g-_)*S,s[5]=(1-(d+f))*S,s[6]=(p+b)*S,s[7]=0,s[8]=(m+I)*E,s[9]=(p-b)*E,s[10]=(1-(d+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let c=1/r,h=1/a,u=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=_n){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,m;if(o===_n)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Js)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=_n){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,g=(n+s)*h,m,A;if(o===_n)m=(a+r)*u,A=-2*u;else if(o===Js)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new V,Ye=new Yt,eu=new V(0,0,0),nu=new V(1,1,1),Ln=new V,Es=new V,Ne=new V,Ul=new Yt,Ll=new Ve,_e=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_e.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},iu=0,Dl=new V,gi=new Ve,gn=new Yt,Ts=new V,Qi=new V,su=new V,ru=new Ve,ql=new V(1,0,0),Nl=new V(0,1,0),Fl=new V(0,0,1),Bl={type:"added"},au={type:"removed"},mi={type:"childadded",child:null},Kr={type:"childremoved",child:null},Se=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new _e,n=new Ve,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ut}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Qi,Ts,this.up):gn.lookAt(Ts,Qi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(gn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(au),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),g=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new V(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=new V,mn=new V,jr=new V,An=new V,Ai=new V,xi=new V,zl=new V,Qr=new V,Jr=new V,$r=new V,ta=new he,ea=new he,na=new he,ti=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),mn.subVectors(n,e),jr.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(mn),l=Ze.dot(jr),c=mn.dot(mn),h=mn.dot(jr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,g=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-g-m,m,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,e),ea.fromBufferAttribute(t,n),na.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(ea,r.y),a.addScaledVector(na,r.z),a}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),mn.subVectors(t,e),Ze.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ze.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ai.subVectors(s,n),xi.subVectors(r,n),Qr.subVectors(t,n);let l=Ai.dot(Qr),c=xi.dot(Qr);if(l<=0&&c<=0)return e.copy(n);Jr.subVectors(t,s);let h=Ai.dot(Jr),u=xi.dot(Jr);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ai,a);$r.subVectors(t,r);let g=Ai.dot($r),m=xi.dot($r);if(m>=0&&g<=m)return e.copy(r);let A=g*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(xi,o);let p=h*m-g*u;if(p<=0&&u-h>=0&&g-m>=0)return zl.subVectors(r,s),o=(u-h)/(u-h+(g-m)),e.copy(s).addScaledVector(zl,o);let f=1/(p+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(Ai,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=Yh(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ia(a,r,t+1/3),this.g=ia(a,r,t),this.b=ia(a,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=qc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return zt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ue(be.r*255,0,255))*65536+Math.round(Ue(be.g*255,0,255))*256+Math.round(Ue(be.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ge){zt.fromWorkingColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(ws);let n=zr(Dn.h,ws.h,e),s=zr(Dn.s,ws.s,e),r=zr(Dn.l,ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new It;It.NAMES=qc;var ou=0,bn=class extends On{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=us(),this.name="",this.blending=bi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ga,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},an=class extends bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _e,this.combine=yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new V,Vs=new bt,de=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ml&&(t.usage=this.usage),t}};var sr=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var rr=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}},lu=0,He=new Yt,sa=new Se,vi=new V,Fe=new Mn,Ji=new Mn,ve=new V,pe=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?rr:sr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Fe.min,Ji.min),Fe.expandByPoint(ve),ve.addVectors(Fe.max,Ji.max),Fe.expandByPoint(ve)):(Fe.expandByPoint(Ji.min),Fe.expandByPoint(Ji.max))}Fe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),ve.add(vi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new V,l[D]=new V;let c=new V,h=new V,u=new V,d=new bt,g=new bt,m=new bt,A=new V,p=new V;function f(D,y,C){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,D),g.fromBufferAttribute(r,y),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),g.sub(d),m.sub(d);let T=1/(g.x*m.y-m.x*g.y);isFinite(T)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-g.y).multiplyScalar(T),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(T),o[D].add(A),o[y].add(A),o[C].add(A),l[D].add(p),l[y].add(p),l[C].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,y=b.length;D<y;++D){let C=b[D],T=C.start,z=C.count;for(let B=T,H=T+z;B<H;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let I=new V,_=new V,L=new V,S=new V;function E(D){L.fromBufferAttribute(s,D),S.copy(L);let y=o[D];I.copy(y),I.sub(L.multiplyScalar(L.dot(y))).normalize(),_.crossVectors(S,y);let T=_.dot(l[D])<0?-1:1;a.setXYZW(D,I.x,I.y,I.z,T)}for(let D=0,y=b.length;D<y;++D){let C=b[D],T=C.start,z=C.count;for(let B=T,H=T+z;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,u=new V;if(t)for(let d=0,g=t.count;d<g;d+=3){let m=t.getX(d+0),A=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),g=0,m=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*h;for(let f=0;f<h;f++)d[m++]=c[g++]}return new de(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],g=t(d,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,g=u.length;d<g;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ol=new Yt,Zn=new nr,Rs=new kn,kl=new V,Ps=new V,Us=new V,Ls=new V,ra=new V,Ds=new V,Hl=new V,qs=new V,te=class extends Se{constructor(t=new pe,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ra.fromBufferAttribute(u,t),a?Ds.addScaledVector(ra,h):Ds.addScaledVector(ra.sub(e),h))}e.add(Ds)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Rs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Rs,kl)===null||Zn.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Ol.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let p=d[m],f=a[p.materialIndex],b=Math.max(p.start,g.start),I=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let _=b,L=I;_<L;_+=3){let S=o.getX(_),E=o.getX(_+1),D=o.getX(_+2);s=Ns(this,f,t,n,c,h,u,S,E,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let p=m,f=A;p<f;p+=3){let b=o.getX(p),I=o.getX(p+1),_=o.getX(p+2);s=Ns(this,a,t,n,c,h,u,b,I,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let p=d[m],f=a[p.materialIndex],b=Math.max(p.start,g.start),I=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let _=b,L=I;_<L;_+=3){let S=_,E=_+1,D=_+2;s=Ns(this,f,t,n,c,h,u,S,E,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let p=m,f=A;p<f;p+=3){let b=p,I=p+1,_=p+2;s=Ns(this,a,t,n,c,h,u,b,I,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function cu(i,t,e,n,s,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Bn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function Ns(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ps),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ls);let h=cu(i,t,e,n,Ps,Us,Ls,Hl);if(h){let u=new V;ti.getBarycoord(Hl,Ps,Us,Ls,u),s&&(h.uv=ti.getInterpolatedAttribute(s,o,l,c,u,new bt)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,l,c,u,new bt)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new V,materialIndex:0};ti.getNormal(Ps,Us,Ls,d.normal),h.face=d,h.barycoord=u}return h}var on=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,g=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function m(A,p,f,b,I,_,L,S,E,D,y){let C=_/E,T=L/D,z=_/2,B=L/2,H=S/2,K=E+1,G=D+1,tt=0,k=0,st=new V;for(let ht=0;ht<G;ht++){let _t=ht*T-B;for(let Nt=0;Nt<K;Nt++){let $t=Nt*C-z;st[A]=$t*b,st[p]=_t*I,st[f]=H,c.push(st.x,st.y,st.z),st[A]=0,st[p]=0,st[f]=S>0?1:-1,h.push(st.x,st.y,st.z),u.push(Nt/E),u.push(1-ht/D),tt+=1}}for(let ht=0;ht<D;ht++)for(let _t=0;_t<E;_t++){let Nt=d+_t+K*ht,$t=d+_t+K*(ht+1),X=d+(_t+1)+K*(ht+1),et=d+(_t+1)+K*ht;l.push(Nt,$t,et),l.push($t,X,et),k+=6}o.addGroup(g,k,y),g+=k,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){let t={};for(let e=0;e<i.length;e++){let n=Li(i[e]);for(let s in n)t[s]=n[s]}return t}function hu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var Hn={clone:Li,merge:Ee},uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ar=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new V,Gl=new bt,Wl=new bt,Te=class extends ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Wl),e.subVectors(Wl,Gl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ci=-90,_i=1,io=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(Ci,_i,t,e);s.layers=this.layers,this.add(s);let r=new Te(Ci,_i,t,e);r.layers=this.layers,this.add(r);let a=new Te(Ci,_i,t,e);a.layers=this.layers,this.add(a);let o=new Te(Ci,_i,t,e);o.layers=this.layers,this.add(o);let l=new Te(Ci,_i,t,e);l.layers=this.layers,this.add(l);let c=new Te(Ci,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,g),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},or=class extends De{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},so=class extends we{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new or(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:rn});r.uniforms.tEquirect.value=e;let a=new te(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=en),new io(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},aa=new V,fu=new V,pu=new Ut,vn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=aa.subVectors(n,e).cross(fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pu.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new kn,Fs=new V,as=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],g=s[8],m=s[9],A=s[10],p=s[11],f=s[12],b=s[13],I=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,p-g,_-f).normalize(),n[1].setComponents(l+r,d+c,p+g,_+f).normalize(),n[2].setComponents(l+a,d+h,p+m,_+b).normalize(),n[3].setComponents(l-a,d-h,p-m,_-b).normalize(),n[4].setComponents(l-o,d-u,p-A,_-I).normalize(),e===_n)n[5].setComponents(l+o,d+u,p+A,_+I).normalize();else if(e===Js)n[5].setComponents(o,u,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,m)=>g.start-m.start);let d=0;for(let g=1;g<u.length;g++){let m=u[d],A=u[g];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let g=0,m=u.length;g<m;g++){let A=u[g];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var je=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,g=[],m=[],A=[],p=[];for(let f=0;f<h;f++){let b=f*d-a;for(let I=0;I<c;I++){let _=I*u-r;m.push(_,-b,0),A.push(0,0,1),p.push(I/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let I=b+c*f,_=b+c*(f+1),L=b+1+c*(f+1),S=b+1+c*f;g.push(I,_,S),g.push(_,L,S)}this.setIndex(g),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(A,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
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
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mu=`#ifdef USE_BATCHING
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
#endif`,bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bu=`#define PI 3.141592653589793
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
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ou=`vec3 transformedNormal = objectNormal;
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
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
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
}`,gd=`
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bd=`#if defined( USE_POINTS_UV )
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
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tf=`float getShadowMask() {
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
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
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
}`,If=`#if DEPTH_PACKING == 3200
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
}`,Mf=`#define DISTANCE
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
}`,bf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`uniform float scale;
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
}`,wf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Pf=`#define LAMBERT
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
}`,Uf=`#define LAMBERT
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
}`,Lf=`#define MATCAP
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
}`,Df=`#define MATCAP
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
}`,qf=`#define NORMAL
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
}`,Nf=`#define NORMAL
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
}`,Ff=`#define PHONG
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
}`,Bf=`#define PHONG
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
}`,zf=`#define STANDARD
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
}`,Of=`#define STANDARD
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
}`,kf=`#define TOON
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
}`,Hf=`#define TOON
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
}`,Gf=`uniform float size;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,Yf=`uniform vec3 color;
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
}`,Zf=`uniform float rotation;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:mu,alphahash_pars_fragment:Au,alphamap_fragment:xu,alphamap_pars_fragment:vu,alphatest_fragment:Cu,alphatest_pars_fragment:_u,aomap_fragment:yu,aomap_pars_fragment:Iu,batching_pars_vertex:Mu,batching_vertex:bu,begin_vertex:Su,beginnormal_vertex:Eu,bsdfs:Tu,iridescence_fragment:wu,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Ru,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Lu,color_fragment:Du,color_pars_fragment:qu,color_pars_vertex:Nu,color_vertex:Fu,common:Bu,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:ku,displacementmap_vertex:Hu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Wu,colorspace_fragment:Xu,colorspace_pars_fragment:Yu,envmap_fragment:Zu,envmap_common_pars_fragment:Ku,envmap_pars_fragment:ju,envmap_pars_vertex:Qu,envmap_physical_pars_fragment:ld,envmap_vertex:Ju,fog_vertex:$u,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:gd,lights_fragment_maps:md,lights_fragment_end:Ad,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:_d,map_fragment:yd,map_pars_fragment:Id,map_particle_fragment:Md,map_particle_pars_fragment:bd,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:Td,morphcolor_vertex:wd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Rd,morphtarget_vertex:Pd,normal_fragment_begin:Ud,normal_fragment_maps:Ld,normal_pars_fragment:Dd,normal_pars_vertex:qd,normal_vertex:Nd,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:kd,opaque_fragment:Hd,packing:Gd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:Yd,dithering_pars_fragment:Zd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:Jd,shadowmap_vertex:$d,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:hf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:gf,background_vert:mf,background_frag:Af,backgroundCube_vert:xf,backgroundCube_frag:vf,cube_vert:Cf,cube_frag:_f,depth_vert:yf,depth_frag:If,distanceRGBA_vert:Mf,distanceRGBA_frag:bf,equirect_vert:Sf,equirect_frag:Ef,linedashed_vert:Tf,linedashed_frag:wf,meshbasic_vert:Vf,meshbasic_frag:Rf,meshlambert_vert:Pf,meshlambert_frag:Uf,meshmatcap_vert:Lf,meshmatcap_frag:Df,meshnormal_vert:qf,meshnormal_frag:Nf,meshphong_vert:Ff,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:Of,meshtoon_vert:kf,meshtoon_frag:Hf,points_vert:Gf,points_frag:Wf,shadow_vert:Xf,shadow_frag:Yf,sprite_vert:Zf,sprite_frag:Kf},nt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},tn={basic:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new It(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ee([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ee([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ee([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new It(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ee([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ee([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ee([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ee([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ee([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ee([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ee([nt.common,nt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ee([nt.lights,nt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};tn.physical={uniforms:Ee([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var Bs={r:0,b:0,g:0},jn=new _e,jf=new Yt;function Qf(i,t,e,n,s,r,a){let o=new It(0),l=r===!0?0:1,c,h,u=null,d=0,g=null;function m(b){let I=b.isScene===!0?b.background:null;return I&&I.isTexture&&(I=(b.backgroundBlurriness>0?e:t).get(I)),I}function A(b){let I=!1,_=m(b);_===null?f(o,l):_&&_.isColor&&(f(_,1),I=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,I){let _=m(I);_&&(_.isCubeTexture||_.mapping===Ir)?(h===void 0&&(h=new te(new on(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:Li(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(I.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(jn)),h.material.toneMapped=zt.getTransfer(_.colorSpace)!==jt,(u!==_||d!==_.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,g=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new te(new je(2,2),new me({name:"BackgroundMaterial",uniforms:Li(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=zt.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,g=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,I){b.getRGB(Bs,Nc(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,I,a)}return{getClearColor:function(){return o},setClearColor:function(b,I=1){o.set(b),l=I,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:A,addToRenderList:p}}function Jf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,T,z,B,H){let K=!1,G=u(B,z,T);r!==G&&(r=G,c(r.object)),K=g(C,B,z,H),K&&m(C,B,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(C,T,z,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,T,z){let B=z.wireframe===!0,H=n[C.id];H===void 0&&(H={},n[C.id]=H);let K=H[T.id];K===void 0&&(K={},H[T.id]=K);let G=K[B];return G===void 0&&(G=d(l()),K[B]=G),G}function d(C){let T=[],z=[],B=[];for(let H=0;H<e;H++)T[H]=0,z[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:B,object:C,attributes:{},index:null}}function g(C,T,z,B){let H=r.attributes,K=T.attributes,G=0,tt=z.getAttributes();for(let k in tt)if(tt[k].location>=0){let ht=H[k],_t=K[k];if(_t===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),ht===void 0||ht.attribute!==_t||_t&&ht.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(C,T,z,B){let H={},K=T.attributes,G=0,tt=z.getAttributes();for(let k in tt)if(tt[k].location>=0){let ht=K[k];ht===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor));let _t={};_t.attribute=ht,ht&&ht.data&&(_t.data=ht.data),H[k]=_t,G++}r.attributes=H,r.attributesNum=G,r.index=B}function A(){let C=r.newAttributes;for(let T=0,z=C.length;T<z;T++)C[T]=0}function p(C){f(C,0)}function f(C,T){let z=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;z[C]=1,B[C]===0&&(i.enableVertexAttribArray(C),B[C]=1),H[C]!==T&&(i.vertexAttribDivisor(C,T),H[C]=T)}function b(){let C=r.newAttributes,T=r.enabledAttributes;for(let z=0,B=T.length;z<B;z++)T[z]!==C[z]&&(i.disableVertexAttribArray(z),T[z]=0)}function I(C,T,z,B,H,K,G){G===!0?i.vertexAttribIPointer(C,T,z,H,K):i.vertexAttribPointer(C,T,z,B,H,K)}function _(C,T,z,B){A();let H=B.attributes,K=z.getAttributes(),G=T.defaultAttributeValues;for(let tt in K){let k=K[tt];if(k.location>=0){let st=H[tt];if(st===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(st=C.instanceColor)),st!==void 0){let ht=st.normalized,_t=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;let $t=Nt.buffer,X=Nt.type,et=Nt.bytesPerElement,At=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===Fo;if(st.isInterleavedBufferAttribute){let rt=st.data,Et=rt.stride,Vt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)f(k.location+Ft,rt.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)p(k.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Ft=0;Ft<k.locationSize;Ft++)I(k.location+Ft,_t/k.locationSize,X,ht,Et*et,(Vt+_t/k.locationSize*Ft)*et,At)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)f(k.location+rt,st.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let rt=0;rt<k.locationSize;rt++)I(k.location+rt,_t/k.locationSize,X,ht,_t*et,_t/k.locationSize*rt*et,At)}}else if(G!==void 0){let ht=G[tt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(k.location,ht);break;case 3:i.vertexAttrib3fv(k.location,ht);break;case 4:i.vertexAttrib4fv(k.location,ht);break;default:i.vertexAttrib1fv(k.location,ht)}}}}b()}function L(){D();for(let C in n){let T=n[C];for(let z in T){let B=T[z];for(let H in B)h(B[H].object),delete B[H];delete T[z]}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let T=n[C.id];for(let z in T){let B=T[z];for(let H in B)h(B[H].object),delete B[H];delete T[z]}delete n[C.id]}function E(C){for(let T in n){let z=n[T];if(z[C.id]===void 0)continue;let B=z[C.id];for(let H in B)h(B[H].object),delete B[H];delete z[C.id]}}function D(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:p,disableUnusedAttributes:b}}function $f(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m];e.update(g,n,1)}function l(c,h,u,d){if(u===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Ke&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let D=E===Je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==In&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==nn&&!D)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:_,vertexTextures:L,maxSamples:S}}function ep(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let g=u.length!==0||d||n!==0||s;return s=d,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,g){let m=u.clippingPlanes,A=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,I=b*4,_=f.clippingState||null;l.value=_,_=h(m,d,I,g);for(let L=0;L!==I;++L)_[L]=e[L];f.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,g,m){let A=u!==null?u.length:0,p=null;if(A!==0){if(p=l.value,m!==!0||p===null){let f=g+A*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let I=0,_=g;I!==A;++I,_+=4)a.copy(u[I]).applyMatrix4(b,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}function np(i){let t=new WeakMap;function e(a,o){return o===Ia?a.mapping=Vi:o===Ma&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ia||o===Ma)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new so(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Di=class extends ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mi=4,Xl=[.125,.215,.35,.446,.526,.582],ei=20,oa=new Di,Yl=new It,la=null,ca=0,ha=0,ua=!1,Jn=(1+Math.sqrt(5))/2,yi=1/Jn,Zl=[new V(-Jn,yi,0),new V(Jn,yi,0),new V(-yi,0,Jn),new V(yi,0,Jn),new V(0,Jn,-yi),new V(0,Jn,yi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],lr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(la,ca,ha),this._renderer.xr.enabled=ua,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Je,format:Ke,colorSpace:Bi,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,t,e)}return s}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){let o=new Te(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yl),h.toneMapping=Fn,h.autoClear=!1;let g=new an({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new te(new on,g),A=!1,p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,A=!0):(g.color.copy(Yl),A=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let I=this._cubeSize;zs(s,b*I,f>2?I:0,I,I),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vi||t.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zl[(s-r-1)%Zl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new te(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*ei-1),A=r/m,p=isFinite(r)?1+Math.floor(h*A):ei;p>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);let f=[],b=0;for(let E=0;E<ei;++E){let D=E/A,y=Math.exp(-D*D/2);f.push(y),E===0?b+=y:E<p&&(b+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:I}=this;d.dTheta.value=m,d.mipInt.value=I-n;let _=this._sizeLods[s],L=3*_*(s>I-Mi?s-I+Mi:0),S=4*(this._cubeSize-_);zs(e,L,S,3*_,2*_),l.setRenderTarget(e),l.render(u,oa)}};function ip(i){let t=[],e=[],n=[],s=i,r=i-Mi+1+Xl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Mi?l=Xl[a-i+Mi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,m=6,A=3,p=2,f=1,b=new Float32Array(A*m*g),I=new Float32Array(p*m*g),_=new Float32Array(f*m*g);for(let S=0;S<g;S++){let E=S%3*2/3-1,D=S>2?0:-1,y=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];b.set(y,A*m*S),I.set(d,p*m*S);let C=[S,S,S,S,S,S];_.set(C,f*m*S)}let L=new pe;L.setAttribute("position",new de(b,A)),L.setAttribute("uv",new de(I,p)),L.setAttribute("faceIndex",new de(_,f)),t.push(L),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(i,t,e){let n=new we(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sp(i,t,e){let n=new Float32Array(ei),s=new V(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function jl(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Ql(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function rp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ia||l===Ma,h=l===Vi||l===Ri;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new lr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let g=o.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new lr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ap(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function op(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let p=0,f=A.length;p<f;p++)t.remove(A[p])}d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let g=u.morphAttributes;for(let m in g){let A=g[m];for(let p=0,f=A.length;p<f;p++)t.update(A[p],i.ARRAY_BUFFER)}}function c(u){let d=[],g=u.index,m=u.attributes.position,A=0;if(g!==null){let b=g.array;A=g.version;for(let I=0,_=b.length;I<_;I+=3){let L=b[I+0],S=b[I+1],E=b[I+2];d.push(L,S,S,E,E,L)}}else if(m!==void 0){let b=m.array;A=m.version;for(let I=0,_=b.length/3-1;I<_;I+=3){let L=I+0,S=I+1,E=I+2;d.push(L,S,S,E,E,L)}}else return;let p=new(Dc(d)?rr:sr)(d,1);p.version=A;let f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let g=u.index;g!==null&&d.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,g){i.drawElements(n,g,r,d*a),e.update(g,n,1)}function c(d,g,m){m!==0&&(i.drawElementsInstanced(n,g,r,d*a,m),e.update(g,n,m))}function h(d,g,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,d,0,m);let p=0;for(let f=0;f<m;f++)p+=g[f];e.update(p,n,1)}function u(d,g,m,A){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,g[f],A[f]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,d,0,A,0,m);let f=0;for(let b=0;b<m;b++)f+=g[b]*A[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hp(i,t,e){let n=new WeakMap,s=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],I=0;g===!0&&(I=1),m===!0&&(I=2),A===!0&&(I=3);let _=o.attributes.position.count*I,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*L*4*u),E=new er(S,_,L,u);E.type=nn,E.needsUpdate=!0;let D=I*4;for(let C=0;C<u;C++){let T=p[C],z=f[C],B=b[C],H=_*L*4*C;for(let K=0;K<T.count;K++){let G=K*D;g===!0&&(s.fromBufferAttribute(T,K),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(z,K),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),A===!0&&(s.fromBufferAttribute(B,K),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new bt(_,L)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<c.length;A++)g+=c[A];let m=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function up(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var cr=class extends De{constructor(t,e,n,s,r,a,o,l,c,h=Si){if(h!==Si&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=si),n===void 0&&h===Ui&&(n=Pi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bc=new De,Jl=new cr(1,1),zc=new er,Oc=new no,kc=new or,$l=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function br(i,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function mp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(Ae(e,n))return;ic.set(n),i.uniformMatrix2fv(this.addr,!1,ic),xe(e,n)}}function Ap(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(Ae(e,n))return;nc.set(n),i.uniformMatrix3fv(this.addr,!1,nc),xe(e,n)}}function xp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(Ae(e,n))return;ec.set(n),i.uniformMatrix4fv(this.addr,!1,ec),xe(e,n)}}function vp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Ip(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Ep(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jl.compareFunction=Lc,r=Jl):r=Bc,e.setTexture2D(t||r,s)}function Tp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oc,s)}function wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kc,s)}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zc,s)}function Rp(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return gp;case 35674:return mp;case 35675:return Ap;case 35676:return xp;case 5124:case 35670:return vp;case 35667:case 35671:return Cp;case 35668:case 35672:return _p;case 35669:case 35673:return yp;case 5125:return Ip;case 36294:return Mp;case 36295:return bp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Pp(i,t){i.uniform1fv(this.addr,t)}function Up(i,t){let e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Lp(i,t){let e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Dp(i,t){let e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function qp(i,t){let e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Np(i,t){let e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fp(i,t){let e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bp(i,t){i.uniform1iv(this.addr,t)}function zp(i,t){i.uniform2iv(this.addr,t)}function Op(i,t){i.uniform3iv(this.addr,t)}function kp(i,t){i.uniform4iv(this.addr,t)}function Hp(i,t){i.uniform1uiv(this.addr,t)}function Gp(i,t){i.uniform2uiv(this.addr,t)}function Wp(i,t){i.uniform3uiv(this.addr,t)}function Xp(i,t){i.uniform4uiv(this.addr,t)}function Yp(i,t,e){let n=this.cache,s=t.length,r=br(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bc,r[a])}function Zp(i,t,e){let n=this.cache,s=t.length,r=br(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Oc,r[a])}function Kp(i,t,e){let n=this.cache,s=t.length,r=br(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||kc,r[a])}function jp(i,t,e){let n=this.cache,s=t.length,r=br(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zc,r[a])}function Qp(i){switch(i){case 5126:return Pp;case 35664:return Up;case 35665:return Lp;case 35666:return Dp;case 35674:return qp;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return Op;case 35669:case 35673:return kp;case 5125:return Hp;case 36294:return Gp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return jp}}var ro=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rp(e.type)}},ao=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qp(e.type)}},oo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},da=/(\w+)(\])?(\[|\.)?/g;function sc(i,t){i.seq.push(t),i.map[t.id]=t}function Jp(i,t,e){let n=i.name,s=n.length;for(da.lastIndex=0;;){let r=da.exec(n),a=da.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sc(e,c===void 0?new ro(o,i,t):new ao(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new oo(o),sc(e,u)),e=u}}}var Ti=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function rc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $p=37297,tg=0;function eg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ac=new Ut;function ng(i){zt._getMatrix(ac,zt.workingColorSpace,i);let t=`mat3( ${ac.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function oc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+eg(i.getShaderSource(t),a)}else return s}function ig(i,t){let e=ng(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sg(i,t){let e;switch(t){case Po:e="Linear";break;case Uo:e="Reinhard";break;case Lo:e="Cineon";break;case Do:e="ACESFilmic";break;case qo:e="AgX";break;case No:e="Neutral";break;case Dh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Os=new V;function rg(){zt.getLuminanceCoefficients(Os);let i=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function og(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ns(i){return i!==""}function lc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(cg,ug)}var hg=new Map;function ug(i,t){let e=Dt[t];if(e===void 0){let n=hg.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lo(e)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(dg,fg)}function fg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ic?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ph?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Ri:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ri:t="ENVMAP_MODE_REFRACTION";break}return t}function Ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yr:t="ENVMAP_BLENDING_MULTIPLY";break;case Uh:t="ENVMAP_BLENDING_MIX";break;case Lh:t="ENVMAP_BLENDING_ADD";break}return t}function xg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=pg(e),c=gg(e),h=mg(e),u=Ag(e),d=xg(e),g=ag(e),m=og(r),A=s.createProgram(),p,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ns).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(p=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),a=lo(a),a=lc(a,e),a=cc(a,e),o=lo(o),o=lc(o,e),o=cc(o,e),a=hc(a),o=hc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let I=b+p+a,_=b+f+o,L=rc(s,s.VERTEX_SHADER,I),S=rc(s,s.FRAGMENT_SHADER,_);s.attachShader(A,L),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(T){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(A).trim(),B=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(S).trim(),K=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,L,S);else{let tt=oc(s,L,"vertex"),k=oc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+tt+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||H==="")&&(G=!1);G&&(T.diagnostics={runnable:K,programLog:z,vertexShader:{log:B,prefix:p},fragmentShader:{log:H,prefix:f}})}s.deleteShader(L),s.deleteShader(S),D=new Ti(s,A),y=lg(s,A)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(A,$p)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=S,this}var Cg=0,co=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ho(t),e.set(t,n)),n}},ho=class{constructor(t){this.id=Cg++,this.code=t,this.usedTimes=0}};function _g(i,t,e,n,s,r,a){let o=new ir,l=new co,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,g=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,C,T,z,B){let H=z.fog,K=B.geometry,G=y.isMeshStandardMaterial?z.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),k=tt&&tt.mapping===Ir?tt.image.height:null,st=m[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=ht!==void 0?ht.length:0,Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let $t,X,et,At;if(st){let Jt=tn[st];$t=Jt.vertexShader,X=Jt.fragmentShader}else $t=y.vertexShader,X=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),At=l.getFragmentShaderID(y);let rt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,Ft=B.isBatchedMesh===!0,le=!!y.map,Gt=!!y.matcap,ue=!!tt,U=!!y.aoMap,Oe=!!y.lightMap,Ot=!!y.bumpMap,kt=!!y.normalMap,Mt=!!y.displacementMap,ie=!!y.emissiveMap,yt=!!y.metalnessMap,M=!!y.roughnessMap,x=y.anisotropy>0,q=y.clearcoat>0,Y=y.dispersion>0,j=y.iridescence>0,W=y.sheen>0,xt=y.transmission>0,at=x&&!!y.anisotropyMap,ut=q&&!!y.clearcoatMap,Wt=q&&!!y.clearcoatNormalMap,J=q&&!!y.clearcoatRoughnessMap,dt=j&&!!y.iridescenceMap,St=j&&!!y.iridescenceThicknessMap,Tt=W&&!!y.sheenColorMap,ft=W&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,Lt=!!y.specularColorMap,ee=!!y.specularIntensityMap,w=xt&&!!y.transmissionMap,it=xt&&!!y.thicknessMap,O=!!y.gradientMap,Z=!!y.alphaMap,ct=y.alphaTest>0,ot=!!y.alphaHash,Rt=!!y.extensions,ce=Fn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ie={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:X,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ft,batchingColor:Ft&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Bi,alphaToCoverage:!!y.alphaToCoverage,map:le,matcap:Gt,envMap:ue,envMapMode:ue&&tt.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:Oe,bumpMap:Ot,normalMap:kt,displacementMap:d&&Mt,emissiveMap:ie,normalMapObjectSpace:kt&&y.normalMapType===Bh,normalMapTangentSpace:kt&&y.normalMapType===Wo,metalnessMap:yt,roughnessMap:M,anisotropy:x,anisotropyMap:at,clearcoat:q,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:St,sheen:W,sheenColorMap:Tt,sheenRoughnessMap:ft,specularMap:Ht,specularColorMap:Lt,specularIntensityMap:ee,transmission:xt,transmissionMap:w,thicknessMap:it,gradientMap:O,opaque:y.transparent===!1&&y.blending===bi&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:ot,combine:y.combine,mapUv:le&&A(y.map.channel),aoMapUv:U&&A(y.aoMap.channel),lightMapUv:Oe&&A(y.lightMap.channel),bumpMapUv:Ot&&A(y.bumpMap.channel),normalMapUv:kt&&A(y.normalMap.channel),displacementMapUv:Mt&&A(y.displacementMap.channel),emissiveMapUv:ie&&A(y.emissiveMap.channel),metalnessMapUv:yt&&A(y.metalnessMap.channel),roughnessMapUv:M&&A(y.roughnessMap.channel),anisotropyMapUv:at&&A(y.anisotropyMap.channel),clearcoatMapUv:ut&&A(y.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&A(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&A(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&A(y.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&A(y.sheenRoughnessMap.channel),specularMapUv:Ht&&A(y.specularMap.channel),specularColorMapUv:Lt&&A(y.specularColorMap.channel),specularIntensityMapUv:ee&&A(y.specularIntensityMap.channel),transmissionMapUv:w&&A(y.transmissionMap.channel),thicknessMapUv:it&&A(y.thicknessMap.channel),alphaMapUv:Z&&A(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(kt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(le||Z),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Et,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&y.map.isVideoTexture===!0&&zt.getTransfer(y.map.colorSpace)===jt,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&zt.getTransfer(y.emissiveMap.colorSpace)===jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===Le,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Rt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&y.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function f(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let T in y.defines)C.push(T),C.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(b(C,y),I(C,y),C.push(i.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function b(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function I(y,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reverseDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){let C=m[y.type],T;if(C){let z=tn[C];T=Hn.clone(z.uniforms)}else T=y.uniforms;return T}function L(y,C){let T;for(let z=0,B=h.length;z<B;z++){let H=h[z];if(H.cacheKey===C){T=H,++T.usedTimes;break}}return T===void 0&&(T=new vg(i,C,y,r),h.push(T)),T}function S(y){if(--y.usedTimes===0){let C=h.indexOf(y);h[C]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:D}}function yg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,g,m,A,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:g,groupOrder:m,renderOrder:u.renderOrder,z:A,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=g,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=A,f.group=p),t++,f}function o(u,d,g,m,A,p){let f=a(u,d,g,m,A,p);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):e.push(f)}function l(u,d,g,m,A,p){let f=a(u,d,g,m,A,p);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Ig),n.length>1&&n.sort(d||dc),s.length>1&&s.sort(d||dc)}function h(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Mg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new fc,i.set(n,[a])):s>=r.length?(a=new fc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new It};break;case"SpotLight":e={position:new V,direction:new V,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Eg=0;function Tg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wg(i){let t=new bg,e=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new Yt,a=new Yt;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,m=0,A=0,p=0,f=0,b=0,I=0,_=0,L=0,S=0,E=0;c.sort(Tg);for(let y=0,C=c.length;y<C;y++){let T=c[y],z=T.color,B=T.intensity,H=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*B,u+=z.g*B,d+=z.b*B;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],B);E++}else if(T.isDirectionalLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let tt=T.shadow,k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=T.shadow.matrix,b++}n.directional[g]=G,g++}else if(T.isSpotLight){let G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(z).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[A]=G;let tt=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,tt.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[A]=tt.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=K,_++}A++}else if(T.isRectAreaLight){let G=t.get(T);G.color.copy(z).multiplyScalar(B),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=G,p++}else if(T.isPointLight){let G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let tt=T.shadow,k=e.get(T);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,k.shadowCameraNear=tt.camera.near,k.shadowCameraFar=tt.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=T.shadow.matrix,I++}n.point[m]=G,m++}else if(T.isHemisphereLight){let G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(B),G.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==g||D.pointLength!==m||D.spotLength!==A||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==b||D.numPointShadows!==I||D.numSpotShadows!==_||D.numSpotMaps!==L||D.numLightProbes!==E)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=p,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=_+L-S,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,D.directionalLength=g,D.pointLength=m,D.spotLength=A,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=b,D.numPointShadows=I,D.numSpotShadows=_,D.numSpotMaps=L,D.numLightProbes=E,n.version=Eg++)}function l(c,h){let u=0,d=0,g=0,m=0,A=0,p=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let I=c[f];if(I.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),u++}else if(I.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(I.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(I.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(I.width*.5,0,0),_.halfHeight.set(0,I.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(I.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(I.matrixWorld),_.position.applyMatrix4(p),d++}else if(I.isHemisphereLight){let _=n.hemi[A];_.direction.setFromMatrixPosition(I.matrixWorld),_.direction.transformDirection(p),A++}}}return{setup:o,setupView:l,state:n}}function pc(i){let t=new wg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Vg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new pc(i),t.set(s,[o])):r>=a.length?(o=new pc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var uo=class extends bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fo=class extends bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
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
}`;function Ug(i,t,e){let n=new as,s=new bt,r=new bt,a=new he,o=new uo({depthPacking:Fh}),l=new fo,c={},h=e.maxTextureSize,u={[Bn]:Le,[Le]:Bn,[Cn]:Cn},d=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Rg,fragmentShader:Pg}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let m=new pe;m.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new te(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let f=this.type;this.render=function(S,E,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let y=i.getRenderTarget(),C=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),z=i.state;z.setBlending(rn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=f!==xn&&this.type===xn,H=f===xn&&this.type!==xn;for(let K=0,G=S.length;K<G;K++){let tt=S[K],k=tt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||B===!0||H===!0){let _t=this.type!==xn?{minFilter:Be,magFilter:Be}:{};k.map!==null&&k.map.dispose(),k.map=new we(s.x,s.y,_t),k.map.texture.name=tt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ht=k.getViewportCount();for(let _t=0;_t<ht;_t++){let Nt=k.getViewport(_t);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),z.viewport(a),k.updateMatrices(tt,_t),n=k.getFrustum(),_(E,D,k.camera,tt,this.type)}k.isPointLightShadow!==!0&&this.type===xn&&b(k,D),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,C,T)};function b(S,E){let D=t.update(A);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new we(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,D,d,A,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,D,g,A,null)}function I(S,E,D,y){let C=null,T=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)C=T;else if(C=D.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let z=C.uuid,B=E.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let K=H[B];K===void 0&&(K=C.clone(),H[B]=K,E.addEventListener("dispose",L)),C=K}if(C.visible=E.visible,C.wireframe=E.wireframe,y===xn?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:u[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,D.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=i.properties.get(C);z.light=D}return C}function _(S,E,D,y,C){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===xn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let B=t.update(S),H=S.material;if(Array.isArray(H)){let K=B.groups;for(let G=0,tt=K.length;G<tt;G++){let k=K[G],st=H[k.materialIndex];if(st&&st.visible){let ht=I(S,st,y,C);S.onBeforeShadow(i,S,E,D,B,ht,k),i.renderBufferDirect(D,null,B,ht,S,k),S.onAfterShadow(i,S,E,D,B,ht,k)}}}else if(H.visible){let K=I(S,H,y,C);S.onBeforeShadow(i,S,E,D,B,K,null),i.renderBufferDirect(D,null,B,K,S,null),S.onAfterShadow(i,S,E,D,B,K,null)}}let z=S.children;for(let B=0,H=z.length;B<H;B++)_(z[B],E,D,y,C)}function L(S){S.target.removeEventListener("dispose",L);for(let D in c){let y=c[D],C=S.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}var Lg={[ma]:Aa,[xa]:_a,[va]:ya,[wi]:Ca,[Aa]:ma,[_a]:xa,[ya]:va,[Ca]:wi};function Dg(i,t){function e(){let w=!1,it=new he,O=null,Z=new he(0,0,0,0);return{setMask:function(ct){O!==ct&&!w&&(i.colorMask(ct,ct,ct,ct),O=ct)},setLocked:function(ct){w=ct},setClear:function(ct,ot,Rt,ce,Ie){Ie===!0&&(ct*=ce,ot*=ce,Rt*=ce),it.set(ct,ot,Rt,ce),Z.equals(it)===!1&&(i.clearColor(ct,ot,Rt,ce),Z.copy(it))},reset:function(){w=!1,O=null,Z.set(-1,0,0,0)}}}function n(){let w=!1,it=!1,O=null,Z=null,ct=null;return{setReversed:function(ot){if(it!==ot){let Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ct;ct=null,this.setClear(ce)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ot){O!==ot&&!w&&(i.depthMask(ot),O=ot)},setFunc:function(ot){if(it&&(ot=Lg[ot]),Z!==ot){switch(ot){case ma:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case wi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){w=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){w=!1,O=null,Z=null,ct=null,it=!1}}}function s(){let w=!1,it=null,O=null,Z=null,ct=null,ot=null,Rt=null,ce=null,Ie=null;return{setTest:function(Jt){w||(Jt?rt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!w&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,Ge,un){(O!==Jt||Z!==Ge||ct!==un)&&(i.stencilFunc(Jt,Ge,un),O=Jt,Z=Ge,ct=un)},setOp:function(Jt,Ge,un){(ot!==Jt||Rt!==Ge||ce!==un)&&(i.stencilOp(Jt,Ge,un),ot=Jt,Rt=Ge,ce=un)},setLocked:function(Jt){w=Jt},setClear:function(Jt){Ie!==Jt&&(i.clearStencil(Jt),Ie=Jt)},reset:function(){w=!1,it=null,O=null,Z=null,ct=null,ot=null,Rt=null,ce=null,Ie=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,g=[],m=null,A=!1,p=null,f=null,b=null,I=null,_=null,L=null,S=null,E=new It(0,0,0),D=0,y=!1,C=null,T=null,z=null,B=null,H=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=tt>=2);let st=null,ht={},_t=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),$t=new he().fromArray(_t),X=new he().fromArray(Nt);function et(w,it,O,Z){let ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(w,ot),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<O;Rt++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}let At={};At[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(wi),Ot(!1),kt(Al),rt(i.CULL_FACE),U(rn);function rt(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function Et(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function Vt(w,it){return u[w]!==it?(i.bindFramebuffer(w,it),u[w]=it,w===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),w===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ft(w,it){let O=g,Z=!1;if(w){O=d.get(it),O===void 0&&(O=[],d.set(it,O));let ct=w.textures;if(O.length!==ct.length||O[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Rt=ct.length;ot<Rt;ot++)O[ot]=i.COLOR_ATTACHMENT0+ot;O.length=ct.length,Z=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,Z=!0);Z&&i.drawBuffers(O)}function le(w){return m!==w?(i.useProgram(w),m=w,!0):!1}let Gt={[$n]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[Ah]:i.FUNC_REVERSE_SUBTRACT};Gt[xh]=i.MIN,Gt[vh]=i.MAX;let ue={[Ch]:i.ZERO,[_h]:i.ONE,[yh]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[Th]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[Ih]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[bh]:i.ONE_MINUS_DST_ALPHA,[wh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Rh]:i.CONSTANT_ALPHA,[Ph]:i.ONE_MINUS_CONSTANT_ALPHA};function U(w,it,O,Z,ct,ot,Rt,ce,Ie,Jt){if(w===rn){A===!0&&(Et(i.BLEND),A=!1);return}if(A===!1&&(rt(i.BLEND),A=!0),w!==gh){if(w!==p||Jt!==y){if((f!==$n||_!==$n)&&(i.blendEquation(i.FUNC_ADD),f=$n,_=$n),Jt)switch(w){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}b=null,I=null,L=null,S=null,E.set(0,0,0),D=0,p=w,y=Jt}return}ct=ct||it,ot=ot||O,Rt=Rt||Z,(it!==f||ct!==_)&&(i.blendEquationSeparate(Gt[it],Gt[ct]),f=it,_=ct),(O!==b||Z!==I||ot!==L||Rt!==S)&&(i.blendFuncSeparate(ue[O],ue[Z],ue[ot],ue[Rt]),b=O,I=Z,L=ot,S=Rt),(ce.equals(E)===!1||Ie!==D)&&(i.blendColor(ce.r,ce.g,ce.b,Ie),E.copy(ce),D=Ie),p=w,y=!1}function Oe(w,it){w.side===Cn?Et(i.CULL_FACE):rt(i.CULL_FACE);let O=w.side===Le;it&&(O=!O),Ot(O),w.blending===bi&&w.transparent===!1?U(rn):U(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),r.setMask(w.colorWrite);let Z=w.stencilWrite;o.setTest(Z),Z&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),ie(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(w){C!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),C=w)}function kt(w){w!==dh?(rt(i.CULL_FACE),w!==T&&(w===Al?i.cullFace(i.BACK):w===fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),T=w}function Mt(w){w!==z&&(G&&i.lineWidth(w),z=w)}function ie(w,it,O){w?(rt(i.POLYGON_OFFSET_FILL),(B!==it||H!==O)&&(i.polygonOffset(it,O),B=it,H=O)):Et(i.POLYGON_OFFSET_FILL)}function yt(w){w?rt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function M(w){w===void 0&&(w=i.TEXTURE0+K-1),st!==w&&(i.activeTexture(w),st=w)}function x(w,it,O){O===void 0&&(st===null?O=i.TEXTURE0+K-1:O=st);let Z=ht[O];Z===void 0&&(Z={type:void 0,texture:void 0},ht[O]=Z),(Z.type!==w||Z.texture!==it)&&(st!==O&&(i.activeTexture(O),st=O),i.bindTexture(w,it||At[w]),Z.type=w,Z.texture=it)}function q(){let w=ht[st];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Tt(w){$t.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),$t.copy(w))}function ft(w){X.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),X.copy(w))}function Ht(w,it){let O=c.get(it);O===void 0&&(O=new WeakMap,c.set(it,O));let Z=O.get(w);Z===void 0&&(Z=i.getUniformBlockIndex(it,w.name),O.set(w,Z))}function Lt(w,it){let Z=c.get(it).get(w);l.get(it)!==Z&&(i.uniformBlockBinding(it,Z,w.__bindingPointIndex),l.set(it,Z))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},d=new WeakMap,g=[],m=null,A=!1,p=null,f=null,b=null,I=null,_=null,L=null,S=null,E=new It(0,0,0),D=0,y=!1,C=null,T=null,z=null,B=null,H=null,$t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Et,bindFramebuffer:Vt,drawBuffers:Ft,useProgram:le,setBlending:U,setMaterial:Oe,setFlipSided:Ot,setCullFace:kt,setLineWidth:Mt,setPolygonOffset:ie,setScissorTest:yt,activeTexture:M,bindTexture:x,unbindTexture:q,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:dt,texImage3D:St,updateUBOMapping:Ht,uniformBlockBinding:Lt,texStorage2D:Wt,texStorage3D:J,texSubImage2D:W,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Tt,viewport:ft,reset:ee}}function gc(i,t,e,n){let s=qg(n);switch(e){case Tc:return i*t;case Vc:return i*t;case Rc:return i*t*2;case Oo:return i*t/s.components*s.byteLength;case ko:return i*t/s.components*s.byteLength;case Pc:return i*t*2/s.components*s.byteLength;case Ho:return i*t*2/s.components*s.byteLength;case wc:return i*t*3/s.components*s.byteLength;case Ke:return i*t*4/s.components*s.byteLength;case Go:return i*t*4/s.components*s.byteLength;case Xs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case wa:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case js:case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uc:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qg(i){switch(i){case In:case bc:return{byteLength:1,components:1};case rs:case Sc:case Je:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case si:case Fo:case nn:return{byteLength:4,components:1};case Ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ng(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,x){return g?new OffscreenCanvas(M,x):$s("canvas")}function A(M,x,q){let Y=1,j=yt(M);if((j.width>q||j.height>q)&&(Y=q/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(Y*j.width),xt=Math.floor(Y*j.height);u===void 0&&(u=m(W,xt));let at=x?m(W,xt):u;return at.width=W,at.height=xt,at.getContext("2d").drawImage(M,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+xt+")."),at}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function p(M){return M.generateMipmaps}function f(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(M,x,q,Y,j=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=x;if(x===i.RED&&(q===i.FLOAT&&(W=i.R32F),q===i.HALF_FLOAT&&(W=i.R16F),q===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(W=i.R8UI),q===i.UNSIGNED_SHORT&&(W=i.R16UI),q===i.UNSIGNED_INT&&(W=i.R32UI),q===i.BYTE&&(W=i.R8I),q===i.SHORT&&(W=i.R16I),q===i.INT&&(W=i.R32I)),x===i.RG&&(q===i.FLOAT&&(W=i.RG32F),q===i.HALF_FLOAT&&(W=i.RG16F),q===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(W=i.RG8UI),q===i.UNSIGNED_SHORT&&(W=i.RG16UI),q===i.UNSIGNED_INT&&(W=i.RG32UI),q===i.BYTE&&(W=i.RG8I),q===i.SHORT&&(W=i.RG16I),q===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(W=i.RGB8UI),q===i.UNSIGNED_SHORT&&(W=i.RGB16UI),q===i.UNSIGNED_INT&&(W=i.RGB32UI),q===i.BYTE&&(W=i.RGB8I),q===i.SHORT&&(W=i.RGB16I),q===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),q===i.UNSIGNED_INT&&(W=i.RGBA32UI),q===i.BYTE&&(W=i.RGBA8I),q===i.SHORT&&(W=i.RGBA16I),q===i.INT&&(W=i.RGBA32I)),x===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let xt=j?Mr:zt.getTransfer(Y);q===i.FLOAT&&(W=i.RGBA32F),q===i.HALF_FLOAT&&(W=i.RGBA16F),q===i.UNSIGNED_BYTE&&(W=xt===jt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(M,x){let q;return M?x===null||x===si||x===Pi?q=i.DEPTH24_STENCIL8:x===nn?q=i.DEPTH32F_STENCIL8:x===rs&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===si||x===Pi?q=i.DEPTH_COMPONENT24:x===nn?q=i.DEPTH_COMPONENT32F:x===rs&&(q=i.DEPTH_COMPONENT16),q}function L(M,x){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Be&&M.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function S(M){let x=M.target;x.removeEventListener("dispose",S),D(x),x.isVideoTexture&&h.delete(x)}function E(M){let x=M.target;x.removeEventListener("dispose",E),C(x)}function D(M){let x=n.get(M);if(x.__webglInit===void 0)return;let q=M.source,Y=d.get(q);if(Y){let j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(M),Object.keys(Y).length===0&&d.delete(q)}n.remove(M)}function y(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let q=M.source,Y=d.get(q);delete Y[x.__cacheKey],a.memory.textures--}function C(M){let x=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let q=M.textures;for(let Y=0,j=q.length;Y<j;Y++){let W=n.get(q[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(q[Y])}n.remove(M)}let T=0;function z(){T=0}function B(){let M=T;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),T+=1,M}function H(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function K(M,x){let q=n.get(M);if(M.isVideoTexture&&Mt(M),M.isRenderTargetTexture===!1&&M.version>0&&q.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(q,M,x);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+x)}function G(M,x){let q=n.get(M);if(M.version>0&&q.__version!==M.version){X(q,M,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+x)}function tt(M,x){let q=n.get(M);if(M.version>0&&q.__version!==M.version){X(q,M,x);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+x)}function k(M,x){let q=n.get(M);if(M.version>0&&q.__version!==M.version){et(q,M,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+x)}let st={[ss]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},ht={[Be]:i.NEAREST,[qh]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},_t={[zh]:i.NEVER,[Xh]:i.ALWAYS,[Oh]:i.LESS,[Lc]:i.LEQUAL,[kh]:i.EQUAL,[Wh]:i.GEQUAL,[Hh]:i.GREATER,[Gh]:i.NOTEQUAL};function Nt(M,x){if(x.type===nn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Nr||x.magFilter===_s||x.magFilter===ii||x.minFilter===en||x.minFilter===Nr||x.minFilter===_s||x.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,st[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,st[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,st[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Be||x.minFilter!==_s&&x.minFilter!==ii||x.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(M,x){let q=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",S));let Y=x.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let W=H(x);if(W!==M.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),j[W].usedTimes++;let xt=j[M.__cacheKey];xt!==void 0&&(j[M.__cacheKey].usedTimes--,xt.usedTimes===0&&y(x)),M.__cacheKey=W,M.__webglTexture=j[W].texture}return q}function X(M,x,q){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let j=$t(M,x),W=x.source;e.bindTexture(Y,M.__webglTexture,i.TEXTURE0+q);let xt=n.get(W);if(W.version!==xt.__version||j===!0){e.activeTexture(i.TEXTURE0+q);let at=zt.getPrimaries(zt.workingColorSpace),ut=x.colorSpace===Nn?null:zt.getPrimaries(x.colorSpace),Wt=x.colorSpace===Nn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let J=A(x.image,!1,s.maxTextureSize);J=ie(x,J);let dt=r.convert(x.format,x.colorSpace),St=r.convert(x.type),Tt=I(x.internalFormat,dt,St,x.colorSpace,x.isVideoTexture);Nt(Y,x);let ft,Ht=x.mipmaps,Lt=x.isVideoTexture!==!0,ee=xt.__version===void 0||j===!0,w=W.dataReady,it=L(x,J);if(x.isDepthTexture)Tt=_(x.format===Ui,x.type),ee&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Tt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Tt,J.width,J.height,0,dt,St,null));else if(x.isDataTexture)if(Ht.length>0){Lt&&ee&&e.texStorage2D(i.TEXTURE_2D,it,Tt,Ht[0].width,Ht[0].height);for(let O=0,Z=Ht.length;O<Z;O++)ft=Ht[O],Lt?w&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,St,ft.data):e.texImage2D(i.TEXTURE_2D,O,Tt,ft.width,ft.height,0,dt,St,ft.data);x.generateMipmaps=!1}else Lt?(ee&&e.texStorage2D(i.TEXTURE_2D,it,Tt,J.width,J.height),w&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,dt,St,J.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,J.width,J.height,0,dt,St,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Tt,Ht[0].width,Ht[0].height,J.depth);for(let O=0,Z=Ht.length;O<Z;O++)if(ft=Ht[O],x.format!==Ke)if(dt!==null)if(Lt){if(w)if(x.layerUpdates.size>0){let ct=gc(ft.width,ft.height,x.format,x.type);for(let ot of x.layerUpdates){let Rt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,ot,ft.width,ft.height,1,dt,Rt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ft.width,ft.height,J.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,Tt,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?w&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ft.width,ft.height,J.depth,dt,St,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,Tt,ft.width,ft.height,J.depth,0,dt,St,ft.data)}else{Lt&&ee&&e.texStorage2D(i.TEXTURE_2D,it,Tt,Ht[0].width,Ht[0].height);for(let O=0,Z=Ht.length;O<Z;O++)ft=Ht[O],x.format!==Ke?dt!==null?Lt?w&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,O,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?w&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft.width,ft.height,dt,St,ft.data):e.texImage2D(i.TEXTURE_2D,O,Tt,ft.width,ft.height,0,dt,St,ft.data)}else if(x.isDataArrayTexture)if(Lt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Tt,J.width,J.height,J.depth),w)if(x.layerUpdates.size>0){let O=gc(J.width,J.height,x.format,x.type);for(let Z of x.layerUpdates){let ct=J.data.subarray(Z*O/J.data.BYTES_PER_ELEMENT,(Z+1)*O/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,dt,St,ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,St,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,J.width,J.height,J.depth,0,dt,St,J.data);else if(x.isData3DTexture)Lt?(ee&&e.texStorage3D(i.TEXTURE_3D,it,Tt,J.width,J.height,J.depth),w&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,St,J.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,J.width,J.height,J.depth,0,dt,St,J.data);else if(x.isFramebufferTexture){if(ee)if(Lt)e.texStorage2D(i.TEXTURE_2D,it,Tt,J.width,J.height);else{let O=J.width,Z=J.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,Tt,O,Z,0,dt,St,null),O>>=1,Z>>=1}}else if(Ht.length>0){if(Lt&&ee){let O=yt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,it,Tt,O.width,O.height)}for(let O=0,Z=Ht.length;O<Z;O++)ft=Ht[O],Lt?w&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,dt,St,ft):e.texImage2D(i.TEXTURE_2D,O,Tt,dt,St,ft);x.generateMipmaps=!1}else if(Lt){if(ee){let O=yt(J);e.texStorage2D(i.TEXTURE_2D,it,Tt,O.width,O.height)}w&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,St,J)}else e.texImage2D(i.TEXTURE_2D,0,Tt,dt,St,J);p(x)&&f(Y),xt.__version=W.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function et(M,x,q){if(x.image.length!==6)return;let Y=$t(M,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+q);let W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+q);let xt=zt.getPrimaries(zt.workingColorSpace),at=x.colorSpace===Nn?null:zt.getPrimaries(x.colorSpace),ut=x.colorSpace===Nn||xt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Wt&&!J?dt[Z]=A(x.image[Z],!0,s.maxCubemapSize):dt[Z]=J?x.image[Z].image:x.image[Z],dt[Z]=ie(x,dt[Z]);let St=dt[0],Tt=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),Ht=I(x.internalFormat,Tt,ft,x.colorSpace),Lt=x.isVideoTexture!==!0,ee=W.__version===void 0||Y===!0,w=j.dataReady,it=L(x,St);Nt(i.TEXTURE_CUBE_MAP,x);let O;if(Wt){Lt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,St.width,St.height);for(let Z=0;Z<6;Z++){O=dt[Z].mipmaps;for(let ct=0;ct<O.length;ct++){let ot=O[ct];x.format!==Ke?Tt!==null?Lt?w&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,Tt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,Ht,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,Tt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,Ht,ot.width,ot.height,0,Tt,ft,ot.data)}}}else{if(O=x.mipmaps,Lt&&ee){O.length>0&&it++;let Z=yt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Lt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,Tt,ft,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,dt[Z].width,dt[Z].height,0,Tt,ft,dt[Z].data);for(let ct=0;ct<O.length;ct++){let Rt=O[ct].image[Z].image;Lt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Rt.width,Rt.height,Tt,ft,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,Ht,Rt.width,Rt.height,0,Tt,ft,Rt.data)}}else{Lt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,ft,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,Tt,ft,dt[Z]);for(let ct=0;ct<O.length;ct++){let ot=O[ct];Lt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Tt,ft,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,Ht,Tt,ft,ot.image[Z])}}}p(x)&&f(i.TEXTURE_CUBE_MAP),W.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function At(M,x,q,Y,j,W){let xt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ut=I(q.internalFormat,xt,at,q.colorSpace),Wt=n.get(x),J=n.get(q);if(J.__renderTarget=x,!Wt.__hasExternalTextures){let dt=Math.max(1,x.width>>W),St=Math.max(1,x.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,ut,dt,St,x.depth,0,xt,at,null):e.texImage2D(j,W,ut,dt,St,0,xt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,J.__webglTexture,0,Ot(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(M,x,q){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer){let Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=_(x.stencilBuffer,j),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ot(x);kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,W,x.width,x.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,M)}else{let Y=x.textures;for(let j=0;j<Y.length;j++){let W=Y[j],xt=r.convert(W.format,W.colorSpace),at=r.convert(W.type),ut=I(W.internalFormat,xt,at,W.colorSpace),Wt=Ot(x);q&&kt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ut,x.width,x.height):kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let j=Y.__webglTexture,W=Ot(x);if(x.depthTexture.format===Si)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===Ui)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Vt(M){let x=n.get(M),q=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let Y=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Et(x.__webglFramebuffer,M)}else if(q){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[Y],M,!1);else{let j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(M,x,q){let Y=n.get(M);x!==void 0&&At(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Vt(M)}function le(M){let x=M.texture,q=n.get(M),Y=n.get(x);M.addEventListener("dispose",E);let j=M.textures,W=M.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),W){q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer[at]=[];for(let ut=0;ut<x.mipmaps.length;ut++)q.__webglFramebuffer[at][ut]=i.createFramebuffer()}else q.__webglFramebuffer[at]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)q.__webglFramebuffer[at]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(xt)for(let at=0,ut=j.length;at<ut;at++){let Wt=n.get(j[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&kt(M)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){let ut=j[at];q.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[at]);let Wt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),dt=I(ut.internalFormat,Wt,J,ut.colorSpace,M.isXRRenderTarget===!0),St=Ot(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,dt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,q.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(q.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)At(q.__webglFramebuffer[at][ut],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else At(q.__webglFramebuffer[at],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,ut=j.length;at<ut;at++){let Wt=j[at],J=n.get(Wt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Nt(i.TEXTURE_2D,Wt),At(q.__webglFramebuffer,M,Wt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(at=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),Nt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)At(q.__webglFramebuffer[ut],M,x,i.COLOR_ATTACHMENT0,at,ut);else At(q.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,at,0);p(x)&&f(at),e.unbindTexture()}M.depthBuffer&&Vt(M)}function Gt(M){let x=M.textures;for(let q=0,Y=x.length;q<Y;q++){let j=x[q];if(p(j)){let W=b(M),xt=n.get(j).__webglTexture;e.bindTexture(W,xt),f(W),e.unbindTexture()}}}let ue=[],U=[];function Oe(M){if(M.samples>0){if(kt(M)===!1){let x=M.textures,q=M.width,Y=M.height,j=i.COLOR_BUFFER_BIT,W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(M),at=x.length>1;if(at)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Wt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,q,Y,0,0,q,Y,j,i.NEAREST),l===!0&&(ue.length=0,U.length=0,ue.push(i.COLOR_ATTACHMENT0+ut),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ue.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let Wt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ot(M){return Math.min(s.maxSamples,M.samples)}function kt(M){let x=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(M){let x=a.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function ie(M,x){let q=M.colorSpace,Y=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||q!==Bi&&q!==Nn&&(zt.getTransfer(q)===jt?(Y!==Ke||j!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),x}function yt(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=kt}function Fg(i,t){function e(n,s=Nn){let r,a=zt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Je)return i.HALF_FLOAT;if(n===Tc)return i.ALPHA;if(n===wc)return i.RGB;if(n===Ke)return i.RGBA;if(n===Vc)return i.LUMINANCE;if(n===Rc)return i.LUMINANCE_ALPHA;if(n===Si)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===ko)return i.RED_INTEGER;if(n===Pc)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===Go)return i.RGBA_INTEGER;if(n===Xs||n===Ys||n===Zs||n===Ks)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ea||n===Ta||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ra||n===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ra)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===La||n===Da||n===qa||n===Na||n===Fa||n===Ba||n===za||n===Oa||n===ka||n===Ha||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===Ya||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===js)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===Ka||n===ja||n===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var po=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},sn=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bg={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),f=this._getHandJoint(c,A);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),g=.02,m=.005;c.inputState.pinching&&d>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`,go=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new me({vertexShader:zg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mo=class extends On{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,g=null,m=null,A=new go,p=e.getContextAttributes(),f=null,b=null,I=[],_=[],L=new bt,S=null,E=new Te;E.viewport=new he;let D=new Te;D.viewport=new he;let y=[E,D],C=new po,T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=I[X];return et===void 0&&(et=new is,I[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=I[X];return et===void 0&&(et=new is,I[X]=et),et.getGripSpace()},this.getHand=function(X){let et=I[X];return et===void 0&&(et=new is,I[X]=et),et.getHandSpace()};function B(X){let et=_.indexOf(X.inputSource);if(et===-1)return;let At=I[et];At!==void 0&&(At.update(X.inputSource,X.frame,c||a),At.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let X=0;X<I.length;X++){let et=_[X];et!==null&&(_[X]=null,I[X].disconnect(et))}T=null,z=null,A.reset(),t.setRenderTarget(f),g=null,d=null,u=null,s=null,b=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new we(g.framebufferWidth,g.framebufferHeight,{format:Ke,type:In,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,At=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Ui:Si,At=p.stencil?Pi:si);let Et={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new we(d.textureWidth,d.textureHeight,{format:Ke,type:In,depthTexture:new cr(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function K(X){for(let et=0;et<X.removed.length;et++){let At=X.removed[et],rt=_.indexOf(At);rt>=0&&(_[rt]=null,I[rt].disconnect(At))}for(let et=0;et<X.added.length;et++){let At=X.added[et],rt=_.indexOf(At);if(rt===-1){for(let Vt=0;Vt<I.length;Vt++)if(Vt>=_.length){_.push(At),rt=Vt;break}else if(_[Vt]===null){_[Vt]=At,rt=Vt;break}if(rt===-1)break}let Et=I[rt];Et&&Et.connect(At)}}let G=new V,tt=new V;function k(X,et,At){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(At.matrixWorld);let rt=G.distanceTo(tt),Et=et.projectionMatrix.elements,Vt=At.projectionMatrix.elements,Ft=Et[14]/(Et[10]-1),le=Et[14]/(Et[10]+1),Gt=(Et[9]+1)/Et[5],ue=(Et[9]-1)/Et[5],U=(Et[8]-1)/Et[0],Oe=(Vt[8]+1)/Vt[0],Ot=Ft*U,kt=Ft*Oe,Mt=rt/(-U+Oe),ie=Mt*-U;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Et[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let yt=Ft+Mt,M=le+Mt,x=Ot-ie,q=kt+(rt-ie),Y=Gt*le/M*yt,j=ue*le/M*yt;X.projectionMatrix.makePerspective(x,q,Y,j,yt,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,At=X.far;A.texture!==null&&(A.depthNear>0&&(et=A.depthNear),A.depthFar>0&&(At=A.depthFar)),C.near=D.near=E.near=et,C.far=D.far=E.far=At,(T!==C.near||z!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),T=C.near,z=C.far),E.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,C.layers.mask=E.layers.mask|D.layers.mask;let rt=X.parent,Et=C.cameras;st(C,rt);for(let Vt=0;Vt<Et.length;Vt++)st(Et[Vt],rt);Et.length===2?k(C,E,D):C.projectionMatrix.copy(E.projectionMatrix),ht(X,C,rt)};function ht(X,et,At){At===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(At.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$a*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let _t=null;function Nt(X,et){if(h=et.getViewerPose(c||a),m=et,h!==null){let At=h.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let rt=!1;At.length!==C.cameras.length&&(C.cameras.length=0,rt=!0);for(let Vt=0;Vt<At.length;Vt++){let Ft=At[Vt],le=null;if(g!==null)le=g.getViewport(Ft);else{let ue=u.getViewSubImage(d,Ft);le=ue.viewport,Vt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(b))}let Gt=y[Vt];Gt===void 0&&(Gt=new Te,Gt.layers.enable(Vt),Gt.viewport=new he,y[Vt]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(le.x,le.y,le.width,le.height),Vt===0&&(C.matrix.copy(Gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),rt===!0&&C.cameras.push(Gt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Vt=u.getDepthInformation(At[0]);Vt&&Vt.isValid&&Vt.texture&&A.init(t,Vt,s.renderState)}}for(let At=0;At<I.length;At++){let rt=_[At],Et=I[At];rt!==null&&Et!==void 0&&Et.update(rt,et,c||a)}_t&&_t(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let $t=new Fc;$t.setAnimationLoop(Nt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}},Qn=new _e,kg=new Yt;function Hg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Nc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,I,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,_)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),A(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,I):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Le&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Le&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let b=t.get(f),I=b.envMap,_=b.envMapRotation;I&&(p.envMap.value=I,Qn.copy(_),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),p.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Qn)),p.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,I){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=I*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function A(p,f){let b=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,I){let _=I.program;n.uniformBlockBinding(b,_)}function c(b,I){let _=s[b.id];_===void 0&&(m(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",p));let L=I.program;n.updateUBOMapping(b,L);let S=t.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let I=u();b.__bindingPointIndex=I;let _=i.createBuffer(),L=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let I=s[b.id],_=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,E=_.length;S<E;S++){let D=Array.isArray(_[S])?_[S]:[_[S]];for(let y=0,C=D.length;y<C;y++){let T=D[y];if(g(T,S,y,L)===!0){let z=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],H=0;for(let K=0;K<B.length;K++){let G=B[K],tt=A(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+H,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,I,_,L){let S=b.value,E=I+"_"+_;if(L[E]===void 0)return typeof S=="number"||typeof S=="boolean"?L[E]=S:L[E]=S.clone(),!0;{let D=L[E];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return L[E]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function m(b){let I=b.uniforms,_=0,L=16;for(let E=0,D=I.length;E<D;E++){let y=Array.isArray(I[E])?I[E]:[I[E]];for(let C=0,T=y.length;C<T;C++){let z=y[C],B=Array.isArray(z.value)?z.value:[z.value];for(let H=0,K=B.length;H<K;H++){let G=B[H],tt=A(G),k=_%L,st=k%tt.boundary,ht=k+st;_+=st,ht!==0&&L-ht<tt.storage&&(_+=L-ht),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=tt.storage}}}let S=_%L;return S>0&&(_+=L-S),b.__size=_,b.__cache={},this}function A(b){let I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),I}function p(b){let I=b.target;I.removeEventListener("dispose",p);let _=a.indexOf(I.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var hr=class{constructor(t={}){let{canvas:e=Zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let m=new Uint32Array(4),A=new Int32Array(4),p=null,f=null,b=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Fn,this.toneMappingExposure=1;let _=this,L=!1,S=0,E=0,D=null,y=-1,C=null,T=new he,z=new he,B=null,H=new It(0),K=0,G=e.width,tt=e.height,k=1,st=null,ht=null,_t=new he(0,0,G,tt),Nt=new he(0,0,G,tt),$t=!1,X=new as,et=!1,At=!1,rt=new Yt,Et=new Yt,Vt=new V,Ft=new he,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function ue(){return D===null?k:1}let U=n;function Oe(v,R){return e.getContext(v,R)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){let R="webgl2";if(U=Oe(R,v),U===null)throw Oe(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ot,kt,Mt,ie,yt,M,x,q,Y,j,W,xt,at,ut,Wt,J,dt,St,Tt,ft,Ht,Lt,ee,w;function it(){Ot=new ap(U),Ot.init(),Lt=new Fg(U,Ot),kt=new tp(U,Ot,t,Lt),Mt=new Dg(U,Ot),kt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),ie=new cp(U),yt=new yg,M=new Ng(U,Ot,Mt,yt,kt,Lt,ie),x=new np(_),q=new rp(_),Y=new gu(U),ee=new Jf(U,Y),j=new op(U,Y,ie,ee),W=new up(U,j,Y,ie),Tt=new hp(U,kt,M),J=new ep(yt),xt=new _g(_,x,q,Ot,kt,ee,J),at=new Hg(_,yt),ut=new Mg,Wt=new Vg(Ot),St=new Qf(_,x,q,Mt,W,g,l),dt=new Ug(_,W,kt),w=new Gg(U,ie,kt,Mt),ft=new $f(U,Ot,ie),Ht=new lp(U,Ot,ie),ie.programs=xt.programs,_.capabilities=kt,_.extensions=Ot,_.properties=yt,_.renderLists=ut,_.shadowMap=dt,_.state=Mt,_.info=ie}it();let O=new mo(_,U);this.xr=O,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=Ot.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ot.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(G,tt,!1))},this.getSize=function(v){return v.set(G,tt)},this.setSize=function(v,R,N=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,tt=R,e.width=Math.floor(v*k),e.height=Math.floor(R*k),N===!0&&(e.style.width=v+"px",e.style.height=R+"px"),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(G*k,tt*k).floor()},this.setDrawingBufferSize=function(v,R,N){G=v,tt=R,k=N,e.width=Math.floor(v*N),e.height=Math.floor(R*N),this.setViewport(0,0,v,R)},this.getCurrentViewport=function(v){return v.copy(T)},this.getViewport=function(v){return v.copy(_t)},this.setViewport=function(v,R,N,F){v.isVector4?_t.set(v.x,v.y,v.z,v.w):_t.set(v,R,N,F),Mt.viewport(T.copy(_t).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Nt)},this.setScissor=function(v,R,N,F){v.isVector4?Nt.set(v.x,v.y,v.z,v.w):Nt.set(v,R,N,F),Mt.scissor(z.copy(Nt).multiplyScalar(k).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(v){Mt.setScissorTest($t=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(v=!0,R=!0,N=!0){let F=0;if(v){let P=!1;if(D!==null){let $=D.texture.format;P=$===Go||$===Ho||$===ko}if(P){let $=D.texture.type,lt=$===In||$===si||$===rs||$===Pi||$===Bo||$===zo,pt=St.getClearColor(),gt=St.getClearAlpha(),wt=pt.r,Pt=pt.g,mt=pt.b;lt?(m[0]=wt,m[1]=Pt,m[2]=mt,m[3]=gt,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=wt,A[1]=Pt,A[2]=mt,A[3]=gt,U.clearBufferiv(U.COLOR,0,A))}else F|=U.COLOR_BUFFER_BIT}R&&(F|=U.DEPTH_BUFFER_BIT),N&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Wt.dispose(),yt.dispose(),x.dispose(),q.dispose(),W.dispose(),ee.dispose(),w.dispose(),xt.dispose(),O.dispose(),O.removeEventListener("sessionstart",cl),O.removeEventListener("sessionend",hl),Wn.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let v=ie.autoReset,R=dt.enabled,N=dt.autoUpdate,F=dt.needsUpdate,P=dt.type;it(),ie.autoReset=v,dt.enabled=R,dt.autoUpdate=N,dt.needsUpdate=F,dt.type=P}function ot(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Rt(v){let R=v.target;R.removeEventListener("dispose",Rt),ce(R)}function ce(v){Ie(v),yt.remove(v)}function Ie(v){let R=yt.get(v).programs;R!==void 0&&(R.forEach(function(N){xt.releaseProgram(N)}),v.isShaderMaterial&&xt.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,N,F,P,$){R===null&&(R=le);let lt=P.isMesh&&P.matrixWorld.determinant()<0,pt=ch(v,R,N,F,P);Mt.setMaterial(F,lt);let gt=N.index,wt=1;if(F.wireframe===!0){if(gt=j.getWireframeAttribute(N),gt===void 0)return;wt=2}let Pt=N.drawRange,mt=N.attributes.position,Xt=Pt.start*wt,ne=(Pt.start+Pt.count)*wt;$!==null&&(Xt=Math.max(Xt,$.start*wt),ne=Math.min(ne,($.start+$.count)*wt)),gt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,gt.count)):mt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,mt.count));let se=ne-Xt;if(se<0||se===1/0)return;ee.setup(P,F,pt,N,gt);let Re,Zt=ft;if(gt!==null&&(Re=Y.get(gt),Zt=Ht,Zt.setIndex(Re)),P.isMesh)F.wireframe===!0?(Mt.setLineWidth(F.wireframeLinewidth*ue()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(P.isLine){let vt=F.linewidth;vt===void 0&&(vt=1),Mt.setLineWidth(vt*ue()),P.isLineSegments?Zt.setMode(U.LINES):P.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else P.isPoints?Zt.setMode(U.POINTS):P.isSprite&&Zt.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Zt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Zt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let vt=P._multiDrawStarts,dn=P._multiDrawCounts,Kt=P._multiDrawCount,We=gt?Y.get(gt).bytesPerElement:1,li=yt.get(F).currentProgram.getUniforms();for(let qe=0;qe<Kt;qe++)li.setValue(U,"_gl_DrawID",qe),Zt.render(vt[qe]/We,dn[qe])}else if(P.isInstancedMesh)Zt.renderInstances(Xt,se,P.count);else if(N.isInstancedBufferGeometry){let vt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,dn=Math.min(N.instanceCount,vt);Zt.renderInstances(Xt,se,dn)}else Zt.render(Xt,se)};function Jt(v,R,N){v.transparent===!0&&v.side===Cn&&v.forceSinglePass===!1?(v.side=Le,v.needsUpdate=!0,Cs(v,R,N),v.side=Bn,v.needsUpdate=!0,Cs(v,R,N),v.side=Cn):Cs(v,R,N)}this.compile=function(v,R,N=null){N===null&&(N=v),f=Wt.get(N),f.init(R),I.push(f),N.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),v!==N&&v.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),f.setupLights();let F=new Set;return v.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let $=P.material;if($)if(Array.isArray($))for(let lt=0;lt<$.length;lt++){let pt=$[lt];Jt(pt,N,P),F.add(pt)}else Jt($,N,P),F.add($)}),I.pop(),f=null,F},this.compileAsync=function(v,R,N=null){let F=this.compile(v,R,N);return new Promise(P=>{function $(){if(F.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&F.delete(lt)}),F.size===0){P(v);return}setTimeout($,10)}Ot.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Ge=null;function un(v){Ge&&Ge(v)}function cl(){Wn.stop()}function hl(){Wn.start()}let Wn=new Fc;Wn.setAnimationLoop(un),typeof self!="undefined"&&Wn.setContext(self),this.setAnimationLoop=function(v){Ge=v,O.setAnimationLoop(v),v===null?Wn.stop():Wn.start()},O.addEventListener("sessionstart",cl),O.addEventListener("sessionend",hl),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(R),R=O.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,R,D),f=Wt.get(v,I.length),f.init(R),I.push(f),Et.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),X.setFromProjectionMatrix(Et),At=this.localClippingEnabled,et=J.init(this.clippingPlanes,At),p=ut.get(v,b.length),p.init(),b.push(p),O.enabled===!0&&O.isPresenting===!0){let $=_.xr.getDepthSensingMesh();$!==null&&qr($,R,-1/0,_.sortObjects)}qr(v,R,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(st,ht),Gt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Gt&&St.addToRenderList(p,v),this.info.render.frame++,et===!0&&J.beginShadows();let N=f.state.shadowsArray;dt.render(N,v,R),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=p.opaque,P=p.transmissive;if(f.setupLights(),R.isArrayCamera){let $=R.cameras;if(P.length>0)for(let lt=0,pt=$.length;lt<pt;lt++){let gt=$[lt];dl(F,P,v,gt)}Gt&&St.render(v);for(let lt=0,pt=$.length;lt<pt;lt++){let gt=$[lt];ul(p,v,gt,gt.viewport)}}else P.length>0&&dl(F,P,v,R),Gt&&St.render(v),ul(p,v,R);D!==null&&(M.updateMultisampleRenderTarget(D),M.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(_,v,R),ee.resetDefaultState(),y=-1,C=null,I.pop(),I.length>0?(f=I[I.length-1],et===!0&&J.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function qr(v,R,N,F){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){F&&Ft.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Et);let lt=W.update(v),pt=v.material;pt.visible&&p.push(v,lt,pt,N,Ft.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){let lt=W.update(v),pt=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ft.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ft.copy(lt.boundingSphere.center)),Ft.applyMatrix4(v.matrixWorld).applyMatrix4(Et)),Array.isArray(pt)){let gt=lt.groups;for(let wt=0,Pt=gt.length;wt<Pt;wt++){let mt=gt[wt],Xt=pt[mt.materialIndex];Xt&&Xt.visible&&p.push(v,lt,Xt,N,Ft.z,mt)}}else pt.visible&&p.push(v,lt,pt,N,Ft.z,null)}}let $=v.children;for(let lt=0,pt=$.length;lt<pt;lt++)qr($[lt],R,N,F)}function ul(v,R,N,F){let P=v.opaque,$=v.transmissive,lt=v.transparent;f.setupLightsView(N),et===!0&&J.setGlobalState(_.clippingPlanes,N),F&&Mt.viewport(T.copy(F)),P.length>0&&vs(P,R,N),$.length>0&&vs($,R,N),lt.length>0&&vs(lt,R,N),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function dl(v,R,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[F.id]===void 0&&(f.state.transmissionRenderTarget[F.id]=new we(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Je:In,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));let $=f.state.transmissionRenderTarget[F.id],lt=F.viewport||T;$.setSize(lt.z,lt.w);let pt=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(H),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Gt&&St.render(N);let gt=_.toneMapping;_.toneMapping=Fn;let wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),f.setupLightsView(F),et===!0&&J.setGlobalState(_.clippingPlanes,F),vs(v,N,F),M.updateMultisampleRenderTarget($),M.updateRenderTargetMipmap($),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let mt=0,Xt=R.length;mt<Xt;mt++){let ne=R[mt],se=ne.object,Re=ne.geometry,Zt=ne.material,vt=ne.group;if(Zt.side===Cn&&se.layers.test(F.layers)){let dn=Zt.side;Zt.side=Le,Zt.needsUpdate=!0,fl(se,N,F,Re,Zt,vt),Zt.side=dn,Zt.needsUpdate=!0,Pt=!0}}Pt===!0&&(M.updateMultisampleRenderTarget($),M.updateRenderTargetMipmap($))}_.setRenderTarget(pt),_.setClearColor(H,K),wt!==void 0&&(F.viewport=wt),_.toneMapping=gt}function vs(v,R,N){let F=R.isScene===!0?R.overrideMaterial:null;for(let P=0,$=v.length;P<$;P++){let lt=v[P],pt=lt.object,gt=lt.geometry,wt=F===null?lt.material:F,Pt=lt.group;pt.layers.test(N.layers)&&fl(pt,R,N,gt,wt,Pt)}}function fl(v,R,N,F,P,$){v.onBeforeRender(_,R,N,F,P,$),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),P.onBeforeRender(_,R,N,F,v,$),P.transparent===!0&&P.side===Cn&&P.forceSinglePass===!1?(P.side=Le,P.needsUpdate=!0,_.renderBufferDirect(N,R,F,P,v,$),P.side=Bn,P.needsUpdate=!0,_.renderBufferDirect(N,R,F,P,v,$),P.side=Cn):_.renderBufferDirect(N,R,F,P,v,$),v.onAfterRender(_,R,N,F,P,$)}function Cs(v,R,N){R.isScene!==!0&&(R=le);let F=yt.get(v),P=f.state.lights,$=f.state.shadowsArray,lt=P.state.version,pt=xt.getParameters(v,P.state,$,R,N),gt=xt.getProgramCacheKey(pt),wt=F.programs;F.environment=v.isMeshStandardMaterial?R.environment:null,F.fog=R.fog,F.envMap=(v.isMeshStandardMaterial?q:x).get(v.envMap||F.environment),F.envMapRotation=F.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",Rt),wt=new Map,F.programs=wt);let Pt=wt.get(gt);if(Pt!==void 0){if(F.currentProgram===Pt&&F.lightsStateVersion===lt)return gl(v,pt),Pt}else pt.uniforms=xt.getUniforms(v),v.onBeforeCompile(pt,_),Pt=xt.acquireProgram(pt,gt),wt.set(gt,Pt),F.uniforms=pt.uniforms;let mt=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(mt.clippingPlanes=J.uniform),gl(v,pt),F.needsLights=uh(v),F.lightsStateVersion=lt,F.needsLights&&(mt.ambientLightColor.value=P.state.ambient,mt.lightProbe.value=P.state.probe,mt.directionalLights.value=P.state.directional,mt.directionalLightShadows.value=P.state.directionalShadow,mt.spotLights.value=P.state.spot,mt.spotLightShadows.value=P.state.spotShadow,mt.rectAreaLights.value=P.state.rectArea,mt.ltc_1.value=P.state.rectAreaLTC1,mt.ltc_2.value=P.state.rectAreaLTC2,mt.pointLights.value=P.state.point,mt.pointLightShadows.value=P.state.pointShadow,mt.hemisphereLights.value=P.state.hemi,mt.directionalShadowMap.value=P.state.directionalShadowMap,mt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,mt.spotShadowMap.value=P.state.spotShadowMap,mt.spotLightMatrix.value=P.state.spotLightMatrix,mt.spotLightMap.value=P.state.spotLightMap,mt.pointShadowMap.value=P.state.pointShadowMap,mt.pointShadowMatrix.value=P.state.pointShadowMatrix),F.currentProgram=Pt,F.uniformsList=null,Pt}function pl(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=Ti.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function gl(v,R){let N=yt.get(v);N.outputColorSpace=R.outputColorSpace,N.batching=R.batching,N.batchingColor=R.batchingColor,N.instancing=R.instancing,N.instancingColor=R.instancingColor,N.instancingMorph=R.instancingMorph,N.skinning=R.skinning,N.morphTargets=R.morphTargets,N.morphNormals=R.morphNormals,N.morphColors=R.morphColors,N.morphTargetsCount=R.morphTargetsCount,N.numClippingPlanes=R.numClippingPlanes,N.numIntersection=R.numClipIntersection,N.vertexAlphas=R.vertexAlphas,N.vertexTangents=R.vertexTangents,N.toneMapping=R.toneMapping}function ch(v,R,N,F,P){R.isScene!==!0&&(R=le),M.resetTextureUnits();let $=R.fog,lt=F.isMeshStandardMaterial?R.environment:null,pt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Bi,gt=(F.isMeshStandardMaterial?q:x).get(F.envMap||lt),wt=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Pt=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),mt=!!N.morphAttributes.position,Xt=!!N.morphAttributes.normal,ne=!!N.morphAttributes.color,se=Fn;F.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(se=_.toneMapping);let Re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Zt=Re!==void 0?Re.length:0,vt=yt.get(F),dn=f.state.lights;if(et===!0&&(At===!0||v!==C)){let ke=v===C&&F.id===y;J.setState(F,v,ke)}let Kt=!1;F.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==dn.state.version||vt.outputColorSpace!==pt||P.isBatchedMesh&&vt.batching===!1||!P.isBatchedMesh&&vt.batching===!0||P.isBatchedMesh&&vt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&vt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&vt.instancing===!1||!P.isInstancedMesh&&vt.instancing===!0||P.isSkinnedMesh&&vt.skinning===!1||!P.isSkinnedMesh&&vt.skinning===!0||P.isInstancedMesh&&vt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&vt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&vt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&vt.instancingMorph===!1&&P.morphTexture!==null||vt.envMap!==gt||F.fog===!0&&vt.fog!==$||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==J.numPlanes||vt.numIntersection!==J.numIntersection)||vt.vertexAlphas!==wt||vt.vertexTangents!==Pt||vt.morphTargets!==mt||vt.morphNormals!==Xt||vt.morphColors!==ne||vt.toneMapping!==se||vt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,vt.__version=F.version);let We=vt.currentProgram;Kt===!0&&(We=Cs(F,R,P));let li=!1,qe=!1,Xi=!1,re=We.getUniforms(),$e=vt.uniforms;if(Mt.useProgram(We.program)&&(li=!0,qe=!0,Xi=!0),F.id!==y&&(y=F.id,qe=!0),li||C!==v){Mt.buffers.depth.getReversed()?(rt.copy(v.projectionMatrix),jh(rt),Qh(rt),re.setValue(U,"projectionMatrix",rt)):re.setValue(U,"projectionMatrix",v.projectionMatrix),re.setValue(U,"viewMatrix",v.matrixWorldInverse);let wn=re.map.cameraPosition;wn!==void 0&&wn.setValue(U,Vt.setFromMatrixPosition(v.matrixWorld)),kt.logarithmicDepthBuffer&&re.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&re.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),C!==v&&(C=v,qe=!0,Xi=!0)}if(P.isSkinnedMesh){re.setOptional(U,P,"bindMatrix"),re.setOptional(U,P,"bindMatrixInverse");let ke=P.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),re.setValue(U,"boneTexture",ke.boneTexture,M))}P.isBatchedMesh&&(re.setOptional(U,P,"batchingTexture"),re.setValue(U,"batchingTexture",P._matricesTexture,M),re.setOptional(U,P,"batchingIdTexture"),re.setValue(U,"batchingIdTexture",P._indirectTexture,M),re.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&re.setValue(U,"batchingColorTexture",P._colorsTexture,M));let Yi=N.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Tt.update(P,N,We),(qe||vt.receiveShadow!==P.receiveShadow)&&(vt.receiveShadow=P.receiveShadow,re.setValue(U,"receiveShadow",P.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&($e.envMap.value=gt,$e.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&R.environment!==null&&($e.envMapIntensity.value=R.environmentIntensity),qe&&(re.setValue(U,"toneMappingExposure",_.toneMappingExposure),vt.needsLights&&hh($e,Xi),$&&F.fog===!0&&at.refreshFogUniforms($e,$),at.refreshMaterialUniforms($e,F,k,tt,f.state.transmissionRenderTarget[v.id]),Ti.upload(U,pl(vt),$e,M)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ti.upload(U,pl(vt),$e,M),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&re.setValue(U,"center",P.center),re.setValue(U,"modelViewMatrix",P.modelViewMatrix),re.setValue(U,"normalMatrix",P.normalMatrix),re.setValue(U,"modelMatrix",P.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let ke=F.uniformsGroups;for(let wn=0,Vn=ke.length;wn<Vn;wn++){let ml=ke[wn];w.update(ml,We),w.bind(ml,We)}}return We}function hh(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function uh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,R,N){yt.get(v.texture).__webglTexture=R,yt.get(v.depthTexture).__webglTexture=N;let F=yt.get(v);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,R){let N=yt.get(v);N.__webglFramebuffer=R,N.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,N=0){D=v,S=R,E=N;let F=!0,P=null,$=!1,lt=!1;if(v){let gt=yt.get(v);if(gt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(U.FRAMEBUFFER,null),F=!1;else if(gt.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(gt.__hasExternalTextures)M.rebindTextures(v,yt.get(v.texture).__webglTexture,yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let mt=v.depthTexture;if(gt.__boundDepthTexture!==mt){if(mt!==null&&yt.has(mt)&&(v.width!==mt.image.width||v.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}let wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(lt=!0);let Pt=yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[R])?P=Pt[R][N]:P=Pt[R],$=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?P=yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?P=Pt[N]:P=Pt,T.copy(v.viewport),z.copy(v.scissor),B=v.scissorTest}else T.copy(_t).multiplyScalar(k).floor(),z.copy(Nt).multiplyScalar(k).floor(),B=$t;if(Mt.bindFramebuffer(U.FRAMEBUFFER,P)&&F&&Mt.drawBuffers(v,P),Mt.viewport(T),Mt.scissor(z),Mt.setScissorTest(B),$){let gt=yt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+R,gt.__webglTexture,N)}else if(lt){let gt=yt.get(v.texture),wt=R||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.__webglTexture,N||0,wt)}y=-1},this.readRenderTargetPixels=function(v,R,N,F,P,$,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){Mt.bindFramebuffer(U.FRAMEBUFFER,pt);try{let gt=v.texture,wt=gt.format,Pt=gt.type;if(!kt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-F&&N>=0&&N<=v.height-P&&U.readPixels(R,N,F,P,Lt.convert(wt),Lt.convert(Pt),$)}finally{let gt=D!==null?yt.get(D).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,R,N,F,P,$,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){let gt=v.texture,wt=gt.format,Pt=gt.type;if(!kt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=v.width-F&&N>=0&&N<=v.height-P){Mt.bindFramebuffer(U.FRAMEBUFFER,pt);let mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.bufferData(U.PIXEL_PACK_BUFFER,$.byteLength,U.STREAM_READ),U.readPixels(R,N,F,P,Lt.convert(wt),Lt.convert(Pt),0);let Xt=D!==null?yt.get(D).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,Xt);let ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kh(U,ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,$),U.deleteBuffer(mt),U.deleteSync(ne),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,R=null,N=0){v.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,v=arguments[1]);let F=Math.pow(2,-N),P=Math.floor(v.image.width*F),$=Math.floor(v.image.height*F),lt=R!==null?R.x:0,pt=R!==null?R.y:0;M.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,N,0,0,lt,pt,P,$),Mt.unbindTexture()},this.copyTextureToTexture=function(v,R,N=null,F=null,P=0){v.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,v=arguments[1],R=arguments[2],P=arguments[3]||0,N=null);let $,lt,pt,gt,wt,Pt,mt,Xt,ne,se=v.isCompressedTexture?v.mipmaps[P]:v.image;N!==null?($=N.max.x-N.min.x,lt=N.max.y-N.min.y,pt=N.isBox3?N.max.z-N.min.z:1,gt=N.min.x,wt=N.min.y,Pt=N.isBox3?N.min.z:0):($=se.width,lt=se.height,pt=se.depth||1,gt=0,wt=0,Pt=0),F!==null?(mt=F.x,Xt=F.y,ne=F.z):(mt=0,Xt=0,ne=0);let Re=Lt.convert(R.format),Zt=Lt.convert(R.type),vt;R.isData3DTexture?(M.setTexture3D(R,0),vt=U.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(M.setTexture2DArray(R,0),vt=U.TEXTURE_2D_ARRAY):(M.setTexture2D(R,0),vt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,R.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,R.unpackAlignment);let dn=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),We=U.getParameter(U.UNPACK_SKIP_PIXELS),li=U.getParameter(U.UNPACK_SKIP_ROWS),qe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gt),U.pixelStorei(U.UNPACK_SKIP_ROWS,wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pt);let Xi=v.isDataArrayTexture||v.isData3DTexture,re=R.isDataArrayTexture||R.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let $e=yt.get(v),Yi=yt.get(R),ke=yt.get($e.__renderTarget),wn=yt.get(Yi.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,ke.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let Vn=0;Vn<pt;Vn++)Xi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(v).__webglTexture,P,Pt+Vn),v.isDepthTexture?(re&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(R).__webglTexture,P,ne+Vn),U.blitFramebuffer(gt,wt,$,lt,mt,Xt,$,lt,U.DEPTH_BUFFER_BIT,U.NEAREST)):re?U.copyTexSubImage3D(vt,P,mt,Xt,ne+Vn,gt,wt,$,lt):U.copyTexSubImage2D(vt,P,mt,Xt,ne+Vn,gt,wt,$,lt);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(vt,P,mt,Xt,ne,$,lt,pt,Re,Zt,se.data):R.isCompressedArrayTexture?U.compressedTexSubImage3D(vt,P,mt,Xt,ne,$,lt,pt,Re,se.data):U.texSubImage3D(vt,P,mt,Xt,ne,$,lt,pt,Re,Zt,se):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,mt,Xt,$,lt,Re,Zt,se.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,mt,Xt,se.width,se.height,Re,se.data):U.texSubImage2D(U.TEXTURE_2D,P,mt,Xt,$,lt,Re,Zt,se);U.pixelStorei(U.UNPACK_ROW_LENGTH,dn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,li),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qe),P===0&&R.generateMipmaps&&U.generateMipmap(vt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(v,R,N=null,F=null,P=0){return v.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,v=arguments[2],R=arguments[3],P=arguments[4]||0),es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,R,N,F,P)},this.initRenderTarget=function(v){yt.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),Mt.unbindTexture()},this.resetState=function(){S=0,E=0,D=null,Mt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}};var ur=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _e,this.environmentIntensity=1,this.environmentRotation=new _e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ao=class extends De{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,h=Be,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var os=class extends de{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ii=new Yt,mc=new Yt,ks=[],Ac=new Mn,Wg=new Yt,$i=new te,ts=new kn,fr=class extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),Ac.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Ac)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),ts.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),t.ray.intersectsSphere(ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),mc.multiplyMatrices(n,Ii),$i.matrixWorld=mc,$i.raycast(t,ks);for(let a=0,o=ks.length;a<o;a++){let l=ks[a];l.instanceId=r,l.object=this,e.push(l)}ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ao(new Float32Array(s*this.count),s,this.count,Oo,nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ri=class extends bn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xc=new Yt,xo=new nr,Hs=new kn,Gs=new V,qi=class extends Se{constructor(t=new pe,e=new ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Hs.radius+=r,t.ray.intersectsSphere(Hs)===!1)return;xc.copy(s).invert(),xo.copy(t.ray).applyMatrix4(xc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let m=d,A=g;m<A;m++){let p=c.getX(m);Gs.fromBufferAttribute(u,p),vc(Gs,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let m=d,A=g;m<A;m++)Gs.fromBufferAttribute(u,m),vc(Gs,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vc(i,t,e,n,s,r,a){let o=xo.distanceSqToPoint(i);if(o<e){let l=new V;xo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Sn=class extends De{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pr=class i extends pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new V,h=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let g=n+u/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ls=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],g=[],m=0,A=[],p=n/2,f=0;b(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(g,2));function b(){let _=new V,L=new V,S=0,E=(e-t)/n;for(let D=0;D<=r;D++){let y=[],C=D/r,T=C*(e-t)+t;for(let z=0;z<=s;z++){let B=z/s,H=B*l+o,K=Math.sin(H),G=Math.cos(H);L.x=T*K,L.y=-C*n+p,L.z=T*G,u.push(L.x,L.y,L.z),_.set(K,E,G).normalize(),d.push(_.x,_.y,_.z),g.push(B,1-C),y.push(m++)}A.push(y)}for(let D=0;D<s;D++)for(let y=0;y<r;y++){let C=A[y][D],T=A[y+1][D],z=A[y+1][D+1],B=A[y][D+1];(t>0||y!==0)&&(h.push(C,T,B),S+=3),(e>0||y!==r-1)&&(h.push(T,z,B),S+=3)}c.addGroup(f,S,0),f+=S}function I(_){let L=m,S=new bt,E=new V,D=0,y=_===!0?t:e,C=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,p*C,0),d.push(0,C,0),g.push(.5,.5),m++;let T=m;for(let z=0;z<=s;z++){let H=z/s*l+o,K=Math.cos(H),G=Math.sin(H);E.x=y*G,E.y=p*C,E.z=y*K,u.push(E.x,E.y,E.z),d.push(0,C,0),S.x=K*.5+.5,S.y=G*.5*C+.5,g.push(S.x,S.y),m++}for(let z=0;z<s;z++){let B=L+z,H=T+z;_===!0?h.push(H,H+1,B):h.push(H+1,H,B),D+=3}c.addGroup(f,D,_===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cs=class i extends ls{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hs=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new V,d=new V,g=[],m=[],A=[],p=[];for(let f=0;f<=n;f++){let b=[],I=f/n,_=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let S=L/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+I*o),u.y=t*Math.cos(a+I*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+I*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),p.push(S+_,1-I),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let I=h[f][b+1],_=h[f][b],L=h[f+1][b],S=h[f+1][b+1];(f!==0||a>0)&&g.push(I,_,S),(f!==n-1||l<Math.PI)&&g.push(_,L,S)}this.setIndex(g),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(A,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gr=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new V,u=new V,d=new V;for(let g=0;g<=n;g++)for(let m=0;m<=s;m++){let A=m/s*r,p=g/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(A),u.y=(t+e*Math.cos(p))*Math.sin(A),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let A=(s+1)*g+m-1,p=(s+1)*(g-1)+m-1,f=(s+1)*(g-1)+m,b=(s+1)*g+m;a.push(A,p,b),a.push(p,f,b)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var mr=class extends me{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var Ar=class extends bn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _e,this.combine=yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ln=class extends bn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _e,this.combine=yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ws(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ni=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vo=class extends Ni{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _l:r=t,o=2*e-n;break;case yl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _l:a=t,l=2*n-e;break;case yl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,g=this._weightNext,m=(n-e)/(s-e),A=m*m,p=A*m,f=-d*p+2*d*A-d*m,b=(1+d)*p+(-1.5-2*d)*A+(-.5+d)*m+1,I=(-1-g)*p+(1.5+g)*A+.5*m,_=g*p-g*A;for(let L=0;L!==o;++L)r[L]=f*a[h+L]+b*a[c+L]+I*a[l+L]+_*a[u+L];return r}},Co=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},_o=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ws(e,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ws(t.times,Array),values:Ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case Fr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return Fr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Xg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,g=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[g+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[u+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Ja;var ai=class extends Qe{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Qs;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends Qe{};yo.prototype.ValueTypeName="color";var Io=class extends Qe{};Io.prototype.ValueTypeName="number";var Mo=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ve.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends Qe{InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends Qe{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Qs;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Qe{};bo.prototype.ValueTypeName="vector";var So=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let g=c[u],m=c[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return m}return null}}},Yg=new So,Eo=class{constructor(t){this.manager=t!==void 0?t:Yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Cr=class extends vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fa=new Yt,Cc=new V,_c=new V,To=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wo=class extends To{constructor(){super(new Di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_r=class extends vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new wo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Fi=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=yc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function yc(){return performance.now()}var Yo="\\[\\]\\.:\\/",Zg=new RegExp("["+Yo+"]","g"),Zo="[^"+Yo+"]",Kg="[^"+Yo.replace("\\.","")+"]",jg=/((?:WC+[\/:])*)/.source.replace("WC",Zo),Qg=/(WCOD+)?/.source.replace("WCOD",Kg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zo),$g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zo),tm=new RegExp("^"+jg+Qg+Jg+$g+"$"),em=["material","materials","bones","map"],Vo=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zg,"")}static parseTrackName(t){let e=tm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Vo;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _m=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function ds(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new pe,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[g]===void 0&&(a[g]=[]),a[g].push(u.morphAttributes[g])}if(t){let g;if(e)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let g=i[d].index;for(let m=0;m<g.count;++m)u.push(g.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Hc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let g=[];for(let A=0;A<a[h].length;++A)g.push(a[h][A][d]);let m=Hc(g);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Hc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new de(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,g=h.count;d<g;d++)for(let m=0;m<e;m++){let A=h.getComponent(d,m);o.setComponent(d+u,m,A)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var hn={candy:{s:.1,g:0,ar:"\u062D\u0644\u0627\u0648\u0629",en:"Candy"},apple:{s:.12,g:0,ar:"\u062A\u0641\u0627\u062D\u0629",en:"Apple"},duck:{s:.16,g:0,ar:"\u0628\u0637\u0629 \u0644\u0639\u0628\u0629",en:"Rubber duck"},hotdog:{s:.22,g:0,ar:"\u0647\u0648\u062A \u062F\u0648\u062C",en:"Hot Dog"},pretzel:{s:.22,g:0,ar:"\u0628\u0631\u064A\u062A\u0632\u0644",en:"Pretzel"},banana:{s:.22,g:0,ar:"\u0645\u0648\u0632\u0629",en:"Banana"},ball:{s:.24,g:0,ar:"\u0643\u0648\u0631\u0629",en:"Ball"},teddy:{s:.34,g:0,ar:"\u062F\u0628\u062F\u0648\u0628",en:"Teddy"},cone:{s:.4,g:0,ar:"\u0642\u0645\u0639 \u0645\u0631\u0648\u0631",en:"Cone"},hydrant:{s:.75,g:1,ar:"\u062D\u0646\u0641\u064A\u0629 \u062D\u0631\u064A\u0642",en:"Hydrant"},bin:{s:.9,g:1,ar:"\u0635\u0646\u062F\u0648\u0642 \u0632\u0628\u0627\u0644\u0629",en:"Trash can"},plant:{s:1.1,g:1,ar:"\u0632\u0631\u0639\u0629",en:"Plant pot"},bike:{s:1.7,g:1,ar:"\u0639\u062C\u0644\u0629",en:"Bike"},cart:{s:2,g:1,ar:"\u0639\u0631\u0628\u064A\u0629 \u0623\u0643\u0644",en:"Food cart"},umbrella:{s:2.2,g:1,ar:"\u0634\u0645\u0633\u064A\u0629",en:"Umbrella table"},car:{s:4.2,g:2,ar:"\u0639\u0631\u0628\u064A\u0629",en:"Car"},taxi:{s:4.4,g:2,ar:"\u062A\u0627\u0643\u0633\u064A",en:"Taxi"},police:{s:4.6,g:2,ar:"\u0639\u0631\u0628\u064A\u0629 \u0634\u0631\u0637\u0629",en:"Police Car"},tree:{s:5,g:2,ar:"\u0634\u062C\u0631\u0629",en:"Tree"},truck:{s:6.5,g:2,ar:"\u0639\u0631\u0628\u064A\u0629 \u0623\u0643\u0644 \u0643\u0628\u064A\u0631\u0629",en:"Food Truck"},bus:{s:11,g:3,ar:"\u0623\u062A\u0648\u0628\u064A\u0633",en:"Bus"},firetruck:{s:10,g:3,ar:"\u0639\u0631\u0628\u064A\u0629 \u0645\u0637\u0627\u0641\u064A",en:"Fire truck"},shop:{s:14,g:4,ar:"\u0645\u062D\u0644",en:"Shop"},house:{s:18,g:4,ar:"\u0639\u0645\u0627\u0631\u0629",en:"Building"},office:{s:24,g:4,ar:"\u0628\u0631\u062C",en:"Tower"},tower:{s:32,g:4,ar:"\u0646\u0627\u0637\u062D\u0629 \u0633\u062D\u0627\u0628",en:"Skyscraper"}},En=[{d:1.3,next:"street",ar:"\u062D\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0631\u0639",en:"street stuff"},{d:3.2,next:"carts",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0627\u062A \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u0648\u0627\u0644\u0634\u0645\u0627\u0633\u064A",en:"carts and umbrellas"},{d:6.6,next:"cars",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0627\u062A",en:"cars"},{d:16,next:"buses",ar:"\u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633\u0627\u062A",en:"buses"},{d:22,next:"buildings",ar:"\u0627\u0644\u0639\u0645\u0627\u0631\u0627\u062A",en:"buildings"},{d:45,next:"giant",ar:"\u0646\u0627\u0637\u062D\u0627\u062A \u0627\u0644\u0633\u062D\u0627\u0628",en:"skyscrapers"},{d:60,next:"done",ar:"\u0643\u0644 \u0627\u0644\u0645\u062F\u064A\u0646\u0629",en:"the whole city"}],Gc=[20,40,60],jo=.6,cn=230;function nm(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Qo(i=11){let t=nm(i),e=[],n=(o,l,c,h=t()*6.28)=>{let d=hn[o].s*(.9+t()*.2);e.push({kind:o,x:l,z:c,s:d,r:Math.max(.12,d*.5),a:h,id:e.length})},s=46,r=14,a=o=>(o%s+s)%s<r;for(let o=0;o<520;o++){let l=(t()*2-1)*13,c=-68+t()*86,h=t();n(h<.13?"candy":h<.24?"apple":h<.34?"duck":h<.48?"hotdog":h<.6?"pretzel":h<.7?"banana":h<.8?"ball":h<.9?"teddy":"cone",l,c)}for(let o=0;o<60;o++){let l=(t()<.5?-1:1)*(6+t()*7),c=-66+t()*82,h=t();n(h<.2?"hydrant":h<.4?"bin":h<.6?"plant":h<.75?"bike":h<.88?"umbrella":"cart",l,c)}for(let o=0;o<900;o++){let l=(t()*2-1)*(cn-6),c=(t()*2-1)*(cn-6);if(Math.abs(l)<16&&c>-72&&c<22)continue;let h=t();h<.45?n(["hotdog","teddy","cone","ball","banana","duck"][Math.floor(t()*6)],l,c):h<.75&&n(["hydrant","bin","plant","bike","umbrella","cart"][Math.floor(t()*6)],l,c)}for(let o=-5;o<=5;o++){let l=o*s+r/2;for(let c=-cn+10;c<cn-10;c+=9+t()*12){let h=t()<.5?-3:3,u=t(),d=u<.36?"car":u<.6?"taxi":u<.72?"police":u<.84?"truck":u<.94?"bus":"firetruck";Math.abs(l)<18&&c>-75&&c<25||(t()<.5?n(d,l+h,c,h>0?Math.PI:0):Math.abs(c)<18&&l>-75&&l<25||n(d,c,l+h,h>0?-Math.PI/2:Math.PI/2))}}for(let o=-5;o<=4;o++)for(let l=-5;l<=4;l++){let c=o*s+r,h=l*s+r,u=c+(s-r)/2,d=h+(s-r)/2;if(Math.abs(u)<30&&d>-90&&d<40)continue;let g=Math.hypot(u,d);if(t()<.15){for(let A=0;A<6;A++)n("tree",u+(t()-.5)*24,d+(t()-.5)*24);continue}let m=g<90?t()<.6?"shop":"house":g<150?t()<.5?"house":"office":t()<.5?"office":"tower";m==="shop"?(n("shop",u-7,d-7,0),n("shop",u+7,d+7,0),n("tree",u+8,d-8)):n(m,u,d,0)}for(let o of e)hn[o.kind].g===4&&(o.r=o.s*.48),o.h=hn[o.kind].g===4?o.s*(o.kind==="tower"?2.6:o.kind==="office"?1.9:o.kind==="house"?1.3:.8):o.s;return e}var Sr=class{constructor(t={}){var e,n;this.easy=!!t.easy,this.things=t.things||Qo((e=t.city)!=null?e:11);for(let s of this.things)s.taken=!1;this.d=.5,this.ball={x:0,z:12,vx:0,vz:0},this.time=(n=t.time)!=null?n:this.easy?150:120,this.left=this.time,this.state="count",this.countT=3,this.goal=0,this.move={x:0,z:0},this.events=[],this.collected=0,this.byGroup=[0,0,0,0,0],this.bumpT=0,this.cell=12,this.grid=new Map;for(let s of this.things){let r=this._key(Math.floor(s.x/this.cell),Math.floor(s.z/this.cell));this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(s)}}_key(t,e){return t*10007+e}get r(){return this.d/2}get goalD(){return En[Math.min(this.goal,En.length-1)].d}setMove(t,e){let n=Math.hypot(t,e);this.move=n>1?{x:t/n,z:e/n}:{x:t,z:e}}_near(t,e,n){let s=[],r=Math.floor((t-n)/this.cell),a=Math.floor((t+n)/this.cell),o=Math.floor((e-n)/this.cell),l=Math.floor((e+n)/this.cell);for(let c=r;c<=a;c++)for(let h=o;h<=l;h++){let u=this.grid.get(this._key(c,h));if(u)for(let d of u)d.taken||s.push(d)}return s}step(t){if(this.events=[],this.state==="count"){let l=Math.ceil(this.countT);return this.countT-=t,Math.ceil(this.countT)!==l&&this.countT>0&&this.events.push({type:"count",n:Math.ceil(this.countT)}),this.countT<=0&&(this.state="roll",this.events.push({type:"go"})),this.events}if(this.state!=="roll")return this.events;let e=Math.ceil(this.left);this.left-=t,Math.ceil(this.left)!==e&&this.left<=10&&this.left>0&&this.events.push({type:"tick",n:Math.ceil(this.left)});let n=this.ball,s=3+this.d*1.5,r=7+this.d*2.2;n.vx+=(this.move.x*s-n.vx)*Math.min(1,r/s*t),n.vz+=(this.move.z*s-n.vz)*Math.min(1,r/s*t),n.x+=n.vx*t,n.z+=n.vz*t;let a=cn-this.r;Math.abs(n.x)>a&&(n.x=Math.sign(n.x)*a,n.vx*=-.4),Math.abs(n.z)>a&&(n.z=Math.sign(n.z)*a,n.vz*=-.4),this.bumpT=Math.max(0,this.bumpT-t);let o=this.r;for(let l of this._near(n.x,n.z,o+20)){let c=n.x-l.x,h=n.z-l.z,u=Math.hypot(c,h);if(!(u>o+l.r))if(l.s<=this.d*jo){l.taken=!0,this.collected++,this.byGroup[hn[l.kind].g]++;let d=this.d;this.d+=l.s*.17*(1+.9/this.d)/(1+this.d/18),this.events.push({type:"stick",id:l.id,kind:l.kind,s:l.s,x:l.x,z:l.z,from:d}),this._goalCheck()}else if(l.s<=this.d*1.6&&hn[l.kind].g<4){let d=u||1,g=o+l.r-u;l.x-=c/d*g,l.z-=h/d*g,l.a+=.3,this.bumpT<=0&&(this.bumpT=.25,this.events.push({type:"nudge",kind:l.kind,id:l.id}))}else{let d=u||1,g=o+l.r-u;n.x+=c/d*g,n.z+=h/d*g;let m=n.vx*(c/d)+n.vz*(h/d);if(m<0&&(n.vx-=1.7*m*(c/d),n.vz-=1.7*m*(h/d)),this.bumpT<=0&&Math.abs(m)>1.2){this.bumpT=.6;let A=Math.min(this.d*.02,.6);this.d=Math.max(.5,this.d-A),this.events.push({type:"bump",kind:l.kind,x:l.x,z:l.z,lose:A})}}}return this.left<=0&&(this.left=0,this.state="done",this.result=this._result(),this.events.push({type:"timeUp"})),this.events}_goalCheck(){for(;this.goal<En.length&&this.d>=En[this.goal].d;){let t=En[this.goal];this.goal++,this.events.push({type:"bigger",goal:this.goal,reached:t.d,next:t.next})}}_result(){let t=Gc.filter(e=>this.d>=e*(this.easy?.75:1)).length;return{d:this.d,stars:t,collected:this.collected,byGroup:this.byGroup.slice()}}};function Wc(i){let t=i&&typeof i=="object"?i:{},e=Number(t.best),n=Math.floor(Number(t.stars)),s=Math.floor(Number(t.plays));return{best:Number.isFinite(e)&&e>0?Math.min(Math.round(e*10)/10,999):0,stars:n>=0&&n<=3?n:0,plays:Number.isFinite(s)&&s>0?Math.min(s,99999):0,muted:t.muted===!0}}var im=i=>new It(i);function Q(i,t,e=0,n=0,s=0,r=0,a=0,o=0,l=1,c=1,h=1){let u=i.index?i.toNonIndexed():i.clone();for(let p of Object.keys(u.attributes))p!=="position"&&p!=="normal"&&u.deleteAttribute(p);let d=new Yt().compose(new V(e,n,s),new Ve().setFromEuler(new _e(r,a,o)),new V(l,c,h));u.applyMatrix4(d);let g=u.attributes.position.count,m=new Float32Array(g*3),A=im(t);for(let p=0;p<g;p++)m.set([A.r,A.g,A.b],p*3);return u.setAttribute("color",new de(m,3)),u}var Bt=(i,t,e)=>new on(i,t,e),Qt=(i,t=10)=>new hs(i,Math.min(t,8),6),Ce=(i,t,e,n=10)=>new ls(i,t,e,Math.min(n,8)),Oi=(i,t,e=10)=>new cs(i,t,e),fs=(i,t,e=12)=>new gr(i,t,6,e);function Er(i,t,e,n,s=n){for(let r of[-t*.32,t*.32])for(let a of[-1,1])i.push(Q(Ce(n,n,.12,12),1710622,a*e*.5,s,r,0,0,Math.PI/2))}function Jo(i,t=i,e=[]){let n=[];n.push(Q(Bt(.46,.18,1),i,0,.17,0)),n.push(Q(Bt(.4,.16,.5),t,0,.33,.03)),n.push(Q(Bt(.38,.12,.02),2767434,0,.34,-.23)),n.push(Q(Bt(.38,.12,.02),2767434,0,.34,.29));for(let s of[-1,1])n.push(Q(Bt(.08,.04,.02),16774344,s*.15,.2,-.5)),n.push(Q(Bt(.08,.04,.02),15217194,s*.15,.2,.5));return Er(n,1,.46,.09),n.concat(e)}var ps={candy:()=>[Q(Qt(.35),16734904),Q(Oi(.18,.3),16769594,.45,0,0,0,0,-Math.PI/2),Q(Oi(.18,.3),16769594,-.45,0,0,0,0,Math.PI/2)].map(i=>i.translate(0,.35,0)),apple:()=>[Q(Qt(.45,12),15217194,0,.45,0),Q(Ce(.04,.04,.2),6965794,0,.95,0),Q(Qt(.12),4896826,.12,.95,0,0,0,0,1.6,.4,.8)],duck:()=>[Q(Qt(.4,12),16765498,0,.35,0,0,0,0,1,.8,1.2),Q(Qt(.25,12),16765498,0,.75,-.25),Q(Oi(.1,.2),16747034,0,.72,-.5,-Math.PI/2),Q(Qt(.05),1118481,.12,.82,-.38),Q(Qt(.05),1118481,-.12,.82,-.38)],hotdog:()=>[Q(Ce(.22,.22,1,10),15249514,0,.22,0,Math.PI/2,0,0,1.4,1,.5),Q(Ce(.13,.13,1.15,10),13127722,0,.32,0,Math.PI/2),Q(Bt(.06,.04,.9),16765498,0,.45,0)],pretzel:()=>[Q(fs(.3,.1),11035690,-.18,.12,0,Math.PI/2),Q(fs(.3,.1),11035690,.18,.12,0,Math.PI/2),Q(Qt(.03),16777215,.2,.25,.2),Q(Qt(.03),16777215,-.25,.25,-.1)],banana:()=>[Q(fs(.4,.11,10),16767034,0,.12,0,Math.PI/2,0,0).scale(1,1,1),Q(Qt(.05),5913114,.4,.12,0)].map(i=>i),ball:()=>[Q(Qt(.5,14),16777215,0,.5,0),Q(Qt(.18),1118481,0,.5,-.42),Q(Qt(.18),1118481,.4,.62,0),Q(Qt(.18),1118481,-.3,.75,.2)],teddy:()=>[Q(Qt(.32,12),12088890,0,.3,0),Q(Qt(.24,12),12088890,0,.72,0),Q(Qt(.09),12088890,.18,.9,0),Q(Qt(.09),12088890,-.18,.9,0),Q(Qt(.08),15255712,0,.68,-.2),Q(Qt(.03),1118481,.08,.78,-.2),Q(Qt(.03),1118481,-.08,.78,-.2),Q(Qt(.11),12088890,.3,.32,-.1),Q(Qt(.11),12088890,-.3,.32,-.1)],cone:()=>[Q(Oi(.3,.9,12),16738842,0,.5,0),Q(Ce(.17,.22,.12,12),16777215,0,.45,0),Q(Bt(.7,.06,.7),16738842,0,.03,0)],hydrant:()=>[Q(Ce(.22,.25,.7,12),15217194,0,.35,0),Q(Qt(.22),15217194,0,.72,0),Q(Ce(.08,.08,.7),13158600,0,.5,0,0,0,Math.PI/2),Q(Ce(.3,.3,.06,12),12066858,0,.03,0)],bin:()=>[Q(Ce(.38,.32,.9,12),3836490,0,.45,0),Q(Ce(.42,.42,.08,12),2779706,0,.92,0),Q(Qt(.12),16765498,0,.98,0)],plant:()=>[Q(Ce(.3,.22,.4,12),13131834,0,.2,0),Q(Qt(.45,12),4892730,0,.75,0),Q(Qt(.3),5949514,.2,.95,.1)],bike:()=>[Q(fs(.25,.04,14),1710618,0,.27,-.33,0,Math.PI/2),Q(fs(.25,.04,14),1710618,0,.27,.33,0,Math.PI/2),Q(Bt(.05,.05,.66),2788072,0,.45,0,.3),Q(Bt(.05,.4,.05),2788072,0,.45,-.25),Q(Bt(.3,.04,.04),2763306,0,.66,-.3),Q(Bt(.12,.05,.2),2763306,0,.62,.18)],cart:()=>[Q(Bt(.6,.45,.9),15921906,0,.45,0),Q(Bt(.62,.08,.92),15217194,0,.7,0),Q(Ce(.02,.02,.5),9079434,0,.95,0),Q(Oi(.6,.3,8),16765498,0,1.25,0),Q(Ce(.12,.12,.06,10),2763306,.32,.12,.3,0,0,Math.PI/2),Q(Ce(.12,.12,.06,10),2763306,-.32,.12,.3,0,0,Math.PI/2)],umbrella:()=>{let i=[Q(Ce(.03,.03,.9),13158600,0,.45,0),Q(Ce(.3,.3,.04,14),15921906,0,.35,0),Q(Ce(.03,.03,.35),9079434,0,.17,0)];for(let t=0;t<8;t++)i.push(Q(new cs(.5,.2,8,1,!0,t/8*Math.PI*2,Math.PI/4),t%2?16777215:15217194,0,.98,0));return i},car:()=>Jo(3832552),taxi:()=>Jo(16761370,16761370,[Q(Bt(.16,.06,.1),2763306,0,.44,.03)]),police:()=>Jo(16777215,1718922,[Q(Bt(.1,.05,.06),15217194,-.06,.44,.03),Q(Bt(.1,.05,.06),2779880,.06,.44,.03),Q(Bt(.47,.06,.3),1718922,0,.2,0)]),tree:()=>[Q(Ce(.06,.09,.5),8014370,0,.25,0),Q(Qt(.35,10),3840570,0,.7,0),Q(Qt(.25,10),4896842,.12,.9,.08),Q(Qt(.22,10),3115567,-.15,.85,-.05)],truck:()=>{let i=[Q(Bt(.42,.42,.66),16738984,0,.3,.12),Q(Bt(.42,.3,.3),16777215,0,.24,-.35),Q(Bt(.36,.14,.02),2767434,0,.32,-.5),Q(Bt(.02,.18,.4),2763306,.22,.32,.12),Q(Oi(.1,.18,8),16767136,0,.6,.12)];return Er(i,1,.42,.08),i},bus:()=>{let i=[Q(Bt(.3,.44,1),15217194,0,.27,0),Q(Bt(.31,.06,1.01),16777215,0,.27,0)];for(let t of[.18,.38])for(let e of[-1,1])i.push(Q(Bt(.01,.08,.86),2767434,e*.155,t,0));return i.push(Q(Bt(.26,.14,.01),2767434,0,.3,-.5)),Er(i,1,.3,.06),i},firetruck:()=>{let i=[Q(Bt(.36,.26,1),14164010,0,.2,0),Q(Bt(.34,.12,.3),14164010,0,.38,-.33),Q(Bt(.06,.06,.66),13158600,0,.38,.15),Q(Bt(.3,.12,.01),2767434,0,.38,-.49),Q(Bt(.06,.05,.06),3828456,0,.46,-.33)];return Er(i,1,.36,.07),i}};function Tr(i,t,e,n){let s=[Q(Bt(.96,t,.96),i,0,t/2,0),Q(Bt(1,.04,1),14211288,0,t+.02,0)],r=Math.max(2,Math.round(t*7));for(let a=0;a<r;a++){let o=(a+.6)*(t/r),l=n?9099519:16773304;for(let[c,h,u]of[[0,.485,0],[0,-.485,0],[.485,0,Math.PI/2],[-.485,0,Math.PI/2]])s.push(Q(Bt(.8,t/r*.45,.01),a%3===1?4872810:l,c,o,h,0,u))}return e&&s.push(Q(Bt(.6,Math.min(.5,t*.4),.02),e,0,t*.55,-.5)),s.push(Q(Bt(.2,.12,.2),10132122,.25,t+.1,.2)),s}ps.shop=()=>Tr(16759e3,.8,5957887,!1);ps.house=()=>Tr(15913610,1.3,16734904,!1);ps.office=()=>Tr(6990056,1.9,16765498,!0);ps.tower=()=>Tr(9079528,2.6,16738874,!0);var $o=new Map;function tl(i){if(!$o.has(i)){let t=ds(ps[i]());t.computeBoundingSphere(),$o.set(i,t)}return $o.get(i)}var el=new ln({vertexColors:!0});function Xc(){let i=new sn,t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d");e.fillStyle="#ff5aa8",e.fillRect(0,0,256,128);for(let r=0;r<40;r++)e.fillStyle=r%2?"rgba(255,140,200,0.6)":"rgba(220,40,140,0.35)",e.beginPath(),e.ellipse(Math.random()*256,Math.random()*128,6+Math.random()*18,3+Math.random()*8,Math.random()*3,0,Math.PI*2),e.fill();let n=new Sn(t);n.colorSpace=ge;let s=new te(new hs(.5,32,22),new Ar({map:n,shininess:90,specular:16763112}));return i.add(s),{root:i,core:s}}function nl(i,t,e,n=4){let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,256,256);let a=256/n;for(let l=0;l<n;l++)for(let c=0;c<n;c++)r.fillStyle=(l+c)%2?i:t,r.fillRect(l*a+2,c*a+2,a-4,a-4);let o=new Sn(s);return o.wrapS=o.wrapT=ss,o.colorSpace=ge,o.anisotropy=4,o}function Yc(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function Zc(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var Kc={bigger:"data:audio/mpeg;base64,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rjsfQIZQXa5Wby6y56Z/T98F07Z/RT6JqNdON3wn66Dd2pCEK+OJ6AzOIQ/1Oa3RFlvXSLLSMo3jDK0SZCyEogcR3HkhqKWjlVMKdc8zEu3/+zjE1gOJhOkMB6TmgTkqocj0lLijy27s1TKnVyG+6uZi11lw9gehWtNuHy5lMdmq45cvd2tLuRiCJhYCocThXFG61AuslUCUvRLrbQ+Soj4FQRo0wBHqOqWo7fVbVPlTD5P5IswcjXkGJjdmpNKJhiREo9REpIiYkidzTEwk6kjRRg5GvprF2qvRsPmdqmjTha8VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAJH/+zjE6gAIeVUbRIRGweixoRmHoGBIIAsdQNu0MIS/My/9pq1scjJlkcjJlDAwaOR/2ykZMFDAg4JmTIvrFRYPGgqKN/+LMpFhcy76xQW/AooLTQVFiRoCigkNAUKmlUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7IAG1NMlIYRH4mqyIUj2GfhVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjExAPJaJTbBIRlwAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",bump:"data:audio/mpeg;base64,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jk8tllllsssst//9rLFDAwQIOjkatbHIy7JZ/2f7KwMFTTVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5YEKPXEVRZhGgc+vIYmEDjlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5AMJ/JUWYJhhwY4ol0T0jblVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",rumble:"data:audio/mpeg;base64,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W/PsS/pBfpbMRD7m/g/n6H3M1zjsZlcvh3B2oX/UPRQ5//ClEcWk86o3DOb/+zjE6oOMgP0QDqSrgXKaokXEFbpMxeCBlYVGOGPGm2zbgToRqGywt9tDYJPGeZwgkSy07NUHKba6Q2ZalRqt1UrYNYN/zHo+DeT55X6TxwVS5bRbit5/a27JW3OcWG3kjDnqAAaBcKdyFYNgpB9XCJ1w9HUpZVAzdWSRWyzOnxzj1+ZmWK81p2rIkr3UIjOsnEze22Qn/vH+jV/8mtjZpXC/XlrFoKqZ8qX5kIOmDpoHuwplVrCi3p0lhL9gxVlQtmO9T4gbUHsZ4ebE3vE0lxNwvdQVJY3/+zjE64MMrSkSTaSnwP6QZA2kCGgRaIhKxPRuEFDEI3BqOgceMKWLKroleeHDNIpyQTYSEpI20H6hkE1N2zdRDyrUGKuaqF3bM++fiNNeCevQtVfWr8+wnXj4J8D1b8Xpzf6wNFQbBUtkdEGv1OrWa/bjULofBP+zwSyUnOD6AI5lT9cPrE14jKdApwEHAoCKKNIcEpwmyoSt5+Im+y5mAvtAr3t41J7IfE0UBqKB7H2BfFAtMhJJRiqLLZ2QBLJBXLhTTaSTpKhJzhBUIKtQjcbWI1qEeFv/+zjE+oIPCYcQbSRvyRSXpBzwiPgoD+EIuIoVFlSjRPuX6iNVEfjrGsMzw7bSP+pJyk+UuzYxaWmS1553zjQYSDESKSK0VxbM5xpW5Ty0+dheZs/+n/lvUnaza1qSmsRq+OLjnd6dFIpOgGLR5YDBAgcea1CyhcjqYZcoX0i3ULsxZmsU//FhXULsxZn/4p/+qGZMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE/QISPY8ETDETQS6uI2jAiMCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE74IVRW0ILLDTiLKCohxhiBKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",siren:"data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+zjAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABoAABbIABISEhwcHBwlJSUlLy8vLzg4ODhCQkJCS0tLVVVVVV5eXl5oaGhocXFxcXt7e3uEhISOjo6Ol5eXl6GhoaGqqqqqtLS0tL29vb3Hx8fQ0NDQ2tra2uPj4+Pt7e3t9vb29v///wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBMAAAAAAAAAWyHr+92oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+zjEAAAJxCNvVGCAAYSPLJc08ACAAAQACU4MiDAQAAAIwwgQIAgQQIAmD4Pg+fqBAEATB8HwfD7uAwfB8P3flwfBAEAQDCfBAEHfygIHC4P///WD4Ph8AAgc1g+D4fBAEAwBuB3yBgFwFFSzlKY+KBqxBjHrZDlJuaCwFCz44P0VAY4TJHhQvLXIKJPLkLOtQstmkpWVs1HrjVswLMSuevaz7xv+15EsBoSnQPNplnkVlYlhzpnk0rKg0eKkf6f8VK2DVeCAABDii2lAHIX01arzcMvqxsf/+zjECYANHM9nvaaAIXecr/WFFg73oHSLeOOO4iAnyTSny6meBPgGYJZU0ulY9AV0dSGWn7VEifT7MxIqdWugYof0UFIbJqLpcQU3mKC/0WMz6qBoDBqtqEqaQe9h0y+JfcX0L7kaCAk7U/WBMtuSRxuAjCj07c3eoLE1EFVHVtY6x/fpys3z3MuXBeBSi5I0wBM6amUOgd68oRAgrssrCJ/2OKNR6uJHf8wsT2uIHMuXiTMw0F34S4d6BUxZW3bZ8H4USQAQoH34BBEU3JGGaTj9XLsinMX/+zjEB4AMsNVlTbyrIXSlbnGFiXYHgLCoL1ou9Q6MKmB5R8eTWLtwjxYNfRmKomBXZGyqwOnocwC1Sys5Ba7GmmGsqHSsoeZ530OKSTZChIYTEow0D6kjRUA1G0DUMaQokEMVEEyJUq9HKrjQACTN/VQvSKxTtzHCA6VKwivYutKkXA5Bs4dKO1ZYC697du5Qh5i3umWrE5ahxNnUfQjERSvrklEvdEXVnvrSVv7v6adbu1ivOm+V676DHIROnJEz7j7aHOm3cLrsBCErGk2G0q0nJ+Caqnb/+zjEB4AMiWNlTRhUoYOsrXWmFWTUgq+PaBdacp90WFvckVHrO79q/9yCWr3v9TicG+nfJ9WaQniUDwI+RI6OqqndEnYpJXQ/ZZptr9Ut1JU7t+jnf7Ev20bfzVHrNsdFrTU7umcVxqkbIiAMRQrLK2g8ry0H9rXYpOs7F1TjhwdHPfabh1EtaWrrzOg1N51PxFCClUKxxIUZR2x3VjsIoRUayYy78XeRlzVXKzGLOYyngWNDBZEZsirJ/zvT20arTt++ra/omKbFdFUxIAAiGAckjjIkEpr/+zjEBgAMTWVr7TBLoW4cMHTzFpZs+3sm43lsnCPLgH52/Rp7QiaRDkUCIVwbzuNDLKW2CZrU5e687emvBgM7PRZCo5KKDwzsobXs9SsVLUcyN+Tt9VzXndyrInQynbPdchO3fJ/d5GTxfXZSBa87LJG0DJVj9ugNOJPQl7odSsjvXz35gmoSRHqxhp/8m6qwGgyDeIYCjt9x4o4Bodj99QzCHJ3qmpsyMQZv7zHT6ocoKaIweosHLRO2zIufLqzya6nlbbModQAaBObTjQDazUzJaeiturL/+zjECIANAR1nrTxLoXksbjWGieRmimG5gpeW45U84vM4zItmJE9/jHw3j4CGIY6hQYdEf7MceBj4wwoihToC7vFtRdXwO8QyXoFZevBD3Q0oriXQMhpGQ7rYtPoq4Xh6A+VpouW0vI2Q0qnXADUhWyyxsMlkc1GJdL+SG5aGKlJ0+5ivlS3dyKMA3+MYE7KR5SjZkKKi04zuovNVh3dMfUoZX3Hsr2LVVzZD96urvy6iGnbRvcfUmWq6I9UZFvfU/anX+/fFX2966vmgJasm42kgPRbrSyj/+zjEBoAMSOGBrDSwsX4dMPTxlt63TWaX9PCsRHF7qWJS+rC5jGgGdfHmYj1LRkmAfrK30YRkoSzqpRCt2lVlAFEYpFOxzHRmojGdkRvGkNKp522RRyCsjcPeulz1o3y1192meW5dVEO6/bIHLO7bI2gB5OuNHcpXc+o/J6a0TUTd75nokjH3TV2tcbjMqKJe/z//sIMCAERA6kewEAlCEIrHSDGyPm54sOJvzn5iSd8IXkREWoJUPNFXuki0hA3IV3I7ls+oPNcuvsQks0ssbbCUtR0+jMb/+zjEBwALOL+Jp6yysWGbbn00iwTNmuCoHEjdwd1tXcDZIouL9uWccgDouhsdnbJ+0Pyu3T6iQ5rMbUxgcEJ7SxoCCl9WqURFkxTLj3ndvUouiu9x/rY2/zOoXZIxx+61qUwAEIUGscjYFUUDA+TRSIklWgBXgIkGtNBaqqxuk5q7rx/X7OgaLYQiMU1zX9XGpD5h9EfRqgI32uyB6v/iRz9dHcwrpEo0OGueSwgTQ9gp0+1BLRbfzVW2xguquONpIEk22ssF4qou7SLgfdsbsLrZtIXmqt//+zjEDwAKLOGFp6xJ8VQcbr2FiaxfBJASGD/VfH1A7h8r06qEaytZZiCRZ07XUoAv20cCIta7MInA3oJyx/NZiroWnqcn8f0zDUhAbBIjjkkBfh5ccaSpTP//eOEE2z0+3nqbHApGmkaw1NvuaMGfsqqc3K71/KUAd/8woiK795gIm/1IYE32jVCeXKAc+16lQ/i9uor2WD1Ip2dVSrZoA68nGkkgTSRdeWCjTkrjyiGuer/vl5ytqiYSeXC9BTnGTa9hCHTpLsy8IJACsime4kELc+tklUL/+zjEHQAKQLOBp7BO8U0WrXWnjaCfp9TCzfcvlYNDrlYaM2XqTuhd3TZrd+yRMABjB1pyAOZOWsKSni1DqtMsyJayw0ttX+kG38IfUykQDm/jxP/6olz0LM7HhmGBga3ipWjUfM53/OUy/5+wI/5UbsrBR0ziLh7EjOhTWtfq+6qIsgBDDttWQOrSVc/v2MbGWuAmYJMJDPrN8ZzjHPcYg3oGKVVf/+EkY92OVmU6ejx9z2FGdfXMVVfRG8wEeZY6kdTg1QdVic/dh0MIXohbIoSjRX/67G3/+zjEK4AKqJ1prTxNQUwULzT1IaIAGIM7JKASVjhYaozhqmsVCXCb2XH6lzPEKA2Tmqcn0GTHgywEghNB8QQ/Oyv//9CQyUedcDLtuCih/fe99V4dhVD4wj0xF+RpclYQduXSL0tq2lqDhb1sjYAEQVkEFoWezujhLOYJrUii3k4hqXb11jUHgNxyiTyQQPGiB7KsllPOR2VQWhPM6qb3PZXMPS3ZFqZVb3qpBmLOAKhV9PPjtNb9rU/2mLHIhbidLI2wMAZM/umlCb1KRHgvm+skJkexYTL/+zjEOIAKoOOHpDTrsVaRMLRnqV4PcU//QRYYg2KUKCJMFglNbLGUsxuY6gaCMSiYgFwdTa4+IjzICNoQHhE+sUu2yo1W+yDtAmo7qL9d+joDlBWtscDTIMt3LeqTVJT/dgg0yQsD/G36N1jfaTDoEol/9Qkgmrtv2SapU+5CqzkZiMnaujew+ANtSHPUZa5pksh7fjpjiyrFZ4nb9noZt3yFAAkBBuWUAKET1mnTVkvhM0kQzSiq20g26azWpaRHBKlM/S6KdTkeKibbbxKEwyWXeQD7EpT/+zjERIAKVKdxrDFMoVqK7PSdRUicUFmxPFREw6HxMdAaHsHAFqIDvU3OcwmZc50YdVZXaxXJogdAERtpIMkjWNm7dv3c6vdZilotJdb2AbOXJ1DmoPI5l1erWoQIeaFavVFUg5Wui15gbn3TRbQZlPpNJzjFO1fHxKVb/mDL+HnsuvEkvbseLS2iv062QhMhC2RtCQXaCrnSxmvQS3tXIYDExALR2PjTJvNEkBAt7q2uCpd/ypmwXiibf6kUCPQERIw2Wap4COlGHby4ITBIUPQjJIl5Aqv/+zjEUQAK1P9trLRQ4VeTLjWVDawsaTzd9hbus1O+tfdbBJFFLI2gB0Gq6NKpOTdxqFiWAhBgfsU+c3KR0UD/o6OhpygaT/6tKaqjsrJW4ssxtB9EH1bE33ahbeTYFoDMnTofvQ+cmjbOqq3321J22/fi8lbfZ5EAQmZIZQIzIqA2uwURY9ERkB9OMNnWpa+tRmHoE+uz00s4pQ6Rb069+HGsrojaJUfK3zinIEMrI8psKzXovB5xsKd/83PMCSw3PrpqsnV/zlyv1LbPBJE3LGkhBboDc93/+zjEXABKvWOJphyysVQhrjSZiXTR0/Qyzf8m4TBxv7wJtyXvjpiu//8/5vmy+LhqBFz6aPVNgULN0ZlgibDdkzkwgkwcRTj7DHVX/Nq2Mp5j/Yv+eX9tumhPUg4AAVfwLQg3mlGAiCYiu/5iZ5MRm7W6+drlXW72KHi9KfneZ77/4aziDAcKne/vSuzMDM7qjyLn6Iz7M0zVFNvrrah8RvL7mPfeun0U0WuBQrR9n+xVesxARSFzsjAkmTUmxYUKF7RwfYC8DjS2TRuhaQYaBkhTr7ruNp7/+zjEaAAKdOGHp4y4cVgarORtCXDe9RBAh9WOILVkqY5jCUvwfE6vk4hpHdAN6keV8zUaURnfbvUi70d6L+vH0t9fZNZVOugAAB7shpMbBEbYggFWWZieANoJG4WzRBkFUEkkSyGplXV9aKo6xh3t3IUSQxHViuhbS4QilM2+FfPq+fiXRGwV8DVrOD3Kvu0KJ2T6IkN/VT/pjriAKBFrqSFjKtMRqXYzlNTY/i/wPLIy3bofL3vjEl19VN/EyKy6Zn/rVLWqpxqNPd+CnoE5dIqfhB/Mumf/+zjEdIAK2T91o0hLoVEabbBqCXTfj1QfGE9qdByESLZiSjv/Zaun5zKVeqR5IEgEyNNoCgRNGlECITSXSbKAJuAnBny4ddnZBTHFHRO1XrfTQTE8kTZFFe1zp6dKSSJzpSIaJTXVLBnkPq+C7683bBf+M8jyC6j9CpO5bstbarrojvyCstaFjLTjaSBLGK6pQ+C/k1B+sIkHgNpXF9vuS9UQhYON6udlVGYA4bWTvrkOWmwW59AkrNRyotmIiu9k0adM+q5xWQTbHa96o+Tk26/3Yr9s+Jv/+zjEgIAKqOFxrKxtoWGg7fSZCXx+7IMaotxq3LmFd1B0IabLY4FuvzLNS7r8xbCM26/H3IwvbK4+XmPyJRKCHzFUscyqFGOf7VQIpaKJdaLgykeyaCyVO3mfMSDGy9XlETDMneii6F1W0X6ZOLdmh2eW27J1+uiGtUUsjbBSlhP5Tw9zv2rmis1CZtfW2R51rk4Fsl8170UJgoN/9SQ2dqlWPmDEcdWSd1yAmqjo2+eRmpRa84lPPJnEeJ2DiEoPLlxpXiDy9rYx7nkG/vstZEjarbaSAzX/+zjEiwALcWN/p6iw8V+cbr2FCeR0+iLCKwhlFZW2w/Y6EM8u8RY+r/l8Ecf6/1/nOZE4SAXOE73vES8GKdGDO+6dHkARK0q77OcCfT6pDmR6IyeYI7t7r7BKrVnC6PaB3TtaiupNRzdfHrEkACAC42UAP0zkGjF9sZIrGXJ0QY4Owb2JBCsd0yn7OAkC3+rGEGh6H1jAbHXd/+rRHlEIUFxjAqseVcKCEc1AYjVBVaqXAWyl7wDr7PqZKJfR95WsgAGHFfKDywqgv0mN2H91AsYOIlJgMu7/+zjEkoALEOGJp7FD8X2fcDTxDx4udlB7FgIPTtT5ksq2nAURtZaZllKRPv98WvNuOabRrD8ihrqJOrEpgXESZ1mNF3krZfU/25SnnUO/NyQAAYADbQNWh+boYzQTQ0B44psYagw0IibtG5Gm7IyCSCIAgYHxqWDFq1DKC5rXOrU2ylOl8Qeo4Y7Zy0Eo5i8d4sqkC1UUkSVTWYTKcn78bbv+R3RNNOCenO711bR9s/M1f41UtJERbM9bZGyFRDy9eLmy9WKPpwCeZFE4LWf10XUPKw9093//+zjEmAAKoHdvp+EIYUuVLTGmDaT1whI8D+qy1b2OaZWcdvJ5zgrHtBTTVUgIdIrcdlAXoPzSi3l6uqbLybkobnzbn05730b0VNO3+q9cozKzUF9au5AAAwcFbZJCAgRFJL4OHghW/UTvqoHEy3rWXdJegEeWJj6lf6ICGDsvR1Q8pSrQSZ3VQEqozGR1d2ZdGfohFy/Iz0XT1qNQr1f7Od/S7kz/3305//68+oTcq7gBEIFUrCmjPGAKxJkRm9K1JBSIEsmbMNnsLUGMI5B9cVkl+EMI+Jv/+zjEpYAMtWVbjjxLQYgssHT0Cs7bqHh7OqlIZQk9bsYzCR81sgu3a6iA0W5bqwwPZ4TEtAscdzD6mudme5yf/leFl16ida2AAABFZJIw/FLNVJfB0vfx3wB0BwqXxPisnbwy4nx97vDRZNo2fDrPQX+XJRPtzgCKDQ4ac568NAsVcedeWKrSiSF3hp2I71syxJKDYrXzH34b52NkBEJOSShqy3VqkzyWHISjB3TuWmp7+H1RBio83+PsshzQgIURrZ2Bf131LzzvxvQU5QlczHEsktB0Skj/+zjEowALUWVv7KRLIWeW7LGnlWQCrWwWKmRz3qQHVBwWEsjPdBV0sLullUkAIUzJLY2BjM3rUOyukdMxTElLtk0Ximeu0IBxHLDzDzlx2kkmxfsjlrzWmzZtVN+qc58033Oc57fas1ra+7vPS9stWUDxUEREDXhR8AJS+3lVzpidrcJf6qaGpsElpNS3W/y6B0BgAASx6nVdpFRWJgSKstakDQhyttlbd4S+Cw5vuESGHKTduIFO5MMEBEH8Jg5R4bLh7tzGOLiX9dQnilXS1BaWRQOKrcz/+zjEqgBKiHdnrTxrIUwULnWFjS6mHoJWdKfPym62n+M3f3n1maIomSE0KOdBIZ/////77//1+n0qhcJBIZDTSfff////////////s0CK6Y4T9gzND3H//+GBo8OBEDkFACYGLjIyPrlUEQInxVEkmxNGRkuKMahRKwVLA0HZ4qCp0SuBoGsqCrsRA0oGlgqdEriwNcSndQNcSndQNWRKd4Ncqd4NdbuDURRKdKug0kxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjEt4ALhK9ftYWAMm2nKDcw8ACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjEnQPJ1DUwvMGAAAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",squeak:"data:audio/mpeg;base64,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",win:"data:audio/mpeg;base64,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yFje0PV0dwmQPC8UlLclMdlAohtRDBhA9YI9Xtbki2UcM5WEOswlCxsx+Z+ZGNCi8Q0CLyUxUCl3NLrzQmSU7+4qakj0NXyFk2ZMWd1xQtf/+zjE54NLIYccIwRwSXWxI4hgm9H2ectdifKTtejZ9wZdhR3T+gEgNwHpFQutlm2q2caQmEYZSksebUnvYMueCWy6Fp/ZqCy0Kvx7Jz6jd8+n/puKesiGd/L3128tpT/flr/yHZDMn0cEdN6WlfPVAACAACsEJvQVKrisagnbF568U5zSNfJZjLqAj3DJ8SIlRYn4XkgNeVXZHQYa81uDrxje3Ejpw96IEf3XwafF+OvGG+RGSHHxfJO3xQ2NSG1Nr4h0u/hB8RE1kcZ1W1//a6EYxROytFT/+zjE7YEKlYEjQYR+ibCwYsiTDfksZlbn3xEIZdbpA1YWn8MIculluJpNDZok10J1DY5TmRQuMkzCZuWD8+kJiTpMQ9isPo3/qQiRb7RQyG7UJ1CO/lxWTCgVpYf1GFDBA4V+4SYRkSjpPzyrIIYVWfpQDCOrdzICBPvVtwzuDXvcrh4Z1aH8C8gZrTv/L/wVAEgzhKCiwiRpgHXpVqLHLosB5izes02JZ7aq/amO/uu0UnWy8DVmfBoHAkx9F6Hzd/bdKUnbEe8ep5XRzeMpc/OZtaasMsv/+zjE7oMM/PkOB6ULCSUe4syQiakxC1HYbguDWqSRMpzIs5jt+9b9P/1Qzv9q+e9Y+0anVwXJucqtrLJT//5///j3j3j3xm/v38GRXVw+rFxXFv/THz/////4+38OPEpTdNPKZ//hML2uLSsTNLaDAAAAFIAAXRGbpbAS7MebHsf+zFxm6oC1Uv1XVS26p///1S9mbjMdUKAjwVOg0HFB2Cp62zg0oO1Hk/ljxZ/yx7+s7wVWCsRBxUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE9wKOgY0LIz0Bib0cYcaekAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE5oAUWZkeOYeAAR8UYLOGMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="};var sm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",ye=null,wr=!1;function jc(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function il(){jc(),wr=!0;try{if(ye||(ye=document.createElement("audio"),ye.src=sm,ye.loop=!0,ye.preload="auto",ye.setAttribute("playsinline",""),ye.setAttribute("webkit-playsinline",""),ye.setAttribute("x-webkit-airplay","deny"),ye.volume=.01,ye.addEventListener("pause",()=>{wr&&!document.hidden&&setTimeout(()=>wr&&ye.paused&&ye.play().catch(()=>{}),300)})),ye.paused){let i=ye.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function Qc(){wr=!1;try{ye&&!ye.paused&&ye.pause()}catch{}}function Jc(i,t){jc();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var ki=i=>440*Math.pow(2,(i-69)/12),rm=[[40,[62,67,71,74]],[45,[61,64,67,71]],[38,[61,66,69,73]],[47,[62,66,69,74]],[40,[62,67,71,74]],[45,[61,64,67,71]],[43,[62,66,71,74]],[45,[61,64,67,73]]],am=[[0,0,83],[0,3,86],[0,6,88],[1,0,85],[1,4,81],[2,0,78],[2,2,81],[2,4,85],[3,0,83],[3,4,78],[4,0,83],[4,2,86],[4,4,88],[4,6,90],[5,0,88],[5,4,85],[6,0,86],[6,3,83],[7,0,81],[7,4,85]],Hi=class{constructor(){this.ctx=null,this.muted=!1,this.mode="off",this.plucks=new Map}unlock(){if(il(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;Jc(this.ctx,()=>!!(this.held||this._held)),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let s=e.createDelay(.8);s.delayTime.value=.36;let r=e.createGain();r.gain.value=.22;let a=e.createGain();a.gain.value=.18,this.music.connect(s),s.connect(r).connect(s),s.connect(a).connect(this.master);let o=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;this.noiseBuf=o,this._timer=setInterval(()=>this._schedule(),30),this.mode!=="off"&&this.setMode(this.mode,!0)}this.ctx.state!=="running"&&!this.held&&(this._silentTick(),this._mediaKick(),this.ctx.resume())}get on(){return!!this.ctx&&this.ctx.state==="running"}_silentTick(){try{let t=this.ctx,e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0)}catch{}}_mediaKick(){if(!this._kicked)try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01;let e=t.play();e&&e.then&&e.then(()=>{this._kicked=!0}).catch(()=>{})}catch{}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){Qc(),this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){il(),this.held=!1,this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}setMode(t,e){this.mode===t&&!e||(this.mode=t,this.ctx&&(this.tempo=t==="play"?124:110,this.step=0,this.nextTime=this.ctx.currentTime+.12))}dispose(){clearInterval(this._timer),this.ctx&&this.ctx.close(),this.ctx=null,this.rollN=null}_tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,n);let h=l.createGain();return h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05),c}_noise(t,e,n,s,r,a=1,o=this.sfx,l){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.02,e/4)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()*.5),h.stop(t+e+.05)}_slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx,c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}mar(t,e,n,s=this.music){let r=ki(t);this._tone("sine",r,e,.35,n,s,.003),this._tone("sine",r*4,e,.05,n*.3,s,.002)}roll(t,e,n=!0){if(!this.ctx||this.ctx.state!=="running")return;let s=this.ctx;if(!this.rollN){let l=s.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0;let c=s.createBiquadFilter();c.type="lowpass",c.Q.value=2;let h=s.createGain();h.gain.value=0,l.connect(c).connect(h).connect(this.sfx),l.start();let u=s.createOscillator();u.type="sine";let d=s.createGain();d.gain.value=0,u.connect(d).connect(this.sfx),u.start(),this.rollN={f:c,g:h,o:u,og:d}}let r=s.currentTime,a=Math.min(1,t/12),o=Math.min(1,Math.log10(1+e)/2);this.rollN.f.frequency.setTargetAtTime(900-o*700+a*300,r,.1),this.rollN.g.gain.setTargetAtTime(n?a*(.05+o*.12):0,r,.12),this.rollN.o.frequency.setTargetAtTime(70-o*35+a*10,r,.2),this.rollN.og.gain.setTargetAtTime(n?a*o*.12:0,r,.2)}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||this.mode==="off")return;let e=t.currentTime+.2,n=60/this.tempo/2,s=this.mode==="play";for(;this.nextTime<e;){let r=this.nextTime,a=this.step%64,o=Math.floor(a/8),l=a%8,[c,h]=rm[o],u=[0,null,12,0,null,7,12,10];u[l]!==null&&this._tone(l%3===2?"square":"triangle",ki(c-12+u[l]),r,n*.9,l%3===2?.08:.2,this.music,.004),(l===1||l===4||l===7)&&h.forEach(d=>this._tone("square",ki(d-12),r,.07,.018,this.music,.002));for(let[d,g,m]of am)if(d===o&&g===l){let A=this._tone("sine",ki(m),r,n*1.8,s?.07:.05,this.music,.02);A&&A.detune.setValueAtTime(0,r)}(s||l%4===0)&&((l===0||l===4)&&this._slide("sine",130,45,r,.16,.3,this.music),(l===2||l===6)&&(this._noise(r,.08,.1,"bandpass",1500,.9,this.music),this._noise(r+.01,.05,.07,"highpass",2500,1,this.music)),this._noise(r,.04,l%2?.035:.02,"highpass",7e3,1,this.music)),this.step++,this.nextTime+=n}}play(t,e){if(typeof window!="undefined"&&window.__cheerSfx&&window.__cheerSfx(t),!this.on)return;let n=this.ctx.currentTime+.005,s=this.sfx;switch(t){case"pick":{let a=1400-Math.max(0,Math.min(1,e!=null?e:.3))*1e3;this._slide("sine",a,a*1.6,n,.08,.12),this._noise(n,.05,.05,"bandpass",a*2,2);break}case"squeak":this._slide("square",1200,1800,n,.12,.03),this._slide("square",1800,1100,n+.12,.1,.025);break;case"honk":[370,466].forEach(r=>this._tone("square",r,n,.25,.03));break;case"siren":this._slide("sawtooth",700,1e3,n,.25,.025),this._slide("sawtooth",1e3,700,n+.25,.25,.025);break;case"horn":[147,185].forEach(r=>this._tone("sawtooth",r,n,.5,.04));break;case"rumble":this._slide("sine",90,35,n,.9,.4),this._noise(n,1,.25,"lowpass",500,.8,s,120),this._noise(n+.2,.6,.06,"bandpass",2500,1);break;case"bump":this._slide("sine",160,60,n,.25,.3),this._slide("triangle",500,200,n,.2,.08);break;case"nudge":this._tone("triangle",300,n,.06,.04);break;case"count":this._tone("square",660,n,.18,.06),this._tone("sine",660,n,.25,.1);break;case"go":this._tone("square",990,n,.4,.06),this._tone("sine",1320,n,.5,.1);break;case"bigger":[72,76,79,84,88,91].forEach((r,a)=>this._tone("square",ki(r),n+a*.06,.18,.045)),[84,88,91,96].forEach(r=>this._tone("sine",ki(r),n+.4,.8,.05));break;case"tick":this._tone("square",e<=3?1320:990,n,.05,.04);break;case"timeUp":this._slide("sine",2200,1800,n,.6,.12),this._slide("sine",2200,1800,n+.7,.9,.12);break;case"win":[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68],[88,.8]].forEach(([r,a])=>this.mar(r,n+a,.2,s)),this._noise(n+.1,1.6,.05,"highpass",6e3,1);break;case"star":this.mar(88+(e!=null?e:0)*3,n,.2,s);break;case"tap":this._tone("sine",880,n,.06,.05);break;case"no":this._tone("square",220,n,.1,.03);break;default:}}};Yc(Hi,Kc);Zc(Hi);var sl={title:["\u0643\u0631\u0629 \u0627\u0644\u0639\u0644\u0643\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0642\u0629","Gum Ball Roll"],play:["\u064A\u0644\u0627 \u0646\u062F\u062D\u0631\u062C","Play"],exit:["\u062E\u0631\u0648\u062C","Exit"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","Paused"],resume:["\u0643\u0645\u0651\u0644","Resume"],restart:["\u0645\u0646 \u0627\u0644\u0623\u0648\u0644","Restart"],menu:["\u0627\u0644\u0642\u0627\u0626\u0645\u0629","Menu"],diameter:["\u0642\u0637\u0631 \u0627\u0644\u0643\u0631\u0629","Ball diameter"],nextGoal:["\u0627\u0644\u0647\u062F\u0641 \u0627\u0644\u062C\u0627\u064A","Next size goal"],timeLeft:["\u0627\u0644\u0648\u0642\u062A","Time left"],m:["\u0645","m"],bigger:["\u0623\u0643\u0628\u0631!","BIGGER!"],nowRoll:["\u062F\u0644\u0648\u0642\u062A\u064A \u062F\u062D\u0631\u062C {x}!","Now roll up {x}!"],go:["\u062F\u062D\u0631\u062C!","Roll!"],hint:["\u{1F446} \u0627\u0633\u062D\u0628 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0639\u0634\u0627\u0646 \u062A\u062F\u062D\u0631\u062C \u0627\u0644\u0643\u0631\u0629","\u{1F446} Drag anywhere to roll the ball"],tooBig:["\u0644\u0633\u0647 \u0643\u0628\u064A\u0631 \u0639\u0644\u064A\u0643! \u0643\u0628\u0651\u0631 \u0627\u0644\u0623\u0648\u0644","Still too big! Grow first"],timeUp:["\u0627\u0644\u0648\u0642\u062A \u062E\u0644\u0635!","Time's up!"],finalSize:["\u0643\u0631\u062A\u0643 \u0648\u0635\u0644\u062A","Your ball reached"],best:["\u0623\u062D\u0633\u0646 \u0646\u062A\u064A\u062C\u0629","Best"],newBest:["\u0631\u0642\u0645 \u062C\u062F\u064A\u062F! \u{1F389}","New best! \u{1F389}"],collected:["\u0644\u0645\u064A\u062A","Rolled up"],things:["\u062D\u0627\u062C\u0629","things"],again:["\u062A\u0627\u0646\u064A","Again"],starHelp:["\u2B50 \u0662\u0660 \u0645  \u2B50\u2B50 \u0664\u0660 \u0645  \u2B50\u2B50\u2B50 \u0666\u0660 \u0645","\u2B50 20 m  \u2B50\u2B50 40 m  \u2B50\u2B50\u2B50 60 m"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631! \u{1F389}","Well done! \u{1F389}"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629! \u{1F389}","Well done! \u{1F389}"],loading:["\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u0645\u062F\u064A\u0646\u0629...","Getting the city ready..."],noWebgl:["\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u0634\u063A\u0651\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.","This device cannot run the 3D game."],sound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"]},gs="ar",$c=!1,th=i=>{gs=i==="en"?"en":"ar"},eh=i=>{$c=!!i},ms=()=>gs,qt=(i,t)=>{let e=`${i}_${$c?"f":"m"}`,n=sl[e]?e:i,s=sl[n]?sl[n][gs==="en"?1:0]:i;if(t)for(let[r,a]of Object.entries(t))s=s.replace(`{${r}}`,a);return s},Tn=i=>gs==="en"?String(i):String(i).replace(/[0-9]/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]).replace(".","\u066B"),rl=i=>gs==="en"?i.en:i.ar;var nh=`
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
`;function Ct(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ze=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},om=new Di(-1,1,1,-1,0,1),al=class extends pe{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}},lm=new al,Gn=class{constructor(t){this._mesh=new te(lm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,om)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Gi=class extends ze{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Hn.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Gn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var As=class extends ze{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Rr=class extends ze{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Pr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new we(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gi(Vr),this.copyPass.material.blending=rn,this.clock=new Fi}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}As!==void 0&&(a instanceof As?n=!0:a instanceof Rr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ur=class extends ze{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new It}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ih={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Wi=class i extends ze{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new It(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new we(r,a,{type:Je}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new we(r,a,{type:Je});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let g=new we(r,a,{type:Je});g.texture.name="UnrealBloomPass.v"+u,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),a=Math.round(a/2)}let o=ih;this.highPassUniforms=Hn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Vr;this.copyUniforms=Hn.clone(h.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new It,this.oldClearAlpha=1,this.basic=new an,this.fsQuad=new Gn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Wi.BlurDirectionX=new bt(1,0);Wi.BlurDirectionY=new bt(0,1);var sh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Lr=class extends ze{constructor(){super();let t=sh;this.uniforms=Hn.clone(t.uniforms),this.material=new mr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Gn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===No&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};if(typeof document!="undefined"&&!document.getElementById("tw-emoji-font")){let i=document.createElement("style");i.id="tw-emoji-font";let t=new URL("../../fonts/TwemojiMozilla.ttf",location.href).href,e="U+1F000-1FAFF,U+2600-27BF,U+2B00-2BFF,U+2300-23FF,U+FE0F,U+200D,U+2122,U+2139,U+2194-21AA,U+2934-2935,U+3030,U+303D,U+3297,U+3299,U+00A9,U+00AE,U+203C,U+2049,U+25AA-25FE";i.textContent=`@font-face{font-family:Tajawal;src:url(${t});unicode-range:${e};font-weight:100 900;font-display:swap}`,document.head.appendChild(i);try{let n=document.fonts.add.bind(document.fonts);document.fonts.add=s=>{let r=n(s);if(s&&!s.__tw&&String(s.family).replace(/["']/g,"")==="Tajawal"){let a=new FontFace("Tajawal",`url(${t})`,{unicodeRange:e,weight:"100 900"});a.__tw=1,a.load().then(()=>n(a)).catch(()=>{})}return r}}catch{}}var rh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},cm={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},hm={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function um(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new pe;l.setAttribute("position",new de(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new Sn(c);d.colorSpace=ge;let g=new ri({map:d,color:hm[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:zn,fog:!1,sizeAttenuation:!0}),m=new qi(l,g);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function dm(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var ah={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2,overtake:3,boost:3,behind:3,collect:3,levelup:3},fm=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,pm=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i,gm={win:"win",finish:"win",goal:"win",arrive:"win",lose:"lose",lost:"lose",crash:"oops",hit:"oops",hurt:"oops",bump:"oops",splat:"oops",fall:"oops",coin:"collect",star:"collect",pick:"collect",crystal:"collect",power:"collect",overtake:"overtake",nitro:"boost",boost:"boost",dash:"boost",combo:"combo",unlock:"levelup",lap:"levelup",wave:"levelup",miss:"near",draft:"near",leap:"near",go:"start"},oh={};typeof window!="undefined"&&(window.__cheerSfx=i=>{let t=gm[i];if(!t||!window.__cheer)return;let e=performance.now(),n=t==="collect"||t==="oops"?9e3:4500;e-(oh[t]||-1e9)<n||(oh[t]=e,window.__cheer(t,t==="win"||t==="lose"||t==="levelup"))});function mm(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=p=>{if(!n[p]){let f=new Audio(`${e}${p}_${t}.mp3`);f.preload="auto",f.volume=.95,n[p]=f}return n[p]},u=(p,f)=>{let b=performance.now();if(!f&&b-r<6e3||c)return;let I=p+(1+Math.floor(Math.random()*ah[p])),_=h(I);c=!0,r=b,_.currentTime=0;let L=()=>{c=!1};_.onended=L,_.onerror=L;let S=_.play();S&&S.catch&&S.catch(L),setTimeout(L,4e3)};window.__cheer=(p,f)=>{ah[p]&&(o=!0,u(p,!!f))};let d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let p=s.createOscillator(),f=s.createGain();p.type="sine",p.frequency.setValueAtTime(520,s.currentTime),p.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),f.gain.setValueAtTime(.08,s.currentTime),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),p.connect(f),f.connect(s.destination),p.start(),p.stop(s.currentTime+.13)}catch{}},g=()=>{a=performance.now(),d(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",g,{passive:!0}),window.addEventListener("keydown",g,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let p=(i.innerText||"").slice(0,600);p!==m&&(m=p,fm.test(p)?u("win",!1):pm.test(p)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let p=performance.now();!o||document.hidden||(p-a>14e3?(u("idle",!1),a=p-4e3):p-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function lh(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=Object.assign({},rh[e.get("look")||t.preset||"warm"]||rh.warm,t.tune||{}),s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,g=0,m=0,A=0,p=!1,f=performance.now();function b(I,_){let L=i.getSize(new bt);g=L.x,m=L.y,A=i.getPixelRatio(),c=new Pr(i),c.setPixelRatio(A),c.setSize(g,m),h=new Ur(I,_),c.addPass(h),s||(u=new Wi(new bt(Math.max(2,g>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Lr),d=new Gi(cm),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(I,_){if(p||i.getRenderTarget()!==null||i.autoClear===!1||!I||!_||!I.isScene)return a(I,_);try{c||b(I,_);let L=i.getSize(new bt),S=i.getPixelRatio();(L.x!==g||L.y!==m||S!==A)&&(g=L.x,m=L.y,A=S,c.setPixelRatio(S),c.setSize(g,m),u&&u.resolution.set(Math.max(2,g>>1),Math.max(2,m>>1))),h.scene=I,h.camera=_,d.uniforms.time.value=(performance.now()-f)/1e3;let E=performance.now(),D=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let y=o.get(I);y||(y=um(I,_,e.get("look")||t.preset||"warm",r),o.set(I,y)),dm(y,_,D)}p=!0,c.render(),p=!1}catch(L){p=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",L&&L.message),i.render=a,a(I,_)}},!e.has("nocheer")&&!r&&setTimeout(()=>mm(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var Am=()=>{var i,t;return((i=navigator.deviceMemory)!=null?i:4)<=3||((t=navigator.hardwareConcurrency)!=null?t:4)<=4},xm=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},xs=i=>i<10?i.toFixed(1):String(Math.round(i)),vm=i=>{let t=Math.floor(i/60),e=Math.floor(i%60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`},Dr;function Cm(){if(Dr)return Dr;let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Dr=new Sn(i),Dr}var ol=class{constructor(t,e,n){if(this.el=t,this.post=n||(()=>{}),th(e.lang),eh(e.gender==="girl"),this.age=Number(e.age)||5,this.save=Wc(e.save),this.base=e.base||"./",this.sound=new Hi,this.sound.muted=!!this.save.muted,this.quality={low:Am()},document.getElementById("gb-style")||document.head.append(Ct("style",{id:"gb-style",text:nh})),this.root=Ct("div",{class:"gb-root",dir:ms()==="en"?"ltr":"rtl"}),t.append(this.root),this._unit(),!xm()){this.root.append(Ct("div",{class:"gb-loading"},Ct("div",{},qt("noWebgl")," ",Ct("button",{class:"gb-btn blue",onclick:()=>this.post({type:"exit"})},qt("exit")))));return}this.loading=Ct("div",{class:"gb-loading"},qt("title"),Ct("i")),this.root.append(this.loading),this.renderer=lh(new hr({antialias:!this.quality.low,powerPreference:"high-performance"}),{preset:"warm"}),this.maxPR=Math.min(window.devicePixelRatio||1,this.quality.low?1.25:1.6),this.pr=this.maxPR,this.renderer.setPixelRatio(this.pr),this.renderer.outputColorSpace=ge,this.root.prepend(this.renderer.domElement),this.layer=Ct("div",{class:"gb-layer"}),this.root.append(this.layer),this.camera=new Te(55,1,.3,900),this.camPos=new V(0,6,20),this.camLook=new V(0,0,0),this.input={pointer:null,keys:new Set,mx:0,mz:0},this.mode="menu",this.paused=!1,this._bind(),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this.frames=[],this.goodWin=0,this.clock=new Fi,this.city=Qo(11),this._fonts().then(()=>{this._buildScene(),this.loading.remove(),this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=[new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"}),new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-Bold.ttf)`,{weight:"700"})];await Promise.race([Promise.all(t.map(e=>e.load().then(n=>document.fonts.add(n)))),new Promise(e=>setTimeout(e,900))])}catch{}}_unit(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.land=this.cw>this.ch*1.15,this.root.classList.toggle("gb-land",this.land)}_resize(){this._unit(),this.renderer&&(this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.fov=this.land?48:60,this.camera.updateProjectionMatrix())}_buildScene(){let t=this.scene=new dr;t.background=new It(10147061),t.fog=new ur(12116216,80,420),t.add(new Cr(16777215,9075306,1.7));let e=new _r(16774368,1.5);e.position.set(-60,120,40),t.add(e);let n=new te(new je(cn*2+200,cn*2+200),new ln({color:5593182}));n.rotation.x=-Math.PI/2,t.add(n);let s=46,r=14,a=nl("#cfcac2","#c4bfb6","#a8a39a",4);a.repeat.set(8,8);let o=new ln({map:a}),l=[];for(let p=-5;p<=4;p++)for(let f=-5;f<=4;f++){let b=new je(s-r,s-r);b.rotateX(-Math.PI/2),b.translate(p*s+r+(s-r)/2,.03,f*s+r+(s-r)/2),l.push(b)}let c=[];for(let p=-5;p<=5;p++){let f=p*s+r/2;for(let b=-cn;b<cn;b+=6)c.push(new je(.35,3).rotateX(-Math.PI/2).translate(f,.02,b)),c.push(new je(3,.35).rotateX(-Math.PI/2).translate(b,.02,f))}t.add(new te(ds(l),o)),t.add(new te(ds(c),new an({color:16765498})));let h=nl("#d8805a","#cc7450","#b8633f",4);h.repeat.set(10,32);let u=new te(new je(30,96),new ln({map:h}));u.rotation.x=-Math.PI/2,u.position.set(0,.05,-25),t.add(u);for(let p=0;p<6;p++){let f=new te(new on(12,.4*(p+1),1.2),new ln({color:14166586}));f.position.set(0,.2*(p+1),-72-p*1.2),t.add(f)}this.inst=new Map;let d=new Map;for(let p of this.city)d.has(p.kind)||d.set(p.kind,[]),d.get(p.kind).push(p);let g=new Yt;for(let[p,f]of d){let b=new fr(tl(p),el,f.length);f.forEach((I,_)=>{I.slot=_;let L=(hn[p].g===4,I.s);g.compose(new V(I.x,0,I.z),new Ve().setFromEuler(new _e(0,I.a,0)),new V(L,hn[p].g===4?I.s:L,L)),b.setMatrixAt(_,g)}),b.instanceMatrix.needsUpdate=!0,b.computeBoundingSphere(),t.add(b),this.inst.set(p,b)}let m=[16734904,5957887,16765498,9067263,5963658];for(let p=0;p<14;p++){let f=p%2?1:-1,b=26+p%4*10,I=new te(new on(12,b,12),new ln({color:[3832536,15255674,14183050,6998248][p%4]}));I.position.set(f*22,b/2,-70+Math.floor(p/2)*13),t.add(I);let _=new te(new je(9,7),new an({color:m[p%5]}));_.position.set(f*15.9,b*.55,I.position.z),_.rotation.y=-f*Math.PI/2,t.add(_),this.walls=this.walls||[],this.walls.push({x:I.position.x,z:I.position.z,r:6.5,s:b})}this.gum=Xc(),t.add(this.gum.root),this.stuck=new sn,this.gum.root.add(this.stuck),this.trail=[];let A=new pr(.5,14);A.rotateX(-Math.PI/2);for(let p=0;p<60;p++){let f=new te(A,new an({color:16739e3,transparent:!0,opacity:0,depthWrite:!1}));t.add(f),this.trail.push({m:f,t:9})}this.trailI=0,this.sparks=new qi(new pe,new ri({color:16769658,size:.4,map:Cm(),transparent:!0,depthWrite:!1,blending:zn})),this.spark={pos:new Float32Array(150*3),vel:new Float32Array(150*3),life:new Float32Array(150),i:0},this.sparks.geometry.setAttribute("position",new de(this.spark.pos,3)),this.sparks.frustumCulled=!1,t.add(this.sparks),this.q=new Ve}_resetCity(){var e,n;let t=new Yt;for(let s of this.city){s.taken=!1;let r=this.inst.get(s.kind);t.compose(new V((e=s.x0)!=null?e:s.x,0,(n=s.z0)!=null?n:s.z),new Ve().setFromEuler(new _e(0,s.a,0)),new V(s.s,s.s,s.s)),s.x0!==void 0&&(s.x=s.x0,s.z=s.z0),r.setMatrixAt(s.slot,t)}for(let s of this.inst.values())s.instanceMatrix.needsUpdate=!0;this.stuck.clear(),this.gum.root.quaternion.identity()}_burst(t,e,n,s,r){let a=this.spark;for(let o=0;o<s;o++){let l=a.i++%150,c=Math.random()*6.28;a.pos.set([t,e,n],l*3),a.vel.set([Math.cos(c)*r*Math.random(),Math.random()*r,Math.sin(c)*r*Math.random()],l*3),a.life[l]=.6}}_bind(){let t=this.root;for(let n of["pointerdown","pointerup","touchend","click","keydown"])t.addEventListener(n,()=>this.sound.unlock(),{capture:!0,passive:!0});t.addEventListener("pointerdown",n=>{if(n.target.closest("button")||n.target.closest(".gb-dim")||this.mode!=="play"||this.paused)return;let s=t.getBoundingClientRect();this.input.pointer=n.pointerId,this.input.ox=n.clientX-s.left,this.input.oy=n.clientY-s.top;try{t.setPointerCapture(n.pointerId)}catch{}}),t.addEventListener("pointermove",n=>{if(n.pointerId!==this.input.pointer)return;let s=t.getBoundingClientRect(),r=n.clientX-s.left-this.input.ox,a=n.clientY-s.top-this.input.oy,o=Math.hypot(r,a);if(o<this.u*1.2){this.input.mx=this.input.mz=0;return}let l=Math.min(1,o/(this.u*8))/o;this.input.mx=r*l,this.input.mz=a*l,this.moved=!0});let e=n=>{n.pointerId===this.input.pointer&&(this.input.pointer=null,this.input.mx=this.input.mz=0)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("click",n=>{n.target.closest("button")&&this.sound.play("tap")},!0),this._onKey=n=>{let s=n.key.toLowerCase();n.type==="keydown"?(this.input.keys.add(s),this.mode==="play"&&(s==="escape"||s==="p")&&this.pause()):this.input.keys.delete(s),this.mode==="play"&&s.startsWith("arrow")&&n.preventDefault()},window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKey),this._onVis=()=>{document.hidden?(this.mode==="play"&&this.pause(),this.sound.suspend()):this.paused||this.sound.resume()},document.addEventListener("visibilitychange",this._onVis),this.soundPill=Ct("button",{class:"gb-soundpill",onclick:n=>{n.stopPropagation(),this.sound.unlock()}},qt("sound")),t.append(this.soundPill),this._tapped=!1,t.addEventListener("pointerup",()=>{this._tapped=!0},!0),this._pill=setInterval(()=>{this.soundPill.style.display=this._tapped&&!this.sound.muted&&!this.sound.on&&!document.hidden&&!this.paused?"block":"none"},700)}_clear(){this.layer.replaceChildren(),this.hud=null}_saveNow(){this.post({type:"save",save:JSON.parse(JSON.stringify(this.save))})}_mute(t){let e=Ct("button",{class:`gb-pause ${t}`,"aria-label":"sound"},this.sound.muted?"\u{1F507}":"\u{1F50A}");return e.addEventListener("click",n=>{n.stopPropagation(),this.sound.unlock(),this.sound.setMuted(!this.sound.muted),this.save.muted=this.sound.muted,this._saveNow(),e.textContent=this.sound.muted?"\u{1F507}":"\u{1F50A}"}),e}_toastEl(){return this.toastEl=Ct("div",{class:"gb-toast"}),this.toastEl}toast(t,e=2.4){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl&&this.toastEl.classList.remove("show"),e*1e3))}showMenu(){this.mode="menu",this.paused=!1,this.g=null,this.sound.setMode("menu"),this.sound.roll(0,0,!1),this._clear(),this.layer.append(Ct("button",{class:"gb-pause",style:"top:max(calc(var(--u)*3),env(safe-area-inset-top));bottom:auto","aria-label":qt("exit"),onclick:()=>{this._saveNow(),this.post({type:"exit"})}},ms()==="en"?"\u2190":"\u2192"),Ct("div",{class:"gb-logo"},qt("title")),Ct("div",{class:"gb-menu"},this.save.best?Ct("div",{class:"gb-sub",style:"color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.4)"},`${qt("best")}: ${Tn(xs(this.save.best))} ${qt("m")}  ${"\u2B50".repeat(this.save.stars)}`):null,Ct("button",{class:"gb-btn",onclick:()=>this.start()},"\u25B6 ",qt("play")),Ct("div",{class:"gb-sub",style:"color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.4);font-size:calc(var(--u)*3.2)"},qt("starHelp"))),this._mute("gb-mute"),this._toastEl())}start(){this._resetCity(),this.g=new Sr({things:this.city,easy:this.age<=4});for(let t of this.city)t.x0===void 0&&(t.x0=t.x,t.z0=t.z);this.mode="play",this.paused=!1,this.moved=!1,this.lastGoal=0,this.sound.setMode("play"),this._hud(),this.camPos.set(0,4,18)}_hud(){this._clear();let t=(e,n,s)=>Ct("div",{class:"gb-pill"},Ct("small",{},e),n,s);this.hud={d:Ct("b",{},Ct("i"),Ct("span")),goal:Ct("b",{},Ct("i"),Ct("span")),goalBar:Ct("i",{style:"width:0%"}),time:Ct("b",{},"\u23F1 ",Ct("span")),bigger:Ct("div",{class:"gb-bigger"},Ct("b",{},qt("bigger")),Ct("span")),count:Ct("div",{class:"gb-count"})},this.hud.timePill=t(qt("timeLeft"),this.hud.time),this.layer.append(Ct("div",{class:"gb-pills"},t(qt("diameter"),this.hud.d),t(qt("nextGoal"),this.hud.goal,Ct("div",{class:"bar"},this.hud.goalBar)),this.hud.timePill),this.hud.bigger,this.hud.count,Ct("button",{class:"gb-pause","aria-label":qt("paused"),onclick:e=>{e.stopPropagation(),this.pause()}},"\u275A\u275A"),this._mute("gb-mute"),this._toastEl()),this._hc={}}_count(t){let e=this.hud.count;e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}pause(){if(this.mode!=="play"||this.paused)return;this.paused=!0,this.input.pointer=null,this.input.mx=this.input.mz=0,this.sound.suspend();let t=Ct("div",{class:"gb-dim"},Ct("div",{class:"gb-card"},Ct("h2",{},qt("paused")),Ct("button",{class:"gb-btn",onclick:()=>{t.remove(),this.paused=!1,this.sound.resume(),this.clock.getDelta()}},"\u25B6 ",qt("resume")),Ct("button",{class:"gb-btn blue",onclick:()=>{this.sound.resume(),this.start()}},"\u21BB ",qt("restart")),Ct("button",{class:"gb-btn blue",onclick:()=>{this.sound.resume(),this.showMenu()}},qt("menu"))));this.layer.append(t)}_results(){let e=this.g.result;this.mode="results",this.sound.roll(0,0,!1),this.sound.setMode("menu");let n=e.d>this.save.best;this.save.best=Math.max(this.save.best,Math.round(e.d*10)/10),this.save.stars=Math.max(this.save.stars,e.stars),this.save.plays++,this._saveNow(),this.sound.play("win"),[0,1,2].forEach(s=>s<e.stars&&setTimeout(()=>this.sound.play("star",s),700+s*280)),this.layer.append(Ct("div",{class:"gb-dim"},Ct("div",{class:"gb-card"},Ct("h2",{},qt("timeUp")),Ct("div",{class:"gb-sub"},qt("finalSize")),Ct("div",{class:"gb-big"},`${Tn(xs(e.d))} ${qt("m")}`),Ct("div",{class:"gb-stars"},[1,2,3].map(s=>Ct("span",{class:s<=e.stars?"":"off"},"\u2B50"))),Ct("div",{class:"gb-sub"},`${qt("collected")} ${Tn(e.collected)} ${qt("things")}`),n?Ct("div",{class:"gb-sub",style:"color:#b81a6a"},qt("newBest")):Ct("div",{class:"gb-sub"},`${qt("best")}: ${Tn(xs(this.save.best))} ${qt("m")}`),Ct("div",{class:"gb-sub",style:"color:#b81a6a"},qt("win")),Ct("button",{class:"gb-btn",onclick:()=>this.start()},"\u21BB ",qt("again")),Ct("button",{class:"gb-btn blue",onclick:()=>this.showMenu()},qt("menu")))))}_playFrame(t,e){let n=this.g,s=this.input.keys,r=this.input.mx,a=this.input.mz;(s.has("arrowleft")||s.has("a"))&&(r-=1),(s.has("arrowright")||s.has("d"))&&(r+=1),(s.has("arrowup")||s.has("w"))&&(a-=1),(s.has("arrowdown")||s.has("s"))&&(a+=1),n.setMove(r,a);let o=n.state;for(let l of n.step(t))this._event(l,n);for(let l of this.walls){let c=n.ball.x-l.x,h=n.ball.z-l.z,u=Math.hypot(c,h);u<n.r+l.r&&n.d<l.s*1.2&&(n.ball.x=l.x+c/u*(n.r+l.r),n.ball.z=l.z+h/u*(n.r+l.r))}o==="roll"&&n.state==="done"&&setTimeout(()=>this.mode==="play"&&this.g===n&&this._results(),1600),this._sync(t,e)}_event(t,e){var s,r;let n=this.sound;switch(t.type){case"count":n.play("count"),this._count(Tn(t.n));break;case"go":n.play("go"),this._count(qt("go")),setTimeout(()=>this.mode==="play"&&!this.moved&&this.toast(qt("hint"),3),1200);break;case"tick":n.play("tick",t.n);break;case"stick":{let a=this.city[t.id],o=hn[t.kind].g,l=Math.min(1,t.s/(t.from*jo));o===4?(n.play("rumble"),this.shake=.6):t.kind==="police"?n.play("siren"):o===2&&t.kind!=="tree"?n.play("honk"):o===3?n.play("horn"):t.kind==="duck"||t.kind==="teddy"?n.play("squeak"):((s=this._pickT)!=null?s:0)<=0&&(n.play("pick",l),this._pickT=.04);let c=this.inst.get(t.kind);c.setMatrixAt(a.slot,new Yt().makeScale(0,0,0)),c.instanceMatrix.needsUpdate=!0,this._attach(t.kind,a);let h=this._proj(a.x,Math.max(1,t.s)+e.r,a.z),u=Ct("div",{class:"gb-pop",style:`left:${h.x}px;top:${h.y}px`},`+${rl(hn[t.kind])}`);this.layer.append(u),setTimeout(()=>u.remove(),1100),this._burst(a.x,e.r,a.z,o>=2?20:5,2+o*2);break}case"bump":n.play("bump"),this.shake=.4,((r=this._tooBigT)!=null?r:0)<=0&&(this.toast(qt("tooBig"),1.6),this._tooBigT=6);break;case"nudge":{n.play("nudge");let a=this.city[t.id],o=this.inst.get(a.kind);o.setMatrixAt(a.slot,new Yt().compose(new V(a.x,0,a.z),new Ve().setFromEuler(new _e(0,a.a,0)),new V(a.s,a.s,a.s))),o.instanceMatrix.needsUpdate=!0;break}case"bigger":{n.play("bigger");let a=En[t.goal-1],o=En[t.goal];this.hud.bigger.lastChild.textContent=o?qt("nowRoll",{x:ms()==="en"?a.en.toUpperCase():a.ar}):rl(a),this.hud.bigger.classList.add("show"),clearTimeout(this._bT),this._bT=setTimeout(()=>this.hud&&this.hud.bigger.classList.remove("show"),2200),this._burst(e.ball.x,e.r*2,e.ball.z,60,6);break}case"timeUp":n.play("timeUp"),this._count(qt("timeUp"));break;default:}}_attach(t,e){let n=this.g,s=new te(tl(t),el),r=e.s/n.d;s.scale.setScalar(r);let a=new V(e.x-n.ball.x,.15+Math.random()*.5,e.z-n.ball.z).normalize();if(a.applyQuaternion(this.gum.root.quaternion.clone().invert()),s.position.copy(a.multiplyScalar(.48)),s.quaternion.setFromUnitVectors(new V(0,1,0),a.clone().normalize()),s.userData.s=e.s,this.stuck.add(s),this.stuck.children.length>70){let o=[...this.stuck.children].sort((l,c)=>l.userData.s-c.userData.s);for(let l=0;l<12;l++)this.stuck.remove(o[l])}}_proj(t,e,n){let s=new V(t,e,n).project(this.camera);return{x:(s.x*.5+.5)*this.cw,y:(-s.y*.5+.5)*this.ch}}_sync(t,e){var c,h,u,d;let n=this.g,s=n.ball,r=n.r,a=Math.hypot(s.vx,s.vz);if(a>.01){let g=new V(s.vz,0,-s.vx).normalize();this.q.setFromAxisAngle(g,a*t/r),this.gum.root.quaternion.premultiply(this.q)}if(this.gum.root.position.set(s.x,r,s.z),this.gum.root.scale.setScalar(n.d),this._trailD=((c=this._trailD)!=null?c:0)+a*t,this._trailD>Math.max(.6,n.d*.5)){this._trailD=0;let g=this.trail[this.trailI++%this.trail.length];g.t=0,g.m.position.set(s.x+(Math.random()-.5)*r*.6,.06,s.z+(Math.random()-.5)*r*.6),g.m.scale.setScalar(Math.max(.3,n.d*.22)*(.6+Math.random()*.6))}for(let g of this.trail)g.t>6||(g.t+=t,g.m.material.opacity=Math.max(0,.75-g.t*.12));this.sound.roll(a,n.d,n.state==="roll"),this._pickT=((h=this._pickT)!=null?h:0)-t,this._tooBigT=((u=this._tooBigT)!=null?u:0)-t;let o=1+n.d*.9,l=this.land?new V(0,1.3+o*.9,3+o*1.9):new V(0,1.5+o*1.05,3.3+o*2.1);this.camLook.lerp(new V(s.x,r*.9,s.z-4-n.d*1.6),Math.min(1,t*5)),this.camPos.lerp(new V(s.x+l.x,l.y,s.z+l.z),Math.min(1,t*3)),this.camera.position.copy(this.camPos),this.shake=Math.max(0,((d=this.shake)!=null?d:0)-t*1.6),this.shake>0&&this.camera.position.add(new V((Math.random()-.5)*this.shake*o*.3,0,0)),this.camera.lookAt(this.camLook),this.camera.far=500+n.d*10,this.camera.updateProjectionMatrix(),this._fx(t),this._hudSync(n)}_fx(t){let e=this.spark;for(let n=0;n<150;n++)if(!(e.life[n]<=0)){e.life[n]-=t,e.vel[n*3+1]-=9*t;for(let s=0;s<3;s++)e.pos[n*3+s]+=e.vel[n*3+s]*t;e.life[n]<=0&&(e.pos[n*3+1]=-500)}this.sparks.geometry.attributes.position.needsUpdate=!0}_hudSync(t){if(!this.hud)return;let e=this._hc,n=`${Tn(xs(t.d))} ${qt("m")}`;e.d!==n&&(e.d=n,this.hud.d.lastChild.textContent=n);let s=t.goalD,r=`${Tn(xs(s))} ${qt("m")}`;e.goal!==r&&(e.goal=r,this.hud.goal.lastChild.textContent=r);let a=t.goal>0?En[t.goal-1].d:.5,o=Math.round(Math.max(0,Math.min(1,(t.d-a)/(s-a)))*100);e.w!==o&&(e.w=o,this.hud.goalBar.style.width=`${o}%`);let l=vm(Math.ceil(t.left));e.tm!==l&&(e.tm=l,this.hud.time.lastChild.textContent=ms()==="en"?l:Tn(l),this.hud.timePill.classList.toggle("low",t.left<=10))}_frame(){let t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;if(this._adapt(t),this.mode==="play"&&this.g&&!this.paused)this._playFrame(t,e);else if(this.mode==="results"&&this.g)this._sync(t,e);else if(this.mode!=="play"){let n=e*.4;this.gum.root.position.set(Math.sin(n)*3,.5,6+Math.cos(n)*3),this.gum.root.scale.setScalar(1),this.gum.root.rotation.set(e,e*.7,0);let s=new V(0,4.5,16);this.camPos.lerp(s,Math.min(1,t*2)),this.camera.position.copy(this.camPos),this.camera.lookAt(0,1,-6),this._fx(t)}this.renderer.render(this.scene,this.camera)}_adapt(t){if(this.frames.push(t),this.frames.length<90)return;let e=this.frames.reduce((n,s)=>n+s,0)/this.frames.length;this.frames.length=0,e>1/40&&this.pr>.75?(this.pr=Math.max(.75,this.pr-.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0):e<1/57&&this.pr<this.maxPR&&++this.goodWin>=4&&(this.pr=Math.min(this.maxPR,this.pr+.25),this.renderer.setPixelRatio(this.pr),this._resize(),this.goodWin=0)}dispose(){if(clearInterval(this._pill),clearTimeout(this._tt),clearTimeout(this._bT),this.sound.dispose(),this.renderer){this.renderer.setAnimationLoop(null),this.scene&&this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}}this.ro&&this.ro.disconnect(),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKey),document.removeEventListener("visibilitychange",this._onVis),this.root.remove()}},ll={start(i,t,e){let n=new ol(i,t||{},e);return ll.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.GumBall=ll;var wA=ll;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
