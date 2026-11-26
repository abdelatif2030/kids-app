(()=>{var No="170";var yh=0,Cl=1,Ih=2;var bc=1,_h=2,gn=3,Dn=0,Le=1,Ze=2,rn=0,Ei=1,Ri=2,yl=3,Il=4,Mh=5,Zn=100,bh=101,Sh=102,Eh=103,wh=104,Th=200,qh=201,Rh=202,Ph=203,xa=204,va=205,Lh=206,Uh=207,Dh=208,Nh=209,Vh=210,Bh=211,zh=212,Fh=213,Oh=214,Ca=0,ya=1,Ia=2,Pi=3,_a=4,Ma=5,ba=6,Sa=7,Vo=0,kh=1,Hh=2,Ln=0,Bo=1,zo=2,Fo=3,Oo=4,Gh=5,ko=6,Ho=7;var Sc=300,Li=301,Ui=302,Ea=303,wa=304,Sr=306,Ta=1e3,jn=1001,qa=1002,je=1003,Wh=1004;var ys=1005;var sn=1006,Fr=1007;var Jn=1008;var Cn=1009,Ec=1010,wc=1011,cs=1012,Go=1013,$n=1014,An=1015,$e=1016,Wo=1017,Xo=1018,Di=1020,Tc=35902,qc=1021,Rc=1022,Qe=1023,Pc=1024,Lc=1025,wi=1026,Ni=1027,Uc=1028,Yo=1029,Dc=1030,Ko=1031;var Zo=1033,Ks=33776,Zs=33777,Qs=33778,js=33779,Ra=35840,Pa=35841,La=35842,Ua=35843,Da=36196,Na=37492,Va=37496,Ba=37808,za=37809,Fa=37810,Oa=37811,ka=37812,Ha=37813,Ga=37814,Wa=37815,Xa=37816,Ya=37817,Ka=37818,Za=37819,Qa=37820,ja=37821,Js=36492,Ja=36494,$a=36495,Nc=36283,to=36284,eo=36285,no=36286;var $s=2300,io=2301,Or=2302,_l=2400,Ml=2401,bl=2402;var Xh=3200,Yh=3201;var Vc=0,Kh=1,Rn="",Ie="srgb",Hi="srgb-linear",Er="linear",jt="srgb";var li=7680;var Sl=519,Zh=512,Qh=513,jh=514,Bc=515,Jh=516,$h=517,tu=518,eu=519,so=35044;var El="300 es",xn=2e3,tr=2001,Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kr=Math.PI/180,ro=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function nu(i,t){return(i%t+t)%t}function Hr(i,t,e){return(1-e)*i+e*t}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],A=s[0],g=s[3],p=s[6],b=s[1],y=s[4],x=s[7],T=s[2],S=s[5],E=s[8];return r[0]=a*A+o*b+l*T,r[3]=a*g+o*y+l*S,r[6]=a*p+o*x+l*E,r[1]=c*A+h*b+u*T,r[4]=c*g+h*y+u*S,r[7]=c*p+h*x+u*E,r[2]=d*A+f*b+m*T,r[5]=d*g+f*y+m*S,r[8]=d*p+f*x+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/m;return t[0]=u*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=f*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gr=new Dt;function zc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){let i=er("canvas");return i.style.display="block",i}var wl={};function as(i){i in wl||(wl[i]=!0,console.warn(i))}function su(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ru(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function au(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ft={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?Er:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tl=[.64,.33,.3,.6,.15,.06],ql=[.2126,.7152,.0722],Rl=[.3127,.329],Pl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ft.define({[Hi]:{primaries:Tl,whitePoint:Rl,transfer:Er,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:ql,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Tl,whitePoint:Rl,transfer:jt,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:ql,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var ci,ao=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=er("canvas")),ci.width=t.width,ci.height=t.height;let n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ou=0,nr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lu=0,Be=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=sn,a=Jn,o=Qe,l=Cn,c=i.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Un(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Sc;Be.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],A=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(f+1)/2,T=(p+1)/2,S=(h+d)/4,E=(u+A)/4,L=(m+g)/4;return y>x&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=E/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=L/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-A)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends Nn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new nr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ir=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],A=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=A;return}if(u!==A||l!==d||c!==f||h!==m){let g=1-o,p=l*d+c*f+h*m+u*A,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let T=Math.sqrt(y),S=Math.atan2(T,p*b);g=Math.sin(g*S)/T,o=Math.sin(o*S)/T}let x=o*b;if(l=l*g+d*x,c=c*g+f*x,h=h*g+m*x,u=u*g+A*x,g===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xr=new D,Ul=new Vn,ti=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),_s.subVectors(this.max,$i),hi.subVectors(t.a,$i),ui.subVectors(t.b,$i),di.subVectors(t.c,$i),bn.subVectors(ui,hi),Sn.subVectors(di,ui),kn.subVectors(hi,di);let e=[0,-bn.z,bn.y,0,-Sn.z,Sn.y,0,-kn.z,kn.y,bn.z,0,-bn.x,Sn.z,0,-Sn.x,kn.z,0,-kn.x,-bn.y,bn.x,0,-Sn.y,Sn.x,0,-kn.y,kn.x,0];return!Yr(e,hi,ui,di,_s)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,hi,ui,di,_s))?!1:(Ms.crossVectors(bn,Sn),e=[Ms.x,Ms.y,Ms.z],Yr(e,hi,ui,di,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},hn=[new D,new D,new D,new D,new D,new D,new D,new D],Xe=new D,Is=new ti,hi=new D,ui=new D,di=new D,bn=new D,Sn=new D,kn=new D,$i=new D,_s=new D,Ms=new D,Hn=new D;function Yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);let o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cu=new ti,ts=new D,Kr=new D,Vi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);let e=ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(Kr)),this.expandByPoint(ts.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},un=new D,Zr=new D,bs=new D,En=new D,Qr=new D,Ss=new D,jr=new D,sr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zr.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Zr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=En.dot(this.direction),l=-En.dot(bs),c=En.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let A=1/h;u*=A,d*=A,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zr).addScaledVector(bs,d),f}intersectSphere(t,e){un.subVectors(t.center,this.origin);let n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){Qr.subVectors(e,t),Ss.subVectors(n,t),jr.crossVectors(Qr,Ss);let a=this.direction.dot(jr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);let l=o*this.direction.dot(Ss.crossVectors(En,Ss));if(l<0)return null;let c=o*this.direction.dot(Qr.cross(En));if(c<0||l+c>a)return null;let h=-o*En.dot(jr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,m,A,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,A,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,A,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,A=c*u;e[0]=d+A*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,A=c*u;e[0]=d-A*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,A=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+A,e[1]=l*u,e[5]=A*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=A-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-A*u}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,A=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+A,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=A*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hu,t,uu)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),wn.crossVectors(n,Ne),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),wn.crossVectors(n,Ne)),wn.normalize(),Es.crossVectors(Ne,wn),s[0]=wn.x,s[4]=Es.x,s[8]=Ne.x,s[1]=wn.y,s[5]=Es.y,s[9]=Ne.y,s[2]=wn.z,s[6]=Es.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],A=n[6],g=n[10],p=n[14],b=n[3],y=n[7],x=n[11],T=n[15],S=s[0],E=s[4],L=s[8],_=s[12],I=s[1],w=s[5],F=s[9],z=s[13],H=s[2],Z=s[6],G=s[10],tt=s[14],k=s[3],rt=s[7],ut=s[11],_t=s[15];return r[0]=a*S+o*I+l*H+c*k,r[4]=a*E+o*w+l*Z+c*rt,r[8]=a*L+o*F+l*G+c*ut,r[12]=a*_+o*z+l*tt+c*_t,r[1]=h*S+u*I+d*H+f*k,r[5]=h*E+u*w+d*Z+f*rt,r[9]=h*L+u*F+d*G+f*ut,r[13]=h*_+u*z+d*tt+f*_t,r[2]=m*S+A*I+g*H+p*k,r[6]=m*E+A*w+g*Z+p*rt,r[10]=m*L+A*F+g*G+p*ut,r[14]=m*_+A*z+g*tt+p*_t,r[3]=b*S+y*I+x*H+T*k,r[7]=b*E+y*w+x*Z+T*rt,r[11]=b*L+y*F+x*G+T*ut,r[15]=b*_+y*z+x*tt+T*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],A=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+A*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],A=t[13],g=t[14],p=t[15],b=u*g*c-A*d*c+A*l*f-o*g*f-u*l*p+o*d*p,y=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,x=h*A*c-m*u*c+m*o*f-a*A*f-h*o*p+a*u*p,T=m*u*l-h*A*l-m*o*d+a*A*d+h*o*g-a*u*g,S=e*b+n*y+s*x+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=b*E,t[1]=(A*d*r-u*g*r-A*s*f+n*g*f+u*s*p-n*d*p)*E,t[2]=(o*g*r-A*l*r+A*s*c-n*g*c-o*s*p+n*l*p)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*E,t[4]=y*E,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*E,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*p-e*l*p)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*E,t[8]=x*E,t[9]=(m*u*r-h*A*r-m*n*f+e*A*f+h*n*p-e*u*p)*E,t[10]=(a*A*r-m*o*r+m*n*c-e*A*c-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=T*E,t[13]=(h*A*s-m*u*s+m*n*d-e*A*d-h*n*g+e*u*g)*E,t[14]=(m*o*s-a*A*s-m*n*l+e*A*l+a*n*g-e*o*g)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,A=a*h,g=a*u,p=o*u,b=l*c,y=l*h,x=l*u,T=n.x,S=n.y,E=n.z;return s[0]=(1-(A+p))*T,s[1]=(f+x)*T,s[2]=(m-y)*T,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(g+b)*S,s[7]=0,s[8]=(m+y)*E,s[9]=(g-b)*E,s[10]=(1-(d+A))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=fi.set(s[0],s[1],s[2]).length(),a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let c=1/r,h=1/a,u=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=xn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(o===xn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===tr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=xn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,m,A;if(o===xn)m=(a+r)*u,A=-2*u;else if(o===tr)m=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=A,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fi=new D,Ye=new ce,hu=new D(0,0,0),uu=new D(1,1,1),wn=new D,Es=new D,Ne=new D,Dl=new ce,Nl=new Vn,an=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},du=0,Vl=new D,pi=new Vn,dn=new ce,ws=new D,es=new D,fu=new D,pu=new Vn,Bl=new D(1,0,0),zl=new D(0,1,0),Fl=new D(0,0,1),Ol={type:"added"},gu={type:"removed"},gi={type:"childadded",child:null},Jr={type:"childremoved",child:null},me=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new an,n=new Vn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Dt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Bl,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bl,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(es,ws,this.up):dn.lookAt(ws,es,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(dn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ol),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gu),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ol),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};me.DEFAULT_UP=new D(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new D,fn=new D,$r=new D,pn=new D,mi=new D,Ai=new D,kl=new D,ta=new D,ea=new D,na=new D,ia=new ue,sa=new ue,ra=new ue,Pn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),fn.subVectors(n,e),$r.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(fn),l=Ke.dot($r),c=fn.dot(fn),h=fn.dot($r),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),fn.subVectors(t,e),Ke.cross(fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ke.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;mi.subVectors(s,n),Ai.subVectors(r,n),ta.subVectors(t,n);let l=mi.dot(ta),c=Ai.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);let h=mi.dot(ea),u=Ai.dot(ea);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(mi,a);na.subVectors(t,r);let f=mi.dot(na),m=Ai.dot(na);if(m>=0&&f<=m)return e.copy(r);let A=f*c-l*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ai,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return kl.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(kl,o);let p=1/(g+A+d);return a=A*p,o=d*p,e.copy(n).addScaledVector(mi,a).addScaledVector(Ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ft.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ft.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ft.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ft.workingColorSpace){if(t=nu(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return Ft.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Fc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Ft.fromWorkingColorSpace(Se.copy(this),t),Math.round(Pe(Se.r*255,0,255))*65536+Math.round(Pe(Se.g*255,0,255))*256+Math.round(Pe(Se.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Se.copy(this),e);let n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Ie){Ft.fromWorkingColorSpace(Se.copy(this),t);let e=Se.r,n=Se.g,s=Se.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(Ts);let n=Hr(Tn.h,Ts.h,e),s=Hr(Tn.s,Ts.s,e),r=Hr(Tn.l,Ts.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new Et;Et.NAMES=Fc;var mu=0,yn=class extends Nn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Un(),this.name="",this.blending=Ei,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=va,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ze=class extends yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new D,qs=new It,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=so,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==so&&(t.usage=this.usage),t}};var ar=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Au=0,He=new ce,oa=new me,xi=new D,Ve=new ti,ns=new ti,ye=new D,Ae=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zc(t)?or:ar)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ve.min,ns.min),Ve.expandByPoint(ye),ye.addVectors(Ve.max,ns.max),Ve.expandByPoint(ye)):(Ve.expandByPoint(ns.min),Ve.expandByPoint(ns.max))}Ve.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(t,c),ye.add(xi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;let c=new D,h=new D,u=new D,d=new It,f=new It,m=new It,A=new D,g=new D;function p(L,_,I){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,_),m.fromBufferAttribute(r,I),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(A.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),o[L].add(A),o[_].add(A),o[I].add(A),l[L].add(g),l[_].add(g),l[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,_=b.length;L<_;++L){let I=b[L],w=I.start,F=I.count;for(let z=w,H=w+F;z<H;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let y=new D,x=new D,T=new D,S=new D;function E(L){T.fromBufferAttribute(s,L),S.copy(T);let _=o[L];y.copy(_),y.sub(T.multiplyScalar(T.dot(_))).normalize(),x.crossVectors(S,_);let w=x.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,w)}for(let L=0,_=b.length;L<_;++L){let I=b[L],w=I.start,F=I.count;for(let z=w,H=w+F;z<H;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),A=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let A=0,g=l.length;A<g;A++){o.isInterleavedBufferAttribute?f=l[A]*o.data.stride+o.offset:f=l[A]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hl=new ce,Gn=new sr,Rs=new Vi,Gl=new D,Ps=new D,Ls=new D,Us=new D,la=new D,Ds=new D,Wl=new D,Ns=new D,fe=class extends me{constructor(t=new Ae,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(la.fromBufferAttribute(u,t),a?Ds.addScaledVector(la,h):Ds.addScaledVector(la.sub(e),h))}e.add(Ds)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(Rs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Rs,Gl)===null||Gn.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=b,T=y;x<T;x+=3){let S=o.getX(x),E=o.getX(x+1),L=o.getX(x+2);s=Vs(this,p,t,n,c,h,u,S,E,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(o.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let b=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);s=Vs(this,a,t,n,c,h,u,b,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,A=d.length;m<A;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=b,T=y;x<T;x+=3){let S=x,E=x+1,L=x+2;s=Vs(this,p,t,n,c,h,u,S,E,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let g=m,p=A;g<p;g+=3){let b=g,y=g+1,x=g+2;s=Vs(this,a,t,n,c,h,u,b,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function xu(i,t,e,n,s,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Dn,o),l===null)return null;Ns.copy(o),Ns.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ns);return c<e.near||c>e.far?null:{distance:c,point:Ns.clone(),object:i}}function Vs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ps),i.getVertexPosition(l,Ls),i.getVertexPosition(c,Us);let h=xu(i,t,e,n,Ps,Ls,Us,Wl);if(h){let u=new D;Pn.getBarycoord(Wl,Ps,Ls,Us,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,l,c,u,new It)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,l,c,u,new It)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Pn.getNormal(Ps,Ls,Us,d.normal),h.face=d,h.barycoord=u}return h}var ei=class i extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function m(A,g,p,b,y,x,T,S,E,L,_){let I=x/E,w=T/L,F=x/2,z=T/2,H=S/2,Z=E+1,G=L+1,tt=0,k=0,rt=new D;for(let ut=0;ut<G;ut++){let _t=ut*w-z;for(let Bt=0;Bt<Z;Bt++){let te=Bt*I-F;rt[A]=te*b,rt[g]=_t*y,rt[p]=H,c.push(rt.x,rt.y,rt.z),rt[A]=0,rt[g]=0,rt[p]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Bt/E),u.push(1-ut/L),tt+=1}}for(let ut=0;ut<L;ut++)for(let _t=0;_t<E;_t++){let Bt=d+_t+Z*ut,te=d+_t+Z*(ut+1),X=d+(_t+1)+Z*(ut+1),et=d+(_t+1)+Z*ut;l.push(Bt,te,et),l.push(te,X,et),k+=6}o.addGroup(f,k,_),f+=k,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=Bi(i[e]);for(let s in n)t[s]=n[s]}return t}function vu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ft.workingColorSpace}var zn={clone:Bi,merge:we},Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lr=class extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new D,Xl=new It,Yl=new It,Te=class extends lr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,Yl),e.subVectors(Yl,Xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vi=-90,Ci=1,co=class extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(vi,Ci,t,e);s.layers=this.layers,this.add(s);let r=new Te(vi,Ci,t,e);r.layers=this.layers,this.add(r);let a=new Te(vi,Ci,t,e);a.layers=this.layers,this.add(a);let o=new Te(vi,Ci,t,e);o.layers=this.layers,this.add(o);let l=new Te(vi,Ci,t,e);l.layers=this.layers,this.add(l);let c=new Te(vi,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},cr=class extends Be{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ho=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:rn});r.uniforms.tEquirect.value=e;let a=new fe(s,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=sn),new co(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ca=new D,Iu=new D,_u=new Dt,mn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ca.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_u.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Vi,Bs=new D,hs=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],A=s[10],g=s[11],p=s[12],b=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,g-f,x-p).normalize(),n[1].setComponents(l+r,d+c,g+f,x+p).normalize(),n[2].setComponents(l+a,d+h,g+m,x+b).normalize(),n[3].setComponents(l-a,d-h,g-m,x-b).normalize(),n[4].setComponents(l-o,d-u,g-A,x-y).normalize(),e===xn)n[5].setComponents(l+o,d+u,g+A,x+y).normalize();else if(e===tr)n[5].setComponents(o,u,A,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Bs.x=s.normal.x>0?t.max.x:t.min.x,Bs.y=s.normal.y>0?t.max.y:t.min.y,Bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],A=u[f];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,u[d]=A)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let A=u[f];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ni=class i extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],A=[],g=[];for(let p=0;p<h;p++){let b=p*d-a;for(let y=0;y<c;y++){let x=y*u-r;m.push(x,-b,0),A.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let y=b+c*p,x=b+c*(p+1),T=b+1+c*(p+1),S=b+1+c*p;f.push(y,x,S),f.push(x,T,S)}this.setIndex(f),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(A,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Su=`#ifdef USE_ALPHAHASH
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
#endif`,Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
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
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
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
#endif`,zu=`#ifdef USE_BUMPMAP
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
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ku=`#define PI 3.141592653589793
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
} // validated`,Zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
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
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,_d=`struct PhysicalMaterial {
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
}`,Md=`
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
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
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hf=`float getShadowMask() {
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
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sf=`uniform sampler2D t2D;
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`#include <common>
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
}`,Pf=`#if DEPTH_PACKING == 3200
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
}`,Lf=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,zf=`#include <common>
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Of=`#define LAMBERT
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
}`,kf=`#define LAMBERT
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
}`,Hf=`#define MATCAP
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
}`,Gf=`#define MATCAP
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
}`,Wf=`#define NORMAL
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
}`,Xf=`#define NORMAL
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
}`,Yf=`#define PHONG
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
}`,Kf=`#define PHONG
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
}`,Zf=`#define STANDARD
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
}`,Qf=`#define STANDARD
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
}`,jf=`#define TOON
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
}`,Jf=`#define TOON
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
}`,$f=`uniform float size;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,np=`uniform vec3 color;
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
}`,ip=`uniform float rotation;
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
}`,sp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:bu,alphahash_pars_fragment:Su,alphamap_fragment:Eu,alphamap_pars_fragment:wu,alphatest_fragment:Tu,alphatest_pars_fragment:qu,aomap_fragment:Ru,aomap_pars_fragment:Pu,batching_pars_vertex:Lu,batching_vertex:Uu,begin_vertex:Du,beginnormal_vertex:Nu,bsdfs:Vu,iridescence_fragment:Bu,bumpmap_pars_fragment:zu,clipping_planes_fragment:Fu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Hu,color_fragment:Gu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:Yu,common:Ku,cube_uv_reflection_fragment:Zu,defaultnormal_vertex:Qu,displacementmap_pars_vertex:ju,displacementmap_vertex:Ju,emissivemap_fragment:$u,emissivemap_pars_fragment:td,colorspace_fragment:ed,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:ad,envmap_physical_pars_fragment:Ad,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:gd,lights_pars_begin:md,lights_toon_fragment:xd,lights_toon_pars_fragment:vd,lights_phong_fragment:Cd,lights_phong_pars_fragment:yd,lights_physical_fragment:Id,lights_physical_pars_fragment:_d,lights_fragment_begin:Md,lights_fragment_maps:bd,lights_fragment_end:Sd,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:qd,map_fragment:Rd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Ud,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Nd,morphinstance_vertex:Vd,morphcolor_vertex:Bd,morphnormal_vertex:zd,morphtarget_pars_vertex:Fd,morphtarget_vertex:Od,normal_fragment_begin:kd,normal_fragment_maps:Hd,normal_pars_fragment:Gd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:Zd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:jd,opaque_fragment:Jd,packing:$d,premultiplied_alpha_fragment:tf,project_vertex:ef,dithering_fragment:nf,dithering_pars_fragment:sf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:of,shadowmap_pars_vertex:lf,shadowmap_vertex:cf,shadowmask_pars_fragment:hf,skinbase_vertex:uf,skinning_pars_vertex:df,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:gf,specularmap_pars_fragment:mf,tonemapping_fragment:Af,tonemapping_pars_fragment:xf,transmission_fragment:vf,transmission_pars_fragment:Cf,uv_pars_fragment:yf,uv_pars_vertex:If,uv_vertex:_f,worldpos_vertex:Mf,background_vert:bf,background_frag:Sf,backgroundCube_vert:Ef,backgroundCube_frag:wf,cube_vert:Tf,cube_frag:qf,depth_vert:Rf,depth_frag:Pf,distanceRGBA_vert:Lf,distanceRGBA_frag:Uf,equirect_vert:Df,equirect_frag:Nf,linedashed_vert:Vf,linedashed_frag:Bf,meshbasic_vert:zf,meshbasic_frag:Ff,meshlambert_vert:Of,meshlambert_frag:kf,meshmatcap_vert:Hf,meshmatcap_frag:Gf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:Yf,meshphong_frag:Kf,meshphysical_vert:Zf,meshphysical_frag:Qf,meshtoon_vert:jf,meshtoon_frag:Jf,points_vert:$f,points_frag:tp,shadow_vert:ep,shadow_frag:np,sprite_vert:ip,sprite_frag:sp},it={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},en={basic:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Et(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:we([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:we([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:we([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Et(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:we([it.points,it.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:we([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:we([it.common,it.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:we([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:we([it.sprite,it.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:we([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:we([it.lights,it.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};en.physical={uniforms:we([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var zs={r:0,b:0,g:0},Xn=new an,rp=new ce;function ap(i,t,e,n,s,r,a){let o=new Et(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function A(b){let y=!1,x=m(b);x===null?p(o,l):x&&x.isColor&&(p(x,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){let x=m(y);x&&(x.isCubeTexture||x.mapping===Sr)?(h===void 0&&(h=new fe(new ei(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Bi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(y.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Xn)),h.material.toneMapped=Ft.getTransfer(x.colorSpace)!==jt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new fe(new ni(2,2),new xe({name:"BackgroundMaterial",uniforms:Bi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(x.colorSpace)!==jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(zs,Oc(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:A,addToRenderList:g}}function op(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(I,w,F,z,H){let Z=!1,G=u(z,F,w);r!==G&&(r=G,c(r.object)),Z=f(I,z,F,H),Z&&m(I,z,F,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(I,w,F,z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,w,F){let z=F.wireframe===!0,H=n[I.id];H===void 0&&(H={},n[I.id]=H);let Z=H[w.id];Z===void 0&&(Z={},H[w.id]=Z);let G=Z[z];return G===void 0&&(G=d(l()),Z[z]=G),G}function d(I){let w=[],F=[],z=[];for(let H=0;H<e;H++)w[H]=0,F[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:z,object:I,attributes:{},index:null}}function f(I,w,F,z){let H=r.attributes,Z=w.attributes,G=0,tt=F.getAttributes();for(let k in tt)if(tt[k].location>=0){let ut=H[k],_t=Z[k];if(_t===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(_t=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(_t=I.instanceColor)),ut===void 0||ut.attribute!==_t||_t&&ut.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function m(I,w,F,z){let H={},Z=w.attributes,G=0,tt=F.getAttributes();for(let k in tt)if(tt[k].location>=0){let ut=Z[k];ut===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor));let _t={};_t.attribute=ut,ut&&ut.data&&(_t.data=ut.data),H[k]=_t,G++}r.attributes=H,r.attributesNum=G,r.index=z}function A(){let I=r.newAttributes;for(let w=0,F=I.length;w<F;w++)I[w]=0}function g(I){p(I,0)}function p(I,w){let F=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;F[I]=1,z[I]===0&&(i.enableVertexAttribArray(I),z[I]=1),H[I]!==w&&(i.vertexAttribDivisor(I,w),H[I]=w)}function b(){let I=r.newAttributes,w=r.enabledAttributes;for(let F=0,z=w.length;F<z;F++)w[F]!==I[F]&&(i.disableVertexAttribArray(F),w[F]=0)}function y(I,w,F,z,H,Z,G){G===!0?i.vertexAttribIPointer(I,w,F,H,Z):i.vertexAttribPointer(I,w,F,z,H,Z)}function x(I,w,F,z){A();let H=z.attributes,Z=F.getAttributes(),G=w.defaultAttributeValues;for(let tt in Z){let k=Z[tt];if(k.location>=0){let rt=H[tt];if(rt===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),rt!==void 0){let ut=rt.normalized,_t=rt.itemSize,Bt=t.get(rt);if(Bt===void 0)continue;let te=Bt.buffer,X=Bt.type,et=Bt.bytesPerElement,vt=X===i.INT||X===i.UNSIGNED_INT||rt.gpuType===Go;if(rt.isInterleavedBufferAttribute){let at=rt.data,Tt=at.stride,Pt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<k.locationSize;zt++)p(k.location+zt,at.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<k.locationSize;zt++)g(k.location+zt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let zt=0;zt<k.locationSize;zt++)y(k.location+zt,_t/k.locationSize,X,ut,Tt*et,(Pt+_t/k.locationSize*zt)*et,vt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<k.locationSize;at++)p(k.location+at,rt.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<k.locationSize;at++)g(k.location+at);i.bindBuffer(i.ARRAY_BUFFER,te);for(let at=0;at<k.locationSize;at++)y(k.location+at,_t/k.locationSize,X,ut,_t*et,_t/k.locationSize*at*et,vt)}}else if(G!==void 0){let ut=G[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(k.location,ut);break;case 3:i.vertexAttrib3fv(k.location,ut);break;case 4:i.vertexAttrib4fv(k.location,ut);break;default:i.vertexAttrib1fv(k.location,ut)}}}}b()}function T(){L();for(let I in n){let w=n[I];for(let F in w){let z=w[F];for(let H in z)h(z[H].object),delete z[H];delete w[F]}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let w=n[I.id];for(let F in w){let z=w[F];for(let H in z)h(z[H].object),delete z[H];delete w[F]}delete n[I.id]}function E(I){for(let w in n){let F=n[w];if(F[I.id]===void 0)continue;let z=F[I.id];for(let H in z)h(z[H].object),delete z[H];delete F[I.id]}}function L(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:A,enableAttribute:g,disableUnusedAttributes:b}}function lp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A]*d[A];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Qe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let L=E===$e&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Cn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==An&&!L)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:S}}function hp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new mn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,y=b*4,x=p.clippingState||null;l.value=x,x=h(m,d,y,f);for(let T=0;T!==y;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let A=u!==null?u.length:0,g=null;if(A!==0){if(g=l.value,m!==!0||g===null){let p=f+A*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==A;++y,x+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function up(i){let t=new WeakMap;function e(a,o){return o===Ea?a.mapping=Li:o===wa&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ea||o===wa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ho(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zi=class extends lr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Si=4,Kl=[.125,.215,.35,.446,.526,.582],Qn=20,ha=new zi,Zl=new Et,ua=null,da=0,fa=0,pa=!1,Kn=(1+Math.sqrt(5))/2,yi=1/Kn,Ql=[new D(-Kn,yi,0),new D(Kn,yi,0),new D(-yi,0,Kn),new D(yi,0,Kn),new D(0,Kn,-yi),new D(0,Kn,yi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:$e,format:Qe,colorSpace:Hi,depthBuffer:!1},s=jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(r)),this._blurMaterial=fp(r,t,e)}return s}_compileMaterial(t){let e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){let o=new Te(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zl),h.toneMapping=Ln,h.autoClear=!1;let f=new ze({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new fe(new ei,f),A=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,A=!0):(f.color.copy(Zl),A=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;Fs(s,b*y,p>2?y:0,y,y),h.setRenderTarget(s),A&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Li||t.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ql[(s-r-1)%Ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new fe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qn-1),A=r/m,g=isFinite(r)?1+Math.floor(h*A):Qn;g>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qn}`);let p=[],b=0;for(let E=0;E<Qn;++E){let L=E/A,_=Math.exp(-L*L/2);p.push(_),E===0?b+=_:E<g&&(b+=2*_)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let x=this._sizeLods[s],T=3*x*(s>y-Si?s-y+Si:0),S=4*(this._cubeSize-x);Fs(e,T,S,3*x,2*x),l.setRenderTarget(e),l.render(u,ha)}};function dp(i){let t=[],e=[],n=[],s=i,r=i-Si+1+Kl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Si?l=Kl[a-i+Si-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,A=3,g=2,p=1,b=new Float32Array(A*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let S=0;S<f;S++){let E=S%3*2/3-1,L=S>2?0:-1,_=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];b.set(_,A*m*S),y.set(d,g*m*S);let I=[S,S,S,S,S,S];x.set(I,p*m*S)}let T=new Ae;T.setAttribute("position",new ge(b,A)),T.setAttribute("uv",new ge(y,g)),T.setAttribute("faceIndex",new ge(x,p)),t.push(T),s>Si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jl(i,t,e){let n=new qe(i,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fp(i,t,e){let n=new Float32Array(Qn),s=new D(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Jl(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function $l(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function pp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ea||l===wa,h=l===Li||l===Ui;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new hr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new hr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mp(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let A=d.morphAttributes[m];for(let g=0,p=A.length;g<p;g++)t.remove(A[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let A=f[m];for(let g=0,p=A.length;g<p;g++)t.update(A[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,A=0;if(f!==null){let b=f.array;A=f.version;for(let y=0,x=b.length;y<x;y+=3){let T=b[y+0],S=b[y+1],E=b[y+2];d.push(T,S,S,E,E,T)}}else if(m!==void 0){let b=m.array;A=m.version;for(let y=0,x=b.length/3-1;y<x;y+=3){let T=y+0,S=y+1,E=y+2;d.push(T,S,S,E,E,T)}}else return;let g=new(zc(d)?or:ar)(d,1);g.version=A;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ap(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,A){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],A[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,A,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*A[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),A===!0&&(y=3);let x=o.attributes.position.count*y,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*T*4*u),E=new ir(S,x,T,u);E.type=An,E.needsUpdate=!0;let L=y*4;for(let I=0;I<u;I++){let w=g[I],F=p[I],z=b[I],H=x*T*4*I;for(let Z=0;Z<w.count;Z++){let G=Z*L;f===!0&&(s.fromBufferAttribute(w,Z),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),m===!0&&(s.fromBufferAttribute(F,Z),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),A===!0&&(s.fromBufferAttribute(z,Z),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new It(x,T)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let A=0;A<c.length;A++)f+=c[A];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ur=class extends Be{constructor(t,e,n,s,r,a,o,l,c,h=wi){if(h!==wi&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=$n),n===void 0&&h===Ni&&(n=Di),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Hc=new Be,tc=new ur(1,1),Gc=new ir,Wc=new lo,Xc=new cr,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function Gi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wr(i,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function bp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(ve(e,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),Ce(e,n)}}function Sp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(ve(e,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),Ce(e,n)}}function Ep(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(ve(e,n))return;ic.set(n),i.uniformMatrix4fv(this.addr,!1,ic),Ce(e,n)}}function wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Pp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Np(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=Bc,r=tc):r=Hc,e.setTexture2D(t||r,s)}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wc,s)}function Bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xc,s)}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gc,s)}function Fp(i){switch(i){case 5126:return yp;case 35664:return Ip;case 35665:return _p;case 35666:return Mp;case 35674:return bp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return wp;case 35667:case 35671:return Tp;case 35668:case 35672:return qp;case 35669:case 35673:return Rp;case 5125:return Pp;case 36294:return Lp;case 36295:return Up;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}function Op(i,t){i.uniform1fv(this.addr,t)}function kp(i,t){let e=Gi(t,this.size,2);i.uniform2fv(this.addr,e)}function Hp(i,t){let e=Gi(t,this.size,3);i.uniform3fv(this.addr,e)}function Gp(i,t){let e=Gi(t,this.size,4);i.uniform4fv(this.addr,e)}function Wp(i,t){let e=Gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xp(i,t){let e=Gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yp(i,t){let e=Gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kp(i,t){i.uniform1iv(this.addr,t)}function Zp(i,t){i.uniform2iv(this.addr,t)}function Qp(i,t){i.uniform3iv(this.addr,t)}function jp(i,t){i.uniform4iv(this.addr,t)}function Jp(i,t){i.uniform1uiv(this.addr,t)}function $p(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){let n=this.cache,s=t.length,r=wr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Hc,r[a])}function ig(i,t,e){let n=this.cache,s=t.length,r=wr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wc,r[a])}function sg(i,t,e){let n=this.cache,s=t.length,r=wr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xc,r[a])}function rg(i,t,e){let n=this.cache,s=t.length,r=wr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gc,r[a])}function ag(i){switch(i){case 5126:return Op;case 35664:return kp;case 35665:return Hp;case 35666:return Gp;case 35674:return Wp;case 35675:return Xp;case 35676:return Yp;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return Qp;case 35669:case 35673:return jp;case 5125:return Jp;case 36294:return $p;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}var uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fp(e.type)}},fo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}},po=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ga=/(\w+)(\])?(\[|\.)?/g;function ac(i,t){i.seq.push(t),i.map[t.id]=t}function og(i,t,e){let n=i.name,s=n.length;for(ga.lastIndex=0;;){let r=ga.exec(n),a=ga.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ac(e,c===void 0?new uo(o,i,t):new fo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new po(o),ac(e,u)),e=u}}}var qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);og(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function oc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lg=37297,cg=0;function hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var lc=new Dt;function ug(i){Ft._getMatrix(lc,Ft.workingColorSpace,i);let t=`mat3( ${lc.elements.map(e=>e.toFixed(4))} )`;switch(Ft.getTransfer(i)){case Er:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hg(i.getShaderSource(t),a)}else return s}function dg(i,t){let e=ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fg(i,t){let e;switch(t){case Bo:e="Linear";break;case zo:e="Reinhard";break;case Fo:e="Cineon";break;case Oo:e="ACESFilmic";break;case ko:e="AgX";break;case Ho:e="Neutral";break;case Gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Os=new D;function pg(){Ft.getLuminanceCoefficients(Os);let i=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function mg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function os(i){return i!==""}function hc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(xg,Cg)}var vg=new Map;function Cg(i,t){let e=Vt[t];if(e===void 0){let n=vg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}var yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(yg,Ig)}function Ig(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _g(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Ui:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function Sg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vo:t="ENVMAP_BLENDING_MULTIPLY";break;case kh:t="ENVMAP_BLENDING_MIX";break;case Hh:t="ENVMAP_BLENDING_ADD";break}return t}function Eg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=_g(e),c=Mg(e),h=bg(e),u=Sg(e),d=Eg(e),f=gg(e),m=mg(r),A=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(os).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(os).join(`
`),p.length>0&&(p+=`
`)):(g=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),p=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,dg("linearToOutputTexel",e.outputColorSpace),pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),a=go(a),a=hc(a,e),a=uc(a,e),o=go(o),o=hc(o,e),o=uc(o,e),a=dc(a),o=dc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+g+a,x=b+p+o,T=oc(s,s.VERTEX_SHADER,y),S=oc(s,s.FRAGMENT_SHADER,x);s.attachShader(A,T),s.attachShader(A,S),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function E(w){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(A).trim(),z=s.getShaderInfoLog(T).trim(),H=s.getShaderInfoLog(S).trim(),Z=!0,G=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,T,S);else{let tt=cc(s,T,"vertex"),k=cc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+tt+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||H==="")&&(G=!1);G&&(w.diagnostics={runnable:Z,programLog:F,vertexShader:{log:z,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(T),s.deleteShader(S),L=new qi(s,A),_=Ag(s,A)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(A,lg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=T,this.fragmentShader=S,this}var Tg=0,mo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ao(t),e.set(t,n)),n}},Ao=class{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}};function qg(i,t,e,n,s,r,a){let o=new rr,l=new mo,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,I,w,F,z){let H=F.fog,Z=z.geometry,G=_.isMeshStandardMaterial?F.environment:null,tt=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),k=tt&&tt.mapping===Sr?tt.image.height:null,rt=m[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_t=ut!==void 0?ut.length:0,Bt=0;Z.morphAttributes.position!==void 0&&(Bt=1),Z.morphAttributes.normal!==void 0&&(Bt=2),Z.morphAttributes.color!==void 0&&(Bt=3);let te,X,et,vt;if(rt){let Jt=en[rt];te=Jt.vertexShader,X=Jt.fragmentShader}else te=_.vertexShader,X=_.fragmentShader,l.update(_),et=l.getVertexShaderID(_),vt=l.getFragmentShaderID(_);let at=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,zt=z.isBatchedMesh===!0,le=!!_.map,Wt=!!_.matcap,de=!!tt,U=!!_.aoMap,Oe=!!_.lightMap,Ot=!!_.bumpMap,kt=!!_.normalMap,bt=!!_.displacementMap,ie=!!_.emissiveMap,Mt=!!_.metalnessMap,M=!!_.roughnessMap,v=_.anisotropy>0,N=_.clearcoat>0,Y=_.dispersion>0,Q=_.iridescence>0,W=_.sheen>0,Ct=_.transmission>0,ot=v&&!!_.anisotropyMap,dt=N&&!!_.clearcoatMap,Xt=N&&!!_.clearcoatNormalMap,J=N&&!!_.clearcoatRoughnessMap,ft=Q&&!!_.iridescenceMap,St=Q&&!!_.iridescenceThicknessMap,qt=W&&!!_.sheenColorMap,pt=W&&!!_.sheenRoughnessMap,Ht=!!_.specularMap,Nt=!!_.specularColorMap,ee=!!_.specularIntensityMap,q=Ct&&!!_.transmissionMap,st=Ct&&!!_.thicknessMap,O=!!_.gradientMap,K=!!_.alphaMap,ht=_.alphaTest>0,lt=!!_.alphaHash,Lt=!!_.extensions,he=Ln;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(he=i.toneMapping);let Me={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:te,fragmentShader:X,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:zt,batchingColor:zt&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Hi,alphaToCoverage:!!_.alphaToCoverage,map:le,matcap:Wt,envMap:de,envMapMode:de&&tt.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:Oe,bumpMap:Ot,normalMap:kt,displacementMap:d&&bt,emissiveMap:ie,normalMapObjectSpace:kt&&_.normalMapType===Kh,normalMapTangentSpace:kt&&_.normalMapType===Vc,metalnessMap:Mt,roughnessMap:M,anisotropy:v,anisotropyMap:ot,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:Q,iridescenceMap:ft,iridescenceThicknessMap:St,sheen:W,sheenColorMap:qt,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:Nt,specularIntensityMap:ee,transmission:Ct,transmissionMap:q,thicknessMap:st,gradientMap:O,opaque:_.transparent===!1&&_.blending===Ei&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:lt,combine:_.combine,mapUv:le&&A(_.map.channel),aoMapUv:U&&A(_.aoMap.channel),lightMapUv:Oe&&A(_.lightMap.channel),bumpMapUv:Ot&&A(_.bumpMap.channel),normalMapUv:kt&&A(_.normalMap.channel),displacementMapUv:bt&&A(_.displacementMap.channel),emissiveMapUv:ie&&A(_.emissiveMap.channel),metalnessMapUv:Mt&&A(_.metalnessMap.channel),roughnessMapUv:M&&A(_.roughnessMap.channel),anisotropyMapUv:ot&&A(_.anisotropyMap.channel),clearcoatMapUv:dt&&A(_.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&A(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&A(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&A(_.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(_.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&A(_.sheenColorMap.channel),sheenRoughnessMapUv:pt&&A(_.sheenRoughnessMap.channel),specularMapUv:Ht&&A(_.specularMap.channel),specularColorMapUv:Nt&&A(_.specularColorMap.channel),specularIntensityMapUv:ee&&A(_.specularIntensityMap.channel),transmissionMapUv:q&&A(_.transmissionMap.channel),thicknessMapUv:st&&A(_.thicknessMap.channel),alphaMapUv:K&&A(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(kt||v),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(le||K),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Bt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:le&&_.map.isVideoTexture===!0&&Ft.getTransfer(_.map.colorSpace)===jt,decodeVideoTextureEmissive:ie&&_.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(_.emissiveMap.colorSpace)===jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ze,flipSided:_.side===Le,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Lt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&_.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(_){let I=[];if(_.shaderID?I.push(_.shaderID):(I.push(_.customVertexShaderID),I.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)I.push(w),I.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(b(I,_),y(I,_),I.push(i.outputColorSpace)),I.push(_.customProgramCacheKey),I.join()}function b(_,I){_.push(I.precision),_.push(I.outputColorSpace),_.push(I.envMapMode),_.push(I.envMapCubeUVHeight),_.push(I.mapUv),_.push(I.alphaMapUv),_.push(I.lightMapUv),_.push(I.aoMapUv),_.push(I.bumpMapUv),_.push(I.normalMapUv),_.push(I.displacementMapUv),_.push(I.emissiveMapUv),_.push(I.metalnessMapUv),_.push(I.roughnessMapUv),_.push(I.anisotropyMapUv),_.push(I.clearcoatMapUv),_.push(I.clearcoatNormalMapUv),_.push(I.clearcoatRoughnessMapUv),_.push(I.iridescenceMapUv),_.push(I.iridescenceThicknessMapUv),_.push(I.sheenColorMapUv),_.push(I.sheenRoughnessMapUv),_.push(I.specularMapUv),_.push(I.specularColorMapUv),_.push(I.specularIntensityMapUv),_.push(I.transmissionMapUv),_.push(I.thicknessMapUv),_.push(I.combine),_.push(I.fogExp2),_.push(I.sizeAttenuation),_.push(I.morphTargetsCount),_.push(I.morphAttributeCount),_.push(I.numDirLights),_.push(I.numPointLights),_.push(I.numSpotLights),_.push(I.numSpotLightMaps),_.push(I.numHemiLights),_.push(I.numRectAreaLights),_.push(I.numDirLightShadows),_.push(I.numPointLightShadows),_.push(I.numSpotLightShadows),_.push(I.numSpotLightShadowsWithMaps),_.push(I.numLightProbes),_.push(I.shadowMapType),_.push(I.toneMapping),_.push(I.numClippingPlanes),_.push(I.numClipIntersection),_.push(I.depthPacking)}function y(_,I){o.disableAll(),I.supportsVertexTextures&&o.enable(0),I.instancing&&o.enable(1),I.instancingColor&&o.enable(2),I.instancingMorph&&o.enable(3),I.matcap&&o.enable(4),I.envMap&&o.enable(5),I.normalMapObjectSpace&&o.enable(6),I.normalMapTangentSpace&&o.enable(7),I.clearcoat&&o.enable(8),I.iridescence&&o.enable(9),I.alphaTest&&o.enable(10),I.vertexColors&&o.enable(11),I.vertexAlphas&&o.enable(12),I.vertexUv1s&&o.enable(13),I.vertexUv2s&&o.enable(14),I.vertexUv3s&&o.enable(15),I.vertexTangents&&o.enable(16),I.anisotropy&&o.enable(17),I.alphaHash&&o.enable(18),I.batching&&o.enable(19),I.dispersion&&o.enable(20),I.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reverseDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.decodeVideoTextureEmissive&&o.enable(20),I.alphaToCoverage&&o.enable(21),_.push(o.mask)}function x(_){let I=m[_.type],w;if(I){let F=en[I];w=zn.clone(F.uniforms)}else w=_.uniforms;return w}function T(_,I){let w;for(let F=0,z=h.length;F<z;F++){let H=h[F];if(H.cacheKey===I){w=H,++w.usedTimes;break}}return w===void 0&&(w=new wg(i,I,_,r),h.push(w)),w}function S(_){if(--_.usedTimes===0){let I=h.indexOf(_);h[I]=h[h.length-1],h.pop(),_.destroy()}}function E(_){l.remove(_)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:L}}function Rg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,A,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:A,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=A,p.group=g),t++,p}function o(u,d,f,m,A,g){let p=a(u,d,f,m,A,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,A,g){let p=a(u,d,f,m,A,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Pg),n.length>1&&n.sort(d||pc),s.length>1&&s.sort(d||pc)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Lg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new gc,i.set(n,[a])):s>=r.length?(a=new gc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Et};break;case"SpotLight":e={position:new D,direction:new D,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Dg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ng=0;function Vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bg(i){let t=new Ug,e=Dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ce,a=new ce;function o(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,m=0,A=0,g=0,p=0,b=0,y=0,x=0,T=0,S=0,E=0;c.sort(Vg);for(let _=0,I=c.length;_<I;_++){let w=c[_],F=w.color,z=w.intensity,H=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*z,u+=F.g*z,d+=F.b*z;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],z);E++}else if(w.isDirectionalLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let tt=w.shadow,k=e.get(w);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=w.shadow.matrix,b++}n.directional[f]=G,f++}else if(w.isSpotLight){let G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(F).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[A]=G;let tt=w.shadow;if(w.map&&(n.spotLightMap[T]=w.map,T++,tt.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[A]=tt.matrix,w.castShadow){let k=e.get(w);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=Z,x++}A++}else if(w.isRectAreaLight){let G=t.get(w);G.color.copy(F).multiplyScalar(z),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=G,g++}else if(w.isPointLight){let G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let tt=w.shadow,k=e.get(w);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,k.shadowCameraNear=tt.camera.near,k.shadowCameraFar=tt.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=w.shadow.matrix,y++}n.point[m]=G,m++}else if(w.isHemisphereLight){let G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(z),G.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==A||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==T||L.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,L.directionalLength=f,L.pointLength=m,L.spotLength=A,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=T,L.numLightProbes=E,n.version=Ng++)}function l(c,h){let u=0,d=0,f=0,m=0,A=0,g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let y=c[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=n.hemi[A];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),A++}}}return{setup:o,setupView:l,state:n}}function mc(i){let t=new Bg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function zg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new mc(i),t.set(s,[o])):r>=a.length?(o=new mc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var xo=class extends yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vo=class extends yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`;function kg(i,t,e){let n=new hs,s=new It,r=new It,a=new ue,o=new xo({depthPacking:Yh}),l=new vo,c={},h=e.maxTextureSize,u={[Dn]:Le,[Le]:Dn,[Ze]:Ze},d=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Fg,fragmentShader:Og}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ae;m.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new fe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let p=this.type;this.render=function(S,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),I=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),F=i.state;F.setBlending(rn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=p!==gn&&this.type===gn,H=p===gn&&this.type!==gn;for(let Z=0,G=S.length;Z<G;Z++){let tt=S[Z],k=tt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let rt=k.getFrameExtents();if(s.multiply(rt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,k.mapSize.y=r.y)),k.map===null||z===!0||H===!0){let _t=this.type!==gn?{minFilter:je,magFilter:je}:{};k.map!==null&&k.map.dispose(),k.map=new qe(s.x,s.y,_t),k.map.texture.name=tt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ut=k.getViewportCount();for(let _t=0;_t<ut;_t++){let Bt=k.getViewport(_t);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),F.viewport(a),k.updateMatrices(tt,_t),n=k.getFrustum(),x(E,L,k.camera,tt,this.type)}k.isPointLightShadow!==!0&&this.type===gn&&b(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(_,I,w)};function b(S,E){let L=t.update(A);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new qe(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,L,d,A,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,L,f,A,null)}function y(S,E,L,_){let I=null,w=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)I=w;else if(I=L.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let F=I.uuid,z=E.uuid,H=c[F];H===void 0&&(H={},c[F]=H);let Z=H[z];Z===void 0&&(Z=I.clone(),H[z]=Z,E.addEventListener("dispose",T)),I=Z}if(I.visible=E.visible,I.wireframe=E.wireframe,_===gn?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:u[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=L}return I}function x(S,E,L,_,I){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===gn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let z=t.update(S),H=S.material;if(Array.isArray(H)){let Z=z.groups;for(let G=0,tt=Z.length;G<tt;G++){let k=Z[G],rt=H[k.materialIndex];if(rt&&rt.visible){let ut=y(S,rt,_,I);S.onBeforeShadow(i,S,E,L,z,ut,k),i.renderBufferDirect(L,null,z,ut,S,k),S.onAfterShadow(i,S,E,L,z,ut,k)}}}else if(H.visible){let Z=y(S,H,_,I);S.onBeforeShadow(i,S,E,L,z,Z,null),i.renderBufferDirect(L,null,z,Z,S,null),S.onAfterShadow(i,S,E,L,z,Z,null)}}let F=S.children;for(let z=0,H=F.length;z<H;z++)x(F[z],E,L,_,I)}function T(S){S.target.removeEventListener("dispose",T);for(let L in c){let _=c[L],I=S.target.uuid;I in _&&(_[I].dispose(),delete _[I])}}}var Hg={[Ca]:ya,[Ia]:ba,[_a]:Sa,[Pi]:Ma,[ya]:Ca,[ba]:Ia,[Sa]:_a,[Ma]:Pi};function Gg(i,t){function e(){let q=!1,st=new ue,O=null,K=new ue(0,0,0,0);return{setMask:function(ht){O!==ht&&!q&&(i.colorMask(ht,ht,ht,ht),O=ht)},setLocked:function(ht){q=ht},setClear:function(ht,lt,Lt,he,Me){Me===!0&&(ht*=he,lt*=he,Lt*=he),st.set(ht,lt,Lt,he),K.equals(st)===!1&&(i.clearColor(ht,lt,Lt,he),K.copy(st))},reset:function(){q=!1,O=null,K.set(-1,0,0,0)}}}function n(){let q=!1,st=!1,O=null,K=null,ht=null;return{setReversed:function(lt){if(st!==lt){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let he=ht;ht=null,this.setClear(he)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?at(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(lt){O!==lt&&!q&&(i.depthMask(lt),O=lt)},setFunc:function(lt){if(st&&(lt=Hg[lt]),K!==lt){switch(lt){case Ca:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case ba:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=lt}},setLocked:function(lt){q=lt},setClear:function(lt){ht!==lt&&(st&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){q=!1,O=null,K=null,ht=null,st=!1}}}function s(){let q=!1,st=null,O=null,K=null,ht=null,lt=null,Lt=null,he=null,Me=null;return{setTest:function(Jt){q||(Jt?at(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Jt){st!==Jt&&!q&&(i.stencilMask(Jt),st=Jt)},setFunc:function(Jt,Ge,ln){(O!==Jt||K!==Ge||ht!==ln)&&(i.stencilFunc(Jt,Ge,ln),O=Jt,K=Ge,ht=ln)},setOp:function(Jt,Ge,ln){(lt!==Jt||Lt!==Ge||he!==ln)&&(i.stencilOp(Jt,Ge,ln),lt=Jt,Lt=Ge,he=ln)},setLocked:function(Jt){q=Jt},setClear:function(Jt){Me!==Jt&&(i.clearStencil(Jt),Me=Jt)},reset:function(){q=!1,st=null,O=null,K=null,ht=null,lt=null,Lt=null,he=null,Me=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,b=null,y=null,x=null,T=null,S=null,E=new Et(0,0,0),L=0,_=!1,I=null,w=null,F=null,z=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=tt>=2);let rt=null,ut={},_t=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),te=new ue().fromArray(_t),X=new ue().fromArray(Bt);function et(q,st,O,K){let ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(q,lt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<O;Lt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}let vt={};vt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Pi),Ot(!1),kt(Cl),at(i.CULL_FACE),U(rn);function at(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Tt(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Pt(q,st){return u[q]!==st?(i.bindFramebuffer(q,st),u[q]=st,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function zt(q,st){let O=f,K=!1;if(q){O=d.get(st),O===void 0&&(O=[],d.set(st,O));let ht=q.textures;if(O.length!==ht.length||O[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Lt=ht.length;lt<Lt;lt++)O[lt]=i.COLOR_ATTACHMENT0+lt;O.length=ht.length,K=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,K=!0);K&&i.drawBuffers(O)}function le(q){return m!==q?(i.useProgram(q),m=q,!0):!1}let Wt={[Zn]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};Wt[Eh]=i.MIN,Wt[wh]=i.MAX;let de={[Th]:i.ZERO,[qh]:i.ONE,[Rh]:i.SRC_COLOR,[xa]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[va]:i.ONE_MINUS_SRC_ALPHA,[Nh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(q,st,O,K,ht,lt,Lt,he,Me,Jt){if(q===rn){A===!0&&(Tt(i.BLEND),A=!1);return}if(A===!1&&(at(i.BLEND),A=!0),q!==Mh){if(q!==g||Jt!==_){if((p!==Zn||x!==Zn)&&(i.blendEquation(i.FUNC_ADD),p=Zn,x=Zn),Jt)switch(q){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ri:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ri:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}b=null,y=null,T=null,S=null,E.set(0,0,0),L=0,g=q,_=Jt}return}ht=ht||st,lt=lt||O,Lt=Lt||K,(st!==p||ht!==x)&&(i.blendEquationSeparate(Wt[st],Wt[ht]),p=st,x=ht),(O!==b||K!==y||lt!==T||Lt!==S)&&(i.blendFuncSeparate(de[O],de[K],de[lt],de[Lt]),b=O,y=K,T=lt,S=Lt),(he.equals(E)===!1||Me!==L)&&(i.blendColor(he.r,he.g,he.b,Me),E.copy(he),L=Me),g=q,_=!1}function Oe(q,st){q.side===Ze?Tt(i.CULL_FACE):at(i.CULL_FACE);let O=q.side===Le;st&&(O=!O),Ot(O),q.blending===Ei&&q.transparent===!1?U(rn):U(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let K=q.stencilWrite;o.setTest(K),K&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ie(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(q){I!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),I=q)}function kt(q){q!==yh?(at(i.CULL_FACE),q!==w&&(q===Cl?i.cullFace(i.BACK):q===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),w=q}function bt(q){q!==F&&(G&&i.lineWidth(q),F=q)}function ie(q,st,O){q?(at(i.POLYGON_OFFSET_FILL),(z!==st||H!==O)&&(i.polygonOffset(st,O),z=st,H=O)):Tt(i.POLYGON_OFFSET_FILL)}function Mt(q){q?at(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function M(q){q===void 0&&(q=i.TEXTURE0+Z-1),rt!==q&&(i.activeTexture(q),rt=q)}function v(q,st,O){O===void 0&&(rt===null?O=i.TEXTURE0+Z-1:O=rt);let K=ut[O];K===void 0&&(K={type:void 0,texture:void 0},ut[O]=K),(K.type!==q||K.texture!==st)&&(rt!==O&&(i.activeTexture(O),rt=O),i.bindTexture(q,st||vt[q]),K.type=q,K.texture=st)}function N(){let q=ut[rt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(q){te.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),te.copy(q))}function pt(q){X.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),X.copy(q))}function Ht(q,st){let O=c.get(st);O===void 0&&(O=new WeakMap,c.set(st,O));let K=O.get(q);K===void 0&&(K=i.getUniformBlockIndex(st,q.name),O.set(q,K))}function Nt(q,st){let K=c.get(st).get(q);l.get(st)!==K&&(i.uniformBlockBinding(st,K,q.__bindingPointIndex),l.set(st,K))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ut={},u={},d=new WeakMap,f=[],m=null,A=!1,g=null,p=null,b=null,y=null,x=null,T=null,S=null,E=new Et(0,0,0),L=0,_=!1,I=null,w=null,F=null,z=null,H=null,te.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Tt,bindFramebuffer:Pt,drawBuffers:zt,useProgram:le,setBlending:U,setMaterial:Oe,setFlipSided:Ot,setCullFace:kt,setLineWidth:bt,setPolygonOffset:ie,setScissorTest:Mt,activeTexture:M,bindTexture:v,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:ft,texImage3D:St,updateUBOMapping:Ht,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:J,texSubImage2D:W,texSubImage3D:Ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:qt,viewport:pt,reset:ee}}function Ac(i,t,e,n){let s=Wg(n);switch(e){case qc:return i*t;case Pc:return i*t;case Lc:return i*t*2;case Uc:return i*t/s.components*s.byteLength;case Yo:return i*t/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case Ko:return i*t*2/s.components*s.byteLength;case Rc:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case Zo:return i*t*4/s.components*s.byteLength;case Ks:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case La:return Math.max(i,8)*Math.max(t,8)/2;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Js:case Ja:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nc:case to:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eo:case no:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wg(i){switch(i){case Cn:case Ec:return{byteLength:1,components:1};case cs:case wc:case $e:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case $n:case Go:case An:return{byteLength:4,components:1};case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,v){return f?new OffscreenCanvas(M,v):er("canvas")}function A(M,v,N){let Y=1,Q=Mt(M);if((Q.width>N||Q.height>N)&&(Y=N/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(Y*Q.width),Ct=Math.floor(Y*Q.height);u===void 0&&(u=m(W,Ct));let ot=v?m(W,Ct):u;return ot.width=W,ot.height=Ct,ot.getContext("2d").drawImage(M,0,0,W,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Ct+")."),ot}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function g(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(M,v,N,Y,Q=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=v;if(v===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),v===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),v===i.RGBA){let Ct=Q?Er:Ft.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=Ct===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(M,v){let N;return M?v===null||v===$n||v===Di?N=i.DEPTH24_STENCIL8:v===An?N=i.DEPTH32F_STENCIL8:v===cs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$n||v===Di?N=i.DEPTH_COMPONENT24:v===An?N=i.DEPTH_COMPONENT32F:v===cs&&(N=i.DEPTH_COMPONENT16),N}function T(M,v){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==je&&M.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function S(M){let v=M.target;v.removeEventListener("dispose",S),L(v),v.isVideoTexture&&h.delete(v)}function E(M){let v=M.target;v.removeEventListener("dispose",E),I(v)}function L(M){let v=n.get(M);if(v.__webglInit===void 0)return;let N=M.source,Y=d.get(N);if(Y){let Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(M),Object.keys(Y).length===0&&d.delete(N)}n.remove(M)}function _(M){let v=n.get(M);i.deleteTexture(v.__webglTexture);let N=M.source,Y=d.get(N);delete Y[v.__cacheKey],a.memory.textures--}function I(M){let v=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let N=M.textures;for(let Y=0,Q=N.length;Y<Q;Y++){let W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(M)}let w=0;function F(){w=0}function z(){let M=w;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),w+=1,M}function H(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Z(M,v){let N=n.get(M);if(M.isVideoTexture&&bt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,M,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function G(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function tt(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function k(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){et(N,M,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}let rt={[Ta]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},ut={[je]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Fr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},_t={[Zh]:i.NEVER,[eu]:i.ALWAYS,[Qh]:i.LESS,[Bc]:i.LEQUAL,[jh]:i.EQUAL,[tu]:i.GEQUAL,[Jh]:i.GREATER,[$h]:i.NOTEQUAL};function Bt(M,v){if(v.type===An&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===Fr||v.magFilter===ys||v.magFilter===Jn||v.minFilter===sn||v.minFilter===Fr||v.minFilter===ys||v.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,rt[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,rt[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,rt[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ut[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==ys&&v.minFilter!==Jn||v.type===An&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function te(M,v){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",S));let Y=v.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let W=H(v);if(W!==M.__cacheKey){Q[W]===void 0&&(Q[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[W].usedTimes++;let Ct=Q[M.__cacheKey];Ct!==void 0&&(Q[M.__cacheKey].usedTimes--,Ct.usedTimes===0&&_(v)),M.__cacheKey=W,M.__webglTexture=Q[W].texture}return N}function X(M,v,N){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=te(M,v),W=v.source;e.bindTexture(Y,M.__webglTexture,i.TEXTURE0+N);let Ct=n.get(W);if(W.version!==Ct.__version||Q===!0){e.activeTexture(i.TEXTURE0+N);let ot=Ft.getPrimaries(Ft.workingColorSpace),dt=v.colorSpace===Rn?null:Ft.getPrimaries(v.colorSpace),Xt=v.colorSpace===Rn||ot===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let J=A(v.image,!1,s.maxTextureSize);J=ie(v,J);let ft=r.convert(v.format,v.colorSpace),St=r.convert(v.type),qt=y(v.internalFormat,ft,St,v.colorSpace,v.isVideoTexture);Bt(Y,v);let pt,Ht=v.mipmaps,Nt=v.isVideoTexture!==!0,ee=Ct.__version===void 0||Q===!0,q=W.dataReady,st=T(v,J);if(v.isDepthTexture)qt=x(v.format===Ni,v.type),ee&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,qt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,qt,J.width,J.height,0,ft,St,null));else if(v.isDataTexture)if(Ht.length>0){Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,st,qt,Ht[0].width,Ht[0].height);for(let O=0,K=Ht.length;O<K;O++)pt=Ht[O],Nt?q&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,pt.width,pt.height,ft,St,pt.data):e.texImage2D(i.TEXTURE_2D,O,qt,pt.width,pt.height,0,ft,St,pt.data);v.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(i.TEXTURE_2D,st,qt,J.width,J.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ft,St,J.data)):e.texImage2D(i.TEXTURE_2D,0,qt,J.width,J.height,0,ft,St,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,qt,Ht[0].width,Ht[0].height,J.depth);for(let O=0,K=Ht.length;O<K;O++)if(pt=Ht[O],v.format!==Qe)if(ft!==null)if(Nt){if(q)if(v.layerUpdates.size>0){let ht=Ac(pt.width,pt.height,v.format,v.type);for(let lt of v.layerUpdates){let Lt=pt.data.subarray(lt*ht/pt.data.BYTES_PER_ELEMENT,(lt+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,lt,pt.width,pt.height,1,ft,Lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,pt.width,pt.height,J.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,qt,pt.width,pt.height,J.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,pt.width,pt.height,J.depth,ft,St,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,qt,pt.width,pt.height,J.depth,0,ft,St,pt.data)}else{Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,st,qt,Ht[0].width,Ht[0].height);for(let O=0,K=Ht.length;O<K;O++)pt=Ht[O],v.format!==Qe?ft!==null?Nt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,O,qt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?q&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,pt.width,pt.height,ft,St,pt.data):e.texImage2D(i.TEXTURE_2D,O,qt,pt.width,pt.height,0,ft,St,pt.data)}else if(v.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,qt,J.width,J.height,J.depth),q)if(v.layerUpdates.size>0){let O=Ac(J.width,J.height,v.format,v.type);for(let K of v.layerUpdates){let ht=J.data.subarray(K*O/J.data.BYTES_PER_ELEMENT,(K+1)*O/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,ft,St,ht)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,St,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,J.width,J.height,J.depth,0,ft,St,J.data);else if(v.isData3DTexture)Nt?(ee&&e.texStorage3D(i.TEXTURE_3D,st,qt,J.width,J.height,J.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,St,J.data)):e.texImage3D(i.TEXTURE_3D,0,qt,J.width,J.height,J.depth,0,ft,St,J.data);else if(v.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(i.TEXTURE_2D,st,qt,J.width,J.height);else{let O=J.width,K=J.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,qt,O,K,0,ft,St,null),O>>=1,K>>=1}}else if(Ht.length>0){if(Nt&&ee){let O=Mt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,st,qt,O.width,O.height)}for(let O=0,K=Ht.length;O<K;O++)pt=Ht[O],Nt?q&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,ft,St,pt):e.texImage2D(i.TEXTURE_2D,O,qt,ft,St,pt);v.generateMipmaps=!1}else if(Nt){if(ee){let O=Mt(J);e.texStorage2D(i.TEXTURE_2D,st,qt,O.width,O.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,St,J)}else e.texImage2D(i.TEXTURE_2D,0,qt,ft,St,J);g(v)&&p(Y),Ct.__version=W.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function et(M,v,N){if(v.image.length!==6)return;let Y=te(M,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let W=n.get(Q);if(Q.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let Ct=Ft.getPrimaries(Ft.workingColorSpace),ot=v.colorSpace===Rn?null:Ft.getPrimaries(v.colorSpace),dt=v.colorSpace===Rn||Ct===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Xt=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Xt&&!J?ft[K]=A(v.image[K],!0,s.maxCubemapSize):ft[K]=J?v.image[K].image:v.image[K],ft[K]=ie(v,ft[K]);let St=ft[0],qt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),Ht=y(v.internalFormat,qt,pt,v.colorSpace),Nt=v.isVideoTexture!==!0,ee=W.__version===void 0||Y===!0,q=Q.dataReady,st=T(v,St);Bt(i.TEXTURE_CUBE_MAP,v);let O;if(Xt){Nt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ht,St.width,St.height);for(let K=0;K<6;K++){O=ft[K].mipmaps;for(let ht=0;ht<O.length;ht++){let lt=O[ht];v.format!==Qe?qt!==null?Nt?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,lt.width,lt.height,qt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,lt.width,lt.height,qt,pt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Ht,lt.width,lt.height,0,qt,pt,lt.data)}}}else{if(O=v.mipmaps,Nt&&ee){O.length>0&&st++;let K=Mt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(J){Nt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,qt,pt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ft[K].width,ft[K].height,0,qt,pt,ft[K].data);for(let ht=0;ht<O.length;ht++){let Lt=O[ht].image[K].image;Nt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Lt.width,Lt.height,qt,pt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Ht,Lt.width,Lt.height,0,qt,pt,Lt.data)}}else{Nt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,qt,pt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,qt,pt,ft[K]);for(let ht=0;ht<O.length;ht++){let lt=O[ht];Nt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,qt,pt,lt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Ht,qt,pt,lt.image[K])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),W.__version=Q.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function vt(M,v,N,Y,Q,W){let Ct=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),dt=y(N.internalFormat,Ct,ot,N.colorSpace),Xt=n.get(v),J=n.get(N);if(J.__renderTarget=v,!Xt.__hasExternalTextures){let ft=Math.max(1,v.width>>W),St=Math.max(1,v.height>>W);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,W,dt,ft,St,v.depth,0,Ct,ot,null):e.texImage2D(Q,W,dt,ft,St,0,Ct,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,J.__webglTexture,0,Ot(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,J.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(M,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer){let Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,W=x(v.stencilBuffer,Q),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Ot(v);kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,W,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,M)}else{let Y=v.textures;for(let Q=0;Q<Y.length;Q++){let W=Y[Q],Ct=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),dt=y(W.internalFormat,Ct,ot,W.colorSpace),Xt=Ot(v);N&&kt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,dt,v.width,v.height):kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let Q=Y.__webglTexture,W=Ot(v);if(v.depthTexture.format===wi)kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ni)kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(M){let v=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let Y=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,M)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),at(v.__webglDepthbuffer[Y],M,!1);else{let Q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),at(v.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(M,v,N){let Y=n.get(M);v!==void 0&&vt(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pt(M)}function le(M){let v=M.texture,N=n.get(M),Y=n.get(v);M.addEventListener("dispose",E);let Q=M.textures,W=M.isWebGLCubeRenderTarget===!0,Ct=Q.length>1;if(Ct||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let dt=0;dt<v.mipmaps.length;dt++)N.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else N.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)N.__webglFramebuffer[ot]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ot=0,dt=Q.length;ot<dt;ot++){let Xt=n.get(Q[ot]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&kt(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){let dt=Q[ot];N.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);let Xt=r.convert(dt.format,dt.colorSpace),J=r.convert(dt.type),ft=y(dt.internalFormat,Xt,J,dt.colorSpace,M.isXRRenderTarget===!0),St=Ot(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),at(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)vt(N.__webglFramebuffer[ot][dt],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else vt(N.__webglFramebuffer[ot],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ot=0,dt=Q.length;ot<dt;ot++){let Xt=Q[ot],J=n.get(Xt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Bt(i.TEXTURE_2D,Xt),vt(N.__webglFramebuffer,M,Xt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),g(Xt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ot=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Bt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)vt(N.__webglFramebuffer[dt],M,v,i.COLOR_ATTACHMENT0,ot,dt);else vt(N.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,ot,0);g(v)&&p(ot),e.unbindTexture()}M.depthBuffer&&Pt(M)}function Wt(M){let v=M.textures;for(let N=0,Y=v.length;N<Y;N++){let Q=v[N];if(g(Q)){let W=b(M),Ct=n.get(Q).__webglTexture;e.bindTexture(W,Ct),p(W),e.unbindTexture()}}}let de=[],U=[];function Oe(M){if(M.samples>0){if(kt(M)===!1){let v=M.textures,N=M.width,Y=M.height,Q=i.COLOR_BUFFER_BIT,W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(M),ot=v.length>1;if(ot)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Xt=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,Q,i.NEAREST),l===!0&&(de.length=0,U.length=0,de.push(i.COLOR_ATTACHMENT0+dt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(de.push(W),U.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Xt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let v=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ot(M){return Math.min(s.maxSamples,M.samples)}function kt(M){let v=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(M){let v=a.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function ie(M,v){let N=M.colorSpace,Y=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==Hi&&N!==Rn&&(Ft.getTransfer(N)===jt?(Y!==Qe||Q!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Mt(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=k,this.rebindTextures=zt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=kt}function Yg(i,t){function e(n,s=Rn){let r,a=Ft.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.BYTE;if(n===wc)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===$e)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Rc)return i.RGB;if(n===Qe)return i.RGBA;if(n===Pc)return i.LUMINANCE;if(n===Lc)return i.LUMINANCE_ALPHA;if(n===wi)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===Uc)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===Dc)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===Ks||n===Zs||n===Qs||n===js)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Pa||n===La||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Na||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Na)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===za||n===Fa||n===Oa||n===ka||n===Ha||n===Ga||n===Wa||n===Xa||n===Ya||n===Ka||n===Za||n===Qa||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===Ja||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Js)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===to||n===eo||n===no)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Co=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Gt=class extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kg={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let g=e.getJointPose(A,n),p=this._getHandJoint(c,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`,yo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:Zg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Io=class extends Nn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,A=new yo,g=e.getContextAttributes(),p=null,b=null,y=[],x=[],T=new It,S=null,E=new Te;E.viewport=new ue;let L=new Te;L.viewport=new ue;let _=[E,L],I=new Co,w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=y[X];return et===void 0&&(et=new ls,y[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=y[X];return et===void 0&&(et=new ls,y[X]=et),et.getGripSpace()},this.getHand=function(X){let et=y[X];return et===void 0&&(et=new ls,y[X]=et),et.getHandSpace()};function z(X){let et=x.indexOf(X.inputSource);if(et===-1)return;let vt=y[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<y.length;X++){let et=x[X];et!==null&&(x[X]=null,y[X].disconnect(et))}w=null,F=null,A.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new qe(f.framebufferWidth,f.framebufferHeight,{format:Qe,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,vt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?Ni:wi,vt=g.stencil?Di:$n);let Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new qe(d.textureWidth,d.textureHeight,{format:Qe,type:Cn,depthTexture:new ur(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Z(X){for(let et=0;et<X.removed.length;et++){let vt=X.removed[et],at=x.indexOf(vt);at>=0&&(x[at]=null,y[at].disconnect(vt))}for(let et=0;et<X.added.length;et++){let vt=X.added[et],at=x.indexOf(vt);if(at===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=x.length){x.push(vt),at=Pt;break}else if(x[Pt]===null){x[Pt]=vt,at=Pt;break}if(at===-1)break}let Tt=y[at];Tt&&Tt.connect(vt)}}let G=new D,tt=new D;function k(X,et,vt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);let at=G.distanceTo(tt),Tt=et.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,zt=Tt[14]/(Tt[10]-1),le=Tt[14]/(Tt[10]+1),Wt=(Tt[9]+1)/Tt[5],de=(Tt[9]-1)/Tt[5],U=(Tt[8]-1)/Tt[0],Oe=(Pt[8]+1)/Pt[0],Ot=zt*U,kt=zt*Oe,bt=at/(-U+Oe),ie=bt*-U;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Mt=zt+bt,M=le+bt,v=Ot-ie,N=kt+(at-ie),Y=Wt*le/M*Mt,Q=de*le/M*Mt;X.projectionMatrix.makePerspective(v,N,Y,Q,Mt,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,vt=X.far;A.texture!==null&&(A.depthNear>0&&(et=A.depthNear),A.depthFar>0&&(vt=A.depthFar)),I.near=L.near=E.near=et,I.far=L.far=E.far=vt,(w!==I.near||F!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),w=I.near,F=I.far),E.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,I.layers.mask=E.layers.mask|L.layers.mask;let at=X.parent,Tt=I.cameras;rt(I,at);for(let Pt=0;Pt<Tt.length;Pt++)rt(Tt[Pt],at);Tt.length===2?k(I,E,L):I.projectionMatrix.copy(E.projectionMatrix),ut(X,I,at)};function ut(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ro*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(I)};let _t=null;function Bt(X,et){if(h=et.getViewerPose(c||a),m=et,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let at=!1;vt.length!==I.cameras.length&&(I.cameras.length=0,at=!0);for(let Pt=0;Pt<vt.length;Pt++){let zt=vt[Pt],le=null;if(f!==null)le=f.getViewport(zt);else{let de=u.getViewSubImage(d,zt);le=de.viewport,Pt===0&&(t.setRenderTargetTextures(b,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(b))}let Wt=_[Pt];Wt===void 0&&(Wt=new Te,Wt.layers.enable(Pt),Wt.viewport=new ue,_[Pt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),Pt===0&&(I.matrix.copy(Wt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),at===!0&&I.cameras.push(Wt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Pt=u.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&A.init(t,Pt,s.renderState)}}for(let vt=0;vt<y.length;vt++){let at=x[vt],Tt=y[vt];at!==null&&Tt!==void 0&&Tt.update(at,et,c||a)}_t&&_t(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let te=new kc;te.setAnimationLoop(Bt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}},Yn=new an,jg=new ce;function Jg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Oc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),A(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Le&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Le&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),y=b.envMap,x=b.envMapRotation;y&&(g.envMap.value=y,Yn.copy(x),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),g.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Yn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $g(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let x=y.program;n.uniformBlockBinding(b,x)}function c(b,y){let x=s[b.id];x===void 0&&(m(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",g));let T=y.program;n.updateUBOMapping(b,T);let S=t.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let y=u();b.__bindingPointIndex=y;let x=i.createBuffer(),T=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],x=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,E=x.length;S<E;S++){let L=Array.isArray(x[S])?x[S]:[x[S]];for(let _=0,I=L.length;_<I;_++){let w=L[_];if(f(w,S,_,T)===!0){let F=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],H=0;for(let Z=0;Z<z.length;Z++){let G=z[Z],tt=A(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+H,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,x,T){let S=b.value,E=y+"_"+x;if(T[E]===void 0)return typeof S=="number"||typeof S=="boolean"?T[E]=S:T[E]=S.clone(),!0;{let L=T[E];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return T[E]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(b){let y=b.uniforms,x=0,T=16;for(let E=0,L=y.length;E<L;E++){let _=Array.isArray(y[E])?y[E]:[y[E]];for(let I=0,w=_.length;I<w;I++){let F=_[I],z=Array.isArray(F.value)?F.value:[F.value];for(let H=0,Z=z.length;H<Z;H++){let G=z[H],tt=A(G),k=x%T,rt=k%tt.boundary,ut=k+rt;x+=rt,ut!==0&&T-ut<tt.storage&&(x+=T-ut),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=tt.storage}}}let S=x%T;return S>0&&(x+=T-S),b.__size=x,b.__cache={},this}function A(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){let y=b.target;y.removeEventListener("dispose",g);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var dr=class{constructor(t={}){let{canvas:e=iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),A=new Int32Array(4),g=null,p=null,b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Ln,this.toneMappingExposure=1;let x=this,T=!1,S=0,E=0,L=null,_=-1,I=null,w=new ue,F=new ue,z=null,H=new Et(0),Z=0,G=e.width,tt=e.height,k=1,rt=null,ut=null,_t=new ue(0,0,G,tt),Bt=new ue(0,0,G,tt),te=!1,X=new hs,et=!1,vt=!1,at=new ce,Tt=new ce,Pt=new D,zt=new ue,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function de(){return L===null?k:1}let U=n;function Oe(C,R){return e.getContext(C,R)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${No}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){let R="webgl2";if(U=Oe(R,C),U===null)throw Oe(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ot,kt,bt,ie,Mt,M,v,N,Y,Q,W,Ct,ot,dt,Xt,J,ft,St,qt,pt,Ht,Nt,ee,q;function st(){Ot=new gp(U),Ot.init(),Nt=new Yg(U,Ot),kt=new cp(U,Ot,t,Nt),bt=new Gg(U,Ot),kt.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),ie=new xp(U),Mt=new Rg,M=new Xg(U,Ot,bt,Mt,kt,Nt,ie),v=new up(x),N=new pp(x),Y=new Mu(U),ee=new op(U,Y),Q=new mp(U,Y,ie,ee),W=new Cp(U,Q,Y,ie),qt=new vp(U,kt,M),J=new hp(Mt),Ct=new qg(x,v,N,Ot,kt,ee,J),ot=new Jg(x,Mt),dt=new Lg,Xt=new zg(Ot),St=new ap(x,v,N,bt,W,f,l),ft=new kg(x,W,kt),q=new $g(U,ie,kt,bt),pt=new lp(U,Ot,ie),Ht=new Ap(U,Ot,ie),ie.programs=Ct.programs,x.capabilities=kt,x.extensions=Ot,x.properties=Mt,x.renderLists=dt,x.shadowMap=ft,x.state=bt,x.info=ie}st();let O=new Io(x,U);this.xr=O,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=Ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(G,tt,!1))},this.getSize=function(C){return C.set(G,tt)},this.setSize=function(C,R,V=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,tt=R,e.width=Math.floor(C*k),e.height=Math.floor(R*k),V===!0&&(e.style.width=C+"px",e.style.height=R+"px"),this.setViewport(0,0,C,R)},this.getDrawingBufferSize=function(C){return C.set(G*k,tt*k).floor()},this.setDrawingBufferSize=function(C,R,V){G=C,tt=R,k=V,e.width=Math.floor(C*V),e.height=Math.floor(R*V),this.setViewport(0,0,C,R)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(_t)},this.setViewport=function(C,R,V,B){C.isVector4?_t.set(C.x,C.y,C.z,C.w):_t.set(C,R,V,B),bt.viewport(w.copy(_t).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(Bt)},this.setScissor=function(C,R,V,B){C.isVector4?Bt.set(C.x,C.y,C.z,C.w):Bt.set(C,R,V,B),bt.scissor(F.copy(Bt).multiplyScalar(k).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(C){bt.setScissorTest(te=C)},this.setOpaqueSort=function(C){rt=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(C=!0,R=!0,V=!0){let B=0;if(C){let P=!1;if(L!==null){let $=L.texture.format;P=$===Zo||$===Ko||$===Yo}if(P){let $=L.texture.type,ct=$===Cn||$===$n||$===cs||$===Di||$===Wo||$===Xo,mt=St.getClearColor(),At=St.getClearAlpha(),Rt=mt.r,Ut=mt.g,xt=mt.b;ct?(m[0]=Rt,m[1]=Ut,m[2]=xt,m[3]=At,U.clearBufferuiv(U.COLOR,0,m)):(A[0]=Rt,A[1]=Ut,A[2]=xt,A[3]=At,U.clearBufferiv(U.COLOR,0,A))}else B|=U.COLOR_BUFFER_BIT}R&&(B|=U.DEPTH_BUFFER_BIT),V&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),dt.dispose(),Xt.dispose(),Mt.dispose(),v.dispose(),N.dispose(),W.dispose(),ee.dispose(),q.dispose(),Ct.dispose(),O.dispose(),O.removeEventListener("sessionstart",dl),O.removeEventListener("sessionend",fl),On.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let C=ie.autoReset,R=ft.enabled,V=ft.autoUpdate,B=ft.needsUpdate,P=ft.type;st(),ie.autoReset=C,ft.enabled=R,ft.autoUpdate=V,ft.needsUpdate=B,ft.type=P}function lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){let R=C.target;R.removeEventListener("dispose",Lt),he(R)}function he(C){Me(C),Mt.remove(C)}function Me(C){let R=Mt.get(C).programs;R!==void 0&&(R.forEach(function(V){Ct.releaseProgram(V)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,R,V,B,P,$){R===null&&(R=le);let ct=P.isMesh&&P.matrixWorld.determinant()<0,mt=xh(C,R,V,B,P);bt.setMaterial(B,ct);let At=V.index,Rt=1;if(B.wireframe===!0){if(At=Q.getWireframeAttribute(V),At===void 0)return;Rt=2}let Ut=V.drawRange,xt=V.attributes.position,Kt=Ut.start*Rt,ne=(Ut.start+Ut.count)*Rt;$!==null&&(Kt=Math.max(Kt,$.start*Rt),ne=Math.min(ne,($.start+$.count)*Rt)),At!==null?(Kt=Math.max(Kt,0),ne=Math.min(ne,At.count)):xt!=null&&(Kt=Math.max(Kt,0),ne=Math.min(ne,xt.count));let se=ne-Kt;if(se<0||se===1/0)return;ee.setup(P,B,mt,V,At);let Re,Zt=pt;if(At!==null&&(Re=Y.get(At),Zt=Ht,Zt.setIndex(Re)),P.isMesh)B.wireframe===!0?(bt.setLineWidth(B.wireframeLinewidth*de()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(P.isLine){let yt=B.linewidth;yt===void 0&&(yt=1),bt.setLineWidth(yt*de()),P.isLineSegments?Zt.setMode(U.LINES):P.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else P.isPoints?Zt.setMode(U.POINTS):P.isSprite&&Zt.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Zt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Zt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let yt=P._multiDrawStarts,cn=P._multiDrawCounts,Qt=P._multiDrawCount,We=At?Y.get(At).bytesPerElement:1,oi=Mt.get(B).currentProgram.getUniforms();for(let De=0;De<Qt;De++)oi.setValue(U,"_gl_DrawID",De),Zt.render(yt[De]/We,cn[De])}else if(P.isInstancedMesh)Zt.renderInstances(Kt,se,P.count);else if(V.isInstancedBufferGeometry){let yt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,cn=Math.min(V.instanceCount,yt);Zt.renderInstances(Kt,se,cn)}else Zt.render(Kt,se)};function Jt(C,R,V){C.transparent===!0&&C.side===Ze&&C.forceSinglePass===!1?(C.side=Le,C.needsUpdate=!0,Cs(C,R,V),C.side=Dn,C.needsUpdate=!0,Cs(C,R,V),C.side=Ze):Cs(C,R,V)}this.compile=function(C,R,V=null){V===null&&(V=C),p=Xt.get(V),p.init(R),y.push(p),V.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),C!==V&&C.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let B=new Set;return C.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let $=P.material;if($)if(Array.isArray($))for(let ct=0;ct<$.length;ct++){let mt=$[ct];Jt(mt,V,P),B.add(mt)}else Jt($,V,P),B.add($)}),y.pop(),p=null,B},this.compileAsync=function(C,R,V=null){let B=this.compile(C,R,V);return new Promise(P=>{function $(){if(B.forEach(function(ct){Mt.get(ct).currentProgram.isReady()&&B.delete(ct)}),B.size===0){P(C);return}setTimeout($,10)}Ot.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Ge=null;function ln(C){Ge&&Ge(C)}function dl(){On.stop()}function fl(){On.start()}let On=new kc;On.setAnimationLoop(ln),typeof self!="undefined"&&On.setContext(self),this.setAnimationLoop=function(C){Ge=C,O.setAnimationLoop(C),C===null?On.stop():On.start()},O.addEventListener("sessionstart",dl),O.addEventListener("sessionend",fl),this.render=function(C,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(R),R=O.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,R,L),p=Xt.get(C,y.length),p.init(R),y.push(p),Tt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),X.setFromProjectionMatrix(Tt),vt=this.localClippingEnabled,et=J.init(this.clippingPlanes,vt),g=dt.get(C,b.length),g.init(),b.push(g),O.enabled===!0&&O.isPresenting===!0){let $=x.xr.getDepthSensingMesh();$!==null&&zr($,R,-1/0,x.sortObjects)}zr(C,R,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(rt,ut),Wt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Wt&&St.addToRenderList(g,C),this.info.render.frame++,et===!0&&J.beginShadows();let V=p.state.shadowsArray;ft.render(V,C,R),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,P=g.transmissive;if(p.setupLights(),R.isArrayCamera){let $=R.cameras;if(P.length>0)for(let ct=0,mt=$.length;ct<mt;ct++){let At=$[ct];gl(B,P,C,At)}Wt&&St.render(C);for(let ct=0,mt=$.length;ct<mt;ct++){let At=$[ct];pl(g,C,At,At.viewport)}}else P.length>0&&gl(B,P,C,R),Wt&&St.render(C),pl(g,C,R);L!==null&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(x,C,R),ee.resetDefaultState(),_=-1,I=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&J.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function zr(C,R,V,B){if(C.visible===!1)return;if(C.layers.test(R.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(R);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){B&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Tt);let ct=W.update(C),mt=C.material;mt.visible&&g.push(C,ct,mt,V,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let ct=W.update(C),mt=C.material;if(B&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),zt.copy(ct.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(Tt)),Array.isArray(mt)){let At=ct.groups;for(let Rt=0,Ut=At.length;Rt<Ut;Rt++){let xt=At[Rt],Kt=mt[xt.materialIndex];Kt&&Kt.visible&&g.push(C,ct,Kt,V,zt.z,xt)}}else mt.visible&&g.push(C,ct,mt,V,zt.z,null)}}let $=C.children;for(let ct=0,mt=$.length;ct<mt;ct++)zr($[ct],R,V,B)}function pl(C,R,V,B){let P=C.opaque,$=C.transmissive,ct=C.transparent;p.setupLightsView(V),et===!0&&J.setGlobalState(x.clippingPlanes,V),B&&bt.viewport(w.copy(B)),P.length>0&&vs(P,R,V),$.length>0&&vs($,R,V),ct.length>0&&vs(ct,R,V),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function gl(C,R,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new qe(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?$e:Cn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace}));let $=p.state.transmissionRenderTarget[B.id],ct=B.viewport||w;$.setSize(ct.z,ct.w);let mt=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(H),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&St.render(V);let At=x.toneMapping;x.toneMapping=Ln;let Rt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),et===!0&&J.setGlobalState(x.clippingPlanes,B),vs(C,V,B),M.updateMultisampleRenderTarget($),M.updateRenderTargetMipmap($),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,Kt=R.length;xt<Kt;xt++){let ne=R[xt],se=ne.object,Re=ne.geometry,Zt=ne.material,yt=ne.group;if(Zt.side===Ze&&se.layers.test(B.layers)){let cn=Zt.side;Zt.side=Le,Zt.needsUpdate=!0,ml(se,V,B,Re,Zt,yt),Zt.side=cn,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(M.updateMultisampleRenderTarget($),M.updateRenderTargetMipmap($))}x.setRenderTarget(mt),x.setClearColor(H,Z),Rt!==void 0&&(B.viewport=Rt),x.toneMapping=At}function vs(C,R,V){let B=R.isScene===!0?R.overrideMaterial:null;for(let P=0,$=C.length;P<$;P++){let ct=C[P],mt=ct.object,At=ct.geometry,Rt=B===null?ct.material:B,Ut=ct.group;mt.layers.test(V.layers)&&ml(mt,R,V,At,Rt,Ut)}}function ml(C,R,V,B,P,$){C.onBeforeRender(x,R,V,B,P,$),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),P.onBeforeRender(x,R,V,B,C,$),P.transparent===!0&&P.side===Ze&&P.forceSinglePass===!1?(P.side=Le,P.needsUpdate=!0,x.renderBufferDirect(V,R,B,P,C,$),P.side=Dn,P.needsUpdate=!0,x.renderBufferDirect(V,R,B,P,C,$),P.side=Ze):x.renderBufferDirect(V,R,B,P,C,$),C.onAfterRender(x,R,V,B,P,$)}function Cs(C,R,V){R.isScene!==!0&&(R=le);let B=Mt.get(C),P=p.state.lights,$=p.state.shadowsArray,ct=P.state.version,mt=Ct.getParameters(C,P.state,$,R,V),At=Ct.getProgramCacheKey(mt),Rt=B.programs;B.environment=C.isMeshStandardMaterial?R.environment:null,B.fog=R.fog,B.envMap=(C.isMeshStandardMaterial?N:v).get(C.envMap||B.environment),B.envMapRotation=B.environment!==null&&C.envMap===null?R.environmentRotation:C.envMapRotation,Rt===void 0&&(C.addEventListener("dispose",Lt),Rt=new Map,B.programs=Rt);let Ut=Rt.get(At);if(Ut!==void 0){if(B.currentProgram===Ut&&B.lightsStateVersion===ct)return xl(C,mt),Ut}else mt.uniforms=Ct.getUniforms(C),C.onBeforeCompile(mt,x),Ut=Ct.acquireProgram(mt,At),Rt.set(At,Ut),B.uniforms=mt.uniforms;let xt=B.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(xt.clippingPlanes=J.uniform),xl(C,mt),B.needsLights=Ch(C),B.lightsStateVersion=ct,B.needsLights&&(xt.ambientLightColor.value=P.state.ambient,xt.lightProbe.value=P.state.probe,xt.directionalLights.value=P.state.directional,xt.directionalLightShadows.value=P.state.directionalShadow,xt.spotLights.value=P.state.spot,xt.spotLightShadows.value=P.state.spotShadow,xt.rectAreaLights.value=P.state.rectArea,xt.ltc_1.value=P.state.rectAreaLTC1,xt.ltc_2.value=P.state.rectAreaLTC2,xt.pointLights.value=P.state.point,xt.pointLightShadows.value=P.state.pointShadow,xt.hemisphereLights.value=P.state.hemi,xt.directionalShadowMap.value=P.state.directionalShadowMap,xt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,xt.spotShadowMap.value=P.state.spotShadowMap,xt.spotLightMatrix.value=P.state.spotLightMatrix,xt.spotLightMap.value=P.state.spotLightMap,xt.pointShadowMap.value=P.state.pointShadowMap,xt.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=Ut,B.uniformsList=null,Ut}function Al(C){if(C.uniformsList===null){let R=C.currentProgram.getUniforms();C.uniformsList=qi.seqWithValue(R.seq,C.uniforms)}return C.uniformsList}function xl(C,R){let V=Mt.get(C);V.outputColorSpace=R.outputColorSpace,V.batching=R.batching,V.batchingColor=R.batchingColor,V.instancing=R.instancing,V.instancingColor=R.instancingColor,V.instancingMorph=R.instancingMorph,V.skinning=R.skinning,V.morphTargets=R.morphTargets,V.morphNormals=R.morphNormals,V.morphColors=R.morphColors,V.morphTargetsCount=R.morphTargetsCount,V.numClippingPlanes=R.numClippingPlanes,V.numIntersection=R.numClipIntersection,V.vertexAlphas=R.vertexAlphas,V.vertexTangents=R.vertexTangents,V.toneMapping=R.toneMapping}function xh(C,R,V,B,P){R.isScene!==!0&&(R=le),M.resetTextureUnits();let $=R.fog,ct=B.isMeshStandardMaterial?R.environment:null,mt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Hi,At=(B.isMeshStandardMaterial?N:v).get(B.envMap||ct),Rt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ut=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xt=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,ne=!!V.morphAttributes.color,se=Ln;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(se=x.toneMapping);let Re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Zt=Re!==void 0?Re.length:0,yt=Mt.get(B),cn=p.state.lights;if(et===!0&&(vt===!0||C!==I)){let ke=C===I&&B.id===_;J.setState(B,C,ke)}let Qt=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==cn.state.version||yt.outputColorSpace!==mt||P.isBatchedMesh&&yt.batching===!1||!P.isBatchedMesh&&yt.batching===!0||P.isBatchedMesh&&yt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&yt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&yt.instancing===!1||!P.isInstancedMesh&&yt.instancing===!0||P.isSkinnedMesh&&yt.skinning===!1||!P.isSkinnedMesh&&yt.skinning===!0||P.isInstancedMesh&&yt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&yt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&yt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&yt.instancingMorph===!1&&P.morphTexture!==null||yt.envMap!==At||B.fog===!0&&yt.fog!==$||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==J.numPlanes||yt.numIntersection!==J.numIntersection)||yt.vertexAlphas!==Rt||yt.vertexTangents!==Ut||yt.morphTargets!==xt||yt.morphNormals!==Kt||yt.morphColors!==ne||yt.toneMapping!==se||yt.morphTargetsCount!==Zt)&&(Qt=!0):(Qt=!0,yt.__version=B.version);let We=yt.currentProgram;Qt===!0&&(We=Cs(B,R,P));let oi=!1,De=!1,ji=!1,re=We.getUniforms(),tn=yt.uniforms;if(bt.useProgram(We.program)&&(oi=!0,De=!0,ji=!0),B.id!==_&&(_=B.id,De=!0),oi||I!==C){bt.buffers.depth.getReversed()?(at.copy(C.projectionMatrix),ru(at),au(at),re.setValue(U,"projectionMatrix",at)):re.setValue(U,"projectionMatrix",C.projectionMatrix),re.setValue(U,"viewMatrix",C.matrixWorldInverse);let _n=re.map.cameraPosition;_n!==void 0&&_n.setValue(U,Pt.setFromMatrixPosition(C.matrixWorld)),kt.logarithmicDepthBuffer&&re.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),I!==C&&(I=C,De=!0,ji=!0)}if(P.isSkinnedMesh){re.setOptional(U,P,"bindMatrix"),re.setOptional(U,P,"bindMatrixInverse");let ke=P.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),re.setValue(U,"boneTexture",ke.boneTexture,M))}P.isBatchedMesh&&(re.setOptional(U,P,"batchingTexture"),re.setValue(U,"batchingTexture",P._matricesTexture,M),re.setOptional(U,P,"batchingIdTexture"),re.setValue(U,"batchingIdTexture",P._indirectTexture,M),re.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&re.setValue(U,"batchingColorTexture",P._colorsTexture,M));let Ji=V.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&qt.update(P,V,We),(De||yt.receiveShadow!==P.receiveShadow)&&(yt.receiveShadow=P.receiveShadow,re.setValue(U,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(tn.envMap.value=At,tn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&R.environment!==null&&(tn.envMapIntensity.value=R.environmentIntensity),De&&(re.setValue(U,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&vh(tn,ji),$&&B.fog===!0&&ot.refreshFogUniforms(tn,$),ot.refreshMaterialUniforms(tn,B,k,tt,p.state.transmissionRenderTarget[C.id]),qi.upload(U,Al(yt),tn,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qi.upload(U,Al(yt),tn,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(U,"center",P.center),re.setValue(U,"modelViewMatrix",P.modelViewMatrix),re.setValue(U,"normalMatrix",P.normalMatrix),re.setValue(U,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let ke=B.uniformsGroups;for(let _n=0,Mn=ke.length;_n<Mn;_n++){let vl=ke[_n];q.update(vl,We),q.bind(vl,We)}}return We}function vh(C,R){C.ambientLightColor.needsUpdate=R,C.lightProbe.needsUpdate=R,C.directionalLights.needsUpdate=R,C.directionalLightShadows.needsUpdate=R,C.pointLights.needsUpdate=R,C.pointLightShadows.needsUpdate=R,C.spotLights.needsUpdate=R,C.spotLightShadows.needsUpdate=R,C.rectAreaLights.needsUpdate=R,C.hemisphereLights.needsUpdate=R}function Ch(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,R,V){Mt.get(C.texture).__webglTexture=R,Mt.get(C.depthTexture).__webglTexture=V;let B=Mt.get(C);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=V===void 0,B.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,R){let V=Mt.get(C);V.__webglFramebuffer=R,V.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(C,R=0,V=0){L=C,S=R,E=V;let B=!0,P=null,$=!1,ct=!1;if(C){let At=Mt.get(C);if(At.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(At.__webglFramebuffer===void 0)M.setupRenderTarget(C);else if(At.__hasExternalTextures)M.rebindTextures(C,Mt.get(C.texture).__webglTexture,Mt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let xt=C.depthTexture;if(At.__boundDepthTexture!==xt){if(xt!==null&&Mt.has(xt)&&(C.width!==xt.image.width||C.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(C)}}let Rt=C.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);let Ut=Mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ut[R])?P=Ut[R][V]:P=Ut[R],$=!0):C.samples>0&&M.useMultisampledRTT(C)===!1?P=Mt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ut)?P=Ut[V]:P=Ut,w.copy(C.viewport),F.copy(C.scissor),z=C.scissorTest}else w.copy(_t).multiplyScalar(k).floor(),F.copy(Bt).multiplyScalar(k).floor(),z=te;if(bt.bindFramebuffer(U.FRAMEBUFFER,P)&&B&&bt.drawBuffers(C,P),bt.viewport(w),bt.scissor(F),bt.setScissorTest(z),$){let At=Mt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+R,At.__webglTexture,V)}else if(ct){let At=Mt.get(C.texture),Rt=R||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,V||0,Rt)}_=-1},this.readRenderTargetPixels=function(C,R,V,B,P,$,ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){bt.bindFramebuffer(U.FRAMEBUFFER,mt);try{let At=C.texture,Rt=At.format,Ut=At.type;if(!kt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=C.width-B&&V>=0&&V<=C.height-P&&U.readPixels(R,V,B,P,Nt.convert(Rt),Nt.convert(Ut),$)}finally{let At=L!==null?Mt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(C,R,V,B,P,$,ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){let At=C.texture,Rt=At.format,Ut=At.type;if(!kt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=C.width-B&&V>=0&&V<=C.height-P){bt.bindFramebuffer(U.FRAMEBUFFER,mt);let xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,$.byteLength,U.STREAM_READ),U.readPixels(R,V,B,P,Nt.convert(Rt),Nt.convert(Ut),0);let Kt=L!==null?Mt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,Kt);let ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await su(U,ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,$),U.deleteBuffer(xt),U.deleteSync(ne),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,R=null,V=0){C.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,C=arguments[1]);let B=Math.pow(2,-V),P=Math.floor(C.image.width*B),$=Math.floor(C.image.height*B),ct=R!==null?R.x:0,mt=R!==null?R.y:0;M.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,ct,mt,P,$),bt.unbindTexture()},this.copyTextureToTexture=function(C,R,V=null,B=null,P=0){C.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1],R=arguments[2],P=arguments[3]||0,V=null);let $,ct,mt,At,Rt,Ut,xt,Kt,ne,se=C.isCompressedTexture?C.mipmaps[P]:C.image;V!==null?($=V.max.x-V.min.x,ct=V.max.y-V.min.y,mt=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,Rt=V.min.y,Ut=V.isBox3?V.min.z:0):($=se.width,ct=se.height,mt=se.depth||1,At=0,Rt=0,Ut=0),B!==null?(xt=B.x,Kt=B.y,ne=B.z):(xt=0,Kt=0,ne=0);let Re=Nt.convert(R.format),Zt=Nt.convert(R.type),yt;R.isData3DTexture?(M.setTexture3D(R,0),yt=U.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(M.setTexture2DArray(R,0),yt=U.TEXTURE_2D_ARRAY):(M.setTexture2D(R,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,R.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,R.unpackAlignment);let cn=U.getParameter(U.UNPACK_ROW_LENGTH),Qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),We=U.getParameter(U.UNPACK_SKIP_PIXELS),oi=U.getParameter(U.UNPACK_SKIP_ROWS),De=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);let ji=C.isDataArrayTexture||C.isData3DTexture,re=R.isDataArrayTexture||R.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let tn=Mt.get(C),Ji=Mt.get(R),ke=Mt.get(tn.__renderTarget),_n=Mt.get(Ji.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,ke.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let Mn=0;Mn<mt;Mn++)ji&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(C).__webglTexture,P,Ut+Mn),C.isDepthTexture?(re&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(R).__webglTexture,P,ne+Mn),U.blitFramebuffer(At,Rt,$,ct,xt,Kt,$,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):re?U.copyTexSubImage3D(yt,P,xt,Kt,ne+Mn,At,Rt,$,ct):U.copyTexSubImage2D(yt,P,xt,Kt,ne+Mn,At,Rt,$,ct);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else re?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(yt,P,xt,Kt,ne,$,ct,mt,Re,Zt,se.data):R.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,P,xt,Kt,ne,$,ct,mt,Re,se.data):U.texSubImage3D(yt,P,xt,Kt,ne,$,ct,mt,Re,Zt,se):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,xt,Kt,$,ct,Re,Zt,se.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,xt,Kt,se.width,se.height,Re,se.data):U.texSubImage2D(U.TEXTURE_2D,P,xt,Kt,$,ct,Re,Zt,se);U.pixelStorei(U.UNPACK_ROW_LENGTH,cn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,oi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De),P===0&&R.generateMipmaps&&U.generateMipmap(yt),bt.unbindTexture()},this.copyTextureToTexture3D=function(C,R,V=null,B=null,P=0){return C.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,B=arguments[1]||null,C=arguments[2],R=arguments[3],P=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,R,V,B,P)},this.initRenderTarget=function(C){Mt.get(C).__webglFramebuffer===void 0&&M.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?M.setTextureCube(C,0):C.isData3DTexture?M.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?M.setTexture2DArray(C,0):M.setTexture2D(C,0),bt.unbindTexture()},this.resetState=function(){S=0,E=0,L=null,bt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ft._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ft._getUnpackColorSpace()}};var fr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},gr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=so,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ee=new D,us=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fi=class extends yn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ii,is=new D,_i=new D,Mi=new D,bi=new It,ss=new It,Yc=new ce,ks=new D,rs=new D,Hs=new D,xc=new It,ma=new It,vc=new It,ii=class extends me{constructor(t=new Fi){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gr(e,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new us(n,3,0,!1)),Ii.setAttribute("uv",new us(n,2,3,!1))}this.geometry=Ii,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_i.setFromMatrixScale(this.matrixWorld),Yc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_i.multiplyScalar(-Mi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Gs(ks.set(-.5,-.5,0),Mi,a,_i,s,r),Gs(rs.set(.5,-.5,0),Mi,a,_i,s,r),Gs(Hs.set(.5,.5,0),Mi,a,_i,s,r),xc.set(0,0),ma.set(1,0),vc.set(1,1);let o=t.ray.intersectTriangle(ks,rs,Hs,!1,is);if(o===null&&(Gs(rs.set(-.5,.5,0),Mi,a,_i,s,r),ma.set(0,1),o=t.ray.intersectTriangle(ks,Hs,rs,!1,is),o===null))return;let l=t.ray.origin.distanceTo(is);l<t.near||l>t.far||e.push({distance:l,point:is.clone(),uv:Pn.getInterpolation(is,ks,rs,Hs,xc,ma,vc,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Gs(i,t,e,n,s,r){bi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ss.x=r*bi.x-s*bi.y,ss.y=s*bi.x+r*bi.y):ss.copy(bi),i.copy(t),i.x+=ss.x,i.y+=ss.y,i.applyMatrix4(Yc)}var ds=class extends yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cc=new ce,_o=new sr,Ws=new Vi,Xs=new D,mr=class extends me{constructor(t=new Ae,e=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,t.ray.intersectsSphere(Ws)===!1)return;Cc.copy(s).invert(),_o.copy(t.ray).applyMatrix4(Cc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,A=f;m<A;m++){let g=c.getX(m);Xs.fromBufferAttribute(u,g),yc(Xs,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,A=f;m<A;m++)Xs.fromBufferAttribute(u,m),yc(Xs,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yc(i,t,e,n,s,r,a){let o=_o.distanceSqToPoint(i);if(o<e){let l=new D;_o.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Oi=class extends Be{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bn=class i extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new It;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fs=class i extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,A=[],g=n/2,p=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function b(){let x=new D,T=new D,S=0,E=(e-t)/n;for(let L=0;L<=r;L++){let _=[],I=L/r,w=I*(e-t)+t;for(let F=0;F<=s;F++){let z=F/s,H=z*l+o,Z=Math.sin(H),G=Math.cos(H);T.x=w*Z,T.y=-I*n+g,T.z=w*G,u.push(T.x,T.y,T.z),x.set(Z,E,G).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-I),_.push(m++)}A.push(_)}for(let L=0;L<s;L++)for(let _=0;_<r;_++){let I=A[_][L],w=A[_+1][L],F=A[_+1][L+1],z=A[_][L+1];(t>0||_!==0)&&(h.push(I,w,z),S+=3),(e>0||_!==r-1)&&(h.push(w,F,z),S+=3)}c.addGroup(p,S,0),p+=S}function y(x){let T=m,S=new It,E=new D,L=0,_=x===!0?t:e,I=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),m++;let w=m;for(let F=0;F<=s;F++){let H=F/s*l+o,Z=Math.cos(H),G=Math.sin(H);E.x=_*G,E.y=g*I,E.z=_*Z,u.push(E.x,E.y,E.z),d.push(0,I,0),S.x=Z*.5+.5,S.y=G*.5*I+.5,f.push(S.x,S.y),m++}for(let F=0;F<s;F++){let z=T+F,H=w+F;x===!0?h.push(H,H+1,z):h.push(H+1,H,z),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ar=class i extends fs{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var xr=class i extends Ae{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new D,m=new It;for(let A=0;A<=s;A++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let A=0;A<s;A++){let g=A*(n+1);for(let p=0;p<n;p++){let b=p+g,y=b,x=b+n+1,T=b+n+2,S=b+1;o.push(y,x,S),o.push(x,T,S)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var vr=class i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],m=[],A=[],g=[];for(let p=0;p<=n;p++){let b=[],y=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let S=T/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),g.push(S+x,1-y),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let y=h[p][b+1],x=h[p][b],T=h[p+1][b],S=h[p+1][b+1];(p!==0||a>0)&&f.push(y,x,S),(p!==n-1||l<Math.PI)&&f.push(x,T,S)}this.setIndex(f),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(A,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cr=class extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};var ps=class extends yn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ys(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mo=class extends ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_l,endingEnd:_l}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ml:r=t,o=2*e-n;break;case bl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ml:a=t,l=2*n-e;break;case bl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),A=m*m,g=A*m,p=-d*g+2*d*A-d*m,b=(1+d)*g+(-1.5-2*d)*A+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*A+.5*m,x=f*g-f*A;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+b*a[c+T]+y*a[l+T]+x*a[u+T];return r}},bo=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},So=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $s:e=this.InterpolantFactoryMethodDiscrete;break;case io:e=this.InterpolantFactoryMethodLinear;break;case Or:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return Or}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&tm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Or,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let A=e[u+m];if(A!==e[d+m]||A!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=io;var si=class extends Je{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=$s;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Je{};Eo.prototype.ValueTypeName="color";var wo=class extends Je{};wo.prototype.ValueTypeName="number";var To=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},yr=class extends Je{InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Je{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=$s;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends Je{};qo.prototype.ValueTypeName="vector";var Ro=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},em=new Ro,Po=class{constructor(t){this.manager=t!==void 0?t:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Po.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},_r=class extends Ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Aa=new ce,Ic=new D,_c=new D,Lo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uo=class extends Lo{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new Uo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var br=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Mc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Mc(){return performance.now()}var jo="\\[\\]\\.:\\/",nm=new RegExp("["+jo+"]","g"),Jo="[^"+jo+"]",im="[^"+jo.replace("\\.","")+"]",sm=/((?:WC+[\/:])*)/.source.replace("WC",Jo),rm=/(WCOD+)?/.source.replace("WCOD",im),am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),lm=new RegExp("^"+sm+rm+am+om+"$"),cm=["material","materials","bones","map"],Do=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nm,"")}static parseTrackName(t){let e=lm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Do;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vm=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);function Qc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ae,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Zc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let A=0;A<a[h].length;++A)f.push(a[h][A][d]);let m=Zc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Zc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ge(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let A=h.getComponent(d,m);o.setComponent(d+u,m,A)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var ai=(i,t,e)=>i<t?t:i>e?e:i;function $o(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var on=[{id:"baby",at:0,ar:"\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0635\u063A\u064A\u0631",en:"Baby Raptor"},{id:"raptor",at:10,ar:"\u0631\u0627\u0628\u062A\u0648\u0631",en:"Raptor"},{id:"hunter",at:32,ar:"\u0635\u064A\u0651\u0627\u062F \u0627\u0644\u062A\u0627\u062C",en:"Crest Hunter"},{id:"giant",at:70,ar:"\u0639\u0645\u0644\u0627\u0642",en:"Giant"}];function hm(i){let t=0;for(let e=1;e<on.length;e++)i>=on[e].at&&(t=e);return t}var Tr=i=>.55+.2*Math.sqrt(Math.max(0,i)),jc=i=>7.5+.02*Math.min(i,150),tl=i=>20+9*Math.log(1+Math.max(0,i)/10),Jc=(i,t)=>i>=t?"red":i<=t*.6?"green":"white",um=i=>Math.max(1,Math.ceil(i*.5));function dm({time:i,par:t,hits:e,power:n,goal:s}){let r=1;return i<=t*1.7&&(r=2),r===2&&(i<=t||e<=2||n>=s*1.25)&&(r=3),r}var Wi={beetle:{power:1,f:.45,ai:"flee",fleeK:.62,ws:1.6,respawn:3,look:"beetle",ar:"\u062E\u0646\u0641\u0633\u0629",en:"Beetle"},egg:{power:1,f:.6,ai:"static",respawn:6,look:"egg",ar:"\u0628\u064A\u0636\u0629",en:"Egg"},compy:{power:3,f:.8,ai:"flee",fleeK:.78,ws:2.2,respawn:5,look:"compy",ar:"\u0643\u0648\u0645\u0628\u064A",en:"Compy"},dodo:{power:5,f:.85,ai:"flee",fleeK:.72,ws:2,respawn:6,look:"dodo",ar:"\u062F\u0648\u062F\u0648",en:"Dodo"},stegoBaby:{power:8,f:.9,ai:"wander",fleeK:.55,ws:1.7,respawn:8,look:"stego",ar:"\u0633\u062A\u064A\u062C\u0648 \u0635\u063A\u064A\u0631",en:"Baby Stego"},trike:{power:14,f:.95,ai:"wander",fleeK:.5,ws:1.8,respawn:10,look:"trike",ar:"\u062A\u0631\u0627\u064A\u0633\u064A\u0631\u0627",en:"Trike"},raptorRed:{power:22,f:.95,ai:"hunter",fleeK:.7,ws:2.2,respawn:14,look:"raptorRed",ar:"\u0631\u0627\u0628\u062A\u0648\u0631 \u0623\u062D\u0645\u0631",en:"Red Raptor"},rexJr:{power:40,f:.95,ai:"hunter",fleeK:.6,ws:2,respawn:20,look:"rexJr",ar:"\u0631\u064A\u0643\u0633 \u0635\u063A\u064A\u0631",en:"Junior Rex"},mudbug:{power:2,f:.45,ai:"flee",fleeK:.62,ws:1.6,respawn:3,look:"mudbug",ar:"\u062D\u0634\u0631\u0629 \u0627\u0644\u0637\u064A\u0646",en:"Mud Bug"},frog:{power:4,f:.7,ai:"flee",fleeK:.75,ws:2,respawn:5,look:"frog",ar:"\u0636\u0641\u062F\u0639\u0629",en:"Frog"},swampEgg:{power:6,f:.6,ai:"static",respawn:7,look:"swampEgg",ar:"\u0628\u064A\u0636\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Swamp Egg"},gator:{power:20,f:.95,ai:"hunter",fleeK:.6,ws:1.8,respawn:14,look:"gator",ar:"\u062A\u0645\u0633\u0627\u062D",en:"Gator"},ankylo:{power:30,f:.95,ai:"wander",fleeK:.45,ws:1.4,respawn:12,look:"ankylo",ar:"\u0623\u0646\u0643\u064A\u0644\u0648",en:"Ankylo"},calf:{power:42,f:.95,ai:"wander",fleeK:.45,ws:1.5,respawn:14,look:"calf",ar:"\u0628\u0631\u0627\u0643\u064A\u0648 \u0635\u063A\u064A\u0631",en:"Baby Brachio"},swampRex:{power:60,f:.95,ai:"hunter",fleeK:.55,ws:1.8,respawn:20,look:"swampRex",ar:"\u0631\u064A\u0643\u0633 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Swamp Rex"},emberbug:{power:2,f:.45,ai:"flee",fleeK:.62,ws:1.6,respawn:3,look:"emberbug",ar:"\u062D\u0634\u0631\u0629 \u0627\u0644\u062C\u0645\u0631",en:"Ember Bug"},lavaEgg:{power:8,f:.6,ai:"static",respawn:7,look:"lavaEgg",ar:"\u0628\u064A\u0636\u0629 \u0627\u0644\u0628\u0631\u0643\u0627\u0646",en:"Lava Egg"},lizard:{power:16,f:.85,ai:"flee",fleeK:.75,ws:2.2,respawn:8,look:"lizard",ar:"\u0633\u062D\u0644\u064A\u0629",en:"Lizard"},ankyloRed:{power:32,f:.95,ai:"wander",fleeK:.45,ws:1.4,respawn:12,look:"ankyloRed",ar:"\u0623\u0646\u0643\u064A\u0644\u0648 \u0627\u0644\u062D\u0645\u0645",en:"Lava Ankylo"},trikeRed:{power:48,f:.95,ai:"wander",fleeK:.45,ws:1.6,respawn:14,look:"trikeRed",ar:"\u062A\u0631\u0627\u064A\u0633\u064A\u0631\u0627 \u0627\u0644\u062D\u0645\u0645",en:"Lava Trike"},spino:{power:72,f:.95,ai:"hunter",fleeK:.55,ws:1.8,respawn:22,look:"spino",ar:"\u0633\u0628\u064A\u0646\u0648",en:"Spino"},alphaRaptor:{power:36,f:1.5,ai:"hunter",fleeK:.8,ws:2.2,respawn:0,look:"raptorRed",alpha:!0,ar:"\u0632\u0639\u064A\u0645 \u0627\u0644\u0623\u0646\u064A\u0627\u0628",en:"Snapjaw Alpha"},alphaGator:{power:80,f:1.35,ai:"hunter",fleeK:.75,ws:1.8,respawn:0,look:"swampRex",alpha:!0,ar:"\u0632\u0639\u064A\u0645 \u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Marsh Fang Alpha"},rex:{power:88,f:.95,ai:"hunter",fleeK:.5,ws:1.8,respawn:26,look:"rex",ar:"\u0631\u064A\u0643\u0633",en:"Rex"}},gs=Wi;for(let[i,t]of Object.entries(Wi))t.key=i,t.r=(.55+.2*Math.sqrt(t.power))*t.f,t.gain=um(t.power);var _e=[{id:"jungle",ar:"\u0627\u0644\u063A\u0627\u0628\u0629",en:"Fern Hollow",sub:["\u0643\u064F\u0644 \u0627\u0644\u0623\u062E\u0636\u0631\u060C \u0627\u062C\u0631\u064A \u0645\u0646 \u0627\u0644\u0623\u062D\u0645\u0631!","Eat green, run from red!"],half:28,start:3,goal:37,alpha:{kind:"alphaRaptor",summon:20},par:100,obst:{kinds:["tree","tree","rock"],n:14},species:[["beetle",10],["egg",6],["compy",6],["dodo",5],["stegoBaby",4],["trike",3],["raptorRed",3],["rexJr",2]]},{id:"swamp",ar:"\u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639",en:"Mirefen Swamp",sub:["\u0627\u0633\u062D\u0628 \u0627\u0644\u0635\u064A\u0651\u0627\u062F\u064A\u0646 \u0625\u0644\u0649 \u0627\u0644\u0637\u064A\u0646!","Lure the divers into the mud!"],half:32,start:40,goal:81,alpha:{kind:"alphaGator",summon:55},par:140,obst:{kinds:["stump","rock","stump"],n:13},species:[["mudbug",10],["frog",8],["swampEgg",6],["gator",4],["ankylo",4],["calf",3],["swampRex",2]]},{id:"volcano",ar:"\u0648\u0627\u062F\u064A \u0627\u0644\u0628\u0631\u0643\u0627\u0646",en:"Volcano Valley",sub:["\u0627\u0647\u0631\u0628 \u0645\u0646 \u0627\u0644\u062F\u0648\u0633 \u0648\u0627\u0644\u0646\u0627\u0631!","Dodge the stomps and the fire!"],half:36,start:56,goal:100,par:220,obst:{kinds:["rock","pillar","rock"],n:14},boss:{power:100,hp:3,r:4},species:[["emberbug",8],["lavaEgg",6],["lizard",6],["ankyloRed",3],["trikeRed",4],["spino",3],["rex",2]]},{id:"jungle2",look:"jungle",ar:"\u0627\u0644\u063A\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0642\u0629",en:"Deep Fern Hollow",sub:["\u0627\u0644\u063A\u0627\u0628\u0629 \u0628\u0642\u062A \u0623\u062E\u0637\u0631!","The hollow got wilder!"],half:32,start:6,goal:55,alpha:{kind:"alphaRaptor",summon:30},par:130,obst:{kinds:["tree","tree","rock"],n:14},species:[["beetle",8],["egg",6],["compy",6],["dodo",5],["stegoBaby",5],["trike",4],["raptorRed",4],["rexJr",3]]},{id:"swamp2",look:"swamp",ar:"\u0627\u0644\u0645\u0633\u062A\u0646\u0642\u0639 \u0627\u0644\u0623\u0633\u0648\u062F",en:"Black Mire",sub:["\u0627\u0644\u0637\u064A\u0646 \u0623\u0639\u0645\u0642 \u0648\u0627\u0644\u0635\u064A\u0651\u0627\u062F\u064A\u0646 \u0623\u0643\u062A\u0631!","Deeper mud, more divers!"],half:36,start:50,goal:105,alpha:{kind:"alphaGator",summon:70},par:170,obst:{kinds:["stump","stump","rock"],n:14},species:[["mudbug",9],["frog",8],["swampEgg",6],["gator",5],["ankylo",5],["calf",4],["swampRex",3]]},{id:"volcano2",look:"volcano",ar:"\u0642\u0645\u0629 \u0627\u0644\u0628\u0631\u0643\u0627\u0646",en:"Volcano Peak",sub:["\u0627\u0644\u0628\u0631\u0643\u0627\u0646 \u0628\u064A\u0632\u0645\u062C\u0631!","The volcano roars!"],half:40,start:70,goal:130,par:260,obst:{kinds:["rock","pillar","rock"],n:16},boss:{power:140,hp:4,r:4.4},species:[["emberbug",8],["lavaEgg",6],["lizard",6],["ankyloRed",4],["trikeRed",5],["spino",4],["rex",3]]}];function $c(i){let t={unlocked:1,stars:_e.map(()=>0),best:_e.map(()=>0),muted:!1,eaten:0};if(i&&typeof i=="object"){t.unlocked=ai(Math.floor(Number(i.unlocked))||1,1,_e.length);for(let e=0;e<_e.length;e++){let n=i.stars&&i.stars[e];t.stars[e]=ai(Math.floor(Number(n))||0,0,3);let s=i.best&&Number(i.best[e]);t.best[e]=s>0&&Number.isFinite(s)?Math.round(s):0}for(let e=0;e<_e.length-1;e++)t.stars[e]>0&&t.unlocked<e+2&&(t.unlocked=e+2);t.muted=!!i.muted,t.eaten=Math.max(0,Math.floor(Number(i.eaten))||0)}return t}var qr=class{constructor({level:t=0,seed:e=1,easy:n=!1}={}){let s=_e[ai(t,0,_e.length-1)];this.L=s,this.level=_e.indexOf(s),this.easy=!!n,this.rand=$o(e*7919+this.level*131+17),this.time=0,this.done=!1,this.won=!1,this.result=null,this.winT=0,this.floor=s.start,this.player={x:0,z:0,vx:0,vz:0,P:s.start,stage:hm(s.start),r:Tr(s.start),face:0,pdx:0,pdz:1,pounceT:0,pounceCd:0,inv:0,kx:0,kz:0,speedNow:0,px:0,pz:1,bite:0},this.stats={eaten:0,hits:0},this.nextId=1,this.creatures=[],this.pending=[],this.obstacles=[],this.projectiles=[],this.boss=null,this.alpha=null,this.alphaDown=!1,this._genObstacles();for(let[r,a]of s.species)for(let o=0;o<a;o++)this._spawn(r,!0);s.boss&&(this.boss={x:0,z:-s.half+8,power:s.boss.power,r:s.boss.r,hp:n?2:s.boss.hp,maxHp:n?2:s.boss.hp,face:0,tele:null,timer:4,stagger:0,hitCd:0,speedNow:0,down:!1})}get arena(){return this.L.half}get stage(){return this.player.stage}get phase(){return this.boss?this.boss.maxHp-this.boss.hp+1:0}target(t){return this.L.species.find(e=>e[0]===t)[1]}_genObstacles(){let{kinds:t,n:e}=this.L.obst,n=this.L.half-3;for(let s=0;this.obstacles.length<e&&s<400;s++){let r=(this.rand()*2-1)*n,a=(this.rand()*2-1)*n,o=t[Math.floor(this.rand()*t.length)],l=(o==="rock"?1:o==="pillar"?1.2:1.1)+this.rand()*.5;Math.hypot(r,a)<7||this.boss===null&&this.L.boss&&Math.hypot(r,a+this.L.half-8)<8||this.obstacles.some(c=>Math.hypot(c.x-r,c.z-a)<c.r+l+3)||this.obstacles.push({x:r,z:a,r:l,kind:o})}}_freeSpot(t,e){let n=this.L.half-2.5;for(let s=0;s<40;s++){let r=(this.rand()*2-1)*n,a=(this.rand()*2-1)*n;if(!(Math.hypot(r-this.player.x,a-this.player.z)<t)&&!this.obstacles.some(o=>Math.hypot(o.x-r,o.z-a)<o.r+e+.6)&&!(this.L.boss&&Math.hypot(r,a+this.L.half-8)<7))return{x:r,z:a}}return null}_spawn(t,e){let n=Wi[t],s=this._freeSpot(n.ai==="hunter"?e?16:18:e?6:10,n.r);if(!s)return null;let r={id:this.nextId++,kind:t,power:n.power,r:n.r,ai:n.ai,x:s.x,z:s.z,face:this.rand()*6.28,vx:0,vz:0,speed:0,wa:this.rand()*6.28,wt:this.rand()*2,walk:!1,stun:0,chase:!1,born:e?-1:this.time};return this.creatures.push(r),r}_loss(t){let e=this.player,n=this.easy?1:Math.max(1,Math.round(e.P*t)),s=e.P;return e.P=Math.max(this.floor,e.P-n),s-e.P}_hurt(t,e,n,s,r){let a=this.player;if(a.inv>0)return!1;let o=this._loss(n),l=a.x-t,c=a.z-e,h=Math.hypot(l,c)||1;return a.kx=l/h*15,a.kz=c/h*15,a.inv=1.4,a.pounceT=0,this.stats.hits++,a.r=Tr(a.P),s.push({type:"bump",src:r,lost:o,x:a.x,z:a.z}),!0}_push(t,e,n,s){let r=Math.hypot(e-t.x,n-t.z),a=t.r+s;if(r<a&&r>1e-6){let o=(a-r)/r;return[(e-t.x)*o,(n-t.z)*o]}return[0,0]}_place(t,e){let n=this.L.half-e;t.x=ai(t.x,-n,n),t.z=ai(t.z,-n,n);for(let s=0;s<2;s++)for(let r of this.obstacles){let[a,o]=this._push(r,t.x,t.z,e);t.x+=a,t.z+=o}t.x=ai(t.x,-n,n),t.z=ai(t.z,-n,n)}step(t,e={}){let n=[];return this.done||(t=Math.min(t,.05),this.time+=t,this._player(t,e,n),this._creatures(t,n),this.boss&&this._boss(t,n),this._projectiles(t,n),this._respawn(t),this._alphaCheck(n),this._collide(n),this.winT>0?(this.winT-=t,this.winT<=0&&this._finish(n)):!this.boss&&!this.L.alpha&&this.player.P>=this.L.goal&&this._finish(n)),n}_player(t,e,n){let s=this.player,r=Number(e.x)||0,a=Number(e.z)||0,o=Math.hypot(r,a);o>1&&(r/=o,a/=o,o=1),s.inv=Math.max(0,s.inv-t),s.pounceCd=Math.max(0,s.pounceCd-t),s.bite=Math.max(0,s.bite-t),o>.1&&(s.pdx=r/o,s.pdz=a/o),e.pounce&&s.pounceCd<=0&&s.pounceT<=0&&(s.pounceT=.32,s.pounceCd=1.5,s.px=s.pdx,s.pz=s.pdz,n.push({type:"pounce",x:s.x,z:s.z}));let l=jc(s.P),c,h;if(s.pounceT>0?(s.pounceT-=t,c=s.px*l*3.2,h=s.pz*l*3.2):(c=r*l,h=a*l),s.speedNow=Math.hypot(c,h),s.speedNow>.3){let d=Math.atan2(c,h)-s.face;d=Math.atan2(Math.sin(d),Math.cos(d)),s.face+=d*Math.min(1,t*12)}s.kx*=Math.exp(-t*5),s.kz*=Math.exp(-t*5),s.x+=(c+s.kx)*t,s.z+=(h+s.kz)*t,s.r=Tr(s.P),this._place(s,s.r*.8)}_creatures(t,e){let n=this.player,s=jc(n.P),r=this.L.half;for(let a of this.creatures){a.stun=Math.max(0,a.stun-t);let o=n.x-a.x,l=n.z-a.z,c=Math.hypot(o,l)||1e-6,h=Wi[a.kind],u=0,d=0;if(a.ai==="static"){a.speed=0;continue}if(a.power<n.P)if(a.chase=!1,c<9+n.r*2){let f=s*h.fleeK*(this.easy?.8:1),m=-o/c,A=-l/c;if(r-Math.max(Math.abs(a.x),Math.abs(a.z))<3){let p=Math.hypot(a.x,a.z)||1;m+=-a.x/p*.9,A+=-a.z/p*.9;let b=Math.hypot(m,A)||1;m/=b,A/=b}u=m*f,d=A*f}else this._wander(a,t,h,r);else if(a.ai==="hunter"&&a.stun<=0){let f=this.easy?9:13;if(!a.chase&&c<f&&(a.chase=!0,e.push({type:"alert",id:a.id,x:a.x,z:a.z})),a.chase&&c>f*1.5&&(a.chase=!1),a.chase){let m=s*(this.easy?.42:.6);u=o/c*m,d=l/c*m}else this._wander(a,t,h,r)}else a.stun>0?(u=-o/c*3.5,d=-l/c*3.5):this._wander(a,t,h,r);if(a.walkV&&(u=a.walkV[0],d=a.walkV[1],a.walkV=null),a.vx=u,a.vz=d,a.speed=Math.hypot(u,d),a.x+=u*t,a.z+=d*t,a.speed>.2){let m=Math.atan2(u,d)-a.face;m=Math.atan2(Math.sin(m),Math.cos(m)),a.face+=m*Math.min(1,t*8)}this._place(a,a.r*.7)}}_wander(t,e,n,s){t.wt-=e,t.wt<=0&&(t.wa=this.rand()*6.283,t.wt=1.5+this.rand()*2.5,t.walk=this.rand()<.65),Math.max(Math.abs(t.x),Math.abs(t.z))>s-3&&(t.wa=Math.atan2(-t.x,-t.z)),t.walk&&(t.walkV=[Math.sin(t.wa)*n.ws,Math.cos(t.wa)*n.ws])}_alphaCheck(t){let e=this.L.alpha;if(!e||this.alpha||this.alphaDown||this.player.P<e.summon)return;let n=Wi[e.kind],s=this.L.half-2.5,r=null;for(let[o,l]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let c=o*s*.8,h=l*s*.8;this.obstacles.some(u=>Math.hypot(u.x-c,u.z-h)<u.r+n.r+1)||(!r||Math.hypot(c-this.player.x,h-this.player.z)>Math.hypot(r.x-this.player.x,r.z-this.player.z))&&(r={x:c,z:h})}r||(r={x:s*.8,z:s*.8});let a={id:this.nextId++,kind:e.kind,power:n.power,r:n.r,ai:n.ai,x:r.x,z:r.z,face:0,vx:0,vz:0,speed:0,wa:0,wt:3,walk:!1,stun:0,chase:!1,born:this.time,alpha:!0};this.creatures.push(a),this.alpha=a,t.push({type:"alpha",id:a.id,kind:e.kind,power:a.power,x:a.x,z:a.z})}_respawn(t){for(let n of this.pending)n.t-=t;let e=this.pending.filter(n=>n.t<=0);this.pending=this.pending.filter(n=>n.t>0);for(let n of e)this.creatures.reduce((r,a)=>r+(a.kind===n.kind?1:0),0)<this.target(n.kind)&&(this._spawn(n.kind,!1)||this.pending.push({kind:n.kind,t:1}))}_collide(t){let e=this.player;for(let s=this.creatures.length-1;s>=0;s--){let r=this.creatures[s],a=Math.hypot(r.x-e.x,r.z-e.z),o=e.r*.85+r.r*.75+(e.pounceT>0?.5:0);a>=o||(r.power<e.P?this._eat(s,t):this._hurt(r.x,r.z,.04,t,r.kind)&&(r.stun=2.2,r.chase=!1))}let n=this.boss;if(n&&!n.down&&Math.hypot(n.x-e.x,n.z-e.z)<n.r*.9+e.r*.85)if(e.P>n.power&&n.hitCd<=0)this._bite(t);else if(e.P<=n.power)this._hurt(n.x,n.z,.06,t,"boss");else{let r=e.x-n.x,a=e.z-n.z,o=Math.hypot(r,a)||1;e.x+=r/o*.3,e.z+=a/o*.3}}_gain(t,e){let n=this.player;for(n.P=Math.min(999,n.P+t),n.r=Tr(n.P);n.stage<on.length-1&&n.P>=on[n.stage+1].at;)n.stage++,e.push({type:"evolve",stage:n.stage,P:n.P})}_eat(t,e){let n=this.creatures[t],s=this.player,r=Wi[n.kind];this.creatures.splice(t,1);let a=r.gain,o=s.P;this.stats.eaten++,s.bite=.3,r.alpha||this.pending.push({kind:n.kind,t:r.respawn}),e.push({type:"eat",id:n.id,kind:n.kind,x:n.x,z:n.z,power:n.power,gain:a,P:o}),this._gain(a,e),r.alpha&&(this.alphaDown=!0,this.alpha=null,this.winT=1.8,e.push({type:"alphaDown",kind:n.kind,x:n.x,z:n.z}))}_bite(t){let e=this.boss,n=this.player;e.hp--,e.hitCd=2.6,e.stagger=2,e.tele=null,e.timer=3,n.bite=.4;let s=e.x-n.x,r=e.z-n.z,a=Math.hypot(s,r)||1;e.x+=s/a*5,e.z+=r/a*5,this._place(e,e.r*.5),t.push({type:"bossBite",hp:e.hp,x:e.x,z:e.z}),this._gain(4,t),e.hp<=0&&(e.down=!0,this.winT=2.4,t.push({type:"bossDown",x:e.x,z:e.z}))}_boss(t,e){let n=this.boss,s=this.player;if(n.hitCd=Math.max(0,n.hitCd-t),n.speedNow=0,n.down)return;if(n.stagger>0){n.stagger-=t;return}let r=s.x-n.x,a=s.z-n.z,o=Math.hypot(r,a)||1e-6,l=this.phase,c=this.easy?1.45:1;if(n.tele){let u=n.tele;if(u.t+=t,u.type==="fire"&&(u.ang=Math.atan2(r,a)),u.type==="fire"&&u.t>u.dur*.7&&(u.locked=!0),u.t>=u.dur){if(u.type==="stomp")e.push({type:"stomp",x:n.x,z:n.z,radius:u.radius}),o<u.radius+s.r*.5&&this._hurt(n.x,n.z,.07,e,"stomp");else{let d=l>=3?5:3;for(let f=0;f<d;f++){let m=u.ang+(f-(d-1)/2)*.3,A=10;this.projectiles.push({id:this.nextId++,x:n.x+Math.sin(m)*n.r,z:n.z+Math.cos(m)*n.r,vx:Math.sin(m)*A,vz:Math.cos(m)*A,life:3.2,r:.7})}e.push({type:"fire",x:n.x,z:n.z,ang:u.ang})}n.tele=null,n.timer=(l===1?3.4:l===2?2.8:2.3)*c}return}n.face=Math.atan2(r,a);let h=(1.7+l*.5)/(this.easy?1.3:1);o>n.r+s.r&&(n.x+=r/o*h*t,n.z+=a/o*h*t,n.speedNow=h,this._place(n,n.r*.5)),n.timer-=t,n.timer<=0&&(l>=2&&(o>9||this.rand()<.4)?(n.tele={type:"fire",t:0,dur:1.2*c,ang:Math.atan2(r,a),x:n.x,z:n.z,locked:!1},e.push({type:"telegraph",kind:"fire"})):(n.tele={type:"stomp",t:0,dur:1.4*c,radius:7+l*1.6,x:n.x,z:n.z},e.push({type:"telegraph",kind:"stomp"})))}_projectiles(t,e){let n=this.player,s=this.L.half+2;for(let r=this.projectiles.length-1;r>=0;r--){let a=this.projectiles[r];if(a.x+=a.vx*t,a.z+=a.vz*t,a.life-=t,a.life<=0||Math.abs(a.x)>s||Math.abs(a.z)>s){this.projectiles.splice(r,1);continue}Math.hypot(a.x-n.x,a.z-n.z)<n.r*.8+a.r&&(this._hurt(a.x-a.vx*.1,a.z-a.vz*.1,.06,e,"fire"),this.projectiles.splice(r,1))}}_finish(t){this.done=!0,this.won=!0;let e=this.player,n=this.L,s=dm({time:this.time,par:n.par,hits:this.stats.hits,power:e.P,goal:n.goal});this.result={stars:s,time:this.time,power:e.P,eaten:this.stats.eaten,hits:this.stats.hits,level:this.level,stage:e.stage},t.push({type:"complete",...this.result})}};function th(i,t,e={}){let n=i.prototype.play,s=i.prototype.unlock;function r(a){if(!(a._smp||!a.ctx)){a._smp={};for(let[o,l]of Object.entries(t))try{let c=atob(l.split(",")[1]),h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d);let u=a.ctx.decodeAudioData(h.buffer,d=>{a._smp[o]=d},()=>{});u&&u.catch&&u.catch(()=>{})}catch{}}}s&&(i.prototype.unlock=function(...a){let o=s.apply(this,a);return r(this),o}),i.prototype.play=function(a,o){let l=this.ctx;if(l&&l.state==="running"&&!this.muted&&this.on!==!1){r(this);let c=this._smp&&this._smp[a];if(c){let h=l.createBufferSource(),u=l.createGain();h.buffer=c,u.gain.value=e[a]||.8,h.connect(u),u.connect(this.sfx||this.master||l.destination),h.start(l.currentTime+.005);return}}return n.call(this,a,o)}}function eh(i,{gain:t=.5,file:e="music.mp3"}={}){let n=i.prototype.unlock,s=i.prototype.setTune;function r(a){if(a._song||!a.ctx)return;a._song="loading";let o;try{o=new URL(e,document.baseURI).href}catch{return}let l=a.ctx;fetch(o).then(c=>c.ok?c.arrayBuffer():Promise.reject()).then(c=>l.decodeAudioData(c)).then(c=>{if(a.ctx!==l)return;let h=l.createBufferSource(),u=l.createGain();h.buffer=c,h.loop=!0,u.gain.value=t,h.connect(u),u.connect(a.master||l.destination),h.start(),a._song=h,a.music&&a.music.gain&&(a.music.gain.value=0),s&&s.call(a,null)}).catch(()=>{a._song=null})}i.prototype.unlock=function(...a){let o=n?n.apply(this,a):void 0;return r(this),o},s&&(i.prototype.setTune=function(a){if(!this._song)return s.call(this,a)})}var nh={chomp:"data:audio/mpeg;base64,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",roar:"data:audio/mpeg;base64,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J9GxvOXr3P/////94+JJmd7H9KamwqRiL/lD03DJfYsAAAQAAADBUAoAQRM0iRNeSJqXvKeZn/zNV/+1V6qq8ybWvMywMAsOJEq8kSOybOeqrtVVryiBQV1B3BosDXap4KjwV6j0r/iL/Ev+Cqw1TEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjE7IAVjXMKNYeAGkKj5acw8ABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zjEr4PJ3KLtnJMAAAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",stomp:"data:audio/mpeg;base64,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",evolve:"data:audio/mpeg;base64,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",fire:"data:audio/mpeg;base64,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8U9v1gkkW4AVyTJqwSj0ZiZXetd+r+urk5roR2ea8yZvdWdl7azbjrStKZ7/+zjEpwMJBKMkTDBjAS+XZAWRiXi/X+uNlGurXpHKx3krner6lgANBnuFmAb6CKDqeD7wcuggaOPuiJ5RycGkxjU7FSST6CRp4v4R6h6q1wVTbKxY8bOFlqDeBRVn3bkZMGfn95RWsP70+GvTP+VzTc7rCd/Nldcw//+uVGIt1Jxl2DmLzncexfcAjTA4ZC6jG1fk6qs27lPq3V76SW8jM4+J/MOygxBSONoVUTCha2HEXDDftO8wi4r2kx4GzzHcpOIDKOhy9JF5R0QRHdTGroMI5Q/HOar/+zjEvoMI3K8iTDBkwSwQowGTDPjpoR5ZR0KrQ+dYRZGaZJkc7yEFsa0jJiANgKK9zkw3qzJXep7UJh+rlLbE5HxpyuxRA7KRFUNHKzkMPojVqdmsFOtkZBU9nyu9lu0grnnj9DLF22oz4vpzNXu29o5Kcd5nmuY7uShr3Mus+H235tGZfEovn9Ymw75raeBLRcxqb9S8mopk4Uqlo19lEPu655AGg7GFsc1RodahU7u190tEQseYJgM9OqV4rlRqR5rY4S9mgpyWGnCli1xalqM9N/KhWm7/+zjE1wMHHKMibAxCwZApIkmDDPlRMSUKUueM1zpihXtmJnFMR9c/FUmtpU8z82wP4tcWtnXxa/+v6Y/+9QH9n64ippPyNKglWcbrnUKFuDWkK3+/9/H/v//1fAVTJHizx3Ng6y5meGkimIoKSgQtBoKASOUcSSYkSSeUQ0JQVEQdlj0FSoKqBqDTwVrdwafwVcp4i/xF//1PET9Z2WiJ+s7/neIqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6gMMnP8OLCDvgXghokqwUAGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+zjE6gAU3XUYGYeACN6EGouMMACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",win:"data:audio/mpeg;base64,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"};var fm="data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==",Ue=null,el=!1;function ih(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}}function sh(){ih(),el=!0;try{if(Ue||(Ue=document.createElement("audio"),Ue.src=fm,Ue.loop=!0,Ue.preload="auto",Ue.setAttribute("playsinline",""),Ue.setAttribute("webkit-playsinline",""),Ue.setAttribute("x-webkit-airplay","deny"),Ue.volume=.01,Ue.addEventListener("pause",()=>{el&&!document.hidden&&setTimeout(()=>el&&Ue.paused&&Ue.play().catch(()=>{}),300)})),Ue.paused){let i=Ue.play();i&&i.catch&&i.catch(()=>{})}}catch{}}function rh(i,t){ih();try{i.addEventListener("statechange",()=>{i.state==="interrupted"&&!t()&&!document.hidden&&i.resume().catch(()=>{})})}catch{}}var In=i=>440*Math.pow(2,(i-69)/12),Rr=class{constructor(){this.ctx=null,this.muted=!1,this.tune=null,this.bed=null}unlock(){if(sh(),!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;rh(e,()=>!1),this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n).connect(e.destination),this.music=e.createGain(),this.music.gain.value=.35,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master);let s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noiseBuf=s,this.nextBeat=0,this._timer=setInterval(()=>this._schedule(),40),this.bedName&&this.setBed(this.bedName)}if(this.ctx.state!=="running"){try{let t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}catch{}try{let t=new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAACAgICA");t.volume=.01,t.play().catch(()=>{})}catch{}this.ctx.resume()}}get on(){return!!this.ctx&&this.ctx.state==="running"}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}dispose(){if(clearInterval(this._timer),this.setBed(null),this.ctx)try{this.ctx.close()}catch{}this.ctx=null}tone(t,e,n,s,r,a=this.sfx,o=.005){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.value=e;let h=l.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s),c.connect(h).connect(a),c.start(n),c.stop(n+s+.05)}noise(t,e,n,s="lowpass",r=1e3,a=1,o=this.sfx,l){let c=this.ctx;if(!c)return;let h=c.createBufferSource();h.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),l&&u.frequency.exponentialRampToValueAtTime(l,t+e),u.Q.value=a;let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(n,t+Math.min(.03,e/3)),d.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(u).connect(d).connect(o),h.start(t,Math.random()),h.stop(t+e+.05)}slide(t,e,n,s,r,a,o=this.sfx){let l=this.ctx;if(!l)return;let c=l.createOscillator();c.type=t,c.frequency.setValueAtTime(e,s),c.frequency.exponentialRampToValueAtTime(n,s+r);let h=l.createGain();h.gain.setValueAtTime(1e-4,s),h.gain.exponentialRampToValueAtTime(a,s+.02),h.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(h).connect(o),c.start(s),c.stop(s+r+.05)}setBed(t){this.bedName=t;let e=this.ctx;if(!e)return;if(this.bed){let l=this.bed;l.g.gain.setTargetAtTime(1e-4,e.currentTime,.2),setTimeout(()=>{try{l.s.stop(),l.lfo.stop()}catch{}},900),this.bed=null}if(!t)return;let n=e.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=e.createBiquadFilter();s.type=t==="wind"?"bandpass":"lowpass",s.frequency.value=t==="wind"?420:520,s.Q.value=t==="wind"?1.4:.6;let r=e.createGain();r.gain.value=1e-4;let a=e.createOscillator();a.frequency.value=t==="wind"?.12:.17;let o=e.createGain();o.gain.value=t==="wind"?.03:.045,a.connect(o).connect(r.gain),n.connect(s).connect(r).connect(this.sfx),n.start(),a.start(),r.gain.setTargetAtTime(t==="wind"?.06:.07,e.currentTime,.5),this.bed={s:n,g:r,lfo:a,f:s}}setTune(t){this.tune=t,this.nextBeat=0,this.loopStart=null}_schedule(){let t=this.ctx;if(!t||t.state!=="running"||!this.tune||this.muted)return;let e=this.tune,n=60/e.tempo;this.loopStart==null&&(this.loopStart=t.currentTime+.1);let s=t.currentTime+.25;for(;this.loopStart+this.nextBeat*n<s;){let r=this.nextBeat%e.beats,a=this.loopStart+this.nextBeat*n;if(a<t.currentTime-.5){this.loopStart=t.currentTime+.1,this.nextBeat=0;break}for(let[o,l,c]of e.notes)Math.abs(o-r)<1e-6&&this.tone(e.wave||"triangle",In(l),a,c*n*1.4,e.vol||.12,this.music,.01);this.nextBeat+=.5}}};var pm={jungle:{tempo:112,beats:16,wave:"triangle",vol:.07,notes:[[0,62,1],[1,65,1],[2,69,1],[3,65,1],[4,60,1],[5,64,1],[6,67,1],[7,64,1],[8,62,1],[9,65,1],[10,69,1],[11,72,1],[12,71,2],[14,67,2],[0,38,2],[4,36,2],[8,38,2],[12,43,2]]},swamp:{tempo:84,beats:16,wave:"sine",vol:.11,notes:[[0,57,2],[2,60,1],[3,63,1],[4,57,2],[6,56,2],[8,55,2],[10,58,1],[11,62,1],[12,60,3],[0,33,4],[8,31,4]]},volcano:{tempo:128,beats:16,wave:"sawtooth",vol:.045,notes:[[0,45,1],[1,45,1],[2,48,1],[3,45,1],[4,51,1],[5,50,1],[6,48,1],[7,45,1],[8,45,1],[9,45,1],[10,52,1],[11,50,1],[12,48,1],[13,46,1],[14,45,2],[0,33,2],[4,33,2],[8,31,2],[12,28,2]]}},Xi=class extends Rr{setMode(t){if(this.level=t,clearInterval(this._amb),t==null){this.setBed(null),this.setTune(null);return}let e=["jungle","swamp","volcano"][t];this.setBed(e==="volcano"?"wind":e==="swamp"?"waves":"wind"),this.setTune(pm[e]),this._amb=setInterval(()=>this._ambience(e),650)}_ambience(t){let e=this.ctx;if(!e||e.state!=="running"||this.muted)return;let n=e.currentTime,s=Math.random();if(t==="jungle"){if(s<.45){let r=1800+Math.random()*1400;this.slide("sine",r,r*1.4,n,.09,.035),this.slide("sine",r*1.3,r,n+.12,.09,.03)}else if(s<.7)for(let r=0;r<6;r++)this.tone("square",3200,n+r*.035,.02,.012)}else if(t==="swamp")if(s<.55){let r=200+Math.random()*300;this.slide("sine",r,r*2.2,n,.12,.05)}else s<.75&&(this.slide("square",140,90,n,.18,.025),this.slide("square",150,80,n+.2,.15,.02));else s<.5&&(this.noise(n,.9,.12,"lowpass",160,1,this.sfx,60),s<.15&&this.noise(n+.3,.05,.05,"highpass",3e3))}play(t,e=1){let n=this.ctx;if(!n||n.state!=="running"||this.muted)return;let s=n.currentTime;switch(t){case"stomp":{let r=Math.min(1,e);this.slide("sine",120-r*60,40,s,.12+r*.12,.08+r*.2),this.noise(s,.08+r*.1,.03+r*.08,"lowpass",300-r*150);break}case"chomp":this.noise(s,.09,.14,"bandpass",1200,2),this.slide("square",400,120,s,.1,.07),this.tone("triangle",In(84),s+.08,.1,.07);break;case"pounce":this.noise(s,.28,.12,"bandpass",700,1,this.sfx,2200),this.slide("triangle",200,520,s,.2,.08);break;case"bump":this.noise(s,.25,.2,"lowpass",900,1,this.sfx,200),this.slide("sawtooth",220,70,s,.25,.1);break;case"evolve":[0,4,7,12,16,19,24].forEach((r,a)=>this.tone("triangle",In(60+r),s+a*.09,.5,.15)),this.slide("sawtooth",90,45,s,.5,.12),this.noise(s+.6,.4,.1,"highpass",4e3);break;case"roar":this.slide("sawtooth",140,55,s,.9,.2),this.slide("square",100,40,s,.9,.1),this.noise(s,.9,.16,"bandpass",500,1.5,this.sfx,150);break;case"growl":this.slide("sawtooth",110,70,s,.35,.09),this.noise(s,.3,.06,"bandpass",400,2);break;case"alert":this.tone("square",520,s,.08,.06),this.tone("square",410,s+.1,.1,.06);break;case"telegraph":this.slide("triangle",200,420,s,.5,.09);break;case"fire":this.noise(s,.5,.18,"bandpass",900,1,this.sfx,300),this.slide("sawtooth",300,100,s,.4,.08);break;case"bossHit":this.noise(s,.4,.2,"lowpass",1400),[0,5,9].forEach((r,a)=>this.tone("square",In(72+r),s+a*.06,.2,.09));break;case"win":[0,4,7,12,16,19,24,28].forEach((r,a)=>this.tone("triangle",In(66+r),s+a*.11,.6,.14));break;case"star":this.tone("triangle",In(84),s,.3,.12),this.tone("sine",In(96),s+.04,.3,.08);break;case"lose":[0,-3,-7].forEach((r,a)=>this.tone("triangle",In(64+r),s+a*.18,.4,.1));break;case"tap":this.tone("sine",700,s,.06,.08);break;default:break}}};th(Xi,nh);eh(Xi);function j(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"?n.style.cssText=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}function ah(i){let t="ar",e=!1;return{setLang:n=>{t=n==="en"?"en":"ar"},setGirl:n=>{e=!!n},getLang:()=>t,t:n=>{let s=`${n}_${e?"f":"m"}`,r=i[s]?s:n;return i[r]?i[r][t==="en"?1:0]:n},num:n=>t==="en"?String(n):String(n).replace(/[0-9]/g,s=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[s])}}function oh(i,t,e,n="#ffd23a"){return`
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
`}var Pr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Fe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},gm=new zi(-1,1,1,-1,0,1),nl=class extends Ae{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}},mm=new nl,Fn=class{constructor(t){this._mesh=new fe(mm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,gm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Yi=class extends Fe{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zn.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ms=class extends Fe{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Lr=class extends Fe{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ur=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$e}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yi(Pr),this.copyPass.material.blending=rn,this.clock=new br}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ms!==void 0&&(a instanceof ms?n=!0:a instanceof Lr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Dr=class extends Fe{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var lh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ki=class i extends Fe{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new Et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qe(r,a,{type:$e}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new qe(r,a,{type:$e});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new qe(r,a,{type:$e});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=lh;this.highPassUniforms=zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new It(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Pr;this.copyUniforms=zn.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ri,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Et,this.oldClearAlpha=1,this.basic=new ze,this.fsQuad=new Fn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ki.BlurDirectionX=new It(1,0);Ki.BlurDirectionY=new It(0,1);var ch={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Nr=class extends Fe{constructor(){super();let t=ch;this.uniforms=zn.clone(t.uniforms),this.material=new Cr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Fn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ft.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ho&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var hh={warm:{bloom:[.32,.55,.82],contrast:1.08,sat:1.12,tint:.05,vig:.38,exposure:1},fresh:{bloom:[.28,.5,.85],contrast:1.06,sat:1.1,tint:-.015,vig:.32,exposure:1},night:{bloom:[.55,.7,.7],contrast:1.12,sat:1.08,tint:-.04,vig:.5,exposure:1.05},candy:{bloom:[.4,.6,.78],contrast:1.05,sat:1.18,tint:.02,vig:.3,exposure:1},epic:{bloom:[.38,.6,.8],contrast:1.14,sat:1.1,tint:.035,vig:.45,exposure:1.02}},Am={uniforms:{tDiffuse:{value:null},contrast:{value:1.08},sat:{value:1.1},tint:{value:.04},vig:{value:.4},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},xm={warm:16773570,fresh:15136511,night:12572927,candy:16765424,epic:16769704};function vm(i,t,e,n){let s=Math.min(60,Math.max(6,(t.far||300)*.035)),r=110,a=new Float32Array(r*3),o=new Float32Array(r*3);for(let A=0;A<r;A++)a[A*3]=t.position.x+(Math.random()-.5)*2*s,a[A*3+1]=t.position.y+(Math.random()-.5)*s,a[A*3+2]=t.position.z+(Math.random()-.5)*2*s,o[A*3]=(Math.random()-.5)*.25,o[A*3+1]=.05+Math.random()*.25,o[A*3+2]=(Math.random()-.5)*.25;let l=new Ae;l.setAttribute("position",new ge(a,3));let c=document.createElement("canvas");c.width=c.height=32;let h=c.getContext("2d"),u=h.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.35,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=u,h.fillRect(0,0,32,32);let d=new Oi(c);d.colorSpace=Ie;let f=new ds({map:d,color:xm[e]||16773570,size:s*.045,transparent:!0,opacity:.75,depthWrite:!1,blending:Ri,fog:!1,sizeAttenuation:!0}),m=new mr(l,f);return m.frustumCulled=!1,m.renderOrder=999,m.name="__motes",i.add(m),{pts:m,pos:a,vel:o,R:s,N:r}}function Cm(i,t,e){let{pos:n,vel:s,R:r,N:a}=i;for(let o=0;o<a;o++)for(let l=0;l<3;l++){let c=o*3+l;n[c]+=s[c]*e*(l===1?r*.1:r*.12);let h=l===1?r*.5:r,u=n[c]-[t.position.x,t.position.y,t.position.z][l];u>h?n[c]-=2*h:u<-h&&(n[c]+=2*h)}i.pts.geometry.attributes.position.needsUpdate=!0}var ym={start:3,good:6,combo:2,oops:4,near:2,win:3,lose:3,idle:2},Im=/فزت|مبروك|كسبت|فاز|انتصر|أحسنت|برافو|🏆|WIN|Victory|Congrat|You won/i,_m=/خسر|حاول تاني|حاول مرة|انتهت|معلش|Game over|Try again|Failed/i;function Mm(i,t){if(!i||i.__cheer)return;i.__cheer=!0;let e=new URL("../_voice/",location.href).href,n={},s=null,r=0,a=performance.now(),o=!1,l=0,c=!1,h=g=>{if(!n[g]){let p=new Audio(`${e}${g}_${t}.mp3`);p.preload="auto",p.volume=.95,n[g]=p}return n[g]},u=(g,p)=>{let b=performance.now();if(!p&&b-r<6e3||c)return;let y=g+(1+Math.floor(Math.random()*ym[g])),x=h(y);c=!0,r=b,x.currentTime=0;let T=()=>{c=!1};x.onended=T,x.onerror=T;let S=x.play();S&&S.catch&&S.catch(T),setTimeout(T,4e3)},d=()=>{try{s=s||new(window.AudioContext||window.webkitAudioContext);let g=s.createOscillator(),p=s.createGain();g.type="sine",g.frequency.setValueAtTime(520,s.currentTime),g.frequency.exponentialRampToValueAtTime(900,s.currentTime+.08),p.gain.setValueAtTime(.08,s.currentTime),p.gain.exponentialRampToValueAtTime(.001,s.currentTime+.12),g.connect(p),p.connect(s.destination),g.start(),g.stop(s.currentTime+.13)}catch{}},f=()=>{a=performance.now(),d(),o||(o=!0,u("start",!0))};i.addEventListener("pointerdown",f,{passive:!0}),window.addEventListener("keydown",f,{passive:!0});let m="";new MutationObserver(()=>{if(!o)return;let g=(i.innerText||"").slice(0,600);g!==m&&(m=g,Im.test(g)?u("win",!1):_m.test(g)&&u("lose",!1))}).observe(i,{childList:!0,subtree:!0}),setInterval(()=>{let g=performance.now();!o||document.hidden||(g-a>14e3?(u("idle",!1),a=g-4e3):g-r>22e3&&(l++,u(l%5===0?"combo":"good",!1)))},2500)}function uh(i,t={}){let e=new URLSearchParams(typeof location!="undefined"?location.search:"");if(e.has("nopolish"))return i;let n=hh[e.get("look")||t.preset||"warm"]||hh.warm,s=e.has("low")||!!t.low,r=e.has("rec"),a=i.render.bind(i),o=new WeakMap,l=performance.now(),c=null,h=null,u=null,d=null,f=0,m=0,A=0,g=!1,p=performance.now();function b(y,x){let T=i.getSize(new It);f=T.x,m=T.y,A=i.getPixelRatio(),c=new Ur(i),c.setPixelRatio(A),c.setSize(f,m),h=new Dr(y,x),c.addPass(h),s||(u=new Ki(new It(Math.max(2,f>>1),Math.max(2,m>>1)),n.bloom[0],n.bloom[1],n.bloom[2]),c.addPass(u)),c.addPass(new Nr),d=new Yi(Am),d.uniforms.contrast.value=n.contrast,d.uniforms.sat.value=n.sat,d.uniforms.tint.value=n.tint,d.uniforms.vig.value=n.vig,c.addPass(d)}return i.render=function(y,x){if(g||i.getRenderTarget()!==null||i.autoClear===!1||!y||!x||!y.isScene)return a(y,x);try{c||b(y,x);let T=i.getSize(new It),S=i.getPixelRatio();(T.x!==f||T.y!==m||S!==A)&&(f=T.x,m=T.y,A=S,c.setPixelRatio(S),c.setSize(f,m),u&&u.resolution.set(Math.max(2,f>>1),Math.max(2,m>>1))),h.scene=y,h.camera=x,d.uniforms.time.value=(performance.now()-p)/1e3;let E=performance.now(),L=Math.min(.1,Math.max(0,(E-l)/1e3));if(l=E,!e.has("nomotes")&&t.motes!==!1){let _=o.get(y);_||(_=vm(y,x,e.get("look")||t.preset||"warm",r),o.set(y,_)),Cm(_,x,L)}g=!0,c.render(),g=!1}catch(T){g=!1,typeof console!="undefined"&&console.warn("[polish] disabled:",T&&T.message),i.render=a,a(y,x)}},!e.has("nocheer")&&!r&&setTimeout(()=>Mm(i.domElement.parentElement&&i.domElement.parentElement.parentElement||document.body,e.get("voice")||t.voice||"puck"),0),i.__polish={preset:n,rec:r},i}var bm={title:["\u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u0635\u063A\u064A\u0631 \u064A\u0643\u0628\u0631","DINO GROW"],play:["\u0627\u0644\u0639\u0628","PLAY"],levels:["\u0627\u0644\u0645\u0631\u0627\u062D\u0644","LEVELS"],settings:["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","SETTINGS"],quit:["\u062E\u0631\u0648\u062C","QUIT"],back:["\u0631\u062C\u0648\u0639","Back"],paused:["\u0627\u0633\u062A\u0631\u0627\u062D\u0629","PAUSED"],resume:["\u0643\u0645\u0651\u0644","RESUME"],restart:["\u0625\u0639\u0627\u062F\u0629","RESTART"],home:["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","HOME"],sound:["\u0627\u0644\u0635\u0648\u062A","Sound"],tapSound:["\u{1F50A} \u062F\u0648\u0633 \u0647\u0646\u0627 \u0639\u0634\u0627\u0646 \u0627\u0644\u0635\u0648\u062A","\u{1F50A} Tap here for sound"],select:["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0631\u062D\u0644\u0629","SELECT LEVEL"],locked:["\u062E\u0644\u0651\u0635 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627","Finish the level before"],how:["\u0627\u0633\u062D\u0628 \u0628\u0625\u0635\u0628\u0639\u0643 \u0639\u0634\u0627\u0646 \u062A\u062A\u062D\u0631\u0643\u060C \u0648\u0632\u0631\u0627\u0631 \u0627\u0644\u0627\u0646\u0642\u0636\u0627\u0636 \u0639\u0634\u0627\u0646 \u062A\u0645\u0633\u0643 \u0627\u0644\u0647\u0631\u0628\u0627\u0646","Drag to move, and tap POUNCE to catch fast prey"],complete:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u062E\u0644\u0635\u062A! \u{1F3C6}","LEVEL COMPLETE! \u{1F3C6}"],time:["\u0627\u0644\u0648\u0642\u062A","Time"],power:["\u0627\u0644\u0642\u0648\u0629","Power"],eaten:["\u0627\u0644\u0644\u064A \u0623\u0643\u0644\u062A\u0647","Eaten"],bumps:["\u062E\u0628\u0637\u0627\u062A","Bumps"],next:["\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062C\u0627\u064A\u0629","NEXT LEVEL"],again:["\u0627\u0644\u0639\u0628 \u062A\u0627\u0646\u064A","PLAY AGAIN"],all:["\u062E\u0644\u0651\u0635\u062A \u0643\u0644 \u0627\u0644\u0645\u0631\u0627\u062D\u0644! \u0623\u0646\u062A \u0623\u0642\u0648\u0649 \u062F\u064A\u0646\u0627\u0635\u0648\u0631 \u{1F996}","You beat every level! Strongest dino! \u{1F996}"],pounce:["\u0627\u0646\u0642\u0636\u0651","POUNCE"],boss:["\u0627\u0644\u0632\u0639\u064A\u0645","BOSS"],goal:["\u0627\u0644\u0647\u062F\u0641","Goal"],next_stage:["\u0627\u0644\u062A\u0637\u0648\u0631 \u0627\u0644\u062C\u0627\u064A","Next"],max:["\u0623\u0642\u0648\u0649 \u0634\u0643\u0644!","Max form!"],h_eat:["\u0643\u064F\u0644 \u0627\u0644\u0623\u062E\u0636\u0631 \u0648\u0627\u0644\u0623\u0628\u064A\u0636 \u0639\u0634\u0627\u0646 \u062A\u0643\u0628\u0631!","Eat GREEN and WHITE to grow!"],h_red:["\u0627\u0644\u0623\u062D\u0645\u0631 \u0623\u0643\u0628\u0631 \u0645\u0646\u0643 - \u0627\u062C\u0631\u064A!","RED IS BIGGER - RUN!"],h_pounce:["\u0627\u0636\u063A\u0637 \u0627\u0646\u0642\u0636\u0651 \u0639\u0634\u0627\u0646 \u062A\u0645\u0633\u0643 \u0627\u0644\u0647\u0631\u0628\u0627\u0646!","Tap POUNCE to catch fast prey!"],h_evolve:["\u062A\u0637\u0648\u0651\u0631\u062A! \u0628\u0642\u064A\u062A","You evolved! Now a"],h_bossNeed:["\u0627\u0644\u0632\u0639\u064A\u0645 \u0642\u0648\u062A\u0647 \u0661\u0660\u0660 - \u0643\u0628\u0651\u0631 \u0627\u0644\u0623\u0648\u0644!","The boss has 100 power - grow first!"],h_bossReady:["\u0628\u0642\u064A\u062A \u0623\u0642\u0648\u0649 \u0645\u0646\u0647 - \u0639\u0636\u0651\u0647!","Stronger now - BITE the boss!"],h_stomp:["\u0627\u0637\u0644\u0639 \u0628\u0631\u0647 \u0627\u0644\u062F\u0627\u064A\u0631\u0629 \u0627\u0644\u062D\u0645\u0631\u0627!","Get out of the red circle!"],h_fire:["\u0627\u062A\u0641\u0627\u062F\u0649 \u0643\u0648\u0631 \u0627\u0644\u0646\u0627\u0631!","Dodge the fireballs!"],h_bump:["\u0622\u0647! \u062F\u0647 \u0623\u0642\u0648\u0649 \u0645\u0646\u0643","Ouch! Too strong for you!"],h_goal:["\u0643\u0628\u0651\u0631 \u0644\u062D\u062F \u0645\u0627 \u062A\u0648\u0635\u0644 \u0644\u0644\u0647\u062F\u0641","Grow until you reach the goal"],h_bossHit:["\u0628\u0631\u0627\u0641\u0648! \u0643\u0645\u0627\u0646 \u0645\u0631\u0629!","Great! Again!"],win_m:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0648\u0631!","Well done!"],win_f:["\u0634\u0637\u0648\u0648\u0648\u0648\u0648\u0631\u0629!","Well done!"],beat:["\u0627\u0647\u0632\u0645 \u0627\u0644\u0632\u0639\u064A\u0645","BEAT THE ALPHA"],beatBoss:["\u0627\u0647\u0632\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u0642","BEAT THE GIANT"],evolved:["\u062A\u0637\u0648\u0651\u0631\u062A!","EVOLVED!"],defeated:["\u0647\u0632\u0645\u062A\u0647!","DEFEATED!"],dragMove:["\u0627\u0633\u062D\u0628 \u0639\u0634\u0627\u0646 \u062A\u062A\u062D\u0631\u0643","DRAG TO MOVE"],h_alpha:["\u0627\u0644\u0632\u0639\u064A\u0645 \u0638\u0647\u0631! \u0643\u0628\u0651\u0631 \u0639\u0634\u0627\u0646 \u062A\u0647\u0632\u0645\u0647","THE ALPHA IS HERE! Grow to beat it"],h_alphaWeak:["\u0628\u0642\u064A\u062A \u0623\u0642\u0648\u0649 \u0645\u0646\u0647 - \u0627\u0645\u0633\u0643\u0647!","You are stronger - catch it!"]},gt=ah(bm),ph={jungle:{sky:10479871,fog:12579071,ground:5025340,patch:3971632,sun:16773832,hemi:[16777215,6986328]},swamp:{sky:11850912,fog:10271888,ground:3960392,patch:3037754,sun:15265984,hemi:[15794144,4876880]},volcano:{sky:6958634,fog:8010288,ground:4074542,patch:2891296,sun:16756848,hemi:[16765096,5910576]}},il={beetle:1.7,egg:1.5,frog:1.5,biped:.95,quad:.8},nt={sphere:new vr(.5,12,9),cyl:new fs(.5,.5,1,10),box:new ei(1,1,1),cone:new Ar(.5,1,8)},Zi=new Map,Yt=(i,t=0)=>{let e=`${i}|${t}`;return Zi.has(e)||Zi.set(e,new ps({color:i,emissive:t})),Zi.get(e)},As=(i,t=1)=>{let e=`b${i}|${t}`;return Zi.has(e)||Zi.set(e,new ze({color:i,transparent:t<1,opacity:t,depthWrite:t>=1})),Zi.get(e)};function wt(i,t,e,n,s,r=1,a=1,o=1){let l=new fe(i,t);return l.position.set(e,n,s),l.scale.set(r,a,o),l}var Qi=(i,t)=>{let e=new Et(i);return e.multiplyScalar(t),e.getHex()};function hl(i,t,e,n,s){let r=t.eyeS||1;for(let a of[-1,1])i.add(wt(nt.sphere,Yt(16777215,3355443),a*s,e,n,.34*r,.4*r,.3*r)),i.add(wt(nt.sphere,Yt(t.eye||1118481,t.eyeGlow||0),a*s,e-.01,n+.1*r,.17*r,.22*r,.14*r))}function gh(i,t,e,n,s,r){for(let a=0;a<s;a++){let o=wt(nt.cone,Yt(16777215),-n/2+n/(s-1)*a,t,e,r,r*1.3,r);o.rotation.x=Math.PI,i.add(o)}}function mh(i,t,e,n,s,r){let a=[],o=i,l=.8,c=n,h=e;for(let u=0;u<r;u++){let d=new Gt;d.position.set(0,u?0:h,u?-s:c),o.add(d),d.add(wt(nt.sphere,Yt(u%2&&t.b2||t.c),0,0,-s*.45,l,l*.8,s*1.3)),a.push(d),o=d,l*=.68}if(t.club){let u=new Gt;u.position.set(0,0,-s),o.add(u),u.add(wt(nt.sphere,Yt(t.s||9079434),0,0,-.3,.8,.7,.8));for(let d of[-1,1])u.add(wt(nt.cone,Yt(14540253),d*.4,0,-.3,.2,.4,.2).rotateZ(-d*Math.PI/2))}return a}function Sm(i){let t=new Gt,e=new Gt;t.add(e);let n=Yt(i.c),s=Yt(i.b||i.c);e.add(wt(nt.sphere,n,0,1.2,0,1.1,1,1.6)),e.add(wt(nt.sphere,s,0,1.05,.18,.9,.7,1.3));let r=new Gt;r.position.set(0,1.78,.82),r.scale.setScalar(i.big||1),e.add(r),r.add(wt(nt.sphere,n,0,0,0,.95,.85,1)),r.add(wt(nt.sphere,n,0,-.1,.5,.65,.5,.75)),r.add(wt(nt.sphere,Yt(Qi(i.c,.7)),0,.05,.85,.12,.08,.08));let a=new Gt;if(a.position.set(0,-.2,.2),r.add(a),a.add(wt(nt.sphere,s,0,-.03,.32,.55,.2,.72)),i.teeth&&gh(a,.08,.5,.4,4,.1),hl(r,i,.2,.3,.3),i.crest)for(let c=0;c<4;c++)r.add(wt(nt.cone,Yt(i.s||16765498),0,.5-c*.08,-.15-c*.18,.18,.5-c*.07,.18));if(i.horns)for(let c of[-1,1]){let h=wt(nt.cone,Yt(16051408),c*.35,.5,.05,.22,.7,.22);h.rotation.z=-c*.35,r.add(h)}if(i.sail)for(let c=0;c<6;c++)e.add(wt(nt.box,Yt(i.s||16751162),0,1.75+Math.sin(c*.5)*.4,.5-c*.32,.12,.8+Math.sin(c*.5)*.5,.3));if(i.spikes)for(let c=0;c<5;c++)e.add(wt(nt.cone,Yt(i.s||16765498,i.glow||0),0,1.75-c*.04,.5-c*.3,.28,.5,.28));let o=mh(e,i,1.15,-.65,.65,3),l=[];for(let c of[-1,1]){let h=new Gt;h.position.set(c*.42,.95,-.05),e.parent===t&&t.add(h),h.add(wt(nt.sphere,n,0,-.2,0,.55,.75,.65),wt(nt.cyl,n,0,-.55,.05,.3,.5,.3),wt(nt.box,Yt(Qi(i.c,.8)),0,-.82,.18,.4,.2,.6)),l.push(h);let u=wt(nt.cyl,n,c*.55,1.2,.8,.14,.4,.14);u.rotation.x=.9,e.add(u)}return Object.assign(t,{userData:{m:"biped",body:e,head:r,jaw:a,tail:o,legs:l,ph:Math.random()*6,o:i,top:3*(i.big?.95+i.big*.1:1)}})}function Em(i){let t=new Gt,e=new Gt;t.add(e);let n=Yt(i.c),s=Yt(i.b||i.c),r=i.low?.55:1;e.add(wt(nt.sphere,n,0,1*r+.2,0,1.2,1*r+.1,2)),e.add(wt(nt.sphere,s,0,.85*r+.2,.1,1,.7*r+.1,1.7));let a=new Gt;if(a.position.set(0,i.neck?2.7:1.1*r+.3,i.neck?1.5:1.35),e.add(a),i.neck){let u=wt(nt.cyl,n,0,1.75,1.25,.5,1.9,.5);u.rotation.x=.5,e.add(u)}a.add(wt(nt.sphere,n,0,0,0,.8,.7,.85));let o=i.longSnout?1.5:.7;a.add(wt(nt.sphere,n,0,-.1,.4+(o-.7)*.3,.55,.38,o));let l=new Gt;if(l.position.set(0,-.2,.1),a.add(l),l.add(wt(nt.sphere,s,0,-.02,.3+(o-.7)*.3,.5,.16,o*.9)),i.teeth&&gh(l,.08,.4+(o-.7)*.3,.35,4,.08),hl(a,i,.18,.28,.28),i.horns){for(let d of[-1,1]){let f=wt(nt.cone,Yt(16051408),d*.3,.3,.45,.16,.9,.16);f.rotation.x=.9,a.add(f)}a.add(wt(nt.cone,Yt(16051408),0,0,.85,.2,.4,.2).rotateX(1.2));let u=wt(nt.cyl,Yt(i.s||16751162),0,.35,-.3,1.5,.12,1.3);u.rotation.x=-.9,a.add(u)}if(i.plates)for(let u=0;u<7;u++)e.add(wt(nt.cone,Yt(i.s||16751162),u%2?.08:-.08,1.75-Math.abs(u-3)*.12,.8-u*.27,.34,.75-Math.abs(u-3)*.05,.1));if(i.armor)for(let u=0;u<5;u++)for(let d of[-1,1])e.add(wt(nt.sphere,Yt(u%2?i.s:Qi(i.s,.8)),d*.42,1.4-Math.abs(u-2)*.05,.7-u*.4,.62,.4,.5));let c=mh(e,i,1*r+.2,-.9,.7,3),h=[];for(let[u,d]of[[-1,1],[1,-1],[1,1],[-1,-1]]){let f=new Gt;f.position.set(u*.55,.7*r+.1,d*.7),t.add(f),f.add(wt(nt.cyl,n,0,-.3*r,0,.42,.7*r+.1,.42),wt(nt.box,Yt(Qi(i.c,.8)),0,-.62*r,.1,.46,.18,.56)),h.push(f)}return Object.assign(t,{userData:{m:"quad",body:e,head:a,jaw:l,tail:c,legs:h,ph:Math.random()*6,o:i,top:i.neck?4:2.3}})}function wm(i){let t=new Gt,e=new Gt;t.add(e),e.add(wt(nt.sphere,Yt(i.c,i.glow||0),0,.4,0,.9,.6,1.1),wt(nt.sphere,Yt(Qi(i.c,.6)),0,.35,.55,.5,.4,.4));for(let s of[-1,1]){e.add(wt(nt.sphere,Yt(16777215),s*.14,.5,.75,.16,.16,.16));for(let[r,a]of[[0,.25],[1,0],[2,-.25]])e.add(wt(nt.sphere,Yt(i.s||2236962),s*.2,.62,a,.18,.1,.18))}let n=[];for(let s=0;s<6;s++){let r=new Gt,a=s%2?1:-1;r.position.set(a*.4,.25,-.3+Math.floor(s/2)*.3),r.add(wt(nt.cyl,Yt(2236962),a*.2,0,0,.45,.06,.06).rotateZ(0)),t.add(r),n.push(r)}return Object.assign(t,{userData:{m:"beetle",body:e,legs:n,tail:[],ph:Math.random()*6,o:i,top:.9}})}function Tm(i){let t=new Gt,e=new Gt;t.add(e),e.add(wt(nt.sphere,Yt(i.c,i.glow||0),0,.7,0,1,1.35,1));for(let n=0;n<7;n++){let s=n*2.4,r=.35+n%4*.28,a=.46*Math.sqrt(1-Math.pow((r-.7)/.68,2));{let o=wt(nt.sphere,Yt(i.s,i.glow||0),Math.sin(s)*a,r,Math.cos(s)*a,.22,.22,.12);o.lookAt(Math.sin(s)*3,r,Math.cos(s)*3),e.add(o)}}return Object.assign(t,{userData:{m:"egg",body:e,legs:[],tail:[],ph:Math.random()*6,o:i,top:1.9}})}function qm(i){let t=new Gt,e=new Gt;t.add(e),e.add(wt(nt.sphere,Yt(i.c),0,.55,0,1.2,.9,1.3),wt(nt.sphere,Yt(i.b),0,.42,.12,.95,.6,1));let n=new Gt;n.position.set(0,.7,.55),e.add(n),hl(n,{eyeS:1.5},.42,.1,.3);let s=[];for(let r of[-1,1]){let a=new Gt;a.position.set(r*.55,.4,-.3),a.add(wt(nt.sphere,Yt(i.c),0,0,-.2,.5,.45,.9)),t.add(a),s.push(a)}return Object.assign(t,{userData:{m:"frog",body:e,head:n,legs:s,tail:[],ph:Math.random()*6,o:i,top:1.9}})}var sl={beetle:{m:"beetle",c:3844154},mudbug:{m:"beetle",c:8018490,s:3811866},emberbug:{m:"beetle",c:15227418,glow:8396800,s:16765498},egg:{m:"egg",c:16051408,s:5814360},swampEgg:{m:"egg",c:13625552,s:3836522},lavaEgg:{m:"egg",c:3811882,s:16738842,glow:5249024},compy:{m:"biped",c:15913530,b:16774336,big:1.3,eyeS:1.3},dodo:{m:"biped",c:11569754,b:15257768,big:1.25,eyeS:1.3},stego:{m:"quad",c:10143818,b:14741672,plates:!0,s:16751162,eyeS:1.2},trike:{m:"quad",c:6990040,b:14216447,horns:!0,s:16751162},raptorRed:{m:"biped",c:14170682,b:16765088,teeth:!0,eye:1118481,big:1.1,crest:!0,s:8396832},rexJr:{m:"biped",c:13136938,b:16767136,teeth:!0,big:1.3},frog:{m:"frog",c:4900970,b:14745536},gator:{m:"quad",c:3832394,b:14215328,low:!0,longSnout:!0,teeth:!0},ankylo:{m:"quad",c:9075290,b:14207128,armor:!0,s:12099696,club:!0,low:!0},calf:{m:"quad",c:8040608,b:14742752,neck:!0,eyeS:1.2},swampRex:{m:"biped",c:3828314,b:12574912,teeth:!0,big:1.3},lizard:{m:"quad",c:15247418,b:16773296,low:!0,longSnout:!0},ankyloRed:{m:"quad",c:9058858,b:14196864,armor:!0,s:15227434,club:!0,low:!0},trikeRed:{m:"quad",c:13130298,b:16765104,horns:!0,s:16765498},spino:{m:"biped",c:2775744,b:12638463,teeth:!0,sail:!0,s:16751162,big:1.2},rex:{m:"biped",c:10103338,b:16758920,teeth:!0,big:1.35,spikes:!0,s:15255648},boss:{m:"biped",c:5904922,b:16747066,teeth:!0,big:1.25,horns:!0,spikes:!0,s:16752672,glow:8400896,eye:16769098,eyeGlow:16752640,eyeS:1.2}},Rm=[{m:"biped",c:6477900,b:15400880,big:1.45,eyeS:1.45},{m:"biped",c:2406568,b:14221296,big:1.25,eyeS:1.25,crest:!0,teeth:!0,s:16765498},{m:"biped",c:16747050,b:16770728,big:1.2,eyeS:1.15,teeth:!0,spikes:!0,s:16769098},{m:"biped",c:8016096,b:16767216,big:1.15,eyeS:1.1,teeth:!0,spikes:!0,horns:!0,s:16769098,glow:8413184}],Pm={biped:Sm,quad:Em,beetle:wm,egg:Tm,frog:qm},rl=i=>Pm[i.m](i);function al(i,t,e,n){let s=i.userData,r=Math.min(1,e/3),a=Math.sin(s.ph);s.ph+=t*(3+e*1.15);let o=Math.sin(s.ph),l=!1;r>.15&&a*o<0&&s.m!=="beetle"&&(l=!0);let c=s.legs;if(s.m==="biped")c[0].rotation.x=o*.85*r,c[1].rotation.x=-o*.85*r;else if(s.m==="quad")c[0].rotation.x=o*.7*r,c[1].rotation.x=o*.7*r,c[2].rotation.x=-o*.7*r,c[3].rotation.x=-o*.7*r;else if(s.m==="beetle")c.forEach((h,u)=>{h.rotation.y=Math.sin(s.ph*2+u*1.6)*.5*(.2+r)});else if(s.m==="frog"){let h=Math.abs(Math.sin(s.ph*.7))*r;s.body.position.y=h*.5,c.forEach(u=>{u.rotation.x=-h*.8})}if(s.m==="egg"?(s.body.rotation.z=Math.sin(n*2.2+s.ph)*.08,s.body.rotation.x=Math.cos(n*1.7+s.ph)*.05):s.m!=="frog"&&(s.body.position.y=Math.abs(o)*.09*r+Math.sin(n*2+s.ph)*.02),s.tail.forEach((h,u)=>{h.rotation.y=Math.sin(n*3-u*.9+s.ph)*(.2+.25*r)}),s.head&&(s.head.rotation.x=Math.sin(n*1.5+s.ph)*.04+(s.lift||0)*-.5+(s.bite>0?Math.sin(s.bite*9)*.25:0),s.head.position.z+=0),s.jaw){let h=s.bite>0?Math.sin(Math.min(1,s.bite/.35)*Math.PI)*.9:(s.open||0)*.7;s.jaw.rotation.x=h}return s.bite>0&&(s.bite-=t),l}var ol=new Map;function Ah(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Oi(n);return s.colorSpace=Ie,s}var Lm={green:["#9dff7a","#0a3a10"],white:["#ffffff","#1a2a3a"],red:["#ff5a4a","#3a0606"],gold:["#ffe04a","#3a2a00"],boss:["#ffb08a","#3a0606"]};function xs(i,t){let e=`${i}|${t}`;if(ol.has(e))return ol.get(e);let n=Ah(160,80,(r,a,o)=>{let[l,c]=Lm[t];r.font="900 60px Tajawal, Arial, sans-serif",r.textAlign="center",r.textBaseline="middle";let h=t==="red"?`${i}!`:i;r.lineJoin="round",r.lineWidth=12,r.strokeStyle=c,r.strokeText(h,a/2,o/2+2),r.fillStyle=l,r.fillText(h,a/2,o/2+2)}),s=new Fi({map:n,depthTest:!1,transparent:!0});return ol.set(e,s),s}var Vr={};function dh(i){return Vr[i]||(Vr[i]=Ah(64,64,t=>{if(t.fillStyle="#fff",i==="dot"){let e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"#fff"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64)}else if(i==="star"){t.beginPath();for(let e=0;e<10;e++){let n=e%2?11:29,s=e*Math.PI/5-Math.PI/2;t.lineTo(32+Math.cos(s)*n,32+Math.sin(s)*n)}t.closePath(),t.fill()}else i==="leaf"?(t.beginPath(),t.ellipse(32,32,26,13,.6,0,7),t.fill()):(t.beginPath(),t.arc(32,32,24,0,7),t.fill())})),Vr[i]}var Br=class{constructor(){this.list=[],this.o=new me}add(t,e,n,s,r,a=1,o=1,l=1,c=0,h=0,u=0){let d=this.o;d.position.set(n,s,r),d.scale.set(a,o,l),d.rotation.set(c,h,u),d.updateMatrix();let f=t.clone();f.applyMatrix4(d.matrix);let m=f.attributes.position.count,A=new Et(e),g=new Float32Array(m*3);for(let p=0;p<m;p++)g[p*3]=A.r,g[p*3+1]=A.g,g[p*3+2]=A.b;f.setAttribute("color",new ge(g,3)),this.list.push(f)}build(t){if(!this.list.length)return null;let e=new fe(Qc(this.list),t);return this.list.forEach(n=>n.dispose()),this.list=[],e}},Um=new ps({vertexColors:!0}),Dm=new ze({vertexColors:!0});function ll(i,t,e,n,s){let r=s==="swamp",a=s==="jungle"?[3119674,3978314,5752922]:[4876858,5929540,3824180];if(i.add(nt.cyl,6965802,t,1.6*n,e,.7*n,3.2*n,.7*n),r){i.add(nt.cyl,5917240,t+.5*n,3.2*n,e,.25*n,2*n,.25*n,0,0,-.8),i.add(nt.sphere,6982218,t,3.4*n,e,2.4*n,1.2*n,2.4*n);return}for(let o=0;o<3;o++)i.add(nt.sphere,a[o],t+(o-1)*.5*n,(3.4+o*.9)*n,e+(o===1?.4:-.2)*n,(3.2-o*.6)*n,(2.2-o*.2)*n,(3.2-o*.6)*n)}function fh(i,t,e,n,s){i.add(nt.sphere,s,t,n*.5,e,n*2.2,n*1.3,n*1.9,0,t),i.add(nt.sphere,Qi(s,1.15),t+n*.4,n*.8,e-n*.2,n*1.2,n*.9,n*1.1)}function Nm(i,t){let e=_e[i].id,n=_e[i].half,s=$o(i*977+5),r=ph[_e[i].look||e],a=new Gt,o=new Br,l=new Br;for(let d=0;d<26;d++){let f=(s()*2-1)*n,m=(s()*2-1)*n,A=2+s()*3.5;o.add(nt.cyl,e==="swamp"&&d%2?3111544:r.patch,f,.02+d*6e-4,m,A*2,.04,A*2)}for(let d of t.obstacles)if(d.kind==="tree"||d.kind==="stump"&&e==="swamp")if(d.kind==="tree")ll(o,d.x,d.z,d.r*.9,e);else{o.add(nt.cyl,5916214,d.x,.9,d.z,d.r*2,1.8,d.r*2),o.add(nt.cyl,9071174,d.x,1.82,d.z,d.r*1.8,.1,d.r*1.8);for(let f=0;f<3;f++)o.add(nt.sphere,[15223370,16765498,16747192][f],d.x+Math.sin(f*2.1)*d.r*.6,1.95,d.z+Math.cos(f*2.1)*d.r*.6,.5,.35,.5)}else d.kind==="pillar"?(o.add(nt.cyl,3811884,d.x,2.2,d.z,d.r*1.8,4.4,d.r*1.8),o.add(nt.cone,2760224,d.x,5,d.z,d.r*1.8,1.8,d.r*1.8),l.add(nt.cyl,16742938,d.x,1.4,d.z,d.r*1.9,.25,d.r*1.9)):fh(o,d.x,d.z,d.r,e==="volcano"?4864570:9079428);for(let d=0;d<110;d++){let f=(s()*2-1)*(n-1),m=(s()*2-1)*(n-1);Math.hypot(f,m)<2||t.obstacles.some(A=>Math.hypot(A.x-f,A.z-m)<A.r+.6)||(e==="jungle"?d%4===0?(o.add(nt.cone,3115568,f,.4,m,.5,.9,.5),o.add(nt.cone,3840568,f+.3,.3,m,.4,.7,.4)):d%4===1?(o.add(nt.cyl,3115568,f,.3,m,.06,.6,.06),o.add(nt.sphere,[16738970,16769098,16777215,11569919][d%4+d%3]||16769098,f,.65,m,.3,.3,.3)):o.add(nt.sphere,6986320,f,.12,m,.7,.3,.6):e==="swamp"?d%3===0?(o.add(nt.cyl,6982202,f,.9,m,.08,1.8,.08),o.add(nt.cyl,6965802,f,1.7,m,.2,.5,.2),o.add(nt.cyl,6982202,f+.3,.7,m,.07,1.4,.07)):d%3===1?o.add(nt.cyl,4892762,f,.07,m,1.2,.05,1.2):o.add(nt.sphere,6982234,f,.15,m,.8,.3,.7):d%3===0?l.add(nt.cyl,16738842,f,.04,m,2+s()*3,.05,1.6+s()*2.4,0,s()*3):d%3===1?fh(o,f,m,.3+s()*.4,4864570):o.add(nt.cone,2760224,f,.35,m,.4,.7,.4))}if(e==="volcano")for(let d=0;d<5;d++){let f=d*1.4+.5;l.add(nt.cyl,16747050,Math.sin(f)*(n-6),.05,Math.cos(f)*(n-6),5+s()*2,.06,4+s()*2)}for(let d=0;d<4;d++)for(let f=-n-2;f<=n+2;f+=3.2){let m=(s()-.5)*1.6,A=n+2+s()*1.5,g=d<2?d?A:-A:f+m,p=d<2?f+m:d===2?A:-A;if(e==="jungle")ll(o,g,p,1.5+s()*.8,e);else if(e==="swamp")s()<.5?ll(o,g,p,1.4+s()*.6,e):(o.add(nt.cyl,6982202,g,1.6,p,.12,3.2,.12),o.add(nt.cyl,6965802,g,3.1,p,.3,.8,.3));else{let b=3+s()*5;o.add(nt.cone,3023396,g,b/2,p,3+s()*2,b,3+s()*2),s()<.5&&l.add(nt.cone,16747050,g,b*.9,p,.9,.7,.9)}}for(let d=0;d<14;d++){let f=d/14*6.283,m=n+24+s()*10,A=8+s()*14,g=e==="jungle"?5937786:e==="swamp"?5929570:3810344;o.add(nt.cone,g,Math.sin(f)*m,A/2-1,Math.cos(f)*m,14+s()*8,A,14+s()*8),e==="volcano"&&d%3===0&&l.add(nt.cone,16742954,Math.sin(f)*m,A-1.5,Math.cos(f)*m,5,3,5)}let c=o.build(Um);c&&a.add(c);let h=l.build(Dm);h&&a.add(h);let u=new fe(new ni(400,400),Yt(r.ground));return u.rotation.x=-Math.PI/2,a.add(u),a}var cl=class{constructor(t,e,n){this.el=t,this.post=n||(()=>{}),gt.setLang(e.lang),gt.setGirl(e.gender==="girl"),this.age=Number(e.age)||5,this.girl=e.gender==="girl",this.save=$c(e.save),this.base=e.base||"./",this.sound=new Xi,this.sound.muted=!!this.save.muted,document.getElementById("dg-style")||document.head.append(j("style",{id:"dg-style"},oh("dg","#3fae4a","#17692e","#ffe04a")+`
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
@media (orientation:landscape){.dg-hint{top:calc(var(--u)*22)}.dg-bossbar{top:calc(var(--u)*15)}.dg-card{padding:calc(var(--u)*2.4) calc(var(--u)*5);gap:calc(var(--u)*1.4)}.dg-btn{min-height:calc(var(--u)*9)}.dg-title{font-size:calc(var(--u)*6.5)}.dg-logo{font-size:calc(var(--u)*7)}.dg-stars{font-size:calc(var(--u)*8)}}`)),this.root=j("div",{class:"dg-root",dir:gt.getLang()==="en"?"ltr":"rtl"}),t.append(this.root),this.layer=j("div",{class:"dg-layer"}),this.mode="menu",this.clock=0,this.shake=0,this.pops=[],this.floats=[],this.vanish=[],this.recs=new Map,this.parts=[],this.camDist=15,this.keys=new Set,this.shown=new Set,this._three(),this.root.append(this.layer),this._resize(),this.ro=new ResizeObserver(()=>this._resize()),this.ro.observe(t),this._bind(),this.last=performance.now(),this._fonts().then(()=>{this.showMenu(),this.renderer.setAnimationLoop(()=>this._frame())})}async _fonts(){try{let t=new FontFace("Tajawal",`url(${this.base}../../fonts/Tajawal-ExtraBold.ttf)`,{weight:"900"});await Promise.race([t.load().then(e=>document.fonts.add(e)),new Promise(e=>setTimeout(e,900))])}catch{}}_three(){this.renderer=uh(new dr({antialias:!0}),{preset:"warm"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Ie,this.root.prepend(this.renderer.domElement),this.scene=new pr,this.camera=new Te(48,1,.5,600),this.hemi=new _r(16777215,6986328,1.9),this.scene.add(this.hemi),this.sun=new Mr(16773832,1.5),this.sun.position.set(-12,30,10),this.scene.add(this.sun),this.stage=new Gt,this.scene.add(this.stage),this.things=new Gt,this.scene.add(this.things),this.teleDisc=new fe(new Bn(1,40),new ze({color:16722474,transparent:!0,opacity:.3,depthWrite:!1})),this.teleDisc.rotation.x=-Math.PI/2,this.teleDisc.position.y=.08,this.teleDisc.visible=!1,this.teleFill=new fe(new Bn(1,40),new ze({color:16734762,transparent:!0,opacity:.45,depthWrite:!1})),this.teleFill.rotation.x=-Math.PI/2,this.teleFill.position.y=.1,this.teleFill.visible=!1,this.teleLine=new fe(new ni(1,1).rotateX(-Math.PI/2),new ze({color:16726554,transparent:!0,opacity:.35,depthWrite:!1})),this.teleLine.position.y=.09,this.teleLine.visible=!1,this.shock=new fe(new xr(.85,1,48),new ze({color:16765056,transparent:!0,opacity:.8,side:Ze,depthWrite:!1})),this.shock.rotation.x=-Math.PI/2,this.shock.position.y=.15,this.shock.visible=!1,this.shockT=0,this.scene.add(this.teleDisc,this.teleFill,this.teleLine,this.shock),this.projMeshes=new Map,this.pool=[];for(let t=0;t<220;t++){let e=new ii(new Fi({map:dh("dot"),transparent:!0,depthWrite:!1}));e.visible=!1,this.scene.add(e),this.pool.push({sp:e,life:0})}}_resize(){let t=this.el.getBoundingClientRect();this.cw=t.width||window.innerWidth,this.ch=t.height||window.innerHeight,this.u=Math.min(this.cw,this.ch)/100,this.root.style.setProperty("--u",`${this.u}px`),this.renderer.setSize(this.cw,this.ch,!1),this.camera.aspect=this.cw/this.ch,this.camera.updateProjectionMatrix()}_bind(){let t=()=>this.sound.unlock();for(let n of["pointerdown","pointerup","touchend","click","keydown"])this.root.addEventListener(n,t,{capture:!0,passive:!0});this.root.addEventListener("pointerdown",n=>{if(n.target.closest("button")||this.mode!=="play"||this.paused||this.stick)return;let s=this.root.getBoundingClientRect();this.stick={id:n.pointerId,x0:n.clientX,y0:n.clientY,x:0,z:0},this.stickEl.style.display="block",this.stickEl.style.left=`${n.clientX-s.left}px`,this.stickEl.style.top=`${n.clientY-s.top}px`}),this.root.addEventListener("pointermove",n=>{let s=this.stick;if(!s||s.id!==n.pointerId)return;let r=this.u*9,a=n.clientX-s.x0,o=n.clientY-s.y0,l=Math.hypot(a,o);l>r&&(a=a/l*r,o=o/l*r),s.x=a/r,s.z=o/r,Math.hypot(s.x,s.z)<.12&&(s.x=0,s.z=0),this.knobEl.style.transform=`translate(${a}px,${o}px)`});let e=n=>{this.stick&&this.stick.id===n.pointerId&&(this.stick=null,this.stickEl&&(this.stickEl.style.display="none",this.knobEl.style.transform=""))};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e),this._onKey=n=>{let s=n.key.toLowerCase();this.mode==="play"&&(["arrowleft","arrowright","arrowup","arrowdown","a","d","w","s"].includes(s)?(this.keys.add(s),n.preventDefault()):s===" "?(n.preventDefault(),this.pounceQ=!0):(s==="p"||s==="escape")&&this.togglePause())},this._onKeyUp=n=>this.keys.delete(n.key.toLowerCase()),window.addEventListener("keydown",this._onKey),window.addEventListener("keyup",this._onKeyUp),this._onVis=()=>{document.hidden?(this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()):this.sound.resume()},document.addEventListener("visibilitychange",this._onVis)}_input(){let t=0,e=0,n=this.keys;(n.has("arrowleft")||n.has("a"))&&(t-=1),(n.has("arrowright")||n.has("d"))&&(t+=1),(n.has("arrowup")||n.has("w"))&&(e-=1),(n.has("arrowdown")||n.has("s"))&&(e+=1),!t&&!e&&this.stick&&(t=this.stick.x,e=this.stick.z);let s={x:t,z:e,pounce:!!this.pounceQ};return this.pounceQ=!1,s}_clear(){this.layer.replaceChildren(),this.hudReady=!1}_soundPill(){let t=j("button",{class:"dg-soundpill",onclick:()=>this.sound.unlock()},gt.t("tapSound"));this.layer.append(t);let e=()=>{this.root.isConnected&&(t.style.display=!this.sound.ctx||this.sound.on||this.sound.muted?"none":"block",setTimeout(e,600))};e()}hint(t,e=3200,n=""){this.hintEl&&(t!=="evolve"&&this.shown.has(t)||(this.shown.add(t),this.hintEl.textContent=`${gt.t(`h_${t}`)}${n}`,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e)))}plainHint(t,e=2200){this.hintEl&&(this.hintEl.textContent=t,this.hintEl.classList.add("show"),clearTimeout(this._ht),this._ht=setTimeout(()=>this.hintEl&&this.hintEl.classList.remove("show"),e))}showMenu(){this.mode="menu",this.paused=!1,this._clear(),this.sound.setMode(null),this._loadLevel(0,!0),this.layer.append(j("div",{class:"dg-dim",style:"background:rgba(5,25,10,.25)"},j("div",{class:"dg-card"},j("div",{class:"dg-logo"},"\u{1F996} ",gt.t("title")),j("div",{class:"dg-menu"},j("button",{class:"dg-btn",onclick:()=>{this.sound.play("tap"),this.start(Math.min(this.save.unlocked-1,2))}},"\u25B6 ",gt.t("play")),j("button",{class:"dg-btn dark",onclick:()=>{this.sound.play("tap"),this.showLevels()}},"\u{1F5FA}\uFE0F ",gt.t("levels")),j("button",{class:"dg-btn dark",onclick:()=>{this.sound.play("tap"),this.showSettings()}},"\u2699\uFE0F ",gt.t("settings")),j("button",{class:"dg-btn alt",onclick:()=>this.post({type:"exit"})},gt.t("quit")))))),this._soundPill()}showLevels(){this._clear();let t=gt.getLang()!=="en",e=["\u{1F334}","\u{1F40A}","\u{1F30B}","\u{1F334}","\u{1F40A}","\u{1F30B}"],n=["#5ac84a,#2a8a3a","#6a9a70,#2e5a46","#e0602a,#5a1e1e","#3f9a38,#1f6a2c","#56806a,#26463a","#c8441c,#4a1414"],s=_e.map((r,a)=>{let o=a+1>this.save.unlocked,l=this.save.stars[a]||0;return j("button",{class:`dg-env${o?" lock":""}`,style:`background:linear-gradient(180deg,${n[a].split(",")[0]},${n[a].split(",")[1]})`,onclick:()=>{if(o){this.plainHint(gt.t("locked"));return}this.sound.play("tap"),this.start(a)}},j("i",{},e[a]),j("span",{},`${gt.num(a+1)}. ${t?r.ar:r.en}`),j("span",{},o?"\u{1F512}":"\u2B50".repeat(l)+"\u2606".repeat(3-l)))});this.layer.append(j("div",{class:"dg-dim",style:"background:rgba(5,25,10,.25)"},j("div",{class:"dg-card"},j("div",{class:"dg-title"},gt.t("select")),j("div",{class:"dg-grid"},s),j("button",{class:"dg-btn dark",onclick:()=>this.showMenu()},gt.t("back"))))),this.hintEl=j("div",{class:"dg-hint"}),this.layer.append(this.hintEl),this._soundPill()}showSettings(){this._clear();let t=j("button",{class:"dg-btn",onclick:()=>{this.save.muted=!this.save.muted,this.sound.setMuted(this.save.muted),this.post({type:"save",save:this.save}),t.textContent=`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${gt.t("sound")}`,this.sound.play("tap")}},`${this.save.muted?"\u{1F507}":"\u{1F50A}"} ${gt.t("sound")}`);this.layer.append(j("div",{class:"dg-dim",style:"background:rgba(5,25,10,.25)"},j("div",{class:"dg-card"},j("div",{class:"dg-title"},"\u2699\uFE0F ",gt.t("settings")),t,j("div",{class:"dg-small"},gt.t("how")),j("button",{class:"dg-btn dark",onclick:()=>this.showMenu()},gt.t("back")))))}_hud(){let t=this.sim.L,e=gt.getLang()!=="en",n=this.sim.boss,s=t.alpha,r=j("button",{class:"dg-round","aria-label":gt.t("paused"),onclick:()=>this.togglePause()},"\u23F8");this.iconEl=j("i",{},"\u{1F95A}"),this.pwrEl=j("b",{},""),this.eatEl=j("div",{class:"dg-eat"},"0"),this.barEl=j("b",{style:"width:0%"}),this.layer.append(j("div",{class:"dg-top"},j("div",{class:"dg-badge"},"\u{1F33F}",gt.num(this.level+1)),j("div",{class:"dg-mid"},j("div",{class:"dg-power"},this.iconEl,this.pwrEl),this.eatEl),r));let a=n?n.power:s?gs[s.kind].power:0,o=n?n.power:t.goal;this.layer.append(j("div",{class:"dg-prog"},j("span",{},"\u{1F95A}"),j("div",{class:"bar"},this.barEl),j("div",{class:"dg-goalpill"},n?"\u{1F451}":"\u{1F996}",gt.num(o)))),this.beatEl=j("div",{class:"dg-beat"},`${gt.t(n?"beatBoss":"beat")} ${gt.num(a)}`.toUpperCase()),this.layer.append(this.beatEl),this.heartsEl=j("span",{},""),this.bossBar=j("div",{class:"dg-bossbar"},"\u{1F451} ",gt.t("boss")," ",gt.num(n?n.power:0)," ",this.heartsEl),this.layer.append(this.bossBar),this.alphaBar=j("div",{class:"dg-alphabar"},j("div",{class:"t"},j("span",{class:"nm"},""),j("em",{},"")),j("div",{class:"bar"},j("b"))),this.layer.append(this.alphaBar),this.arrowEl=j("div",{class:"dg-arrow"},"\u27A4"),this.layer.append(this.arrowEl),this.titleEl=j("div",{class:"dg-lvtitle show"},j("b",{},e?t.ar:t.en),j("span",{},t.sub?t.sub[e?0:1]:"")),this.layer.append(this.titleEl),setTimeout(()=>this.titleEl&&this.titleEl.classList.remove("show"),3400),this.banEl=j("div",{class:"dg-ban"},j("b",{},""),j("span",{},"")),this.layer.append(this.banEl),this.hintEl=j("div",{class:"dg-hint"}),this.layer.append(this.hintEl),this.stickEl=j("div",{class:"dg-stick"},this.knobEl=j("b")),this.layer.append(this.stickEl),this.cdEl=j("i",{},"\u{1F43E}"),this.pounceBtn=j("button",{class:"dg-pounce","aria-label":gt.t("pounce"),onpointerdown:l=>{l.stopPropagation(),this.pounceQ=!0},onclick:l=>l.preventDefault()},this.cdEl,j("span",{},gt.t("pounce").toUpperCase())),this.layer.append(this.pounceBtn),this._soundPill(),this.hudReady=!0,this._lastHud=""}banner(t,e=""){this.banEl&&(this.banEl.firstChild.textContent=t,this.banEl.lastChild.textContent=e,this.banEl.classList.remove("show"),this.banEl.offsetWidth,this.banEl.classList.add("show"))}_updateHud(){let t=this.sim,e=t.player,n=gt.getLang()!=="en",s=e.stage,r=on[s+1],a=`${e.P}|${s}|${t.boss?t.boss.hp:0}|${t.stats.eaten}|${t.alpha?1:0}`;if(a!==this._lastHud){this._lastHud=a,this.pwrEl.textContent=gt.num(Math.round(e.P)),this.iconEl.textContent=s===0?"\u{1F95A}":"\u{1F43E}",this.eatEl.textContent=gt.num(t.stats.eaten);let l=r?(e.P-on[s].at)/(r.at-on[s].at):1;if(this.barEl.style.width=`${Math.max(2,Math.min(100,l*100))}%`,t.boss&&(this.bossBar.style.display="flex",this.heartsEl.textContent="\u2764\uFE0F".repeat(t.boss.hp)+"\u{1F5A4}".repeat(t.boss.maxHp-t.boss.hp),this.beatEl.style.display="none"),t.alpha){let c=t.alpha,h=gs[c.kind];this.beatEl.style.display="none",this.alphaBar.style.display="flex",this.alphaBar.classList.toggle("red",e.P<=c.power),this.alphaBar.querySelector(".nm").textContent=(n?h.ar:h.en).toUpperCase(),this.alphaBar.querySelector("em").textContent=gt.num(c.power),this.alphaBar.querySelector(".bar b").style.width=`${Math.max(4,Math.min(100,e.P/c.power*100))}%`}else t.alphaDown&&(this.alphaBar.style.display="none")}let o=Math.max(0,e.pounceCd/1.5);this.pounceBtn.style.opacity=o>0?".75":"1",this.pounceBtn.style.filter=o>0?`grayscale(${o})`:"",this.cdEl.textContent=o>0?Math.ceil(o*1.5*10)/10+"":"\u{1F43E}"}togglePause(){this.mode==="play"&&(this.paused=!this.paused,this.paused?(this.stick=null,this.stickEl&&(this.stickEl.style.display="none"),this.pauseEl=j("div",{class:"dg-dim"},j("div",{class:"dg-card"},j("div",{class:"dg-title"},gt.t("paused")),j("button",{class:"dg-btn",onclick:()=>this.togglePause()},"\u25B6 ",gt.t("resume")),j("button",{class:"dg-btn dark",onclick:()=>this.start(this.level)},"\u{1F504} ",gt.t("restart")),j("button",{class:"dg-btn dark",onclick:()=>this.showMenu()},"\u{1F3E0} ",gt.t("home")))),this.layer.append(this.pauseEl)):this.pauseEl&&this.pauseEl.remove())}_loadLevel(t,e){this.level=t,this.sim=new qr({level:t,seed:e?3:(Date.now()&65535)+1,easy:this.age<=4}),e&&(this.sim.player.inv=1e9);for(let r of this.recs.values())this.things.remove(r.W,r.spr);this.recs.clear();for(let r of this.vanish)this.things.remove(r.W);this.vanish=[];for(let r of this.projMeshes.values())this.things.remove(r);this.projMeshes.clear(),this.stage.clear();let n=_e[t].look||_e[t].id,s=ph[n];if(this.stage.add(Nm(t,this.sim)),this.scene.background=new Et(s.sky),this.scene.fog=new fr(s.fog,38,n==="volcano"?120:150),this.hemi.color.set(s.hemi[0]),this.hemi.groundColor.set(s.hemi[1]),this.sun.color.set(s.sun),this.playerRec&&this.things.remove(this.playerRec.W,this.playerRec.spr),this._makePlayer(this.sim.player.stage),this.boss=null,this.sim.boss){let r=rl(sl.boss),a=new Gt;a.add(r);let o=wt(new Bn(1,20),As(0,.3),0,.04,0);o.rotation.x=-Math.PI/2,o.scale.setScalar(this.sim.boss.r*1.3),a.add(o),r.scale.setScalar(this.sim.boss.r*il.biped),this.things.add(a);let l=new ii(xs(gt.num(this.sim.boss.power),"boss"));l.renderOrder=10,this.things.add(l),this.boss={W:a,m:r,spr:l,pose:0,fall:0}}this.camDist=tl(this.sim.player.P),this.stats={cd:0}}_makePlayer(t){this.playerRec&&this.things.remove(this.playerRec.W,this.playerRec.spr);let e=rl(Rm[t]),n=new Gt;n.add(e);let s=wt(new Bn(1,20),As(0,.3),0,.04,0);s.rotation.x=-Math.PI/2,n.add(s);let r=new ii(xs("0","gold"));r.renderOrder=10,this.things.add(n,r),this.playerRec={W:n,m:e,sh:s,spr:r,key:""}}_creatureRec(t){let e=gs[t.kind],n=rl(sl[e.look]),s=new Gt;s.add(n);let r=wt(new Bn(1,16),As(0,.28),0,.04,0);r.rotation.x=-Math.PI/2,r.scale.setScalar(t.r*1.2),s.add(r);let a=new ii(xs(String(t.power),"white"));a.renderOrder=9,this.things.add(s,a);let o={W:s,m:n,spr:a,key:"",age:0,sc:t.r*il[sl[e.look].m]};return this.recs.set(t.id,o),o}start(t){this._clear(),this.sound.unlock(),this._loadLevel(t,!1),this.mode="play",this.paused=!1,this.shake=0,this.shown=new Set,this.pounceQ=!1,this.stick=null,this.sound.setMode(t),this._hud(),this.hint("eat",4200),this.plainHint("\u261D "+gt.t("dragMove"),2600),this.t0=performance.now(),setTimeout(()=>{this.mode==="play"&&this.level===t&&this.sim.player.P<6&&this.hint("pounce",3600)},9e3),this.sim.boss&&setTimeout(()=>this.mode==="play"&&this.hint("bossNeed",4200),4600)}_finish(t){let e=this.level,n=this.save,s=t.stars;n.stars[e]=Math.max(n.stars[e]||0,s),n.unlocked=Math.max(n.unlocked,Math.min(_e.length,e+2)),n.eaten+=t.eaten;let r=Math.round(t.time);(!n.best[e]||r<n.best[e])&&(n.best[e]=r),this.post({type:"save",save:n}),this.sound.play("win"),this.mode="over";let a=e===_e.length-1,o=Math.floor(t.time/60),l=Math.round(t.time%60),c=j("div",{class:"dg-stars"});for(let h=0;h<3;h++){let u=j("span",{class:h<s?"":"off",style:`animation-delay:${.3+h*.35}s`},"\u2B50");c.append(u),h<s&&setTimeout(()=>this.sound.play("star"),300+h*350)}this.layer.append(j("div",{class:"dg-dim"},j("div",{class:"dg-card"},j("div",{class:"dg-logo",style:"color:#7dff9a"},gt.t("complete")),j("div",{class:"dg-small"},gt.t(this.girl?"win_f":"win_m")),c,j("div",{class:"dg-row"},j("span",{},`\u23F1 ${gt.t("time")}`),j("span",{},`${gt.num(o)}:${gt.num(String(l).padStart(2,"0"))}`)),j("div",{class:"dg-row"},j("span",{},`\u26A1 ${gt.t("power")}`),j("span",{},gt.num(Math.round(t.power)))),j("div",{class:"dg-row"},j("span",{},`\u{1F356} ${gt.t("eaten")}`),j("span",{},gt.num(t.eaten))),j("div",{class:"dg-row"},j("span",{},`\u{1F4A5} ${gt.t("bumps")}`),j("span",{},gt.num(t.hits))),a?j("div",{class:"dg-small"},gt.t("all")):j("button",{class:"dg-btn",onclick:()=>this.start(e+1)},"\u25B6 ",gt.t("next")),j("button",{class:"dg-btn alt",onclick:()=>this.start(e)},"\u{1F504} ",gt.t("again")),j("button",{class:"dg-btn dark",onclick:()=>this.showMenu()},"\u{1F3E0} ",gt.t("home")))))}emit(t,e,n,s,r,a,o,l,c,h,u=0,d=0){let f=this.pool.find(A=>A.life<=0);if(!f)return;let m=f.sp.material;m.map=dh(t),m.color.set(h),m.opacity=1,m.rotation=Math.random()*6,m.needsUpdate=!0,f.sp.position.set(e,n,s),f.sp.scale.setScalar(c),f.sp.visible=!0,Object.assign(f,{life:l,max:l,vx:r,vy:a,vz:o,size:c,grav:u,grow:d})}burst(t,e,n,s,r,a,o,l,c,h=6){for(let u=0;u<r;u++){let d=Math.random()*6.283,f=Math.random()*.8+.2;this.emit(t,e,n,s,Math.sin(d)*a*f,a*(.4+Math.random()*.8),Math.cos(d)*a*f,o*(.7+Math.random()*.6),l*(.7+Math.random()*.6),c[u%c.length],h)}}_parts(t){for(let e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sp.visible=!1;continue}e.vy-=e.grav*t,e.sp.position.x+=e.vx*t,e.sp.position.y=Math.max(.05,e.sp.position.y+e.vy*t),e.sp.position.z+=e.vz*t;let n=e.life/e.max;e.sp.material.opacity=Math.min(1,n*1.6),e.sp.scale.setScalar(e.size*(1+e.grow*(1-n)))}}floatText(t,e,n,s,r="#ffe04a",a=1.1){let o=j("div",{class:"dg-float",style:`color:${r}`},t);this.layer.append(o),this.floats.push({el:o,x:e,y:n,z:s,t:0,life:a})}_floats(t){let e=new D;for(let n of this.floats){n.t+=t,e.set(n.x,n.y+n.t*2.2,n.z).project(this.camera);let s=(e.x*.5+.5)*this.cw,r=(-e.y*.5+.5)*this.ch;n.el.style.transform=`translate(${s}px,${r}px) translate(-50%,-50%)`,n.el.style.opacity=String(Math.max(0,1-n.t/n.life)),e.z>1&&(n.el.style.display="none")}this.floats=this.floats.filter(n=>n.t>=n.life?(n.el.remove(),!1):!0)}_events(t){let e=this.sim.player,n=this.playerRec;for(let s of t)switch(s.type){case"eat":{this.sound.play("chomp"),n.m.userData.bite=.35,this.burst("star",s.x,1.2,s.z,10,5,.7,.7,[16769098,16777215,16756960],4),this.burst("leaf",s.x,.8,s.z,8,4,1,.6,[7002970,3844154,10157946],5),this.floatText(`+${gt.num(s.gain)}`,s.x,2.5,s.z,"#9dff7a");let r=this.recs.get(s.id);r&&(this.recs.delete(s.id),this.things.remove(r.spr),this.vanish.push({W:r.W,t:0,x:s.x,z:s.z,sc:r.W.scale.x})),this.shake+=.08+e.r*.03;break}case"evolve":{this._makePlayer(s.stage),this.pop=1.7,this.sound.play("evolve"),this.shake+=.6,this.burst("star",e.x,2,e.z,36,9,1.2,.9,[16769098,16777215,9109482,16751328],2),this.burst("dot",e.x,1,e.z,16,6,.8,2.2,[16777215],0);let r=gt.getLang()!=="en";this.banner(gt.t("evolved"),r?on[s.stage].ar:on[s.stage].en);break}case"bump":{this.sound.play("bump"),this.shake+=.7,this.burst("star",e.x,1.5,e.z,12,6,.6,.6,[16730698,16752704],6),s.lost&&this.floatText(`-${gt.num(s.lost)}`,e.x,2.8,e.z,"#ff6a6a"),s.src!=="fire"&&s.src!=="stomp"&&this.hint("bump",2200);break}case"pounce":this.sound.play("pounce"),this.burst("puff",e.x,.3,e.z,6,3,.5,1.2,[14207136],0);break;case"alert":{(!this.alertT||this.clock-this.alertT>2)&&(this.alertT=this.clock,this.sound.play("alert"),this.hint("red",3e3)),this.floatText("\u2757",s.x,4.5,s.z,"#ff4a4a",.9);break}case"telegraph":this.sound.play("telegraph"),this.hint(s.kind==="stomp"?"stomp":"fire",2400);break;case"stomp":this.sound.play("stomp",1),this.sound.play("roar"),this.shake+=1.6,this.shockT=.55,this.shock.position.set(s.x,.15,s.z),this.shockR=s.radius,this.burst("puff",s.x,.5,s.z,26,11,.9,3.2,[13350538,10127978],0);break;case"fire":this.sound.play("fire"),this.burst("dot",s.x,3,s.z,12,7,.6,2.2,[16751146,16765498],0);break;case"bossBite":this.sound.play("bossHit"),this.sound.play("roar"),this.shake+=1.2,this.burst("star",s.x,3,s.z,28,9,1,1,[16769098,16742954,16777215],3),this.hint("bossHit",2e3),this.floatText(`\u{1F4A5} ${"\u2764\uFE0F".repeat(s.hp)}`,s.x,8,s.z,"#ffffff",1.4);break;case"bossDown":this.sound.play("roar"),this.shake+=2,this.burst("star",s.x,3,s.z,60,12,1.8,1.3,[16769098,16777215,16751328,9109482],2);break;case"alpha":{this.sound.play("roar"),this.sound.play("alert"),this.hint("alpha",3600);break}case"alphaDown":{let r=gs[s.kind],a=gt.getLang()!=="en";this.sound.play("roar"),this.shake+=1,this.banner(gt.t("defeated"),a?r.ar:r.en),this.burst("star",s.x,3,s.z,40,10,1.4,1.1,[16769098,16777215,16751328,9109482],2);break}case"complete":this._finish(s);break;default:break}}_frame(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.clock+=e;let n=this.sim,s=this.mode==="play"&&!this.paused;if(this.mode==="menu"||s){let r=s?this._input():{x:0,z:0,pounce:!1},a=n.step(e,r);s&&this._events(a)}s&&this.hudReady,this._render(e),s&&this.hudReady&&this._updateHud()}_render(t){let e=this.sim,n=e.player,s=this.clock,r=this.camDist;this.camDist+=(tl(n.P)-this.camDist)*Math.min(1,t*1.6);let a=this.camDist/24,o=this.playerRec;this.pop=Math.max(1,(this.pop||1)-t*1.4),o.W.position.set(n.x,0,n.z),o.m.rotation.y=n.face;let l=o.m,c=n.r*il.biped*this.pop;l.scale.setScalar(c),o.sh.scale.setScalar(n.r*1.25),l.userData.open=n.pounceT>0?1:0;let h=al(l,t,n.speedNow*(n.pounceT>0?.5:1),s);if(l.position.y=n.pounceT>0?Math.sin((1-n.pounceT/.32)*Math.PI)*.9:0,l.rotation.x=n.pounceT>0?-.35:0,l.visible=n.inv<=0||Math.floor(s*18)%2===0||n.inv>1e8,h&&this.mode==="play"&&!this.paused){let y=Math.min(1,n.r/3);this.shake+=(.012+.05*y*y)*(n.stage>=1?1:.5),n.stage>=1&&this.sound.play("stomp",y),this.burst("puff",n.x-Math.sin(n.face)*n.r*.5,.2,n.z-Math.cos(n.face)*n.r*.5,2+n.stage,1.5+n.r*.4,.5,.8+n.r*.5,[13350538],0)}o.spr.position.set(n.x,l.userData.top*c+.4*a,n.z),o.spr.scale.set(3.2*a,1.6*a,1);let u=String(Math.round(n.P));o.key!==u&&(o.key=u,o.spr.material=xs(gt.num(Math.round(n.P)),"gold"));let d=new Set;for(let y of e.creatures){d.add(y.id);let x=this.recs.get(y.id)||this._creatureRec(y),T=Math.hypot(y.x-n.x,y.z-n.z)>this.camDist*1.5+8;if(x.W.visible=!T,x.spr.visible=!T,T)continue;x.age=Math.min(1,x.age+t*2.5);let S=1-Math.pow(1-x.age,3);x.W.position.set(y.x,0,y.z),x.m.rotation.y=y.face,x.m.scale.setScalar(x.sc*S),x.m.userData.lift=0,x.m.userData.open=y.chase?1:0,al(x.m,t,y.speed,s);let E=Jc(y.power,n.P),L=`${E}`;x.key!==L&&(x.key=L,x.spr.material=xs(gt.num(y.power),E)),x.spr.position.set(y.x,x.m.userData.top*x.sc+.4*a,y.z),x.spr.scale.set(2.6*a,1.3*a,1)}for(let[y,x]of this.recs)d.has(y)||(this.things.remove(x.W,x.spr),this.recs.delete(y));for(let y of this.vanish){y.t+=t*3.5;let x=Math.min(1,y.t);y.W.scale.setScalar(Math.max(.001,1-x)),y.W.position.set(y.x+(n.x-y.x)*x*.6,x*1.4,y.z+(n.z-y.z)*x*.6),y.W.rotation.y+=t*12}this.vanish=this.vanish.filter(y=>y.t>=1?(this.things.remove(y.W),!1):!0);let f=e.boss,m=this.boss;if(f&&m){m.W.position.set(f.x,0,f.z),m.m.rotation.y=f.face;let y=f.tele,x=y?y.type==="stomp"?1:2:0;m.pose+=(x-m.pose)*Math.min(1,t*6);let T=Math.min(1,m.pose),S=Math.max(0,m.pose-1);if(m.m.userData.body.rotation.x=f.down?0:-.45*T,m.m.userData.lift=S,m.m.userData.open=y&&y.type==="fire"?1:0,f.down&&(m.fall=Math.min(1,m.fall+t*.8),m.m.rotation.z=m.fall*1.5,m.m.position.y=-m.fall*1.5),f.stagger>0&&(m.m.rotation.z=Math.sin(s*30)*.08),al(m.m,t,f.speedNow*2.2,s)&&this.mode==="play"&&!this.paused){let _=Math.hypot(f.x-n.x,f.z-n.z);this.shake+=Math.max(0,.25-_*.004),_<40&&this.sound.play("stomp",1)}m.spr.visible=!f.down,m.spr.position.set(f.x,12.5*a*.4+f.r*3.1,f.z),m.spr.scale.set(4*a,2*a,1),n.P>f.power&&!this.shown.has("bossReady")&&this.mode==="play"&&this.hint("bossReady",3600),this._tele(f,t)}else this._tele(null,t);let A=new Set;for(let y of e.projectiles){A.add(y.id);let x=this.projMeshes.get(y.id);x||(x=wt(nt.sphere,As(16742938),0,1,0,1.5,1.5,1.5),x.add(wt(nt.sphere,As(16769162),0,0,0,.55,.55,.55)),this.things.add(x),this.projMeshes.set(y.id,x)),x.position.set(y.x,1.1,y.z),Math.random()<.5&&this.emit("dot",y.x,1.1,y.z,0,.5,0,.5,1.4,16751146,0)}for(let[y,x]of this.projMeshes)A.has(y)||(this.things.remove(x),this.projMeshes.delete(y));if(this.shockT>0){this.shockT-=t;let y=1-this.shockT/.55;this.shock.visible=!0,this.shock.scale.setScalar(Math.max(.1,this.shockR*y)),this.shock.material.opacity=.8*(1-y)}else this.shock.visible=!1;if(this._amb=(this._amb||0)-t,this._amb<=0){this._amb=.12;let y=e.L.look||e.L.id,x=n.x+(Math.random()-.5)*this.camDist*1.8,T=n.z+(Math.random()-.5)*this.camDist*1.4;y==="volcano"?this.emit("dot",x,14,T,-.8,-3,.4,4,.5,Math.random()<.5?16751162:6969946,0):y==="swamp"?this.emit("dot",x,.2,T,0,1.2,0,2.2,.6,13625552,0,.5):this.emit("leaf",x,12,T,.6,-2.2,.3,5,.6,7002970,0)}this._parts(t),this.shake=Math.max(0,this.shake-t*3);let g=Math.min(1.5,this.shake)*.25*a*(.4+Math.min(1,n.r/3)*.6),p=this.cw<this.ch,b=this.camDist*(p?1.05:1);if(this.mode==="menu"){let y=s*.25;this.camera.position.set(n.x+Math.sin(y)*10,6.5,n.z+Math.cos(y)*10),this.camera.lookAt(n.x,1.5,n.z)}else this.camera.position.set(n.x+(Math.random()-.5)*g,b*.88,n.z+b*.46+(Math.random()-.5)*g),this.camera.lookAt(n.x,0,n.z-b*.03);if(this.sun.position.set(n.x-12,30,n.z+10),this.sun.target.position.set(n.x,0,n.z),this.sun.target.updateMatrixWorld(),this.renderer.render(this.scene,this.camera),this.arrowEl){let y=e.alpha;if(y&&this.mode==="play"){let x=new D(y.x,1,y.z).project(this.camera),T=(x.x*.5+.5)*this.cw,S=(-x.y*.5+.5)*this.ch;x.z>1&&(T=this.cw-T,S=this.ch-S);let E=this.u*6;if(T<E||T>this.cw-E||S<E*2.4||S>this.ch-E*2.4||x.z>1){let _=this.cw/2,I=this.ch/2,w=Math.atan2(S-I,T-_),F=Math.min((_-E)/Math.abs(Math.cos(w)||1e-6),(I-E*2.4)/Math.abs(Math.sin(w)||1e-6));this.arrowEl.style.display="block",this.arrowEl.style.transform=`translate(${_+Math.cos(w)*F}px,${I+Math.sin(w)*F}px) rotate(${w}rad)`}else this.arrowEl.style.display="none"}else this.arrowEl.style.display="none"}this._floats(t)}_tele(t,e){let n=t&&t.tele;if(this.teleDisc.visible=this.teleFill.visible=this.teleLine.visible=!1,!n)return;let s=Math.min(1,n.t/n.dur),r=.25+.2*Math.sin(this.clock*14);if(n.type==="stomp")this.teleDisc.visible=this.teleFill.visible=!0,this.teleDisc.position.set(t.x,.08,t.z),this.teleDisc.scale.setScalar(n.radius),this.teleDisc.material.opacity=.18+r*.5,this.teleFill.position.set(t.x,.1,t.z),this.teleFill.scale.setScalar(Math.max(.1,n.radius*s));else{this.teleLine.visible=!0;let a=26;this.teleLine.scale.set(3.4,1,a),this.teleLine.rotation.set(0,n.ang,0),this.teleLine.position.set(t.x+Math.sin(n.ang)*a/2,.09,t.z+Math.cos(n.ang)*a/2),this.teleLine.material.opacity=(n.locked?.35:.2)+r*.6}}pause(){this.sound.suspend(),this.mode==="play"&&!this.paused&&this.togglePause()}dispose(){this.renderer.setAnimationLoop(null),this.sound.dispose(),this.ro&&this.ro.disconnect(),document.removeEventListener("visibilitychange",this._onVis),window.removeEventListener("keydown",this._onKey),window.removeEventListener("keyup",this._onKeyUp),this.renderer.dispose();try{this.renderer.forceContextLoss()}catch{}this.root.remove()}},ul={start(i,t,e){let n=new cl(i,t||{},e);return ul.last=n,{dispose:()=>n.dispose(),pause:()=>n.pause()}}};window.DinoGrow=ul;var k0=ul;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
